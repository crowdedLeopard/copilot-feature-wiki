---
title: "Microsoft Viva: SharePoint agent analytics in Viva Insights"
slug: "microsoft-viva-sharepoint-agent-analytics-on-viva-insights"
roadmapId: 480726
topic: "modern-work"
products: ["SharePoint","Microsoft Viva"]
summary: "Microsoft plans analytics in Viva Insights on how employees use SharePoint agent features. Learn does not yet describe it; the related Agent Dashboard has admin controls. Nothing to do yet beyond checking them."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Agent Dashboard page says the Copilot Agent Dashboard view needs at least 50 Microsoft Copilot licences assigned and agent activity; the Agent 365 Dashboard view adds Agent 365 licensing. Nothing specific to this item is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-insights","sharepoint-agents","sharepoint","analytics","agents","viva-feature-access-management","copilot-control-system"]
sources:
  - title: "Microsoft 365 Roadmap item 480726"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=480726"
    kind: "roadmap"
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Monitor agent usage in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/monitor-agent-usage"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","viva-feature-access-management","sharepoint-sharepoint-agent-usage-statistics-across-all-sharepoint-sites","sharepoint-agent-access-insights-heatmap-for-sharepoint-and-onedrive-sites","microsoft-viva-agent-metrics-for-custom-reporting-in-insights-analyst-workbench"]
controls:
  - governs: "Whether the Agent Dashboard is available, for the tenant, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Feature access management > Agent Dashboard > Add policy"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator; Global Administrators can also manage it. The Agent Dashboard is a public preview. Both this control and the web app control must be on."
  - governs: "Whether the Viva Insights web app that hosts the dashboard is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. Turning the web app off disables the entire app, including the Copilot Dashboard and Copilot Analytics reports, not only the Agent Dashboard."
  - governs: "Minimum group size for group-level Copilot Dashboard and Agent Dashboard metrics"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "Path is for tenants without a Viva Insights licence; with one, a Viva Insights Administrator changes it in Viva Insights privacy settings. Default 10, at least five."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-01-06T00:15:27"
changes:
  - date: "2026-11-25"
    note: "First briefing for this item: Learn does not yet describe it, so the page covers the roadmap text and the Agent Dashboard controls that sit beside it."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: removed an unsupported coverage inference and a content-access claim, qualified Global Administrator access for PIM-enabled tenants, and replaced the organisational data prerequisite."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "531b86c189c8d51c085c6103fc7594a2"
---

## What's changing

Microsoft plans to add analytics in Viva Insights that show how employees used key SharePoint agent features over a chosen period, so organisations can judge the return on those agents. That is the whole of the roadmap description (item 480726). Microsoft Learn does not describe a SharePoint-specific report under this name at the time of writing (November 2026), so what follows about behaviour is the roadmap's description plus the documented Agent Dashboard it sits beside.

The Agent Dashboard in the Viva Insights web app is documented as a public preview. Its page says it covers adoption metrics, aggregated at the user level, for agents built in Microsoft Copilot Studio, SharePoint and Microsoft 365 Agents Toolkit, and its Agent source filter lists Microsoft SharePoint. Microsoft has not said whether this roadmap item is that coverage, an extension of it, or a separate report.

The roadmap record gives the status as In development, with a preview target of February CY2026 and a General Availability target of March CY2026. Both months are before the date of this briefing, and the record was last modified on 6 January 2026, so treat the dates as unconfirmed targets. The record lists Worldwide (Standard Multi-Tenant) and the Web platform. The Agent Dashboard page says it is not currently available for national or regional cloud deployments, including Microsoft's U.S. Government clouds.

## Why it matters

This is reporting on activity that already happens, not a new agent, so the exposure is about who can see usage data about employees and how it is grouped. The Agent Dashboard page says its analysed population includes every employee who has had agent activity.

Microsoft has not stated what happens on arrival for this item, so no source says existing behaviour changes. The sensible move is to learn who can already open the Agent Dashboard and confirm the privacy settings before the report lands, rather than after leaders start quoting figures.

## Risk assessment

**Data exposure**
- The Agent Dashboard page says its population includes all employees who have had agent activity, with metrics aggregated at the user level. Group-level metrics appear for groups at or above the minimum group size, which is 10 by default and can be set no lower than five (row 3 in the controls table).
- The Microsoft 365 admin centre documents a unified exclusion list that hides chosen users from dashboard aggregates; it takes up to three days to take effect after removals.

**Security & identity**
- Access to the Agent Dashboard is automatic for a limited set of users in qualifying tenants: senior leaders identified from the Microsoft Entra ID manager attribute, Global administrators and enabled managers. In PIM-enabled tenants, Global Administrators might not have access and must be added explicitly through the web app access settings. The page also lists Viva Insights Analysts with global partition access and users with delegate access under automatic access using assigned access. Check who falls in that set before assuming the audience is small.
- The page documents that Microsoft 365 Global Administrators can disable automatic access at any time.

**Autonomy & actions**
- No change: the roadmap describes reporting on usage, and no source says it creates or runs agents.

**Change & support**
- The Agent Dashboard is documented as a preview, and the roadmap item is still In development with passed target months. Expect the metrics, names and scope to move, and expect questions from managers who see agent figures without context.
- SharePoint admins already have separate usage tools (the SharePoint Agent Insights report and the Microsoft Purview audit log); Learn does not say how those relate to the planned Viva Insights analytics.

## Cost and licensing

**Licence.** The Agent Dashboard page says the Copilot Agent Dashboard view needs at least 50 Microsoft Copilot licences assigned and agent activity. The Agent 365 Dashboard view needs the same plus Agent 365 licensing; without it the **All agents** toggle does not appear. Treat these as the requirements of the dashboard this item sits beside, not as a statement Microsoft has made about this item.

**Meter.** The dashboard reports Copilot Credit usage for agents used by employees who do not have Microsoft Copilot licences; that is reporting on use, and Microsoft's page does not describe the dashboard as itself charging. A price or meter specific to this feature is not yet published.

**Indirect costs.** Admin time to review access and privacy settings, and analyst time to interpret the figures.

## Scope

**Users and licences.** The roadmap does not name an audience. The Agent Dashboard page says leaders and analysts are the audience, and that at least 50 Microsoft Copilot licences must be assigned for the Copilot Agent Dashboard view.

**Roles.** The page for managing these settings shows AI Administrator for the Agent Dashboard and web app controls, and says Microsoft 365 Global Administrators can also manage all of them. Setting the minimum group size is shown for AI Administrator and Viva Insights Administrator.

**Clouds and platforms.** The record lists Worldwide (Standard Multi-Tenant) and Web; General Availability is the release phase. Agent Dashboard availability in national and regional clouds is described above.

**Prerequisites.** The Agent Dashboard uses Microsoft Entra ID organisational data by default; uploading an organisational data file is an alternative, not a prerequisite. Whether this item needs anything more is not stated.

## Governance guidance

### Before rollout
- Confirm who can reach the Agent Dashboard today, using the Agent Dashboard availability and Viva Insights web app controls in the controls table.
- Check the minimum group size (row 3) and decide whether the default of 10 suits SharePoint agent reporting.
- Ask SharePoint site owners and your adoption team which SharePoint agents are in use, so the figures can be read against something known.

### At rollout
- Watch the Microsoft 365 roadmap item and Message center for a post on this feature, and re-read the Agent Dashboard page when status moves from In development.
- Review the Agent Dashboard policy and the web app policy if the report reaches users you did not intend.

### After rollout
- Review who holds dashboard access, including the automatic access given to senior leaders and enabled managers, and to Global administrators (in PIM-enabled tenants, Global Administrators might not have access and must be added explicitly through the web app access settings).
- Compare the report with the SharePoint Agent Insights report and Purview audit records if a figure looks wrong.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator; Global Administrators can also manage it. The Agent Dashboard is a public preview. Both this control and the web app control must be on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Feature access management › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app that hosts the dashboard is available</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. Turning the web app off disables the entire app, including the Copilot Dashboard and Copilot Analytics reports, not only the Agent Dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Minimum group size for group-level Copilot Dashboard and Agent Dashboard metrics</strong><br><small>Tenant</small><br><small class="controls__note">Path is for tenants without a Viva Insights licence; with one, a Viva Insights Administrator changes it in Viva Insights privacy settings. Default 10, at least five.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Microsoft Viva Insights › Copilot Dashboard in Microsoft 365 › Manage minimum group size <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Agent Dashboard control and the Viva Insights web app control work together: the page says both must be enabled to reach the Agent Dashboard, and turning the web app off disables the whole app, not only this dashboard. Policies set through the Add-VivaModuleFeaturePolicy cmdlet can apply to the tenant, groups or users.

The settings page also documents a unified exclusion list, managed with Viva Feature Access Management, and a policy that must be turned on for the list to apply. The settings page links to the Viva Feature Access Management documentation for it, and it is not a table row.

The roadmap item does not say it is governed by these controls; they are the documented controls for the Agent Dashboard, which covers agents built in SharePoint. Re-check when Microsoft publishes a page for this item.

## Open questions

- Is this roadmap item part of the Agent Dashboard, or a separate SharePoint-specific report, and which SharePoint agent features does it measure? Watch the roadmap item and the Agent Dashboard page.
- Does it carry the same licensing requirements as the Agent Dashboard (at least 50 Microsoft Copilot licences), or a different licence or meter? No price or meter for this item is published.
- Is it on by default for users who already have Agent Dashboard access, and will the existing Agent Dashboard and web app policies govern it? Watch Message center.
- The record's target months (February and March CY2026) have passed while the status is still In development; what is the current timeline?

<!-- rationale
risk: Low. The roadmap describes reporting on employee use of SharePoint agent features, and the related Agent Dashboard has access, group-size and exclusion controls; the default for this item is not stated, so this rates on today's behaviour continuing.
cost: Low. No price or meter specific to this feature is published; the Agent Dashboard page requires at least 50 Microsoft Copilot licences, so the cost the sources show is admin time.
impact: Low. Leaders, analysts and admins who use the dashboard notice it; Microsoft describes the Agent Dashboard as giving leaders and analysts insights into agent adoption.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; Open questions; rationale: cost / licensing: The Agent Dashboard page requires at least 50 assigned Microsoft Copilot licences for the Copilot Agent Dashboard view. | Found: Copilot Agent Dashboard: Your organization must have at least 50 Microsoft Copilot licenses assigned and have agent activity. | Fix: Add to the Licence paragraph: 'Microsoft documentation differs: the Copilot Dashboard licensing table also lists Agent Dashboard as included with at least 50 Viva Insights licences, whereas the Agent Dashboard page requires at least 50 Microsoft Copilot licences.' Cite https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard#feature-availability-based-on-licenses and add it to sources. Keep these as dashboard requirements, not confirmed requirements for this roadmap item. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard
- [supported, minor] controls[0].api; Governance controls table / command: Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone creates a tenant-wide policy disabling Agent Dashboard. | Found: Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureEnabled <Boolean> -ModuleId <String> -Name <String> ... [-Everyone] ... $false: The feature is not enabled by the policy. | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources for the cmdlet syntax. The existing settings page supplies ModuleId VivaInsights, FeatureId AgentDashboard and the tenant-wide disable values; keep the call unchanged. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] controls[1].api; Governance controls table / command: Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId "Viva Insights web app" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone creates a tenant-wide policy disabling the Viva Insights web app. | Found: The Everyone switch specifies that the policy applies to all users in the organization. ... The IsFeatureEnabled parameter specifies whether or not the feature is enabled by the policy. | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources for the cmdlet syntax. The existing settings page supplies ModuleId VivaInsights, FeatureId Viva Insights web app and the tenant-wide disable values; keep the call unchanged. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] front matter: licensing.model / licensing: The licensing model is included under existing product licensing, with no published requirement specific to this roadmap item. | Found: Microsoft Copilot plans also include manager, leader, and advanced analysis for all employees who have an assigned Copilot license. | Fix: Keep licensing.model as included under the standard's product-level licensing rule. Add https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements to sources and prepend to licensing.notes: 'Microsoft Copilot plans include manager, leader and advanced analysis for employees assigned a Copilot licence.' Retain the distinction between those product-level entitlements and this item's unpublished specific requirements. | Source: https://learn.microsoft.com/viva/insights/advanced/setup-maint/environment-requirements
-->
