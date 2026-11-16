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
cost: "none"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Admin centre reports; no separate licence published."
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
  - title: "Whether user, group and site names are concealed in reports (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/resources/adminreportsettings?view=graph-rest-beta"
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
    api: null
  - governs: "Whether user, group and site names are concealed in reports"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    api:
      kind: "graph"
      call: "PATCH /beta/admin/reportSettings { displayConcealedNames }"
      docs: "https://learn.microsoft.com/graph/api/resources/adminreportsettings?view=graph-rest-beta"
  - governs: "US Government cloud-specific switch for the new reports"
    scope: "tenant"
    ui: null
    api: null
    note: "Reports appear when the service rolls out; nothing is turned on."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 573170."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 30
  confirmed: 22
  unconfirmed: 4
  contradicted: 4
  attempts: 1
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

No cost published. Reports are part of the Microsoft 365 admin center. Not yet published: any licence prerequisite.

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
<tr><td data-label="Control"><strong>Access to the Copilot usage reports</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot <a href="https://learn.microsoft.com/copilot/manage/copilot-admin-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether user, group and site names are concealed in reports</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/reportSettings { displayConcealedNames }</code> <a href="https://learn.microsoft.com/graph/api/resources/adminreportsettings?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>US Government cloud-specific switch for the new reports</strong><br><small>Tenant</small><br><small class="controls__note">Reports appear when the service rolls out; nothing is turned on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The reports are read-only; the governance decisions are who holds a reporting role and whether names are pseudonymised. Learn's [reporting options page](https://learn.microsoft.com/copilot/manage/copilot-admin-reports) lists AI Administrator among the roles that can open them. The [agents usage report](https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-agents-new) describes the commercial version of the agents report that this release brings to GCC and GCC High.

## Open questions

- Exact rollout date per cloud.
- Whether Copilot Credits reporting follows.
- Metric definitions for the government clouds.

<!-- rationale
risk: Low. Read-only reporting for admins; the main care is who can see user-level data.
cost: None. Reports are part of the Microsoft 365 admin center; no licence change is published.
impact: Low. Affects admins and adoption leads in US Government tenants.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: defaultState; controls[2].note; Governance controls: third row / default: The government reports are on by default and appear automatically at rollout without an administrator enabling them. | Found: Searched: Copilot usage reports GCC automatically; Copilot usage reports GCC enable; 573170 reports default license. Read the roadmap, reporting options, usage overview and Search, Connectors and Agents report pages; none states this rollout default. | Fix: Set defaultState to unknown. Replace the third control's note with 'Microsoft has not documented a government-specific report switch or stated the rollout default as of November 2026.' Do not infer automatic enablement from the absence of a documented switch.
- [unsupported, blocker] front matter: licensing.model / licensing: The new government reports are included in an existing licence. | Found: Searched: Microsoft 365 Copilot Search connectors agents usage reports government license prerequisites pricing; Copilot usage reports government license reports. Read reporting options, usage overview and individual report pages; none names an included licence for this government release. | Fix: Set licensing.model to unknown and retain a narrowly scoped note that licensing for the new government reporting release is not yet published. Do not treat membership of the admin center as proof of licence inclusion.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The cost rating can be none because these reports are in the admin center and no licence change is published. | Found: cost: "none"
No cost published. Reports are part of the Microsoft 365 admin center. Not yet published: any licence prerequisite.
cost: None. Reports are part of the Microsoft 365 admin center; no licence change is published. | Fix: Change cost to low and the rationale to 'Low. Admin time to review report access and adoption metrics; licensing for the government reporting release is not yet published.' The standard permits none only with explicit evidence of inclusion in licences already held.
- [contradicted, blocker] controls[0].api; Governance controls: first row / absence: No API or automation is documented for controlling access to Copilot usage reports. | Found: Create a role assignment for the directory provider:
POST /roleManagement/directory/roleAssignments | Fix: Distinguish report navigation from access administration. Report-reader and AI Administrator access uses Microsoft Entra roles, which can be assigned through the documented Graph directory role-assignment API. Replace the absence with that general role-assignment mechanism, or remove this misleading access-control row and describe report navigation in prose. | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0
- [contradicted, blocker] controls[1].api; Governance controls: second row / command: PATCH /beta/admin/reportSettings { displayConcealedNames } is the documented request for changing report-name concealment. | Found: PATCH https://graph.microsoft.com/beta/admin/reportSettings
Content-Type: application/json
Content-length: 37

{
  "displayConcealedNames": true
} | Fix: The endpoint exists, but replace the body with valid JSON containing a Boolean, for example PATCH /beta/admin/reportSettings { "displayConcealedNames": true }. Explain true conceals names and false reveals them. Link to https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta rather than just the resource schema, and disclose that beta APIs are subject to change and unsupported for production applications. Do not blindly substitute v1.0: its deployment table excludes US Government L4 and L5. | Source: https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta
- [unsupported, major] Governance controls: final paragraph; rationale: risk / behaviour: The new reports are read-only. | Found: Searched: Copilot usage report read-only. Read reporting options, usage overview and individual Search, Connectors and Agents report pages; they describe viewing, filtering and exporting metrics but do not explicitly establish a read-only guarantee for this release. | Fix: Replace the categorical read-only claim with the documented function: 'The reports provide usage and adoption insights for administrators.' Retain the privacy and access recommendations as analysis.
- [unsupported, major] Governance controls: final paragraph / behaviour: The specific agents-new report documented by Learn is the commercial report version that this roadmap release will bring to government tenants. | Found: Searched: 573170 reports default license; Copilot usage reports government license reports. Read the roadmap and microsoft-365-copilot-agents-new page. The record promises Agents reporting but does not identify this particular report version; Learn titles it '(Preview)'. | Fix: Say 'For background, Learn documents an Agents usage report in preview; Microsoft has not confirmed that its exact design and metrics describe this government release.' Remove the asserted version mapping and identify the linked report as preview.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls: first row / consistency: The controls table supplies the access control needed to decide which roles may read user-level Copilot usage. | Found: Decide which roles may read user-level Copilot usage.
Access to the Copilot usage reports
Reports > Usage > Microsoft Copilot | Fix: Add an actual reporting-role assignment control, distinguishing it from opening reports. Learn gives Microsoft Entra admin center > Identity > Users > All users > user > Assigned roles > Add assignment > role > Add at https://learn.microsoft.com/graph/reportroot-authorization#assign-microsoft-entra-roles-to-users. Note that Usage Summary Reports Reader does not provide user details.
-->
