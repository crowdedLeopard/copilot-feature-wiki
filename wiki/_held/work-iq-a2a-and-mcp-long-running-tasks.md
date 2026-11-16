---
title: "Work IQ: long-running tasks for A2A and MCP agents"
slug: "work-iq-a2a-and-mcp-long-running-tasks"
roadmapId: 570851
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans durable Work IQ tasks over A2A and MCP that report progress, return results later and can be cancelled. Developers opt in; administrators should check spend and policy controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ API use is billed through usage-based billing in Copilot Credits, independent of Microsoft 365 Copilot licensing. Pricing specific to long-running tasks is not yet published."
audiences: ["m365-admin","service-owner","finops","security"]
tags: ["work-iq","mcp","a2a","agents","copilot-credits","usage-based-billing","spending-policies","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 570851"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570851"
    kind: "roadmap"
  - title: "Work IQ Agent-to-Agent (A2A) overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/overview"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
videos: []
related: ["work-iq-agent-policy-governance","copilot-credits","copilot-studio-mcp-tools-in-agents","agent-identity","work-iq-human-in-the-loop"]
controls:
  - governs: "Whether Work IQ MCP tool requests, including write operations, are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Tenant-level on/off only. Changes can take up to 24 hours. Applies to Work IQ MCP; not confirmed for A2A or for long-running tasks."
  - governs: "Credit limits and which services, including Work IQ API, a group can spend on"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Configuration > + Add spending policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    api: null
    note: "Limits spend; does not reserve credits. Whether it caps long-running tasks separately is not documented."
  - governs: "Whether the Work IQ service principal exists in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "azure-cli"
      call: "az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "One-time enablement by a Global Administrator. It provisions Work IQ; it is not a per-feature switch."
  - governs: "Tenant switch for Work IQ A2A long-running tasks"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to A2A or to long-running tasks is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; Learn documents A2A task methods and Work IQ billing and policy controls, but not the long-running feature itself."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 60
  unconfirmed: 0
  contradicted: 2
  attempts: 1
---

## What's changing

Microsoft plans to let agents run durable, long-running tasks against Work IQ over both the Agent-to-Agent (A2A) protocol and the Model Context Protocol (MCP). The roadmap item describes progress tracking, later retrieval of results and cancellation. It is listed for the Developer platform, in the Worldwide (Standard Multi-Tenant) cloud only.

The roadmap item is In development, with a preview date of October CY2026 and a target date of November CY2026, and its release phases are Preview and General Availability. These are Microsoft's targets, not commitments. Microsoft Learn does not describe this roadmap feature as such, so what follows about its behaviour is the roadmap's description.

Learn already documents related building blocks for A2A. The Work IQ A2A overview says Work IQ supports the GetTask, CancelTask and SubscribeToTask methods for managing tasks, and its sample agent card lists `"pushNotifications": false`. Learn does not yet describe progress reporting, how long a task or its result is kept, or any task mechanism for the Work IQ MCP server.

## Why it matters

A task that survives the request that started it means an agent can start work, disconnect and collect results later, so the actions it takes and the data it gathers outlast the moment a person or developer was watching.

For administrators the effect is mainly on spend and oversight. Work IQ use consumes Copilot Credits from a pool shared with other services, so longer-running agent jobs can draw on that pool without a person present. Nothing needs switching on for tenants that do not build against Work IQ, but service owners who do should settle spending limits and the Work IQ MCP policy before developers adopt the feature.

## Risk assessment

**Data exposure**

- Work IQ says its workspaces use SharePoint Embedded working storage for intermediate data and outputs within the tenant boundary. Whether results of long-running tasks are stored there, and for how long, is not documented.
- Work IQ actions are user scoped: every request runs in the context of a specific user and only accesses what that user may see or do. Learn does not confirm that a task finishing later keeps that limit.

**Security & identity**

- Work IQ uses Microsoft Entra ID delegated authentication, and application-only authentication isn't supported. How a delegated token is kept valid for a task that outlives the request is not documented.
- Work IQ states that every tool invocation is logged and evaluated. Audit event names for task creation, retrieval or cancellation are not documented.

**Autonomy & actions**

- A background task can act without anyone watching. For Work IQ MCP, mutation operations such as create, update, delete and sending email are not allowed by default, and the tenant policy in the Microsoft 365 admin center decides whether supported mutations are enabled. Learn does not say whether that policy is evaluated when a task is resumed.
- Cancellation is part of the roadmap description. Learn documents CancelTask for A2A, but no administrator-side way to cancel another person's task is documented at the time of writing (November 2026).

**Change & support**

- Preview behaviour may change before general availability, so expect support questions from developers about tasks that consume credits or return late.

## Cost and licensing

Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing. For users with a Microsoft 365 Copilot licence, Work IQ is subject to usage-based billing for custom and third-party agents; users without a licence are billed based on usage. Both statements are on the Work IQ overview.

The meter is Copilot Credits, shared with other eligible services. The enablement guide lists a usage-based billing plan with an Azure subscription and resource group as a prerequisite. A Microsoft 365 Copilot licence does not replenish the Work IQ API credit balance, so a long-running job can hit `QuotaExhausted` even when the tenant holds prepaid credits.

Spending policies set limits but do not reserve or allocate credits. The cost considerations page says a Work IQ API service can be excluded from a spending policy. Pricing, credit rates or limits specific to long-running tasks are not yet published.

## Scope

The roadmap item lists the Developer platform and the Worldwide (Standard Multi-Tenant) cloud only. It lists Work IQ and Microsoft Copilot (Microsoft 365) as products.

Work IQ requests run as a signed-in user, so the feature reaches only what that user can access. Tenant enablement of the Work IQ API needs a Global Administrator for the one-time setup, plus a usage-based billing plan, per the enablement guide. Whether tasks need any further prerequisite is not yet documented.

## Governance guidance

### Before rollout

- Check which spending policies cover developers and service accounts that will call Work IQ, and whether Work IQ API is selected in each one (Microsoft 365 admin center > Copilot > Cost Management).
- Decide whether Work IQ MCP mutations should stay at the default of not allowed before any agent starts background work.
- Ask developers which agents plan to use A2A or MCP tasks, and which identity and billing plan each will use.

### At rollout

- Turn off Auto-apply new services on policies that should not take on new services automatically.
- Set per-user and policy limits and alert recipients so a runaway task raises an email before credits are exhausted.
- Confirm the Work IQ MCP policy state on the Policy tab for Work IQ MCP and allow up to 24 hours for a change to apply.

### After rollout

- Review Copilot Credit consumption for Work IQ API each month against the spending policy limits.
- Re-read the Work IQ A2A and MCP pages once preview ships to confirm task retention, audit events and any admin cancellation control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tool requests, including write operations, are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-level on/off only. Changes can take up to 24 hours. Applies to Work IQ MCP; not confirmed for A2A or for long-running tasks.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credit limits and which services, including Work IQ API, a group can spend on</strong><br><small>Group</small><br><small class="controls__note">Limits spend; does not reserve credits. Whether it caps long-running tasks separately is not documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ service principal exists in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">One-time enablement by a Global Administrator. It provisions Work IQ; it is not a per-feature switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for Work IQ A2A long-running tasks</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to A2A or to long-running tasks is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No control specific to long-running tasks is documented at the time of writing (November 2026). The rows below are existing Work IQ and billing controls. The MCP policy is tenant-wide only; Learn says per-user, per-app and per-agent policy is not part of the initial control surface. Spending policies limit credits but do not reserve them, and a Microsoft 365 Copilot licence does not top up Work IQ API credits. Learn does not confirm that either control is applied when a task is resumed.

## Open questions

- How long are a long-running task and its result retained, and where are they stored? Watch the Work IQ A2A and MCP pages on Microsoft Learn.
- How does delegated user access hold for a task that finishes after the original sign-in, and is the Work IQ MCP policy re-evaluated on resume?
- Will long-running tasks be priced differently from synchronous calls in Copilot Credits, and will spending policies be able to cap them separately?
- Can an administrator list or cancel tasks started by other users, and which audit events record task creation, retrieval and cancellation?
- Which MCP task mechanism will Work IQ MCP support, given that the Work IQ MCP overview lists no task tools today?

<!-- rationale
risk: Medium. Tasks that run beyond a single request extend how long an agent acts on Microsoft 365 data, and Learn does not yet say how identity, result storage or audit apply to them.
cost: Variable. Work IQ API use is metered in Copilot Credits shared with other services; Microsoft has not published whether long-running tasks are priced differently.
impact: Low. Developers and agent owners who call Work IQ over A2A or MCP notice it; end users only see it through agents that adopt it.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[1].api; Governance controls / absence: An API or automation surface for Work IQ spending policies is not yet documented. | Found: POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies
"serviceSettings": [
    { "serviceId": "cowork", "state": "enabled" },
    { "serviceId": "workIQ", "state": "enabled" }
  ] | Fix: Replace controls[1].api null and its rendered gap with kind graph, call POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies and this reference URL. Explain that this is beta and not supported for production applications. Link the documented required body, including concrete @odata.type, displayName, periodLimit, perUserLimit and serviceSettings; group policies are created disabled and need their audience linked. State the delegated permission and Billing Administrator or Global Administrator requirement. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create
- [supported, minor] Risk assessment: Autonomy & actions; Governance guidance: Before rollout / default: Work IQ MCP mutations, including create, update, delete and sending email, are not allowed by default and can be enabled by tenant policy. | Found: By default, mutation operations aren't allowed for safety. This restriction includes create, update, delete, and action requests that modify data, such as sending email. | Fix: Keep the statement attributed to the MCP policy-governance page, but cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq as well and report its different statement: 'Write operations are on by default. Your organization's permissions and policies still apply.' Explain that the latter describes the Copilot Studio harness experience; do not imply one unqualified default across experiences. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] Governance guidance: After rollout / behaviour: Administrators can review Work IQ API credit consumption and compare it with spending-policy limits. | Found: In the Agents and services view, review usage for supported services. For example, Cowork and Work IQ API. This view shows active users, credits used, and session count for each supported service. | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-monitor-spending to sources and cite it for the monthly consumption review. | Source: https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-monitor-spending
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist calls for consumption monitoring, but no controls row records that monitoring surface. | Found: Checklist: 'Review Copilot Credit consumption for Work IQ API each month against the spending policy limits.' The controls table has MCP policy, spending-policy configuration, service-principal creation and the absent task switch, but no consumption-monitoring row. | Fix: Add a consumption-monitoring row with Microsoft 365 admin center > Copilot > Cost Management > Consumption, noting the Policies and Agents and services views. Use https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-monitor-spending for its UI documentation; the beta Cost Management API overview also documents service and funding usage reports.
-->
