#!/usr/bin/env node
/**
 * Ingest Message Center: read the Microsoft 365 Message Center posts of one tenant from Microsoft
 * Graph, keep the ones Microsoft sends to every tenant as immutable raw snapshots, and index them for
 * the roadmap ingest, the writer, the verifier and the site.
 *
 * Writes:
 *   raw/message-center/<MC id>.json   one file per published post (text as Microsoft wrote it, with the
 *                                     roadmap ids it names, its dates and its act-by deadline)
 *   data/message-center.json          index of every stored post (no bodies) plus the count of posts
 *                                     withheld by the publication screen, by reason code only
 *
 * Posts that fail the screen in pipeline/lib/message-center.mjs (data privacy posts, attachments,
 * tenant names or domains, email addresses, GUIDs, wording aimed at one tenant) are never written,
 * logged or printed. If a stored post later fails the screen (Microsoft edited it), its file is removed.
 *
 * Access. The step needs an app registration in the owner's tenant with the application permission
 * ServiceMessage.Read.All (admin consent given) and one of two credentials:
 *   - a federated credential for this repository's GitHub Actions (no secret to store or rotate), used
 *     when the job runs with `id-token: write`; or
 *   - a client secret in MC_CLIENT_SECRET.
 * Env: MC_TENANT_ID, MC_CLIENT_ID (required to run; without them the step says it is not configured
 * and exits 0), MC_CLIENT_SECRET (optional), MC_TENANT_WORDS (optional, comma-separated names and
 * domains to screen for, on top of what GET /organization returns when the app may read it),
 * MC_FIXTURE (a local JSON file of Graph messages, for testing without a tenant).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson, appendLog, today } from './lib/util.mjs';
import { MC_DIR, MC_INDEX, GRAPH_MESSAGES_URL, messageRecord, normaliseMessage, publicationCheck, WITHHOLD_REASON } from './lib/message-center.mjs';

const TENANT = (process.env.MC_TENANT_ID || '').trim();
const CLIENT = (process.env.MC_CLIENT_ID || '').trim();
const SECRET = (process.env.MC_CLIENT_SECRET || '').trim();
const FIXTURE = (process.env.MC_FIXTURE || '').trim();
const EXTRA_WORDS = (process.env.MC_TENANT_WORDS || '').split(',').map((s) => s.trim()).filter(Boolean);
const UA = 'release-ledger/1.0 (+github pages wiki)';

async function summary(line) {
  console.log(line);
  if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n');
}

// ---------------------------------------------------------------------------------------------
// Authentication: client credentials, with a secret or with the GitHub Actions OIDC token.

async function githubIdToken() {
  const url = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
  const bearer = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
  if (!url || !bearer) return null;
  const res = await fetch(`${url}&audience=${encodeURIComponent('api://AzureADTokenExchange')}`, { headers: { authorization: `Bearer ${bearer}`, accept: 'application/json' } });
  if (!res.ok) throw new Error(`GitHub did not issue an OIDC token (${res.status}). The job needs "id-token: write" in its permissions.`);
  return (await res.json()).value;
}

/** One claim from a JWT's payload, without verifying it: only used to explain a failed sign-in. */
function jwtClaim(jwt, name) {
  try { return JSON.parse(Buffer.from(String(jwt).split('.')[1], 'base64url').toString('utf8'))[name] ?? null; } catch { return null; }
}

async function graphToken() {
  const body = new URLSearchParams({ client_id: CLIENT, scope: 'https://graph.microsoft.com/.default', grant_type: 'client_credentials' });
  let how;
  if (SECRET) { body.set('client_secret', SECRET); how = 'client secret'; }
  else {
    const assertion = await githubIdToken();
    if (!assertion) throw new Error('No credential: set the MC_CLIENT_SECRET secret, or run in GitHub Actions with a federated credential on the app registration.');
    body.set('client_assertion_type', 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer');
    body.set('client_assertion', assertion);
    how = 'federated credential (GitHub Actions OIDC)';
  }
  const res = await fetch(`https://login.microsoftonline.com/${encodeURIComponent(TENANT)}/oauth2/v2.0/token`, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded', 'user-agent': UA }, body });
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.access_token) {
    const code = json.error || res.status;
    // The subject GitHub put in its token is what the federated credential has to match. It is not a secret
    // (owner, repository and branch, with GitHub's numeric ids on repositories that use the immutable format).
    const presented = how.startsWith('federated') ? jwtClaim(body.get('client_assertion'), 'sub') : null;
    const hint = {
      invalid_client: `Entra did not accept the credential. For a federated credential, its subject must be exactly what GitHub presented${presented ? ` (${presented})` : ' (repo:<owner>/<repo>:ref:refs/heads/main, or with @<id> after the owner and repository on newer repositories)'} and the audience api://AzureADTokenExchange. For a secret, check it has not expired.`,
      unauthorized_client: 'The app registration was not found in this tenant, or MC_CLIENT_ID is wrong.',
      invalid_request: 'The token request was malformed; check MC_TENANT_ID.',
    }[json.error] || '';
    throw new Error(`Could not sign in to Microsoft Graph (${code}, via ${how}). ${hint} ${json.error_description ? `Entra said: ${String(json.error_description).split('\n')[0].slice(0, 400)}` : ''}`.trim());
  }
  return { token: json.access_token, how };
}

async function graphGet(url, token, attempt = 0) {
  const res = await fetch(url, { headers: { authorization: `Bearer ${token}`, accept: 'application/json', 'user-agent': UA, prefer: 'odata.maxpagesize=200' } });
  if (res.status === 429 || res.status === 503) {
    if (attempt >= 4) throw new Error(`Microsoft Graph kept answering ${res.status}`);
    const wait = Number(res.headers.get('retry-after') || 10) * 1000;
    await new Promise((r) => setTimeout(r, Math.min(wait, 60_000)));
    return graphGet(url, token, attempt + 1);
  }
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = json.error?.message || res.statusText;
    const hint = res.status === 403 ? ' The app needs the application permission ServiceMessage.Read.All with admin consent granted.' : '';
    throw new Error(`Microsoft Graph ${res.status} for ${url.split('?')[0]}: ${msg}.${hint}`);
  }
  return json;
}

async function fetchAllMessages(token) {
  const out = [];
  let url = GRAPH_MESSAGES_URL;
  let pages = 0;
  while (url && pages < 100) {
    const page = await graphGet(url, token);
    out.push(...(page.value || []));
    url = page['@odata.nextLink'] || null;
    pages++;
  }
  return out;
}

/** The tenant's own name and domains, to screen for. Needs Organization.Read.All; without it the words come from MC_TENANT_WORDS only. */
async function tenantWords(token) {
  const words = new Set(EXTRA_WORDS);
  try {
    const org = await graphGet('https://graph.microsoft.com/v1.0/organization?$select=displayName,verifiedDomains', token);
    for (const o of org.value || []) {
      if (o.displayName) words.add(o.displayName);
      for (const d of o.verifiedDomains || []) if (d.name) { words.add(d.name); words.add(d.name.split('.')[0]); }
    }
    return { words: [...words], fromGraph: true };
  } catch {
    return { words: [...words], fromGraph: false };
  }
}

// ---------------------------------------------------------------------------------------------

async function main() {
  const started = Date.now();
  if (!FIXTURE && (!TENANT || !CLIENT)) {
    await summary('message-center: not configured (no MC_TENANT_ID / MC_CLIENT_ID), skipped. Message Center posts are not part of this run.');
    return;
  }
  let raw, words = { words: EXTRA_WORDS, fromGraph: false }, how = 'fixture file';
  if (FIXTURE) {
    raw = JSON.parse(await fs.readFile(FIXTURE, 'utf8'));
    if (!Array.isArray(raw)) raw = raw.value || [];
  } else {
    const auth = await graphToken();
    how = auth.how;
    [raw, words] = await Promise.all([fetchAllMessages(auth.token), tenantWords(auth.token)]);
  }
  if (!Array.isArray(raw)) throw new Error('Message Center payload was not a list');

  await fs.mkdir(MC_DIR, { recursive: true });
  // A post that names a roadmap item the wiki tracks is filed under that item's topic, so it sits with its briefing.
  const catalog = await readJson(path.join(DATA_DIR, 'catalog.json'), { items: [] });
  const topicByRoadmapId = new Map((catalog.items || []).filter((i) => i.topic).map((i) => [i.id, i.topic]));
  const fetchedAt = new Date().toISOString();
  const kept = new Map(); // id -> stored record
  const withheld = [];    // { id, reasons }
  let added = 0, changed = 0, outOfScope = 0;

  for (const item of raw) {
    if (!item?.id) continue;
    const msg = normaliseMessage(item, fetchedAt, topicByRoadmapId);
    if (!msg) { outOfScope++; continue; }
    const check = publicationCheck(msg, { tenantWords: words.words, hasAttachments: Boolean(item.hasAttachments) });
    if (!check.ok) {
      withheld.push({ id: item.id, reasons: check.reasons });
      await fs.rm(path.join(MC_DIR, `${item.id}.json`), { force: true }); // a post Microsoft edited into something tenant-specific leaves the record
      continue;
    }
    const parsed = messageRecord.safeParse(msg);
    if (!parsed.success) { console.warn(`${item.id}: record failed validation (${parsed.error.issues.map((i) => i.path.join('.') + ' ' + i.message).join('; ')}), skipped`); continue; }
    const file = path.join(MC_DIR, `${item.id}.json`);
    const prev = await readJson(file, null);
    if (!prev) added++;
    else if (prev.lastModified !== parsed.data.lastModified || prev.body !== parsed.data.body) changed++;
    if (!prev || prev.lastModified !== parsed.data.lastModified || prev.body !== parsed.data.body) await writeJson(file, parsed.data);
    kept.set(item.id, { ...parsed.data, fetchedAt: prev && prev.lastModified === parsed.data.lastModified ? prev.fetchedAt : fetchedAt });
  }

  // Posts Microsoft has since expired stay in the ledger from their stored files; the index marks them as no longer in the feed.
  const inFeed = new Set(kept.keys());
  const withheldIds = new Set(withheld.map((w) => w.id));
  for (const f of (await fs.readdir(MC_DIR)).filter((f) => f.endsWith('.json'))) {
    const id = f.replace(/\.json$/, '');
    if (inFeed.has(id) || withheldIds.has(id)) continue;
    const stored = await readJson(path.join(MC_DIR, f), null);
    if (stored) kept.set(id, stored);
  }

  const posts = [...kept.values()]
    .map(({ body, bodyHtml, summary: s, ...rest }) => ({ ...rest, summary: s.slice(0, 240), inFeed: inFeed.has(rest.id), bodyLength: body.length }))
    .sort((a, b) => String(b.lastModified).localeCompare(String(a.lastModified)));
  const byReason = {};
  for (const w of withheld) for (const r of w.reasons) byReason[r] = (byReason[r] || 0) + 1;
  const actBy = posts.filter((p) => p.actionRequiredBy && p.actionRequiredBy.slice(0, 10) >= today()).length;
  await writeJson(MC_INDEX, {
    generated: fetchedAt, source: FIXTURE ? 'fixture' : 'microsoft-graph', count: posts.length, inFeed: inFeed.size, actBy,
    screen: { tenantWordsFromGraph: words.fromGraph, tenantWordCount: words.words.length, withheld: withheld.length, byReason, reasons: WITHHOLD_REASON },
    withheld: withheld.map((w) => ({ id: w.id, reasons: w.reasons })).sort((a, b) => a.id.localeCompare(b.id)),
    posts,
  });

  const reasons = Object.entries(byReason).map(([r, n]) => `${n} ${r}`).join(', ') || 'none';
  const line = `- ${today()} message-center: ${raw.length} posts read (${how}), ${inFeed.size} in scope and published, ${added} new, ${changed} changed, ${outOfScope} outside the topics, ${withheld.length} withheld by the tenant screen (${reasons}); ${posts.length} in the ledger, ${actBy} with an act-by date ahead (${Math.round((Date.now() - started) / 1000)}s)`;
  await appendLog(line);
  await summary(line.slice(2));
  if (!words.fromGraph && !FIXTURE) await summary('message-center: the app may not read the organisation record (Organization.Read.All), so the tenant screen uses MC_TENANT_WORDS only. Grant the permission, or set the variable, to screen for the tenant\'s own name and domains.');
}

main().catch(async (err) => {
  console.error(err);
  await summary(`message-center: failed. ${err.message}`);
  process.exit(1);
});
