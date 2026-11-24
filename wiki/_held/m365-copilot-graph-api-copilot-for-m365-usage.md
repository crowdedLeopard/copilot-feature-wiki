---
title: "Microsoft 365 Copilot: usage reports in the Microsoft Graph API"
slug: "m365-copilot-graph-api-copilot-for-m365-usage"
roadmapId: 396562
topic: "governance"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft Graph now has Copilot usage report endpoints with enabled and active user counts and per-user last activity dates. Nothing changes for users; admins opt in by granting an app access and a reporting role."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: "September CY2024"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "The Copilot APIs overview says the Copilot APIs require a Microsoft 365 Copilot licence and lists the usage reports API among them. Whether the calling app or admin needs that licence is not stated, and no separate price or meter is published."
audiences: ["m365-admin","finops","change-adoption"]
tags: ["m365-copilot","microsoft-graph","usage-reports","copilot-control-system","m365-admin-center","analytics"]
sources:
  - title: "Microsoft 365 Roadmap 396562"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=396562"
    kind: "roadmap"
  - title: "Microsoft Copilot usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "copilotReportRoot resource type"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/reports/resources/copilotreportroot"
    kind: "learn"
  - title: "copilotReportRoot: getMicrosoft365CopilotUsageUserDetail"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusageuserdetail"
    kind: "learn"
  - title: "copilotReportRoot: getMicrosoft365CopilotUserCountSummary"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusercountsummary"
    kind: "learn"
  - title: "reportRoot: getMicrosoft365CopilotUsageUserDetail"
    url: "https://learn.microsoft.com/graph/api/reportroot-getmicrosoft365copilotusageuserdetail?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft 365 Copilot APIs overview"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-apis-overview"
    kind: "learn"
  - title: "Authorization for APIs to read Microsoft 365 usage reports"
    url: "https://learn.microsoft.com/graph/reportroot-authorization"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update"
    kind: "learn"
  - title: "Create unifiedRoleAssignment"
    url: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    kind: "learn"
videos: []
related: ["usage-reports","m365-admin-center-agents-usage-report"]
controls:
  - governs: "Which users can read Copilot usage reports through the API (Microsoft Entra role)"
    scope: "user"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Users > All users > user > Assigned roles > Add assignment"
      docs: "https://learn.microsoft.com/graph/reportroot-authorization"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments"
    note: "Applies to delegated calls. Global Reader and Usage Summary Reports Reader see tenant-level data only. Applications also need tenant admin consent."
  - governs: "Whether usage reports conceal user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH /v1.0/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update"
    note: "The request body sets displayConcealedNames (true conceals names). Needs ReportSettings.ReadWrite.All. The page says Global administrators can change the setting."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-02-02T22:00:38"
changes:
  - date: "2026-11-24"
    note: "First briefing: the Copilot usage report is now available through Microsoft Graph under /copilot/reports, with the roles, consent and name-concealment setting that govern it."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 65
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "15796a41ba41cc6854a438e4718c1d0f"
---

## What's changing

Microsoft Graph now exposes the data behind the Microsoft 365 admin center's Copilot usage report, so administrators can build their own reports and dashboards. The roadmap item describes tenant-level counts of enabled and active users and a last activity date per user, overall and per Microsoft 365 app. Microsoft Learn now calls the admin center report the Microsoft Copilot usage report.

The current Learn reference documents four functions under `/copilot/reports`: getMicrosoft365CopilotUserCountSummary (aggregated enabled and active users for a period), getMicrosoft365CopilotUserCountTrend (the daily trend), getMicrosoft365CopilotUsageUserDetail (most recent activity for enabled users) and getMicrosoft365CopilotUsageUserDetailByDate (user-level usage for one date). The summary reports enabled and active users for Teams, Word, PowerPoint, Outlook, Excel, OneNote, Loop, Copilot Chat and Edge, and the user detail adds a last activity date per app. Periods are D7, D28, D90, D180 or ALL. The v1.0 reference returns a CSV stream and the beta reference returns JSON.

The older beta function under `/reports` carries a note that, going forward, the Microsoft 365 Copilot usage APIs under the `/copilot` URL path segment should be used, and that older page lists D30 where the new reference lists D28. Scripts written against the older route should be checked against the new one. The user detail API returns usage data only for users who have a Microsoft 365 Copilot licence; Microsoft's page points to the admin center Copilot Chat usage report, the Microsoft Purview audit log, Search-UnifiedAuditLog and the Office 365 Management Activity API for unlicensed Copilot Chat usage.

The roadmap record shows status Launched, with a preview target of September CY2024 and a general availability target of November CY2025, in Worldwide (Standard Multi-Tenant) on the Web. The reference pages list the API as available in the global service and not in US Government L4, US Government L5 (DOD) or China operated by 21Vianet.

## Why it matters

This is a reporting change that makes Copilot adoption measurable outside the admin center. A service owner can feed enabled and active counts into Power BI or another tool, track last activity by app, and compare licences held with licences used before a renewal. Microsoft's usage reports overview describes this kind of use: seeing who might not need a licence.

Nothing happens if nobody acts, because calling the API requires an app that a tenant administrator has consented to and, for delegated calls, a signed-in user in a Microsoft Entra reporting role. The main decisions are who gets that access and whether user names are shown or concealed in the data.

## Risk assessment

**Data exposure**
- The user detail functions return per-user activity: display name, user principal name and last activity dates per app. Microsoft's reports overview says reports hide user names by default, and that the organisation setting for this also applies to usage reports in Microsoft Graph. See the concealment row in the controls table.
- Microsoft's authorisation page describes reports data as sensitive. Reports.Read.All is listed as both the delegated and application permission for the Copilot usage functions.

**Security & identity**
- For delegated calls, the signed-in user must hold a Microsoft Entra limited administrator role. Microsoft says the Global Reader and Usage Summary Reports Reader roles reach tenant-level data only, without detailed metrics.
- An application with consent can read usage without a signed-in user, so treat the app registration and its secret or certificate as the control point for application-level access.

**Autonomy & actions**
- No change: the functions are read-only GET calls and take no request body.

**Change & support**
- Dashboards built on the older beta `/reports` function may need moving to `/copilot/reports`, and the period value D30 on the older page is D28 on the new reference.
- Report data typically becomes available within 48 hours of the end of the day in UTC, so recent activity may be missing from a dashboard.

## Cost and licensing

**Licence.** Microsoft's Copilot APIs overview lists the Copilot usage reports API among the Copilot APIs and says the Copilot APIs require a Microsoft 365 Copilot licence. The page does not say whether the app or administrator calling the reports API needs that licence itself. The data covers users who have a Microsoft 365 Copilot licence.

**Meter.** The usage reports API reference and the overview publish no separate price, meter or credit rate for these endpoints at the time of writing (November 2026).

**Indirect costs.** Developer time to build and maintain the reports, and admin time to grant consent and assign roles.

## Scope

The endpoints cover users enabled for Microsoft 365 Copilot apps; the user detail reference states that unlicensed Copilot Chat usage is not available through the Graph reports APIs. The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform, and the Learn references list the global service only.

Application access needs consent from a tenant administrator. Delegated access needs the signed-in user to hold a supported Microsoft Entra role: Microsoft's authorisation page lists Company Administrator, Exchange Administrator, SharePoint Administrator, Lync Administrator, Teams Service Administrator, Teams Communications Administrator, Global Reader, Usage Summary Reports Reader and Reports Reader, and the Copilot user detail reference also lists AI Administrator. Whether names are concealed follows the organisation-wide reports setting.

The admin center report is at Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot, and defines Enabled Users as unique users with Microsoft Copilot licences over the selected timeframe.

## Governance guidance

### Before rollout
- Decide which people or apps may read Copilot usage and assign the matching Microsoft Entra role to those users (Microsoft Entra admin center > Identity > Users > All users > user > Assigned roles).
- Check the setting that conceals user, group and site names in reports before building user-level dashboards, and decide whether showing names is acceptable for your privacy practices.
- Compare the admin center Copilot usage report with your reporting needs; the API metrics are described as matching it, so start there to confirm which fields you need.

### At rollout
- Register the reporting app and ask a tenant administrator to grant consent for Reports.Read.All.
- Call getMicrosoft365CopilotUserCountSummary first and check the enabled and active counts against the admin center report for the same period.
- Use the `/copilot/reports` endpoints rather than the older `/reports` beta function.

### After rollout
- Review who holds the Microsoft Entra reporting roles and who has consented apps, since the data can include per-user activity.
- Re-check the Learn reference for changes, because the beta versions of these APIs are subject to change.
- If you reveal user names, note that Microsoft says showing identifiable user information is a logged event in the Microsoft Purview portal audit log.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can read Copilot usage reports through the API (Microsoft Entra role)</strong><br><small>User</small><br><small class="controls__note">Applies to delegated calls. Global Reader and Usage Summary Reports Reader see tenant-level data only. Applications also need tenant admin consent.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Users › All users › user › Assigned roles › Add assignment <a href="https://learn.microsoft.com/graph/reportroot-authorization" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether usage reports conceal user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets displayConcealedNames (true conceals names). Needs ReportSettings.ReadWrite.All. The page says Global administrators can change the setting.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two controls govern the data: who can read it through the API, and whether names appear. The Entra role applies to delegated calls; Microsoft's authorisation page separately requires tenant administrator consent for any application, including for application-level access.

The concealment setting is organisation-wide: Microsoft says it applies to usage reports in the admin center, Microsoft Graph and Power BI. Microsoft says Global administrators can change it. Microsoft Learn documents no switch that turns the Copilot usage reports API off on its own at the time of writing (November 2026).

## Open questions

- Does the Microsoft 365 Copilot licence requirement in the Copilot APIs overview apply to the app or admin that calls the usage reports API, or only to the users whose usage is reported? Watch the Copilot APIs overview page.
- Will the Graph usage reports be offered in US Government clouds? The reference pages list US Government L4 and L5 as unavailable, while the admin center usage overview lists the Microsoft Copilot usage report for GCC, GCC High and DoD.
- Will unlicensed Copilot Chat usage be added to the Graph reports APIs? The user detail reference currently points to other routes.
- When will the older beta `/reports` Copilot function be retired? Its page says to use `/copilot` going forward and gives no date.

<!-- rationale
risk: Low. The endpoints return per-user Copilot activity, but nothing is exposed until an administrator consents to an app with Reports.Read.All, and Microsoft says reports hide user names by default.
cost: Low. Microsoft's Copilot APIs overview says the Copilot APIs require a Microsoft 365 Copilot licence and names no price or meter for the usage reports; the known cost is developer and admin time.
impact: Low. Only administrators, analysts and developers who build Copilot adoption reports notice it; end users see no change.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: The user detail functions return last activity dates per app, including the by-date user detail function. | Found: | `isActiveInWord` | Boolean | Activity in Microsoft Word. | | `reportRefreshDate` | Date | Date when the report data was refreshed. | | `reportSelectedDate` | Date | Date selected by the request. | | Fix: Replace 'The user detail functions return per-user activity: display name, user principal name and last activity dates per app.' with 'getMicrosoft365CopilotUsageUserDetail returns display name, user principal name and last activity dates per app.' The by-date response schema instead lists activity flags and counts, with report refresh and selected dates. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusageuserdetailbydate
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: getMicrosoft365CopilotUsageUserDetailByDate provides user-level usage for one selected date. | Found: APIs under the `/beta` version are subject to change. Use of these APIs in production applications is not supported. Get user-level Microsoft 365 Copilot usage detail for all reported users on a single selected date. | Fix: Change the by-date description to 'getMicrosoft365CopilotUsageUserDetailByDate (beta preview; user-level usage for one selected date)' and cite https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusageuserdetailbydate. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusageuserdetailbydate
- [supported, minor] front matter: licensing.model, notes; Cost and licensing; rationale: cost / licensing: The Copilot APIs overview includes usage reports and describes a Microsoft 365 Copilot per-user licence requirement. | Found: Microsoft 365 Copilot license - Required for each user who accesses Microsoft 365 Copilot functionality via these APIs. This license provides access to the AI capabilities that power the APIs. | Fix: Replace the general requirement sentence in the licensing notes and Cost and licensing with 'The Copilot APIs overview lists the usage reports API and requires a Microsoft 365 Copilot licence for each user who accesses Microsoft 365 Copilot functionality via these APIs.' Retain the narrower uncertainty about reports-API caller entitlement. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/copilot-apis-overview
- [supported, minor] Scope / admin-path: The admin center Copilot report is at Reports > Usage > Microsoft Copilot > Copilot. | Found: On the Usage page, under Reports, select Microsoft Copilot, and then select Copilot. 5. On the report page, select the Usage tab to view adoption and usage metrics. | Fix: Replace the prose path with 'Microsoft 365 admin center > Reports > Usage > Reports > Microsoft Copilot > Copilot > Usage'. If Reports is hidden in navigation, select Show all first. This adds the documented Reports heading and reaches the Usage tab rather than stopping on the report page. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage
- [supported, minor] controls[0].api; Governance controls table / command: POST /v1.0/roleManagement/directory/roleAssignments assigns a Microsoft Entra directory role. | Found: POST https://graph.microsoft.com/v1.0/roleManagement/directory/roleAssignments Content-type: application/json { "@odata.type": "#microsoft.graph.unifiedRoleAssignment", "roleDefinitionId": "c2cf284d-6c41-4e6b-afac-4b80928c9034", | Fix: Keep the method and path. Add to controls[0].note: 'The request body sets roleDefinitionId to the reporting role being assigned to the user identified by principalId.' These deciding properties are documented on https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments. | Source: https://learn.microsoft.com/graph/api/rbacapplication-post-roleassignments
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist tells administrators to grant Reports.Read.All consent, but the table covers delegated role assignment and concealment rather than application consent. | Found: Register the reporting app and ask a tenant administrator to grant consent for Reports.Read.All. Which users can read Copilot usage reports through the API (Microsoft Entra role) Whether usage reports conceal user, group and site names | Fix: Add after the consent checklist step: 'Application consent is a separate access requirement; the controls table covers delegated user roles and report concealment, not the consent procedure.' Do not add a control row.
-->
