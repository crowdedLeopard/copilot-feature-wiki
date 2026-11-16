---
title: "Copilot Studio: MCP-compliant tools in agents and workflows"
slug: "copilot-studio-mcp-tools-in-agents"
roadmapId: 562221
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can connect Model Context Protocol servers as tools, giving agents live access to external systems. MCP tools ride on Power Platform connectors, so data policies and endpoint filtering are the governing controls."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Included in Copilot Studio authoring. Tool calls (including MCP) consume Copilot Credits for agents on the Microsoft Copilot harness; standard-harness agents bill messages per existing Copilot Studio rates."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["copilot-studio","mcp","tools","connectors","data-policies","endpoint-filtering","extensibility","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 562221"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562221"
    kind: "roadmap"
  - title: "Model Context Protocol (MCP) in Copilot Studio overview"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp"
    kind: "learn"
  - title: "Add an MCP server to your agent as a tool"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-mcp-server"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Key concepts: Copilot Studio security and governance"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance"
    kind: "learn"
  - title: "Which MCP servers users and agents may reach in Microsoft 365 Copilot (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Which connectors, including MCP connectors, agents may use in an environment (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Allowed endpoints for HTTP and custom connectors (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Allowed endpoints for HTTP and custom connectors (PowerShell)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    kind: "learn"
  - title: "Dataverse MCP server availability (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Which MCP servers and tools an agent connects to (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    kind: "learn"
videos: []
related: ["m365-copilot-federated-connectors-write-update-delete","copilot-studio-require-human-approval-for-tool-calls","copilot-studio-block-maker-provided-credentials","data-policies"]
controls:
  - governs: "Which MCP servers users and agents may reach in Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > tool > Block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    api: null
  - governs: "Which connectors, including MCP connectors, agents may use in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
  - governs: "Allowed endpoints for HTTP and custom connectors"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Data policy > Prebuilt Connectors > Configure connector > Connector endpoints"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations / Set-PowerAppDlpPolicyConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
  - governs: "Dataverse MCP server availability"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
  - governs: "Which MCP servers and tools an agent connects to"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > Add a tool > Model Context Protocol"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    api: null
    note: "Maker-side. The tool's Tools and Resources sections list what the server exposes."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 56
  unconfirmed: 4
  contradicted: 14
  attempts: 1
---

## What's changing

Copilot Studio agents and agent workflows can use tools exposed by any **Model Context Protocol (MCP)** server. MCP is an open protocol for describing tools, resources and prompts that a model can call. A maker adds an MCP server as a tool, the agent discovers the server's tools at run time, and the orchestrator calls them when a user's request needs them.

In Copilot Studio an MCP server is surfaced through a **Power Platform connector** (Microsoft publishes connectors for its own MCP servers and makers can create custom connectors for others). That design decision matters for governance: the same data policies, connector endpoint filtering and credential controls that apply to connectors apply to MCP tools. Blocking a connector in a data policy also blocks the MCP tools that rely on it.

The feature reached General Availability in June 2026 after a May preview, and Microsoft continues to add Microsoft-hosted MCP servers (for Dataverse, Microsoft 365, Agent 365 tooling and others) alongside partner servers. Copilot Studio can also expose an agent *as* an MCP server or A2A endpoint for other clients to call.

## Why it matters

MCP turns an agent from a question-answering assistant into something that can read and change records in line-of-business systems, often systems outside Microsoft 365. Each tool is a capability a maker is granting to a model that decides at run time whether to use it. The breadth of what can be connected, and the fact that tool descriptions come from the server rather than the maker, is why this sits at the top of most Copilot Studio risk registers.

The good news is that the control surface already exists. Because MCP rides on connectors, administrators who have mature data policies and endpoint filtering already govern MCP; administrators who have never tightened the default environment's policy now have a reason to.

## Risk assessment

**Data exposure**
- Prompt content and retrieved data flow to the MCP server. If the server is outside your tenant, that is a data transfer to a third party under whatever terms that server's operator sets.
- Tool descriptions are supplied by the server. A compromised or malicious server can describe tools in ways that steer the model (tool poisoning). Only allow servers from publishers you trust.

**Security & identity**
- Connections to MCP servers follow the connector credential model. Combine with the control that blocks maker-provided credentials so tools run as the user, not the maker.
- Custom connectors for MCP servers need their endpoints reviewed; use connector endpoint filtering to pin the host.

**Autonomy & actions**
- Tools can perform writes (create, update, delete, send). Without the human-approval toggle, the model acts as soon as it decides a tool is relevant.
- Autonomous agents with MCP tools act with no user in the loop at all.

**Change & support**
- Server operators can add or change tools without the maker republishing. Review agent tool inventories periodically.
- Tool calls consume Copilot Credits on the Microsoft Copilot harness; a chatty server can inflate cost.

## Cost and licensing

- MCP support is part of Copilot Studio; no separate licence.
- Agents on the **Microsoft Copilot harness** are billed in **Copilot Credits** for model tokens, tools (including knowledge and MCP) and the harness itself, from the moment building starts. Standard-harness agents bill messages under existing Copilot Studio rates.
- Partner MCP servers may carry their own subscription or API costs outside Microsoft billing.
- Indirect: connector review, custom connector maintenance, security review of each server.

## Scope

- All Copilot Studio environments where makers can add tools; the capability is on unless a data policy blocks the connector.
- Worldwide (standard multi-tenant). Government cloud availability not stated on the roadmap item.
- Makers need Copilot Studio authoring rights; users need the connection permissions the connector requires.
- Also surfaced in Microsoft 365 Copilot through federated connectors (MCP type), which have their own admin controls in the Microsoft 365 admin center.

## Governance guidance

**Before rollout**
- Review the data policy on the default environment and any environment where citizen makers build; move MCP-backed connectors you have not approved to the Blocked group.
- Agree an approval route for new MCP servers: who reviews the publisher, the tool list and the data the server will receive.
- Turn on connector endpoint filtering for the HTTP and custom connectors that reach MCP servers.

**At rollout**
- Allow Microsoft-published MCP connectors you need (for example Dataverse) in Business data groups, and keep partner servers in a separate approved list.
- Require end-user credentials for MCP connections in production environments.
- Enable human approval for write-capable tools where the harness supports it.

**After rollout**
- Review connector dependency insights in the Power Platform admin center quarterly to see which agents use which MCP servers.
- Audit tool call activity in Purview and watch for servers whose tool lists change.
- Track Copilot Credit consumption by agent; investigate agents whose tool usage rises without a change in user volume.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which MCP servers users and agents may reach in Microsoft 365 Copilot</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › tool › Block <a href="https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors, including MCP connectors, agents may use in an environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowed endpoints for HTTP and custom connectors</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › Prebuilt Connectors › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations / Set-PowerAppDlpPolicyConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Dataverse MCP server availability</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which MCP servers and tools an agent connects to</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. The tool's Tools and Resources sections list what the server exposes.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › Add a tool › Model Context Protocol <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Blocking a connector in a data policy removes its MCP tools, which is the broadest enforcement available. Managed Environments can also block MCP servers through [advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies). Credential options for tools follow the [maker credential setting](/features/copilot-studio-block-maker-provided-credentials/). The Microsoft 365 admin center registry governs what Copilot Chat users reach; it does not reach into Copilot Studio agents published to other channels.

## Open questions

- Government cloud availability and any differences in supported servers.
- Whether tenant-level allow-listing of MCP servers (independent of connectors) will be offered.
- How tool-description changes at the server are surfaced to administrators.

<!-- rationale
risk: High. Tools can move data to third-party systems and take write actions decided by a model; descriptions come from the server. Controls exist but are not configured by default in most tenants.
cost: Variable. Copilot Credits per tool call on the new harness; partner server costs outside Microsoft billing.
impact: Medium. Makers and the users of agents that gain tools; not a change to default Copilot behaviour.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] front matter: defaultState; Scope; rationale: impact / consistency: The feature's default state is on rather than maker opt-in. | Found: defaultState: "on"; "A maker adds an MCP server as a tool"; "not a change to default Copilot behaviour." | Fix: Set defaultState to user-opt-in: makers explicitly add an MCP server to an agent. The schema assigns designer capabilities chosen by a maker to user-opt-in; do not generalize the Dataverse server's separate on-by-default setting to this capability.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is consumption. | Found: Usage is billed based on consumption and measured in Copilot Credits. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview and https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing for consumption billing across the two harnesses. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [supported, minor] front matter: cost; rationale: cost / cost: The direct cost is variable and metered in Copilot Credits. | Found: The number of Copilot Credits these experiences consume depends on how they are designed, how often they run, and the features they use. | Fix: Retain variable and name Copilot Credits; add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview to sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [unsupported, blocker] front matter: licensing.notes; Cost and licensing / licensing: MCP support is included in Copilot Studio authoring with no separate licence. | Found: Searched: Copilot Studio MCP no additional license; MCP additional license. Read agent-extend-action-mcp, agents-experience/tools-add-mcp-server, billing-licensing, and the licensing search excerpts; none states this blanket no-separate-licence entitlement. | Fix: Remove 'no separate licence' and the unsupported authoring entitlement. State the documented Copilot Studio access options from https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing and the Copilot Credits billing model, without inferring an MCP-specific licence exemption.
- [supported, minor] front matter: licensing.notes; Risk assessment; Cost and licensing; rationale: cost / cost: Tools, including knowledge and MCP tools, consume Copilot Credits on the Microsoft Copilot harness. | Found: Copilot Credits are charged for large language model (LLM) tokens, tools (including knowledge and MCPs), and the harness itself. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview to sources. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [supported, minor] Cost and licensing / cost: Model tokens are charged in Copilot Credits on the Microsoft Copilot harness. | Found: Copilot Credits are charged for large language model (LLM) tokens | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [supported, minor] Cost and licensing / cost: The Microsoft Copilot harness itself is charged in Copilot Credits. | Found: tools (including knowledge and MCPs), and the harness itself. Any experience that uses one of these consumes credits. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [supported, minor] Cost and licensing / cost: Microsoft Copilot harness billing starts when building starts. | Found: the Microsoft Copilot harness charges credits from the moment you start building. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing / cost: Standard-harness agents bill messages under existing Copilot Studio rates. | Found: Starting on September 1, 2025, the common currency for agents changed from messages to Copilot Credits. | Fix: Replace both references to standard-harness message billing with 'Standard-harness agents also use Copilot Credits under the standard-harness billing rates' and cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [unsupported, blocker] Cost and licensing; rationale: cost / cost: Partner MCP server subscriptions or API costs are outside Microsoft billing. | Found: Searched: Copilot Studio MCP third-party cost; MCP subscription third-party Copilot Studio. Read billing-licensing, billing-credit-overview and licensing search excerpts; no passage establishes how partner MCP server charges are billed. | Fix: Replace the billing assertion with advice: 'Check each server provider's licence and commercial terms before approving it.' Remove the asserted partner billing arrangement from the cost rationale.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: Agents > Tools > Registry > tool > Block is documented at the cited Microsoft 365 Copilot URL. | Found: Select Agents > Tools, and then select the Registry tab. ... Select Block to restrict the server across your organization | Fix: The cited /microsoft-365/copilot/manage-plugins-skills-mcp-servers URL returns HTTP 404. Keep the path but replace its docs link, rendered Learn link and source URL with https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Connector endpoint rules are configured at Data policy > Prebuilt Connectors > Configure connector > Connector endpoints. | Found: the Prebuilt Connectors page in Data Policies ... right-clicking and then selecting Configure connector > Connector endpoints. | Fix: Label connector endpoint filtering as preview in this control's note and the guidance. Retain the path, but separately correct the row's unsupported custom-connector applicability. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [supported, minor] What's changing / behaviour: MCP is an open protocol connecting models to external data and tools. | Found: MCP is an open standard for connecting applications to tools and context. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/copilot-studio-mcp or https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp for the open-protocol description. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/copilot-studio-mcp
- [contradicted, blocker] What's changing / availability: Agents and workflows can use tools exposed by any MCP server. | Found: Currently, Copilot Studio supports the Streamable transport type. ... Copilot Studio no longer supports SSE for MCP after August 2025. | Fix: Replace 'any MCP server' with 'compatible MCP servers using the supported Streamable transport and authentication methods' and cite https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent
- [supported, minor] summary; What's changing / behaviour: A maker adds an MCP server to an agent as a tool. | Found: When you add an MCP server to your agent, the agent can use every tool that the server exposes during a conversation. | Fix: Distinguish the launched standard-harness capability from the Microsoft Copilot harness integration, which this cited page explicitly marks preview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-mcp-server
- [supported, minor] What's changing / behaviour: Microsoft supplies MCP connectors and makers can create custom MCP connectors. | Found: The process is the same, whether you're adding prebuilt Microsoft MCP connectors or an MCP server to which you configured a connection. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent and https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent, which explicitly describes prebuilt Microsoft MCP connectors. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent
- [contradicted, blocker] controls[2].governs; summary; What's changing; Why it matters; Risk assessment; Governance guidance; controls table / applicability: The cited connector endpoint filtering control governs HTTP and custom MCP connectors and can pin custom-connector hosts. | Found: it's exclusively available for the following connectors: HTTP ... HTTP Webhook ... SQL Server ... Azure Blob Storage ... SMTP ... Browser Automation ... UI Automation | Fix: Remove custom connectors from this row and from the instructions to use this endpoint-filtering control for custom MCP connectors. Describe preview filtering only for supported connectors, and state that only static design-time endpoints are evaluated; dynamic endpoints and environment variables are not covered. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance: At rollout; Governance controls / applicability: Requiring end-user credentials is an unqualified production control for the MCP agents described, including autonomous agents. | Found: agents triggered by scheduled or autonomous events, or that attempt to run in the background, fail due to missing credentials. All agent triggers must involve an active user. | Fix: Limit the end-user-credential recommendation to interactive agents. Warn that disabling maker credentials changes existing and new agents immediately and causes scheduled/autonomous/background agents to fail; assess those agents before enforcing it. Cite https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [supported, minor] What's changing / availability: Agent 365 tooling provides Microsoft-hosted MCP servers alongside other server options. | Found: Discover and select Microsoft-hosted MCP servers with the Agent 365 CLI. | Fix: Cite https://learn.microsoft.com/microsoft-agent-365/add-mcp-tools-developer-experiences and describe the documented server catalog, rather than asserting an uncited continuing release cadence. | Source: https://learn.microsoft.com/microsoft-agent-365/add-mcp-tools-developer-experiences#add-mcp-servers-to-a-custom-agent
- [supported, minor] What's changing / availability: Copilot Studio can expose a published agent as an MCP server. | Found: MCP client: Your agent is exposed as a remote Model Context Protocol (MCP) server. | Fix: Add this source and label this distinct capability preview and available only in early release cycle environments. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/publication-channels-mcp-agent-to-agent
- [supported, minor] What's changing / availability: Copilot Studio can expose a published agent over A2A for other clients. | Found: A2A client: Your agent is exposed as an agent over the Agent2Agent (A2A) protocol. | Fix: Cite this page and qualify the A2A channel as preview, available only in early release cycle environments. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/publication-channels-mcp-agent-to-agent
- [unsupported, major] Risk assessment: Data exposure / behaviour: Prompt content and retrieved data flow to the MCP server. | Found: Searched: Copilot Studio MCP data sent; MCP server tool inputs prompts sent third party data privacy. Read agent-extend-action-mcp, agents-experience/tools-add-mcp-server and security-and-governance; no statement of this blanket payload flow found. | Fix: Replace with risk analysis: 'Review the inputs each MCP tool receives; they may contain organisational data. Assess the server operator's terms before allowing external services.' Do not assert that prompts or all retrieved data are automatically transmitted.
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: MCP servers can expose delete tools. | Found: tools that write, delete, or process payments | Fix: Cite the working https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers URL. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] What's changing; Risk assessment: Change & support / behaviour: Server tool changes can become available without the maker republishing the agent. | Found: When you update or remove tools and resources on the MCP server, Copilot Studio dynamically reflects these changes. | Fix: Distinguish harnesses: the standard-harness overview describes dynamic updates, while the cited Microsoft Copilot harness tools-add-mcp-server page instructs makers to edit the server entry to refresh the connection and re-read a changed tool list. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp
- [contradicted, blocker] Scope / availability: The capability is on in all environments where makers can add tools unless a data policy blocks the connector. | Found: You must turn on generative orchestration to use MCP. | Fix: Replace the all-environments/unless-DLP assertion with 'Makers add compatible MCP servers to individual agents. MCP requires generative orchestration and is subject to connector policies, server-specific settings and permissions.' Mention that Dataverse MCP can separately be disabled using controls[3]. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp
- [supported, minor] Scope / role: Makers need Copilot Studio authoring access. | Found: To use Copilot Studio, you need one of the following configurations: ... Copilot Studio user license (free). ... Copilot Studio authors role ... Microsoft 365 Copilot license ... trial license | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing as the source for authoring access; retain the general wording rather than inventing a single required role. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [supported, minor] Scope / availability: Microsoft 365 Copilot also exposes MCP-backed federated connectors with Microsoft 365 admin-center governance. | Found: Use Model Context Protocol (MCP) to fetch data in real time. ... Are managed and governed by admins in the Microsoft 365 admin center. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview to sources. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Governance guidance: After rollout / applicability: Administrators can track Copilot Credit consumption by agent. | Found: You can view the total Copilot credits an agent consumes on its Monitor page in Copilot Studio. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview as the source for per-agent monitoring. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [contradicted, blocker] Governance controls / applicability: The Microsoft 365 registry governs only Copilot Chat access and does not affect Copilot Studio agents on other channels. | Found: The policy you set for each tool applies wherever the tool is used and is enforced at runtime by the Agent 365 Tooling Gateway. | Fix: Remove the channel-based exclusion. Explain that registry controls apply to supported registered servers/tools through Agent 365, and approval and consent make registered servers available in Copilot Studio environments; coverage is determined by the registered-server/gateway integration, not simply the publication channel. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [unsupported, minor] rationale: risk / behaviour: The relevant controls are not configured by default in most tenants. | Found: Searched: Copilot Studio MCP most tenants. Read admin-data-loss-prevention, security-and-governance and configure-no-maker-authentication; no evidence establishes the configuration of most tenants. | Fix: Remove the claim about most tenants. Retain the high-risk analysis based on documented external tools, server-supplied descriptions and write capabilities, without asserting tenant population statistics.
- [contradicted, minor] front matter: action / consistency: The optional maker-selected capability is assigned prepare. | Found: action: "prepare"; "A maker adds an MCP server as a tool"; "not a change to default Copilot behaviour." | Fix: Set action to review: the schema assigns optional capabilities chosen by a maker to review, and no verified source states that this change automatically adds MCP tools to existing agents.
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist recommends enforcing end-user credentials, but the controls table has no credential-policy row. | Found: "Require end-user credentials for MCP connections in production environments." The five control rows contain no maker-credential policy. | Fix: Add a credential-policy row citing https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication, with the autonomous-agent caveat. The documented environment path is Manage > Environments > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options.
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist recommends tool approval, but the controls table has no approval row. | Found: "Enable human approval for write-capable tools where the harness supports it." No control row covers end-user confirmation. | Fix: Add a maker-side confirmation row using https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent: Tools > tool > Details > Ask the end user before running. Qualify its harness and interactive-user scope.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist recommends reviewing connector dependency insights, but the table has no corresponding row. | Found: "Review connector dependency insights in the Power Platform admin center quarterly"; the controls table has no dependency-insights row. | Fix: Add a connector dependency insights row sourced from https://learn.microsoft.com/microsoft-copilot-studio/security-and-governance. Do not invent a navigation path: either research its exact surface or keep this as a general note rather than a checklist instruction.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist recommends Purview audit review, but the table has no audit row. | Found: "Audit tool call activity in Purview"; none of the control rows covers audit. | Fix: Add a Purview audit row with its documented search surface and automation equivalent after checking https://learn.microsoft.com/purview/ai-copilot-studio, linked by the cited security-and-governance page; otherwise keep audit as a general note without an instruction to configure it.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist recommends per-agent consumption monitoring, but the table has no consumption row. | Found: "Track Copilot Credit consumption by agent"; the table has no credit-consumption row. | Fix: Add a per-agent consumption-monitoring row using the agent's Monitor page and cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview. Keep tenant/environment reporting distinct from per-agent reporting.
-->
