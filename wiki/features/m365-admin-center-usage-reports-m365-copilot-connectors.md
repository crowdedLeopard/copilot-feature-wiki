---
title: "Microsoft 365 admin center: Copilot connectors usage report"
slug: "m365-admin-center-usage-reports-m365-copilot-connectors"
roadmapId: 519571
topic: "governance"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft 365 admin center"]
summary: "A new Connectors report under Reports > Usage > Microsoft Copilot shows how Copilot connectors are used in Chat, Search and agents. Microsoft says it is on by default and needs no action; tell your report readers."
status: "rolling-out"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1404326 says a Microsoft 365 Copilot (Premium) licence is required to use the feature. The Learn page counts only licensed Microsoft Copilot users as active. No separate price for the report is published."
audiences: ["m365-admin","service-owner","change-adoption","finops"]
tags: ["m365-copilot","copilot-connectors","usage-reports","m365-admin-center","adoption","copilot-control-system","copilot-chat","agents"]
sources:
  - title: "Microsoft 365 Roadmap 519571"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=519571"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot Connectors usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update"
    kind: "learn"
  - title: "copilotReportRoot resource type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/reports/resources/copilotreportroot"
    kind: "learn"
  - title: "MC1404326"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1404326"
    kind: "message-center"
videos: []
related: ["m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","m365-admin-center-copilot-credits-usage-report","work-iq-federated-connectors"]
controls:
  - governs: "Where administrators view the Copilot connectors usage report"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Microsoft Copilot > Connectors"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage"
    api: null
    note: "Viewing needs a role listed in the usage reports overview. Learn page is marked public preview. The Graph methods under copilotReportRoot do not include this report at the time of writing."
  - governs: "Whether usage reports show user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org Settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/v1.0/admin/reportSettings with body {\"displayConcealedNames\": false}"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update"
    note: "General control for all usage reports, not specific to this report. Global administrators can change it; showing identifiable information is logged in the Purview audit log."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-05T00:00:11"
changes:
  - date: "2026-11-17"
    note: "New briefing: the Copilot connectors usage report, with Microsoft's November 2026 general availability timeline from MC1404326."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 59 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 72 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 70
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "f294d139f25be396f844e0b9300f2936"
---

## What's changing

Microsoft is adding a **Connectors** usage report to the Microsoft 365 admin center. It shows how Copilot connectors are used across Copilot Chat, Copilot Search and agents, at organisation, connector and user level. The roadmap item describes it as connector activity, connector-powered response patterns over time and user-level adoption data.

The Learn page for the report defines the measures. **Active Connector users** counts licensed Microsoft Copilot users who received a Copilot response grounded on connector content, and **Connector responses** counts those responses. Two tiles count connections used by Copilot (Chat and Search) and by agents (declarative and custom engine). You can filter the last 7 or 30 days, and the page says data refreshes within one hour of user activity. A user is counted only when a response includes grounding (citations) from a connector; opening Chat, Search or an agent without such a response does not count. Connector usage within Cowork is not yet supported.

Microsoft's notice MC1404326 (published 25 June 2026, updated 16 October 2026) says the public preview began rolling out in late June 2026 and was due to complete by early July 2026. It moves general availability to a November 2026 start and finish (previously late September). It says the report is enabled by default and that no action is required before rollout. The roadmap record shows the item as Rolling out, with a June CY2026 preview date and a November CY2026 target. The Learn page still carries a public preview banner, so treat its behaviour as preview documentation until that banner goes.

## Why it matters

The report shows which connectors, and which users, receive Copilot answers grounded on your external data. That helps a service owner judge whether connector investment is being used, and spot connectors that nobody's answers draw on. Counts are limited to grounded, cited responses, so a low number can mean content is not surfacing in answers, not that nobody searches.

If nobody acts, the report appears anyway: Microsoft's notice says it is enabled by default. The practical decisions are who reads it and whether user names are shown. The report does not change what connectors index or who can see it.

## Risk assessment

**Data exposure**
- The user activity table lists users licensed for Microsoft Copilot at any point in the past 180 days, with connections used, responses received and last activity date. That is per-person adoption data, so decide who may read it.
- The Learn page says user names, display names, groups and sites are hidden by default in usage reports. Unhiding them uses the tenant-wide **Conceal user, group, and site names in all reports** setting, which also changes the other usage reports. Showing identifiable information is a logged event in the Microsoft Purview portal audit log.
- The connector table identifies each connector by its Connection ID, not by a name.

**Security & identity**
- Microsoft's notice says the report respects existing permissions. The usage reports overview lists the roles that can view usage reports, two of them "with no user details" (Usage Summary Reports Reader and User Experience Success Manager).

**Autonomy & actions**
- No change: the report displays usage counts, and the Learn page describes no action it takes on connectors, agents or users.

**Change & support**
- Expect questions about low or zero counts: only licensed Microsoft Copilot users are counted as active, and only responses grounded on connector content count.
- Microsoft moved general availability from late September to November 2026, and the Learn page is still marked preview, so wording and metrics can change.
- Microsoft has not said whether synced and federated connectors are both reflected in the counts.

## Cost and licensing

**Licence.** Microsoft's notice MC1404326 says a Microsoft 365 Copilot (Premium) licence is required to use this feature. The Learn page counts as active only a user with a Microsoft Copilot licence, and its user table covers users licensed for Microsoft Copilot at any point in the past 180 days. The notice does not say which licence the administrator viewing the report needs; viewing is by the admin roles listed in the usage reports overview.

**Meter.** No meter, price or credit rate for the report is documented at the time of writing (November 2026). 

**Indirect cost.** Administrator time to read the report and brief analytics stakeholders, which Microsoft's notice suggests.

## Scope

- **Users and licences:** the report counts licensed Microsoft Copilot users who received connector-grounded responses in Copilot Chat, Copilot Search or agents. The Learn page says this covers desktop, web and mobile.
- **Viewers:** the roles listed under "Before you begin" in the usage reports overview: Global Administrator, Exchange Administrator, SharePoint Administrator, Usage Summary Reports Reader, Reports Reader, Teams Administrator, Teams Communications Administrator, User Experience Success Manager and AI Administrator.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). The Learn usage reports overview marks the report "N/A" for GCC, GCC High and DoD with the footnote that it will be released in the future.
- **Platforms:** the roadmap record lists Android, Desktop, iOS, Mac and Web.
- **Rollout:** Public Preview began late June 2026; General Availability is planned for November 2026 per MC1404326 and the roadmap target. Cowork connector usage is not yet supported.

## Governance guidance

### Before rollout
- Name an owner for the Connectors report and tell analytics and adoption stakeholders it is arriving, as Microsoft's notice suggests.
- Decide whether the report should show user names. Check how the Reports organisation setting is currently set before anyone looks at the user table.
- List which administrators hold a role that can view usage reports, and confirm that anyone who should not see user details holds a role listed "with no user details".
- Update internal Copilot reporting documentation that lists the usage reports, as the notice advises.

### At rollout
- Open the report under Reports > Usage > Microsoft Copilot > Connectors and confirm it appears for your administrators.
- Compare the Connection IDs in the connector table with your connector inventory, because the table gives IDs, not names.
- Record the starting 7-day and 30-day counts as a baseline before wider Copilot adoption activity.

### After rollout
- Review active Connector users and Connector responses against your Copilot licence count to see how far connector content reaches users.
- Investigate connectors with no active users or responses before deciding to keep, fix or retire them.
- Re-read the Learn page when the preview banner is removed, and update any thresholds you set from preview behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Where administrators view the Copilot connectors usage report</strong><br><small>Tenant</small><br><small class="controls__note">Viewing needs a role listed in the usage reports overview. Learn page is marked public preview. The Graph methods under copilotReportRoot do not include this report at the time of writing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot › Connectors <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether usage reports show user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">General control for all usage reports, not specific to this report. Global administrators can change it; showing identifiable information is logged in the Purview audit log.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org Settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/v1.0/admin/reportSettings with body {&quot;displayConcealedNames&quot;: false}</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting specific to this report at the time of writing (November 2026): viewing follows the usage report roles, and the documented control over what it shows is the tenant-wide report privacy setting, which applies to the other usage reports too. Changing that setting needs a Global administrator according to the usage reports overview.

At the time of writing (November 2026), the Microsoft Graph Copilot usage report methods listed under copilotReportRoot cover Copilot user counts and user detail, not connectors, so the Connectors report has no Graph call to document yet.

## Open questions

- Which licence must the administrator viewing the report hold, if any, beyond a usage report role? Watch MC1404326 and the Learn page.
- Are synced and federated connectors both counted, and are connectors from Power Platform or Copilot Studio included? Watch the Learn page.
- Will a Microsoft Graph or export route for the connector and user tables be published? Watch the Copilot usage reports API reference.
- When will the report reach GCC, GCC High and DoD? The Learn overview says only that it will be released in the future; watch the Roadmap and Message center.
- Does the preview banner on the Learn page come down with the November 2026 general availability rollout? Watch the Learn page and MC1404326.

<!-- rationale
risk: Low. The report only displays usage of connectors you already run; Microsoft's notice says it respects existing permissions, and user names stay hidden unless the tenant-wide report setting is changed.
cost: Low. Microsoft's notice says a Microsoft 365 Copilot (Premium) licence is required to use the feature; no separate price or meter for the report is published, so the known cost is admin time.
impact: Low. Administrators and analytics owners see the new report; Microsoft's notice says there is no impact to user workflows.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: The report does not change what connectors index. | Found: Searched: "Copilot connectors usage report" "indexing" "read-only". Opened the report and read connector-overview excerpts; neither states that the report leaves indexing unchanged. | Fix: Replace 'The report does not change what connectors index or who can see it' with 'Microsoft says the report respects existing permissions.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; summary; Governance guidance: At rollout; Governance controls table / admin-path: The report is at Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Connectors. | Found: In the navigation menu, select Reports. ... Select Usage. ... On the Usage page, under Reports, select Microsoft Copilot, and then select Connectors. | Fix: Keep the Learn-based path. Add to the rollout paragraph: 'MC1404326 instead labels the path Reporting > Usage > Microsoft 365 Copilot > Connectors.' | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage
- [supported, minor] controls[1].api; Governance controls table / command: PATCH https://graph.microsoft.com/v1.0/admin/reportSettings with displayConcealedNames set to false shows identifiable information in reports. | Found: PATCH https://graph.microsoft.com/v1.0/admin/reportSettings ... displayConcealedNames ... If false, all reports show identifiable information. | Fix: Set controls[1].api.call to 'PATCH https://graph.microsoft.com/v1.0/admin/reportSettings' and make the same change in the rendered table. Add to the row note: 'The request body sets displayConcealedNames to false to show identifiable information, or true to conceal it.' | Source: https://learn.microsoft.com/graph/api/adminreportsettings-update
- [supported, minor] Governance guidance: Before rollout; Cost and licensing: Indirect cost / record: Microsoft's notice suggests naming a report owner and informing analytics and adoption stakeholders. | Found: Inform relevant administrators and analytics stakeholders about the new report. | Fix: Replace the first Before rollout bullet with 'Name an owner for the Connectors report. Inform relevant administrators and analytics stakeholders about the new report, as Microsoft's notice suggests.' This separates the wiki's owner recommendation from Microsoft's advice.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks readers to review role assignments without a corresponding control row. | Found: List which administrators hold a role that can view usage reports ... Table rows: Where administrators view the Copilot connectors usage report; Whether usage reports show user, group and site names. | Fix: Remove the Before rollout bullet beginning 'List which administrators hold a role that can view usage reports'. The role-assignment review has no control row; retain the documented roles in Scope.
-->
