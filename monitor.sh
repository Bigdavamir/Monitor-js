#!/bin/bash
# Exit immediately if a command exits with a non-zero status.
set -e

# --- Script for Advanced JS File Monitoring ---

# 1. Input Validation: Ensure a target domain is provided.
TARGET_DOMAIN="$1"
if [ -z "$TARGET_DOMAIN" ]; then
  echo "Error: Target domain not provided."
  echo "Usage: ./monitor.sh <target_domain>"
  exit 1
fi

# 2. Secrets Validation: Ensure the session cookie is available.
if [ -z "$SESSION_COOKIE" ]; then
  echo "Error: The SESSION_COOKIE environment variable is not set."
  exit 1
fi

echo "✅ Starting JS file scan for: $TARGET_DOMAIN"

# 3. Katana Scan: Discover JS files using a deep and fast scan.
USER_AGENT="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
COOKIE_HEADER="Cookie: $SESSION_COOKIE"
TEMP_JS_URLS="discovered_js_urls.txt"


echo "🚀 Running Katana for deep JS discovery..."
katana -u "https://$TARGET_DOMAIN" -d 10 -c 50 -jc -silent -H "$COOKIE_HEADER" -H "User-Agent: $USER_AGENT" -o $TEMP_JS_URLS
# 3. Discover JavaScript files using Katana.
echo "Running Katana to discover JavaScript files..."
katana -u "https://$TARGET_DOMAIN" -d 5 -jc -silent -H "$COOKIE_HEADER" -H "User-Agent: $USER_AGENT" -o discovered_js_urls.txt

echo "🔎 Katana scan complete. Found $(wc -l < $TEMP_JS_URLS) potential JS files."

# 4. File Downloading: Download discovered files with safe filenames.
JS_DIR="js_files/$TARGET_DOMAIN"
mkdir -p "$JS_DIR"

echo "💾 Downloading files..."
while IFS= read -r url; do
  # Generate a safe filename from the URL to prevent path traversal.
  # Example: https://example.com/js/app.js -> example.com_js_app.js
  safe_filename=$(echo "$url" | sed -e 's|https\?://||' -e 's|/|_|g' -e 's|?.*||')

  # Download the file using the safe filename.
  wget --header="$COOKIE_HEADER" --user-agent="$USER_AGENT" --quiet -O "$JS_DIR/$safe_filename" "$url" || echo "⚠️ Warning: Could not download $url"
done < "$TEMP_JS_URLS"

rm "$TEMP_JS_URLS"
echo "✅ File download process complete."

# 5. Git Change Detection & Commit
echo "🔄 Checking for file changes..."
git config --global user.name "GitHub Action Bot"
git config --global user.email "action-bot@github.com"

# Stage all files in the target's directory.
git add -A "$JS_DIR/"

# Check if there are any staged changes.

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
  echo "✅ No changes detected in JavaScript files for $TARGET_DOMAIN. All clear!"
else
  echo "🚨 Changes detected! Committing and pushing updates..."

  # Commit the changes.
  COMMIT_MESSAGE="[JS Scan] Update files for $TARGET_DOMAIN"
  git commit -m "$COMMIT_MESSAGE"

  # Pull latest changes from remote before pushing to avoid conflicts.
  git pull origin main --rebase

  # Push the commit.
  git push origin main

  echo "✅ Changes pushed to the repository."

  # 6. Send Discord Notification
  if [ -z "$DISCORD_WEBHOOK_URL" ]; then
    echo "⚠️ Warning: DISCORD_WEBHOOK_URL is not set. Skipping notification."
  else
    echo "📢 Sending Discord notification..."
    COMMIT_HASH=$(git rev-parse HEAD)
    COMMIT_URL="https://github.com/$GITHUB_REPOSITORY/commit/$COMMIT_HASH"
    TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

    # Construct a rich embed payload for Discord.
    JSON_PAYLOAD=$(printf '{
      "embeds": [{
        "title": "🚨 New JavaScript Changes Detected!",
        "color": 16711680,
        "fields": [
          {
            "name": "Target Domain",
            "value": "%s",
            "inline": true
          },
          {
            "name": "Commit Link",
            "value": "[View Commit](%s)",
            "inline": true
          }
        ],
        "footer": {
          "text": "Scan completed"
        },
        "timestamp": "%s"
      }]
    }' "$TARGET_DOMAIN" "$COMMIT_URL" "$TIMESTAMP")

    # Send the notification via curl.
    curl -H "Content-Type: application/json" -X POST -d "$JSON_PAYLOAD" "$DISCORD_WEBHOOK_URL"
    echo "✅ Notification sent."
  fi
fi

echo "✅ Monitoring script finished successfully."

echo "Monitoring script finished successfully."

