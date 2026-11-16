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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 35
  unconfirmed: 3
  contradicted: 6
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] What's changing / availability: The feature is Worldwide only. | Found: Searched: "Work IQ" "coreMemories" GCC sovereign Worldwide availability. Read the roadmap cloud list and Learn results on Work IQ and Business Applications defaults; none states memory-path exclusions. | Fix: Replace 'Worldwide only' with 'the roadmap lists Worldwide (Standard Multi-Tenant)'; do not infer other clouds are excluded.
- [supported, minor] Cost and licensing / cost: Work IQ retrieve requires Copilot Credits billing. | Found: Set up usage-based billing for Copilot Credits and assign the calling users to a spending policy that includes Work IQ API. | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve and identify retrieve as public preview; retain the distinction from the undocumented memory path. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/retrieve
- [unsupported, blocker] controls[0].api / command: enhancedPersonalizationSetting resource (Microsoft Graph) is the automation call for the tenant control. | Found: Searched: enhancedPersonalizationSetting via the cited resource's Update link. Opened resource and Update references; they document a resource type and a PATCH request, not the printed string as a callable request. | Fix: Replace the resource-name placeholder with 'PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization' and the required body property isEnabledInOrganization (false to disable). Cite https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta; flag beta, PeopleSettings.ReadWrite.All and the People Administrator requirement for delegated access.
- [supported, minor] controls[0].note / default: Enhanced personalization is on by default. | Found: By default, Enhanced personalization is turned on. | Fix: Identify Copilot personalization and memory as preview, subject to change, in the control note or adjacent prose. Keep its default separate from the unknown default of the new memory path. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [contradicted, blocker] controls[1].ui / admin-path: The maker path for agent memory is Build > Memory toggle. | Found: 1. Create or open the agent in Copilot Studio.
2. Select the Build tab.
3. In the components panel, use the Memory toggle to turn the feature on or off. | Fix: Use 'agent > Build > components panel > Memory toggle' in the front matter and rendered table. The current path omits the intervening components panel; also identify this as the Microsoft Copilot harness preview. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview
- [contradicted, blocker] controls[1].note / behaviour: Memories for a Copilot Studio agent are deleted after 28 days without interaction. | Found: Customer Conversation harness memory captures structured context through a defined schema of built-in and custom parameters, and covers short-term conversation context only, with a retention period of 30 days. | Fix: Restrict the row to 'Memory on or off for a Copilot Studio agent using the Microsoft Copilot harness (preview)'. State 'If a user does not interact with that agent for 28 days, their memories from that agent are deleted.' The cited memory-overview supports that narrower claim; other harnesses have different retention. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview-customer-conversation
- [contradicted, blocker] Governance controls prose / applicability: eDiscovery can find and delete Copilot memory without qualification. | Found: Custom instructions aren't yet discoverable in these solutions. An admin can also delete memory data through Microsoft Graph Explorer in combination with Purview. | Fix: Replace 'eDiscovery can find and delete it' with 'Saved memories and inferred chat-history memories are discoverable using eDiscovery and Microsoft Graph Explorer; custom instructions are not. Admin deletion uses Microsoft Graph Explorer in combination with Purview.' Keep applicability to the new memory path explicitly unconfirmed. | Source: https://learn.microsoft.com/copilot/manage/copilot-personalization-memory
- [unsupported, blocker] Governance guidance: After rollout / applicability: Administrators can review audit records of memory access. | Found: Searched: "Work IQ" "memory" "audit" "coreMemories"; "Work IQ" memory access audit logs Purview. Read Work IQ logging excerpts and opened Manage Copilot personalization and memory; no reviewable memory-path audit event or location is documented. | Fix: Replace the instruction with 'Confirm whether memory-path access produces administrator-accessible audit records before relying on audit review.' Add that Copilot memory and personalization actions do not generate Purview audit entries, per https://learn.microsoft.com/copilot/manage/copilot-personalization-memory, while Work IQ documents general tool-invocation logging but no memory-specific audit workflow.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The feature has variable cost even though its metering is unknown. | Found: cost: "variable"; 'whether the memory path follows it is unknown'; 'memory-specific metering is not yet published.' | Fix: Set cost to 'low' for the currently established review and communication effort, and change the rationale to 'Low. Privacy review and user communications require staff time; memory-path licensing and metering are not yet published.' Keep general Work IQ Copilot Credits billing as background, not proof of this path's meter.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist recommends restricting consent to approved agents but has no corresponding control row. | Found: 'Restrict consent to approved agents.' The table contains Enhanced personalization, agent Memory, tenant Work IQ MCP policy and the undocumented memory-path control, but no consent control. | Fix: Add a row for application consent to Work IQ, clearly distinguished from unconfirmed memory-path scopes. Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/permissions for the broad delegated permissions and admin-consent requirement; research exact UI and automation before populating those sides. Alternatively make the checklist a request to establish the future consent model, rather than an instruction to set it.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist recommends memory-access audit review but the controls table has no audit row. | Found: 'Review audit records of memory access.' No audit or monitoring control appears in the controls table. | Fix: After removing the unsupported audit-review instruction, add an explicitly undocumented memory-access audit surface row if the checklist still asks administrators to establish monitoring. Do not populate it with generic Purview controls as though they document memory-path events.
-->
