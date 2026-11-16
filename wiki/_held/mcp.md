---
kind: "concept"
title: "MCP (Model Context Protocol): how agents reach tools, and where you can stop them"
slug: "mcp"
summary: "MCP is an open protocol that lets agents call external tools and read external data. Administrators use Microsoft's separate connector, registry and environment controls to decide which MCP servers and tools agents can reach."
created: "2026-11-16"
updated: "2026-11-16"
version: 1
tags: ["mcp","mcp-server","connectors","federated-connectors","data-policies","agent-governance","copilot-studio","m365-copilot","dataverse-mcp","work-iq"]
covers: ["mcp-server"]
sources:
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Extend your agent with Model Context Protocol"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agent-extend-action-mcp"
    kind: "learn"
  - title: "Connect your agent to an existing Model Context Protocol (MCP) server"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/mcp-add-existing-server-to-agent"
    kind: "learn"
  - title: "Configure data policies for agents"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/admin-data-loss-prevention"
    kind: "learn"
  - title: "Advanced connector policies"
    url: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    kind: "learn"
  - title: "Tutorial: Manage advanced connector policies programmatically"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies"
    kind: "learn"
  - title: "Manage data policies"
    url: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    kind: "learn"
  - title: "New-DlpPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    kind: "learn"
  - title: "Make your plugin available and govern access"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/govern-plugins"
    kind: "learn"
  - title: "Bring your own (BYO) MCP server"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-byo-mcp-server"
    kind: "learn"
  - title: "Manage Tools Gateway"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-tools-gateway"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Overview of usage-based billing"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview"
    kind: "learn"
  - title: "Connect to Dataverse with model context protocol FAQ"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-faq"
    kind: "learn"
  - title: "Connect to Dataverse with Model Context Protocol"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp"
    kind: "learn"
  - title: "Configure the Dataverse MCP server for an environment"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    kind: "learn"
related: ["data-policies","copilot-credits","managed-environments","copilot-studio-mcp-tools-in-agents","m365-copilot-federated-connectors-write-update-delete","microsoft-dataverse-m365-collaboration-discover-build-customize-and-extend-with-management"]
controls:
  - governs: "Whether an MCP server, and every tool it exposes, is available across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Unblock restores access. Included only with Microsoft 365 E7 / G7 or Agent 365 per the service description."
  - governs: "Which individual tools on an MCP server are enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Tools > Enabled / Disabled toggle > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Rolling out; supported server types only."
  - governs: "Approval of requested MCP servers before agents can use them"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Requests"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/govern-plugins"
    api: null
    note: "Bring-your-own MCP server registration is in preview."
  - governs: "Which publisher types of agents, plugins and connectors, including MCP servers, are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Managing federated connectors needs Global Administrator or Search Administrator."
  - governs: "Which users can use any agent or plugin, including connectors and MCP servers"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options: All users (the default), No users, Specific users or groups."
  - governs: "Whether a federated Copilot connector is on, and for which users or groups"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot connectors > Your connections > connector > Enable / Disable; Staged rollout column > Add staging"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    api: null
    note: "Staging cannot extend beyond User access."
  - governs: "Work IQ MCP tenant policy, including whether mutation operations are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Policy"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    api: null
    note: "Tenant-level on or off in the initial release; up to 24 hours to apply."
  - governs: "Which connectors and MCP servers makers' agents may use in an environment or environment group"
    scope: "environment-group"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Advanced connector policies"
      docs: "https://learn.microsoft.com/power-platform/admin/advanced-connector-policies"
    api:
      kind: "power-platform-api"
      call: "governance/ruleBasedPolicies operations, API version 2024-10-01; rule set ID ConnectorManagement holds the allowlist"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies"
    note: "Server-level blocking only. Also available for a group under Manage > Environment groups > group > Rules."
  - governs: "Which Power Platform connectors, and so the MCP tools that rely on them, agents may use"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Data and privacy > Data policy > New Policy"
      docs: "https://learn.microsoft.com/power-platform/admin/prevent-data-loss"
    api:
      kind: "powershell"
      call: "New-DlpPolicy -DisplayName <name> -EnvironmentType <type> [-Environments <environments>]"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest"
    note: "Blocking a connector also blocks tools in connected MCP servers that rely on it."
  - governs: "Whether MCP clients can use the Dataverse MCP server in an environment, and which clients"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Dataverse Model Context Protocol > Advanced Settings"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable"
    api: null
    note: "Power Platform administrator role. The Copilot Studio client is enabled by default; other clients must be enabled."
confidence: "medium"
dependents: 10
changes:
  - date: "2026-11-16"
    note: "First version of the MCP concept page: what the protocol is, where Microsoft governs it, and what it costs."
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 85
  unconfirmed: 0
  contradicted: 2
  attempts: 1
---

## What it is

The Model Context Protocol (MCP) is an open protocol that lets AI applications use external data sources and tools through one standard interface. An MCP *server* publishes tools and resources; an MCP *client*, such as a Copilot Studio agent or Microsoft 365 Copilot, calls them.

Copilot Studio describes three kinds of MCP content: resources (file-like data an agent can read), tools (functions a model can call to perform an action) and prompts (predefined templates). It currently supports tools and resources. The server supplies each tool's name, description, inputs and outputs, and Copilot Studio reflects tools added or removed on the server. Generative orchestration must be on, and the supported transport is Streamable; SSE has not been supported for MCP since August 2025. When adding a server, a maker chooses no authentication, an API key or OAuth 2.0.

Microsoft governs MCP in several places rather than one:

| Where an agent meets MCP | What governs it |
| --- | --- |
| Copilot Studio agents | Power Platform connectors: data policies and advanced connector policies |
| Microsoft 365 Copilot, Agent 365 | Tools registry and agent settings in the Microsoft 365 admin center |
| Federated Copilot connectors | Copilot connectors > Your connections |
| Dataverse MCP server | A per-environment setting in the Power Platform admin center |

Work IQ MCP, a Microsoft-hosted server, adds a tenant policy layer of its own.

## Why it matters

Each MCP connection is a route from an agent to another system, and where a server exposes write tools it is also a route for changing that system. Microsoft documents that federated connectors can create, update or delete data in the connected system on the user's behalf where a connector provides the tools, and that Dataverse MCP tools can create and update rows.

Because the controls are split, setting one proves little about the others. Microsoft's own plugin guidance says a control on a plugin does not automatically govern every dependency, and the federated connector controls it lists all sit in the Microsoft 365 admin center, with no Power Platform setting among them. Treat each surface in the table above as needing its own decision, and see [data policies](/concepts/data-policies/) for the Power Platform side. For examples at work, see [MCP tools in Copilot Studio agents](/features/copilot-studio-mcp-tools-in-agents/) and [federated connectors with write actions](/features/m365-copilot-federated-connectors-write-update-delete/).

## Cost and licensing

Microsoft Learn states no licence or meter for the protocol itself at the time of writing (November 2026). Cost depends on the client and the server, and each is documented on its own page:

- **Governing tools in the Microsoft 365 admin center.** Microsoft's Agent 365 service description lists controlling which tools, including Microsoft MCP servers, agents can access tenant-wide as not included with Microsoft 365 plans and as requiring Microsoft 365 E7 / G7 or Agent 365.
- **Agents on the Microsoft Copilot harness.** Copilot Credits are charged for tools, including MCPs. See [Copilot Credits](/concepts/copilot-credits/).
- **Work IQ MCP.** Usage is independent of Microsoft 365 Copilot licensing and available through usage-based billing.
- **Dataverse MCP server.** From 15 December 2025, tools are charged when accessed by AI agents created outside Copilot Studio. Qualifying Dynamics 365 Premium licences or a Microsoft 365 Copilot user subscription licence are not charged for accessing Dynamics 365 data.
- **Federated connectors.** A user must hold a Microsoft 365 Copilot licence to see one.

## Risks and limits

- **Server-level blocking only in advanced connector policies.** Granular control over individual MCP tools is not available there, so you cannot allow a server's read tools and block its write tools in that policy type.
- **An advanced connector policy is a strict allowlist.** Once saved or published, every connector not explicitly allowed is blocked, which can stop makers' agents without warning. Custom and HTTP connectors are not yet supported by it.
- **Tool-level control in the registry is limited.** It is rolling out and supports only specific types of MCP servers; where a server does not support tool discovery, only blocking the whole server is possible.
- **Blocking at the wrong level.** Blocking an MCP server also blocks dependent plugins and linked connectors, while blocking a plugin leaves its MCP servers available to other plugins.
- **Third-party servers.** Copilot Studio states that you are responsible for the tools and resources you access from a non-Microsoft MCP server, and data processed by non-Microsoft services is not subject to Microsoft agreements.
- **Disabling the Dataverse MCP server stops every tool and agent that relies on it.** Its client allow list applies only to the /api/mcp entrypoint; MCP-named custom APIs are regular Dataverse APIs and are not restricted by it.
- **Work IQ MCP policy cannot grant access beyond what the signed-in user can already reach**, and a saved change can take up to 24 hours to apply.
- **Region availability.** Microsoft notes that allowing or disallowing tooling and MCP servers in the Microsoft 365 admin center might not be available in your region yet.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an MCP server, and every tool it exposes, is available across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Unblock restores access. Included only with Microsoft 365 E7 / G7 or Agent 365 per the service description.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which individual tools on an MCP server are enabled</strong><br><small>Tenant</small><br><small class="controls__note">Rolling out; supported server types only.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Tools › Enabled / Disabled toggle › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approval of requested MCP servers before agents can use them</strong><br><small>Tenant</small><br><small class="controls__note">Bring-your-own MCP server registration is in preview.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Requests <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/govern-plugins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which publisher types of agents, plugins and connectors, including MCP servers, are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Managing federated connectors needs Global Administrator or Search Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can use any agent or plugin, including connectors and MCP servers</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (the default), No users, Specific users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a federated Copilot connector is on, and for which users or groups</strong><br><small>Tenant</small><br><small class="controls__note">Staging cannot extend beyond User access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot connectors › Your connections › connector › Enable / Disable; Staged rollout column › Add staging <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Work IQ MCP tenant policy, including whether mutation operations are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-level on or off in the initial release; up to 24 hours to apply.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Policy <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which connectors and MCP servers makers' agents may use in an environment or environment group</strong><br><small>Environment group</small><br><small class="controls__note">Server-level blocking only. Also available for a group under Manage &gt; Environment groups &gt; group &gt; Rules.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Advanced connector policies <a href="https://learn.microsoft.com/power-platform/admin/advanced-connector-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>governance/ruleBasedPolicies operations, API version 2024-10-01; rule set ID ConnectorManagement holds the allowlist</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Power Platform connectors, and so the MCP tools that rely on them, agents may use</strong><br><small>Environment</small><br><small class="controls__note">Blocking a connector also blocks tools in connected MCP servers that rely on it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Data and privacy › Data policy › New Policy <a href="https://learn.microsoft.com/power-platform/admin/prevent-data-loss" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-DlpPolicy -DisplayName &lt;name&gt; -EnvironmentType &lt;type&gt; [-Environments &lt;environments&gt;]</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.powerapps.administration.powershell/new-dlppolicy?view=pa-ps-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether MCP clients can use the Dataverse MCP server in an environment, and which clients</strong><br><small>Environment</small><br><small class="controls__note">Power Platform administrator role. The Copilot Studio client is enabled by default; other clients must be enabled.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Dataverse Model Context Protocol › Advanced Settings <a href="https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** The Power Platform administrator role is needed for the Dataverse MCP server settings and for changing connector policies. Managing federated connectors needs Global Administrator or Search Administrator. The Dataverse MCP server must sit in a Managed Environment if it is to be managed through advanced connector policies (see [Managed Environments](/concepts/managed-environments/)).

**How they interact.** A user sees a federated connector only when its publisher type is allowed (or the connector is turned on individually), it is enabled, and the user is in User access and in its staged rollout. Staging cannot extend beyond User access. Clearing a publisher type in Agent and plugin access sets that type's connectors to No users.

**Where it is watched.** Microsoft states that admins can audit federated connector activity in Microsoft Purview, and that security teams can monitor approved bring-your-own server invocations in Microsoft Defender advanced hunting. In Copilot Studio, a data policy violation shows an error banner and makes Publish unavailable. The bring-your-own MCP server feature and Tools Gateway are in preview.

## What to check

- Open Agents > Tools > Registry in the Microsoft 365 admin center and list the MCP servers; block any nobody approved, and review pending requests under Agents > Tools > Requests.
- Compare each environment's advanced connector policy or data policy with the MCP servers its makers use, and confirm no environment is covered by neither.
- Review a federated connector's Tools section for write and delete tools before you enable it.
- Check in each environment whether Dataverse Model Context Protocol is on and which non-Microsoft clients are enabled under Advanced Settings.
- Set Agent and plugin access and User access to the audience you intend.
- Confirm the Work IQ MCP Policy state, allowing for the 24-hour delay.

## Open questions

- Do Power Platform data policies or advanced connector policies govern federated connectors and registry MCP servers in Microsoft 365 Copilot? The pages for those connectors list only Microsoft 365 admin center controls.
- Is there a PowerShell, Microsoft Graph or REST call for blocking an MCP server or a tool in the Microsoft 365 admin center? Not yet documented.
- Are write operations through Work IQ MCP on or off by default? Two Microsoft pages state this differently.
- When will tool-level control cover bring-your-own MCP servers? Microsoft calls it a planned future release.

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[7].api / command: Power Platform API governance/ruleBasedPolicies operations at version 2024-10-01 manage ACP, with ConnectorManagement holding the allowlist. | Found: Advanced connector policies are exposed through the governance/ruleBasedPolicies operations of the Power Platform API. ... the rule set with the ID ConnectorManagement holds the ACP connector allowlist. All examples in the article use API version 2024-10-01. | Fix: Replace the descriptive API text with an actual method and versioned endpoint, for example 'POST https://api.powerplatform.com/governance/ruleBasedPolicies?api-version=2024-10-01', and keep the ConnectorManagement allowlist explanation in the note. The tutorial documents the required ruleSets body. | Source: https://learn.microsoft.com/power-platform/admin/programmability-tutorial-manage-advanced-connector-policies
- [contradicted, blocker] controls[9].api / absence: No API is documented for controlling which clients may use the Dataverse MCP server. | Found: An MCP client that is allowed to talk to MCP endpoint ... Entity set path: [organization URI]/api/data/v9.2/allowedmcpclients ... Operations supported: POSTGETPATCHDELETE ... isenabled | Edm.Boolean | Display name: Is Enabled | Fix: Replace the null API with kind 'rest', call 'PATCH <organization URI>/api/data/v9.2/allowedmcpclients(<allowedmcpclientid>)' and body '{"isenabled": false}' to disable a client, or true to enable it. Cite this reference and the allowedmcpclient table reference. Clarify that this controls individual clients, not the environment-wide server switch. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/allowedmcpclient?view=dataverse-latest
- [supported, minor] Governance controls: Roles / role: The Dataverse MCP configuration guidance requires Power Platform administrator for changing connector policies. | Found: Power Platform administrator role in order to access Dataverse MCP server environment settings, enable allowed MCP clients, create or edit an environment group, and change connector policies. | Fix: Scope this role statement to the Dataverse MCP configuration procedure. Add that classic data-policy documentation allows environment-level administration by Environment Admin, or System Administrator for environments with Dataverse, and Power Platform Administrator for tenant-level policies: https://learn.microsoft.com/power-platform/admin/prevent-data-loss. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/data-platform-mcp-disable
- [supported, minor] What to check: federated connector Tools section / admin-path: A federated connector's admin-center Tools section lists tools that can modify or delete data. | Found: View a connector's tools in the admin center (Coming soon) ... For connectors that support this feature ... includes a Tools section ... Viewing tools in the admin center isn't available for all connectors. | Fix: Qualify the checklist: Microsoft labels the admin-center Tools view 'Coming soon' and it is not available for every connector. Where available, sign in under Tools and select All tools; otherwise use Copilot Settings > Sources > connector > Write/Delete tools, as the cited page describes. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [contradicted, minor] What to check; Governance controls table / consistency: The checklist's instruction to inspect a federated connector's Tools section has a matching controls-table row. | Found: What to check: 'Review a federated connector's Tools section for write and delete tools before you enable it.' The federated connector row covers Enable / Disable and Staged rollout; the individual-tools row concerns the separate MCP registry. | Fix: Add a row for reviewing federated connector tool capabilities, with the coming-soon and supported-connectors qualifications, linking to federated-connectors-overview#view-a-connectors-tools-in-the-admin-center-coming-soon; alternatively remove this checklist item and retain the advice in prose.
-->
