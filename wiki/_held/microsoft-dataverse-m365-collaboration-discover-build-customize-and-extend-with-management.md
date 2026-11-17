---
title: "Microsoft Dataverse: management MCP server for building and governing MCP servers"
slug: "microsoft-dataverse-m365-collaboration-discover-build-customize-and-extend-with-management"
roadmapId: 576752
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "An environment-scoped endpoint lets developers and agents discover tools and assemble custom MCP servers from connectors, Graph APIs and custom APIs; the roadmap says DLP and access controls apply."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "March CY2026"
risk: "high"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not published. Learn labels the reference as preview and does not state a charge."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["dataverse","mcp","mcp-server","connectors","custom-api","dlp","agents"]
sources:
  - title: "Microsoft MCP management MCP server reference (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-management"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Dataverse CLI reference (preview)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference"
    kind: "learn"
  - title: "Advanced connector policies"
    url: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    kind: "learn"
  - title: "Connector data policies that cover MCP connectors (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Connector data policies that cover MCP connectors (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Dataverse MCP Server reference (preview)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-dataverse"
    kind: "learn"
  - title: "Licensing for agents powered by the standard harness"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing"
    kind: "learn"
  - title: "Service protection API limits"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/api-limits"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 576752"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576752"
    kind: "roadmap"
videos: []
related: ["power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"]
controls:
  - governs: "Dataverse MCP server availability (Dataverse data endpoint only)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Allow MCP clients to interact with Dataverse MCP server"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
    note: "Covers the Dataverse /api/mcp entrypoint. Microsoft has not confirmed that this switch governs the management MCP endpoint."
  - governs: "Allowed MCP clients for the Dataverse data endpoint"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Advanced Settings > client > Is Enabled"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api:
      kind: "other"
      call: "dataverse mcp allow <appId>"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference"
    note: "CLI is preview and needs Dataverse admin permissions on the target environment. Dataverse data endpoint only, not the management MCP endpoint."
  - governs: "Which MCP servers and tools users reach in Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Blocks a whole registered server. Single tools: MCP server > Tools > tool toggle, on supported server types via the Agent 365 Tooling Gateway only; not shown to govern direct management-endpoint calls."
  - governs: "Connector data policies that cover MCP connectors"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    api:
      kind: "powershell"
      call: "New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
  - governs: "Controls specific to the management MCP server"
    scope: "environment"
    ui: null
    api: null
    note: "The roadmap, not the Learn reference, says DLP policies and server- and tool-level access controls apply; the reference lists tools but does not describe that governance model."
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:08:36"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse management MCP server, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
  - date: "2026-11-16"
    note: "Correction: default state set to on per the roadmap; unsupported inheritance claims removed; Dataverse control split into availability and client rows; Agent 365 URL fixed; cost rated low."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 65 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 60
  unconfirmed: 2
  contradicted: 3
  attempts: 2
  hash: "32041edc77eee9fb597520adf5c6d1b7"
---

## What's changing

The management MCP server is a build surface and registry for agent-ready tools in an environment. Through a single environment-scoped URL, developers and agents can discover Microsoft-authored or certified MCP servers, query more than 1,470 connectors and their actions, and find custom APIs.

They can also create new MCP servers from connector actions, APIs and reusable tools, or clone an existing one such as the Dataverse MCP server and add or remove tools. Learn lists tool operations for creating, updating, publishing and deleting servers, and sources including connectors, Microsoft Graph APIs, Dataverse custom APIs and remote APIs.

The roadmap shows a preview from March 2026 and general availability targeted for December 2026 in Worldwide. It works from Visual Studio Code, Claude or any HTTP-capable tool. The roadmap describes it as "Enabled for admins/makers/marketers automatically".

## Why it matters

This turns the existing connector catalogue into agent-callable tools without a UI. Administrators gain a central place to see what exists, but also face faster creation of servers that can read or write business data.

The DLP and per-tool access controls that the roadmap says apply become the main safeguards, so their design should precede adoption.

## Risk assessment

**Data exposure**
- New MCP servers can expose connector data to any client allowed to call them.

**Security & identity**
- The roadmap says access controls apply at server and individual tool level; confirm how they map to Entra roles.

**Autonomy & actions**
- Servers can include write actions via connectors and custom APIs, which agents may invoke.

**Change & support**
- Servers can be created and published purely through API calls, which may bypass UI-based review.

## Cost and licensing

Licensing for the management server is not yet published, and the preview reference states no charge.

Copilot Studio consuming agents may use Copilot Credits under their existing billing model; this does not establish a charge for the management server. Whether premium connectors need a licence depends on the consuming product and its licence. Dataverse service protection API limits are constraints on the underlying Dataverse calls, not a published management-server quota or pricing meter.

## Scope

Dataverse environments in the Worldwide cloud, per the roadmap. Used by developers through HTTP endpoints and compatible clients. Existing Dataverse MCP server settings in the Power Platform admin center are separate.

## Governance guidance

### Before rollout
- Review current DLP policies for MCP use.
- Decide who may create and publish MCP servers.
- List connectors and custom APIs you would not want exposed as tools.

### At rollout
- Pilot in a non-production environment.
- Apply tool-level access controls to each server once Microsoft documents them for the management server.

### After rollout
- Inventory MCP servers regularly.
- Review tool calls that change data.
- Retire unused servers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Dataverse MCP server availability (Dataverse data endpoint only)</strong><br><small>Environment</small><br><small class="controls__note">Covers the Dataverse /api/mcp entrypoint. Microsoft has not confirmed that this switch governs the management MCP endpoint.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Allow MCP clients to interact with Dataverse MCP server <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Allowed MCP clients for the Dataverse data endpoint</strong><br><small>Environment</small><br><small class="controls__note">CLI is preview and needs Dataverse admin permissions on the target environment. Dataverse data endpoint only, not the management MCP endpoint.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Advanced Settings › client › Is Enabled <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>dataverse mcp allow &lt;appId&gt;</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which MCP servers and tools users reach in Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Blocks a whole registered server. Single tools: MCP server &gt; Tools &gt; tool toggle, on supported server types via the Agent 365 Tooling Gateway only; not shown to govern direct management-endpoint calls.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connector data policies that cover MCP connectors</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Controls specific to the management MCP server</strong><br><small>Environment</small><br><small class="controls__note">The roadmap, not the Learn reference, says DLP policies and server- and tool-level access controls apply; the reference lists tools but does not describe that governance model.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft has not confirmed that the Dataverse MCP environment switch governs the management MCP endpoint. The Dataverse documentation limits client allow listing to the `/api/mcp` agent entrypoint and does not establish protection of the management endpoint.

Do not assume that allowing or blocking the Dataverse data endpoint grants or revokes access to the management endpoint; Microsoft has not documented that relationship.

[Advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies) can block a whole listed MCP server, not individual MCP tools. Microsoft has not confirmed that they cover the direct management endpoint.

## Open questions

- Which roles may create or publish servers?
- How are the DLP rules evaluated for composed tools?
- Will an admin toggle disable the management server per environment?
- What auditing exists for server changes?

<!-- rationale
risk: High. It lets MCP servers that act on connectors and APIs be composed entirely through API calls, so governance depends on DLP and tool-level access controls being set correctly.
cost: Low. Administration effort; licensing for the management server is not yet published. Consuming agents may use Copilot Credits under their existing billing model, which does not establish a charge for this server.
impact: Medium. Developers and integrators are the main users; agents built on the servers affect end users.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Cost and licensing / cost: The preview reference states that there is no charge. | Found: Searched: '"MCPManagement" licensing pricing management server'; '"management MCP server" "licensing"'. Opened mcp-management in full and billing-licensing. Neither states that the management server is free. | Fix: Replace the first sentence with 'Licensing for the management server is not yet published, and the preview reference does not publish a charge.' Silence about pricing is not a no-charge commitment.
- [contradicted, blocker] controls[3].api; Governance controls table / command: New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell) is a runnable DLP policy-creation call. | Found: New-DlpPolicy -NewPolicy <Object> [-ApiVersion <String>] [<CommonParameters>] New-DlpPolicy -NewPolicy $NewPolicy Creates a new policy with the $NewPolicy object. | Fix: Replace controls[3].api.call and the rendered command with 'New-DlpPolicy -NewPolicy <policyDefinition>'. Move 'Module: Microsoft.PowerApps.Administration.PowerShell' to the row note rather than including it as an executable parenthesised expression. | Source: https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest
- [unsupported, major] Risk assessment: Data exposure / behaviour: New MCP servers can expose connector data to any client allowed to call them. | Found: Searched: '"management MCP server" "data" "client"'; '"MCPManagement" "access" "control"'. Opened management reference and Agent 365 developer experiences; neither defines this universal client/data-access relationship. | Fix: Replace the bullet with 'New MCP servers can include tools backed by connectors and APIs; confirm the data permissions and client access before adoption.' The tool composition is documented at https://learn.microsoft.com/microsoft-copilot-studio/mcp-management; the access relationship is not.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: previewDate; What's changing / record: The roadmap shows a preview from March 2026. | Found: "previewDate": "March CY2026" | Fix: Replace 'The roadmap shows a preview from March 2026' with 'The roadmap lists March CY2026 as the preview target'; the record supplies a target, not confirmation of when preview began.
- [supported, minor] controls[3].governs; Governance controls table / applicability: Connector data policies can cover MCP connector consumption. | Found: To prevent agent makers from using Power Platform connectors as tools in Copilot Studio agents, configure a data policy with the connectors you want to block. Blocking Power Platform connectors also blocks access to tools in connected MCP servers | Fix: Cite https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention and rename this row 'Connector data policies for MCP tools consumed by Copilot Studio agents'. Add the note 'This does not establish that classic data policies govern direct calls to the management MCP endpoint.' | Source: https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention
- [supported, minor] Risk assessment: Autonomy & actions; Why it matters / behaviour: Custom API-backed tools can include operations that change Dataverse data. | Found: An Action is an operation that makes changes to data in the system. It's invoked using the Http POST method and parameters are passed in the body of the request. | Fix: Add https://learn.microsoft.com/power-apps/developer/data-platform/custom-actions#compare-custom-process-action-and-custom-api to sources for the custom API write-operation premise; the cited management reference documents tool composition but not the action/function distinction. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/custom-actions#compare-custom-process-action-and-custom-api
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits an automatically enabled, high-risk change targeted for December 2026 on a 17 November 2026 run. | Found: action: "prepare"; defaultState: "on"; risk: "high"; targetDate: "December CY2026". The standard defines act-now for automatic arrival targeted within about 60 days when risk or cost is medium or higher and a decision is needed. | Fix: Set action to 'act-now': the December month-only target is counted from 1 December, within 60 days of 17 November, and the briefing already identifies a pre-arrival decision about who may create and publish servers.
- [contradicted, minor] Governance guidance: After rollout / consistency: The governance table accounts for the tool-call monitoring that the checklist tells administrators to review. | Found: After rollout: 'Review tool calls that change data.' Open questions: 'What auditing exists for server changes?' The controls table has no tool-call audit or monitoring control. | Fix: Remove 'Review tool calls that change data' from the checklist until a documented review surface is available; retain the open question rather than implying an operational monitoring control has been established.
-->
