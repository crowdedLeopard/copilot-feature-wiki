/**
 * Shared between the two compile paths (API key via compile.mjs, Claude Code agent via
 * compile-tasks.mjs / write-briefing.mjs): queue selection, the research brief for one item, and
 * turning a validated structured output into a briefing page. Keeping this in one place means both
 * paths produce byte-identical pages for the same output.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { briefingOutput, featureFrontmatter, isAllowedSourceUrl } from './schema.mjs';
import { renderBriefing, API_KIND_LABEL } from './render.mjs';
import { RAW_DIR, WIKI_DIR, FEATURES_DIR, DATA_DIR, readJson, today } from './util.mjs';
import { TOPIC_IDS, TOPIC_BY_ID, topicForProducts } from '../../config/taxonomy.mjs';
import { loadGlossary, saveGlossary, glossaryLines, normaliseTags, defineTags } from './tags.mjs';

/** "slug | title" lines for every briefing and concept page, the set a new page may link to in `related`. */
export async function loadIndexSlugs() {
  const out = [];
  for (const [dir, kind] of [[FEATURES_DIR, ''], [path.join(WIKI_DIR, 'concepts'), ' (concept)']]) {
    let files = [];
    try { files = await fs.readdir(dir); } catch { continue; }
    for (const f of files.filter((f) => f.endsWith('.md')).sort()) {
      const md = await fs.readFile(path.join(dir, f), 'utf8');
      const title = md.match(/^title:\s*"(.*)"/m)?.[1] || f;
      out.push(`${f.replace(/\.md$/, '')} | ${title}${kind}`);
    }
  }
  return out;
}

/** Slug of the page that already covers a roadmap id, or null. Scans the pages, which are authoritative. */
export async function existingSlugForRoadmapId(id) {
  let files = [];
  try { files = await fs.readdir(FEATURES_DIR); } catch { return null; }
  for (const f of files.filter((f) => f.endsWith('.md'))) {
    const md = await fs.readFile(path.join(FEATURES_DIR, f), 'utf8');
    const m = md.match(/^roadmapId:\s*(\d+)/m);
    if (m && Number(m[1]) === Number(id)) return f.replace(/\.md$/, '');
  }
  return null;
}

/**
 * Pick the queue entries for this run.
 *
 * Every run is shared across the topics so that none of them starves. Refreshes of existing pages
 * come first (a stale briefing is worse than a missing one), then the remaining slots are dealt
 * round-robin across the five topics, each offering its highest-priority item. The topic that opens
 * the deal rotates daily, so the odd extra slots do not always go to the same topics, and a topic
 * with nothing left passes its turn, so a run is never short while anything is queued.
 *
 * COMPILE_TOPIC narrows a run to one topic (a catch-up). COMPILE_ONLY forces specific roadmap ids,
 * including ones that are not queued because their page is up to date; those keep their existing
 * slug so a forced refresh never creates a second page for the same feature.
 */
export async function selectQueue({ limit = 12, only = [], topic = '' } = {}) {
  const queue = await readJson(path.join(DATA_DIR, 'queue.json'), { items: [] });
  if (only.length) {
    const items = [];
    for (const id of only) {
      const queued = queue.items.find((q) => q.id === id);
      items.push(queued ? { ...queued, reason: 'forced' } : { id, reason: 'forced', slug: await existingSlugForRoadmapId(id), priority: 0 });
    }
    return items.slice(0, limit);
  }
  if (topic && !TOPIC_IDS.includes(topic)) throw new Error(`Unknown topic "${topic}". Use one of: ${TOPIC_IDS.join(', ')}`);
  return shareAcrossTopics(topic ? queue.items.filter((q) => q.topic === topic) : queue.items, limit);
}

/**
 * The fair-share selection over a queue that is already sorted best first. Pure, so it can be
 * checked without a queue file: `day` only decides which topic opens the round-robin.
 */
export function shareAcrossTopics(items, limit, { day = Math.floor(Date.now() / 86400000) } = {}) {
  const picked = items.filter((q) => q.reason !== 'no-briefing').slice(0, limit);
  const lanes = TOPIC_IDS.map((id) => items.filter((q) => q.reason === 'no-briefing' && q.topic === id));
  const start = day % lanes.length;
  while (picked.length < limit && lanes.some((lane) => lane.length)) {
    for (let i = 0; i < lanes.length && picked.length < limit; i++) {
      const next = lanes[(start + i) % lanes.length].shift();
      if (next) picked.push(next);
    }
  }
  // Anything filed under no known topic (it should not happen; ingest drops out-of-scope items) goes last.
  for (const q of items) {
    if (picked.length >= limit) break;
    if (!picked.includes(q)) picked.push(q);
  }
  return picked;
}

/** "copilot-studio 3, power-platform 3, modern-work 2": how a selection splits across topics, for logs. */
export function topicSplit(items) {
  return TOPIC_IDS.map((id) => [id, items.filter((q) => q.topic === id).length]).filter(([, n]) => n).map(([id, n]) => `${id} ${n}`).join(', ') || 'nothing';
}

/**
 * A raw roadmap record with its topic. The topic is worked out from the product tags each time, so
 * records captured before a taxonomy change are filed by today's rules without touching raw/.
 */
export async function loadRawItem(id) {
  const item = await readJson(path.join(RAW_DIR, 'roadmap', 'items', `${id}.json`));
  return item ? { ...item, topic: topicForProducts(item.products) } : item;
}

/** The existing page (if any) plus the front-matter fields the refresh must carry forward. */
export async function loadExisting(slug) {
  const file = path.join(FEATURES_DIR, `${slug}.md`);
  try {
    const existing = await fs.readFile(file, 'utf8');
    const yaml = existing.match(/^---\n([\s\S]*?)\n---/)?.[1] || '';
    const existingFm = {
      created: yaml.match(/^created:\s*"([^"]+)"/m)?.[1],
      version: Number(yaml.match(/^version:\s*(\d+)/m)?.[1] || 1),
      changes: [...yaml.matchAll(/- date: "(\d{4}-\d{2}-\d{2})"\n\s+note: "((?:[^"\\]|\\.)*)"/g)].map((m) => ({ date: m[1], note: JSON.parse(`"${m[2]}"`) })),
    };
    return { file, existing, existingFm };
  } catch {
    return { file, existing: null, existingFm: null };
  }
}

/**
 * The per-item brief. Used verbatim as the user turn in the API path and as the task text for the
 * agent path. `glossary` is the tag glossary from loadGlossary(); the model reuses its tags and
 * defines, in newTags, any tag it needs that is not there.
 */
export function researchBrief(item, existing, indexSlugs, glossary = { tags: {}, aliases: {} }) {
  const topic = TOPIC_BY_ID[item.topic];
  return `Write or refresh the briefing for this Microsoft 365 Roadmap item.

## Roadmap record (raw, authoritative for status and dates)
${JSON.stringify({
  id: item.id, title: item.title, status: item.status, targetDate: item.targetDate, previewDate: item.previewDate,
  products: item.products, clouds: item.clouds, releasePhase: item.releasePhase, platforms: item.platforms,
  created: item.created, modified: item.modified, moreInfoLink: item.moreInfoLink, roadmapUrl: item.roadmapUrl,
}, null, 2)}

Description:
${item.description}

## Topic
${topic ? `${topic.label}: ${topic.blurb}` : item.topic}

${existing ? `## Existing briefing (refresh it: keep what is still true, correct what changed, note the change)\n${existing}\n` : ''}
## Existing briefings you may link in relatedSlugs (slug | title)
${indexSlugs.slice(0, 400).join('\n') || '(none yet)'}

## Tag glossary (tag | name readers see). Reuse these in tags; define any other tag you use in newTags
${glossaryLines(glossary).join('\n') || '(empty: define every tag you use in newTags)'}

## Research steps
1. Search Microsoft Learn (MCP) for the feature, its admin controls and licensing. Open the one or two most relevant pages.
2. For each governance control, find the Learn page that documents it on both surfaces: the admin UI (which admin centre, exact navigation path) and the API or automation route (PowerShell cmdlet, Microsoft Graph endpoint, Power Platform API, pac CLI). Copy the path and the cmdlet or endpoint as Learn states them. Where Learn does not document a surface, set that side to null; the page will print "Not yet documented". Never infer a path, cmdlet or endpoint from a similar feature.
3. If Learn has nothing yet, search web (Microsoft domains only) for the Tech Community or adoption post.
4. Look for an official Microsoft video (Microsoft Mechanics, Microsoft 365 Community, Power Platform channels). Include only what you actually found.
5. Then write the briefing as JSON matching the required schema. Markdown inside section strings. No H1/H2 headings inside sections (the renderer adds them); use H3 or bold for sub-labels. British English.`;
}

/**
 * Every Learn page a control points at must also appear in the briefing's sources, so the
 * references section lists it. Returns a new sources array; URLs already present are left alone.
 * Throws when a control cites a domain the wiki does not accept.
 */
export function mergeControlDocsIntoSources(sources, controls = []) {
  const norm = (u) => u.replace(/\/+$/, '').toLowerCase();
  const seen = new Set(sources.map((s) => norm(s.url)));
  const out = [...sources];
  for (const c of controls) {
    for (const [side, label] of [['ui', c.ui?.surface], ['api', API_KIND_LABEL[c.api?.kind]]]) {
      const docs = c[side]?.docs;
      if (!docs) continue;
      if (!isAllowedSourceUrl(docs)) throw new Error(`controls: "${c.governs}" ${side} docs URL is not on an allowed Microsoft domain: ${docs}`);
      if (seen.has(norm(docs))) continue;
      seen.add(norm(docs));
      out.push({ title: `${c.governs} (${label})`, url: docs, kind: /learn\.microsoft\.com/i.test(docs) ? 'learn' : 'docs' });
    }
  }
  return out;
}

/**
 * Validate a structured output and write the page. Throws with a readable message on schema
 * failure. Returns { file, slug, title }.
 */
export async function writeBriefingPage(item, rawOutput, { slug, existingFm, indexSlugs }) {
  const parsed = briefingOutput.safeParse(rawOutput);
  if (!parsed.success) {
    throw new Error('Output failed schema: ' + parsed.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
  }
  const out = parsed.data;
  // Tags: canonical spelling, duplicates removed, US Government clouds added from the roadmap record.
  // Any tag used for the first time is written to the glossary so its page has a name and a description.
  const glossary = await loadGlossary();
  const tags = normaliseTags(out.tags, item.clouds, glossary);
  const defined = defineTags(glossary, tags, out.newTags);
  if (defined.added.length || defined.filled.length || defined.stubs.length) await saveGlossary(glossary);
  let sources = out.sources.filter((s) => isAllowedSourceUrl(s.url));
  if (!sources.some((s) => s.kind === 'roadmap')) sources.unshift({ title: `Microsoft 365 Roadmap ${item.id}`, url: item.roadmapUrl, kind: 'roadmap' });
  sources = mergeControlDocsIntoSources(sources, out.controls);
  const fm = {
    title: out.title, slug, roadmapId: item.id, topic: item.topic, products: item.products, summary: out.summary,
    status: item.statusKey, releasePhase: item.releasePhase, clouds: item.clouds, platforms: item.platforms,
    targetDate: item.targetDate, previewDate: item.previewDate || null,
    risk: out.risk, cost: out.cost, impact: out.impact, defaultState: out.defaultState, action: out.action,
    licensing: { model: out.licensingModel, notes: out.licensingNotes },
    audiences: out.audiences, tags,
    sources, videos: out.videos.filter((v) => isAllowedSourceUrl(v.url)),
    related: out.relatedSlugs.filter((s) => indexSlugs.some((l) => l.startsWith(s + ' |')) && s !== slug).slice(0, 6),
    controls: out.controls,
    confidence: out.confidence, created: existingFm?.created || today(), updated: today(), roadmapModified: item.modified,
    changes: [...(existingFm?.changes || []), { date: today(), note: out.changeNote }],
    version: (existingFm?.version || 0) + 1,
  };
  const check = featureFrontmatter.safeParse(fm);
  if (!check.success) {
    throw new Error('Front matter invalid: ' + check.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; '));
  }
  const page = renderBriefing(check.data, { ...out.sections }) +
    `\n<!-- rationale\nrisk: ${out.riskRationale}\ncost: ${out.costRationale}\nimpact: ${out.impactRationale}\n-->\n`;
  await fs.mkdir(FEATURES_DIR, { recursive: true });
  const file = path.join(FEATURES_DIR, `${slug}.md`);
  await fs.writeFile(file, page);
  return { file, slug, title: out.title, tags: defined };
}
