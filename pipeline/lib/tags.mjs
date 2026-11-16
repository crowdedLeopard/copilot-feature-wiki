/**
 * The tag glossary (wiki/tags.json): the name readers see for each tag, the group it is filed under
 * and a one-line explanation for its tag page. Shared by the compile step (which defines new tags),
 * the lint step (which keeps pages' tag lists canonical) and, through the same file, the site.
 *
 * Rules the glossary enforces:
 *   - a tag is kebab-case; readers never see the id when a label exists;
 *   - an alias folds a duplicate spelling into the tag that is kept (model-context-protocol -> mcp);
 *   - US Government clouds are tagged from the roadmap record's cloud list, not left to the model;
 *   - an existing entry is never overwritten by the pipeline, so hand edits stick.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { WIKI_DIR, readJson, writeJson, slugify } from './util.mjs';
import { TAG_GROUP_IDS, cloudTags } from '../../config/taxonomy.mjs';

export const GLOSSARY_FILE = path.join(WIKI_DIR, 'tags.json');
export const MAX_TAGS = 12;

const ABOUT = 'Tag glossary for Release Ledger. One entry per tag: the name readers see, the group it is filed under (see TAG_GROUPS in config/taxonomy.mjs) and a one-line explanation for its tag page. The daily compile adds an entry for every new tag it uses and never overwrites an existing one, so edits here stick. Aliases fold a duplicate tag into the one that is kept.';

export async function loadGlossary() {
  const g = await readJson(GLOSSARY_FILE, null);
  return { about: g?.about || ABOUT, aliases: g?.aliases || {}, tags: g?.tags || {} };
}

/** Write the glossary with sorted keys, so the daily commit diff is only the entries that changed. */
export async function saveGlossary(glossary) {
  const sort = (obj) => Object.fromEntries(Object.keys(obj).sort().map((k) => [k, obj[k]]));
  await writeJson(GLOSSARY_FILE, { about: glossary.about || ABOUT, aliases: sort(glossary.aliases || {}), tags: sort(glossary.tags || {}) });
}

/** Fallback name for a tag with no glossary entry: "copilot-credits" -> "Copilot credits", with the usual acronyms upper-cased. */
export function humaniseTag(tag) {
  const words = tag.replace(/-/g, ' ')
    .replace(/\bm365\b/g, 'M365').replace(/\bmcp\b/g, 'MCP').replace(/\bdlp\b/g, 'DLP').replace(/\bpayg\b/g, 'PAYG')
    .replace(/\bp3\b/g, 'P3').replace(/\be7\b/g, 'E7').replace(/\bid\b/g, 'ID').replace(/\bai\b/g, 'AI').replace(/\bapi\b/g, 'API')
    .replace(/\bgcc\b/g, 'GCC').replace(/\bdod\b/g, 'DoD').replace(/\bsql\b/g, 'SQL').replace(/\bcli\b/g, 'CLI');
  return words.charAt(0).toUpperCase() + words.slice(1);
}

/** The tag that is kept for a spelling: itself, or the target of its alias. */
export function canonicalTag(tag, glossary) {
  const t = slugify(String(tag || ''));
  return glossary?.aliases?.[t] || t;
}

/**
 * A page's final tag list: kebab-case, aliases resolved, duplicates removed, capped at MAX_TAGS, with
 * the US Government cloud tags appended from the roadmap record. Cloud tags are never dropped by the
 * cap; the model's own list is trimmed first.
 */
export function normaliseTags(tags = [], clouds = [], glossary = { aliases: {}, tags: {} }) {
  const clouds_ = cloudTags(clouds);
  const own = [];
  for (const raw of tags) {
    const t = canonicalTag(raw, glossary);
    if (t && !own.includes(t) && !clouds_.includes(t)) own.push(t);
  }
  return [...own.slice(0, Math.max(0, MAX_TAGS - clouds_.length)), ...clouds_];
}

/** "tag | Label" lines for the research brief, with a marker on entries that still need a description. */
export function glossaryLines(glossary) {
  return Object.entries(glossary.tags)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([tag, e]) => `${tag} | ${e.label}${e.description ? '' : ' (needs a description: add one to newTags if you use this tag)'}`);
}

/**
 * Add definitions for the tags a page uses. A definition from the model is taken only for a tag
 * that has no entry yet or whose entry has no description; a used tag with neither gets a stub so
 * the glossary stays complete (lint reports the missing description). Returns what changed.
 */
export function defineTags(glossary, used, newTags = []) {
  const added = [], filled = [], stubs = [];
  const byTag = new Map(newTags.map((d) => [canonicalTag(d.tag, glossary), d]));
  for (const tag of used) {
    const def = byTag.get(tag);
    const existing = glossary.tags[tag];
    if (existing && existing.description) continue;
    if (def && def.description) {
      const group = TAG_GROUP_IDS.includes(def.group) ? def.group : existing?.group || 'other';
      glossary.tags[tag] = { label: def.label?.trim() || existing?.label || humaniseTag(tag), group, description: def.description.trim() };
      (existing ? filled : added).push(tag);
    } else if (!existing) {
      glossary.tags[tag] = { label: humaniseTag(tag), group: 'other', description: '' };
      stubs.push(tag);
    }
  }
  return { added, filled, stubs };
}
