---
title: "Microsoft 365 Copilot: Agent 365 Business Analytics for AI spend, usage and value"
slug: "m365-copilot-agent-365-business-analytics-experience"
roadmapId: 577548
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans one Business Analytics app showing AI cost, usage, value and forecasts for leaders. Admins decide who sees which data; Learn documents it as a Frontier preview and states no licence or price."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn introduction lists at least 50 assigned Copilot licences and spending policies as prerequisites and names no price for the app. The app reports both Microsoft and GitHub AI credits separately."
audiences: ["finops","m365-admin","service-owner","change-adoption"]
tags: ["agent-365","analytics","finops","cost-management","spending-policies","copilot-credits","viva-insights","m365-copilot","viva-feature-access-management","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577548"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577548"
    kind: "roadmap"
  - title: "Introduction to Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/introduction"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Cost & forecast page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/cost-forecast"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Overview page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/overview"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics GitHub Copilot page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/services/github-copilot"
    kind: "learn"
  - title: "Understand AI assisted hours and AI value (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/reference/ai-value"
    kind: "learn"
  - title: "Manage access in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    kind: "learn"
  - title: "Introduction to the Admin section in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/introduction"
    kind: "learn"
  - title: "How to make configurations in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    kind: "learn"
  - title: "How to export data from Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/advanced/export"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
videos: []
related: ["copilot-credits","microsoft-viva-copilot-analytics-agent-dashboard","m365-admin-center-copilot-credits-usage-report","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Who can open Business Analytics, export, see named users, and whose data"
    scope: "user"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Access management"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    api: null
    note: "Permission sets, partitions and access policies. Global, AI or Viva Insights administrator. Preview documentation."
  - governs: "Whether the Viva Insights web app is on, for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "General control: Microsoft has not confirmed it switches Business Analytics off. Not available in GCC High or DoD per Microsoft."
  - governs: "Spending limits and billing for Copilot Credits reported by the app"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Get Started"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "GET /beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Existing control that the app reports on, not a control over the app. Creating policies needs Global or Billing administrator. Beta API."
  - governs: "Whether AI value metrics are displayed, and the assumptions behind them"
    scope: "tenant"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Configurations > Metric calculators > Cowork assisted hours and value > Edit calculator > Value calculator > Value metrics"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    api: null
    note: "Cowork value metrics toggle; off by default. Viva Insights admin, or Global admin for Copilot value metrics."
  - governs: "Minimum group size below which aggregated insights are hidden"
    scope: "tenant"
    ui:
      surface: "Business Analytics (Agent 365)"
      path: "Manage > Configurations > Privacy > Minimum group size"
      docs: "https://learn.microsoft.com/a365-business-analytics/manage/configurations"
    api: null
    note: "Value of at least 5. Does not apply to user-level insights that are not aggregated."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "First briefing: roadmap item 577548, with the Frontier preview documentation for access, value metrics, privacy settings and the spend controls it reports on."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 8 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction after verification: consumption-insights access, Copilot Credits billing and GitHub credits wording, three control paths, and two unsupported checklist items removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 93 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 90
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "c0750bc43a0ed67715c19c8916e71600"
---

## What's changing

The roadmap item describes Agent 365 Business Analytics as one place that brings AI spend, usage and value together, so leaders can see where AI investment is going, what value it delivers and where to invest next. It lets them explore cost across services, models, agents and users, see the business use cases AI supports, and forecast future spend. The item is listed as In development, with a preview target of November CY2026 and a general availability target of December CY2026, on the web, for Worldwide, GCC, GCC High and DoD. These dates are Microsoft's targets.

Microsoft Learn already documents the app as a Frontier preview (the program that gives customers early access to Microsoft AI features), and says capabilities might change. It describes a dedicated app for business decision makers and general managers with an Overview page, Use cases, Cost & forecast, Users & groups and pages for each AI service. It combines licensed Microsoft 365 Copilot with usage-based services such as Copilot Cowork, agents and GitHub Copilot. What follows about behaviour is the preview documentation, not a final design.

The Cost & forecast page covers usage-based billing and says Microsoft Copilot user subscription licence costs are not included; the Overview page shows Microsoft 365 Copilot cost as "Included in license". It offers base and growth forecasts and what-if scenarios for a spend cap or model mix. A reporting budget target creates no spending policy, and a scenario changes only the forecast comparison. AI value is an estimate, documented for Cowork, and Microsoft says it does not represent realised savings.

## Why it matters

This gives leaders a cost-per-user, per-group and per-model view of AI spend, and it puts estimated AI value next to it. Finance and business owners will ask for it before administrators have decided who may see named users, who may export, and which assumptions feed the value figures. Those are administrator decisions, and the preview documentation says some people get access automatically.

Microsoft has not stated how the app arrives at general availability, so treat arrival as unconfirmed and plan on leaders in your tenant asking for access. The app reports spend; Copilot Credits limits are still set in Copilot Credits spending policies in the Microsoft 365 admin center. Showing a forecast or a budget target in the app enforces nothing.

## Risk assessment

**Data exposure**
- The preview documentation gives tenant-level access to the top three layers of the organisation, access to their own organisation for managers of teams that meet the minimum group size of 10, and access to Microsoft 365 global admins. Consumption insights are on by default for GMs; for business leaders, an admin must turn them on.
- The Identification setting in a permission set decides whether users see named individuals or de-identified data. The Users tab on Cost & forecast lists people who have an assigned usage limit, when the viewer's role permits.
- Export is enabled by default and lists CSV download and an MCP connection among its options. Including user identifiers is off by default and depends on permission.

**Security & identity**
- A user's effective access is the combination of all their assignments, and one assignment never removes access another grants. Check overlapping policies and security-group membership.

**Autonomy & actions**
- The documented pages describe reporting and what-if analysis. Budget targets and scenarios do not change spending policies, limits or access.

**Change & support**
- The app shows usage-based data only when spending policies are set up and billing is turned on in the Microsoft 365 admin center, and some sections appear only when limit data exists. Expect "why is my page empty" questions.
- Changes to metric calculators apply tenant-wide and to dependent metrics and historical trends, after the affected data, query or report refreshes; previously completed queries and existing Interactive insights sessions are not recalculated.
- AI value is an estimate that depends on administrator-configurable time and hourly-rate assumptions. Brief leaders before they quote it as savings.

## Cost and licensing

Microsoft has not published a licence or price for the app. The Learn introduction lists its prerequisites: at least 50 Copilot licences assigned, spending policies for usage-based services, access set up, and billing turned on in the Microsoft 365 admin center. It names no separate licence or charge for the app itself. Plan on that gap being open until general availability.

The app reports spend. For Copilot Credits, charges go to the subscription selected in the billing method; the app reports GitHub AI credits separately. When credits run out for that subscription, usage automatically continues on a pay-as-you-go basis (Set up usage-based billing for Copilot Credits). Copilot Credits spending limits are set in Copilot Credits spending policies in the Microsoft 365 admin center (controls table, row 3), not in the app. Cost and credit information on the GitHub Copilot page is for reference only; Microsoft points to GitHub.com for official GitHub billing and budget setting. Microsoft 365 Copilot per-user licence cost is not part of the Cost & forecast figures. Indirect costs are admin time, plus finance time to agree the value assumptions. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the web platform. Learn documents the app as a Frontier preview, and the roadmap lists both Preview and General Availability phases. Microsoft's Viva feature access management page says its access controls are not available in GCC High or DoD, which sits awkwardly with the roadmap's cloud list. Microsoft has not said how the app's controls behave in those clouds.

Audience and access, as the preview documentation states: leaders in the top three layers get tenant-level access, managers of teams that meet the minimum group size of 10 get their own organisation, and global admins have access by default. Insights analysts, Insights admins and other leaders or GMs need a Global admin to assign access. Business leaders see cost insights only after an admin turns consumption insights on for their role. Global administrators, AI administrators and Viva Insights administrators manage access policies. Existing Viva Insights role assignments and minimum group size carry over.

## Governance guidance

### Before rollout
- Check that the tenant has at least 50 Copilot licences assigned, the stated prerequisite.
- Decide who should see cost and named-user data, then review the Chief Officer, Group Manager and Analyst permission sets for export and identification (controls table, row 1).
- Confirm Copilot Credits spending policies exist and billing is turned on, or the usage-based pages will be empty (row 3).
- Ask your Microsoft contact whether the Viva Insights web app control in row 2 also switches Business Analytics off before you rely on it.

### At rollout
- Set the minimum group size at least as high as your privacy policy requires (row 5).
- Keep the Cowork Value metrics toggle off until finance agrees the time and hourly-rate assumptions (row 4); Learn says it is off by default.
- Tell leaders that forecasts are estimates and that a reporting budget target enforces no limit.

### After rollout
- Compare the Spending limits section with the Copilot Credits spending policies in row 3, and fix those limits there, not in the app.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can open Business Analytics, export, see named users, and whose data</strong><br><small>User</small><br><small class="controls__note">Permission sets, partitions and access policies. Global, AI or Viva Insights administrator. Preview documentation.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Access management <a href="https://learn.microsoft.com/a365-business-analytics/manage/access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app is on, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it switches Business Analytics off. Not available in GCC High or DoD per Microsoft.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Spending limits and billing for Copilot Credits reported by the app</strong><br><small>Tenant</small><br><small class="controls__note">Existing control that the app reports on, not a control over the app. Creating policies needs Global or Billing administrator. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Get Started <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether AI value metrics are displayed, and the assumptions behind them</strong><br><small>Tenant</small><br><small class="controls__note">Cowork value metrics toggle; off by default. Viva Insights admin, or Global admin for Copilot value metrics.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Configurations › Metric calculators › Cowork assisted hours and value › Edit calculator › Value calculator › Value metrics <a href="https://learn.microsoft.com/a365-business-analytics/manage/configurations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum group size below which aggregated insights are hidden</strong><br><small>Tenant</small><br><small class="controls__note">Value of at least 5. Does not apply to user-level insights that are not aggregated.</small></td><td data-label="Admin UI"><strong>Business Analytics (Agent 365)</strong><br>Manage › Configurations › Privacy › Minimum group size <a href="https://learn.microsoft.com/a365-business-analytics/manage/configurations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Business Analytics does not enforce spend. Copilot Credits limits come from Copilot Credits spending policies in the Microsoft 365 admin center, and the app's budget target is a reporting reference only. Row 3 sets those Copilot Credits limits; it does not control GitHub spending.

Global administrators, AI administrators and Viva Insights administrators can manage access policies. Calculator edits need Viva Insights admins for Cowork value metrics; Copilot value metrics need both Viva Insights admin and Chief officer roles, or Global admin. Row 2 is the general Viva feature access control. Microsoft's Business Analytics admin page points to it for turning the app on or off, but no page read names a Business Analytics feature ID, so confirm it with `Get-VivaModuleFeature -ModuleId VivaInsights` before use. The same page lists the exclusion list under it.

Microsoft Learn documents no PowerShell or API for Business Analytics access policies, calculators or privacy settings at the time of writing (November 2026). The Cost Management API in row 3 covers spending policies, not the app.

## Open questions

- What licence or price will apply to the app at general availability, beyond the 50-licence prerequisite? Watch the Learn introduction and the roadmap item.
- How does the app arrive for tenants at general availability: do leaders get access automatically as the preview documents, and is that on or off by default? Watch Message center.
- Will the app be available in GCC, GCC High and DoD as the roadmap lists, given the Viva access-control page says its controls are unavailable in GCC High and DoD?
- Does the Viva Insights web app control switch off Business Analytics, and does it have its own feature ID?
- Will Microsoft document automation (PowerShell or Graph) for Business Analytics access, calculators and privacy settings?

<!-- rationale
risk: Medium. Leaders and managers can see AI cost and usage by user, group and model, and can export it, under access rules that an admin has to review. Scenarios and budget targets do not change live policies.
cost: Low. The only cost the sources show is admin time. Microsoft has not published a licence or price for the app; the Learn page lists at least 50 assigned Copilot licences as a prerequisite.
impact: Medium. Executives, general managers and managers of larger teams are the audience.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model; summary; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because Microsoft has not published a licence requirement for the app. | Found: Prerequisites Tenant must have at least 50 Copilot licenses assigned. | Fix: Set licensing.model to 'included' for the published Copilot-licence prerequisite. Replace broad claims that no licence is published, including the summary's 'states no licence or price', with 'The Frontier preview requires a tenant with at least 50 assigned Copilot licences; the introduction does not specify a separate app price.' Retain the open question about general availability terms. The schema distinguishes an unpublished separate price from a documented licence prerequisite. | Source: https://learn.microsoft.com/a365-business-analytics/introduction
- [contradicted, blocker] controls[1].ui; Governance controls: row 2 / admin-path: Settings > Viva > Settings > Manage feature access > Create a policy reaches the Viva Insights web app on/off control. | Found: Name the policy and select the app and feature for which you'd like to set the policy. Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: Extend the UI path and rendered row to 'Settings > Viva > Settings > Manage feature access > Create a policy > app and feature > Access setting > On or Off'. In the note, specify selecting the Viva Insights web app feature. The present path stops before the feature choice and the control; these steps are documented at https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [contradicted, blocker] controls[2].api; Governance controls: row 3 / command: GET /beta/copilot/costManagement/spendingPolicies is automation that sets the spending limits and billing described by the row. | Found: List spendingPolicies | GET /copilot/costManagement/spendingPolicies | Get a list of spending policies. Update spendingPolicy | PATCH /copilot/costManagement/spendingPolicies/{id} | Update a spending policy. | Fix: Replace the call with 'PATCH /beta/copilot/costManagement/spendingPolicies/{id}' and its docs link with https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update; cite that reference. Add to the note: 'For existing policies, request-body periodLimit and perUserLimit set limits; billingMethods changes funding. Adding pay-as-you-go funding requires a complete billingInstrument; replacing an already-pay-as-you-go instrument is not supported.' The update reference and spendingPolicy resource reference document these properties and restrictions. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance controls: row 3 / admin-path: Copilot > Cost Management > Get Started is the documented entry to configure Copilot Credits spending limits and billing. | Found: go to Copilot and then the Cost Management node. To unlock AI experiences enabled by usage-based billing, select Get Started. | Fix: Extend the path to 'Copilot > Cost Management > Get Started > Activate the default spending policy for your organization > Set the monthly spending limit for this policy > Limit monthly spending'. The omitted panel/section headings and final option are on the cited setup page. Keep billing-method configuration described in the note rather than implying Get Started itself sets a limit. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [supported, minor] controls[3].note; Governance controls / role: Copilot value metrics require Global admin or both Viva Insights admin and Chief officer, as the body clarifies. | Found: Only users who have both Viva Insights admins and Chief officer roles, or who are global admins, can configure Copilot value metrics. | Fix: Replace the ambiguous role sentence in controls[3].note and the rendered row with 'Viva Insights admins configure Cowork value metrics; Copilot value metrics require both Viva Insights admin and Chief officer roles, or Global admin.' The body already states the qualification correctly. | Source: https://learn.microsoft.com/a365-business-analytics/manage/configurations
-->
