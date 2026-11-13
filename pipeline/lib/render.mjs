import { toFrontmatter } from './util.mjs';

/** Render a briefing (front matter object + section markdown) to the on-disk markdown page. */
export function renderBriefing(fm, sections) {
  const body = [
    `## What's changing`, sections.whatsChanging.trim(),
    `## Why it matters`, sections.whyItMatters.trim(),
    `## Risk assessment`, sections.riskAssessment.trim(),
    `## Cost and licensing`, sections.costAndLicensing.trim(),
    `## Scope`, sections.scope.trim(),
    `## Governance guidance`, sections.governance.trim(),
    `## Admin controls`, sections.adminControls.trim(),
    `## Open questions`, sections.openQuestions.trim(),
  ].join('\n\n');
  return `${toFrontmatter(fm)}\n\n${body}\n`;
}

/** Split a stored page body back into its sections (used when refreshing a page). */
export function splitSections(body) {
  const out = {};
  const parts = body.split(/^## /m).slice(1);
  for (const part of parts) {
    const nl = part.indexOf('\n');
    out[part.slice(0, nl).trim()] = part.slice(nl + 1).trim();
  }
  return out;
}
