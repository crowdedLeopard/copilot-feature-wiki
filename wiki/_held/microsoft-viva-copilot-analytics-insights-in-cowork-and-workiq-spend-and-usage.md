---
title: "Viva Insights: Consumption Dashboard shows Copilot Credit spend for Cowork and the Work IQ API"
slug: "microsoft-viva-copilot-analytics-insights-in-cowork-and-workiq-spend-and-usage"
roadmapId: 566302
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "A Consumption Dashboard in Viva Insights shows Copilot Credit use for Cowork and the Work IQ API by group. It is on by default for eligible managers, Insights analysts and Global Administrators; decide who should see team spend."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Microsoft has not published which licence gives access to the Consumption Dashboard; its page names roles, not licences. The usage it reports is metered in Copilot Credits through usage-based billing set up in Cost Management."
audiences: ["m365-admin","finops","service-owner","change-adoption"]
tags: ["viva-insights","copilot-credits","cowork","work-iq","usage-based-billing","spending-policies","cost-management","finops","analytics","viva-feature-access-management"]
sources:
  - title: "Microsoft 365 Roadmap 566302"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566302"
    kind: "roadmap"
  - title: "How to use the Consumption Dashboard in Insights"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard"
    kind: "learn"
  - title: "Configure manager settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Set up usage-based billing for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Usage-based billing: What you see in the Microsoft 365 admin center vs. your Azure bill"
    url: "https://learn.microsoft.com/copilot/implement/usage-based-billing-compare-dashboard-views"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
videos: []
related: ["m365-copilot-insights-copilot-analytics-cowork-adoption-and-impact","spending-policies","copilot-credits","m365-copilot-work-iq-apis-pay-as-you-go-usage","microsoft-viva-access-management-for-copilot-analytics"]
controls:
  - governs: "Whether managers can see team-scoped data in the Consumption Dashboard"
    scope: "group"
    ui:
      surface: "Viva Insights Admin portal"
      path: "Settings > Manager settings > Grant managers scoped access to Consumption insights"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Viva Insights Administrator or AI admin. Requires Grant managers scoped access to Copilot insights. Applies to all managers, an Entra ID group or a .csv list."
  - governs: "Minimum team size a manager needs to see team insights"
    scope: "tenant"
    ui:
      surface: "Viva Insights Admin portal"
      path: "Settings > Manager settings > Minimum team size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Cannot be lower than five; counts the manager plus direct and indirect reports."
  - governs: "Whether the Viva Insights web app, which hosts the Consumption Dashboard, is available to users and groups"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. Turning the app off disables the whole app, including the Copilot Dashboard and Copilot Analytics reports."
  - governs: "Tenant-wide switch for the Consumption Dashboard alone"
    scope: "tenant"
    ui: null
    api: null
    note: "Viva Feature Access Management lists no Consumption Dashboard feature at the time of writing (November 2026)."
  - governs: "Monthly Copilot Credit limit of a spending policy covering Cowork and the Work IQ API"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Get Started > Set the monthly spending limit for this policy"
      docs: "https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "UI path activates the default policy (Global or Billing administrator). The request body sets periodLimit and perUserLimit. Beta API."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-27"
    note: "New briefing: Consumption Dashboard in Viva Insights for Cowork and Work IQ API credit use, with manager access settings and spending policy controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 70
  confirmed: 67
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "10eb3a0c9714ef5bd3a20f6eb0a3c32d"
---

## What's changing

Viva Insights adds a **Consumption Dashboard** that shows how many Copilot Credits are used, by whom and through which service, at group or team level. For this release the data covers Copilot Cowork and the Work IQ API only: Microsoft's page says "Consumption data is currently available only for Copilot Cowork and the Work IQ API."

The **Microsoft 365 services** page shows active users, total Copilot Credit usage and session counts, usage trends by group, organisation or job function, a usage-intensity breakdown (for example the top 1 percent of users), and a breakdown by spending policy that shows which policies are nearing their credit limit. A **Cowork** page breaks Cowork credit use down by task type. Managers see their own group; Insights Analysts with global partition access and Microsoft 365 Global Administrators see the whole organisation. The same dashboard has a **GitHub** page, which Microsoft marks as public preview and which is not part of this roadmap item.

The roadmap item states the dashboard is enabled by default, and the Learn page says "By default, consumption insights are enabled for all managers." The Manager settings page, however, presents **Grant managers scoped access to Consumption insights** as an option to select, and only alongside access to Copilot insights. The roadmap says managers need at least 5 direct reports; Learn counts team size as the manager plus direct and indirect reports, with a minimum team size of at least five.

The roadmap item is **Launched** (General Availability), with a target of June CY2026, for the Worldwide cloud on the web. Microsoft's Copilot release notes list the dashboard under August 11, 2026, and add that a Cost Management query template is available to Insights analysts and Global administrators in Advanced Insights.

## Why it matters

This puts AI spend in front of line managers: a manager with a large enough team can see how many credits their group uses and which policies are close to their limit. That helps budget owners, but it also exposes usage patterns per team, and with Identification turned on Microsoft says the dashboards can surface named employees. If nobody acts, eligible managers, global-partition analysts and Global Administrators have access by default.

The figures are not the bill. Microsoft says the dashboard's credit information "is for reference only" and points to the Microsoft 365 admin center for official charges, so finance teams should reconcile against Cost Management rather than the dashboard.

## Risk assessment

**Data exposure**
- Managers see team-scoped credit use, usage segments and spending-policy proximity for their group; analysts and Global Administrators see the whole organisation. Manager settings, the minimum team size and the unified exclusion list limit this.
- With Identification turned on, outputs can name employees rather than show aggregates; check that setting before widening access.

**Security & identity**
- Manager eligibility is counted from Microsoft Entra data by default, or from uploaded organisational (HR) data, so check manager mappings before relying on team scope.
- Holders of dashboard access cannot currently delegate it to others, according to Microsoft's page.

**Autonomy & actions**
- No change: the dashboard reports usage and takes no action on spending policies or users.

**Change & support**
- Expect questions where dashboard totals differ from Cost Management, and where Cowork task counts differ from sessions; Microsoft notes several scheduled tasks can map to one billed session.

## Cost and licensing

- **Licence to view:** Not yet published. The [Consumption Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard) names roles (Insights Analysts with global partition access, Managers, Microsoft 365 Global Administrators) and no licence. The Manager settings page says a Viva Insights service plan is applied automatically when a user is assigned a Viva Insights licence or a Microsoft Copilot licence.
- **Meter:** the dashboard reports Copilot Credits, the currency for usage-based billing. Cowork is listed as "Copilot license required" among the services managed by usage-based billing, alongside the Work IQ API for custom apps and agents. Charges come from using those services, not from the dashboard.
- **Cap:** spending policies set in Cost Management limit credits per policy and per user each month (controls table, spending policy row). Microsoft says that when users hit a limited policy budget they lose access to agents and services until credits reset on the first of the month, and that a policy uses prepaid credits before pay-as-you-go.
- **Indirect:** admin time to set manager access and the exclusion list, and to reconcile dashboard figures with Cost Management.

## Scope

- **Who sees it:** managers (scoped to their group) whose team meets the **Minimum team size**, Insights Analysts with global partition access (whole organisation, plus queries with consumption metrics) and Microsoft 365 Global Administrators (whole organisation, no queries, per the Learn page). It is not available to users who only have automatic access to the Copilot and Agent Dashboard, or to analysts in non-global partitions.
- **Services covered:** Copilot Cowork and the Work IQ API.
- **Prerequisite:** the roadmap item states the tenant must have usage-based billing set up through Cost Management in the Microsoft 365 admin center for users to use Cowork or the Work IQ API.
- **Who configures it:** Viva Insights Administrator or AI admin for Manager settings; Global administrator or Billing administrator to set up usage-based billing.
- **Out of scope:** leader access to tenant-wide data, per the roadmap item.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant), web.

## Governance guidance

### Before rollout
- Decide whether managers should see team-scoped Copilot Credit spend, and set **Grant managers scoped access to Consumption insights** in Manager settings to match (Viva Insights Administrator or AI admin).
- Check the **Minimum team size** in Manager settings and raise it above five if team-level spend for small teams would point to individuals.
- Confirm usage-based billing is active under Microsoft 365 admin center > Copilot > Cost Management, since the roadmap says Cowork and the Work IQ API need it.

### At rollout
- Tell managers who gain access that the figures are for reference only and that official charges are in Cost Management.
- Restrict the Viva Insights web app for any group that should see no Copilot Analytics at all, knowing that this switches off the whole app for them.
- Brief the Billing administrator on which spending policies the dashboard reports against.

### After rollout
- Review the spending-policy breakdown monthly and adjust policy and per-user limits in Cost Management where users are near their limit.
- Reconcile dashboard totals with Cost Management before using them in budget reports.
- Watch the Learn page for leader access to tenant-wide data, which this release leaves out.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether managers can see team-scoped data in the Consumption Dashboard</strong><br><small>Group</small><br><small class="controls__note">Viva Insights Administrator or AI admin. Requires Grant managers scoped access to Copilot insights. Applies to all managers, an Entra ID group or a .csv list.</small></td><td data-label="Admin UI"><strong>Viva Insights Admin portal</strong><br>Settings › Manager settings › Grant managers scoped access to Consumption insights <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum team size a manager needs to see team insights</strong><br><small>Tenant</small><br><small class="controls__note">Cannot be lower than five; counts the manager plus direct and indirect reports.</small></td><td data-label="Admin UI"><strong>Viva Insights Admin portal</strong><br>Settings › Manager settings › Minimum team size <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Consumption Dashboard, is available to users and groups</strong><br><small>User</small><br><small class="controls__note">AI Administrator. Turning the app off disables the whole app, including the Copilot Dashboard and Copilot Analytics reports.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the Consumption Dashboard alone</strong><br><small>Tenant</small><br><small class="controls__note">Viva Feature Access Management lists no Consumption Dashboard feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credit limit of a spending policy covering Cowork and the Work IQ API</strong><br><small>Group</small><br><small class="controls__note">UI path activates the default policy (Global or Billing administrator). The request body sets periodLimit and perUserLimit. Beta API.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Get Started › Set the monthly spending limit for this policy <a href="https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Manager access to consumption insights depends on manager access to Copilot insights: the Consumption option cannot be granted without it. Manager settings changes apply after one hour.
- Analysts get consumption insights through global partition access. To remove it for a specific analyst, Microsoft says to remove them from the global partition, which also removes all other global-partition experiences ([Consumption Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard)).
- The unified exclusion list (AI Administrator) hides chosen employees from the Copilot Dashboard, Agent Dashboard and Consumption Dashboard aggregates; changes take up to three days ([settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard)).
- Microsoft 365 Global Administrators can manage all of these settings. Turning off the Viva Insights web app removes the Copilot Dashboard, Copilot Analytics reports and advanced analysis too, so it is a blunt instrument for this dashboard.

## Open questions

- Which rule decides manager eligibility: the roadmap's "at least 5 direct reports" or Learn's minimum team size counting direct and indirect reports? Watch the Consumption Dashboard page.
- Are Global Administrators able to run consumption queries? The release notes add a Cost Management query template for them in Advanced Insights, while the dashboard page says they cannot run queries with consumption metrics.
- Is manager access on by default, as the roadmap and dashboard page say, or does it need **Grant managers scoped access to Consumption insights** selected, as the Manager settings steps suggest?
- Which licence, if any, is needed to view the Consumption Dashboard?
- Will Microsoft add a separate switch for the Consumption Dashboard, and when will leader access to tenant-wide data follow? Watch Message center and the Copilot release notes.

<!-- rationale
risk: Medium. It is on by default for managers whose team meets the minimum team size, Insights Analysts with global partition access and Global Administrators, and shows team-level Copilot Credit spend; Manager settings and the exclusion list govern who sees what.
cost: Low. Microsoft has not published a licence specific to the dashboard. The Copilot Credits it reports are billed for Cowork and the Work IQ API, not for viewing, so the cost the sources show is admin time deciding who sees the data.
impact: Medium. Managers, Insights analysts and Global Administrators get a new dashboard; Microsoft's page says consumption insights are currently available only to those roles.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Cost and licensing: Meter; rationale: cost / cost: Charges come from using Cowork and the Work IQ API, not from viewing the dashboard. | Found: Searched: 'Consumption Dashboard Viva Insights reports takes no action spending policies users dashboard viewing charge'; opened ai-cost-dashboard, environment-requirements, assign-licenses, usage-based-billing-overview-copilot-credits and usage-based-billing-compare-dashboard-views. | Fix: Replace 'Charges come from using those services, not from the dashboard' with 'Cowork and Work IQ API usage is metered in Copilot Credits.' Replace 'The Copilot Credits it reports are billed for Cowork and the Work IQ API, not for viewing' in the cost rationale with 'Cowork and Work IQ API usage is billed in Copilot Credits.' Do not assert that dashboard viewing is uncharged.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The dashboard takes no action on spending policies or users. | Found: Searched: 'Consumption Dashboard Viva Insights reports takes no action spending policies users dashboard viewing charge'; opened ai-cost-dashboard and usage-based-billing-overview-copilot-credits. The dashboard documentation describes monitoring, but does not state this blanket negative. | Fix: Replace 'No change: the dashboard reports usage and takes no action on spending policies or users' with 'The dashboard reports usage and highlights users and spending policies nearing their limits.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / absence: Microsoft has not published a licence specific to viewing the Consumption Dashboard, so its licensing model is unknown. | Found: Microsoft Copilot plans also include manager, leader, and advanced analysis for all employees who have an assigned Copilot license. | Fix: Set licensing.model to included. Replace the licensing notes and Licence to view bullet with: 'Viva Insights manager and advanced analysis experiences require applicable Viva Insights licensing; Microsoft Copilot plans include these experiences for employees assigned a Copilot licence. Microsoft has not published a separate licence specific to the Consumption Dashboard.' Cite https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements. Keep the separate statement about metered service usage. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
- [supported, minor] controls[2].api; Governance controls table / command: Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId "Viva Insights web app" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone disables the web app tenant-wide. | Found: Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureEnabled <Boolean> -ModuleId <String> -Name <String> ... [-Everyone] ... $false: The feature is not enabled by the policy. | Fix: Keep the call unchanged and add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources; this reference supplies the full command and parameter syntax, while the existing cited settings page supplies the feature values. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] controls[4].ui; Governance controls table / admin-path: The default policy's monthly spending limit is configured through Microsoft 365 admin center > Copilot > Cost Management > Get Started > Set the monthly spending limit for this policy. | Found: A side-panel with the title Activate the default spending policy for your organization opens. ... In the Set the monthly spending limit for this policy section, select one of the options. ... Limit monthly spending | Fix: Use 'Copilot > Cost Management > Get Started > Activate the default spending policy for your organization > Set the monthly spending limit > Limit monthly spending'. Keep the note that this configures the default policy. The omitted panel and section are headings, not missing navigation choices. | Source: https://learn.microsoft.com/copilot/implement/usage-based-billing-copilot-credits-setup
- [contradicted, minor] Risk assessment: Data exposure; Governance controls table / consistency: The page tells administrators to check Identification but provides no corresponding control row. | Found: With Identification turned on, outputs can name employees rather than show aggregates; check that setting before widening access. The controls table contains manager access, minimum team size, web-app access, a separate-dashboard switch gap, and spending limits. | Fix: Remove '; check that setting before widening access' from the Risk assessment bullet. Keep the verified description of Identification; do not add an unverified control row.
-->
