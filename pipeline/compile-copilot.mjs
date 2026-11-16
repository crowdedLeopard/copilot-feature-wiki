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
 * Env:
 *   COPILOT_MODEL              model id (default claude-opus-5.5); 'auto' lets Copilot choose
 *   COPILOT_REASONING_EFFORT   low|medium|high|xhigh|max, or empty for the model default (default high)
 *   COMPILE_PARALLEL           sessions at once (default 2)
 *   COMPILE_ITEM_MAX_CREDITS   AI-credit cap per session (default 300 = $3.00)
 *   COMPILE_MAX_CREDITS        AI-credit budget per run; no new sessions start once it is spent
 *                              (default 200 x tasks)
 *   COMPILE_ITEM_TIMEOUT_MIN   wall-clock cap per session (default 15)
 *   COPILOT_BIN                path to the copilot binary (default: copilot on PATH)
 *
 * Exit code 1 only when nothing could run at all (auth or model rejected at preflight), so the
 * workflow can flag the run while still linting, building and deploying what is committed.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, ROOT, readJson, writeJson, parseFrontmatter } from './lib/util.mjs';
import { runCopilot, MICROSOFT_URLS, tail } from './lib/copilot.mjs';

const MODEL = (process.env.COPILOT_MODEL || 'claude-opus-5.5').trim();
const EFFORT = (process.env.COPILOT_REASONING_EFFORT ?? 'high').trim();
const PARALLEL = Math.max(1, Number(process.env.COMPILE_PARALLEL || 2));
const ITEM_MAX_CREDITS = Math.max(1, Number(process.env.COMPILE_ITEM_MAX_CREDITS || 300));
const ITEM_TIMEOUT_MS = Math.max(1, Number(process.env.COMPILE_ITEM_TIMEOUT_MIN || 15)) * 60 * 1000;
const TASK_DIR = path.join(DATA_DIR, 'compile-tasks');
const RESULTS_FILE = path.join(DATA_DIR, 'compile-results.json');
const USAGE_FILE = path.join(DATA_DIR, 'compile-usage.json');
const WRAPPER = await fs.readFile(path.join(ROOT, 'pipeline', 'prompts', 'compile-copilot-item.md'), 'utf8');

const ALLOW_TOOLS = [
  'write(data/compile-tasks/**)',   // the JSON output; write-briefing.mjs writes the page itself
  'shell(node:*)',                   // node pipeline/write-briefing.mjs <id> <json>
  'shell(cat:*)', 'shell(ls:*)',
  'microsoft-learn',                 // every tool of the Microsoft Learn MCP server
];
const DENY_TOOLS = ['write(wiki/**)', 'write(data/*.json)'];

const summaryLines = [];
const note = (line) => { console.log(line); summaryLines.push(line); };
const rel = (p) => path.relative(ROOT, p);
const fmt = (n) => (n == null ? 'n/a' : Number(n).toLocaleString('en-GB', { maximumFractionDigits: 1 }));

async function finish({ status, written = 0, credits = 0, model = MODEL, exitCode = 0 }) {
  if (process.env.GITHUB_STEP_SUMMARY) {
    await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, `### Copilot writer\n${summaryLines.map((l) => `- ${l}`).join('\n')}\n`);
  }
  if (process.env.GITHUB_OUTPUT) {
    await fs.appendFile(process.env.GITHUB_OUTPUT, `status=${status}\nwritten=${written}\ncredits=${Math.round(credits)}\nmodel=${model}\n`);
  }
  process.exit(exitCode);
}

const taskList = await readJson(path.join(DATA_DIR, 'compile-tasks.json'), { tasks: [] });
const tasks = taskList.tasks;
if (!tasks.length) {
  note('No tasks prepared; nothing to write.');
  await finish({ status: 'empty' });
}
const BUDGET = Math.max(ITEM_MAX_CREDITS, Number(process.env.COMPILE_MAX_CREDITS || 0) || 200 * tasks.length);
const runStart = Date.now();
note(`${tasks.length} task(s), model ${MODEL}${EFFORT ? ` (reasoning ${EFFORT})` : ''}, ${PARALLEL} at a time, caps ${ITEM_MAX_CREDITS} credits per item and ${fmt(BUDGET)} per run.`);

// ---- Preflight: one tiny prompt proves the token, the seat and the model before any task spends credits.
let effort = EFFORT || null;
let preflightCredits = 0;
async function preflight() {
  const usageFile = path.join(TASK_DIR, '_preflight.usage.json');
  const common = { prompt: 'Reply with exactly the word OK and nothing else.', model: MODEL, maxCredits: 5, usageFile: rel(usageFile), mcpConfig: null, timeoutMs: 4 * 60 * 1000 };
  let r = await runCopilot({ ...common, reasoningEffort: effort });
  if (!r.ok && effort) {
    note(`Preflight with reasoning effort "${effort}" failed (${r.exitCode ?? r.signal}); retrying with the model default.`);
    effort = null;
    r = await runCopilot({ ...common });
  }
  return r;
}
const pre = await preflight();
preflightCredits = pre.credits || 0;
if (!pre.ok) {
  note(`Preflight failed: Copilot CLI exited ${pre.exitCode ?? pre.signal}${pre.timedOut ? ' (timed out)' : ''} for model "${MODEL}". No briefings were attempted.`);
  note('Check that the job has `copilot-requests: write`, that the seat behind the token has the Copilot CLI policy enabled, and that the model id is one Copilot offers this seat (try COPILOT_MODEL=auto).');
  const detail = tail(`${pre.stderr}\n${pre.stdout}`, 20);
  if (detail.trim()) note('CLI output:\n```\n' + detail + '\n```');
  await writeJson(USAGE_FILE, { path: 'copilot', model: MODEL, status: 'preflight-failed', credits: preflightCredits, items: [], detail });
  await finish({ status: 'failed', exitCode: 1 });
}
note(`Preflight OK (${fmt(preflightCredits)} credits).`);

// ---- One session per task, a few at a time, until the list or the budget runs out.
let spent = preflightCredits;
let stoppedForBudget = false;
const items = [];
const queue = [...tasks];

async function runTask(task) {
  const output = path.join(TASK_DIR, `${task.id}.output.json`);
  const prompt = WRAPPER
    .replaceAll('{{id}}', String(task.id))
    .replaceAll('{{brief}}', task.brief)
    .replaceAll('{{raw}}', task.raw)
    .replaceAll('{{output}}', rel(output));
  const r = await runCopilot({
    prompt, model: MODEL, reasoningEffort: effort, maxCredits: ITEM_MAX_CREDITS, timeoutMs: ITEM_TIMEOUT_MS,
    usageFile: rel(path.join(TASK_DIR, `${task.id}.usage.json`)),
    shareFile: rel(path.join(TASK_DIR, `${task.id}.session.md`)),
    allowTools: ALLOW_TOOLS, denyTools: DENY_TOOLS, allowUrls: MICROSOFT_URLS,
  });
  const credits = r.credits || 0;
  spent += credits;
  const reply = tail(r.stdout, 1).trim().slice(0, 200);
  items.push({ id: task.id, slug: task.slug, title: task.title, topic: task.topic, credits, durationMs: r.durationMs, exitCode: r.exitCode, timedOut: r.timedOut, reply });
  console.log(`[${task.id}] ${r.ok ? 'session ended' : `exit ${r.exitCode ?? r.signal}${r.timedOut ? ' (timed out)' : ''}`} after ${Math.round(r.durationMs / 1000)}s, ${fmt(credits)} credits. ${reply}`);
  if (!r.ok && r.stderr.trim()) console.log(tail(r.stderr, 8));
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
  const page = path.join(ROOT, task.page);
  try {
    const stat = await fs.stat(page);
    if (stat.mtimeMs < runStart) continue;
    const { yaml = '' } = parseFrontmatter(await fs.readFile(page, 'utf8'));
    const title = yaml.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || task.title;
    results.results = results.results.filter((r) => r.id !== task.id);
    results.results.push({ id: task.id, at: new Date().toISOString(), ok: true, slug: task.slug, title, file: task.page, reconciled: true });
  } catch { /* page not written: stays queued for the next run */ }
}
await writeJson(RESULTS_FILE, results);

const written = tasks.filter((t) => results.results.some((r) => r.id === t.id && r.ok)).length;
const notReached = queue.length;
await writeJson(USAGE_FILE, {
  path: 'copilot', model: MODEL, reasoningEffort: effort, status: written ? 'ok' : 'nothing-written',
  credits: spent, preflightCredits, budget: BUDGET, itemCap: ITEM_MAX_CREDITS, stoppedForBudget, notReached,
  items: items.map((i) => ({ ...i, ok: results.results.some((r) => r.id === i.id && r.ok) })),
});
note(`${written} of ${tasks.length} written, ${fmt(spent)} AI credits in total (${fmt(items.length ? (spent - preflightCredits) / items.length : 0)} per session)${stoppedForBudget ? `, stopped at the ${fmt(BUDGET)}-credit budget with ${notReached} not started` : ''}.`);
for (const i of items) {
  const ok = results.results.some((r) => r.id === i.id && r.ok);
  note(`${ok ? '✓' : '✗'} ${i.id} ${i.title} (${fmt(i.credits)} credits, ${Math.round((i.durationMs || 0) / 1000)}s${i.timedOut ? ', timed out' : ''}${!ok && i.reply ? `, ${i.reply}` : ''})`);
}
await finish({ status: written ? 'ok' : 'nothing-written', written, credits: spent, exitCode: 0 });
