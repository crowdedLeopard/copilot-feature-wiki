---
title: "Work IQ: business skills for agents through Work IQ MCP"
slug: "work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp"
roadmapId: 573290
desk: "agents"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Dataverse","Work IQ"]
summary: "Business skills are natural-language process instructions stored in Dataverse that agents discover through Work IQ MCP to follow organisational processes."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Preview. Skills are stored in Dataverse; underlying services may still incur fees during preview."
audiences: ["power-platform-admin","service-owner","maker","security"]
tags: ["work-iq","mcp","business-skills","dataverse","agents"]
sources:
  - title: "Microsoft 365 Roadmap item 573290"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573290"
    kind: "roadmap"
  - title: "Business skills overview (preview)"
    url: "https://learn.microsoft.com/en-us/power-apps/maker/data-platform/data-platform-business-skill-overview"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","agent-identity","copilot-credits","agent-365-control-plane-for-agents"]
confidence: "high"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-11T00:53:34"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 573290."
version: 1
---

## What's changing

Business skills are natural-language instructions that capture how an organisation gets work done, covering steps, required information and business rules. Agents discover the skills they can access at runtime through Work IQ MCP and follow them, so several agents use the same process.

Per Microsoft Learn, skills have frontmatter (name, description, metadata), instructions and attached resource files. Agents query the frontmatter to find relevant skills and retrieve the full instructions only when needed. Skills are not executable code.

The roadmap target is November 2026, status In development; the Learn page is marked preview.

## Why it matters

Skills become a governed layer that shapes agent behaviour. A Power Platform admin must turn on Work IQ in a Dataverse environment, and skill selection is probabilistic, so testing matters before broad sharing.

## Risk assessment

**Data exposure**
- Resource files and instructions may contain policy or process detail; sharing settings control who can read them.

**Security & identity**
- Access follows Dataverse security roles, ownership and sharing. Users need the Skill Sharing Role as well as the selected role.

**Autonomy & actions**
- Skills guide what agents do with their connected tools, so they influence actions.

**Change & support**
- Editing one skill changes behaviour across all agents that use it.

## Cost and licensing

Learn says consumption-based services may continue to incur licence fees during preview. Work IQ API access elsewhere requires Copilot Credits billing. Specific pricing for business skills is not yet published.

## Scope

Dataverse environments where a Power Platform admin has turned on Work IQ. Used in Copilot, Work IQ connected agents and agents connected to the Dataverse MCP server. Cloud availability is not stated.

## Governance guidance

### Before rollout
- Decide which environments take part in Work IQ.
- Assign skill authoring to approved makers only.

### At rollout
- Write descriptions that state what a skill does and when to use it.
- Test representative requests before sharing widely.

### After rollout
- Review skill ownership and sharing regularly.
- Track agent outcomes against the intended process.

## Admin controls

A Power Platform administrator turns on Work IQ per Dataverse environment, in the Business Applications in Work IQ participation settings. Access is managed with ownership, sharing and Dataverse security roles including the Skill Sharing Role.

## Open questions

- Pricing and metering at general availability.
- Audit coverage of skill creation and use.
- Cloud support beyond the commercial cloud.

<!-- rationale
risk: Medium. Skills steer agent behaviour across surfaces, so a wrong or over-shared skill changes how agents act on business processes.
cost: Variable. Agent use may consume Copilot Credits or other metered usage; Learn notes preview usage of underlying services may incur fees.
impact: Medium. Affects makers, process owners and users of agents that discover skills.
-->
