---
title: "Viva Insights: Agent 365 Dashboard adds reporting for third-party platform agents"
slug: "microsoft-viva-expanded-agent-coverage-in-agent-dashboard"
roadmapId: 573169
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Microsoft plans to extend the Agent 365 Dashboard in Viva Insights to agents from third-party platforms. Learn does not yet describe it; the view needs Agent 365 licensing. No switch specific to it is documented, so review access."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "The Agent 365 Dashboard view needs at least 50 Microsoft Copilot licences with agent activity plus Agent 365 licensing, which Learn describes as per user. No price or licence specific to the third-party expansion is yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["agent-365","viva-insights","analytics","agents","agent-registry","viva-feature-access-management","adoption","monitoring"]
sources:
  - title: "Microsoft 365 Roadmap item 573169"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573169"
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
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Connected platforms in Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    kind: "learn"
  - title: "Connect existing agents to Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/connect-existing-agents"
    kind: "learn"
  - title: "Third-party agent observability with Microsoft Agent 365 (Frontier)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/third-party-agent-observability"
    kind: "learn"
  - title: "How to use the Agent 365 Business Analytics Agents page (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/services/agents"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
videos: []
related: ["microsoft-viva-copilot-analytics-agent-dashboard","microsoft-viva-copilot-analytics-agent-365-reporting-availability-for-microsoft-platform-a","microsoft-agent-365-registry-sync","m365-copilot-agent-365-business-analytics-experience","microsoft-viva-copilot-analytics-export-metrics-from-agent-dashboard"]
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
    note: "Preview. Learn lists the AI Administrator; Global Administrators can manage all settings. The Viva Insights web app control must also be on."
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
    note: "Turning the web app off disables the whole app, not only the Agent Dashboard. The AI Administrator does not get automatic access."
  - governs: "Whether the Agent 365 view includes non-public agents or only public agents"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Agent365DashboardNonPublicAgentsVisibility -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "Learn says it can be set at tenant, group or user level. Non-public means creator type Your org or user; public means Microsoft and third parties."
  - governs: "Switch for third-party platform agents in the Agent 365 Dashboard"
    scope: "tenant"
    ui: null
    api: null
    note: "No control specific to third-party coverage is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-08T23:04:12"
changes:
  - date: "2026-11-20"
    note: "New briefing: Agent 365 Dashboard in Viva Insights to report on third-party platform agents; Learn does not yet describe it, and its October CY2026 target has passed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 77 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: qualified who gets automatic leader access, removed an unsupported claim about employee records and the Connected platforms checklist step, and said admins can also read the dashboard."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 88 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 93 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 93
  confirmed: 91
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "2bd0e9c8e5f8cb36c87872812370faa4"
---

## What's changing

The roadmap item says customers can view reporting for agents from third-party platforms in the Agent 365 Dashboard in Microsoft Viva Insights (Copilot Analytics), giving a more comprehensive view of agent activity across the organisation. The roadmap lists the status as In development, with a target date and a preview date of October CY2026, release phases General Availability and Preview, platform Web and cloud Worldwide (Standard Multi-Tenant). Those October dates have passed at the time of writing (20 November 2026) while the status is still In development, and the description is worded as if the capability is already available.

Microsoft Learn does not yet describe this expansion: it names no third-party platforms, metrics or setup steps for the dashboard, so what follows about its behaviour is the roadmap's description plus background from Learn's pages on the existing dashboard.

That background: the Agent Dashboard in the Viva Insights web app has two views. Selecting **All agents** at the top right shows the Agent 365 Dashboard, which Learn describes as reporting on agent adoption and sessions for all supported agents used across Microsoft 365 apps, with history starting from when your organisation accepted the Agent 365 licensing terms of use. The Learn page is marked as a preview. Its **Agent creator type** filter already has a **Third party** option, defined as admin-approved agents built by a third party.

Separately, Microsoft Agent 365 can connect supported third-party agent platforms, such as Amazon Bedrock or Google Vertex AI, and sync their agents into the Microsoft 365 agent registry. Learn does not say whether the dashboard's new coverage draws on those connections. A Frontier-preview Agents page in Agent 365 Business Analytics also brings together reporting previously split between the Copilot Agent Dashboard and the Agent 365 Dashboard in the Viva Insights web app.

## Why it matters

Agent adoption figures that leaders quote will change if third-party agent activity starts to be counted alongside Microsoft agents. Active agents, sessions and the Third party creator-type counts are the numbers to expect to move, and senior leaders and analysts are among the people reading them.

Microsoft has not stated what the expansion does on arrival. Learn does say the Agent Dashboard is on by default as part of the Viva Insights web app, so plan as though anyone who already has dashboard access could see the wider coverage without an admin acting, and use the access controls below if you want to decide that first.

## Risk assessment

**Data exposure**
- The dashboard reports adoption metrics aggregated at the user level. Learn does not say which telemetry fields the dashboard takes from third-party platforms.
- Group-level metrics appear only for groups that meet the minimum group size, which is 10 employees by default, and agents whose users fall below it are left out of the agent list.

**Security & identity**
- Access to the dashboard follows existing rules. Automatic leader access requires a tenant with at least 2,500 Entra ID users and a majority in one reporting line; eligible leaders must be in the top three organisational levels and have a significant portion of the organisation reporting to them. The Agent Dashboard and Viva Insights web app controls decide who else can.
- If the coverage relies on Connected platforms, every currently supported platform needs a key-based credential such as an API key, secret or private key. Learn does not say whether the dashboard depends on those connections.

**Autonomy & actions**
- This is reporting. For connected platforms, Learn says connections are read-only by design and that Agent 365 never invokes, executes or interacts with agents in the source platform.

**Change & support**
- Numbers can shift when coverage widens, and the roadmap date has slipped past October CY2026 while the status is In development, so expect questions from leaders about changed figures.
- Learn's registry observability page says user counts are unavailable for third-party agents when the source platform does not provide Microsoft Entra user identities. Whether the dashboard behaves the same way is not stated.

## Cost and licensing

The Agent 365 Dashboard view needs the same licensing as the Copilot Agent Dashboard view, which is at least 50 Microsoft Copilot licences assigned and agent activity, plus Agent 365 licensing. If the organisation does not meet this, the **All agents** toggle does not appear. The Business Analytics Agents page (Frontier preview) likewise says that seeing agent sessions and registry insights for third-party agents needs Agent 365 licensing.

Learn says Microsoft Agent 365 is licensed on a per-user basis. The Agent 365 service description says it is available as a stand-alone subscription for use with eligible Microsoft 365 subscriptions and is also included with Microsoft 365 E7.

Not yet published: any price, meter or licence specific to the third-party coverage in this dashboard. Indirect cost is admin time to review access and to explain changed figures.

## Scope

Who: leaders and analysts with Agent Dashboard access. Learn says automatic leader access requires a tenant with at least 2,500 Entra ID users and a majority in one reporting line; eligible leaders must be in the top three organisational levels and have a significant portion of the organisation reporting to them. Viva Insights Analysts with global partition access and users with delegate access can also view it. Admin roles: the AI Administrator, and Microsoft 365 Global Administrators for all settings.

Clouds and platforms: the roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Learn adds that the Agent Dashboard is not currently available for national or regional clouds, including Microsoft's U.S. Government clouds and Office 365 operated by 21Vianet.

Prerequisites and data: the Viva Insights web app and the Agent Dashboard control must both be enabled. Dashboard data covers the previous 28 days with up to a six-day delay. Rollout mechanics for the third-party expansion are not described by the roadmap or Learn.

## Governance guidance

### Before rollout
- Confirm with your licensing owner that the tenant has at least 50 Microsoft Copilot licences assigned and Agent 365 licensing, since the **All agents** toggle does not appear without it.
- Decide which leaders and analysts should see third-party agent adoption, using the Agent Dashboard and Viva Insights web app access controls in the table below.

### At rollout
- Open the Agent Dashboard in the Viva Insights web app, select **All agents** and compare the **Third party** creator-type counts with what you expect.
- Decide whether the Agent 365 view should include non-public agents, using the visibility control in the table.
- Tell dashboard users that agent and session figures may change as coverage widens.

### After rollout
- Compare sessions shown in the dashboard with the **Activity** tab of a synced third-party agent in the Microsoft 365 agent registry.
- Track the roadmap item and the Agent Dashboard page for the platforms, metrics and licensing that Learn does not yet state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard is available, for the tenant, groups or users</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Learn lists the AI Administrator; Global Administrators can manage all settings. The Viva Insights web app control must also be on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Feature access management › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app that hosts the dashboard is available</strong><br><small>Tenant</small><br><small class="controls__note">Turning the web app off disables the whole app, not only the Agent Dashboard. The AI Administrator does not get automatic access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Agent 365 view includes non-public agents or only public agents</strong><br><small>Tenant</small><br><small class="controls__note">Learn says it can be set at tenant, group or user level. Non-public means creator type Your org or user; public means Microsoft and third parties.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId Agent365DashboardNonPublicAgentsVisibility -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for third-party platform agents in the Agent 365 Dashboard</strong><br><small>Tenant</small><br><small class="controls__note">No control specific to third-party coverage is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Agent Dashboard control and the Viva Insights web app control must both be enabled for someone to reach the dashboard. Learn lists the AI Administrator for these settings and says Global Administrators can manage all settings. Changes to access policies take effect within 24 hours unless noted for a specific feature.

Learn documents no control specific to third-party agent coverage in the dashboard at the time of writing (November 2026), which is why the last row is empty. The non-public agents control changes which creator types the Agent 365 view reports. Learn defines public agents as those created by Microsoft and third parties, but does not say whether agents synced from a connected platform count as Third party.

Connections to third-party platforms are managed separately in the Microsoft 365 admin center under Agents > All Agents > Connected platforms > Manage > + Connect a platform, described in the Connected platforms page. Learn does not say the dashboard's coverage depends on them.

## Open questions

- Which third-party platforms, agents and metrics will the Agent 365 Dashboard cover, and does coverage depend on Connected platforms connections? Watch the Agent Dashboard page and the roadmap item.
- What does the expanded coverage do on arrival, and is there a switch specific to it? Microsoft has not stated either.
- Will third-party agents whose platforms do not supply Microsoft Entra identities appear in active-user figures? The registry observability page says user counts are unavailable in that case.
- Do agents synced from a connected platform count as the Third party creator type and as public agents under the non-public agents control?
- Will any licence, meter or price apply specifically to the third-party coverage, and will the Viva Insights dashboard remain once Agent 365 Business Analytics consolidates the reporting?

<!-- rationale
risk: Low. This is reporting inside an existing dashboard, but it widens whose agent activity is counted, and no source states what the expansion does on arrival.
cost: Medium. The Agent 365 view needs Agent 365 licensing, licensed per user, on top of at least 50 Microsoft Copilot licences; no price or licence specific to this expansion is yet published.
impact: Medium. Leaders, analysts and admins with Agent Dashboard access would see third-party agent figures; most employees do not use the dashboard.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].ui; Governance controls: row 3 / absence: No admin UI control is documented for whether Agent 365 reporting includes non-public agents. | Found: You can also use VFAM to set whether reporting in the Agent 365 Dashboard view includes non-public agents, or only agents available to all users in the organization. | Fix: Replace controls[2].ui null with surface 'Microsoft 365 admin center', path 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting', and docs https://learn.microsoft.com/viva/control-access-admin-center. The linked VFAM UI guide documents selecting the app and feature, then On or Off under Access setting. Add to the existing row note: 'Select the Viva Insights non-public-agent reporting feature (FeatureId Agent365DashboardNonPublicAgentsVisibility); choose Off to exclude non-public agents.' Cite the UI guide in sources. Do not invent a feature display label: the feature-specific page supplies its identifier, while the general guide supplies the UI route. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: Most employees do not use the dashboard. | Found: Searched: "Agent Dashboard" "most employees" usage adoption. Read Agent Dashboard automatic and assigned access criteria and Business Analytics Agents; limited automatic eligibility is documented, not actual dashboard usage by most employees. | Fix: Remove '; most employees do not use the dashboard' from the impact rationale. Keep 'Medium. Leaders, analysts and admins with Agent Dashboard access would see third-party agent figures.'
-->
