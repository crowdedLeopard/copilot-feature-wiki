---
title: "Copilot Studio: makers can require human approval before an agent runs a tool"
slug: "copilot-studio-require-human-approval-for-tool-calls"
roadmapId: 570434
topic: "copilot-studio"
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
  - title: "Whether the end user is asked before a tool runs (Copilot Studio (maker))"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    kind: "learn"
  - title: "Which tools can run at all (connector data policies) (Power Platform admin center)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Which tools can run at all (connector data policies) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","copilot-studio-share-autonomous-agents-run-only","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Whether the end user is asked before a tool runs"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > tool > Details > Additional details > Ask the end user before running"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration"
    api: null
    note: "Maker-side, per tool. Set to No by default."
  - governs: "Tenant or environment enforcement of approval for tool calls"
    scope: "tenant"
    ui: null
    api: null
  - governs: "Which tools can run at all (connector data policies)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the end user is asked before a tool runs</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, per tool. Set to No by default.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › tool › Details › Additional details › Ask the end user before running <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent#view-and-make-changes-to-your-tool-configuration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment enforcement of approval for tool calls</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which tools can run at all (connector data policies)</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Approval is a maker decision and there is no documented way to require it centrally. Admins who need a hard stop should block the connector in a data policy or restrict endpoints, and use the [credential option setting](/features/copilot-studio-block-maker-provided-credentials/) so that a tool runs as the approving user rather than the maker. Microsoft's [AI approvals FAQ](https://learn.microsoft.com/microsoft-copilot-studio/faqs-ai-approvals) describes the responsible-AI design but names no admin switch.

## Open questions

- Whether administrators will be able to mandate approval for specific connectors or action types across an environment.
- How approval works for autonomous agents with no live conversation (Teams activity feed, email, agent management page).
- Whether approvals are recorded in audit logs with the approver's identity and the parameters shown.

<!-- rationale
risk: Low. The feature reduces risk; the residual risk is that it is maker-optional and off by default.
cost: None. Authoring feature.
impact: Medium. Changes the user experience for gated actions in Teams and Copilot; makers need to adopt it.
-->
