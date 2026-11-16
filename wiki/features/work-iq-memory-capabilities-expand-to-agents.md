---
title: "Work IQ: memory profile path in Work IQ MCP for agents"
slug: "work-iq-memory-capabilities-expand-to-agents"
roadmapId: 578869
topic: "copilot-studio"
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
  - title: "Enhanced personalization (Copilot memory) for the tenant (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/resources/enhancedpersonalizationsetting"
    kind: "learn"
  - title: "Memory on or off for a Copilot Studio agent (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview#turn-memory-on-or-off"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
videos: []
related: ["teams-ai-generated-meeting-memory","agent-identity","agent-365-control-plane-for-agents"]
controls:
  - governs: "Enhanced personalization (Copilot memory) for the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "enhancedPersonalizationSetting resource (Microsoft Graph)"
      docs: "https://learn.microsoft.com/graph/api/resources/enhancedpersonalizationsetting"
    note: "On by default. Turning it off disables saved memories, chat-history details and custom instructions for users."
  - governs: "Memory on or off for a Copilot Studio agent"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Build > Memory toggle"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview#turn-memory-on-or-off"
    api: null
    note: "Maker-side. Memories are deleted after 28 days without interaction; turning memory off does not delete them."
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
  - governs: "Control over the memory profile path in Work IQ MCP"
    scope: "tenant"
    ui: null
    api: null
confidence: "low"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578869."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enhanced personalization (Copilot memory) for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">On by default. Turning it off disables saved memories, chat-history details and custom instructions for users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>enhancedPersonalizationSetting resource (Microsoft Graph)</code> <a href="https://learn.microsoft.com/graph/api/resources/enhancedpersonalizationsetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Memory on or off for a Copilot Studio agent</strong><br><small>Agent</small><br><small class="controls__note">Maker-side. Memories are deleted after 28 days without interaction; turning memory off does not delete them.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Build › Memory toggle <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview#turn-memory-on-or-off" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Control over the memory profile path in Work IQ MCP</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Copilot memory control is a Graph setting with no admin centre page documented, and Learn's [personalization and memory guide](https://learn.microsoft.com/copilot/manage/copilot-personalization-memory) notes that retention policies do not apply to memory and that admins cannot restrict what is remembered; eDiscovery can find and delete it. Agent memory in Copilot Studio is governed by the maker. How the memory profile path interacts with either control is not yet documented.

## Open questions

- How admins and users can disable agent access to memory.
- Retention and eDiscovery treatment.
- Which consent scopes grant the path.

<!-- rationale
risk: High. Exposes personal memory derived from chat history and work account data to agents, with controls not yet published.
cost: Variable. Work IQ API use can require Copilot Credits billing; memory-specific metering is not yet published.
impact: Medium. Affects users whose memory is read by agents and admins who authorise agents.
-->
