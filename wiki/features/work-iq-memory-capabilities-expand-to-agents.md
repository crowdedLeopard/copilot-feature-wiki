---
title: "Work IQ: memory profile path in Work IQ MCP for agents"
slug: "work-iq-memory-capabilities-expand-to-agents"
roadmapId: 578869
desk: "agents"
products: ["Work IQ"]
summary: "A new Work IQ MCP path gives authorised agents access to a user's memory profile, including custom instructions, saved memories and chat-derived memories."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","memory","mcp","personalisation","privacy"]
sources:
  - title: "Microsoft 365 Roadmap item 578869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578869"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
videos: []
related: ["teams-ai-generated-meeting-memory","agent-identity","agent-365-control-plane-for-agents"]
confidence: "low"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578869."
version: 1
---

## What's changing

A new Work IQ MCP path, /memory/me/coreMemories, gives authorised agents access to a user's memory profile so that they can offer more personalised and relevant help. At launch the profile includes Custom Instructions, Saved Memories, relevant work account data and memories derived from chat history.

Microsoft says the profile will keep evolving. The roadmap target is December 2026, Worldwide only, status In development.

No Learn page covering this path was found at the time of review.

## Why it matters

Memory profiles can contain personal preferences and inferred information from chat. Allowing agents to read them raises questions on consent, retention, data subject requests and which agents count as authorised.

## Risk assessment

**Data exposure**
- Memories derived from chat history and work data may include sensitive inferences.

**Security & identity**
- Work IQ requires delegated Entra authentication; which consent grants this path is unpublished.

**Autonomy & actions**
- Agents may use memory to shape actions without the user noticing.

**Change & support**
- The profile contents will evolve, so assessments need repeating.

## Cost and licensing

Not yet published. Learn notes Work IQ retrieve needs Copilot Credits billing; whether the memory path follows it is unknown.

## Scope

Authorised agents acting for a user, Worldwide (Standard Multi-Tenant) per the roadmap.

## Governance guidance

### Before rollout
- Review privacy and works council requirements for memory use.
- Identify agents likely to request the memory path.

### At rollout
- Restrict consent to approved agents.
- Tell users what memory agents can read.

### After rollout
- Review audit records of memory access.
- Reassess when the profile content changes.

## Admin controls

No memory-specific admin control is published. Existing Work IQ controls include delegated consent and spending policies.

## Open questions

- How admins and users can disable agent access to memory.
- Retention and eDiscovery treatment.
- Which consent scopes grant the path.

<!-- rationale
risk: High. Exposes personal memory derived from chat history and work account data to agents, with controls not yet published.
cost: Variable. Work IQ API use can require Copilot Credits billing; memory-specific metering is not yet published.
impact: Medium. Affects users whose memory is read by agents and admins who authorise agents.
-->
