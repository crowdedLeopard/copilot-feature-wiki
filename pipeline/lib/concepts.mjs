/**
 * Concept pages: which mechanisms deserve one, the brief the writer gets, and turning a validated
 * output into the page.
 *
 * A concept page (wiki/concepts/<slug>.md) explains one mechanism that several briefings depend
 * on: a meter, a policy type, a permission model, a control surface. It is named after a tag, and
 * may cover neighbouring tags. The pipeline offers a tag as a concept once enough live briefings
 * carry it and no concept page covers it (rules in CONCEPTS, config/taxonomy.mjs); the writer either
 * writes the page or declines the tag with a reason, and a declined tag is not offered again until
 * many more briefings carry it. Concept pages are written to the same evidence standard as
 * briefings (wiki/SCHEMA.md, "Concept pages") and pass the same independent check before they are
 * published (pipeline/lib/verify.mjs).
 *
 * Shared by compile-tasks.mjs (which queues concept tasks beside the briefings) and
 * write-concept.mjs (which the writer calls with its output).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { CONCEPTS as RULES, TOPIC_BY_ID, TAG_GROUP_BY_ID } from '../../config/taxonomy.mjs';
import { FEATURES_DIR, CONCEPTS_DIR, DATA_DIR, readJson, writeJson, today } from './util.mjs';
import { loadPages } from './pages.mjs';
import { conceptOutput, conceptDecline, conceptFrontmatter, isAllowedSourceUrl } from './schema.mjs';
import { renderConcept } from './render.mjs';
import { HELD_DIR, MAX_REVISIONS, listHeld, readPage } from './verify.mjs';
import { loadGlossary, saveGlossary, glossaryLines, canonicalTag, normaliseTags, defineTags } from './tags.mjs';
import { canonicalUrl, mergeControlDocsIntoSources } from './briefing.mjs';

/** Tags the writer declined, with the number of briefings that carried each at the time. Committed with the run. */
export const CONCEPT_STATE = path.join(DATA_DIR, 'concepts.json');
const STATE_ABOUT = 'Tags offered as concept pages and declined by the writer (pipeline/lib/concepts.mjs). A declined tag is offered again once CONCEPTS.reofferFactor times as many briefings carry it. Delete an entry to have the tag offered at the next run.';
export const MAX_COVERS = 8;
export const MAX_CONCEPT_TAGS = 10;
export const conceptTaskId = (slug) => `concept-${slug}`;

/** Published briefings that are not archived: the pages a concept is counted against. */
export async function liveBriefings() {
  return (await loadPages()).filter((p) => !p.error && p.data.title && !p.data.archived);
}

/** Every concept page, published or held, with where it is. A held concept still covers its tags. */
export async function allConceptPages() {
  const live = (await loadPages(CONCEPTS_DIR)).filter((p) => !p.error && p.data.title)
    .map((p) => ({ slug: p.slug, data: p.data, where: 'concepts', file: path.join(CONCEPTS_DIR, p.file), report: null }));
  const held = (await listHeld()).filter((h) => h.kind === 'concept')
    .map((h) => ({ slug: h.slug, data: h.data, where: 'held', file: h.file, report: h.report }));
  return [...live, ...held.filter((h) => !live.some((l) => l.slug === h.slug))];
}

/** tag -> slug of the concept page that explains it: the tag a page is named after, and each tag in its `covers`. */
export function coveredTags(concepts) {
  const covered = new Map();
  for (const c of concepts) covered.set(c.slug, c.slug);
  for (const c of concepts) for (const t of c.data.covers || []) if (!covered.has(t)) covered.set(t, c.slug);
  return covered;
}

/** tag -> { count, topics, slugs } over the live briefings. */
export function tagUse(briefings) {
  const use = new Map();
  for (const b of briefings) {
    for (const t of b.data.tags || []) {
      const u = use.get(t) || { count: 0, topics: new Set(), slugs: [] };
      u.count += 1; u.topics.add(b.data.topic); u.slugs.push(b.slug);
      use.set(t, u);
    }
  }
  return use;
}

/** The live briefings a concept page explains something for: they carry a tag it covers, or name it in `related`. */
export function dependentsOf(slug, covers, briefings) {
  const tags = new Set([slug, ...(covers || [])]);
  return briefings.filter((b) => (b.data.related || []).includes(slug) || (b.data.tags || []).some((t) => tags.has(t)));
}

/**
 * Tags that have earned a concept page, most used first. Pure: the same wiki gives the same list.
 *
 * A tag is offered when at least `minBriefings` live briefings carry it (but no more than `maxShare`
 * of them: a tag on every sixth briefing is a category, not a mechanism), no concept page covers
 * it, and it names a mechanism rather than a product, a cloud or a single feature: its glossary
 * group is one of the mechanism groups, or it is a capability that turns up under two or more
 * topics, or it is one of the named exceptions. A tag the writer declined waits until
 * `reofferFactor` times as many briefings carry it.
 */
export function conceptCandidates({ briefings, concepts, glossary, state = {}, rules = RULES }) {
  const covered = coveredTags(concepts);
  const briefingSlugs = new Set(briefings.map((b) => b.slug));
  const out = [];
  for (const [tag, u] of tagUse(briefings)) {
    if (covered.has(tag) || briefingSlugs.has(tag) || u.count < rules.minBriefings) continue;
    if (rules.maxShare && u.count > Math.max(rules.minBriefings, briefings.length * rules.maxShare)) continue;
    const entry = glossary.tags?.[tag];
    const group = entry?.group || 'other';
    const mechanism = rules.alsoTags.includes(tag) || rules.mechanismGroups.includes(group) || (group === 'capability' && u.topics.size >= 2);
    if (!mechanism) continue;
    const declined = state.declined?.[tag];
    if (declined && u.count < (declined.briefings || 0) * rules.reofferFactor) continue;
    out.push({ tag, label: entry?.label || tag, group, description: entry?.description || '', count: u.count, topics: [...u.topics].sort(), briefings: u.slugs });
  }
  return out.sort((a, b) => b.count - a.count || b.topics.length - a.topics.length || a.tag.localeCompare(b.tag));
}

/**
 * The concept tasks for one run, at most `limit`: corrections first (a page the independent check
 * held or found wanting), then new concepts in candidate order, then refreshes (a page written by
 * hand before the concept standard, one that many more briefings now depend on, or one not touched
 * for the review period). `only` forces specific slugs, for a test run.
 */
export async function selectConceptTasks({ limit = RULES.perRun, only = [], rules = RULES } = {}) {
  if (limit <= 0 && !only.length) return [];
  const [briefings, concepts, glossary, state] = await Promise.all([liveBriefings(), allConceptPages(), loadGlossary(), readJson(CONCEPT_STATE, {})]);
  const picked = [];
  const push = (t) => { if (!picked.some((p) => p.slug === t.slug)) picked.push(t); };
  if (only.length) {
    for (const slug of only) {
      const c = concepts.find((x) => x.slug === slug);
      push({ slug, reason: c ? 'refresh' : 'new-concept', title: c?.data.title || glossary.tags[slug]?.label || slug, exists: Boolean(c), forced: true });
    }
    return picked;
  }
  for (const c of concepts) {
    const failed = c.where === 'held' && c.report?.hold?.reason === 'failed' && (c.report?.attempts || 0) < MAX_REVISIONS;
    const grace = c.where === 'concepts' && c.data.verification?.status === 'needs-correction';
    if (failed || grace) push({ slug: c.slug, reason: 'revise', title: c.data.title, exists: true });
  }
  for (const cand of conceptCandidates({ briefings, concepts, glossary, state, rules })) {
    push({ slug: cand.tag, reason: 'new-concept', title: cand.label, exists: false });
  }
  for (const c of concepts.filter((x) => x.where === 'concepts')) {
    const now = dependentsOf(c.slug, c.data.covers, briefings).length;
    const grown = typeof c.data.dependents === 'number' && now >= c.data.dependents + rules.refreshAfterNewBriefings;
    const old = (Date.now() - new Date(c.data.updated).getTime()) / 86400000 > rules.reviewAfterDays;
    const handWritten = c.data.kind !== 'concept';
    if (grown || old || handWritten) push({ slug: c.slug, reason: 'refresh', title: c.data.title, exists: true });
  }
  return picked.slice(0, limit);
}

/** The existing page for a slug (published, or held with the verifier's findings appended), or null. */
export async function loadExistingConcept(slug) {
  for (const [dir, where] of [[CONCEPTS_DIR, 'concepts'], [HELD_DIR, 'held']]) {
    const file = path.join(dir, `${slug}.md`);
    try {
      const page = await readPage(file);
      if (where === 'held' && page.data.kind !== 'concept') continue; // a held briefing with the same slug is not this page
      return { file, where, ...page };
    } catch { /* next */ }
  }
  return null;
}

const oneLine = (s = '') => String(s).replace(/\s+/g, ' ').trim();

/**
 * The brief for one concept task: data only. What a concept page is, how to research it and how it
 * is judged live in wiki/SCHEMA.md and pipeline/prompts/concept-agent.md. The briefings listed here
 * are leads (where administrators meet the mechanism, which Microsoft pages to open), never evidence.
 */
export function conceptBrief(task, { briefings, concepts, glossary, existing = null, state = {}, rules = RULES }) {
  const entry = glossary.tags?.[task.slug];
  const self = concepts.find((c) => c.slug === task.slug);
  const covers = self?.data.covers || [];
  const deps = dependentsOf(task.slug, covers, briefings)
    .sort((a, b) => String(b.data.updated).localeCompare(String(a.data.updated)) || a.slug.localeCompare(b.slug));
  const shown = deps.slice(0, 16);
  const topics = [...new Set(deps.map((b) => TOPIC_BY_ID[b.data.topic]?.label || b.data.topic))].sort();

  const cited = new Map();
  for (const b of deps) {
    const urls = new Map();
    for (const s of b.data.sources || []) if (s.kind !== 'roadmap' && isAllowedSourceUrl(s.url)) urls.set(canonicalUrl(s.url), s.title);
    for (const c of b.data.controls || []) for (const side of ['ui', 'api']) if (c[side]?.docs && !urls.has(canonicalUrl(c[side].docs))) urls.set(canonicalUrl(c[side].docs), c.governs);
    for (const [url, title] of urls) cited.set(url, { n: (cited.get(url)?.n || 0) + 1, title: cited.get(url)?.title || title });
  }
  const citedLines = [...cited].sort((a, b) => b[1].n - a[1].n || a[0].localeCompare(b[0])).slice(0, 12)
    .map(([url, v]) => `- ${v.n} briefing${v.n > 1 ? 's' : ''}: ${url} (${oneLine(v.title)})`);

  const briefingLines = shown.map((b) => {
    const rows = (b.data.controls || []).slice(0, 3).map((c) => {
      const ui = c.ui ? `${c.ui.surface} › ${c.ui.path}` : 'no admin UI documented';
      const api = c.api ? `\`${c.api.call}\`` : 'no API documented';
      return `  - control: ${oneLine(c.governs)} | ${ui} | ${api}`;
    });
    return [`- ${b.slug} | ${oneLine(b.data.title)} | ${TOPIC_BY_ID[b.data.topic]?.label || b.data.topic} | ${b.data.status}`, `  ${oneLine(b.data.summary)}`, ...rows].join('\n');
  });

  // Tags this page might cover: the other candidates (at a lower bar, so near-candidates show too), and
  // the lead tag's own group, which is how the three US Government cloud tags end up on one page.
  const loose = { ...rules, minBriefings: Math.max(2, rules.minBriefings - 2) };
  const near = conceptCandidates({ briefings, concepts, glossary, state: {}, rules: loose }).filter((c) => c.tag !== task.slug);
  const taken = coveredTags(concepts);
  const siblings = [...tagUse(briefings)]
    .filter(([t, u]) => t !== task.slug && u.count >= 2 && !taken.has(t) && entry?.group && glossary.tags?.[t]?.group === entry.group && !near.some((c) => c.tag === t))
    .map(([t, u]) => ({ tag: t, label: glossary.tags[t].label, count: u.count }));
  const others = [...near, ...siblings].sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag)).slice(0, 30)
    .map((c) => `${c.tag} | ${c.label} | ${c.count}`);
  const conceptLines = concepts.filter((c) => c.slug !== task.slug)
    .map((c) => `${c.slug} | ${oneLine(c.data.title)} | covers: ${[c.slug, ...(c.data.covers || [])].join(', ')}`);
  const linkLines = [
    ...concepts.filter((c) => c.slug !== task.slug).map((c) => `${c.slug} | ${oneLine(c.data.title)} (concept)`),
    ...deps.slice(0, 40).map((b) => `${b.slug} | ${oneLine(b.data.title)}`),
  ];
  const opening = task.reason === 'revise'
    ? 'Correct the existing concept page. The independent check found the problems listed at the end of it.'
    : task.exists
      ? 'Rewrite the existing concept page to the concept standard and bring it up to date.'
      : 'Write a new concept page for the mechanism behind this tag, or decline the tag if it does not name one.';

  return `# Concept task: ${entry?.label || task.title} (\`${task.slug}\`)

${opening} Follow the editorial standard in wiki/SCHEMA.md, section "Concept pages": research first, state only what a Microsoft page you opened supports, and return the page in the required JSON format.

Today's date is ${today()}. The page's slug is \`${task.slug}\` and cannot be changed.

## The tag

\`${task.slug}\` | ${entry?.label || task.title} | group: ${TAG_GROUP_BY_ID[entry?.group]?.label || entry?.group || 'not filed'}

Glossary line, the wiki's own shorthand and not evidence: ${entry?.description || '(none yet)'}
${covers.length ? `\nThe existing page also covers: ${covers.join(', ')}.\n` : ''}
## Why it is offered

${deps.length} live briefing${deps.length === 1 ? '' : 's'} depend on it${topics.length ? `, under ${topics.join(', ')}` : ''}.${task.exists ? '' : ' No concept page explains it yet.'}

## Briefings that depend on it (slug | title | topic | status)

Leads for where administrators meet this mechanism and which Microsoft pages to open. Their text is not evidence: open the Microsoft page before stating anything a briefing says.${deps.length > shown.length ? ` The ${shown.length} most recently updated of ${deps.length} are listed.` : ''}

${briefingLines.join('\n') || '(none)'}

## Microsoft pages those briefings cite most

Starting points for research, not a reading list to copy.

${citedLines.join('\n') || '(none)'}

## Other recurring tags with no concept page (tag | name | briefings)

Candidates for \`covers\`: list one only if this page explains it fully enough that it needs no page of its own.

${others.join('\n') || '(none)'}

## Existing concept pages (slug | title | what each covers)

Do not explain again what one of these already explains. Link to it instead.

${conceptLines.join('\n') || '(none yet)'}

${existing ? `## Existing page

Its text is not evidence: pages change, so re-open the Microsoft pages behind its controls and licensing before carrying anything forward. Keep what is still supported, correct what is not, and say in changeNote what is different for the reader.

<existing_concept>
${existing.trim()}
</existing_concept>

` : ''}## Pages you may link in relatedSlugs (slug | title)

${linkLines.join('\n') || '(none yet)'}

## Tag glossary (tag | name readers see)

Reuse these spellings in tags and covers. Define in newTags any tag you use that is not listed here.

${glossaryLines(glossary).join('\n') || '(empty: define every tag you use in newTags)'}
`;
}

/** Record that the writer declined a tag, so it is not offered again until many more briefings carry it. */
export async function recordDecline(tag, reason, briefings) {
  const state = await readJson(CONCEPT_STATE, {});
  const declined = { ...(state.declined || {}), [tag]: { date: today(), briefings, reason } };
  await writeJson(CONCEPT_STATE, { about: STATE_ABOUT, declined: Object.fromEntries(Object.keys(declined).sort().map((k) => [k, declined[k]])) });
}

/**
 * Validate a structured output and write the concept page, or record a decline. Throws with a
 * readable message when the output does not pass. Returns { declined, file, slug, title, tags }.
 */
/** Words a reader meets in the sections: link targets, table rules and markdown marks are not counted. */
export function countWords(markdown) {
  return markdown
    .replace(/\]\([^)]*\)/g, ']')
    .replace(/^\s*\|?[\s:|-]+\|?\s*$/gm, ' ')
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w)).length;
}

export async function writeConceptPage(task, rawOutput) {
  const slug = task.slug;
  const [briefings, concepts, glossary, existing] = await Promise.all([liveBriefings(), allConceptPages(), loadGlossary(), loadExistingConcept(slug)]);

  if (rawOutput && typeof rawOutput === 'object' && 'decline' in rawOutput && rawOutput.decline != null) {
    const declined = conceptDecline.safeParse(rawOutput);
    if (!declined.success) throw new Error('Decline failed schema: ' + declined.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
    if (existing) throw new Error(`"${slug}" already has a concept page, so it cannot be declined. Rewrite the page.`);
    const count = tagUse(briefings).get(slug)?.count || 0;
    await recordDecline(slug, declined.data.decline, count);
    return { declined: true, slug, reason: declined.data.decline };
  }

  const parsed = conceptOutput.safeParse(rawOutput);
  if (!parsed.success) throw new Error('Output failed schema: ' + parsed.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
  const out = parsed.data;
  const words = countWords(Object.values(out.sections).join('\n'));
  if (words > RULES.maxWords) throw new Error(`The sections run to ${words} words; a concept page is at most ${RULES.maxWords} (aim for 600 to 1,000). Cut background and anything a briefing or another concept page already explains, and link to it.`);
  try { await fs.access(path.join(FEATURES_DIR, `${slug}.md`)); throw new Error(`A briefing already uses the slug "${slug}"; a concept page cannot share it.`); } catch (err) { if (err.code !== 'ENOENT') throw err; }

  // Tags: canonical spelling, the tag the page is named after first. Covers: only tags no other concept page explains.
  const own = normaliseTags(out.tags, [], glossary).filter((t) => t !== slug);
  const tags = [slug, ...own].slice(0, MAX_CONCEPT_TAGS);
  const taken = coveredTags(concepts.filter((c) => c.slug !== slug));
  const covers = [...new Set(out.covers.map((t) => canonicalTag(t, glossary)).filter((t) => t && t !== slug && !taken.has(t)))].slice(0, MAX_COVERS);
  const defined = defineTags(glossary, [...new Set([...tags, ...covers])], out.newTags);
  if (defined.added.length || defined.filled.length || defined.stubs.length) await saveGlossary(glossary);

  const controls = out.controls.map((c) => ({
    ...c,
    ui: c.ui && { ...c.ui, docs: canonicalUrl(c.ui.docs) },
    api: c.api && { ...c.api, docs: canonicalUrl(c.api.docs) },
  }));
  const seen = new Set();
  let sources = out.sources
    .filter((s) => isAllowedSourceUrl(s.url) && s.kind !== 'roadmap')
    .map((s) => ({ ...s, url: canonicalUrl(s.url) }))
    .filter((s) => { const key = s.url.replace(/\/+$/, '').toLowerCase(); return seen.has(key) ? false : seen.add(key); });
  sources = mergeControlDocsIntoSources(sources, controls);
  // Every page the evidence quotes is cited: a reader, and the verifier, can then open what a claim rests on.
  const pageKey = (u) => canonicalUrl(u).replace(/[?#].*$/, '').replace(/\/+$/, '').toLowerCase();
  const cited = new Set([...out.sources.map((s) => s.url), ...controls.flatMap((c) => [c.ui?.docs, c.api?.docs]).filter(Boolean)].map(pageKey));
  const uncited = [...new Set(out.evidence.map((e) => e.url).filter((u) => isAllowedSourceUrl(u) && !cited.has(pageKey(u))).map(pageKey))];
  if (uncited.length) throw new Error(`sources: ${uncited.length} page(s) quoted in evidence are missing from sources. Add each with its title: ${uncited.join(' ; ')}`);
  if (sources.length < 2) throw new Error('sources: a concept page needs at least two Microsoft pages that were opened for it (allowed Microsoft domains only).');

  const known = new Set([...briefings.map((b) => b.slug), ...concepts.map((c) => c.slug)]);
  const related = [...new Set(out.relatedSlugs)].filter((s) => known.has(s) && s !== slug).slice(0, 8);
  const prev = existing?.data || null;
  const fm = {
    kind: 'concept', title: out.title, slug, summary: out.summary,
    created: prev?.created || prev?.updated || today(), updated: today(), version: (prev?.version || (prev ? 1 : 0)) + 1,
    tags, covers, sources, related, controls, confidence: out.confidence,
    dependents: dependentsOf(slug, covers, briefings).length,
    changes: [...(prev?.changes || []), { date: today(), note: out.changeNote }],
  };
  const check = conceptFrontmatter.safeParse(fm);
  if (!check.success) throw new Error('Front matter invalid: ' + check.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
  await fs.mkdir(CONCEPTS_DIR, { recursive: true });
  const file = path.join(CONCEPTS_DIR, `${slug}.md`);
  await fs.writeFile(file, renderConcept(fm, out.sections));
  // A rewrite supersedes the held copy. The new page carries no verification stamp, so the verify
  // step checks it before the site shows it.
  if (existing?.where === 'held') await fs.rm(existing.file, { force: true });
  return { declined: false, file, slug, title: out.title, tags: defined };
}
