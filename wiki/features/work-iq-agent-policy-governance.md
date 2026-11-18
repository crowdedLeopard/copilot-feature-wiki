---
title: "Work IQ: policy-based governance of agents and their capabilities"
slug: "work-iq-agent-policy-governance"
roadmapId: 570652
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap item remains in development. Microsoft Learn separately documents Work IQ MCP tenant policy controls; the controls below describe that documented surface, and administrators can review them now."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","agent-governance","policy","agents","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 570652"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570652"
    kind: "roadmap"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Enable your tenant for Work IQ"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq"
    kind: "learn"
  - title: "Connect agents to Microsoft 365 with Work IQ (preview)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq"
    kind: "learn"
  - title: "Work IQ A2A quickstart"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
  - title: "Work IQ MCP server access (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    kind: "learn"
  - title: "Work IQ API enablement for the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization"
    kind: "learn"
  - title: "Admin consent for an app to ask Work IQ (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance"
    kind: "learn"
  - title: "Admin consent for an app to ask Work IQ (Azure CLI)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart#register-the-application-in-microsoft-entra"
    kind: "learn"
videos: []
related: ["work-iq-a2a-and-mcp-long-running-tasks"]
controls:
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
    note: "Takes up to 24 hours to apply. Mutation operations are disallowed by default. The Policy tab shows when the tenant has Work IQ MCP access and the account can manage tenant-level Work IQ or Copilot settings."
  - governs: "Work IQ MCP server access"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    api: null
    note: "Source is preview documentation. Needs the AI Administrator role for Microsoft 365 admin center settings."
  - governs: "Work IQ API enablement for the organisation"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals { appId: fdcc1f02-fc51-4226-8753-f668596af7f7 }"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization"
    note: "Also available as az ad sp create --id <appId>."
  - governs: "Admin consent for an app to ask Work IQ"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant] (grant); WorkIQAgent.Ask > Revoke admin consent (revoke)"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance"
    api:
      kind: "azure-cli"
      call: "az ad app permission admin-consent --id <appId>"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart#register-the-application-in-microsoft-entra"
    note: "The app must already request WorkIQAgent.Ask; the quickstart adds it with az ad app permission add before running admin-consent."
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ agent policy governance, in development; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: documented Work IQ MCP tenant policy scope, roles and request-time behaviour; consent path split into grant and revoke with an Azure CLI call; Copilot Credits meter; action set to review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 52 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 50
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "5f62c19842b880aaaa120fcf88b8c333"
---

## What's changing

The roadmap states that administrators will get policy-based controls for governing agents and their capabilities at scale. That is the full description on the roadmap item.

The item is listed under Work IQ and Microsoft Copilot (Microsoft 365), Worldwide, on the web. Its status is In development. A preview is shown for November 2026 and general availability is targeted for January 2027.

Microsoft Learn separately documents Work IQ MCP tenant policy controls. Work IQ uses a Rego-based policy layer that applies request-time controls over resource paths, operations and data retrieval for MCP tool requests. In the initial release, tenant administrators can turn Work IQ MCP policy on or off for the tenant in the Microsoft 365 admin center, and mutation operations (create, update, delete and actions such as sending email) are not allowed by default. Learn does not link that page to this roadmap item, so the controls below describe the documented surface and not a confirmed statement of this item's scope.

What remains open is any scope of the roadmap item beyond the documented MCP controls, and how it relates to the Agent 365 control plane or agent lifecycle rules in the Microsoft 365 admin center.

## Why it matters

Policy at scale is what lets an organisation govern many agents without reviewing each one. Service owners should expect to define baseline policies, such as which tools or data sources agents may use.

For Work IQ MCP, the decisions Learn documents are whether to turn tenant policy on and whether to enable supported mutation scenarios. Plan those policy decisions now, and treat any wider scope of the roadmap item as something to confirm.

## Risk assessment

**Data exposure**
- Policy can restrict the resource paths and operations that Work IQ MCP tool requests may use, but it cannot grant access beyond what the signed-in user is already allowed to access. Any further data-access controls in the roadmap item are not yet published.

**Security & identity**
- The documented initial Work IQ MCP policy scope is tenant-wide; per-user, per-app, per-agent and scenario-specific policy templates are not part of the initial control surface.
- Roles differ by guide: the access-control guide (preview) requires the AI Administrator role for settings in the Microsoft 365 admin center, and enabling Work IQ requires a Global Administrator for the one-time setup. The Policy tab guide asks only for an account with permission to manage tenant-level Work IQ or Copilot settings and names no built-in role.

**Autonomy & actions**
- Policies may limit which capabilities an agent can use.

**Change & support**
- Turning on the documented MCP tenant policy governs tool requests tenant-wide at request time, so existing callers can encounter denials. Learn describes policy-denied responses as governance decisions, not transient failures to retry, and a policy change can take up to 24 hours to apply.
- Whether already-created agents are evaluated or remediated retroactively is not described.

## Cost and licensing

Not yet published for the governance control. No licence, add-on or meter is named on the roadmap item, so the rating assumes admin effort only until Microsoft documents the feature.

Work IQ API calls are separately metered in Copilot Credits; no separate price for this governance control is published. Microsoft Learn says Work IQ API use is paid for through a consumption-based model that uses Copilot Credits.

## Scope

Administrators of agents using Work IQ, Worldwide cloud, web. Other clouds are not listed.

## Governance guidance

### Before rollout
- Inventory current agents and the capabilities they use.
- Draft baseline rules for allowed capabilities.
- Compare with existing controls in Agent 365 and the Microsoft 365 admin center.

### At rollout
- Pilot policies on a small set of agents.
- Tell agent owners which policies apply.

### After rollout
- Review policy exceptions.
- Check for agents blocked unexpectedly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Takes up to 24 hours to apply. Mutation operations are disallowed by default. The Policy tab shows when the tenant has Work IQ MCP access and the account can manage tenant-level Work IQ or Copilot settings.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP server access</strong><br><small>Tenant</small><br><small class="controls__note">Source is preview documentation. Needs the AI Administrator role for Microsoft 365 admin center settings.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ API enablement for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Also available as az ad sp create --id &lt;appId&gt;.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals { appId: fdcc1f02-fc51-4226-8753-f668596af7f7 }</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin consent for an app to ask Work IQ</strong><br><small>App</small><br><small class="controls__note">The app must already request WorkIQAgent.Ask; the quickstart adds it with az ad app permission add before running admin-consent.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › Grant admin consent for [your tenant] (grant); WorkIQAgent.Ask › Revoke admin consent (revoke) <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az ad app permission admin-consent --id &lt;appId&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart#register-the-application-in-microsoft-entra" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

In the initial release the policy layer is a single tenant-level switch; per-user, per-app and per-agent templates are named as possible later additions, so the finer governance today is consent per application and the user's own Microsoft 365 permissions, which policy can never exceed. Policy-denied requests surface to the app as governance decisions rather than errors to retry.

For the consent row, the app must already request WorkIQAgent.Ask: the quickstart runs az ad app permission add before az ad app permission admin-consent. Work IQ API calls are metered in Copilot Credits, and spending policies can include or exclude Work IQ API and set limits but do not reserve credits for a workload, user or group ([Work IQ API cost considerations](https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations#work-iq-api)). General setup is in the Copilot Credits [spending policies](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup) guide.

## Open questions

- Where will policies be managed: Microsoft 365 admin center, Agent 365 or elsewhere?
- Which capabilities beyond the documented Work IQ MCP request controls does the roadmap item cover?
- How do policies interact with maker-level settings?
- Will existing agents be evaluated retroactively?

<!-- rationale
risk: Low. The documented Work IQ MCP policy is a tenant-level control that cannot grant access beyond the signed-in user's permissions; the control's default state is not stated, so this is rated on today's behaviour continuing.
cost: Low, provisional. This is the incremental administration cost of the governance control, not the cost of using Work IQ: Work IQ API calls are metered in Copilot Credits, and no separate price for this control is published.
impact: Medium. It would affect admins and agent owners whose agents are subject to the new policies.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Governance controls: first paragraph after table / behaviour: In the initial release the policy layer is a single tenant-level switch. | Found: Searched: "Work IQ MCP" "policy" "API" "PowerShell". Read MCP policy governance in full; it documents on/off, supported mutation configuration and toggle-style and numeric settings, but does not say the layer consists of one switch. | Fix: Replace 'In the initial release the policy layer is a single tenant-level switch' with 'In the initial release, Work IQ MCP policy control is tenant-level'.
- [unsupported, major] controls[1].note; Risk assessment: Security & identity; sources / behaviour: The current access-control guide is identified as preview documentation. | Found: Searched: "Manage AI experience access to Business Applications in Work IQ" "preview". Read that guide in full and matching results; the current guide has no preview label. Other results label individual Business apps workloads preview, not this guide. | Fix: Remove 'Source is preview documentation.' from controls[1].note and its rendered note, remove '(preview)' after 'access-control guide' in Security & identity, and use the current source title 'Manage AI experience access to Business Applications in Work IQ'. Keep the AI Administrator requirement unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; controls[0].note; Governance controls table / default: The MCP policy guide says mutation operations, including create, update, delete and sending email, are disallowed by default. | Found: By default, mutation operations aren't allowed for safety. This restriction includes create, update, delete, and action requests that modify data, such as sending email. | Fix: Keep the attribution to the MCP policy guide and add: 'The Copilot Studio Work IQ guide separately says write operations are on by default, subject to organizational permissions and policies; check the applicable experience rather than assuming a uniform write default.' Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq#work-iq-key-features, which says 'Write operations are on by default. Your organization's permissions and policies still apply.' | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
-->
