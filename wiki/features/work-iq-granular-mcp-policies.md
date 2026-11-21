---
title: "Work IQ: granular MCP policies to restrict platforms, workloads and operations"
slug: "work-iq-granular-mcp-policies"
roadmapId: 570671
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans finer-grained policies for Work IQ MCP access. Learn documents only a tenant-wide policy on/off switch today. Administrators of agents that call Work IQ MCP should review it; nothing is documented as automatic."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ API uses consumption-based licensing through Copilot Credits; no separate entitlement or price for the planned granular policies is published. Learn says Work IQ API access is independent of Microsoft 365 Copilot licensing."
audiences: ["m365-admin","security","service-owner","maker"]
tags: ["work-iq","mcp","agent-governance","policy","guardrails","least-privilege","write-actions","m365-admin-center","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 570671"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570671"
    kind: "roadmap"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Work IQ MCP overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/overview"
    kind: "learn"
  - title: "Migrate agentic retrieval workflows to Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/migrate-retrieval-api"
    kind: "learn"
  - title: "Microsoft Work IQ API"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
videos: []
related: ["work-iq-agent-policy-governance","agent-identity"]
controls:
  - governs: "Whether Work IQ MCP policy applies to the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Policy tab shown when available. Changes can take up to 24 hours to apply. Governs the initial tenant-level policy, not the planned granular policies."
  - governs: "Per-platform, per-workload, per-agent or per-operation MCP restrictions"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn says per-user, per-app, per-agent and scenario-specific templates are not part of the initial control surface."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-17T19:53:11"
changes:
  - date: "2026-11-17"
    note: "New briefing: the roadmap plans granular Work IQ MCP policies; Learn documents only a tenant-level policy switch today."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected licensing to consumption through Copilot Credits (Work IQ API page), removed the unsupported tool count and dropped the After rollout cost-review step."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the workload-restriction statement to refer to the planned tenant-level granular policy controls, and attributed the mutation default to the MCP policy page alongside the Copilot Studio page."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-21"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ef5d426d4c546f4e6bc697f1c7f80173"
---

## What's changing

The roadmap item describes granular policies that restrict MCP access to trusted platforms, workloads and supported operations. Its status is In development, with a preview date target of November CY2026 and a target date of January CY2027. The record lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Developer as the platform. These dates are Microsoft's targets, not commitments.

Microsoft Learn has no page for the granular policies yet, so what they will contain is the roadmap's description only. Learn does document the policy layer for Work IQ MCP as it stands: a Rego-based layer (Rego is the policy language of Open Policy Agent) that evaluates each MCP tool request and can allow or deny it. The page says that in the initial release this control is tenant-level, that tenant administrators can turn the policy on or off in the Microsoft 365 admin center, and that more granular controls and policy templates might be added later.

The same page says per-user, per-app, per-agent and scenario-specific policy templates are not part of the initial policy control surface, and that by default mutation operations (create, update, delete and actions such as sending email) are not allowed. The Copilot Studio Work IQ page describes write operations as on by default, subject to organisational permissions and policies; verify the effective behaviour in your client and tenant. Microsoft has not said whether this roadmap item delivers those later controls, or what "trusted platforms" means.

## Why it matters

Work IQ MCP lets agents read and, where policy allows, change Microsoft 365 data through generic tools that work on resource paths. Today an administrator's documented choice is the tenant-wide policy switch. Finer controls over which platforms, workloads and operations may use MCP would decide how far an agent can go without a custom build, so this item matters to security teams and to owners of agents that call Work IQ MCP.

Microsoft has not stated what happens on arrival, so plan on today's behaviour continuing: no source says existing behaviour changes. Use the preview to learn what the policies cover before anyone relies on them, and keep the existing tenant policy decision deliberate in the meantime.

## Risk assessment

**Data exposure**

- Work IQ MCP tools reach Microsoft 365 data such as mail, calendar, files, people, chat and sites. Learn says policy can't grant access beyond what the signed-in user is already allowed to access, so the policy narrows access and does not widen it.
- Learn lists data access scope and data retrieval limits (bounded collection reads) among the default guardrails. The planned tenant-level granular policy controls that restrict by platform or workload are not yet documented.

**Security & identity**

- Policy sits alongside Microsoft Entra authentication, OAuth permissions and user permissions, and does not replace them. Learn describes it as a request-time layer that evaluates the path, operation, request content and tenant context.
- What "trusted platforms" means in the roadmap text is not described, including how a platform would be identified. Confirm this before relying on it as a boundary.

**Autonomy & actions**

- The Work IQ MCP policy page says mutation operations are not allowed by default, and administrators can enable supported mutation scenarios through tenant policy. Because the documented control is tenant-level, confirm whether enabling a write scenario can be limited to particular agents or clients once granular policies are documented.
- The roadmap's "supported operations" wording suggests per-operation limits. Their form is not documented.

**Change & support**

- A request can fail because of tenant policy even when the user is authenticated and the app holds the OAuth permission. Learn tells developers to treat policy-denied responses as governance decisions, so expect support questions that look like agent faults.
- Learn says a saved policy change can take up to 24 hours to apply across the tenant.

## Cost and licensing

Work IQ API uses consumption-based licensing through Copilot Credits; no separate entitlement or price for the planned granular policies is published. Learn's Work IQ overview says Work IQ API access is independent of Microsoft 365 Copilot licensing and available through usage-based billing, that Work IQ cost can be managed in the Microsoft 365 admin center, and that Work IQ API usage consumes Copilot Credits shared with other eligible services. See [Copilot Credits](/concepts/copilot-credits/).

The overview adds that Microsoft 365 Copilot licensed users get Work IQ in all Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents, and that users without a Microsoft 365 Copilot licence are billed on usage. Whether the granular policies change that meter or carry a separate charge is not yet published. The known indirect cost is administrator time to define, test and monitor policy.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Developer as the platform, with products Work IQ and Microsoft Copilot (Microsoft 365). It is not listed for US Government clouds on the record.

The current policy control is configured in the Microsoft 365 admin center by an account with permission to manage tenant-level Work IQ or Copilot settings; Learn names no specific role. Learn says that if the Work IQ MCP policy settings do not appear, administrators should check that the tenant has access to Work IQ MCP and that the account has the required permissions. The Work IQ service principal is created when Work IQ is first used, so configuring policy before any MCP use can fail until it is provisioned.

## Governance guidance

### Before rollout

- Check whether Work IQ MCP appears in the Tools registry in the Microsoft 365 admin center and whether its Policy tab is shown (first controls row).
- List the agents and MCP clients in your tenant that call Work IQ MCP, and note which of them need write operations such as sending mail.
- Provision the Work IQ service principal first, using Learn's "Enable your tenant for Work IQ" steps, if policy configuration fails before any MCP use.
- Ask security which operations and paths they would want to restrict, so you can compare the answer with what the preview documents.

### At rollout

- Review the current Work IQ MCP policy state and set the tenant switch deliberately, allowing up to 24 hours for it to apply.
- Test one read request and one write request from a pilot client, and expect a policy denial where write operations are not enabled.
- Read the Learn page for the granular policies, once one exists, before treating any per-path or per-operation restriction as enforced.

### After rollout

- Watch Message center and the Work IQ MCP policy governance page for the granular controls and update the controls table when they are documented.
- Triage agent failures reported by developers against policy denials before treating them as outages.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ MCP policy applies to the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Policy tab shown when available. Changes can take up to 24 hours to apply. Governs the initial tenant-level policy, not the planned granular policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Per-platform, per-workload, per-agent or per-operation MCP restrictions</strong><br><small>Tenant</small><br><small class="controls__note">Learn says per-user, per-app, per-agent and scenario-specific templates are not part of the initial control surface.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented control is a single tenant-level policy switch. Learn says per-user, per-app, per-agent and scenario-specific policy templates are not part of the initial control surface, so the second row records that granular controls are not yet documented.

The policy page refers to experiences that configure policy settings and to editable policies, and describes values such as Allowed and Disallowed, but names no endpoint or cmdlet. Microsoft Learn documents no API for this policy at the time of writing (November 2026).

Learn's migration guidance also refers to blocking Work IQ MCP tenant-wide, which stops it for the whole tenant; its path is not on that page. Policy approval does not guarantee success, because the request is still checked against the signed-in user's permissions.

## Open questions

- Does this roadmap item deliver the "more granular controls and policy templates" that the Work IQ MCP policy governance page says might be added later? Watch that page and Message center.
- What counts as a "trusted platform" or workload, and how will an administrator list them?
- Which operations can be allowed or denied individually, and can a write scenario be enabled for some agents or clients and not others?
- Is the planned policy on or off until an administrator configures it, and does a policy configured in preview carry over to general availability?
- Will the granular policies have an API, and will they carry any licence or Copilot Credits charge of their own?

<!-- rationale
risk: Medium. Work IQ MCP tools reach mail, calendar, files, people, chat and sites, and the only documented policy control is a tenant-wide on/off switch. Microsoft has not stated the default for the planned granular policies.
cost: Low. No charge for the policies themselves is published. Work IQ API usage is billed by usage and draws on Copilot Credits, so the known cost is admin time plus the existing Work IQ meter.
impact: Medium. Administrators configure it, but developers and makers whose agents call Work IQ MCP would see requests denied by policy. End users notice only through agents that stop working.
-->
