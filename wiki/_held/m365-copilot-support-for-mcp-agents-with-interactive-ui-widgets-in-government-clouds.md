---
title: "Microsoft 365 Copilot: interactive UI widgets from MCP agents in US Government clouds"
slug: "m365-copilot-support-for-mcp-agents-with-interactive-ui-widgets-in-government-clouds"
roadmapId: 564608
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "MCP-based agents in Microsoft 365 Copilot Chat can show interactive UI widgets in GCC, GCC High and DoD, per the roadmap. Learn's government-cloud limits on agents differ by cloud, so check them before developers build."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Desktop","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's agent capabilities table lists MCP Apps (interactive UI widgets) as included for Copilot Chat without usage-based billing, with usage-based billing and with a Microsoft 365 Copilot licence. Usage limits apply to all included features. A government-specific licence statement is not yet published."
audiences: ["m365-admin","service-owner","security"]
tags: ["mcp","mcp-server","m365-copilot","copilot-chat","declarative-agents","extensibility","agents","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 564608"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564608"
    kind: "roadmap"
  - title: "Add MCP apps to declarative agents in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/plugin-mcp-apps"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "What's new in Microsoft 365 Copilot extensibility"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/whats-new"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
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
videos: []
related: ["m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds","mcp","microsoft-copilot-studio-deliver-rich-interactive-app-experiences-in-copilot-studio-agents","m365-copilot-app-blocks"]
controls:
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Acts on the selected agent, not necessarily its plugin, shared MCP servers or connections. API is preview, needs an Agent 365 licence and is listed as unavailable in US Government L4 and L5 (DOD)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-18T23:05:00"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item: interactive UI widgets for MCP agents in GCC, GCC High and DoD, with Learn's differing government-cloud limits on agents reported beside the roadmap listing."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 65
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "a691b26c888c7fb51c35867cdc0e3bf5"
---

## What's changing

The roadmap item states that MCP-based agents in Microsoft 365 Copilot Chat will be able to show rich, interactive UI widgets directly in the chat, and it lists GCC, GCC High and DoD. Developers build the widgets. Users see them when they use an agent that implements them, and the roadmap says administrators continue to manage these agents through the Microsoft 365 admin center.

Microsoft Learn describes the capability as MCP apps: interactive UI widgets delivered by an MCP server (a service that exposes tools to an agent) and rendered inside Microsoft 365 Copilot. Learn's what's-new page says widgets can render inline or in full-screen mode. Learn's page on MCP apps does not say which clouds it covers, so the behaviour below is the general description, not a confirmed description of government clouds.

Learn's government-cloud statements about agents differ by cloud. The Microsoft 365 Copilot service description lists declarative agents as available in GCC, as available in GCC High with a footnote that only agents created with Agent Builder or published through admin controls are supported, and as "Not currently available" in DoD. The roadmap item lists all three clouds. This briefing reports both and does not choose between them.

The roadmap record shows the status Rolling out, release phase General Availability, platforms Desktop and Web, and a target of August CY2026. That target month has passed at the time of writing (November 2026), and the record was last modified on 18 August 2026. Microsoft has not stated rollout mechanics for the government clouds.

## Why it matters

A widget turns an agent from a text answer into an interface that can call tools on its MCP server, so the question for a service owner is which MCP servers your developers connect and where they are hosted. Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so the practical exposure is the agents that developers in your tenant choose to build and share.

The differences between the roadmap, the service description and Learn's known-issues page matter most for GCC High and DoD tenants. Confirm what your cloud supports before developers invest in widget agents, so that nobody builds an agent that the cloud does not then run.

## Risk assessment

**Data exposure**
- Learn says Copilot renders widget UI under an MCP server-specific host of the form `{hashed-mcp-domain}.widget-renderer.usercontent.microsoft.com`, and that both the MCP server and its identity provider must allow it. Learn does not say how that host relates to the government cloud boundary, so ask developers where each server is hosted.
- Learn says agents grounded in shared tenant work data are not currently available in GCC, GCC High or DoD, which limits what a widget agent in those clouds can read from Microsoft 365.

**Security & identity**
- Learn says Copilot supports OAuth 2.1 and Microsoft Entra single sign-on for MCP apps, and anonymous authentication (the **None** option in Agents Toolkit) for development, which must be replaced before production. Ask developers which type each server uses.
- Learn's known-issues page lists authenticated custom actions as not currently supported in Microsoft 365 Government tenants. The MCP apps page does not say whether that limit covers MCP widget agents, so confirm it before approving an agent that signs users in.

**Autonomy & actions**
- Learn's walkthrough says the user is prompted to allow the agent to connect to the MCP server, and the widget can call tools on its server. Treat each connected server as a decision about an outside system.

**Change & support**
- Learn's known-issues page lists publishing agents through the Microsoft 365 Agents Toolkit as not currently supported in Microsoft 365 Government tenants, while the MCP apps page lists the Toolkit (version 6.12.0 or later) among its prerequisites. Expect developer questions about which route works in your cloud.
- Learn says not all widget capabilities are supported in Copilot, for example file upload and modal windows are marked unsupported, so a widget that works in another host may behave differently here.

## Cost and licensing

Licence: Learn's agent capabilities table lists MCP Apps (interactive UI widgets) as included for Copilot Chat without usage-based billing, for Copilot Chat with usage-based billing, and for licensed Microsoft 365 Copilot. It adds that usage limits apply to all included features. The same page lists the Microsoft 365 Copilot add-on licence for full agent access.

Meter: the page says usage-based billing (consumed as Copilot Credits) is not supported in GCC and GCC High. It does not mention DoD for usage-based billing. A Copilot Credits rate specific to widgets is not published on that page.

Indirect costs: developer time to build and host MCP servers, and admin time to review and block agents. The Graph call for blocking an agent needs a Microsoft Agent 365 licence (see the controls table).

## Scope

The roadmap item lists GCC, GCC High and DoD, the Desktop and Web platforms and General Availability, with the status Rolling out and a target of August CY2026.

Users: anyone who can use an agent that implements widgets. Learn's user access setting for agents and plugins can limit who that is. Developers need the requirements Learn lists for MCP apps, including a remote MCP server that provides UI widgets and, for the walkthrough, the Microsoft 365 Agents Toolkit. Learn's service description limits GCC High to agents created with Agent Builder or published through admin controls and lists declarative agents as not currently available in DoD.

## Governance guidance

### Before rollout
- Ask developers which MCP servers will return widgets, who hosts each one, and which sign-in type each uses, and record the answers per agent.
- Check Learn's service description and known-issues page for your cloud, because they list government-cloud limits on declarative agents and on authenticated custom actions that the roadmap item does not.
- Decide who may use agents and plugins at all, using the user access setting described under the controls table.

### At rollout
- Review each new widget agent on the Agents > All agents page of the Microsoft 365 admin center before pilot users receive it.
- Block any agent that has not been reviewed, using the Block control in the table, and tell its developer.
- Pilot each widget agent with a small group and confirm that the widget renders in your cloud, not only that the agent builds.

### After rollout
- Revisit the agent list on a schedule and block agents whose MCP server owner or sign-in type has changed.
- Re-read the service description and the known-issues page for changes to government-cloud support, and watch Message center for this item.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Acts on the selected agent, not necessarily its plugin, shared MCP servers or connections. API is preview, needs an Agent 365 licence and is listed as unavailable in US Government L4 and L5 (DOD).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls act on the agent, not on the widget. Learn says the block and unblock actions apply to the selected agent, and that if the agent is included in a plugin, the action does not necessarily apply to the whole plugin package, its skills, shared MCP servers or connections. Learn points to Agents > Tools for managing plugins, skills and MCP servers.

The Agents > Settings > User access page in the Microsoft 365 admin center controls which users or groups can access agents and plugins, and Learn describes plugins there as including MCP servers. The page names All users as the default for that setting.

The Graph call is a preview API under /beta, needs a Microsoft Agent 365 licence, and Learn lists it as unavailable in US Government L4 and L5 (DOD).

## Open questions

- Does the roadmap's DoD listing mean declarative agents with widgets run in DoD, given that the service description lists declarative agents as not currently available there? Watch the service description and Message center.
- Does the known-issues limit on authenticated custom actions in Microsoft 365 Government tenants cover MCP widget agents that sign users in with OAuth 2.1 or Entra single sign-on?
- Which publishing route works in government clouds for a widget agent, given that publishing through the Agents Toolkit is listed as not supported there?
- Is there a setting that turns widgets off separately from the agent, or is blocking the agent the only route? Watch the agent settings page.
- Is the widget host `{hashed-mcp-domain}.widget-renderer.usercontent.microsoft.com` the same in each government cloud? Confirm with the MCP apps page before changing firewall or identity provider rules.

<!-- rationale
risk: Medium. Widgets are delivered by an MCP server that runs outside Microsoft 365, and Learn's government-cloud limits on agents differ by cloud. Agent-level controls exist, but none is documented for widgets alone.
cost: Low. Learn's agent licensing table lists MCP Apps (interactive UI widgets) as included in all three columns, so the cost known is admin and developer time. A government-specific licence statement for widgets is not yet published.
impact: Low. Only people who use an agent that implements widgets see them, and developers must build those agents first. The roadmap says administrators keep managing these agents in the Microsoft 365 admin center.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Open questions: authenticated actions / absence: Whether the government restriction on authenticated custom actions covers MCP widget agents remains unconfirmed. | Found: MCP and API plugins are custom actions that enable declarative agents in Microsoft 365 Copilot to interact with Model Context Protocol (MCP) servers or REST APIs | Fix: Replace the applicability caveat with: 'MCP plugins are custom actions, so Learn's government restriction on authenticated custom actions covers authenticated MCP plugins used by these declarative agents.' Cite https://learn.microsoft.com/plugins/overview-plugins alongside the existing known-issues source. Remove the open question asking whether that restriction covers authenticated MCP widget agents. Keep the general MCP authentication description and the roadmap listing distinct from this documented government restriction. | Source: https://learn.microsoft.com/plugins/overview-plugins
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] rationale: risk; Risk assessment: Autonomy & actions / behaviour: The MCP server is an external service operated separately from the Microsoft 365 agent package. | Found: A Model Context Protocol (MCP) server is an external service that exposes tools and resources through MCP. The running server isn't part of the plugin package. | Fix: Add https://learn.microsoft.com/plugins/plugin-type-mcp-servers to sources for the statement that the MCP server runs externally and separately from the agent package. | Source: https://learn.microsoft.com/plugins/plugin-type-mcp-servers
- [contradicted, minor] Governance guidance: Before rollout, user access / consistency: The checklist tells readers to set User access, but the controls table contains no User access row. | Found: Decide who may use agents and plugins at all, using the user access setting described under the controls table. The table's only row is: Whether an agent is blocked for the whole organisation. | Fix: Remove the Before rollout checklist bullet 'Decide who may use agents and plugins at all, using the user access setting described under the controls table.' It names a control without a table row; retain the documented User access explanation beneath the table.
-->
