---
title: "Microsoft 365 Copilot: declarative agents with actions in GCC High and DoD"
slug: "m365-copilot-declarative-agents-with-actions-available-in-gcc-high-and-dod"
roadmapId: 564606
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap lists declarative agents with actions as launched in GCC High and DoD, but Learn's cloud-support pages disagree. Check your cloud before makers build, and know where agents can be blocked."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's agent capabilities table lists custom actions for Copilot Chat without usage-based billing and for licensed Microsoft 365 Copilot users. Usage-based billing isn't supported in GCC or GCCH. No price specific to actions is stated on that page."
audiences: ["m365-admin","security","service-owner","maker"]
tags: ["declarative-agents","plugins","mcp","m365-copilot","extensibility","agent-governance","write-actions","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Declarative agents with Actions available in GCC High and DoD"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564606"
    kind: "roadmap"
  - title: "Declarative agents for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/overview-declarative-agent"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
  - title: "MCP and API plugins for declarative agents"
    url: "https://learn.microsoft.com/plugins/overview-plugins"
    kind: "learn"
  - title: "What is a Microsoft 365 Copilot plugin?"
    url: "https://learn.microsoft.com/plugins/overview"
    kind: "learn"
  - title: "Confirmation prompts for MCP and API plugins for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/plugin-confirmation-prompts"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Plan Licensing and Cost for Microsoft 365 Copilot Extensibility"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
videos: []
related: ["declarative-agents","plugins","mcp","m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds","m365-admin-center-control-settings-for-agents-with-actions-in-teams-toolkit"]
controls:
  - governs: "Whether an agent that carries actions is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API. Use of beta APIs in production applications is not supported. Requires a Microsoft Agent 365 licence; US Government L4 and L5 (DOD) are marked not supported."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options are All users (the default), No users, or specific users or groups. No supported User access automation is documented for GCC High or DoD; the documented TCM preview is global-service only."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-20T22:37:15"
changes:
  - date: "2026-11-23"
    note: "First briefing: roadmap status Launched for GCC High and DoD, with Learn's conflicting cloud-support statements, controls and open questions set out."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected: the User access setting has documented preview TCM automation (global service only); the first Why it matters sentence is narrowed to the outside-hosted API or MCP server; beta-API and cost-planning notes added."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 67
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "78c1d99df9ba766b291b1ba17d982016"
---

## What's changing

The roadmap item lists declarative agents with actions as Launched, in the General Availability phase, for GCC High and DoD on Desktop and Web, with a target date of June CY2026. It describes actions as the way a declarative agent in Microsoft 365 Copilot calls APIs, plugins and enterprise workflows, powered by API plugins, MCP tools and enterprise connectors, with Copilot choosing the action that fits the user's request.

Microsoft Learn describes these actions as MCP and API plugins: a plugin manifest tells Copilot about a REST API or MCP server, and Copilot decides when the agent should use it. The first time Copilot uses a plugin it asks the user to allow or cancel. After that, operations that only retrieve data don't prompt, while operations that modify data do, and plugin developers can change this for individual operations. The API or MCP server is hosted outside Microsoft 365.

Learn's government-cloud statements do not match each other, and this briefing reports them without picking one (at the time of writing, November 2026). The declarative agents overview says GCC High supports pro-code agents built with Microsoft 365 Agents Toolkit and Agent Builder, and that DoD has limited support: only Toolkit-built pro-code agents, with no Agent Builder. The Microsoft Copilot service description says GCC-High currently only supports agents created with Agent Builder and those published via admin controls, and lists declarative agents as not currently available in DoD. The extensibility known-issues page lists authenticated custom actions and publishing agents through the Agents Toolkit as not currently supported in Microsoft 365 Government tenants.

## Why it matters

In GCC High and DoD tenants an action is the point where a Copilot conversation reaches an API or MCP server hosted outside Microsoft 365. Whoever approves an agent is approving a call path to that system, so the decision belongs with service owners and security, not only with makers.

Microsoft has not stated what happens on arrival, and the roadmap item names no default, so base your plan on no source saying existing behaviour changes. Because Learn's pages disagree about what each government cloud supports, test in your own tenant before telling makers that actions are available, and treat the roadmap's Launched status as the claim to verify.

## Risk assessment

**Data exposure**
- Copilot maps parts of the user's request to function parameters and sends them to the plugin's API or MCP server, which Learn says is hosted outside Microsoft 365. Ask security to confirm each endpoint's host is acceptable for GCC High or DoD data before approving the agent. Learn describes a first-use prompt that asks the user to allow or cancel.

**Security & identity**
- Learn lists authenticated custom actions as not currently supported in Microsoft 365 Government tenants, so confirm how a given action authenticates before relying on it. Learn does not say which identity an action runs as in these clouds.

**Autonomy & actions**
- Operations that modify data prompt the user by default, but plugin developers can change the prompt per operation (`x-openai-isConsequential` for API plugins, `readOnlyHint` for MCP tools). Read each plugin's OpenAPI document or tool list for those overrides before approving it.

**Change & support**
- Learn's overview, service description and known-issues pages give different pictures of GCC High and DoD support, so expect questions from makers whose agents publish in one cloud and not another. Blocking an agent does not necessarily revoke connected-service permissions or credentials, so review those separately.

## Cost and licensing

Learn's agent capabilities table (prerequisites page) lists custom actions as available in all three columns: Copilot Chat without usage-based billing, Copilot Chat with usage-based billing, and licensed Microsoft 365 Copilot. It also says Microsoft 365 Copilot Chat is available to all Microsoft 365 users, and that usage limits apply to the included features.

The same page says usage-based billing isn't supported in GCC and GCCH; it does not name DoD in that note. Learn's known-issues page also lists usage billing for extensibility features as not supported in Microsoft 365 Government tenants. A plugin's API or MCP server runs separately from Copilot, so any hosting or licence for it is outside Copilot's licensing.

To script blocking through the Graph package API, the reference requires a Microsoft Agent 365 licence. No price specific to actions is stated on the pages read.

## Scope

The roadmap record lists GCC High and DoD, Desktop and Web, General Availability, status Launched, target June CY2026. Learn's overview says GCC has full declarative agent support, and the roadmap item lists only GCC High and DoD.

The Learn pages differ on what GCC High and DoD support (see What's changing), and the prerequisites page notes agents grounded in shared tenant work data aren't currently available in GCC, GCCH or DoD. Users need Copilot Chat or a Microsoft 365 Copilot licence per the capabilities table. The Agents Toolkit route needs sideloading of custom apps enabled by an admin (Teams admin center > Teams apps > Setup policies > Global (Org-wide default) > Upload custom apps).

## Governance guidance

### Before rollout
- Test in a non-production GCC High or DoD tenant to see which of Learn's cloud-support statements holds for your cloud, and write the result into your makers' guidance.
- Check the **User access** setting (Microsoft 365 admin center > Agents > Settings > User access), whose default Learn gives as All users, and decide who should be able to use agents and plugins.
- Ask security to review each planned plugin's endpoint host, authentication method and any confirmation-prompt overrides in its OpenAPI document or MCP tool list.
- Confirm whether you hold a Microsoft Agent 365 licence if you plan to script blocks through the Graph package API.

### At rollout
- Limit User access to a pilot group of users before opening it to everyone.
- Record the owner and external endpoint for each agent that has actions, and approve only those security has reviewed.
- Brief users on the first-use prompt and the confirmation shown for operations that modify data.

### After rollout
- Block any agent whose actions reach an endpoint you have not approved (Microsoft 365 admin center > Agents > All agents > agent > Block), then review connected-service permissions separately.
- Re-read Learn's overview, service description and known-issues pages and Message center for changes to GCC High and DoD support.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent that carries actions is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta API. Use of beta APIs in production applications is not supported. Requires a Microsoft Agent 365 licence; US Government L4 and L5 (DOD) are marked not supported.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Options are All users (the default), No users, or specific users or groups. No supported User access automation is documented for GCC High or DoD; the documented TCM preview is global-service only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Blocking acts on the selected agent. Learn says that if an agent is included in a plugin you should not assume the action also applies to the whole plugin package, and that blocking doesn't necessarily revoke connected-service permissions or credentials. Plugins, skills and MCP servers are managed under Agents > Tools, which this briefing does not give a row for.

Learn documents preview Tenant Configuration Management (TCM) automation for microsoft.agent.useraccess, using properties.valueObject.userAssignmentCategory with everyone or noOne. TCM is available only in the global service, not in national clouds. The Learn pages read do not state whether the Agents pages in the Microsoft 365 admin center are available in GCC High or DoD; the agent actions page says GCCH environments support publishing agents to the organisation. The confirmation prompt for data-modifying operations is set by the plugin developer, not by a documented admin setting.

## Open questions

- Which of Learn's descriptions of GCC High and DoD support is current for declarative agents with actions: the overview, the service description or the known-issues page? Watch the overview page and the Microsoft Copilot service description.
- Does an action in GCC High or DoD run under the user's identity, and does the known-issues entry on authenticated custom actions mean only unauthenticated actions work? Watch the known-issues page.
- Does the Graph package block API, listed as unsupported for US Government L4 and L5 (DOD), have a counterpart for GCC High and DoD tenants? Watch the copilotPackage reference.
- What state do declarative agents with actions arrive in for tenants that do nothing? Watch Message center for a notice.

<!-- rationale
risk: Medium. Actions send requests to an API or MCP server that Learn says is hosted outside Microsoft 365, and data-modifying calls can be set by the developer not to prompt; blocking and user-access controls exist but need configuring.
cost: Low. Learn's prerequisites table lists custom actions for Copilot Chat users without usage-based billing, so the known cost is admin time; usage-based billing isn't supported in GCC or GCCH, and external API hosting is separate.
impact: Medium. Makers and the users of agents with actions in GCC High and DoD tenants notice it; Learn's pages give different pictures of what each cloud supports, which will generate support questions.
-->
