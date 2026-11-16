---
title: "Agent identity: whose permissions does an agent use?"
slug: "agent-identity"
summary: "The four identity patterns an agent can run under (end user, maker, service identity, Entra agent identity), what each means for data access and audit, and which Microsoft controls push makers toward the right one."
updated: "2026-11-13"
tags: ["agent-identity","entra-agent-id","end-user-authentication","maker-credentials","service-principal","least-privilege","auditing"]
covers: ["entra-agent-id","end-user-authentication","maker-credentials"]
sources:
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Agent Registry convergence with Microsoft Agent 365 (Entra Agent ID)"
    url: "https://learn.microsoft.com/entra/agent-id/agent-registry-convergence"
    kind: "learn"
  - title: "Create users: agent users (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/create-users#agent-users-preview"
    kind: "learn"
  - title: "Agents FAQ for Microsoft 365: how does an agent access data?"
    url: "https://learn.microsoft.com/microsoft-365/copilot/agent-essentials/m365-agents-faq"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
related: ["copilot-studio-block-maker-provided-credentials","copilot-studio-safe-sharing-credential-oversharing","dataverse-agent-users-entra-agent-identity","agent-365-control-plane-for-agents","m365-copilot-federated-connectors-write-update-delete"]
kind: "concept"
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 26
  unconfirmed: 8
  contradicted: 4
  attempts: 1
---

## The question to ask of every agent

Before risk, cost or scope, ask: when this agent reads or changes something, whose permissions does it use? Microsoft's agent platforms allow four answers, and the governance posture follows directly from which one a maker chose.

| Pattern | How it works | Data access | Audit trail | When acceptable |
| --- | --- | --- | --- | --- |
| **End user** | The person using the agent signs in to each connected service; tools run with their permissions. | Exactly what the user could do themselves. | Attributed to the user. | Default for interactive agents and for autonomous agents shared run-only. |
| **Maker-provided** | The maker's connection is stored with the agent; every user runs tools as the maker. | Everything the maker can reach. | Attributed to the maker, whoever used the agent. | Rarely. Demos and single-user agents only. |
| **Service identity** | A service principal, API key or managed identity owned by the organisation. | Whatever the role grants; should be least privilege. | Attributed to the service identity. | Integrations where no user is present and the scope is fixed. |
| **Entra agent identity** | The agent has its own Entra Agent ID; Dataverse and other services provision an agent user with dedicated roles. | Roles sized to the agent's purpose. | Attributed to the agent itself; sign-in logs and Conditional Access apply. | Autonomous agents touching business data; the pattern Microsoft is standardising on. |

Microsoft 365 Copilot itself and federated connectors always use the end-user pattern: Copilot acts with the user's account at the third-party service and asks for confirmation before writes.

## Controls that enforce the right pattern

- **Control maker credential options** (Power Platform admin center, per environment or group) removes the maker-provided choice entirely.
- **Sharing agents with embedded maker credentials** blocks sharing or publishing agents that still carry maker connections, with a detect-only mode to measure first.
- **Dataverse agent users** give agents their own identity and roles inside Dataverse.
- **Agent 365 and Entra Agent ID** inventory agent identities, apply Conditional Access and let you disable an agent in one place.
- **Copilot Studio automatic security scan** warns makers at publish time when they pick maker-provided credentials or share with everyone.

## Review checklist

1. Which pattern does each tool in the agent use? Mixed agents are common.
2. For service and agent identities: who owns the identity, what roles does it hold, when was it last reviewed?
3. Is the agent autonomous? If so, end-user or agent identity, never maker.
4. Are audit events landing in Purview under the right principal?
5. What happens when the maker leaves? Maker-provided agents break or, worse, keep working.

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] The question to ask of every agent: End user row, Audit trail / behaviour: The audit trail for the end-user pattern is attributed to the user. | Found: Searched: Copilot Studio maker credentials audit logs attributed maker end user; Copilot audit UserId service principal. Read the cited authentication page, Agents FAQ and Copilot interaction events overview; none establishes this across connected-service audit trails. | Fix: Replace the blanket audit statement with 'Verify attribution in the connected service and the relevant Copilot audit records.' The Copilot interaction schema documents user interaction records, not a universal rule for all tool audit trails.
- [supported, minor] The question to ask of every agent: End user row, autonomous agents shared run-only / behaviour: An autonomous agent shared for others to run can use each recipient's own credentials. | Found: Share an autonomous agent for users to run (preview)

You can share a published agent that has triggers with users who need to run the agent by using their own credentials. | Fix: Label this as the preview shared-autonomous-agent experience, requiring user-authenticated triggers and tools. Also distinguish the cited configure-no-maker-authentication page, which warns that its enforcement requires live user sign-in and causes scheduled/background agents to fail. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent
- [unsupported, major] The question to ask of every agent: Maker-provided row, Data access / behaviour: A maker-provided connection gives the agent access to everything the maker can reach. | Found: Searched: Copilot Studio maker credentials; mixed authentication tools. Read configure-no-maker-authentication, configure-enduser-authentication, advanced-connectors and govern-agents-identities-overview; none says a connection exposes everything the maker can access. | Fix: Replace 'Everything the maker can reach' with 'The configured tools can use the maker's permissions in their connected services, potentially exposing data or actions unavailable to the end user.'
- [unsupported, blocker] The question to ask of every agent: Maker-provided row, Audit trail / behaviour: The audit trail is attributed to the maker regardless of who used the agent. | Found: Searched: Copilot Studio maker credentials audit logs attributed maker; Copilot Studio maker credentials audit trail. Read configure-no-maker-authentication, Agents FAQ and security-and-governance excerpts; runtime authentication is stated, but this blanket audit rule is not. | Fix: Remove the universal attribution promise. Say 'Connected-service operations use the maker's credentials; verify how that service and Copilot record the caller and the interacting user.'
- [unsupported, blocker] The question to ask of every agent: Service identity row, Audit trail / behaviour: The audit trail is attributed to the service identity for all listed service-authentication methods. | Found: Searched: service principal audit logs API key agent; agent API key audit identity attribution. Read Agents FAQ, configure-sharing-agents-embedded-maker-credentials and Agent ID logs; none guarantees equivalent audit attribution for API keys, managed identities and service principals. | Fix: Replace with 'Attribution depends on the connected service and authentication method; verify the service's audit records.' Do not imply that an API key guarantees an identifiable service-principal audit trail.
- [supported, minor] The question to ask of every agent: Entra row; Controls: Dataverse agent users / behaviour: Dataverse can represent agents as agent users linked to Microsoft Entra agent identities. | Found: Agent users (preview)

[This section is prerelease documentation and is subject to change.]

These users have agent identities in Microsoft Entra Agent ID and are added into the Dataverse environment to get data access. | Fix: Mark Dataverse agent users as preview in the table and controls bullet. Describe administrators adding an agent user to an environment and assigning its security role, rather than implying automatic access provisioning. | Source: https://learn.microsoft.com/power-platform/admin/create-users#agent-users-preview
- [unsupported, major] The question to ask of every agent: Entra row, other services provision an agent user / behaviour: Other services provision an agent user with dedicated roles when the agent has an Entra Agent ID. | Found: Searched: agent identity API key service principal managed identity; agent identity standard autonomous. Read agent-identities, Agent 365 identity and create-users; user accounts are optional, and no passage establishes this generalized service-provisioning behavior. | Fix: Remove 'and other services'. Retain the documented Dataverse preview example and explain that an Entra agent identity and an optional agent user account are different objects.
- [contradicted, blocker] The question to ask of every agent: Entra row; Controls: Agent 365 and Entra Agent ID / applicability: Conditional Access applies to agents using Entra Agent ID without a channel qualification. | Found: Conditional Access is enforced today only when the agent runs in Microsoft Teams (see the note at the start of this section). | Fix: State that Entra supports Conditional Access for agent identities, but Copilot Studio currently evaluates it for connector calls only in Microsoft Teams. Other channels use the existing Power Platform connector authentication flow; seeing scopes is not evidence of enforcement there. | Source: https://learn.microsoft.com/microsoft-copilot-studio/govern-agents-identities-overview
- [contradicted, blocker] The question to ask of every agent: paragraph after the table, confirmation before writes / behaviour: Copilot asks for confirmation before writes through federated connectors. | Found: Tools that create, update, or delete data initially require the user's explicit approval. Users can choose whether Copilot asks again for that tool, as described in Confirm an action. | Fix: Replace with 'Federated connector write tools require approval by default; users can select Allow for conversation or Always allow for an individual tool, so later writes need not prompt again.' Limit this statement to federated connector tools. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, blocker] Controls that enforce the right pattern: Sharing agents with embedded maker credentials, blocking / applicability: The embedded-maker-credentials control blocks sharing or publishing any agent that still carries maker connections. | Found: Administrators can prevent makers from sharing or publishing Copilot Studio agents that expose a connection with maker-provided credentials to end users when the connection isn't safe to share. | Fix: Say the preview control blocks applicable unsafe share/publish paths when a connection violates the connection-sharing policy, not all maker connections. Explain that it does not retroactively unshare or disable existing agents, as documented at https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials. | Source: https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials
- [supported, minor] Controls that enforce the right pattern: Copilot Studio automatic security scan, timing / behaviour: Copilot Studio automatically runs a security scan and warns makers before publishing. | Found: Copilot Studio automatically runs a security scan and warns makers before publishing. | Fix: Add the uncited supporting Microsoft pages to sources: https://learn.microsoft.com/microsoft-copilot-studio/security-scan ; https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials ; https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent ; https://learn.microsoft.com/entra/agent-id/agent-identities ; https://learn.microsoft.com/entra/agent-id/sign-in-audit-logs-agents ; https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin ; https://learn.microsoft.com/microsoft-copilot-studio/govern-agents-identities-overview ; https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy . This is the grouped missing-citations finding. | Source: https://learn.microsoft.com/microsoft-copilot-studio/security-scan
- [unsupported, major] Review checklist: item 1, Mixed agents are common / behaviour: Agents mixing identity patterns are common. | Found: Searched: agents mix credentials; Copilot Studio mixed authentication tools. Read configure-enduser-authentication, authoring-connections and Plan your agent identity architecture excerpts; mixed configurations are possible, but no passage establishes their prevalence. | Fix: Delete 'Mixed agents are common.' Keep the advice to inspect each tool, or replace it with 'Authentication is configured per tool' using https://learn.microsoft.com/microsoft-copilot-studio/configure-enduser-authentication.
- [unsupported, major] Review checklist: item 5, maker departure breaks agents / behaviour: Maker-provided agents can break when the maker leaves the organization. | Found: Searched: Copilot Studio maker leaves connection; agent maker leaves the organization; Copilot Studio connections owner leaves. Read authoring-connections, configure-enduser-authentication and Agent settings excerpts; no passage states this agent-specific departure outcome. | Fix: Keep the review question but replace the asserted outcome with advice: 'Document who will replace or reauthenticate maker-owned connections during offboarding.' The connection documentation supports failures from expired or invalid credentials, not departure alone.
- [unsupported, major] Review checklist: item 5, maker departure leaves agents working / behaviour: Maker-provided agents can keep working with the departed maker's access after the maker leaves. | Found: Searched: Copilot Studio maker leaves connection; Copilot Studio connection owner deleted; Copilot Studio connections owner leaves. Read authoring-connections and configure-enduser-authentication; neither establishes continuing access after maker offboarding. | Fix: Remove 'or, worse, keep working.' Instead advise administrators to verify connection revocation and ownership during offboarding without asserting an undocumented post-departure access outcome.
- [contradicted, minor] Review checklist: items 1, 2 and 4; missing governance controls table / consistency: The checklist asks readers to review tool authentication, identity permissions and Purview audit without corresponding controls rows. | Found: Which pattern does each tool in the agent use? ... what roles does it hold ... Are audit events landing in Purview under the right principal? The page has no controls table. | Fix: Add documented controls rows for reviewing tool authentication, assigning Dataverse agent-user roles, managing Entra agent permissions and accessing relevant audit logs. Use the already verified Microsoft references; do not infer missing UI or API paths.
-->
