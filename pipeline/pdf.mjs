#!/usr/bin/env node
/**
 * PDF: render every built feature page to dist/downloads/<slug>.pdf using the site's print stylesheet.
 * Runs after `astro build`. Serves dist/ locally so relative assets resolve under the Pages base path.
 */
import fs from 'node:fs/promises';
import fss from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';
import { ROOT } from './lib/util.mjs';
import { loadPages } from './lib/pages.mjs';

const DIST = path.join(ROOT, 'dist');
const BASE = process.env.SITE_BASE ?? '/copilot-feature-wiki';
const LIMIT = Number(process.env.PDF_LIMIT || 0);

const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.xml': 'application/xml', '.ico': 'image/x-icon' };

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      if (p.startsWith(BASE)) p = p.slice(BASE.length) || '/';
      let file = path.join(DIST, p);
      if (file.endsWith('/')) file += 'index.html';
      if (!fss.existsSync(file) && fss.existsSync(file + '/index.html')) file += '/index.html';
      if (!fss.existsSync(file) || fss.statSync(file).isDirectory()) { res.writeHead(404); return res.end('not found'); }
      res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      fss.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  if (!fss.existsSync(DIST)) throw new Error('dist/ not found. Run `npm run build` first.');
  const pages = (await loadPages()).filter((p) => !p.error && p.data.title);
  const targets = LIMIT ? pages.slice(0, LIMIT) : pages;
  const out = path.join(DIST, 'downloads');
  await fs.mkdir(out, { recursive: true });
  const server = await serve();
  const port = server.address().port;
  const exe = process.env.PLAYWRIGHT_CHROMIUM_PATH || (fss.existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
  const browser = await chromium.launch(exe ? { executablePath: exe } : {});
  const context = await browser.newContext();
  const page = await context.newPage();
  let done = 0;
  const started = Date.now();
  for (const p of targets) {
    const url = `http://127.0.0.1:${port}${BASE}/features/${p.slug}/?print=1`;
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.emulateMedia({ media: 'print' });
    await page.pdf({
      path: path.join(out, `${p.slug}.pdf`), format: 'A4', printBackground: true, preferCSSPageSize: true,
      margin: { top: '18mm', bottom: '20mm', left: '16mm', right: '16mm' },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `<div style="width:100%;font-family:'IBM Plex Sans',Helvetica,sans-serif;font-size:8px;color:#6b6b70;padding:0 16mm;display:flex;justify-content:space-between;"><span>Release Ledger · ${escapeHtml(p.data.title)}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
    });
    done++;
  }
  await browser.close();
  server.close();
  const line = `pdf: ${done} briefings rendered to dist/downloads in ${Math.round((Date.now() - started) / 1000)}s`;
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
}

function escapeHtml(s) { return s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

main().catch((err) => { console.error(err); process.exit(1); });
