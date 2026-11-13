---
title: "Copilot Studio: makers can require human approval before an agent runs a tool"
slug: "copilot-studio-require-human-approval-for-tool-calls"
roadmapId: 570434
desk: "agents"
products: ["Microsoft Copilot Studio"]
summary: "A per-tool, per-agent toggle pauses the agent and shows an approval card before a gated tool runs, giving a deterministic guard rail for actions such as sending email, closing tickets or making payments."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "off"
action: "review"
licensing:
  model: "included"
  notes: "Part of Copilot Studio authoring. Approval pauses do not themselves consume credits; the surrounding agent turn is billed as usual for the harness in use."
audiences: ["maker","power-platform-admin","security","service-owner"]
tags: ["copilot-studio","human-in-the-loop","tool-approval","guardrails","autonomous-agents","teams","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 570434"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570434"
    kind: "roadmap"
  - title: "Design autonomous agent capabilities"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/autonomous-agents"
    kind: "learn"
  - title: "Human supervision of computer use"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/human-supervision-computer-use"
    kind: "learn"
  - title: "Agent Framework: tool approval (human-in-the-loop)"
    url: "https://learn.microsoft.com/agent-framework/agents/tools/tool-approval"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","copilot-studio-share-autonomous-agents-run-only","m365-copilot-federated-connectors-write-update-delete"]
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
---

## What's changing

Copilot Studio is adding a **per-tool, per-agent approval toggle**. When a maker marks a tool as requiring approval, any call to that tool pauses the agent and shows an approval request describing what the agent intends to do, including the parameters it will send. The person can approve once, approve for the rest of the session, or deny. Only after approval does the action run.

Approval requests appear inline in the channel where the agent is deployed, including Microsoft Teams and Microsoft 365 Copilot. The roadmap describes this as a deterministic guard rail that works independently of the agent's instructions: an instruction telling the model to "always ask before sending" is advice the model may or may not follow, while the toggle is enforced by the platform.

The roadmap targets General Availability in September 2026 and the item still reads "In development" as of this briefing. The same pattern already exists in adjacent Microsoft products: the Agent Framework SDK has tool approval modes, computer-use tools send review requests to a designated human reviewer, and federated connectors in Copilot Chat require confirmation for write tools.

## Why it matters

Most of the "agent did something it should not have" scenarios that worry service owners involve a tool call: an email sent to the wrong distribution list, a ticket closed prematurely, a record deleted. Instructions cannot guarantee a pause. This toggle can, and it is the maker's responsibility to use it.

For governance teams the feature changes the review conversation from "does this agent have write tools?" to "does every write tool have approval on, and who approves?". It also makes autonomous agents shared to end users considerably safer, because the person who owns the data gets the approval card.

## Risk assessment

**Data exposure**
- Neutral. The approval card shows parameters, which may include data the agent extracted; that is visible only to the approver in the channel.

**Security & identity**
- The approver is the person in the conversation (or, for autonomous agents, the user who activated the instance). Confirm who that is for each deployment channel before relying on approval as a control.
- "Approve for session" reduces friction but means a long-running session can run the tool many times after one approval.

**Autonomy & actions**
- This is the primary mitigation for autonomy risk in Copilot Studio tool use. Without it, agents act as soon as the model picks a tool.
- Microsoft's computer-use guidance notes that model-triggered review requests are probabilistic and not a fail-safe; the deterministic toggle addresses exactly that gap, but only for the tools it is applied to.

**Change & support**
- Makers may leave approval off to avoid friction. Approval settings should be part of the agent review checklist, not left to maker preference.
- Users may approve reflexively. Keep approval cards specific and rare so they are read.

## Cost and licensing

- No licence or credit cost for the toggle itself.
- The agent turn that pauses and resumes is billed normally for its harness (Copilot Credits on the Microsoft Copilot harness).
- Indirect: slightly longer completion times for gated actions; maker time to decide which tools to gate.

## Scope

- Agents built in Copilot Studio with tools (connectors, flows, MCP tools) that the maker chooses to gate.
- Channels listed: Microsoft Teams and Microsoft 365 Copilot; other channels not stated.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Makers configure it; administrators cannot (yet) mandate it centrally according to the roadmap text.

## Governance guidance

**Before rollout**
- Classify tools by consequence: read-only, reversible write, irreversible or external-facing (send, pay, delete). Decide that the last class must always be gated.
- Add "approval on consequential tools" to the agent publishing checklist and to maker guidelines in the Power Platform admin center.

**At rollout**
- Ask makers of existing agents with write tools to enable approval and republish.
- For shared autonomous agents, confirm that approval cards reach the end user who activated the instance, and document how they respond.

**After rollout**
- Sample agents quarterly to verify approval settings match the tool classification.
- Review Purview audit events for gated tools to confirm approvals are being recorded with the approver's identity.
- Watch Message center for any admin-level enforcement option (mandatory approval for tool classes).

## Admin controls

- Copilot Studio > agent > **Tools** > select tool > approval toggle (maker-side, per tool).
- No tenant-level enforcement published. Complementary admin controls: data policies to block tools outright; connector endpoint filtering; credential controls so the tool runs as the approving user.
- Microsoft Purview audit for agent and tool activity.

## Open questions

- Whether administrators will be able to mandate approval for specific connectors or action types across an environment.
- How approval works for autonomous agents with no live conversation (Teams activity feed, email, agent management page).
- Whether approvals are recorded in audit logs with the approver's identity and the parameters shown.

<!-- rationale
risk: Low. The feature reduces risk; the residual risk is that it is maker-optional and off by default.
cost: None. Authoring feature.
impact: Medium. Changes the user experience for gated actions in Teams and Copilot; makers need to adopt it.
-->
