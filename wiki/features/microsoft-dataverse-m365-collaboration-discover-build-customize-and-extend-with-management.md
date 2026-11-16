---
title: "Microsoft Dataverse: management MCP server for building and governing MCP servers"
slug: "microsoft-dataverse-m365-collaboration-discover-build-customize-and-extend-with-management"
roadmapId: 576752
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "An environment-scoped endpoint lets developers and agents discover tools and assemble custom MCP servers from connectors, Graph APIs and custom APIs, with DLP and access controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "March CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not published. Learn labels the reference as preview and does not state a charge."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["dataverse","mcp","mcp-server","connectors","custom-api","dlp","agents"]
sources:
  - title: "Microsoft MCP management MCP server reference (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-management"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576752"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576752"
    kind: "roadmap"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","data-policies","managed-environments","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"]
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-16T19:08:36"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse management MCP server, in development."
version: 1
---

## What's changing

The management MCP server is a build surface and registry for agent-ready tools in an environment. Through a single environment-scoped URL, developers and agents can discover Microsoft-authored or certified MCP servers, query more than 1,470 connectors and their actions, and find custom APIs.

They can also create new MCP servers from connector actions, APIs and reusable tools, or clone an existing one such as the Dataverse MCP server and add or remove tools. Learn lists tool operations for creating, updating, publishing and deleting servers, and sources including connectors, Microsoft Graph APIs, Dataverse custom APIs and REST APIs.

The roadmap shows a preview from March 2026 and general availability targeted for December 2026 in Worldwide. It works from Visual Studio Code, Claude or any HTTP-capable tool.

## Why it matters

This turns the existing connector catalogue into agent-callable tools without a UI. Administrators gain a central place to see what exists, but also face faster creation of servers that can read or write business data.

DLP and per-tool access controls become the main safeguards, so their design should precede adoption.

## Risk assessment

**Data exposure**
- New MCP servers can expose connector data to any client allowed to call them.

**Security & identity**
- Access controls apply at server and individual tool level; confirm how they map to Entra roles.

**Autonomy & actions**
- Servers can include write actions via connectors and custom APIs, which agents may invoke.

**Change & support**
- Servers can be created and published purely through API calls, which may bypass UI-based review.

## Cost and licensing

Not yet published. Connector licensing (premium connectors), Copilot Credits for consuming agents and Dataverse API limits may all apply. Learn describes the reference as preview.

## Scope

Dataverse environments in the Worldwide cloud, per the roadmap. Used by developers through HTTP endpoints and compatible clients. Existing Dataverse MCP server settings in the Power Platform admin center are separate.

## Governance guidance

### Before rollout
- [ ] Review current DLP and advanced connector policies for MCP use.
- [ ] Decide who may create and publish MCP servers.
- [ ] List connectors and custom APIs you would not want exposed as tools.

### At rollout
- [ ] Pilot in a non-production environment.
- [ ] Apply tool-level access controls to each server.

### After rollout
- [ ] Inventory MCP servers regularly.
- [ ] Review tool calls that change data.
- [ ] Retire unused servers.

## Admin controls

The Dataverse MCP server for non-Microsoft clients is controlled in the Power Platform admin center: environment Settings > Product > Features > Dataverse Model Context Protocol, plus client records under Advanced Settings. Managed Environments can govern it via advanced connector policies. Controls specific to the management server are described only as DLP and server and tool-level access.

## Open questions

- Which roles may create or publish servers?
- How are the DLP rules evaluated for composed tools?
- Will an admin toggle disable the management server per environment?
- What auditing exists for server changes?

<!-- rationale
risk: High. It lets MCP servers that act on connectors and APIs be composed entirely through API calls, so governance depends on DLP and tool-level access controls being set correctly.
cost: Not yet published. Consuming agents may use Copilot Credits and underlying connector or API limits.
impact: Medium. Developers and integrators are the main users; agents built on the servers affect end users.
-->
