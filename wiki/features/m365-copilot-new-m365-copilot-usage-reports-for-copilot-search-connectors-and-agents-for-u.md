---
title: "Microsoft 365 Copilot: usage reports for Copilot Search, connectors and agents in US Government clouds"
slug: "m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u"
roadmapId: 573170
topic: "governance"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft 365 admin center"]
summary: "New admin centre usage reports for Copilot Search, Copilot Connectors and Copilot Agents come to GCC, GCC High and DoD, at organisation and user level."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "unknown"
  notes: "Microsoft has not yet published licensing prerequisites for this government reporting release."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["copilot","usage-reports","admin-center","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 573170"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573170"
    kind: "roadmap"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports?view=o365-worldwide"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Whether user, group and site names are concealed in reports (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["m365-admin-center-copilot-credits-usage-report","m365-admin-center-agent-level-pay-as-you-go-controls"]
controls:
  - governs: "Access to the Copilot usage reports"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Microsoft Copilot"
      docs: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments { \"principalId\": \"{user-id}\", \"roleDefinitionId\": \"{role-id}\", \"directoryScopeId\": \"/\" }"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "The API side is the general Microsoft Entra role-assignment call; it assigns a role and does not open the report. Microsoft has not confirmed it as a control specific to these reports."
  - governs: "Whether user, group and site names are concealed in reports"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    api:
      kind: "graph"
      call: "PATCH /beta/admin/reportSettings { \"displayConcealedNames\": true }"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    note: "true conceals names, false shows them. Beta Graph APIs can change and are not supported in production applications."
  - governs: "US Government cloud-specific switch for the new reports"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft has not documented a government-specific report switch or stated the rollout default as of November 2026."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 573170."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Correction: default state and licensing now unknown, cost rated low, role-assignment and report-settings Graph calls corrected, read-only and agents-report design claims removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 30 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 30
  confirmed: 30
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fd889c04596e6a6864dd6886d103ce21"
---

## What's changing

Microsoft is introducing Microsoft 365 Copilot usage reports for Copilot Search, Copilot Connectors and Copilot Agents for US Government customers across GCC Moderate, GCC High and DoD. The reports give organisation-level and user-level insight into usage and adoption.

The roadmap target is December 2026, status In development.

Learn currently shows Copilot Search and Connectors usage reports as not available in government clouds, and Copilot Agent usage as available in Public only, which this item addresses.

## Why it matters

Government tenants lack parity with commercial reporting, which makes adoption tracking and licence reviews harder. User-level data also raises privacy and access questions.

## Risk assessment

**Data exposure**
- User-level usage data is visible to report readers.

**Security & identity**
- Access follows admin centre reader roles; pseudonymisation settings may apply.

**Autonomy & actions**
- None.

**Change & support**
- New reports may change adoption baselines and expectations.

## Cost and licensing

Not yet published: licensing prerequisites for this government reporting release. The indirect cost is admin time to review report access and adoption metrics.

## Scope

GCC Moderate, GCC High and DoD tenants, for admins who can open Reports > Usage in the Microsoft 365 admin center.

## Governance guidance

### Before rollout
- Decide which roles may read user-level Copilot usage.
- Check privacy settings for reports.

### At rollout
- Add the new reports to adoption reviews.
- Brief adoption leads on the metrics.

### After rollout
- Compare usage with licence assignment.
- Review report access periodically.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to the Copilot usage reports</strong><br><small>Tenant</small><br><small class="controls__note">The API side is the general Microsoft Entra role-assignment call; it assigns a role and does not open the report. Microsoft has not confirmed it as a control specific to these reports.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot <a href="https://learn.microsoft.com/copilot/manage/copilot-admin-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments { &quot;principalId&quot;: &quot;{user-id}&quot;, &quot;roleDefinitionId&quot;: &quot;{role-id}&quot;, &quot;directoryScopeId&quot;: &quot;/&quot; }</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether user, group and site names are concealed in reports</strong><br><small>Tenant</small><br><small class="controls__note">true conceals names, false shows them. Beta Graph APIs can change and are not supported in production applications.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/reportSettings { &quot;displayConcealedNames&quot;: true }</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>US Government cloud-specific switch for the new reports</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft has not documented a government-specific report switch or stated the rollout default as of November 2026.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The reports provide usage and adoption insights for administrators; the governance decisions are who holds a reporting role and whether names are pseudonymised. Learn's [reporting options page](https://learn.microsoft.com/copilot/manage/copilot-admin-reports) lists AI Administrator among the roles that can open them. For background, Learn documents a [Microsoft Copilot Agents usage report](https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-agents-new); Microsoft has not confirmed that its exact design and metrics describe this government release.

## Open questions

- Exact rollout date per cloud.
- Whether Copilot Credits reporting follows.
- Metric definitions for the government clouds.

<!-- rationale
risk: Low. Usage reporting for admins; the main care is who can see user-level data.
cost: Low. Admin time to review report access and adoption metrics; licensing for the government reporting release is not yet published.
impact: Low. Affects admins and adoption leads in US Government tenants.
-->
