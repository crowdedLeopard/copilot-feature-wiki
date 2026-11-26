---
title: "Microsoft Copilot Dashboard: weekly and monthly trendlines for adoption and impact metrics"
slug: "microsoft-viva-copilot-dashboard-trendline-additions"
roadmapId: 485727
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Viva"]
summary: "Copilot Dashboard viewers get weekly or monthly trendlines for adoption and impact metrics, by group. The trendlines show adoption and impact metrics over time. Nothing to configure; tell dashboard users."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Teams and Surface Devices","Web"]
targetDate: "May CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn lists week-level and month-level trendlines as included for tenants with at least 50 assigned Copilot licences. The table lists trendlines as not included for the 1-to-49 Copilot-licence tier, but includes them where the tenant has at least 50 assigned Viva Insights licences. Dashboard viewers need no paid Viva Insights or Copilot licence."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-insights","m365-copilot","adoption","analytics","viva-feature-access-management","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 485727"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=485727"
    kind: "roadmap"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","microsoft-viva-copilot-analytics-all-licensed-user-page-copilot-dashboard","m365-copilot-export-copilot-metrics-in-the-copilot-dashboard","microsoft-viva-access-management-for-copilot-analytics","m365-copilot-intelligent-summaries-in-copilot-dashboard"]
controls:
  - governs: "Whether the Viva Insights web app, including the Copilot Dashboard, is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > Viva Insights > Viva Insights web app > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "In the policy, choose the Viva Insights app and the Viva Insights web app feature. Turning it off disables the whole app. The settings page names the AI Administrator; the VFAM table names Global admin."
  - governs: "Which individual users and Microsoft Entra ID groups can open the Copilot Dashboard"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "AI Administrator. The AI Administrator does not get dashboard access automatically. Changes take effect in 24 hours."
  - governs: "Minimum group size below which group-level metrics and trendlines are hidden"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "For tenants without a Viva Insights licence. Default 10, minimum five. Tenants with a Viva Insights licence set it in the Viva Insights privacy settings instead."
  - governs: "Separate switch for the weekly and monthly trendlines"
    scope: "tenant"
    ui: null
    api: null
    note: "The trendlines follow the dashboard's access controls above."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2025-05-02T22:00:26"
changes:
  - date: "2026-11-26"
    note: "New briefing: weekly and monthly trendlines in the Copilot Dashboard, with the licence threshold and the access and minimum group size controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 71 statements contradicted, 6 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after the independent check: narrowed the Explore more, licence-tier, Organization filter and minimum group size statements, fixed the feature access policy path, removed unsupported claims about data and access, and set the action to prepare."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 70
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "07bce66553281368016999c20fbc974d"
---

## What's changing

The Microsoft Copilot Dashboard in Viva Insights adds trendlines that show adoption and impact metrics over time. Viewers can switch between weekly and monthly views and compare groups. The roadmap item says viewers can see Adoption metrics by month or by week for specific groups. They can also look more closely at Impact metrics such as Copilot assisted hours, actions taken and feature-specific dimensions.

Microsoft Learn already documents this behaviour on the [Copilot Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard). On the Adoption and Impact pages, **Adoption by group** and the impact graph show the previous six months. On the [Impact page](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard#impact), **Explore more** on any card opens graphs illustrating six-month trends. On each of these, the **Data aggregated by** dropdown shows trends on a **Monthly** or **Weekly** basis. The impact graph's **Metric** selector offers **Copilot actions taken**, **Copilot assisted hours**, **Copilot assisted value** and **Satisfaction rate**. **View by** breaks a trend down by group, organisation, job function or licence type.

The trendlines are part of the dashboard, which is part of the Viva Insights web app. Learn says the web app is on by default. It lists week-level and month-level trendlines among the features of tenants with at least 50 Copilot or Viva Insights licences. No admin action is needed for those tenants' dashboard users to see them.

The roadmap record gives the status as In development, with a target of May CY2025, for General Availability on the Worldwide (Standard Multi-Tenant) cloud. The Learn page describes the trendlines as available now. This page reports both and does not choose between them.

## Why it matters

The trendlines show adoption and impact metrics over time. The main effect is on how adoption is read and reported. Week-by-week figures for individual groups make it easier to spot teams with low Copilot use. The same detail can also put pressure on those teams or on managers. The roadmap item links the feature to "better licensing decisions", so expect licence-reallocation requests based on these trends.

If nobody acts, the trendlines appear for whoever can already open the dashboard. The minimum group size and the dashboard's access list still decide who sees what. Those are the two settings worth checking now.

## Risk assessment

**Data exposure**
- Group breakdowns follow the minimum group size: Learn states that metrics aren't shown for groups smaller than it. The default is 10 employees and the lowest allowed value is five. Weekly figures for small groups are more revealing than six-month totals, so check the setting before relying on the default.
- The analysed population is every employee with an assigned Copilot licence. The exclusion list in the dashboard settings can remove named people or Microsoft Entra ID groups from the aggregates.

**Security & identity**
- In qualifying tenants, access is given automatically to senior leaders, chosen from the manager attribute in Microsoft Entra ID. Administrators can also add users and groups.

**Autonomy & actions**
- The documented trendline interactions are selecting metrics, filters and weekly or monthly aggregation.

**Change & support**
- Expect questions about why weekly and monthly values differ from the Microsoft 365 admin center usage reports. Learn says both use the same underlying data set but have different prerequisites and time periods.
- Tenants with 1 to 49 Copilot licences and no Viva Insights licences do not get week-level and month-level trendlines. Their dashboard users will not see the views this change describes.

## Cost and licensing

**Licence.** The [Copilot Dashboard page](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard) says the dashboard is available to any customer with a Microsoft 365 or Office 365 business or enterprise subscription and an active Exchange Online account. Its licence table lists **Week-level and month-level trendlines** as included for tenants with at least 50 assigned Copilot licences, or at least 50 Viva Insights licences. The table lists trendlines as not included for the 1-to-49 Copilot-licence tier, but includes them where the tenant has at least 50 assigned Viva Insights licences. The page also says dashboard users don't need a paid Viva Insights licence or a Microsoft Copilot licence.

**Meter.** Microsoft documents no meter or per-use charge for the dashboard or its trendlines at the time of writing (November 2026).

**Indirect costs.** Mainly the time to explain the new views to dashboard users and to agree how weekly group figures will be used.

## Scope

- **Who sees it:** people with access to the Copilot Dashboard in the Viva Insights web app. The analysed population is employees with an assigned Copilot licence.
- **Licence threshold:** tenants with at least 50 Copilot licences or at least 50 Viva Insights licences, according to the Learn licence table.
- **Roles:** the dashboard settings page lists the AI Administrator for access to the Viva Insights web app. It lists the AI Administrator and Viva Insights Administrator for the minimum group size, and says Global Administrators can manage all settings.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Platforms:** the roadmap record lists Android, Desktop, iOS, Mac, Teams and Surface Devices, and Web.
- **Group filters:** the [Organization filter](https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard#adoption) uses Microsoft Entra ID Department by default; uploaded Organization or Microsoft_Organization attributes replace that source. The Job function breakdown depends on uploaded organisational data (FunctionType or Microsoft_JobDiscipline).

## Governance guidance

### Before rollout
- Check the minimum group size in tenants without a Viva Insights licence (Microsoft 365 admin center > Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size). Decide whether 10 is enough when weekly figures are shown per group. For tenants with a Viva Insights licence, the Viva Insights Administrator uses the [Viva Insights privacy settings](https://learn.microsoft.com/viva/insights/advanced/setup-maint/privacy-settings) instead.
- Review who can open the Copilot Dashboard under **Manage access settings for Microsoft Copilot Dashboard**. Weekly group trends go to everyone on that list.
- Confirm the tenant has at least 50 Copilot or Viva Insights licences, the threshold Learn gives for week-level and month-level trendlines.

### At rollout
- Tell dashboard users that the **Data aggregated by** dropdown switches between **Monthly** and **Weekly**, and that impact trends cover the previous six months.
- Agree with HR and works-council contacts how group-level weekly adoption trends may be used in reviews or licence reallocation.

### After rollout
- Compare dashboard trends with the Microsoft 365 admin center Copilot usage reports before quoting either in licensing decisions. Their time periods differ.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, including the Copilot Dashboard, is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">In the policy, choose the Viva Insights app and the Viva Insights web app feature. Turning it off disables the whole app. The settings page names the AI Administrator; the VFAM table names Global admin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › Viva Insights › Viva Insights web app › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which individual users and Microsoft Entra ID groups can open the Copilot Dashboard</strong><br><small>User</small><br><small class="controls__note">AI Administrator. The AI Administrator does not get dashboard access automatically. Changes take effect in 24 hours.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum group size below which group-level metrics and trendlines are hidden</strong><br><small>Tenant</small><br><small class="controls__note">For tenants without a Viva Insights licence. Default 10, minimum five. Tenants with a Viva Insights licence set it in the Viva Insights privacy settings instead.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Microsoft Viva Insights › Copilot Dashboard in Microsoft 365 › Manage minimum group size <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the weekly and monthly trendlines</strong><br><small>Tenant</small><br><small class="controls__note">The trendlines follow the dashboard's access controls above.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that controls the weekly and monthly trendlines on their own at the time of writing (November 2026). They follow the dashboard's access and privacy settings. Access works in two layers. The Viva Insights web app feature access policy turns the whole app on or off, including the Copilot Dashboard. The access list adds or removes individual users and groups. Changes to either take effect within 24 hours. The settings page also documents turning off automatic access for senior leaders, and a unified exclusion list that keeps named employees out of the aggregates (see [Manage settings for the Microsoft Copilot Dashboard](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard)). Sources differ on the role for the web app policy. The settings page says it applies to the AI Administrator. The Viva Feature Access Management table lists Global admin.

## Open questions

- The roadmap item still shows In development with a May CY2025 target, but Learn documents the trendlines as available. Will Microsoft update the roadmap status? Watch the roadmap item.
- Which "feature-specific dimensions" of Impact metrics does the roadmap mean, beyond the Copilot actions taken, Copilot assisted hours, Copilot assisted value and Satisfaction rate metrics that Learn lists? Watch the Copilot Dashboard Learn page.
- Does the minimum group size apply to each weekly data point in a group's trendline, or only to the group as a whole? Watch the Copilot Dashboard Learn page.

<!-- rationale
risk: Low. The trendlines show adoption and impact metrics over time, and groups smaller than the minimum group size (10 employees by default) are not shown.
cost: Low. Microsoft documents no meter for the dashboard or its trendlines at the time of writing (November 2026). The table lists trendlines as not included for the 1-to-49 Copilot-licence tier, but includes them where the tenant has at least 50 assigned Viva Insights licences.
impact: Low. Only people with access to the Copilot Dashboard notice: senior leaders given access automatically in qualifying tenants, plus anyone an administrator or delegate adds.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure; Scope: Who sees it / behaviour: The dashboard's analysed population is employees with an assigned Copilot licence. | Found: For tenants with at least 1 Microsoft 365 Copilot license, the dashboard includes both Microsoft Copilot adoption insights and insights for Copilot Chat by users without a Copilot license, including advanced organizational filters. | Fix: Replace the analysed-population sentence in both Risk assessment and Scope with: 'The Microsoft Copilot filter shows insights only for employees who have a Copilot licence.' The cited dashboard page states that filter's scope explicitly; the dashboard also reports on unlicensed Copilot Chat users. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: Before rollout / admin-path: Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard reaches the individual-and-group access settings. | Found: On this page, go to the **Set up and management** tab. ... Under **Microsoft Copilot Dashboard**, select **Manage access settings for Microsoft Copilot Dashboard**. ... At the top, select **Users**. ... At the bottom, select **Add**. | Fix: For adding users, extend controls[1].ui.path to 'Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add'. In its note, say: 'For groups, select Groups instead of Users. To revoke access, select Users or Groups, select the entries, then Remove selected users or Remove selected groups.' | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
-->
