---
kind: "concept"
title: "Plugins: who can install a Copilot plugin, and how do you block one?"
slug: "plugins"
summary: "A plugin is an installable package of skills, MCP servers and connectors that extends Copilot and agents. Administrators decide which publishers, users and individual packages are allowed, installed or blocked."
created: "2026-11-23"
updated: "2026-11-23"
version: 1
tags: ["plugins","m365-copilot","cowork","agent-and-plugin-access","tools","skills","mcp","m365-admin-center","admin-controls","agent-365"]
covers: ["agent-and-plugin-access"]
sources:
  - title: "Overview of the Tools page in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-tools-overview"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Make plugins and agents available and govern access"
    url: "https://learn.microsoft.com/plugins/govern-plugins"
    kind: "learn"
  - title: "Manage plugins for Copilot Cowork"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins"
    kind: "learn"
  - title: "Manage Copilot Cowork for your organization"
    url: "https://learn.microsoft.com/copilot/cowork/cowork-admin-governance"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/plugins/cost-considerations"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Manage Copilot for legal"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-for-legal"
    kind: "learn"
related: ["mcp","app-management","declarative-agents","spending-policies","copilot-credits","cloud-policy","word-legal-plugins-in-copilot","microsoft-copilot-studio-discover-and-add-skills-from-the-skill-catalog"]
controls:
  - governs: "Which publisher categories of plugins users can discover and install"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Categories: Microsoft, your organization, certified external publishers."
  - governs: "Whether users can access agents and plugins at all, or only selected users and groups"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Options: All users (the default), No users, Specific users or groups."
  - governs: "Which users and groups can use an individual plugin"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > plugin > Users"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Beta; needs Agent 365 licence. Request body sets availableTo and allowedUsersAndGroups."
  - governs: "Which users and groups have a plugin installed for them"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > plugin > Install"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Beta. Request body sets deployedTo and acquireUsersAndGroups."
  - governs: "Whether a plugin package is blocked for all users and agents"
    scope: "app"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Plugins > plugin > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta; needs Agent 365 licence. Unblocking the package restores access to its agents."
  - governs: "Whether the legal plugin is available in Copilot in Word desktop"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Legal Skills in M365 Copilot in Word"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Setting name from the Manage Copilot for legal page; the Cowork legal plugin is governed on the Tools page."
confidence: "medium"
dependents: 17
changes:
  - date: "2026-11-23"
    note: "First version of the page: how plugin packages are scoped, installed and blocked in the Microsoft 365 admin center, and what Microsoft documents about their cost."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 83 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 78
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "4a6eb9f29e6e24db07e224942bc1d05b"
---

## What it is

A plugin is an installable package that bundles capabilities an agent can use, such as skills, MCP servers and connectors. Administrators govern a plugin as one package in the Microsoft 365 admin center, on the **Tools** page under **Agents**.

**What a package can hold**

- **Skills**: reusable instructions or workflows that teach an agent how to do a task consistently.
- **MCP servers**: servers that expose tools and resources an agent can discover and use. See [MCP](/concepts/mcp/).
- **Connectors**: connections to external systems and data sources.

For Copilot Cowork, Microsoft describes a plugin as a package distributed through the Microsoft 365 App Store, in the same M365 app package format as Teams apps, Copilot agents and Office add-ins. When a plugin declares an MCP server, Cowork calls `initialize` and `tools/list` at runtime to discover its tools. Plugins are primarily available to users in the Copilot channel, and the catalogue can include third-party plugins as well as Microsoft's own.

**Publishing is not access.** Publishing a plugin doesn't install it or give users access to its data and services. Approval, availability, installation, consent and connection are separate steps, and availability alone isn't an installation.

The Tools registry is separate from the Agent Registry, which inventories agents. See [Agent and app management](/concepts/app-management/) and [Declarative agents](/concepts/declarative-agents/).

## Why it matters

A plugin is where an agent's reach is decided: it can connect an agent to services outside Microsoft 365, and Microsoft notes that data processed by non-Microsoft services isn't subject to Microsoft agreements. Which publisher categories you allow, and which plugins you scope to which users, decide how much of that users can bring into Copilot.

The controls are layers that don't replace each other: publisher category, organisation-wide user access, per-plugin availability, administrator installation and blocking. Microsoft documents the **User access** setting as defaulting to All users, subject to existing app policies and user assignments, so at that default it does not narrow who can use plugins. The narrowing happens in the other layers.

## Cost and licensing

Users of Cowork plugins must have a Microsoft 365 Copilot licence assigned. Plugin activity in Cowork is metered: Microsoft says tool and skill calls count towards the organisation's consumption, and that access to Cowork is granted only through a spending policy that selects it. See [Copilot Credits](/concepts/copilot-credits/) and [Spending policies](/concepts/spending-policies/) for rates and caps.

Microsoft's plugin cost page says costs vary by product and distribution route, and lists licences, usage-based consumption and hosting for remote MCP servers as separate categories. It states no plugin price. The Package Management API requires a Microsoft Agent 365 licence. Audit Standard provides the Copilot activities logs for Cowork and its plugins at no extra cost.

## Risks and limits

- **Blocking is package-level.** Blocking a plugin blocks its included agents, but associated MCP servers and connectors remain available to other plugins. Blocking an MCP server is a separate action, so a blocked plugin can leave its server reachable by another plugin.
- **Approval is not consent.** Package approval or blocking doesn't grant or revoke connected-service permissions. Administrators can't sign in on users' behalf, so each user still completes the connector's own sign-in or consent.
- **Cowork sharing has no tenant off switch.** Microsoft states there is no single tenant setting that turns off plugin sharing for every user. Organisation-wide publication needs administrator approval, but a user can still share an uploaded plugin with specific people.
- **Blocking applies to new conversations.** Conversations already using the plugin continue until they end.
- **Other controls stay separate.** Copilot Studio and Power Platform can have separate controls for their components, such as data policies; see [Data policies](/concepts/data-policies/).
- **Scoping limits.** Country or region scoping isn't supported for plugin availability: use security groups. Purview Information Barriers aren't currently supported for plugin or skill management and sharing.
- **API limits.** The Graph block and update calls are beta, support delegated permissions only and are not available in the US Government clouds or China-operated cloud.
- **Some plugins sit outside the Tools page.** The Word desktop legal plugin is governed by Cloud Policy, and Dynamics 365 Customer Service and Sales plugins for Cowork are on by default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which publisher categories of plugins users can discover and install</strong><br><small>Tenant</small><br><small class="controls__note">Categories: Microsoft, your organization, certified external publishers.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can access agents and plugins at all, or only selected users and groups</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (the default), No users, Specific users or groups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users and groups can use an individual plugin</strong><br><small>App</small><br><small class="controls__note">Beta; needs Agent 365 licence. Request body sets availableTo and allowedUsersAndGroups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › plugin › Users <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups have a plugin installed for them</strong><br><small>App</small><br><small class="controls__note">Beta. Request body sets deployedTo and acquireUsersAndGroups.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › plugin › Install <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a plugin package is blocked for all users and agents</strong><br><small>App</small><br><small class="controls__note">Beta; needs Agent 365 licence. Unblocking the package restores access to its agents.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Plugins › plugin › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the legal plugin is available in Copilot in Word desktop</strong><br><small>Group</small><br><small class="controls__note">Setting name from the Manage Copilot for legal page; the Cowork legal plugin is governed on the Tools page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Legal Skills in M365 Copilot in Word <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Cowork plugin management needs a tenant administrator or the Copilot administrator role. Reviewing MCP server requests needs the Tools page and the ability to grant tenant-wide consent; Learn names AI Administrator and Global Administrator as meeting both.

An allowed publisher category doesn't replace a plugin's own user scope. Users can still discover a restricted plugin and request access; approve or reject requests under **Agents** > **Tools** > **Requests**. Approval doesn't replace permissions or connection setup for connected services. Users see Microsoft-built plugins even where that category is disabled, but can't install them.

Administrator-installed plugins can't be removed by target users, who can only turn them off for their own conversations. To inventory plugins and skills through Graph, call `GET /v1.0/copilot/admin/catalog/packages` with an `elementTypes` filter. Plugin activity appears in Microsoft Purview audit logs under Copilot activities.

## What to check

- Open **Agent and plugin access** and confirm which publisher categories are allowed, especially external publishers.
- Review **User access** and confirm it is not still All users where plugins should be limited.
- Check the **Users** tab of each plugin in use, and note which are available to all users and which to specific groups.
- Compare installed plugins with those you meant to install, since availability is not installation.
- Block any plugin you don't want users or agents to reach, then check whether its MCP servers are reachable through other plugins.
- Look at the Cloud Policy setting for the Word legal plugin if you use Copilot in Word.
- Search Purview audit logs for Copilot activities to see which plugins are being used.

## Open questions

- Does the Tools page in the admin centre need a Microsoft Agent 365 licence? The pages read state the licence requirement only for the Package Management API.
- What is the default for **Agent and plugin access**? Its page doesn't state one.
- Is there a PowerShell or Graph call for **Agent and plugin access** and **User access**? Searches at the time of writing (November 2026) found none.
- The Cowork page words availability as available to all users, specific users or groups, or Block, while the Agent 365 page words it as All users, No users or Specific users and groups. Which labels does the current portal show?
- When will the Package Management block and update calls leave beta and gain application permissions?

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[5].ui / admin-path: The cited Cloud Policy overview documents the route through Configure Settings to Legal Skills in M365 Copilot in Word. | Found: Searched: "Legal Skills in M365 Copilot in Word" PowerShell Graph API Cloud Policy; opened overview-cloud-policy and manage-copilot-for-legal. The overview gives the wizard route but not the final policy name; manage-copilot-for-legal gives that name. | Fix: Keep the path, but change controls[5].ui.docs to https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-for-legal, which names the setting. Keep https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy in sources for the wizard route.
- [contradicted, blocker] controls[0].api; Open questions / absence: No Graph or PowerShell operation is documented for Agent and plugin access. | Found: These resources also support remediation and applyOnce. areISVAppsAllowed | Indicates whether apps, agents, and plugins built by external publishers are allowed. | Fix: Replace controls[0].api with graph call 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Append note: 'TCM preview: mode=applyOnce; baseline.resources uses resourceType microsoft.agent.allowedagenttypes, resourceVersion 1, and properties.valueObject with areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed and areMicrosoftCertifiedThirdPartyAppsAllowed. Global service only; delegated access; signed-in AI Administrator and TCM workload permissions required.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Replace the Open questions absence with 'TCM preview documents automation for publisher categories and all-users/no-users access; its useraccess schema does not document specific-user or group assignment.' | Source: https://learn.microsoft.com/graph/utcm-agent-resources
- [contradicted, blocker] controls[1].api; Open questions / absence: No Graph or PowerShell operation is documented for User access. | Found: These resources also support remediation and applyOnce. userAssignmentCategory | Specifies whether all users or no users can access agents and plugins. | everyone, noOne | Fix: Replace controls[1].api with graph call 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Append note: 'TCM preview: mode=applyOnce; baseline.resources uses resourceType microsoft.agent.useraccess, resourceVersion 1, and properties.valueObject.userAssignmentCategory set to everyone or noOne. Specific-user/group assignment is not documented in this schema. Global service only; delegated access; signed-in AI Administrator and TCM workload permissions required.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Apply the replacement Open questions sentence specified for publisher-category automation. | Source: https://learn.microsoft.com/graph/utcm-agent-resources
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Publisher-category access is configured in Microsoft 365 admin center at Agents > Settings > Agent and plugin access. | Found: Select Agents > Settings > Agent and plugin access. Under the installation settings, choose which publisher categories users can access: Microsoft, your organization, or certified external publishers. | Fix: Extend the path to 'Agents > Settings > Agent and plugin access > installation settings'; retain the note identifying the three publisher categories. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] controls[3].ui / admin-path: Administrator installation is reached at Microsoft 365 admin center > Agents > Tools > plugin > Install. | Found: Select Agents > Tools. From the list, select the plugin or skill that you want to install, and then select Install. | Fix: Keep the path, but append to the note: 'In the installation pane, choose All users or Specific users or groups, then select Next and Install.' The printed route reaches the opening Install action rather than the audience selection. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [supported, minor] Cost and licensing / applicability: Cowork access is granted only through a spending policy selecting Cowork. | Found: Access is granted only through a spending policy that selects Cowork. This article describes worldwide administration. For government tenant enablement, feature differences, and feedback restrictions, see Cowork in GCC. | Fix: Narrow the sentence to 'For worldwide administration, Microsoft says access to Cowork is granted only through a spending policy that selects it.' | Source: https://learn.microsoft.com/copilot/cowork/cowork-admin-governance
- [supported, minor] Risks and limits: Scoping limits / applicability: Purview Information Barriers are not currently supported for Cowork plugin or skill management and sharing. | Found: aren't currently supported for plugin or skill management and sharing. In tenants where IB is enabled, embedded knowledge file uploads are blocked at the tenant level. This prevents affected plugins and skills from being uploaded or published. | Fix: Append: 'In tenants where Information Barriers is enabled, embedded knowledge file uploads are blocked at tenant level, preventing affected plugins and skills from being uploaded or published.' | Source: https://learn.microsoft.com/copilot/cowork/cowork-manage-plugins
- [supported, minor] Governance controls / behaviour: Users can still discover a restricted plugin and eligible users can request access. | Found: If a plugin is restricted by organization-level availability settings or by its user availability configuration, users can still discover the plugin in the Copilot channel. The plugin appears as blocked by organizational policy, and eligible users can select Request access. | Fix: Replace with 'The Agent 365 management page says restricted plugins remain discoverable and eligible users can request access. The Cowork management page instead says only the specified users or security groups can view a plugin scoped to specific users or groups.' Both pages are already cited. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers
- [contradicted, minor] What to check: Search Purview audit logs / consistency: The checklist tells administrators to review Purview audit logs, but the controls table has no audit row. | Found: Search Purview audit logs for Copilot activities to see which plugins are being used. The six controls rows cover publisher access, User access, plugin availability, installation, blocking and the Word legal plugin, not audit. | Fix: Remove the Purview audit-search bullet from What to check; retain the verified audit statements in Cost and licensing and Governance controls.
- [contradicted, minor] What to check: Block any plugin, then check its MCP servers / consistency: The checklist asks administrators to check MCP-server reachability through other plugins, but the controls table has no MCP-server inventory row. | Found: Block any plugin you don't want users or agents to reach, then check whether its MCP servers are reachable through other plugins. The controls table has no MCP-server inventory or reachability row. | Fix: Shorten that checklist bullet to 'Block any plugin you do not want users or agents to reach.' Keep the explanation of shared MCP-server reachability in Risks and limits.
-->
