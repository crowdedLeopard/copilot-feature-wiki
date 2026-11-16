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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 106
  confirmed: 84
  unconfirmed: 3
  contradicted: 19
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: licensing.notes; Cost and licensing; Governance guidance: At rollout / licensing: Assigning the first qualifying license enables tenant-level Agent 365 experiences. | Found: At least one user must be licensed with a qualifying Microsoft Agent 365 license to enable Agent 365. | Fix: Keep the enablement fact, but distinguish activation from entitlement: cite https://www.microsoft.com/licensing/faqs/122 and explain that users benefiting from premium capabilities require the applicable per-user coverage; licensing only the governance team is not blanket tenant entitlement. | Source: https://learn.microsoft.com/microsoft-agent-365/overview
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Microsoft describes E5 as the recommended baseline or the prerequisite with which Agent 365 works best. | Found: Microsoft Agent 365 works best when using Microsoft E5 as a pre-requisite. | Fix: Report the stronger prerequisites in https://www.microsoft.com/licensing/faqs/122 alongside this overview wording: enterprise customers need Microsoft 365 E5 or the specified E3/Office 365 E3 plus EMS E3 and Defender/Purview suites combination. State that signed contracts remain valid until renewal. | Source: https://learn.microsoft.com/microsoft-agent-365/overview
- [supported, minor] controls[0].api; Governance controls table / command: POST /beta/copilot/admin/catalog/packages/{id}/block blocks a Copilot package. | Found: Block a Copilot package to prevent its usage. ... POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block | Fix: Mark the call as beta/preview and note that Microsoft does not support beta APIs in production applications. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block
- [contradicted, blocker] controls[0].governs; Governance controls table and lead / applicability: The block/unblock UI and block API cover the row's installation and pinning controls as well. | Found: Install and uninstall ... Install an agent for users ... Block and unblock ... Restrict access to an agent ... For information about ... Manage pinned agents, see Agent registry | Fix: Rename this row to 'Whether an agent is blocked for the organization'. Installation and pinning are separate actions; do not present the block API as their automation equivalent. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, blocker] controls[0].note; Governance controls table; Risk assessment: Autonomy & actions / behaviour: Blocking an agent turns off its instances. | Found: However, blocking an agent that you created by using SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. | Fix: Remove the blanket shutdown guarantee. Explain the platform-dependent effect of catalog blocking. For stopping an individual instance, cite https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances and give Agents > All Agents > agent > Details > Instances > instance > Block. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: The Conditional Access blocking path includes Users, agents or workload identities > Agents > All agent identities > Block. | Found: Under Assignments, select Users, agents or workload identities. ... Under Include, select All agent identities ... Under Target resources ... All resources ... Under Access controls > Grant. ... Select Block. | Fix: Use 'Entra ID > Conditional Access > Policies > New policy > Assignments > Users, agents or workload identities > Include > All agent identities'; then explicitly set Target resources > Resources (formerly cloud apps) > Include > All resources and Access controls > Grant > Block. Remove the invented Agents step; describe Report-only evaluation and subsequent enforcement separately. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities
- [contradicted, blocker] controls[2].api; Governance controls table / command: POST /identity/conditionalAccess/policies with agent identities as the users condition implements the all-agent-identities blocking policy. | Found: POST https://graph.microsoft.com/beta/identity/conditionalAccess/policies ... "clientApplications": { "includeAgentIdServicePrincipals": [ "All" ] | Fix: Use POST /beta/identity/conditionalAccess/policies with conditions.clientApplications.includeAgentIdServicePrincipals=['All'], conditions.applications.includeApplications=['All'] and grantControls.builtInControls=['block']. The users condition is for the separate agent-user-account policy. Explain that enabledForReportingButNotEnforced only evaluates and does not block. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities
- [supported, minor] controls[2].note; Governance controls table / licensing: Applying these Conditional Access policies requires Microsoft Entra ID P1. | Found: Applying Conditional Access policies in your tenant requires the Microsoft Entra ID P1 license. | Fix: Keep P1, but also report https://learn.microsoft.com/entra/fundamentals/licensing#microsoft-entra-agent-id, which states that extending Entra security features to agents requires Agent 365. Distinguish the base Conditional Access prerequisite from Agent 365 entitlement. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities
- [contradicted, blocker] controls[3].api; Governance controls table / command: GET /beta/auditLogs/signIns?$filter=agent/agentType eq 'AgentIdentity' retrieves agent identity sign-in events. | Found: Only interactive sign-ins are returned through GET signins API requests unless you set an explicit filter on the signInEventType property | Fix: Use the full documented request from the cited manage-agent-identities-admin page: GET /beta/auditLogs/signIns?$filter=signInEventTypes/any(t: t eq 'servicePrincipal') and agent/agentType eq 'AgentIdentity'. Mark it beta. | Source: https://learn.microsoft.com/graph/api/signin-list?view=graph-rest-beta
- [supported, minor] What's changing / behaviour: Agent 365 is built on management, governance, security and business value pillars. | Found: Agent 365 is built on four pillars: management, governance, security, and business value. | Fix: Attribute the four-pillar framing specifically to the overview. The Microsoft Foundry integration page at https://learn.microsoft.com/azure/foundry/agents/concepts/agent-365-integration instead describes five capability pillars: registry, access control, visualization, interoperability and security. | Source: https://learn.microsoft.com/microsoft-agent-365/overview
- [contradicted, blocker] summary; What's changing; Why it matters / behaviour: The registry lists every agent in the tenant. | Found: Currently, you can only view draft agents from Copilot Studio. Support for draft agents from other platforms, such Agent Builder, Foundry, and SharePoint, aren't currently available. | Fix: Replace 'every agent' with 'discoverable agents from supported Microsoft and connected platforms'. Explain that draft/unpublished visibility varies and external coverage depends on connection and synchronization; do not promise a complete census. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
- [contradicted, blocker] What's changing; Governance guidance: At rollout / applicability: Ownerless-agent reassignment can be set up without an agent-type qualification. | Found: Reassign ownerless agents created with Agent Builder to manager ... This rule only supports agents created by using Microsoft Copilot Agent Builder. | Fix: Qualify automated reassignment: the management rule supports Agent Builder agents and transfers ownership to the previous owner's manager. Distinguish manual reassignment of shared Agent Builder and Copilot Studio agents, documented in agent-actions; do not promise a general reassignment rule. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [contradicted, blocker] What's changing; controls[1].governs; Governance guidance: At rollout; summary / applicability: The tenant sharing control is presented without an agent-platform restriction. | Found: Sharing control only applies to agents built with Microsoft Copilot Agent Builder. | Fix: Add the Agent Builder-only qualification to the sharing control row and rollout guidance. Do not suggest that one sharing setting governs every registered or external agent. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [unsupported, major] Why it matters / behaviour: Agent 365 is the first product to put these agents together in an inventory with ownership. | Found: Searched: Agent 365 first unified inventory most tenants agents ownership; Agent 365 first inventory. Read overview and registry convergence, and searched inventory results. They describe unification but do not establish this historical first. | Fix: Remove 'the first product'; say that Agent 365 provides a unified inventory of supported Microsoft, partner and custom agents with ownership information.
- [contradicted, blocker] Why it matters / licensing: Non-Microsoft agent inventory breadth is an additional capability obtained by purchasing Agent 365. | Found: Synchronize agents and agent metadata from external platforms that aren't managed by Agent 365 into the registry ... Included with Microsoft 365 Enterprise, Business, Education, and Front Line Worker plans | Yes | Fix: Separate free inventory visibility from premium capabilities. Report that the service description includes external registry synchronization in base plans, whereas https://www.microsoft.com/licensing/faqs/122 lists Registry sync as requiring Agent 365; flag this disagreement for commercial confirmation rather than treating external inventory as an undisputed purchase differentiator. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: The registry shows which data sources and tools each agent uses. | Found: Currently, Microsoft 365 admin center doesn't have data and tools information for all agents. | Fix: Say the Data & tools tab displays platform-reported metadata where available and can be empty for unsupported agent types or unsynchronized metadata. Cite this agent-details page; do not claim complete data-source coverage. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-details
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: External agents' own data stays where it is. | Found: It can also include inputs and outputs that the source platform or the agent developer includes in observability data. | Fix: Replace the categorical data-location assurance with: 'Agents continue running on their source platforms. Registry metadata and, when enabled, activity telemetry are collected into Microsoft 365; telemetry can include inputs and outputs.' Cite connected-platforms and data-residency-protection-compliance. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/data-residency-protection-compliance
- [contradicted, blocker] Risk assessment: Security & identity / behaviour: Agents receive Entra Agent IDs, without qualification. | Found: Your Microsoft Entra tenant might contain AI agents with or without a Microsoft Entra agent identity. | Fix: Say 'Agents integrated with Entra Agent ID have agent identities; registry presence alone does not establish this. Older agents may use classic applications/service principals.' Do not promise Agent ID-specific controls for every inventoried agent. | Source: https://learn.microsoft.com/entra/agent-id/disable-agent-identities
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Agent 365 supplies governance rather than itself making an agent more autonomous. | Found: Agent 365 is platform-agnostic and doesn't enforce runtime behavior. Instead, it provides identity, policy, and observability guardrails | Fix: Cite this content-sharing page for the distinction between the governance platform and the agent runtime. | Source: https://learn.microsoft.com/microsoft-agent-365/share#key-principles
- [supported, minor] Cost and licensing; rationale: cost / cost: Copilot Studio agent usage has its own Copilot Credit consumption costs. | Found: Generative answer ... 2 Copilot Credits ... Employee-facing usage scenarios (Business to Employee) of Copilot Studio agents ... are included in the Microsoft Copilot USL | Fix: Cite the billing-rates page and qualify that applicable Microsoft 365 Copilot employee-facing usage is included, while other usage can consume credits. Do not imply that every governed Studio interaction incurs an extra charge. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management#copilot-credits-billing-rates
- [supported, minor] Cost and licensing / cost: Cowork can incur Copilot Credit consumption costs. | Found: Services managed by usage-based billing ... Cowork (Copilot license required) | Fix: Add this usage-based billing source for the Cowork cost assertion. | Source: https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits#services-managed-by-usage-based-billing
- [supported, minor] Cost and licensing / cost: Third-party agent/tool offerings can have their own provider charges. | Found: You are responsible for any terms and charges associated with use of Third-Party Tools. | Fix: Cite this source and use 'third-party charges may apply' rather than implying that every partner agent necessarily requires a subscription. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [unsupported, blocker] Cost and licensing / licensing: Agent 365 does not include Copilot Credits for the governed agents. | Found: Searched: Agent 365 Copilot Credits Cowork not included subscription; Agent 365 credits does not include; Agent 365 not Copilot Credits licensing consumption. Read overview, service description, product pricing page and licensing FAQ; no explicit credit-exclusion statement found. | Fix: Remove the absolute credit-exclusion statement. Retain the separately sourced warning that agent workloads can have their own licensing and consumption charges, subject to their own inclusion rules.
- [supported, minor] Scope; Open questions / absence: Government-cloud availability at the initial general-availability launch is not stated. | Found: Searched: Agent 365 general availability GCC May. Read overview, service description, May 2026 announcements and government CLI search results. No GCC launch date found; current service description does publish feature-specific GCC availability. | Fix: Keep the historical launch caveat and roadmap cloud list, but add current GCC information from https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365: registry and policy templates are listed Yes; Graph API is No. Limit open questions to remaining cloud/date gaps.
- [contradicted, blocker] Governance guidance: Before rollout / admin-path: The inventory provides filters labeled Missing an owner and Availability. | Found: When you select the Agents without owners card, the agent list will be filtered ... based on Publisher type and Owner. ... Status - You can filter the agent list based on status of the agent. | Fix: Use the documented Agents without owners card for ownerless shared agents and the Status filter for availability/status review. Do not instruct administrators to find filters called Missing an owner or Availability. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [supported, minor] Governance guidance: Before rollout / behaviour: The Power Platform admin center provides tenant-level Copilot Studio analytics. | Found: Tenant-wide visibility: Provides an overview of all agents across the tenant | Fix: Add this analytics source and retain its scope: Power Platform admin center analytics cover consumption-based agents; individual included agents also have Copilot Studio Analytics. | Source: https://learn.microsoft.com/copilot/manage/copilot-admin-reports#power-platform-reports-and-copilot-studio-analytics
- [contradicted, blocker] Governance guidance: At rollout / applicability: Administrators can immediately apply customizable templates with their own sharing, access and tool restrictions as a generally available rollout step. | Found: Scenarios for AI templates are in preview and available only for Frontier tenants. Custom policies aren't yet supported. | Fix: Do not promise arbitrary custom policies as GA. Describe selecting documented default templates at activation, flag the Frontier/preview limitations and the page's conflicting custom-template instructions, and distinguish catalog sharing/tool controls from the template's documented Entra/Purview/SharePoint/Defender policies. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/policy-template
- [supported, minor] Governance guidance: After rollout / applicability: Purview agent audit records can be fed into a SIEM. | Found: Access to audit logs via Office 365 Management Activity API ... lets them import their auditing data to a SIEM solution. | Fix: Cite this audit-export source together with https://learn.microsoft.com/purview/ai-agent-365, which places agent interactions in the unified audit log. | Source: https://learn.microsoft.com/purview/audit-solutions-overview#audit-standard
- [contradicted, blocker] Governance controls prose / absence: Only the block action has a documented Graph equivalent. | Found: Block, unblock, and reassign ownership of packages. | Fix: Replace with 'Package Management Graph APIs document inventory, details, update, block, unblock and ownership reassignment; no equivalent for the listed tenant settings was found in the November 2026 check.' Distinguish beta actions. | Source: https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/overview
- [contradicted, blocker] Governance controls prose / absence: Purview audit and DSPM for AI add no configurable controls of their own. | Found: When you create an agent instance ... it's automatically enabled for audit ... For other capabilities, include the agent instance in policies as you would a user. | Fix: Say agent-instance auditing is enabled automatically, while other Purview protections require policy scoping/configuration. Refer to the current DSPM > AI observability experience; the same page says classic DSPM does not support Agent 365. Remove the blanket no-controls assertion. | Source: https://learn.microsoft.com/purview/ai-agent-365
- [contradicted, minor] Cost and licensing; sources / consistency: The licensing FAQ is linked in the page's sources. | Found: Cost and licensing: 'see the licensing FAQ linked in the sources'; sources contains no https://www.microsoft.com/licensing/faqs/122 entry. | Fix: Add the Microsoft Licensing FAQ at https://www.microsoft.com/licensing/faqs/122 to sources, and use it to qualify activation, user entitlement and prerequisites.
- [contradicted, blocker] Open questions / absence: How registry sync handles agents deleted at the source remains undocumented. | Found: Deletion reconciliation isn't guaranteed. Synchronization doesn't currently guarantee that an agent removed from the source platform is automatically removed from the Microsoft 365 agent registry. | Fix: Replace the open question with the documented limitation: manually resynchronize after source changes, confirm deletion reconciliation with the platform administrator and manually remove stale registry entries where necessary. Add connected-platforms to sources. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms
- [contradicted, minor] Governance guidance; controls / consistency: The checklist's inventory, approval, external connection and Purview audit controls are not all represented by the controls table. | Found: Checklist: 'Run the free inventory', 'approval flow', 'Register the external agents', 'Feed agent audit events into your SIEM'; table: block, tenant settings, Conditional Access, Entra identity inventory. | Fix: Add or regroup rows for the Microsoft 365 agent registry, publication/activation approval, external platform connections and Purview audit/SIEM access. Use the already verified registry, agent-actions, connected-platforms and Purview sources; do not substitute Entra identity inventory for the comprehensive registry.
- [supported, minor] Why it matters / licensing: Agent lifecycle rules are available without an additional Agent 365 license. | Found: Automate agent lifecycle actions using conditions-based rules ... Included with Microsoft 365 Enterprise, Business, Education, and Front Line Worker plans | Yes | Fix: Report the disagreement with https://www.microsoft.com/licensing/faqs/122, which lists automated lifecycle actions among capabilities requiring Agent 365, and ask readers to confirm their entitlement rather than presenting the split as settled. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
- [supported, minor] Why it matters / licensing: Purview agent audit is available without an additional Agent 365 license. | Found: Some Agent 365 capabilities are included with a Microsoft cloud subscription ... Audit logs and eDiscovery for agent activity | Fix: Cite the FAQ but disclose that the service description lists Purview agent audit as requiring Agent 365/E7 and that the FAQ also repeats audit in its premium list. Do not treat the licensing split as unambiguous. | Source: https://www.microsoft.com/licensing/faqs/122
- [unsupported, major] Why it matters / behaviour: Most tenants already have more agents than they know about. | Found: Searched: Agent 365 first unified inventory most tenants agents ownership; Agent 365 first inventory. Read overview, management overview and convergence guidance. They discuss discovery challenges, but provide no evidence for a claim about most tenants. | Fix: Frame this as analysis rather than an empirical majority claim: 'Tenants can have agents spread across Copilot Studio, SharePoint and Agent Builder; inventorying them is a useful first step.'
- [supported, minor] Why it matters / behaviour: Copilot Studio agents can exist in default environments. | Found: When you first sign in and create a new agent, the portal creates a default environment for you. | Fix: Cite this environment guidance for the example of agents created in default environments. | Source: https://learn.microsoft.com/microsoft-copilot-studio/environments-first-run-experience#create-a-new-environment-for-your-agents
- [supported, minor] Why it matters / role: SharePoint site owners can create agents on their sites. | Found: Members of your organization (end users) can create agents using Microsoft SharePoint. | Fix: Cite this SharePoint access guidance; keep the example subject to the appropriate user licensing and tenant/site agent controls. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#create-agents
- [supported, minor] Why it matters / behaviour: Agent Builder agents can be shared from person to person inside the organization. | Found: Users can share agents created with Agent Builder with other users in the organization. | Fix: Cite this agent-creation guidance for the person-to-person sharing example. | Source: https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-admin-guide#create-agents
-->
