#!/usr/bin/env node
/**
 * Verify, step 2 of 3: the verifier calls this once per briefing with its verdict file.
 *
 *   node pipeline/record-verification.mjs <slug> <verdict.json>
 *
 * Validates the verdict against the contract (pipeline/lib/verify-schema.mjs), computes pass or
 * hold with the rule in pipeline/lib/verify.mjs, writes wiki/verification/<slug>.json, stamps the
 * page's front matter and moves the page to wiki/features (published) or wiki/_held (not
 * published). Prints "OK <status>" or "REJECTED <reason>" (exit 1) so the agent can fix and retry.
 *
 * Env (set by verify-run.mjs): VERIFY_MODEL, VERIFY_ENGINE.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { recordVerification, VERIFY_RESULTS } from './lib/verify.mjs';
import { readJson, writeJson } from './lib/util.mjs';

const [, , slug, verdictFile] = process.argv;
if (!slug || !verdictFile) {
  console.error('usage: node pipeline/record-verification.mjs <slug> <verdict.json>');
  process.exit(2);
}
const model = process.env.VERIFY_MODEL || 'unknown';
const engine = ['copilot', 'claude-code', 'api', 'manual'].includes(process.env.VERIFY_ENGINE) ? process.env.VERIFY_ENGINE : 'manual';

async function reject(message) {
  const results = await readJson(VERIFY_RESULTS, { results: [] });
  results.results = results.results.filter((r) => r.slug !== slug);
  results.results.push({ at: new Date().toISOString(), slug, ok: false, error: message, model, engine });
  await writeJson(VERIFY_RESULTS, results);
  console.error(`REJECTED ${slug}: ${message}`);
  process.exit(1);
}

let verdict;
try {
  verdict = JSON.parse(await fs.readFile(verdictFile, 'utf8'));
} catch (err) {
  await reject(`could not parse ${verdictFile} as JSON: ${err.message}`);
}
try {
  const r = await recordVerification(slug, verdict, { model, engine });
  if (r.status === 'incomplete') { console.log(`OK incomplete: nothing recorded against the page; it will be checked again next run.`); process.exit(0); }
  const words = r.status === 'held' ? `held, not published (${r.reasons.join('; ')})` : r.status === 'needs-correction' ? `failed but kept live under grace with a notice; queued for correction (${r.reasons[0]})` : r.status === 'verified-with-gaps' ? `published with ${r.counts.unconfirmed + r.counts.contradicted + r.counts.minor} finding(s) listed` : 'published, all statements confirmed';
  console.log(`OK ${r.status}: ${r.counts.confirmed} of ${r.counts.claims} statements confirmed; ${words}\n   ${path.relative(process.cwd(), r.file)}`);
} catch (err) {
  await reject(err.message);
}
