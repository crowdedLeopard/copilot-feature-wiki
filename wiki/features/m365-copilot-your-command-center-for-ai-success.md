---
title: "Microsoft 365 admin center: refreshed Copilot landing page with usage and security views"
slug: "m365-copilot-your-command-center-for-ai-success"
roadmapId: 523222
topic: "m365-copilot"
products: ["Microsoft 365","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a redesigned Copilot page in the Microsoft 365 admin center, with metrics for Chat, Agents and Microsoft 365 Copilot, a security view for Purview actions and a usage view. Admins only; brief the people who report Copilot adoption."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Microsoft's Copilot settings page says the controls available vary by licence and service, but no page names a licence for the refreshed landing page or its new metrics."
audiences: ["m365-admin","change-adoption","security"]
tags: ["m365-admin-center","m365-copilot","copilot-chat","agents","usage-reports","adoption","purview","privacy"]
sources:
  - title: "Microsoft 365 Roadmap item 523222"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=523222"
    kind: "roadmap"
  - title: "Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/security-microsoft-copilot"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Overview of the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-center-overview"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Whether usage reports conceal user, group and site names (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["usage-reports","m365-admin-center-copilot-settings-optimize-view","m365-admin-center-agents-usage-report","m365-admin-center-copilot-credits-usage-report"]
controls:
  - governs: "Whether usage reports conceal user, group and site names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    api:
      kind: "graph"
      call: "PATCH /v1.0/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0"
    note: "The request body sets displayConcealedNames. On by default. Covers usage reports; not stated for the landing page's insight cards."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-11-19T00:15:24"
changes:
  - date: "2026-11-26"
    note: "New briefing on the planned Copilot landing page refresh in the Microsoft 365 admin center, with the documented Security section roles and the report name-concealment control."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 54 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 52
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "25cfcad57f2a130f6f8f496dab78e136"
---

## What's changing

Microsoft plans to redesign the **Copilot** landing page in the Microsoft 365 admin center so that it gives an at-a-glance view of Copilot use across three areas the roadmap calls pillars: Chat, Agents and Microsoft 365 Copilot. Microsoft Learn does not describe the refreshed page yet, so what follows about its behaviour is the roadmap's description.

According to the roadmap item, the page shows success metrics for each pillar, adds new metrics such as active chat users, assisted hours and satisfaction rate, and offers what Microsoft calls multi-signal, personalised and actionable insights to drive adoption. It adds a security pivot for Microsoft Purview actions and gathers the Copilot usage reports under a new usage pivot. Today the Copilot usage reports sit under **Reports > Usage > Microsoft Copilot**, and Learn already documents a Copilot security dashboard at **Copilot > Overview > Security**, which it marks as generally available.

The roadmap record lists the item as **In development**, with a preview target of November CY2025 and a general availability target of January CY2026. Both targets have passed while the status still reads In development; the record was last modified on 19 November 2025. Where the record and Learn differ, both are reported here: the Security section is documented as generally available, while the wider refresh is still listed as in development. Microsoft has not stated whether the refreshed page replaces the current one automatically.

## Why it matters

This is the page most Copilot owners open first, so a redesign changes where admins look for adoption figures and which numbers they quote. New metrics such as assisted hours and satisfaction rate will be read as business-case evidence, yet Microsoft has not published how the landing page calculates them. Expect them to differ from figures teams already take from the Copilot usage report or the Copilot Dashboard in Viva Insights, and agree which source is authoritative before the next adoption review.

The security pivot puts Purview-based actions, such as data loss prevention (DLP) policies for Copilot, on the same page as the adoption figures. That is convenient for an AI Administrator, but it means policy changes can start from a page the compliance team may not watch. Microsoft has not stated what happens on arrival; no source says existing reports or settings change, so the practical work is communication and agreeing who acts on the security recommendations.

## Risk assessment

**Data exposure**
- The page shows Copilot usage data to admins. Usage reports in the admin centre hide user, group and site names by default under the **Conceal user, group, and site names in all reports** setting (row 1). Microsoft has not stated whether the landing page's per-pillar metrics and insights follow that setting.

**Security & identity**
- Learn documents that the Security section needs the Global Reader role to display and the AI Administrator role to make changes. Its remediation workflow is Purview-based policies, for example DLP, so agree who in the compliance team signs off a policy before an AI Administrator creates one from the Copilot page.

**Autonomy & actions**
- No change: the roadmap describes metrics, insights and a security pivot for Purview actions, and no action the page takes on its own.

**Change & support**
- Admins who use the current Copilot pages will find usage reports regrouped under a usage pivot, according to the roadmap. New metrics without a published definition invite questions from leadership that the service owner cannot yet answer from documentation.

## Cost and licensing

**Licence.** Not yet published for the refreshed page. The Learn page *Configure Microsoft Copilot settings in the Microsoft 365 admin center* says Copilot capabilities and the controls available to manage them vary by licence and service, and names no licence for the landing page.

**Meter.** Microsoft documents no meter for viewing the Copilot landing page or its reports at the time of writing (November 2026).

**Indirect costs.** Admin time to learn the new layout, reconcile the new metrics with existing reports, and decide who acts on the Security section's recommendations.

## Scope

- **Who sees it:** admins in the Microsoft 365 admin center. Learn's usage reports overview lists the roles that can view usage reports, including Global Administrator, Reports Reader, Usage Summary Reports Reader (with no user details) and AI Administrator. The Security section needs Global Reader to view and AI Administrator to make changes.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Web.
- **Release phases:** the record lists Preview and General Availability.
- **Prerequisites:** not yet published for the refreshed page.

## Governance guidance

### Before rollout
- Decide whether Copilot usage data should show names, and set **Conceal user, group, and site names in all reports** accordingly (row 1), showing names where your organisation's privacy practices allow it.
- List which admins hold Global Reader, AI Administrator and Reports Reader, since these roles decide who sees the Security section and the Copilot usage reports.
- Tell the Copilot adoption lead that adoption figures will be grouped by Chat, Agents and Microsoft 365 Copilot on the new page.
### At rollout
- Open **Copilot > Overview > Security** and compare its recommendations with the DLP and labelling policies the compliance team already runs before anyone acts on one.
- Compare active chat users, assisted hours and satisfaction rate on the new page with the Copilot usage report figures you already publish, and record any gap.
### After rollout
- Search the Purview audit log for the event logged when identifiable user information is shown, if the conceal setting has been turned off.
- Check the Learn pages on Copilot reporting for a published definition of assisted hours before using it in a business case.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether usage reports conceal user, group and site names</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets displayConcealedNames. On by default. Covers usage reports; not stated for the landing page's insight cards.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The conceal setting is changed by Global administrators according to the usage reports overview, and the Graph operation needs the ReportSettings.ReadWrite.All permission. The same page says the setting also applies to the Microsoft 365 usage reports in Microsoft Graph and Power BI and to the usage reports in the Teams admin center, and that showing identifiable user information is logged in the Microsoft Purview audit log.

The Security section is a view onto Purview-based policies, not a separate control: Learn documents Global Reader to view it and AI Administrator to make changes. Microsoft Learn documents no setting specific to the refreshed landing page at the time of writing (November 2026).

## Open questions

- How does the landing page calculate assisted hours and satisfaction rate, and do they match the Copilot Dashboard in Viva Insights, which defines satisfaction rate from thumbs-up and thumbs-down reactions? Watch the Copilot reporting pages on Learn.
- Does **Conceal user, group, and site names in all reports** apply to the landing page's metrics and insights as it does to usage reports?
- Which roles can see each pivot (Chat, Agents, usage) beyond the documented Security section roles?
- Does the refreshed page replace the current Copilot page automatically, and when, given that the January CY2026 target has passed while the item is still In development? Watch Message center.
- Will any of the new metrics or insights depend on a Microsoft 365 Copilot licence or other subscription?

<!-- rationale
risk: Low. The roadmap describes a reporting and insights page for admins and no new behaviour for users; usage reports hide user names by default.
cost: Low. Microsoft has not published licensing for the refreshed page; the only cost the sources show is admin time to learn the new metrics and layout.
impact: Low. Only admins who open the Copilot section of the Microsoft 365 admin center, and the adoption leads they report to, notice the change.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters: first sentence / behaviour: The Copilot landing page is the page most Copilot owners open first. | Found: Searched: Copilot most owners landing page. Opened Overview of the Microsoft 365 admin center and Microsoft Copilot reporting options for admins; neither states how most owners begin their sessions. | Fix: Replace 'This is the page most Copilot owners open first, so a redesign changes where admins look for adoption figures and which numbers they quote' with 'A redesign changes where admins look for adoption figures and which numbers they quote'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: current usage-report path / admin-path: Current Copilot usage reports sit under Reports > Usage > Microsoft Copilot. | Found: On the Usage page, under Reports, select Microsoft Copilot, and then select Copilot. On the report page, select the Usage tab to view adoption and usage metrics. | Fix: Complete the route as 'Microsoft 365 admin center > Reports > Usage > Microsoft Copilot > Copilot > Usage', using https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage. The printed route stops on the right report area. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing is unknown because no licence specific to the refreshed landing page or its new metrics is published. | Found: Basic usage management controls and reporting for admins. | Basic usage management controls and reporting for admins. | Added advanced management controls and analytics for admins. | Fix: Set licensing.model to 'included'. Replace the notes and licence paragraph with 'Microsoft documents basic admin reporting with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic), and advanced admin analytics with Microsoft 365 Copilot (Premium). No licence specific to the refreshed landing page or its new metrics is published.' Cite https://learn.microsoft.com/copilot/plan/copilot-overview#compare-microsoft-365-copilot-licenses. Retain cost low; narrow its rationale to the unpublished feature-specific licensing. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview#compare-microsoft-365-copilot-licenses
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist asks administrators to review role assignments, DLP and labelling policies, and the audit log, but those controls have no corresponding table rows. | Found: List which admins hold Global Reader, AI Administrator and Reports Reader; compare its recommendations with the DLP and labelling policies; Search the Purview audit log. The table contains only the report name-concealment control. | Fix: The Before rollout role-inventory step, At rollout DLP/labelling-policy review step and After rollout audit-log search step have no corresponding control rows. Remove those checklist steps; do not add unverified control rows.
- [supported, minor] Risk assessment: Security & identity / role: An AI Administrator can create a Copilot DLP policy. | Found: Accounts with one of the following roles or role groups can create or edit a DLP policy for the Microsoft Copilot, Copilot Chat, and Copilot Cowork location: Microsoft Entra AI Admin | Fix: Cite https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about for the statement that an AI Administrator can create a Copilot DLP policy; the current security dashboard source states the dashboard role but not the DLP policy creation permissions. | Source: https://learn.microsoft.com/purview/dlp-microsoft365-copilot-location-learn-about
-->
