---
title: "Microsoft 365 admin center: Copilot Credits usage report for pay-as-you-go in Copilot Chat"
slug: "m365-admin-center-copilot-credits-usage-report"
roadmapId: 490738
topic: "governance"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "A usage report that breaks metered Copilot Chat agent consumption down by user, billing policy, agent and agent-user pair, with alerts for users above 2,000 credits. In preview since May 2025; GA now targeted for April 2027."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: []
targetDate: "April CY2027"
previewDate: "May CY2025"
risk: "low"
cost: "none"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "included"
  notes: "Report appears once pay-as-you-go for Copilot Chat is set up. No licence for the report; the consumption it reports is billed in Copilot Credits."
audiences: ["m365-admin","finops","service-owner"]
tags: ["m365-admin-center","usage-reports","copilot-credits","pay-as-you-go","copilot-chat","agents","copilot-control-system","cost-management"]
sources:
  - title: "Microsoft 365 Roadmap 490738"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=490738"
    kind: "roadmap"
  - title: "Microsoft Copilot Credits report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 admin center usage reports overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports"
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
  - title: "Consumption by policy, user, group, agent and service (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Consumption by policy, user, group, agent and service (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
videos: []
related: ["m365-admin-center-agent-level-pay-as-you-go-controls","copilot-studio-cost-management-m365-admin-center","m365-copilot-chat-usage-based-billing-models-model-selector","copilot-credits"]
controls:
  - governs: "Access to the Copilot Credits report"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Microsoft Copilot > Credits"
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
      call: "PATCH /beta/admin/reportSettings { displayConcealedNames }"
      docs: "https://learn.microsoft.com/graph/api/resources/adminreportsettings?view=graph-rest-beta"
  - governs: "Consumption by policy, user, group, agent and service"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Consumption"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    api:
      kind: "graph"
      call: "/beta/copilot/costManagement (Cost Management API)"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-28T23:04:31"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 41
  unconfirmed: 6
  contradicted: 2
  attempts: 2
---

## What's changing

The **Microsoft Copilot Credits report** in the Microsoft 365 admin center (**Reports** > **Usage** > **Microsoft Copilot** > **Credits**) shows credits consumed by metered agent interactions in Copilot Chat: total credits used, cumulative and daily series, and breakdowns per user, per agent, per billing policy and per agent-user pair. Usage appears within about an hour of the interaction. The report flags users who exceed 2,000 credits so administrators can act before a bill surprises them.

The report has been in preview since May 2025 and is limited to 30 days of history during preview, with no data before 3 May 2025. The roadmap now targets General Availability for April 2027, two years after preview, so plan on the preview behaviour for the foreseeable future. The newer **Cost Management** dashboard under **Copilot** in the admin center covers consumption by spending policy across more services and is where Microsoft is adding new reporting.

## Why it matters

If you run pay-as-you-go for agents, this report is the earliest signal of unexpected spend. Azure Cost Management lags by up to 24 hours and shows meters, not people. The agent-user pair breakdown answers the question finance will ask: which agent, used by whom, drove last month's charge.

Its limitations matter too: 30 days of history means you need to export regularly for trend analysis, and the report covers Copilot Chat metered usage, not Copilot Studio agents billed through the Power Platform admin center.

## Risk assessment

**Data exposure**
- The report exposes per-user consumption, which is personal data about employees' tool use. Restrict the Reports Reader and Usage Summary Reports Reader roles accordingly and consider the admin center's option to anonymise user details in reports.

**Security & identity**
- Read-only report; no configuration risk.

**Autonomy & actions**
- Not applicable.

**Change & support**
- 30-day history during preview means month-end reporting must be scheduled.
- Credit counts depend on agent design (for example 10 credits for tenant graph grounding plus 2 for generative answers per prompt), so makers influence cost without seeing this report.

## Cost and licensing

- No cost for the report.
- Reports on Copilot Credits consumed through the Copilot Studio meter by users without a Microsoft 365 Copilot licence.
- Indirect: a monthly export routine while history is capped at 30 days.

## Scope

- Tenants with pay-as-you-go enabled for Copilot Chat agents (set up in the Microsoft 365 admin center or Power Platform admin center).
- Worldwide (standard multi-tenant); the usage reports overview lists Copilot reports as unavailable in some government clouds. Check the overview table for your cloud.
- Roles: any role permitted to view usage reports (Global Reader, Reports Reader, Usage Summary Reports Reader and others listed on Learn).

## Governance guidance

**Before rollout**
- Confirm who needs to see per-user consumption and whether report anonymisation should be on.
- Decide the threshold at which a user's credit use triggers a conversation (Microsoft alerts at 2,000).

**At rollout**
- Add the report to the monthly FinOps pack alongside Cost Management consumption and Azure Cost Management.
- Export the 30-day view at month end and keep the series.

**After rollout**
- Share per-agent credit totals with agent owners so design choices (grounding, generative answers) are made with cost in view.
- Watch for GA changes to history depth and for the report's data to appear in the Cost Management dashboard.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access to the Copilot Credits report</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot › Credits <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether user, group and site names are concealed in reports</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Services › Reports › Conceal user, group, and site names in all reports <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports#show-user-group-or-site-details-in-usage-reports" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/admin/reportSettings { displayConcealedNames }</code> <a href="https://learn.microsoft.com/graph/api/resources/adminreportsettings?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Consumption by policy, user, group, agent and service</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Consumption <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>/beta/copilot/costManagement (Cost Management API)</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The report is a read-only surface; the only settings are who can see it and whether names are concealed. Learn's [Copilot reporting options](https://learn.microsoft.com/copilot/manage/copilot-admin-reports) lists AI Administrator among the roles that can open the Copilot usage reports. The Graph usage reports for Copilot cover licensed users, so the Credits report for pay-as-you-go in Copilot Chat has no documented API of its own; the Cost Management API is the nearest programmatic view.

## Open questions

- Whether GA will extend history beyond 30 days or add export scheduling.
- How the report will relate to the Cost Management dashboard once Copilot Studio agents are governed there.

<!-- rationale
risk: Low. Read-only report; the only concern is per-user data visibility.
cost: None. Reporting on metered usage.
impact: Low. Admins and finance only.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; summary; What's changing / record: The roadmap targets General Availability for April 2027. | Found: "targetDate": "April CY2027" | Fix: Keep the roadmap target, but also report the supplied notice's more specific window: MC1069563, updated October 28, 2026, says Worldwide GA begins at the end of April 2027 and completes by the end of May 2027. Cite https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1069563.
- [supported, minor] front matter: defaultState / default: The report is on by default. | Found: This new report will be on by default and will be available in the Microsoft admin center at Reporting > Usage > Microsoft 365 Copilot > Message consumption: | Fix: Retain defaultState on and cite MC1069563 at https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1069563. Attribute the default and automatic rollout to that notice; distinguish its older Message consumption label from Learn's current Credits label.
- [supported, minor] front matter: licensing.notes; Scope / behaviour: The report appears after Copilot Chat pay-as-you-go setup in either admin center. | Found: After you set up pay-as-you-go for Microsoft Copilot Chat, either in the Microsoft 365 admin center or the Power Platform admin center, and enable agent usage in your organization, you see a new report that includes metrics for credits used. | Fix: Include the full prerequisite in licensing.notes and Scope: after setting up Copilot Chat pay-as-you-go in either admin center and enabling agent usage, the report appears. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [unsupported, blocker] front matter: licensing.model; licensing.notes / licensing: The report is included and requires no licence. | Found: Searched: "Copilot Credits report" "free" "license" cost; "Copilot Credits report" "no additional" "report". Opened Credits report and usage reports overview; read MC1069563. No explicit included report entitlement or blanket no-licence statement. | Fix: Set licensing.model to unknown unless an explicit report entitlement is cited. Replace 'No licence for the report' with the narrower attributed fact that MC1069563 says a Microsoft Copilot license is not required for this pay-as-you-go scenario; retain the documented setup and report-role requirements.
- [unsupported, blocker] front matter: cost; Cost and licensing; rationale: cost / cost: There is no cost for the report, justifying cost none. | Found: Searched: "Copilot Credits report" "free" "license" cost; "Copilot Credits report" "no additional" "report". Opened Credits report and usage reports overview. Neither states a separate report price or that reporting is included at no charge. | Fix: Remove 'No cost for the report'. Say the report page states no separate reporting price. Set cost to low for the identified export/admin time and revise the rationale to note that report pricing is not stated, while underlying consumption is metered. The standard requires explicit inclusion evidence for cost none.
- [supported, minor] What's changing; controls[2].governs / behaviour: The Cost Management Consumption dashboard reports usage by spending policy, user, group, agent and service. | Found: The Consumption tab provides reporting experiences for copilot credit usage by:
- Spending policy
- User
- Group
- Agent
- Service | Fix: Add https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending to sources. Describe this as reporting for supported services governed through spending policies, not a confirmed replacement for the dedicated Copilot Chat Credits report. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
- [unsupported, major] What's changing / behaviour: The Cost Management dashboard is newer and is where Microsoft is adding new reporting. | Found: Searched: Copilot Credits report Cost Management dashboard newer new reporting future. Opened managing-credits, monitoring-spending and Cost Management API overview. They describe capabilities and expanding service coverage, not this reporting chronology or direction. | Fix: Remove 'newer' and 'is where Microsoft is adding new reporting'. Replace with the documented current dashboard breakdowns and keep any future relationship with the Credits report as an open question.
- [supported, minor] Why it matters / behaviour: Azure Cost Management can lag usage by up to 24 hours. | Found: Billed amounts are updated daily and sometimes more frequently. It can take 24 hours after usage of a service to show in Microsoft Cost Management. | Fix: Add https://learn.microsoft.com/copilot/manage/view-cost to sources for the pay-as-you-go billing delay. | Source: https://learn.microsoft.com/copilot/manage/view-cost
- [supported, minor] Why it matters / behaviour: Azure Cost Management is a meter-oriented billing view rather than a per-person operational report. | Found: Shows billing-oriented cost data, such as costs by subscription, service, resource, meter, or invoice period. It doesn't show the same user-level or spending-policy context as the Microsoft 365 admin center. | Fix: Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views and use its qualified comparison rather than the absolute 'shows meters, not people'. Note that the article focuses on experiences governed through Microsoft 365 usage-based billing policies. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views
- [supported, minor] Why it matters / availability: This report covers metered Copilot Chat usage rather than general Copilot Studio consumption managed in Power Platform. | Found: Yes. You can set up the pay-as-you-go billing policy in the Microsoft 365 admin center or Power Platform admin center. If you configure pay-as-you-go, and users without a Microsoft Copilot license use metered agents in Copilot Chat, the data appears in the report. | Fix: Replace 'not Copilot Studio agents billed through the Power Platform admin center' with 'not a general report of all Copilot Studio agent consumption; Copilot Chat usage is included even when its billing policy was configured in the Power Platform admin center'. Distinguish workload scope from billing-setup location. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] Risk assessment: Data exposure; rationale: risk / behaviour: The report can expose employee identities alongside per-user consumption. | Found: By default, user-specific information like usernames, display names, groups, and sites is hidden in usage reports. | Fix: Clarify that identifiable details are hidden by default and the personal-data exposure arises when administrators reveal them. Retain the access and concealment review advice. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] Risk assessment: Data exposure; Scope / role: Usage Summary Reports Reader is a relevant report-access role. | Found: Usage Summary Reports Reader (with no user details). | Fix: Qualify both mentions: Usage Summary Reports Reader has no user details. Separate aggregate-report access from access to identifiable per-user consumption when recommending role restrictions. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports
- [supported, minor] Scope / role: Global Reader has usage-report read access. | Found: microsoft.office365.usageReports/allEntities/allProperties/read | Read Office 365 usage reports | Fix: Cite this Global Reader role reference instead of implying that the usage reports overview lists the role. Do not promise detailed per-user visibility: https://learn.microsoft.com/graph/reportroot-authorization limits Global Reader's delegated reports API access to tenant-level data. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#global-reader
- [unsupported, major] Risk assessment: Security & identity; Governance controls: closing paragraph; rationale: risk / behaviour: The report is expressly a read-only surface. | Found: Searched: "Copilot Credits report" "read-only" "makers"; "Copilot Credits report" settings configure disable access conceal names. Opened Credits report, usage reports overview and reporting options; none expressly states the blanket read-only assertion. | Fix: Replace the categorical product assertion with the documented functions: viewing and exporting consumption. The risk assessment can describe these reporting functions and the verified access/privacy boundaries without claiming an expressly documented read-only guarantee.
- [unsupported, blocker] Risk assessment: Change & support / role: Makers influence cost without being able to see this report. | Found: Searched: "Copilot Credits report" "read-only" "makers". Opened Credits report, usage reports overview and Copilot reporting options. Access is role-based; no passage says makers cannot also hold an authorised reporting role. | Fix: Replace 'so makers influence cost without seeing this report' with 'so makers influence cost; makers who lack an authorised reporting role may need administrators to share consumption totals'.
- [contradicted, blocker] controls[1].api; Governance controls table / command: PATCH /beta/admin/reportSettings { displayConcealedNames } is the request for changing report concealment. | Found: PATCH https://graph.microsoft.com/beta/admin/reportSettings
Content-Type: application/json
Content-length: 37

{
  "displayConcealedNames": true
} | Fix: The endpoint exists, but replace the body with valid JSON including its required Boolean: PATCH /beta/admin/reportSettings { "displayConcealedNames": true }. Explain true conceals and false reveals. Link the update method cited here rather than only the resource type, and flag that beta APIs are not supported for production applications. | Source: https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta
- [unsupported, blocker] controls[2].ui; Governance controls table / admin-path: The cited managing-credits page documents Copilot > Cost Management > Consumption. | Found: Searched: "Copilot Credits report" API read-only makers new reporting Azure Cost Management 24 hours. Opened managing-credits and Monitor Copilot Credit spending. The former documents Configuration; only the latter gives the Consumption navigation. | Fix: Keep Copilot > Cost Management > Consumption, but change controls[2].ui.docs, its table link and source to https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending. That page explicitly gives Copilot > Cost Management, then the Consumption tab.
- [contradicted, blocker] controls[2].api; Governance controls table / command: /beta/copilot/costManagement (Cost Management API) is the automation call for the row's consumption breakdowns. | Found: GET /copilot/costManagement/usageReports/userUsageRecords?startDate={startDate}&endDate={endDate} | Fix: Replace the namespace with an actual scoped operation, such as GET /beta/copilot/costManagement/usageReports/userUsageRecords?startDate={startDate}&endDate={endDate}, and cite this method page. State that it returns per-user consumption for exactly one completed UTC day, supports delegated work/school permissions only, is beta, and is not an equivalent for every UI breakdown or the dedicated Credits report. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusagerecord-list
- [supported, minor] Governance controls: closing paragraph / behaviour: The Microsoft 365 Copilot Graph usage reports cover licensed Copilot users rather than the dedicated pay-as-you-go Credits report. | Found: Enabled Users shows the total number of unique users in your organization with Microsoft Copilot licenses over the selected timeframe. | Fix: Cite this usage report article together with https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/reports/resources/copilotreportroot, which identifies the Graph usage resources. Narrow the wording to these Microsoft 365 Copilot adoption/activity APIs, not every Copilot API. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-usage
- [supported, minor] Governance controls: closing paragraph / absence: No report-specific configuration beyond access and name concealment is documented. | Found: Searched: "Copilot Credits report" settings configure disable access conceal names. Opened Credits report, usage reports overview and reporting options. Found reporting roles and concealment controls, but no additional report-specific administrative configuration. | Fix: Replace the absolute 'the only settings are who can see it and whether names are concealed' with 'Microsoft documents report access roles and the tenant-wide concealment setting; no additional report-specific administrative configuration is documented as of November 2026'.
-->
