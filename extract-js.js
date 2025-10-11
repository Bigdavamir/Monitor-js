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

function sha256(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

(async () => {
    const browser = await chromium.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-dev-shm-usage']
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    const capturedJs = new Set();

    page.on('response', async (response) => {
        const contentType = response.headers()['content-type'] || '';
        const responseUrl = response.url();
        if (contentType.includes('javascript') || responseUrl.endsWith('.js')) {
            try {
                const body = await response.body();
                const hash = sha256(body);
                if (!capturedJs.has(hash)) {
                    capturedJs.add(hash);
                    const fileName = path.join(outputDir, `${hash}.js`);
                    fs.writeFileSync(fileName, `${responseUrl}\n`);
                    fs.appendFileSync(fileName, body);
                }
            } catch (error) {
                // Ignore errors for responses that might not have a body
            }
        }
    });

    try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

        const scriptTags = await page.evaluate(() => {
            const scripts = [];
            document.querySelectorAll('script').forEach(script => {
                if (script.src) {
                    scripts.push({ src: script.src, content: null });
                } else if (script.textContent.trim().length > 0) {
                    scripts.push({ src: null, content: script.textContent });
                }
            });
            return scripts;
        });

        for (const script of scriptTags) {
            if (script.src) {
                // Already handled by the response listener
            } else if (script.content) {
                const hash = sha256(script.content);
                if (!capturedJs.has(hash)) {
                    capturedJs.add(hash);
                    const fileName = path.join(outputDir, `${hash}.js`);
                    const inlineUrl = `${url}#inline-${hash.substring(0, 8)}`;
                    fs.writeFileSync(fileName, `${inlineUrl}\n`);
                    fs.appendFileSync(fileName, script.content);
                }
            }
        }

    } catch (error) {
        console.error(`Error processing ${url}:`, error.message);
    } finally {
        await browser.close();
    }
})();