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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 36
  unconfirmed: 4
  contradicted: 5
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] Scope / record: Cloud scope is not stated in the roadmap record. | Found: "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Replace the cloud statement with 'The roadmap lists Worldwide (Standard Multi-Tenant), Web, and General Availability and Preview release phases.' Do not infer exclusion of other clouds.
- [supported, minor] Cost and licensing / cost: Work IQ retrieve requires Copilot Credits billing. | Found: The `retrieve` tool is available in public preview. ... Set up usage-based billing for Copilot Credits | Fix: Say 'The public-preview retrieve tool requires Copilot Credits billing' and cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve. Keep the existing caveat that recipe billing is unknown. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve
- [unsupported, blocker] Risk assessment: Data exposure / applicability: Recipes use supported tools with the signed-in user's permissions. | Found: Searched: "Work IQ" "recipes" "policy" "API". Opened api-overview, permissions and policy-governance-mcp; these establish user-scoped API access but do not describe recipe execution or its identity model. | Fix: Replace with 'General Work IQ API requests run in the context of the signed-in user; Microsoft has not documented the identity model or exact data reach for recipes.' Cite the API overview only for the general statement.
- [contradicted, blocker] controls[1].ui; Governance controls table: grant consent / admin-path: Granting consent follows Entra ID > App registrations > app > API permissions > WorkIQAgent.Ask > Grant admin consent. | Found: Grant consent: In the Microsoft Entra admin center, go to Entra ID > App registrations > select the app > API permissions. Select Grant admin consent for [your tenant]. | Fix: Separate the grant and revoke instructions. For grant use 'Entra ID > App registrations > app > API permissions > Grant admin consent for [your tenant]'; do not insert WorkIQAgent.Ask as an intermediate grant step. Point docs to #admin-management. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#admin-management
- [contradicted, blocker] controls[1].api; Governance controls table / absence: An API equivalent for administering app consent is not documented. | Found: You can use Microsoft Graph to grant or revoke API permissions for an app. ... The consentType is AllPrincipals, indicating that you're consenting on behalf of all users in the tenant. | Fix: Document POST /v1.0/oauth2PermissionGrants with clientId set to the client service-principal object ID, consentType AllPrincipals, resourceId set to the tenant's Work IQ service-principal object ID, and scope WorkIQAgent.Ask. For revocation document DELETE /v1.0/oauth2PermissionGrants/{grant-id}; warn that deleting a grant revokes all scopes in that grant. Cite https://learn.microsoft.com/graph/permissions-grant-via-msgraph and https://learn.microsoft.com/graph/api/oauth2permissiongrant-post?view=graph-rest-1.0. | Source: https://learn.microsoft.com/graph/permissions-grant-via-msgraph
- [unsupported, blocker] Governance controls: paragraph after table / applicability: Work IQ enablement, per-app consent and MCP policy are confirmed governance levers for recipes. | Found: Searched: "Work IQ" "recipes" "policy" "API". Opened api-overview, enable-work-iq, permissions and policy-governance-mcp; the latter focuses on MCP tool requests and none places recipes on that control surface. | Fix: Replace the opening governance paragraph with 'These are general Work IQ controls. Microsoft has not confirmed how they apply to recipes.' Put that qualification in the control notes and remove the assertion that recipes run inside this documented permission model.
- [supported, minor] Governance controls: paragraph after table / default: Work IQ MCP policy blocks mutation operations by default unless an administrator enables supported scenarios. | Found: By default, mutation operations aren't allowed for safety. ... Administrators can enable supported mutation scenarios through tenant policy in the Microsoft 365 admin center | Fix: Keep this scoped to the cited MCP policy documentation and note that https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq#work-iq-key-features separately says 'Write operations are on by default' for the Microsoft Copilot harness experience. Do not promise either default for recipes. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [unsupported, blocker] Governance controls: Credit consumption follows the tenant's spending policies / applicability: Recipe credit consumption follows the tenant's Copilot Credits spending policies. | Found: Searched: "Work IQ" "recipes" "licensing" "default"; "Work IQ" "retrieve" "spending policy". Opened Copilot Credits billing setup, api-overview and retrieve; none establishes recipe billing or spending-policy coverage. | Fix: Replace with 'Work IQ API usage has Copilot Credits spending controls; Microsoft has not published how recipe usage is charged or which spending policies cover it.' Retain the billing setup link only as general background.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The variable cost rating is justified despite recipe metering being unknown. | Found: cost: "variable"; 'whether recipes follow the same model is unknown.' Standard: 'If licensing is not yet published, rate the cost that is known (low when the only cost the sources show is admin time)'. | Fix: Set cost to low and change its rationale to 'Low. Planning and review take administrator time; recipe licensing and metering are not yet published.' Do not use another Work IQ capability's meter to assign a factual recipe cost field.
- [unsupported, blocker] Governance guidance: After rollout / applicability: Administrators can review audit logs for recipe runs. | Found: Searched: "Work IQ" "recipes" "audit logs". Read Work IQ overview's general tool-invocation logging statement and opened api-overview, policy-governance-mcp and Foundry work-iq; no accessible recipe-run audit log was documented. | Fix: Replace 'Review audit logs for recipe runs' with 'Before expanding a pilot, confirm which recipe execution records Microsoft exposes and how administrators can review them.' Keep recipe auditing as an open question.
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The controls table covers every control the governance checklist asks administrators to use. | Found: Checklist: 'Agree an approval route for recipe authoring'; 'Limit recipe availability to a pilot'; 'Require human approval for write actions where supported'; 'Review audit logs for recipe runs'. Table: 'Control specific to recipes'. | Fix: Replace the catch-all recipe-control row with explicit rows for recipe authoring approval, pilot availability, human approval for writes and recipe-run monitoring, leaving both surfaces null where undocumented; alternatively rewrite these checklist items as decisions to investigate, not available configuration controls.
-->
