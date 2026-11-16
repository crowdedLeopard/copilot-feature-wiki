---
title: "Copilot Studio: agent node runs an AI agent as a workflow step"
slug: "microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node"
roadmapId: 566998
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can add an agent node to a Copilot Studio workflow so an AI agent decides and acts mid-flow. It uses Copilot Credits and no admin switch is documented, so administrators should review credit and tool controls."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Copilot Studio bills workflow and agent usage in Copilot Credits. Microsoft Learn states that Microsoft 365 Copilot covers workflows only when run inside a standard harness agent by a licensed user. No agent-node rate is published at the time of writing (November 2026)."
audiences: ["power-platform-admin","finops","maker","service-owner"]
tags: ["copilot-studio","agents","automation","tools","mcp","knowledge-grounding","work-iq","human-in-the-loop","agent-evaluation","copilot-credits","usage-based-billing","copilot-harness"]
sources:
  - title: "Microsoft 365 Roadmap 566998"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566998"
    kind: "roadmap"
  - title: "Add an agent node to a workflow (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow"
    kind: "learn"
  - title: "Workflows overview (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Manage costs for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    kind: "learn"
  - title: "Tutorial: Manage Copilot Credits allocations programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
videos: []
related: ["copilot-credits","copilot-studio-mcp-tools-in-agents","work-iq-human-in-the-loop","copilot-studio-require-human-approval-for-tool-calls"]
controls:
  - governs: "Prepaid Copilot Credits per environment and whether it can draw from the tenant pool"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio > Manage Copilot Credits"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (entitlement MCSMessages, enforcement rule TenantPool)"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Needs Power Platform Administrator or Global Administrator, or an equivalent role. Applies to all Copilot Studio workloads in the environment; does not stop pay-as-you-go billing."
  - governs: "Credit consumption by workflow and environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    api: null
    note: "Review the Agent flow actions used by each workflow. Makers see a Credit usage (last 30 days) column on the Workflows page in Copilot Studio."
  - governs: "Escalation to a person when the agent is unsure"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Workflows > workflow > Build > Agent > Request human assistance when unsure"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow"
    api: null
    note: "Maker-side, per node. The agent emails the connection owner and waits for a reply. Administrators cannot enforce it."
  - governs: "Tenant or environment switch to turn the agent node, its tools or Work IQ off"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: documents the agent node, its credit billing and the environment-level cost controls; no agent-node admin switch is documented."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 65
  unconfirmed: 2
  contradicted: 5
  attempts: 1
---

## What's changing

The agent node lets a maker hand one step of a Copilot Studio workflow to an AI agent that can reason, call tools and read knowledge sources before returning a result. The result becomes dynamic content that later steps can use. A maker adds it in Copilot Studio by opening **Workflows**, opening or creating a workflow and selecting the **Agent** icon on the Add panel.

The node takes one of two forms. **An existing agent** is a published agent that runs with the instructions, tools and knowledge it already has. **New agent for this workflow** is an inline agent defined inside the node: its instructions, optional tools (Model Context Protocol (MCP) servers and any Power Platform connector action), optional knowledge (public websites or SharePoint) and its output shape travel with the workflow, and it cannot be reused outside that workflow. The agent chooses at run time which attached tools to call, in what order and with what arguments. Two optional settings widen its reach: **Work IQ**, which lets the agent use the running user's recent work activity (mail, Teams, calendar, OneDrive and SharePoint context), and **Request human assistance when unsure**, which makes the agent email the connection owner and wait for a reply before continuing.

The roadmap item shows status Launched, with a target date of September CY2026 and a preview date of April CY2026. It lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. The Learn page for the node does not say which part of the feature is still in preview, so the extent of each phase is unclear.

## Why it matters

A workflow used to follow fixed branches; with an agent node, one step can interpret an email or a document and then act through attached connectors. That moves decisions, and sometimes write actions, into flows that makers build and publish without an administrator review step in the designer. Microsoft Learn documents no tenant switch for the node, so the controls that remain are the ones around it: credit allocation per environment, who can build in the environment, and what the maker attaches.

The cost effect arrives without a purchase order. Credits are charged to the environment that runs the workflow, and testing and evaluating an agent node can consume credits as well. A tenant that lets makers build workflows in an environment that can draw from the tenant credit pool can therefore spend shared prepaid capacity before anyone has agreed a budget.

## Risk assessment

**Data exposure**

- The inline agent can be grounded in SharePoint sites and public websites, and the **Work IQ** setting lets it use the running user's mail, Teams, calendar, OneDrive and SharePoint context. Anything the agent reads can end up in its output and in later steps such as emails, Teams messages or Dataverse rows. Microsoft Learn documents no tenant switch for these node settings.
- A structured output passes agent-written fields to downstream actions, so review what a workflow writes and to where.

**Security & identity**

- Tools can be any Power Platform connector action or an MCP server. Microsoft Learn does not describe, on the agent node page, whose credentials a connector action in the node uses, so confirm this per workflow before relying on it.
- With **Request human assistance when unsure** on, the agent emails the connection owner, which puts an approval step in the hands of whoever owns that connection.

**Autonomy & actions**

- Tools let the agent act: the page says that without tools it can only read and reason, and with tools it can also act. Because the agent decides which tool to call and with which arguments, a wrong judgment becomes a real action. The human-assistance setting is the only documented brake, and it is chosen per node by the maker.
- Results can vary run to run when actions use AI, which the Workflows overview notes for AI actions.

**Change & support**

- Evaluations are limited to new agents created in workflows and to 20 evaluations per agent node per day. Expect makers to hit the credit and evaluation limits when iterating.
- If an environment's prepaid capacity is fully consumed, new workflow runs are blocked until capacity is available, while running workflows complete normally. A busy agent node can therefore stop unrelated workflows in the same environment.

## Cost and licensing

Copilot Studio bills the agent node's usage in Copilot Credits. Microsoft Learn says that for experiences powered by the Microsoft Copilot harness, credits are charged for LLM tokens, tools (including knowledge and MCPs) and the harness itself, and that billing starts when makers start building, so testing and evaluating consume credits. The Workflows overview adds that workflows consume Copilot Studio capacity for each action they execute.

The Learn cost table for Copilot Studio states that workflows are covered by a Microsoft 365 Copilot licence when run inside a standard harness agent by a licensed user, and billed in all other cases. Whether a workflow that contains an agent node falls under that exemption when run in other ways is not spelled out for the node, and no rate specific to the agent node is published at the time of writing (November 2026).

Credits are charged to the environment where the work runs, from prepaid capacity or through the environment's pay-as-you-go billing plan, not to individual makers. The caps are environment-level: allocate credits and turn off **Draw from the available capacity in my tenant** (first control below). That setting does not stop spending through a linked pay-as-you-go billing plan, and Azure budgets send alerts without stopping usage. Changes to shared capacity affect every other Copilot Studio workload in the environment.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the only platform; it does not list the US Government clouds, so the page makes no claim about them. Makers use the node from the **Workflows** area of Copilot Studio. Capacity and credit controls are managed by a user with the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

Which agents the node can call is limited to published agents. Learn states that inline agents are scoped to their workflow and cannot be reused elsewhere. The Learn page names no licence among its prerequisites for adding the node; the billing position is covered above.

## Governance guidance

### Before rollout

- Decide which environments may host workflows with agent nodes, and allocate a defined number of Copilot Credits to each (Power Platform admin center, owner: Power Platform administrator).
- Clear **Draw from the available capacity in my tenant** in environments where makers experiment, so a runaway agent node cannot spend unallocated tenant capacity.
- Check which environments are linked to a pay-as-you-go billing plan, because clearing the tenant-draw setting does not stop that route, and name a cost owner for each plan.
- Brief makers that tools on an agent node can write to systems, and ask them to turn on **Request human assistance when unsure** for high-stakes decisions.

### At rollout

- Ask makers to list, per workflow, the connectors, MCP servers and knowledge sources attached to each agent node, and review any that write data or reach SharePoint.
- Ask makers to run a test and an evaluation on each node before publishing, using the Test and Evaluate tabs, keeping in mind that both consume credits.
- Confirm how makers request more credits so a blocked workflow run has a documented route to resolution.

### After rollout

- Review the **Credit usage (last 30 days)** column on the Workflows page and the **Agent flow actions** line in the Power Platform admin center each month.
- Compare each environment's consumption with its allocation, and check whether any workflow runs were blocked by exhausted capacity.
- Reconfirm environment allocations after a new environment is created, since environments can appear with tenant draw selected.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Prepaid Copilot Credits per environment and whether it can draw from the tenant pool</strong><br><small>Environment</small><br><small class="controls__note">Needs Power Platform Administrator or Global Administrator, or an equivalent role. Applies to all Copilot Studio workloads in the environment; does not stop pay-as-you-go billing.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio › Manage Copilot Credits <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01 (entitlement MCSMessages, enforcement rule TenantPool)</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by workflow and environment</strong><br><small>Environment</small><br><small class="controls__note">Review the Agent flow actions used by each workflow. Makers see a Credit usage (last 30 days) column on the Workflows page in Copilot Studio.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio <a href="https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Escalation to a person when the agent is unsure</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, per node. The agent emails the connection owner and waits for a reply. Administrators cannot enforce it.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Workflows › workflow › Build › Agent › Request human assistance when unsure <a href="https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch to turn the agent node, its tools or Work IQ off</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment allocation settings govern every Copilot Studio workload in the environment, not only workflows with agent nodes, so changing them affects agents, flows and prompts in the same environment. If an environment group rule governs the tenant-draw setting, the environment-level setting becomes read-only and programmatic requests cannot override it.

Microsoft Learn documents monthly limits that an administrator sets on an individual agent under **Licensing** > **Copilot Studio** > **Manage Agents**. At the time of writing (November 2026), the pages read do not say that these limits cap the credits an agent node consumes inside a workflow, so the table does not list them as a control for this feature. The **Request human assistance when unsure** setting is maker-side and per node, so an administrator cannot enforce it.

## Open questions

- Which identity does an agent node use when its attached connector actions or SharePoint knowledge run, the running user, the connection owner or the workflow owner? Watch the agent node page on Microsoft Learn.
- What does a workflow run with an agent node cost in Copilot Credits, and does the Microsoft 365 Copilot exemption apply to workflows that contain an agent node? Watch the billing pages for the Microsoft Copilot harness.
- Will Microsoft add a tenant or environment setting to turn the agent node, its Work IQ option or its tool types off? Watch Message center and the Workflows overview.
- Which parts of the feature are still in preview, given the roadmap lists both General Availability and Preview as release phases? Watch the roadmap item.

<!-- rationale
risk: Medium. The agent picks at run time which attached tools and connector actions to call, and Microsoft Learn documents no admin switch for the node itself.
cost: Variable. Workflow actions and the agent node's use consume Copilot Credits, billed to the environment, and no rate specific to the agent node is published.
impact: Medium. Makers who build workflows notice it first; the people who feed or receive the workflow's output see decisions made by an agent instead of a fixed rule.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing: adding the node / admin-path: A maker adds the node by opening Workflows, opening or creating a workflow and selecting Agent on the Add panel. | Found: Existing workflow: Open the workflow and go to the Build tab.
2. Select the Agent icon on the Add panel. The configuration panel opens for the agent node. | Fix: For an existing workflow, include the Build tab: Workflows > workflow > Build > Agent on the Add panel. | Source: https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow
- [unsupported, major] Why it matters: A workflow used to follow fixed branches / behaviour: Before this change, workflows followed fixed branches rather than using AI reasoning. | Found: Searched: workflows previously fixed Copilot Studio; opened flows-overview and flow-designer; read the faq-workflows search excerpt. These describe current rule-based branches and AI actions, not the claimed historical restriction. | Fix: Replace the historical assertion with: 'The agent node puts AI reasoning inside an otherwise defined sequence of workflow actions.' Do not imply workflows previously could not use AI without a historical Microsoft source.
- [supported, minor] Why it matters: publishing without an administrator review step in the designer / behaviour: The workflow designer's documented publish procedure has no administrator review step. | Found: If your workflow has no errors, you can publish it. On the menu at the top of the canvas, select Publish. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flow-designer to sources. Keep the claim limited to the documented designer procedure, not an exemption from organisational policies. | Source: https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flow-designer
- [unsupported, blocker] controls[2].note; Governance controls: final sentence / applicability: Administrators cannot enforce the human-assistance setting. | Found: Searched: Copilot Studio Request human assistance enforce; Copilot Studio agent node human assistance administrator API. Read agent-node-workflow and flow-designer. They document a maker setting, but do not state that administrator enforcement is impossible. | Fix: Replace 'Administrators cannot enforce it' and 'an administrator cannot enforce it' with 'Microsoft documents this as a per-node maker setting; no central enforcement setting is documented as of November 2026.'
- [contradicted, blocker] controls[3]: ui and api, tools; Risk assessment: Data exposure; Open questions / absence: Microsoft documents no tenant or environment control to block the tools available to these agents. | Found: When a data policy or Advanced Connector Policy blocks a tool, connector, AI model, or skill, that item appears disabled wherever you'd normally select it, such as the tools list, model list, or skills list. | Fix: Narrow the both-null row to a dedicated agent-node switch. Remove the blanket tools-governance absence and describe documented data-policy and Advanced Connector Policy restrictions for Microsoft Copilot harness agents, citing this page; qualify any unconfirmed inline-node-specific coverage instead of declaring the platform controls absent. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-status
- [contradicted, blocker] controls[3]: ui and api, Work IQ; Risk assessment: Data exposure; Open questions / absence: No tenant setting governing Work IQ is documented. | Found: Centralized governance: Admins manage Work IQ MCP in the Microsoft 365 admin center.
The ability to allow or disallow tooling and MCP servers in the Microsoft 365 admin center might not be available in your region yet. | Fix: Remove Work IQ from the blanket absence row and acknowledge its documented central governance. Cite this page and https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp, which gives Microsoft 365 admin center > Agents > Tools > Work IQ MCP > Policy when available. Preserve the regional/tenant availability caveat and distinguish this general control from a dedicated inline-node toggle. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq
- [contradicted, blocker] Risk assessment: Autonomy & actions / applicability: Human assistance is the only documented brake on agent actions. | Found: For Work IQ MCP, policy governance doesn't replace Microsoft Entra authentication, OAuth permissions, or the signed-in user's existing Microsoft 365 permissions. It adds a request-time governance layer that can allow or deny specific MCP tool requests based on tenant policy. | Fix: Replace 'The human-assistance setting is the only documented brake' with 'The node page documents an optional, maker-selected escalation when the agent is unsure; it is not a mandatory approval before every action.' Acknowledge the separately documented tool-policy and Work IQ governance controls rather than implying escalation is the sole guardrail. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp
- [contradicted, blocker] Scope: Which agents the node can call is limited to published agents / behaviour: The node can call only published agents. | Found: You can either pick an existing published agent or build a brand-new agent directly inside the node without leaving the workflow designer. | Fix: Replace the sentence with 'The existing-agent picker lists published agents; alternatively, makers can define a new inline agent inside the node.' This also reconciles Scope with What's changing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to check environment pay-as-you-go billing-plan links, but the controls table has no corresponding row. | Found: Checklist: 'Check which environments are linked to a pay-as-you-go billing plan'. The table lists prepaid allocation, consumption reporting, human assistance and a missing node/tools/Work IQ switch, but no pay-as-you-go billing-plan control. | Fix: Add a general platform row for environment pay-as-you-go billing-plan association with UI 'Power Platform admin center > Licensing > Pay-as-you-go plans', citing https://learn.microsoft.com/power-platform/admin/pay-as-you-go-set-up. That page documents the Billing plans page and selecting environments when creating a plan. Do not invent an API equivalent.
-->
