---
title: "Agent identity: whose permissions does an agent use?"
slug: "agent-identity"
summary: "The four identity patterns an agent can run under (end user, maker, service identity, Entra agent identity), what each means for data access and audit, and which Microsoft controls push makers toward the right one."
updated: "2026-11-13"
tags: ["agent-identity","entra-agent-id","end-user-authentication","maker-credentials","service-principal","least-privilege","auditing"]
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
