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
cost: "low"
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
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#admin-management"
    kind: "learn"
  - title: "Grant or revoke API permissions programmatically"
    url: "https://learn.microsoft.com/graph/permissions-grant-via-msgraph"
    kind: "learn"
  - title: "Create oAuth2PermissionGrant"
    url: "https://learn.microsoft.com/graph/api/oauth2permissiongrant-post?view=graph-rest-1.0"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
  - title: "Use the retrieve tool in Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve"
    kind: "learn"
videos: []
related: []
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
      path: "Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant]"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#admin-management"
    api:
      kind: "graph"
      call: "POST /v1.0/oauth2PermissionGrants { clientId: <client SP object ID>, consentType: AllPrincipals, resourceId: <Work IQ SP object ID>, scope: WorkIQAgent.Ask }; revoke: DELETE /v1.0/oauth2PermissionGrants/{grant-id}"
      docs: "https://learn.microsoft.com/graph/permissions-grant-via-msgraph"
    note: "Revoke in the UI: API permissions > WorkIQAgent.Ask > Revoke admin consent; existing tokens stay valid until they expire. Graph DELETE revokes all grants in that grant object."
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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after the independent check: cloud scope now follows the roadmap record, recipe applicability claims narrowed, app consent row gains the documented Entra path and Graph grant call, cost rating set to low."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 42 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ac32fd44f8654955e326feda6eb44a1b"
---

## What's changing

The roadmap entry states that agents will be able to execute reusable Work IQ recipes that coordinate supported tools and actions. That is the full description published.

The target is November 2026 and the status is In development. No Microsoft Learn page describing recipes was found at the time of review, so no detail on format, authoring or limits can be confirmed.

Work IQ is otherwise documented as exposing Microsoft 365 work context to agents through MCP and A2A, using delegated authentication.

## Why it matters

Reusable recipes suggest standard multi-step behaviour shared by agents. Owners should expect questions about who can author them, which tools they may call and how actions are approved and audited.

## Risk assessment

**Data exposure**
- General Work IQ API requests run in the context of the signed-in user; Microsoft has not documented the identity model or exact data reach for recipes.

**Security & identity**
- Work IQ uses delegated Entra authentication and does not support application-only access.

**Autonomy & actions**
- Chained actions raise autonomy compared with single calls.

**Change & support**
- Shared recipes mean one change affects many agents.

## Cost and licensing

Not yet published. Learn notes that the public-preview Work IQ retrieve tool requires Copilot Credits billing and a spending policy that includes Work IQ API; whether recipes follow the same model is unknown.

## Scope

Agents using Work IQ. The roadmap lists Worldwide (Standard Multi-Tenant), Web, and General Availability and Preview release phases.

## Governance guidance

### Before rollout
- Inventory agents already using Work IQ.
- Agree an approval route for recipe authoring.

### At rollout
- Limit recipe availability to a pilot.
- Require human approval for write actions where supported.

### After rollout
- Confirm, before expanding a pilot, which recipe execution records Microsoft exposes and how administrators can review them.
- Retire unused recipes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ API enablement for the organisation</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals { appId: fdcc1f02-fc51-4226-8753-f668596af7f7 }</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin consent for an app to ask Work IQ</strong><br><small>App</small><br><small class="controls__note">Revoke in the UI: API permissions &gt; WorkIQAgent.Ask &gt; Revoke admin consent; existing tokens stay valid until they expire. Graph DELETE revokes all grants in that grant object.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › Grant admin consent for [your tenant] <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#admin-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/oauth2PermissionGrants { clientId: &lt;client SP object ID&gt;, consentType: AllPrincipals, resourceId: &lt;Work IQ SP object ID&gt;, scope: WorkIQAgent.Ask }; revoke: DELETE /v1.0/oauth2PermissionGrants/{grant-id}</code> <a href="https://learn.microsoft.com/graph/permissions-grant-via-msgraph" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Control specific to recipes</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

These are general Work IQ controls. Microsoft has not confirmed how they apply to recipes. The Work IQ MCP policy documentation says mutation operations aren't allowed by default for safety, and that administrators can enable supported mutation scenarios through tenant policy; do not assume either default for recipes.

Work IQ API usage has Copilot Credits spending controls (see [spending policies](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup) for background). Microsoft has not published how recipe usage is charged or which spending policies cover it. Nothing recipe-specific is documented yet.

## Open questions

- How recipes are authored, shared and versioned.
- Which tools and actions are supported.
- How usage is metered and audited.

<!-- rationale
risk: Medium. Recipes chain tools and actions, so agents can take multi-step actions; the available controls are not yet published.
cost: Low. Planning and review take administrator time; recipe licensing and metering are not yet published.
impact: Low. Affects developers and admins building or approving agents that use Work IQ.
-->

<!-- verifier-findings (2026-11-19, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls: Work IQ API enablement / command: POST /v1.0/servicePrincipals with appId fdcc1f02-fc51-4226-8753-f668596af7f7 provisions the Work IQ resource. | Found: Set the method to POST and the URL to https://graph.microsoft.com/v1.0/servicePrincipals. ... "appId": "fdcc1f02-fc51-4226-8753-f668596af7f7" | Fix: Set controls[0].api.call and its rendered call to 'POST /v1.0/servicePrincipals'. Add the note 'The request body sets appId to fdcc1f02-fc51-4226-8753-f668596af7f7.' Keep the existing documentation link. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization
- [supported, minor] controls[1].api; Governance controls: Admin consent / command: POST /v1.0/oauth2PermissionGrants can grant WorkIQAgent.Ask for all users using clientId, consentType AllPrincipals, resourceId and scope. | Found: The consentType is AllPrincipals, indicating that you're consenting on behalf of all users in the tenant. ... POST https://graph.microsoft.com/v1.0/oauth2PermissionGrants | Fix: Set controls[1].api.call and its rendered call to 'POST /v1.0/oauth2PermissionGrants'. Add to its note: 'The request body sets clientId to the client service principal object ID, consentType to AllPrincipals, resourceId to the Work IQ service principal object ID, and scope to WorkIQAgent.Ask. Revoke with DELETE /v1.0/oauth2PermissionGrants/{grant-id}.' The existing Graph link documents both operations; the cited Create oAuth2PermissionGrant reference confirms all four properties. | Source: https://learn.microsoft.com/graph/permissions-grant-via-msgraph
-->
