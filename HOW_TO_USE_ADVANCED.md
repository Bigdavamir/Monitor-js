# How to Use the Advanced JS Monitoring System

This guide explains how to set up and use the advanced, multi-target JavaScript monitoring system. This system is designed to be powerful and flexible, allowing you to manage multiple targets with unique configurations.

## Core Concept: GitHub Environments

The key to this system is **GitHub Environments**. Each target you want to monitor (e.g., `example.com`, `api.example.org`) is configured as a separate *Environment* within your repository.

This allows you to associate a specific **domain name** and a unique **session cookie** with each target, keeping their configurations completely isolated and secure.

---

## Setup: Configuring a New Target

Follow these steps for *each* new target you want to monitor.

### Step 1: Create a GitHub Environment

1.  In your GitHub repository, go to the **Settings** tab.
2.  In the left sidebar, click on **Environments**.
3.  Click the **New environment** button.
4.  Enter a descriptive name for your target. This name is important and will be used later.
    *   **Good examples:** `example-com`, `api-target-org`
    *   **Bad examples:** `My Target`, `Test 1` (avoid spaces and special characters)
5.  Click **Configure environment**.

### Step 2: Add Environment Variables and Secrets

Now, you will add the specific configuration for the environment you just created.

1.  Scroll down to the **Environment variables** section and click **Add variable**.
    *   **Name:** `TARGET_DOMAIN`
    *   **Value:** The root domain you want to scan (e.g., `example.com`).

2.  Scroll down to the **Environment secrets** section and click **Add secret**.
    *   **Name:** `SESSION_COOKIE`
    *   **Value:** Paste the full session cookie string for this target (e.g., `sessionid=abc...; token=xyz...`).
    *   **Note:** This secret is **optional**. If you don't provide it, the scan will run without authentication.

3.  (Optional) Add another secret for target-specific Discord notifications:
    *   **Name:** `DISCORD_WEBHOOK_URL`
    *   **Value:** The Discord webhook URL for notifications about this specific target.

---

## How to Run Scans

You have two ways to run a scan: manually for a specific target, or automatically on a schedule for a group of targets.

### 1. Running a Manual Scan

This is useful for testing a new setup or forcing a scan on a single target.

1.  Go to the **Actions** tab of your repository.
2.  In the left sidebar, click on the **Main JS Monitor Controller** workflow.
3.  Click the **Run workflow** dropdown on the right.
4.  You will see a dropdown field named **"Select the target environment to scan manually"**.
5.  **Choose the environment** you configured (e.g., `example-com`) from the list.
6.  Click the green **Run workflow** button.

The system will now run the entire scan pipeline using the `TARGET_DOMAIN` and `SESSION_COOKIE` you configured for that specific environment.

### 2. Running Scans on a Schedule

The system is configured to run automatically every 12 hours. You have full control over which targets are included in this scheduled run.

1.  **Open the `active_targets.txt` file** in your repository.
2.  **Add the exact name** of the environment(s) you want to scan on the schedule, one per line.
    ```
    # active_targets.txt

    # This will run a scan for the 'example-com' environment every 12 hours.
    example-com

    # This will also scan the 'api-target-org' environment.
    api-target-org
    ```
3.  **Commit and push** your changes to this file.

The next scheduled run will now automatically pick up these targets and run scans for them in parallel.

---

## How to Stop Scanning a Target

-   **To stop scheduled scans:** Simply remove the environment name from the `active_targets.txt` file and commit the change.
-   **To stop manual scans:** You just don't trigger them.
-   **To delete a target completely:** You can delete the corresponding environment from the **Settings -> Environments** page.