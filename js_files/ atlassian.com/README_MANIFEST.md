# README - JS Manifest Lookup
------------------------------------
This manifest maps content-hash filenames to their original URLs.

The format is: `<hash>.js,<original_url>`

To find the original URL for a specific file:

    # Example: Find URL for a file starting with '9f2a'
    grep '^9f2a' manifest.csv
