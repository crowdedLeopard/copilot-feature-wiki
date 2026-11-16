---
title: "Microsoft Dataverse: management MCP server for building and governing MCP servers"
slug: "microsoft-dataverse-m365-collaboration-discover-build-customize-and-extend-with-management"
roadmapId: 576752
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "An environment-scoped endpoint lets developers and agents discover tools and assemble custom MCP servers from connectors, Graph APIs and custom APIs, with DLP and access controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "March CY2026"
risk: "high"
cost: "variable"
impact: "medium"
defaultState: "unknown"
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
  - title: "Microsoft 365 Roadmap item 576752"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576752"
    kind: "roadmap"
  - title: "Which MCP tools users reach in Microsoft 365 Copilot (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Connector data policies that cover MCP connectors (Power Platform admin center)"
    url: "https://learn.microsoft.com/power-platform/admin/connector-action-control"
    kind: "learn"
  - title: "Connector data policies that cover MCP connectors (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
videos: []
related: ["copilot-studio-mcp-tools-in-agents","data-policies","managed-environments","power-pages-power-pages-copilot-use-power-pages-mcp-server-capabilities"]
controls:
  - governs: "Dataverse MCP server availability and allowed MCP clients"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
  - governs: "Which MCP tools users reach in Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > tool > Block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers"
    api: null
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
    note: "Learn describes governance only in terms of data policies and server- and tool-level access."
confidence: "medium"
created: "2026-11-15"
updated: "2026-11-16"
roadmapModified: "2026-10-16T19:08:36"
changes:
  - date: "2026-11-15"
    note: "New briefing: Dataverse management MCP server, in development."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 39
  unconfirmed: 6
  contradicted: 4
  attempts: 1
---

## What's changing

The management MCP server is a build surface and registry for agent-ready tools in an environment. Through a single environment-scoped URL, developers and agents can discover Microsoft-authored or certified MCP servers, query more than 1,470 connectors and their actions, and find custom APIs.

They can also create new MCP servers from connector actions, APIs and reusable tools, or clone an existing one such as the Dataverse MCP server and add or remove tools. Learn lists tool operations for creating, updating, publishing and deleting servers, and sources including connectors, Microsoft Graph APIs, Dataverse custom APIs and REST APIs.

The roadmap shows a preview from March 2026 and general availability targeted for December 2026 in Worldwide. It works from Visual Studio Code, Claude or any HTTP-capable tool.

## Why it matters

This turns the existing connector catalogue into agent-callable tools without a UI. Administrators gain a central place to see what exists, but also face faster creation of servers that can read or write business data.

DLP and per-tool access controls become the main safeguards, so their design should precede adoption.

## Risk assessment

**Data exposure**
- New MCP servers can expose connector data to any client allowed to call them.

**Security & identity**
- Access controls apply at server and individual tool level; confirm how they map to Entra roles.

**Autonomy & actions**
- Servers can include write actions via connectors and custom APIs, which agents may invoke.

**Change & support**
- Servers can be created and published purely through API calls, which may bypass UI-based review.

## Cost and licensing

Not yet published. Connector licensing (premium connectors), Copilot Credits for consuming agents and Dataverse API limits may all apply. Learn describes the reference as preview.

## Scope

Dataverse environments in the Worldwide cloud, per the roadmap. Used by developers through HTTP endpoints and compatible clients. Existing Dataverse MCP server settings in the Power Platform admin center are separate.

## Governance guidance

### Before rollout
- [ ] Review current DLP and advanced connector policies for MCP use.
- [ ] Decide who may create and publish MCP servers.
- [ ] List connectors and custom APIs you would not want exposed as tools.

### At rollout
- [ ] Pilot in a non-production environment.
- [ ] Apply tool-level access controls to each server.

### After rollout
- [ ] Inventory MCP servers regularly.
- [ ] Review tool calls that change data.
- [ ] Retire unused servers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Dataverse MCP server availability and allowed MCP clients</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which MCP tools users reach in Microsoft 365 Copilot</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › tool › Block <a href="https://learn.microsoft.com/microsoft-365/copilot/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connector data policies that cover MCP connectors</strong><br><small>Environment</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/connector-action-control" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy (Microsoft.PowerApps.Administration.PowerShell)</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Controls specific to the management MCP server</strong><br><small>Environment</small><br><small class="controls__note">Learn describes governance only in terms of data policies and server- and tool-level access.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The management server inherits the Dataverse MCP server's environment switch and client allow list; Managed Environments can add [advanced connector policies](https://learn.microsoft.com/power-platform/admin/advanced-connector-policies) that block MCP servers outright. Nothing distinguishes the management server from other MCP endpoints in the admin tooling yet, so a tenant that permits Dataverse MCP for one purpose permits the management server too.

## Open questions

- Which roles may create or publish servers?
- How are the DLP rules evaluated for composed tools?
- Will an admin toggle disable the management server per environment?
- What auditing exists for server changes?

<!-- rationale
risk: High. It lets MCP servers that act on connectors and APIs be composed entirely through API calls, so governance depends on DLP and tool-level access controls being set correctly.
cost: Not yet published. Consuming agents may use Copilot Credits and underlying connector or API limits.
impact: Medium. Developers and integrators are the main users; agents built on the servers affect end users.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] front matter: defaultState / default: The feature's default state is unknown. | Found: Enabled for:

Enabled for admins/makers/marketers automatically | Fix: Set defaultState to "on" and state that the roadmap describes automatic enablement for admins/makers/marketers. Do not infer this management server's default from the separate Dataverse data endpoint.
- [unsupported, major] What's changing: second paragraph / behaviour: The management reference specifically lists REST APIs as a source. | Found: Searched: "management MCP server" "REST"; "management MCP server" "REST APIs". Opened mcp-management: it documents CreateToolWithRemoteAPI, not REST APIs; search results about REST API exposure concerned Azure API Management. | Fix: Replace "REST APIs" with "remote APIs", matching CreateToolWithRemoteAPI at https://learn.microsoft.com/microsoft-copilot-studio/mcp-management.
- [supported, minor] summary; Why it matters; controls[3].note; Governance controls; rationale: risk / record: The management server supports enforcement of DLP policies. | Found: Enterprise ready governance and control

- Enforce data loss prevention (DLP) policies | Fix: In controls[3].note and the rendered note, attribute the DLP and server/tool access-control statements to the roadmap, not to the Learn reference; the opened management reference lists tools but does not describe that governance model.
- [supported, minor] Why it matters; Risk assessment: Autonomy & actions; rationale: impact / behaviour: MCP servers can expose tools that write business data for agents to invoke. | Found: create_record and update_record – Allow copilots to log new actions or modify existing records as part of conversational workflows. | Fix: Add https://learn.microsoft.com/microsoft-copilot-studio/mcp-dataverse to sources as the documented example of data-writing tools in a server the roadmap says can be cloned. | Source: https://learn.microsoft.com/microsoft-copilot-studio/mcp-dataverse#key-features
- [contradicted, blocker] controls[0].ui; Governance controls: first row, allowed MCP clients / admin-path: The first row's path also gives the complete location for configuring allowed MCP clients. | Found: Select Advanced Settings.
The list of available clients is shown. Open the client record you want.
On the MCP client record, set Is Enabled to Yes. | Fix: Split availability and client configuration into separate rows. For clients, extend the current path with "Advanced Settings > client > Is Enabled"; for availability name "Allow MCP clients to interact with Dataverse MCP server". Keep both explicitly limited to the Dataverse data endpoint. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable
- [contradicted, blocker] controls[0].api; Governance controls: first row / absence: No automation is documented for the first row's Dataverse MCP client allow list. | Found: Ensure that a Microsoft Entra application is in the Dataverse MCP allowed clients list for the current profile's environment. This command is an alternative to the manual admin step | Fix: For a separate Dataverse allowed-client row, document the preview CLI command "dataverse mcp allow <appId>" (kind "other"), citing https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference. State that Dataverse admin permissions are required; do not extend its scope to MCPManagement. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/cli/reference
- [unsupported, blocker] controls[1].ui; Governance controls: second row; sources / admin-path: The cited Microsoft 365 Copilot URL documents Agents > Tools > Registry > tool > Block for controlling MCP tools. | Found: Searched: "MCP" "Agents" "Tools" "Registry" "Block" Microsoft 365 admin. Cited /microsoft-365/copilot/manage-plugins-skills-mcp-servers returned HTTP 404; opened the replacement /microsoft-agent-365/admin/manage-plugins-skills-mcp-servers. | Fix: Replace the docs/source URL with https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers. Describe "Agents > Tools > Registry > MCP server > Block" as whole-server blocking for registered servers. Individual tools use "MCP server > Tools > tool toggle" only on supported server types through the Agent 365 Tooling Gateway; do not imply this governs every direct management-endpoint call.
- [unsupported, blocker] Governance controls: paragraph after table / applicability: The management MCP server inherits the Dataverse MCP server's environment switch. | Found: Searched: "management MCP" "DLP" "Dataverse" allowlist; "management MCP server" "enabled". Opened mcp-management and data-platform-mcp-disable: the former has an agent365.svc.cloud.microsoft endpoint; neither states that it inherits the Dataverse switch. | Fix: Remove the inheritance assertion. Say: "Microsoft has not confirmed that the Dataverse MCP environment switch governs the management MCP endpoint." Add that qualification to the Dataverse control row.
- [unsupported, blocker] Governance controls: paragraph after table / applicability: The management MCP server inherits the Dataverse MCP client allow list. | Found: Searched: "management MCP" "DLP" "Dataverse" allowlist. Opened mcp-management and data-platform-mcp-disable. The latter limits MCP allow listing to /api/mcp; no passage applies that list to the distinct MCPManagement endpoint. | Fix: Remove the inheritance assertion. State that the cited Dataverse documentation limits client allow listing to the /api/mcp agent entrypoint and does not establish protection of the separate management endpoint.
- [unsupported, blocker] Governance controls: last sentence / applicability: A tenant permitting Dataverse MCP for one purpose also permits the management MCP server. | Found: Searched: "management MCP server" "access" "control"; "management MCP server" "enabled". Opened mcp-management, data-platform-mcp-disable and the moved admin management page. None establishes that Dataverse permission grants management-server access. | Fix: Delete this conclusion and the assertion that admin tooling makes no distinction. Replace them with: "Do not assume that allowing or blocking the Dataverse data endpoint grants or revokes access to the management endpoint; Microsoft has not documented that relationship."
- [unsupported, blocker] front matter: cost; Cost and licensing; rationale: cost / cost: This management-server change has a confirmed metered cost, as asserted by the variable cost rating. | Found: Searched: "MCPManagement" licensing credits management server; "Dataverse" "management MCP server" "licensing". Read mcp-management and Copilot Studio billing-licensing results. General agent billing is documented, but no meter for this management capability is stated. | Fix: Set cost to "low" for known administration effort and start the cost rationale "Low. Administration effort; licensing for the management server is not yet published." Keep consuming-agent charges explicitly conditional and separate from any unconfirmed management-server meter.
- [supported, minor] Cost and licensing; rationale: cost / cost: Consuming agents may incur Copilot Credits charges. | Found: By using the pay-as-you-go meter, at the end of each month, your organization pays only for the actual number of Copilot Credits its agents use during the month. | Fix: Add this billing source and specify "Copilot Studio consuming agents may use Copilot Credits under their existing billing model; this does not establish a charge for the management server." | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing#get-access-to-copilot-studio
- [supported, minor] Cost and licensing / licensing: Underlying premium connector use has licensing considerations. | Found: The standalone Copilot Studio subscription lets you build agents on any supported channel and connect to any data using premium connectors. | Fix: Add this licensing source and keep the statement conditional on the consuming product and licence. Do not imply that a premium connector necessarily requires a separate add-on beyond the consuming product's existing rights. | Source: https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing#get-access-to-copilot-studio
- [supported, minor] Cost and licensing; rationale: cost / behaviour: Underlying Dataverse API use can be subject to API limits. | Found: Dataverse evaluates service protection API limits for each user. Each authenticated user has an independent limit. | Fix: Cite this API-limits page and describe the limits as constraints on underlying Dataverse calls, not as a published management-server quota or pricing meter. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/api-limits#how-dataverse-enforces-service-protection-api-limits
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The controls table covers the advanced connector policies the checklist tells administrators to review. | Found: Review current DLP and advanced connector policies for MCP use.
Connector data policies that cover MCP connectors | Fix: Add an advanced connector policy row using Power Platform admin center > Security > Data and privacy > Advanced connector policies, sourced to https://learn.microsoft.com/power-platform/admin/advanced-connector-policies. State that it blocks whole listed MCP servers, not individual MCP tools, and do not claim unconfirmed coverage of the direct management endpoint.
-->
