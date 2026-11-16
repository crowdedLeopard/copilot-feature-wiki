#!/usr/bin/env node
/**
 * Render the Teams digest card to PNG for review, with Microsoft's own Adaptive Cards renderer and a
 * host configuration that approximates Teams. The real post is drawn by Teams itself; this shows the
 * content and layout closely enough to judge the wording and the length.
 *
 *   node pipeline/teams-digest.mjs --dry-run && node pipeline/teams-digest-preview.mjs [out-dir]
 *
 * Reads data/teams-digest.json, writes teams-digest-desktop.png, teams-digest-dark.png and teams-digest-phone.png.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { chromium } from 'playwright';
import { ROOT, DATA_DIR } from './lib/util.mjs';

const require = createRequire(import.meta.url);
const OUT = path.resolve(process.argv[2] ?? path.join(ROOT, 'screenshots', 'teams-digest'));
const payload = JSON.parse(await fs.readFile(path.join(DATA_DIR, 'teams-digest.json'), 'utf8'));
const card = payload.attachments[0].content;
const lib = await fs.readFile(require.resolve('adaptivecards/dist/adaptivecards.min.js'), 'utf8');

const theme = (dark) => ({
  page: dark ? '#1f1f1f' : '#f5f5f5', card: dark ? '#292929' : '#ffffff', border: dark ? '#3d3d3d' : '#e0e0e0',
  text: dark ? '#ffffff' : '#242424', subtle: dark ? '#adadad' : '#616161', accent: dark ? '#9299f7' : '#5b5fc7',
  button: dark ? '#9299f7' : '#5b5fc7', buttonText: dark ? '#1f1f1f' : '#ffffff', separator: dark ? '#3d3d3d' : '#e0e0e0',
  attention: dark ? '#f98b9b' : '#c4314b', warning: dark ? '#f8d22a' : '#835c00', good: dark ? '#6ccb5f' : '#237b4b',
});

const hostConfig = (t) => ({
  supportsInteractivity: true,
  fontFamily: "'Segoe UI', 'Segoe UI Web (West European)', system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif",
  fontSizes: { small: 12, default: 14, medium: 16, large: 20, extraLarge: 24 },
  fontWeights: { lighter: 300, default: 400, bolder: 600 },
  spacing: { small: 4, default: 8, medium: 16, large: 24, extraLarge: 32, padding: 16 },
  separator: { lineThickness: 1, lineColor: t.separator },
  containerStyles: {
    default: { backgroundColor: t.card, foregroundColors: {
      default: { default: t.text, subtle: t.subtle }, accent: { default: t.accent, subtle: t.accent }, attention: { default: t.attention, subtle: t.attention },
      good: { default: t.good, subtle: t.good }, warning: { default: t.warning, subtle: t.warning }, dark: { default: t.text, subtle: t.subtle }, light: { default: t.subtle, subtle: t.subtle },
    } },
    emphasis: { backgroundColor: t.page, foregroundColors: { default: { default: t.text, subtle: t.subtle }, accent: { default: t.accent, subtle: t.accent }, attention: { default: t.attention, subtle: t.attention }, good: { default: t.good, subtle: t.good }, warning: { default: t.warning, subtle: t.warning } } },
  },
  factSet: { title: { color: 'Default', size: 'Default', isSubtle: false, weight: 'Bolder', wrap: true, maxWidth: 110 }, value: { color: 'Default', size: 'Default', isSubtle: false, weight: 'Default', wrap: true }, spacing: 10 },
  actions: { maxActions: 6, spacing: 'Default', buttonSpacing: 8, showCard: { actionMode: 'Inline', inlineTopMargin: 16 }, actionsOrientation: 'Horizontal', actionAlignment: 'Left' },
  imageSizes: { small: 32, medium: 52, large: 100 },
});

function page(dark, width) {
  const t = theme(dark);
  const cardWidth = Math.min(width - 32, 760);
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<style>
  html,body{margin:0;background:${t.page};color:${t.text};font-family:${hostConfig(t).fontFamily};font-size:14px;-webkit-font-smoothing:antialiased}
  .post{max-width:${cardWidth + 64}px;margin:0;padding:20px 16px 28px 16px;display:grid;grid-template-columns:40px 1fr;gap:12px}
  .avatar{width:36px;height:36px;border-radius:50%;background:${t.accent};color:#fff;display:grid;place-items:center;font-weight:600;font-size:13px;margin-top:2px}
  .head{display:flex;gap:8px;align-items:baseline;color:${t.subtle};font-size:12px;margin-bottom:6px}
  .head b{color:${t.text};font-size:14px;font-weight:600}
  .card{background:${t.card};border:1px solid ${t.border};border-radius:8px;overflow:hidden;max-width:${cardWidth}px}
  .ac-adaptiveCard{padding:16px !important}
  .ac-actionSet{flex-wrap:wrap;gap:8px}
  .ac-pushButton{background:${t.button};color:${t.buttonText};border:0;border-radius:4px;padding:7px 14px;font-weight:600;font-size:14px;font-family:inherit;cursor:pointer}
  .ac-textBlock a{color:${t.accent};text-decoration:none}
  .ac-textBlock{line-height:1.4}
  .ac-factset{border-spacing:0}
  .ac-factset td{vertical-align:top;line-height:1.4;padding-bottom:4px}
  .ac-anchor,.ac-textBlock a{color:${t.accent}}
  .ac-textBlock ul{margin:0;padding-left:1.2em}
  .ac-textBlock p{margin:0}
</style></head><body>
<div class="post"><div class="avatar">RL</div><div>
<div class="head"><b>Release Ledger</b><span>via Workflows</span><span>Monday 08:17</span></div>
<div class="card" id="card"></div></div></div>
<script>${lib}</script>
<script>
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  AdaptiveCards.AdaptiveCard.onProcessMarkdown = (text, result) => {
    // Enough Markdown for this card: bold, links and bullet lists, as Teams renders them.
    const lines = esc(text).split('\\n');
    const inline = (s) => s.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>').replace(/\\[([^\\]]+)\\]\\((https?:[^)\\s]+)\\)/g, '<a href="$2" target="_blank">$1</a>');
    const bullets = lines.every((l) => /^- /.test(l));
    result.outputHtml = bullets ? '<ul>' + lines.map((l) => '<li>' + inline(l.slice(2)) + '</li>').join('') + '</ul>' : '<p>' + lines.map(inline).join('<br>') + '</p>';
    result.didProcess = true;
  };
  const ac = new AdaptiveCards.AdaptiveCard();
  ac.hostConfig = new AdaptiveCards.HostConfig(${JSON.stringify(hostConfig(t))});
  ac.parse(${JSON.stringify(card)});
  document.getElementById('card').appendChild(ac.render());
</script></body></html>`;
}

await fs.mkdir(OUT, { recursive: true });
const execPath = process.env.PLAYWRIGHT_CHROMIUM_PATH ?? (existsSync('/opt/pw-browsers/chromium') ? '/opt/pw-browsers/chromium' : undefined);
const browser = await chromium.launch({ executablePath: execPath });
for (const [name, dark, width] of [['teams-digest-desktop', false, 860], ['teams-digest-dark', true, 860], ['teams-digest-phone', false, 390]]) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 2, colorScheme: dark ? 'dark' : 'light' });
  const pg = await ctx.newPage();
  await pg.setContent(page(dark, width), { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  await pg.screenshot({ path: path.join(OUT, `${name}.png`), fullPage: true });
  await ctx.close();
  console.log(`wrote ${path.join(OUT, `${name}.png`)}`);
}
await browser.close();
