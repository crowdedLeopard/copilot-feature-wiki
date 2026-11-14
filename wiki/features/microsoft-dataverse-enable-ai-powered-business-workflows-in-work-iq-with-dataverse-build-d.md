---
title: "Dataverse: build solutions with coding agents using the Dataverse plugin and Work IQ"
slug: "microsoft-dataverse-enable-ai-powered-business-workflows-in-work-iq-with-dataverse-build-d"
roadmapId: 577815
desk: "power-platform"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse"]
summary: "Coding agents will build Dataverse tables, relationships, sample data and solutions from natural-language prompts, using the Dataverse plugin and MCP."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: "June CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Preview documentation lists no separate charge. Work IQ licensing requirements are referenced in Learn."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["dataverse","coding-agents","dataverse-mcp","work-iq","power-platform-cli","business-skills","solutions"]
sources:
  - title: "Microsoft 365 Roadmap item 577815"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577815"
    kind: "roadmap"
  - title: "Create and use business skills (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-business-skills"
    kind: "learn"
  - title: "Microsoft Dataverse plugin for AI agents (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/agents-plugin/"
    kind: "learn"
videos: []
related: ["work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp","dataverse-agent-users-entra-agent-identity","agent-identity","managed-environments"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-22T23:45:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577815 with Learn plugin and business skills guidance."
version: 1
---

## What's changing

Dataverse is adding support for building solutions with coding agents. In the roadmap example, one prompt describes a recruiting system, and the agent discovers the environment, configures MCP, creates a solution with the Power Platform CLI, builds tables with lookups and a many-to-many relationship, runs a Python script to load sample data and queries across tables.

Learn describes the Microsoft Dataverse plugin for AI agents (preview), with skills for connecting, querying, data, metadata, solutions, security and admin tasks. Separately, business skills (preview) are stored in Dataverse and used through Business Applications in Work IQ.

The roadmap lists preview from June CY2026 and general availability in February CY2027, Worldwide only.

## Why it matters

Agents can now make structural and security changes in an environment with little friction. Environment strategy, roles and approvals become the main controls.

Business skills also let organisations define processes that several agents follow, so quality control of those instructions matters.

## Risk assessment

**Data exposure**
- Agents query and bulk-load records. Learn says Dataverse enforces security on every request.

**Security & identity**
- Interactive sign-in limits the agent to the user's permissions; service principal use needs tight scoping. The plugin includes a skill to assign security roles.

**Autonomy & actions**
- Agents create and change tables, run scripts and package solutions. Learn says the agent confirms the target environment and previews stateful actions.

**Change & support**
- Schema created outside the maker UI may lack naming standards, so enforce solution and ALM practices.

## Cost and licensing

No separate charge is published in the preview documentation. Capacity use from sample data and the cost of the coding agent are indirect. Work IQ and connected agent licensing is described in Learn; check it before broad use.

## Scope

Developers and makers with Dataverse environments, using coding agents such as GitHub Copilot CLI. Business skills need Work IQ turned on for the environment. Roadmap cloud: Worldwide only.

## Governance guidance

### Before rollout
- [ ] Decide which environments allow coding agents and which do not.
- [ ] Review Dataverse MCP client access settings.
- [ ] Set naming and publisher standards for agent-created solutions.

### At rollout
- [ ] Start in developer environments with interactive sign-in.
- [ ] Keep production access out of scope for agents.

### After rollout
- [ ] Review created tables, roles and solutions.
- [ ] Audit use of business skills and who owns them.

## Admin controls

Power Platform admin center > environment Settings > Product > Features: Business Applications in Work IQ, and Dataverse Model Context Protocol, including Allowed MCP Clients under Advanced Settings. Business skills use Dataverse roles, including the Skill Sharing Role. The plugin is covered by Security and governance documentation.

## Open questions

- What will remain in preview at general availability?
- How will agent actions be audited in Dataverse?
- What licensing applies to Work IQ use of business skills?

<!-- rationale
risk: High. Autonomous agents can create schema, load data and change security in a live environment, acting with the developer's permissions.
cost: Low. No Dataverse charge is published; capacity use from sample data and coding agent subscriptions are indirect costs.
impact: Medium. It affects developers and makers building Dataverse solutions, and the environments they use.
-->
