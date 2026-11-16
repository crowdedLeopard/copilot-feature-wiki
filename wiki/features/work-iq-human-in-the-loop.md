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
videos: []
related: ["copilot-studio-require-human-approval-for-tool-calls","agent-365-control-plane-for-agents","work-iq-execute-recipes"]
confidence: "low"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ human in the loop, in development; roadmap text only."
version: 1
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

## Admin controls

None published. No portal path, policy or PowerShell control has been described. Watch Message center and Work IQ documentation.

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
