#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# --- Worker Script for Parallel JS Downloading & Processing ---
# This script reads a list of JS URLs from stdin, downloads them,
# beautifies them, and (in a later step) will attempt to find their source maps.

# 1. Input Validation
TARGET_DOMAIN="$1"
if [ -z "$TARGET_DOMAIN" ]; then
  echo "Error: Base target domain not provided. This is needed for creating the output directory."
  exit 1
fi

# 2. Prepare Headers for wget
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
WGET_ARGS="--user-agent=$USER_AGENT --quiet --no-check-certificate"
if [ -n "$SESSION_COOKIE" ]; then
  echo "✅ Authenticated download enabled for this worker."
  WGET_ARGS="$WGET_ARGS --header=Cookie:$SESSION_COOKIE"
fi

# 3. Create Output Directory
OUTPUT_DIR="js_files_temp/runner_${GITHUB_RUN_ID}_${GITHUB_RUN_ATTEMPT}_${MATRIX_ID:-0}"
mkdir -p "$OUTPUT_DIR"

echo "🚀 Starting download and processing of assigned JS URLs..."

# 4. Process URLs from Standard Input
while read -r url; do
  if [ -z "$url" ]; then continue; fi

  # Generate a safe, unique filename from the URL
  safe_filename=$(echo "$url" | sed -e 's|https\?://||' -e 's|/|_|g' -e 's|?.*||' -e 's|&.*||' -e 's|=.*||' | tr -c 'a-zA-Z0-9._-' '_')
  if [ -z "$safe_filename" ]; then continue; fi

  JS_FILE_PATH="$OUTPUT_DIR/$safe_filename.js"

  # Download the file
  echo "  -> Downloading: $url"
  if wget $WGET_ARGS -O "$JS_FILE_PATH" "$url"; then
    # If download is successful and the file is not empty, beautify it.
    if [ -s "$JS_FILE_PATH" ]; then
      echo "     - Beautifying: $JS_FILE_PATH"
      # The -r flag replaces the file in-place.
      js-beautify -r "$JS_FILE_PATH" || echo "⚠️ js-beautify failed on $JS_FILE_PATH, leaving original."
    fi

    # --- SOURCE MAP DETECTIVE ---
    # After successfully processing a .js file, try to find its .map file.
    MAP_URL="${url}.map"
    MAP_FILE_PATH="$OUTPUT_DIR/$safe_filename.js.map"
    echo "     - Searching for source map: $MAP_URL"
    # The `|| true` prevents the script from exiting on a 404 error.
    wget $WGET_ARGS -O "$MAP_FILE_PATH" "$MAP_URL" || true
    # If the map was downloaded and is not empty, we keep it.
    if [ -s "$MAP_FILE_PATH" ]; then
        echo "       -> 🎉 Found and downloaded source map!"
    else
        # Otherwise, remove the empty file created by wget on failure.
        rm -f "$MAP_FILE_PATH"
    fi

  else
    echo "⚠️ Could not download: $url"
  fi
done

echo "✅ Download and beautification complete for this runner."