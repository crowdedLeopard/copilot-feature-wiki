---
title: "Microsoft Copilot: add agents and skills from the plus menu"
slug: "m365-copilot-add-agents-and-skills-from-the-plus-menu"
roadmapId: 569213
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans a way to insert agents and skills into a Copilot prompt from the plus (+) menu, or by typing / and @. Existing agent and plugin controls in the admin centre apply; Microsoft has not stated a default."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "No licence specific to this feature is published. Learn says agents that use shared tenant data are pay-as-you-go for Basic licences, agents come with Microsoft 365 Copilot (Premium), and Copilot Chat skills are for Premium users."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["m365-copilot","copilot-chat","agents","skills","agent-and-plugin-access","admin-controls","user-experience"]
sources:
  - title: "Build skills for Microsoft 365 Copilot Chat"
    url: "https://learn.microsoft.com/plugins/build-copilot-chat-skills"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Manage federated connector availability"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    kind: "learn"
  - title: "Purchase and manage agents in Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Understand Agents in Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/manage/copilot-agent-store"
    kind: "learn"
  - title: "Supported Agent resources for Tenant Configuration Management (preview)"
    url: "https://learn.microsoft.com/graph/utcm-agent-resources"
    kind: "learn"
  - title: "Supported resources for remediation and applyOnce (preview)"
    url: "https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources"
    kind: "learn"
  - title: "Create configurationMonitor"
    url: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 569213"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569213"
    kind: "roadmap"
  - title: "Which users or groups can access agents and plugins (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-admins-can-govern-and-manage-federated-copilot-connecto","m365-copilot-app-blocks"]
controls:
  - governs: "Which users or groups can access agents and plugins"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > User access"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "All users (default), No users or Specific users or groups. Applies to agents and plugins, including skills. Graph: preview, global service only; sets everyone or noOne. Needs AI Administrator."
  - governs: "Which publisher types of agents and plugins are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api:
      kind: "graph"
      call: "POST /beta/admin/configurationManagement/configurationMonitors"
      docs: "https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta"
    note: "Users see Microsoft-built agents and plugins even if the setting is disabled, but can't install them. Graph: preview, global service only; areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed."
  - governs: "Separate switch for the Agents and Skills plus-menu entry"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting for this entry point is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-08-11T22:53:53"
changes:
  - date: "2026-11-20"
    note: "First briefing: roadmap plan for adding agents and skills from the plus menu, with the existing admin settings that govern agents and plugins."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: added the preview Microsoft Graph call for the two agent settings, stated that User access applies to agents and plugins including skills, and removed the claim that the entry adds no new capability."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 85
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7e720cad0fefb084f21f66f1392a9298"
---

## What's changing

Microsoft plans to let users insert agents and skills into a Copilot prompt for specialised tasks. According to the roadmap item, users add them from the Agents and Skills tab after selecting 'Add work content' from the plus (+) menu, and can also reach them by typing / and @ in the prompt.

Microsoft Learn does not describe the plus-menu route yet, so what follows about its behaviour is the roadmap's description. Learn does document skills in Microsoft 365 Copilot Chat as generally available: a skill packages task-specific instructions and optional files or scripts, and users can select an installed skill explicitly or let Copilot select it automatically when it is relevant. Learn gives a different route to add one today: in Copilot Chat, Agents > More agents, then the drop-down beside Add and Upload skill. The agent-store documentation instead says the store now appears as Plugins in the left pane; Microsoft documentation currently describes different navigation.

The roadmap lists status In development, target September CY2026, release phase General Availability, platforms Desktop and Web, and the Worldwide (Standard Multi-Tenant) cloud. The target month has passed and the status has not moved, so treat the date as unconfirmed. Microsoft has not stated what happens on arrival, and the roadmap record carries no Message Center post or act-by date.

## Why it matters

The roadmap describes a new entry point for agents and skills: it puts them in front of users at the moment they write a prompt. Expect more people to try them, and expect questions from users who see an agent or skill that an administrator has not approved or does not want used.

Because Microsoft has not stated whether the entry appears by default, base planning on no source saying existing behaviour changes, and confirm the admin settings for agent and plugin access now so that the new menu shows what you intend when it arrives.

## Risk assessment

**Data exposure**
- Skills uploaded to Copilot Chat are stored in tenant-scoped SharePoint Embedded containers, where Learn says sensitivity labels are retained and label policies are honoured. Learn adds that user-defined permissions and Double Key Encryption aren't supported, so check labelled content before encouraging skill use.
- Learn says data processed by non-Microsoft services isn't subject to Microsoft agreements, so an agent or plugin from an external publisher reached from the new menu carries that condition.

**Security & identity**
- Learn says skill scripts can't make authenticated network calls and have no network access at runtime, except during browser use. Microsoft has not described how the plus-menu route differs.
- User access applies to all agents and plugins, including skills; how the new menu displays items restricted by that setting is not yet documented. Agent and plugin access is documented to cover agents and plugins in general; whether the new menu respects it is not stated for this feature.

**Autonomy & actions**
- Learn says users can let Copilot select a skill automatically and that users control automatic invocation for each skill, so a skill can run on a prompt the user did not point at it.
- Microsoft has not described what an agent or skill inserted from the menu can do beyond what that agent or skill already does; confirm this for each agent you allow.

**Change & support**
- Expect support questions about where to find agents and skills, because the roadmap describes three entry points (the plus menu, / and @) and Learn documents a separate upload route.
- Learn says skills in Copilot Chat aren't supported in tenants that use Microsoft Purview Information Barriers, so users there may see an entry point that does not work for skills.

## Cost and licensing

No licence or meter specific to this feature is published, and the roadmap item names none. What Learn says about the things the menu reaches:

- Agents that use public data are available with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) licences. Access to agents that use shared tenant data is pay-as-you-go only for those licences, and pay-as-you-go agents are turned off by default for those users ([Purchase and manage agents in Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat)).
- Learn says no action is needed to enable agents for Microsoft 365 Copilot (Premium) and that agent use comes with that licence.
- Skills in Copilot Chat are currently available only to users with Microsoft Copilot (Premium) and aren't available to Copilot Chat (Basic) users ([Build skills for Microsoft 365 Copilot Chat](https://learn.microsoft.com/plugins/build-copilot-chat-skills)).

The agent management page adds that administrators should use discretion when managing individual agent and plugin distribution and costs. Whether the plus-menu entry changes any of these rules is not yet published.

## Scope

Users: the roadmap item says users, without naming a licence. Learn limits Copilot Chat skills to Microsoft Copilot (Premium) users and agents on shared tenant data to pay-as-you-go for Basic users, as described under cost.

Platforms: Desktop and Web. Cloud: the roadmap lists Worldwide (Standard Multi-Tenant) only; the record does not list US Government clouds, which is not a statement that they are excluded.

Rollout: status In development, target September CY2026, release phase General Availability. Roles and prerequisites for the new menu are not stated. For the existing settings, the Learn page for agent settings is in the Microsoft 365 admin center under Agents > Settings.

## Governance guidance

### Before rollout
- Check the User access setting, which Learn says defaults to All users, and decide whether agents and plugins should reach everyone or only named users or groups.
- Review which publisher types are allowed under Agent and plugin access, because Learn says plugins include tools, MCP servers, connectors and skills.
- Identify any tenant that uses Purview Information Barriers and tell its users that Learn says skills aren't supported in Copilot Chat there.

### At rollout
- Confirm in a test account whether the plus-menu entry, / and @ show the agents and skills you expect, since Learn does not yet describe this route.
- Tell users where the menu entry is and which agents are approved, using the support route you already use for Copilot.

### After rollout
- Recheck the roadmap item for a status change and the Message center for a post with an act-by date.
- Recheck the User access and Agent and plugin access settings after the entry point reaches your tenant, to confirm they still match your intent.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">All users (default), No users or Specific users or groups. Applies to agents and plugins, including skills. Graph: preview, global service only; sets everyone or noOne. Needs AI Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which publisher types of agents and plugins are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Users see Microsoft-built agents and plugins even if the setting is disabled, but can't install them. Graph: preview, global service only; areMicrosoftAppsAllowed, areTenantScopedAppsAllowed, areISVAppsAllowed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/admin/configurationManagement/configurationMonitors</code> <a href="https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the Agents and Skills plus-menu entry</strong><br><small>Tenant</small><br><small class="controls__note">No setting for this entry point is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are tenant-wide settings for agents and plugins in general. Learn says User access applies to all agents and plugins, including skills; how the new menu displays items restricted by it is not yet documented, so confirm that in a test tenant. Agent and plugin access is documented as covering plugins, including skills, but Learn does not say it governs the plus-menu entry. Learn says changes to the connector settings can take up to 10 minutes to take effect.

The last row records that no separate switch for this menu entry is documented. User access sets the maximum population, and Learn says a setting on an individual connector takes precedence over the bulk Agent and plugin access setting while User access always applies.

The Graph calls on the first two rows use the Tenant Configuration Management API, which Learn documents as preview and available only in the global service. Set mode to applyOnce and put the resource in baseline.resources: resourceType microsoft.agent.useraccess for the first row and microsoft.agent.allowedagenttypes for the second, each with resourceVersion 1. For useraccess, properties.valueObject.userAssignmentCategory accepts everyone or noOne; the schema does not document specific-group assignment. For allowedagenttypes, areMicrosoftAppsAllowed, areTenantScopedAppsAllowed and areISVAppsAllowed control the corresponding publisher types. The calling app needs delegated ConfigurationMonitoring.ReadWrite.All, the TCM service principal needs delegated CopilotPolicySettings.ReadWrite, and the signed-in user needs the AI Administrator role. See [Supported Agent resources for Tenant Configuration Management (preview)](https://learn.microsoft.com/graph/utcm-agent-resources) and [Supported resources for remediation and applyOnce (preview)](https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources).

## Open questions

- Is the plus-menu entry on by default when it arrives, and who sees it first? Watch the roadmap item and Message center.
- How do the plus menu, / and @ display agents and skills that User access or Agent and plugin access restricts, compared with the agent store? Watch the Learn agent settings page.
- Which licence does a user need to see the Agents and Skills tab, given Learn limits Copilot Chat skills to Premium users?
- Does the new route change how skills are billed or counted for pay-as-you-go tenants?
- Will the September CY2026 target hold, given the status is still In development in November 2026?

<!-- rationale
risk: Low. The roadmap describes a new way to reach agents and skills users can already be given, so the existing admin settings for who can use them and which publishers are allowed still decide exposure; no default is stated.
cost: Variable. The roadmap names no licence or meter, but Microsoft Learn says agents that use shared tenant data are pay-as-you-go for Basic licence holders, while skills in Copilot Chat need Microsoft Copilot (Premium).
impact: Medium. It changes the prompt box in Copilot on desktop and web for users who already have agents or skills, so they will notice it.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls / command: POST /beta/admin/configurationManagement/configurationMonitors can set agent User access with the applyOnce resource configuration explained in the prose. | Found: Create a new configurationMonitor object that runs periodically in the background at a scheduled frequency to detect configuration drift in monitorOnly mode, or applies a desired-state baseline once in applyOnce mode. | Fix: Keep the call. Add to controls[0].note and the matching table note: 'Set mode to applyOnce; baseline.resources uses resourceType microsoft.agent.useraccess, resourceVersion 1, and properties.valueObject.userAssignmentCategory set to everyone or noOne.' The body already gives this configuration; the row currently gives values without naming the property. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] controls[1].api; Governance controls / command: POST /beta/admin/configurationManagement/configurationMonitors can set allowed publisher types with the applyOnce resource configuration explained in the prose. | Found: An active applyOnce monitor runs in the background on behalf of the signed-in administrator and then becomes inactive. Its result reports the outcome of the run. | Fix: Keep the call and existing publisher property names. Add to controls[1].note and the matching table note: 'Set mode to applyOnce; baseline.resources uses resourceType microsoft.agent.allowedagenttypes, resourceVersion 1, and these properties inside properties.valueObject.' This carries the deciding mode from the existing prose into the row; the reference defaults mode to monitorOnly. | Source: https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The agent purchasing page says agent use comes with Microsoft 365 Copilot (Premium). | Found: The use of agents comes with Microsoft 365 Copilot (Premium) license. | Fix: Qualify the blanket inclusion wording in licensing.notes and Cost and licensing: 'The agent purchasing page says agent use comes with Premium. The standard-harness licensing page specifies non-billed classic answers, generative answers and Microsoft Graph tenant grounding when the agent runs with the licensed user's authenticated identity; this is not a blanket statement that every agent operation is unmetered.' Cite https://learn.microsoft.com/microsoft-copilot-studio/billing-licensing#billing-for-microsoft-365-copilot-license-holders. The separately read https://learn.microsoft.com/copilot/plan/usage-based-billing-overview-copilot-credits also lists Copilot Agents with Work IQ among usage-based services. | Source: https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat
-->
