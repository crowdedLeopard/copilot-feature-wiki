---
title: "Copilot Studio: MCP-compliant tools in agents and workflows"
slug: "copilot-studio-mcp-tools-in-agents"
roadmapId: 562221
topic: "copilot-studio"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft Copilot Studio"]
summary: "Makers can add Model Context Protocol servers to Copilot Studio agents as tools. Nothing changes until a maker adds one; data policies, the Microsoft 365 admin center registry and Copilot Credits are the controls to know."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Copilot Credits are the common currency for Copilot Studio; on the Microsoft Copilot harness they are charged for tools including MCPs. Microsoft Learn names no separate MCP licence or price at the time of writing (November 2026)."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["copilot-studio","mcp","tools","connectors","data-policies","endpoint-filtering","extensibility","copilot-credits","copilot-harness","maker-credentials"]
sources:
  - title: "Microsoft 365 Roadmap 562221"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562221"
    kind: "roadmap"
  - title: "Extend your agent with Model Context Protocol"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp"
    kind: "learn"
  - title: "Add a Model Context Protocol (MCP) server to your agent as a tool (Microsoft Copilot) (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-mcp-server"
    kind: "learn"
  - title: "Connect your agent to an existing Model Context Protocol (MCP) server"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Connector endpoint filtering (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    kind: "learn"
  - title: "Advanced connector policies"
    url: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Control maker-provided credentials for authentication"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Add tools to custom agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    kind: "learn"
  - title: "Govern Copilot Credit consumption for agents powered by the Microsoft Copilot harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/guidance/govern-credit-consumption"
    kind: "learn"
  - title: "Entitlement Insight - Get Tenant Resources Across Environments"
    url: "https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-tenant-resources-across-environments"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Allowed endpoints for the HTTP and other listed connectors (not custom MCP connectors) (PowerShell)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Which registered MCP servers users and agents may use across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Approving requests needs AI Administrator or Global Administrator. Tool-level control is rolling out and supports only specific server types registered on Agent 365."
  - governs: "Which connectors, including MCP connectors, agents may use in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy > Assign connectors > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -NewPolicy $NewPolicy"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "Tenant admin or Environment Admin role. Learn says blocking Power Platform connectors also blocks tools in connected MCP servers."
  - governs: "Allowed endpoints for the HTTP and other listed connectors (not custom MCP connectors)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Data policy > Prebuilt Connectors > Configure connector > Connector endpoints"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering"
    api:
      kind: "powershell"
      call: "New-PowerAppDlpPolicyConnectorConfigurations / Set-PowerAppDlpPolicyConnectorConfigurations"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering"
    note: "Preview. Exclusively available for the connectors Learn lists; custom connectors are not among them. Only static design-time endpoints are evaluated."
  - governs: "Whether the Dataverse MCP server is available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
    note: "Power Platform administrator role. On by default for Copilot Studio; clearing it stops all tools and agents that rely on the server."
  - governs: "Whether makers may authenticate tools with their own credentials"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Copilot Studio agents > Control maker credential options"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication"
    api: null
    note: "Path is for ungrouped environments; grouped ones are set on the group (see notes). Applies immediately to existing and new agents. Scheduled, autonomous and background agents fail when maker credentials are prevented."
  - governs: "Whether an agent asks the end user before running a tool"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "Tools > tool > Details > Additional details > Ask the end user before running"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent"
    api: null
    note: "Maker-side, standard harness. Set to No by default."
  - governs: "Copilot Credit consumption by environment or tenant"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Copilot Studio"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    api:
      kind: "power-platform-api"
      call: "GET https://api.powerplatform.com/licensing/entitlements/{entitlementId}/resources?fromDate={fromDate}&toDate={toDate}&api-version=2024-10-01"
      docs: "https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-tenant-resources-across-environments"
    note: "Reporting for the Microsoft Copilot harness; per-agent totals are on the agent's Monitor page in Copilot Studio. The API operation is marked deprecated."
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
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 100
  confirmed: 96
  unconfirmed: 0
  contradicted: 4
  attempts: 3
  hash: "f5eb161ca37d46559e3112b72193fa57"
---

## What's changing

Copilot Studio agents can use tools exposed by a Model Context Protocol (MCP) server. MCP is a standard for exposing tools to an agent; when a maker adds a server, the agent can use every tool that the server exposes during a conversation. On the standard harness, an MCP server can also expose resources and prompts, although Copilot Studio currently supports tools and resources.

How it behaves depends on the harness. For agents on the standard harness, MCP requires generative orchestration, and Copilot Studio supports the Streamable transport type; SSE has not been supported since August 2025. Access to MCP servers relies on Power Platform connectors, so a data policy that regulates connectors also regulates the MCP server and its tools. Makers add a server with the MCP onboarding wizard (None, API key or OAuth 2.0 authentication) or through a custom connector. For agents on the Microsoft Copilot harness, makers choose a server from the MCP tab of the Add a tool dialog or add one by URL; Microsoft marks that Learn page as prerelease documentation.

The roadmap record shows status Launched, with a target of June CY2026 and a preview date of May CY2026. Its release phases are General Availability and Preview, and the cloud listed is Worldwide (Standard Multi-Tenant). The record does not say which capability is at which phase, so treat the Microsoft Copilot harness path as preview until Microsoft's page says otherwise. The Microsoft 365 admin center also lets administrators approve, consent to and block MCP servers registered through Agent 365; after approval and consent a server can take up to 30 minutes to appear in all Copilot Studio environments in the tenant.

## Why it matters

An MCP server turns an agent from something that answers questions into something that can call functions in other systems. Each tool is a capability a maker grants to a model, and the model decides at run time whether to use it. The tool names and descriptions come from the MCP server, not the maker, so a server operator, not your tenant, shapes what the model sees.

Nothing happens until a maker adds a server, so this is a decision about guardrails rather than an emergency. Check both classic data policies and advanced connector policies: ACP can block entire MCP servers, and ACP-only mode ignores classic policies. Keep the registry and server-specific permission checks as well, because the absence of a classic data policy alone does not establish access. Decide before makers do which servers are approved and where they are allowed.

## Risk assessment

**Data exposure**
- Tools receive the inputs the model passes to them. Review the inputs each tool takes before approving a server; they may carry organisational data. When you connect a non-Microsoft product, including an external MCP server, Microsoft states that you are responsible for the tools and resources you access, so assess the operator's terms first.
- Tool names and descriptions are supplied by the server and steer the model's choice of tool. The Learn page tells makers to ask the server author to improve unclear descriptions; treat that as a reason to review each tool list, not only the server.

**Security & identity**
- By default the tool authentication setting is user authentication, and makers can switch a tool to maker-provided credentials, which lets end users act with the maker's access. The environment setting Control maker credential options removes that choice, but it applies immediately to all existing and new agents in the environment, and agents on scheduled, autonomous or background triggers then fail for lack of a signed-in user. Assess those agents before enforcing it.
- Custom MCP servers can authenticate with an API key or OAuth 2.0, so the credentials a maker supplies decide whose access the agent uses; review which makers may create such connections.

**Autonomy & actions**
- Microsoft's registry guidance names tools that write, delete or process payments as high-risk. A tool exposed through MCP runs when the model selects it unless the maker sets Ask the end user before running, which defaults to No.
- Tool-level allow and block in the Microsoft 365 admin center is rolling out and supports only specific types of MCP server registered on Agent 365; other servers can only be blocked whole.

**Change & support**
- On the standard harness, Learn says Copilot Studio dynamically reflects tools added or removed on the server, so the tool set an agent sees can change after the maker has tested it. On the Microsoft Copilot harness, Learn tells makers to edit the server entry to refresh the connection and re-read the tool list.
- Disabling the Dataverse MCP server in an environment stops all tools and agents that rely on it, so expect support calls from makers when you use that switch.

## Cost and licensing

Copilot Credits are the unit for the cost. Learn's licensing page says Copilot Credits are the common currency across Copilot Studio capabilities, available through pay-as-you-go meters, prepurchase plans and prepaid pack subscriptions. For experiences on the Microsoft Copilot harness, Copilot Credits are charged for large language model tokens, tools (including knowledge and MCPs) and the harness itself, and billing starts when someone starts building, including previewing and testing an agent.

To use Copilot Studio, Learn lists one of: a Copilot Studio user licence (free, but it needs a tenant prepaid Copilot Credit pack subscription), the Copilot Studio authors role, a Microsoft 365 Copilot licence, or a trial licence. A trial licence cannot publish agents. Learn's standard-harness licensing page also says that for Microsoft 365 Copilot licence holders, using agents in Copilot Chat, Teams or SharePoint for classic answers, generative answers or Microsoft Graph tenant grounding is not charged when the agent runs with the licensed user's authenticated identity. It does not say that tool or MCP calls fall under that exception.

No MCP-specific licence, price or credit rate is published on the pages read at the time of writing (November 2026). Learn says consumption depends on how experiences are designed, how often they run and the features they use. The credit totals for one agent appear on its Monitor page in Copilot Studio, and across an environment or tenant under Licensing > Copilot Studio in the Power Platform admin center. Check each server provider's licence and commercial terms before approving it, since Microsoft documents nothing about third-party charges.

## Scope

- Makers add compatible MCP servers to individual agents. MCP on the standard harness requires generative orchestration, and Copilot Studio supports the Streamable transport.
- The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists no government clouds; that is a record fact, not a statement that Microsoft excludes them.
- Authoring access is one of the options on Learn's licensing page: a Copilot Studio user licence, the Copilot Studio authors role, a Microsoft 365 Copilot licence or a trial licence.
- Connector rules apply: Learn says a data policy that regulates Power Platform connectors also regulates access to the MCP server and its tools.
- Dataverse has its own MCP server; by default the Microsoft Copilot Studio client for Dataverse MCP is enabled for all environments, and administrators can clear the setting per environment.

## Governance guidance

### Before rollout
- Decide which MCP servers are approved, who reviews the publisher, the tool list and the inputs each tool takes, and who may register a server for the Microsoft 365 admin center registry (AI Administrator or Global Administrator can approve requests).
- Check which environments have a data policy covering the connectors that carry MCP servers, and place unapproved ones in the Blocked group.
- List agents on scheduled or autonomous triggers before you consider enforcing end-user credentials, because they fail without a signed-in user.

### At rollout
- Block servers you have not approved in the Microsoft 365 admin center registry, and use tool-level control only for server types where Learn says it is supported.
- Tell makers to leave Ask the end user before running on for tools that write or delete, and to check each tool's name and description after adding a server.
- Decide whether the Dataverse MCP server stays enabled in each environment.

### After rollout
- Check the Monitor page of agents that use MCP for Copilot Credit totals, and the Licensing > Copilot Studio page for the environment or tenant view.
- Re-read the tool list of approved servers when a server operator announces changes, because tool changes on the standard harness are reflected dynamically.
- Revisit data policies when new MCP connectors appear in the connector list.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which registered MCP servers users and agents may use across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Approving requests needs AI Administrator or Global Administrator. Tool-level control is rolling out and supports only specific server types registered on Agent 365.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors, including MCP connectors, agents may use in an environment</strong><br><small>Environment</small><br><small class="controls__note">Tenant admin or Environment Admin role. Learn says blocking Power Platform connectors also blocks tools in connected MCP servers.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy › Assign connectors › connector › Block <a href="https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -NewPolicy $NewPolicy</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Allowed endpoints for the HTTP and other listed connectors (not custom MCP connectors)</strong><br><small>Environment</small><br><small class="controls__note">Preview. Exclusively available for the connectors Learn lists; custom connectors are not among them. Only static design-time endpoints are evaluated.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Data policy › Prebuilt Connectors › Configure connector › Connector endpoints <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-PowerAppDlpPolicyConnectorConfigurations / Set-PowerAppDlpPolicyConnectorConfigurations</code> <a href="https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Dataverse MCP server is available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Power Platform administrator role. On by default for Copilot Studio; clearing it stops all tools and agents that rely on the server.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether makers may authenticate tools with their own credentials</strong><br><small>Environment</small><br><small class="controls__note">Path is for ungrouped environments; grouped ones are set on the group (see notes). Applies immediately to existing and new agents. Scheduled, autonomous and background agents fail when maker credentials are prevented.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Copilot Studio agents › Control maker credential options <a href="https://learn.microsoft.com/microsoft-copilot-studio/configure-no-maker-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an agent asks the end user before running a tool</strong><br><small>Agent</small><br><small class="controls__note">Maker-side, standard harness. Set to No by default.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>Tools › tool › Details › Additional details › Ask the end user before running <a href="https://learn.microsoft.com/microsoft-copilot-studio/add-tools-custom-agent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot Credit consumption by environment or tenant</strong><br><small>Environment</small><br><small class="controls__note">Reporting for the Microsoft Copilot harness; per-agent totals are on the agent's Monitor page in Copilot Studio. The API operation is marked deprecated.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Copilot Studio <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>GET https://api.powerplatform.com/licensing/entitlements/{entitlementId}/resources?fromDate={fromDate}&amp;toDate={toDate}&amp;api-version=2024-10-01</code> <a href="https://learn.microsoft.com/rest/api/power-platform/licensing/entitlement-insight/get-tenant-resources-across-environments" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Blocking a connector in a data policy is the broadest connector-level block; it also blocks tools in connected MCP servers. The Microsoft 365 admin center registry is a separate control: Learn says the policy you set for each tool applies wherever the tool is used and is enforced at runtime by the Agent 365 Tooling Gateway, so it covers registered servers rather than every server a maker types in by URL. Microsoft Learn does not say how the registry and data policies interact, so apply both.

Connector endpoint filtering is in preview and covers only the connectors Learn lists (such as HTTP and SQL Server); custom connectors are not on that list, so it is not a control over a custom MCP connector. Endpoint rules cover static endpoints chosen at design time only. At the time of writing (November 2026) Microsoft Learn documents no PowerShell, Graph or API route for the registry block, the Dataverse MCP setting, the maker-credential setting or the per-tool confirmation setting. Managed Environments add [advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies), which the Dataverse MCP page says are needed to manage that server that way. The advanced connector policies page also documents a policy on a single environment that is not managed, where nonblockable connectors stay nonblockable, and lists blocking an entire MCP server as supported.

The maker credential setting is an environment-level control, and environment group settings override individual environment settings. For an environment that is in a group, Learn says the setting cannot be configured on the environment's own details page: use Manage > Environment groups > group > Settings > Product > Features > Copilot Studio agents > Control maker credential options, as a tenant admin with access to the group.

The Power Platform API operation in the credit consumption row is marked deprecated in its reference. Learn describes environment entitlement data as aggregate, so it does not give per-agent figures.

## Open questions

- Which of the launched and preview capabilities on the roadmap item map to the standard harness and the Microsoft Copilot harness, and when does the preview documentation for the latter become final? Watch the roadmap item and the Learn page for the Microsoft Copilot harness.
- Is there an MCP-specific credit rate, or any exception for MCP calls made by Microsoft 365 Copilot licence holders? Watch the Copilot Credits billing rates on Learn.
- Will there be a tenant-level allow list for MCP servers a maker adds by URL, independent of the registry and connectors? Learn documents none at the time of writing.
- Can administrators see when a server changes its tool list? Learn describes dynamic reflection but names no admin alert.

<!-- rationale
risk: High. A maker-added MCP server supplies its own tool names and descriptions, and its tools can write or delete in external systems; the broadest block is a data policy on the connector, which does not exist until an admin sets it.
cost: Variable. Copilot Credits are the meter: on the Microsoft Copilot harness they are charged for tools, including MCPs, and building and testing consume credits too. No MCP-specific price is published.
impact: Medium. Makers notice first; end users of an agent notice when it gains tools, and the roadmap record lists the Web platform only. Default Microsoft 365 Copilot behaviour does not change.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: exception qualification; Open questions: credit exception / absence: Whether any Microsoft 365 Copilot licence exception covers MCP tool calls remains undocumented. | Found: Employee-facing usage scenarios (Business to Employee) of Copilot Studio agents and Copilot Studio tools and features that these agents invoke are included in the Microsoft Copilot USL | Fix: Replace 'It does not say that tool or MCP calls fall under that exception' with 'For the standard harness, the billing-rates footnote also includes employee-facing use of the tools and features an agent invokes when the user has a Microsoft Copilot USL and the agent uses that authenticated user identity, subject to fair usage limits.' Cite https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management#copilot-credits-billing-rates. Remove 'or any exception for MCP calls made by Microsoft 365 Copilot licence holders' from Open questions. The cited Microsoft Copilot harness billing statements can remain: its usage is separately charged. | Source: https://learn.microsoft.com/microsoft-copilot-studio/requirements-messages-management
- [contradicted, blocker] controls[2].api / command: New-PowerAppDlpPolicyConnectorConfigurations / Set-PowerAppDlpPolicyConnectorConfigurations is the runnable automation call for endpoint filtering. | Found: New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations | Fix: Replace controls[2].api.call with 'New-PowerAppDlpPolicyConnectorConfigurations -TenantId $TenantId -PolicyName $PolicyName -NewDlpPolicyConnectorConfigurations $ConnectorConfigurations'. Keep the existing docs URL. These variables stand for the tenant ID, policy GUID and connector-configurations object documented there; the slash-separated command names are not a call. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering#powershell-support-for-endpoint-filtering
- [contradicted, blocker] Governance controls: first paragraph / applicability: The registry policy for each tool applies wherever the tool is used and is enforced at runtime by the Agent 365 Tooling Gateway. | Found: The Agent 365 Tooling Gateway enforces the policy at runtime for supported tools and experiences that use the gateway. Don't assume the policy applies across all products or connected components. | Fix: Replace 'Learn says the policy you set for each tool applies wherever the tool is used and is enforced at runtime by the Agent 365 Tooling Gateway, so it covers registered servers rather than every server a maker types in by URL' with 'Learn says the Agent 365 Tooling Gateway enforces tool policy at runtime for supported tools and experiences that use the gateway; do not assume the policy applies across all products or connected components'. Keep the existing registry source. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: The connector block is under Security > Data and privacy > Data policy > New Policy > Assign connectors > connector > Block. | Found: Select Next. The Add an environment page appears. To add an environment to your data policy, select the environment in the Available tab, and then select Add to policy. Select Next. The Assign connectors page appears. | Fix: Include the omitted scope-selection stage: 'Security > Data and privacy > Data policy > New Policy > Add an environment > environment > Add to policy > Assign connectors > connector > Block'. The cited page documents this intervening environment-selection stage. | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] controls[2].ui / admin-path: Endpoint filtering is configured through Data policy > Prebuilt Connectors > Configure connector > Connector endpoints. | Found: The Endpoint configurable column on the Prebuilt Connectors page in Data Policies indicates whether the endpoint filtering capability is supported for the connector. | Fix: Include the selected policy and connector: 'Data policy > policy > Prebuilt Connectors > connector > Configure connector > Connector endpoints'. The cited page says to right-click the supported connector and select Configure connector > Connector endpoints. | Source: https://learn.microsoft.com/power-platform/admin/connector-endpoint-filtering
- [supported, minor] rationale: risk / default: A connector data policy does not exist by default and must be configured by an administrator. | Found: By default, no data policies are implemented in the tenant. | Fix: Add https://learn.microsoft.com/power-platform/guidance/adoption/dlp-strategy to sources for the risk rationale's statement that a data policy does not exist until an administrator sets it. | Source: https://learn.microsoft.com/power-platform/guidance/adoption/dlp-strategy#quick-facts
- [contradicted, minor] Why it matters: ACP checklist; Governance controls / consistency: The instruction to check advanced connector policies has no corresponding row in the controls table. | Found: Check both classic data policies and advanced connector policies: ACP can block entire MCP servers, and ACP-only mode ignores classic policies. The table contains a classic data-policy row but no advanced connector-policy row. | Fix: Remove 'Check both classic data policies and advanced connector policies:' from the checklist-style instruction, leaving the verified factual explanation 'ACP can block entire MCP servers, and ACP-only mode ignores classic policies.' This identifies the uncovered checklist control without requiring another table row.
-->
