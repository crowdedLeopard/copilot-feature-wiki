#!/usr/bin/env node
/**
 * Weekly digest to Microsoft Teams. Reads the briefings, builds an Adaptive Card that leads with the
 * week's "Act now" items (one line each on risk, cost and where the control lives, linking to the
 * briefing) and posts it to a Teams channel through a Workflows webhook. No model is involved: the
 * card is assembled from the ratings and rationales the writer and verifier already produced.
 *
 *   TEAMS_WEBHOOK_URL       the webhook URL from the channel's "Post to a channel when a webhook request
 *                           is received" workflow (repository secret). Never printed.
 *   TEAMS_DIGEST_DAYS       how many days back counts as "this week" (7)
 *   TEAMS_DIGEST_MAX_ITEMS  most Act now items in the card before "N more" (8)
 *   TEAMS_DIGEST_DRY_RUN    1 builds the card and writes it to data/ without posting
 *   SITE_URL, SITE_BASE     where the briefings live (https://crowdedleopard.github.io, /copilot-feature-wiki)
 *
 * Writes data/teams-digest.json (the exact request body) and data/teams-digest.md (the same digest as
 * Markdown, also appended to the GitHub step summary). Exit 0 with a warning when there is no webhook,
 * so an unconfigured repository does not fail every Monday; exit 1 when a post is refused.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { loadPages } from './lib/pages.mjs';
import { DATA_DIR, WIKI_DIR, writeJson } from './lib/util.mjs';
import { buildDigest, digestMarkdown, isoWeek, DEFAULT_SITE } from './lib/teams-card.mjs';

const env = (k, d) => (process.env[k] ?? '').trim() || d;
const dryRun = ['1', 'true', 'yes'].includes(env('TEAMS_DIGEST_DRY_RUN', '').toLowerCase()) || process.argv.includes('--dry-run');
const site = { url: env('SITE_URL', DEFAULT_SITE.url), base: env('SITE_BASE', DEFAULT_SITE.base) };

async function summary(md) {
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `${md}\n`);
}

async function post(url, payload) {
  const body = JSON.stringify(payload);
  const waits = [0, 5000, 20000];
  let last = null;
  for (let attempt = 0; attempt < waits.length; attempt++) {
    if (waits[attempt]) await new Promise((r) => setTimeout(r, waits[attempt]));
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 30000);
    try {
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body, signal: ctrl.signal });
      const text = (await res.text().catch(() => '')).slice(0, 300);
      if (res.ok) return { ok: true, status: res.status, attempt: attempt + 1 };
      last = { ok: false, status: res.status, text, attempt: attempt + 1 };
      // 429 (throttled) and 5xx are worth another go; anything else is a problem with the request or the workflow.
      if (res.status !== 429 && res.status < 500) return last;
    } catch (err) {
      last = { ok: false, status: 0, text: err.name === 'AbortError' ? 'timed out after 30s' : err.message, attempt: attempt + 1 };
    } finally {
      clearTimeout(timer);
    }
  }
  return last;
}

async function main() {
  const now = new Date();
  const { year, week } = isoWeek(now);
  const slug = `${year}-w${String(week).padStart(2, '0')}`;
  const digestExists = await fs.access(path.join(WIKI_DIR, 'digests', `${slug}.md`)).then(() => true, () => false);
  const pages = await loadPages();
  const { model, payload, bytes } = buildDigest(pages, {
    now,
    days: Number(env('TEAMS_DIGEST_DAYS', '7')) || 7,
    maxItems: Number(env('TEAMS_DIGEST_MAX_ITEMS', '8')) || 8,
    site,
    digestExists,
  });
  const md = digestMarkdown(model);
  await writeJson(path.join(DATA_DIR, 'teams-digest.json'), payload);
  await fs.writeFile(path.join(DATA_DIR, 'teams-digest.md'), `${md}\n`);
  console.log(`teams digest: ${model.headline} (${model.counts.updated} updated, ${model.actNow.length} act now shown, ${bytes} bytes)`);

  const webhook = env('TEAMS_WEBHOOK_URL', '');
  if (dryRun) {
    console.log('teams digest: dry run, not posted. Card in data/teams-digest.json.');
    await summary(`> Dry run: the card below was built but not posted.\n\n${md}`);
    return;
  }
  if (!webhook) {
    console.log('::warning title=Teams digest not posted::No TEAMS_WEBHOOK_URL secret. Add the channel workflow\'s webhook URL as a repository secret with that name (see README, "The weekly Teams digest").');
    await summary(`> **Not posted.** There is no \`TEAMS_WEBHOOK_URL\` secret yet. The card below is what would have been sent.\n\n${md}`);
    return;
  }
  if (!/^https:\/\//i.test(webhook) && !/^http:\/\/(127\.0\.0\.1|localhost)[:/]/i.test(webhook)) { // plain http only for a local test server
    console.log('::error title=Teams digest not posted::TEAMS_WEBHOOK_URL does not look like an https URL. Paste the full webhook URL the Teams workflow showed when it was saved.');
    process.exit(1);
  }
  const result = await post(webhook, payload);
  if (result.ok) {
    console.log(`teams digest: posted (HTTP ${result.status}, attempt ${result.attempt}).`);
    await summary(`Posted to Teams (HTTP ${result.status}).\n\n${md}`);
    return;
  }
  const hint = result.status === 401 || result.status === 403
    ? ' The workflow refused the call: in Teams, open the workflow and set "Who can trigger the flow" to Anyone, or the URL has been regenerated.'
    : result.status === 404 ? ' Nothing answered at that URL: the workflow may have been deleted or turned off, or the secret holds an old URL.'
      : result.status === 400 ? ' Teams rejected the card. Open data/teams-digest.json from the run artifact to see what was sent.' : '';
  console.log(`::error title=Teams digest not posted::HTTP ${result.status || 'no response'} after ${result.attempt} attempt(s). ${result.text}${hint}`);
  await summary(`**Not posted.** HTTP ${result.status || 'no response'}: ${result.text}${hint}\n\n${md}`);
  process.exit(1);
}

main().catch((err) => { console.error(err); process.exit(1); });
