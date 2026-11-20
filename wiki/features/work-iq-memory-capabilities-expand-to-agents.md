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
  model: "consumption"
  notes: "Work IQ API uses usage-based billing measured in Copilot Credits; a rate specific to the memory path is not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","memory","mcp","personalisation","privacy"]
sources:
  - title: "Microsoft 365 Roadmap item 578869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578869"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting (Microsoft Graph beta)"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Memory (Microsoft Copilot) (rolling out for general availability; preview in some regions)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview"
    kind: "learn"
  - title: "Memory management and privacy"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy"
    kind: "learn"
  - title: "Enhanced personalization control overview"
    url: "https://learn.microsoft.com/graph/control-enhanced-personalization-privacy"
    kind: "learn"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Use the retrieve tool in Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
videos: []
related: ["work-iq-a2a-and-mcp-long-running-tasks"]
controls:
  - governs: "Enhanced personalization (Copilot memory) for the tenant"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "On by default; preview, subject to change; not the default of the new path. Beta API; PeopleSettings.ReadWrite.All; delegated use needs the People Administrator role. The request body sets isEnabledInOrganization to false to disable it."
  - governs: "Memory on or off for a Microsoft Copilot harness agent (rolling out for general availability; preview in some regions)"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > Build > components panel > Memory toggle"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy"
    api: null
    note: "Memories are deleted after 28 days of inactivity, measured from the last time the agent used a user's memories; viewing them in the portal does not reset the period. Turning Memory off does not delete stored memories right away."
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
confidence: "low"
created: "2026-11-14"
updated: "2026-11-20"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 578869."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: narrowed the cloud wording, Graph call, agent memory path and retention, eDiscovery and audit statements; cost lowered to low."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Correction: Work IQ API Copilot Credits billing now stated (cost variable, licensing consumption); removed the claim that no control over the memory path is documented."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 58 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: agent Memory path and retention now cite the memory management and privacy page, rollout wording updated, and the Graph call printed without its body."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 58 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-20"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 58
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "de88c2c186e9e6321ca54f870681ef65"
---

## What's changing

A new Work IQ MCP path, /memory/me/coreMemories, gives authorised agents access to a user's memory profile so that they can offer more personalised and relevant help. At launch the profile includes Custom Instructions, Saved Memories, relevant work account data and memories derived from chat history.

Microsoft says the profile will keep evolving. The roadmap target is December 2026, the roadmap lists Worldwide (Standard Multi-Tenant), and the status is In development.

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

Work IQ API uses usage-based billing measured in Copilot Credits; a rate specific to the memory path is not yet published. Learn's page for the Work IQ MCP `retrieve` tool (public preview) lists usage-based billing for Copilot Credits, with calling users assigned to a spending policy that includes Work IQ API, as a prerequisite for that tool. Plan for Copilot Credits consumption as well as staff time for privacy review and user communications.

## Scope

Authorised agents acting for a user, Worldwide (Standard Multi-Tenant) per the roadmap.

## Governance guidance

### Before rollout
- Review privacy and works council requirements for memory use.
- Identify agents likely to request the memory path.

### At rollout
- Establish how consent for the memory path will be granted once Microsoft documents it, before approving agents to use it.
- Tell users what memory agents can read.

### After rollout
- Confirm whether memory-path access produces administrator-accessible audit records before relying on audit review; Learn states that Copilot memory and personalization actions don't generate Purview audit entries.
- Reassess when the profile content changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Enhanced personalization (Copilot memory) for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">On by default; preview, subject to change; not the default of the new path. Beta API; PeopleSettings.ReadWrite.All; delegated use needs the People Administrator role. The request body sets isEnabledInOrganization to false to disable it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Memory on or off for a Microsoft Copilot harness agent (rolling out for general availability; preview in some regions)</strong><br><small>Agent</small><br><small class="controls__note">Memories are deleted after 28 days of inactivity, measured from the last time the agent used a user's memories; viewing them in the portal does not reset the period. Turning Memory off does not delete stored memories right away.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › Build › components panel › Memory toggle <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-manage-privacy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Copilot memory control is a Graph setting with no admin centre page documented, and Learn's [personalization and memory guide](https://learn.microsoft.com/copilot/manage/copilot-personalization-memory) notes that retention policies do not apply to memory and that admins cannot restrict what is remembered. Saved memories and inferred chat-history memories are discoverable using eDiscovery and Microsoft Graph Explorer; custom instructions are not. Admin deletion uses Microsoft Graph Explorer in combination with Purview. Whether these apply to the new memory path is not yet confirmed. Agent memory in Copilot Studio is governed by the maker. How the memory profile path interacts with either control is not yet documented.

## Open questions

- How admins and users can disable agent access to memory.
- Retention and eDiscovery treatment.
- Which consent scopes grant the path.

<!-- rationale
risk: High. Exposes personal memory derived from chat history and work account data to agents, with no memory-specific switch documented.
cost: Variable. Work IQ API uses Copilot Credits consumption billing; a rate specific to the memory path is not yet published.
impact: Medium. Affects users whose memory is read by agents and admins who authorise agents.
-->
