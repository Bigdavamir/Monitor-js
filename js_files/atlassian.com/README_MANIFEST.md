# README - JS Manifest Lookup
------------------------------------
This manifest maps content-hash filenames to original URLs in CSV format:
`<hash>.js,<original_url>`

To find the original URL for a given changed JS file (example: `9f2a....js`):
```bash
grep '^9f2a' manifest.csv
