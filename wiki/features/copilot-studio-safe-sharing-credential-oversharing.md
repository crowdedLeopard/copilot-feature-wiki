---
title: "Copilot Studio: enforce safe sharing by detecting credential oversharing"
slug: "copilot-studio-safe-sharing-credential-oversharing"
roadmapId: 566873
desk: "agents"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Copilot Studio evaluates an agent's connections at share and publish time and can block agents that rely on embedded maker credentials from reaching end users."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "July CY2026"
risk: "medium"
cost: "none"
impact: "medium"
defaultState: "off"
action: "prepare"
licensing:
  model: "included"
  notes: "Environment setting in the Power Platform admin center. Two modes: All sharing allowed (detect and inform) and Safe sharing enforced (block). Environment-group configuration uses Managed Environments."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["copilot-studio","maker-credentials","sharing","oversharing","publish-controls","power-platform-admin-center","threat-detection"]
sources:
  - title: "Microsoft 365 Roadmap 566873"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566873"
    kind: "roadmap"
  - title: "Configure sharing agents with embedded maker credentials"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-sharing-agents-embedded-maker-credentials"
    kind: "learn"
  - title: "Control sharing agents with embedded maker credentials (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/security/control-sharing-agents-with-embedded-maker-credentials"
    kind: "learn"
  - title: "Control how agents are shared"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-sharing-controls-limits"
    kind: "learn"
videos: []
related: ["copilot-studio-block-maker-provided-credentials","copilot-studio-share-autonomous-agents-run-only","power-platform-maker-guidelines-copilot-studio","managed-environments"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-07-01T23:03:18"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
---

## What's changing

A new environment-level setting, **Sharing agents with embedded maker credentials**, lets Copilot Studio evaluate the connections an agent uses before it is shared or published. An agent is treated as unsafe when it uses at least one connection that does not allow credential sharing *and* that connection was authenticated with credentials supplied at design time (the maker's) rather than asking each user to sign in.

The setting has two modes. **All sharing allowed** detects unsafe agents and tells makers about the risk in the agent status pane and on the affected tools, but does not block anything. **Safe sharing enforced** blocks new sharing with viewers or end users, blocks sharing with everyone in the organisation, and disables **Publish** when publishing would expose an already-shared agent that still carries unsafe maker credentials. For channels where publishing is the distribution step (there is no separate Share action), enforcement happens at publish.

Copilot Studio can also follow dependencies: an agent that calls a flow or another agent using a non-shareable connection can be marked unsafe as dependency-based enforcement expands. Enforcement does not retroactively unshare or disable agents, and it does not stop an agent while it is running.

The control is documented for individual environments and, through the **Security** > **Threat detection** area of the Power Platform admin center, for environment groups. Public preview is listed for July 2026 with General Availability targeted for September 2026.

## Why it matters

The companion control ([block maker-provided credentials](/features/copilot-studio-block-maker-provided-credentials/)) stops makers choosing their own credentials in the first place, but it changes behaviour instantly for every agent in the environment. This feature is the gentler, preventive version: it catches the unsafe agents at the moment they would start leaking privilege (sharing) and gives you a detect-only mode to measure the problem first.

For a service owner this is the difference between "we have told makers not to do this" and "the platform will not let an overshared agent out of the door". It also produces a list of the agents and flows that need re-authoring, which is the input for the stricter control.

## Risk assessment

**Data exposure**
- Unsafe agents let every recipient act with the maker's access in the connected system. Enforcement closes the sharing path; detection mode only reports it.
- Existing shares stay in place when enforcement is enabled, so the backlog of already-shared unsafe agents remains until makers fix them.

**Security & identity**
- Agents using an approved system identity (service principal, API key, managed identity) can still be published when the connection supports it, so the control pushes makers toward proper service identities rather than blocking integration outright.
- Review which admins can change the mode: it is an environment setting, so Environment Admins can relax it unless the environment is in a managed group with the rule published.

**Autonomy & actions**
- Autonomous agents that call "workflow as a tool" only accept end-user credentials in the run-only sharing model; this control reinforces that boundary.

**Change & support**
- In enforced mode makers will hit blocked Publish buttons with a "sharing policy violation" message. Without maker guidance pointing to the fix, this becomes a help desk queue.
- Dependency-based enforcement expanding over time means an agent that published last month can be blocked on its next publish.

## Cost and licensing

- No licence for the setting. Environment-group rules need **Managed Environments**.
- Indirect: maker time to move actions to end-user authentication or to approved service identities; admin time to review the detection findings.
- No Copilot Credit impact.

## Scope

- Copilot Studio agents and the flows and agents they depend on, per environment or environment group.
- Applies to connections that use maker-provided credentials; connections already configured for end-user credentials are not affected.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: permission to manage environment settings (Environment Admin) for a single environment; tenant admin with group access for environment groups.

## Governance guidance

**Before rollout**
- Turn on **All sharing allowed** in development and validation environments to collect findings without blocking anyone.
- Build the list of agents and flows that rely on maker-owned connections, service principals, API keys or managed identities, and classify which are legitimate service identities and which are personal credentials.
- Write maker guidance that explains the two acceptable patterns (end-user authentication; approved system identity) and where to request the latter.

**At rollout**
- Switch production environments to **Safe sharing enforced** once high-priority agents are clean.
- Publish the setting as an environment-group rule so new environments inherit it.
- Test both explicit sharing and publish-based channels (Teams, Microsoft 365, SharePoint, web) with a representative agent before announcing.

**After rollout**
- Monitor blocked share and publish attempts; recurring connectors in the findings indicate where an approved service identity pattern is missing.
- Combine with the credential-choice control to prevent new unsafe agents being created at all.
- Re-run the review when Microsoft expands dependency-based enforcement.

## Admin controls

- Power Platform admin center > **Manage** > **Environments** > select environment > **Settings** > **Features** > **Sharing agents with embedded maker credentials**: All sharing allowed or Safe sharing enforced.
- Power Platform admin center > **Security** > **Threat detection** > **Sharing agent with embedded maker credentials** > choose environment groups or environments > **Set up** > "Don't let makers share agents with their own credentials embedded (recommended)".
- Copilot Studio > agent > **Agent status**: shows connection-sharing violations as warnings (unshared agents) or critical errors (already shared agents); tools are marked **Blocked** with a sharing policy violation message.

## Open questions

- The exact list of connectors whose connections "don't allow credential sharing" is defined by the connector, not published as a single list.
- How enforcement treats agents published to the Microsoft 365 Copilot channel through the organisational catalogue approval flow.
- Whether findings will be exportable or surfaced in Agent 365 inventory views for tenant-wide reporting.

<!-- rationale
risk: Medium. The feature reduces risk; the residual risk is in the default (detect-only) mode and the backlog of already shared agents it does not touch.
cost: None. Environment setting; Managed Environments for group scale.
impact: Medium. Makers see blocked publish and share actions; end users are unaffected.
-->
