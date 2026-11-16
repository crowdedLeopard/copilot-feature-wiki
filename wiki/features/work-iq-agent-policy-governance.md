---
title: "Work IQ: policy-based governance of agents and their capabilities"
slug: "work-iq-agent-policy-governance"
roadmapId: 570652
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Administrators will get policy-based controls to govern agents and their capabilities at scale through Work IQ. Only the roadmap summary is published so far."
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
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","agent-governance","policy","agents","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 570652"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570652"
    kind: "roadmap"
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
videos: []
related: ["agent-365-control-plane-for-agents","m365-copilot-agent-lifecycle-management-rules","agent-identity"]
controls:
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
    note: "Takes up to 24 hours to apply. Mutation operations are disallowed by default."
  - governs: "Work IQ MCP server access"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control"
    api: null
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
      path: "Entra ID > App registrations > app > API permissions > WorkIQAgent.Ask > Grant admin consent / Revoke admin consent"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance"
    api: null
confidence: "low"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ agent policy governance, in development; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 30
  unconfirmed: 0
  contradicted: 9
  attempts: 1
---

## What's changing

The roadmap states that administrators will get policy-based controls for governing agents and their capabilities at scale. That is the full description.

The item is listed under Work IQ and Microsoft Copilot (Microsoft 365), Worldwide, on the web. A preview is shown for November 2026 and general availability is targeted for January 2027.

Which agents, capabilities and policy types are covered has not been published, nor how it relates to the Agent 365 control plane or agent lifecycle rules in the Microsoft 365 admin center.

## Why it matters

Policy at scale is what lets an organisation govern many agents without reviewing each one. Service owners should expect to define baseline policies, such as which tools or data sources agents may use.

Until documentation exists, plan the policy decisions rather than the configuration.

## Risk assessment

**Data exposure**
- Not yet published. Policies may restrict data sources available to agents.

**Security & identity**
- Admin role requirements and policy scope are not yet published.

**Autonomy & actions**
- Policies may limit which capabilities an agent can use.

**Change & support**
- Existing agents might be affected when policies apply; behaviour for current agents is unknown.

## Cost and licensing

Not yet published. No licence, add-on or meter is named on the roadmap item, so the rating assumes admin effort only until Microsoft documents the feature.

## Scope

Administrators of agents using Work IQ, Worldwide cloud, web. Other clouds are not listed.

## Governance guidance

### Before rollout
- [ ] Inventory current agents and the capabilities they use.
- [ ] Draft baseline rules for allowed capabilities.
- [ ] Compare with existing controls in Agent 365 and the Microsoft 365 admin center.

### At rollout
- [ ] Pilot policies on a small set of agents.
- [ ] Tell agent owners which policies apply.

### After rollout
- [ ] Review policy exceptions.
- [ ] Check for agents blocked unexpectedly.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Takes up to 24 hours to apply. Mutation operations are disallowed by default.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP server access</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ API enablement for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Also available as az ad sp create --id &lt;appId&gt;.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals { appId: fdcc1f02-fc51-4226-8753-f668596af7f7 }</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/enable-work-iq#enable-work-iq-api-in-your-organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin consent for an app to ask Work IQ</strong><br><small>App</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › App registrations › app › API permissions › WorkIQAgent.Ask › Grant admin consent / Revoke admin consent <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq#data-governance-and-compliance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

In the initial release the policy layer is a single tenant-level switch; per-user, per-app and per-agent templates are named as possible later additions, so the finer governance today is consent per application and the user's own Microsoft 365 permissions, which policy can never exceed. Policy-denied requests surface to the app as governance decisions rather than errors to retry. Spending on Work IQ calls follows the Copilot Credits [spending policies](https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-copilot-credits-setup).

## Open questions

- Where will policies be managed: Microsoft 365 admin center, Agent 365 or elsewhere?
- Which capabilities can be governed?
- How do policies interact with maker-level settings?
- Will existing agents be evaluated retroactively?

<!-- rationale
risk: Low. This adds governance controls; the risk is mainly that its scope and defaults are unknown until documentation appears.
cost: Low, provisional. Not yet published; no licence or meter is named, so only admin effort is assumed.
impact: Medium. It would affect admins and agent owners whose agents are subject to the new policies.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] summary; What's changing; Why it matters; rationale: risk / absence: Only the roadmap summary is published, so documentation and configuration guidance do not yet exist. | Found: In the initial release, Work IQ MCP provides tenant-level policy control. In the Microsoft 365 admin center, tenant administrators can turn Work IQ MCP policy on or off for the tenant. | Fix: Replace the roadmap-only summary and 'Until documentation exists' wording with: 'The roadmap remains in development. Microsoft Learn separately documents Work IQ MCP tenant policy controls; the controls below describe that documented surface.' Do not imply that all configuration is unavailable. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [contradicted, blocker] What's changing; Open questions: capabilities / absence: Which capabilities and policy types can be governed has not been published. | Found: For example, a tenant policy can allow read access to common productivity data while blocking high-risk paths, write operations, or large collection traversal. | Fix: State that Learn documents Work IQ MCP request-time controls over resource paths, operations and data retrieval, using a Rego-based policy layer. Limit the open question to any additional scope of the roadmap item beyond the documented MCP controls. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: Tenant Work IQ MCP policy is managed in Microsoft 365 admin center at Agents > Tools > Work IQ MCP > Policy. | Found: In the left navigation, select Agents > Tools. ... In the tools registry, select Work IQ MCP. ... On the Work IQ MCP details pane, select the Policy tab when it's available. | Fix: Keep the path, but add that the Policy tab is available only when the tenant has Work IQ MCP access and the administrator has permission to manage tenant-level Work IQ or Copilot settings. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center
- [supported, minor] controls[1].ui; Governance controls: second row / admin-path: Tenant-wide Work IQ MCP server access can be blocked at Microsoft 365 admin center > Agents > Tools > Work IQ MCP > Block. | Found: Select Agents > Tools. ... Select Work IQ MCP. ... To block access to the server, select Block. | Fix: Keep the path. Add a row note identifying this source as preview documentation and stating its AI Administrator prerequisite for Microsoft 365 admin center settings. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access#work-iq-mcp-server-access-control
- [contradicted, blocker] controls[3].ui; Governance controls: fourth row / admin-path: Both granting and revoking consent follow Entra ID > App registrations > app > API permissions > WorkIQAgent.Ask > Grant admin consent / Revoke admin consent. | Found: Grant consent: ... Entra ID > App registrations > select the app > API permissions. Select Grant admin consent for [your tenant]. ... Revoke consent: On the same API permissions page, select the WorkIQAgent.Ask permission and select Revoke admin consent. | Fix: Give separate branches after API permissions: grant uses 'Grant admin consent for [your tenant]' directly; revoke uses 'WorkIQAgent.Ask > Revoke admin consent'. The pre-check's missing combined phrase is not proof that the actions are absent: both actions are documented, but their step sequences differ. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/tools/work-iq
- [contradicted, blocker] controls[3].api; Governance controls: fourth row / absence: Automation for admin consent to a Work IQ application is not documented. | Found: Add the WorkIQAgent.Ask delegated permission and grant consent. ... az ad app permission admin-consent --id $APP_ID | Fix: Replace the null API side with kind azure-cli and 'az ad app permission admin-consent --id <appId>', citing this quickstart. State that the app must already request WorkIQAgent.Ask and that admin-consent grants its requested permissions, not just a scope supplied to this command. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/a2a/quickstart#register-the-application-in-microsoft-entra
- [supported, minor] front matter: cost; Cost and licensing; rationale: cost / absence: The low cost rating provisionally covers only the governance control's administrative effort. | Found: Searched: Work IQ Agent Policy Governance 570652 licensing cost policy default. Read policy-governance-mcp, enable-work-iq, API overview and cost-considerations; no separate policy-control charge was stated, while Work IQ API consumption is explicitly billed in Copilot Credits. | Fix: Clarify that low is the provisional incremental administration cost of this control, not the cost of using Work IQ. Add to Cost and licensing: 'Work IQ API calls are separately metered in Copilot Credits; no separate price for this governance control is published.' Cite the API licensing page.
- [contradicted, blocker] Risk assessment: Data exposure / absence: Data-access governance has not yet been published. | Found: Policy can't grant access beyond what the signed-in user is already allowed to access. | Fix: Replace the blanket 'Not yet published' with the documented MCP boundary: policy can restrict resource paths and operations but cannot expand the signed-in user's Microsoft 365 permissions. Qualify any remaining unknown as additional roadmap scope. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [contradicted, blocker] Risk assessment: Security & identity / absence: Admin role requirements for the described Work IQ controls are not yet published. | Found: You need to have the appropriate roles to manage AI experience access: ... AI Administrator role to work with settings in the Microsoft 365 admin center. | Fix: State the documented role per control: the cited access-control guide requires AI Administrator, and enable-work-iq requires Global Administrator for one-time setup. For the Policy tab specifically, say its guide requires permission to manage tenant-level Work IQ or Copilot settings without naming an exact built-in role. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access
- [contradicted, blocker] Risk assessment: Security & identity; rationale: risk / absence: Policy scope has not been published. | Found: Tenant-level control applies across the tenant. Per-user, per-app, per-agent, or scenario-specific policy templates aren't part of the initial policy control surface. | Fix: State that documented initial Work IQ MCP policy scope is tenant-wide, and remove the contrary unknown-scope wording from Security & identity and the risk rationale. Keep any unknown broader roadmap scope explicitly separate. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [contradicted, blocker] Risk assessment: Change & support / absence: The behaviour of current agents when tenant policies apply is unknown. | Found: When you turn on the policy, it applies across the tenant and helps control MCP tool access at request time. | Fix: Say that enabling documented MCP tenant policy governs tool requests tenant-wide at request time, so existing callers can encounter denials. Reserve the unknown for retroactive lifecycle evaluation or remediation of already-created agents, which the guide does not describe. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [supported, minor] Governance controls: final sentence / applicability: Work IQ API consumption is governed through Copilot Credits spending policies. | Found: Include Cowork and exclude Work IQ API from a policy when its users shouldn't consume credits through Work IQ API. ... Spending policies control access and spending limits; they don't reserve or allocate credits for a workload, user, or group. | Fix: Add this Work IQ-specific cost-considerations source alongside the existing generic spending-policy setup link, and explain the Copilot Credits meter in Cost and licensing. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations#work-iq-api
- [contradicted, minor] front matter: action / consistency: Prepare is the appropriate action rating for this new optional governance control. | Found: action: "prepare"; risk: "low"; "In the initial release the policy layer is a single tenant-level switch". | Fix: Set action to review: the standard assigns review to a new control when no source says existing behaviour changes without configuration. The verified documentation describes turning tenant policy on, and no supplied notice establishes an automatic change or deadline.
-->
