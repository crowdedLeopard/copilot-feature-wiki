import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const RAW_DIR = path.join(ROOT, 'raw');
export const WIKI_DIR = path.join(ROOT, 'wiki');
export const FEATURES_DIR = path.join(WIKI_DIR, 'features');
export const DATA_DIR = path.join(ROOT, 'data');

export const today = () => new Date().toISOString().slice(0, 10);

export async function readJson(file, fallback = null) {
  try {
    return JSON.parse(await fs.readFile(file, 'utf8'));
  } catch (err) {
    if (err.code === 'ENOENT') return fallback;
    throw err;
  }
}

export async function writeJson(file, data) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(data, null, 2) + '\n');
}

export async function appendLog(line) {
  const file = path.join(WIKI_DIR, 'log.md');
  let existing = '';
  try { existing = await fs.readFile(file, 'utf8'); } catch {}
  if (!existing) existing = '# Log\n\nAppend-only record of ingests, compiles and lint passes. One line per event.\n\n';
  await fs.writeFile(file, existing.trimEnd() + '\n' + line + '\n');
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/microsoft copilot \(microsoft ?365\)/g, 'm365-copilot')
    .replace(/microsoft 365/g, 'm365')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 90)
    .replace(/-+$/g, '');
}

export function stripHtml(html = '') {
  return html
    .replace(/<\s*br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<li>/gi, '- ')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Minimal YAML front matter writer. Values are JSON-encoded so quoting is always safe. */
export function toFrontmatter(obj) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (Array.isArray(v) && v.length && typeof v[0] === 'object') {
      lines.push(`${k}:`);
      for (const item of v) {
        const entries = Object.entries(item).filter(([, val]) => val !== undefined);
        entries.forEach(([ik, iv], idx) => {
          lines.push(`${idx === 0 ? '  - ' : '    '}${ik}: ${JSON.stringify(iv)}`);
        });
      }
    } else if (v && typeof v === 'object' && !Array.isArray(v)) {
      lines.push(`${k}:`);
      for (const [ik, iv] of Object.entries(v)) lines.push(`  ${ik}: ${JSON.stringify(iv)}`);
    } else {
      lines.push(`${k}: ${JSON.stringify(v)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

export function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: md };
  return { yaml: m[1], body: md.slice(m[0].length) };
}
