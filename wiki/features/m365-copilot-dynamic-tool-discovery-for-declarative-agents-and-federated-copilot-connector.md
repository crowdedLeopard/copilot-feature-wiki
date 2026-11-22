---
title: "Microsoft 365 Copilot: dynamic tool discovery for MCP plugins in declarative agents"
slug: "m365-copilot-dynamic-tool-discovery-for-declarative-agents-and-federated-copilot-connector"
roadmapId: 561855
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Declarative agents that use MCP plugins fetch their tools from the MCP server at runtime, so tool changes reach users without republishing. There is no separate admin switch: block the agent or scope who can use it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mobile","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The plugin prerequisites page lists custom actions for declarative agents in Copilot Chat (with and without usage-based billing) and in Microsoft 365 Copilot (licensed). No licence or meter specific to dynamic tool discovery is published."
audiences: ["m365-admin","security","service-owner"]
tags: ["m365-copilot","declarative-agents","mcp","mcp-server","extensibility","plugins","federated-connectors","agent-governance","m365-admin-center","auditing"]
sources:
  - title: "Dynamic tool discovery for MCP plugins in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/plugin-dynamic-tool-discovery"
    kind: "learn"
  - title: "MCP and API plugins for declarative agents"
    url: "https://learn.microsoft.com/plugins/overview-plugins"
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
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 561855"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561855"
    kind: "roadmap"
videos: []
related: ["mcp","m365-copilot-federated-copilot-connectors-in-m365-copilot","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto"]
controls:
  - governs: "Whether an agent that uses dynamic tool discovery is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Applies to the selected agent, not to its MCP server or connections. Graph call is beta, acts on a Copilot package and needs a Microsoft Agent 365 licence."
  - governs: "A tenant or agent switch for dynamic tool discovery itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn states there is no separate tenant- or agent-level switch; use the block row and agent assignment."
confidence: "high"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-05-13T23:00:44"
changes:
  - date: "2026-11-22"
    note: "New briefing: dynamic tool discovery for MCP plugins in declarative agents, with the block control and the documented absence of a dedicated switch."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 57
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "dd1d7b6045622de6f27dfe4a50976d26"
---

## What's changing

Declarative agents in Microsoft 365 Copilot that use an MCP server-based plugin can now resolve their tools at runtime, directly from the MCP server, instead of using the tool list captured in the plugin manifest at publish time. Developers can add, update or retire tools on their MCP server and users get the change without the agent being repackaged, revalidated and republished.

Microsoft's Learn page describes the mechanism: the platform fetches the current tool definitions from the MCP server at runtime, compares them with the last known set, validates the changes and applies them. Every newly discovered or modified tool is screened by responsible AI (RAI) and cross-prompt injection attack (XPIA) classifiers before it is activated for end users, and tool changes that fail validation are blocked. A developer can instead pin a fixed set of tools in the plugin manifest, and Learn says Microsoft 365 Agents Toolkit configures new MCP plugins for dynamic discovery by default. REST API plugins always use the tools in their manifest.

The roadmap item lists the status as In development with a target of June CY2026, a month that has passed. The release phase is General Availability, the cloud is Worldwide (Standard Multi-Tenant), and the platforms are Desktop, Mobile and Web. Learn already describes dynamic discovery as the default for MCP plugins used as declarative-agent actions, so the record and the documentation differ on whether this has arrived. This briefing reports both and does not choose between them.

The roadmap says support for federated Copilot connectors will follow the declarative agent support at a later stage and gives no date. The Learn page covers MCP plugins; for a plugin that references a remote MCP server through agentConnectors in the app manifest, it says dynamic discovery needs app manifest version 1.29 or later and a host that permits it.

## Why it matters

With pinned tools, Learn says any change to the tool surface needs the developer to update the manifest, resubmit the agent and have it revalidated and republished. With dynamic discovery, the MCP server's publisher decides when a tool is added, changed or removed, and Learn says the change takes effect near real time once the server exposes it and runtime validation passes. For a service owner, the tools an agent offers today may not be the tools reviewed when the agent was approved.

If nobody acts, Learn's documented default is dynamic discovery for MCP plugins in declarative agents, so expect it. Microsoft documents no switch for the capability itself; the controls are the existing per-agent block, the agent details banner and the audit log. Decide now which agents with MCP plugins you will allow, who owns each MCP server, and how you will find out when tools change.

## Risk assessment

**Data exposure**

- The tool list comes from the MCP server at runtime, so a publisher can add a tool that reads or sends data that the reviewed version did not. Learn says runtime RAI and XPIA classifiers screen new or modified tools, and that third-party apps still rely on publisher attestation, Microsoft 365 certification and store validation at publish time. The MCP server is hosted outside Microsoft 365, so the publisher's own terms apply to what it does with the data.
- Copilot asks the user before sending data to a plugin for the first time, so users see a prompt on first connection. Blocking the agent is the control if that is not enough.

**Security & identity**

- The MCP server can return a tool list tailored to the signed-in user, so two users of the same agent can see different tools. Test an agent with accounts that have different licences and roles before relying on one user's result.
- Blocking an agent does not necessarily revoke connected-service permissions or credentials. Manage the MCP server itself under Agents > Tools.

**Autonomy & actions**

- Tools that modify data need user confirmation by default after the first connection, but plugin developers can override the default. Confirm with each publisher whether newly discovered tools follow it.
- Tools resolved at runtime count toward the plugin limit. Learn says response quality might degrade with more than 10 functions or tools, so an MCP server that keeps adding tools can make an agent less reliable.

**Change & support**

- Because a tool change no longer needs a republish, support teams may be asked about behaviour that changed without any change to the agent package. The agent details page in the Microsoft 365 admin center shows a banner when the agent uses an MCP server whose tools can change at runtime.
- Purview audit records interactions with these agents under the Copilot workload, so tool use can be traced to the agent.

## Cost and licensing

Licence: the plugin prerequisites page lists declarative agent custom actions as available in Copilot Chat without usage-based billing, in Copilot Chat with usage-based billing, and in Microsoft 365 Copilot (licensed). That page also says usage limits apply to the included features in Copilot Chat without usage-based billing. The dynamic tool discovery page names no licence or meter of its own.

Meter: no meter specific to dynamic tool discovery is documented at the time of writing (November 2026). For how usage-based billing is metered where a tenant enables it, see [Copilot Credits](/concepts/copilot-credits/).

Indirect cost: administrator time to review agents and track MCP server owners. Using the Graph block operation needs a Microsoft Agent 365 licence, according to the reference page for that API.

## Scope

Scope is declarative agents that use MCP server-based plugins as actions. The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Desktop, Mobile and Web as platforms; the record lists no US Government cloud.

Users with Copilot Chat or Microsoft 365 Copilot can use these agents, subject to the licensing in the prerequisites table. Plugins that reference a remote MCP server through agentConnectors in the app manifest need manifest version 1.29 or later and a host that permits dynamic discovery. Federated Copilot connectors are planned for a later stage and are not covered by the Learn page.

## Governance guidance

### Before rollout

- Inventory declarative agents that use MCP plugins and open each agent's details in the Microsoft 365 admin center to read the banner on the **Data & tools** tab.
- Ask each internal developer or publisher whether the agent uses dynamic tool discovery or pinned tools, who owns the MCP server and how tool changes are deployed.
- Decide which agents you will allow and name the agents you would block with the **Block** action if a tool change misbehaves.

### At rollout

- Test each agent with accounts that have different licences and roles, because the MCP server can return a tool list tailored to the user.
- Check with each publisher how confirmation prompts work for tools that modify data, since developers can override the defaults.
- Run a Purview audit search with Workload = Copilot and the agent's TargetAgentName to record how interactions appear before tools change.

### After rollout

- Re-check the Data & tools tab for agents that gain tools and compare the audit records with the agents you approved.
- Block an agent with the Block row if its MCP server's tools change in a way you did not approve, and review the MCP server under Agents > Tools.
- Watch the roadmap item and the Learn page for the federated Copilot connector follow-on and for any change to the default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent that uses dynamic tool discovery is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">Applies to the selected agent, not to its MCP server or connections. Graph call is beta, acts on a Copilot package and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A tenant or agent switch for dynamic tool discovery itself</strong><br><small>Tenant</small><br><small class="controls__note">Learn states there is no separate tenant- or agent-level switch; use the block row and agent assignment.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn states that there is no separate tenant- or agent-level switch for dynamic tool discovery, and that administrators use the existing agent-level controls, including assigning an agent to specific users or groups to stage availability. The table therefore holds the block control and a row that records the missing switch.

Blocking applies to the selected agent. The agent actions page says not to assume the action also applies to the whole plugin package, its skills, shared MCP servers or connections, and that blocking does not necessarily revoke connected-service permissions or credentials. The Graph operation is a beta API that acts on a Copilot package and needs a Microsoft Agent 365 licence and the delegated CopilotPackages.ReadWrite.All permission.

Two tenant-wide settings under Agents > Settings also cover plugins, including MCP servers: **User access**, whose default is All users, and **Agent and plugin access**, which controls which publisher types users can view and install from the agent catalog. They are described on [Agent settings in Microsoft 365 admin center](https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings). They are general access controls and not specific to dynamic tool discovery.

## Open questions

- When will dynamic tool discovery arrive for federated Copilot connectors? The roadmap item says a later stage and gives no date; watch roadmap item 561855.
- The roadmap lists the item as In development with a June CY2026 target while Learn documents dynamic discovery as the default for MCP plugins. Which tenants and agents already behave this way? Watch the roadmap item and Message center.
- Do tools that are discovered after the first connection follow the same confirmation prompt defaults as tools reviewed at publish time? Ask the publisher and watch the Learn confirmation prompts page.
- Can administrators be told, or review a list of changes, when an MCP server adds or changes a tool, beyond the banner on the agent details page? Watch the Learn dynamic tool discovery page.

<!-- rationale
risk: Medium. An agent's tool list can change at runtime without republishing; Microsoft documents runtime RAI and XPIA screening, a per-agent block and audit records, but no switch for the capability itself.
cost: Low. The feature page names no licence or meter of its own, so the known cost is admin time; custom actions are listed for Copilot Chat with and without usage-based billing, and for licensed users.
impact: Medium. People who use declarative agents with an MCP plugin get tool changes as soon as the publisher deploys them; administrators see only a banner on the agent's details page.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / applicability: The package block operation can govern an agent represented by a Copilot package. | Found: A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. ... Block, unblock, and reassign ownership of packages. | Fix: Add 'Agent 365 Package Management API overview' at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview to sources; it establishes why the package operation can govern an agent. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist instructs readers to check the discovery banner, search audit records and review MCP servers, but none has a corresponding controls-table row. | Found: Checklist: 'read the banner on the Data & tools tab'; 'Run a Purview audit search'; 'review the MCP server under Agents > Tools'. Table: only agent blocking and the absent discovery switch. | Fix: Remove the Before rollout bullet beginning 'Inventory declarative agents', the At rollout bullet beginning 'Run a Purview audit search', and the After rollout bullet beginning 'Re-check the Data & tools tab'. In the After rollout block bullet, remove ', and review the MCP server under Agents > Tools'. Keep the supported descriptions of these surfaces elsewhere; do not add control rows.
-->
