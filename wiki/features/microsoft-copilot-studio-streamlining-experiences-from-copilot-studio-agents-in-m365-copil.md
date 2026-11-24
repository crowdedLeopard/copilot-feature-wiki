---
title: "Copilot Studio: agent responses in Microsoft 365 Copilot Chat match Copilot Chat's own"
slug: "microsoft-copilot-studio-streamlining-experiences-from-copilot-studio-agents-in-m365-copil"
roadmapId: 570435
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "Microsoft plans to make Copilot Studio agent replies in Microsoft 365 Copilot look and behave like Copilot Chat replies, with citations and tool traces. Rollout and any admin control are not yet documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for this change. Microsoft Learn states separate billing rules for Copilot Studio agents used in Copilot Chat by Microsoft 365 Copilot licence holders; see Cost and licensing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["copilot-studio","m365-copilot","copilot-chat","agents","user-experience","speech"]
sources:
  - title: "Microsoft 365 Roadmap 570435"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570435"
    kind: "roadmap"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Connect and configure an agent for Teams and Microsoft Copilot"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/publication-add-bot-to-microsoft-teams"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["copilot-credits","m365-copilot-agent-lifecycle-management-rules","m365-copilot-session-and-response-sharing-in-m365-copilot"]
controls:
  - governs: "Tenant switch for the new agent response experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026)."
  - governs: "Whether an agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control: blocks the whole agent, not this change. Graph call is beta and needs a Microsoft Agent 365 licence."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-17"
    note: "New briefing: roadmap-only description of the Copilot Studio agent response experience in Microsoft 365 Copilot; no Learn page, rollout or admin setting yet."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 51 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: reworded the claim that blocking is the only documented control, and removed two review steps that had no controls-table row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0fb5509d27b5fd92387d17719468f716"
---

## What's changing

The roadmap item states that Microsoft plans to bring the experience of using Copilot Studio agents in Microsoft 365 Copilot closer to Copilot Chat itself. Agent responses are meant to look like Copilot Chat responses (similar formatting and a compressed chain of thought), feel like them (smoother streaming, resume and retry, and voice dictation) and behave like them (clickable citations and tool execution traces).

Microsoft Learn does not describe this change yet, so what follows about its behaviour is the roadmap's description. The record gives no preview date, no more-info link and no statement of whether the change is on by default or needs a setting.

The record lists the item as In development, with a target of September CY2026, for Worldwide (Standard Multi-Tenant), on the Web platform, at the General Availability release phase. The record was last modified on 1 September 2026. Treat the target as Microsoft's plan; as of 17 November 2026 the record still shows In development.

## Why it matters

This is a change to how an existing experience looks and behaves for the people who already chat with Copilot Studio agents in Microsoft 365 Copilot, so it is a communication and support matter before it is a configuration one. Users who are used to the current agent replies will see different formatting, streaming and citation behaviour, and helpdesk staff will need to know what a tool execution trace is.

Microsoft has not stated what happens on arrival or whether anyone has to act, so the wiki's view is to prepare rather than wait: plan the communication, and check what tool traces would show to users of the agents you run.

## Risk assessment

**Data exposure**

- The roadmap says agent responses will deliver tool execution traces. Microsoft has not published what a trace contains or who sees it, so confirm with a test agent whether trace content reveals tool names, inputs or data that makers did not intend to show to end users.
- Clickable citations point users to the sources behind an answer. Existing Learn guidance for the Microsoft Copilot channel says Microsoft Copilot might remove embedded URLs for security and that citations from generative answers should include URLs in the citation section, so check how your agents' citations appear.

**Security & identity**

- No change is documented to which identity an agent runs under or which data it can reach; the roadmap describes presentation and interaction behaviour only.

**Autonomy & actions**

- Resume and retry are listed as part of the experience. Microsoft has not said whether a retry re-runs tool actions, so makers of agents with write-capable tools should confirm this before the change arrives.

**Change & support**

- Users will see agent answers formatted and streamed differently, with a compressed chain of thought. Prepare short guidance and update any screenshots or training that show agent replies.
- No tenant switch for this change is documented at the time of writing (November 2026). One documented general control is blocking an agent altogether, which prevents use of the whole agent rather than just changing its presentation.

## Cost and licensing

Licensing for this change is not yet published, and the roadmap record names no licence or meter. Microsoft Learn's licensing page for Copilot Studio agents describes the existing rules that apply to agents used in Copilot Chat.

That page states that a Microsoft 365 Copilot licence lets you use Copilot Studio to build agents for the Microsoft Copilot harness, and that for licence holders, using agents in Copilot Chat, Microsoft Teams or SharePoint for classic answers, generative answers or Microsoft Graph tenant grounding isn't charged when the agent runs with the user's authenticated identity. It adds that this usage can appear as non-billed credits in consumption reports and isn't billed to a pay-as-you-go meter.

The same page says Copilot Credits measure the time and effort an agent needs to retrieve information, respond to prompts and use actions, and that the credits counted per response or action depend on task complexity. Whether the presentation changes alter any credit rate is not yet published. For the shared meter, see [Copilot Credits](/concepts/copilot-credits/). Indirect costs are admin and support time for communication and testing.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform; it lists no other clouds or platforms. That is a record fact, not a statement that the change is unavailable elsewhere.

The audience is people who chat with Copilot Studio agents in Microsoft 365 Copilot, and the makers and admins responsible for those agents. Microsoft Learn's page on making an agent available in Teams and Microsoft Copilot lists, among its prerequisites, that all agent users in the organisation can use Microsoft Copilot and that the agent is shared with the users who need it. Rollout mechanics, prerequisites specific to this change and any role needed to configure it are not yet published.

## Governance guidance

### Before rollout

- Inventory the Copilot Studio agents that users reach in Microsoft 365 Copilot, using Agents > All agents in the Microsoft 365 admin center, and note which have tools that act on data.
- Ask makers to test each agent for what citations and tool traces would reveal once the change arrives, and to remove content that should not be visible to end users.
- Draft a short user note on the new look, streaming, resume and retry, and voice dictation, and brief the service desk.

### At rollout

- Watch Message center and the roadmap item for a post that sets a rollout window, default state or admin action; none is attached to the item at the time of writing.
- Pilot with a small group of users of one agent before wider communication.
- Use the block control for an individual agent only if a test shows content that must not be exposed; it removes the agent, not just the new presentation.

### After rollout

- Collect user and helpdesk reports on citations that do not open, retries that repeat actions and streaming problems.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant switch for the new agent response experience</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">General control: blocks the whole agent, not this change. Graph call is beta and needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting for this change is documented in the Microsoft 365 admin center or by an API at the time of writing (November 2026), so the first row records that gap. The block control applies to a whole agent: Microsoft Learn says blocking an agent built with Copilot Studio affects its availability and functionality in Microsoft Copilot and in other host products such as Outlook and Teams.

The Graph block call is in beta, which Microsoft says is subject to change, and the page says access to the Package Management API requires a Microsoft Agent 365 licence. Its delegated permission is CopilotPackages.ReadWrite.All.

## Open questions

- Is the change on by default, and is there a tenant or agent-level setting to turn off tool execution traces or the compressed chain of thought? Watch the roadmap item and Message center.
- What do tool execution traces show, and to whom? Watch the Copilot Studio documentation for the Microsoft 365 Copilot channel.
- Do resume and retry re-run an agent's tool actions, and does either affect Copilot Credits? Watch the Copilot Studio billing and licensing page.
- Which agents are covered at launch, and does the change apply to agents built on every harness? Watch the roadmap item, as the target of September CY2026 has passed with the status still In development.

<!-- rationale
risk: Medium. The roadmap says agent replies will show tool execution traces and a compressed chain of thought; Microsoft has not published what those display or whether an admin can limit them.
cost: Low. The only cost the sources show is admin and communication time; licensing for this change is not yet published, and existing Copilot Studio billing rules are described under Cost and licensing.
impact: Medium. People who use Copilot Studio agents inside Microsoft 365 Copilot would notice new formatting, streaming and citations, and makers and support teams would see changed behaviour.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown, although the notes and body give existing Copilot Studio agent billing rules. | Found: Copilot Credits are the common currency across Copilot Studio capabilities. You can get them through pay-as-you-go meters, prepurchase plans, and Copilot Credit prepaid pack subscriptions. | Fix: Set licensing.model to "mixed". Replace licensing.notes with: "Existing Copilot Studio agent licensing includes qualifying authenticated Microsoft 365 Copilot licence-holder usage; other agent usage can consume Copilot Credits. No licensing change specific to this response redesign is published. See Cost and licensing and https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing." | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
-->
