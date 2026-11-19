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
  - title: "Microsoft MCP management MCP server reference (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-management"
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
      call: "GET /beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview"
    note: "Beta API, subject to change. General control: Work IQ API is a listed service; whether REST endpoint tool calls are metered is not published."
  - governs: "A switch specific to REST endpoint tools in Work IQ"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such control at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
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
version: 2
verification:
  status: "held"
  date: "2026-11-19"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 68
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "479b2127f57202aac925c5d789098563"
---

## What's changing

The roadmap item says Microsoft is enabling agents to use supported REST endpoints as tools through governed Work IQ integrations. Microsoft Learn does not describe this capability yet, so what follows about how it behaves is the roadmap's one-sentence description. The Learn pages cited below cover the surrounding product (Work IQ, the Tools registry and Copilot Credits) and are background, not a description of this feature.

Microsoft has not said which REST endpoints count as "supported", how an endpoint is registered, whose credentials a call carries or where the tool appears to makers and admins. Learn describes Work IQ's current tools surface as Work IQ MCP, a single MCP endpoint with 10 generic tools. The roadmap item does not say whether REST endpoint tools join that server or arrive another way.

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
<tr><td data-label="Control"><strong>Spending limits and consumption for Work IQ API usage in Copilot Credits</strong><br><small>Tenant</small><br><small class="controls__note">Beta API, subject to change. General control: Work IQ API is a listed service; whether REST endpoint tool calls are metered is not published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview" rel="noopener" class="controls__docs">Learn</a></td></tr>
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

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].api; Governance controls: fourth row / command: GET /beta/copilot/costManagement/spendingPolicies is the automation counterpart for the row governing spending limits and consumption. | Found: List spendingPolicies | GET /copilot/costManagement/spendingPolicies | Get a list of spending policies. ... Update spendingPolicy | PATCH /copilot/costManagement/spendingPolicies/{id} | Update a spending policy. | Fix: Replace the call with 'PATCH /beta/copilot/costManagement/spendingPolicies/{id}' and its docs URL with https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update. Add to the row note: 'The request body sets periodLimit for the policy spending limit or perUserLimit for the per-user limit.' Make the same replacement in the rendered table. The current GET only lists policies and cannot configure a spending limit. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: Learn describes Work IQ MCP as having 10 generic tools. | Found: collapses hundreds of operations into just 10 generic tools | Fix: Remove 'with 10 generic tools'. The cited overview says 10, but https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview lists 12 tool names in its Entity, Copilot and Schema rows, including fetch_blob and the preview retrieve tool. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/
- [supported, minor] Why it matters; Risk assessment: Autonomy & actions / behaviour: REST endpoints can expose operations that create, update or delete data. | Found: users can ask a declarative agent to query an MCP server or REST API for information and, when supported, create, update, and delete data and objects through natural language prompts. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-plugins to sources for the general statement that REST endpoints can expose write operations. Do not describe that plugin mechanism as the implementation of this roadmap capability. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-plugins
-->
