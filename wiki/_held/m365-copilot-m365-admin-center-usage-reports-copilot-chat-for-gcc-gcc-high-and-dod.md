---
title: "Microsoft 365 admin center: Copilot Chat usage report for GCC, GCC High and DoD"
slug: "m365-copilot-m365-admin-center-usage-reports-copilot-chat-for-gcc-gcc-high-and-dod"
roadmapId: 567121
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists a Copilot Chat usage report in the Microsoft 365 admin center for GCC, GCC High and DoD as launched. It is a read-only adoption report; administrators choose whether to look at it and whether user names show."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Microsoft's report page names no licence for viewing the report. It says the report covers users without a Microsoft Copilot licence; usage by licensed users is in the Microsoft Copilot usage report."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["usage-reports","copilot-chat","m365-admin-center","analytics","adoption","copilot-control-system","privacy","reporting-roles","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 567121"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567121"
    kind: "roadmap"
  - title: "Microsoft Copilot Chat usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Whether user, group and site names are concealed in usage reports (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    kind: "learn"
videos: []
related: ["m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","m365-admin-center-usage-reports-m365-copilot-connectors","microsoft-viva-insights-and-copilot-analytics-in-gcc-and-gcc-high","auditing"]
controls:
  - governs: "Whether user, group and site names are concealed in usage reports"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    api:
      kind: "graph"
      call: "PATCH /beta/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    note: "Global Administrator can change it. The request body sets displayConcealedNames; false shows identifiable information. Beta API. Applies to all usage reports."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-21"
    note: "New briefing: Copilot Chat usage report for GCC, GCC High and DoD, with its anonymisation setting and Graph call."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 55
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "fb1e4359b4d302ee046ad00bfe10221d"
---

## What's changing

Microsoft 365 admin center usage reports gain a Copilot Chat usage report for the US Government clouds. The roadmap item says the report covers total active users, Copilot Chat usage broken out by Microsoft 365 app, and user-level activity insights that are anonymised by default. The roadmap lists the clouds as GCC, GCC High and DoD, the platform as Web, and the release phase as General Availability.

Microsoft's Learn page for the Microsoft Copilot Chat usage report describes the report: active users, average daily active users, total prompts submitted and average prompts submitted per user, with a Summary view and a Trend view that can be filtered by entry point. Entry points listed are Edge, Microsoft Copilot (app), Teams, Outlook, m365.cloud.microsoft/chat, Word, Excel, PowerPoint and OneNote. A per-user table shows prompts submitted, active days and last activity dates, and the data can be exported to a .csv file.

The Learn page says the report currently supports only users without a Microsoft Copilot licence, and points to the Microsoft Copilot usage report for licensed users. In Excel and PowerPoint, edit mode is not currently included in active usage metrics. For activity on a given day, the report typically becomes available within 48 hours of the end of that day (UTC). The Learn page does not itself say which clouds it covers; the usage reports overview lists the report as available in GCC, GCC-High and DoD.

The roadmap record shows the item as Launched, with a target of July CY2026, last modified on 29 September 2026.

## Why it matters

This gives US Government tenants a way to see how many people use Copilot Chat, and in which app, without a licence-by-licence export. It helps adoption teams judge whether Copilot Chat is being used and where, and helps administrators check usage before deciding what to promote, pin or restrict.

Microsoft has not stated what happens on arrival, such as whether the report is switched on for every tenant automatically, so treat the report as something to check for rather than assume. The user-level table is the part that needs a decision: names are hidden by default, and showing them is a tenant-wide choice that covers every usage report.

## Risk assessment

**Data exposure**
- The per-user table lists prompts submitted, active days and last activity dates per app. By default Learn says user information such as usernames and display names is hidden in usage reports.
- Unchecking the org setting that conceals names shows identifiable users in this report and in the other usage reports, as the Learn overview says the setting applies to the reports in general. Learn also says showing identifiable user information is a logged event in the Microsoft Purview audit log.

**Security & identity**
- Learn lists the roles that can view usage reports, including Global Administrator, Reports Reader and AI Administrator. Usage Summary Reports Reader and User Experience Success Manager are listed with no user details. Check who holds these roles before enabling names.

**Autonomy & actions**
- No change: the report reads usage and takes no action on users or agents.

**Change & support**
- Help desks may be asked why licensed users do not appear: the Learn page says the report covers users without a Microsoft Copilot licence, and licensed users appear in the Microsoft Copilot usage report.
- Excel and PowerPoint edit mode is not currently counted, so totals can understate use there.

## Cost and licensing

Microsoft's Copilot Chat usage report page lists no licence for viewing the report, and the usage reports overview lists admin roles as the permissions needed. No meter or charge is published for the report on those pages; the cost the sources show is admin time to read it and to act on what it shows.

The report page says it covers users without a Microsoft Copilot licence, so the people it counts are not the ones holding a Microsoft 365 Copilot add-on. Copilot Chat usage for licensed users sits in the Microsoft Copilot usage report.

## Scope

**Clouds and platform.** The roadmap lists GCC, GCC High and DoD, with the platform given as Web. The usage reports overview table marks the Microsoft Copilot Chat usage report as available in GCC, GCC-High and DoD.

**Users.** The report page says it currently supports only users without a Microsoft Copilot licence who use Copilot Chat in Teams, Outlook, m365.cloud.microsoft/chat, Microsoft Copilot (app), Microsoft Edge, Word, Excel, PowerPoint and OneNote.

**Who can view it.** To view usage reports you need one of the roles in the overview's Before you begin list: Global Administrator, Exchange Administrator, SharePoint Administrator, Usage Summary Reports Reader (no user details), Reports Reader, Teams Administrator, Teams Communications Administrator, User Experience Success Manager (no user details) or AI Administrator.

**Where.** Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot Chat, with filters for 7, 28, 90 or 180 days on the report page.

## Governance guidance

### Before rollout
- Confirm which of your admins hold the roles Learn lists for viewing usage reports, and prefer roles Learn marks as having no user details.
- Check the org setting that conceals user, group and site names in the Microsoft 365 admin center and record its current value, because it governs the per-user table.
- Agree with your privacy or compliance contact whether user-level Copilot Chat activity may be shown by name.

### At rollout
- Open Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot Chat and confirm the report appears in your cloud.
- Keep the names concealed unless your organisation's privacy practice allows showing them.

### After rollout
- Compare this report with the Microsoft Copilot usage report, since this report covers users without a Microsoft Copilot licence and the other covers licensed users.
- Review Purview audit entries if anyone turns on showing user names, since Learn says that action is logged.
- Re-read the report page after future updates, as Learn notes Excel and PowerPoint edit mode may be added to the metrics.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether user, group and site names are concealed in usage reports</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator can change it. The request body sets displayConcealedNames; false shows identifiable information. Beta API. Applies to all usage reports.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The concealment setting is tenant-wide and applies to usage reports in general, not to this report alone; Learn says it also applies to usage reports in Microsoft Graph, Power BI and the Teams admin center. Learn says Global administrators can update the setting to display concealed information. Unchecking the box in the admin centre and setting displayConcealedNames to false through Graph are two routes to the same setting. The report itself is read-only.

## Open questions

- Does Microsoft state whether the report appears automatically in every GCC, GCC High and DoD tenant, or does it need an action? Watch the report page on Microsoft Learn and Message center.
- Which licence, if any, does Microsoft say is needed to view the report in US Government clouds? Watch the usage reports overview on Microsoft Learn.
- Will licensed users' Copilot Chat activity in these clouds stay in the Microsoft Copilot usage report, or move into this one? The report page currently says it covers users without a Microsoft Copilot licence.
- Which reporting window is right: the report page lists 7, 28, 90 or 180 days while the overview says 7, 30, 90 and 180 days. Watch both pages for a correction.

<!-- rationale
risk: Low. The report only reads usage counts, and user-level rows are anonymised by default; the exposure that remains is a Global Administrator choosing to show names.
cost: Low. The only cost the sources show is admin time to read the report; no licence requirement or meter for viewing it is published on the pages read.
impact: Low. Administrators and report readers see the new report; end users notice nothing.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] summary; Risk assessment: Autonomy & actions; Governance controls; rationale: risk / behaviour: The report is read-only and takes no action on users or agents. | Found: Searched: Microsoft Copilot Chat usage report read only report actions users agents per app prompts active days. Read microsoft-copilot-usage and activity-reports; they describe insights, exports and recommendation cards, not a read-only guarantee. | Fix: Replace the read-only/no-action assertions with 'The report provides insights into active usage of Microsoft Copilot Chat', as https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage states. Remove 'only' from the risk rationale's description of reading usage counts.
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: The per-user table lists prompts submitted per app. | Found: Prompts submitted | The total number of prompts submitted by this user to Microsoft Copilot Chat during the specified period. | Fix: Replace the first Data exposure bullet's opening sentence with 'The per-user table lists total prompts submitted and active days for Copilot Chat, plus overall and app-specific last activity dates.' The table at https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage gives app-specific dates, not app-specific prompt counts. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: The per-user table lists active days per app. | Found: Active days | The total number of days the user submitted prompts to Microsoft Copilot Chat within the specified timeframe. | Fix: Use 'The per-user table lists total prompts submitted and active days for Copilot Chat, plus overall and app-specific last activity dates.' See https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage; active days are not defined per app. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; What's changing; Cost and licensing; Scope; Governance guidance / licensing: The report currently supports only users without a Microsoft Copilot licence. | Found: The report currently supports only users without a Microsoft Copilot license | Fix: Retain the report-page attribution and add: 'Microsoft's Copilot overview instead says the Copilot Chat usage report applies to all licenses; the two pages disagree about user coverage.' Cite https://learn.microsoft.com/copilot/plan/copilot-overview#track-and-increase-copilot-adoption, which states 'applies to all licenses'. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage
- [supported, minor] Scope: Where; Governance guidance: At rollout / admin-path: The report is reached at Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot Chat. | Found: Select Usage. On the Usage page, under Reports, select Microsoft Copilot, and then select Copilot Chat. | Fix: Add the omitted section heading in both occurrences: 'Microsoft 365 admin center > Reports > Usage > Reports > Microsoft Copilot > Copilot Chat'. If Reports is not visible in navigation, select Show all first, as https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage explains. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage
- [supported, minor] Cost and licensing / licensing: Microsoft Copilot licensing in GCC, GCC High and DoD is an add-on, which is the licence the report page says its counted users lack. | Found: Microsoft Copilot is available as an add-on in Government Community Cloud (GCC), Government Community Cloud High (GCC High), and Department of Defense (DoD) environments for the following plans. | Fix: Cite https://learn.microsoft.com/copilot/plan/copilot-license-options#microsoft-copilot-licenses for the add-on terminology in Cost and licensing; retain the report-page attribution and the source-disagreement qualification specified for user coverage. | Source: https://learn.microsoft.com/copilot/plan/copilot-license-options#microsoft-copilot-licenses
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to check reporting-role assignments, but the controls table has no access-role row. | Found: Confirm which of your admins hold the roles Learn lists for viewing usage reports ... Controls table: Whether user, group and site names are concealed in usage reports. | Fix: Remove the Before rollout bullet about checking reporting-role assignments to align the checklist with its controls table. Do not add a control row during this correction.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist asks administrators to review Purview audit entries, but the controls table has no audit-review row. | Found: Review Purview audit entries if anyone turns on showing user names ... Controls table: Whether user, group and site names are concealed in usage reports. | Fix: Remove the After rollout bullet directing readers to review Purview audit entries. Keep the supported factual statement that showing identifiable information is logged; do not add a control row during this correction.
-->
