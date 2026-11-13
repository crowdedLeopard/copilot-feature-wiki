---
title: "Microsoft Agent 365: the control plane for agents"
slug: "agent-365-control-plane-for-agents"
roadmapId: 558448
desk: "agents"
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
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","copilot-studio-cost-management-m365-admin-center","dataverse-agent-users-entra-agent-identity","agent-identity"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Microsoft 365 admin center > **Agents** > **Overview**, **All agents**, **Settings** (management rules, agent and plugin access, security templates, sharing, user access, feedback sharing, tags).
- Microsoft 365 admin center > **Agents** > agent details pane: Install, Block, Uninstall, Pin for users; blocking an agent turns off its instances.
- Microsoft Entra admin center > **Agent ID**: identity for agents; Conditional Access and sign-in logs.
- Microsoft Purview: audit and DSPM for AI coverage of agent activity.

## Open questions

- Government cloud timelines for Agent 365.
- Exact feature split between Copilot-licensed tenants, stand-alone Agent 365 and E7 (the service description is the authority and is being updated).
- How registry sync handles agents that are deleted at the source platform.

<!-- rationale
risk: Medium. A governance product that lowers agent risk, but it introduces new privileged roles, a partner-agent install path and identity changes that must be managed.
cost: High. Per-user suite-level licence (or E7) on top of Copilot and agent consumption.
impact: High. Changes how every admin team sees and governs agents; end users notice approval flows and pinned agents.
-->
