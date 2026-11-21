---
title: "Viva Insights: new Overview page in the Agent Dashboard"
slug: "microsoft-viva-new-overview-experience-in-agent-dashboard"
roadmapId: 559996
topic: "m365-copilot"
products: ["Microsoft Viva","Microsoft Copilot (Microsoft 365)"]
summary: "The Agent Dashboard in Viva Insights gains an Overview page showing agent and user adoption and who creates the agents in use. It is on by default for the people given access; no action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "June CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Copilot Agent Dashboard view: at least 50 Microsoft Copilot licences assigned and agent activity. Agent 365 Dashboard view: the same, plus Agent 365 licensing. No price or meter for the Overview page is published on the Agent Dashboard page."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["viva-insights","agents","adoption","analytics","agent-365","viva-feature-access-management","privacy"]
sources:
  - title: "Microsoft 365 Roadmap: item 559996"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559996"
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
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-expanded-agent-coverage-in-agent-dashboard","microsoft-viva-copilot-analytics-agent-365-reporting-availability-for-microsoft-platform-a","viva-feature-access-management","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
controls:
  - governs: "Whether the Agent Dashboard, including its Overview page, is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Agent Dashboard"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator (Global Administrators can also manage it). The page says the policy applies at tenant, group or user level; the example shown turns it off for everyone."
  - governs: "Whether the Viva Insights web app, which hosts the Agent Dashboard, is on"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Turning it off disables the whole app, not only the Agent Dashboard. In the policy wizard, choose the Viva Insights app and the Viva Insights web app feature. AI Administrator."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-07-28T22:43:45"
changes:
  - date: "2026-11-21"
    note: "New briefing on the Agent Dashboard Overview page: what it shows, who sees it by default, licence prerequisites and the two on/off controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 73 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 68
  unconfirmed: 2
  contradicted: 3
  attempts: 1
  hash: "de9167c04112f3c95925c23856c730db"
---

## What's changing

The Agent Dashboard in the Viva Insights web app now has an Overview page, the first thing leaders and analysts see before they move into the detailed adoption reporting. Microsoft describes it as "an at-a-glance view of their agent landscape" that shows which agents and groups are driving adoption and who is creating the agents used across the organisation.

The page has two parts, both based on the last 28 days. Top-level insights are two cards: **Agent adoption** (active agents, percentage change, and the top three agents ranked by agent responses) and **User adoption** (active users, percentage change, and the top three groups ranked by active users, which you can view by group, organisation or job function). Agent creation insights then break active agents down by creator type: **User** (built by users and optionally shareable), **Your org** (admin-approved agents built by and for your organisation), **Microsoft**, and **Third party** (admin-approved agents built by a third party). For user-built agents it also shows how many are shared, meaning they have more than one user.

The cards show agent responses in the Copilot Agent Dashboard view and sessions in the Agent 365 Dashboard view. Data covers the previous 28 days and can lag by up to six days. To protect privacy, agent names and group metrics are not shown for groups smaller than the minimum group size.

The roadmap record lists this item as Launched, General Availability, with a June CY2026 target, for the Worldwide (Standard Multi-Tenant) cloud on the web. The Learn page that documents the Overview page, "Connect to the Agent Dashboard (preview)", still carries a preview banner at the time of writing (November 2026), saying the Copilot Agent Dashboard view is for public preview customers only. The two sources differ, and this briefing reports both.

## Why it matters

The Overview page gives leaders a ready-made picture of how many agents are in use, which groups use them and, through creator type, how much of that use comes from user-built agents compared with admin-approved ones. That is useful input for agent governance and adoption planning, and it is available without anyone building a report.

The Learn page says the Agent Dashboard is on by default as part of the Viva Insights web app, so the page arrives for the people the dashboard is shared with whether or not an administrator acts. Expect questions from leaders about the numbers, and decide beforehand who should see group-level agent data.

## Risk assessment

**Data exposure**

- The Overview page aggregates agent and user activity by group, organisation or job function over 28 days. Group metrics and agent names are suppressed for groups below the minimum group size, which is the control that limits how finely a leader can see individuals' agent use.
- The Agent Dashboard page states that the analysed population includes all employees who have had agent activity, and the preview notice says the feature allows personal data processing. Users on the exclusion list are covered under the notes below the controls table.

**Security & identity**

- Access is determined by Entra ID data (manager hierarchy) for qualifying tenants, plus Global Administrators, enabled managers, Viva Insights Analysts with global partition access and delegates. Access to the Agent Dashboard needs both the Viva Insights web app control and the Agent Dashboard control to be on, which are the two rows in the controls table.

**Autonomy & actions**

- No change: the page is reporting and the Learn page describes no action it takes on agents or users.

**Change & support**

- The creator-type split depends on how Microsoft classifies an agent as User, Your org, Microsoft or Third party, so expect support questions when a leader's expectations do not match the counts.
- The roadmap says Launched while the Learn page still shows a preview banner, so behaviour and view availability may change before Learn is updated.

## Cost and licensing

The Agent Dashboard page (Learn, "Connect to the Agent Dashboard (preview)") lists licensing requirements by view. The Copilot Agent Dashboard view needs at least 50 Microsoft Copilot licences assigned and agent activity. The Agent 365 Dashboard view needs the same, plus Agent 365 licensing; without it, the **All agents** toggle does not appear.

The page publishes no price, meter or separate charge for the Overview page. The Copilot Agent Dashboard view reports Copilot Credit usage by employees without Microsoft Copilot licences, but the Overview page's cards are described as showing active agents, active users, agent responses or sessions. Indirect cost is admin time to manage access and communicate what leaders will see.

## Scope

**Users and access.** The dashboard is found under **Agent Dashboard** in the Viva Insights web app. Automatic access applies to senior leaders in tenants where most users share a single reporting line and there are at least 2,500 users with an Entra ID, plus Global Administrators, enabled managers who already have team-level Copilot Analytics access, Viva Insights Analysts with global partition access and users with delegate access. Global Administrators can disable access.

**Licences and views.** See the cost section: at least 50 Microsoft Copilot licences with agent activity, plus Agent 365 licensing for the Agent 365 Dashboard view.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and the web. The Agent Dashboard page says the dashboard is not currently available for national or regional clouds, including Microsoft's U.S. Government clouds and Office 365 operated by 21Vianet.

**Agents covered.** Both views cover agents built in Microsoft Copilot Studio, SharePoint and the Microsoft 365 Agents Toolkit, whether built by end users, formally published by the organisation, or created by Microsoft or third parties.

## Governance guidance

### Before rollout

- Decide who should see group-level agent data and check who already has access to the Viva Insights web app and the Agent Dashboard (Global Administrators, enabled managers, global-partition analysts, delegates).
- Confirm the licence position for each view: at least 50 Microsoft Copilot licences assigned, and Agent 365 licensing for the Agent 365 Dashboard view.
- Confirm the minimum group size and exclusion list settings that apply to the dashboards, described in the notes below the controls table.

### At rollout

- Tell leaders and analysts that the Overview page is the landing view of the Agent Dashboard and that it counts agents by creator type.
- Turn the Agent Dashboard off for the tenant, or scope it to chosen groups, if the organisation is not ready to show agent adoption data (rows 1 and 2 of the controls table).

### After rollout

- Review the creator-type breakdown with agent owners, particularly the share of User agents and how many are shared.
- Re-check the Learn page and the roadmap item for the removal of the preview banner or changes to which views are generally available.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard, including its Overview page, is available</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator (Global Administrators can also manage it). The page says the policy applies at tenant, group or user level; the example shown turns it off for everyone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Agent Dashboard <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app, which hosts the Agent Dashboard, is on</strong><br><small>Tenant</small><br><small class="controls__note">Turning it off disables the whole app, not only the Agent Dashboard. In the policy wizard, choose the Viva Insights app and the Viva Insights web app feature. AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Agent Dashboard needs both controls on: the Viva Insights web app control and the Agent Dashboard control. Turning the web app off disables the entire app, including the Microsoft Copilot Dashboard, Copilot Analytics reports and advanced analysis and admin tools, so the web app row is much wider than this feature. Learn gives the AI Administrator role for both; the page also says Global Administrators can manage all of these settings. Viva feature access management policies take effect within 24 hours unless noted otherwise.

Other settings on the same manage-settings page affect what the Overview page shows, and the page covers their steps: a minimum group size (10 employees by default, at least five), a unified exclusion list that hides chosen users from aggregates (the policy must be turned on to use it), organisational data upload, and, for the Agent 365 Dashboard view, a Viva Feature Access Management setting that can limit reporting to agents available to all users (non-public agents are those with creator type Your org or User; by default the Agent 365 Dashboard includes all agents). See https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard.

## Open questions

- The roadmap lists the item as Launched with General Availability, while the Agent Dashboard page still carries a preview banner. Which views and features are generally available? Watch the Learn page and roadmap item 559996.
- Which admin-centre approval decides whether an agent is counted as Your org or Third party rather than User on the creator-type breakdown?
- Will the automatic-access criteria (such as the 2,500-user threshold) or the licensing requirements change as the Agent Dashboard moves out of preview? Watch Message center and the Agent Dashboard Learn page.

<!-- rationale
risk: Low. The page is read-only reporting on the dashboard's existing agent-activity data, aggregated by group, with group metrics suppressed below the minimum group size.
cost: Low. The Agent Dashboard page names licence prerequisites (at least 50 Microsoft Copilot licences, plus Agent 365 licensing for the all-agents view) and no separate charge for the Overview page; the cost is admin and communication time.
impact: Low. Automatic access goes to senior leaders in qualifying tenants, Global Administrators, enabled managers, global-partition Viva Insights Analysts and delegates, not to end users generally.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing; Governance guidance: At rollout / behaviour: The Overview page is the dashboard's landing view and the first thing leaders and analysts see. | Found: Searched: "Agent Dashboard" "Overview" landing page read-only reporting actions; opened Connect to the Agent Dashboard (preview), including Access the dashboard and Overview page. It describes orientation before detailed reporting, not which page opens first. | Fix: Remove 'the first thing leaders and analysts see before they move into the detailed adoption reporting'. Replace the At rollout bullet with 'Tell leaders and analysts that the Overview page summarises agent adoption and counts agents by creator type.'
- [contradicted, blocker] Scope: Users and access; Risk assessment: Security & identity; rationale: impact / role: Senior leaders in qualifying tenants receive automatic access based on the Entra ID manager hierarchy. | Found: For those qualifying tenants, only users who meet all of the following criteria are enabled by default: 1. The user's in the top three levels in the organization. 2. The user has a significant portion of the organization in their reporting line. | Fix: Qualify the senior-leader access statements with 'who are in the top three organisational levels and have a significant portion of the organisation in their reporting line', as stated at https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard
- [contradicted, blocker] Scope: Users and access; Risk assessment: Security & identity; Governance guidance; rationale: impact / role: Global Administrators automatically have dashboard access. | Found: If you're a Privileged Identity Management (PIM) enabled tenant, global admins might not have access to the Agent Dashboard. If you want to give global admins access to the Agent Dashboard, add them explicitly using these steps. | Fix: Add 'In Privileged Identity Management (PIM) enabled tenants, Global Administrators might not have dashboard access and must be added explicitly if access is required.' Cite https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard and its linked manage-access instructions; qualify the repeated automatic-access descriptions accordingly. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: The top groups can be viewed by Group, Organization or Job function. | Found: Select View by to see the top groups by Group (the default), Organization, or Job function. | Fix: Add 'Job function is available only when the relevant organisational data has been uploaded' to the View by description. The same cited page states that this filter only appears after a FunctionType or Microsoft_JobDiscipline upload. | Source: https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard
- [supported, minor] controls[0].ui / admin-path: The Agent Dashboard control is reached through Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Agent Dashboard. | Found: Under Access Management, select Turn Advanced Insights on or off. ... On the Feature access management page, select Agent Dashboard and Add policy. | Fix: Complete the path as 'Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Feature access management > Agent Dashboard > Add policy'. The printed route reaches the correct feature but stops before Add policy and omits the page heading. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [supported, minor] controls[0].api / command: Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone creates the tenant policy disabling the Agent Dashboard. | Found: Add-VivaModuleFeaturePolicy -FeatureId <String> -IsFeatureEnabled <Boolean> -ModuleId <String> -Name <String> ... [-Everyone] | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources. Its syntax and parameter definitions verify the call, while the already-cited manage-settings page supplies VivaInsights, AgentDashboard, false and Everyone for this operation. Keep the call unchanged. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] controls[1].ui / admin-path: The Viva Insights web app control can be configured through Viva > Settings > Manage feature access > Create a policy. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. Select the Settings tab and select Manage feature access. Select Create a policy. | Fix: Complete the route as 'Settings > Viva > Settings > Manage feature access > Create a policy > Viva Insights > Viva Insights web app > Access setting > Off'. Keep the note about selecting the app and feature. The printed path reaches the policy page but omits the settings-menu heading and stops before the documented setting. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].api / command: Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId "Viva Insights web app" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone creates the tenant policy disabling the web app. | Found: The Everyone switch specifies that the policy applies to all users in the organization. ... $false: The feature is not enabled by the policy. | Fix: Add https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy to sources. The reference verifies the parameters and values; the already-cited manage-settings page supplies the Viva Insights web app feature identifier. Keep the call unchanged. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [supported, minor] controls[0].note; controls[1].note; Governance controls / role: AI Administrators can manage both controls, and Global Administrators can manage all these settings. | Found: In addition to the roles described below, all settings can also be managed by Microsoft 365 Global Administrators. ... Applies to: AI Administrator | Fix: Add 'The feature access management overview table lists Global admin for the Viva Insights web app, whereas this manage-settings page lists AI Administrator; the role documentation differs.' Both pages are already cited: https://learn.microsoft.com/viva/feature-access-management and https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
- [unsupported, minor] rationale: risk / behaviour: The Overview page is read-only reporting on the dashboard's existing agent-activity data. | Found: Searched: "Agent Dashboard" "Overview" landing page read-only reporting actions. Read the full Agent Dashboard page and manage-settings page. They describe adoption reporting, but do not explicitly establish read-only operation or that this new view uses only previously existing data. | Fix: Replace the risk rationale with 'Low. The Overview page summarises agent and user adoption over the last 28 days, with group metrics suppressed below the minimum group size.' This is supported by https://learn.microsoft.com/viva/insights/org-team-insights/agent-dashboard.
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells readers to check minimum group size and exclusion-list settings, but neither control has a table row. | Found: 'Confirm the minimum group size and exclusion list settings that apply to the dashboards' versus controls containing only 'Whether the Agent Dashboard ... is available' and 'Whether the Viva Insights web app ... is on'. | Fix: Remove the Before rollout bullet 'Confirm the minimum group size and exclusion list settings that apply to the dashboards, described in the notes below the controls table.' Those two checklist controls have no table row; keep the existing descriptive notes without adding rows.
-->
