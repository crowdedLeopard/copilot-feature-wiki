---
title: "Dataverse: create agent users with Microsoft Entra agent identity"
slug: "dataverse-agent-users-entra-agent-identity"
roadmapId: 576843
topic: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Agents can be provisioned as Dataverse agent users backed by Entra agent identities, with their own least-privilege security roles and full auditing, instead of borrowing a person's or an application user's access."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "none"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "No separate licence stated for agent users. Dataverse capacity and the agent platform's own licensing (Copilot Studio, Agent 365) apply. Check the Learn article for any licensing notes at the time you deploy."
audiences: ["power-platform-admin","security","compliance","maker"]
tags: ["dataverse","agent-identity","entra-agent-id","agent-users","security-roles","least-privilege","auditing","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576843"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576843"
    kind: "roadmap"
  - title: "Create users: agent users (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#agent-users-preview"
    kind: "learn"
  - title: "Agent Registry convergence with Microsoft Agent 365 (Entra Agent ID)"
    url: "https://learn.microsoft.com/entra/agent-id/agent-registry-convergence"
    kind: "learn"
  - title: "Manage Dataverse auditing"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing"
    kind: "learn"
  - title: "Creating an agent user in an environment and assigning security roles (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    kind: "learn"
  - title: "Agent identity lifecycle in Microsoft Entra (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center"
    kind: "learn"
  - title: "Agent identity lifecycle in Microsoft Entra (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0"
    kind: "learn"
  - title: "Blocking or restricting agent sign-ins (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    kind: "learn"
  - title: "Dataverse auditing of what the agent user does (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-an-environment"
    kind: "learn"
  - title: "Dataverse auditing of what the agent user does (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents","copilot-studio-block-maker-provided-credentials","copilot-studio-share-autonomous-agents-run-only","agent-identity"]
controls:
  - governs: "Creating an agent user in an environment and assigning security roles"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Agents > + Add agent"
      docs: "https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview"
    api: null
    note: "Preview."
  - governs: "Agent identity lifecycle in Microsoft Entra"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Agents > Agent identities > New agent identity (Preview)"
      docs: "https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center"
    api:
      kind: "graph"
      call: "Create agentIdentity (POST, Microsoft Graph v1.0)"
      docs: "https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0"
  - governs: "Blocking or restricting agent sign-ins"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Users, agents or workload identities > Agents"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    api:
      kind: "graph"
      call: "POST /identity/conditionalAccess/policies with agent identities as the policy's users condition"
      docs: "https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities"
    note: "Needs Microsoft Entra ID P1."
  - governs: "Dataverse auditing of what the agent user does"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Audit and logs > Audit settings"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-an-environment"
    api:
      kind: "rest"
      call: "Update IsAuditEnabled on the organization table through the Dataverse Web API"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure"
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:09:45"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Dataverse adds a third kind of principal alongside people and application users: the **agent user**. An agent user is backed by a **Microsoft Entra agent identity** (Agent ID) and is added to an environment from the Power Platform admin center like any other user. Administrators assign it dedicated security roles sized to what the agent is meant to do, so an agent that only needs to read accounts and create cases gets exactly that.

Because the agent has its own identity, every create, read, update and delete it performs in Dataverse is audited against the agent, not against the maker who built it or a shared application registration. The roadmap describes this as enabling agents to act "autonomously or on behalf of users" with traceability of data access and changes. The feature is generally available as of August 2026 following a June preview; the Learn article still carries a preview label at the time of writing.

## Why it matters

The two existing patterns for giving an agent Dataverse access both have governance problems. Running as the maker ties the agent's access to a person's job and leaves when they do. Running as an application user usually means a broad role shared by many integrations, with audit trails that cannot tell one automation from another.

Agent users fix both. They also plug Dataverse into the wider agent identity model: an Entra agent identity can be inventoried in Agent 365, subject to Conditional Access and sign-in logging, and disabled in one place. For organisations with autonomous agents touching customer or financial records this is the pattern to standardise on.

## Risk assessment

**Data exposure**
- Positive when roles are scoped properly. Negative if administrators copy a System Administrator or broad custom role onto the agent user "to make it work".
- Agent users can be given access to column-level secured fields; review this deliberately.

**Security & identity**
- Agent identities are first-class Entra objects: include them in access reviews, Conditional Access design and privileged role monitoring.
- Credential or token handling for the agent identity follows Entra Agent ID; no secrets should be embedded in the agent.

**Autonomy & actions**
- An agent user with write roles can change records without a person present. Combine with tool approval in the agent platform for consequential writes, and with Dataverse auditing on the tables concerned.

**Change & support**
- Existing agents built against application users will not migrate automatically; plan a conversion backlog.
- Dataverse auditing must be turned on at environment, table and column level to realise the traceability benefit.

## Cost and licensing

- No separate licence for agent users is stated. Dataverse storage and API capacity consumed by the agent count against the environment as usual.
- The agent platform's own licensing applies (Copilot Studio credits or messages, Agent 365 if used for governance).
- Indirect: role design time; audit storage growth if auditing is enabled broadly.

## Scope

- Dataverse environments in the Power Platform admin center; Power Platform Administrator or environment System Administrator to create agent users and assign roles.
- Agents with an Entra agent identity (Copilot Studio agents and other platforms that issue Agent IDs).
- Worldwide (standard multi-tenant). Government cloud dates not published.

## Governance guidance

**Before rollout**
- Define a small set of standard agent security roles (read-only, case-handling, record-maintenance) so each agent user is assigned a reviewed role, not a bespoke one.
- Turn on Dataverse auditing for the environments and tables agents will touch, with a retention period that meets your policy.
- Add agent identities to the scope of your Entra access reviews.

**At rollout**
- Create agent users per agent (not shared between agents) so audit trails stay distinct.
- Record owner, purpose and assigned roles for each agent user in your agent register.

**After rollout**
- Review agent user role assignments quarterly against actual audited operations; remove privileges not used.
- Monitor Entra sign-in logs for agent identities and alert on unexpected locations or volumes.
- Migrate legacy application-user integrations that are really agents.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating an agent user in an environment and assigning security roles</strong><br><small>Environment</small><br><small class="controls__note">Preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Agents › + Add agent <a href="https://learn.microsoft.com/power-platform/admin/create-users#create-an-agent-user-preview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Agent identity lifecycle in Microsoft Entra</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Agents › Agent identities › New agent identity (Preview) <a href="https://learn.microsoft.com/entra/agent-id/create-delete-agent-identities#use-the-microsoft-entra-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>Create agentIdentity (POST, Microsoft Graph v1.0)</code> <a href="https://learn.microsoft.com/graph/api/agentidentity-post?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking or restricting agent sign-ins</strong><br><small>Tenant</small><br><small class="controls__note">Needs Microsoft Entra ID P1.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Users, agents or workload identities › Agents <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /identity/conditionalAccess/policies with agent identities as the policy's users condition</code> <a href="https://learn.microsoft.com/entra/agent-id/disable-agent-identities#create-conditional-access-policies-to-disable-agent-activities" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Dataverse auditing of what the agent user does</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Audit and logs › Audit settings <a href="https://learn.microsoft.com/power-platform/admin/manage-dataverse-auditing#configure-auditing-for-an-environment" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>Update IsAuditEnabled on the organization table through the Dataverse Web API</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/auditing/configure" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Dataverse side (creating the agent user, granting roles) is portal-only; the Entra side has full Graph coverage, including [agent blueprints](https://learn.microsoft.com/entra/agent-id/manage-agent-blueprint) for identities created at scale. Disabling an identity, a blueprint or all agents by Conditional Access is described in [Manage agent identities](https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin#disable-or-restrict-agent-identities). Table- and column-level auditing is configured by makers once environment auditing is on. The [agent users overview](https://learn.microsoft.com/power-platform/admin/agent-users) covers licensing and limits.

## Open questions

- Licensing: whether agent users consume any per-user Dynamics 365 or Power Apps entitlement when they access restricted tables.
- Which agent platforms beyond Copilot Studio can be bound to a Dataverse agent user today.
- Whether role assignment can be templated through environment groups.

<!-- rationale
risk: Medium. The feature lowers identity risk, but it enables autonomous writes under a non-human identity and depends on disciplined role design and auditing.
cost: None stated. Uses existing Dataverse and Entra capabilities; licensing notes unpublished.
impact: Low. Admins and makers only; no end-user visibility.
-->
