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
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The Dataverse plugin preview pages publish no plugin-specific price as of November 2026; underlying services and coding-agent charges still apply. Dataverse MCP and direct Work IQ API use consume Copilot Credits."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["dataverse","coding-agents","dataverse-mcp","work-iq","power-platform-cli","business-skills","solutions","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap item 577815"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577815"
    kind: "roadmap"
  - title: "Create and use business skills (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Business skills overview (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
  - title: "Microsoft Dataverse plugin for AI agents (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/"
    kind: "learn"
  - title: "Use the Dataverse plugin with AI coding agents (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/coding-agents"
    kind: "learn"
  - title: "Security and governance for the Dataverse plugin for AI agents (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/security-governance"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Connect to Dataverse with Model Context Protocol"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "allowedmcpclient EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    kind: "learn"
  - title: "Dataverse capacity-based storage details"
    url: "https://learn.microsoft.com/power-platform/admin/capacity-storage#dataverse-page-in-licenses"
    kind: "learn"
  - title: "Business Applications data in Work IQ available to Copilot (tenant) (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings"
    kind: "learn"
  - title: "Work IQ MCP server access in Microsoft 365 (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    kind: "learn"
videos: []
related: ["work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","agent-identity","copilot-credits"]
controls:
  - governs: "Work IQ participation for a Dataverse environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq"
    api: null
  - governs: "Business Applications data in Work IQ available to Copilot (tenant)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings"
    api: null
  - governs: "Allowed Dataverse MCP clients"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Advanced Settings > client > Is Enabled"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api:
      kind: "rest"
      call: "PATCH [organization URI]/api/data/v9.2/allowedmcpclients(<allowedmcpclientid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    note: "The request body sets isenabled to false to disable the client or true to enable it."
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
updated: "2026-11-19"
roadmapModified: "2026-10-22T23:45:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577815 with Learn plugin and business skills guidance."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Correction: default state is now user-opt-in, licensing mixed and cost variable (Copilot Credits); added the allowed-clients REST call and narrowed the tenant-setting cascade."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: fixed the Work IQ environment path in the controls table and removed the claim that the Work IQ MCP server control governs directly authenticated plugin tools."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 78 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 79 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected Work IQ default enablement (existing-environment schedule deferred), the allowed MCP clients path and call, and removed the preview label from business skills."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 76
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "a16a42933f0f04220606cf72a69e6ce3"
---

## What's changing

Dataverse is adding support for building solutions with coding agents. In the roadmap example, one prompt describes a recruiting system, and the agent discovers the environment, configures MCP, creates a solution with the Power Platform CLI, builds tables with lookups and a many-to-many relationship, runs a Python script to load sample data and queries across tables.

Learn describes the Microsoft Dataverse plugin for AI agents (preview), with skills for connecting, querying, data, metadata, solutions, security and admin tasks. Separately, business skills are stored in Dataverse and used through Business Applications in Work IQ.

The roadmap item states a preview target of June CY2026 and targets general availability for February CY2027, Worldwide only. Its status is In development.

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

**Licence.** The plugin's prerequisites ask for a Dataverse environment available through Power Apps, Dynamics 365, or another applicable Power Platform plan. The Dataverse plugin preview pages publish no plugin-specific price as of November 2026; underlying services and coding-agent charges still apply.

**Meters.**
- Dataverse MCP: the `search_data` tool uses usage-based Copilot Credit billing, attributed to the calling service. All other tools, including the metadata `search` tool, follow the text and generative AI tools (basic) Copilot Credit rate per 10 responses (see [Connect to Dataverse with Model Context Protocol](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp)).
- Work IQ: a coding agent or custom integration that calls Work IQ directly has its consumption reported under Work IQ API, and Microsoft describes the Work IQ API as paid through a usage-based model that uses Copilot Credits. The coding agent's own subscription or consumption charges are separate ([Understand costs for Business Applications in Work IQ](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs)).

**Storage.** Dataverse database capacity covers table rows, so sample data loaded by an agent counts towards it. Work IQ search indexes also use extra storage.

**Not yet published.** Spending policies for Business Applications in Work IQ are configured for the consuming experience; Microsoft does not describe a separate business applications policy.

## Scope

Developers and makers with a Dataverse environment available through Power Apps, Dynamics 365, or another applicable Power Platform plan, and a user account with access to it. Microsoft lists GitHub Copilot, Claude Code, Cursor, OpenAI Codex and ChatGPT, Gemini CLI and Google Antigravity as supported agents. A developer installs the plugin in the coding agent, for example `/plugin install dataverse@awesome-copilot` for GitHub Copilot.

Tenant administrator consent and per-environment client allowlisting apply to Dataverse MCP. Other tools the plugin uses, such as the Dataverse SDK for Python and Power Platform CLI, authenticate directly and are not subject to those MCP-specific controls, though their requests still require Dataverse authorization.

Business skills need Work IQ turned on for the environment. Learn says Business Applications in Work IQ is on by default for new public production environments, with exceptions for EU and EFTA environments, government-related environments and nonproduction environments (trial, sandbox and developer). Microsoft has deferred the previously documented November 2026 default-enablement schedule for existing environments; a replacement date is not stated ([default settings](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings)). This rollout is separate from the optional coding plugin.

Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- Decide which environments allow coding agents and which do not.
- Review Dataverse MCP client access settings.
- Set naming and publisher standards for agent-created solutions.

### At rollout
- Start in developer environments with interactive sign-in.
- Keep production access out of scope for agents.

### After rollout
- Review created tables, roles and solutions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ participation for a Dataverse environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Business Applications data in Work IQ available to Copilot (tenant)</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowed Dataverse MCP clients</strong><br><small>Environment</small><br><small class="controls__note">The request body sets isenabled to false to disable the client or true to enable it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Advanced Settings › client › Is Enabled <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [organization URI]/api/data/v9.2/allowedmcpclients(&lt;allowedmcpclientid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP server access in Microsoft 365</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can use the Dataverse plugin from a coding agent</strong><br><small>Maker</small><br><small class="controls__note">Follows the signed-in developer's Dataverse security roles; no separate switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The cascade in Microsoft's description covers the Microsoft 365 Copilot Chat and Dataverse connection: if the tenant setting is off, data isn't shared between Microsoft 365 Copilot Chat and Dataverse, even if an app is configured to share data. It is not a universal block. Microsoft says Work IQ participation settings don't prevent agentic access, the Work IQ MCP server has its own Block control for the entire server, and the plugin's directly authenticated tools are outside the MCP-specific controls. For directly authenticated plugin tools, Dataverse authorization and the authenticated identity's permissions still apply.

The allowed-client REST call sets one allowed MCP client record; it does not cover the server-wide setting. The [Dataverse plugin for coding agents](https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin) runs with the developer's own permissions, so environment access and security roles are the governance lever.

Business skills are shared by general access, Dataverse security role or direct access. Role-based sharing needs users to hold both the Skill Sharing Role and the role the skill is shared with; see [Create and use business skills](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills#share-a-business-skill).

## Open questions

- What will remain in preview at general availability?
- How will agent actions be audited in Dataverse?
- Which Copilot Credit rates apply to Work IQ API calls that read business skills, and which plans does Microsoft treat as "applicable" for the plugin's Dataverse prerequisite?

<!-- rationale
risk: High. Autonomous agents can create schema, load data and change security in a live environment, acting with the developer's permissions.
cost: Variable. Copilot Credits meter Dataverse MCP tool calls and direct Work IQ API use, and the coding agent's own subscription or consumption charges are separate; no plugin-specific price is published.
impact: Medium. It affects developers and makers building Dataverse solutions, and the environments they use.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: sources titles / consistency: The reference titles label the business-skills and general Work IQ administration articles as preview. | Found: The sources say "Create and use business skills (preview)" and "Business skills overview (preview)"; the opened articles are titled "Create and use business skills" and "Business skills overview". The four general Work IQ administration titles likewise omit "(preview)". | Fix: Remove the trailing ' (preview)' from these six source titles: Create and use business skills; Business skills overview; Business Applications in Work IQ default settings; Manage AI experience access to Business Applications in Work IQ; Manage participation in Business Applications in Work IQ; Understand costs for Business Applications in Work IQ. Keep the preview designation on the Dataverse plugin sources.
-->
