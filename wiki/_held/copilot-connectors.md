---
kind: "concept"
title: "Copilot connectors: how does outside data reach Copilot, and who can see it?"
slug: "copilot-connectors"
summary: "Copilot connectors bring data from outside Microsoft 365 into Copilot and Microsoft Search, either indexed (synced) or fetched live (federated). Administrators use them to decide which sources, users and permissions apply."
created: "2026-11-22"
updated: "2026-11-22"
version: 1
tags: ["copilot-connectors","copilot-chat","m365-admin-center","admin-controls","licensing","oversharing","extensibility","write-actions","agents"]
covers: []
sources:
  - title: "Copilot connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/overview"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Manage access permissions for connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    kind: "learn"
  - title: "Manage connector connections"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Delete externalConnection"
    url: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    kind: "learn"
  - title: "Create, update, and delete connections in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/connecting-external-content-manage-connections"
    kind: "learn"
  - title: "Microsoft 365 Copilot Connectors usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage"
    kind: "learn"
related: ["connectors","mcp","usage-reports","auditing","copilot-credits","m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-federated-connectors-write-update-delete","m365-copilot-copilot-people-connectors-introduces-people-data-ingestions-with-differentiat"]
controls:
  - governs: "Which publisher types of federated connectors are available, including future ones"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "API is preview (Tenant Configuration Management): use mode applyOnce with resource type microsoft.agent.allowedagenttypes. Also governs other agents and plugins. AI Administrator."
  - governs: "Tenant-wide ceiling on who can use any agent, plugin or connector"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Preview API: resource type microsoft.agent.useraccess accepts everyone or noOne; the admin centre also offers Specific users or groups."
  - governs: "Whether an individual federated connector is on, and which users or groups get it"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Staging works within the User access population. Enable / Disable is on the same Your connections page."
  - governs: "Whether a synced connection's data appears in Copilot Search and Copilot Chat"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connection > Copilot Visibility"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector"
    api: null
    note: "Page describes the toggle for partner connectors. Does not affect declarative agents."
  - governs: "Whether a connection respects source permissions or is visible to everyone"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connector > Permissions"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    api: null
    note: "View only after creation; the setting is chosen in the Custom setup flow."
  - governs: "Removing a connection and every item indexed through it"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your Connections > connector > Delete"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions"
    api:
      kind: "graph"
      call: "DELETE /v1.0/external/connections/{connectionsId}"
      docs: "https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete"
    note: "The API manages only connections the caller created or was authorised to manage."
  - governs: "Where administrators see Copilot connectors usage"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Reports > Usage > Microsoft Copilot > Connectors"
      docs: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage"
    api: null
    note: "Public preview report. Roles are those for usage reports generally."
confidence: "medium"
dependents: 12
changes:
  - date: "2026-11-22"
    note: "New page explaining synced and federated Copilot connectors, their licensing and where administrators control them."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 87 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 87
  confirmed: 83
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "090a6946f0496aa388ed7e6cd48d2202"
---

## What it is

Copilot connectors bring data from outside Microsoft 365 into Microsoft 365 Copilot, Copilot Chat, Copilot Search and Microsoft Search. There are two models: **synced connectors**, which index external content into Microsoft Graph, and **federated connectors**, which fetch data from the source in real time through the Model Context Protocol (MCP) without indexing it. They are not the Power Platform connectors explained in [Connectors](/concepts/connectors/).

| | Synced, tenant configuration | Synced, self-serve | Federated |
| --- | --- | --- | --- |
| Data | Indexed into Microsoft 365 | Indexed into Microsoft 365 | Fetched live |
| Setup | Admin configures | Admin enables; users authenticate | Admin enables; users authenticate |
| Custom connectors | Yes | No | No |

A synced connector defines a connection to an external source and ingests items through the Microsoft Graph connectors API. Each item carries content, metadata and an access control list (ACL), the list of who may see it in the source system. Search and Copilot show an item only to users who have access in the source. Connectors check for changes periodically, and admins can set the sync frequency and trigger full crawls. Microsoft offers over 100 prebuilt connectors; a custom connector needs a developer to define a schema, register the connection in Microsoft Entra ID and write code.

A federated connector queries the source at the time of the request, using the signed-in user's identity and OAuth 2.0, and indexes nothing. Where a connector provides the tools, it can also create, update or delete data with the user's approval. Federated connectors are one of the ways agents reach tools over [MCP](/concepts/mcp/). Copilot connectors for people data are a variant that brings profile data into Microsoft 365.

## Why it matters

Connectors decide which outside systems Copilot can ground its answers on and who sees what comes back. The choice made when a synced connection is created matters most: its permissions are either source ACLs or visible to everyone, and Microsoft warns that granting access to Everyone can lead to oversharing of sensitive content.

For federated connectors, availability is layered: publisher type, a tenant-wide User access ceiling, per-connector staging and the user's licence all apply. Microsoft documents User access as defaulting to All users, so a connector whose publisher type is allowed is available to all users unless connector-level staging or User access narrows it. See [federated connector management](/features/m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto/) for the change that added these controls.

## Cost and licensing

Microsoft's prerequisites page states that indexing of synced connector data incurs no extra cost for tenants with Microsoft 365 licenses. What a user can reach depends on the licence:

- **Microsoft 365, any plan:** synced connectors in Microsoft Search only.
- **Microsoft 365 plus a Microsoft 365 Copilot add-on licence, or Microsoft 365 E7:** synced connectors for Microsoft Search, Copilot grounding and agents, and federated connectors.
- **Microsoft 365 plus a Copilot Studio licence, or Microsoft 365 Copilot pay-as-you-go:** synced connectors in Microsoft Search and in agents only, with no Copilot grounding and no federated connectors.

Microsoft states that where an organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included with no extra charges, although advanced features such as semantic search need at least one Microsoft 365 Copilot licence in the tenant. Usage billing rates for agents are on Microsoft's Copilot Studio billing page; see [Copilot Credits](/concepts/copilot-credits/).

## Risks and limits

- **Permissions are fixed at creation.** Updating access permissions after a connection is created is not supported. Fixing a wrong **Visible to everyone** choice means deleting the connection and recreating it with **Custom setup**; deleting a connection removes the items indexed through it.
- **Federated connectors need the add-on.** They are not supported with Copilot Studio licences or Microsoft 365 Copilot pay-as-you-go, and a user also needs a Microsoft 365 Copilot licence to see one.
- **Clearing a publisher type does not remove connectors.** Existing connectors of that type stay in **Your connections** with staged rollout set to **No users**, and a setting on an individual connector takes precedence over the bulk setting.
- **Visibility is not removal.** With **Copilot Visibility** off, the connector can still crawl the source; it is excluded from Copilot Search and Copilot Chat but not from declarative agents. Changes take up to 30 minutes.
- **Write tools are not switched separately.** Write, update and delete tools are part of a federated connector and are not enabled separately; they run as the user and need the user's approval.
- **Failed crawls age out data.** If failures stop delete detection, items not rediscovered for 28 days are removed from the index. A permanent failure is shown as **Failed** and raised in service health.
- **Shared settings.** **Agent and plugin access** and **User access** also cover agents and plugins, so a change there reaches more than connectors.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher types of federated connectors are available, including future ones</strong><br><small>Tenant</small><br><small class="controls__note">API is preview (Tenant Configuration Management): use mode applyOnce with resource type microsoft.agent.allowedagenttypes. Also governs other agents and plugins. AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide ceiling on who can use any agent, plugin or connector</strong><br><small>Tenant</small><br><small class="controls__note">Preview API: resource type microsoft.agent.useraccess accepts everyone or noOne; the admin centre also offers Specific users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an individual federated connector is on, and which users or groups get it</strong><br><small>Group</small><br><small class="controls__note">Staging works within the User access population. Enable / Disable is on the same Your connections page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a synced connection's data appears in Copilot Search and Copilot Chat</strong><br><small class="controls__note">Page describes the toggle for partner connectors. Does not affect declarative agents.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connection › Copilot Visibility <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-connector" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a connection respects source permissions or is visible to everyone</strong><br><small class="controls__note">View only after creation; the setting is chosen in the Custom setup flow.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connector › Permissions <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing a connection and every item indexed through it</strong><br><small class="controls__note">The API manages only connections the caller created or was authorised to manage.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your Connections › connector › Delete <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /v1.0/external/connections/{connectionsId}</code> <a href="https://learn.microsoft.com/graph/api/externalconnectors-externalconnection-delete" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where administrators see Copilot connectors usage</strong><br><small>Tenant</small><br><small class="controls__note">Public preview report. Roles are those for usage reports generally.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Reports › Usage › Microsoft Copilot › Connectors <a href="https://learn.microsoft.com/microsoft-365/admin/activity-reports/microsoft-365-copilot-connectors-usage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Configuring and deploying connectors needs the AI administrator role; managing federated connector availability needs Global Administrator or Search Administrator. Changes can take up to 10 minutes to reach Microsoft 365 experiences.

The controls stack for federated connectors: **User access** sets the maximum population and connector staging can narrow it but not widen it, while **Installed for** and agent sharing settings do not apply to them. **Agents** > **Tools** offers tool-level and connector-level blocking, documented only in Microsoft's summary table. Per-connector enable, disable and staging, **Copilot Visibility** and permissions are set in the admin centre; Microsoft Learn documents no API for them at the time of writing (November 2026).

The Graph connections API manages only connections you created or were authorised to manage. Federated connector activity can be audited in Microsoft Purview; see [Auditing](/concepts/auditing/). Report fields are in [usage reports](/concepts/usage-reports/).

## What to check

- Open **Copilot** > **Connectors** > **Your Connections** and review **Permissions** on every synced connection for **Visible to everyone**.
- Check **Agents** > **Settings** > **Agent and plugin access** to see which publisher types are allowed.
- Review **Agents** > **Settings** > **User access** and decide whether All users is the population you intend.
- Confirm who holds a Microsoft 365 Copilot add-on licence or Microsoft 365 E7 before enabling federated connectors.
- Compare each connector's **Staged rollout** and **Copilot Visibility** with the audience you intended.
- Read the **Connectors** usage report, a preview report, to see which connections Copilot used.
- Subscribe an admin mailbox to service health issues so permanent crawl failures reach you.

## Open questions

- The Copilot connectors overview still describes federated connectors as read-only and says write actions start in early October 2026, while the federated connectors overview documents write tools. Which description holds for your tenant?
- Does **User access** set to No users also stop synced connector content grounding Copilot, or only agents and plugins? The pages say it applies to agents and plugins.
- Is an API for per-connector enable, disable and staged rollout, or for **Copilot Visibility**, planned? Not yet documented.
- What is the item quota for a connection and for the tenant, and where is consumption shown?

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: Tools documentation / absence: Agents > Tools blocking is documented only in Microsoft's summary table. | Found: Block (Agents > Tools) has the same effect as Disable. Agents > Tools: Block or unblock connectors and tools. | Fix: Remove ', documented only in Microsoft's summary table'. The custom federated setup page documents the blocking location in its FAQ and explains that connector Block has the same effect as Disable. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors
- [contradicted, blocker] What it is: source permissions; Why it matters / consistency: The unconditional claim that only source-authorised users see indexed items conflicts with the page's Visible to everyone permission option. | Found: Search and Copilot show an item only to users who have access in the source. / its permissions are either source ACLs or visible to everyone | Fix: Replace the unconditional sentence in What it is with 'When Only people with access to this data source is selected, the connector respects source ACLs; Visible to everyone grants access to all users in the organisation.' This is the distinction at https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: POST /beta/admin/configurationManagement/configurationMonitors applies publisher restrictions in preview using mode applyOnce and microsoft.agent.allowedagenttypes. | Found: POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors; applies a desired-state baseline once in applyOnce mode. | Fix: Keep the call. Add to controls[0].note: 'The baseline resource properties.valueObject sets areMicrosoftAppsAllowed, areTenantScopedAppsAllowed and areISVAppsAllowed.' These deciding properties are documented at https://learn.microsoft.com/graph/utcm-agent-resources. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] controls[1].api / command: POST /beta/admin/configurationManagement/configurationMonitors can set microsoft.agent.useraccess to everyone or noOne in preview. | Found: These resources also support remediation and applyOnce. userAssignmentCategory | Write | String | Specifies whether all users or no users can access agents and plugins. | everyone, noOne | Fix: Keep the call. Replace controls[1].note with 'Preview API: set mode to applyOnce and baseline resourceType to microsoft.agent.useraccess; properties.valueObject.userAssignmentCategory accepts everyone or noOne. The admin centre also offers Specific users or groups.' See https://learn.microsoft.com/graph/utcm-agent-resources and the cited create-monitor reference. | Source: https://learn.microsoft.com/graph/utcm-agent-resources
- [supported, minor] What it is: models table, Setup / behaviour: Admins enable federated connectors and users authenticate. | Found: Setup | Admin configures | Admin enables; users authenticate | Admin enables; users authenticate | Fix: Replace the Federated Setup cell with 'Admin enables; users authenticate where required'. The cited overview describes authentication generally, but https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors also documents No Auth. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] What it is: models table, Custom connectors / availability: Federated connectors do not support custom connectors. | Found: Custom connectors | Yes | No | No | Fix: Replace the Federated Custom connectors cell with 'Overview table says No; custom federated setup is documented separately.' The overview conflicts with https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors, which documents creating a custom federated connector against an MCP server. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] What it is: source permissions / behaviour: Search and Copilot show an indexed item only to users who have access in the source system. | Found: Permission-based filtering - Search and Copilot only show items to users who have access in the source system. | Fix: Replace with 'When Only people with access to this data source is selected, the connector respects source ACLs; Visible to everyone grants access to all users in the organisation.' This qualification is documented at https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-access-permissions and resolves the overview's broader wording. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] What it is: federated authentication / behaviour: Federated connectors use OAuth 2.0. | Found: Secure by design; federated access respects source permissions and authentication (OAuth 2.0). | Fix: Replace 'using the signed-in user's identity and OAuth 2.0' with 'using the user's identity and permissions for authenticated sources'. The custom setup page at https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors separately documents Microsoft Entra SSO, OAuth 2.0 and No Auth, unlike the overview's general wording. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/overview
- [supported, minor] What it is: federated actions; Risks and limits: write tools / behaviour: Federated write, update and delete tools need the user's approval. | Found: Tools that create, update, or delete data initially require the user's explicit approval. Users can choose whether Copilot asks again for that tool | Fix: Replace the approval wording in both sections with 'initially require user approval; users can select Allow for conversation or Always allow for an individual tool'. The cited overview's Confirm an action section documents these exceptions to repeated confirmation. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
- [supported, minor] Why it matters: federated availability / availability: An allowed federated connector publisher type makes the connector available to all users unless staging or User access narrows the audience, subject to licensing. | Found: All users (default) | Connector-level staging decides who gets each connector. New connectors are available to all users. | Fix: Replace the second sentence with 'User access defaults to All users; an enabled connector is available to licensed users included in its staged rollout and User access when its publisher type is allowed or it is turned on individually.' The enabled condition is stated at https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [contradicted, minor] What to check: service health email; controls / consistency: The checklist asks readers to configure service health email subscriptions, but no controls row covers that setting. | Found: Subscribe an admin mailbox to service health issues so permanent crawl failures reach you. The seven controls rows cover publisher access, User access, staging, visibility, permissions, deletion and usage reporting, not email subscriptions. | Fix: Remove the service health email subscription bullet from What to check: it is the checklist control without a corresponding row. Do not add a row as part of this correction.
- [contradicted, minor] sources / consistency: The sources omit the custom federated setup page needed to disclose conflicting Microsoft guidance about custom support and authentication. | Found: Sources include Copilot connectors overview and Prerequisites for deploying connectors, but omit Set up custom federated connectors, which documents custom creation and Microsoft Entra SSO, OAuth 2.0 and No Auth. | Fix: Add 'Set up custom federated connectors' at https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors to sources. This is the single consolidated finding for additional Microsoft pages relied on during this check.
-->
