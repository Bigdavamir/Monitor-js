#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# --- Advanced Worker Script for JS Downloading & Processing ---
# This version uses SHA256 content hashing for deduplication and filters out common libraries.
# It reads JS URLs from stdin, downloads them, and maps the content hash to the original URL(s).

# 1. Configuration
# The output directory for this runner's temporary files.
OUTPUT_DIR="js_files_temp"
mkdir -p "$OUTPUT_DIR"

# The manifest file will map content hashes to URLs.
MANIFEST_FILE="$OUTPUT_DIR/manifest.csv"
touch "$MANIFEST_FILE"

# The file containing URL patterns of libraries to ignore before downloading.
LIBS_IGNORE_FILE="libs-ignore.txt"

# 2. Prepare Headers for wget
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
WGET_ARGS="--user-agent=$USER_AGENT --quiet --no-check-certificate --tries=2 --timeout=20"
if [ -n "$SESSION_COOKIE" ]; then
  WGET_ARGS="$WGET_ARGS --header=Cookie:$SESSION_COOKIE"
fi

echo "🚀 Starting advanced download and processing with SHA256 deduplication..."
echo "Temporary output will be saved to: $OUTPUT_DIR"

# 3. Define the Advanced URL Processing Function
process_url() {
  url="$1"
  # Ignore empty lines from stdin.
  if [ -z "$url" ]; then return; fi

  # --- LAYER 1 FILTER: Pre-download URL filtering for libraries ---
  if [ -f "$LIBS_IGNORE_FILE" ]; then
    if grep -qf "$LIBS_IGNORE_FILE" <<< "$url"; then
      echo "  -> Ignoring library URL: $url"
      return
    fi
  fi

  # Use a temporary file for the download to avoid race conditions.
  TEMP_FILE=$(mktemp)
  
  echo "  -> Downloading: $url"
  if wget $WGET_ARGS -O "$TEMP_FILE" "$url"; then
    # If download is successful, proceed.
    
    # Check if the downloaded file is not empty.
    if [ -s "$TEMP_FILE" ]; then
      # --- CORE LOGIC: Generate filename from SHA256 hash of the content ---
      CONTENT_HASH=$(sha256sum "$TEMP_FILE" | awk '{print $1}')
      if [ -z "$CONTENT_HASH" ]; then rm -f "$TEMP_FILE"; return; fi
      
      FINAL_JS_PATH="$OUTPUT_DIR/${CONTENT_HASH}.js"

      # --- DEDUPLICATION STEP ---
      # Only beautify and move the file if we haven't seen this content before.
      if [ ! -f "$FINAL_JS_PATH" ]; then
        echo "     New content found. Hash: $CONTENT_HASH"
        # Beautify the JS file for easier diffing later.
        js-beautify -r "$TEMP_FILE" &>/dev/null || echo "⚠️ js-beautify failed on temp file for $url"
        # Move the processed file to its final destination.
        mv "$TEMP_FILE" "$FINAL_JS_PATH"
      else
        # If content already exists, just discard the temporary download.
        rm -f "$TEMP_FILE"
      fi
      
      # --- MAPPING: Always record the URL-to-content mapping ---
      # The format is "content_hash.js,original_url"
      echo "${CONTENT_HASH}.js,${url}" >> "$MANIFEST_FILE"
    else
      # If the downloaded file is empty, remove it.
      rm -f "$TEMP_FILE"
    fi
  else
    # If wget fails, print a warning and clean up the temp file.
    echo "⚠️ Could not download: $url"
    rm -f "$TEMP_FILE"
  fi
}

# Export the function and variables for parallel `xargs` processes.
export -f process_url
export WGET_ARGS
export OUTPUT_DIR
export MANIFEST_FILE
export LIBS_IGNORE_FILE

# 4. Process URLs in Parallel
# Read URLs from standard input.
cat | xargs -P 25 --no-run-if-empty -I {} bash -c 'process_url "$@"' _ {}

echo "✅ All parallel downloads and processing complete for this runner."
