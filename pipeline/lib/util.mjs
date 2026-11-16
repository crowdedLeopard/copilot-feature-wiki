import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const RAW_DIR = path.join(ROOT, 'raw');
export const WIKI_DIR = path.join(ROOT, 'wiki');
export const FEATURES_DIR = path.join(WIKI_DIR, 'features');
export const CONCEPTS_DIR = path.join(WIKI_DIR, 'concepts');
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

/**
 * Minimal YAML front matter writer. Scalars and arrays of scalars are JSON-encoded (JSON is valid
 * YAML, so quoting is always safe); objects and arrays of objects are written in block style at any
 * depth, so nested records such as a control's `ui` and `api` entries stay readable in the page.
 */
export function toFrontmatter(obj) {
  return ['---', ...yamlLines(obj, 0), '---'].join('\n');
}

const isRecord = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);
const isBlockArray = (v) => Array.isArray(v) && v.length > 0 && v.every((x) => isRecord(x));

function yamlLines(obj, depth) {
  const pad = '  '.repeat(depth);
  const lines = [];
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined) continue;
    if (isBlockArray(v)) {
      lines.push(`${pad}${k}:`);
      for (const item of v) lines.push(...yamlListItem(item, depth + 1));
    } else if (isRecord(v)) {
      lines.push(`${pad}${k}:`);
      lines.push(...yamlLines(v, depth + 1));
    } else {
      lines.push(`${pad}${k}: ${JSON.stringify(v)}`);
    }
  }
  return lines;
}

/** One "- key: value" list item; nested records continue on indented lines under the item. */
function yamlListItem(item, depth) {
  const pad = '  '.repeat(depth);
  const inner = yamlLines(item, depth + 1); // lines indented as if two levels deep
  // The first line carries the dash; its indentation becomes "<pad>- ". Later lines keep the deeper indent.
  return inner.map((line, i) => (i === 0 ? `${pad}- ${line.trimStart()}` : line));
}

export function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: md };
  return { yaml: m[1], body: md.slice(m[0].length) };
}
