#!/usr/bin/env node
/**
 * Ingest: pull the public Microsoft 365 Roadmap, keep the in-scope items as immutable raw
 * snapshots, and work out which items need a briefing written or refreshed.
 *
 * Writes:
 *   raw/roadmap/items/<id>.json   one file per in-scope roadmap item (raw layer, never edited by hand)
 *   data/catalog.json             lightweight list of every in-scope item (powers the Radar page)
 *   data/queue.json               items the compile step should write or refresh, best first
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { TOPIC_IDS, topicForProducts, statusFromRoadmap } from '../config/taxonomy.mjs';
import { RAW_DIR, DATA_DIR, FEATURES_DIR, readJson, writeJson, appendLog, today, stripHtml } from './lib/util.mjs';

const ROADMAP_URL = process.env.ROADMAP_URL || 'https://www.microsoft.com/releasecommunications/api/v1/m365';
const ITEMS_DIR = path.join(RAW_DIR, 'roadmap', 'items');

// Admin-relevance signals: cost, risk and control words. An item whose title or description carries
// one is more likely to change something a tenant has to pay for, secure or configure, so it goes to
// the front of its topic's queue.
const PRIORITY = /\b(admin|govern|agent|licen[cs]|billing|pay-as-you-go|payg|purview|security|dlp|sensitiv|retention|audit|control|polic(?:y|ies)|consumption|credit|identity|entra|default|tenant|compliance|mcp|autonomous|cost|usage report|guest|external|sharing|anonymous|powershell|graph|retire|deprecat|end of support|block|restrict|encrypt|ediscovery|residency|multi-geo|recording|transcri|storage|quota|meter|opt[- ]?out)/i;
// Inside Governance & security, the admin centre (licensing, billing, usage reports) leads Purview, Entra and Defender.
const ADMIN_CENTRE = /^Microsoft 365 admin center$/i;

// Priority orders items within a topic. It never weights one topic against another: the compile step
// shares every run equally across the five topics (selectQueue in lib/briefing.mjs), so a topic with
// a long queue, such as Modern Work, cannot be starved by the others.
function priorityFor(item, reason) {
  const ageDays = (Date.now() - new Date(item.modified).getTime()) / 86400000;
  let p = 0;
  if (reason !== 'no-briefing') p += 4; // keep existing briefings true before writing new ones
  if (PRIORITY.test(item.title + ' ' + item.description)) p += 2;
  if (PRIORITY.test(item.title)) p += 1; // a control named in the title is nearly always one
  if (item.topic === 'governance' && !item.products.some((name) => ADMIN_CENTRE.test(name))) p -= 1;
  if (ageDays <= 30) p += 2; else if (ageDays <= 120) p += 1;
  if (item.statusKey === 'in-development') p += 1; // readers need lead time
  return p;
}

async function fetchRoadmap() {
  const res = await fetch(ROADMAP_URL, { headers: { accept: 'application/json', 'user-agent': 'release-ledger/1.0 (+github pages wiki)' } });
  if (!res.ok) throw new Error(`Roadmap fetch failed: ${res.status} ${res.statusText}`);
  const items = await res.json();
  if (!Array.isArray(items) || items.length < 100) throw new Error(`Roadmap payload looks wrong (${items?.length} items)`);
  return items;
}

function normalise(item) {
  const tc = item.tagsContainer || {};
  const names = (arr) => (arr || []).map((t) => t.tagName);
  const products = names(tc.products);
  return {
    id: item.id,
    title: item.title.trim(),
    description: stripHtml(item.description || ''),
    descriptionHtml: item.description || '',
    moreInfoLink: item.moreInfoLink || null,
    status: item.status,
    statusKey: statusFromRoadmap(item.status),
    targetDate: item.publicDisclosureAvailabilityDate || null,
    previewDate: item.publicPreviewDate || null,
    created: item.created,
    modified: item.modified,
    products,
    clouds: names(tc.cloudInstances),
    releasePhase: names(tc.releasePhase),
    platforms: names(tc.platforms),
    topic: topicForProducts(products),
    roadmapUrl: `https://www.microsoft.com/microsoft-365/roadmap?id=${item.id}`,
  };
}

async function existingBriefings() {
  const map = new Map();
  let files = [];
  try { files = await fs.readdir(FEATURES_DIR); } catch { return map; }
  for (const f of files) {
    if (!f.endsWith('.md')) continue;
    const md = await fs.readFile(path.join(FEATURES_DIR, f), 'utf8');
    const id = md.match(/^roadmapId:\s*(\d+)/m)?.[1];
    const status = md.match(/^status:\s*"?([a-z-]+)"?/m)?.[1];
    const modified = md.match(/^roadmapModified:\s*"?([^"\n]+)"?/m)?.[1];
    if (id) map.set(Number(id), { file: f, slug: f.replace(/\.md$/, ''), status, roadmapModified: modified });
  }
  return map;
}

async function main() {
  const started = Date.now();
  const all = await fetchRoadmap();
  const inScope = all.map(normalise).filter((i) => i.topic && i.statusKey !== 'cancelled');
  await fs.mkdir(ITEMS_DIR, { recursive: true });

  const briefings = await existingBriefings();
  const queue = [];
  let added = 0, changed = 0;

  for (const item of inScope) {
    const file = path.join(ITEMS_DIR, `${item.id}.json`);
    const prev = await readJson(file);
    const isNew = !prev;
    const isChanged = prev && prev.modified !== item.modified;
    if (isNew || isChanged) {
      await writeJson(file, { ...item, fetchedAt: new Date().toISOString() });
      if (isNew) added++; else changed++;
    }
    const brief = briefings.get(item.id);
    let reason = null;
    if (!brief) reason = 'no-briefing';
    else if (brief.roadmapModified && brief.roadmapModified !== item.modified) reason = 'roadmap-updated';
    else if (brief.status && brief.status !== item.statusKey) reason = 'status-changed';
    if (reason) {
      queue.push({
        id: item.id,
        title: item.title,
        topic: item.topic,
        reason,
        priority: priorityFor(item, reason),
        modified: item.modified,
        slug: brief?.slug || null,
      });
    }
  }

  // Refreshes first, then the most admin-relevant items, then most recently modified. The compile
  // step deals this order out topic by topic, so no topic has to wait for another.
  queue.sort((a, b) => b.priority - a.priority || b.modified.localeCompare(a.modified));
  const byTopic = Object.fromEntries(TOPIC_IDS.map((id) => [id, queue.filter((q) => q.topic === id).length]));

  const catalog = inScope
    .map(({ descriptionHtml, ...rest }) => ({ ...rest, description: rest.description.slice(0, 600), briefing: briefings.get(rest.id)?.slug || null }))
    .sort((a, b) => b.modified.localeCompare(a.modified));

  await writeJson(path.join(DATA_DIR, 'catalog.json'), { generated: new Date().toISOString(), count: catalog.length, items: catalog });
  await writeJson(path.join(DATA_DIR, 'queue.json'), { generated: new Date().toISOString(), count: queue.length, byTopic, items: queue });

  const depth = Object.entries(byTopic).map(([id, n]) => `${id} ${n}`).join(', ');
  const summary = `- ${today()} ingest: ${all.length} roadmap items fetched, ${inScope.length} in scope, ${added} new, ${changed} changed, ${queue.length} queued for compile (${depth}) (${Math.round((Date.now() - started) / 1000)}s)`;
  await appendLog(summary);
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary.slice(2) + '\n');
}

main().catch((err) => { console.error(err); process.exit(1); });
