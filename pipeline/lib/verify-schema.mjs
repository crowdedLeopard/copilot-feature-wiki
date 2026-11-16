/**
 * The verification contract: what the independent verifier hands back for one briefing, and the
 * summary a briefing carries in its front matter once it has been checked.
 *
 * The verifier is a second model with a fresh context that reads the page as published and checks
 * every statement against the roadmap record and Microsoft Learn. Its editorial standard is
 * pipeline/prompts/verify-agent.md; this file is the shape of what it writes. The pipeline turns
 * the claim list into the verdict with the same rule the prompt states (judge() in verify.mjs), so
 * every engine and model is held to one standard.
 */
import { z } from 'zod';

export const CLAIM_TYPES = ['record', 'admin-path', 'command', 'licensing', 'cost', 'default', 'role', 'date', 'availability', 'behaviour', 'applicability', 'absence', 'consistency'];
export const CLAIM_STATUS = ['supported', 'contradicted', 'unsupported'];
export const SEVERITIES = ['blocker', 'major', 'minor'];

export const claimSchema = z.object({
  n: z.number().int().nonnegative(),
  where: z.string().min(2).max(120).describe('Where on the page: controls[0].ui, controls[1].api, summary, a section title, "front matter: defaultState", "rationale: cost".'),
  type: z.enum(CLAIM_TYPES),
  claim: z.string().min(8).max(600).describe('The claim as the page makes it, in one sentence.'),
  status: z.enum(CLAIM_STATUS),
  source: z.string().max(600).nullable().describe('The URL read, "roadmap record" for record facts, or null when nothing was found.'),
  quote: z.string().max(1200).nullable().describe('The text read, copied exactly. For a confirmed absence or an unsupported claim, the searches run.'),
  severity: z.enum(SEVERITIES).nullable().describe('blocker and major only with contradicted or unsupported; minor may sit on a supported claim that is misleading in form; null otherwise.'),
  fix: z.string().max(1200).nullable().optional().describe('What the page should say instead. Null when and only when severity is null.'),
});

export const verdictSchema = z.object({
  id: z.number().int().nullable().optional(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  verdict: z.enum(['pass', 'hold', 'incomplete']),
  summary: z.string().min(40).max(1500).describe('Two or three plain sentences for the person who runs the wiki, printed on the page.'),
  counts: z.object({
    claims: z.number().int().nonnegative(), supported: z.number().int().nonnegative(), contradicted: z.number().int().nonnegative(), unsupported: z.number().int().nonnegative(),
    blocker: z.number().int().nonnegative(), major: z.number().int().nonnegative(), minor: z.number().int().nonnegative(),
  }).partial().optional(),
  claims: z.array(claimSchema).max(200),
});

/**
 * verified            every claim supported.
 * verified-with-gaps  published; unsupported or minor findings remain and are listed on the page.
 * needs-correction    failed the check but stays published with a notice while a rewrite is prepared.
 *                     Only for pages that were live before the check existed, and only once.
 * held                failed; in wiki/_held, not published.
 */
export const VERIFICATION_STATUS = ['verified', 'verified-with-gaps', 'needs-correction', 'held'];

/** Front-matter summary. The full report, every claim with its quote, is wiki/verification/<slug>.json. */
export const verificationSummary = z.object({
  status: z.enum(VERIFICATION_STATUS),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  version: z.number().int().positive().describe('The page version that was checked. A page edited since is treated as unchecked.'),
  model: z.string().min(2).max(80),
  engine: z.enum(['copilot', 'claude-code', 'api', 'manual']),
  claims: z.number().int().nonnegative(),
  confirmed: z.number().int().nonnegative(),
  unconfirmed: z.number().int().nonnegative(),
  contradicted: z.number().int().nonnegative(),
  attempts: z.number().int().nonnegative().default(0).describe('Consecutive holds. Two parks the page for a person.'),
});

/** Why a page is in wiki/_held. */
export const HOLD_REASONS = ['failed', 'unverified', 'parked'];
