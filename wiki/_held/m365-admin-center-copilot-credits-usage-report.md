---
title: "Microsoft 365 admin center: Copilot Credits usage report for pay-as-you-go in Copilot Chat"
slug: "m365-admin-center-copilot-credits-usage-report"
roadmapId: 490738
topic: "governance"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "A usage report on metered Copilot Chat agent consumption by user, billing policy, agent and agent-user pair, with alerts above 2,000 credits. In preview; Microsoft's notice gives GA from end of April 2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: []
targetDate: "April CY2027"
previewDate: "May CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "unknown"
  notes: "Microsoft's notice MC1069563 says a Microsoft Copilot license is not required for this pay-as-you-go scenario. The report appears after Copilot Chat pay-as-you-go is set up in either admin center and agent usage is enabled; no report price is published."
audiences: ["m365-admin","finops","service-owner"]
tags: ["m365-admin-center","usage-reports","copilot-credits","pay-as-you-go","copilot-chat","agents","copilot-control-system","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 490738"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=490738"
    kind: "roadmap"
  - title: "MC1069563: Microsoft 365 admin center: Usage reports to manage metered consumption costs for Microsoft 365 Copilot Chat (preview)"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1069563"
    kind: "message-center"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
    kind: "learn"
  - title: "Microsoft Copilot reporting options for admins"
    url: "https://learn.microsoft.com/copilot/manage/copilot-admin-reports"
    kind: "learn"
  - title: "Update adminReportSettings"
    url: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "List costManagementUserUsageRecords"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusagerecord-list"
    kind: "learn"
  - title: "Usage-based billing: What you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "View costs and billing for Microsoft Copilot pay-as-you-go"
    url: "https://learn.microsoft.com/copilot/manage/view-cost"
    kind: "learn"
  - title: "Whether user, group and site names are concealed in reports (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Access to the Copilot Credits report"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Reports > Microsoft Copilot > Credits"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    api: null
  - governs: "Whether user, group and site names are concealed in reports"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Services > Reports > Conceal user, group, and site names in all reports"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports"
    api:
      kind: "graph"
      call: "PATCH /beta/admin/reportSettings"
      docs: "https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta"
    note: "Beta API, not supported for production applications. The request body sets displayConcealedNames: true conceals user, group and site names; false shows them."
  - governs: "Consumption by policy, user, group, agent and service"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Consumption"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending"
    api:
      kind: "graph"
      call: "GET /beta/copilot/costManagement/usageReports/userUsageRecords?startDate={startDate}&endDate={endDate}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusagerecord-list"
    note: "Beta; one completed UTC day per call. Lists delegated work or school and application permissions in the Graph permission model, subject to deployment availability and authorization. Not an equivalent of the Credits report."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-19"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Correction: licensing set to not yet published and cost to low, MC1069563 window and default added, Graph and Cost Management API rows and links fixed, unsupported claims narrowed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 64 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Correction: Cost Management API permissions now say delegated work or school and application; Credits report path includes the Reports heading; Graph concealment call shown without its body; rollout completion marked as expected."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 77 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-26"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 86
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "4fff36982a130ca4c6004566f9a74271"
---

## What's changing

The **Microsoft Copilot Credits report** in the Microsoft 365 admin center (**Reports** > **Usage** > **Reports** > **Microsoft Copilot** > **Credits**) shows credits consumed by metered agent interactions in Copilot Chat: total credits used, cumulative and daily series, and breakdowns per user, per agent, per billing policy and per agent-user pair. Usage appears within about an hour of the interaction. The report flags users who exceed 2,000 credits so administrators can act before a bill surprises them.

The report has been in preview since May 2025 and is limited to 30 days of history during preview, with no data before 3 May 2025. The roadmap item targets General Availability for April CY2027. Microsoft's notice MC1069563, updated October 28, 2026, gives a more specific window: Worldwide rollout begins at the end of April 2027 (previously early January) and is expected to complete by the end of May 2027 (previously end of January). The notice says the report will be on by default and rolls out automatically with no admin action required beforehand. It names the path as Reporting > Usage > Microsoft 365 Copilot > Message consumption, whereas Learn now gives the report as Credits under Microsoft Copilot.

Separately, the **Cost Management** dashboard under **Copilot** in the admin center has a **Consumption** tab that reports credit usage by spending policy, user, group, agent and service for supported services governed through spending policies. Learn does not present it as a replacement for the Copilot Chat Credits report.

## Why it matters

If you run pay-as-you-go for agents, this report gives per-user and per-agent consumption for Copilot Chat. Azure Cost Management can take 24 hours after usage to show it, and Learn describes its view as billing-oriented, without the same user-level or spending-policy context as the Microsoft 365 admin center. The agent-user pair breakdown answers the question finance will ask: which agent, used by whom, drove last month's charge.

Its limitations matter too: 30 days of history during preview means you need to export regularly for trend analysis, and the report is not a general report of all Copilot Studio agent consumption. Copilot Chat usage appears in it even when the billing policy was configured in the Power Platform admin center.

## Risk assessment

**Data exposure**
- Usernames, display names, groups and sites are hidden by default in usage reports. Personal-data exposure arises when an administrator reveals them, because the report then shows per-user consumption, which is personal data about employees' tool use. Review who holds the roles that can open usage reports; Usage Summary Reports Reader has no user details, so it suits aggregate-report access without per-user data.

**Security & identity**
- The report's documented functions are viewing and exporting consumption: the alert details can be exported to CSV. Access follows the usage-report roles and the tenant-wide name concealment setting.

**Autonomy & actions**
- Not applicable.

**Change & support**
- 30-day history during preview means month-end reporting must be scheduled.
- Credit counts depend on agent design (for example 10 credits for tenant graph grounding plus 2 for generative answers per prompt), so makers influence cost; makers who lack an authorised reporting role may need administrators to share consumption totals.

## Cost and licensing

- The Credits report page states no separate price for the report. Microsoft's notice MC1069563 says a Microsoft Copilot license is not required for this pay-as-you-go scenario.
- The report covers Copilot Credits used by people without a Microsoft Copilot license who interact with agents in Copilot Chat that use the Copilot Studio meter. The consumption itself is billed through the pay-as-you-go billing policy.
- Pay-as-you-go charges can take 24 hours after usage to show in Azure Cost Management, so the report and the bill can differ for a day.
- Indirect: a monthly export routine while history is capped at 30 days.

## Scope

- Tenants that have set up pay-as-you-go for Microsoft Copilot Chat, in either the Microsoft 365 admin center or the Power Platform admin center, and have enabled agent usage in the organisation. The report then appears.
- Worldwide (standard multi-tenant); the usage reports overview lists Copilot reports as unavailable in some government clouds. Check the overview table for your cloud.
- Roles: the usage reports overview lists Global Administrator, Exchange Administrator, SharePoint Administrator, Reports Reader, Teams Administrator, AI Administrator and others as able to view usage reports. Usage Summary Reports Reader is listed with no user details.

## Governance guidance

### Before rollout
- Confirm who needs to see per-user consumption and whether usernames and display names should be revealed (they are hidden by default).
- Decide the threshold at which a user's credit use triggers a conversation (Microsoft alerts at 2,000).

### At rollout
- Add the report to the monthly FinOps pack alongside Cost Management consumption and Azure Cost Management.
- Export the 30-day view at month end and keep the series.

### After rollout
- Share per-agent credit totals with agent owners so design choices (grounding, generative answers) are made with cost in view.
- Watch for GA changes to history depth and for the report's data to appear in the Cost Management dashboard.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to the Copilot Credits report</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Reports › Microsoft Copilot › Credits <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether user, group and site names are concealed in reports</strong><br><small>Tenant</small><br><small class="controls__note">Beta API, not supported for production applications. The request body sets displayConcealedNames: true conceals user, group and site names; false shows them.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/reportSettings</code> <a href="https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Consumption by policy, user, group, agent and service</strong><br><small>Tenant</small><br><small class="controls__note">Beta; one completed UTC day per call. Lists delegated work or school and application permissions in the Graph permission model, subject to deployment availability and authorization. Not an equivalent of the Credits report.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Consumption <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/usageReports/userUsageRecords?startDate={startDate}&amp;endDate={endDate}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft documents report access roles and the tenant-wide concealment setting; no additional report-specific administrative configuration is documented as of November 2026. Learn's [Copilot reporting options](https://learn.microsoft.com/copilot/manage/copilot-admin-reports) lists AI Administrator among the roles that can open the Copilot usage reports.

The concealment setting also applies to the Billing Policy ID in this report. In the Graph call, `true` conceals user, group and site names and `false` shows them; the endpoint is beta, which Microsoft says is not supported for production applications.

Microsoft Learn documents no API for the Credits report itself at the time of writing (November 2026). The Cost Management API call in the table returns per-user consumption for exactly one completed UTC day, lists delegated work or school and application permissions in the Graph permission model, subject to deployment availability and authorization, and is beta; it is not an equivalent of every Consumption tab breakdown or of the Credits report.

## Open questions

- Whether GA will extend history beyond 30 days or add export scheduling.
- How the report will relate to the Cost Management dashboard once Copilot Studio agents are governed there.

<!-- rationale
risk: Low. The report presents consumption data, and usernames and display names are hidden by default, so personal-data exposure arises only if an administrator reveals them.
cost: Low. The Credits report page states no separate price for the report, so the cost shown for it is admin time for exports. The consumption it reports is metered in Copilot Credits under pay-as-you-go.
impact: Low. Administrators and finance teams who manage pay-as-you-go for Copilot Chat notice it; end users do not.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model / licensing: The licensing model is unknown, meaning Microsoft has not published how the feature is obtained. | Found: After you set up pay-as-you-go for Microsoft Copilot Chat, either in the Microsoft 365 admin center or the Power Platform admin center, and enable agent usage in your organization, you see a new report that includes metrics for credits used. | Fix: Set licensing.model to "consumption". Keep the notes' published pay-as-you-go prerequisite and the statement that MC1069563 requires no Microsoft Copilot license; retain the narrow statement that no separate report price is published. The model describes the pay-as-you-go scenario, not a charge for opening the report. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
-->
