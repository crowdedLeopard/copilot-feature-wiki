---
title: "Dataverse: build solutions with coding agents using the Dataverse plugin and Work IQ"
slug: "microsoft-dataverse-enable-ai-powered-business-workflows-in-work-iq-with-dataverse-build-d"
roadmapId: 577815
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Coding agents will build Dataverse tables, relationships, sample data and solutions from natural-language prompts, using the Dataverse plugin and MCP."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "June CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Preview documentation lists no separate charge. Work IQ licensing requirements are referenced in Learn."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["dataverse","coding-agents","dataverse-mcp","work-iq","power-platform-cli","business-skills","solutions"]
sources:
  - title: "Microsoft 365 Roadmap item 577815"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577815"
    kind: "roadmap"
  - title: "Create and use business skills (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Microsoft Dataverse plugin for AI agents (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/"
    kind: "learn"
  - title: "Work IQ participation for a Dataverse environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    kind: "learn"
  - title: "Business Applications data in Work IQ available to Copilot (tenant) (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings"
    kind: "learn"
  - title: "Dataverse MCP server and allowed MCP clients (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Work IQ MCP server access in Microsoft 365 (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    kind: "learn"
videos: []
related: ["work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","dataverse-agent-users-entra-agent-identity","agent-identity","managed-environments"]
controls:
  - governs: "Work IQ participation for a Dataverse environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    api: null
  - governs: "Business Applications data in Work IQ available to Copilot (tenant)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings"
    api: null
  - governs: "Dataverse MCP server and allowed MCP clients"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
    note: "Allowed MCP Clients are listed under Advanced Settings."
  - governs: "Work IQ MCP server access in Microsoft 365"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    api: null
  - governs: "Who can use the Dataverse plugin from a coding agent"
    scope: "maker"
    ui: null
    api: null
    note: "Follows the signed-in developer's Dataverse security roles; no separate switch."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577815 with Learn plugin and business skills guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Dataverse is adding support for building solutions with coding agents. In the roadmap example, one prompt describes a recruiting system, and the agent discovers the environment, configures MCP, creates a solution with the Power Platform CLI, builds tables with lookups and a many-to-many relationship, runs a Python script to load sample data and queries across tables.

Learn describes the Microsoft Dataverse plugin for AI agents (preview), with skills for connecting, querying, data, metadata, solutions, security and admin tasks. Separately, business skills (preview) are stored in Dataverse and used through Business Applications in Work IQ.

The roadmap lists preview from June CY2026 and general availability in February CY2027, Worldwide only.

## Why it matters

Agents can now make structural and security changes in an environment with little friction. Environment strategy, roles and approvals become the main controls.

Business skills also let organisations define processes that several agents follow, so quality control of those instructions matters.

## Risk assessment

**Data exposure**
- Agents query and bulk-load records. Learn says Dataverse enforces security on every request.

**Security & identity**
- Interactive sign-in limits the agent to the user's permissions; service principal use needs tight scoping. The plugin includes a skill to assign security roles.

**Autonomy & actions**
- Agents create and change tables, run scripts and package solutions. Learn says the agent confirms the target environment and previews stateful actions.

**Change & support**
- Schema created outside the maker UI may lack naming standards, so enforce solution and ALM practices.

## Cost and licensing

No separate charge is published in the preview documentation. Capacity use from sample data and the cost of the coding agent are indirect. Work IQ and connected agent licensing is described in Learn; check it before broad use.

## Scope

Developers and makers with Dataverse environments, using coding agents such as GitHub Copilot CLI. Business skills need Work IQ turned on for the environment. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- [ ] Decide which environments allow coding agents and which do not.
- [ ] Review Dataverse MCP client access settings.
- [ ] Set naming and publisher standards for agent-created solutions.

### At rollout
- [ ] Start in developer environments with interactive sign-in.
- [ ] Keep production access out of scope for agents.

### After rollout
- [ ] Review created tables, roles and solutions.
- [ ] Audit use of business skills and who owns them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ participation for a Dataverse environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Business Applications data in Work IQ available to Copilot (tenant)</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Dataverse MCP server and allowed MCP clients</strong><br><small>Environment</small><br><small class="controls__note">Allowed MCP Clients are listed under Advanced Settings.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP server access in Microsoft 365</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use the Dataverse plugin from a coding agent</strong><br><small>Maker</small><br><small class="controls__note">Follows the signed-in developer's Dataverse security roles; no separate switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The tenant setting cascades over the environment features, so turning it off in the Microsoft 365 admin center overrides every environment. None of the switches has a documented API. The [Dataverse plugin for coding agents](https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin) runs with the developer's own permissions, so environment access and security roles are the governance lever; App Access Control under Security > Identity & access in the Power Platform admin center can narrow which apps reach an environment. Business skills use Dataverse roles including the Skill Sharing Role, as described in [Business skills in Dataverse](https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#enable-business-skills-in-dataverse).

## Open questions

- What will remain in preview at general availability?
- How will agent actions be audited in Dataverse?
- What licensing applies to Work IQ use of business skills?

<!-- rationale
risk: High. Autonomous agents can create schema, load data and change security in a live environment, acting with the developer's permissions.
cost: Low. No Dataverse charge is published; capacity use from sample data and coding agent subscriptions are indirect costs.
impact: Medium. It affects developers and makers building Dataverse solutions, and the environments they use.
-->
