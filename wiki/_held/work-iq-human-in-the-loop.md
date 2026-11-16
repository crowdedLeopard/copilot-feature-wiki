---
title: "Work IQ: human in the loop for agents and agent flows"
slug: "work-iq-human-in-the-loop"
roadmapId: 570672
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Agents and agent flows will be able to pause for human input or approval before continuing, using Work IQ. Roadmap text is the only published detail so far."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "none"
licensing:
  model: "unknown"
  notes: "Not published. Work IQ in Copilot Studio is stated to use consumption billing."
audiences: ["service-owner","security","maker","m365-admin"]
tags: ["work-iq","human-in-the-loop","agents","agent-flows","approvals","governance"]
sources:
  - title: "Microsoft 365 Roadmap item 570672"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570672"
    kind: "roadmap"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
  - title: "Whether an agent asks the user before running a tool (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    kind: "learn"
videos: []
related: ["copilot-studio-require-human-approval-for-tool-calls","agent-365-control-plane-for-agents","work-iq-execute-recipes"]
controls:
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
    note: "Mutation operations such as sending mail are disallowed by default until enabled."
  - governs: "Whether an agent asks the user before running a tool"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > tool > Details > Additional details > Ask the end user before running"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    api: null
    note: "Maker-side, per tool."
  - governs: "Human-in-the-loop policy for Work IQ agents and agent flows"
    scope: "tenant"
    ui: null
    api: null
confidence: "low"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ human in the loop, in development; roadmap text only."
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
  claims: 31
  confirmed: 29
  unconfirmed: 1
  contradicted: 1
  attempts: 1
---

## What's changing

The roadmap states: allow agents and agent flows to pause for human input or approval before continuing. No further detail has been published.

The item is listed under Work IQ and Microsoft Copilot (Microsoft 365), for Worldwide, on the web. A preview is shown for November 2026 and general availability is targeted for January 2027.

It is not yet clear whether the pause is configured by makers, enforced by admin policy, or both, nor where approvers respond. Copilot Studio already has a separate capability to require human approval for tool calls.

## Why it matters

Human approval is one of the main controls for agents that act on data or systems. If the pause can be set by policy, it could become a baseline control for risky tools. If it is maker-only, it relies on each maker choosing to use it.

Service owners should plan which actions need approval and who approves, because approver availability affects how quickly agents can complete work.

## Risk assessment

**Data exposure**
- Approval requests may show data to approvers; what is displayed is not yet published.

**Security & identity**
- How approver identity is verified and recorded is not yet published.

**Autonomy & actions**
- Intended to reduce unsupervised actions by letting a run wait for a person.

**Change & support**
- Paused runs can stall if approvers are unavailable; timeouts are not yet described.

## Cost and licensing

Not yet published. Work IQ in Copilot Studio uses consumption billing with Copilot Credits according to Learn; whether pauses or approvals add cost is unknown.

## Scope

Agents and agent flows using Work IQ, Worldwide cloud, web. Sovereign cloud availability is not listed.

## Governance guidance

### Before rollout
- [ ] List agent actions that should need human approval.
- [ ] Identify approvers and a fallback for absences.
- [ ] Review existing approval controls in Copilot Studio.

### At rollout
- [ ] Pilot with low-volume agents first.
- [ ] Communicate to approvers how requests appear.

### After rollout
- [ ] Measure how long runs wait for approval.
- [ ] Review whether approvals are being granted without scrutiny.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Mutation operations such as sending mail are disallowed by default until enabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent asks the user before running a tool</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, per tool.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › tool › Details › Additional details › Ask the end user before running <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Human-in-the-loop policy for Work IQ agents and agent flows</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Nothing specific to this capability is documented. The closest administrative control is the Work IQ MCP policy's default of refusing data-changing operations, which forces a deliberate decision before agents can act. Approval prompts in Copilot Studio are a maker setting and cannot be mandated centrally, as the [human approval briefing](/features/copilot-studio-require-human-approval-for-tool-calls/) explains.

## Open questions

- Can admins require human approval by policy?
- Where do approvers respond, and is there an audit trail?
- What happens on timeout or rejection?
- Does it share a mechanism with Copilot Studio human approval for tool calls?

<!-- rationale
risk: Low. The feature adds a control point for human oversight rather than new autonomy, although details of enforcement are not yet published.
cost: Not yet published. Work IQ in Copilot Studio uses consumption billing with Copilot Credits, so paused runs and approvals may have credit implications.
impact: Medium. It changes how approvers and agent owners interact with agent runs.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[0].note; Governance controls: first row and closing paragraph / default: Work IQ MCP mutation operations, including sending mail, are disallowed by default until administrators enable them. | Found: By default, mutation operations aren't allowed for safety. This restriction includes create, update, delete, and action requests that modify data, such as sending email. | Fix: Attribute this default specifically to the MCP policy governance article and disclose the conflicting cited page: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq says 'Write operations are on by default.' Tell readers to verify their tenant's effective policy rather than treating read-only as a universal default. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [unsupported, blocker] Governance controls: closing paragraph / applicability: Copilot Studio approval prompts cannot be mandated centrally. | Found: Searched: Copilot Studio tool human approval centrally enforce admin policy Ask the end user before running; "Ask the end user before running" API configuration YAML approval admin centrally require. Opened Add tools; its maker setting does not establish that central enforcement is impossible. | Fix: Replace 'cannot be mandated centrally, as the human approval briefing explains' with 'The cited Learn page documents a per-tool maker setting; no central policy requiring that setting was found as of November 2026.' Cite https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent instead of relying on another wiki briefing as evidence.
- [contradicted, minor] front matter: action / consistency: The action rating is none, meaning awareness only with nothing to configure or decide. | Found: action: "none"; Before rollout: "List agent actions that should need human approval" and "Review existing approval controls in Copilot Studio." | Fix: Set action to 'review': this is a new optional control with no documented automatic change to existing behavior, and the briefing asks service owners to assess approval needs.
-->
