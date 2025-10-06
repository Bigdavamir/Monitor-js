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
# -u: Target URL
# -d 5: Max crawl depth
# -jc: Crawl for JavaScript files
# -silent: Suppress banner and extraneous output
# -H: Custom header for authentication
# -o: Output file
echo "Running Katana to discover JavaScript files..."
katana -u "https://$TARGET_DOMAIN" -d 5 -jc -silent -H "$COOKIE_HEADER" -H "User-Agent: $USER_AGENT" -o discovered_js_urls.txt

echo "Katana scan complete. Found $(wc -l < discovered_js_urls.txt) potential JS files."

# 4. Download the discovered JavaScript files.
# Create the directory if it doesn't exist.
mkdir -p "$JS_FILES_DIR/$TARGET_DOMAIN"

echo "Downloading files..."
# Loop through each URL and download it with wget.
while IFS= read -r url; do
  # Use wget to download the file.
  # --header: Pass custom headers.
  # -P: Specify the directory prefix where files will be saved.
  # -N: Don't re-download files unless newer than local.
  # -q: Quiet mode.
  # --no-check-certificate: Ignore SSL certificate issues.
  # --trust-server-names: Use the server-provided filename.
  wget --header="$COOKIE_HEADER" --user-agent="$USER_AGENT" -P "$JS_FILES_DIR/$TARGET_DOMAIN" -N -q --no-check-certificate --trust-server-names "$url" || echo "Warning: Could not download $url"
done < discovered_js_urls.txt

echo "File download process complete."
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