---
title: "Copilot Studio: MCP servers as tools in workflow agent nodes"
slug: "copilot-studio-mcp-tools-in-agents"
roadmapId: 562221
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can attach MCP servers as tools to the agent node in Copilot Studio workflows, so an AI step can act in other systems. Usage draws on Copilot Credits; review connector policies and credit limits."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Copilot Studio workflows consume Copilot Studio capacity per action, and the Microsoft Copilot harness bills in Copilot Credits, including for tools such as MCPs. A per-call MCP rate is not stated in the pages' text."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["mcp","copilot-studio","tools","automation","copilot-credits","data-policies","extensibility","agents"]
sources:
  - title: "Microsoft 365 Roadmap 562221"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562221"
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
  - title: "Advanced connector policies"
    url: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Add a Model Context Protocol (MCP) server to your agent as a tool (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-mcp-server"
    kind: "learn"
  - title: "Which MCP servers makers can use (whole-server block) (Power Platform API)"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies"
    kind: "learn"
  - title: "Which Power Platform connectors, and the MCP tools that rely on them, makers can use (PowerShell)"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    kind: "learn"
  - title: "How many Copilot Credits an environment can consume, including workflow runs (Power Platform API)"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    kind: "learn"
videos: []
related: ["mcp","copilot-credits","data-policies","microsoft-copilot-studio-invoke-agents-as-workflow-steps-with-the-agent-node","copilot-studio-require-human-approval-for-tool-calls"]
controls:
  - governs: "Which MCP servers makers can use (whole-server block)"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Advanced connector policies"
      docs: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    api:
      kind: "power-platform-api"
      call: "POST /governance/ruleBasedPolicies?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies"
    note: "General control: Microsoft has not confirmed it applies to the workflow agent node. Path shown is the single-environment one; blocks whole servers only."
  - governs: "Which Power Platform connectors, and the MCP tools that rely on them, makers can use"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy"
      docs: "https://learn.microsoft.com/power-platform/admin/powerapps-powershell"
    note: "General control: Microsoft has not confirmed it applies to the workflow agent node. Needs tenant admin or Environment Admin role."
  - governs: "How many Copilot Credits an environment can consume, including workflow runs"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Manage Copilot Credits > environment"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness"
    api:
      kind: "power-platform-api"
      call: "PUT /licensing/allocationsV2?api-version=2024-10-01"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations"
    note: "Does not stop usage through a linked pay-as-you-go plan. Capacity roles: Power Platform Administrator or Global Administrator."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-11-05T23:59:28"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default is now maker opt-in, licensing and credit billing restated from Learn, MCP-specific limits added, and controls rebuilt with the working registry link and new rows for credentials, confirmation and credits."
  - date: "2026-11-17"
    note: "Corrected after verification: data policy and advanced connector policy guidance, the authenticated-identity condition on the Microsoft 365 Copilot credit exception, the grouped-environment and tool confirmation paths, and the credit consumption API."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 100 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the standard-harness credit inclusion for tools, the endpoint filtering PowerShell call, the Tooling Gateway scope wording, two admin paths, and the advanced connector policy wording."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 121 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "New briefing: MCP servers as tools in the Copilot Studio workflow agent node, with cost, connector-policy and credit controls."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 77 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-17"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 74
  unconfirmed: 0
  contradicted: 3
  attempts: 5
  hash: "851cbd95fd712814d5fb119a96501c5c"
---

## What's changing

Makers can give the agent node in a Copilot Studio workflow tools that are Model Context Protocol (MCP) servers, alongside Power Platform connector actions. MCP is the open standard for exposing tools to an AI agent, so one MCP server can serve several agents and workflows instead of each integration being built separately.

The roadmap item links to no documentation. Microsoft Learn's page on the workflow agent node documents the matching behaviour: in the node's **Tools** section a maker selects **+**, then picks an MCP server (described as a prebuilt server that exposes a curated set of capabilities) or a connector. The page says the agent decides at run time which attached tools to call, in what order and with what arguments. It does not say whether a custom MCP server URL can be added from the node, or which identity a tool call runs under.

The roadmap record gives status Launched, a preview date of May CY2026 and a target date of June CY2026, with General Availability and Preview both listed as release phases, for Worldwide (Standard Multi-Tenant) on the web. The record does not say which capabilities are in which phase, and Learn's page on adding an MCP server to a Microsoft Copilot harness agent is marked as prerelease documentation.

## Why it matters

A workflow that was a fixed sequence of steps can now contain a step where an AI agent chooses tools and arguments itself. Microsoft's page puts it plainly: without tools the agent can only read and reason, and with tools it can also act. For a service owner, each MCP server a maker attaches becomes a new route from an AI step to another system.

Microsoft has not stated an admin-controlled default for this node, so the wiki treats it as something each maker chooses. If nobody acts, no source says existing workflows change, but makers can start attaching MCP servers, and every run draws on Copilot Credits. Spend and connector governance are the two things to settle first.

## Risk assessment

**Data exposure**
- The agent chooses which attached tool to call and what arguments to send, so the data a workflow passes to an MCP server is decided at run time, not at design time. Connector governance (rows 1 and 2 of the controls table) is the way to limit which servers makers can reach; Microsoft has not confirmed it is enforced for the agent node.

**Security & identity**
- The agent node page does not say which identity an MCP tool call uses. Confirm this with Microsoft before relying on per-user permissions at the MCP server.
- Advanced connector policies can block an entire MCP server but, at the time of writing, not individual tools within it, so a server with one risky tool is an all-or-nothing decision.

**Autonomy & actions**
- The page documents a **Request human assistance when unsure** setting on the node: the agent emails the connection owner and waits for a reply. It is a per-node setting that makers choose; the page documents no administrator switch for it.

**Change & support**
- When an environment has used its prepaid Copilot Studio capacity, new workflow runs are blocked until capacity is available, while running workflows complete. A busy agent node can therefore stop other workflows in the same environment.
- Testing in the agent node's **Test** tab can consume Copilot Credits: Learn says using, building, testing and evaluating agents might consume them.

## Cost and licensing

**Licence.** The Learn pages read for this briefing name no per-user licence for the agent node. The Microsoft Copilot harness cost page says harness usage is not included with a user's Microsoft 365 Copilot licence.

**Meter.** Workflows consume Copilot Studio capacity for each action they execute. For experiences on the Microsoft Copilot harness, Copilot Credits are charged for model tokens, tools (including knowledge and MCPs) and the harness itself. Credits are charged to the environment where the agent runs, from prepaid capacity or a linked pay-as-you-go billing plan, not to individual makers. See [Copilot Credits](/concepts/copilot-credits/).

**Caps.** Allocate credits to an environment and clear **Draw from the available capacity in my tenant** (row 3). That setting does not stop consumption through a pay-as-you-go plan linked to the environment. A per-call credit rate for MCP tools is not stated in the text of the billing pages and is not yet published there.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform. Makers configure it in Copilot Studio under **Workflows**; the agent node's tools are attached per node. An inline agent is scoped to its workflow and cannot be reused outside it, per the page, while an existing published agent keeps its own tools.

Learn describes workflows as powered by the Microsoft Copilot harness. The agent node page lists no role or licence prerequisite.

## Governance guidance

### Before rollout
- Review which connector rules cover the environments that host workflows: classic data policies (row 2) and advanced connector policies (row 1). Microsoft has not confirmed that either is enforced for MCP tools in the workflow agent node, so test one blocked server in a development environment first.
- Decide per-environment credit allocations and whether each environment may draw from tenant capacity (row 3), because workflow runs stop when an environment has no capacity left.
- Tell makers that attaching an MCP server lets the agent act in that system, and ask them to name the server's owner in the workflow description.

### At rollout
- Block MCP servers that are not approved using advanced connector policies (row 1). Plan the allowlist first: a saved policy blocks every connector that is not explicitly allowed.
- Where classic data policies are used, remember that blocking Power Platform connectors also blocks tools in connected MCP servers (row 2).
- Apply allocations through the Power Platform API when many environments are involved (row 3).

### After rollout
- Review credit consumption per environment at Licensing > Copilot Studio (row 3) and look for environments that ran out of capacity.
- Re-check connector policies when new MCP servers appear, since advanced connector policies treat new connectors as blocked by default.
- Confirm with makers which workflows still use an agent node with MCP tools, and remove tools no longer needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which MCP servers makers can use (whole-server block)</strong><br><small>Environment group</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the workflow agent node. Path shown is the single-environment one; blocks whole servers only.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Advanced connector policies <a href="https://learn.microsoft.com/power-platform/admin/advanced-connector-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>POST /governance/ruleBasedPolicies?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Power Platform connectors, and the MCP tools that rely on them, makers can use</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the workflow agent node. Needs tenant admin or Environment Admin role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy</code> <a href="https://learn.microsoft.com/power-platform/admin/powerapps-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How many Copilot Credits an environment can consume, including workflow runs</strong><br><small>Environment</small><br><small class="controls__note">Does not stop usage through a linked pay-as-you-go plan. Capacity roles: Power Platform Administrator or Global Administrator.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Manage Copilot Credits › environment <a href="https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PUT /licensing/allocationsV2?api-version=2024-10-01</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-copilot-credit-allocations" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Rows 1 and 2 are general Power Platform controls: Microsoft's pages say they cover MCP connectors and the tools behind them, but none read for this briefing states that they are enforced for the workflow agent node. Advanced connector policies state that design-time enforcement reaches Copilot Studio after Power Automate, and that without it ACP is runtime-only for that workload. The two policy systems can run together in mixed mode, which applies the most restrictive settings from both.

Data policies need a tenant admin or the Environment Admin role. Capacity changes need the Power Platform Administrator or Global Administrator role, or an equivalent role that can manage licensing and capacity. An environment group rule can lock the tenant-capacity setting for member environments.

## Open questions

- Do data policies and advanced connector policies block MCP tools in the workflow agent node at design time and at run time? Watch the Copilot Studio data policy and advanced connector policies pages.
- Which identity do MCP tool calls in the agent node use, and can an administrator restrict it? Watch the agent node page on Microsoft Learn.
- Can makers add a custom MCP server by URL in the agent node, or only servers from the catalogue? Watch the agent node and MCP server pages.
- What do MCP tool calls cost in Copilot Credits, and which parts of this item are still in preview? Watch the usage-based billing overview and the roadmap item.

<!-- rationale
risk: Medium. The agent decides at run time which attached tool to call and with what arguments, so a workflow can act in other systems; connector policies and credit limits exist, but Microsoft has not confirmed they all reach this node.
cost: Variable. Microsoft's billing overview says Copilot Credits are charged for model tokens, tools (including knowledge and MCPs) and the harness; workflows consume Copilot Studio capacity for each action they run.
impact: Medium. Makers building Copilot Studio workflows notice it first; administrators notice through credit consumption and connector policy behaviour. End users are affected only where a workflow they use runs the agent node.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Risk assessment; Governance guidance; Governance controls; Open questions; rationale: risk / applicability: Microsoft has not confirmed that classic data policies apply to MCP tools in the workflow agent node. | Found: These data policies apply to Copilot Studio agents in the environments included in the policy's scope. | Fix: Replace the classic-data-policy nonapplicability caveat throughout with: 'Data policies apply to Copilot Studio agents in environments within the policy scope; blocking Power Platform connectors also blocks tools in connected MCP servers that rely on those connectors.' The node documentation explicitly calls its inline component an agent, so a separate node-specific statement is not required by this platform-wide rule. Keep the recommendation to verify the configured policy in development, but remove the assertion that its applicability is undocumented. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [contradicted, blocker] controls[0].note; Risk assessment; Governance guidance; Governance controls; Open questions; rationale: risk / applicability: Microsoft has not confirmed that advanced connector policies govern MCP tools in the workflow agent node. | Found: At runtime, when a connector operation is invoked, it queries the effective policy for the current hosting environment. This query includes a combined policy that merges the most restrictive settings from both classic data policies and ACP to provide full enforcement. | Fix: Replace the ACP nonapplicability caveat throughout with: 'ACP governs supported connectors in the hosting environment, including MCP server-level blocking. Copilot Studio design-time enforcement follows Power Automate; until design-time support is available, ACP is runtime-only for that workload.' The cited ACP page documents this platform scope, so do not require a separate statement naming the inline node before acknowledging it. Remove the open question about whether ACP applies at all; retain only uncertainty about the current design-time rollout. | Source: https://learn.microsoft.com/power-platform/admin/advanced-connector-policies
- [contradicted, blocker] Why it matters / cost: Every workflow run draws on Copilot Credits. | Found: | Workflows | Yes, when run inside a standard harness agent by a licensed user | Billed in all other cases. | | Fix: Replace 'makers can start attaching MCP servers, and every run draws on Copilot Credits' with 'makers can start attaching MCP servers, and workflow runs can consume Copilot Credits'. In Cost and licensing add the qualification: 'Microsoft lists workflows run inside a standard harness agent by a licensed user as covered by a Microsoft 365 Copilot licence; workflows are billed in all other cases.' Do not conflate this workflow exception with the separate rule that Microsoft Copilot harness agents are billed for all usage. | Source: https://learn.microsoft.com/power-platform/admin/manage-usage-github-copilot-harness
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: MCP is an open standard. | Found: Unlike custom integrations, MCP connectors use an open standard. | Fix: Add https://learn.microsoft.com/azure/sre-agent/mcp-connectors to sources for the statement that MCP is an open standard, or remove the word 'open'. | Source: https://learn.microsoft.com/azure/sre-agent/mcp-connectors#authentication
-->
