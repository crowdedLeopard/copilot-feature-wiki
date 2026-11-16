/**
 * Shared plumbing for running GitHub Copilot CLI non-interactively from the pipeline.
 *
 * One call = one `copilot -p` session, billed in AI credits to the Copilot seat behind the token
 * the workflow provides (GITHUB_TOKEN with `copilot-requests: write`, or COPILOT_GITHUB_TOKEN).
 * The writer (compile-copilot.mjs) and the verifier use this so auth, MCP wiring, permission
 * rules, credit caps and usage accounting are handled in one place.
 *
 *   import { runCopilot, MICROSOFT_URLS } from './lib/copilot.mjs';
 *   const r = await runCopilot({ prompt, model: 'claude-opus-5.5', maxCredits: 250, usageFile: 'x.json',
 *                                allowTools: ['write(data/compile-tasks/**)', 'shell(node:*)', 'microsoft-learn'] });
 *   r.ok, r.exitCode, r.timedOut, r.stdout, r.stderr, r.usage (parsed usage file), r.credits (number or null)
 *
 * Nothing here reads or prints tokens; the CLI picks them up from the environment.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { ROOT, readJson } from './util.mjs';

/** Microsoft domains the agents may fetch from (web_fetch). Matches the Claude step's allow list. */
export const MICROSOFT_URLS = [
  'https://learn.microsoft.com',
  'https://techcommunity.microsoft.com',
  'https://adoption.microsoft.com',
  'https://www.microsoft.com',
];

/** Commands no pipeline agent should ever run, whatever its allow rules say. */
export const DENY_ALWAYS = [
  'shell(git:*)', 'shell(gh:*)', 'shell(npm:*)', 'shell(npx:*)', 'shell(rm:*)', 'shell(curl:*)', 'shell(wget:*)',
  'write(raw/**)', 'write(.github/**)', 'write(pipeline/**)', 'write(src/**)',
];

export const DEFAULT_MCP_CONFIG = 'pipeline/mcp.json';
export const COPILOT_BIN = process.env.COPILOT_BIN || 'copilot';

/**
 * Build the argument list for one non-interactive session. Exported so a caller can log or dry-run it.
 * Values use the `--flag=value` form, which the CLI accepts for every option and keeps list options
 * from swallowing the next flag.
 */
export function copilotArgs({
  prompt, model, reasoningEffort, maxCredits, usageFile, shareFile, logDir,
  mcpConfig = DEFAULT_MCP_CONFIG, allowTools = [], denyTools = [], allowUrls = [], extra = [],
}) {
  if (!prompt) throw new Error('copilotArgs: prompt is required');
  const args = ['-p', prompt, '-s', '--no-ask-user', '--no-custom-instructions', '--disable-builtin-mcps'];
  if (model) args.push(`--model=${model}`);
  if (reasoningEffort) args.push(`--reasoning-effort=${reasoningEffort}`);
  if (maxCredits) args.push(`--max-ai-credits=${Math.max(1, Math.round(maxCredits))}`);
  if (usageFile) args.push(`--usage-output-file=${usageFile}`);
  if (shareFile) args.push(`--share=${shareFile}`);
  if (logDir) args.push(`--log-dir=${logDir}`);
  if (mcpConfig) args.push(`--additional-mcp-config=@${mcpConfig}`);
  for (const rule of allowTools) args.push(`--allow-tool=${rule}`);
  for (const rule of new Set([...DENY_ALWAYS, ...denyTools])) args.push(`--deny-tool=${rule}`);
  for (const url of allowUrls) args.push(`--allow-url=${url}`);
  return [...args, ...extra];
}

/**
 * Pull the AI-credit figure out of the usage file the CLI writes with --usage-output-file.
 * `copilot help billing` documents the shape: totalNanoAiu (10^9 nano AIU = 1 AI credit),
 * totalPremiumRequestCost, modelMetrics and agentMetrics ("main" and each subagent). The total is
 * read first; failing that, the first nano-AIU or credit-like number breadth-first (totals come
 * before breakdowns); null when there is none. The raw usage object is kept alongside.
 */
export const NANO_AIU_PER_CREDIT = 1e9;
export function creditsFromUsage(usage) {
  if (!usage || typeof usage !== 'object') return null;
  if (typeof usage.totalNanoAiu === 'number') return usage.totalNanoAiu / NANO_AIU_PER_CREDIT;
  const direct = ['totalAiCredits', 'total_ai_credits', 'aiCredits', 'ai_credits', 'credits', 'aiCreditsUsed'];
  for (const key of direct) if (typeof usage[key] === 'number') return usage[key];
  const queue = [usage];
  while (queue.length) {
    const node = queue.shift();
    if (!node || typeof node !== 'object') continue;
    for (const [key, value] of Object.entries(node)) {
      if (/nanoAiu/i.test(key) && typeof value === 'number') return value / NANO_AIU_PER_CREDIT;
      if (/credit/i.test(key) && !/premium/i.test(key)) {
        if (typeof value === 'number') return value;
        if (value && typeof value === 'object') {
          for (const k of ['total', 'used', 'value', 'amount']) if (typeof value[k] === 'number') return value[k];
        }
      }
    }
    for (const value of Object.values(node)) if (value && typeof value === 'object') queue.push(value);
  }
  return null;
}

/** Credits per model from the usage file's modelMetrics, e.g. { 'claude-sonnet-5.5': 41.2 }; {} when unknown. */
export function creditsByModel(usage) {
  const out = {};
  const metrics = usage?.modelMetrics;
  if (!metrics || typeof metrics !== 'object') return out;
  for (const [model, m] of Object.entries(metrics)) {
    const c = creditsFromUsage(m);
    if (c != null) out[model] = c;
  }
  return out;
}

/**
 * Run one session. Resolves (never rejects for a CLI failure) with
 *   { ok, exitCode, signal, timedOut, durationMs, stdout, stderr, usage, credits, args }
 * `ok` is exit code 0 and not timed out. The caller decides what success means for its task
 * (the writer checks write-briefing's result file, not the agent's words).
 */
export async function runCopilot(options) {
  const {
    cwd = ROOT, timeoutMs = 15 * 60 * 1000, env = {}, maxOutputBytes = 2_000_000, onLine,
  } = options;
  const args = copilotArgs(options);
  const usageFile = options.usageFile ? path.resolve(cwd, options.usageFile) : null;
  if (usageFile) await fs.rm(usageFile, { force: true });
  const started = Date.now();

  return new Promise((resolve) => {
    let stdout = '', stderr = '', timedOut = false, settled = false;
    const child = spawn(COPILOT_BIN, args, {
      cwd,
      env: { ...process.env, CI: process.env.CI || 'true', COPILOT_AUTO_UPDATE: 'false', NO_COLOR: '1', ...env },
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const keep = (buf, chunk) => (buf.length < maxOutputBytes ? buf + chunk : buf);
    child.stdout.on('data', (d) => { const s = d.toString(); stdout = keep(stdout, s); onLine?.(s, 'stdout'); });
    child.stderr.on('data', (d) => { const s = d.toString(); stderr = keep(stderr, s); onLine?.(s, 'stderr'); });

    const timer = setTimeout(() => {
      timedOut = true;
      child.kill('SIGTERM');
      setTimeout(() => { if (!settled) child.kill('SIGKILL'); }, 20_000).unref();
    }, timeoutMs);

    const finish = async (exitCode, signal, spawnError) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (spawnError) stderr += `\n${spawnError.message}`;
      const usage = usageFile ? await readJson(usageFile, null).catch(() => null) : null;
      resolve({
        ok: exitCode === 0 && !timedOut && !spawnError,
        exitCode, signal, timedOut, durationMs: Date.now() - started,
        stdout, stderr, usage, credits: creditsFromUsage(usage), args,
      });
    };
    child.on('error', (err) => finish(null, null, err));
    child.on('close', (code, signal) => finish(code, signal, null));
  });
}

/** Last `n` lines of a block of text, for step summaries and logs. */
/**
 * What went wrong, in words an administrator can act on. Classify only the CLI's own diagnostics
 * (`cliDiagnostics(result)`: stderr, or stdout when stderr is empty); a reply from the agent itself
 * is not an error. Kinds: config (a flag the pipeline passes was rejected: a pipeline bug), effort
 * (the model refuses the reasoning effort), model (the seat has no access to the model), auth (the
 * token or seat was refused), transient (rate limit, outage, network), unknown.
 */
export function classifyCopilotError(text = '') {
  if (/max-ai-credits|invalid value for|unexpected argument|unrecognized option|unknown option|^usage:/im.test(text)) return 'config';
  const refused = /not (supported|available|enabled|found|allowed|valid|entitled)|invalid|unsupported|unknown|disabled|does not exist|no access/i;
  if (/reasoning[ _-]?effort/i.test(text) && refused.test(text)) return 'effort';
  if (/\bmodel\b/i.test(text) && refused.test(text)) return 'model';
  if (/unauthori[sz]ed|forbidden|\b40[13]\b|bad credentials|invalid token|token (is|has) (expired|invalid)|not entitled|no copilot|subscription|copilot-requests|permission denied|authentication/i.test(text)) return 'auth';
  if (/rate limit|\b429\b|too many requests|overloaded|\b50[234]\b|timed? ?out|ECONN|ETIMEDOUT|network|socket hang/i.test(text)) return 'transient';
  return 'unknown';
}

/** One plain-English sentence per kind, for step summaries and annotations. */
export function explainCopilotError(kind, { model } = {}) {
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

/** The CLI's own diagnostics from a runCopilot result: stderr, or stdout when stderr is empty. */
export const cliDiagnostics = (result) => (result.stderr?.trim() ? result.stderr : result.stdout || '');

/** True when the agent itself answered with the DONE/FAILED protocol (DECLINED for a concept task), so the session ran to its end. */
export const agentReplied = (result) => /^(DONE|DECLINED|FAILED)\b/m.test(result.stdout || '');

export function tail(text = '', n = 15) {
  const lines = text.trimEnd().split('\n');
  return lines.slice(-n).join('\n');
}
