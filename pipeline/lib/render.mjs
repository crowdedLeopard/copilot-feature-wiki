import { toFrontmatter } from './util.mjs';

export const API_KIND_LABEL = {
  powershell: 'PowerShell', graph: 'Microsoft Graph', 'power-platform-api': 'Power Platform API', 'pac-cli': 'Power Platform CLI',
  'azure-cli': 'Azure CLI', rest: 'REST API', other: 'API',
};
export const SCOPE_LABEL = {
  tenant: 'Tenant', environment: 'Environment', 'environment-group': 'Environment group', site: 'Site', group: 'Group', user: 'User',
  agent: 'Agent', app: 'App', maker: 'Maker', other: '',
};
export const NOT_DOCUMENTED = 'Not yet documented';
/** One line above the table so an administrator knows how to read it. Plain English, no jargon. */
export const CONTROLS_LEAD = '<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>';

const esc = (s = '') => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
/** "Manage > Environments > Settings" becomes "Manage › Environments › Settings". */
const breadcrumb = (p = '') => esc(p).replace(/\s*&gt;\s*/g, ' › ');
const learnLink = (url) => `<a href="${esc(url)}" rel="noopener" class="controls__docs">Learn</a>`;

/**
 * The controls table, as an HTML block the markdown renderer passes through unchanged. One row per
 * control: what it governs, the admin UI path, the API or automation equivalent. A surface Microsoft
 * has not documented is printed as "Not yet documented" rather than left blank or guessed.
 */
export function renderControlsTable(controls = []) {
  if (!controls.length) return `<p class="controls__empty"><em>${NOT_DOCUMENTED}.</em> No admin UI or API control has been recorded for this change yet.</p>`;
  const rows = controls.map((c) => {
    const scope = SCOPE_LABEL[c.scope] || '';
    const governs = `<strong>${esc(c.governs)}</strong>${scope ? `<br><small>${esc(scope)}</small>` : ''}${c.note ? `<br><small class="controls__note">${esc(c.note)}</small>` : ''}`;
    const ui = c.ui
      ? `<strong>${esc(c.ui.surface)}</strong><br>${breadcrumb(c.ui.path)} ${learnLink(c.ui.docs)}`
      : `<em class="controls__gap">${NOT_DOCUMENTED}</em>`;
    const api = c.api
      ? `<strong>${esc(API_KIND_LABEL[c.api.kind] || 'API')}</strong><br><code>${esc(c.api.call)}</code> ${learnLink(c.api.docs)}`
      : `<em class="controls__gap">${NOT_DOCUMENTED}</em>`;
    return `<tr><td data-label="Control">${governs}</td><td data-label="Admin UI">${ui}</td><td data-label="API and automation">${api}</td></tr>`;
  });
  // No blank lines: CommonMark ends an HTML block at the first blank line.
  return [`<table class="controls">`, `<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>`, '<tbody>', ...rows, '</tbody>', '</table>'].join('\n');
}

/**
 * Render a briefing (front matter object + section markdown) to the on-disk markdown page. The
 * Governance controls section is the controls table built from `fm.controls` followed by the
 * model's notes, so the page, the PDF and the Markdown download all carry the same table.
 */
export function renderBriefing(fm, sections) {
  const body = [
    `## What's changing`, sections.whatsChanging.trim(),
    `## Why it matters`, sections.whyItMatters.trim(),
    `## Risk assessment`, sections.riskAssessment.trim(),
    `## Cost and licensing`, sections.costAndLicensing.trim(),
    `## Scope`, sections.scope.trim(),
    `## Governance guidance`, sections.governance.trim(),
    `## Governance controls`, CONTROLS_LEAD, renderControlsTable(fm.controls), (sections.governanceControls || sections.adminControls || '').trim(),
    `## Open questions`, sections.openQuestions.trim(),
  ].filter((part) => part !== '').join('\n\n');
  return `${toFrontmatter(fm)}\n\n${body}\n`;
}

/**
 * Render a concept page. Same controls table as a briefing, under the fixed headings the concept
 * standard sets (wiki/SCHEMA.md, "Concept pages"), so every concept page reads the same way.
 */
export function renderConcept(fm, sections) {
  const body = [
    `## What it is`, sections.whatItIs.trim(),
    `## Why it matters`, sections.whyItMatters.trim(),
    `## Cost and licensing`, sections.costAndLicensing.trim(),
    `## Risks and limits`, sections.risksAndLimits.trim(),
    `## Governance controls`, CONTROLS_LEAD, renderControlsTable(fm.controls), sections.governanceControls.trim(),
    `## What to check`, sections.whatToCheck.trim(),
    `## Open questions`, sections.openQuestions.trim(),
  ].filter((part) => part !== '').join('\n\n');
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
