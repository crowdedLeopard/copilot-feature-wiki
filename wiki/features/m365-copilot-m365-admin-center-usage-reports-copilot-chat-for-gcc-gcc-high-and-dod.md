---
title: "Microsoft 365 admin center: Copilot Chat usage report for GCC, GCC High and DoD"
slug: "m365-copilot-m365-admin-center-usage-reports-copilot-chat-for-gcc-gcc-high-and-dod"
roadmapId: 567121
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists a Copilot Chat usage report in the Microsoft 365 admin center for GCC, GCC High and DoD as launched. It gives insights into active Copilot Chat usage; administrators choose whether to look at it and whether user names show."
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
  notes: "Microsoft's report page names no licence for viewing the report. It says the report covers users without a Microsoft Copilot licence; usage by licensed users is in the Microsoft Copilot usage report. Microsoft's Copilot overview instead says the report applies to all licenses; the two pages disagree about user coverage."
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
  - title: "Microsoft Copilot overview"
    url: "https://learn.microsoft.com/copilot/plan/copilot-overview#track-and-increase-copilot-adoption"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options#microsoft-copilot-licenses"
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
  - date: "2026-11-21"
    note: "Corrected after the independent check: per-user table description, read-only wording replaced, Reports heading added to the path, user-coverage disagreement noted, two checklist bullets removed."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 68
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5b625d325a8af86f4c9b930772f915e1"
---

## What's changing

Microsoft 365 admin center usage reports gain a Copilot Chat usage report for the US Government clouds. The roadmap item says the report covers total active users, Copilot Chat usage broken out by Microsoft 365 app, and user-level activity insights that are anonymised by default. The roadmap lists the clouds as GCC, GCC High and DoD, the platform as Web, and the release phase as General Availability.

Microsoft's Learn page for the Microsoft Copilot Chat usage report describes the report: active users, average daily active users, total prompts submitted and average prompts submitted per user, with a Summary view and a Trend view that can be filtered by entry point. Entry points listed are Edge, Microsoft Copilot (app), Teams, Outlook, m365.cloud.microsoft/chat, Word, Excel, PowerPoint and OneNote. A per-user table shows prompts submitted, active days and last activity dates, and the data can be exported to a .csv file.

The Learn page says the report currently supports only users without a Microsoft Copilot licence, and points to the Microsoft Copilot usage report for licensed users. Microsoft's Copilot overview instead says the Copilot Chat usage report applies to all licenses; the two pages disagree about user coverage. In Excel and PowerPoint, edit mode is not currently included in active usage metrics. For activity on a given day, the report typically becomes available within 48 hours of the end of that day (UTC). The Learn page does not itself say which clouds it covers; the usage reports overview lists the report as available in GCC, GCC-High and DoD.

The roadmap record shows the item as Launched, with a target of July CY2026, last modified on 29 September 2026.

## Why it matters

This gives US Government tenants a way to see how many people use Copilot Chat, and in which app, without a licence-by-licence export. It helps adoption teams judge whether Copilot Chat is being used and where, and helps administrators check usage before deciding what to promote, pin or restrict.

Microsoft has not stated what happens on arrival, such as whether the report is switched on for every tenant automatically, so treat the report as something to check for rather than assume. The user-level table is the part that needs a decision: names are hidden by default, and showing them is a tenant-wide choice that covers every usage report.

## Risk assessment

**Data exposure**
- The per-user table lists total prompts submitted and active days for Copilot Chat, plus overall and app-specific last activity dates. By default Learn says user information such as usernames and display names is hidden in usage reports.
- Unchecking the org setting that conceals names shows identifiable users in this report and in the other usage reports, as the Learn overview says the setting applies to the reports in general. Learn also says showing identifiable user information is a logged event in the Microsoft Purview audit log.

**Security & identity**
- Learn lists the roles that can view usage reports, including Global Administrator, Reports Reader and AI Administrator. Usage Summary Reports Reader and User Experience Success Manager are listed with no user details. Check who holds these roles before enabling names.

**Autonomy & actions**
- The report provides insights into active usage of Microsoft Copilot Chat.

**Change & support**
- Help desks may be asked why licensed users do not appear: the Learn page says the report covers users without a Microsoft Copilot licence, and licensed users appear in the Microsoft Copilot usage report.
- Excel and PowerPoint edit mode is not currently counted, so totals can understate use there.

## Cost and licensing

Microsoft's Copilot Chat usage report page lists no licence for viewing the report, and the usage reports overview lists admin roles as the permissions needed. No meter or charge is published for the report on those pages; the cost the sources show is admin time to read it and to act on what it shows.

The report page says it covers users without a Microsoft Copilot licence, so the people it counts are not the ones holding a Microsoft 365 Copilot add-on. Microsoft's licence options page lists Microsoft Copilot as an add-on in GCC, GCC High and DoD environments. Microsoft's Copilot overview instead says the report applies to all licenses; the two pages disagree about user coverage. Copilot Chat usage for licensed users sits in the Microsoft Copilot usage report.

## Scope

**Clouds and platform.** The roadmap lists GCC, GCC High and DoD, with the platform given as Web. The usage reports overview table marks the Microsoft Copilot Chat usage report as available in GCC, GCC-High and DoD.

**Users.** The report page says it currently supports only users without a Microsoft Copilot licence who use Copilot Chat in Teams, Outlook, m365.cloud.microsoft/chat, Microsoft Copilot (app), Microsoft Edge, Word, Excel, PowerPoint and OneNote.

**Who can view it.** To view usage reports you need one of the roles in the overview's Before you begin list: Global Administrator, Exchange Administrator, SharePoint Administrator, Usage Summary Reports Reader (no user details), Reports Reader, Teams Administrator, Teams Communications Administrator, User Experience Success Manager (no user details) or AI Administrator.

**Where.** Microsoft 365 admin center > Reports > Usage > Reports > Microsoft Copilot > Copilot Chat, with filters for 7, 28, 90 or 180 days on the report page. If Reports is not visible in the navigation, select Show all first.

## Governance guidance

### Before rollout
- Check the org setting that conceals user, group and site names in the Microsoft 365 admin center and record its current value, because it governs the per-user table.
- Agree with your privacy or compliance contact whether user-level Copilot Chat activity may be shown by name.

### At rollout
- Open Microsoft 365 admin center > Reports > Usage > Reports > Microsoft Copilot > Copilot Chat and confirm the report appears in your cloud.
- Keep the names concealed unless your organisation's privacy practice allows showing them.

### After rollout
- Compare this report with the Microsoft Copilot usage report, since this report covers users without a Microsoft Copilot licence and the other covers licensed users.
- Re-read the report page after future updates, as Learn notes Excel and PowerPoint edit mode may be added to the metrics.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether user, group and site names are concealed in usage reports</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator can change it. The request body sets displayConcealedNames; false shows identifiable information. Beta API. Applies to all usage reports.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The concealment setting is tenant-wide and applies to usage reports in general, not to this report alone; Learn says it also applies to usage reports in Microsoft Graph, Power BI and the Teams admin center. Learn says Global administrators can update the setting to display concealed information. Unchecking the box in the admin centre and setting displayConcealedNames to false through Graph are two routes to the same setting.

## Open questions

- Does Microsoft state whether the report appears automatically in every GCC, GCC High and DoD tenant, or does it need an action? Watch the report page on Microsoft Learn and Message center.
- Which licence, if any, does Microsoft say is needed to view the report in US Government clouds? Watch the usage reports overview on Microsoft Learn.
- Will licensed users' Copilot Chat activity in these clouds stay in the Microsoft Copilot usage report, or move into this one? The report page currently says it covers users without a Microsoft Copilot licence.
- Which reporting window is right: the report page lists 7, 28, 90 or 180 days while the overview says 7, 30, 90 and 180 days. Watch both pages for a correction.

<!-- rationale
risk: Low. The report provides usage counts, and user-level rows are anonymised by default; the exposure that remains is a Global Administrator choosing to show names.
cost: Low. The only cost the sources show is admin time to read the report; no licence requirement or meter for viewing it is published on the pages read.
impact: Low. Administrators and report readers see the new report; end users notice nothing.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: entry points; Scope: Users / behaviour: The report article lists Edge, Microsoft Copilot (app), Teams, Outlook, m365.cloud.microsoft/chat, Word, Excel, PowerPoint and OneNote as entry points. | Found: The report currently supports only users without a Microsoft Copilot license who interact with Copilot Chat in Teams, Outlook, m365.cloud.microsoft/chat, Microsoft Copilot (app), Microsoft Edge, Word, Excel, PowerPoint, and OneNote. | Fix: After the list in Scope: Users, add: 'This is the report article's general entry-point list, not a government-cloud availability list. Microsoft's service description says Copilot Chat is not available in the Edge sidebar in GCC, GCC High or DoD, and is not currently available in Web apps for M365 Copilot (Basic) users in those clouds.' Cite and add to sources https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot#feature-availability. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-copilot-usage
- [supported, minor] Open questions: reporting window / behaviour: The usage reports overview lists 7, 30, 90 and 180 days, presented as an unresolved discrepancy with this report's periods. | Found: Usage reports are generally available for the last 7, 30, 90, and 180 days. For details about specific report availability, see the individual usage report articles. | Fix: Replace the final Open questions bullet with: 'The report article documents 7, 28, 90 or 180-day views, while Microsoft's Copilot overview describes this same report as having 7, 30, 90 or 180-day views. Watch those two pages for clarification.' Link 'Copilot overview' to https://learn.microsoft.com/copilot/plan/copilot-overview#track-and-increase-copilot-adoption. The usage reports overview's general periods explicitly defer to individual report articles; the specific Copilot overview is the source that actually disagrees. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports
-->
