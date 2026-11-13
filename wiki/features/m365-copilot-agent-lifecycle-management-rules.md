---
title: "Microsoft 365 admin center: rules that automate agent lifecycle management"
slug: "m365-copilot-agent-lifecycle-management-rules"
roadmapId: 481518
desk: "copilot"
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
videos: []
related: ["agent-365-control-plane-for-agents","copilot-studio-safe-sharing-credential-oversharing","m365-copilot-federated-connectors-write-update-delete"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-05-12T23:00:33"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Microsoft 365 admin center > **Agents** > **Settings** > **Agent management rules**: define and run rules.
- Microsoft 365 admin center > **Agents** > **All agents** > agent details pane: Block, Unblock, Uninstall, Pin for users; filters for ownerless and unavailable agents.
- Microsoft 365 admin center > **Agents** > **Settings** > **Agent and plugin access**, **User access**, **Sharing**, **Security templates**.
- Power Platform admin center: sharing limits and data policies for Copilot Studio-built agents.

## Open questions

- The exact risk signals used by the "block risky agents" condition.
- Whether rules can be scoped by environment, publisher or tag rather than tenant-wide.
- Notification options for affected users and owners when a rule acts.

<!-- rationale
risk: Low. Reduces sprawl; main hazards are over-aggressive automation and inaccurate manager data.
cost: None. Included in Copilot controls.
impact: Medium. Users can lose agents; managers inherit ownership.
-->
