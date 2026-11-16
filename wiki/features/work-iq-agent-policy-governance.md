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
