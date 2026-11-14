#!/usr/bin/env node
/**
 * Screenshot the built site for review. Serves dist/ locally and captures key pages in light and dark
 * mode at desktop and phone widths. Output: screenshots/*.png (ignored by git unless committed on purpose).
 *
 *   npm run build && node pipeline/screenshots.mjs
 */
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { chromium } from 'playwright';
import { ROOT } from './lib/util.mjs';

const BASE = process.env.SITE_BASE ?? '/copilot-feature-wiki';
const DIST = path.join(ROOT, 'dist');
const OUT = process.env.SCREENSHOT_DIR ?? path.join(ROOT, 'screenshots');
const SCALE = Number(process.env.SCREENSHOT_SCALE ?? 2);

const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.png': 'image/png', '.xml': 'application/xml', '.md': 'text/markdown', '.pdf': 'application/pdf', '.txt': 'text/plain' };

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer(async (req, res) => {
      let url = decodeURIComponent((req.url ?? '/').split('?')[0]);
      if (url.startsWith(BASE)) url = url.slice(BASE.length) || '/';
      let file = path.join(DIST, url);
      try {
        if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
      } catch { /* fall through */ }
      try {
        const body = await fs.readFile(file);
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] ?? 'application/octet-stream' });
        res.end(body);
      } catch {
        res.writeHead(404); res.end('not found');
      }
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

const PAGES = [
  ['home', '/'],
  ['briefings', '/features/'],
  ['feature', '/features/copilot-studio-block-maker-provided-credentials/'],
  ['feature-federated', '/features/m365-copilot-federated-connectors-write-update-delete/'],
  ['desk', '/desks/agents/'],
  ['radar', '/radar/'],
  ['atlas', '/atlas/'],
  ['concept', '/concepts/copilot-credits/'],
  ['digest', '/digests/2026-w46/'],
  ['about', '/about/'],
];

const server = await serve();
const port = server.address().port;
const origin = `http://127.0.0.1:${port}${BASE}`;
await fs.mkdir(OUT, { recursive: true });

const execPath = process.env.PLAYWRIGHT_CHROMIUM_PATH ?? (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
const browser = await chromium.launch({ executablePath: execPath });

async function shoot(name, url, { width, height, dark, full = false, theme }) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: SCALE, colorScheme: dark ? 'dark' : 'light' });
  const page = await ctx.newPage();
  if (theme) await page.addInitScript((t) => localStorage.setItem('rl-theme', t), theme);
  await page.goto(origin + url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  // Atlas plates draw on a canvas once they scroll into view. Visit each one so it is drawn before the capture.
  for (const plate of await page.locator('[data-atlas]').all()) {
    await plate.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
  }
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: full });
  await ctx.close();
}

for (const [name, url] of PAGES) {
  await shoot(`${name}-light`, url, { width: 1440, height: 900, dark: false, full: !['briefings', 'radar', 'atlas'].includes(name) });
}
await shoot('home-dark', '/', { width: 1440, height: 900, dark: true, full: true });
await shoot('atlas-dark', '/atlas/', { width: 1440, height: 900, dark: true });
await shoot('feature-dark', PAGES[2][1], { width: 1440, height: 900, dark: true, full: true });
await shoot('home-phone', '/', { width: 390, height: 844, dark: false, full: true });
await shoot('feature-phone', PAGES[2][1], { width: 390, height: 844, dark: false, full: true });

// Search dialog open with a query.
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: SCALE });
  const page = await ctx.newPage();
  await page.goto(origin + '/', { waitUntil: 'networkidle' });
  await page.keyboard.press('Control+k');
  await page.fill('#search-input', 'credentials');
  await page.waitForSelector('#search-results li a');
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(OUT, 'search.png') });
  await ctx.close();
}

await browser.close();
server.close();
console.log(`Screenshots written to ${OUT}`);
