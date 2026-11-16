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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 32
  unconfirmed: 9
  contradicted: 7
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, major] What's changing; Risk assessment: Data exposure / behaviour: The Copilot Studio approval card shows the parameters that the tool will receive. | Found: Searched: Copilot Studio tool approval require human approval parameters session approver autonomous activated instance; "Copilot Studio" "approval" "parameters" "tool". Opened add-tools-custom-agent and faqs-ai-approvals; parameter previews found for federated connectors, not this gate. | Fix: Remove 'including the parameters it will send' and the claim that the card shows parameters. Say only that the roadmap describes a request explaining the intended action; leave parameter visibility as an open question.
- [supported, minor] What's changing / behaviour: Federated connectors in Copilot Chat require confirmation for write tools. | Found: Tools that create, update, or delete data initially require the user's explicit approval. Users can choose whether Copilot asks again for that tool | Fix: Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview and say 'initially require confirmation for write tools; users can allow subsequent calls'. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [unsupported, blocker] Risk assessment: Security & identity; Governance guidance: At rollout; Open questions / role: For autonomous agents, the user who activated the instance receives and approves the card. | Found: Searched: Copilot Studio tool approval require human approval parameters session approver autonomous activated instance; "Copilot Studio" "approval" "activated" "user". Opened guidance/autonomous-agents, add-tools-custom-agent and human-supervision-computer-use; no routing statement for this feature | Fix: Remove the assertion about the activating user. Say 'Microsoft has not documented who receives these tool-approval requests for autonomous runs as of November 2026'; retain a pilot task to establish supported routing without assuming its recipient.
- [unsupported, blocker] Why it matters / role: The person who owns the data gets the approval card. | Found: Searched: Copilot Studio tool approval require human approval parameters session approver autonomous activated instance. Opened add-tools-custom-agent, guidance/autonomous-agents and human-supervision-computer-use; none identifies the data owner as the recipient. | Fix: Remove 'because the person who owns the data gets the approval card'. The documented end-user confirmation setting does not establish data ownership or routing to a data owner.
- [unsupported, blocker] Risk assessment: Data exposure / role: Approval-card data is visible only to the approver in the channel. | Found: Searched: Copilot Studio tool approval Purview audit approver identity approval request parameters privacy. Opened add-tools-custom-agent and human-supervision-computer-use; read Purview ai-copilot-studio search excerpts. No source establishes exclusive approver access for this gate. | Fix: Remove 'visible only to the approver in the channel'. State that approval-card visibility and any transcript or audit exposure need verification for each deployment channel.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Without this toggle, agents act as soon as the model picks a tool. | Found: Searched: "Copilot Studio" "approval" "parameters" "tool". Opened add-tools-custom-agent and guidance/autonomous-agents. The former describes input collection, authentication and policy restrictions, not unconditional immediate execution. | Fix: Replace the absolute statement with 'This gate adds an explicit approval boundary for selected tools; existing authentication, input collection and policy restrictions still apply.'
- [supported, minor] controls[1].ui; controls[1].api; Scope; Governance controls; Open questions; rationale: risk / absence: Microsoft has not documented tenant or environment enforcement requiring approval for tool calls. | Found: Searched: Copilot Studio Ask the end user before running API PowerShell approval tenant environment enforce mandatory; site:learn.microsoft.com/microsoft-copilot-studio "require" "tool approval" "admin". Opened add-tools-custom-agent and admin-data-loss-prevention; read sec-gov-phase2 results. | Fix: Keep the null row, but replace 'administrators cannot (yet) mandate it centrally according to the roadmap text' with 'Microsoft Learn documents no central enforcement setting for tool approval as of November 2026.' The roadmap does not explicitly rule out admin enforcement.
- [contradicted, blocker] front matter: defaultState / consistency: The default-state category is off rather than maker opt-in. | Found: defaultState: "off"; controls[0]: "Maker-side, per tool." SCHEMA defines user-opt-in as "available, but each user or maker chooses to turn it on or to use it" and reserves off for a source that does not say who turns it on. | Fix: Set defaultState to 'user-opt-in': the documented configuration is maker-side and the targeted admin-enforcement searches found no mandatory admin switch. Retain the separate factual note that the setting is No by default.
- [unsupported, blocker] front matter: licensing.model, licensing.notes; Cost and licensing; rationale: cost / licensing: The approval toggle is included in existing Copilot Studio licensing with no additional licence cost. | Found: Searched: Copilot Studio tool approval credits cost licensing approval pauses billing Microsoft Copilot harness; "Copilot Studio" "approval" "credits" "pause". Opened add-tools-custom-agent and billing-credit-overview; read billing-licensing results. No feature-specific inclusion statement. | Fix: Set licensing.model to 'unknown' and replace the inclusion/no-licence assertion with 'Feature-specific licensing for the planned tool-approval toggle is not yet published.' Do not infer inclusion from its presence in an authoring UI.
- [unsupported, blocker] front matter: licensing.notes; Cost and licensing / cost: Approval pauses and the toggle itself consume no Copilot Credits. | Found: Searched: "Copilot Studio" "approval" "credits" "pause"; Copilot Studio tool approval credits cost licensing approval pauses billing Microsoft Copilot harness. Opened billing-credit-overview and add-tools-custom-agent; no statement exempts these approvals from credits. | Fix: Remove 'Approval pauses do not themselves consume credits' and 'No ... credit cost for the toggle itself'. Say 'Microsoft has not published approval-specific credit treatment as of November 2026.'
- [unsupported, blocker] front matter: licensing.notes; Cost and licensing / cost: An agent turn that pauses and resumes for approval is billed normally without any approval-specific billing difference. | Found: Searched: Copilot Studio tool approval credits cost licensing approval pauses billing Microsoft Copilot harness; "Copilot Studio" "approval" "credits" "pause". Opened billing-credit-overview; read requirements-messages-management and billing-licensing results; none states pause/resume billing. | Fix: Remove the claim about billing of the paused/resumed turn. Separate established general harness billing from the unpublished credit treatment of this approval feature.
- [supported, minor] Cost and licensing / cost: The Microsoft Copilot harness uses Copilot Credits for billable agent activity. | Found: For experiences powered by the Microsoft Copilot harness, Copilot Credits are charged for large language model (LLM) tokens, tools (including knowledge and MCPs), and the harness itself. | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview for this general billing background, without claiming it establishes this toggle's availability or pause/resume billing on that harness. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The cost rating is none merely because this is an authoring feature. | Found: cost: "none"; rationale: "None. Authoring feature." SCHEMA permits none only when "included in licences already held, and the record or a Microsoft page says so"; feature-specific inclusion was not established. | Fix: Set cost to 'low' for the known indirect maker/admin work, and change its rationale to 'Low. Maker review and configuration time; feature-specific licensing and approval credit treatment are not yet published.'
- [contradicted, blocker] Governance guidance: Before rollout / applicability: Administrators can add this requirement to maker guidelines in Power Platform admin center without an environment qualification. | Found: Configure maker guidelines for Copilot Studio (preview) ... Maker guidelines is available only for managed environments. | Fix: Say 'For managed environments, add the requirement to Maker guidelines (preview); elsewhere distribute it through your internal maker guidance.' Cite https://learn.microsoft.com/power-platform/admin/maker-guidelines. | Source: https://learn.microsoft.com/power-platform/admin/maker-guidelines
- [unsupported, blocker] Governance guidance: After rollout; Open questions / applicability: Purview audit events for gated tools can confirm that approvals were recorded with the approver's identity. | Found: Searched: Copilot Studio tool approval Purview audit approver identity approval request parameters privacy. Read ai-copilot-studio, audit-copilot and security-faq results; opened human-supervision-computer-use. General interaction logging does not establish these approval events or fields. | Fix: Replace the audit-review instruction with 'Confirm whether Microsoft documents approval-specific audit events and approver identity before relying on Purview to evidence approvals.' Keep this an open question; the current instruction also conflicts with the page's admission that approval auditing is unknown.
- [contradicted, blocker] Governance controls: following paragraph; Scope: autonomous agents / applicability: Requiring end-user rather than maker credentials is an unqualified governance recommendation for the agents covered by this briefing, including autonomous agents. | Found: agents triggered by scheduled or autonomous events, or that attempt to run in the background, fail due to missing credentials. All agent triggers must involve an active user. | Fix: Keep the end-user identity recommendation only for interactive agents, link https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication, and explicitly warn that blocking maker credentials causes scheduled/autonomous/background runs to fail because live user authentication is required. | Source: https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication
- [contradicted, blocker] Governance controls: AI approvals FAQ link / applicability: The AI Approvals FAQ describes the responsible-AI design relevant to this human tool-approval toggle. | Found: AI approvals allow an agent flow to automatically approve or reject requests based on predefined criteria ... AI approvals use AI ... to evaluate approval requests against your business rules | Fix: Remove this FAQ as evidence about the human tool-approval toggle or central enforcement. It covers AI decision stages in agent-flow approval workflows, not the roadmap's per-tool human gate. | Source: https://learn.microsoft.com/microsoft-copilot-studio/faqs-ai-approvals
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The governance checklist tells readers to configure Maker guidelines, but the controls table has no corresponding row. | Found: Checklist: 'Add ... to maker guidelines in the Power Platform admin center.' The controls table lists only tool confirmation, central approval enforcement and connector data policies. | Fix: Add a Maker guidelines row qualified as preview and managed-environment-only. The documented environment UI is Power Platform admin center > Copilot > Settings > Maker guidelines > Environments > environment > Edit setting, at https://learn.microsoft.com/power-platform/admin/maker-guidelines. Alternatively remove the instruction to configure this product control.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist directs readers to review Purview audit events, but no audit control appears in the controls table. | Found: Checklist: 'Review Purview audit events for gated tools'. The table contains no Purview audit row. | Fix: Remove the unsupported approval-auditing instruction. If retaining advice about general Copilot interaction auditing, add a general-control row for Microsoft Purview portal > Audit, cite https://learn.microsoft.com/purview/audit-copilot, and explicitly state that approval-specific events and approver fields are not confirmed.
-->
