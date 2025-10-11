#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# --- Ultimate Worker Script for JS Downloading, Filtering & Processing ---
# This version implements a two-layer filtering strategy (URL and content hash)
# and uses runner-isolated directories to prevent race conditions in parallel jobs.
# It reads JS URLs from stdin, downloads them, and maps content hashes to original URLs.

# 1. Input Validation & Configuration
# A base domain or identifier can be passed for context, though not strictly required by this script's logic.
TARGET_DOMAIN="$1"
if [ -z "$TARGET_DOMAIN" ]; then
  echo "Warning: Base target domain not provided, but continuing."
fi

# --- CORE FEATURE: Runner-Isolated Output Directory ---
# Create a unique temporary directory for each parallel runner to prevent race conditions.
# The directory name is based on unique GitHub Actions environment variables.
OUTPUT_DIR="js_files_temp/runner_${GITHUB_RUN_ID}_${GITHUB_RUN_ATTEMPT}_${MATRIX_ID:-0}"
mkdir -p "$OUTPUT_DIR"

# Each runner will have its own manifest file. These will be merged later.
MANIFEST_FILE="$OUTPUT_DIR/manifest.csv"
touch "$MANIFEST_FILE"

# Files for the two-layer filtering system.
LIBS_IGNORE_FILE="libs-ignore.txt" # Layer 1: Filters URLs before download.
LIBS_HASHES_FILE="libs_hashes.txt" # Layer 2: Filters content hashes after download.

# 2. Prepare Headers for wget
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
WGET_ARGS="--user-agent=$USER_AGENT --quiet --no-check-certificate --tries=2 --timeout=20"
if [ -n "$SESSION_COOKIE" ]; then
  WGET_ARGS="$WGET_ARGS --header=Cookie:$SESSION_COOKIE"
fi

echo "🚀 Starting advanced download for runner ${MATRIX_ID:-0}..."
echo "Runner-specific output will be in: $OUTPUT_DIR"

# 3. Define the Advanced URL Processing Function
process_url() {
  local url="$1"
  # Ignore empty lines.
  if [ -z "$url" ]; then return; fi

  # --- LAYER 1 FILTER: Pre-download URL filtering ---
  if [ -f "$LIBS_IGNORE_FILE" ] && grep -qf "$LIBS_IGNORE_FILE" <<< "$url"; then
    echo "  (L1) Ignoring library by URL: $url"
    return
  fi

  # Use a temporary file for the download to handle it safely.
  local TEMP_FILE
  TEMP_FILE=$(mktemp)
  # Ensure temp file is cleaned up on script exit or error.
  trap 'rm -f "$TEMP_FILE"' RETURN

  echo "  -> Downloading: $url"
  if ! wget $WGET_ARGS -O "$TEMP_FILE" "$url"; then
    echo "⚠️ Could not download: $url"
    return
  fi

  # Proceed only if the download was successful and the file is not empty.
  if [ -s "$TEMP_FILE" ]; then
    # Calculate the SHA256 hash of the file's content.
    local CONTENT_HASH
    CONTENT_HASH=$(sha256sum "$TEMP_FILE" | awk '{print $1}')
    if [ -z "$CONTENT_HASH" ]; then return; fi

    # --- LAYER 2 FILTER: Post-download content hash filtering ---
    if [ -f "$LIBS_HASHES_FILE" ] && grep -qFx "$CONTENT_HASH" "$LIBS_HASHES_FILE"; then
      echo "  (L2) Ignoring library by content hash: $CONTENT_HASH for URL $url"
      return
    fi
    
    local FINAL_JS_PATH="$OUTPUT_DIR/${CONTENT_HASH}.js"

    # --- DEDUPLICATION: Only process/save file if content is new to this runner ---
    if [ ! -f "$FINAL_JS_PATH" ]; then
      echo "     New content found. Hash: $CONTENT_HASH"
      # Beautify the JS file for easier diffing. Suppress verbose output.
      js-beautify -r "$TEMP_FILE" || echo "⚠️ js-beautify failed on temp file for $url"
      # Move the processed file to its final destination.
      mv "$TEMP_FILE" "$FINAL_JS_PATH"
    fi
    
    # --- MAPPING: Always record the URL-to-content mapping in this runner's manifest ---
    echo "${CONTENT_HASH}.js,${url}" >> "$MANIFEST_FILE"
  fi
}

# Export the function and necessary variables for parallel `xargs` processes.
export -f process_url
export WGET_ARGS
export OUTPUT_DIR
export MANIFEST_FILE
export LIBS_IGNORE_FILE
export LIBS_HASHES_FILE

# 4. Process URLs in Parallel
# Read URLs from standard input and distribute them among parallel workers.
cat | xargs -P 25 --no-run-if-empty -I {} bash -c 'process_url "$@"' _ {}

echo "✅ All parallel downloads for runner ${MATRIX_ID:-0} complete."
