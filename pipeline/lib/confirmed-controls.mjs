/**
 * Admin paths and calls that have passed the independent check on live pages, offered to the writer
 * of a briefing as leads ("Controls the independent check has already confirmed" in the brief).
 *
 * Why: most first drafts that fail the check fail on a control row, and many of those controls are
 * already written correctly on another page (the Copilot Credits allocation path, the agent block in
 * the Microsoft 365 admin center). Handing the writer the checked wording saves a search and stops
 * it composing a shorter path of its own. The writer still opens the page and still has to show the
 * control governs the feature (wiki/SCHEMA.md, "Governance controls").
 *
 * A side (the admin path, or the call) is listed only when its page is live, was checked at its
 * present version, and no finding of any severity names that side. A Graph or REST call is listed
 * only when it is a method and a path with nothing after it, which is the form the standard asks for.
 */
import path from 'node:path';
import { FEATURES_DIR, WIKI_DIR, readJson } from './util.mjs';
import { loadPages } from './pages.mjs';
import { API_KIND_LABEL } from './render.mjs';

const REPORT_DIR = path.join(WIKI_DIR, 'verification');
const PASSED = new Set(['verified', 'verified-with-gaps']);
const REST_KINDS = new Set(['graph', 'power-platform-api', 'rest']);
const METHOD_AND_PATH = /^(GET|POST|PUT|PATCH|DELETE)\s+\S+$/i;
const squash = (s = '') => String(s).replace(/\s+/g, ' ').trim();
const keyOf = (...parts) => parts.map((p) => squash(p).toLowerCase()).join(' | ');

/** Control sides a report found fault with, as "2.ui" / "2.api". A finding on the row as a whole names both. */
export function flaggedSides(report) {
  const out = new Set();
  for (const c of report?.claims || []) {
    if (c.status === 'supported' && !c.severity) continue;
    for (const m of String(c.where || '').matchAll(/controls\[(\d+)\](?:\.(ui|api))?/g)) {
      for (const side of m[2] ? [m[2]] : ['ui', 'api']) out.add(`${m[1]}.${side}`);
    }
  }
  return out;
}

/**
 * Every confirmed side on the pages given, one entry per distinct path or call.
 * pages: [{ slug, data }] (briefings and concept pages); reports: { slug: report }.
 * Returns [{ side, key, governs, surface, path, kind, call, docs, on: [{ slug, topic, products, tags, concept }] }].
 */
export function confirmedSides(pages, reports = {}) {
  const bySide = new Map();
  for (const { slug, data } of pages) {
    const report = reports[slug];
    if (!data || data.archived || !PASSED.has(data.verification?.status)) continue;
    if (!report || report.version !== data.version) continue; // the text has moved since the check read it
    const flagged = flaggedSides(report);
    const where = { slug, topic: data.topic || null, products: data.products || [], tags: [...(data.tags || []), ...(data.covers || [])], concept: data.kind === 'concept' };
    (data.controls || []).forEach((row, i) => {
      const add = (side, key, fields) => {
        if (flagged.has(`${i}.${side}`)) return;
        const entry = bySide.get(key) || { side, key, governs: squash(row.governs), ...fields, on: [] };
        if (where.concept && !entry.on.some((o) => o.concept)) entry.governs = squash(row.governs); // a concept page words the control in general
        entry.on.push(where);
        bySide.set(key, entry);
      };
      if (row.ui?.path && row.ui?.docs) add('ui', keyOf('ui', row.ui.surface, row.ui.path), { surface: squash(row.ui.surface), path: squash(row.ui.path), docs: row.ui.docs });
      if (row.api?.call && row.api?.docs && (!REST_KINDS.has(row.api.kind) || METHOD_AND_PATH.test(squash(row.api.call)))) {
        add('api', keyOf('api', row.api.call), { kind: row.api.kind, call: squash(row.api.call), docs: row.api.docs });
      }
    });
  }
  return [...bySide.values()];
}

/**
 * The confirmed sides worth showing for one roadmap item, the likeliest first: those carried by pages
 * about the same product, then by concept pages the topic's briefings lean on, then by other pages in
 * the topic. Nothing from an unrelated topic is listed.
 */
export function confirmedForItem(item, sides, { paths = 16, calls = 10 } = {}) {
  const products = new Set(item.products || []);
  const topicTags = new Set(sides.flatMap((s) => s.on).filter((o) => !o.concept && o.topic === item.topic).flatMap((o) => o.tags));
  const scored = [];
  for (const s of sides) {
    const briefings = s.on.filter((o) => !o.concept && o.slug !== item.slug);
    const sameProduct = briefings.filter((o) => o.products.some((p) => products.has(p))).length;
    const sameTopic = briefings.filter((o) => o.topic === item.topic).length;
    const concept = s.on.some((o) => o.concept && o.tags.some((t) => topicTags.has(t)));
    if (!sameProduct && !sameTopic && !concept) continue;
    scored.push({ ...s, sameProduct, sameTopic, concept });
  }
  scored.sort((a, b) => b.sameProduct - a.sameProduct || Number(b.concept) - Number(a.concept) || b.sameTopic - a.sameTopic || a.key.localeCompare(b.key));
  return { paths: scored.filter((s) => s.side === 'ui').slice(0, paths), calls: scored.filter((s) => s.side === 'api').slice(0, calls) };
}

/** The brief section for one item, or '' when the check has confirmed nothing relevant yet. */
export function confirmedSection(item, sides = []) {
  const { paths, calls } = confirmedForItem(item, sides);
  if (!paths.length && !calls.length) return '';
  const lines = [
    '## Controls the independent check has already confirmed',
    '',
    'These admin paths and calls passed the independent check on other pages about the same products. They are leads, and most briefings need only one or two of them, or none. When this briefing needs one of these controls, open its page, see that it still reads this way, and write the path or call exactly as it is given here. Whether the control governs this feature is still for this briefing to establish from a Microsoft page, and a control that is not listed is researched as usual.',
    '',
  ];
  if (paths.length) lines.push('Admin paths (what it decides | admin centre > path | page it was read on)', '', ...paths.map((s) => `- ${s.governs} | ${s.surface} > ${s.path} | ${s.docs}`), '');
  if (calls.length) lines.push('Commands and API calls (what it decides | kind | call | reference page)', '', ...calls.map((s) => `- ${s.governs} | ${API_KIND_LABEL[s.kind] || 'API'} | ${s.call} | ${s.docs}`), '');
  return `${lines.join('\n')}\n`;
}

/** Reads the live briefings, the concept pages and their check reports. One call per run. */
export async function loadConfirmedControls() {
  const pages = [...await loadPages(FEATURES_DIR), ...await loadPages(path.join(WIKI_DIR, 'concepts'))].filter((p) => !p.error);
  const reports = {};
  for (const p of pages) {
    if (!PASSED.has(p.data.verification?.status)) continue;
    const report = await readJson(path.join(REPORT_DIR, `${p.slug}.json`), null);
    if (report) reports[p.slug] = report;
  }
  return confirmedSides(pages, reports);
}
