---
title: "Dataverse: create agent users with Microsoft Entra agent identity"
slug: "dataverse-agent-users-entra-agent-identity"
roadmapId: 576843
desk: "power-platform"
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
videos: []
related: ["agent-365-control-plane-for-agents","copilot-studio-block-maker-provided-credentials","copilot-studio-share-autonomous-agents-run-only","agent-identity"]
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-10-16T19:09:45"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Power Platform admin center > **Manage** > **Environments** > environment > **Settings** > **Users + permissions** > **Users** > add agent user; assign security roles.
- Power Platform admin center > **Security** > **Compliance** > **Auditing**: enable auditing and set event log retention; table and column auditing in the maker portal.
- Microsoft Entra admin center > **Agent ID**: identity lifecycle, Conditional Access, sign-in logs.
- Microsoft 365 admin center > **Agents**: registry view where Agent 365 is in use.

## Open questions

- Licensing: whether agent users consume any per-user Dynamics 365 or Power Apps entitlement when they access restricted tables.
- Which agent platforms beyond Copilot Studio can be bound to a Dataverse agent user today.
- Whether role assignment can be templated through environment groups.

<!-- rationale
risk: Medium. The feature lowers identity risk, but it enables autonomous writes under a non-human identity and depends on disciplined role design and auditing.
cost: None stated. Uses existing Dataverse and Entra capabilities; licensing notes unpublished.
impact: Low. Admins and makers only; no end-user visibility.
-->
