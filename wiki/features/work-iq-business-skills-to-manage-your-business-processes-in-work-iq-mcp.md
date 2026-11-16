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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 37
  unconfirmed: 0
  contradicted: 8
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] front matter: defaultState; Why it matters; Scope / default: Business skills are admin-opt-in and require an administrator to turn on Work IQ before use in every environment. | Found: Starting in November 2026, Microsoft turns on Business Applications in Work IQ for existing environments that aren't listed as exceptions. | Fix: Set defaultState to on. Explain that Work IQ is enabled by default for eligible public production environments: new environments from September 30, 2026 and existing environments starting November 2026. Carry the EU/EFTA preview, government-related and nonproduction exceptions. Replace the universal admin-opt-in wording in Why it matters and Scope with a requirement that Work IQ be enabled, automatically or manually. Report this alongside the overview's manual-enablement guidance. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [contradicted, blocker] Risk assessment: Security & identity / role: Users need the Skill Sharing Role as well as the selected role. | Found: Users who access a skill through a Dataverse security role must have both the selected role and the Skill Sharing Role security role. | Fix: Qualify the sentence: 'Users accessing a skill through security-role sharing need both the selected Dataverse security role and Skill Sharing Role. General access and direct sharing are separate access methods.' | Source: https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-business-skill-overview
- [contradicted, blocker] Risk assessment: Change & support / behaviour: Editing one skill changes behaviour across all agents that use it. | Found: Save | Saves your working copy without changing the version agents use. A new skill remains inactive. If the skill already has an active version, that version stays active. | Fix: Replace with 'Activating an updated skill changes the instructions available to agents that use it; editing and saving a working copy alone does not change the active version.' Cite https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills#save-and-activate-a-business-skill. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills
- [contradicted, blocker] front matter: licensing.model / licensing: The licensing model for the briefing's supported experiences is consumption. | Found: Microsoft 365 Copilot Chat: The applicable entitlement includes business-data grounding in the licensed chat scenario. You don't pay extra for it as a Work IQ API interaction. | Fix: Set licensing.model to mixed and explain that billing follows the consuming experience: licensed Microsoft 365 Copilot Chat business-data grounding is included in the applicable entitlement, Cowork consumption is attributed to Cowork, and direct custom or coding-agent connections are billed under Work IQ API. Do not infer universal consumption licensing from the conditional preview notice. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs
- [supported, minor] Cost and licensing / cost: Work IQ API usage consumes Copilot Credits. | Found: Work IQ API usage consumes Copilot Credits shared with other eligible services. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/ and https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs to sources and cite them in Cost and licensing for the meter and experience-dependent treatment. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [contradicted, blocker] Scope; Open questions: Cloud support / availability: Cloud availability is not stated. | Found: Business Applications in Work IQ isn't currently available in sovereign or government cloud environments, including Department of Defense (DoD), Government Community Cloud (GCC), and GCC High. | Fix: Replace 'Cloud availability is not stated' with 'The roadmap lists Worldwide (Standard Multi-Tenant). Learn states that Business Applications in Work IQ is not currently available in sovereign or government cloud environments, including DoD, GCC and GCC High.' Replace the broad cloud open question with any remaining, specifically unidentified gap. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
- [contradicted, blocker] controls[2].api; Governance controls / absence: No API or automation is documented for Allowed MCP Clients, and none of the listed settings has a documented API. | Found: An MCP client that is allowed to talk to MCP endpoint
Entity set path: [organization URI]/api/data/v9.2/allowedmcpclients
Operations supported: POSTGETPATCHDELETE
isenabled | Edm.Boolean | Display name: Is Enabled | Fix: Replace controls[2].api null with the documented allowedmcpclient Web API surface: the allowedmcpclients entity set supports PATCH and exposes the writable isenabled Boolean. Cite this reference, update the rendered table and remove the blanket claim that none has an API. For adding allowed clients, the documented command is dataverse mcp allow <appId>, at https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls / consistency: The controls table covers the authoring, ownership and sharing controls recommended in the governance checklist. | Found: Assign skill authoring to approved makers only. Review skill ownership and sharing regularly. The table contains only environment participation, tenant audience, Allowed MCP Clients and Work IQ MCP server blocking. | Fix: Add a skill-sharing/access row: Power Apps (maker) > environment > More > Business skills (preview) > skill > Share, citing https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills#share-a-business-skill. Include Manage access for reviewing/removing access, and add or identify the Dataverse security-role control used to restrict skill creation.
- [contradicted, minor] front matter: action / consistency: The prepare action rating matches the scale and verified rollout facts on November 16, 2026. | Found: Starting in November 2026, Microsoft turns on Business Applications in Work IQ for existing environments that aren't listed as exceptions. | Fix: Set action to act-now: eligible existing environments are being enabled automatically in the run month, risk is medium, and administrators have participation and access controls to review before exposure. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
-->
