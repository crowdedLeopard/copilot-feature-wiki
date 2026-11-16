---
title: "Microsoft 365 admin center: rules that automate agent lifecycle management"
slug: "m365-copilot-agent-lifecycle-management-rules"
roadmapId: 481518
topic: "m365-copilot"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "Admins can define rules that automatically block risky agents, delete inactive agents and reassign ownerless agents to the owner's manager, from the Agent settings page in the Microsoft 365 admin center."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Available to Copilot-licensed tenants through Copilot controls in the Microsoft 365 admin center; Agent 365 extends the same surface to more agent types."
audiences: ["m365-admin","security","service-owner","compliance"]
tags: ["m365-admin-center","agents","lifecycle","ownerless-agents","inactive-agents","copilot-control-system","agent-registry","automation"]
sources:
  - title: "Microsoft 365 Roadmap 481518"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=481518"
    kind: "roadmap"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agents admin guide for Microsoft 365: manage agent lifecycle"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    kind: "learn"
  - title: "Copilot controls for management: agent lifecycle"
    url: "https://learn.microsoft.com/copilot/implement/copilot-controls-management"
    kind: "learn"
  - title: "Automated lifecycle rules for agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules"
    kind: "learn"
  - title: "Manual block, unblock, uninstall and pin for an agent (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    kind: "learn"
  - title: "Manual block, unblock, uninstall and pin for an agent (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Who may use agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents","copilot-studio-safe-sharing-credential-oversharing","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Automated lifecycle rules for agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent management rules > Add rule"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules"
    api: null
    note: "Rules include installing Microsoft agents, reassigning ownerless agents, blocking ownerless agents without usage, applying a template and rejecting stale publish requests."
  - governs: "Manual block, unblock, uninstall and pin for an agent"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block / Unblock"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
  - governs: "Who may use agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > Agents"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies"
    api: null
  - governs: "Approving or rejecting agent publish requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > Publish / Reject"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    api: null
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-05-12T23:00:33"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

The **Agent settings** page in the Microsoft 365 admin center (**Agents** > **Settings**) includes **Agent management rules**: conditions and actions that run automatically against the agents in your tenant. The roadmap item names three scenarios: block agents that are assessed as risky, delete agents that have been inactive for a period, and reassign agents whose owner has left to that owner's manager.

Rules complement the manual actions already available on every agent in the registry (Install, Block, Unblock, Uninstall, Pin for users) and the filters in **All agents** (Missing an owner, Availability: No users). Blocking an agent built with Agent Builder or Copilot Studio removes it from Copilot and from host apps such as Teams and Outlook; blocking a SharePoint or Foundry agent affects only its availability in Copilot Chat. Microsoft's Researcher and Analyst agents can be blocked tenant-wide but not scoped to users.

The feature launched in May 2026 for Copilot-licensed tenants and the same page carries the Agent 365 controls (security templates, agent and plugin access by publisher, sharing, user access, tags).

## Why it matters

Agent sprawl is a hygiene problem before it is a security problem. Agents built by people who have since left keep running with nobody accountable; agents nobody uses still appear in the store and in audit scope. Manual clean-up does not scale past a few dozen agents.

Rules turn the lifecycle policy you have written down into behaviour the platform applies on your behalf. Reassignment to the manager in particular closes the gap that appears every time a maker leaves. The decision for a service owner is not whether to use rules but how aggressive to make them and who reviews the results.

## Risk assessment

**Data exposure**
- Positive: blocking risky and ownerless agents reduces the number of agents with access to data and nobody watching.

**Security & identity**
- "Risky" is assessed by Microsoft signals; understand the criteria before letting a rule block automatically, or a business-critical agent may be blocked without warning.
- Reassignment gives a manager owner rights over an agent they did not build; the manager may not know what it does.

**Autonomy & actions**
- Automated deletion is irreversible for the agent definition. Prefer block-then-delete with a grace period.

**Change & support**
- Users lose access to blocked or deleted agents without notice unless you add a communication step.
- Manager data must be accurate in Entra for reassignment to land with the right person.

## Cost and licensing

- No additional licence for Copilot-licensed tenants. Agent 365 extends coverage to more agent types and platforms.
- Indirect: time to define rules and review their effects monthly.

## Scope

- Agents visible in the Microsoft 365 admin center registry: Agent Builder, Copilot Studio (published to Microsoft 365), SharePoint, Foundry and, with Agent 365, connected platforms.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: administrators with agent management permissions (see Agent management roles and permissions on Learn).

## Governance guidance

**Before rollout**
- Write the lifecycle policy: how long inactive before block, how long blocked before delete, who inherits ownerless agents.
- Check manager attributes in Entra for the maker population so reassignment works.
- Run the **Missing an owner** and **Availability: No users** filters to size the backlog before any rule runs.

**At rollout**
- Start with reassignment of ownerless agents (reversible) and blocking of inactive agents; hold deletion until the first review cycle completes.
- Notify reassigned managers with a short guide to reviewing an inherited agent.

**After rollout**
- Review rule outcomes monthly; tune inactivity thresholds.
- Feed blocked and deleted agent events into the change log and, where relevant, to the maker community.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Automated lifecycle rules for agents</strong><br><small>Tenant</small><br><small class="controls__note">Rules include installing Microsoft agents, reassigning ownerless agents, blocking ownerless agents without usage, applying a template and rejecting stale publish requests.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent management rules › Add rule <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Manual block, unblock, uninstall and pin for an agent</strong><br><small>Agent</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block / Unblock <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who may use agents</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › Agents <a href="https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approving or rejecting agent publish requests</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › Publish / Reject <a href="https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Rules are portal-only; nothing in Graph creates or lists them, so a change record has to be kept by hand or from the audit log. The block endpoint is the one lifecycle action with an API and it needs an Agent 365 licence. Roles are set out in [Agent 365 roles and permissions](https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms). Agents built in Copilot Studio are additionally bound by Power Platform sharing limits and data policies in their home environment.

## Open questions

- The exact risk signals used by the "block risky agents" condition.
- Whether rules can be scoped by environment, publisher or tag rather than tenant-wide.
- Notification options for affected users and owners when a rule acts.

<!-- rationale
risk: Low. Reduces sprawl; main hazards are over-aggressive automation and inaccurate manager data.
cost: None. Included in Copilot controls.
impact: Medium. Users can lose agents; managers inherit ownership.
-->
