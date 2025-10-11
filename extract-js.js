// extract-js.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const url = process.argv[2];
if (!url) {
    console.error('Usage: node extract-js.js <url>');
    process.exit(1);
}

const outputDir = 'captured_js';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// A single index file for this run to map hash to URL
const indexFilePath = path.join(outputDir, 'index.txt');

function sha256(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

// Use a Set to avoid duplicate processing within the same run
const processedHashes = new Set();

async function saveJs(content, sourceUrl) {
    if (!content || content.length < 20) return; // Ignore tiny/empty scripts

    const hash = sha256(content);
    if (processedHashes.has(hash)) return;

    processedHashes.add(hash);
    const fileName = `${hash}.js`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(filePath, content);
    fs.appendFileSync(indexFilePath, `${hash},${sourceUrl}\n`);
    console.log(`Saved: ${sourceUrl} -> ${fileName}`);
}

(async () => {
    let browser;
    try {
        browser = await chromium.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
        });
        const context = await browser.newContext({
            ignoreHTTPSErrors: true,
            userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        });
        const page = await context.newPage();

        page.on('response', async (response) => {
            const contentType = response.headers()['content-type'] || '';
            const responseUrl = response.url();
            if (contentType.includes('javascript') || responseUrl.endsWith('.js')) {
                try {
                    const body = await response.buffer();
                    await saveJs(body, responseUrl);
                } catch (error) {
                    // Ignore errors for responses that might fail (e.g., redirects)
                }
            }
        });

        await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
        await page.waitForTimeout(5000); // Extra wait for lazy-loaded/SPA content

        const inlineScripts = await page.evaluate(() => 
            Array.from(document.querySelectorAll('script:not([src])'))
                 .map(script => script.textContent)
        );

        for (const scriptContent of inlineScripts) {
            const inlineUrl = `${url}#inline`;
            await saveJs(scriptContent, inlineUrl);
        }

    } catch (error) {
        console.error(`Error processing ${url}: ${error.message}`);
    } finally {
        if (browser) {
            await browser.close();
        }
    }
})();
