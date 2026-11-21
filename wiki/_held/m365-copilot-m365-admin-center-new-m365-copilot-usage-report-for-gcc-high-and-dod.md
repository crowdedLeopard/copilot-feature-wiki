---
title: "Microsoft 365 admin center: Microsoft Copilot usage report for GCC High and DoD"
slug: "m365-copilot-m365-admin-center-new-m365-copilot-usage-report-for-gcc-high-and-dod"
roadmapId: 567120
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists a Copilot usage report in the Microsoft 365 admin center for GCC High and DoD as launched. Administrators choose whether to open it; user names are hidden by default and a Global Administrator can show them."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
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
  notes: "Not yet published: the licence needed to view the report. The Learn report page counts users \"with Microsoft Copilot licenses\" as enabled users and lists roles, not a licence, for viewing reports."
audiences: ["m365-admin","change-adoption","compliance"]
tags: ["usage-reports","m365-copilot","m365-admin-center","analytics","adoption","copilot-control-system","privacy","reporting-roles","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 567120"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567120"
    kind: "roadmap"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Whether usernames and display names show in the Copilot usage report (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    kind: "learn"
videos: []
related: ["m365-copilot-m365-admin-center-usage-reports-copilot-chat-for-gcc-gcc-high-and-dod","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","auditing","microsoft-viva-insights-and-copilot-analytics-in-gcc-and-gcc-high"]
controls:
  - governs: "Whether usernames and display names show in the Copilot usage report"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    note: "Setting applies to all Microsoft 365 usage reports, not only Copilot. Global administrators can change it. The request body sets displayConcealedNames."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-21T22:00:23"
changes:
  - date: "2026-11-21"
    note: "New briefing for the Microsoft 365 Copilot usage report in GCC High and DoD, launched per the roadmap."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 45
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "65be9ab504e8bca45b702157a8b8a71e"
---

## What's changing

The roadmap item says Microsoft is introducing a Usage report for Microsoft 365 Copilot in the Microsoft 365 admin center for GCC High and DoD. Per the roadmap description, the report covers total enabled and active users, Copilot usage with a breakout per Microsoft 365 app, and user-level activity insights that are anonymised by default.

Microsoft Learn documents a Microsoft Copilot usage report with the same elements. Its **Enabled Users** figure is the total number of unique users with Microsoft Copilot licences over the selected timeframe, and its **Active Users** figure is the enabled users who tried a user-initiated Copilot feature in one or more Microsoft 365 apps. The page also describes an adoption-by-app chart, prompts submitted, Copilot Chat adoption and a user-level last-activity table. The timeframes it offers are 7, 28, 90 or 180 days, and activity for a given day typically becomes available within 48 hours of the end of that day (UTC). The Learn page is a general page for the report and does not describe a separate GCC High or DoD variant.

The Learn usage reports overview lists Microsoft Copilot usage as available ("Yes") in GCC-High and DoD, and not available in Microsoft 365 operated by 21Vianet. The roadmap record gives the status as Launched, the release phase as General Availability, the target date as July CY2026 and the platform as Web.

## Why it matters

Government-cloud tenants that have bought Microsoft 365 Copilot can use this report to see how many licensed users actually use it, and in which apps. That supports adoption plans and licence reviews without a separate analytics product.

The user-level table is the part to govern. Microsoft Learn says usernames, display names, groups and sites are hidden in usage reports by default, and a Global Administrator can change that setting. Microsoft has not stated whether the report appears for administrators without any action, so treat it as something to check rather than something that arrives configured.

## Risk assessment

**Data exposure**

- The user-level table lists a user principal name, display name, prompt counts and last-activity dates per Copilot app. Microsoft Learn says this information is hidden by default; if the org setting is switched to show names, individual usage becomes readable by the roles that can open the report.
- The report page notes that the table covers users who held a Copilot licence at any point in the past 180 days, so former licence holders can still appear.

**Security & identity**

- Viewing the report requires one of the roles listed on the usage reports overview, and two of those roles (Usage Summary Reports Reader and User Experience Success Manager) are listed "with no user details". Review who holds the other listed roles before showing names.
- Showing identifiable user information is a logged event in the Microsoft Purview portal audit log, per the usage reports overview.

**Autonomy & actions**

- No change: the report reads activity data and takes no action on users or content.

**Change & support**

- Figures can lag or differ. Learn states that audit log aggregates "might not be consistent" with the usage report, and that Word, Excel, PowerPoint, OneNote and Outlook client events can upload late. Agree one source of truth for adoption figures before sharing them.

## Cost and licensing

Microsoft Learn's report page counts users "with Microsoft Copilot licenses" as enabled users, so the report is about Microsoft 365 Copilot licence holders. The licence an administrator needs in order to view the report is not yet published: the report page and the Copilot reporting options page list roles (for example AI Administrator) and name no licence.

No meter or charge for the report is documented at the time of writing (November 2026). The cost the sources show is indirect: administrator time to read and export the report, and any time spent reconciling it with other reporting. The Learn page describes a **Recommendations** card that points to the Microsoft Copilot Dashboard in Viva Insights, which is a separate product and not covered here.

## Scope

The roadmap record lists the clouds as GCC High and DoD, the platform as Web, and the product as Microsoft Copilot (Microsoft 365). The roadmap does not say which users see the report.

To view usage reports, Learn lists these roles: Global Administrator, Exchange Administrator, SharePoint Administrator, Usage Summary Reports Reader (with no user details), Reports Reader, Teams Administrator, Teams Communications Administrator, User Experience Success Manager (with no user details) and AI Administrator. The Copilot reporting options page names AI Administrator as the role that accesses the Copilot reports.

The report is in the Microsoft 365 admin center under Reports > Usage, then Microsoft Copilot > Copilot, on the Usage tab. Learn describes a CSV export of the chart data and of the user table.

## Governance guidance

### Before rollout

- Confirm which role holders can open usage reports in your tenant, using the role list on the Microsoft 365 admin center usage reports overview.
- Check the current state of **Conceal user, group, and site names in all reports** and decide whether named user-level data is acceptable under your organisation's privacy practices.
- Agree who owns the adoption figures and which source (this report, the Microsoft Copilot Dashboard or Purview audit data) is the reference.

### At rollout

- Open Reports > Usage > Microsoft Copilot > Copilot in the Microsoft 365 admin center and confirm the report appears for an administrator with a permitted role in your GCC High or DoD tenant.
- Leave names concealed unless a named review is needed; if you show them, record who approved it, because the change is an audited event.

### After rollout

- Review enabled and active user figures at each timeframe you report on (7, 28, 90 or 180 days) and compare them with licences assigned.
- Restrict exports of the user-level table to the roles that need them, and store the CSV as you would other user activity data.
- Re-check the usage reports overview table for changes to GCC High or DoD availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether usernames and display names show in the Copilot usage report</strong><br><small>Tenant</small><br><small class="controls__note">Setting applies to all Microsoft 365 usage reports, not only Copilot. Global administrators can change it. The request body sets displayConcealedNames.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The one control Microsoft documents for this report's user-level data is the tenant-wide org setting that conceals user, group and site names in all usage reports. It is not specific to Copilot: it applies to the properties of reports across Microsoft 365, and Learn says it also applies to the usage reports in Microsoft Graph and Power BI. Global administrators can update it, per Learn. The Graph API is documented in beta, and its reference page marks it available in US Government L4 and L5 (DOD) deployments.

Access to the report itself is set by the Microsoft Entra roles listed in Scope, not by a Copilot-specific switch on this page.

## Open questions

- Does the report appear automatically for administrators in GCC High and DoD tenants, or does any setting need changing first? Microsoft has not stated the default; watch Message center and the Learn usage report page.
- Which licence, if any, is needed to view the report? Watch the usage reports overview and the Copilot reporting options page for a prerequisites statement.
- Does the GCC High or DoD report differ from the public cloud report described on Learn (for example in metrics, columns or timeframes)? Watch the Learn Microsoft Copilot usage report page.

<!-- rationale
risk: Low. The report only reports on Copilot activity, and Microsoft Learn says usernames and display names are hidden in usage reports by default until an administrator changes the org setting.
cost: Low. The only cost the sources show is administrator time to read the report. Microsoft Learn names roles, not a licence, for viewing it, and no meter is documented for it at the time of writing (November 2026).
impact: Low. Administrators and report readers see the report; end users see no change. The roadmap item describes it as a report, not a change to Copilot behaviour.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Autonomy & actions; rationale: risk and impact / behaviour: The report only reports activity, takes no action on users or content, and end users see no change. | Found: You can identify and address Copilot adoption gaps in your organization by using the Organizational Messages feature that's built into the Microsoft Copilot usage report. This feature sends notifications directly to the users you need to reach to increase usage and adoption. | Fix: Replace the Autonomy & actions bullet with 'The roadmap describes activity reporting; it does not state whether organizational messaging is available in the GCC High or DoD report.' In the risk rationale replace 'The report only reports on Copilot activity' with 'The roadmap describes Copilot activity reporting'. In the impact rationale remove 'end users see no change'. Do not assert government-cloud messaging availability from the general documentation. | Source: https://learn.microsoft.com/microsoft-365/copilot/track-copilot-adoption
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope; Governance guidance: At rollout / admin-path: The report is reached through Reports > Usage > Microsoft Copilot > Copilot and the Usage tab. | Found: On the Usage page, under Reports, select Microsoft Copilot, and then select Copilot. On the report page, select the Usage tab to view adoption and usage metrics. | Fix: In the At rollout checklist, complete the path as 'Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot > Usage', adding the Usage tab already given in Scope. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage
- [supported, minor] controls[0].note; Governance controls / applicability: The tenant concealment setting applies across Microsoft 365 usage reports, including Graph and Power BI reports, not just Copilot. | Found: By default, all reports hide user information such as usernames, display names, groups, and sites to help companies support local privacy laws. This setting also applies to the Microsoft 365 usage reports in Microsoft Graph and Power BI | Fix: Change 'The one control Microsoft documents for this report's user-level data is' to 'A documented control for this report's user-level data is'. The briefing also correctly identifies role-based access, so avoid suggesting the concealment setting is the sole documented control. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports
- [contradicted, minor] Governance guidance: Before rollout and At rollout; Governance controls / consistency: The checklist asks readers to review report access and open the usage report, but the controls table records only name concealment. | Found: Confirm which role holders can open usage reports in your tenant Open Reports > Usage > Microsoft Copilot > Copilot controls: Whether usernames and display names show in the Copilot usage report | Fix: The Before rollout role-access review and At rollout report-opening step have no corresponding controls-table row. Do not add rows in this correction; remove those checklist bullets or keep them as non-checklist background in Scope, where the documented roles and report path already appear.
-->
