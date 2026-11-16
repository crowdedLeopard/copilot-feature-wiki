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
  - title: "Which MCP tools users reach in Microsoft 365 Copilot (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Connector data policies that cover MCP connectors (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Connector data policies that cover MCP connectors (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","data-policies","managed-environments","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"]
controls:
  - governs: "Dataverse MCP server availability and allowed MCP clients"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
  - governs: "Which MCP tools users reach in Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > tool > Block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    api: null
  - governs: "Connector data policies that cover MCP connectors"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
  - governs: "Controls specific to the management MCP server"
    scope: "environment"
    ui: null
    api: null
    note: "Learn describes governance only in terms of data policies and server- and tool-level access."
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:08:36"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse management MCP server, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Dataverse MCP server availability and allowed MCP clients</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which MCP tools users reach in Microsoft 365 Copilot</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › tool › Block <a href="https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connector data policies that cover MCP connectors</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Controls specific to the management MCP server</strong><br><small>Environment</small><br><small class="controls__note">Learn describes governance only in terms of data policies and server- and tool-level access.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The management server inherits the Dataverse MCP server's environment switch and client allow list; Managed Environments can add [advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies) that block MCP servers outright. Nothing distinguishes the management server from other MCP endpoints in the admin tooling yet, so a tenant that permits Dataverse MCP for one purpose permits the management server too.

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
