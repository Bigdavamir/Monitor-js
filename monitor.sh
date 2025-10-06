#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# --- Worker Script for Parallel JS Scanning ---
# This script is designed to be run by a parallel job in the GitHub workflow.
# It reads a list of subdomains from stdin, scans them, and downloads JS files.

# 1. Input Validation: Ensure a base target domain is provided for directory structure.
TARGET_DOMAIN="$1"
if [ -z "$TARGET_DOMAIN" ];
  echo "Error: Base target domain not provided. This is needed for creating the output directory."
  echo "Usage: ./monitor.sh <base_target_domain>"
  exit 1
fi

# 2. Prepare Headers for Scanning Tools (with optional cookie)
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
WGET_ARGS="--user-agent=$USER_AGENT --quiet --no-check-certificate"
# Use an array for Katana headers for cleaner handling
KATANA_HEADER_ARGS=("-H" "User-Agent: $USER_AGENT")

if [ -n "$SESSION_COOKIE" ]; then
  echo "✅ Session cookie found. Performing authenticated scan."
  WGET_ARGS="$WGET_ARGS --header=Cookie:$SESSION_COOKIE"
  KATANA_HEADER_ARGS+=("-H" "Cookie: $SESSION_COOKIE")
else
  echo "ℹ️ No session cookie provided. Performing unauthenticated scan."
fi

# 3. Create Directory and Temporary File
# All JS files will be stored under a single directory for the main target.
# This script instance will place its findings in a directory named with its runner ID.
# The final job will consolidate these.
OUTPUT_DIR="js_files_temp/runner_${GITHUB_RUN_ID}_${GITHUB_RUN_ATTEMPT}_${MATRIX_ID:-0}"
mkdir -p "$OUTPUT_DIR"
TEMP_JS_URLS=$(mktemp)

# 4. Process Subdomains from Standard Input
echo "🚀 Starting scan on assigned subdomains..."
while read -r subdomain; do
  if [ -z "$subdomain" ]; then continue; fi
  echo "   - Scanning: https://$subdomain"
  katana -u "https://$subdomain" -d 5 -c 20 -jc -silent "${KATANA_HEADER_ARGS[@]}" >> "$TEMP_JS_URLS" || echo "⚠️ Katana failed for $subdomain, continuing..."
done

echo "🔎 Scan complete. Found $(wc -l < "$TEMP_JS_URLS") total JS file URLs (pre-unification)."

# 5. Download Unique JavaScript Files
# Deduplicate URLs before downloading
sort -u "$TEMP_JS_URLS" | while IFS= read -r url; do
  # Generate a safe, unique filename from the URL
  safe_filename=$(echo "$url" | sed -e 's|https\?://||' -e 's|/|_|g' -e 's|?.*||' -e 's|&.*||' -e 's|=.*||' | tr -c 'a-zA-Z0-9._-' '_')
  if [ -z "$safe_filename" ]; then continue; fi

  # Download the file
  wget $WGET_ARGS -O "$OUTPUT_DIR/$safe_filename.js" "$url" || echo "⚠️ Could not download: $url"
done

rm "$TEMP_JS_URLS"
echo "✅ Download process complete for this runner. Output at $OUTPUT_DIR"