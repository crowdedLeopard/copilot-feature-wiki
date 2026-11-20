---
title: "Viva Insights: Agent 365 Dashboard view without an Agent 365 licence"
slug: "microsoft-viva-copilot-analytics-agent-365-reporting-availability-for-microsoft-platform-a"
roadmapId: 575292
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "The roadmap says the Agent 365 Dashboard in Viva Insights will show Microsoft platform-built agents without an Agent 365 licence. Admins who govern the Agent Dashboard should plan who sees it; Learn still lists the licence."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn's Agent Dashboard page (preview) lists at least 50 Microsoft Copilot licences and agent activity, plus Agent 365 licensing for the Agent 365 view; the roadmap says the view will not need Agent 365. Whether the Copilot threshold still applies afterwards is not yet published."
audiences: ["m365-admin","service-owner","compliance","change-adoption"]
tags: ["viva-insights","agent-365","analytics","agents","licensing","viva-feature-access-management","privacy"]
sources:
  - title: "Microsoft 365 Roadmap 575292"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=575292"
    kind: "roadmap"
  - title: "Connect to the Agent Dashboard (preview)"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Connect to the Microsoft Copilot Dashboard for Microsoft 365 customers"
    url: "https://learn.microsoft.com/viva/insights/org-team-insights/copilot-dashboard"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard","m365-copilot-agent-365-business-analytics-experience","microsoft-viva-interactive-insights-in-the-a365-business-analytics-app"]
controls:
  - governs: "Whether the Agent Dashboard is available to everyone, groups or users"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Agent Dashboard > Add policy"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. Tenant, group or user level. Learn marks the Agent Dashboard as preview."
  - governs: "Whether the Viva Insights web app that hosts the dashboard is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. The UI path adds or removes users and groups (effective in 24 hours); turning the control off disables the whole app, not only the Agent Dashboard."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-16T22:00:35"
changes:
  - date: "2026-11-20"
    note: "New briefing: roadmap plan to show the Agent 365 Dashboard view without an Agent 365 licence, set against Learn's current licensing text and the Agent Dashboard controls."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 75
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "eaf67d262f36245d11e07b05fc37658d"
---

## What's changing

The roadmap item says customers can view agent insights in the Agent 365 Dashboard in Microsoft Viva Insights (Copilot Analytics) without an Agent 365 licence. It also says customers will be able to see reporting on their Microsoft platform-built agents in one consolidated picture, with context on who built each agent and why.

Microsoft Learn describes the Agent Dashboard (preview) as having two views. The Copilot Agent Dashboard covers agent adoption and associated Copilot Credit usage, for agents used within Microsoft Copilot. The Agent 365 Dashboard covers adoption and sessions for all supported agents used across Microsoft 365 apps. Users switch to it with the **All agents** toggle at the top right. Learn says agents may be built in Microsoft Copilot Studio, SharePoint and the Microsoft 365 Agents Toolkit, by end users, formally published by the organisation, or created by Microsoft or third parties. It breaks active agents down by creator type: User, Your org, Microsoft and Third party.

Learn's page currently says the Agent 365 Dashboard needs Agent 365 licensing in addition to the Copilot Agent Dashboard requirements, and that without it the **All agents** toggle does not appear. That is the requirement the roadmap item describes lifting. Microsoft Learn has not yet been updated to say so at the time of writing (November 2026), so treat the roadmap as a plan and the Learn page as the current documented behaviour.

The roadmap record shows status In development, target date October CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Web. The target month has already passed and the status has not moved, so the timing is unsettled. The record gives no preview date and no more-info link, and no Message Center post was supplied for it.

## Why it matters

This widens who can see an agent inventory by creator and source. Learn says the Agent Dashboard is on by default as part of the Viva Insights web app, with automatic access for senior leaders in qualifying tenants (at least 2,500 users with a Microsoft Entra ID and a majority in a single reporting line), Global administrators, Viva Insights analysts with global partition access, delegates and enabled managers. Microsoft has not stated whether the unlicensed Agent 365 view appears for those people automatically on arrival, so decide who should see it before the change lands rather than after.

For a finance or adoption owner, the draw is a single view of the Microsoft platform agents in use without buying Agent 365 licensing, if the roadmap plan holds. For a service owner, the same view shows which agents are user-built and shared, which supports agent lifecycle conversations. Whether the 50-Copilot-licence threshold on Learn's page continues to apply is not yet published.

## Risk assessment

**Data exposure**
- The dashboard reports adoption by agent, creator type and group over the previous 28 days, aggregated at user level. Learn says agent names and group metrics are not shown for groups smaller than the minimum group size, which is 10 employees by default and must be set to at least five.
- Learn says that without an exclusion list, all employees who have a Copilot licence, a Viva Insights licence or are uploaded through cohort upload are included in dashboard insights. Use the unified exclusion list where legal or works-council rules require people to be left out.

**Security & identity**
- Automatic access follows the Entra ID manager hierarchy and the Global administrator role, and Learn says it is re-evaluated weekly. In a Privileged Identity Management (PIM) enabled tenant, Learn says Global administrators might not have access unless added explicitly.
- Delegates have access to the dashboard through delegation; check who your leaders have delegated to.

**Autonomy & actions**
- No change: the dashboard reports on agent use and Learn describes no action it takes on agents.

**Change & support**
- The Learn page is marked preview while the roadmap item is In development, so views, metrics and licensing conditions may change. Expect questions from leaders who see an **All agents** toggle appear, or not, differently from what a colleague sees.
- The roadmap target (October CY2026) has passed without a status change; confirm availability in your tenant before communicating a date.

## Cost and licensing

The roadmap says the Agent 365 Dashboard view will be available without an Agent 365 licence. Learn's Agent Dashboard page (preview) currently says the Copilot Agent Dashboard needs at least 50 Microsoft Copilot licences assigned and agent activity, and that the Agent 365 Dashboard needs those same requirements plus Agent 365 licensing. Both statements are Microsoft's; the page has not yet been updated for the change, and whether the 50-licence requirement continues to apply is not yet published.

Microsoft's Copilot Dashboard page lists Agent Dashboard among the features included for tenants with at least 50 assigned Viva Insights licences or 50 or more assigned Copilot licences. The Agent Dashboard page publishes no separate price or meter for the Agent 365 view.

In the Copilot Agent Dashboard view, Learn describes Copilot Credit usage as measuring how agents are used by employees who don't have Microsoft Copilot licences; see [Copilot Credits](/concepts/copilot-credits/). Indirect costs are admin time to set access and minimum group size, and communications to leaders and delegates.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn's Agent Dashboard page says the dashboard is not currently available for national/regional cloud deployments, including but not limited to Microsoft's US Government clouds and Office 365 operated by 21Vianet.

People who see the dashboard are those who have Agent Dashboard access in the Viva Insights web app: automatic access for qualifying leaders, Global administrators, Viva Insights analysts with global partition access, enabled managers and delegates, plus anyone an AI Administrator adds. The analysed population is all employees who have had agent activity. The Agent 365 view's reporting history covers the period after the organisation accepted the Agent 365 licensing terms of use, according to Learn. Whether that still applies when no Agent 365 licence is held is not yet published.

## Governance guidance

### Before rollout
- Decide which leaders, delegates and analysts should see agent reporting, and compare that with Learn's automatic access rules for the Agent Dashboard.
- Check the minimum group size on the Copilot Dashboard settings page; Learn sets 10 by default and a floor of five.
- Confirm the Viva Insights web app and Agent Dashboard feature access policies match your intent (first and second rows of the controls table).
- Add Global administrators explicitly if your tenant uses PIM and they need access.

### At rollout
- Check whether the **All agents** toggle appears for a test leader, and record what you see; Learn currently ties it to Agent 365 licensing.
- Tell leaders and delegates that agent names and group metrics are hidden below the minimum group size.
- Review the unified exclusion list if legal or works-council rules apply.

### After rollout
- Revisit who holds Viva Insights web app access after the weekly re-evaluation of automatic access.
- Re-read the Agent Dashboard licensing section on Learn when the roadmap status changes, and update your licensing notes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available to everyone, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. Tenant, group or user level. Learn marks the Agent Dashboard as preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app that hosts the dashboard is available</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. The UI path adds or removes users and groups (effective in 24 hours); turning the control off disables the whole app, not only the Agent Dashboard.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Agent Dashboard control and the Viva Insights web app control work together: Learn says both must be enabled to reach the Agent Dashboard, and turning off the web app disables the whole app, including the Microsoft Copilot Dashboard, Copilot Analytics reports and advanced analysis. Learn lists AI Administrator for these settings and says Microsoft 365 Global Administrators can also manage all of them. The AI Administrator does not get automatic access to the web app and must add themselves.

Learn also documents a Viva feature access management control (FeatureId Agent365DashboardNonPublicAgentsVisibility) that sets whether the Agent 365 Dashboard view includes non-public agents, those with a creator type of Your org or User; by default the view includes all agents. Learn's [manage settings page](https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard) also documents the minimum group size and the unified exclusion list. Learn describes no separate switch for the Agent 365 view that depends on the licence change.

## Open questions

- Will Microsoft remove the Agent 365 licensing requirement from the Agent Dashboard page, and does the requirement of at least 50 Copilot licences stay? Watch the Learn page and the Message center.
- Will the Agent 365 view appear automatically for tenants without Agent 365 licensing, or does it depend on the existing Agent Dashboard access rules?
- Which reporting history will the Agent 365 view cover when no Agent 365 licensing terms were accepted?
- Why has the October CY2026 target passed with the status still In development, and what is the new date?

<!-- rationale
risk: Medium. The Agent Dashboard is on by default in the Viva Insights web app, and the roadmap would widen the Agent 365 view to tenants without Agent 365 licensing, so agent and creator reporting reaches more leaders before admins have decided who sees it.
cost: Low. The roadmap says no Agent 365 licence is needed for the view, so the cost Microsoft's pages show is admin time. Learn's Agent Dashboard page still lists Agent 365 licensing, and no price for the view is published.
impact: Medium. Leaders, delegates and analysts who have Agent Dashboard access notice it; Learn limits automatic access to a defined set of senior leaders, administrators and delegates rather than all users.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters; rationale: risk / consistency: The change's defaultState is on, meaning the newly licence-free Agent 365 view reaches eligible viewers without admin action. | Found: defaultState: "on"; "Microsoft has not stated whether the unlicensed Agent 365 view appears for those people automatically on arrival" | Fix: Set defaultState to "unknown". Keep the existing Agent Dashboard's documented default separate from this change. Replace the risk rationale with: "Medium. Existing Agent Dashboard controls cover access, but Microsoft has not stated whether the newly licence-free Agent 365 view appears automatically; plan who should see its agent and creator reporting."
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Microsoft 365 admin center path reaches Agent Dashboard > Add policy. | Found: Under Access Management, select Turn Advanced Insights on or off. On the Feature access management page, select Agent Dashboard and Add policy. | Fix: Insert the documented page name so the path reads: Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Feature access management > Agent Dashboard > Add policy. Apply the same change to the rendered table. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The printed web-app access path reaches Manage access settings for Microsoft Copilot Dashboard. | Found: Under Microsoft Copilot Dashboard, select Manage access settings for Microsoft Copilot Dashboard. | Fix: The path stops on the right access-management page. For adding access, extend it to: Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add. In the note, say: "Use Groups instead of Users for groups; to revoke access, select existing users or groups and choose Remove selected users or Remove selected groups. Changes take effect in 24 hours." Apply the same correction to the rendered table. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist tells readers to check minimum group size, but the controls table has no row for it. | Found: "Check the minimum group size on the Copilot Dashboard settings page"; the table contains only Agent Dashboard availability and Viva Insights web-app availability. | Fix: The Before rollout minimum-group-size instruction has no controls-table row. Remove that checklist bullet; retain the documented minimum-group-size facts and source link in the body.
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist tells readers to review the unified exclusion list, but the controls table has no row for it. | Found: "Review the unified exclusion list if legal or works-council rules apply"; neither controls-table row covers the exclusion list. | Fix: The At rollout unified-exclusion-list instruction has no controls-table row. Remove that checklist bullet; retain the sourced explanation of the exclusion list in the body.
-->
