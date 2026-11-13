/**
 * Shared between the two compile paths (API key via compile.mjs, Claude Code agent via
 * compile-tasks.mjs / write-briefing.mjs): queue selection, the research brief for one item, and
 * turning a validated structured output into a briefing page. Keeping this in one place means both
 * paths produce byte-identical pages for the same output.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { briefingOutput, featureFrontmatter, isAllowedSourceUrl } from './schema.mjs';
import { renderBriefing } from './render.mjs';
import { RAW_DIR, WIKI_DIR, FEATURES_DIR, DATA_DIR, readJson, today, slugify } from './util.mjs';
import { DESK_BY_ID } from '../../config/taxonomy.mjs';

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
 * Pick the queue entries for this run. COMPILE_ONLY forces specific roadmap ids, including ones that
 * are not queued because their page is up to date; those keep their existing slug so a forced
 * refresh never creates a second page for the same feature.
 */
export async function selectQueue({ limit = 12, only = [] } = {}) {
  const queue = await readJson(path.join(DATA_DIR, 'queue.json'), { items: [] });
  let items = queue.items;
  if (only.length) {
    items = [];
    for (const id of only) {
      const queued = queue.items.find((q) => q.id === id);
      items.push(queued ? { ...queued, reason: 'forced' } : { id, reason: 'forced', slug: await existingSlugForRoadmapId(id), priority: 0 });
    }
  }
  return items.slice(0, limit);
}

export async function loadRawItem(id) {
  return readJson(path.join(RAW_DIR, 'roadmap', 'items', `${id}.json`));
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

/** The per-item brief. Used verbatim as the user turn in the API path and as the task text for the agent path. */
export function researchBrief(item, existing, indexSlugs) {
  const desk = DESK_BY_ID[item.desk];
  return `Write or refresh the briefing for this Microsoft 365 Roadmap item.

## Roadmap record (raw, authoritative for status and dates)
${JSON.stringify({
  id: item.id, title: item.title, status: item.status, targetDate: item.targetDate, previewDate: item.previewDate,
  products: item.products, clouds: item.clouds, releasePhase: item.releasePhase, platforms: item.platforms,
  created: item.created, modified: item.modified, moreInfoLink: item.moreInfoLink, roadmapUrl: item.roadmapUrl,
}, null, 2)}

Description:
${item.description}

## Desk
${desk ? `${desk.label}: ${desk.blurb}` : item.desk}

${existing ? `## Existing briefing (refresh it: keep what is still true, correct what changed, note the change)\n${existing}\n` : ''}
## Existing briefings you may link in relatedSlugs (slug | title)
${indexSlugs.slice(0, 400).join('\n') || '(none yet)'}

## Research steps
1. Search Microsoft Learn (MCP) for the feature, its admin controls and licensing. Open the one or two most relevant pages.
2. If Learn has nothing yet, search web (Microsoft domains only) for the Tech Community or adoption post.
3. Look for an official Microsoft video (Microsoft Mechanics, Microsoft 365 Community, Power Platform channels). Include only what you actually found.
4. Then write the briefing as JSON matching the required schema. Markdown inside section strings. No H1/H2 headings inside sections (the renderer adds them); use H3 or bold for sub-labels. British English.`;
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
  const sources = out.sources.filter((s) => isAllowedSourceUrl(s.url));
  if (!sources.some((s) => s.kind === 'roadmap')) sources.unshift({ title: `Microsoft 365 Roadmap ${item.id}`, url: item.roadmapUrl, kind: 'roadmap' });
  const fm = {
    title: out.title, slug, roadmapId: item.id, desk: item.desk, products: item.products, summary: out.summary,
    status: item.statusKey, releasePhase: item.releasePhase, clouds: item.clouds, platforms: item.platforms,
    targetDate: item.targetDate, previewDate: item.previewDate || null,
    risk: out.risk, cost: out.cost, impact: out.impact, defaultState: out.defaultState, action: out.action,
    licensing: { model: out.licensingModel, notes: out.licensingNotes },
    audiences: out.audiences, tags: [...new Set(out.tags.map((t) => slugify(t)).filter(Boolean))],
    sources, videos: out.videos.filter((v) => isAllowedSourceUrl(v.url)),
    related: out.relatedSlugs.filter((s) => indexSlugs.some((l) => l.startsWith(s + ' |')) && s !== slug).slice(0, 6),
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
  return { file, slug, title: out.title };
}
