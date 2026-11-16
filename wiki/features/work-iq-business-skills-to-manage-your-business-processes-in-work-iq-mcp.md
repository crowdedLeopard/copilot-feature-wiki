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
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Preview. Billing follows the consuming experience: licensed Microsoft 365 Copilot Chat grounding is in the applicable entitlement, Cowork use is attributed to Cowork, and direct custom or coding-agent calls are billed under Work IQ API."
audiences: ["power-platform-admin","service-owner","maker","security"]
tags: ["work-iq","mcp","business-skills","dataverse","agents"]
sources:
  - title: "Microsoft 365 Roadmap item 573290"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573290"
    kind: "roadmap"
  - title: "Business skills overview (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
  - title: "Create and use business skills (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
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
  - title: "Allowed MCP clients for the Dataverse MCP server (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
    kind: "learn"
  - title: "Work IQ MCP server access in Microsoft 365 (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    kind: "learn"
videos: []
related: ["work-iq-a2a-and-mcp-long-running-tasks"]
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
  - governs: "Allowed MCP clients for the Dataverse MCP server"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Advanced Settings > Allowed MCP Clients"
      docs: "https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#enable-business-skills-in-dataverse"
    api:
      kind: "rest"
      call: "PATCH [organization URI]/api/data/v9.2/allowedmcpclients({allowedmcpclientid}) with body {\"isenabled\": false}"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient"
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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: default state is now on (Microsoft's default enablement from November 2026, with exceptions), skill-access and activation wording, mixed licensing, cloud availability, and the Allowed MCP Clients API."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after the independent check: the Work IQ environment path now matches the Learn page (no separate Environments step), and two checklist steps without a controls-table row were removed."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-16"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "65554afc2ee0fd52d39c36c0d34bd321"
---

## What's changing

Business skills are natural-language instructions that capture how an organisation gets work done, covering steps, required information and business rules. Agents discover the skills they can access at runtime through Work IQ MCP and follow them, so several agents use the same process.

Per Microsoft Learn, skills have frontmatter (name, description, metadata), instructions and attached resource files. Agents query the frontmatter to find relevant skills and retrieve the full instructions only when needed. Skills are not executable code.

Microsoft Learn's default-settings page (prerelease documentation) says that starting September 30, 2026 Microsoft turns on Business Applications in Work IQ by default for new environments that are not listed as exceptions, and that starting in November 2026 it does the same for existing environments that are not listed as exceptions. The default applies to public production environments. The exceptions are EU and EFTA environments (Microsoft plans to enable them when the feature becomes generally available; during public preview customers can turn on Work IQ with the corresponding setting in the Microsoft 365 admin center), government-related environments, and nonproduction (trial, sandbox and developer) environments. The business skills overview describes the manual route: a Power Platform administrator turns on Work IQ in the environment.

The roadmap target is November 2026, status In development; the Learn page is marked preview.

## Why it matters

Skills become a governed layer that shapes agent behaviour. Work IQ has to be on in a Dataverse environment before business skills are used there, either automatically under Microsoft's default for eligible environments or manually by a Power Platform admin, and skill selection is probabilistic, so testing matters before broad sharing.

For an eligible existing environment, Microsoft's default starts in November 2026, so decide now whether it should take part rather than finding out after it has been turned on.

## Risk assessment

**Data exposure**
- Resource files and instructions may contain policy or process detail; sharing settings control who can read them.

**Security & identity**
- Access follows Dataverse security roles, ownership and sharing. Users accessing a skill through security-role sharing need both the selected Dataverse security role and Skill Sharing Role. General access and direct sharing are separate access methods.

**Autonomy & actions**
- Skills guide what agents do with their connected tools, so they influence actions.

**Change & support**
- Activating an updated skill changes the instructions available to agents that use it; editing and saving a working copy alone does not change the active version.

## Cost and licensing

Billing follows the experience that uses the skill, according to the preview cost page for Business Applications in Work IQ. Licensed Microsoft 365 Copilot Chat business-data grounding is included in the applicable entitlement and is not charged extra as a Work IQ API interaction. Work IQ consumption that supports a Cowork task is attributed to Cowork. Coding agents or custom integrations that call Work IQ directly appear under Work IQ API, and Work IQ API usage consumes Copilot Credits shared with other eligible services.

Learn also says that for consumption-based services, usage of underlying application services may continue to incur licence fees during the preview period. Specific pricing for business skills is not yet published.

## Scope

Dataverse environments where Work IQ is on, either through Microsoft's default for eligible public production environments (see What's changing for the dates and exceptions) or because a Power Platform admin turned it on. Used in Copilot, Work IQ connected agents and agents connected to the Dataverse MCP server.

The roadmap lists Worldwide (Standard Multi-Tenant). Learn states that Business Applications in Work IQ is not currently available in sovereign or government cloud environments, including DoD, GCC and GCC High.

## Governance guidance

### Before rollout
- Decide which environments take part in Work IQ.

### At rollout
- Write descriptions that state what a skill does and when to use it.
- Test representative requests before sharing widely.

### After rollout
- Track agent outcomes against the intended process.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ participation for a Dataverse environment</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation#environment-features-for-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Business Applications data in Work IQ available to Copilot (tenant)</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowed MCP clients for the Dataverse MCP server</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Advanced Settings › Allowed MCP Clients <a href="https://learn.microsoft.com/microsoft-sales-copilot/business-skills-dataverse#enable-business-skills-in-dataverse" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH [organization URI]/api/data/v9.2/allowedmcpclients({allowedmcpclientid}) with body {&quot;isenabled&quot;: false}</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP server access in Microsoft 365</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The tenant setting cascades over the environment features. Who can author and share a skill is a Dataverse matter: ownership, sharing and security roles including the Skill Sharing Role. Skills are shared in Power Apps by selecting a skill and then **Share**; **Manage access** shows who has access and lets you change or remove it ([Create and use business skills](https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills#share-a-business-skill)).

For Allowed MCP Clients, the Dataverse Web API reference documents the allowedmcpclients entity set, and the Dataverse CLI reference documents `dataverse mcp allow <appId>` for allowing an application ([Dataverse CLI reference](https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference)). Microsoft Learn documents no API for the other three settings at the time of writing (November 2026). The [quickstart](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/quickstart) walks through enabling an environment end to end.

## Open questions

- Pricing and metering at general availability.
- Audit coverage of skill creation and use.
- On what date will EU and EFTA environments be enabled by default? Learn says Microsoft plans to do so when the feature becomes generally available.

<!-- rationale
risk: Medium. Skills steer agent behaviour across surfaces, so a wrong or over-shared skill changes how agents act on business processes.
cost: Variable. The meter is Copilot Credits for Work IQ API and Cowork use; licensed Microsoft 365 Copilot Chat business-data grounding is included in the applicable entitlement. No rate specific to business skills is published.
impact: Medium. Affects makers, process owners and users of agents that discover skills.
-->
