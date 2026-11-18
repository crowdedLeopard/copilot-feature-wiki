---
title: "Copilot Studio: agent node runs an AI agent as a workflow step"
slug: "microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node"
roadmapId: 566998
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can add an agent node to a Copilot Studio workflow so an AI agent decides and acts mid-flow. It uses Copilot Credits and no switch dedicated to the node is documented, so administrators should review credit and tool controls."
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
  notes: "Copilot Studio bills workflow and agent usage in Copilot Credits. Microsoft Learn states that a Microsoft 365 Copilot licence covers workflows run inside a standard harness agent by a licensed user, and that they are billed in all other cases. No agent-node rate is published at the time of writing (November 2026)."
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
  - title: "Entitlement Insight - Get Environment Resources"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-environment-resources"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Advanced connector policies"
    url: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    kind: "learn"
  - title: "Review agent readiness and status in Microsoft Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-status"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
videos: []
related: ["copilot-credits","data-policies","mcp","work-iq"]
controls:
  - governs: "Prepaid Copilot Credits per environment and whether it can draw from the tenant pool"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "The request body sets allocatedEntitlements[].entitlementId to MCSMessages and allocatedEntitlements[].enforcementRules[] to ruleType TenantPool with enabled false."
  - governs: "Credit consumption by workflow and environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview"
    api:
      kind: "power-platform-api"
      call: "GET https://api.powerplatform.com/licensing/entitlements/MCSMessages/environments/<environment ID>/resources?fromDate=<start date>&toDate=<end date>&api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-environment-resources"
    note: "Review the Agent flow actions used by each workflow. The documented API is deprecated and returns environment resource consumption snapshots; the reference does not promise a workflow-level breakdown."
  - governs: "Escalation to a person when the agent is unsure"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Workflows > workflow > Build > Add panel > Agent > Request human assistance when unsure"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow"
    api: null
    note: "Per-node maker setting. The agent emails the connection owner and waits for a reply. No central enforcement setting is documented as of November 2026."
  - governs: "Switch dedicated to turning the agent node off"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting dedicated to the agent node is documented at the time of writing (November 2026). Data policy and Work IQ MCP policy are described below the table."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-18"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item: documents the agent node, its credit billing and the environment-level cost controls; no agent-node admin switch is documented."
  - date: "2026-11-16"
    note: "Corrected after verification: removed three unsupported claims (no admin enforcement, published agents only, human assistance the only brake); narrowed the absence row to a switch dedicated to the node and added data policy and Work IQ MCP policy."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 78 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: fixed the credit-allocation and human-assistance paths, removed the exemption uncertainty and the pay-as-you-go checklist item, and replaced the data-policy and Advanced Connector Policy uncertainty with what Learn documents."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the credit-allocation API call now gives the full PUT request body, the test and evaluate step reflects that evaluations cover only new inline agents, and the attachment-review step was removed."
  - date: "2026-11-17"
    note: "Corrected after verification: the credit-allocation API call now gives the full PUT request body, the test and evaluate step reflects that evaluations cover only new inline agents, and the attachment-review step was removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the credit-consumption row now lists the documented, deprecated Power Platform API call for environment resource consumption snapshots."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 97 statements confirmed"
  - date: "2026-11-17"
    note: "Re-checked against Microsoft Learn for roadmap item 562222; the agent node, credit billing and cost controls are unchanged, and the Work IQ MCP policy wording now follows the page."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 85 statements confirmed"
  - date: "2026-11-17"
    note: "Re-checked against Microsoft Learn for roadmap item 566998; status, dates, controls and credit billing are unchanged, and this item now owns the page."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 94 statements confirmed"
  - date: "2026-11-17"
    note: "Re-checked against Microsoft Learn on 17 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 98 statements confirmed"
  - date: "2026-11-17"
    note: "Re-read the Learn pages on 17 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-17"
    note: "Re-read the Learn pages on 17 November 2026 for roadmap item 562222: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-17"
    note: "Re-read the Learn pages on 17 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 101 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 95 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 96 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Corrected after verification: removed the At rollout checklist step on testing and evaluating, which has no controls-table row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 85 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged; removed a remark about the designer's publish procedure that was not re-confirmed."
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 89 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 88 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 104 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: Work IQ in Copilot Studio uses Work IQ MCP, which administrators govern centrally in the Microsoft 365 admin center, replacing the earlier uncertainty about whether that policy applies."
  - date: "2026-11-18"
    note: "Corrected after verification: Work IQ in Copilot Studio is stated as governed through Work IQ MCP in the Microsoft 365 admin center, and the Work IQ applicability question was removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 92 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Corrected after verification: the credit-allocation path now runs through to the Draw from the available capacity in my tenant setting, and the API call is the bare PUT request with the body properties named in the note."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 94 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 99 statements confirmed"
  - date: "2026-11-18"
    note: "Re-read the Learn pages on 18 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 103 statements confirmed"
version: 25
verification:
  status: "verified"
  date: "2026-11-18"
  version: 25
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 103
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c88a25f430e80544731a6b21dd9c0101"
---

## What's changing

The agent node lets a maker hand one step of a Copilot Studio workflow to an AI agent that can reason, call tools and read knowledge sources before returning a result. The result becomes dynamic content that later steps can use. A maker adds it in Copilot Studio by opening **Workflows**, opening or creating a workflow (for an existing workflow, the **Build** tab) and selecting the **Agent** icon on the Add panel.

The node takes one of two forms. **An existing agent** is a published agent that runs with the instructions, tools and knowledge it already has. **New agent for this workflow** is an inline agent defined inside the node: its instructions, optional tools (Model Context Protocol (MCP) servers and any Power Platform connector action), optional knowledge (public websites or SharePoint) and its output shape travel with the workflow, and it cannot be reused outside that workflow. The agent decides at run time which attached tools to call, in what order and with what arguments. Two optional settings widen its reach: **Work IQ**, which lets the agent use the running user's recent work activity (mail, Teams, calendar, OneDrive and SharePoint context), and **Request human assistance when unsure**, which makes the agent email the connection owner and wait for a reply before continuing.

The roadmap item shows status Launched, with a target date of September CY2026 and a preview date of April CY2026. It lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. The Learn page for the node does not say which part of the feature is still in preview, so the extent of each phase is unclear.

## Why it matters

The agent node puts AI reasoning inside an otherwise defined sequence of workflow actions: one step can interpret an email or a document and then act through attached connectors. That moves decisions, and sometimes write actions, into flows that makers build. Microsoft Learn documents no tenant switch dedicated to the node at the time of writing (November 2026), so the controls that remain are the ones around it: credit allocation per environment, data policies and Advanced Connector Policies for tools, who can build in the environment, and what the maker attaches.

The cost effect arrives without a purchase order. Credits are charged to the environment that runs the workflow, and testing and evaluating an agent node can consume credits as well. A tenant that lets makers build workflows in an environment that can draw from the tenant credit pool can therefore spend shared prepaid capacity before anyone has agreed a budget.

## Risk assessment

**Data exposure**

- The inline agent can be grounded in SharePoint sites and public websites, and the **Work IQ** setting lets it use the running user's mail, Teams, calendar, OneDrive and SharePoint context. Anything the agent reads can end up in its output and in later steps such as emails, Teams messages or Dataverse rows. Microsoft Learn documents no switch dedicated to the node for these settings. Work IQ in Copilot Studio uses Work IQ MCP, which administrators centrally govern in the Microsoft 365 admin center; the Policy tab is available only where offered.
- A structured output passes agent-written fields to downstream actions, so review what a workflow writes and to where.

**Security & identity**

- Tools can be any Power Platform connector action or an MCP server. The agent node page does not describe whose credentials a connector action in the node uses, so confirm this per workflow before relying on it.
- Data policies govern Power Platform connector tools in Copilot Studio agents; blocking a connector also blocks connected MCP tools that rely on it. Advanced Connector Policies govern certified connectors and MCP servers through the hosting environment's policy; custom and HTTP connectors still require classic data policies. Copilot Studio design-time enforcement is rolling out; until available, enforcement is runtime-only. Learn also documents that when a data policy or Advanced Connector Policy blocks a tool, connector, AI model or skill for agents built with the Microsoft Copilot harness, it appears disabled in the tool list.
- With **Request human assistance when unsure** on, the agent emails the connection owner for input and waits for a reply. Confirm that the connection owner is the right person to be asked for each workflow.

**Autonomy & actions**

- Tools let the agent act: the page says that without tools it can only read and reason, and with tools it can also act. Because the agent decides which tool to call and with which arguments, a wrong judgment becomes a real action. The node page documents an optional, maker-selected escalation when the agent is unsure; it is not a mandatory approval before every action. For Work IQ MCP, Learn documents a separate tenant policy that can allow or deny specific MCP tool requests.
- Results can vary run to run when actions use AI, which the Workflows overview notes for AI actions.

**Change & support**

- Evaluations are limited to new agents created in workflows and to 20 evaluations per agent node per day. Expect makers to hit the credit and evaluation limits when iterating.
- If an environment's prepaid capacity is fully consumed, new workflow runs are blocked until capacity is available, while running workflows complete normally. A busy agent node can therefore stop unrelated workflows in the same environment.

## Cost and licensing

Copilot Studio bills the agent node's usage in Copilot Credits. Microsoft Learn says that for experiences powered by the Microsoft Copilot harness, credits are charged for LLM tokens, tools (including knowledge and MCPs) and the harness itself, and that billing starts when makers start building, so testing and evaluating consume credits. The Workflows overview adds that workflows consume Copilot Studio capacity for each action they execute.

The Learn cost table for Copilot Studio states that workflows are covered by a Microsoft 365 Copilot licence when run inside a standard harness agent by a licensed user, and billed in all other cases. No rate specific to the agent node is published at the time of writing (November 2026).

Credits are charged to the environment where the work runs, from prepaid capacity or through the environment's pay-as-you-go billing plan, not to individual makers. The caps are environment-level: allocate credits and turn off **Draw from the available capacity in my tenant** (first control below). That setting does not stop spending through a linked pay-as-you-go billing plan, and Azure budgets send alerts without stopping usage. Changes to shared capacity affect every other Copilot Studio workload in the environment.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the only platform; it does not list the US Government clouds, so the page makes no claim about them. Makers use the node from the **Workflows** area of Copilot Studio. Capacity and credit controls are managed by a user with the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

The existing-agent picker lists published agents; alternatively, makers can define a new inline agent inside the node. Learn states that inline agents are scoped to their workflow and cannot be reused elsewhere. The Learn page names no licence among its prerequisites for adding the node; the billing position is covered above.

## Governance guidance

### Before rollout

- Decide which environments may host workflows with agent nodes, and allocate a defined number of Copilot Credits to each (Power Platform admin center, owner: Power Platform administrator).
- Clear **Draw from the available capacity in my tenant** in environments where makers experiment, so a runaway agent node cannot spend unallocated tenant capacity.
- Brief makers that tools on an agent node can write to systems, and ask them to turn on **Request human assistance when unsure** for high-stakes decisions.

### At rollout

- Confirm how makers request more credits so a blocked workflow run has a documented route to resolution.

### After rollout

- Review the **Credit usage (last 30 days)** column on the Workflows page and the **Agent flow actions** line in the Power Platform admin center each month.
- Compare each environment's consumption with its allocation, and check whether any workflow runs were blocked by exhausted capacity.
- Reconfirm environment allocations after a new environment is created, since Learn says the draw-from-tenant option is selected by default for eligible environments with no allocation configuration.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Prepaid Copilot Credits per environment and whether it can draw from the tenant pool</strong><br><small>Environment</small><br><small class="controls__note">The request body sets allocatedEntitlements[].entitlementId to MCSMessages and allocatedEntitlements[].enforcementRules[] to ruleType TenantPool with enabled false.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by workflow and environment</strong><br><small>Environment</small><br><small class="controls__note">Review the Agent flow actions used by each workflow. The documented API is deprecated and returns environment resource consumption snapshots; the reference does not promise a workflow-level breakdown.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio <a href="https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>GET https://api.powerplatform.com/licensing/entitlements/MCSMessages/environments/&lt;environment ID&gt;/resources?fromDate=&lt;start date&gt;&amp;toDate=&lt;end date&gt;&amp;api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-environment-resources" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Escalation to a person when the agent is unsure</strong><br><small>Agent</small><br><small class="controls__note">Per-node maker setting. The agent emails the connection owner and waits for a reply. No central enforcement setting is documented as of November 2026.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Workflows › workflow › Build › Add panel › Agent › Request human assistance when unsure <a href="https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch dedicated to turning the agent node off</strong><br><small>Tenant</small><br><small class="controls__note">No setting dedicated to the agent node is documented at the time of writing (November 2026). Data policy and Work IQ MCP policy are described below the table.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment allocation settings govern every Copilot Studio workload in the environment, not only workflows with agent nodes, so changing them affects agents, flows and prompts in the same environment. If an environment group rule governs the tenant-draw setting, the environment-level setting becomes read-only and programmatic requests cannot override it.

The allocation call needs authenticated authorisation and `Content-Type: application/json`. The tutorial's example body, in which 5000 is an example allocation, is `{"scope":{"environmentId":"<environment ID>"},"allocatedEntitlements":[{"entitlementId":"MCSMessages","allocation":{"quantity":5000},"enforcementRules":[{"ruleType":"TenantPool","enabled":false}]}]}`; it sets the environment's allocation and turns tenant-pool draw off ([Tutorial: Manage Copilot Credits allocations programmatically](https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations)).

Microsoft Learn documents monthly limits that an administrator sets on an individual agent under **Licensing** > **Copilot Studio** > **Manage Agents**. At the time of writing (November 2026), Learn does not state that these limits cap the credits an agent node consumes inside a workflow, so the table does not list them as a control for this feature. The **Request human assistance when unsure** setting is documented by Microsoft as a per-node maker setting; no central enforcement setting is documented as of November 2026.

Three platform controls exist outside the table. Data policies govern Power Platform connector tools in Copilot Studio agents; blocking a connector also blocks tools in connected MCP servers, which rely on Power Platform connectors for connectivity ([Configure data policies for agents](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention)). Advanced Connector Policies govern certified connectors and MCP servers through the hosting environment's policy; custom and HTTP connectors still require classic data policies. Copilot Studio design-time enforcement is rolling out; until available, enforcement is runtime-only ([Advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies)). Blocked tools, connectors, AI models and skills appear disabled in the pickers of agents built with the Microsoft Copilot harness ([Review agent readiness and status](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-agent-status)). Work IQ MCP has a tenant-level policy in the Microsoft 365 admin center under **Agents** > **Tools** > **Work IQ MCP** > **Policy**, when available ([Policy governance for Work IQ MCP](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp)). Work IQ in Copilot Studio uses Work IQ MCP, which administrators centrally govern in the Microsoft 365 admin center; the Policy tab is available only where offered ([Work IQ in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq)). The table lists only the absence of a switch dedicated to the node.

## Open questions

- Which identity does an agent node use when its attached connector actions or SharePoint knowledge run, the running user, the connection owner or the workflow owner? Watch the agent node page on Microsoft Learn.
- What does a workflow run with an agent node cost in Copilot Credits? Watch the billing pages for the Microsoft Copilot harness.
- Will Microsoft add a setting dedicated to the agent node? Watch Message center and the Workflows overview.
- Which parts of the feature are still in preview, given the roadmap lists both General Availability and Preview as release phases? Watch the roadmap item.

<!-- rationale
risk: Medium. The agent picks at run time which attached tools and connector actions to call, and Microsoft Learn documents no switch dedicated to the node itself.
cost: Variable. Workflow actions and the agent node's use consume Copilot Credits, billed to the environment, and no rate specific to the agent node is published.
impact: Medium. Makers who build workflows notice it first; the people who feed or receive the workflow's output see decisions made by an agent instead of a fixed rule.
-->
