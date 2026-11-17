---
title: "Viva Insights: Copilot Analytics Agent Dashboard for agent adoption and Copilot Credit usage"
slug: "microsoft-viva-copilot-analytics-agent-dashboard"
roadmapId: 506749
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "Viva Insights adds an Agent Dashboard showing leaders, delegates and analysts how agents are adopted and, under set conditions in one view, Copilot Credit use. Learn says it is on by default in preview; admins can switch it off."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "February CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Copilot Dashboard licensing table lists Agent Dashboard as included with at least 50 Copilot licences or at least 50 Viva Insights licences; the Agent Dashboard page specifies at least 50 Copilot licences and agent activity. The Agent 365 view also needs Agent 365 licensing."
audiences: ["m365-admin","finops","compliance","change-adoption"]
tags: ["viva-insights","adoption","analytics","agents","m365-copilot","copilot-credits","viva-feature-access-management","privacy","copilot-control-system"]
sources:
  - title: "Microsoft 365 Roadmap 506749"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=506749"
    kind: "roadmap"
  - title: "MC1166852: (Updated) Microsoft Viva Copilot Analytics launches new agent dashboard"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1166852"
    kind: "message-center"
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Delegate access to the Copilot Dashboard, Agent Dashboard, and Copilot insights"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/delegate-access"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","copilot-credits","m365-admin-center-copilot-credits-usage-report"]
controls:
  - governs: "Whether the Agent Dashboard is available to everyone, selected groups or selected users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Agent Dashboard > Add policy"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator or Global Administrator. Policies can target the tenant, groups or users. The Learn page is marked preview."
  - governs: "Whether the Viva Insights web app, which hosts the dashboard, is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Turning it off disables the whole app, not only the Agent Dashboard. The UI path adds or removes users and groups; the AI Administrator does not get automatic access."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-17"
    note: "New briefing: Agent Dashboard in Viva Insights, with the VFAM controls Learn documents and the roadmap/notice date mismatch flagged."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: Copilot Credit metrics now carry Learn's conditions (Copilot Chat filter, Pay-As-You-Go, not in the Agent 365 view); removed the checklist bullet that had no controls row; clarified the VFAM wording."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected: policy precedence now states that user or group policies outrank a tenant-wide policy; licensing is now included per Microsoft's Copilot Dashboard licensing table; roles note added."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 90 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 90
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "756af128c82fcc9001070f66c27bb6ab"
---

## What's changing

Viva Insights is adding an Agent Dashboard to Copilot Analytics. The roadmap item describes it as a central place for leaders, delegates and analysts to understand how the organisation is adopting agents. Microsoft's notice MC1166852 says it shows agent adoption trends and associated Copilot Credit usage for agents used within Microsoft 365 Copilot, whether built in Copilot Studio, SharePoint or the Microsoft 365 Agents Toolkit, and whether built by employees, the organisation, Microsoft or partners. It also adds agent insights and entry points to the Adoption tab of the Copilot Dashboard.

Microsoft Learn already documents the dashboard as a preview page. It describes two views: a Copilot Agent Dashboard (previous six months of history; Copilot Credit usage) and an Agent 365 Dashboard (all supported agents across Microsoft 365 apps), switched with an **All agents** toggle that appears only if the organisation also has Agent 365 licensing. Data covers the previous 28 days with up to a six-day delay, and agent names and group metrics are hidden for groups below the minimum group size.

The roadmap record shows status In development, with release phases General Availability and Preview, a preview date of February CY2026 and a target date of February CY2027; the cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. Notice MC1166852 (last updated 2 October 2026, end date 31 March 2027, no act-by date) gives different rollout dates: public preview rolling out from early February 2026 to mid-February 2026 and general availability in February 2026. Those dates are already past and disagree with the roadmap's February CY2027 target, so treat the timing as unsettled until Microsoft reconciles them.

## Why it matters

This is a new reporting surface over employee agent use, and Learn says it is on by default as part of the Viva Insights web app. Automatic access goes to a limited set of people: in qualifying tenants (at least 2,500 users with a Microsoft Entra ID and a majority in one reporting line), users in the top three levels of the organisation with a significant part of it reporting to them, plus Global administrators, Viva Insights analysts with global partition access, delegates and managers already enabled for team-level Copilot Analytics. If nobody acts, those people can see agent adoption by agent and group; the wiki's view is that service owners should decide this before leaders start using it, not after.

In the Copilot Agent Dashboard view, and under the conditions set out in Cost and licensing, the dashboard also shows Copilot Credit usage, which gives finance and adoption teams a view next to the admin centre reports. The notice asks administrators to review the impact, manage access with Viva Feature Access Management (VFAM) controls, consider reviewing with works councils and update training and documentation.

## Risk assessment

**Data exposure**
- The dashboard reports agent activity for employees with agent activity, by agent, creator type and group, over the previous 28 days. Learn says group metrics and agent names are suppressed below the minimum group size, which is 10 employees by default and must be set at least at five. Check the setting before leaders rely on small-group figures.
- Everyone with a Copilot licence, a Viva Insights licence or a manual cohort upload is included unless an exclusion list is created, according to Learn. Use the unified exclusion list if legal or works-council rules require people to be left out of aggregates.

**Security & identity**
- Access is granted automatically by organisation-chart position (Entra ID manager hierarchy) and by role, and re-evaluated weekly. A Global administrator may lose access in a Privileged Identity Management (PIM) enabled tenant unless added explicitly, per Learn, so confirm who actually sees the dashboard.
- Delegates inherit access from the leader who delegates; a restrictive VFAM policy must include delegates explicitly, according to the delegate-access FAQ.

**Autonomy & actions**
- No change: the dashboard reports on agent usage, and Microsoft Learn describes no action it takes on agents at the time of writing (November 2026).

**Change & support**
- The Learn page is marked preview and the roadmap item is still In development, so metrics, views and limits may change before general availability.
- The roadmap target (February CY2027) and MC1166852's dates (February 2026) disagree; expect questions from leaders who already see the preview.

## Cost and licensing

Licence: the Learn page states that the Copilot Agent Dashboard needs at least 50 Microsoft Copilot licences assigned and agent activity. The Agent 365 view needs the same, plus Agent 365 licensing, and the **All agents** toggle does not appear without it. Notice MC1166852 likewise says tenants with at least 50 Microsoft 365 Copilot licences are affected.

Microsoft's Copilot Dashboard licensing table lists Agent Dashboard as included for tenants with at least 50 Copilot licences or at least 50 Viva Insights licences; the Agent Dashboard page instead specifies at least 50 Copilot licences and agent activity. The Agent 365 view additionally requires Agent 365 licensing (Copilot Dashboard page, feature availability based on licenses).

Meter: in the Copilot Agent Dashboard view, Copilot Credits and Active users using Copilot Credits are visible only with License set to Copilot Chat, a filter that appears only when the tenant has Copilot Chat reporting enabled, and when the organisation has enabled Pay-As-You-Go and used Copilot Credits; neither metric appears in the Agent 365 Dashboard view (see [Copilot Credits](/concepts/copilot-credits/)). Learn does not describe the dashboard itself as a meter, and the Agent Dashboard page gives no separate price for it.

Indirect costs: admin time to set access policies and the minimum group size, and communications to leaders, delegates and any works council.

## Scope

**Who and where.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn says the Agent Dashboard is not currently available for national or regional clouds, including Microsoft's U.S. Government clouds and Office 365 operated by 21Vianet.

**Audience.** Leaders, delegates, adoption specialists and administrators using Viva Insights, in tenants with at least 50 Microsoft 365 Copilot licences (MC1166852). Learn lists the automatic-access rules: senior leaders in qualifying tenants, Global administrators, Viva Insights analysts with global partition access, users with delegate access and enabled managers, scoped to the teams they can view.

**Roles.** Learn marks the access settings as applying to the AI Administrator and says Microsoft 365 Global Administrators can also manage all of them. The general VFAM feature table lists Global admin as who can manage the Viva Insights web app control, whereas the settings page allows the AI Administrator; Microsoft documents both.

**Rollout.** Learn says the dashboard is on by default as part of the Viva Insights web app, and that both the web app control and the Agent Dashboard control must be enabled for access. Roadmap and notice dates differ, as set out above.

## Governance guidance

### Before rollout
- Confirm who will see the dashboard: review the automatic-access criteria on Learn against your organisation chart, and note that Privileged Identity Management tenants must add Global administrators explicitly.
- Decide whether to keep the Agent Dashboard on for everyone, or restrict it by group or user with the Agent Dashboard VFAM policy (first row of the controls table).
- Check licence counts against the stated requirement of at least 50 Microsoft Copilot licences, and whether Agent 365 licensing applies to the **All agents** view.

### At rollout
- Add an Agent Dashboard policy in the Microsoft 365 admin center, or run Add-VivaModuleFeaturePolicy, to limit access to the groups that should see it.
- Tell leaders and delegates what the figures cover: the previous 28 days, with up to a six-day delay.
- Update training and documentation for leaders, as the notice advises.

### After rollout
- Review who has access, including delegates, after the weekly access re-evaluation.
- Compare the Copilot Credit figures in the dashboard with your usage reports, and treat the dashboard as adoption reporting alongside them.
- Re-read the Learn page when the roadmap status changes, because it is currently a preview page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available to everyone, selected groups or selected users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Global Administrator. Policies can target the tenant, groups or users. The Learn page is marked preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the dashboard, is available</strong><br><small>Tenant</small><br><small class="controls__note">Turning it off disables the whole app, not only the Agent Dashboard. The UI path adds or removes users and groups; the AI Administrator does not get automatic access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both PowerShell calls create Viva Feature Access Management (VFAM) policies; the second row's UI instead manages individual and group access assignments. The settings page says the AI admin can apply the Agent Dashboard control at tenant, group or user level. The Add-VivaModuleFeaturePolicy reference says you can assign up to 10 policies per feature plus one for the entire tenant, and that user or group policies take priority over a tenant-wide policy; where multiple user or group policies apply, the most restrictive applies. The cmdlet requires the Global Administrators role or roles assigned at the feature level.

To reach the dashboard a user needs both controls enabled. Turning off the Viva Insights web app disables the whole app, including the Copilot Dashboard, so use the Agent Dashboard control to restrict this feature alone.

Other settings documented on the same Learn page, with no row because only part of each was read: automatic access for senior leaders is a tenant-level VFAM control with FeatureId AutoCxoIdentification that supports tenant-level policies only; a unified exclusion list that hides users from aggregates and must be turned on to work; and the minimum group size, set under Settings > Microsoft Viva > Microsoft Viva Insights > Copilot Dashboard in Microsoft 365 > Manage minimum group size for tenants without a Viva Insights licence. For the Agent 365 view, a separate VFAM control with FeatureId Agent365DashboardNonPublicAgentsVisibility limits reporting to public agents.

## Open questions

- Which dates apply: the roadmap's February CY2027 target or MC1166852's February 2026 rollout window? Watch the roadmap item and Message center for a reconciled date.
- Will the on-by-default behaviour and access rules on the preview Learn page stay the same at general availability? Watch the Learn page, which is marked preview.
- Does the Agent Dashboard come to national or regional clouds? Learn says it is not currently available there; watch the roadmap item for added clouds.

<!-- rationale
risk: Medium. Microsoft Learn says the Agent Dashboard is on by default as part of the Viva Insights web app and reports agent activity by agent and by group, so leaders see usage data unless an admin sets a policy.
cost: Low. The Learn page lists at least 50 Microsoft Copilot licences as the requirement and states no price for the dashboard itself; the known cost is admin and communication time. The dashboard reports Copilot Credit usage but is not itself described as a meter.
impact: Medium. Leaders, delegates, analysts and Global administrators are the audience, and people with agent activity are counted in the group and agent figures they see.
-->
