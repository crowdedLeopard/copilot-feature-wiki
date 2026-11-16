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
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 42
  unconfirmed: 6
  contradicted: 4
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: licensing.model / licensing: The report's licensing model is included and no licence is needed for the report. | Found: Searched: Copilot Credits report free no additional cost license report; "Copilot Credits report" "free" "license"; "Copilot Credits report" "no additional". Opened Microsoft Copilot Credits report and usage reports overview; read MC1069563. | Fix: Set licensing.model to unknown unless an explicit report entitlement is sourced. Replace the broad no-licence assertion with the narrower fact that MC1069563 says a Microsoft Copilot license is not required for this pay-as-you-go scenario; Learn lists report-viewing roles and pay-as-you-go setup.
- [unsupported, blocker] front matter: cost; Cost and licensing; rationale: cost / cost: There is no cost for the report, warranting a cost rating of none. | Found: Searched: Copilot Credits report free no additional cost license report; "Copilot Credits report" "free" "license"; "Copilot Credits report" "no additional". Opened Microsoft Copilot Credits report and usage reports overview; neither states a report price or included entitlement. | Fix: Remove 'No cost for the report' and the unsupported no-cost rationale. State that the feature page names no separate reporting price, rather than asserting no charge. Use cost low for the page's identified export/admin work, noting that separate report pricing is not stated and underlying usage is metered.
- [contradicted, blocker] controls[1].api / command: PATCH /beta/admin/reportSettings { displayConcealedNames } is the request for changing report concealment. | Found: PATCH https://graph.microsoft.com/beta/admin/reportSettings
Content-Type: application/json
Content-length: 37

{
  "displayConcealedNames": true
} | Fix: The endpoint exists, but replace the incomplete body with valid JSON, for example PATCH /beta/admin/reportSettings { "displayConcealedNames": true }, explaining true conceals and false reveals. Link the update method at https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta and flag beta limitations. | Source: https://learn.microsoft.com/graph/api/adminreportsettings-update?view=graph-rest-beta
- [contradicted, blocker] controls[2].ui / admin-path: The cited managing-credits page documents Copilot > Cost Management > Consumption. | Found: To review consumption, see Monitor Copilot Credit spending. | Fix: Keep the navigation path, which is documented on the linked monitoring article, but change ui.docs and its source to https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending. The currently cited page gives Configuration workflows, not the Consumption path. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits
- [unsupported, blocker] controls[2].api / command: /beta/copilot/costManagement (Cost Management API) is the automation call for the row's consumption breakdowns. | Found: Searched: "Copilot Credits report" "API". Opened Cost Management API overview and List costManagementUserUsageRecords: root is a namespace; reporting operations require child paths and time selectors. | Fix: Replace the namespace with a real, explicitly scoped request, for example GET /beta/copilot/costManagement/usageReports/userUsageRecords?startDate={startDate}&endDate={endDate}. Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementuserusagerecord-list; explain its completed-UTC-day, delegated-permission and beta restrictions, and that it is not every UI breakdown or the dedicated Credits report.
- [supported, minor] What's changing; controls[2].governs / behaviour: The Cost Management Consumption dashboard provides breakdowns by spending policy, user, group, agent and service. | Found: The Consumption tab provides reporting experiences for copilot credit usage by:
- Spending policy
- User
- Group
- Agent
- Service | Fix: Add https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending to sources for these breakdowns. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-monitor-spending
- [unsupported, major] What's changing / behaviour: The newer Cost Management dashboard is where Microsoft is adding new reporting. | Found: Searched: "Copilot Credits report" "API". Opened managing-credits and monitoring-spending articles and Cost Management API overview; no statement of reporting direction or chronology. | Fix: Remove the assertion about Microsoft's reporting direction and 'newer', or replace it with the documented current breakdowns and link to Monitor Copilot Credit spending.
- [supported, minor] Why it matters / behaviour: Azure Cost Management can lag usage by up to 24 hours. | Found: Billed amounts are updated daily and sometimes more frequently. It can take 24 hours after usage of a service to show in Microsoft Cost Management. | Fix: Cite https://learn.microsoft.com/copilot/manage/view-cost for the Copilot pay-as-you-go billing delay. | Source: https://learn.microsoft.com/copilot/manage/view-cost
- [supported, minor] Why it matters / behaviour: Azure Cost Management is a meter-oriented billing view rather than the report's per-person operational view. | Found: Shows billing-oriented cost data, such as costs by subscription, service, resource, meter, or invoice period. It doesn't show the same user-level or spending-policy context as the Microsoft 365 admin center. | Fix: Cite https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views and use its qualified comparison, noting that article focuses on experiences governed through the newer usage-based billing policies. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views
- [supported, minor] Risk assessment: Data exposure; rationale: risk / behaviour: The report can expose employee identities alongside their consumption. | Found: By default, user-specific information like usernames, display names, groups, and sites is hidden in usage reports. | Fix: Clarify that the privacy exposure arises when identifiable details are enabled: names are hidden by default. Keep the recommendation to review concealment and authorised access. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-credits
- [supported, minor] Risk assessment: Data exposure / role: Usage Summary Reports Reader is a report-access role relevant to the access review. | Found: Usage Summary Reports Reader (with no user details). | Fix: Qualify the access-review advice and Scope role list: Usage Summary Reports Reader has no user details. Distinguish reviewing aggregate-report access from reviewing access to identifiable per-user consumption. | Source: https://learn.microsoft.com/microsoft-365/admin/activity-reports/activity-reports
- [supported, minor] Scope / role: Global Reader has usage-report read access. | Found: microsoft.office365.usageReports/allEntities/allProperties/read | Read Office 365 usage reports | Fix: Cite the Global Reader role reference rather than implying the usage overview lists it. Distinguish general read access from guaranteed per-user details; the Graph reporting authorisation article limits Global Reader to tenant-level data. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#global-reader
- [unsupported, blocker] Risk assessment: Change & support / role: Makers influence cost without seeing this report. | Found: Searched: "Copilot Credits report" "read-only" "makers". Opened Credits report, usage reports overview and Copilot reporting options. Report access is role-based; no passage says makers cannot also hold a reporting role or see this report. | Fix: Replace 'without seeing this report' with 'and makers who lack an authorised reporting role may need administrators to share the consumption totals'.
- [unsupported, major] Risk assessment: Security & identity; Governance controls; rationale: risk / behaviour: The report is an explicitly read-only surface. | Found: Searched: "Copilot Credits report" "read-only" "makers". Opened Microsoft Copilot Credits report, usage reports overview and Copilot reporting options. These describe viewing, filtering and exporting but do not explicitly state a read-only guarantee. | Fix: Use the documented description 'a consumption-reporting surface with viewing, filtering and export functions' rather than an absolute read-only guarantee. Keep the low-risk judgement framed as the wiki's assessment.
- [contradicted, blocker] What's changing: rollout timing / consistency: The briefing gives only the April roadmap target and omits the supplied notice's full General Availability rollout window. | Found: Page: 'GA now targeted for April 2027.' MC1069563: 'We will begin rolling out in end of April 2027 (previously early January) and expect to complete by end of May 2027 (previously end of January).' | Fix: Retain the roadmap's April CY2027 target and add that MC1069563, updated 28 October 2026, schedules Worldwide GA rollout from end of April 2027 through end of May 2027. Cite the supplied Message Center URL, report public preview as available now, and state that Microsoft requires no pre-rollout admin action.
- [contradicted, blocker] Open questions: Cost Management relationship / behaviour: Copilot Studio agent governance in the Microsoft 365 Cost Management dashboard is still a future development. | Found: To opt in, create a Microsoft 365 admin center resource-based spending policy. Until then, your existing Power Platform admin center configuration remains in effect. No separate migration step is required. | Fix: Remove the 'once Copilot Studio agents are governed there' premise. State that resource-based spending policies already provide an opt-in route for eligible agents/environments and cite this article. The remaining open question can ask whether the dedicated Copilot Chat Credits report will be integrated, without asserting a future availability condition. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-studio-costs
- [supported, minor] Governance controls: Graph usage reports / applicability: The Microsoft 365 Copilot Graph usage reports cover licensed users rather than unlicensed Copilot Chat usage. | Found: This API only returns usage data for users who have a Microsoft 365 Copilot license. Unlicensed Copilot Chat usage data isn't available through Microsoft Graph reports APIs. | Fix: Cite this API reference for the distinction, and keep it scoped to Copilot usage reports rather than all Microsoft Graph APIs, since Cost Management has separate credit-consumption APIs. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/reports/copilotreportroot-getmicrosoft365copilotusageuserdetail
-->
