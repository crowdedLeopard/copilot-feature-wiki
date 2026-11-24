---
title: "Viva Insights: Agent 365 dashboard for managers in Copilot Analytics"
slug: "microsoft-viva-copilot-analytics-agent-365-dashboard-for-managers"
roadmapId: 567893
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "The roadmap says managers will see Agent 365 agent activity in the Agent Dashboard in Viva Insights. It needs Agent 365 and Copilot licences; administrators should check who already has access and set group sizes."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "on"
action: "review"
licensing:
  model: "per-user"
  notes: "Learn says the Agent 365 Dashboard needs the Copilot Agent Dashboard requirements (at least 50 Microsoft Copilot licences assigned, plus agent activity) plus Agent 365 licensing. Agent 365 is licensed on a per-user basis."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["agent-365","viva-insights","agents","analytics","adoption","viva-feature-access-management","copilot","privacy","gcc"]
sources:
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Configure manager settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 567893"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567893"
    kind: "roadmap"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-agent-365-reporting-availability-for-microsoft-platform-a","viva-feature-access-management","microsoft-viva-expanded-agent-coverage-in-agent-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
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
    note: "AI Administrator (Global Administrators can also manage). Learn marks the Agent Dashboard as preview; the dashboard needs this control and the web app control both enabled."
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
    note: "The path adds individual users to the app; the cmdlet sets the tenant, group or user policy. Turning the control off disables the entire app. AI Administrator."
  - governs: "Which managers get team-scoped access to Copilot Analytics insights"
    scope: "user"
    ui:
      surface: "Viva Insights admin portal"
      path: "Settings > Manager settings > Grant managers scoped access to Copilot insights"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Viva Insights Administrator or AI admin. The Agent Dashboard page links here for enabled managers; the manager settings page itself names the Copilot Dashboard, Copilot Analytics reports and Consumption Dashboard."
  - governs: "Minimum group size for group-level Copilot Dashboard and Agent Dashboard metrics"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api: null
    note: "This path is for tenants without a Viva Insights licence; with one, a Viva Insights Administrator uses the privacy settings page. Default is 10 employees; the value must be at least five."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-07-17T22:12:56"
changes:
  - date: "2026-11-24"
    note: "New briefing for roadmap item 567893: managers' Agent 365 Dashboard view in the Viva Insights Agent Dashboard."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Correction: default state set to on, arrival-state uncertainty and one open question removed, web app control note and risk rationale corrected, non-public-agent checklist step removed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 79 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 77
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "f88c1400b3000cb4c5f2f29a954739bc"
---

## What's changing

The roadmap item states that managers can access their Agent 365 data through the Agent Dashboard in Copilot Analytics (Insights), to understand activity across all agents registered through Agent 365. It also states that customers with Agent 365 and Copilot will see the Agent 365 Dashboard, with the ability to view historical data in the Agent Dashboard. The record lists Web as the platform, General Availability as the release phase, and Worldwide (Standard Multi-Tenant) and GCC as clouds.

Microsoft Learn describes the Agent Dashboard in the Viva Insights web app as having two views: the Copilot Agent Dashboard and the Agent 365 Dashboard. Selecting **All agents** at the top right shows the Agent 365 Dashboard. It reports agent adoption and sessions across supported agents used in Microsoft 365 apps, and its reporting history covers the period after the organisation accepted the Agent 365 licensing terms of use. Dashboard data covers the previous 28 days, with up to a six-day delay.

For managers, Learn says enabled managers who already have team-level access to Copilot Analytics in Viva Insights can also access the dashboard and see agent insights scoped to the teams they are enabled to view. Users who are senior leaders in qualifying tenants, as determined by Microsoft Entra ID manager data, can view it automatically.

The roadmap status is In development with a target of August CY2026. That is a target, and the month has passed at the time of writing (November 2026) with the record still at In development. The Learn page is titled "Connect to the Agent Dashboard (preview)" and the settings page says the Agent Dashboard is for public preview customers only, while the roadmap lists General Availability: both are reported here as they stand.

## Why it matters

This puts per-agent adoption and session figures in front of line managers, not only central administrators. For a service owner, that means questions about agents that managers did not request: which agents their teams use, including agents built by end users. Expect to explain what the numbers do and do not show before managers find them.

The Agent Dashboard is on by default within the Viva Insights web app; enabled managers with existing team-level Copilot Analytics access can also view their enabled teams. Check existing access before rollout.

## Risk assessment

**Data exposure**

- The Agent 365 Dashboard view reports on all supported agents, and by default includes all agents, including non-public agents (creator type Your org or user). The Viva Feature Access Management control on the settings page can limit reporting to public agents.
- Metrics are aggregated at user level. Learn says agent names and group metrics are not shown for groups smaller than the minimum group size, which is 10 employees by default and can be set no lower than five.

**Security & identity**

- Manager scope follows the manager hierarchy, taken from Microsoft Entra ID by default. Learn says uploading an organisational data file permanently changes the source from Microsoft Entra ID to the file, so a stale file gives managers the wrong teams.
- Learn notes that in a Privileged Identity Management enabled tenant, global administrators might not have access unless added explicitly.

**Autonomy & actions**

- No change: Learn describes the dashboard as providing insights into agent adoption and sessions.

**Change & support**

- Without Agent 365 licensing, the **All agents** toggle does not appear, which is likely to generate support questions from managers who expect it.
- Web app access changes take effect in 24 hours, manager settings changes after one hour, and dashboard data can lag by up to six days.

## Cost and licensing

Learn lists two licensing requirements for the Agent Dashboard. The Copilot Agent Dashboard view needs at least 50 Microsoft Copilot licences assigned and agent activity. The Agent 365 Dashboard view needs the same, plus Agent 365 licensing; if the organisation does not meet this, the **All agents** toggle does not appear. Source: the Agent Dashboard page on Microsoft Learn.

The Agent 365 overview page on Learn states that Agent 365 is licensed on a per-user basis and that at least one user must hold a qualifying Agent 365 licence to enable it. It points to Microsoft's Agent 365 plans and pricing page for prices; no price is quoted here.

The Agent 365 view does not show Copilot Credit metrics, according to the Agent Dashboard page. Indirect costs are administrator time to set manager access and group sizes, and the communication to managers.

## Scope

**Users and licences.** The dashboard needs at least 50 Microsoft Copilot licences assigned and agent activity; the Agent 365 view also needs Agent 365 licensing. Learn says the analysed population includes all employees who have had agent activity.

**Who sees it.** Senior leaders in qualifying tenants (a single main reporting line and at least 2,500 Microsoft Entra ID users), global administrators, Viva Insights analysts with global partition access, users with delegate access, and enabled managers with team-level Copilot Analytics access.

**Roles.** The AI Administrator manages the Agent Dashboard and Viva Insights web app controls; Learn says Microsoft 365 Global Administrators can also manage all settings.

**Clouds and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, and Web. The Learn Agent Dashboard page says the dashboard isn't currently available for national/regional cloud deployments including Microsoft's U.S. Government clouds. The two sources disagree on GCC, and both are reported.

**Rollout.** Roadmap status In development, target August CY2026.

## Governance guidance

### Before rollout

- Check licensing in the Microsoft 365 admin center: confirm at least 50 Microsoft Copilot licences are assigned and that Agent 365 licensing is in place, or the **All agents** toggle will not appear.
- Check who already has access through the Viva Insights web app and Agent Dashboard controls (rows 1 and 2 below), and note that both must be enabled for anyone to reach the dashboard.
- Verify the manager hierarchy in Microsoft Entra ID, or in the uploaded organisational data file if you use one, because the Scope filter follows the manager attribute.

### At rollout

- Set the minimum group size (row 4) to the threshold you want before managers see group-level metrics.
- Decide which managers get team-scoped access in manager settings (row 3), noting that changes apply after one hour.
- Add an Agent Dashboard policy (row 1) for groups or users who should not have access during a pilot.

### After rollout

- Ask managers who cannot see the **All agents** toggle to confirm their licensing position with you before raising a ticket.
- Re-read the Learn Agent Dashboard page and Message center for changes to preview status and cloud availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator (Global Administrators can also manage). Learn marks the Agent Dashboard as preview; the dashboard needs this control and the web app control both enabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Feature access management › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app that hosts the dashboard is available</strong><br><small>Tenant</small><br><small class="controls__note">The path adds individual users to the app; the cmdlet sets the tenant, group or user policy. Turning the control off disables the entire app. AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which managers get team-scoped access to Copilot Analytics insights</strong><br><small>User</small><br><small class="controls__note">Viva Insights Administrator or AI admin. The Agent Dashboard page links here for enabled managers; the manager settings page itself names the Copilot Dashboard, Copilot Analytics reports and Consumption Dashboard.</small></td><td data-label="Admin UI"><strong>Viva Insights admin portal</strong><br>Settings › Manager settings › Grant managers scoped access to Copilot insights <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Minimum group size for group-level Copilot Dashboard and Agent Dashboard metrics</strong><br><small>Tenant</small><br><small class="controls__note">This path is for tenants without a Viva Insights licence; with one, a Viva Insights Administrator uses the privacy settings page. Default is 10 employees; the value must be at least five.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Microsoft Viva Insights › Copilot Dashboard in Microsoft 365 › Manage minimum group size <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Agent Dashboard and Viva Insights web app controls are separate: Learn says both must be enabled to reach the Agent Dashboard. Turning off the web app control disables the entire app, including the Copilot Dashboard and Copilot Analytics reports. The AI Administrator applies both; Learn says Global Administrators can also manage all settings. Web app access changes take effect in 24 hours.

Manager settings are available to a Viva Insights Administrator or AI admin. The manager settings page names the Copilot Dashboard, Copilot Analytics reports and the Consumption Dashboard; the Agent Dashboard page says enabled managers can also access the Agent Dashboard. Minimum group size is set by the AI Administrator or a Viva Insights Administrator; tenants with a Viva Insights licence use the Viva Insights privacy settings page instead.

The settings page also documents a Viva Feature Access Management control for whether the Agent 365 Dashboard view includes non-public agents (FeatureId Agent365DashboardNonPublicAgentsVisibility, PowerShell example only) and a unified exclusion list that hides users from aggregates. Neither is a row above because the page gives no admin-centre path for them.

## Open questions

- Will the Agent 365 Dashboard for managers be available in GCC, given the roadmap lists GCC while the Learn Agent Dashboard page says the dashboard isn't currently available in U.S. Government clouds? Watch the roadmap item and that page.
- Will the preview label on the Agent Dashboard pages be removed when the item reaches General Availability, and will the August CY2026 target be updated?
- Is there a manager-level control specific to the Agent 365 view, separate from the Copilot Agent Dashboard view?

<!-- rationale
risk: Medium. Managers see per-agent adoption and session data for their teams, including non-public agents by default. A default minimum group size protects group metrics; administrators can further restrict dashboard access and reporting.
cost: Medium. The Agent 365 Dashboard view needs at least 50 Microsoft Copilot licences assigned plus Agent 365 licensing, which is licensed per user; no separate charge for the dashboard is quoted on the pages cited.
impact: Medium. Managers and senior leaders notice it; Learn describes managers with team-level Copilot Analytics access and some senior leaders as the audience, not all users.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Roles; controls[1].note; Governance controls / role: The AI Administrator can manage the Viva Insights web app control. | Found: The AI admin can turn the Viva Insights web app on or off at the tenant, group, or user level | Fix: Keep the documented AI Administrator role, but add: 'The dashboard settings page assigns this control to the AI Administrator, while the feature-access management table lists Global admin for Viva Insights web app.' Cite https://learn.microsoft.com/viva/feature-access-management#viva-features-management for the differing table. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [contradicted, minor] front matter: action; Why it matters / consistency: The review action rating treats the change as optional despite the verified on-by-default dashboard and automatic access for already-enabled managers. | Found: action: "review" ... The Agent Dashboard is on by default within the Viva Insights web app; enabled managers with existing team-level Copilot Analytics access can also view their enabled teams. Check existing access before rollout. | Fix: Change action from review to prepare: the change reaches existing enabled managers without a new choice, and requires access and privacy decisions. Retain the explicit uncertainty over the stale August CY2026 target and In development status.
- [contradicted, minor] Governance guidance: Before rollout, hierarchy checklist step / consistency: The checklist instructs administrators to verify the manager hierarchy or uploaded organisational data, but no control row represents that check. | Found: Verify the manager hierarchy in Microsoft Entra ID, or in the uploaded organisational data file if you use one ... Rows cover dashboard availability, web app availability, manager access and minimum group size. | Fix: Remove the 'Verify the manager hierarchy' checklist bullet, which has no corresponding control row. Keep the supported explanation of the hierarchy and uploaded-data behaviour in Risk assessment.
-->
