#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Check for required environment variables
if [ -z "$TARGET_DOMAIN" ] || [ -z "$GITHUB_REPOSITORY" ] || [ -z "$DISCORD_WEBHOOK_URL" ]; then
  echo "Error: One or more required environment variables are not set."
  echo "Required: TARGET_DOMAIN, GITHUB_REPOSITORY, DISCORD_WEBHOOK_URL"
  exit 1
fi

echo "📢 Preparing and sending enhanced Discord notification..."
COMMIT_HASH=$(git rev-parse HEAD)
COMMIT_URL="https://github.com/$GITHUB_REPOSITORY/commit/$COMMIT_HASH"
TIMESTAMP=$(date -u +"%Y-%m-%dT%H:%M:%S.000Z")

# Start with a base JSON object for the embed.
JSON_PAYLOAD=$(printf '{
  "embeds": [{
    "title": "🚨 New JavaScript Changes Detected!",
    "color": 15158332,
    "fields": [
      {"name": "Target", "value": "%s", "inline": true},
      {"name": "Commit Link", "value": "[View Commit](%s)", "inline": true}
    ],
    "footer": {"text": "Analysis powered by SecretFinder & LinkFinder"},
    "timestamp": "%s"
  }]
}' "$TARGET_DOMAIN" "$COMMIT_URL" "$TIMESTAMP")

# Conditionally add a field for secrets if the file is not empty.
if [ -s analysis_results/secrets.txt ]; then
  CONTENT=$(head -c 950 analysis_results/secrets.txt)
  # Format the content safely for JSON, then pass to jq
  FORMATTED_CONTENT=$(printf '```\n%s\n```' "$CONTENT")
  JSON_PAYLOAD=$(echo "$JSON_PAYLOAD" | jq --arg content "$FORMATTED_CONTENT" '.embeds[0].fields += [{"name": "🕵️ Secrets Found (Snippet)", "value": $content}]')
fi

# Conditionally add a field for endpoints if the file is not empty.
if [ -s analysis_results/endpoints.txt ]; then
  CONTENT=$(head -c 950 analysis_results/endpoints.txt)
  # Format the content safely for JSON, then pass to jq
  FORMATTED_CONTENT=$(printf '```\n%s\n```' "$CONTENT")
  JSON_PAYLOAD=$(echo "$JSON_PAYLOAD" | jq --arg content "$FORMATTED_CONTENT" '.embeds[0].fields += [{"name": "🔗 Endpoints Found (Snippet)", "value": $content}]')
fi

if [ -z "$DISCORD_WEBHOOK_URL" ]; then
  echo "⚠️ DISCORD_WEBHOOK_URL not set. Skipping notification."
  echo "Payload for debugging:"
  echo "$JSON_PAYLOAD"
else
  curl -H "Content-Type: application/json" -X POST -d "$JSON_PAYLOAD" "$DISCORD_WEBHOOK_URL"
  echo "✅ Enhanced notification sent."
fi