---
title: "Microsoft 365 Copilot: admins create custom MCP connectors in the admin centre"
slug: "m365-copilot-admins-can-create-and-deploy-custom-model-context-protocol-mcp-connectors-acr"
roadmapId: 501585
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Admins with the Global Administrator or AI Administrator role can add their own MCP server to Microsoft 365 Copilot as a custom connector. Users see it only when the admin controls and their Copilot licence allow."
status: "launched"
releasePhase: ["Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn states that federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7). A rate specific to custom connectors is not published."
audiences: ["m365-admin","security","service-owner"]
tags: ["m365-copilot","mcp","federated-connectors","copilot-connectors","m365-admin-center","agent-and-plugin-access","extensibility"]
sources:
  - title: "Microsoft 365 Roadmap 501585"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501585"
    kind: "roadmap"
  - title: "Set up custom federated connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
  - title: "Prerequisites for deploying connectors"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/prerequisites"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-federated-copilot-connectors","mcp","copilot-connectors","m365-copilot-federated-connectors-write-update-delete"]
controls:
  - governs: "Whether custom connectors built by your organisation are available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access > Allow agents and plugins built by your organization"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Clear Allow agents and plugins built by your organization (custom connectors). Existing custom connectors are set to No users; a connector turned on individually takes precedence."
  - governs: "Which users or groups can use agents, plugins and connectors at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options are All users (default), Specific users or groups, and No users. It sets the maximum population; connector staging can narrow it but not widen it."
  - governs: "Which users or groups receive an individual custom connector"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Connectors > Your connections > connector > Staged rollout"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    api: null
    note: "The same page also gives Enable, Disable and Delete for the connector."
  - governs: "Whether a connector is blocked in the tools list"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > connector > Block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors"
    api: null
    note: "Learn says Block has the same effect as Disable."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-04-02T23:15:15"
changes:
  - date: "2026-11-25"
    note: "New briefing: custom MCP (federated) connectors created in the Microsoft 365 admin center, their licensing and the admin-centre controls."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 64 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: registration IDs apply only to Microsoft Entra SSO and OAuth 2.0, not No Auth; write tools initially need approval, which users can persist; added the prerequisites page's AI administrator role; completed two paths; removed two checklist items without table rows."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 66
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "8301fe866119952bfb04ed69435a335d"
---

## What's changing

Administrators can create a custom connector in the Microsoft 365 admin center that points Microsoft 365 Copilot at their own Model Context Protocol (MCP) server. The roadmap item describes this as creating custom MCP connectors and deploying them across Microsoft 365, so that an organisation's own data appears in Copilot.

Microsoft Learn documents the feature as custom federated connectors. A custom federated connector starts with an MCP server that exposes tools Copilot can use to read data, or to take actions, in internal systems. The admin creates the connector under **Copilot** > **Connectors** > **Gallery** > **Created by your org** > **Create a new connector** > **Add** > **Custom connector** > **Connect to MCP server** > **Add**, enters a display name, description and base URL, and, for Microsoft Entra SSO or OAuth 2.0, a registration ID from the Teams Developer Portal, and saves it. Authentication is Microsoft Entra SSO, OAuth 2.0 or No Auth. Learn says federated connectors do not index external data into Microsoft 365.

The record lists the status as Launched with a target of February CY2026, release phases Preview and Targeted Release, the Web platform and the Worldwide (Standard Multi-Tenant) cloud. Because the record still lists Preview and Targeted Release alongside the Launched status, treat the roadmap phases as the record's wording and check Learn for changes.

## Why it matters

This gives an administrator a route to put internal systems in front of Copilot users, and it is the administrator who decides which MCP server is trusted. The connector's tools run in the third-party or internal service on behalf of the signed-in user, so the MCP server's own permissions model becomes part of your Copilot exposure.

A custom connector exists once an admin creates it, so the first decision is whether anyone should. Use the existing controls (Agent and plugin access, User access, staged rollout) to decide who tests the connector first, and decide in advance whether write-capable tools are acceptable.

## Risk assessment

**Data exposure**
- A custom connector exposes whatever the MCP server's tools return. Learn says Copilot accesses data using the user's identity and permissions, so the source system's permissions decide what an individual sees.
- Federated connectors do not index external data into Microsoft 365. Data processed by non-Microsoft services is not subject to Microsoft agreements, so review the privacy terms of the MCP server you register.

**Security & identity**
- Authentication is Microsoft Entra SSO, OAuth 2.0 or No Auth. Choosing No Auth for a data source means users do not authenticate to it; confirm that is intended before deploying.
- Setup needs the Global Administrator or AI Administrator role, so connector creation sits with a small set of admins.
- If your MCP server restricts traffic by source IP address, allow Microsoft's static egress addresses. Static egress is enabled by default.

**Autonomy & actions**
- Where the MCP server provides tools that create, update or delete data, Learn says those actions run with the user's permissions. Write, update and delete tools initially require explicit user approval. Users can choose Allow for conversation or Always allow for an individual tool, so subsequent calls can run without asking again. Write, update and delete tools are part of the connector and are not enabled separately.
- Learn labels the admin centre's view of a connector's tools as coming soon, so confirm in the MCP server what each tool can change before staging it.

**Change & support**
- A setting change takes up to 10 minutes to reach Microsoft 365 experiences, so users may need to refresh Copilot or start a new conversation.
- Delete permanently removes a custom connector and its configuration and cannot be undone; Disable keeps it.

## Cost and licensing

Learn's prerequisites page states that federated Copilot connectors are available only to tenants and users with a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), and that they are not supported with Copilot Studio licences or Microsoft 365 Copilot pay-as-you-go. It lists a Microsoft 365 Copilot add-on licence for every user who queries the federated source.

The same page says that if your organisation has Microsoft 365 Copilot licences, connector grounding in Copilot is included and no extra charges apply. A price or credit rate specific to custom MCP connectors is not published at the time of writing (November 2026). Plan for admin time to build or procure the MCP server, register Microsoft Entra SSO or OAuth 2.0 authentication in the Teams Developer Portal and test the connector.

## Scope

Users need a Microsoft 365 Copilot licence to see a federated connector in Copilot, and must also be inside User access and the connector's staged rollout. Admins can see every connector in Your connections even when users cannot.

The set-up page lists Global Administrator or AI Administrator in the Microsoft 365 admin center as the admin permission, plus an appropriate Microsoft Entra admin role for SSO and access to the Teams Developer Portal. The page on managing federated connector availability lists the Global Administrator and Search Administrator roles for managing federated connectors. The connectors prerequisites page instead says that configuring and deploying Copilot connectors requires an AI administrator. The record lists Worldwide (Standard Multi-Tenant) and the Web platform; it does not list GCC, GCC High or DoD.

## Governance guidance

### Before rollout
- Review the MCP server's tools and privacy terms, including any that create, update or delete data, with the system owner.
- Choose Microsoft Entra SSO, OAuth 2.0 or No Auth. Register SSO or OAuth authentication in the Teams Developer Portal before creating the connector; No Auth requires no authentication setup.
- Check **Agents** > **Settings** > **Agent and plugin access** to see whether **Allow agents and plugins built by your organization** is selected.

### At rollout
- Create the connector under **Copilot** > **Connectors** > **Gallery** > **Created by your org** > **Create a new connector** > **Add** > **Custom connector** > **Connect to MCP server** > **Add**, using an account with the Global Administrator or AI Administrator role.
- Stage the connector to a pilot group in **Your connections** before choosing **Deploy to all users**.
- Check **User access** so that the population you expect is the ceiling for the connector.

### After rollout
- Confirm what pilot users get by signing in as a non-admin test user and checking **Settings** > **Sources** in Copilot Chat.
- Disable the connector, or block it under **Agents** > **Tools**, if the MCP server's behaviour is not acceptable.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether custom connectors built by your organisation are available</strong><br><small>Tenant</small><br><small class="controls__note">Clear Allow agents and plugins built by your organization (custom connectors). Existing custom connectors are set to No users; a connector turned on individually takes precedence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access › Allow agents and plugins built by your organization <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can use agents, plugins and connectors at all</strong><br><small>Tenant</small><br><small class="controls__note">Options are All users (default), Specific users or groups, and No users. It sets the maximum population; connector staging can narrow it but not widen it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups receive an individual custom connector</strong><br><small>Group</small><br><small class="controls__note">The same page also gives Enable, Disable and Delete for the connector.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Connectors › Your connections › connector › Staged rollout <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a connector is blocked in the tools list</strong><br><small>Tenant</small><br><small class="controls__note">Learn says Block has the same effect as Disable.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › connector › Block <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/set-up-custom-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says all of the controls must allow a user, so the most restrictive one wins: **Agent and plugin access** decides whether a connector type is available (a connector turned on individually overrides it), **User access** sets the maximum population, and staged rollout narrows within that population. **Deploy to all users** makes the connector available to everyone included in **User access**.

Clearing **Allow agents and plugins built by your organization** leaves existing custom connectors visible to admins but sets their staged rollout to **No users**. Learn describes **Block** under **Agents** > **Tools** as having the same effect as **Disable**. At the time of writing (November 2026), the Learn pages read for these controls describe them in the Microsoft 365 admin center, which is why the API side is shown as not yet documented. The federated connectors overview says admins can audit activity in Microsoft Purview; confirm which events record connector activity before relying on it.

## Open questions

- Which Microsoft Purview audit events record a custom connector's tool calls, and where are they listed? Watch the federated connectors overview on Microsoft Learn.
- When does the admin centre view of a connector's tools (labelled coming soon on Learn) become available, and does it cover custom connectors?
- Does Microsoft publish a price or credit rate specific to custom MCP connectors, beyond the Microsoft 365 Copilot add-on licence? Watch the connectors prerequisites page.
- Will the custom connector controls get an API, or remain admin-centre only? Watch the Microsoft Graph Copilot admin reference.

<!-- rationale
risk: Medium. A custom connector can expose tools that create, update or delete data in internal systems, but those tools initially require user approval, which users can persist for later calls, and existing admin settings decide who gets the connector.
cost: Low. Users need a Microsoft 365 Copilot add-on licence (or Microsoft 365 E7), and Learn says connector grounding is included with Copilot licences; the other cost shown is admin time.
impact: Low. Admins create and stage the connector; users notice it only where User access, staged rollout and their Copilot licence all allow it.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls; Open questions / absence: Microsoft has not documented automation for organization-built connector publisher availability. | Found: areTenantScopedAppsAllowed | Write | Boolean | Indicates whether apps, agents, and plugins built by the organization are allowed. | Fix: Replace controls[0].api null with kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Append to its note: 'Preview TCM automation uses mode=applyOnce and an inline baseline resource with resourceType=microsoft.agent.allowedagenttypes, resourceVersion=1 and properties.valueObject.areTenantScopedAppsAllowed=false to block organization-built items. Requires delegated access and AI Administrator; TCM applyOnce is global-service only.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Replace the prose explanation that all API sides are undocumented with 'Publisher-type availability and User access have preview Microsoft Graph TCM automation; connector-level staging and blocking automation is not yet documented.' Narrow the final Open question to 'Will Microsoft publish APIs for individual custom-connector staging and blocking?' | Source: https://learn.microsoft.com/graph/utcm-agent-resources#allowedagenttypes-resource-type
- [contradicted, blocker] controls[1].api; Governance controls; Open questions / absence: Microsoft has not documented automation for User access. | Found: userAssignmentCategory | Write | String | Specifies whether all users or no users can access agents and plugins. | everyone, noOne | Fix: Replace controls[1].api null with kind graph, call 'POST /beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Append to its note: 'Preview TCM automation uses mode=applyOnce and an inline baseline resource with resourceType=microsoft.agent.useraccess, resourceVersion=1 and properties.valueObject.userAssignmentCategory set to everyone or noOne. This schema does not document assigning specific users or groups. Requires delegated access and AI Administrator; TCM applyOnce is global-service only.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Apply the shared prose and Open question correction specified for controls[0].api. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#useraccess-resource-type
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Autonomy & actions; rationale: risk / behaviour: Where the MCP server exposes appropriate tools, the connector can create, update or delete data. | Found: Where a connector provides the tools, Copilot can also create, update, or delete data in the connected system on the user's behalf. | Fix: Keep the write-capability statement, but add: 'Microsoft Learn is inconsistent: the general Copilot connectors overview still calls federated connectors read-only, while the dedicated federated connectors overview documents create, update and delete tools.' Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/overview#types-of-copilot-connectors, whose search excerpt states 'Federated connectors are read-only; they can search and fetch content but can't write data back.' | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview
-->
