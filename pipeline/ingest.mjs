#!/usr/bin/env node
/**
 * Ingest: pull the public Microsoft 365 Roadmap, keep the in-scope items as immutable raw
 * snapshots, and work out which items need a briefing written or refreshed.
 *
 * Writes:
 *   raw/roadmap/items/<id>.json   one file per in-scope roadmap item (raw layer, never edited by hand)
 *   data/catalog.json             lightweight list of every in-scope item (powers the Radar page)
 *   data/queue.json               items the compile step should write or refresh, best first
 *   data/lifecycle.json           when each briefed item was last seen on the roadmap, and which are missing
 *
 * Reads data/message-center.json (written by ingest-message-center.mjs, which runs first): an item that
 * Microsoft has sent a Message Center post about goes to the front of its topic's queue, and a briefing
 * whose post was published or revised after the page was last written is queued for a refresh.
 *
 * It also archives briefings whose roadmap item Microsoft has cancelled, or which have been gone from
 * the roadmap for the grace period (see lib/lifecycle.mjs), and queues live pages that are due a re-check.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { TOPIC_IDS, topicForProducts, statusFromRoadmap } from '../config/taxonomy.mjs';
import { RAW_DIR, DATA_DIR, FEATURES_DIR, readJson, writeJson, appendLog, today, stripHtml } from './lib/util.mjs';
import { archiveBriefing, isReviewDue, daysBetween, REMOVED_GRACE_DAYS } from './lib/lifecycle.mjs';
import { loadMessageIndex, messagesForRoadmap } from './lib/message-center.mjs';

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
function priorityFor(item, reason, posts = []) {
  const ageDays = (Date.now() - new Date(item.modified).getTime()) / 86400000;
  let p = 0;
  if (['roadmap-updated', 'status-changed', 'restored'].includes(reason)) p += 4; // keep existing briefings true before writing new ones
  if (reason === 'message-center') p += 3; // Microsoft has told tenants something new about a briefed item
  if (posts.length) p += 2; // a Message Center post means the change is reaching tenants, with dates
  if (posts.some((m) => m.actionRequiredBy && m.actionRequiredBy.slice(0, 10) >= today())) p += 1; // and a deadline
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
    const updated = md.match(/^updated:\s*"?(\d{4}-\d{2}-\d{2})"?/m)?.[1];
    const archived = /^archived:/m.test(md);
    if (id) map.set(Number(id), { file: f, slug: f.replace(/\.md$/, ''), status, roadmapModified: modified, updated, archived });
  }
  return map;
}

async function main() {
  const started = Date.now();
  const all = await fetchRoadmap();
  const feed = all.map(normalise).filter((i) => i.topic); // everything in scope, cancelled items included
  const inScope = feed.filter((i) => i.statusKey !== 'cancelled'); // what the radar tracks and the queue draws from
  const feedById = new Map(feed.map((i) => [i.id, i]));
  await fs.mkdir(ITEMS_DIR, { recursive: true });

  const briefings = await existingBriefings();
  const messages = await loadMessageIndex();
  const queue = [];
  let added = 0, changed = 0, reviewDue = 0, withPosts = 0, postRefresh = 0;

  // Briefings whose roadmap item was cancelled, or has gone from the feed, are archived in place. A
  // missing item gets a grace period first, because a feed hiccup should not archive anything.
  const lifecycle = await readJson(path.join(DATA_DIR, 'lifecycle.json'), { seen: {}, missing: {} });
  lifecycle.seen ||= {}; lifecycle.missing ||= {};
  const archivedNow = [];
  for (const [id, brief] of briefings) {
    if (brief.archived) { delete lifecycle.seen[id]; delete lifecycle.missing[id]; continue; }
    const item = feedById.get(id);
    if (item && item.statusKey === 'cancelled') {
      if (await archiveBriefing(brief.slug, { reason: 'cancelled', lastSeen: today() })) archivedNow.push(`${brief.slug} (cancelled by Microsoft)`);
      delete lifecycle.seen[id]; delete lifecycle.missing[id];
    } else if (item) {
      lifecycle.seen[id] = today();
      delete lifecycle.missing[id];
    } else if ((await readJson(path.join(ITEMS_DIR, `${id}.json`)))?.statusKey === 'cancelled') {
      // Microsoft drops a cancelled item from the feed soon after marking it cancelled. Its last record is
      // Microsoft's last word on it, so the page is archived as cancelled rather than waiting out the grace.
      if (await archiveBriefing(brief.slug, { reason: 'cancelled', lastSeen: lifecycle.seen[id] || null })) archivedNow.push(`${brief.slug} (cancelled by Microsoft, then removed from the roadmap)`);
      delete lifecycle.seen[id]; delete lifecycle.missing[id];
    } else {
      const gone = lifecycle.missing[id] || { lastSeen: lifecycle.seen[id] || null, missingSince: today() };
      lifecycle.missing[id] = gone;
      if (daysBetween(gone.missingSince) >= REMOVED_GRACE_DAYS) {
        if (await archiveBriefing(brief.slug, { reason: 'removed', lastSeen: gone.lastSeen })) archivedNow.push(`${brief.slug} (left the roadmap)`);
        delete lifecycle.seen[id]; delete lifecycle.missing[id];
      }
    }
  }
  await writeJson(path.join(DATA_DIR, 'lifecycle.json'), { generated: new Date().toISOString(), graceDays: REMOVED_GRACE_DAYS, seen: lifecycle.seen, missing: lifecycle.missing });

  // The raw record is what the writer and the independent check treat as authoritative for status and dates, so it
  // has to follow a cancellation too: a cancelled item that already has a record or a briefing is recorded as
  // cancelled, and a status change counts as a change even when Microsoft leaves the modified date alone. (On
  // 19 Nov 2026 a page was archived as cancelled while its record still said Launched; the check faulted the page
  // for contradicting the record and the correction put it back online.) Cancelled items are not queued.
  for (const item of feed) {
    const file = path.join(ITEMS_DIR, `${item.id}.json`);
    const prev = await readJson(file);
    const brief = briefings.get(item.id);
    if (item.statusKey === 'cancelled' && !prev && !brief) continue;
    const isNew = !prev;
    const isChanged = prev && (prev.modified !== item.modified || prev.status !== item.status);
    if (isNew || isChanged) {
      await writeJson(file, { ...item, fetchedAt: new Date().toISOString() });
      if (isNew) added++; else changed++;
    }
    if (item.statusKey === 'cancelled') continue;
    const posts = messagesForRoadmap(messages, item.id);
    if (posts.length) withPosts++;
    let reason = null;
    if (!brief) reason = 'no-briefing';
    else if (brief.archived) reason = 'restored'; // the item is back on the roadmap: the rewrite replaces the archived page
    else if (brief.roadmapModified && brief.roadmapModified !== item.modified) reason = 'roadmap-updated';
    else if (brief.status && brief.status !== item.statusKey) reason = 'status-changed';
    else if (brief.updated && posts.some((m) => String(m.lastModified).slice(0, 10) > brief.updated)) { reason = 'message-center'; postRefresh++; } // Microsoft posted or revised a notice since the page was written
    else if (isReviewDue(brief)) { reason = 'review-due'; reviewDue++; } // untouched too long: re-check controls, licensing and status
    if (reason) {
      queue.push({
        id: item.id,
        title: item.title,
        topic: item.topic,
        reason,
        priority: priorityFor(item, reason, posts),
        modified: item.modified,
        slug: brief?.slug || null,
        ...(posts.length ? { messageCenter: posts.map((m) => m.id) } : {}),
      });
    }
  }

  // Refreshes first, then the most admin-relevant items, then most recently modified. The compile
  // step deals this order out topic by topic, so no topic has to wait for another.
  queue.sort((a, b) => b.priority - a.priority || b.modified.localeCompare(a.modified));
  const byTopic = Object.fromEntries(TOPIC_IDS.map((id) => [id, queue.filter((q) => q.topic === id).length]));

  const catalog = inScope
    .map(({ descriptionHtml, ...rest }) => ({ ...rest, description: rest.description.slice(0, 600), briefing: briefings.get(rest.id)?.slug || null, messageCenter: messagesForRoadmap(messages, rest.id).map((m) => m.id) }))
    .sort((a, b) => b.modified.localeCompare(a.modified));

  await writeJson(path.join(DATA_DIR, 'catalog.json'), { generated: new Date().toISOString(), count: catalog.length, items: catalog });
  await writeJson(path.join(DATA_DIR, 'queue.json'), { generated: new Date().toISOString(), count: queue.length, byTopic, items: queue });

  const depth = Object.entries(byTopic).map(([id, n]) => `${id} ${n}`).join(', ');
  const missing = Object.keys(lifecycle.missing).length;
  const summary = `- ${today()} ingest: ${all.length} roadmap items fetched, ${inScope.length} in scope, ${added} new, ${changed} changed, ${queue.length} queued for compile (${depth}; ${reviewDue} review due; ${postRefresh} refresh after a Message Center post), ${withPosts} with Message Center posts, ${archivedNow.length} archived, ${missing} briefed item(s) missing from the feed (${Math.round((Date.now() - started) / 1000)}s)`;
  await appendLog(summary);
  for (const a of archivedNow) await appendLog(`- ${today()} archive: ${a}`);
  console.log(summary);
  for (const a of archivedNow) console.log(`archived ${a}`);
  if (process.env.GITHUB_STEP_SUMMARY) {
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, summary.slice(2) + '\n');
    for (const a of archivedNow) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `- archived ${a}\n`);
  }
}

main().catch((err) => { console.error(err); process.exit(1); });
