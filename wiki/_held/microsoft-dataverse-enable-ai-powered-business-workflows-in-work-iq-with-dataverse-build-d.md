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
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 47
  unconfirmed: 0
  contradicted: 9
  attempts: 2
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

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing / record: The roadmap lists general availability in February CY2027. | Found: "targetDate": "February CY2027" | Fix: In What's changing, write 'The roadmap targets general availability for February CY2027'; retain the in-development status rather than implying committed availability.
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap lists preview from June CY2026. | Found: "previewDate": "June CY2026" | Fix: Replace 'preview from June CY2026' with 'a preview target of June CY2026'; the record supplies a target, not confirmation of rollout.
- [contradicted, blocker] front matter: defaultState / default: The coding-agent capability is admin-opt-in, so nobody can use it until an administrator enables it. | Found: Other tools used by the plugin, such as the Dataverse SDK for Python and Power Platform CLI, authenticate directly and aren't subject to these MCP-specific controls. Their requests still require Dataverse authorization. | Fix: Set defaultState to user-opt-in for the locally installed coding plugin. Explain existing environment and privilege prerequisites, and limit tenant consent and environment client allowlisting to Dataverse MCP. Separately describe Work IQ's production defaults and exceptions from https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/security-governance
- [contradicted, blocker] front matter: licensing.model; Cost and licensing; Open questions / licensing: The licensing model for the described plugin, MCP and Work IQ workflows is not yet published. | Found: You pay for use of the Work IQ API through a usage-based model that uses Copilot Credits. | Fix: Set licensing.model to mixed. State the applicable Power Apps, Dynamics 365 or Power Platform environment plan from the plugin coding-agents prerequisites, separate coding-agent charges, and Copilot Credit consumption for Dataverse MCP and direct Work IQ API connections. Replace the wholly unanswered licensing question with any specific remaining entitlement uncertainty. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview
- [supported, minor] front matter: licensing.notes; Cost and licensing / absence: No separate price for the Dataverse coding plugin itself is published in its preview documentation. | Found: Searched: '"Dataverse plugin" "charge" licensing price'; opened agents-plugin/, coding-agents and security-governance. No plugin-specific price found; underlying MCP and Work IQ consumption are separately documented. | Fix: Narrow 'No separate charge is published in the preview documentation' to 'The Dataverse plugin preview pages publish no plugin-specific price as of November 2026; underlying services and coding-agent charges still apply.' Explain the published consumption meters separately.
- [supported, minor] What's changing / behaviour: Business skills are stored in Dataverse. | Found: Business skills are stored in Dataverse and follow Dataverse security patterns. | Fix: Add Business skills overview to sources for the explicit storage statement. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview
- [supported, minor] Risk assessment: Security & identity / behaviour: The plugin also supports service-principal authentication. | Found: Service-principal authentication is available for unattended scenarios. | Fix: Add the Security and governance page to sources for service-principal authentication and its permission boundary. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/security-governance
- [supported, minor] Scope; rationale: impact / behaviour: Developers and makers can access Dataverse through coding clients including GitHub Copilot CLI. | Found: various MCP clients like Copilot Studio agents, Visual Studio (VS) Code GitHub Copilot, GitHub Copilot CLI, Claude desktop, Claude Code, and many others. | Fix: Add Connect to Dataverse with Model Context Protocol to sources for the explicitly named CLI client and the applicable MCP billing. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp
- [supported, minor] Cost and licensing; rationale: cost / cost: Loading sample records consumes Dataverse storage capacity. | Found: Dataverse - Database capacity: Tracks structured data stored directly in Dataverse, including table rows, metadata, and relational data | Fix: Add Dataverse capacity-based storage details to sources to substantiate the storage consequence of loading sample records. | Source: https://learn.microsoft.com/power-platform/admin/capacity-storage
- [contradicted, blocker] Cost and licensing; rationale: cost / cost: Coding-agent subscriptions or consumption charges are only indirect costs. | Found: Coding agents or custom integrations that call Work IQ directly: Consumption through that connection appears under Work IQ API. The coding agent's own subscription or consumption charges are separate. | Fix: Describe coding-agent subscription or consumption charges as separate direct charges, not staff-time overhead. Also name direct Work IQ API consumption and Dataverse MCP Copilot Credit billing. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs
- [contradicted, blocker] controls[2].api; Governance controls table; Governance controls: 'None of the switches' / absence: No API is documented for configuring allowed Dataverse MCP clients. | Found: Entity set path: [organization URI]/api/data/v9.2/allowedmcpclients ... Operations supported: POST GET PATCH DELETE ... isenabled | Edm.Boolean | Display name: Is Enabled | Fix: Document the allowed-client REST side: PATCH [organization URI]/api/data/v9.2/allowedmcpclients(<allowedmcpclientid>) with body {"isenabled": false} to disable a client, or true to enable it. Cite this Web API reference and the allowedmcpclient table reference. Remove 'None of the switches has a documented API'; keep any server-wide API gap separate. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient
- [contradicted, blocker] Governance controls: paragraph after table / applicability: Turning off the Microsoft 365 tenant setting overrides every environment's features. | Found: This control applies to the entire Work IQ MCP server, separate from Copilot audience settings or App Access. ... Work IQ participation settings serve a different purpose and don't prevent agentic access. | Fix: Limit the cascade statement to the documented Microsoft 365 Copilot Chat/Dataverse data-sharing connection. Explicitly say it is not a universal block on agentic environment access, the separate Work IQ MCP server, or directly authenticated plugin tools; use the corresponding server, App Access and identity controls. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access
- [supported, minor] Governance controls: final sentence / role: Business-skill access uses Dataverse security roles including Skill Sharing Role. | Found: An administrator must assign users the Skill Sharing Role, either directly or through a team. Users must also have the security role that the skill is shared with. | Fix: Point this sentence to Create and use business skills > Share a business skill, not the Sales agent enablement page, which does not mention Skill Sharing Role. Clarify that role-based sharing requires both Skill Sharing Role and the role receiving the shared skill. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills
- [contradicted, blocker] rationale: cost / cost: No Dataverse charge is published for the described coding-agent workflow. | Found: The search_data tool uses usage-based Copilot Credit billing rather than a fixed charge per tool call. ... All other tools, including the metadata search tool, follow the text and generative AI tools (basic) Copilot Credit rate per 10 responses. | Fix: Replace 'No Dataverse charge is published' with the published Dataverse MCP Copilot Credit treatment. Distinguish the plugin's lack of a separately published price from charges for the tools it orchestrates. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The low, indirect-cost-only rating fits the described MCP and Work IQ workflows. | Found: cost: low; rationale: 'Low. No Dataverse charge is published' versus 'Coding agents or custom integrations that call Work IQ directly: Consumption through that connection appears under Work IQ API.' | Fix: Set cost to variable and name Copilot Credits in the rationale. Explain Dataverse MCP billing, direct Work IQ API consumption, separate coding-agent charges and storage implications; the schema reserves low for indirect costs only. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs
- [contradicted, minor] front matter: action / consistency: Prepare is the appropriate action rating for this optional coding-agent capability. | Found: action: prepare; Scope: 'Developers and makers with Dataverse environments, using coding agents'; Governance guidance: 'Start in developer environments with interactive sign-in.' | Fix: Set action to review for the optional coding plugin: it requires a maker to install and use it. Treat the separate automatic Work IQ environment rollout distinctly rather than implying automatic coding-plugin execution.
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist directs readers to audit business-skill use and ownership, but the controls table has no matching monitoring or ownership-review row. | Found: After rollout: 'Audit use of business skills and who owns them.' The table contains participation, tenant audience, Dataverse MCP, Work IQ MCP and plugin-user controls, but no skill ownership or activity-review control. | Fix: Add a business-skill access/ownership-review row using the documented Business skills > skill > Share > Manage access workflow. Explain that the Business skills page does not currently show per-skill runtime usage or feedback, and direct usage review to the connected agent's available logs or traces rather than implying a built-in skill-usage report.
-->
