// extract-js.js (Fixed and Optimized)

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// 1. Get URL from command-line arguments
const url = process.argv[2];
if (!url) {
    console.error('Error: Please provide a URL. Usage: node extract-js.js <url>');
    process.exit(1);
}

// 2. Prepare output directory and index file
const outputDir = 'captured_js';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}
const indexFilePath = path.join(outputDir, 'index.txt');
// Ensure index file is clean for this run
fs.writeFileSync(indexFilePath, ''); 

// 3. Define a SHA256 hashing function
function sha256(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// 4. Use a Set to prevent processing the same JS content twice in one run
const processedHashes = new Set();

// 5. Core function to save JS content
async function saveJs(content, sourceUrl) {
    // Ignore empty or very short scripts which are often just tracking snippets
    if (!content || content.length < 20) {
        return;
    }

    const hash = sha256(content);
    if (processedHashes.has(hash)) {
        return; // Already processed this exact script in this run
    }

    processedHashes.add(hash);
    const fileName = `${hash}.js`;
    const filePath = path.join(outputDir, fileName);

    // Write the JS file and append its info to the index
    fs.writeFileSync(filePath, content);
    fs.appendFileSync(indexFilePath, `${hash},${sourceUrl}\n`);
    console.log(`  [OK] Saved: ${sourceUrl} -> ${fileName}`);
}

// --- Main execution block ---
(async () => {
    console.log(`🚀 Starting JS extraction for: ${url}`);
    let browser;
    try {
        // Launch browser with necessary flags for CI/CD environments
        browser = await chromium.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
        });
        
        const context = await browser.newContext({
            ignoreHTTPSErrors: true,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });
        const page = await context.newPage();

        // Listen for all network responses to capture external JS files
        page.on('response', async (response) => {
            const contentType = response.headers()['content-type'] || '';
            const responseUrl = response.url();
            
            // Check for JavaScript content type or .js file extension
            if (response.ok() && (contentType.includes('javascript') || responseUrl.endsWith('.js'))) {
                try {
                    // FIX 1: Use response.text() instead of response.buffer() for JS files
                    const body = await response.text();
                    await saveJs(body, responseUrl);
                } catch (error) {
                    // FIX 2: Log errors instead of ignoring them silently
                    console.warn(`  [WARN] Could not process response body for ${responseUrl}: ${error.message}`);
                }
            }
        });

        // Navigate to the page and wait for the network to be mostly idle
        // This is more reliable than a fixed timeout.
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

        // Extract all inline scripts from the page
        const inlineScripts = await page.evaluate(() => 
            Array.from(document.querySelectorAll('script:not([src])'))
                 .map((script, index) => ({
                     content: script.textContent,
                     // FIX 3: Give each inline script a unique identifier
                     id: `inline-script-${index + 1}`
                 }))
        );

        // Process each found inline script
        for (const script of inlineScripts) {
            const inlineUrl = `${url}#${script.id}`;
            await saveJs(script.content, inlineUrl);
        }

    } catch (error) {
        console.error(`  [ERROR] Critical error processing ${url}: ${error.message}`);
    } finally {
        if (browser) {
            await browser.close();
        }
        console.log(`✅ Finished JS extraction for: ${url}`);
    }
})();
