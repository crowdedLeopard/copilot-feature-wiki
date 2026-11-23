---
title: "Microsoft Teams: advanced collaboration analytics for GCC"
slug: "microsoft-teams-advanced-collaboration-analytics-for-gcc"
roadmapId: 493742
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to bring Teams admin reports on external collaboration (teams, domains, channels, guests) to GCC, targeted March CY2027. Learn's page for the existing feature requires Teams Premium licences. Admins can plan now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn's page for the existing feature says it requires a Teams Premium licence for each user you want to receive insights about. The roadmap item names no licence for the GCC release."
audiences: ["m365-admin","security","compliance"]
tags: ["teams","teams-premium","analytics","guest-access","usage-reports","cross-tenant","governance","privacy","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 493742"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=493742"
    kind: "roadmap"
  - title: "Advanced collaboration analytics for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/advanced-collaboration-analytics"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update"
    kind: "learn"
videos: []
related: ["usage-reports"]
controls:
  - governs: "Where admins view collaboration activity reports"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Dashboard > Collaboration activity"
      docs: "https://learn.microsoft.com/microsoftteams/advanced-collaboration-analytics"
    api: null
    note: "Page describes the existing feature and is not specific to GCC. Needs a Teams Premium licence for each covered user."
  - governs: "Whether reports conceal user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH /v1.0/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update"
    note: "Request body sets displayConcealedNames. The usage reports page says Global administrators can change the setting. Not confirmed for GCC."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-09T22:36:54"
changes:
  - date: "2026-11-23"
    note: "New briefing: roadmap target March CY2027 for GCC; Learn's page for the existing feature sets the Teams Premium licence requirement."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 50
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "d7a917c702280b43a46183e9151b1f85"
---

## What's changing

The roadmap item says Advanced Collaboration Analytics will give Teams admins in GCC insights into external collaboration patterns, covering teams, federated domains, channels, guests and internal users, along with recommended actions to enhance security for external collaboration. The roadmap lists the release phase as General Availability and the platform as Web.

Microsoft Learn documents a feature of the same name, [Advanced collaboration analytics for Microsoft Teams](https://learn.microsoft.com/microsoftteams/advanced-collaboration-analytics). That page is not specific to GCC, so what follows about behaviour is Learn's description of the existing feature, and whether the GCC release matches it is to be confirmed. Learn says the reports are in the Teams admin center dashboard on the **Collaboration activity** tab. The cards cover inactive teams (30 or 60 days), inactive external domains, teams and channels by user type, and the teams, users and guests with the most external user and guest collaboration.

Learn says the reports show users and teams owned by your organisation, but counts could include activity in cross-tenant collaborations. The roadmap's "recommended actions" are not described on that Learn page under that name. The one action it does describe is archiving an inactive team from the report.

The roadmap status is In development, with a target of March CY2027. That date is Microsoft's target, not a commitment. Microsoft has not stated a default state on arrival.

## Why it matters

External collaboration is where guest and federated access accumulates unnoticed. Learn describes cards that show which teams and channels include guests or external shared channel users, and which allowed external domains are inactive. For a GCC tenant that has had no such view, this is a way to review external sharing with evidence before tightening it.

The feature is not described as changing anything for end users, and no source says existing behaviour changes when it arrives. The decisions fall to admins: whether to buy Teams Premium licences for the users to be covered, and who is allowed to see names in the reports.

## Risk assessment

**Data exposure**
- Learn says that in the cards showing external user and guest collaboration, data is hidden by default for privacy reasons, and points to the Microsoft 365 reports setting to reveal it. Revealing names is an org-wide choice (row 2 of the controls table), and Learn says showing identifiable user information is a logged event in the Microsoft Purview portal audit log.
- Learn says counts could include activities in cross-tenant collaborations, so a team's figure may not match what your own users did.

**Security & identity**
- The roadmap says the feature gives recommended actions to enhance security for external collaboration. Microsoft has not described what those actions are or how they are produced, so do not treat the reports as a control over guest or federated access.
- The inactive external domains card on the Learn page is only available if an allowlist is configured in external access, so tenants without an allowlist will not see it.

**Autonomy & actions**
- Learn describes an **Action** column in the inactive teams report that archives a team. Learn says archiving has no impact on connected workloads and the team itself becomes read-only. Plan who may use it before admins start archiving from the report.

**Change & support**
- Learn says data takes 30 days after licences are purchased to become available, so expect an empty dashboard at first.
- Learn lists known issues for the existing feature: card layout is not saved across sessions, CSV download is not enabled, and large events have a small chance of data categorisation error. Whether the GCC release has the same issues is not stated.

## Cost and licensing

Learn says advanced collaboration analytics requires a Teams Premium licence for each user you want to receive insights about ([Advanced collaboration analytics for Microsoft Teams](https://learn.microsoft.com/microsoftteams/advanced-collaboration-analytics)). The [Teams Premium licensing](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams) page says customers must acquire and assign Teams Premium licences to each user in their tenant for its use of Advanced collaboration analytics, and lists GCC among the tenant types that can purchase Teams Premium.

The roadmap item names no licence for the GCC release, and no GCC-specific licensing statement is published for this feature. The licensing basis above is therefore taken from the pages for the existing feature.

Indirect cost is admin time to review the reports and act on external domains, guests and inactive teams. Teams Premium licensing is changing: the licensing page says that as of April 1, 2026 some features previously only in Teams Premium are included with Teams Enterprise, so check the page again before budgeting.

## Scope

The roadmap lists the cloud as GCC and the platform as Web, with the product Microsoft Teams. Rollout mechanics are not stated; the roadmap target is March CY2027.

    Learn says reports cover users and teams owned by your organisation, and that a Teams Premium licence is needed for each user you want insights about. Learn does not name an admin role needed to view the Collaboration activity tab. Showing user names in the reports needs a Global administrator, according to the usage reports page.

## Governance guidance

### Before rollout
- Decide which users the reports should cover and whether Teams Premium licences are justified for them, using the Teams Premium licensing page.
- Confirm the current org-wide setting for concealing user, group and site names in reports (row 2 of the controls table) and decide who may reveal names.
- Review your external access configuration, because the inactive external domains card needs an allowlist to appear.

### At rollout
- Open the Collaboration activity tab in the Teams admin center dashboard and check which cards appear in GCC.
- Agree who may archive inactive teams from the report before anyone uses the Action column.

### After rollout
- Review teams and channels that include guests or external shared channel users, starting with the teams with the most external activity.
- Review inactive external domains against your allowlist and decide whether to keep each one.
- Record any difference between the GCC reports and Learn's description, and raise it with Microsoft.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where admins view collaboration activity reports</strong><br><small>Tenant</small><br><small class="controls__note">Page describes the existing feature and is not specific to GCC. Needs a Teams Premium licence for each covered user.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Dashboard › Collaboration activity <a href="https://learn.microsoft.com/microsoftteams/advanced-collaboration-analytics" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether reports conceal user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">Request body sets displayConcealedNames. The usage reports page says Global administrators can change the setting. Not confirmed for GCC.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Collaboration activity reports are a view, not a policy: Learn describes licence assignment as what determines whose collaboration appears in them. Revealing names is governed by the Microsoft 365 reports setting, which the usage reports page says applies to the usage reports in the Microsoft Teams admin center and requires a Global administrator to change. The Learn page for the dashboard links to that setting for revealing data in the cards.

## Open questions

- Does the GCC release match Learn's description of the Collaboration activity cards, and which cards or known issues differ? Watch the Learn page and the roadmap item.
- What are the "recommended actions to enhance security for external collaboration" the roadmap mentions, and does the report apply any of them itself?
- Which admin role can view the Collaboration activity tab, and is it separate from the roles that can archive a team?
- Will GCC tenants need Teams Premium licences for each covered user, as Learn says for the existing feature, and what applies after the April 1, 2026 licensing change?
- Is an API or export available for the report data, given that Learn says CSV download is not yet enabled for the existing feature?

<!-- rationale
risk: Low. The feature is a set of admin reports; Learn says user names in the report cards are hidden by default, so exposure rests on an org-wide report setting.
cost: Medium. Learn's page for the existing feature requires a Teams Premium licence for each user you want insights about; a GCC-specific licence statement is not yet published.
impact: Low. Teams admins who read the reports notice it; the roadmap describes insights for admins, not a change for end users.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note / applicability: The correctly documented general reports setting is marked as not confirmed for GCC. | Found: Admins can use an API in all environments to change this setting without needing to visit the Microsoft 365 admin center. | Fix: Replace 'Not confirmed for GCC.' with 'The usage reports page documents changing this organization setting by API in all environments; the GCC collaboration dashboard itself remains a planned release.' | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks admins to review external access configuration, but that control has no row in the controls table. | Found: Review your external access configuration, because the inactive external domains card needs an allowlist to appear. Where admins view collaboration activity reports Whether reports conceal user, group and site names | Fix: Remove the Before rollout bullet 'Review your external access configuration, because the inactive external domains card needs an allowlist to appear.' Keep the verified allowlist prerequisite in Risk assessment; do not add a control row.
-->
