---
title: "Copilot Studio: agent node runs an AI agent as a workflow step"
slug: "microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node"
roadmapId: 562222
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
  - title: "Microsoft 365 Roadmap 562222"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562222"
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
    url: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Govern Copilot Credit consumption for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption"
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
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Microsoft 365 Roadmap 566998 (the same feature, listed again)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566998"
    kind: "roadmap"
videos: []
related: ["copilot-credits","data-policies","connectors","knowledge-grounding","copilot-studio-require-human-approval-for-tool-calls"]
controls:
  - governs: "Prepaid Copilot Credits per environment and whether it can draw from the tenant pool"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment > Capacity overages > Draw from the available capacity in my tenant"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Request body: allocatedEntitlements[].entitlementId MCSMessages; allocation.quantity sets the credits; enforcementRules[] ruleType TenantPool with enabled false stops tenant draw. Needs Power Platform or Global Administrator."
  - governs: "Credit consumption by workflow and environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Environments > environment > Copilot Credits capacity > Copilot credit consumption details"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api:
      kind: "power-platform-api"
      call: "GET https://api.powerplatform.com/licensing/entitlements/{entitlementId}/environments/{environmentId}/resources?fromDate={fromDate}&toDate={toDate}&api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-environment-resources"
    note: "The admin centre shows the Agent flow actions used by each workflow. The API is marked deprecated and returns environment resource entitlement snapshots; Learn names MCSMessages as the entitlement ID for Copilot Credits."
  - governs: "Escalation to a person when the agent is unsure"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Workflows > workflow > Build > Add panel > Agent > Request human assistance when unsure"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow"
    api: null
    note: "Per-node maker setting. The agent emails the connection owner and waits for a reply."
  - governs: "Switch dedicated to turning the agent node off"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting dedicated to the agent node is documented at the time of writing (November 2026). Data policy and Work IQ MCP policy are described below the table."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-24"
roadmapModified: "2026-11-17T00:31:56"
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
  - date: "2026-11-19"
    note: "Re-read the Learn pages on 19 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 92 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Corrected after verification: the credit-allocation row's note now names the request-body property that sets the credits allocated to the environment."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 100 statements confirmed"
  - date: "2026-11-19"
    note: "Re-read the Learn pages on 19 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 93 statements confirmed"
  - date: "2026-11-19"
    note: "Re-read the Learn pages on 19 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 101 statements confirmed"
  - date: "2026-11-19"
    note: "Re-read the Learn pages on 19 November 2026: status, dates, credit billing, controls and default state are unchanged."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 98 statements confirmed"
  - date: "2026-11-19"
    note: "Re-read the Learn pages on 19 November 2026: status and dates unchanged; credit-allocation page now at its Microsoft Copilot harness address; removed statements the pages did not support and added the Work IQ policy question."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: removed the open question on whether the Work IQ MCP tenant policy covers the Work IQ setting, since Learn states it applies across the tenant."
  - date: "2026-11-19"
    note: "Corrected after verification: removed the open question about whether the Work IQ MCP tenant policy governs Work IQ in an agent node."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 78 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: classic data policies are ignored in ACP-only mode; the credit-consumption path now runs through the Environments tab to the consumption details grid; the roadmap source now names item 562222."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 94 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: the Learn page identifies success criteria for workflow agents as a preview capability, replacing the statement that it names no preview part."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 97 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 35
verification:
  status: "held"
  date: "2026-11-25"
  version: 35
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 97
  confirmed: 94
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "6b2ef67f4b9baf893d7572b02a132956"
---

## What's changing

The agent node lets a maker hand one step of a Copilot Studio workflow to an AI agent that can reason, call tools and read knowledge sources before returning a result. The result becomes dynamic content that later steps can use. A maker adds it in Copilot Studio by opening **Workflows**, opening or creating a workflow (for an existing workflow, the **Build** tab) and selecting the **Agent** icon on the Add panel.

The node takes one of two forms. **An existing agent** is a published agent that runs with the instructions, tools and knowledge it already has. **New agent for this workflow** is an inline agent scoped to the workflow: its instructions, optional tools (Model Context Protocol (MCP) servers and any Power Platform connector action), optional knowledge (public websites or SharePoint) and its output shape are configured in the node and travel with the workflow. The agent decides at run time which attached tools to call, in what order and with what arguments. Two optional settings are documented: **Work IQ**, which lets the agent use the running user's recent work activity (mail, Teams, calendar, OneDrive and SharePoint context), and **Request human assistance when unsure**, which makes the agent email the connection owner and wait for a reply before continuing.

The roadmap item shows status Launched, with a target date of September CY2026 and a preview date of April CY2026. It lists General Availability and Preview as release phases, Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. The Learn page identifies success criteria for workflow agents as a preview capability, but does not map the roadmap release phases to every node capability.

## Why it matters

The agent node puts AI reasoning inside an otherwise defined sequence of workflow actions: one step can interpret an email or a document and then act through attached connectors. That moves decisions, and sometimes write actions, into flows that makers build. Microsoft Learn documents no tenant switch dedicated to the node at the time of writing (November 2026), so the controls that remain are the ones around it: credit allocation per environment, data policies and Advanced Connector Policies for tools, who can build in the environment, and what the maker attaches.

The cost effect arrives through usage, not a purchase. The node page says that using, building, testing and evaluating agents might consume Copilot Credits, and Learn says the draw-from-tenant option is selected by default for eligible environments with no allocation configuration. A tenant that lets makers build workflows in such an environment can therefore spend shared prepaid capacity before anyone has agreed a budget.

## Risk assessment

**Data exposure**

- The inline agent can be grounded in SharePoint sites and public websites, and the **Work IQ** setting lets it use the running user's mail, Teams, calendar, OneDrive and SharePoint context. Anything the agent reads can end up in its output and in later steps such as emails, Teams messages or Dataverse rows. Microsoft Learn documents no switch dedicated to the node for these settings. For Work IQ in Copilot Studio, Learn lists centralised governance: admins manage Work IQ MCP in the Microsoft 365 admin center, and the ability to allow or disallow tooling and MCP servers there might not be available in every region yet.
- A structured output passes agent-written fields to downstream actions, so review what a workflow writes and to where.

**Security & identity**

- Tools can be any Power Platform connector action or an MCP server. The agent node page does not describe whose credentials a connector action in the node uses, so confirm this per workflow before relying on it.
- Data policies govern Power Platform connector tools in Copilot Studio agents; blocking a connector also blocks tools in connected MCP servers. Advanced Connector Policies govern certified connectors and MCP servers; custom and HTTP connectors still require classic data policies. Classic data policies are ignored in ACP-only mode. Keep scopes that depend on classic data policies for custom or HTTP connectors in mixed mode. Design-time enforcement for Copilot Studio is rolling out; until it is available, Advanced Connector Policies enforce at runtime only.
- With **Request human assistance when unsure** on, the agent emails the connection owner for input and waits for a reply. Confirm that the connection owner is the right person to be asked for each workflow.

**Autonomy & actions**

- Tools let the agent act: the page says that without tools it can only read and reason, and with tools it can also act. Because the agent decides which tool to call and with which arguments, a wrong judgment becomes a real action. The node page documents **Request human assistance when unsure**, which a maker turns on per node. Learn also documents a tenant policy layer for Work IQ MCP that evaluates each MCP tool request.

**Change & support**

- Evaluations are only available for new agents created in workflows, and a maker can run up to 20 evaluations per agent node per day. Expect makers to meet the credit and evaluation limits when iterating.
- Once an environment's prepaid Copilot Studio capacity is fully consumed, new workflow runs are blocked until capacity is available, and running workflows complete normally. Learn says environment capacity controls apply to all Copilot Studio workloads in the environment, so plan the allocation for the other workflows that share it.

## Cost and licensing

Copilot Studio bills the agent node's usage in Copilot Credits. Microsoft Learn says that for experiences powered by the Microsoft Copilot harness, credits are charged for LLM tokens, tools (including knowledge and MCPs) and the harness itself, and that billing starts when makers start building, so testing and evaluating consume credits.

The Learn cost table for Copilot Studio states that workflows are covered by a Microsoft 365 Copilot licence when run inside a standard harness agent by a licensed user, and billed in all other cases. No rate specific to the agent node is published at the time of writing (November 2026).

Capacity is controlled per environment: allocate credits and clear **Draw from the available capacity in my tenant** to cap prepaid consumption at the environment's allocation (first control below). Learn says that setting does not prevent consumption through a linked pay-as-you-go billing plan, and that Azure budgets and alerts notify administrators but do not stop Copilot Studio consumption. If no overage source is enabled, the environment can consume only its allocated prepaid credits.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform; it does not list the US Government clouds, so the page makes no claim about them. Makers use the node from the **Workflows** area of Copilot Studio. Capacity and credit controls are managed by a user with the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity.

The existing-agent picker lists published agents; alternatively, makers can define a new inline agent scoped to the workflow. A maker chooses to add the node from the Add panel, so the page rates the default as user opt-in; Learn documents no administrator switch for it (see the controls table).

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
<tr><td data-label="Control"><strong>Prepaid Copilot Credits per environment and whether it can draw from the tenant pool</strong><br><small>Environment</small><br><small class="controls__note">Request body: allocatedEntitlements[].entitlementId MCSMessages; allocation.quantity sets the credits; enforcementRules[] ruleType TenantPool with enabled false stops tenant draw. Needs Power Platform or Global Administrator.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment › Capacity overages › Draw from the available capacity in my tenant <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT https://api.powerplatform.com/licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Credit consumption by workflow and environment</strong><br><small>Environment</small><br><small class="controls__note">The admin centre shows the Agent flow actions used by each workflow. The API is marked deprecated and returns environment resource entitlement snapshots; Learn names MCSMessages as the entitlement ID for Copilot Credits.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Environments › environment › Copilot Credits capacity › Copilot credit consumption details <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>GET https://api.powerplatform.com/licensing/entitlements/{entitlementId}/environments/{environmentId}/resources?fromDate={fromDate}&amp;toDate={toDate}&amp;api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-environment-resources" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Escalation to a person when the agent is unsure</strong><br><small>Agent</small><br><small class="controls__note">Per-node maker setting. The agent emails the connection owner and waits for a reply.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Workflows › workflow › Build › Add panel › Agent › Request human assistance when unsure <a href="https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/agent-node-workflow" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Switch dedicated to turning the agent node off</strong><br><small>Tenant</small><br><small class="controls__note">No setting dedicated to the agent node is documented at the time of writing (November 2026). Data policy and Work IQ MCP policy are described below the table.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment allocation settings govern every Copilot Studio workload in the environment, not only workflows with agent nodes, so changing them affects agents, flows and prompts in the same environment. If an environment group rule governs the tenant-draw setting, the environment-level setting becomes read-only and programmatic requests cannot override it.

The credit-consumption API call is marked deprecated in its reference. The **Request human assistance when unsure** setting is documented as a per-node maker setting and Learn documents no central setting for it at the time of writing (November 2026).

Platform controls outside the table: data policies govern Power Platform connector tools in Copilot Studio agents, and blocking Power Platform connectors also blocks access to tools in connected MCP servers ([Configure data policies for agents](https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention)). Advanced Connector Policies support certified connectors and MCP servers; custom and HTTP connectors are not yet supported and use classic data policies. Classic data policies are ignored in ACP-only mode. Keep scopes that depend on classic data policies for custom or HTTP connectors in mixed mode ([Advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies)). Work IQ MCP has a tenant-level policy in the Microsoft 365 admin center under **Agents** > **Tools** > **Work IQ MCP** > **Policy**, when the tab is available ([Policy governance for Work IQ MCP](https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp)). Work IQ in Copilot Studio lists centralised governance in the Microsoft 365 admin center ([Work IQ in Copilot Studio](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq)). The table lists only the absence of a switch dedicated to the node.

## Open questions

- Which identity does an agent node use when its attached connector actions or SharePoint knowledge run: the running user, the connection owner or the workflow owner? Watch the agent node page on Microsoft Learn.
- What does a workflow run with an agent node cost in Copilot Credits? Watch the billing pages for the Microsoft Copilot harness.
- Will Microsoft add a setting dedicated to the agent node? Watch Message center and the Workflows overview.
- Which parts of the feature are still in preview, given the roadmap lists both General Availability and Preview as release phases? Watch the roadmap item.

<!-- rationale
risk: Medium. The agent picks at run time which attached tools and connector actions to call, and Microsoft Learn documents no switch dedicated to the node itself.
cost: Variable. The node's usage is billed in Copilot Credits, drawn from an environment's allocation or a linked pay-as-you-go plan, and no rate specific to the agent node is published.
impact: Medium. Makers who build workflows notice it first; the people who feed or receive a workflow's output see decisions made by an agent instead of a fixed rule.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Open questions; rationale: cost / absence: No agent-node rate is published in November 2026. | Found: Classification, inline agents, published agents, and Copilot nodes consume using the same usage-based model as standalone Microsoft Copilot harness agents. Calling the AI node incurs the 0.13 charge, plus usage-based charges for the work it performs. | Fix: Replace the no-rate statements with 'Calling an agent node incurs 0.13 Copilot Credits, plus usage-based charges for the work it performs; the total varies with the agent's work.' Cite https://learn.microsoft.com/microsoft-copilot-studio/guidance/workflows-credit-consumption. Narrow the cost question to 'What will our workflow consume in total, including the 0.13-credit node call and variable agent usage?' | Source: https://learn.microsoft.com/microsoft-copilot-studio/guidance/workflows-credit-consumption
- [contradicted, blocker] Risk assessment: Change & support / behaviour: Once the environment's prepaid capacity is fully consumed, new workflow runs are blocked until capacity is available. | Found: When enabled, an environment can draw from the tenant pool after it exhausts its allocation or when no allocation is set. ... If the environment is linked to a pay-as-you-go billing plan, usage can continue through the linked Azure subscription. | Fix: Replace the sentence with 'When the environment has no Copilot Credits available, new workflow runs, including test runs, are blocked until credits are available; exhausting its prepaid allocation alone does not stop runs if tenant-pool capacity or linked pay-as-you-go billing remains available.' Retain 'Running workflows complete normally.' Sources: https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview and https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-microsoft-copilot-harness
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: Billing can begin while makers build. | Found: The Microsoft Copilot harness charges credits from the moment you start building. Experiences such as creating an automated solution with natural language, previewing and testing an agent, and generating and creating agent evaluations all consume credits. | Fix: Replace 'billing starts when makers start building, so testing and evaluating consume credits' with 'Testing, evaluation and describe-to-design creation consume credits before publication; manually adding actions and configuring parameters on the workflow canvas do not.' Cite https://learn.microsoft.com/microsoft-copilot-studio/guidance/workflows-credit-consumption, which explicitly distinguishes manual authoring from billed build-time activities. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview
- [supported, minor] sources: Microsoft 365 Roadmap 566998 / behaviour: Roadmap item 566998 lists the same agent-node capability again. | Found: **Invoke agents as workflow steps with the agent node** [Web] ... **Roadmap ID:**[562222] ... **Invoke agents as workflow steps with the agent node** [Web] ... **Roadmap ID:**[566998] | Fix: Add https://learn.microsoft.com/microsoft-365/copilot/release-notes#november-17,-2026 to sources as 'Microsoft 365 Copilot release notes', kind learn, to support the duplicate-capability source label. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes#november-17,-2026
- [contradicted, minor] Governance guidance: After rollout / consistency: The checklist tells readers to review the Workflows-page Credit usage (last 30 days) control, but the table has no row for that surface. | Found: Review the **Credit usage (last 30 days)** column on the Workflows page and the **Agent flow actions** line in the Power Platform admin center each month. ... Credit consumption by workflow and environment: Power Platform admin center; Power Platform API. | Fix: Replace that checklist bullet with 'Review the **Agent flow actions** line in the Power Platform admin center each month.' The Workflows column itself is documented in https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flows-overview; this correction removes only the checklist control without a table row.
-->
