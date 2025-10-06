#!/bin/bash
set -e

# This script analyzes a list of JavaScript files provided via stdin
# for secrets and endpoints using SecretFinder and LinkFinder.

# The directory where analysis results will be stored.
ANALYSIS_DIR="analysis_results"
ENDPOINTS_FILE="$ANALYSIS_DIR/endpoints.txt"
SECRETS_FILE="$ANALYSIS_DIR/secrets.txt"

# Create the output directory and files.
mkdir -p "$ANALYSIS_DIR"
touch "$ENDPOINTS_FILE" "$SECRETS_FILE"

echo "🔬 Starting analysis on changed JS files..."

# Read file paths from standard input.
while read -r js_file; do
  # Check if the file actually exists before trying to analyze it.
  if [ -f "$js_file" ]; then
    echo "  -> Analyzing: $js_file"

    # Run LinkFinder to find endpoints and paths.
    # The -o cli option prints results to standard output, which we redirect.
    linkfinder -i "$js_file" -o cli >> "$ENDPOINTS_FILE" || echo "⚠️ LinkFinder failed on $js_file"

    # Run SecretFinder to find potential secrets.
    secretfinder -i "$js_file" -o cli >> "$SECRETS_FILE" || echo "⚠️ SecretFinder failed on $js_file"
  else
    echo "  -> Warning: Changed file listed but not found on disk: $js_file"
  fi
done

echo "✅ Analysis complete."
echo "Endpoints logged to $ENDPOINTS_FILE"
echo "Secrets logged to $SECRETS_FILE"