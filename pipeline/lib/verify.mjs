/**
 * Verification: the independent check every briefing passes before it is published.
 *
 * A second model, with a fresh context and no sight of the writer's work, reads the page as
 * readers see it and checks each specific statement against Microsoft Learn. It returns one claim
 * per statement (see verify-schema.mjs). This module does everything around that judgement:
 *
 *   - precheck()          deterministic checks before the model runs: are the cited pages reachable,
 *                         do the control paths and cmdlets appear on the pages they cite, does the
 *                         page still agree with the roadmap record. Hints for the verifier, and a
 *                         record for readers.
 *   - judge()             the pass or hold rule, computed from the claims so it is the same for
 *                         every engine and every model.
 *   - recordVerification() validate a verdict, write the report (wiki/verification/<slug>.json),
 *                         stamp the page's front matter, hold or release the page.
 *
 * Held pages live in wiki/_held/. The site builds wiki/features/ and wiki/concepts/ only, so a held
 * page is never published, and one that was live comes off the site until a rewrite passes.
 *
 * Concept pages (wiki/concepts/) go through the same check. A concept page says `kind: concept` in
 * its front matter, so a held one finds its way home; it has no roadmap record, default state or
 * licensing model, so those rows are not asked of it. Everything else is the same rule.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { load as yamlLoad } from 'js-yaml';
import { ROOT, WIKI_DIR, FEATURES_DIR, CONCEPTS_DIR, DATA_DIR, readJson, writeJson, today, toFrontmatter, stripHtml } from './util.mjs';
import { featureFrontmatter, conceptFrontmatter, isAllowedSourceUrl } from './schema.mjs';
import { verdictSchema, CLAIM_TYPES } from './verify-schema.mjs';

export const HELD_DIR = path.join(WIKI_DIR, '_held');
export const REPORT_DIR = path.join(WIKI_DIR, 'verification');
export const VERIFY_TASK_DIR = path.join(DATA_DIR, 'verify-tasks');
export const VERIFY_RESULTS = path.join(DATA_DIR, 'verify-results.json');
/** Two failed rewrites and the page is parked for a person. */
export const MAX_REVISIONS = Number(process.env.VERIFY_MAX_REVISIONS || 3);
/**
 * Pages published before the check existed (created before this date) get one grace: a first failure
 * leaves the page live with a "needs correction" notice and the findings listed, while the rewrite is
 * prepared. A failure after that rewrite holds the page like any other. VERIFY_GRACE_EXISTING=0 turns
 * the grace off, so every failure holds the page at once.
 */
export const STANDARD_DATE = '2026-11-16';
export const GRACE_EXISTING = (process.env.VERIFY_GRACE_EXISTING ?? '1') !== '0';
/** A verified page is checked again after this many days even if nothing changed. */
export const MAX_AGE_DAYS = Number(process.env.VERIFY_MAX_AGE_DAYS || 90);

const FINDINGS_OPEN = '<!-- verifier-findings';
const FINDINGS_RE = /\n*<!-- verifier-findings[\s\S]*?-->\n*/g;

// ---------------------------------------------------------------------------------------------
// Pages: where a briefing or concept page is (published or held) and how to read and rewrite it.

/** 'concept' for a page in wiki/concepts or one that says so in its front matter; otherwise 'briefing'. */
export function pageKind(data, where) {
  return where === 'concepts' || data?.kind === 'concept' ? 'concept' : 'briefing';
}
const homeDir = (kind) => (kind === 'concept' ? CONCEPTS_DIR : FEATURES_DIR);
const homeName = (kind) => (kind === 'concept' ? 'concepts' : 'features');

/**
 * True when the page was published at the commit this run started from: HEAD in Actions, because the
 * commit step has not run yet (VERIFY_RUN_START_REF names another ref). Such a page is never taken
 * off the site for being unreached by the verifier; only a page that has never been published is
 * held as unverified. Without git the answer is false, which is the stricter side.
 */
export function livedAtRunStart(slug, kind = 'briefing') {
  const ref = process.env.VERIFY_RUN_START_REF || 'HEAD';
  try { execFileSync('git', ['cat-file', '-e', `${ref}:wiki/${homeName(kind)}/${slug}.md`], { cwd: ROOT, stdio: 'ignore' }); return true; } catch { return false; }
}

export async function locatePage(slug) {
  for (const [dir, where] of [[FEATURES_DIR, 'features'], [CONCEPTS_DIR, 'concepts'], [HELD_DIR, 'held']]) {
    const file = path.join(dir, `${slug}.md`);
    try { await fs.access(file); return { file, where }; } catch { /* next */ }
  }
  return null;
}

export async function readPage(file) {
  const raw = await fs.readFile(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) throw new Error(`${file}: no front matter`);
  return { raw, data: yamlLoad(m[1]), body: raw.slice(m[0].length) };
}

/** Front matter object + body back to the page text, exactly as write-briefing would lay it out. */
export function renderPage(data, body) {
  return `${toFrontmatter(data)}\n\n${body.replace(/^\n+/, '')}`;
}

export async function listHeld() {
  let files = [];
  try { files = (await fs.readdir(HELD_DIR)).filter((f) => f.endsWith('.md')).sort(); } catch { return []; }
  const out = [];
  for (const f of files) {
    const slug = f.replace(/\.md$/, '');
    const { data } = await readPage(path.join(HELD_DIR, f));
    const report = await readReport(slug);
    out.push({ slug, file: path.join(HELD_DIR, f), data, report, kind: pageKind(data, 'held') });
  }
  return out;
}

export async function readReport(slug) {
  return readJson(path.join(REPORT_DIR, `${slug}.json`), null);
}

// ---------------------------------------------------------------------------------------------
// Fetching Microsoft pages for the deterministic checks.

const memo = new Map();
const CACHE_DIR = process.env.VERIFY_FETCH_CACHE || null;
const cacheKey = (url) => createHash('sha1').update(url).digest('hex');

/**
 * Fetch a page and return its readable text. Microsoft Learn serves server-rendered HTML; the main
 * content element is kept and tags stripped. With VERIFY_FETCH_CACHE set, responses are read from
 * and written to that folder (used for offline tests and to avoid refetching within a run).
 */
export async function fetchText(url) {
  if (memo.has(url)) return memo.get(url);
  const p = (async () => {
    if (CACHE_DIR) {
      const cached = await readJson(path.join(CACHE_DIR, `${cacheKey(url)}.json`), null);
      if (cached) return cached;
    }
    let result;
    try {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 25_000);
      const res = await fetch(url, {
        redirect: 'follow', signal: ctrl.signal,
        headers: { accept: 'text/html,application/xhtml+xml', 'user-agent': 'release-ledger-verifier/1.0 (+github pages wiki)', 'accept-language': 'en-US,en;q=0.8' },
      });
      clearTimeout(timer);
      const html = res.ok ? await res.text() : '';
      const main = html.match(/<main[\s>][\s\S]*?<\/main>/i)?.[0] || html.match(/<body[\s>][\s\S]*?<\/body>/i)?.[0] || html;
      const text = stripHtml(main.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, ''));
      result = { url, ok: res.ok, status: res.status, finalUrl: res.url || url, text: res.ok ? text : '' };
    } catch (err) {
      result = { url, ok: false, status: 0, finalUrl: url, text: '', error: err.name === 'AbortError' ? 'timeout' : err.message };
    }
    if (CACHE_DIR && result.ok) {
      await fs.mkdir(CACHE_DIR, { recursive: true });
      await writeJson(path.join(CACHE_DIR, `${cacheKey(url)}.json`), result);
    }
    return result;
  })();
  memo.set(url, p);
  return p;
}

// ---------------------------------------------------------------------------------------------
// Deterministic pre-checks.

const norm = (s = '') => s.toLowerCase().replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, ' ').trim();

/** Words in a navigation path that stand for the thing you pick, not a label on screen. */
const PLACEHOLDER = /^(the |your |a |an |select(ed)? |chosen )?(environment|environment group|agent|app|site|flow|tool|user|group|policy|rule|connector|team|tenant|table|record|page|item|row|setting|section|name|org(anisation|anization)?|workspace|region|subscription|resource)( name)?$/i;

/** "Manage > Environments (or Environment groups) > environment > Settings" -> ["Manage", "Environments", "Settings"]. */
export function pathSegments(p = '') {
  return p.split('>').map((s) => s.replace(/\([^)]*\)/g, '').replace(/[<\[][^>\]]*[>\]]/g, '').replace(/\.\.\./g, '').trim())
    .filter((s) => s.length > 2 && !PLACEHOLDER.test(s) && !/^(…|etc\.?)$/i.test(s));
}

/** The one token in an API call that must appear on its reference page: the cmdlet, the endpoint path or the CLI verb. */
export function callToken(call = '') {
  const cmdlet = call.match(/\b[A-Z][a-zA-Z]+-[A-Z][A-Za-z0-9]+\b/)?.[0];
  if (cmdlet) return cmdlet;
  const graph = call.match(/\/(?:v1\.0|beta)\/[A-Za-z0-9_./{}-]+/)?.[0];
  if (graph) return graph.replace(/\/\{[^}]+\}/g, '').replace(/\/$/, '').split('/').slice(0, 4).join('/');
  const pac = call.match(/\bpac\s+[a-z]+(?:\s+[a-z-]+)?/i)?.[0];
  if (pac) return pac;
  const az = call.match(/\baz\s+[a-z]+(?:\s+[a-z-]+)?/i)?.[0];
  if (az) return az;
  const url = call.match(/https?:\/\/\S+/)?.[0];
  if (url) return url.replace(/^https?:\/\//, '').split(/[?#]/)[0];
  return call.trim().split(/\s+/).slice(0, 2).join(' ');
}

export function urlsInBody(body = '') {
  const out = new Set();
  for (const m of body.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) out.add(m[1]);
  for (const m of body.matchAll(/href="(https?:\/\/[^"]+)"/g)) out.add(m[1]);
  return [...out];
}

/**
 * Run the deterministic checks for one page against its raw roadmap record. Network: one fetch per
 * distinct URL. Returns a plain object the brief prints and the report stores.
 */
export async function precheck(data, body, raw) {
  const controls = data.controls || [];
  const urls = new Set();
  for (const s of data.sources || []) urls.add(s.url);
  for (const c of controls) for (const side of ['ui', 'api']) if (c[side]?.docs) urls.add(c[side].docs);
  for (const u of urlsInBody(body)) if (isAllowedSourceUrl(u)) urls.add(u);
  const fetched = new Map();
  await Promise.all([...urls].map(async (u) => fetched.set(u, await fetchText(u))));

  const linkChecks = [...urls].map((u) => {
    const f = fetched.get(u);
    return { url: u, ok: f.ok, status: f.status, ...(f.error ? { error: f.error } : {}) };
  });

  const controlChecks = [];
  controls.forEach((c, index) => {
    if (c.ui) {
      const f = fetched.get(c.ui.docs);
      const segments = pathSegments(c.ui.path);
      const text = norm(f?.text || '');
      const missing = f?.ok ? segments.filter((s) => !text.includes(norm(s))) : segments;
      controlChecks.push({ index, side: 'ui', governs: c.governs, docs: c.ui.docs, reachable: Boolean(f?.ok), segments, missing });
    }
    if (c.api) {
      const f = fetched.get(c.api.docs);
      const token = callToken(c.api.call);
      const found = Boolean(f?.ok) && norm(f.text).includes(norm(token));
      controlChecks.push({ index, side: 'api', governs: c.governs, docs: c.api.docs, reachable: Boolean(f?.ok), token, found });
    }
  });

  const roadmapDrift = [];
  if (raw) {
    const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);
    const sorted = (a) => [...(a || [])].sort();
    if (!same(data.status, raw.statusKey)) roadmapDrift.push({ field: 'status', page: data.status, roadmap: raw.statusKey });
    if (!same(data.targetDate, raw.targetDate)) roadmapDrift.push({ field: 'targetDate', page: data.targetDate, roadmap: raw.targetDate });
    if (!same(data.previewDate ?? null, raw.previewDate ?? null)) roadmapDrift.push({ field: 'previewDate', page: data.previewDate, roadmap: raw.previewDate });
    if (!same(sorted(data.clouds), sorted(raw.clouds))) roadmapDrift.push({ field: 'clouds', page: data.clouds, roadmap: raw.clouds });
    if (!same(sorted(data.platforms), sorted(raw.platforms))) roadmapDrift.push({ field: 'platforms', page: data.platforms, roadmap: raw.platforms });
  }

  const unreachable = linkChecks.filter((l) => !l.ok).length;
  return {
    at: new Date().toISOString(),
    linkChecks, controlChecks, roadmapDrift,
    summary: {
      links: linkChecks.length, unreachable,
      uiPaths: controlChecks.filter((c) => c.side === 'ui').length,
      uiPathsWithMissingWords: controlChecks.filter((c) => c.side === 'ui' && c.missing.length).length,
      apiCalls: controlChecks.filter((c) => c.side === 'api').length,
      apiCallsNotOnPage: controlChecks.filter((c) => c.side === 'api' && !c.found).length,
      roadmapDrift: roadmapDrift.length,
    },
  };
}

/** Pre-check findings as text for the verifier's brief. Hints, not conclusions. */
export function precheckText(pc) {
  const lines = [];
  const dead = pc.linkChecks.filter((l) => !l.ok);
  lines.push(dead.length
    ? `- ${dead.length} of ${pc.linkChecks.length} cited pages could not be fetched (HTTP status shown). A cited page that does not exist is a serious finding; search Learn for the setting before concluding it is undocumented.\n${dead.map((l) => `  - ${l.status || l.error || 'error'} ${l.url}`).join('\n')}`
    : `- All ${pc.linkChecks.length} cited pages were fetched successfully.`);
  for (const c of pc.controlChecks) {
    if (c.side === 'ui') {
      lines.push(c.reachable
        ? (c.missing.length ? `- Control ${c.index + 1} (${c.governs}), admin UI path: these words were NOT found on the cited page: ${c.missing.map((s) => `"${s}"`).join(', ')}. Check whether the path is right.` : `- Control ${c.index + 1} (${c.governs}), admin UI path: every step of the path appears on the cited page.`)
        : `- Control ${c.index + 1} (${c.governs}), admin UI path: the cited page could not be fetched.`);
    } else {
      lines.push(c.reachable
        ? (c.found ? `- Control ${c.index + 1} (${c.governs}), API: "${c.token}" appears on the cited reference page.` : `- Control ${c.index + 1} (${c.governs}), API: "${c.token}" was NOT found on the cited reference page. Check that the cmdlet, endpoint or command exists and does what the page says.`)
        : `- Control ${c.index + 1} (${c.governs}), API: the cited page could not be fetched.`);
    }
  }
  if (pc.roadmapDrift.length) {
    lines.push(`- The page disagrees with the current roadmap record on: ${pc.roadmapDrift.map((d) => `${d.field} (page ${JSON.stringify(d.page)}, roadmap ${JSON.stringify(d.roadmap)})`).join('; ')}. The roadmap record is authoritative; the pipeline records each as a contradicted record claim.`);
  } else if (pc.roadmapDrift) {
    lines.push('- Status, dates, clouds and platforms match the current roadmap record.');
  }
  return lines.join('\n');
}

// ---------------------------------------------------------------------------------------------
// The verdict.

/** A finding: anything not plainly supported, including a supported claim with a minor correction of form. */
const isFailing = (c) => c.status !== 'supported' || Boolean(c.severity);

/**
 * Pass or hold, from the claims alone, with the rule the verifier prompt states:
 *   held  any blocker, or three or more majors.
 *   otherwise verified, or verified-with-gaps when any unsupported or contradicted claim remains
 *   (those are listed on the page so readers can see what could not be confirmed).
 */
export function judge(claims) {
  const failing = claims.filter(isFailing);
  const reasons = [];
  const blockers = failing.filter((c) => c.severity === 'blocker');
  if (blockers.length) reasons.push(`${blockers.length} blocking finding${blockers.length > 1 ? 's' : ''} (claim${blockers.length > 1 ? 's' : ''} ${blockers.map((c) => c.n).join(', ')})`);
  const majors = failing.filter((c) => c.severity === 'major');
  if (majors.length >= 3) reasons.push(`${majors.length} major findings`);
  const status = reasons.length ? 'held' : failing.length ? 'verified-with-gaps' : 'verified';
  const counts = {
    claims: claims.length,
    confirmed: claims.filter((c) => c.status === 'supported').length,
    unconfirmed: claims.filter((c) => c.status === 'unsupported').length,
    contradicted: claims.filter((c) => c.status === 'contradicted').length,
    blocker: blockers.length, major: majors.length, minor: failing.filter((c) => c.severity === 'minor').length,
  };
  return { status, reasons, counts };
}

/**
 * Coverage the recorder insists on, so a verdict cannot pass by checking only the easy statements:
 * every control row's documented sides, the default state and the licensing model each need a claim.
 * A concept page has no default state or licensing model in its front matter, so only its control
 * rows are asked for.
 */
export function coverageGaps(claims, data, kind = 'briefing') {
  const text = (c) => `${c.where} ${c.claim}`.toLowerCase();
  const mentions = (needle) => claims.some((c) => text(c).includes(needle.toLowerCase()));
  const missing = [];
  (data.controls || []).forEach((c, i) => {
    const governs = c.governs.toLowerCase().slice(0, 30);
    if (c.ui) {
      const last = pathSegments(c.ui.path).at(-1) || c.ui.path;
      if (!mentions(`controls[${i}].ui`) && !(mentions(governs) && mentions(last))) missing.push(`controls[${i}].ui (${c.governs}: the admin path)`);
    }
    if (c.api) {
      const token = callToken(c.api.call);
      if (!mentions(`controls[${i}].api`) && !mentions(token)) missing.push(`controls[${i}].api (${c.governs}: ${token})`);
    }
  });
  if (kind === 'concept') return missing;
  if (!claims.some((c) => c.type === 'default' || /default ?state|by default/.test(text(c)))) missing.push('the default state (type "default")');
  if (!claims.some((c) => c.type === 'licensing' || /licen[cs]/.test(text(c)))) missing.push('the licensing model (type "licensing")');
  return missing;
}

/** Evidence rules the schema cannot express. */
/**
 * Small departures from the contract that do not change what a claim says are repaired, not
 * rejected: a rejected verdict costs a whole new session, and the fields involved are labels and
 * free text. An over-long "where", claim, quote, fix, source or summary is cut to the limit; a type
 * the contract does not list (the model wrote "limit" or "audit") becomes "behaviour". Each repair
 * is recorded in the report's notes. Anything structural (a missing status, a bad severity, too few
 * claims) still fails the schema and goes back to the verifier once with the message.
 */
export function tolerateVerdict(raw) {
  const notes = [];
  if (!raw || typeof raw !== 'object') return { verdict: raw, notes };
  const cut = (text, max, what) => {
    if (typeof text !== 'string' || text.length <= max) return text;
    notes.push(`${what} was ${text.length} characters, cut to ${max}`);
    return text.slice(0, max - 1).trimEnd() + '\u2026';
  };
  const verdict = { ...raw, summary: cut(raw.summary, 1500, 'the summary') };
  if (Array.isArray(raw.claims)) {
    verdict.claims = raw.claims.map((c, i) => {
      if (!c || typeof c !== 'object') return c;
      const label = `claim ${c.n ?? i}`;
      const out = {
        ...c,
        where: cut(c.where, 120, `${label}: where`), claim: cut(c.claim, 600, `${label}: claim`),
        source: cut(c.source, 600, `${label}: source`), quote: cut(c.quote, 1200, `${label}: quote`), fix: cut(c.fix, 1200, `${label}: fix`),
      };
      if (typeof c.type === 'string' && !CLAIM_TYPES.includes(c.type)) {
        const t = c.type.trim().toLowerCase().replace(/[\s_]+/g, '-');
        if (CLAIM_TYPES.includes(t)) { out.type = t; } else { out.type = 'behaviour'; notes.push(`${label}: type "${c.type}" is not in the contract, recorded as behaviour`); }
      }
      return out;
    });
  }
  return { verdict, notes };
}

/**
 * The standard says risk, impact and action are judgements that can never hold a page. A verifier that rates a
 * conflict over one of them blocker or major is brought down to minor here, and the report says so, rather than
 * sending the whole verdict back for one severity.
 */
export function normaliseClaims(claims) {
  const notes = [];
  const out = claims.map((c) => {
    // Only the rating fields themselves ("front matter: risk", "rationale: impact", "action"), never a section that
    // happens to be called Risk assessment: a factual claim made there keeps its severity.
    const parts = `${c.where}`.split(/[;,/]/).map((w) => w.trim()).filter(Boolean);
    const judgement = parts.length > 0 && parts.every((w) => /^(front matter:\s*)?(risk|impact|action)$/i.test(w) || /^rationale:\s*(risk|impact)$/i.test(w));
    if (judgement && (c.severity === 'blocker' || c.severity === 'major')) {
      notes.push(`claim ${c.n}: severity ${c.severity} on a ${c.where.replace(/^front matter:\s*/i, '')} rating lowered to minor; ratings are judgements and cannot hold a page`);
      return { ...c, severity: 'minor' };
    }
    return c;
  });
  return { claims: out, notes };
}

export function evidenceProblems(claims) {
  const problems = [];
  const seen = new Set();
  for (const c of claims) {
    if (seen.has(c.n)) problems.push(`claim ${c.n}: duplicate n`);
    seen.add(c.n);
    if (c.status === 'supported') {
      if (c.severity && c.severity !== 'minor') problems.push(`claim ${c.n}: a supported claim can only carry severity minor (or null)`);
      if (!c.quote || !c.quote.trim()) problems.push(`claim ${c.n}: a supported claim needs the quote that proves it was read`);
      // A confirmed absence ("Not yet documented" that really is undocumented, a default "Not stated", an applicability
      // the page itself marks unconfirmed) has no page to cite: its source is null and its quote records the searches
      // that were run. Every other supported claim names the page it was read on.
      if (!c.source && !/\bsearched\b/i.test(c.quote || '')) problems.push(`claim ${c.n}: a supported claim needs its source, or, for a confirmed absence, a quote that records the searches run ("Searched: ...")`);
    } else {
      if (!c.severity) problems.push(`claim ${c.n}: a ${c.status} claim needs a severity (blocker, major or minor)`);
      if (c.status === 'contradicted' && !c.quote) problems.push(`claim ${c.n}: a contradicted claim needs the contradicting text as quote`);
    }
    if (c.severity && !c.fix) problems.push(`claim ${c.n}: a claim with a severity needs a fix`);
    if (!c.severity && c.fix) problems.push(`claim ${c.n}: a claim without a severity has no fix`);
    if (c.source && /^https?:\/\//i.test(c.source) && !isAllowedSourceUrl(c.source)) problems.push(`claim ${c.n}: source is not on a Microsoft domain: ${c.source}`);
  }
  return problems;
}

/** Claims the pipeline adds from the pre-check: the page disagrees with the roadmap on status, dates or clouds. */
export function precheckClaims(pc) {
  if (!pc?.roadmapDrift?.length) return [];
  return pc.roadmapDrift
    .filter((d) => ['status', 'targetDate', 'previewDate', 'clouds'].includes(d.field))
    .map((d, i) => ({
      n: 900 + i,
      where: `front matter: ${d.field}`,
      type: d.field === 'clouds' ? 'availability' : d.field === 'status' ? 'record' : 'date',
      claim: `${d.field} is ${JSON.stringify(d.page)}`,
      status: 'contradicted',
      severity: 'blocker',
      source: 'roadmap record',
      quote: `The roadmap record now gives ${d.field} = ${JSON.stringify(d.roadmap)} (pipeline pre-check).`,
      fix: `Rewrite the page from the current roadmap record (${d.field} is now ${JSON.stringify(d.roadmap)}).`,
    }));
}

// ---------------------------------------------------------------------------------------------
// Recording a verdict.

/** The findings comment appended to a page so the next rewrite sees exactly what to fix. */
export function findingsComment(report) {
  const failing = report.claims.filter(isFailing);
  if (!failing.length) return '';
  const lines = [
    `${FINDINGS_OPEN} (${report.date}, ${report.status}; checked by ${report.model})`,
    'The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:',
    ...failing.map((c) => `- [${c.status}, ${c.severity}] ${c.where} / ${c.type}: ${c.claim.replace(/-->/g, '- >')}${c.quote ? ` | Found: ${c.quote.replace(/-->/g, '- >').slice(0, 300)}` : ''}${c.fix ? ` | Fix: ${c.fix.replace(/-->/g, '- >')}` : ''}${c.source && /^https?:/.test(c.source) ? ` | Source: ${c.source}` : ''}`),
    '-->',
  ];
  return `\n${lines.join('\n')}\n`;
}

// Verifier sessions run several at a time, so the shared results file is written by one caller at a time.
let resultsLock = Promise.resolve();
function appendResult(entry) {
  const write = async () => {
    const results = await readJson(VERIFY_RESULTS, { results: [] });
    results.results = results.results.filter((r) => r.slug !== entry.slug);
    results.results.push({ at: new Date().toISOString(), ...entry });
    const tmp = `${VERIFY_RESULTS}.${process.pid}.tmp`;
    await writeJson(tmp, results);
    await fs.rename(tmp, VERIFY_RESULTS); // atomic: a reader sees the old file or the new one, never half of one
  };
  resultsLock = resultsLock.then(write, write);
  return resultsLock;
}

/**
 * Validate a verdict and apply it. Throws a readable Error on a verdict the recorder cannot accept
 * (the agent fixes and retries). Returns { status, counts, reasons, file, where }.
 */
export async function recordVerification(slug, rawVerdict, { model = 'unknown', engine = 'manual', precheck: pc = null } = {}) {
  const loc = await locatePage(slug);
  if (!loc) throw new Error(`No page found for "${slug}" in wiki/features, wiki/concepts or wiki/_held`);
  const { data, body } = await readPage(loc.file);
  const kind = pageKind(data, loc.where);
  if (rawVerdict?.slug && rawVerdict.slug !== slug) throw new Error(`Verdict is for "${rawVerdict.slug}", not "${slug}"`);

  const tolerated = tolerateVerdict({ ...rawVerdict, slug });
  const parsed = verdictSchema.safeParse(tolerated.verdict);
  if (!parsed.success) throw new Error('Verdict failed schema: ' + parsed.error.issues.map((i) => `${i.path.join('.')} ${i.message}`).join('; '));
  const verdict = parsed.data;

  if (verdict.verdict === 'incomplete') {
    // The verifier could not finish (tools failed). Not a content result: nothing is stamped or moved.
    await appendResult({ slug, ok: false, incomplete: true, error: 'verifier reported incomplete: ' + verdict.summary.slice(0, 300), model, engine });
    return { status: 'incomplete', counts: null, reasons: [verdict.summary], attempts: 0, file: loc.file, where: loc.where };
  }
  if (verdict.claims.length < 6) throw new Error(`Only ${verdict.claims.length} claims; a ${kind === 'concept' ? 'concept page' : 'briefing'} has far more statements than that. List every claim, supported ones included.`);
  const problems = evidenceProblems(verdict.claims);
  if (problems.length) throw new Error('Verdict evidence problems: ' + problems.join('; '));
  const gaps = coverageGaps(verdict.claims, data, kind);
  if (gaps.length) throw new Error('Verdict does not cover: ' + gaps.join('; ') + '. Add a claim for each.');

  if (!pc) pc = await readJson(path.join(VERIFY_TASK_DIR, `${slug}.precheck.json`), null);
  const normalised = normaliseClaims(verdict.claims);
  const claims = [...normalised.claims, ...precheckClaims(pc)];
  // Severity alone decides (the standard's rule): any blocker, or three or more majors, holds the page. The verifier's
  // own verdict is kept in the report; when it disagrees with its claims the step summary says so.
  const judged = judge(claims);
  let { status } = judged;
  const { reasons, counts } = judged;
  const notes = [...tolerated.notes, ...normalised.notes];
  if (verdict.verdict === 'hold' && status !== 'held') notes.push('the verifier wrote "hold" but listed no blocker and fewer than three majors; the claims decide, so the page is not held');
  if (verdict.verdict === 'pass' && status === 'held') notes.push(`the verifier wrote "pass" but its claims include ${reasons.join(' and ')}; the claims decide, so the page is held`);
  for (const n of notes) console.warn(`note: ${n}`);

  const previous = await readReport(slug);
  const failedBefore = (previous?.status === 'held' && previous?.hold?.reason === 'failed') || previous?.status === 'needs-correction';
  // Grace for the back catalogue: a live page written before the check existed fails once in public, not into the hold.
  // (The four concept pages written by hand carry no created date; their updated date stands in for it.)
  const graced = status === 'held' && GRACE_EXISTING && loc.where !== 'held' && !previous && (data.created || (kind === 'concept' && data.updated) || '9999') < STANDARD_DATE;
  if (graced) { status = 'needs-correction'; reasons.push('published before the check existed: kept live with a notice while a corrected version is prepared'); }
  const attempts = status === 'held' || status === 'needs-correction' ? (failedBefore ? (previous.attempts || 1) + 1 : 1) : 0;
  const parked = status === 'held' && attempts >= MAX_REVISIONS;
  const date = today();
  const report = {
    slug, ...(kind === 'concept' ? { kind } : {}), roadmapId: data.roadmapId ?? null, title: data.title, status, date, version: data.version || 1, model, engine, attempts,
    verifierVerdict: verdict.verdict, notes,
    hold: status === 'held' ? { reason: parked ? 'parked' : 'failed', since: failedBefore ? (previous.hold?.since || previous.date || date) : date, reasons } : status === 'needs-correction' ? { reason: 'grace', since: date, reasons } : null,
    counts, summary: verdict.summary, claims,
    precheck: pc ? { at: pc.at, summary: pc.summary, linkChecks: pc.linkChecks, controlChecks: pc.controlChecks, roadmapDrift: pc.roadmapDrift } : null,
    history: [...(previous?.history || []), ...(previous ? [{ date: previous.date, status: previous.status, version: previous.version, model: previous.model }] : [])].slice(-12),
  };
  await fs.mkdir(REPORT_DIR, { recursive: true });
  await writeJson(path.join(REPORT_DIR, `${slug}.json`), report);

  const verification = {
    status, date, version: report.version, model, engine,
    claims: counts.claims, confirmed: counts.confirmed, unconfirmed: counts.unconfirmed, contradicted: counts.contradicted, attempts,
  };
  const nextData = { ...data, ...(kind === 'concept' ? { kind } : {}), verification };
  const check = (kind === 'concept' ? conceptFrontmatter : featureFrontmatter).safeParse(nextData);
  if (!check.success) throw new Error('Page front matter would be invalid: ' + check.error.issues.map((i) => `${i.path.join('.')} ${i.message}`).join('; '));
  const cleanBody = body.replace(FINDINGS_RE, '\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
  const nextBody = cleanBody + findingsComment(report);
  const target = status === 'held' ? path.join(HELD_DIR, `${slug}.md`) : path.join(homeDir(kind), `${slug}.md`);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, renderPage(nextData, nextBody));
  if (target !== loc.file) await fs.rm(loc.file, { force: true });

  await appendResult({ slug, ok: true, status, counts, reasons, model, engine, attempts, file: path.relative(process.cwd(), target) });
  return { status, counts, reasons, attempts, file: target, where: status === 'held' ? 'held' : homeName(kind) };
}

/** Published pages that failed under grace and are waiting for their rewrite. */
export async function listNeedingCorrection() {
  const out = [];
  for (const [dir, where] of [[FEATURES_DIR, 'features'], [CONCEPTS_DIR, 'concepts']]) {
    let files = [];
    try { files = (await fs.readdir(dir)).filter((f) => f.endsWith('.md')).sort(); } catch { continue; }
    for (const f of files) {
      const slug = f.replace(/\.md$/, '');
      const { data } = await readPage(path.join(dir, f));
      if (data.verification?.status === 'needs-correction') out.push({ slug, file: path.join(dir, f), data, report: await readReport(slug), kind: pageKind(data, where) });
    }
  }
  return out;
}

/** A page written but not checked in this run is held as unverified until the verifier reaches it. */
export async function holdUnverified(slug, { reason = 'unverified', note = 'Written but not yet checked against Microsoft Learn.' } = {}) {
  const loc = await locatePage(slug);
  if (!loc || loc.where === 'held') return null;
  const { data, body } = await readPage(loc.file);
  const kind = pageKind(data, loc.where);
  // A page that was already published when the run started stays live, not yet checked; it goes
  // first in the next run. Only a page nobody has seen yet is held back.
  if (livedAtRunStart(slug, kind)) return { slug, kept: 'published before this run', file: loc.file };
  const previous = await readReport(slug);
  const date = today();
  const report = {
    slug, ...(kind === 'concept' ? { kind } : {}), roadmapId: data.roadmapId ?? null, title: data.title, status: 'held', date, version: data.version || 1, model: 'none', engine: 'manual', attempts: previous?.attempts || 0,
    hold: { reason, since: date, reasons: [note] }, counts: { claims: 0, confirmed: 0, unconfirmed: 0, contradicted: 0, blocker: 0, major: 0, minor: 0 },
    summary: note, claims: [], precheck: null,
    history: [...(previous?.history || []), ...(previous ? [{ date: previous.date, status: previous.status, version: previous.version, model: previous.model }] : [])].slice(-12),
  };
  await fs.mkdir(REPORT_DIR, { recursive: true });
  await writeJson(path.join(REPORT_DIR, `${slug}.json`), report);
  const nextData = { ...data, ...(kind === 'concept' ? { kind } : {}) }; // a held concept page must say what it is, to find its way home
  delete nextData.verification; // not checked at this version
  const target = path.join(HELD_DIR, `${slug}.md`);
  await fs.mkdir(HELD_DIR, { recursive: true });
  await fs.writeFile(target, renderPage(nextData, body));
  await fs.rm(loc.file, { force: true });
  return { slug, file: target };
}

/** data/held.json: what is held and why, for the radar and the run summary. */
export async function writeHeldIndex() {
  const held = await listHeld();
  const items = held.map((h) => ({
    slug: h.slug, ...(h.kind === 'concept' ? { kind: h.kind } : {}), roadmapId: h.data.roadmapId ?? null, title: h.data.title, topic: h.data.topic,
    reason: h.report?.hold?.reason || 'unverified', since: h.report?.hold?.since || h.report?.date || null,
    attempts: h.report?.attempts || 0, reasons: h.report?.hold?.reasons || [],
  }));
  await writeJson(path.join(DATA_DIR, 'held.json'), { generated: new Date().toISOString(), count: items.length, items });
  return items;
}

/** Is this page due a check? Never checked, edited since its last check, or checked too long ago. */
export function verificationDue(data, now = Date.now()) {
  const v = data.verification;
  if (!v) return 'never-checked';
  if (v.version !== (data.version || 1)) return 'changed-since-check';
  if ((now - new Date(v.date).getTime()) / 86400000 > MAX_AGE_DAYS) return 'check-expired';
  return null;
}
