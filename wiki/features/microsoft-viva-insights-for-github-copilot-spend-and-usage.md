---
title: "Viva Insights: GitHub Copilot spend and usage page in the Consumption Dashboard"
slug: "microsoft-viva-insights-for-github-copilot-spend-and-usage"
roadmapId: 566470
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "The Consumption Dashboard in the Viva Insights web app adds a GitHub page showing GitHub Copilot credit use and activity to managers, global-partition analysts and Global Administrators. Decide which managers see it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Viva Insights requires applicable Viva Insights licensing; Microsoft Copilot plans also include manager, leader and advanced analysis for all employees with an assigned Copilot licence. A requirement specific to the Consumption Dashboard's GitHub page is not published. GitHub AI Credits are billed by GitHub, and the dashboard's credit figures are for reference only."
audiences: ["m365-admin","finops","compliance","service-owner"]
tags: ["viva-insights","github","usage-reports","finops","privacy","reporting-roles","viva-feature-access-management","admin-controls"]
sources:
  - title: "How to use the Consumption Dashboard in Insights"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard"
    kind: "learn"
  - title: "Configure manager settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Create a custom GitHub query"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/github-query"
    kind: "learn"
  - title: "Copilot Analytics introduction"
    url: "https://learn.microsoft.com/viva/insights/copilot-analytics-introduction"
    kind: "learn"
  - title: "Customize Viva Insights privacy settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/privacy-settings"
    kind: "learn"
  - title: "Roles in Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/user-roles"
    kind: "learn"
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy (ExchangePowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Microsoft Viva: Insights for GitHub Copilot spend and usage"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566470"
    kind: "roadmap"
videos: []
related: ["microsoft-viva-access-management-for-copilot-analytics","viva-feature-access-management","m365-copilot-insights-copilot-analytics-cowork-adoption-and-impact","m365-copilot-agent-365-business-analytics-experience","microsoft-viva-copilot-analytics-agent-dashboard"]
controls:
  - governs: "Whether managers can see team-scoped consumption insights, including the GitHub page"
    scope: "tenant"
    ui:
      surface: "Viva Insights Admin portal"
      path: "Settings > Manager settings > Grant managers scoped access to Consumption insights"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Viva Insights Administrator or AI admin. Requires Grant managers scoped access to Copilot insights. Learn says consumption insights are enabled for all managers by default."
  - governs: "Minimum team size a manager needs before seeing any insights"
    scope: "tenant"
    ui:
      surface: "Viva Insights Admin portal"
      path: "Settings > Manager settings > Minimum team size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Lowest allowed value is five; team size counts the manager and direct and indirect reports."
  - governs: "Whether the GitHub page preview is enabled"
    scope: "tenant"
    ui:
      surface: "Viva Insights web app"
      path: "Privacy settings"
      docs: "https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard"
    api: null
    note: "Learn names only the Privacy settings page, not the option's label. Privacy settings is an Insights Administrator page."
  - governs: "Which users and groups can open the Viva Insights web app that hosts the Consumption Dashboard"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "AI Administrator. Changes take effect in 24 hours."
  - governs: "Whether the Viva Insights web app is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Turns off the whole app, including the Copilot Dashboard, Copilot Analytics reports and analyst tools. Select the Viva Insights app and Viva Insights web app feature; choose On or Off, then Everyone or Specific people and groups."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-07-23T23:27:16"
changes:
  - date: "2026-11-27"
    note: "New briefing: GitHub Copilot spend and usage page in the Viva Insights Consumption Dashboard, with manager and privacy settings."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 71 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: GitHub page access now notes the preview must be enabled in Privacy settings; added the admin centre path for turning off the Viva Insights web app; licensing set to the Viva Insights licence; removed three checklist items with no table row."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 74
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "313db1f3ecb479971ca3ac256ac64a67"
---

## What's changing

Viva Insights adds GitHub Copilot spend and usage to the **Consumption Dashboard**, the Viva Insights web app page that shows how Copilot Credits and GitHub AI Credits are consumed. The dashboard's **GitHub** tab shows credits used for GitHub Copilot, active GitHub Copilot users, how credit use is spread across employee groups and usage segments, and feature-level detail: chat requests by mode, code completions suggested and accepted, and breakdowns by model, language and chat mode.

The roadmap item states that the insights are for managers with at least 5 direct reports (scoped access), Global analysts and Microsoft Global administrators, and that the dashboard is enabled by default. Microsoft Learn gives the audience as Insights Analysts with global partition access (whole organisation), managers (their group) and Microsoft 365 Global Administrators (whole organisation), and says consumption insights are enabled for all managers by default. Learn counts a manager's team as the manager plus direct and indirect reports, against a **Minimum team size** of at least five, which is wider than the roadmap's "5 direct reports".

The sources differ on status. The roadmap item is **Launched**, with General Availability and Preview listed as release phases and a target of July CY2026. The Learn page marks the GitHub page as a public preview and says that to enable it you go to **Privacy settings** in the Viva Insights web app. Learn also notes that GitHub data before July 10, 2026 might be under-reported, and that on days 28 to 31 of a month the GitHub page shows the previous 28 days rather than the full month to date.

## Why it matters

This puts developer-level AI activity in front of line managers. Consumption insights are enabled for managers by default, but Learn says the GitHub public preview must be enabled in Privacy settings. Confirm preview enablement as well as manager eligibility before assuming managers can see GitHub figures. Expect questions from engineering leads and works councils about whether the figures are used to judge individuals, and decide before then which managers should see them.

For FinOps, it is a second view of GitHub Copilot spend next to GitHub's own billing. Microsoft says the dashboard's credit figures are for reference only and that official GitHub AI credit charges are on GitHub.com, so budgets and chargeback still need GitHub's numbers.

## Risk assessment

**Data exposure**
- Consumption insights are enabled for managers by default, but Learn says the GitHub public preview must be enabled in Privacy settings. Confirm preview enablement as well as manager eligibility before assuming managers can see GitHub figures. Learn says metrics are not shown for groups smaller than the minimum group size; the **Grant managers scoped access to Consumption insights** setting and the minimum team size decide which managers see anything.
- Identification can move the dashboard from anonymised metrics to named employees. Check whether it is on before managers start using the GitHub page.
- Users can be kept out of the dashboard's aggregates through the unified exclusion list, managed with Viva Feature Access Management (VFAM); the exclusion list only takes effect once its policy is turned on.

**Security & identity**
- Microsoft Learn does not describe how GitHub Copilot activity is matched to Microsoft Entra users for this page. Confirm the matching before relying on group-level figures.

**Autonomy & actions**
- The documented GitHub page provides usage and credit-consumption insights.

**Change & support**
- The roadmap and Learn disagree on whether the GitHub page is generally available or a preview switched on in Privacy settings; confirm which applies in your tenant before announcing it. Expect helpdesk questions from managers who see the Copilot Dashboard but not the Consumption Dashboard: Learn says users whose only access is to the Copilot and Agent Dashboard do not get it.
- Learn says you cannot currently delegate access to the Consumption Dashboard, so leaders who rely on delegates for the Copilot Dashboard will not be able to share this page.

## Cost and licensing

Viva Insights requires applicable Viva Insights licensing; Microsoft Copilot plans also include manager, leader and advanced analysis for all employees with an assigned Copilot licence ([Environment requirements for Viva Insights](https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements)). A requirement specific to the Consumption Dashboard's GitHub page is not published at the time of writing (November 2026). Microsoft Learn names roles as the way into the Consumption Dashboard; the [Copilot Analytics introduction](https://learn.microsoft.com/viva/insights/copilot-analytics-introduction) gives access by role only.

The spend shown is GitHub AI Credits used for GitHub Copilot. The [Consumption Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard) says its credit usage information is for reference only and that official billing and detailed charges for GitHub AI credits are on GitHub.com.

The [GitHub query page](https://learn.microsoft.com/viva/insights/advanced/analyst/github-query) says GitHub Copilot usage is not tied to a Microsoft 365 Copilot licence, so people measured can include employees without one. Indirect cost is admin time on manager settings, privacy settings and communication to engineering teams.

## Scope

- **Who sees it**: Insights Analysts with global partition access and Microsoft 365 Global Administrators (scoped to the whole organisation), and managers (scoped to their group). Analysts in non-global partitions do not get consumption insights.
- **Managers**: those whose team (the manager plus direct and indirect reports) meets the **Minimum team size**, which must be at least five. The roadmap item says at least 5 direct reports.
- **Who configures it**: **Manager settings** applies to the Viva Insights Administrator and AI admin; Learn says all dashboard settings can also be managed by Microsoft 365 Global Administrators. The **Privacy settings** page is listed for the Insights Administrator.
- **Clouds**: Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platform**: Web, in the Viva Insights web app.
- **Status**: Launched on the roadmap, target July CY2026; the GitHub page is marked preview on Microsoft Learn.

## Governance guidance

### Before rollout
- Decide with engineering and HR leads whether people managers should see team-level GitHub Copilot spend, and record the decision before the page is used.
- Check the **Grant managers scoped access to Consumption insights** option in Viva Insights **Manager settings**, and clear it if managers should not see consumption data.
- Confirm the **Minimum team size** in Manager settings is high enough for small development teams to stay out of scope.

### At rollout
- Open **Privacy settings** in the Viva Insights web app as an Insights Administrator and see whether the GitHub page preview is offered and enabled in your tenant.
- Review which users and groups can open the Viva Insights web app in the Microsoft 365 admin center, because removing a user removes the whole app, not just this page.
- Tell managers that GitHub figures are for reference only and that GitHub.com holds the billed amounts.

### After rollout
- Reconcile the dashboard's GitHub AI Credits figures against GitHub's billing each month before using them for chargeback, allowing for the 28-day window at month end.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether managers can see team-scoped consumption insights, including the GitHub page</strong><br><small>Tenant</small><br><small class="controls__note">Viva Insights Administrator or AI admin. Requires Grant managers scoped access to Copilot insights. Learn says consumption insights are enabled for all managers by default.</small></td><td data-label="Admin UI"><strong>Viva Insights Admin portal</strong><br>Settings › Manager settings › Grant managers scoped access to Consumption insights <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum team size a manager needs before seeing any insights</strong><br><small>Tenant</small><br><small class="controls__note">Lowest allowed value is five; team size counts the manager and direct and indirect reports.</small></td><td data-label="Admin UI"><strong>Viva Insights Admin portal</strong><br>Settings › Manager settings › Minimum team size <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the GitHub page preview is enabled</strong><br><small>Tenant</small><br><small class="controls__note">Learn names only the Privacy settings page, not the option's label. Privacy settings is an Insights Administrator page.</small></td><td data-label="Admin UI"><strong>Viva Insights web app</strong><br>Privacy settings <a href="https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups can open the Viva Insights web app that hosts the Consumption Dashboard</strong><br><small>User</small><br><small class="controls__note">AI Administrator. Changes take effect in 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Turns off the whole app, including the Copilot Dashboard, Copilot Analytics reports and analyst tools. Select the Viva Insights app and Viva Insights web app feature; choose On or Off, then Everyone or Specific people and groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls act at different layers. Turning off the Viva Insights web app removes the Consumption Dashboard along with the Copilot Dashboard, Copilot Analytics reports and the analyst tools, so it is a blunt tool for this page. Managers' access to consumption insights is a separate option in Manager settings, and Learn says you cannot grant it without also granting access to Copilot insights. Manager settings changes apply after one hour; web app access changes take 24 hours.

Analysts' access follows the global partition: Learn's way to remove an analyst's consumption insights is to remove them from the global partition, which also removes all other global-partition experiences ([Partitions](https://learn.microsoft.com/viva/insights/advanced/admin/partitions)). The unified exclusion list for the Consumption Dashboard is managed through VFAM, as the [settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard) describes; it applies only once its policy is turned on.

Microsoft Learn documents no PowerShell or API equivalent for Manager settings or for the GitHub page preview switch at the time of writing (November 2026), and the Privacy settings page does not name the GitHub option.

## Open questions

- Is the GitHub page generally available, as the roadmap's Launched status suggests, or still a preview that an Insights Administrator must enable in Privacy settings? Watch the [Consumption Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/ai-cost-dashboard).
- How is GitHub Copilot activity matched to Microsoft Entra users and the manager hierarchy, and what happens to GitHub users with no matching account?
- Which employees form the measured population for the GitHub page: every licensed GitHub Copilot user, or only those also in the Viva Insights measured population?
- Will a licence requirement specific to the Consumption Dashboard's GitHub page be published beyond the applicable Viva Insights licensing, and will delegate access be added for the dashboard?
- Does the roadmap's "5 direct reports" rule replace the minimum team size that counts indirect reports, or is it shorthand for it?

<!-- rationale
risk: Medium. Consumption insights are enabled for managers by default, but Learn says the GitHub public preview must be enabled in Privacy settings; once it is, managers get team-scoped figures on developers' GitHub Copilot use and spend, inside existing Viva Insights privacy thresholds and access settings that an administrator needs to review.
cost: Low. The dashboard reports GitHub AI Credits that GitHub bills; the Viva Insights web app needs applicable Viva Insights licensing, and no licence requirement specific to the GitHub page is published, so the known cost of this change is admin time on access settings.
impact: Medium. Enabled people managers, Insights Analysts with global partition access and Global Administrators notice the new page; developers are the people measured.
-->
