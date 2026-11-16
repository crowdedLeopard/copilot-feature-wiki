#!/usr/bin/env node
/**
 * Lint: the wiki's health check. Validates every briefing's front matter, drops disallowed sources,
 * finds orphans and broken related links, and flags drift between a briefing and its raw roadmap record.
 * Invalid pages are moved to wiki/_quarantine/ so one bad page never breaks the site build.
 * A page still filed under one of the old desks is rewritten with its topic before it is checked.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { featureFrontmatter, isAllowedSourceUrl } from './lib/schema.mjs';
import { loadPages, loadConcepts } from './lib/pages.mjs';
import { RAW_DIR, WIKI_DIR, FEATURES_DIR, DATA_DIR, readJson, writeJson, appendLog, today } from './lib/util.mjs';
import { LEGACY_DESK_TOPIC } from '../config/taxonomy.mjs';

const QUARANTINE = path.join(WIKI_DIR, '_quarantine');

async function main() {
  const pages = await loadPages();
  const concepts = await loadConcepts();
  const slugs = new Set(pages.map((p) => p.slug));
  const conceptSlugs = new Set(concepts.map((c) => c.slug));
  const findings = { errors: [], warnings: [], info: [] };
  const inbound = new Map();
  let quarantined = 0;

  for (const page of pages) {
    const where = `features/${page.file}`;
    if (page.error) { findings.errors.push(`${where}: YAML parse error: ${page.error}`); await quarantine(page); quarantined++; continue; }
    const moved = await refileLegacyDesk(page);
    if (moved) findings.info.push(`${where}: desk "${moved.desk}" rewritten as topic "${moved.topic}"`);
    const check = featureFrontmatter.safeParse(page.data);
    if (!check.success) {
      findings.errors.push(`${where}: ${check.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ')}`);
      await quarantine(page); quarantined++; continue;
    }
    const fm = check.data;
    if (fm.slug !== page.slug) findings.warnings.push(`${where}: slug "${fm.slug}" does not match file name`);
    for (const s of fm.sources) if (!isAllowedSourceUrl(s.url)) findings.warnings.push(`${where}: source outside allowed domains: ${s.url}`);
    for (const v of fm.videos) if (!isAllowedSourceUrl(v.url)) findings.warnings.push(`${where}: video outside allowed domains: ${v.url}`);
    for (const r of fm.related) {
      if (!slugs.has(r) && !conceptSlugs.has(r)) findings.warnings.push(`${where}: related "${r}" does not exist`);
      else inbound.set(r, (inbound.get(r) || 0) + 1);
    }
    for (const m of page.body.matchAll(/\]\(\/(features|concepts)\/([a-z0-9-]+)\/?\)/g)) {
      const ok = m[1] === 'features' ? slugs.has(m[2]) : conceptSlugs.has(m[2]);
      if (!ok) findings.warnings.push(`${where}: body link to missing ${m[1]}/${m[2]}`);
    }
    const required = ["What's changing", 'Why it matters', 'Risk assessment', 'Cost and licensing', 'Scope', 'Governance guidance', 'Governance controls', 'Open questions'];
    for (const h of required) if (!page.body.includes(`## ${h}`)) findings.warnings.push(`${where}: missing section "${h}"`);
    // Governance controls: every briefing records where its controls live (admin UI path and API), each side sourced to Learn or marked not yet documented.
    if (!fm.controls.length) findings.warnings.push(`${where}: no governance controls recorded (queued for refresh)`);
    const sourceUrls = new Set(fm.sources.map((s) => s.url.replace(/\/+$/, '').toLowerCase()));
    for (const c of fm.controls) {
      if (!c.ui && !c.api) findings.info.push(`${where}: control "${c.governs}" has neither an admin UI nor an API documented`);
      for (const side of ['ui', 'api']) {
        const docs = c[side]?.docs;
        if (!docs) continue;
        if (!isAllowedSourceUrl(docs)) findings.warnings.push(`${where}: control "${c.governs}" ${side} docs outside allowed domains: ${docs}`);
        else if (!sourceUrls.has(docs.replace(/\/+$/, '').toLowerCase())) findings.warnings.push(`${where}: control "${c.governs}" ${side} docs not listed in sources: ${docs}`);
      }
    }
    if (!page.body.includes('<table class="controls">') && fm.controls.length) findings.warnings.push(`${where}: controls recorded in front matter but the Governance controls table is missing from the body`);
    if (fm.roadmapId) {
      const raw = await readJson(path.join(RAW_DIR, 'roadmap', 'items', `${fm.roadmapId}.json`));
      if (!raw) findings.info.push(`${where}: roadmap ${fm.roadmapId} no longer in scope or feed`);
      else {
        if (raw.statusKey !== fm.status) findings.warnings.push(`${where}: status drift. Briefing says ${fm.status}, roadmap says ${raw.statusKey} (queued for refresh)`);
        if (raw.modified !== fm.roadmapModified) findings.info.push(`${where}: roadmap record modified ${raw.modified}, briefing based on ${fm.roadmapModified}`);
      }
    }
    if (fm.confidence === 'low') findings.info.push(`${where}: low confidence, roadmap text only`);
    const ageDays = (Date.now() - new Date(fm.updated).getTime()) / 86400000;
    if (fm.status !== 'launched' && ageDays > 120) findings.warnings.push(`${where}: not reviewed for ${Math.round(ageDays)} days`);
  }
  for (const p of pages) if (!inbound.has(p.slug) && !p.error) findings.info.push(`features/${p.file}: orphan (no inbound related links)`);

  const report = [
    `# Lint report`, ``, `Generated ${new Date().toISOString()}. ${pages.length} briefings, ${concepts.length} concepts, ${quarantined} quarantined.`, ``,
    `## Errors (${findings.errors.length})`, ...findings.errors.map((e) => `- ${e}`), ``,
    `## Warnings (${findings.warnings.length})`, ...findings.warnings.map((e) => `- ${e}`), ``,
    `## Info (${findings.info.length})`, ...findings.info.map((e) => `- ${e}`), ``,
  ].join('\n');
  await fs.writeFile(path.join(WIKI_DIR, 'lint-report.md'), report);
  await writeJson(path.join(DATA_DIR, 'lint.json'), { generated: new Date().toISOString(), pages: pages.length - quarantined, quarantined, ...findings });
  const line = `- ${today()} lint: ${pages.length - quarantined} briefings ok, ${findings.errors.length} errors (${quarantined} quarantined), ${findings.warnings.length} warnings, ${findings.info.length} notes`;
  await appendLog(line);
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line.slice(2) + '\n');
}

/** Desks became topics in November 2026. Rewrite the one front-matter line so the page validates. */
async function refileLegacyDesk(page) {
  const desk = page.data.desk;
  const topic = LEGACY_DESK_TOPIC[desk];
  if (page.data.topic || !topic) return null;
  const next = page.raw.replace(/^desk:[^\n]*$/m, `topic: ${JSON.stringify(topic)}`);
  if (next === page.raw) return null;
  await fs.writeFile(path.join(FEATURES_DIR, page.file), next);
  page.raw = next;
  page.data = { ...page.data, topic };
  delete page.data.desk;
  return { desk, topic };
}

async function quarantine(page) {
  await fs.mkdir(QUARANTINE, { recursive: true });
  await fs.rename(path.join(FEATURES_DIR, page.file), path.join(QUARANTINE, `${today()}-${page.file}`));
}

main().catch((err) => { console.error(err); process.exit(1); });
