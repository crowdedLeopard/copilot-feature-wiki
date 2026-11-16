#!/usr/bin/env node
/**
 * Compile (Copilot CLI path), step 2 of 3: write the briefings in data/compile-tasks.json with
 * GitHub Copilot CLI, one non-interactive session per item, billed in AI credits to the Copilot
 * seat behind the workflow's token.
 *
 * Same contract as the Claude Code path: compile-tasks.mjs prepares the tasks, each session follows
 * pipeline/prompts/compile-agent.md (via the one-item wrapper in compile-copilot-item.md) and calls
 * write-briefing.mjs, compile-finish.mjs records the run. The page-writing logic stays in
 * pipeline/lib/briefing.mjs; this file only drives sessions and keeps the spend in bounds.
 *
 * Robustness: a preflight prompt proves the token and the model before any task spends credits,
 * walking a list of fallback models if the first is refused; a session that fails fast is retried
 * once; every session has a credit cap and a wall-clock cap; the run stops at a per-run budget;
 * failures are explained in plain English in the step summary and as workflow annotations; and the
 * run is only escalated (red) when the writer has failed twice in a row.
 *
 * Env:
 *   COPILOT_MODEL              first model to try (default claude-opus-5.5); 'auto' lets Copilot choose
 *   COPILOT_FALLBACK_MODELS    comma-separated models to try if the first is refused (default claude-sonnet-5.5,auto)
 *   COPILOT_REASONING_EFFORT   low|medium|high|xhigh|max, or empty for the model default (default high)
 *   COMPILE_PARALLEL           sessions at once (default 2)
 *   COMPILE_ITEM_MAX_CREDITS   AI-credit cap per session (default 300 = $3.00)
 *   COMPILE_MAX_CREDITS        AI-credit budget per run; no new sessions start once it is spent
 *                              (default 200 x tasks)
 *   COMPILE_ITEM_TIMEOUT_MIN   wall-clock cap per session (default 15)
 *   COPILOT_BIN                path to the copilot binary (default: copilot on PATH)
 *
 * Exit code 1 only when nothing could run at all (token, model or a pipeline setting refused at
 * preflight), so the workflow can show the step as failed while still linting, building and
 * deploying what is committed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import { DATA_DIR, ROOT, readJson, writeJson, parseFrontmatter } from './lib/util.mjs';
import { runCopilot, MICROSOFT_URLS, tail } from './lib/copilot.mjs';

const MODEL = (process.env.COPILOT_MODEL || 'claude-opus-5.5').trim();
const FALLBACKS = (process.env.COPILOT_FALLBACK_MODELS ?? 'claude-sonnet-5.5,auto').split(',').map((s) => s.trim()).filter(Boolean);
const EFFORT = (process.env.COPILOT_REASONING_EFFORT ?? 'high').trim();
const PARALLEL = Math.max(1, Number(process.env.COMPILE_PARALLEL || 2));
const ITEM_MAX_CREDITS = Math.max(30, Number(process.env.COMPILE_ITEM_MAX_CREDITS || 300));
const ITEM_TIMEOUT_MS = Math.max(1, Number(process.env.COMPILE_ITEM_TIMEOUT_MIN || 15)) * 60 * 1000;
const PREFLIGHT_CREDITS = 30;          // the CLI refuses --max-ai-credits below 30
const FAST_FAIL_MS = 90 * 1000;        // a session that dies this quickly did no real work: retry it once
const RETRY_WAIT_MS = 20 * 1000;
const TASK_DIR = path.join(DATA_DIR, 'compile-tasks');
const RESULTS_FILE = path.join(DATA_DIR, 'compile-results.json');
const USAGE_FILE = path.join(DATA_DIR, 'compile-usage.json');
const LAST_FILE = path.join(DATA_DIR, 'last-compile.json');
const WRAPPER = await fs.readFile(path.join(ROOT, 'pipeline', 'prompts', 'compile-copilot-item.md'), 'utf8');

const ALLOW_TOOLS = [
  'write(data/compile-tasks/**)',   // the JSON output; write-briefing.mjs writes the page itself
  'shell(node:*)',                   // node pipeline/write-briefing.mjs <id> <json>
  'shell(cat:*)', 'shell(ls:*)',
  'microsoft-learn',                 // every tool of the Microsoft Learn MCP server
];
const DENY_TOOLS = ['write(wiki/**)', 'write(data/*.json)'];

const rel = (p) => path.relative(ROOT, p);
const fmt = (n) => (n == null ? 'n/a' : Number(n).toLocaleString('en-GB', { maximumFractionDigits: 1 }));
const secs = (ms) => `${Math.round((ms || 0) / 1000)}s`;

// ---- What went wrong, in words an administrator can act on. Only CLI diagnostics are classified
// (stderr, or stdout when stderr is empty); a reply from the writer itself is not an error.
function classify(text = '') {
  if (/max-ai-credits|invalid value for|unexpected argument|unrecognized option|unknown option|^usage:/im.test(text)) return 'config';
  const refused = /not (supported|available|enabled|found|allowed|valid|entitled)|invalid|unsupported|unknown|disabled|does not exist|no access/i;
  if (/reasoning[ _-]?effort/i.test(text) && refused.test(text)) return 'effort';
  if (/\bmodel\b/i.test(text) && refused.test(text)) return 'model';
  if (/unauthori[sz]ed|forbidden|\b40[13]\b|bad credentials|invalid token|token (is|has) (expired|invalid)|not entitled|no copilot|subscription|copilot-requests|permission denied|authentication/i.test(text)) return 'auth';
  if (/rate limit|\b429\b|too many requests|overloaded|\b50[234]\b|timed? ?out|ECONN|ETIMEDOUT|network|socket hang/i.test(text)) return 'transient';
  return 'unknown';
}
const diagnostics = (r) => (r.stderr.trim() ? r.stderr : r.stdout);
const writerReplied = (r) => /^(DONE|FAILED)\b/m.test(r.stdout);
function explain(kind, { model } = {}) {
  switch (kind) {
    case 'config': return 'Copilot CLI rejected a setting the pipeline passes. That is a pipeline bug to fix, not a problem with the Copilot seat';
    case 'effort': return `model ${model} does not accept the requested reasoning effort`;
    case 'model': return `model ${model} is not available to this Copilot seat`;
    case 'auth': return 'Copilot did not accept the workflow\'s token. Check that the seat behind it has the Copilot CLI policy enabled and that the job has copilot-requests: write';
    case 'transient': return 'Copilot was temporarily unavailable or rate-limited';
    case 'timeout': return 'the session ran out of time';
    case 'rejected': return 'the draft failed validation and the writer could not fix it in three tries';
    default: return 'Copilot CLI exited with an error (the CLI output is below)';
  }
}

// ---- Reporting: summary bullets, workflow annotations, outputs for later steps.
const summaryLines = [];
const note = (line) => { console.log(line); summaryLines.push(line); };
const annotate = (level, text) => { if (process.env.GITHUB_ACTIONS) console.log(`::${level} title=Copilot writer::${text.replace(/\n/g, ' ')}`); };
const prev = await readJson(LAST_FILE, null);
const prevStrikes = prev?.path === 'copilot' && (prev.status === 'failed' || prev.status === 'nothing-written') ? (prev.consecutiveFailures || 1) : 0;

async function finish({ status, headline, written = 0, attempted = 0, credits = 0, model = MODEL, detail = '', exitCode = 0, extra = {} }) {
  const failed = status === 'failed' || status === 'nothing-written';
  const consecutiveFailures = failed ? prevStrikes + 1 : 0;
  const escalate = consecutiveFailures >= 2;
  const lines = [headline, ...summaryLines];
  if (failed && !escalate) lines.push('The next run will try again. If it fails too, the run will be marked failed so it is not missed.');
  if (escalate) lines.push(`This is the writer's ${consecutiveFailures === 2 ? 'second' : `${consecutiveFailures}th`} failure in a row, so the run is marked failed.`);
  if (detail.trim()) lines.push('CLI output:\n```\n' + detail.trim() + '\n```');
  if (process.env.GITHUB_STEP_SUMMARY) {
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `### Copilot writer\n${lines.map((l) => (l.startsWith('CLI output') ? l : `- ${l}`)).join('\n')}\n`);
  }
  if (status === 'ok') annotate('notice', headline);
  else if (failed) annotate(escalate ? 'error' : 'warning', headline);
  await writeJson(USAGE_FILE, {
    path: 'copilot', model, status, headline, written, attempted, credits, consecutiveFailures, escalate, ...extra,
  });
  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(process.env.GITHUB_OUTPUT,
      `status=${status}\nwritten=${written}\ncredits=${Math.round(credits)}\nmodel=${model}\nescalate=${escalate}\nconsecutive_failures=${consecutiveFailures}\n`);
  }
  console.log(headline);
  process.exit(exitCode);
}

const taskList = await readJson(path.join(DATA_DIR, 'compile-tasks.json'), { tasks: [] });
const tasks = taskList.tasks;
if (!tasks.length) await finish({ status: 'empty', headline: 'No briefings were due this run, so nothing was written.' });
const BUDGET = Math.max(ITEM_MAX_CREDITS, Number(process.env.COMPILE_MAX_CREDITS || 0) || 200 * tasks.length);
const runStart = Date.now();
const candidates = [...new Set([MODEL, ...FALLBACKS])];
note(`${tasks.length} task(s), model ${MODEL}${candidates.length > 1 ? ` (fallbacks ${candidates.slice(1).join(', ')})` : ''}${EFFORT ? `, reasoning ${EFFORT}` : ''}, ${PARALLEL} at a time, caps ${ITEM_MAX_CREDITS} credits per briefing and ${fmt(BUDGET)} per run.`);

// ---- Preflight: one tiny prompt proves the token, the seat and the model before any task spends credits.
let spent = 0;
let effort = EFFORT || null;
let model = MODEL;
async function preflight() {
  const prompt = 'Reply with exactly the word OK and nothing else.';
  const usageFile = rel(path.join(TASK_DIR, '_preflight.usage.json'));
  let last = { kind: 'unknown', text: '' };
  for (const candidate of candidates) {
    let retried = false;
    for (;;) {
      const r = await runCopilot({ prompt, model: candidate, reasoningEffort: effort, maxCredits: PREFLIGHT_CREDITS, usageFile, mcpConfig: null, timeoutMs: 4 * 60 * 1000 });
      spent += r.credits || 0;
      if (r.ok) return { ok: true, model: candidate };
      const text = diagnostics(r);
      const kind = r.timedOut ? 'timeout' : classify(text);
      last = { kind, text, model: candidate };
      note(`Preflight with ${candidate}${effort ? ` (reasoning ${effort})` : ''} failed: ${explain(kind, { model: candidate })}.`);
      if (kind === 'effort' && effort) { effort = null; continue; }               // same model, default effort
      if ((kind === 'transient' || kind === 'unknown' || kind === 'timeout') && !retried) { retried = true; await sleep(RETRY_WAIT_MS); continue; }
      if (kind === 'config' || kind === 'auth') return { ok: false, ...last };     // no model will help
      break;                                                                       // try the next model
    }
  }
  return { ok: false, ...last };
}
const pre = await preflight();
if (!pre.ok) {
  await finish({
    status: 'failed', exitCode: 1, attempted: tasks.length, credits: spent, model: pre.model || MODEL,
    headline: `The writer did not start: ${explain(pre.kind, { model: pre.model })}. Nothing was written this run.`,
    detail: tail(pre.text, 20), extra: { kind: pre.kind },
  });
}
model = pre.model;
note(`Preflight OK with ${model}${model !== MODEL ? ` (${MODEL} was refused)` : ''}${effort ? `, reasoning ${effort}` : ''}; ${fmt(spent)} credits.`);

// ---- One session per task, a few at a time, until the list or the budget runs out.
let stoppedForBudget = false;
const items = [];
const queue = [...tasks];

async function pageWrittenThisRun(task) {
  try { return (await fs.stat(path.join(ROOT, task.page))).mtimeMs >= runStart; } catch { return false; }
}

async function runTask(task) {
  const output = path.join(TASK_DIR, `${task.id}.output.json`);
  const prompt = WRAPPER
    .replaceAll('{{id}}', String(task.id)).replaceAll('{{brief}}', task.brief)
    .replaceAll('{{raw}}', task.raw).replaceAll('{{output}}', rel(output));
  const opts = {
    prompt, model, maxCredits: ITEM_MAX_CREDITS, timeoutMs: ITEM_TIMEOUT_MS,
    usageFile: rel(path.join(TASK_DIR, `${task.id}.usage.json`)),
    shareFile: rel(path.join(TASK_DIR, `${task.id}.session.md`)),
    allowTools: ALLOW_TOOLS, denyTools: DENY_TOOLS, allowUrls: MICROSOFT_URLS,
  };
  const item = { id: task.id, slug: task.slug, title: task.title, topic: task.topic, credits: 0, attempts: 0 };
  for (let attempt = 1; attempt <= 2; attempt++) {
    const r = await runCopilot({ ...opts, reasoningEffort: effort });
    item.attempts = attempt;
    item.credits += r.credits || 0;
    spent += r.credits || 0;
    item.durationMs = (item.durationMs || 0) + r.durationMs;
    item.exitCode = r.exitCode; item.timedOut = r.timedOut;
    item.reply = tail(r.stdout, 1).trim().slice(0, 200);
    const written = await pageWrittenThisRun(task);
    console.log(`[${task.id}] attempt ${attempt}: ${r.ok ? 'session ended' : `exit ${r.exitCode ?? r.signal}${r.timedOut ? ' (timed out)' : ''}`} after ${secs(r.durationMs)}, ${fmt(r.credits)} credits${written ? ', page written' : ''}. ${item.reply}`);
    if (r.ok || written || r.timedOut) break;
    if (writerReplied(r)) { item.kind = 'rejected'; break; }   // the writer ran and gave up; a retry would spend the same again
    const kind = classify(diagnostics(r));
    item.kind = kind;
    if (r.stderr.trim()) console.log(tail(r.stderr, 8));
    if (kind === 'effort' && effort) { effort = null; note(`Dropped the reasoning effort setting: ${explain(kind, { model })}.`); continue; }
    if (r.durationMs < FAST_FAIL_MS && attempt === 1 && (kind === 'transient' || kind === 'unknown' || kind === 'auth')) {
      console.log(`[${task.id}] failed fast (${explain(kind, { model })}); retrying once in ${RETRY_WAIT_MS / 1000}s.`);
      await sleep(RETRY_WAIT_MS);
      continue;
    }
    break;
  }
  items.push(item);
}

async function worker() {
  while (queue.length) {
    if (spent >= BUDGET) { stoppedForBudget = true; return; }
    const task = queue.shift();
    try { await runTask(task); } catch (err) { console.error(`[${task.id}] runner error: ${err.message}`); items.push({ id: task.id, slug: task.slug, title: task.title, credits: 0, error: err.message }); }
  }
}
await Promise.all(Array.from({ length: Math.min(PARALLEL, tasks.length) }, worker));

// ---- Reconcile: sessions can finish write-briefing.mjs in parallel, so trust the pages on disk.
const results = await readJson(RESULTS_FILE, { results: [] });
for (const task of tasks) {
  if (results.results.some((r) => r.id === task.id && r.ok)) continue;
  if (!(await pageWrittenThisRun(task))) continue;
  const { yaml = '' } = parseFrontmatter(await fs.readFile(path.join(ROOT, task.page), 'utf8'));
  const title = yaml.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || task.title;
  results.results = results.results.filter((r) => r.id !== task.id);
  results.results.push({ id: task.id, at: new Date().toISOString(), ok: true, slug: task.slug, title, file: task.page, reconciled: true });
}
await writeJson(RESULTS_FILE, results);
const okIds = new Set(results.results.filter((r) => r.ok).map((r) => r.id));
const written = tasks.filter((t) => okIds.has(t.id)).length;
const perItem = items.length ? (items.reduce((s, i) => s + i.credits, 0)) / items.length : 0;

for (const i of items) {
  const ok = okIds.has(i.id);
  const why = !ok ? (i.timedOut ? explain('timeout') : i.kind ? explain(i.kind, { model }) : (results.results.find((r) => r.id === i.id && !r.ok)?.error ? 'the page failed validation' : 'the session ended without a page')) : '';
  note(`${ok ? '✓' : '✗'} ${i.id} ${i.title} (${fmt(i.credits)} credits, ${secs(i.durationMs)}${i.attempts > 1 ? `, ${i.attempts} attempts` : ''}${why ? `; ${why}` : ''})`);
}
if (stoppedForBudget) note(`Stopped at the ${fmt(BUDGET)}-credit budget for this run with ${queue.length} briefing(s) not started; they stay queued.`);

const status = written ? 'ok' : 'nothing-written';
const headline = written
  ? `Wrote ${written} of ${tasks.length} briefings with ${model} for ${fmt(spent)} AI credits (${fmt(perItem)} per briefing).${written < tasks.length ? ' The rest stay queued for the next run.' : ''}`
  : `Ran ${items.length} session(s) with ${model} but no briefing passed validation; ${fmt(spent)} AI credits were spent and the items stay queued.`;
await finish({
  status, headline, written, attempted: tasks.length, credits: spent, model,
  extra: { reasoningEffort: effort, requestedModel: MODEL, budget: BUDGET, itemCap: ITEM_MAX_CREDITS, stoppedForBudget, notReached: queue.length, items: items.map((i) => ({ ...i, ok: okIds.has(i.id) })) },
});
