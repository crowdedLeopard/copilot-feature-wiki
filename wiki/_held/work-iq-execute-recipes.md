---
title: "Work IQ: agents can execute reusable recipes"
slug: "work-iq-execute-recipes"
roadmapId: 570866
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Agents will be able to run reusable Work IQ recipes that coordinate supported tools and actions."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Work IQ API calls elsewhere require Copilot Credits billing."
audiences: ["m365-admin","service-owner","security"]
tags: ["work-iq","recipes","agents","mcp"]
sources:
  - title: "Microsoft 365 Roadmap item 570866"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570866"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Work IQ API enablement for the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization"
    kind: "learn"
  - title: "Admin consent for an app to ask Work IQ (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents","copilot-credits","agent-identity"]
controls:
  - governs: "Work IQ API enablement for the organisation"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals { appId: fdcc1f02-fc51-4226-8753-f668596af7f7 }"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization"
  - governs: "Admin consent for an app to ask Work IQ"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > App registrations > app > API permissions > WorkIQAgent.Ask > Grant admin consent / Revoke admin consent"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance"
    api: null
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
  - governs: "Control specific to recipes"
    scope: "tenant"
    ui: null
    api: null
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 570866."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

The roadmap entry states that agents will be able to execute reusable Work IQ recipes that coordinate supported tools and actions. That is the full description published.

The target is November 2026 and the status is In development. No Microsoft Learn page describing recipes was found at the time of review, so no detail on format, authoring or limits can be confirmed.

Work IQ is otherwise documented as exposing Microsoft 365 work context to agents through MCP and A2A, using delegated authentication.

## Why it matters

Reusable recipes suggest standard multi-step behaviour shared by agents. Owners should expect questions about who can author them, which tools they may call and how actions are approved and audited.

## Risk assessment

**Data exposure**
- Recipes would use supported tools with the signed-in user's permissions; the exact data reach is unpublished.

**Security & identity**
- Work IQ uses delegated Entra authentication and does not support application-only access.

**Autonomy & actions**
- Chained actions raise autonomy compared with single calls.

**Change & support**
- Shared recipes mean one change affects many agents.

## Cost and licensing

Not yet published. Learn notes that Work IQ retrieve requires Copilot Credits billing and a spending policy that includes Work IQ API; whether recipes follow the same model is unknown.

## Scope

Agents using Work IQ. Cloud and tenant scope are not stated in the roadmap record.

## Governance guidance

### Before rollout
- Inventory agents already using Work IQ.
- Agree an approval route for recipe authoring.

### At rollout
- Limit recipe availability to a pilot.
- Require human approval for write actions where supported.

### After rollout
- Review audit logs for recipe runs.
- Retire unused recipes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ API enablement for the organisation</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals { appId: fdcc1f02-fc51-4226-8753-f668596af7f7 }</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin consent for an app to ask Work IQ</strong><br><small>App</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › WorkIQAgent.Ask › Grant admin consent / Revoke admin consent <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Control specific to recipes</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Recipes run inside the Work IQ permission model, so the levers are the ones that govern Work IQ generally: enablement, per-app consent and the MCP policy, which disallows mutation operations unless an administrator permits them. Credit consumption follows the tenant's [spending policies](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup). Nothing recipe-specific is documented yet.

## Open questions

- How recipes are authored, shared and versioned.
- Which tools and actions are supported.
- How usage is metered and audited.

<!-- rationale
risk: Medium. Recipes chain tools and actions, so agents can take multi-step actions; the available controls are not yet published.
cost: Variable. Work IQ API use can require Copilot Credits billing; recipe-specific metering is not yet published.
impact: Low. Affects developers and admins building or approving agents that use Work IQ.
-->
