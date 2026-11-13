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
import { deskForProducts, statusFromRoadmap } from '../config/taxonomy.mjs';
import { RAW_DIR, DATA_DIR, FEATURES_DIR, readJson, writeJson, appendLog, today, stripHtml } from './lib/util.mjs';

const ROADMAP_URL = process.env.ROADMAP_URL || 'https://www.microsoft.com/releasecommunications/api/v1/m365';
const ITEMS_DIR = path.join(RAW_DIR, 'roadmap', 'items');

// Items that mention these are more likely to need governance attention; they go to the front of the queue.
const PRIORITY = /\b(admin|govern|agent|licen[cs]|billing|pay-as-you-go|payg|purview|security|dlp|sensitiv|retention|audit|control|policy|consumption|credit|identity|entra|default|tenant|compliance|mcp|autonomous|cost|usage report)/i;

// Desks the wiki exists for get written first; Modern Work is covered but trails.
const DESK_WEIGHT = { agents: 3, 'power-platform': 3, 'admin-billing': 3, copilot: 2, 'security-compliance': 2, 'modern-work': 0 };

function priorityFor(item, reason) {
  const ageDays = (Date.now() - new Date(item.modified).getTime()) / 86400000;
  let p = DESK_WEIGHT[item.desk] ?? 0;
  if (reason !== 'no-briefing') p += 4; // keep existing briefings true before writing new ones
  if (PRIORITY.test(item.title + ' ' + item.description)) p += 2;
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
    desk: deskForProducts(products),
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
  const inScope = all.map(normalise).filter((i) => i.desk && i.statusKey !== 'cancelled');
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
        desk: item.desk,
        reason,
        priority: priorityFor(item, reason),
        modified: item.modified,
        slug: brief?.slug || null,
      });
    }
  }

  // Refreshes first, then governance-relevant items, then most recently modified.
  queue.sort((a, b) => b.priority - a.priority || b.modified.localeCompare(a.modified));

  const catalog = inScope
    .map(({ descriptionHtml, ...rest }) => ({ ...rest, description: rest.description.slice(0, 600), briefing: briefings.get(rest.id)?.slug || null }))
    .sort((a, b) => b.modified.localeCompare(a.modified));

  await writeJson(path.join(DATA_DIR, 'catalog.json'), { generated: new Date().toISOString(), count: catalog.length, items: catalog });
  await writeJson(path.join(DATA_DIR, 'queue.json'), { generated: new Date().toISOString(), count: queue.length, items: queue });

  const summary = `- ${today()} ingest: ${all.length} roadmap items fetched, ${inScope.length} in scope, ${added} new, ${changed} changed, ${queue.length} queued for compile (${Math.round((Date.now() - started) / 1000)}s)`;
  await appendLog(summary);
  console.log(summary);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary.slice(2) + '\n');
}

main().catch((err) => { console.error(err); process.exit(1); });
