---
title: "Copilot Studio: block maker-provided credentials for tool authentication"
slug: "copilot-studio-block-maker-provided-credentials"
roadmapId: 566997
desk: "agents"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Admins can stop makers choosing their own credentials when they connect tools to agents, forcing end-user authentication so an agent never acts with more access than the person using it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: "September CY2025"
risk: "high"
cost: "none"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Environment-level setting. Environment-group configuration needs Managed Environments and a tenant admin role. No additional licence for the control."
audiences: ["power-platform-admin","security","service-owner","maker"]
tags: ["copilot-studio","maker-credentials","end-user-authentication","connectors","oversharing","managed-environments","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 566997"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566997"
    kind: "roadmap"
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Automatic security scan in Copilot Studio"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/security-scan"
    kind: "learn"
  - title: "Secure your Copilot Studio projects"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/sec-gov-phase3"
    kind: "learn"
videos: []
related: ["copilot-studio-safe-sharing-credential-oversharing","copilot-studio-share-autonomous-agents-run-only","copilot-studio-mcp-tools-in-agents","agent-identity"]
confidence: "high"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-07-02T23:12:48"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
---

## What's changing

When a maker adds a tool to a Copilot Studio agent (a connector, a Power Automate flow, an MCP server), they choose whose credentials the tool runs with. **End-user credentials** prompt each person to sign in at run time. **Maker-provided credentials** store the maker's own connection, so every user of the agent acts with the maker's permissions in the target system.

This feature gives administrators a **Control maker credential options** setting in the Power Platform admin center. It can be set per environment or, with Managed Environments, per environment group. Allowed values are end-user credentials, maker-provided credentials, or both. The default is both.

When an administrator removes the maker-provided option, the change applies immediately to every existing and new agent in the environment: all tools switch to require end-user credentials at run time, and makers lose the option in the Copilot Studio authoring UI. Microsoft's own warning in the documentation is blunt: prepare makers and users first, because the next conversation with an affected agent will ask the user to sign in to the connected service.

The roadmap item shows public preview in September 2025 and a General Availability target of August 2026; the admin center setting is documented and working today, while the roadmap status still reads "In development".

## Why it matters

Maker-provided credentials are the most common way an agent leaks privilege. A maker with write access to a finance SharePoint site builds a helpful agent, shares it with the department, and every user can now read (or through a flow, change) what only the maker was entitled to. Copilot Studio's automatic security scan warns makers about this at publish time, but a warning is not a control.

This setting is the control. It is also one of the few agent governance switches that changes behaviour the moment it is saved, so it needs a communications plan rather than a quiet toggle. Pair it with the companion feature that blocks *sharing* of agents that still rely on maker connections.

## Risk assessment

**Data exposure**
- Ungoverned, agents can expose any data the maker's account can reach, across connectors, to anyone the agent is shared with. This is the primary risk the feature removes.
- Governed, each user sees only what their own account allows, which also makes Purview audit records attributable to the right person.

**Security & identity**
- Enforcing end-user credentials means stored maker connections are no longer used at run time; fewer long-lived connections exist to be abused.
- Agents that legitimately need a service identity (for example a ticketing integration) should move to a service principal, API key or managed identity connection rather than a person's account.

**Autonomy & actions**
- Autonomous (trigger-based) agents cannot prompt a user to sign in. Blocking maker credentials in an environment that hosts autonomous agents will break them unless they use system identities or the run-only sharing model where each user supplies connections.

**Change & support**
- Immediate effect across all agents in scope. Expect a spike in "my agent asks me to sign in" tickets on day one.
- Flows called from agents that use maker-only credentials will fail until reconfigured.

## Cost and licensing

- No licence cost for the setting itself. It is a Power Platform admin center environment feature.
- Configuring at environment-group scale requires **Managed Environments**, which in turn needs standalone Power Platform or Copilot Studio licences for the users of those environments.
- Indirect cost: maker time to re-author connections, and help desk time during the switch.

## Scope

- All Copilot Studio agents in the selected environment or environment group, existing and new.
- Worldwide (standard multi-tenant). No government cloud dates published.
- Roles: Environment Admin for a single environment; Power Platform Administrator or Global Administrator for environment groups. Environments inside a group inherit the group setting and cannot be configured individually.
- Affects connectors, flows and MCP tools that offer a credential choice. Knowledge sources follow their own authentication model.

## Governance guidance

**Before rollout**
- Inventory agents per environment and identify tools configured with maker-provided credentials (Copilot Studio agent status and the security scan surface this).
- Decide the environment classes where only end-user credentials are allowed (recommend: all production and any environment with agents shared beyond the maker).
- Provide an approved pattern for service identities so makers have somewhere to go when a tool genuinely needs non-user credentials.
- Draft the user-facing notice: "agents will ask you to sign in to connected services from <date>".

**At rollout**
- Apply the setting at environment-group level so new environments inherit it.
- Enforce in development environments first, then production, allowing a week between for makers to reconfigure flows.
- Publish the change to makers through maker guidelines or welcome content in the Power Platform admin center.

**After rollout**
- Monitor agent failure rates and help desk volume for two weeks.
- Add "credential model" to the agent review checklist so new agents are built end-user-first.
- Review environments that were exempted and set a date to re-assess.

## Admin controls

- Power Platform admin center > **Manage** > **Environments** (or **Environment groups**) > select > **Settings** > **Product** > **Features** > **Copilot Studio agents** > **Control maker credential options**: tick End-user credentials, Maker-provided credentials, or both.
- Copilot Studio > agent > **Settings** > **Security** > automatic security scan shows warnings when makers pick maker-provided credentials or share with everyone.
- Related: Power Platform admin center > **Security** > **Threat detection** > **Sharing agent with embedded maker credentials** (see the safe-sharing briefing).

## Open questions

- The roadmap status has not moved to Launched even though the control is documented; confirm in Message center whether the GA announcement includes government clouds.
- Whether the setting will gain a report-only mode (log violations without enforcing) is not stated.
- Behaviour for tools added through connected MCP servers that embed their own OAuth app is described only indirectly.

<!-- rationale
risk: High. Left in the default state, agents can act with maker privileges for every user, which is the clearest oversharing path in the platform. The control removes it but changes behaviour instantly.
cost: None. Environment setting; Managed Environments only needed for group scale.
impact: Medium. Makers and users of affected agents notice sign-in prompts; most end users of Copilot do not.
-->
