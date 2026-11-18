---
title: "Copilot Studio: connect agents to MCP servers as tools"
slug: "copilot-studio-mcp-tools-in-agents"
roadmapId: 562221
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can add MCP servers to Copilot Studio agents as tools. Data policies regulate access to them; credits are metered. No admin action is required before makers start, so decide your controls first."
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
  model: "mixed"
  notes: "Copilot Studio needs one of: a Copilot Studio user license, the Copilot Studio authors role, a Microsoft 365 Copilot license or a trial. Usage is metered in Copilot Credits; some employee-facing use by Microsoft 365 Copilot users is included. No MCP-specific rate is published."
audiences: ["power-platform-admin","maker","security","finops"]
tags: ["mcp","mcp-server","copilot-studio","tools","data-policies","extensibility","copilot-credits","agent-365"]
sources:
  - title: "Extend your agent with Model Context Protocol"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp"
    kind: "learn"
  - title: "Connect your agent to an existing Model Context Protocol (MCP) server"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent"
    kind: "learn"
  - title: "Add tools and resources from a Model Context Protocol (MCP) server to your agent"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Overview of the Tools page in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-tools-overview"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Billing rates and management"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management"
    kind: "learn"
  - title: "Manage Copilot Credits and capacity for Copilot Studio"
    url: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    kind: "learn"
  - title: "Add-ConnectorsToPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 562221"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562221"
    kind: "roadmap"
videos: []
related: ["mcp","data-policies","copilot-credits","copilot-studio-require-human-approval-for-tool-calls","microsoft-copilot-studio-deliver-rich-interactive-app-experiences-in-copilot-studio-agents"]
controls:
  - governs: "Whether makers can use Power Platform connectors, including MCP servers, as agent tools"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > policy > Add an environment > Assign connectors > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "Add-ConnectorsToPolicy -PolicyName <policy GUID> -Classification Blocked -Connectors $connectors"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest"
    note: "Tenant admin or Environment Admin role. Applies to Copilot Studio agents in the environments in the policy's scope; blocking connectors also blocks tools in connected MCP servers."
  - governs: "Whether an MCP server in the registry, and every tool it exposes, is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Registry and approval controls for Agent 365. Learn says not to assume the policy applies across all products; coverage of servers added in the Copilot Studio wizard is not stated."
  - governs: "Which individual tools on a supported MCP server are enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Tools > Enabled or Disabled toggle"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supports only specific types of MCP servers registered on Agent 365. Servers without tool discovery cannot be managed per tool."
  - governs: "Monthly Copilot Credits limit and hard stop for a Copilot Studio agent"
    scope: "agent"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Products > Copilot Studio > Summary > Manage Agents"
      docs: "https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity"
    api: null
    note: "Hard stop turns the agent off at the limit; limits are not applied instantly. It does not stop agent flows the agent calls."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-18"
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
  - date: "2026-11-18"
    note: "New briefing: documents how makers add MCP servers to Copilot Studio agents, the data policy and registry controls, and what is not yet published about MCP billing."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 86 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 7
verification:
  status: "held"
  date: "2026-11-18"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 79
  unconfirmed: 0
  contradicted: 7
  attempts: 6
  hash: "3f25e6adf2f0b70c495a2495d03872de"
---

## What's changing

Copilot Studio agents can use tools from Model Context Protocol (MCP) servers. MCP is an open protocol for connecting agents to existing knowledge servers and data sources. The roadmap item describes it as a way to integrate proprietary systems, dynamic knowledge sources and custom actions into agentic workflows, and to reuse integrations across agents and workflows. Microsoft Learn says Copilot Studio currently supports MCP tools and resources, and that generative orchestration must be turned on to use MCP.

A maker adds a server from the agent's **Tools** page, either by choosing a Microsoft MCP connector from the catalogue or by using the MCP onboarding wizard (server name, description and URL, with authentication of None, API key or OAuth 2.0). A custom connector made in Power Apps is the alternative route. Copilot Studio supports the Streamable transport type. Each tool or resource a connected server publishes becomes available to the agent automatically, and changes on the server are reflected in Copilot Studio.

When a server is added, all of its tools are on by default (the **Allow all** toggle is on). A maker can turn **Allow all** off and switch tools off individually; tools the server adds later are then off by default, and the maker publishes the agent to apply changes.

Learn also describes a route through Microsoft Agent 365 (preview): a developer registers an existing MCP server with the Agent 365 CLI, an administrator approves the request in the Microsoft 365 admin center and grants Microsoft Entra permissions, and the server can then take up to 30 minutes to appear in Copilot Studio environments.

The roadmap record shows status Launched, with a preview date of May CY2026 and a target date of June CY2026, for Worldwide (Standard Multi-Tenant) on the web. It lists the release phases General Availability and Preview without saying which part is in which. Microsoft has not said whether the feature changes anything for tenants that do nothing.

## Why it matters

This is a maker-side capability with an administrator-side consequence: a maker can point an agent at a server your organisation has never reviewed, and the agent's model can then call that server's tools. Microsoft's documentation does not describe a prerequisite that an administrator enables first, so treat availability as already in the hands of makers in any environment where they build agents.

The control that Learn documents for this is the data policy: access to MCP servers in Copilot Studio relies on Power Platform connectors, so a policy that regulates connectors regulates the server and its tools. If you have not reviewed which connectors your policies block in the environments where agents are built, do that before makers discover the MCP option. Costs follow usage in Copilot Credits, so a popular agent with many tool calls shows up in consumption reports rather than in a licence line.

## Risk assessment

**Data exposure**
- An agent can read the resources and call the tools of any server a maker connects. Microsoft states that when you connect to a non-Microsoft product, including an external MCP server, you are responsible for the tools and resources you access from within Copilot Studio.
- Data policies cover this path: blocking Power Platform connectors also blocks access to tools in connected MCP servers. A tenant-scope policy applies to all agents in all environments across the tenant; otherwise the policy covers the environments in its scope.

**Security & identity**
- The wizard offers None, API key and OAuth 2.0. With API key, the user of the agent provides the key and the agent includes it in requests to the server. Check which authentication types your makers use before you rely on the server owner's controls.
- On the Agent 365 route, approval and Microsoft Entra consent are separate steps, and the reviewer needs access to the Tools page and the ability to grant tenant-wide consent (the page names AI Administrator and Global Administrator).

**Autonomy & actions**
- MCP tools are functions a language model can call to perform an action. All tools are on by default when a server is added, and changes on the server are reflected in Copilot Studio, so a tool the server adds later is available while **Allow all** stays on.
- Per-tool switches exist on the maker side, and on the administrator side for supported servers registered on Agent 365 (rolling out). See also the related briefing on human approval for tool calls.

**Change & support**
- Parts of the route are preview: the Agent 365 registration route and MCP server certification are labelled preview on Learn, and the roadmap lists both General Availability and Preview phases.
- Learn says Agent 365 and Copilot Studio can have separate controls, so a block in one place may not govern the other. Test a block with a maker before relying on it.

## Cost and licensing

**Licence.** Learn says that to use Copilot Studio you need one of: a Copilot Studio user license (free, and it requires a tenant prepaid Copilot Credit pack subscription first), the Copilot Studio authors role, a Microsoft 365 Copilot license, or a Copilot Studio trial license. The licensing page names no separate licence for MCP.

**Meter.** Copilot Credits are the common currency across Copilot Studio capabilities, obtained through pay-as-you-go meters, prepurchase plans and prepaid pack subscriptions. The billing rates page lists no MCP-specific rate at the time of writing (November 2026), so a rate for MCP tool calls is not yet published. Employee-facing use of Copilot Studio tools and features that agents invoke is included in the Microsoft Copilot USL when the user is licensed with Microsoft Copilot and the agent operates using that user's authenticated identity, subject to fair usage limits.

**Limits.** Administrators can set a monthly consumption limit for each Copilot Studio agent (controls table, last row), with notifications and a hard stop that turns the agent off at the limit. Limits are not applied instantly, so leave margin. An environment's allocation is a separate setting: it can draw from unallocated tenant capacity or bill a pay-as-you-go plan once its allocation is used. See [Copilot Credits](/concepts/copilot-credits/).

**Indirect costs.** Charges made by a third-party MCP server itself are not described on the Learn pages read; check the server owner's terms.

## Scope

**Who:** makers building Copilot Studio agents, and the people who use those agents. Learn describes the pages as applying to agents powered by the standard harness. **Where:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the web platform for Microsoft Copilot (Microsoft 365) and Microsoft Copilot Studio; it lists no US Government clouds.

**Prerequisites:** generative orchestration turned on; a server that uses the Streamable transport; Copilot Studio access under one of the licensing options above. **Roles:** configuring a data policy needs a tenant admin or the Environment Admin role; approving MCP requests on the Agent 365 route needs access to the Tools page and tenant-wide consent rights, which the page says AI Administrator and Global Administrator meet.

**Rollout:** the roadmap record shows Launched. Microsoft Learn describes no staged rollout or tenant switch for MCP in Copilot Studio.

## Governance guidance

### Before rollout
- Review which Power Platform connectors your data policies block in the environments where agents are built, and decide whether MCP servers and custom connectors need to be blocked or classified (controls table, row 1).
- Decide who approves MCP server registrations on the Agent 365 route, and whether anyone holds AI Administrator or Global Administrator for it (row 2).
- Set a monthly consumption limit on the agents you expect to use MCP tools, with notification thresholds below the limit (row 4).

### At rollout
- Tell makers that all tools are on by default when a server is added, and that they can turn **Allow all** off, select the tools the agent needs and publish.
- Check each declared tool on a server before approving a registration request on the **Requests (preview)** tab, then grant the Microsoft Entra consent.
- Block a server in the registry that should not be available, then test with a maker whether it affects the same server added through the Copilot Studio wizard (rows 2 and 3).

### After rollout
- Download the Copilot Studio consumption reports and group them by agent and by the **Knowledge sources / Tool used** column to see which tools drive credits.
- Review agents near or over their monthly limit, remembering that limits are not applied instantly (row 4).
- Re-read the Learn billing rates page for an MCP-specific rate, and Message center for changes to the preview routes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether makers can use Power Platform connectors, including MCP servers, as agent tools</strong><br><small>Environment</small><br><small class="controls__note">Tenant admin or Environment Admin role. Applies to Copilot Studio agents in the environments in the policy's scope; blocking connectors also blocks tools in connected MCP servers.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › policy › Add an environment › Assign connectors › connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-ConnectorsToPolicy -PolicyName &lt;policy GUID&gt; -Classification Blocked -Connectors $connectors</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/add-connectorstopolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an MCP server in the registry, and every tool it exposes, is available</strong><br><small>Tenant</small><br><small class="controls__note">Registry and approval controls for Agent 365. Learn says not to assume the policy applies across all products; coverage of servers added in the Copilot Studio wizard is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which individual tools on a supported MCP server are enabled</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supports only specific types of MCP servers registered on Agent 365. Servers without tool discovery cannot be managed per tool.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Tools › Enabled or Disabled toggle <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Monthly Copilot Credits limit and hard stop for a Copilot Studio agent</strong><br><small>Agent</small><br><small class="controls__note">Hard stop turns the agent off at the limit; limits are not applied instantly. It does not stop agent flows the agent calls.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Products › Copilot Studio › Summary › Manage Agents <a href="https://learn.microsoft.com/power-platform/admin/manage-copilot-studio-copilot-credits-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The data policy row is the control Learn documents for MCP servers added in Copilot Studio: it governs them because they rely on Power Platform connectors. It applies to Copilot Studio agents in the environments in the policy's scope, and tenant-scope policies apply to every agent in every environment. Microsoft Learn documents no switch dedicated to MCP in Copilot Studio at the time of writing (November 2026), so the data policy and the per-agent credit limit are the controls to use.

The two registry rows apply to MCP servers in the Microsoft 365 admin center registry. Learn says Copilot Studio and Power Platform can have separate controls for their components, and that a block does not necessarily apply across all products or connected components. Whether they govern a server a maker adds through the Copilot Studio wizard is not stated. Tool-level control is rolling out and supports specific types of MCP servers registered on Agent 365.

The maker's **Allow all** and per-tool toggles in Copilot Studio are maker-side settings and are not an enforcement point for administrators. The monthly agent limit does not stop agent flows the agent calls; those are checked for capacity separately.

## Open questions

- Does blocking an MCP server in the Microsoft 365 admin center registry also stop a maker using the same server through the Copilot Studio wizard or a custom connector? Watch the Manage plugins, skills, and MCP servers page and Message center.
- What Copilot Credits rate applies to an MCP tool call? Watch the Copilot Studio billing rates page.
- Which parts of this feature are in General Availability and which are in Preview, given that the roadmap record lists both phases?
- Will Microsoft document an API for blocking MCP servers or tools, or for setting per-agent credit limits? None is documented at the time of writing (November 2026).

<!-- rationale
risk: Medium. Makers can connect an agent to external MCP servers, and every tool a server offers is on by default, but Microsoft says data policies that regulate connectors also regulate MCP server access.
cost: Variable. Copilot Studio agents are billed in Copilot Credits (pay-as-you-go, prepurchase plans or prepaid packs); the billing rates page lists no MCP-specific rate at the time of writing (November 2026).
impact: Medium. Makers who build agents see the new tool type first; people who use those agents notice the actions and data the added servers bring.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: automatic resources; Risk assessment: Data exposure / behaviour: An agent can read the resources of any connected server without a further server-side prerequisite. | Found: For Copilot Studio agents to use a resource, the MCP server owner needs to configure the resource as an output of one of the MCP tools on the server. | Fix: Qualify both resource-access statements with: 'For an agent to use a resource, the MCP server owner must configure that resource as an output of one of the server's MCP tools.' Cite https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-components-to-agent
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing: Licence; Scope: Prerequisites / licensing: The Copilot Studio authors option is presented without its pay-as-you-go applicability condition. | Found: The Copilot Studio authors setting grants access for applicable pay-as-you-go scenarios. | Fix: Qualify the authors option wherever the access list is used: 'the Copilot Studio authors setting for applicable pay-as-you-go scenarios'. Keep the prerequisite summary consistent. Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing: Licence; Scope; Governance guidance: At rollout / licensing: A trial is presented as an unqualified access option for the workflow that subsequently instructs makers to publish. | Found: The trial license gives you access to Copilot Studio to create agents. You can test your agents using the test chat panel. However, you can't publish the agent. | Fix: Qualify the trial option in licensing notes, the Licence paragraph and prerequisite summary: 'a Copilot Studio trial license for creation and test-chat testing only; trial users cannot publish agents'. Qualify the maker publishing instruction accordingly. Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing: Licence; Scope: Prerequisites / licensing: A Microsoft 365 Copilot license is presented as an unqualified license option for the standard-harness feature. | Found: A Microsoft 365 Copilot license lets you use Copilot Studio to build agents for the Microsoft Copilot harness. | Fix: Add the qualification to the Microsoft 365 Copilot option in licensing notes, the Licence paragraph and prerequisite summary: 'the licensing page describes Microsoft 365 Copilot license access as building agents for the Microsoft Copilot harness'. Do not present it as an unrestricted entitlement to this standard-harness feature. Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing
- [contradicted, blocker] summary; Why it matters / absence: No administrator action or administrator-enabled prerequisite is required before makers start using MCP servers. | Found: Publishing doesn't complete setup in a customer's organization. An admin might need to approve or allow the MCP server before people can use it, and users might need to sign in to the service. | Fix: Replace the summary's third sentence with 'Review data policies and any server-specific approval requirements before makers add servers.' Replace the broad prerequisite-absence sentence in Why it matters with 'A server can require administrator approval or permission before people can use it.' Cite https://learn.microsoft.com/microsoft-copilot-studio/mcp-certification. Do not equate absence of a dedicated feature switch with absence of all administrator prerequisites. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-certification
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: An existing data policy can be opened for connector blocking through Security > Data and privacy > Data policy > policy > Add an environment > Assign connectors > connector > Block. | Found: To edit an existing data policy, select the data policy and select Edit Policy. | Fix: Insert the required Edit Policy action after policy in both front matter and the rendered table. Use 'Security > Data and privacy > Data policy > policy > Edit Policy > Add an environment > Assign connectors > connector > Block'. Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: MCP is an open protocol connecting applications and agents to tools, knowledge and data sources. | Found: MCP is an open standard for connecting applications to tools and context. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/copilot-studio-mcp to sources for the statement that MCP is an open standard. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/copilot-studio-mcp
- [supported, minor] Risk assessment: Change & support / availability: Microsoft MCP server certification is preview. | Found: Microsoft MCP server certification (preview) ... This article contains Microsoft Copilot Studio preview documentation and is subject to change. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/mcp-certification to sources for the certification-preview statement. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-certification
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The governance checklist and stated control gaps are not fully represented in the controls table. | Found: Tell makers ... turn Allow all off ... Download the Copilot Studio consumption reports ... Microsoft Learn documents no switch dedicated to MCP ... [The table contains data policy, two registry controls and monthly agent limits.] | Fix: The At rollout step about maker Allow all/per-tool selection and the After rollout consumption-reporting step have no corresponding control rows. The stated absence of a dedicated MCP switch also has no gap row. These are table-coverage omissions; do not add unverified rows as part of this correction.
-->
