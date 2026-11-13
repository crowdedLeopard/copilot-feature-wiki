---
title: "Copilot Studio: MCP-compliant tools in agents and workflows"
slug: "copilot-studio-mcp-tools-in-agents"
roadmapId: 562221
desk: "agents"
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
videos: []
related: ["m365-copilot-federated-connectors-write-update-delete","copilot-studio-require-human-approval-for-tool-calls","copilot-studio-block-maker-provided-credentials","data-policies"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Power Platform admin center > **Policies** > **Data policies**: classify or block the connectors that expose MCP servers (blocking a connector blocks its MCP tools).
- Power Platform admin center > **Policies** > **Connector endpoint filtering**: allow or deny specific hosts for HTTP and custom connectors.
- Power Platform admin center > environment > **Settings** > **Features** > **Control maker credential options**: force end-user credentials for tools.
- Copilot Studio > agent > **Tools** > **Add a tool** > **Model Context Protocol**: maker-side list of connected servers and their tools.
- Microsoft 365 admin center > **Agents** > **Settings** > **Agent and plugin access**: governs MCP-based federated connectors in Copilot Chat.

## Open questions

- Government cloud availability and any differences in supported servers.
- Whether tenant-level allow-listing of MCP servers (independent of connectors) will be offered.
- How tool-description changes at the server are surfaced to administrators.

<!-- rationale
risk: High. Tools can move data to third-party systems and take write actions decided by a model; descriptions come from the server. Controls exist but are not configured by default in most tenants.
cost: Variable. Copilot Credits per tool call on the new harness; partner server costs outside Microsoft billing.
impact: Medium. Makers and the users of agents that gain tools; not a change to default Copilot behaviour.
-->
