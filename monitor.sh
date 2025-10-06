#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# == CONFIGURATION ==
# The target domain to scan.
# IMPORTANT: Replace "example.com" with your actual target domain.
TARGET_DOMAIN="example.com"

# The directory to store the downloaded JavaScript files.
# This is relative to the script's location.
JS_FILES_DIR="js_files"

# == SCRIPT LOGIC ==

# 1. Validate that the session cookie is provided.
if [ -z "$SESSION_COOKIE" ]; then
  echo "Error: The SESSION_COOKIE environment variable is not set."
  echo "Please configure it in your GitHub Repository Secrets."
  exit 1
fi

echo "Starting JS file monitoring for: $TARGET_DOMAIN"

# 2. Set up required headers for tools.
# User-Agent to mimic a real browser.
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
# Cookie header for authenticated scanning.
COOKIE_HEADER="Cookie: $SESSION_COOKIE"

# 3. Discover JavaScript files using Katana.
echo "Running Katana to discover JavaScript files..."
katana -u "https://$TARGET_DOMAIN" -d 5 -jc -silent -H "$COOKIE_HEADER" -H "User-Agent: $USER_AGENT" -o discovered_js_urls.txt

echo "Katana scan complete. Found $(wc -l < discovered_js_urls.txt) potential JS files."

# 4. Download the discovered JavaScript files.
# Create the directory if it doesn't exist.
mkdir -p "$JS_FILES_DIR/$TARGET_DOMAIN"

echo "Downloading files..."
while IFS= read -r url; do
  # --- IMPROVEMENT ---
  # Generate a safe and unique filename from the URL to prevent collisions.
  # Example: https://cdn.example.com/js/app.js -> cdn.example.com_js_app.js
  safe_filename=$(echo "$url" | sed -e 's|https\?://||' -e 's|/|_|g' -e 's|?.*$||')
  
  # Ensure the filename ends with .js if it's a valid JS file
  if [[ ! "$safe_filename" == *.js ]]; then
    safe_filename="${safe_filename}.js"
  fi

  # Use wget to download the file with the generated safe filename.
  echo "  -> Downloading $url"
  wget --header="$COOKIE_HEADER" --user-agent="$USER_AGENT" -O "$JS_FILES_DIR/$TARGET_DOMAIN/$safe_filename" -q --no-check-certificate "$url" || echo "Warning: Could not download $url"
done < discovered_js_urls.txt

echo "File download process complete."
# Clean up the temporary URL list file.
rm discovered_js_urls.txt

# 5. Track changes in the Git repository.
echo "Checking for changes and committing to Git..."

# Configure Git user
git config --global user.name "GitHub Action"
git config --global user.email "action@github.com"

# Add all changes in the JS files directory.
git add -A "$JS_FILES_DIR/"

# Check if there are any changes to commit.
if git diff --staged --quiet; then
  echo "No changes detected in JavaScript files. Nothing to commit."
else
  echo "Changes detected. Committing updates."
  COMMIT_MESSAGE="Update JS files for $TARGET_DOMAIN on $(date -u +'%Y-%m-%d %H:%M:%S UTC')"
  git commit -m "$COMMIT_MESSAGE"

  # Check if the branch exists on the remote
  if git ls-remote --exit-code --heads origin main > /dev/null 2>&1; then
      git pull origin main --rebase # Pull changes before pushing
  fi

  git push origin main
  echo "Changes pushed to the repository."
fi

echo "Monitoring script finished successfully."
