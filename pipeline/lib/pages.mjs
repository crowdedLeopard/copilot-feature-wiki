import fs from 'node:fs/promises';
import path from 'node:path';
import { load as yamlLoad } from 'js-yaml';
import { FEATURES_DIR, WIKI_DIR } from './util.mjs';

export async function loadPages(dir = FEATURES_DIR) {
  let files = [];
  try { files = (await fs.readdir(dir)).filter((f) => f.endsWith('.md')).sort(); } catch { return []; }
  const pages = [];
  for (const file of files) {
    const raw = await fs.readFile(path.join(dir, file), 'utf8');
    const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    let data = {}, error = null;
    try { data = m ? yamlLoad(m[1]) : {}; } catch (e) { error = e.message; }
    pages.push({ file, slug: file.replace(/\.md$/, ''), data, body: m ? raw.slice(m[0].length) : raw, raw, error });
  }
  return pages;
}

export async function loadConcepts() {
  return loadPages(path.join(WIKI_DIR, 'concepts'));
}
