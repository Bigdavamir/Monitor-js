# How to Use the JavaScript File Monitoring System

This guide explains how to set up and use the automated JavaScript file monitoring system for bug bounty hunting.

## Prerequisites

- A GitHub repository where you have placed the `monitor.sh` script and the `.github/workflows/monitor.yml` workflow file.
- A valid session cookie for the target website you wish to scan.

## Setup Instructions

There are two main configuration steps required to get the system running.

### Step 1: Set the Target Domain

You need to specify which website the system should scan.

1.  **Open the `monitor.sh` file** in your repository.
2.  **Locate the `CONFIGURATION` section** at the top of the file.
3.  **Find the `TARGET_DOMAIN` variable** and change its value from `"example.com"` to your target's domain name.

    ```bash
    # == CONFIGURATION ==
    # The target domain to scan.
    # IMPORTANT: Replace "example.com" with your actual target domain.
    TARGET_DOMAIN="your-target-domain.com"
    ```

4.  **Commit and push this change** to your repository.

### Step 2: Create the GitHub Repository Secret

To scan authenticated parts of a website, the system needs your session cookie. This must be stored securely as a GitHub Secret. **Never hardcode secrets directly in your files.**

1.  **Navigate to your GitHub repository.**
2.  Click on the **"Settings"** tab.
3.  In the left sidebar, go to **"Secrets and variables"** -> **"Actions"**.
4.  Click the **"New repository secret"** button.
5.  **Set the Name:**
    -   Name the secret `SESSION_COOKIE`. This name must be exact, as it's what the GitHub Actions workflow expects.
6.  **Set the Value:**
    -   Paste your full session cookie string into the "Value" field.
    -   The cookie string should be in the format `key1=value1; key2=value2`.
    -   **Example:** `sessionid=a1b2c3d4e5f6; csrftoken=x1y2z3...`

7.  Click **"Add secret"**.

## Running the Monitor

The system is now fully configured and will run automatically based on the schedule defined in `.github/workflows/monitor.yml` (e.g., every 2 hours).

### Manual Trigger

You can also trigger a scan manually:

1.  Go to the **"Actions"** tab in your GitHub repository.
2.  In the left sidebar, click on the **"JS File Monitoring for Bug Bounty"** workflow.
3.  You will see a message: "This workflow has a `workflow_dispatch` event trigger."
4.  Click the **"Run workflow"** dropdown button on the right, select the branch (usually `main`), and click the green **"Run workflow"** button.

## Reviewing Changes

When the monitor detects changes in any JavaScript files, it will create a new commit in your repository. You can review these changes by:

-   Checking the **commit history** of your repository.
-   Using `git diff` locally to compare file versions.

This allows you to easily spot newly added code, endpoints, or potential vulnerabilities.