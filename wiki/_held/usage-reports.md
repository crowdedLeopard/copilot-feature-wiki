---
kind: "concept"
title: "Microsoft 365 admin center usage reports: what do they show, who sees names and what do they cost?"
slug: "usage-reports"
summary: "The Reports > Usage dashboards in the Microsoft 365 admin center show how people use Microsoft 365 services and Copilot. One tenant setting decides whether they name users, groups and sites; a limited set of admin roles can read them."
created: "2026-11-22"
updated: "2026-11-22"
version: 2
tags: ["usage-reports","m365-admin-center","analytics","monitoring","privacy","adoption","m365-copilot","microsoft-graph"]
covers: []
sources:
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Microsoft Copilot usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage"
    kind: "learn"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update adminReportSettings (beta)"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Authorization for APIs to read Microsoft 365 usage reports"
    url: "https://learn.microsoft.com/graph/reportroot-authorization"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    kind: "learn"
  - title: "copilotReportRoot: getMicrosoft365CopilotUsageUserDetail"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusageuserdetail"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Microsoft Teams analytics and reporting"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
related: ["copilot-credits","spending-policies","auditing","viva-feature-access-management","m365-admin-center-copilot-credits-usage-report","m365-admin-center-usage-reports-m365-copilot-connectors"]
controls:
  - governs: "Whether usage reports conceal user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH /v1.0/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0"
    note: "Global administrators can change it. The request body sets displayConcealedNames (true conceals). Also applies to Graph, Power BI and Teams admin center reports."
  - governs: "Which users can read usage reports (Microsoft Entra role assignment)"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Users > All users > user > Assigned roles > Add assignment > role"
      docs: "https://learn.microsoft.com/graph/reportroot-authorization"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0"
    note: "Privileged Role Administrator is the least privileged role the Graph reference names. The body sets roleDefinitionId (the reporting role), principalId (the user) and directoryScopeId (/ for tenant-wide)."
confidence: "high"
dependents: 10
changes:
  - date: "2026-11-22"
    note: "New concept page on the Microsoft 365 admin center usage reports, their name-concealing setting and the roles that read them."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: reworded the licensing and metered-usage claims, gave the Copilot usage API call with its period argument, and completed the report routes and role-assignment details."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 83 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 81
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "d8234874ad60f174a64fdfd84b2d4028"
---

## What it is

Microsoft 365 admin center usage reports are the dashboards under **Reports > Usage** that show how people in your organisation use Microsoft 365 services, including Copilot. Microsoft says they show who uses a service most and who barely uses it and might not need a Microsoft 365 license.

**How they work**

- Open **Reports**, then **Usage**, and select **View more** on a service card to reach that service's report tabs.
- Reports cover the last 7, 30, 90 and 180 days, and typically become available within 24 to 72 hours, sometimes several days. The Copilot usage report offers 7, 28, 90 or 180 days; the Copilot Credits report offers 7 or 30 days.
- The Copilot usage report is at **Reports > Usage > Microsoft Copilot > Copilot > Usage** and the Copilot Credits report at **Reports > Usage > Microsoft Copilot > Credits**. Microsoft's reporting-options article describes **Microsoft Copilot > Usage** instead. The usage report shows enabled users, active users and prompts submitted. The Copilot Credits report shows credits used per user, per agent, per billing policy and per agent-user pair, for pay-as-you-go billing policies.
- Reports are about users, groups and sites, so identifying detail is hidden unless an administrator changes one organisation setting (see Why it matters).

**Other Copilot reporting sources.** Microsoft lists four sources of Copilot reports: this admin centre, Viva Insights Copilot Analytics (the Copilot Dashboard, governed through [Viva Feature Access Management](/concepts/viva-feature-access-management/)), Microsoft Purview audit logs ([auditing](/concepts/auditing/)) and Power Platform and Copilot Studio analytics. This page covers the first.

## Why it matters

The reports let you see adoption before you decide on licences: who is using Copilot, which apps, and for Pay-as-you-go billing, which users and agents consume credits. The Copilot Credits report makes metered agent usage by users without a Microsoft Copilot licence visible, so a Copilot Credits report that nobody reads is a cost nobody watches.

Microsoft states that, by default, all reports hide usernames, display names, groups and sites. A Global Administrator can unhide them with one setting, and that setting also applies to the usage reports in Microsoft Graph and Power BI and in the Teams admin center. Leaving the default means exports are anonymous; changing it exposes identifiable usage for the whole tenant, so decide it as a privacy matter, not a convenience.

## Cost and licensing

The usage reports overview lists the roles needed to view reports but names no separate viewing licence or charge at the time of writing (November 2026). It notes that usage reports don't include perpetual license models.

Some reports describe costs of other mechanisms. The Copilot usage report counts users with Microsoft Copilot licences as enabled users. The Copilot Credits report covers metered consumption by users without a Microsoft Copilot licence who use agents that spin the Copilot Studio meter; rates and billing are explained on [Copilot Credits](/concepts/copilot-credits/), and caps on [spending policies](/concepts/spending-policies/).

## Risks and limits

- **Names are hidden by default.** Reports and exports show anonymised users until the setting is changed. Changing it affects Graph, Power BI and Teams admin center reports too, and Copilot Credits reports show the Billing Policy ID and user names under the same setting.
- **The setting is a logged event.** Microsoft says showing identifiable user information is logged in the Microsoft Purview audit log, so changes are traceable.
- **Role choice decides what a reader sees.** Usage Summary Reports Reader and User Experience Success Manager see no user details. In the Graph reports API, Global Reader and Usage Summary Reports Reader get tenant-level data only.
- **Data lags.** Expect 24 to 72 hours for most reports, and about 48 hours for Copilot activity. The Copilot Credits report does not refresh automatically; refresh it manually.
- **Copilot Credits report history is short.** During preview it shows a maximum of 30 days and nothing before 3 May 2025, so do not use it as a billing record.
- **Alerts are report cards, not limits.** The Credits report shows an Alerts card when a user consumes more than 3,000 credits in the past 30 days, with a similar alert for 2,000 to 3,000 credits; set caps elsewhere.
- **Not every cloud has every report.** The overview lists the Copilot Credits report as available in the public cloud only, and other reports as not yet released in some clouds.
- **No per-user lookup.** You cannot enter a user and list their service usage; sort the report or export it.
- **Deleted users disappear.** Microsoft deletes a deleted user's usage data within 30 days, though chart totals still count them.
- **Copilot usage by Graph excludes unlicensed users.** The Copilot usage API returns data only for users with a Microsoft 365 Copilot licence.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether usage reports conceal user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">Global administrators can change it. The request body sets displayConcealedNames (true conceals). Also applies to Graph, Power BI and Teams admin center reports.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users can read usage reports (Microsoft Entra role assignment)</strong><br><small>User</small><br><small class="controls__note">Privileged Role Administrator is the least privileged role the Graph reference names. The body sets roleDefinitionId (the reporting role), principalId (the user) and directoryScopeId (/ for tenant-wide).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Users › All users › user › Assigned roles › Add assignment › role <a href="https://learn.microsoft.com/graph/reportroot-authorization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Viewing needs one of the roles the overview lists: Global Administrator, Exchange Administrator, SharePoint Administrator, Usage Summary Reports Reader, Reports Reader, Teams Administrator, Teams Communications Administrator, User Experience Success Manager or AI Administrator. Microsoft recommends the role with the fewest permissions.

The conceal setting is an organisation setting; Microsoft says Global administrators can update it. The Teams reporting reference labels the same option **Display concealed user, group, and site names in all reports**. An API reader needs the Reports.Read.All permission, and for delegated calls one of the limited administrator roles; for the Copilot usage report that is `GET /v1.0/copilot/reports/getMicrosoft365CopilotUsageUserDetail(period='D7')`. In Graph, permission ReportSettings.ReadWrite.All covers changing the setting. Audit events and the Copilot Dashboard are separate mechanisms linked above.

## What to check

- Check whether **Conceal user, group, and site names in all reports** is on, and who in your organisation depends on named data.
- Review who holds the reporting roles in the role-assignment table row, and prefer Reports Reader or Usage Summary Reports Reader to Global Administrator.
- Search the Microsoft Purview audit log for the logged event when identifiable names were last shown.
- Open Reports > Usage > Microsoft Copilot and confirm which of the usage, Credits and Connectors reports appear in your cloud.
- Compare any Copilot Credits report figures with your billing records rather than relying on the report's 30-day history.

## Open questions

- Which audit operation name records showing identifiable user information? The overview says it is logged but does not name the event.
- Is the report settings API available in US Government clouds? The v1.0 reference lists US Government L4 and L5 as not available, the beta reference lists them as available.
- Do the 30-day history limit and the pre-3 May 2025 gap on the Copilot Credits report apply after the preview ends?

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Open questions: audit operation name / absence: The audit operation name for showing identifiable user information remains an open documentation question. | Found: Report activities The following table lists the activities for usage reports recorded in the Microsoft 365 audit log. Updated usage report privacy settings | UpdateUsageReportsPrivacySetting | Admin updated privacy settings for usage reports. | Fix: Remove the first Open questions bullet. Replace the existing logged-event sentence in Risks and limits with: 'Microsoft Purview records changes to usage-report privacy settings as UpdateUsageReportsPrivacySetting (Updated usage report privacy settings).' Cite https://learn.microsoft.com/purview/audit-log-activities#report-activities. | Source: https://learn.microsoft.com/purview/audit-log-activities
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] What to check: Search the Microsoft Purview audit log / consistency: The checklist tells readers to search the audit log, but the controls table contains no audit-search row. | Found: What to check: 'Search the Microsoft Purview audit log for the logged event when identifiable names were last shown.' The table contains only name concealment and reporting-role assignment. | Fix: The audit-search checklist step has no controls-table row. Remove that checklist bullet; the existing linked auditing concept and logged-event discussion can remain. Do not add a control row as part of this correction.
-->
