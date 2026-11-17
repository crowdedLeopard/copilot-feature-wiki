---
title: "Microsoft 365 admin center: rules that automate agent lifecycle management"
slug: "m365-copilot-agent-lifecycle-management-rules"
roadmapId: 481518
topic: "governance"
products: ["Microsoft 365 Admin Center","Microsoft Copilot (Microsoft 365)"]
summary: "The roadmap item says admins can define rules to block risky, delete inactive and reassign ownerless agents. Agent settings lists rules to reassign Agent Builder agents to a manager and block ownerless unused agents."
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
  notes: "Available to Copilot-licensed tenants through Copilot controls in the Microsoft 365 admin center. The Microsoft Graph Package Management API requires a Microsoft Agent 365 licence."
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
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Agents admin guide for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
  - title: "Automated lifecycle rules for agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules"
    kind: "learn"
  - title: "Manual block or unblock for an agent (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    kind: "learn"
  - title: "Who may use agents (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies"
    kind: "learn"
  - title: "Microsoft Agent 365 - Service Descriptions"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Understand Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-agent-store"
    kind: "learn"
videos: []
related: ["work-iq-agent-policy-governance"]
controls:
  - governs: "Automated lifecycle rules for agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent management rules > Add rule"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules"
    api: null
    note: "Rules include installing Microsoft agents, reassigning ownerless Agent Builder agents to the manager, blocking ownerless agents without usage, applying a template (one-time) and rejecting stale publish requests."
  - governs: "Manual block or unblock for an agent"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block / Unblock"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Graph side is beta and block only; production use is unsupported. Needs delegated CopilotPackages.ReadWrite.All (no application permission) and an Agent 365 licence."
  - governs: "Who may use agents"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Data access > Agents"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies"
    api: null
    note: "The Agent settings page gives a different route to user access: Agents > Settings > User access."
  - governs: "Approving or rejecting agent publish requests"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > agent > Publish / Reject"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide"
    api: null
    note: "The cited admin guide says Publish / Reject; https://learn.microsoft.com/copilot/manage/copilot-agent-store instead labels these actions Publish to store / Reject submission."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-05-12T23:00:33"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Corrected after verification: manager reassignment limited to Agent Builder agents, deletion rule attributed to the roadmap only, and the risky-agent, deletion, notification, reversibility, audit-log and API claims narrowed to what Microsoft documents."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: registry risk signals now carry the E7 or A365 licence condition, the inventory-filter checklist step was removed, and the publish-request row notes the store page's labels."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 78
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bee0a147c960f5d1eccabba29e85b972"
---

## What's changing

The **Agent settings** page in the Microsoft 365 admin center (**Agents** > **Settings**) includes **Agent management rules**: conditions that identify agents in your tenant and actions applied to them in bulk. Administrators review the affected agents before running a rule. The roadmap item names three scenarios: block risky agents, delete inactive agents and reassign ownerless agents to a manager.

The Agent settings page currently lists five rule-based bulk actions: install Microsoft agents, reassign ownerless agents created with Agent Builder to the manager, block ownerless agents without usage, apply a template to agents, and reject agent publish requests older than a specified number of days. It lists no rule for deleting inactive agents. Microsoft's Agent 365 overview describes rules-based management that can block risky agents, but the settings page does not specify a risky-agent condition or its signals. Apply template is a one-time bulk operation, not a scheduled rule.

Rules complement the manual actions available for eligible agents in the registry, depending on platform and deployment state (Install, Block, Unblock, Uninstall, Pin for users) and the filters in **All agents** (Missing an owner, Availability: No users). Pinning requires an agent that is already deployed to some or all users. Blocking an agent built with Agent Builder or Copilot Studio removes it from Copilot and from host apps such as Teams and Outlook; blocking a SharePoint or Foundry agent affects only its availability in Copilot Chat. Microsoft's Researcher and Analyst agents can be blocked tenant-wide but not scoped to users.

The feature launched in May 2026 for Copilot-licensed tenants and the same page carries the Agent 365 controls (security templates, agent and plugin access by publisher, sharing, user access, tags).

## Why it matters

Agent sprawl is a hygiene problem before it is a security problem. Agents become ownerless when their original creator leaves the organisation, which leaves a gap in ownership governance. Review unused agents to reduce inventory and governance overhead. Manual clean-up does not scale past a few dozen agents.

Rules let you apply a written lifecycle policy in bulk after you have reviewed the affected agents. Reassignment to the manager closes the gap that appears when a maker leaves, but the rule supports only agents created with Microsoft Copilot Agent Builder. The decision for a service owner is not whether to use rules but how aggressive to make them and who reviews the results.

## Risk assessment

**Data exposure**
- Positive: blocking risky and ownerless agents reduces the number of agents with access to data and nobody watching.

**Security & identity**
- The roadmap item names blocking of risky agents, and Microsoft's Agent 365 overview describes rules-based management that can block risky agents. The Agent settings page instead lists 'Block ownerless agents without usage' and does not specify a risky-agent condition or its signals, so confirm what a rule can act on before relying on it. For tenants with an E7 or A365 licence, the agent registry shows risk signals from Microsoft security platforms such as Microsoft Purview, Microsoft Entra and Microsoft Defender; whether a rule uses them is not specified.
- Reassignment gives a manager owner rights over an agent they did not build, and applies only to Agent Builder agents; the manager may not know what it does.

**Autonomy & actions**
- Admin-center deletion is soft deletion with a 30-day recovery window; permanent deletion cannot be undone. The Agent settings page does not document a separate automatic-deletion rule. Prefer block-then-delete with a grace period.

**Change & support**
- Plan communications for affected users; the Agent settings page does not describe notifications for these lifecycle rules.
- Manager data must be accurate in Entra for reassignment to land with the right person.

## Cost and licensing

- No additional licence for Copilot-licensed tenants. The Package Management API behind the Graph block call requires a Microsoft Agent 365 licence.
- Indirect: time to define rules and review their effects monthly.

## Scope

- Registry coverage, not coverage of every rule: the agent inventory includes Microsoft Copilot Studio, SharePoint, Agent Builder, AI Foundry, Agents Toolkit, other Microsoft agent types such as Researcher, and non-Microsoft platforms. Manager reassignment supports only agents created with Microsoft Copilot Agent Builder.
- The roadmap record lists Worldwide (Standard Multi-Tenant) and gives no government cloud dates.
- Roles: administrators with agent management permissions (see Agent management roles and permissions on Learn).

## Governance guidance

### Before rollout
- Write the lifecycle policy: when an unused agent is blocked, when a blocked agent is deleted, and who inherits ownerless agents. Check which rules your tenant offers under **Agents** > **Settings** > **Agent management rules** before relying on automatic deletion.
- Check manager attributes in Entra for the maker population of Agent Builder agents so reassignment works.

### At rollout
- Start with reassignment of ownerless Agent Builder agents and blocking of ownerless agents without usage; hold any deletion until the first review cycle completes.
- Notify reassigned managers with a short guide to reviewing an inherited agent.

### After rollout
- Review rule outcomes monthly; adjust rule conditions.
- Record each rule's definition and every change to it in your own change log, and tell the maker community about blocked agents where relevant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Automated lifecycle rules for agents</strong><br><small>Tenant</small><br><small class="controls__note">Rules include installing Microsoft agents, reassigning ownerless Agent Builder agents to the manager, blocking ownerless agents without usage, applying a template (one-time) and rejecting stale publish requests.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent management rules › Add rule <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#agent-management-rules" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Manual block or unblock for an agent</strong><br><small>Agent</small><br><small class="controls__note">Graph side is beta and block only; production use is unsupported. Needs delegated CopilotPackages.ReadWrite.All (no application permission) and an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block / Unblock <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who may use agents</strong><br><small>Tenant</small><br><small class="controls__note">The Agent settings page gives a different route to user access: Agents &gt; Settings &gt; User access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Data access › Agents <a href="https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#set-agent-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approving or rejecting agent publish requests</strong><br><small>Tenant</small><br><small class="controls__note">The cited admin guide says Publish / Reject; https://learn.microsoft.com/copilot/manage/copilot-agent-store instead labels these actions Publish to store / Reject submission.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › agent › Publish / Reject <a href="https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

As of November 2026, Microsoft documents no API for configuring these admin-center rules, so keep a record of rule definitions and changes by hand. The Package Management API supports block, unblock and ownership reassignment for individual packages; its mutation endpoints are preview. It requires a Microsoft Agent 365 licence, and its calls act on one package, not on a rule.

The block call is beta and Microsoft states that use of beta APIs in production applications is not supported. It requires the delegated permission CopilotPackages.ReadWrite.All; application permissions are not available. Roles are set out in [Agent 365 roles and permissions](https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms).

Agents built in Copilot Studio can also be governed by sharing limits, which you configure as a Managed Environments control in the Power Platform admin center. Sharing limits apply only to agents that require authentication, are enforced when users try to share, and do not affect users who already had access before the rules were applied. See [Control how agents are shared](https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits).

## Open questions

- Which signals, if any, a rule can use to identify risky agents: the Agent settings page does not specify a risky-agent condition.
- Whether rules can be scoped by environment, publisher or tag rather than tenant-wide.
- Notification options for affected users and owners when a rule acts.

<!-- rationale
risk: Low. Reduces sprawl; main hazards are over-aggressive automation and inaccurate manager data.
cost: None. Included in Copilot controls.
impact: Medium. Users can lose agents; managers inherit ownership.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: Agent details provides a Pin for users action. | Found: Pin for users | The agent is pinned in the UI (based on channel) where the agent was deployed, so that the agent can be found more easily. | Fix: Add https://learn.microsoft.com/microsoft-agent-365/admin/agent-details to sources for the exact Pin for users action label. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-details#view-agent-details
- [supported, minor] What's changing / admin-path: All agents has a Missing an owner inventory filter. | Found: Below Agent inventory, select Missing an owner. Consider removing agents that no longer have an owner. | Fix: Add after the inventory-filter sentence: 'The registry page instead describes an Agents without owners card that filters by Publisher type and Owner.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview#agents-without-owners. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide
- [supported, minor] What's changing / admin-path: All agents has an Availability > No users inventory filter. | Found: Next to Filters, select Availability > No users. Note which agents aren't available to members of your organization. | Fix: Add after the inventory-filter sentence: 'The registry page lists Status, Publisher Type, Channel, Platform and Data source filters rather than Availability.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview#agent-registry-filters. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide
-->
