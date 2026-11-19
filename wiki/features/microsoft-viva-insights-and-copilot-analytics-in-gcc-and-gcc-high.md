---
title: "Microsoft Viva: Insights and Copilot Analytics expand in GCC and GCC High"
slug: "microsoft-viva-insights-and-copilot-analytics-in-gcc-and-gcc-high"
roadmapId: 578868
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Microsoft plans to widen Viva Insights and Copilot Analytics features in GCC and GCC High from November CY2026, with cloud-specific gaps. Analysts, leaders and Insights admins in those tenants are affected; no admin action is stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Copilot plans include manager, leader and advanced analysis for users with an assigned Copilot licence; otherwise advanced analysis is an add-on. GCC High also needs a G5 licence for now. No price is cited here."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-insights","analytics","adoption","m365-copilot","viva-feature-access-management","privacy","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap item 578868"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578868"
    kind: "roadmap"
  - title: "Supported Microsoft 365 environments for Viva Insights features"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/supported-environments"
    kind: "learn"
  - title: "Environment requirements for Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Microsoft Viva - Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Microsoft Viva - Feature access management using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Publish reports"
    url: "https://learn.microsoft.com/viva/insights/advanced/analyst/publish-reports"
    kind: "learn"
  - title: "Customize Viva Insights privacy settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/privacy-settings"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-ability-for-leaders-to-publish-power-bi-reports","microsoft-viva-copilot-dashboard-targeted-audience-surveys","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u"]
controls:
  - governs: "Whether the Viva Insights web app is on for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. The PowerShell policy page says feature access management is not yet available in GCC High."
  - governs: "Which analysts may publish Viva Insights reports"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AnalystReportPublish -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Microsoft says the default, with no policies set, lets all analysts publish. The FeatureId is on the Publish reports page."
  - governs: "Minimum group size for group-level Copilot Dashboard and Agent Dashboard metrics"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "For tenants without a Viva Insights licence; AI Administrator or Viva Insights Administrator. Default 10, minimum five."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-19"
    note: "New briefing: roadmap plan for Viva Insights and Copilot Analytics in GCC and GCC High, compared with Learn's per-cloud table, licensing and controls."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d045086426edb319472d8e59423d6994"
---

## What's changing

The roadmap item states that Microsoft is expanding Viva Insights and Copilot Analytics capabilities in Microsoft 365 Government Community Cloud (GCC, or GCC-M) and GCC High (GCC-H). Eligible users will see updated Insights app features and supported Insights Admin Center experiences. Adoption and Impact experiences will include supported Copilot usage and impact measures, group and app views, trends and filters. Analysts will gain additional Advanced Analysis reports and queries, and supported users will gain sharing, delegation and report-publishing capabilities.

The roadmap lists differences by cloud. GCC only: Adoption by app for Edge and the Microsoft 365 Copilot app. GCC High: Impact supports scope, organization and time-period filters, but not license, job-function or usage-level filters, and creating an analysis excludes Copilot.

Microsoft Learn already has a per-cloud table, and it does not match the roadmap line for line. The "Supported Microsoft 365 environments for Viva Insights features" page lists Adoption by app metrics as No for GCC-M and Partial for GCC-H, Filters as Yes for GCC-M and Partial for GCC-H, and Delegate access to dashboards as No for GCC-M and Partial for GCC-H. It also warns that recently released capabilities might not yet appear in its tables. The Microsoft 365 Copilot service description says a limited set of core metrics is currently available in GCC and lists Copilot Analytics in Viva Insights as not currently available for GCC High. Treat the roadmap as the plan and these pages as the documented state at the time of writing (November 2026).

The roadmap record gives status In development, a target of November CY2026, release phase General Availability and platform Web. The target is a plan, not a delivery date.

## Why it matters

This puts Copilot adoption and impact reporting, and analyst tooling that reads collaboration data, into government tenants. Microsoft's pages describe the Viva Insights web app as on by default, but neither the roadmap item nor the pages read say what happens on arrival in GCC and GCC High, so the default is recorded as unknown. No source says existing behaviour changes if you do nothing.

Expect questions from leaders about which Copilot metrics they can see and from analysts about reports that exist in commercial tenants but not in yours. Settle who may see group-level Copilot data and who may publish reports before the capabilities appear, because the cloud differences mean the same report may behave differently in GCC and GCC High.

## Risk assessment

**Data exposure**

- Adoption and Impact pages show group-level Copilot metrics only for groups that meet the minimum group size, which Microsoft's settings page says is 10 employees by default. Check the threshold in the minimum group size row of the table.
- Analysts get more reports, queries and report publishing. Microsoft's privacy settings page says the end-user opt-out does not apply to Copilot usage data, which stays available at the row level, so opt-out is not a way to hide Copilot usage from analysts.

**Security & identity**

- The Viva Insights web app is controlled by a Viva Feature Access Management policy that the AI Administrator sets; turning it off disables the whole app. Microsoft's PowerShell policy page says feature access management features are not yet available in GCC High, so confirm the control works in your cloud before relying on it.
- GCC High tenants need a Microsoft 365 G5 licence as well as a Microsoft 365 Copilot licence for Copilot Analytics features, until the change Microsoft dates to mid-November through early December 2026.

**Autonomy & actions**

- No change: the roadmap describes reporting and analysis capabilities and states no autonomous actions.

**Change & support**

- Availability differs by cloud and between the roadmap and Learn, so users in GCC and GCC High may report missing features that are planned rather than broken. Microsoft's page tells readers to contact Microsoft support if product behaviour differs from its tables.

## Cost and licensing

Microsoft's environment requirements page says Microsoft Copilot plans include manager, leader and advanced analysis for all employees with an assigned Copilot licence, and describes advanced analysis otherwise as an add-on to the licensing agreement. It says at least 50 assigned Viva Insights licences are required to access advanced analysis and the Microsoft Copilot Dashboard, and that a combination of Copilot and Viva Insights licences can reach that number.

For GCC High, the supported environments page says Copilot Analytics features need a Microsoft 365 G5 licence in addition to a Microsoft 365 Copilot licence, and that after mid-November through early December 2026 only standalone Copilot functionality will be needed. The Copilot Dashboard page says the features the dashboard shows vary with the number of Copilot licences and whether the tenant has a paid Viva Insights licence.

The pages cited name no meter for these features. Indirect cost is admin and analyst time to set thresholds, access policies and publishing rights.

## Scope

The roadmap lists GCC and GCC High, the Web platform, release phase General Availability, status In development and a target of November CY2026. Per-cloud differences are in What's changing. Learn's per-cloud table also shows the Insights Admin center as available in GCC-M and in GCC-H except analyst usage.

The settings page says the web app, Agent Dashboard and related settings are managed by the AI Administrator, that the minimum group size can also be set by a Viva Insights Administrator, and that Microsoft 365 Global Administrators can manage all settings. GCC High tenants need the G5 and Copilot licences described under Cost and licensing.

## Governance guidance

### Before rollout

- Count assigned Microsoft 365 Copilot and Viva Insights licences and compare the total with the 50-licence minimum for advanced analysis and the Copilot Dashboard.
- Confirm in GCC High that the tenant holds Microsoft 365 G5 and Microsoft 365 Copilot licences, and note the mid-November through early December 2026 date after which Microsoft says G5 is no longer needed.
- Review the minimum group size, which is 10 employees by default, and decide whether a higher value suits your leaders and analysts.
- Compare the roadmap's cloud differences with Learn's supported environments table for your cloud and record the gaps.

### At rollout

- Decide who may publish Viva Insights reports and set the Analyst report publish policy if the default of all analysts publishing does not suit you.
- Check whether the Viva Insights web app policy is available in your cloud before you rely on it to switch access on or off.
- Allow up to 24 hours for access policy changes to reach users, as Microsoft's policy page says.

### After rollout

- Re-check Learn's supported environments tables, which Microsoft says may lag new releases, and update your internal notes on what each cloud has.
- Raise any difference between product behaviour and the tables with Microsoft support, as the page advises.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app is on for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. The PowerShell policy page says feature access management is not yet available in GCC High.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which analysts may publish Viva Insights reports</strong><br><small>User</small><br><small class="controls__note">Microsoft says the default, with no policies set, lets all analysts publish. The FeatureId is on the Publish reports page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AnalystReportPublish -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Minimum group size for group-level Copilot Dashboard and Agent Dashboard metrics</strong><br><small>Tenant</small><br><small class="controls__note">For tenants without a Viva Insights licence; AI Administrator or Viva Insights Administrator. Default 10, minimum five.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Microsoft Viva Insights › Copilot Dashboard in Microsoft 365 › Manage minimum group size <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The AI Administrator manages the web app control, and Microsoft 365 Global Administrators can manage all of these settings. Turning the web app control off disables the whole app, which Microsoft's page says includes the Microsoft Copilot Dashboard, Copilot Analytics reports, and advanced analysis and admin tools. Microsoft's settings page says the earlier Copilot Dashboard controls are no longer available.

Microsoft's PowerShell policy page says feature access management features are not yet available in GCC High or DoD, and for GCC points to each app's own documentation. The rows for the web app and Analyst report publish both rely on that mechanism, so confirm availability in your cloud first. For Analyst report publish, Microsoft's page says that by default no policies are set and all analysts can publish. Learn's table shows Publish reports as Partial for GCC-H.

The minimum group size path is the one Microsoft gives for tenants without a Viva Insights licence; a tenant with a Viva Insights licence is pointed to the privacy settings page instead.

## Open questions

- What happens on arrival in GCC and GCC High: are eligible users enabled automatically? Watch Message Center and roadmap item 578868.
- Will Learn's supported environments table be updated to match the roadmap on Adoption by app for Edge and the Microsoft 365 Copilot app in GCC, and on GCC High Impact filters and delegation?
- Does Viva Feature Access Management, including the Viva Insights web app and Analyst report publish policies, work in GCC High, given the PowerShell page's statement that it is not yet available there?
- On what exact date does the Microsoft 365 G5 requirement for GCC High Copilot Analytics end, and which licences then count as standalone Copilot functionality?

<!-- rationale
risk: Medium. Group-level and analyst-level data on Copilot usage and impact reaches government tenants, and existing privacy thresholds and feature access policies mostly cover it but need checking per cloud.
cost: Medium. Access rests on Microsoft 365 Copilot or Viva Insights licences, and GCC High tenants also need a Microsoft 365 G5 licence until the date Microsoft's page gives.
impact: Medium. Analysts, leaders and Insights admins in GCC and GCC High tenants with eligible licences notice most; the roadmap also says eligible users see updated Insights app features.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The web app control can be reached through Microsoft 365 admin center > Viva > Settings > Manage feature access > Create a policy. | Found: Select Create a policy. Name the policy and select the app and feature for which you'd like to set the policy. Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: The path reaches the policy wizard but stops before its control. Use 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting'; specify that the app and feature selections are for the Viva Insights web app, as described at https://learn.microsoft.com/viva/control-access-admin-center. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The analyst publishing control can be reached through Microsoft 365 admin center > Viva > Settings > Manage feature access > Create a policy. | Found: Select Create a policy. Name the policy and select the app and feature for which you'd like to set the policy. Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: The path reaches the policy wizard but stops before its control. Use 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting'; specify that the feature selection is Analyst report publish in Viva Insights. See https://learn.microsoft.com/viva/control-access-admin-center and https://learn.microsoft.com/viva/insights/advanced/analyst/publish-reports. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] Cost and licensing; Governance guidance: Before rollout / licensing: The environment requirements page says at least 50 assigned Viva Insights licences are required for advanced analysis and the Copilot Dashboard. | Found: At least 50 assigned Viva Insights licenses are required to access advanced analysis and the Microsoft Copilot Dashboard. This minimum threshold can be achieved through a combination of licenses. | Fix: Keep the attribution, but append: 'The Copilot Dashboard page differs: it says neither a paid Viva Insights nor Copilot licence is required to view the dashboard, and data processing starts with 50 assigned Viva Insights licences or one assigned Copilot licence including the Viva Insights service plan.' Cite https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard. Replace the first Before rollout bullet with 'Count assigned licences against the environment requirements page for advanced analysis, and check the Copilot Dashboard page separately for dashboard access and feature eligibility.' | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
-->
