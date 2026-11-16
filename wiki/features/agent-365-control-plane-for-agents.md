---
title: "Microsoft Agent 365: the control plane for agents"
slug: "agent-365-control-plane-for-agents"
roadmapId: 558448
topic: "copilot-studio"
products: ["Microsoft Agent 365"]
summary: "Agent 365 is a per-user licensed service that gives IT and security one registry, policy set and observability layer for every agent in the tenant, including agents built outside Microsoft."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "high"
impact: "high"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Stand-alone per-user subscription for eligible Microsoft 365 plans, also included in Microsoft 365 E7. At least one qualifying licence enables the Agent 365 experiences; Microsoft recommends Microsoft 365 E5 as the baseline."
audiences: ["m365-admin","security","service-owner","finops","compliance"]
tags: ["agent-365","agent-registry","control-plane","agent-identity","entra-agent-id","governance","licensing","e7"]
sources:
  - title: "Microsoft 365 Roadmap 558448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558448"
    kind: "roadmap"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Microsoft Agent 365 service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Agent Registry convergence with Microsoft Agent 365"
    url: "https://learn.microsoft.com/entra/agent-id/agent-registry-convergence"
    kind: "learn"
  - title: "Connect existing agents to Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/connect-existing-agents"
    kind: "learn"
  - title: "Which agents are blocked, unblocked, installed or pinned for users (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    kind: "learn"
  - title: "Which agents are blocked, unblocked, installed or pinned for users (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Whether agent identities can sign in to resources (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    kind: "learn"
  - title: "Agent identity inventory and sign-in monitoring (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/agent-lists"
    kind: "learn"
  - title: "Agent identity inventory and sign-in monitoring (Microsoft Graph)"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","copilot-studio-cost-management-m365-admin-center","dataverse-agent-users-entra-agent-identity","agent-identity"]
controls:
  - governs: "Which agents are blocked, unblocked, installed or pinned for users"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block / Unblock"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The Graph call needs CopilotPackages.ReadWrite.All and an Agent 365 licence. Blocking an agent turns off its instances."
  - governs: "Agent policy: management rules, agent and plugin access, security templates, sharing, user access and tags"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
  - governs: "Whether agent identities can sign in to resources"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Users, agents or workload identities > Agents > All agent identities > Block"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    api:
      kind: "graph"
      call: "POST /identity/conditionalAccess/policies with agent identities as the policy's users condition"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    note: "Needs Microsoft Entra ID P1 and the Conditional Access Administrator role."
  - governs: "Agent identity inventory and sign-in monitoring"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities"
      docs: "https://learn.microsoft.com/entra/agent-id/agent-lists"
    api:
      kind: "graph"
      call: "GET /beta/auditLogs/signIns?$filter=agent/agentType eq 'AgentIdentity'"
      docs: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Microsoft Agent 365 is generally available for commercial customers. Microsoft describes it as the control plane for AI agents, built on four pillars: management, governance, security and business value. In practice it is a set of experiences layered on the Microsoft 365 admin center, Microsoft Entra, Purview and Defender.

The **agent registry** in the Microsoft 365 admin center (**Agents** > **All agents**) lists every agent in the tenant with owner, usage and risk indicators. It covers agents built with Copilot Studio, Agent Builder, SharePoint, Microsoft Foundry and the Agents Toolkit, Microsoft's own agents such as Researcher, partner agents installable from the admin center, and agents synchronised from external platforms (Microsoft names Amazon Bedrock and Google Vertex AI). **Agent Map** shows them grouped by platform. Microsoft is converging earlier registry views in Entra and the admin center into Agent 365; Entra continues to provide identity through **Agent ID**.

Governance features include approval of agents before publication, ownerless-agent detection and reassignment, policy templates applied to new agents, control over which tools agents can connect to, and Purview audit of agent activity. The **Agent settings** page adds management rules, agent and plugin access by publisher type, security templates, sharing controls, user access, feedback sharing and tags.

Developers can bring custom agents in through the Agent 365 SDK (identity, notifications, security, governed Microsoft 365 data access), Microsoft OpenTelemetry for observability, and the Agent 365 CLI for MCP tooling.

## Why it matters

Most tenants already have more agents than they know about: Copilot Studio agents in default environments, SharePoint agents created by site owners, Agent Builder agents shared person to person. Agent 365 is the first product that puts all of those, plus third-party agents, in one inventory with an owner column. For a service owner that turns "how many agents do we have and who is accountable for them" from a research project into a report.

The cost is real. Agent 365 is a per-user licence (or part of Microsoft 365 E7), so the decision is whether the governance gap justifies another suite-level purchase on top of Copilot. Many of the individual controls (block, assign, lifecycle rules, Purview audit) exist for Copilot-licensed tenants without Agent 365; what Agent 365 adds is breadth (non-Microsoft agents, agent instances, policy templates, Agent Map, SDK integration) and the identity foundation for autonomous agents.

## Risk assessment

**Data exposure**
- Agent 365 itself reduces exposure by making agent inventory, ownership and tool connections visible. The registry shows which data sources and tools each agent uses.
- Synchronising external agents into the registry brings their metadata into Microsoft 365; the agents' own data stays where it is.

**Security & identity**
- Agents receive Entra Agent IDs, which means Conditional Access, sign-in logs and Defender signals can apply to agents as they do to users. This is the main security gain.
- New admin roles and permissions for agent management need to be included in privileged access reviews.

**Autonomy & actions**
- Agent 365 governs agents that act autonomously (blocking an agent also turns off its instances). It does not itself make agents more autonomous.

**Change & support**
- Convergence of registry experiences means admin procedures written for the Entra agent view will change; plan for retraining.
- Partner agents installable from the admin center create a new "approve or block" queue for IT.

## Cost and licensing

- **Per-user licence.** Available as a stand-alone subscription for eligible Microsoft 365 plans and included in **Microsoft 365 E7**. Pricing is on the Microsoft Agent 365 product page; see the licensing FAQ linked in the sources.
- Microsoft states Agent 365 works best with Microsoft 365 E5 as a prerequisite and that at least one user must hold a qualifying licence to enable the experiences.
- Agents governed by Agent 365 continue to incur their own costs (Copilot Credits for Copilot Studio and Cowork, partner subscriptions). Agent 365 does not include those credits.
- Indirect: time to onboard external agents through the SDK and registry sync, and to run the approval queue.

## Scope

- Commercial tenants worldwide. No government cloud availability stated at GA.
- Roles: administrators with Microsoft 365, Copilot or Agent 365 management permissions; see Agent management roles and permissions on Learn.
- Covers Microsoft-built, partner and custom agents; external platforms through registry sync.
- Users who create, publish or use agents need appropriate licences themselves (Copilot, Copilot Studio or Agent 365).

## Governance guidance

**Before rollout**
- Run the free inventory first: Microsoft 365 admin center > **Agents** > **All agents** with the Missing an owner and Availability filters, and Copilot Studio tenant analytics in the Power Platform admin center. Quantify the gap before buying.
- Define the agent lifecycle policy you want to enforce (approval, ownership, retention of inactive agents) so Agent 365 features map to decisions, not the other way round.
- Decide whether E7 or stand-alone Agent 365 is the better commercial route with your licensing team.

**At rollout**
- Assign the qualifying licence to the governance team first; the experiences enable at tenant level.
- Apply a policy template to new agents with your default sharing, access and tool restrictions.
- Set up ownerless-agent reassignment and the approval flow for user-requested agents.
- Register the external agents you already run (Bedrock, Vertex, in-house) through registry sync or the SDK.

**After rollout**
- Review the Agent overview dashboard monthly for risk and governance gaps.
- Feed agent audit events into your SIEM through Purview.
- Revisit the licence footprint annually against the number of agents actually governed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which agents are blocked, unblocked, installed or pinned for users</strong><br><small>Agent</small><br><small class="controls__note">The Graph call needs CopilotPackages.ReadWrite.All and an Agent 365 licence. Blocking an agent turns off its instances.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block / Unblock <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Agent policy: management rules, agent and plugin access, security templates, sharing, user access and tags</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether agent identities can sign in to resources</strong><br><small>Tenant</small><br><small class="controls__note">Needs Microsoft Entra ID P1 and the Conditional Access Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Users, agents or workload identities › Agents › All agent identities › Block <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /identity/conditionalAccess/policies with agent identities as the policy's users condition</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Agent identity inventory and sign-in monitoring</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities <a href="https://learn.microsoft.com/entra/agent-id/agent-lists" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/auditLogs/signIns?$filter=agent/agentType eq 'AgentIdentity'</code> <a href="https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Microsoft 365 admin center surfaces are the control plane; the Entra surfaces govern the identity underneath. Only the block action has a documented Graph equivalent, so lifecycle rules and access settings are portal-only today. Roles are listed in [Agent 365 roles and permissions](https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms). Purview audit and DSPM for AI record agent activity but add no switch of their own. The separate Agent registry blade in Entra is converging with Agent identities; see [the convergence note](https://learn.microsoft.com/entra/agent-id/agent-registry-convergence) before writing runbooks against it.

## Open questions

- Government cloud timelines for Agent 365.
- Exact feature split between Copilot-licensed tenants, stand-alone Agent 365 and E7 (the service description is the authority and is being updated).
- How registry sync handles agents that are deleted at the source platform.

<!-- rationale
risk: Medium. A governance product that lowers agent risk, but it introduces new privileged roles, a partner-agent install path and identity changes that must be managed.
cost: High. Per-user suite-level licence (or E7) on top of Copilot and agent consumption.
impact: High. Changes how every admin team sees and governs agents; end users notice approval flows and pinned agents.
-->
