---
title: "Viva Insights: Agent 365 Dashboard view in the Copilot Analytics Agent Dashboard"
slug: "microsoft-viva-copilot-analytics-agent-365-dashboard-in-insights"
roadmapId: 567667
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "The Agent Dashboard in Viva Insights gains an Agent 365 view of agent adoption and sessions across Microsoft 365 apps. It needs Agent 365 licensing and Learn says it is on by default; admins decide who sees it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Learn lists Agent 365 licensing plus at least 50 Microsoft Copilot licences and agent activity as requirements for the Agent 365 view. Agent 365 is licensed per user. A price for the dashboard itself is not published on the page."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["agent-365","viva-insights","analytics","agents","viva-feature-access-management","m365-admin-center","privacy","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 567667"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567667"
    kind: "roadmap"
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-agent-365-reporting-availability-for-microsoft-platform-a","microsoft-viva-expanded-agent-coverage-in-agent-dashboard","viva-feature-access-management","m365-copilot-agent-365-business-analytics-experience"]
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
    note: "AI Administrator or Global Administrator. Turning it off disables the Agent Dashboard, including the Agent 365 view. The page marks the Agent Dashboard as public preview."
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
    note: "The printed Users route adds individual users; select Groups instead of Users to add groups. Turning the web app control off disables the whole app, not just the Agent Dashboard."
  - governs: "Whether the Agent 365 view includes non-public agents or only public agents"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Agent365DashboardNonPublicAgentsVisibility -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Applies at tenant, group or user level. Non-public agents have a creator type of Your org or user; public agents are created by Microsoft and third parties."
  - governs: "Minimum group size for group-level metrics and agent names"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "Path is for tenants without a Viva Insights licence; the default is 10 and the minimum setting is five. With a Viva Insights licence, a Viva Insights Administrator uses the privacy settings page instead."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-15T22:55:27"
changes:
  - date: "2026-11-24"
    note: "New briefing on the Agent 365 Dashboard view in the Viva Insights Agent Dashboard: licensing, default state, access and the controls that govern it."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: Global Administrator access is qualified for PIM-enabled tenants, policy precedence now states scope levels, and the unmatched change-log step was removed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 84 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 84
  confirmed: 83
  unconfirmed: 1
  contradicted: 0
  attempts: 2
  hash: "50665cfcf97fe7963253e69ec1eafaca"
---

## What's changing

The roadmap item says customers can access their Agent 365 data through the Agent Dashboard in Copilot Analytics (Insights), so that leaders can see activity across the agents registered through Agent 365, including historical data. Microsoft Learn already documents this as the **Agent 365 Dashboard** view inside the Agent Dashboard in the Viva Insights web app. Select **All agents** at the top right to open it; clear **All agents** to return to the Copilot Agent Dashboard view.

According to Learn, the Agent 365 view reports agent adoption and sessions "on all supported agents used across Microsoft 365 apps", and its reporting history covers the period after the organisation accepted the terms of use of Agent 365 licensing. The Copilot Agent Dashboard view covers only agents used within Microsoft Copilot and has six months of history. Data represents the previous 28 days, with up to a six-day delay. Agents can be filtered by creator type (User, Your org, Microsoft, Third party) and by source.

Learn says the Agent Dashboard is on by default as part of the Viva Insights web app, and that by default the Agent 365 view includes all agents, public and non-public. The roadmap item is listed as In development with a target of July CY2026, release phase General Availability and Preview, Worldwide (Standard Multi-Tenant) and the Web platform. Learn titles the page "(preview)" and says the Copilot Agent Dashboard view is for public preview customers only; the settings page says the same of the Agent Dashboard. Dates are Microsoft's targets, and no Message Center post was supplied for this item.

## Why it matters

This gives leaders a tenant-wide count of which agents people use, who built them and how many sessions they run, including agents that arrive from outside Copilot Studio. For a service owner, that is both a useful inventory view and a new place where named agents and group-level usage are visible to people outside the admin team.

Learn says the dashboard is on by default, and qualifying senior leaders gain access automatically, so if nobody acts the view can reach them once the tenant has the licensing. Decide who should see it, and confirm the privacy thresholds, before leaders find it themselves.

## Risk assessment

**Data exposure**
- The Agent 365 view lists agents by name with sessions and active users, and breaks activity down by group, organisation and job function. Job-function reporting requires uploaded organisational job-function attributes. Learn says the analysed population includes all employees who have had agent activity.
- Learn says agent names and group metrics are not shown for groups smaller than the minimum group size, which is 10 employees by default and cannot be set below five. Check this threshold suits your organisation.
- Non-public agents (creator type Your org or user) are included by default. The `Agent365DashboardNonPublicAgentsVisibility` policy changes this.

**Security & identity**
- Access is automatic for senior leaders in qualifying tenants (a single main reporting line and at least 2,500 Microsoft Entra ID users), for users holding the Global administrator role, for enabled managers, for Viva Insights analysts with global partition access and for users with delegate access. In Privileged Identity Management (PIM) enabled tenants, Global Administrators might not have access; Learn says to add them explicitly through the Viva Insights web app access settings if they need it. Users with access can delegate it to others.
- Both the Viva Insights web app control and the Agent Dashboard control must be on for a user to reach the dashboard, so either can be used to remove access.

**Autonomy & actions**
- The Learn page describes metrics, filters and agent deep dives and describes no action taken on agents from the dashboard.

**Change & support**
- The roadmap lists the item as In development while Learn already documents the view and labels it preview; expect the behaviour to change.
- If the licensing requirement is not met, Learn says the **All agents** toggle does not appear, which is likely to prompt support questions from leaders who expected it.
- Learn says the dashboard is not available in Microsoft's U.S. Government clouds or Office 365 operated by 21Vianet.

## Cost and licensing

Learn's Agent Dashboard page sets the licensing requirement for the Agent 365 view as the same as the Copilot Agent Dashboard view (at least 50 Microsoft Copilot licences assigned, and agent activity) plus Agent 365 licensing. Microsoft Learn's Agent 365 overview says Agent 365 is licensed on a per-user basis, and Microsoft Entra licensing says it is included with Microsoft 365 E7 and available as an add-on to Microsoft E5/A5/Business Premium.

The Agent Dashboard page lists no meter or separate charge for the dashboard, and no price for the dashboard is published there. How many users must hold an Agent 365 licence for the toggle to appear is not stated on that page. The indirect cost is admin time to set access policies and to brief leaders on what the dashboard shows.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Users reach the dashboard in the Viva Insights web app by selecting **Agent Dashboard** on the left. Learn says the dashboard is not currently available for national or regional clouds, including Microsoft's U.S. Government clouds and Office 365 operated by 21Vianet.

Prerequisites on Learn: at least 50 Microsoft Copilot licences assigned, agent activity and Agent 365 licensing. The AI Administrator manages the Agent Dashboard and Viva Insights web app settings; Microsoft 365 Global Administrators can also manage all of the settings on the page. Organisational data comes from Microsoft Entra ID by default; uploading an organisational data file permanently changes the source of the dashboard data to that file.

## Governance guidance

### Before rollout
- Confirm that Agent 365 licensing and at least 50 Microsoft Copilot licences are in place, otherwise the **All agents** toggle does not appear.
- Decide which leaders, analysts and groups should see agent names and usage, then plan the Agent Dashboard policy and the Viva Insights web app policy to match.
- Decide whether the Agent 365 view should include non-public agents, and set the visibility policy if it should not.
- Review the minimum group size against your privacy and works-council commitments.

### At rollout
- Create the Agent Dashboard policy for the tenant, groups or users you chose, using the AI Administrator or a Global Administrator account.
- Check which senior leaders, managers and Global Administrators actually have access, and remove any who should not have it. In PIM-enabled tenants, Global Administrators might not have access, so add any who need it explicitly through the Viva Insights web app access settings.
- Brief leaders on what the Agent 365 view covers, including that its history starts after the organisation accepted the Agent 365 licensing terms of use.

### After rollout
- Re-check access after reorganisations, because Learn says the automatic access criteria are analysed weekly.
- Watch the roadmap item and the Learn page for changes to the preview label, licensing and cloud availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Turning it off disables the Agent Dashboard, including the Agent 365 view. The page marks the Agent Dashboard as public preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Feature access management › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app that hosts the dashboard is available</strong><br><small>Tenant</small><br><small class="controls__note">The printed Users route adds individual users; select Groups instead of Users to add groups. Turning the web app control off disables the whole app, not just the Agent Dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Agent 365 view includes non-public agents or only public agents</strong><br><small>Tenant</small><br><small class="controls__note">Applies at tenant, group or user level. Non-public agents have a creator type of Your org or user; public agents are created by Microsoft and third parties.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Agent365DashboardNonPublicAgentsVisibility -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Minimum group size for group-level metrics and agent names</strong><br><small>Tenant</small><br><small class="controls__note">Path is for tenants without a Viva Insights licence; the default is 10 and the minimum setting is five. With a Viva Insights licence, a Viva Insights Administrator uses the privacy settings page instead.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Microsoft Viva Insights › Copilot Dashboard in Microsoft 365 › Manage minimum group size <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Agent Dashboard policy and the Viva Insights web app policy work together: Learn says both must be enabled to reach the Agent Dashboard, and turning the web app control off disables the entire app, including the Microsoft Copilot Dashboard, Copilot Analytics reports and advanced analysis tools. Use the web app row with care.

The Viva Feature Access Management policies take effect within 24 hours unless a feature says otherwise. Where several policies cover a user, user or group policies take precedence over tenant policies; within the same policy scope level, the most restrictive enablement policy applies. The Learn settings page also documents a unified exclusion list that hides chosen users from dashboard aggregates; it is an existing control, not specific to the Agent 365 view, and its path is on the [settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard).

## Open questions

- When will the Agent 365 Dashboard view reach general availability, given the roadmap target of July CY2026 and the preview label on Learn? Watch the roadmap item and the Agent Dashboard Learn page.
- How many users must hold an Agent 365 licence for the **All agents** toggle to appear? The Agent Dashboard page says "Agent 365 licensing" without a quantity.
- Will a price or meter ever apply to the dashboard itself? The page lists none today.
- Will an admin centre path be documented for the non-public agents visibility policy? Learn gives only a PowerShell example at the time of writing (November 2026).

<!-- rationale
risk: Medium. Learn says the dashboard is on by default and shows agent names and usage by group to leaders and analysts; existing controls (policy, minimum group size) cover it but need setting.
cost: Medium. The Agent 365 view needs Agent 365 licensing on top of at least 50 Microsoft Copilot licences; Microsoft licenses Agent 365 per user.
impact: Medium. Senior leaders, analysts and their delegates see it; Learn says the analysed population includes every employee who has had agent activity.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance controls: final paragraph, exclusion-list link / admin-path: The unified exclusion list's admin path is on the linked settings page. | Found: Searched: Viva Insights Agent Dashboard unified exclusion list admin center path settings. Read manage-settings-copilot-dashboard, feature-access-management and control-access-admin-center. The cited settings page describes exclusion but gives no route; it links to VFAM guidance. | Fix: Replace 'and its path is on the settings page' with 'and the settings page links to Viva Feature Access Management guidance'. Keep the existing settings-page link; do not add a new control or inferred exclusion-list route.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope; controls[0].note; Governance guidance: At rollout / role: The AI Administrator manages Agent Dashboard and Viva Insights web app settings. | Found: Manage access to the Viva Insights web app for individual users and groups ... Applies to: AI Administrator ... Enable or disable the Agent Dashboard ... Applies to: AI Administrator | Fix: After the AI Administrator sentence in Scope, add: 'The feature-access-management overview instead lists Global admin for the Viva Insights web app control.' Cite https://learn.microsoft.com/viva/feature-access-management, whose feature table gives that role; keep the settings page's AI Administrator guidance. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
-->
