---
title: "Microsoft Agent 365: control plane to observe, govern and secure agents"
slug: "agent-365-control-plane-for-agents"
roadmapId: 558448
topic: "copilot-studio"
products: ["Microsoft Agent 365"]
summary: "Agent 365 is Microsoft's control plane for AI agents: a registry plus governance, security and cost views in the Microsoft 365 admin center. Launched; advanced controls need an Agent 365 or E7 licence."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Per-user Agent 365 licence, or Microsoft 365 E7, which includes it. Inventory, basic governance actions and lifecycle rules are listed as included with Microsoft 365 plans; policy templates, observability and tenant-wide tool control are not."
audiences: ["m365-admin","security","service-owner","finops"]
tags: ["agent-365","control-plane","agent-governance","agent-registry","admin-controls","m365-admin-center","licensing","mcp","copilot-credits"]
sources:
  - title: "Microsoft 365 Roadmap 558448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558448"
    kind: "roadmap"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Microsoft Agent 365 service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Agent management roles and permissions in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage agent instances in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-agent-instances"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Policy templates"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/policy-template"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "July 2026 announcements"
    url: "https://learn.microsoft.com/partner-center/announcements/2026-july#new-licensing-prerequisite-for-agent-365"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","m365-copilot-agent-365-business-analytics-experience","agent-identity","mcp","spending-policies"]
controls:
  - governs: "Whether an individual agent is blocked for the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The UI block is listed as included with Microsoft 365 plans. The Graph API is preview, needs an Agent 365 licence and delegated CopilotPackages.ReadWrite.All."
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "The documented default is All users."
  - governs: "Which publisher types of agents and plugins users can install"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
  - governs: "Whether an MCP server, and every tool it exposes, is available across the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Registry > MCP server > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    api: null
    note: "Tenant-wide tool control is listed as requiring Microsoft 365 E7 / G7 or Agent 365. Tool-level toggles are rolling out for supported server types."
  - governs: "Policy templates applied to agents when they are activated"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Templates > Add a New Template"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/policy-template"
    api: null
    note: "Listed as requiring Microsoft 365 E7 / G7 or Agent 365. Built-in default policies are locked; custom templates add Entra policies."
  - governs: "Rules that bulk-manage agents, such as blocking ownerless agents without usage"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent management rules > Add rule"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    api: null
    note: "Lifecycle rules are listed as included with Microsoft 365 plans. See the agent lifecycle management rules briefing."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-18"
roadmapModified: "2026-08-28T21:59:29"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: licensing now shows the disagreement between Microsoft's pages, controls are re-read and split by agent block, settings, connections and Entra, and registry coverage limits are stated."
  - date: "2026-11-17"
    note: "Corrected after verification: cost rationale now says E7 already includes Microsoft 365 E5 and Agent 365; added the optional delete-permission qualification, the Copilot Studio registry discrepancy, the FAQ prerequisite inconsistency and the observability collection setting on the connections row."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 96 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: replaced the unsupported claim that agents keep running as today with the licensing FAQ's registry and premium-capability split, and noted the Copilot Studio page's different registry path."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 107 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "First briefing for this item: Agent 365 is launched; covers per-user licensing, the registry, block, policy template and MCP controls, and their Graph APIs."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 102 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "First briefing for Agent 365: licensing split between included baseline and Agent 365 or E7 features, six admin centre controls, and the one Graph block operation."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 90 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 7
verification:
  status: "held"
  date: "2026-11-18"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 90
  confirmed: 84
  unconfirmed: 0
  contradicted: 6
  attempts: 6
  hash: "d4ccebff3893fbdb431a57c36974ce5c"
---

## What's changing

Microsoft Agent 365 is Microsoft's control plane for AI agents. The roadmap item describes it as empowering IT and security administrators to observe, govern and secure agents across Microsoft 365 and connected platforms at scale. The roadmap lists it as Launched, with release phase General Availability, a target of May CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft Learn describes it as generally available for the Commercial segment on a per-user basis.

Microsoft Learn says Agent 365 is built on four pillars: management, governance, security and business value. Management centres on the agent registry in the Microsoft 365 admin center, which lists agents from Microsoft, from partners and from your own teams. Governance covers approving agents before they are published, deciding who can use them, controlling which tools agents connect to, and applying policy templates. Security surfaces risk signals from Microsoft Defender, Microsoft Entra and Microsoft Purview in the registry. Business value is the Cost management view of Copilot Credit use by user, group, agent and service.

Not every part needs the Agent 365 licence. The Agent 365 service description lists the registry inventory, basic governance actions (publish, deploy, block, delete, approve, reassign owner) and condition-based lifecycle rules as included with Microsoft 365 plans. It lists policy templates, observability, tenant-wide tool control and the Graph API as requiring Microsoft 365 E7 / G7 or Agent 365.

## Why it matters

This is the place an administrator sees every agent in the tenant and acts on it, so it sets the baseline for how agents are approved, blocked, owned and paid for. Agents from Microsoft, partners and your own teams are listed together, which means one block, one user-access setting and one set of roles apply across them.

Microsoft's pages do not state what Agent 365 does on arrival in a tenant, and no source says existing behaviour changes. The setting the pages do give a default for is User access, which is All users: every user can access agents and plugins, subject to existing app policies and user assignments. The wiki's view is that a tenant with many agents should set its approval, access and tool rules deliberately rather than inherit that default, and should settle the licence question before relying on templates or tenant-wide tool control.

## Risk assessment

**Data exposure**

- The registry shows each agent's owner, usage and risk signals. Several roles can view registry information without being able to change anything, so review who holds those roles.
- The default policy templates include Purview detection of sensitive information in AI interactions and SharePoint site restrictions. For the SharePoint policies, selecting the policy in the template is not enough: an administrator then creates the insights report or applies the Restrict Content discovery setting in the SharePoint admin center, and the tenant needs a Microsoft 365 Copilot licence.

**Security & identity**

- Custom templates can include Microsoft Entra policies (Conditional Access, access packages, custom security attributes). Microsoft says an agent that does not authenticate with its Entra identity can be assigned the policy but it might not be enforced at runtime, so confirm that with the agent developer.
- Creating custom-attribute policies needs the Attribute Assignment Administrator role, and the AI Administrator role does not have enough privileges for Conditional Access or custom security attributes.
- Blocking a plugin or MCP server is not a credential action: Microsoft says not to treat package approval or blocking as granting or revoking connected-service permissions or credentials.

**Autonomy & actions**

- Blocking an agent instance stops it and any actions it is performing. Blocking an agent built in Copilot Studio or Agent Builder affects it in Microsoft Copilot and in other host products such as Outlook and Teams; blocking a SharePoint or Foundry agent only affects its availability in Microsoft Copilot Chat.
- Blocking an MCP server disables all the tools it exposes. Tool-level control is rolling out and supports only specific types of MCP server registered on Agent 365.

**Change & support**

- Restricted plugins stay discoverable and show as blocked by organisational policy, so expect access requests from users.
- The pages disagree on templates: the policy template FAQ says templates apply only on new agent activation, while the agent settings page describes an Apply template rule action that applies a template to existing agents as a one-time bulk operation. Test on a small set before relying on either.

## Cost and licensing

Microsoft Learn states that Agent 365 is licensed on a per-user basis and that at least one user must hold a qualifying Agent 365 licence to enable it. The service description says it is available as a stand-alone subscription for use with eligible Microsoft 365 subscriptions and is also included with Microsoft 365 E7. Plans and pricing are on Microsoft's Agent 365 plans-and-pricing page, which the Learn overview points to, so take rates from there.

Prerequisites for new purchases: a Microsoft Partner Center announcement says that for new Agent 365 purchases from June 1, customers must hold one of a list of prerequisite licences, starting with Microsoft 365 E5/A5/Business Premium. Check that announcement for the other combinations.

The included baseline (registry inventory, basic governance actions including block, lifecycle rules, external agent sync) needs no Agent 365 licence according to the service description. The Package Management Graph API requires an Agent 365 licence. The SharePoint policies in the default templates also need a Microsoft 365 Copilot licence.

Cost management in the Microsoft 365 admin center shows Copilot Credit use by user, group, agent and service, and spending limits can be set for groups and users. See [Spending policies](/concepts/spending-policies/) and [Agent 365 Business Analytics](/features/m365-copilot-agent-365-business-analytics-experience/). Admin time to set templates, rules and access is the remaining indirect cost.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), web, and General Availability. The service description's feature table has a GCC Availability column that says Yes for some capabilities and No for others; the roadmap item does not list GCC, so check the table row for each capability you plan to use.

Roles: Global Administrator and AI Administrator have tenant-wide visibility and governance authority. Several other administrative and security roles can view agent information but only select roles can perform governance actions; Microsoft's roles page has the table. Product-specific admin roles such as Power Platform Administrator govern only within their product.

## Governance guidance

### Before rollout

- Confirm the licence position: which users hold Agent 365 or Microsoft 365 E7, and whether the tenant meets the prerequisite licences for new purchases.
- Assign agent management to AI Administrator rather than Global Administrator where possible, and review who holds the view-only roles.
- Set User access and Agent and plugin access deliberately, because User access defaults to All users.
- List the agents and MCP servers already in the registry so you know what a block would affect.

### At rollout

- Create custom policy templates after the Entra policies they need exist, and confirm the agents authenticate with their Entra identity.
- Run agent management rules to flag or block ownerless agents without usage, and review the affected agents before running each rule.
- Block MCP servers or individual tools that you do not approve, starting with the registry entries that agents already use.

### After rollout

- Review Cost management consumption by agent and service, and compare it with the spending limits set for groups and users.
- Check that blocked agents are no longer available in Copilot, Outlook and Teams, as appropriate to their platform.
- Test templates on a small set of agents first, because the pages disagree on whether a template reaches agents that are already approved.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an individual agent is blocked for the organisation</strong><br><small>Agent</small><br><small class="controls__note">The UI block is listed as included with Microsoft 365 plans. The Graph API is preview, needs an Agent 365 licence and delegated CopilotPackages.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">The documented default is All users.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which publisher types of agents and plugins users can install</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an MCP server, and every tool it exposes, is available across the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Tenant-wide tool control is listed as requiring Microsoft 365 E7 / G7 or Agent 365. Tool-level toggles are rolling out for supported server types.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Registry › MCP server › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Policy templates applied to agents when they are activated</strong><br><small>Agent</small><br><small class="controls__note">Listed as requiring Microsoft 365 E7 / G7 or Agent 365. Built-in default policies are locked; custom templates add Entra policies.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Templates › Add a New Template <a href="https://learn.microsoft.com/microsoft-agent-365/admin/policy-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Rules that bulk-manage agents, such as blocking ownerless agents without usage</strong><br><small>Tenant</small><br><small class="controls__note">Lifecycle rules are listed as included with Microsoft 365 plans. See the agent lifecycle management rules briefing.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent management rules › Add rule <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Agents > All agents > Block is the included baseline control and also has a preview Graph operation, which needs an Agent 365 licence and a delegated token with CopilotPackages.ReadWrite.All. The other rows are admin centre only at the time of writing (November 2026).

User access sets the maximum population for agents and plugins; Agent and plugin access filters by publisher type. Microsoft documents that blocking an MCP server is a separate component-level action from blocking a plugin, and that effects on dependent plugins and linked connectors depend on the management route. Policy templates need Agent 365 per the service description, and Microsoft says built-in default policies are locked. Copilot Studio and Power Platform have their own controls for their components and connections.

## Open questions

- What does Agent 365 do on arrival in a tenant that has no Agent 365 licence assigned, and which registry capabilities appear without one? Watch the Learn overview and the service description.
- Which policies in the default templates are enabled automatically and which need configuration? Watch the policy templates page.
- Does the Apply template rule replace the new-activation-only behaviour the policy template FAQ describes? Watch the policy templates and agent settings pages.
- Will User access, Agent and plugin access, and templates get Graph or PowerShell automation? Watch the Agent 365 Graph API page and Message center.

<!-- rationale
risk: Medium. The documented default for the User access setting is All users, and Microsoft's pages do not state what Agent 365 does on arrival, so the controls exist but each has to be set by an administrator.
cost: Medium. Microsoft documents Agent 365 as licensed per user, and its advanced controls need an Agent 365 licence or Microsoft 365 E7. Copilot Credit use appears in Cost management.
impact: Low. Agent 365 is an administrator surface; end users notice it when an administrator blocks an agent or tool, or narrows who can use agents.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: first paragraph / behaviour: An administrator sees every agent in the tenant in this surface. | Found: Currently, you can only view draft agents from Copilot Studio. Support for draft agents from other platforms, such Agent Builder, Foundry, and SharePoint, aren't currently available. | Fix: Replace 'This is the place an administrator sees every agent in the tenant and acts on it' with 'This is a central place an administrator reviews registered agents and takes governance actions'. The cited overview explicitly limits visibility of draft agents. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview
- [contradicted, blocker] controls[1].api; Governance controls; Open questions: automation / absence: User access has no documented API or automation equivalent as of November 2026. | Found: These resources also support remediation and applyOnce. ... userAssignmentCategory | Write | String | Specifies whether all users or no users can access agents and plugins. | `everyone`, `noOne` | Fix: Set controls[1].api to graph 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', with docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. In its note state: 'Preview TCM applyOnce: set mode to applyOnce and baseline.resources to resourceType microsoft.agent.useraccess, resourceVersion 1, with properties.valueObject.userAssignmentCategory set to everyone or noOne. Specific-user/group assignment is not documented by this schema. The caller needs delegated ConfigurationMonitoring.ReadWrite.All; the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs AI Administrator. Global service only.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Remove the User access automation absence from the prose and open question. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#useraccess-resource-type
- [contradicted, blocker] controls[2].api; Governance controls; Open questions: automation / absence: Agent and plugin access has no documented API or automation equivalent. | Found: allowedagenttypes resource type ... Controls which types of apps, agents, and plugins users can see in their store and install. ... areISVAppsAllowed ... areMicrosoftAppsAllowed ... areMicrosoftCertifiedThirdPartyAppsAllowed ... areTenantScopedAppsAllowed | Fix: Set controls[2].api to graph 'POST https://graph.microsoft.com/beta/admin/configurationManagement/configurationMonitors', with docs https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta. Note: 'Preview TCM applyOnce: set mode to applyOnce and baseline.resources to resourceType microsoft.agent.allowedagenttypes, resourceVersion 1; properties.valueObject sets areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed and areMicrosoftCertifiedThirdPartyAppsAllowed. The caller needs delegated ConfigurationMonitoring.ReadWrite.All; the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs AI Administrator. Global service only.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources. Remove the publisher-setting automation absence from the prose and open question. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#allowedagenttypes-resource-type
- [contradicted, blocker] controls[3].api; Governance controls: admin-centre-only statement / absence: No automation is documented for blocking an MCP server. | Found: A package represents an agent or a tool, such as a plugin, MCP server, or skill, in the organization catalog. ... Block, unblock, and reassign ownership of packages. | Fix: Replace controls[3].api null with graph 'POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block', docs https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block. Qualify its note: 'Preview package-level block for an MCP server represented as a catalog package; requires Agent 365 and delegated CopilotPackages.ReadWrite.All. Do not equate this with revoking credentials or assume it configures every gateway or connected component.' The package-to-MCP applicability is documented at https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview, already cited. Remove the blanket assertion that every row except agent blocking is admin-centre-only. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; controls[4].note; Governance guidance: At rollout / applicability: Custom templates can include Microsoft Entra Conditional Access policies. | Found: Conditional access | Configure conditional access policies for agents to align with your organization's security requirements. | Fix: Retain the documented custom-template capability, but add the same page's qualification: 'The template page also notes: Scenarios for AI templates are in preview and available only for Frontier tenants. Custom policies aren't yet supported.' Do not present those AI-template scenarios as generally available. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/policy-template
- [supported, minor] Risk assessment: Change & support; Governance guidance; Open questions / applicability: The agent settings page describes Apply template as a one-time bulk action for existing agents. | Found: Use the Apply template action in an agent management rule to apply security policies to existing agents. ... The Apply template action is a one-time bulk operation. It isn't a scheduled rule. | Fix: Keep the reported documentation disagreement, and qualify the settings-page description with: 'The rule evaluates registered agent instances with an agent identity; it excludes agent blueprints and AI teammates.' The same settings page states those restrictions. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [contradicted, minor] rationale: risk / default: The controls each have to be set by an administrator. | Found: Your tenant has default policies for all agents. The platform automatically enables some policies, while others require more configuration based on your organization's setup and requirements. | Fix: Replace the risk rationale with: 'Medium. User access defaults to All users, subject to existing app policies and assignments. Microsoft has not stated one overall control-plane arrival default; review existing behavior and the documented individual defaults, including automatically enabled template policies.' Do not say that every control requires manual configuration. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/policy-template
- [supported, minor] Governance controls: paragraph immediately after table / admin-path: The prose abbreviates the block path as Agents > All agents > Block. | Found: Select Agents > All agents. ... In the All agents page, select an agent from the list of agents. ... select Block or Unblock. | Fix: Change the prose path to 'Agents > All agents > agent > Block', matching controls[0].ui and restoring the omitted target-selection step. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The governance checklist asks readers to govern individual tools and review spending limits, but neither has a corresponding control row. | Found: Block MCP servers or individual tools that you do not approve ... compare it with the spending limits set for groups and users. [The table has server blocking, but no individual-tool or spending-limit row.] | Fix: The 'Block ... individual tools' and 'compare ... spending limits' checklist steps have no matching controls rows. Narrow them to the covered server control and consumption review: 'Block MCP servers that you do not approve' and 'Review Cost management consumption by agent and service; use the linked Spending policies concept for spending-limit guidance.' Do not add unverified rows.
-->
