---
title: "Copilot Studio: makers can require human approval before an agent runs a tool"
slug: "copilot-studio-require-human-approval-for-tool-calls"
roadmapId: 570434
topic: "copilot-studio"
products: ["Microsoft Copilot Studio"]
summary: "The roadmap describes a per-tool, per-agent toggle that pauses an agent for approval before a tool runs. Makers set it; Microsoft Learn documents no admin enforcement yet, so administrators mainly need to plan."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "General Copilot Studio entitlement applies: a Copilot Studio user license with a tenant prepaid Copilot Credit pack subscription, the Copilot Studio authors role for applicable pay-as-you-go scenarios, a Microsoft 365 Copilot license, or a trial license (which cannot publish agents). Microsoft publishes no approval-specific requirement or credit rate at the time of writing (November 2026)."
audiences: ["maker","power-platform-admin","security","service-owner"]
tags: ["copilot-studio","tool-approval","human-in-the-loop","guardrails","tools","teams","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 570434"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570434"
    kind: "roadmap"
  - title: "Add tools to custom agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    kind: "learn"
  - title: "Add a tool to an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-tools-custom-agent"
    kind: "learn"
  - title: "Manage and delete tools in an agent (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-manage"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Configure high-quality instructions for generative orchestration"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/generative-mode-guidance"
    kind: "learn"
videos: []
related: ["work-iq-human-in-the-loop","copilot-credits"]
controls:
  - governs: "The per-tool, per-agent approval toggle described on the roadmap"
    scope: "agent"
    ui: null
    api: null
    note: "Maker-side according to the roadmap item. No Microsoft Learn page describes this toggle at the time of writing (November 2026)."
  - governs: "Whether the end user is asked before a tool runs (existing setting)"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Agents > agent > Tools > tool > Details > Ask the end user before running"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    api: null
    note: "Documented for the standard harness; set to No by default. Not confirmed as the roadmap toggle or as available on the Microsoft Copilot harness."
  - governs: "Tenant or environment enforcement of approval for tool calls"
    scope: "tenant"
    ui: null
    api: null
  - governs: "Which connectors can be used as tools at all"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Add an environment > Available > environment > Add to policy > Assign connectors > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy-guid> -Classification Blocked -Connectors <connector-objects> (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    note: "General control: blocks a connector rather than pausing it for approval. Requires tenant admin or Environment Admin. Moves the supplied connectors into the policy's Blocked group; each connector object requires id, type and name."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-19"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: removed unsupported claims on approver, parameters, audit and licensing; default now maker opt-in; licensing marked not yet published."
  - date: "2026-11-17"
    note: "Corrected after verification: default state is now unknown, and the Approve for the session and authentication/input-collection statements are narrowed to what the roadmap says."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 52 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: fixed the Ask the end user before running and data policy paths, replaced New-DlpPolicy with Add-ConnectorsToPolicy, stated the general Copilot Studio licence entitlement, and removed 'no new data access' from the risk rationale."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
version: 5
verification:
  status: "verified"
  date: "2026-11-19"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dd8c30be1e9a6547b6dc05d01f5b31e0"
---

## What's changing

Copilot Studio is planned to let makers require human approval before an agent runs a specific tool. The roadmap item describes a per-tool, per-agent toggle: a gated tool call pauses and shows an approval request describing what the agent intends to do, and a person can approve, approve for the session, or deny before the action runs. Examples given are sending emails, closing tickets and processing payments.

The roadmap describes this as a deterministic guardrail that does not depend on the agent's instructions, and says approval requests appear inline in the channel where the agent is deployed, including Microsoft Teams and Microsoft 365 Copilot. What the request shows beyond a description of the intended action, and who receives it when no one is in the conversation, is not described.

The item is listed for the Worldwide (Standard Multi-Tenant) cloud, on the web, as General Availability, with a target of September CY2026. That target has passed and the record, fetched in November 2026, still shows the status as In development. Microsoft Learn does not describe this toggle at the time of writing (November 2026), so what is said above about behaviour is the roadmap's description, not documented behaviour.

Learn does document a related per-tool setting for agents on the standard harness: **Ask the end user before running**, set to No by default. Whether the roadmap toggle is the same setting, or a new one for the Microsoft Copilot harness, is not stated. The Learn pages for adding and managing tools on the Microsoft Copilot harness list no approval setting.

## Why it matters

The scenarios that worry service owners most usually involve a tool call: an email sent to the wrong list, a ticket closed early, a payment processed. An instruction in the agent's prompt asking it to confirm first is advice the model may not follow. A platform-enforced gate on a named tool is the stronger control, and the roadmap describes exactly that.

The catch is that, as described, makers set it. Plan for it to protect only the agents whose makers turn it on, and treat approval settings as a review item for consequential tools rather than a maker preference. Until Microsoft documents a way to require it centrally, the admin-side lever is a data policy that blocks a connector outright, which is a blunter control.

## Risk assessment

**Data exposure**
- The roadmap says the request describes what the agent intends to do. Microsoft has not said whether it shows the parameters being sent, who can see it, or whether it is stored in the conversation transcript. Test this in each channel before relying on it to keep data away from other participants.

**Security & identity**
- Microsoft has not documented who receives the request for an autonomous run with no person in the conversation. Pilot the supported behaviour before treating approval as a control for those agents.
- The roadmap lists an **Approve for the session** option but does not define which later calls it covers. Test its scope before relying on it, and reserve broader approvals for low-consequence tools.

**Autonomy & actions**
- The gate adds an explicit approval boundary for the tools a maker selects. The roadmap describes approval for selected tools; test its interaction with existing authentication and input collection during the pilot. Existing data policy restrictions still apply.
- A reviewer who approves reflexively defeats the gate. Gate few tools, and only consequential ones.

**Change & support**
- Makers may leave approval off to avoid friction, and nothing documented lets an administrator require it. Add it to the agent review checklist.
- Gated actions pause for a person, so expect support questions about agents that appear to stall.

## Cost and licensing

**Licence:** General Copilot Studio entitlement applies: a Copilot Studio user license with a tenant prepaid Copilot Credit pack subscription, the Copilot Studio authors role for applicable pay-as-you-go scenarios, a Microsoft 365 Copilot license, or a trial license (which cannot publish agents), as the [licensing page for the standard harness](https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing) sets out. Microsoft publishes no approval-specific licence requirement for this toggle at the time of writing (November 2026).

**Meter:** No approval-specific meter or credit rate is documented at the time of writing (November 2026). General background: the Learn page for adding tools to Microsoft Copilot harness agents states that "the harness used to build this agent uses usage-based billing" and that using, building, testing and evaluating agents "might consume Copilot Credits". It does not say how a paused or approved tool call is billed. See [Copilot Credits](/concepts/copilot-credits/).

**Indirect cost:** Maker time to classify tools and configure the gate, reviewer time to answer requests, and longer completion times for gated actions.

## Scope

- **Who configures it:** Makers, per tool and per agent, according to the roadmap item. Administrators have no documented central setting.
- **Channels:** The roadmap names Microsoft Teams and Microsoft 365 Copilot as examples; it does not list every channel.
- **Cloud and platform:** Worldwide (Standard Multi-Tenant), Web, as the roadmap record lists them. Other clouds are not listed on the record, which is not a statement that the feature is unavailable there.
- **Harness:** Not stated. The documented **Ask the end user before running** setting is described on a page for the standard harness; the Microsoft Copilot harness tool pages list no approval setting.
- **Prerequisites:** Not yet published.

## Governance guidance

### Before rollout
- Classify each tool your makers use as read-only, reversible write, or irreversible or external-facing (send, pay, delete), and decide that the last class must always be gated.
- Check which environments have no data policy covering the connectors that agents use as tools (row 4), because a data policy blocks a connector rather than pausing it for approval.
- Add approval on consequential tools to your agent review checklist and maker guidance, and tell makers the roadmap toggle is not documented yet.

### At rollout
- Ask makers of agents with write tools to open each tool's **Details** and set **Ask the end user before running** where that setting exists (row 2).
- Pilot one gated agent in Microsoft Teams and in Microsoft 365 Copilot, and record what the approval request shows and who can answer it.
- Test an autonomous or scheduled agent with a gated tool before sharing it, and record who receives the request.

### After rollout
- Sample agents with write tools and compare their tool settings against the classification.
- Watch Message center and the Copilot Studio tools pages for documentation of the toggle, its licensing and any admin enforcement (rows 1 and 3).
- Re-test gated agents after data policy changes, since a newly blocked connector stops the tool from being selected at all.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>The per-tool, per-agent approval toggle described on the roadmap</strong><br><small>Agent</small><br><small class="controls__note">Maker-side according to the roadmap item. No Microsoft Learn page describes this toggle at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the end user is asked before a tool runs (existing setting)</strong><br><small>Agent</small><br><small class="controls__note">Documented for the standard harness; set to No by default. Not confirmed as the roadmap toggle or as available on the Microsoft Copilot harness.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Agents › agent › Tools › tool › Details › Ask the end user before running <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment enforcement of approval for tool calls</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors can be used as tools at all</strong><br><small>Environment</small><br><small class="controls__note">General control: blocks a connector rather than pausing it for approval. Requires tenant admin or Environment Admin. Moves the supplied connectors into the policy's Blocked group; each connector object requires id, type and name.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Add an environment › Available › environment › Add to policy › Assign connectors › connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy-guid&gt; -Classification Blocked -Connectors &lt;connector-objects&gt; (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No Microsoft page read for this briefing documents the roadmap toggle or a way to enforce it centrally, so rows 1 and 3 are shown as not documented. Rows 2 and 4 are existing controls and do not govern the new toggle.

Row 2 is documented on a page for the standard harness; Microsoft has not said it applies to Microsoft Copilot harness agents or that it is the roadmap toggle. Row 4 needs the tenant admin role or the Environment Admin role, and a data policy blocks the connector entirely: a tool blocked this way cannot be selected, and Learn notes that blocking Power Platform connectors also blocks tools in connected MCP servers. It cannot pause a tool for approval. Policies with a tenant scope apply to all agents in all environments across the tenant.

## Open questions

- Will Microsoft document this toggle, and is it the same setting as **Ask the end user before running** or a new one for the Microsoft Copilot harness? Watch the Copilot Studio tools pages on Microsoft Learn.
- Will administrators be able to require approval for specific connectors, tools or environments? Watch Message center.
- Who receives and can answer the request for autonomous or scheduled runs with no live conversation?
- Does the request show the parameters the agent will send, and are approval decisions recorded in audit logs with the approver's identity?
- Does a paused, approved or denied tool call consume Copilot Credits, and does any approval-specific licence apply?

<!-- rationale
risk: Low. The feature adds a control; its default is not stated, so this rates today's behaviour continuing, where an agent's tools run unless a maker gates them.
cost: Low. The only cost known is maker and admin time to decide which tools to gate; approval-specific licensing and any Copilot Credits treatment for this feature are not yet published.
impact: Medium. Makers must adopt it tool by tool, and users of gated agents in Microsoft Teams and Microsoft 365 Copilot will see approval requests.
-->
