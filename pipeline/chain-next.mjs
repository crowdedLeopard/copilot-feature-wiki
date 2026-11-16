#!/usr/bin/env node
/**
 * After the writer and the checker: record this run's spend against the day's budget and decide whether
 * the workflow starts another run as soon as this one finishes.
 *
 * The site owner's standing instruction (16 Nov 2026) is to keep making briefings, so curation runs chain
 * back to back while the day's AI credits stay under COMPILE_DAILY_CREDITS. The scheduled runs still
 * happen and are the fallback when a chain breaks (GitHub can start a scheduled run late, or not at all).
 * A run that wrote nothing does not start another: a broken writer must not loop.
 *
 * Reads data/last-compile.json and data/last-verify.json (this run's figures, when those steps ran), writes
 * data/spend.json (per-day totals, kept for 31 days), a wiki/log.md line, the step summary and the `next`
 * and `reason` outputs the workflow's "Start the next run" step reads.
 *
 * Env: COMPILE_CHAIN on (default) | off; COMPILE_DAILY_CREDITS (default 15000, per UTC day);
 *      RUN_WROTE 'true' when the compile step ran in this run; RUN_VERIFIED 'true' when the verify step ran.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { DATA_DIR, readJson, writeJson, appendLog, today } from './lib/util.mjs';

const chainOn = (process.env.COMPILE_CHAIN || 'on').trim().toLowerCase() !== 'off';
const budget = Math.max(0, Number(process.env.COMPILE_DAILY_CREDITS) || 15000);
const compile = process.env.RUN_WROTE === 'true' ? await readJson(path.join(DATA_DIR, 'last-compile.json'), null) : null;
const verify = process.env.RUN_VERIFIED === 'true' ? await readJson(path.join(DATA_DIR, 'last-verify.json'), null) : null;

const writing = Math.round(Number(compile?.credits) || 0);
// The verifier's cost is in AI credits on the Copilot engine and in dollars on the Claude engines.
const checking = verify?.engine === 'copilot' ? Math.round(Number(verify.cost) || 0) : 0;
const written = (Number(compile?.written) || 0) + (Number(compile?.concepts) || 0);
const checked = verify ? (Number(verify.attempted) || 0) - (Number(verify.unreached) || 0) : 0;

const spendFile = path.join(DATA_DIR, 'spend.json');
const spend = await readJson(spendFile, { days: {} });
const date = today();
const day = spend.days[date] || { credits: 0, runs: 0, written: 0, checked: 0 };
day.credits += writing + checking;
day.runs += 1;
day.written += written;
day.checked += checked;
spend.days[date] = day;
const cutoff = new Date(Date.now() - 31 * 86_400_000).toISOString().slice(0, 10);
for (const d of Object.keys(spend.days)) if (d < cutoff) delete spend.days[d];
spend.budget = budget;
spend.updated = new Date().toISOString();
await writeJson(spendFile, spend);

let next = true;
let reason = '';
if (!chainOn) { next = false; reason = 'chaining is off (COMPILE_CHAIN)'; }
else if (!compile) { next = false; reason = 'the writer did not run in this run'; }
else if (compile.status === 'failed' || written === 0) { next = false; reason = 'nothing was written in this run, so the schedule gets the next try'; }
else if (day.credits >= budget) { next = false; reason = `today's budget of ${budget.toLocaleString('en-GB')} AI credits is spent (COMPILE_DAILY_CREDITS)`; }

const n = (x) => x.toLocaleString('en-GB');
const line = `- ${date} spend: ${n(writing + checking)} AI credits this run (${n(writing)} writing, ${n(checking)} checking); ${n(day.credits)} of ${n(budget)} today over ${day.runs} run${day.runs === 1 ? '' : 's'}; next run ${next ? 'starts when this one finishes' : `not started: ${reason}`}`;
await appendLog(line);
console.log(line.slice(2));
if (process.env.GITHUB_STEP_SUMMARY) await fs.appendFile(process.env.GITHUB_STEP_SUMMARY, line.slice(2) + '\n');
if (process.env.GITHUB_OUTPUT) await fs.appendFile(process.env.GITHUB_OUTPUT, `next=${next}\nreason=${reason}\ncredits_today=${day.credits}\n`);
