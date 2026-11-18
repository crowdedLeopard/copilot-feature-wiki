---
title: "Microsoft 365 Copilot: MCP-based agents for US Government clouds"
slug: "m365-copilot-mcp-based-agent-enablement-for-u-s-government-clouds"
roadmapId: 564607
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft 365 Copilot agents built on MCP servers are listed as launched for GCC, GCC High and DoD. Learn's government-cloud limits for agents differ by cloud, so check them before developers connect MCP servers."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Desktop","Web"]
targetDate: "June CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for MCP-based agents in GCC, GCC High or DoD. Learn describes agent access by licence type and says usage-based billing is not supported in GCC and GCCH."
audiences: ["m365-admin","service-owner","security"]
tags: ["mcp","m365-copilot","agents","declarative-agents","extensibility","plugins","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 564607"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=564607"
    kind: "roadmap"
  - title: "Known issues"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/known-issues"
    kind: "learn"
  - title: "Microsoft Copilot"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "MCP and API plugins for declarative agents"
    url: "https://learn.microsoft.com/plugins/overview-plugins"
    kind: "learn"
  - title: "Build a plugin for a declarative agent from an MCP server"
    url: "https://learn.microsoft.com/plugins/build-mcp-plugins"
    kind: "learn"
  - title: "Add MCP apps to declarative agents in Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/plugin-mcp-apps"
    kind: "learn"
  - title: "Set up your development environment for your plugin"
    url: "https://learn.microsoft.com/plugins/prerequisites"
    kind: "learn"
  - title: "Manage agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-copilot-agents-integrated-apps"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Plan data, privacy, and security"
    url: "https://learn.microsoft.com/plugins/data-privacy-security"
    kind: "learn"
  - title: "Declarative agents for Microsoft 365 Copilot"
    url: "https://learn.microsoft.com/plugins/overview-declarative-agent"
    kind: "learn"
videos: []
related: ["mcp","m365-copilot-copilot-extensibility-users-in-gcc-h-will-be-able-to-use-custom-engine-agents","m365-copilot-new-m365-copilot-usage-reports-for-copilot-search-connectors-and-agents-for-u","m365-copilot-use-agent-365-agents-within-m365-copilot-chat-and-declarative-agents"]
controls:
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocks the selected agent, not necessarily a shared MCP server or its connected-service permissions or credentials. API is preview, needs an Agent 365 licence and is listed as unavailable in US Government L4 and L5."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: reports the roadmap launch for GCC, GCC High and DoD alongside Learn's differing government-cloud limits for agents."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after the independent check: reworded the MCP tool-access claim, stated that Learn's authenticated custom actions restriction covers MCP actions, and narrowed the block control note to the selected agent."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 56
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "8c64c8904bcf8311e643d0e6d9b2953d"
---

## What's changing

The roadmap item states that Microsoft is introducing support for Model Context Protocol (MCP)-based agents in Microsoft 365 Copilot for the GCC, GCC High and DoD clouds. Developers can build Copilot agents that use MCP servers, and users interact with those agents through familiar Copilot experiences. The roadmap item lists Desktop and Web as platforms.

Microsoft Learn does not describe this item for government clouds. Its general guidance says an MCP plugin is an action for a declarative agent: the plugin manifest connects the agent to a remote MCP server, and it does not package or host the running server. By default Copilot resolves the plugin's tools from the MCP server at runtime, and a developer can instead pin a fixed set of tools.

The roadmap and Learn do not fully agree. The roadmap lists all three clouds, but the Microsoft 365 Copilot service description lists declarative agents as "Not currently available" in DoD and, for GCC High, supports only agents created with Agent Builder or published through admin controls. The declarative-agent overview instead lists limited DoD support for pro-code agents built with Microsoft 365 Agents Toolkit, and states that GCCH supports pro-code agents built with Microsoft 365 Agents Toolkit as well as Agent Builder. The Learn known-issues page lists authenticated custom actions, usage billing for extensibility features and publishing through the Microsoft 365 Agents Toolkit as not supported in Microsoft 365 Government tenants. This briefing reports both and does not choose between them.

The roadmap record shows the status as Launched, with a target of June CY2026 and release phase General Availability.

## Why it matters

MCP servers are separate services. An agent can invoke the MCP tools made available to it, subject to authentication, permissions and its tool configuration, so each connection is a decision about a system outside Microsoft 365 that an administrator in a regulated tenant will want to see. Microsoft has not stated what happens on arrival, and no source says existing behaviour changes, so the practical exposure is the agents that developers choose to build and share.

The unresolved differences between the roadmap, the service description and the known-issues page matter most for GCC High and DoD tenants. Confirm what applies in your cloud before developers build against it, so that nobody builds an agent that the cloud then does not support.

## Risk assessment

**Data exposure**
- An MCP plugin sends the agent's tool calls to a remote server that runs separately from Microsoft 365, hosted by whoever owns it. Learn does not say, at the time of writing (November 2026), how such a server relates to the government cloud boundary, so ask the developer who hosts each server and where.
- Learn says agents grounded in shared tenant work data are not currently available in GCC, GCCH or DoD, which limits what a government-cloud agent can be grounded on.

**Security & identity**
- Learn's walkthrough uses an OAuth client so that Copilot obtains an access token on behalf of the signed-in user each time the agent calls the MCP server. A separate Learn page says a server in development can use authentication type None and that authentication should be added before production. Ask developers which type each server uses.
- Learn classifies MCP plugins as custom actions, so its Government restriction on authenticated custom actions covers authenticated MCP actions. The roadmap nevertheless lists MCP-based enablement as launched; it does not explain that conflict.

**Autonomy & actions**
- Learn says MCP and API plugins can, when supported, create, update and delete data through natural-language prompts, so an MCP-based agent can change data in the connected system, not only read it.

**Change & support**
- With dynamic tool discovery, the agent gets the tools the server exposes at runtime, so the tool set can change without the agent being republished.
- The service description, known-issues page and roadmap differ on what government clouds support, so expect support questions about agents that build but do not run.

## Cost and licensing

Licence: the roadmap item and Learn do not state a licence for MCP-based agents in US Government clouds. Learn's agent prerequisites page describes agent access by licence type (a Microsoft 365 Copilot add-on licence, Microsoft 365 Copilot Business, Microsoft 365 E7 and usage-based billing) and does not single out MCP agents for government clouds. Not yet published for this feature.

Meter: the same page says usage-based billing (Copilot Credits) is not supported in GCCH and GCC, and the known-issues page lists usage billing for extensibility features as not supported in Microsoft 365 Government tenants. The page does not mention DoD for usage-based billing.

Indirect costs: developer time to build and host MCP servers, which run separately from the agent package, and admin time to approve and monitor agents. Calling the agent package API needs a Microsoft Agent 365 licence, and Learn marks that API as not available in US Government L4 and L5 (see the controls table).

## Scope

The roadmap item lists GCC, GCC High and DoD, the Desktop and Web platforms and General Availability, with the status Launched and a target of June CY2026.

For developers, Learn's MCP walkthrough needs the requirements for Copilot extensibility options and an admin who allows sideloading of custom apps. Learn's agent prerequisites page says Microsoft 365 Copilot-licensed users and users in tenants with usage-based billing get agents with enhanced capabilities, and that usage-based billing is not supported in GCC or GCCH.

Learn's agent management page says publishing agents to the organisation is supported in GCCH and GCCM environments. Microsoft has not stated rollout mechanics for this item.

## Governance guidance

### Before rollout
- Ask developers which MCP servers they plan to connect, who hosts each one and which sign-in type it uses, and record the answers per agent.
- Check the Microsoft 365 Copilot service description and the Learn known-issues page for your cloud, because they list government-cloud limits for declarative agents that the roadmap item does not.
- Decide who approves agents before they reach users. Learn says agents published by your organisation go through an admin approval.

### At rollout
- Review new agents on the Agents > All agents page of the Microsoft 365 admin center before pilot users receive them.
- Block any agent that has not been approved, using the control in the table, and tell its developer.
- Pilot each MCP-based agent with a small group and confirm that it runs in your cloud, not only that it builds.

### After rollout
- Revisit the agent list on a schedule and block agents whose MCP server owner or sign-in type has changed.
- Re-read the service description and the known-issues page for changes to government-cloud support, and watch Message center for this item.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Blocks the selected agent, not necessarily a shared MCP server or its connected-service permissions or credentials. API is preview, needs an Agent 365 licence and is listed as unavailable in US Government L4 and L5.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The block control is Learn's general control for agents. It blocks the selected agent; blocking an agent does not necessarily block a shared MCP server or revoke connected-service permissions or credentials. Learn says to block or unblock an agent for the entire organisation by using the same controls as for any other app in the Microsoft 365 admin center.

The API side is a preview Microsoft Graph beta call. Learn says it needs a Microsoft Agent 365 licence and lists the API as not available in US Government L4 and L5, so it cannot be assumed to work in government tenants. The user-interface page has a note that publishing agents to the organisation is supported in GCCH and GCCM; it gives no equivalent statement for blocking in DoD.

Microsoft Learn documents no MCP-specific tenant switch or allow list of MCP servers for Microsoft 365 Copilot government clouds at the time of writing (November 2026).

## Open questions

- Which of the three clouds actually support MCP-based agents today, given that the service description lists declarative agents as not currently available in DoD and limited in GCC High? Watch the service description and the roadmap item.
- How is the roadmap launch reconciled with Learn's restriction on authenticated custom actions?
- Which licence or meter does an MCP-based agent need in GCC, GCC High and DoD, given that usage-based billing is not supported in GCC and GCCH?
- Can an administrator limit which MCP servers agents may call, and do the Agent 365 tool-management controls apply in US Government clouds?
- What is the default state on arrival? Microsoft has not stated it.

<!-- rationale
risk: Medium. An MCP plugin lets an agent call a separately hosted server that can create, update and delete data, and Learn lists government-cloud limits for agents that the roadmap item does not mention.
cost: Low. The only cost the sources show is admin and developer time; the licence for MCP-based agents in US Government clouds is not yet published, and Learn says usage-based billing is not supported in GCC or GCCH.
impact: Medium. Developers who build the agents and the users they share them with notice it; nothing in the sources says other users see a change.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: The licensing model is unknown because Microsoft has not published which entitlement covers these MCP-based agents. | Found: | Custom actions | ✅ | ✅ | ✅ | | Fix: Set licensing.model to "included". Replace the licensing notes and the Licence paragraph with: "Learn's general agent licensing table includes custom actions in Copilot Chat without usage-based billing and in licensed Microsoft 365 Copilot. Government-cloud support remains subject to the conflicting availability statements described above; MCP-specific government licensing terms are not separately published." In Open questions, replace the licence-or-meter question with "Are there any MCP-specific government licensing terms beyond the general agent entitlements?" In the cost rationale, replace "the licence for MCP-based agents in US Government clouds is not yet published" with "Learn documents general agent entitlements but no separate MCP-specific government licensing terms". The cited prerequisites table expressly covers custom actions, the class that includes MCP plugins. | Source: https://learn.microsoft.com/plugins/prerequisites
-->
