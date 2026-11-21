---
title: "Work IQ: long-running tasks for A2A and MCP agents"
slug: "work-iq-a2a-and-mcp-long-running-tasks"
roadmapId: 570851
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans durable Work IQ tasks over A2A and MCP that report progress, return results later and can be cancelled. Administrators should check spend and policy controls."
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
  notes: "Work IQ API access is independent of Microsoft 365 Copilot licensing and is available through usage-based billing in Copilot Credits. Pricing specific to long-running tasks is not yet published."
audiences: ["m365-admin","service-owner","finops","security"]
tags: ["work-iq","mcp","a2a","agents","copilot-credits","usage-based-billing","spending-policies","m365-admin-center","cost-management"]
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
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Managing AI experiences enabled by usage-based billing"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits"
    kind: "learn"
  - title: "Monitor Copilot Credit spending"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-monitor-spending"
    kind: "learn"
  - title: "Create spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    kind: "learn"
  - title: "List costManagementServiceUsageRecords"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    kind: "learn"
videos: []
related: ["work-iq-agent-policy-governance","copilot-credits","copilot-studio-cost-management-m365-admin-center","work-iq","agent-identity"]
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
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create"
    note: "Beta API; CopilotCostManagement-Policy.ReadWrite.All; Billing or Global Admin. Created disabled; link a group via Add assigned group. Nonempty assignedGroups at creation also needs CopilotCostManagement-Assignment.ReadWrite.All."
  - governs: "Review of Work IQ API credit consumption against spending limits"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost Management > Consumption"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-monitor-spending"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&endDate={endDate}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list"
    note: "UI has Policies and Agents and services views. API is beta and reports one completed UTC day per call; it is not specific to long-running tasks."
  - governs: "Whether the Work IQ service principal exists in the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "azure-cli"
      call: "az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    note: "Manual setup lists Global Administrator. MCP overview: created automatically on first use; manual provisioning is for when it does not yet exist. Not a per-feature switch."
  - governs: "Tenant switch for Work IQ A2A and MCP long-running tasks"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting specific to A2A or to long-running tasks is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-10-13T23:01:05"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; Learn documents A2A task methods and Work IQ billing and policy controls, but not the long-running feature itself."
  - date: "2026-11-16"
    note: "Added the Graph API for spending policies and a consumption-monitoring row, and reported the differing Work IQ MCP and Copilot Studio write-operation defaults."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 80 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed the unsupported opt-in statement, qualified spending-policy creation and Work IQ service principal setup, and removed two checklist items the controls table does not cover."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 98 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 90 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 90
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "749c34f36587b7936eb45590684163bf"
---

## What's changing

Microsoft plans to let agents run durable, long-running tasks against Work IQ over both the Agent-to-Agent (A2A) protocol and the Model Context Protocol (MCP). The roadmap item describes progress tracking, later retrieval of results and cancellation. It is listed for the Developer platform, in the Worldwide (Standard Multi-Tenant) cloud only.

The roadmap item is In development, with a preview date of October CY2026 and a target date of November CY2026, and its release phases are Preview and General Availability. These are Microsoft's targets, not commitments. Microsoft Learn does not describe this roadmap feature as such at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description.

Learn already documents related building blocks for A2A. The Work IQ A2A overview says Work IQ supports the GetTask, CancelTask and SubscribeToTask methods for managing tasks, and its sample agent card lists `"pushNotifications": false`. Learn does not yet describe progress reporting, how long a task or its result is kept, or any task mechanism for the Work IQ MCP server.

## Why it matters

A task that survives the request that started it means an agent can start work, disconnect and collect results later, so the actions it takes and the data it gathers outlast the moment a person or developer was watching.

For administrators the effect is mainly on spend and oversight. Work IQ API use consumes Copilot Credits from a pool shared with other services, so longer-running agent jobs can draw on that pool without a person present. Microsoft has not stated what happens on arrival for this capability, so service owners who build against Work IQ should settle spending limits and the Work IQ MCP policy before developers adopt the feature.

## Risk assessment

**Data exposure**

- Work IQ says its workspaces use SharePoint Embedded working storage for intermediate data and outputs within the tenant boundary. Whether results of long-running tasks are stored there, and for how long, is not documented.
- Work IQ actions are user scoped: every request runs in the context of a specific user and only accesses what that user may see or do. Learn does not confirm that a task finishing later keeps that limit.

**Security & identity**

- Work IQ A2A uses Microsoft Entra ID delegated authentication. How a delegated token stays valid for a task that outlives the request is not documented.
- Work IQ states that every tool invocation is logged and evaluated. Audit event names for task creation, retrieval or cancellation are not documented.

**Autonomy & actions**

- A background task can act without anyone watching. The Work IQ MCP policy page says mutation operations, including create, update, delete and sending email, are not allowed by default and can be enabled through tenant policy. The Copilot Studio page for Work IQ says write operations are on by default for that experience, subject to organisation permissions and policies. The two statements describe different experiences, so check the state in your tenant rather than assuming one default. Learn does not say whether the MCP policy is evaluated when a task is resumed.
- Cancellation is part of the roadmap description. Learn documents CancelTask for A2A, but no administrator-side way to cancel another person's task is documented at the time of writing (November 2026).

**Change & support**

- Preview behaviour may change before general availability, so expect support questions from developers about tasks that consume credits or return late.

## Cost and licensing

Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing. For Microsoft 365 Copilot licensed users, Work IQ is subject to usage-based billing for custom and third-party agents; users without a licence are billed based on usage. Both statements are on the Work IQ overview.

The meter is Copilot Credits, shared with other eligible services such as Copilot Cowork and Copilot Studio agents. The enablement guide lists a usage-based billing plan with an Azure subscription and resource group as a prerequisite. A Microsoft 365 Copilot licence does not replenish the Work IQ API credit balance, so a job can fail with `QuotaExhausted` even when the tenant holds prepaid credits.

Spending policies set limits but do not reserve or allocate credits. The cost considerations page says a policy can exclude Work IQ API, and that excluding it from one policy does not exclude it from others. When a user in a group policy exceeds the per-user limit, the Monitor Copilot Credit spending page says a running task can complete without interruption, and the excess is not counted toward the policy limit. Pricing, credit rates or limits specific to long-running tasks are not yet published.

## Scope

The roadmap item lists the Developer platform and the Worldwide (Standard Multi-Tenant) cloud only. It lists Work IQ and Microsoft Copilot (Microsoft 365) as products.

Work IQ requests run as a signed-in user, so the feature reaches only what that user can access. The enablement guide lists a usage-based billing plan, a user assigned to that plan and a Global Administrator for the one-time Work IQ setup. For manual setup, the enablement guide lists Global Administrator. The MCP overview says the service principal is created automatically on first use; manual provisioning is available when it does not yet exist, for example before configuring policy. Whether tasks need any further prerequisite is not yet documented.

## Governance guidance

### Before rollout

- Check which spending policies cover developers and service accounts that will call Work IQ, and whether Work IQ API is selected in each one (Microsoft 365 admin center > Copilot > Cost Management > Configuration).
- Decide whether Work IQ MCP mutations should stay at the default of not allowed before any agent starts background work, and confirm the policy state on the Work IQ MCP Policy tab.
- Ask developers which agents plan to use A2A or MCP tasks, and which identity and billing plan each will use.

### At rollout

- Set per-user and policy limits.
- Allow up to 24 hours for a change to the Work IQ MCP policy to apply across the tenant.

### After rollout

- Review Work IQ API credit use in the Consumption tab, in the Policies and Agents and services views, against the spending policy limits.
- Re-read the Work IQ A2A and MCP pages once preview ships to confirm task retention, audit events and any admin cancellation control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP tool requests, including write operations, are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-level on/off only. Changes can take up to 24 hours. Applies to Work IQ MCP; not confirmed for A2A or for long-running tasks.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Credit limits and which services, including Work IQ API, a group can spend on</strong><br><small>Group</small><br><small class="controls__note">Beta API; CopilotCostManagement-Policy.ReadWrite.All; Billing or Global Admin. Created disabled; link a group via Add assigned group. Nonempty assignedGroups at creation also needs CopilotCostManagement-Assignment.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Configuration › + Add spending policy <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-manage-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Review of Work IQ API credit consumption against spending limits</strong><br><small>Tenant</small><br><small class="controls__note">UI has Policies and Agents and services views. API is beta and reports one completed UTC day per call; it is not specific to long-running tasks.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost Management › Consumption <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-monitor-spending" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/beta/copilot/costManagement/usageReports/serviceUsageRecords?startDate={startDate}&amp;endDate={endDate}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/costmanagementserviceusagerecord-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ service principal exists in the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Manual setup lists Global Administrator. MCP overview: created automatically on first use; manual provisioning is for when it does not yet exist. Not a per-feature switch.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad sp create --id fdcc1f02-fc51-4226-8753-f668596af7f7</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for Work IQ A2A and MCP long-running tasks</strong><br><small>Tenant</small><br><small class="controls__note">No setting specific to A2A or to long-running tasks is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No control specific to long-running tasks is documented at the time of writing (November 2026). The rows above are existing Work IQ and billing controls. The MCP policy is tenant-wide only; Learn says per-user, per-app and per-agent policy is not part of the initial control surface. Learn does not confirm that either the MCP policy or a spending policy is applied when a task is resumed.

The Cost Management Graph APIs are in beta, and Microsoft says APIs under /beta are subject to change and not supported in production applications. Creating a spending policy also requires the Billing Administrator or Global Administrator role. The create call's required body properties are @odata.type, displayName, periodLimit, perUserLimit and serviceSettings. Spending policies limit credits but do not reserve them.

## Open questions

- How long are a long-running task and its result retained, and where are they stored? Watch the Work IQ A2A and MCP pages on Microsoft Learn.
- How does delegated user access hold for a task that finishes after the original sign-in, and is the Work IQ MCP policy re-evaluated on resume?
- Will long-running tasks be priced differently from synchronous calls in Copilot Credits, and will spending policies be able to cap them separately?
- Can an administrator list or cancel tasks started by other users, and which audit events record task creation, retrieval and cancellation?
- Which MCP task mechanism will Work IQ MCP support, given that the Work IQ MCP overview lists no task tools today?

<!-- rationale
risk: Medium. Tasks that run beyond a single request extend how long an agent acts on Microsoft 365 data, and Learn does not yet say how identity, result storage or audit apply to them.
cost: Variable. Work IQ API use consumes Copilot Credits shared with other services; Microsoft has not published whether long-running tasks are priced differently.
impact: Low. The roadmap lists the Developer platform; Microsoft has not stated what happens on arrival.
-->

<!-- verifier-findings (2026-11-21, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].api; Governance controls / command: POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies creates a spending policy specifying credit limits and selected services. | Found: POST https://graph.microsoft.com/beta/copilot/costManagement/spendingPolicies Required properties are displayName, periodLimit, perUserLimit, and serviceSettings. | Fix: Append to controls[1].note and its rendered table note: "The request body sets periodLimit, perUserLimit and serviceSettings." These properties are documented at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-create
-->
