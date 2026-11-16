---
title: "Microsoft Agent 365: the control plane for agents"
slug: "agent-365-control-plane-for-agents"
roadmapId: 558448
topic: "copilot-studio"
products: ["Microsoft Agent 365"]
summary: "Agent 365 is a per-user licensed service that gives IT and security one registry, one set of governance actions and observability for agents from Microsoft, partners and connected platforms. Review fit and licensing."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "high"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "per-user"
  notes: "Per-user: stand-alone (list price $15/user/mo) or included in Microsoft 365 E7 (list price $99/user/mo). Prerequisite licences apply, and Microsoft's pages disagree on which capabilities need the licence; confirm with the licensing FAQ."
audiences: ["m365-admin","security","service-owner","finops"]
tags: ["agent-365","agent-registry","control-plane","entra-agent-id","agent-identity","governance","licensing","e7","ownerless-agents","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 558448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558448"
    kind: "roadmap"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Connected platforms in Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms"
    kind: "learn"
  - title: "Graph API for agent registry and agent details"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/graph-api"
    kind: "learn"
  - title: "Microsoft Agent 365 service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Microsoft Licensing FAQs: Microsoft Agent 365"
    url: "https://www.microsoft.com/licensing/faqs/122"
    kind: "docs"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "Disable agent identities in your tenant"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities"
    kind: "learn"
  - title: "Manage agent identities in your organization"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin"
    kind: "learn"
  - title: "Whether an agent is blocked for the whole organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    kind: "learn"
  - title: "Connections that synchronise agents from external platforms (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms#create-a-platform-connection"
    kind: "learn"
  - title: "Whether agent identities can request tokens for resources (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    kind: "learn"
  - title: "Agent identity inventory and sign-in monitoring (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#view-agent-identities"
    kind: "learn"
  - title: "Agent identity inventory and sign-in monitoring (Microsoft Graph)"
    url: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
    kind: "learn"
videos: []
related: ["agent-identity","m365-copilot-agent-lifecycle-management-rules","copilot-studio-cost-management-m365-admin-center"]
controls:
  - governs: "Agent inventory in the registry"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Registry"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api:
      kind: "graph"
      call: "GET /v1.0/copilot/admin/catalog/packages"
      docs: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    note: "The registry Graph APIs require the AI admin or Global admin role."
  - governs: "Whether an agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > select an agent > Block or Unblock"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta API, not supported in production. Needs an Agent 365 licence. Not available in US Government clouds per the API page."
  - governs: "Agent management rules, agent and plugin access, sharing, user access, feedback sharing and tags"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Sharing and the ownerless reassignment rule apply to Agent Builder agents only."
  - governs: "Connections that synchronise agents from external platforms"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All Agents > Connected platforms > Manage > Connect a platform"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms#create-a-platform-connection"
    api: null
    note: "Created by the Agent 365 AI administrator. Synchronisation is manual."
  - governs: "Whether agent identities can request tokens for resources"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Assignments > Users, agents or workload identities > Include > All agent identities"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    api:
      kind: "graph"
      call: "POST /beta/identity/conditionalAccess/policies with conditions.clientApplications.includeAgentIdServicePrincipals set to All"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    note: "Set Target resources to All resources and Grant to Block. Needs Conditional Access Administrator and Microsoft Entra ID P1. Start in Report-only."
  - governs: "Agent identity inventory and sign-in monitoring"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities"
      docs: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#view-agent-identities"
    api:
      kind: "graph"
      call: "GET /beta/auditLogs/signIns?$filter=signInEventTypes/any(t: t eq 'servicePrincipal') and agent/agentType eq 'AgentIdentity'"
      docs: "https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity"
    note: "Sign-in logs need at least the Reports Reader role. Beta endpoint."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: licensing now shows the disagreement between Microsoft's pages, controls are re-read and split by agent block, settings, connections and Entra, and registry coverage limits are stated."
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 101
  unconfirmed: 0
  contradicted: 2
  attempts: 2
---

## What's changing

Microsoft Agent 365 is generally available. The roadmap item is Launched, targeted May CY2026, at General Availability for Worldwide (Standard Multi-Tenant) on the web. Microsoft's overview says it is generally available for the Commercial segment on a per user basis, and describes it as the observability platform for AI.

The centre of it is the agent registry in the Microsoft 365 admin center (**Agents** > **All Agents** > **Registry**). It lists agents from Microsoft, from partners and from your own teams, with owner, usage and risk information. The registry is not a full census: Microsoft notes that publishing a Copilot Studio agent alone might not make it visible in the admin center.

Administrators can act on agents from the registry (block, activate, reassign owners) and, in **Agents** > **Settings**, set agent management rules, agent and plugin access, sharing, user access, feedback sharing and tags. Agents built on other platforms can be brought in through **Connected platforms**; Microsoft's supported-platforms table includes Amazon Bedrock. Identity for agents sits in Microsoft Entra, where Conditional Access and sign-in logs apply to agent identities.

## Why it matters

Agents are created in several places (Copilot Studio, Agent Builder, SharePoint, partner catalogues, other clouds), and Agent 365 is where a service owner can see them with an owner attached and act on them. The practical gain is an inventory with accountable owners, bulk lifecycle rules and a block control, plus Entra identity controls for agents that have an agent identity.

The decision is commercial as much as technical. Some capabilities are described as included with a Microsoft cloud subscription, and others need a per-user Agent 365 licence, but Microsoft's own pages disagree on where the line falls. If nobody acts, agents keep running as they do today and the free registry remains available; what you give up is the licensed policy, observability and security layers.

## Risk assessment

**Data exposure**
- Connected platforms are read-only by design, but the connection stores key-based credentials as encrypted data within Microsoft 365. **Collect agent observability data** is on by default for new connections and is part of the Frontier preview; the provider can bill data access or query charges for the telemetry it retrieves.
- The registry can under-report: Copilot Studio publishing alone might not make an agent visible, synchronisation is manual, and agents deleted at the source are not guaranteed to leave the registry.

**Security & identity**
- Not every inventoried agent has a Microsoft Entra agent identity. Where it is missing, experiences can fall back to standard service principals that lack agent-specific tracking and controls, so Conditional Access for agent identities will not cover them.
- A tenant-wide Conditional Access block stops existing and new agent identities from authenticating, and Microsoft cautions that it can make existing agents fail. Use Report-only first.

**Autonomy & actions**
- Agent 365 does not run connected agents: Microsoft states it never invokes, executes or interacts with agents in the source platform. The autonomy risk stays with the agents.
- Agent management rules act in bulk, and Apply template is a one-time bulk operation, so review the affected list before running a rule.

**Change & support**
- Blocking an agent has a platform-dependent effect: a block on a SharePoint or Foundry agent only affects its availability in Microsoft Copilot Chat.
- The **Sharing** setting applies only to agents built with Agent Builder, and the **User access** setting defaults to **All users**.

## Cost and licensing

Agent 365 is licensed per user, as part of Microsoft 365 E7 or as a stand-alone offering. Microsoft's licensing FAQ gives list prices of $99/user/mo for E7 and $15/user/mo for the stand-alone licence. Agents themselves are not licensed; the licence attaches to users who delegate their access to agents, or who own, sponsor or manage agents with their own access.

Prerequisites matter. For enterprise customers the FAQ requires Microsoft 365 E5, or Microsoft 365 E3 (or Office 365 E3 + EMS E3) plus both Defender Suite and Purview Suite. The overview says at least one user must hold a qualifying licence to enable Agent 365, but the FAQ says a licence is required for users of agents that use premium capabilities, so licensing only a governance team does not cover everyone who benefits.

What needs the licence is not settled across pages. The FAQ lists agent identity, registry, basic usage insights and admin governance actions (publish, deploy, block, delete, approve, reassign, pin) as included with a Microsoft cloud subscription. It lists registry sync, lifecycle automation, policy templates and tool controls as needing Agent 365. The service description lists external registry sync and lifecycle rules as included in base plans, and policy templates, observability and tool controls as requiring E7/G7 or Agent 365. Confirm entitlement for registry sync and lifecycle rules before budgeting.

The FAQ states there are no consumption-based costs for Agent 365 yet. The Package Management Graph API requires an Agent 365 licence. Indirect costs: provider-side charges for telemetry queries on connected platforms, third-party terms and charges for partner tools, and admin time for connections and manual synchronisation. How agents on other platforms are billed by those platforms is outside these pages.

## Scope

- **Cloud and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. The service description's GCC column shows registry, basic governance actions, lifecycle rules, registry sync, policy templates and observability as available in GCC, and the Graph API as not; the roadmap record does not list GCC, so confirm before relying on either.
- **Roles:** the Agent 365 AI administrator manages platform connections; the package Graph APIs require the AI admin or Global admin role; Conditional Access policies need the Conditional Access Administrator role.
- **Agents covered:** Microsoft, partner, organisation-published and shared agents in the registry, plus synchronised agents from supported external platforms. Sharing controls cover Agent Builder agents only; the ownerless reassignment rule covers Agent Builder agents only.
- **Prerequisites:** at least one user with a qualifying Agent 365 licence; the licence prerequisites above.

## Governance guidance

### Before rollout
- Confirm the licence route (E7 or stand-alone) and the prerequisite licences with your licensing team, using the Microsoft Licensing FAQ, and ask Microsoft to settle the registry sync and lifecycle rules entitlement in writing.
- Open **Agents** > **All Agents** > **Registry** and select the **Agents without owners** card to size the ownerless problem before buying; 
- Check **Agents** > **Settings** > **User access** (default **All users**) and **Agent and plugin access** against your policy for external publishers.
- Ask each external platform's administrator to prepare the credentials and permissions for the connection.

### At rollout
- Assign Agent 365 licences to users who delegate their access to agents and to owners, sponsors or managers of agents with their own access.
- Create each platform connection under **Connected platforms**, run **Sync agents**, and decide per connection whether **Collect agent observability data** stays on.
- Create the Conditional Access policy for **All agent identities** in Report-only mode and review its effect before enforcing.

### After rollout
- Re-run **Sync agents** after source-platform changes and remove stale registry entries by hand.
- Review agent sign-in logs in Entra for unexpected agent identities.
- Review the affected list of each agent management rule before you run it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Agent inventory in the registry</strong><br><small>Tenant</small><br><small class="controls__note">The registry Graph APIs require the AI admin or Global admin role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Registry <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/copilot/admin/catalog/packages</code> <a href="https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta API, not supported in production. Needs an Agent 365 licence. Not available in US Government clouds per the API page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › select an agent › Block or Unblock <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions#block-or-unblock-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Agent management rules, agent and plugin access, sharing, user access, feedback sharing and tags</strong><br><small>Tenant</small><br><small class="controls__note">Sharing and the ownerless reassignment rule apply to Agent Builder agents only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connections that synchronise agents from external platforms</strong><br><small>Tenant</small><br><small class="controls__note">Created by the Agent 365 AI administrator. Synchronisation is manual.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All Agents › Connected platforms › Manage › Connect a platform <a href="https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms#create-a-platform-connection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether agent identities can request tokens for resources</strong><br><small>Tenant</small><br><small class="controls__note">Set Target resources to All resources and Grant to Block. Needs Conditional Access Administrator and Microsoft Entra ID P1. Start in Report-only.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Assignments › Users, agents or workload identities › Include › All agent identities <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/identity/conditionalAccess/policies with conditions.clientApplications.includeAgentIdServicePrincipals set to All</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Agent identity inventory and sign-in monitoring</strong><br><small>Tenant</small><br><small class="controls__note">Sign-in logs need at least the Reports Reader role. Beta endpoint.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities <a href="https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#view-agent-identities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /beta/auditLogs/signIns?$filter=signInEventTypes/any(t: t eq 'servicePrincipal') and agent/agentType eq 'AgentIdentity'</code> <a href="https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#monitor-agent-activity" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Controls are split across the Microsoft 365 admin center (registry, actions, settings, connections) and the Microsoft Entra admin center (identity). The block action and the registry listing have Graph APIs under Package Management; the tenant settings and platform connections have no documented API at the time of writing (November 2026). The Package Management APIs need an Agent 365 licence and the beta ones are not supported in production applications.

The Conditional Access policy governs agent identities that exist in Entra, not every registry entry, and the Entra roles above are separate from the Agent 365 AI administrator role.

## Open questions

- Which capabilities (registry sync, lifecycle rules, audit) are included with a Microsoft cloud subscription, and which need Agent 365? The licensing FAQ and the service description disagree; watch the service description.
- Will Agent 365 be available in the US Government clouds? The roadmap lists Worldwide only, while the service description's GCC column lists several capabilities as available.
- Will registry synchronisation run on a schedule, and will deletions at the source be reconciled? The connected platforms page lists both as current limitations.
- Will the block action get a v1.0 Graph API, and will any API cover the tenant agent settings or platform connections? Watch the Package Management API overview.

<!-- rationale
risk: Medium. Agent 365 adds control rather than autonomy, but the registry is not a complete census, synchronisation is manual and a tenant-wide block can break agents; each needs configuration or communication.
cost: High. A per-user licence is required for the premium capabilities: list price $99/user/mo in Microsoft 365 E7 or $15/user/mo standalone, on top of qualifying prerequisite licences, per Microsoft's licensing FAQ.
impact: Medium. Mainly administrators, security teams and agent owners notice it; users see its effects only through blocked agents, access settings or approval flows.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing; Risk assessment: Data exposure; rationale: risk / behaviour: Publishing a Copilot Studio agent alone might not make it visible in the registry. | Found: Publishing the agent in Copilot Studio alone might not make it visible in the admin center. | Fix: Keep the cited registry-page warning, specifying that its passage concerns custom engine agents. Also cite https://learn.microsoft.com/microsoft-agent-365/builder/agent-registry and acknowledge that it instead says Copilot Studio agents register automatically when created; confirm coverage in the tenant rather than resolving the discrepancy silently. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [supported, minor] Risk assessment: Data exposure / behaviour: Connected platform connections are read-only by design. | Found: Connected platform connections are read-only by design:
The only exception is an explicit administrator action to remove a synchronized agent, which requires a separate, optional delete permission that you can choose not to grant. | Fix: Add the qualification immediately after 'read-only by design': 'An explicit administrator removal can delete a synchronized agent at source if the connection has the separate optional delete permission; that permission can be withheld.' The qualification is documented at https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms#security-model. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms
- [supported, minor] Cost and licensing: Prerequisites; Scope: Prerequisites / licensing: The FAQ lists Microsoft 365 E5 or E3 with both Defender Suite and Purview Suite as enterprise prerequisites. | Found: If you are an enterprise customer, you need Microsoft 365 E5 (ME5) or Microsoft 365 E3 (or Office 365 E3 + EMS E3) plus both Defender Suite and Purview Suite. | Fix: After quoting those prerequisites, acknowledge the FAQ's inconsistent mixed-license answer: it also says information workers must have Microsoft 365 E5 and that users lacking the prerequisites are ineligible. Ask Microsoft to confirm the E3-plus-suites route in writing, rather than describing prerequisites as settled. Both passages are at https://www.microsoft.com/licensing/faqs/122. | Source: https://www.microsoft.com/licensing/faqs/122
- [contradicted, blocker] rationale: cost / licensing: Both the $99/user/mo E7 route and the $15/user/mo stand-alone route are on top of qualifying prerequisite licences. | Found: Licensing prerequisites do not impact Microsoft 365 E7 or other E7 components because E7 includes Microsoft 365 E5 and Agent 365, along with Microsoft 365 Copilot and Entra Suite. | Fix: Replace the cost rationale with: 'High. Premium capabilities need broad per-user licensing: Agent 365 is a $15/user/mo stand-alone add-on to qualifying prerequisite licences, or is included in Microsoft 365 E7 at $99/user/mo. E7 already includes Microsoft 365 E5 and Agent 365; its price is not an extra charge on top of separately purchased prerequisite licences.' Source: https://www.microsoft.com/licensing/faqs/122. | Source: https://www.microsoft.com/licensing/faqs/122
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist directs administrators to decide observability collection, but no controls row identifies that collection control. | Found: Checklist: 'decide per connection whether Collect agent observability data stays on.' Controls[3] governs only 'Connections that synchronise agents from external platforms'; its note mentions the administrator role and manual synchronisation, not collection. | Fix: Expand the existing connections row's governing description to include per-connection observability collection. Its note should direct readers to create or edit a connection and select or clear 'Collect agent observability data', and state that this is a Frontier preview, enabled by default for new connections, with possible provider-side query charges. Cite https://learn.microsoft.com/microsoft-agent-365/admin/connected-platforms#agent-observability-data-collection-preview.
-->
