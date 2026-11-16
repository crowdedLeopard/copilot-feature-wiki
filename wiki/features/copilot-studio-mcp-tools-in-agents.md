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
