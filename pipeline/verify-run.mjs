#!/usr/bin/env node
/**
 * Verify, the engine runner: one fresh agent session per briefing, on whichever engine the
 * repository is set to, so the verifier never sees the writer's reasoning or another page's check.
 *
 *   VERIFY_ENGINE   copilot | claude-code | api | auto (default). auto picks the first engine whose
 *                   credentials are present, in that order.
 *   VERIFY_MODEL    first model to try. Defaults per engine: copilot gpt-6.1-sol, claude-code and
 *                   api claude-fable-5-2.
 *   VERIFY_FALLBACK_MODEL  tried when the first model is refused (defaults: gpt-5.6-sol, claude-opus-5-5).
 *   VERIFY_MAX_CREDITS     Copilot AI-credit cap per briefing (default 250).
 *   VERIFY_TIMEOUT_MINUTES per briefing (default 15).
 *
 * The verifier's editorial rules are pipeline/prompts/verify-agent.md. The per-page brief
 * (data/verify-tasks/<slug>.md, from verify-tasks.mjs) carries the mechanics and the contract.
 * Success for a task is a verdict recorded by record-verification.mjs, not the agent's own words.
 * Writes data/verify-run.json (engine, model, cost and outcome per task).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { spawn, spawnSync } from 'node:child_process';
import { ROOT, DATA_DIR, readJson, writeJson, today } from './lib/util.mjs';
import { VERIFY_RESULTS, recordVerification } from './lib/verify.mjs';

const PROMPT_FILE = 'pipeline/prompts/verify-agent.md';
const DEFAULT_MODELS = {
  copilot: ['gpt-6.1-sol', 'gpt-5.6-sol'],
  'claude-code': ['claude-fable-5-2', 'claude-opus-5-5'],
  api: ['claude-fable-5-2', 'claude-opus-5-5'],
};
const TIMEOUT_MS = Number(process.env.VERIFY_TIMEOUT_MINUTES || 15) * 60 * 1000;
const MAX_CREDITS = Number(process.env.VERIFY_MAX_CREDITS || 250);

// No shell: the verifier writes one file and the pipeline records it.
const CLAUDE_TOOLS = [
  'Read', 'Glob', 'Grep', 'Write', 'Edit', 'WebSearch',
  'WebFetch(domain:learn.microsoft.com)', 'WebFetch(domain:techcommunity.microsoft.com)', 'WebFetch(domain:adoption.microsoft.com)', 'WebFetch(domain:www.microsoft.com)',
  'mcp__microsoft-learn',
].join(',');

const FALLBACK_INSTRUCTIONS = `You are the independent verifier for Release Ledger, a wiki of Microsoft Copilot, Power Platform and Modern Work briefings for administrators. You did not write the page and you must not trust it: check every specific statement against Microsoft Learn and report what the documentation supports, what it does not, and what it contradicts. Quote evidence verbatim. Be precise, be strict about commands, paths, licences, costs, dates and default states, and be fair about statements the page already presents as not yet documented.`;

async function exists(p) { try { await fs.access(path.resolve(ROOT, p)); return true; } catch { return false; } }
const has = (name) => Boolean(process.env[name]);
const summary = async (line) => { console.log(line); if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line + '\n'); };

async function resolveEngine() {
  const want = (process.env.VERIFY_ENGINE || 'auto').toLowerCase();
  const can = {
    copilot: (await exists('pipeline/lib/copilot.mjs')) && (has('COPILOT_GITHUB_TOKEN') || has('GITHUB_TOKEN')) && spawnSync(process.env.COPILOT_BIN || 'copilot', ['--version'], { stdio: 'ignore' }).status === 0,
    'claude-code': (has('CLAUDE_CODE_OAUTH_TOKEN') || has('ANTHROPIC_API_KEY')) && spawnSync('claude', ['--version'], { stdio: 'ignore' }).status === 0,
    api: has('ANTHROPIC_API_KEY'),
  };
  if (want !== 'auto') {
    if (!['copilot', 'claude-code', 'api', 'off'].includes(want)) throw new Error(`VERIFY_ENGINE "${want}" is not one of copilot, claude-code, api, auto, off`);
    if (want === 'off') return { engine: 'none', why: 'VERIFY_ENGINE=off' };
    if (can[want]) return { engine: want };
    const why = want === 'copilot' ? 'Copilot CLI not installed, no GITHUB_TOKEN, or pipeline/lib/copilot.mjs missing' : want === 'claude-code' ? 'claude CLI not installed or no CLAUDE_CODE_OAUTH_TOKEN' : 'no ANTHROPIC_API_KEY';
    return { engine: 'none', why: `${want} requested but unavailable (${why})` };
  }
  for (const e of ['copilot', 'claude-code', 'api']) if (can[e]) return { engine: e };
  return { engine: 'none', why: 'no engine has credentials (Copilot CLI with GITHUB_TOKEN, claude CLI with CLAUDE_CODE_OAUTH_TOKEN, or ANTHROPIC_API_KEY)' };
}

function taskPrompt(task, intro) {
  return `${intro}

Check one briefing, with a fresh mind. Roadmap id: ${task.roadmapId ?? 'none'}. The page: ${task.page}. The roadmap record: ${task.raw ?? 'none'}.${task.writerOutput ? ` The writer's output with its evidence list: ${task.writerOutput}.` : ''} Pre-check file (deterministic findings to confirm, and the rows that must each have a claim): ${task.brief}. Run date: ${today()}.

Write the verdict JSON to ${task.verdict} and write nothing else. Do not edit the page, the record or any other file. Do not run commands. The pipeline records the verdict after you finish.`;
}

function runProcess(cmd, args, { env = {}, timeoutMs }) {
  return new Promise((resolve) => {
    let stdout = '', stderr = '', timedOut = false;
    const child = spawn(cmd, args, { cwd: ROOT, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
    child.stdout.on('data', (d) => { stdout += d; });
    child.stderr.on('data', (d) => { stderr += d; });
    const timer = setTimeout(() => { timedOut = true; child.kill('SIGTERM'); setTimeout(() => child.kill('SIGKILL'), 20_000).unref(); }, timeoutMs);
    child.on('error', (err) => { clearTimeout(timer); resolve({ ok: false, exitCode: null, stdout, stderr: stderr + '\n' + err.message, timedOut }); });
    child.on('close', (code) => { clearTimeout(timer); resolve({ ok: code === 0 && !timedOut, exitCode: code, stdout, stderr, timedOut }); });
  });
}

async function runClaude(task, model, intro) {
  const started = Date.now();
  const r = await runProcess('claude', [
    '-p', taskPrompt(task, intro), '--model', model, '--max-turns', '90', '--output-format', 'json',
    '--mcp-config', 'pipeline/mcp.json', '--allowedTools', CLAUDE_TOOLS,
  ], { env: { VERIFY_MODEL: model, VERIFY_ENGINE: 'claude-code' }, timeoutMs: TIMEOUT_MS });
  let meta = null;
  try { meta = JSON.parse(r.stdout.trim().split('\n').filter(Boolean).at(-1)); } catch { /* not json */ }
  return { ...r, durationMs: Date.now() - started, cost: meta?.total_cost_usd ?? null, turns: meta?.num_turns ?? null, errorText: (meta?.is_error ? String(meta.result) : '') + '\n' + r.stderr.slice(-2000) };
}

async function runCopilotEngine(task, model, intro) {
  const { runCopilot, MICROSOFT_URLS } = await import('./lib/copilot.mjs');
  const r = await runCopilot({
    prompt: taskPrompt(task, intro), model, maxCredits: MAX_CREDITS, timeoutMs: TIMEOUT_MS,
    usageFile: path.join(DATA_DIR, 'verify-tasks', `${task.slug}.usage.json`),
    allowTools: ['write(data/verify-tasks/**)', 'write(data/verify/**)', 'microsoft-learn'],
    allowUrls: MICROSOFT_URLS,
    env: { VERIFY_MODEL: model, VERIFY_ENGINE: 'copilot' },
  });
  return { ...r, cost: r.credits ?? null, turns: null, errorText: r.stderr.slice(-2000) + '\n' + r.stdout.slice(-1000) };
}

async function runApi(task, model, intro) {
  const { verifyWithApi } = await import('./verify.mjs');
  const started = Date.now();
  try {
    const r = await verifyWithApi(task, { model, instructions: intro });
    return { ok: true, durationMs: Date.now() - started, cost: r.cost ?? null, turns: r.turns ?? null, errorText: '' };
  } catch (err) {
    return { ok: false, durationMs: Date.now() - started, cost: null, turns: null, errorText: err.message, modelRefused: /model|not_found|404/i.test(err.message) };
  }
}

/** Find the verdict the agent wrote: the path we asked for, or the prompt's default data/verify/<id>.verdict.json. */
async function findVerdict(task) {
  const candidates = [task.verdict, task.roadmapId ? `data/verify/${task.roadmapId}.verdict.json` : null].filter(Boolean);
  for (const p of candidates) {
    try { return { file: p, verdict: JSON.parse(await fs.readFile(path.resolve(ROOT, p), 'utf8')) }; } catch (err) {
      if (err.code !== 'ENOENT') return { file: p, error: `could not parse ${p}: ${err.message}` };
    }
  }
  return null;
}

/** Record the verdict for a task. Resolves { done } or { error } (the error text goes back to the agent once). */
async function recordTask(task, model, engine) {
  const already = (await readJson(VERIFY_RESULTS, { results: [] })).results.find((r) => r.slug === task.slug && (r.ok || r.incomplete));
  if (already) return already.ok ? { done: already } : { incomplete: true, error: already.error };
  const found = await findVerdict(task);
  if (!found) return { error: `no verdict file was written at ${task.verdict}` };
  if (found.error) return { error: found.error };
  try {
    const r = await recordVerification(task.slug, found.verdict, { model, engine });
    if (r.status === 'incomplete') return { incomplete: true, error: r.reasons[0] };
    return { done: { status: r.status, counts: r.counts } };
  } catch (err) {
    return { error: err.message };
  }
}

async function main() {
  const tasks = (await readJson(path.join(DATA_DIR, 'verify-tasks.json'), { tasks: [] })).tasks;
  const runFile = path.join(DATA_DIR, 'verify-run.json');
  if (!tasks.length) { await writeJson(runFile, { engine: 'none', why: 'nothing to verify', tasks: [] }); await summary('verify: nothing to check.'); return; }
  const { engine, why } = await resolveEngine();
  if (engine === 'none') {
    await writeJson(runFile, { engine, why, tasks: [] });
    await summary(`verify: skipped, ${why}. ${tasks.length} briefing(s) stay unchecked; pages written today are held until a verifier runs.`);
    return;
  }
  const models = [process.env.VERIFY_MODEL || DEFAULT_MODELS[engine][0], process.env.VERIFY_FALLBACK_MODEL || DEFAULT_MODELS[engine][1]].filter((m, i, a) => m && a.indexOf(m) === i);
  const promptExists = await exists(PROMPT_FILE);
  const intro = promptExists ? `Read ${PROMPT_FILE} and apply it as your standard.` : FALLBACK_INSTRUCTIONS;
  if (!promptExists) await summary(`verify: ${PROMPT_FILE} is not in the repository yet; running with the built-in minimum instructions.`);
  const run = { engine, startedAt: new Date().toISOString(), models, promptFile: promptExists ? PROMPT_FILE : null, tasks: [] };
  let modelIndex = 0;
  for (const task of tasks) {
    let attempt = 0, result = null, outcome = null, feedback = '';
    while (attempt < 3 && !outcome?.done && !outcome?.incomplete) {
      const model = models[Math.min(modelIndex, models.length - 1)];
      console.log(`verify ${task.slug} on ${engine}/${model}${attempt ? ' (retry)' : ''}`);
      const prompt = intro + (feedback ? `\n\nYour previous verdict file was rejected by the recorder: ${feedback}\nRewrite ${task.verdict} so it is accepted.` : '');
      result = engine === 'copilot' ? await runCopilotEngine(task, model, prompt) : engine === 'claude-code' ? await runClaude(task, model, prompt) : await runApi(task, model, prompt);
      outcome = engine === 'api' && result.ok ? await recordTask(task, model, engine) : await recordTask(task, model, engine);
      run.tasks.push({
        slug: task.slug, model, attempt: attempt + 1, ok: Boolean(outcome.done), incomplete: Boolean(outcome.incomplete), status: outcome.done?.status ?? null, counts: outcome.done?.counts ?? null,
        exitCode: result.exitCode ?? null, timedOut: result.timedOut ?? false, durationMs: result.durationMs ?? null, cost: result.cost ?? null, turns: result.turns ?? null,
        error: outcome.done ? null : (outcome.error || result.errorText || '').trim().slice(-1500),
      });
      attempt++;
      if (outcome.done || outcome.incomplete) break;
      // The first failure of the run may be the model being unavailable on this seat or plan: switch
      // to the fallback model once and keep it for the rest of the run if it works. A rejected verdict
      // goes back to the same model once with the recorder's message.
      const nothingYet = run.tasks.filter((t) => t.ok).length === 0;
      if ((nothingYet && modelIndex < models.length - 1 && !(await findVerdict(task))) || result.modelRefused) { modelIndex = Math.min(modelIndex + 1, models.length - 1); feedback = ''; continue; }
      if (attempt < 2 && outcome.error && !outcome.error.startsWith('no verdict file')) { feedback = outcome.error; continue; }
      break;
    }
    await writeJson(runFile, run);
    console.log(outcome?.done ? `  ${outcome.done.status}: ${outcome.done.counts.confirmed}/${outcome.done.counts.claims} confirmed` : outcome?.incomplete ? '  incomplete (verifier tools failed)' : `  no verdict recorded${result?.timedOut ? ' (timed out)' : ''}: ${(outcome?.error || '').slice(0, 200)}`);
  }
  run.finishedAt = new Date().toISOString();
  await writeJson(runFile, run);
  const ok = new Set(run.tasks.filter((t) => t.ok).map((t) => t.slug)).size;
  const cost = run.tasks.reduce((s, t) => s + (t.cost || 0), 0);
  await summary(`verify: ${ok} of ${tasks.length} briefings checked on ${engine} (${[...new Set(run.tasks.filter((t) => t.ok).map((t) => t.model))].join(', ') || models[0]}), ${engine === 'copilot' ? `${cost} AI credits` : `$${cost.toFixed(2)}`} spent`);
}

main().catch(async (err) => { console.error(err); await summary(`verify: failed. ${err.message}`); process.exit(1); });
