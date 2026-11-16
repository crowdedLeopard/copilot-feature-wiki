---
title: "Work IQ: business skills for agents through Work IQ MCP"
slug: "work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp"
roadmapId: 573290
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse","Work IQ"]
summary: "Business skills are natural-language process instructions stored in Dataverse that agents discover through Work IQ MCP to follow organisational processes."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Preview. Skills are stored in Dataverse; underlying services may still incur fees during preview."
audiences: ["power-platform-admin","service-owner","maker","security"]
tags: ["work-iq","mcp","business-skills","dataverse","agents"]
sources:
  - title: "Microsoft 365 Roadmap item 573290"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573290"
    kind: "roadmap"
  - title: "Business skills overview (preview)"
    url: "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
  - title: "Work IQ participation for a Dataverse environment (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    kind: "learn"
  - title: "Business Applications data in Work IQ available to Copilot (tenant) (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings"
    kind: "learn"
  - title: "Allowed MCP clients for the Dataverse MCP server (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#enable-business-skills-in-dataverse"
    kind: "learn"
  - title: "Work IQ MCP server access in Microsoft 365 (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","agent-identity","copilot-credits","agent-365-control-plane-for-agents"]
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
  - governs: "Allowed MCP clients for the Dataverse MCP server"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Advanced Settings > Allowed MCP Clients"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#enable-business-skills-in-dataverse"
    api: null
  - governs: "Work IQ MCP server access in Microsoft 365"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    api: null
confidence: "high"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:53:34"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 573290."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Business skills are natural-language instructions that capture how an organisation gets work done, covering steps, required information and business rules. Agents discover the skills they can access at runtime through Work IQ MCP and follow them, so several agents use the same process.

Per Microsoft Learn, skills have frontmatter (name, description, metadata), instructions and attached resource files. Agents query the frontmatter to find relevant skills and retrieve the full instructions only when needed. Skills are not executable code.

The roadmap target is November 2026, status In development; the Learn page is marked preview.

## Why it matters

Skills become a governed layer that shapes agent behaviour. A Power Platform admin must turn on Work IQ in a Dataverse environment, and skill selection is probabilistic, so testing matters before broad sharing.

## Risk assessment

**Data exposure**
- Resource files and instructions may contain policy or process detail; sharing settings control who can read them.

**Security & identity**
- Access follows Dataverse security roles, ownership and sharing. Users need the Skill Sharing Role as well as the selected role.

**Autonomy & actions**
- Skills guide what agents do with their connected tools, so they influence actions.

**Change & support**
- Editing one skill changes behaviour across all agents that use it.

## Cost and licensing

Learn says consumption-based services may continue to incur licence fees during preview. Work IQ API access elsewhere requires Copilot Credits billing. Specific pricing for business skills is not yet published.

## Scope

Dataverse environments where a Power Platform admin has turned on Work IQ. Used in Copilot, Work IQ connected agents and agents connected to the Dataverse MCP server. Cloud availability is not stated.

## Governance guidance

### Before rollout
- Decide which environments take part in Work IQ.
- Assign skill authoring to approved makers only.

### At rollout
- Write descriptions that state what a skill does and when to use it.
- Test representative requests before sharing widely.

### After rollout
- Review skill ownership and sharing regularly.
- Track agent outcomes against the intended process.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ participation for a Dataverse environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Business Applications data in Work IQ available to Copilot (tenant)</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowed MCP clients for the Dataverse MCP server</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Advanced Settings › Allowed MCP Clients <a href="https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#enable-business-skills-in-dataverse" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP server access in Microsoft 365</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The tenant setting cascades over the environment features. Who can author and share a skill is a Dataverse matter: ownership, sharing and security roles including the Skill Sharing Role. None of these settings has a documented API. The [quickstart](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart) walks through enabling an environment end to end.

## Open questions

- Pricing and metering at general availability.
- Audit coverage of skill creation and use.
- Cloud support beyond the commercial cloud.

<!-- rationale
risk: Medium. Skills steer agent behaviour across surfaces, so a wrong or over-shared skill changes how agents act on business processes.
cost: Variable. Agent use may consume Copilot Credits or other metered usage; Learn notes preview usage of underlying services may incur fees.
impact: Medium. Affects makers, process owners and users of agents that discover skills.
-->
