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
action: "review"
licensing:
  model: "consumption"
  notes: "Work IQ uses consumption billing with Copilot Credits; any additional charge specific to pauses or approvals is not yet published."
audiences: ["service-owner","security","maker","m365-admin"]
tags: ["work-iq","human-in-the-loop","agents","agent-flows","approvals","governance"]
sources:
  - title: "Microsoft 365 Roadmap item 570672"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570672"
    kind: "roadmap"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Add tools to custom agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    kind: "learn"
  - title: "Work IQ MCP policy on or off for the tenant (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    kind: "learn"
  - title: "Whether an agent asks the user before running a tool (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    kind: "learn"
videos: []
related: ["work-iq-a2a-and-mcp-long-running-tasks"]
controls:
  - governs: "Work IQ MCP policy on or off for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center"
    api: null
    note: "The MCP policy article says mutation operations such as sending email are not allowed by default; the Work IQ in Copilot Studio page says write operations are on by default. Verify your tenant."
  - governs: "Whether an agent asks the user before running a tool"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agents > agent > Tools > tool > Details > Ask the end user before running"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    api: null
    note: "Maker-side, per tool, for agents using the standard harness."
  - governs: "Human-in-the-loop policy for Work IQ agents and agent flows"
    scope: "tenant"
    ui: null
    api: null
confidence: "low"
created: "2026-11-15"
updated: "2026-11-17"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ human in the loop, in development; roadmap text only."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Corrected after a failed check: removed the claim that Copilot Studio approval prompts cannot be mandated centrally, noted the conflicting write-operation defaults, and set action to review."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 27 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-16"
    note: "Corrected after a failed check: licensing is now consumption (Work IQ uses consumption billing with Copilot Credits), and the Copilot Studio tool-confirmation setting is described as applying to agents using the standard harness."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 29 statements not yet confirmed"
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 30 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the Copilot Studio tool-confirmation path to Agents > agent > Tools > tool > Details > Ask the end user before running."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 32 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 32
  confirmed: 32
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8614d3f5c724ff9e2d67e55c31b2a5fa"
---

## What's changing

The roadmap states: allow agents and agent flows to pause for human input or approval before continuing. No further detail has been published.

The item is listed under Work IQ and Microsoft Copilot (Microsoft 365), for Worldwide, on the web. A preview is shown for November 2026 and general availability is targeted for January 2027.

It is not yet clear whether the pause is configured by makers, enforced by admin policy, or both, nor where approvers respond. Copilot Studio separately documents a per-tool end-user confirmation setting for agents using the standard harness.

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

Work IQ uses consumption billing with Copilot Credits, according to the [Work IQ in Copilot Studio page](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq). Any additional charge specific to pauses or approvals is not yet published.

## Scope

Agents and agent flows using Work IQ, Worldwide cloud, web. Sovereign cloud availability is not listed.

## Governance guidance

### Before rollout
- List agent actions that should need human approval.
- Identify approvers and a fallback for absences.
- Review existing approval controls in Copilot Studio.

### At rollout
- Pilot with low-volume agents first.
- Communicate to approvers how requests appear.

### After rollout
- Measure how long runs wait for approval.
- Review whether approvals are being granted without scrutiny.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Work IQ MCP policy on or off for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">The MCP policy article says mutation operations such as sending email are not allowed by default; the Work IQ in Copilot Studio page says write operations are on by default. Verify your tenant.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp#open-policy-settings-in-the-microsoft-365-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent asks the user before running a tool</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, per tool, for agents using the standard harness.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agents › agent › Tools › tool › Details › Ask the end user before running <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Human-in-the-loop policy for Work IQ agents and agent flows</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Nothing specific to this capability is documented. The closest administrative control is the Work IQ MCP policy. The [MCP policy governance article](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp) says mutation operations are not allowed by default, while the [Work IQ in Copilot Studio page](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq) says write operations are on by default. Verify your tenant's effective policy rather than treating read-only as a universal default.

The [Add tools to custom agents page](https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent) documents a per-tool maker setting; no central policy requiring that setting was found as of November 2026.

## Open questions

- Can admins require human approval by policy?
- Where do approvers respond, and is there an audit trail?
- What happens on timeout or rejection?
- Does it share a mechanism with Copilot Studio human approval for tool calls?

<!-- rationale
risk: Low. The feature adds a control point for human oversight rather than new autonomy, although details of enforcement are not yet published.
cost: Variable. Work IQ uses consumption billing with Copilot Credits; any additional charge specific to pauses or approvals is not yet published.
impact: Medium. It changes how approvers and agent owners interact with agent runs.
-->
