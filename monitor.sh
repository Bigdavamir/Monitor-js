#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# --- Worker Script for Parallel JS Downloading & Processing (MD5 Hashing Version) ---
# This script reads JS URLs from stdin, downloads them using a safe, fixed-length filename,
# beautifies them, and keeps an index mapping the new filename to the original URL.

# 1. Input Validation: Expects the base domain as the first argument.
TARGET_DOMAIN="$1"
if [ -z "$TARGET_DOMAIN" ]; then
  echo "Error: Base target domain not provided. This is needed for creating the output directory."
  exit 1
fi

# 2. Prepare Headers for wget
# Use a standard User-Agent to avoid being blocked.
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
# Set base arguments for wget: quiet mode, no SSL cert check, and a 30-second timeout.
WGET_ARGS="--user-agent=$USER_AGENT --quiet --no-check-certificate --timeout=30"

# Add session cookie for authenticated scans if the environment variable is set.
if [ -n "$SESSION_COOKIE" ]; then
  echo "✅ Authenticated download enabled for this worker."
  WGET_ARGS="$WGET_ARGS --header=Cookie:$SESSION_COOKIE"
fi

# 3. Create Unique Output Directory and Index File
# The directory name is unique to the runner instance to prevent race conditions.
OUTPUT_DIR="js_files_temp/runner_${GITHUB_RUN_ID}_${GITHUB_RUN_ATTEMPT}_${MATRIX_ID:-0}"
mkdir -p "$OUTPUT_DIR"
INDEX_FILE="$OUTPUT_DIR/index.txt"

# Create an empty index file to ensure it exists, even if no files are downloaded.
touch "$INDEX_FILE"

echo "🚀 Starting download and processing of assigned JS URLs..."
echo "Output will be saved to: $OUTPUT_DIR"

# 4. Define the URL Processing Function with MD5 Hashing
# This function is the core logic that will be run in parallel for each URL.
process_url() {
  url="$1"
  # Ignore empty lines from stdin.
  if [ -z "$url" ]; then return; fi

  # --- CORE FIX: Generate a safe, fixed-length filename using MD5 hash ---
  # The '-n' flag for echo prevents it from adding a newline to the URL string before hashing,
  # which is critical for getting a consistent hash.
  safe_filename=$(echo -n "$url" | md5sum | awk '{print $1}')
  
  # Check if hashing produced a valid filename.
  if [ -z "$safe_filename" ]; then return; fi

  JS_FILE_PATH="$OUTPUT_DIR/$safe_filename.js"

  # Download the file using the hashed name.
  # The -O flag tells wget to save the file with the specified name.
  echo "  -> Downloading: $url"
  echo "     Saving as: $safe_filename.js"
  
  if wget $WGET_ARGS -O "$JS_FILE_PATH" "$url"; then
    # If download is successful, proceed.
    
    # Check if the downloaded file is not empty.
    if [ -s "$JS_FILE_PATH" ]; then
      # Beautify the JS file in-place for easier diffing later.
      # If js-beautify fails, it will print a warning but not stop the script.
      js-beautify -r "$JS_FILE_PATH" || echo "⚠️ js-beautify failed on $JS_FILE_PATH, leaving original."
      
      # --- MAPPING: Record the successful download in the index file ---
      # The format is "hashed_filename.js,original_url"
      echo "${safe_filename}.js,${url}" >> "$INDEX_FILE"
    else
      # If the downloaded file is empty, remove it to avoid clutter.
      rm -f "$JS_FILE_PATH"
    fi
  else
    # If wget fails, print a warning and move to the next URL.
    echo "⚠️ Could not download: $url"
  fi
}

# Export the function and variables so they can be accessed by the parallel `xargs` processes.
export -f process_url
export WGET_ARGS
export OUTPUT_DIR
export INDEX_FILE

# 5. Process URLs in Parallel
# Read URLs from standard input (piped from a previous step).
# `xargs -P 10` runs up to 10 `process_url` functions in parallel.
# `--no-run-if-empty` prevents an error if the input is empty.
# `-I {}` ensures that URLs with special characters are handled correctly.
cat | xargs -P 10 --no-run-if-empty -I {} bash -c 'process_url "$@"' _ {}

echo "✅ All parallel downloads and processing complete for this runner."
