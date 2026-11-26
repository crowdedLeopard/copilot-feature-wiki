---
title: "Work IQ: REST endpoint tools for agents"
slug: "work-iq-rest-endpoint-tools"
roadmapId: 570868
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let agents use supported REST endpoints as tools through governed Work IQ integrations. Learn does not describe it yet, so default, cost and controls are unconfirmed; review the Tools registry and spending controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Work IQ API usage is billed in Copilot Credits and is independent of Microsoft 365 Copilot licensing. Microsoft has not published a licence, meter or rate specific to REST endpoint tools."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["work-iq","tools","mcp","agents","agent-governance","copilot-credits","usage-based-billing","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 570868"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570868"
    kind: "roadmap"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Understand MCP server options in Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/tooling-servers-overview"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Microsoft 365 Copilot Cost Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "Microsoft MCP management MCP server reference (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-management"
    kind: "learn"
  - title: "MCP and API plugins for declarative agents"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-plugins"
    kind: "learn"
videos: []
related: ["work-iq","mcp","work-iq-agent-policy-governance","work-iq-custom-agents-3p-calls","copilot-credits"]
controls:
  - governs: "Whether a registered MCP server, and every tool it exposes, is available to agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "General control: Microsoft has not confirmed that REST endpoint tools appear in the registry as an MCP server."
  - governs: "Which individual tools on a supported MCP server are enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Tools > Enabled or Disabled toggle > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supports specific types of MCP server registered on Agent 365. General control, not confirmed for this feature."
  - governs: "Work IQ MCP request policy (read-only by default, tenant-level on or off)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "The Policy tab appears when it is available. General control: Microsoft has not confirmed it applies to REST endpoint tools."
  - governs: "Spending limits and consumption for Work IQ API usage in Copilot Credits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. General control: whether REST endpoint tool calls are metered is not published. The request body sets periodLimit for the policy spending limit or perUserLimit for the per-user limit."
  - governs: "A switch specific to REST endpoint tools in Work IQ"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such control at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: the roadmap description only, with the documented Work IQ, Tools registry and Copilot Credits controls shown as unconfirmed for it."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the roadmap preview and release wording in Change & support, and lowered the cost rating to low because REST endpoint tool metering is not yet published."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the spending-limit automation call to the documented PATCH operation, removed the tool count for Work IQ MCP, and added the plugins page as a source."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 70 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "adf0ee5e01b84a3f1a09b7c5561c846c"
---

## What's changing

The roadmap item says Microsoft is enabling agents to use supported REST endpoints as tools through governed Work IQ integrations. Microsoft Learn does not describe this capability yet, so what follows about how it behaves is the roadmap's one-sentence description. The Learn pages cited below cover the surrounding product (Work IQ, the Tools registry and Copilot Credits) and are background, not a description of this feature.

Microsoft has not said which REST endpoints count as "supported", how an endpoint is registered, whose credentials a call carries or where the tool appears to makers and admins. Learn describes Work IQ's current tools surface as Work IQ MCP, a single MCP endpoint. The roadmap item does not say whether REST endpoint tools join that server or arrive another way.

The roadmap record gives the status as In development, with Preview and General Availability as release phases, the Developer platform and Worldwide (Standard Multi-Tenant) as the cloud. It targets October CY2026 for preview and November CY2026 for the release; these are Microsoft's targets, not commitments. The record has no more-info link and was last modified on 13 October 2026.

## Why it matters

A tool that calls a REST endpoint is a route from an agent to whatever that endpoint does, so plan on its reach being set by the endpoint as well as by Work IQ's Microsoft 365 permissions. The documented Work IQ guardrails (a Rego-based policy engine, a default block on mutation operations) are described for Work IQ MCP requests, and Microsoft has not said they apply to REST endpoint tools.

Microsoft has not stated what happens on arrival, so base any plan on "no source says existing agents change", not on "nothing changes". The practical advice is to confirm where the existing registry, policy and spending controls sit before the capability appears, and to review it once Microsoft publishes a feature page.

## Risk assessment

**Data exposure**
- Work IQ documents that requests run in the context of the signed-in user. Microsoft has not said whether REST endpoint tool calls do, so confirm the identity a call carries before any endpoint that holds data the user could not otherwise reach is exposed as a tool.

**Security & identity**
- Work IQ uses Microsoft Entra ID delegated authentication and does not support application-only authentication. Whether REST endpoint tools use that model, or hold their own credentials, is not stated.
- For MCP servers that developers register, Learn describes approval and Microsoft Entra consent as separate steps. Whether REST endpoint tools follow that route is not stated.

**Autonomy & actions**
- Work IQ MCP policy does not allow mutation operations by default; they include create, update, delete and action requests such as sending email. A REST endpoint can expose write operations, and Learn does not say that this policy governs it.
- The Tools registry lets an admin turn individual tools off for supported MCP servers. Treat that as the model to look for, not as a confirmed control for this feature.

**Change & support**
- The roadmap targets preview for October CY2026 and release for November CY2026, while still listing the status as In development. Expect preview behaviour, names and limits to change before release.
- Learn says every Work IQ tool invocation is logged and evaluated. Confirm that REST endpoint tool calls appear in the same logging before relying on it for audit.

## Cost and licensing

**Licence.** Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing. For Microsoft 365 Copilot licensed users, Work IQ is available in all Microsoft 365 Copilot experiences and agents, and it is subject to usage-based billing for custom and third-party agents (Work IQ overview). Microsoft has not published a licence specific to REST endpoint tools.

**Meter.** Work IQ API usage consumes Copilot Credits shared with other eligible services, and Learn describes Work IQ cost as variable based on usage. The usage-based billing page lists Work IQ API for custom apps and agents among the services managed in the Microsoft 365 admin center. See [Copilot Credits](/concepts/copilot-credits/) for the meter.

**Caps.** Spending policies in the Cost management dashboard can set spending limits for supported users, environments and agents (see the spending row of the controls table). The Auto-apply new services setting is enabled by default for spending policies.

**Not yet published.** Whether REST endpoint tool calls are metered separately, at what rate, and which spending policy service covers them.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Developer as the platform, with Preview and General Availability release phases. Microsoft has not published which users or licences are in scope, which roles configure it, the rollout mechanics or the prerequisites.

For background, Work IQ requests are user-scoped and application-only authentication is not supported. The Tools registry states that what appears in it can vary by tenant, region, rollout status, licensing, administrator approval and organisational policy.

## Governance guidance

### Before rollout
- Open the Tools registry (Agents > Tools) and note which MCP servers and tools are available today, so a new REST endpoint tool can be compared with them.
- Review spending policies under Copilot > Cost management, including whether Auto-apply new services is on for the policies you rely on, to know what a newly supported Work IQ capability could inherit.
- Ask developers which REST endpoints they intend to expose as tools and which of them can create, update or delete data.

### At rollout
- Check the Policy tab of Work IQ MCP and record whether policy is on, noting that Microsoft has not confirmed it covers REST endpoint tools.
- Pilot with a small developer group under a spending policy limit before widening access.
- Turn off individual tools in the registry where the server supports it, once Microsoft confirms REST endpoint tools appear there.

### After rollout
- Review consumption by agent and service in Copilot > Cost management to see what REST endpoint tool use costs.
- Re-read this briefing when Microsoft publishes a Learn page or a Message center post for the item, and update the control rows that remain unconfirmed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a registered MCP server, and every tool it exposes, is available to agents</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed that REST endpoint tools appear in the registry as an MCP server.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which individual tools on a supported MCP server are enabled</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supports specific types of MCP server registered on Agent 365. General control, not confirmed for this feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Tools › Enabled or Disabled toggle › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP request policy (read-only by default, tenant-level on or off)</strong><br><small>Tenant</small><br><small class="controls__note">The Policy tab appears when it is available. General control: Microsoft has not confirmed it applies to REST endpoint tools.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Spending limits and consumption for Work IQ API usage in Copilot Credits</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. General control: whether REST endpoint tool calls are metered is not published. The request body sets periodLimit for the policy spending limit or perUserLimit for the per-user limit.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch specific to REST endpoint tools in Work IQ</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such control at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

None of the controls below is documented for REST endpoint tools; they are the controls Microsoft documents for Work IQ MCP, registered MCP servers and Copilot Credits. The registry rows apply to the MCP servers in the Tools registry. Microsoft has not confirmed that REST endpoint tools appear there.

Work IQ MCP policy is tenant-level in its initial release, and a change can take up to 24 hours to apply. Per-user, per-app and per-agent policy templates are not part of that initial control surface. Microsoft Learn documents no API for this policy at the time of writing (November 2026), and none for the Tools registry actions.

The Cost Management API is under /beta, where Learn says use in production applications is not supported.

## Open questions

- Which REST endpoints are "supported", and how are they registered and approved: through the Tools registry requests flow or another route? Watch the Work IQ pages on Microsoft Learn and Message center.
- Whose identity does a REST endpoint tool call carry: the signed-in user, as Work IQ documents for its requests, or a credential held by the tool?
- Do Work IQ MCP policy and the registry's tool toggles govern REST endpoint tools, including whether write calls are blocked by default?
- Are REST endpoint tool calls billed in Copilot Credits, at what rate, and under which spending policy service?
- Is this the same capability as creating a tool with a remote API in the Microsoft MCP management MCP server (preview), or a separate one?

<!-- rationale
risk: Medium. Agents would gain a new kind of tool, and Microsoft Learn does not yet say which Work IQ policies or Tools registry controls apply to it; the documented controls cover Work IQ MCP and registered MCP servers.
cost: Low. The only established cost of this roadmap change is administrative review time; licensing and metering for REST endpoint tools are not yet published.
impact: Low. The roadmap lists the Developer platform, so developers and the admins who govern agent tools notice first; Microsoft has not said whether end users see any change.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because no licence specific to REST endpoint tools is published. | Found: Work IQ API is licensed under your agreement governing use of Microsoft Online Services, including the Microsoft Product Terms. You pay for use of the Work IQ API through a usage-based model that uses Copilot Credits. | Fix: Set licensing.model to 'consumption' for the documented product-level model. Keep the existing billing notes and the narrower caveat about unpublished licensing and rates specific to REST endpoint tools; do not infer a feature-specific rate. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview
- [supported, minor] controls[0].governs; controls[0].scope; Governance controls / applicability: Server blocking governs tenant availability of a registered MCP server and all its exposed tools to agents. | Found: Blocking an MCP server (including WorkIQ MCP) blocks usage through governed Agent 365 and Microsoft 365 admin center (MAC) pathways. It doesn't automatically disable the underlying API or service endpoint outside that governed path unless separately controlled by service and API policy. | Fix: Add to controls[0].note and its rendered note: 'Blocking applies through governed Agent 365 and Microsoft 365 admin center pathways; it does not automatically disable the underlying API or service endpoint outside those pathways.' Keep the feature-specific registry caveat. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] controls[1].governs; Risk assessment: Autonomy & actions; Governance controls / applicability: The registry lets administrators enable or disable individual tools on supported registered MCP servers. | Found: Each toggle applies to the selected tool within the supported MCP server, not to the whole server or plugin package. The Agent 365 Tooling Gateway enforces the policy at runtime for supported tools and experiences that use the gateway. | Fix: Add to controls[1].note and its rendered note: 'The Agent 365 Tooling Gateway enforces these toggles for supported tools and experiences that use the gateway; do not assume enforcement across other products or connected components.' Keep the rollout and feature-specific caveats. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] controls[2].ui; Governance controls / admin-path: Agents > Tools > Work IQ MCP > Policy opens Work IQ MCP policy settings. | Found: In the left navigation, select Agents > Tools. ... In the tools registry, select Work IQ MCP. ... On the Work IQ MCP details pane, select the Policy tab when it's available. | Fix: Replace controls[2].ui.path and its rendered path with 'Agents > Tools > Registry > Work IQ MCP > Policy'. The already-cited MCP server administration page documents selecting Registry; the policy page gives the remaining steps. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] Governance guidance: Before rollout / admin-path: Agents > Tools opens the Tools registry for taking stock of MCP servers and tools. | Found: Select Agents > Tools, and then select the Registry tab. | Fix: Replace the first Before rollout bullet with: 'Open the Tools registry (Agents > Tools > Registry) and note which MCP servers and tools are available today, so a new REST endpoint tool can be compared with them.' | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
-->
