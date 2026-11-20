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
    api: null
    note: "Options: All users (default), No users, Specific users or groups. Learn says plugins include skills. Not stated for the plus-menu entry."
  - governs: "Which publisher types of agents and plugins are allowed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Settings > Agent and plugin access"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors"
    api: null
    note: "Learn says users see Microsoft-built agents and plugins even if the setting is disabled, but can't install them."
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
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 52
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "f25e587fc018f8d3edb23ba0de36a646"
---

## What's changing

Microsoft plans to let users insert agents and skills into a Copilot prompt for specialised tasks. According to the roadmap item, users add them from the Agents and Skills tab after selecting 'Add work content' from the plus (+) menu, and can also reach them by typing / and @ in the prompt.

Microsoft Learn does not describe the plus-menu route yet, so what follows about its behaviour is the roadmap's description. Learn does document skills in Microsoft 365 Copilot Chat as generally available: a skill packages task-specific instructions and optional files or scripts, and users can select an installed skill explicitly or let Copilot select it automatically when it is relevant. Learn gives a different route to add one today: in Copilot Chat, Agents > More agents, then the drop-down beside Add and Upload skill.

The roadmap lists status In development, target September CY2026, release phase General Availability, platforms Desktop and Web, and the Worldwide (Standard Multi-Tenant) cloud. The target month has passed and the status has not moved, so treat the date as unconfirmed. Microsoft has not stated what happens on arrival, and the roadmap record carries no Message Center post or act-by date.

## Why it matters

This is a new entry point, not a new capability: it puts agents and skills in front of users at the moment they write a prompt. Expect more people to try them, and expect questions from users who see an agent or skill that an administrator has not approved or does not want used.

Because Microsoft has not stated whether the entry appears by default, base planning on no source saying existing behaviour changes, and confirm the admin settings for agent and plugin access now so that the new menu shows what you intend when it arrives.

## Risk assessment

**Data exposure**
- Skills uploaded to Copilot Chat are stored in tenant-scoped SharePoint Embedded containers, where Learn says sensitivity labels are retained and label policies are honoured. Learn adds that user-defined permissions and Double Key Encryption aren't supported, so check labelled content before encouraging skill use.
- Learn says data processed by non-Microsoft services isn't subject to Microsoft agreements, so an agent or plugin from an external publisher reached from the new menu carries that condition.

**Security & identity**
- Learn says skill scripts can't make authenticated network calls and have no network access at runtime, except during browser use. Microsoft has not described how the plus-menu route differs.
- Whether the new menu respects the same User access and Agent and plugin access settings is not stated for this feature; both settings are documented to cover agents and plugins in general.

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
<tr><td data-label="Control"><strong>Which users or groups can access agents and plugins</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), No users, Specific users or groups. Learn says plugins include skills. Not stated for the plus-menu entry.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › User access <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings#user-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which publisher types of agents and plugins are allowed</strong><br><small>Tenant</small><br><small class="controls__note">Learn says users see Microsoft-built agents and plugins even if the setting is disabled, but can't install them.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Settings › Agent and plugin access <a href="https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Separate switch for the Agents and Skills plus-menu entry</strong><br><small>Tenant</small><br><small class="controls__note">No setting for this entry point is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Both rows are tenant-wide settings for agents and plugins in general. Learn documents them as covering plugins, including skills, but does not say they govern the plus-menu entry, so confirm that in a test tenant. Learn says changes to the connector settings can take up to 10 minutes to take effect.

The last row records that no separate switch for this menu entry is documented. User access sets the maximum population, and Learn says a setting on an individual connector takes precedence over the bulk Agent and plugin access setting while User access always applies.

## Open questions

- Is the plus-menu entry on by default when it arrives, and who sees it first? Watch the roadmap item and Message center.
- Do User access and Agent and plugin access hide agents and skills in the plus menu, / and @ in the same way as in the agent store? Watch the Learn agent settings page.
- Which licence does a user need to see the Agents and Skills tab, given Learn limits Copilot Chat skills to Premium users?
- Does the new route change how skills are billed or counted for pay-as-you-go tenants?
- Will the September CY2026 target hold, given the status is still In development in November 2026?

<!-- rationale
risk: Low. The roadmap describes a new way to reach agents and skills users can already be given, so the existing admin settings for who can use them and which publishers are allowed still decide exposure; no default is stated.
cost: Variable. The roadmap names no licence or meter, but Microsoft Learn says agents that use shared tenant data are pay-as-you-go for Basic licence holders, while skills in Copilot Chat need Microsoft Copilot (Premium).
impact: Medium. It changes the prompt box in Copilot on desktop and web for users who already have agents or skills, so they will notice it, but it adds no new data source or setting.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls; Open questions / applicability: Whether User access governs agents and plugins reached through the new menu is not stated for this feature. | Found: User access in Agents > Settings applies to all agents and plugins, including federated connectors delivered as Microsoft 365 app packages. | Fix: Replace the prose's User access applicability caveat with: 'User access applies to all agents and plugins, including skills; how the new menu displays items restricted by that setting is not yet documented.' Keep any open question narrowly about display behavior, not whether User access applies. Cite https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors. | Source: https://learn.microsoft.com/microsoft-365/copilot/connectors/manage-federated-connectors
- [contradicted, blocker] controls[0].api; Governance controls: first row API / absence: No API or automation is documented for User access. | Found: These resources also support remediation and applyOnce. ... userAssignmentCategory ... Specifies whether all users or no users can access agents and plugins. ... everyone, noOne | Fix: Replace controls[0].api null with kind 'graph', call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to its note: 'Preview, global service only. Set mode=applyOnce and baseline.resources to resourceType microsoft.agent.useraccess, resourceVersion 1; properties.valueObject.userAssignmentCategory accepts everyone or noOne. This schema does not document specific-group assignment. Requires delegated ConfigurationMonitoring.ReadWrite.All for the caller, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources; update the rendered API cell consistently. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#useraccess-resource-type
- [contradicted, blocker] controls[1].api; Governance controls: second row API / absence: No API or automation is documented for Agent and plugin access publisher types. | Found: Controls which types of apps, agents, and plugins users can see in their store and install. ... areISVAppsAllowed ... areMicrosoftAppsAllowed ... areTenantScopedAppsAllowed | Fix: Replace controls[1].api null with kind 'graph', call 'POST /beta/admin/configurationManagement/configurationMonitors', docs 'https://learn.microsoft.com/graph/api/configurationmanagement-post-configurationmonitors?view=graph-rest-beta'. Add to its note: 'Preview, global service only. Set mode=applyOnce and baseline.resources to resourceType microsoft.agent.allowedagenttypes, resourceVersion 1; properties.valueObject.areMicrosoftAppsAllowed, areTenantScopedAppsAllowed and areISVAppsAllowed control the corresponding publisher types. Requires delegated ConfigurationMonitoring.ReadWrite.All for the caller, delegated CopilotPolicySettings.ReadWrite for the TCM service principal, and AI Administrator for the signed-in user.' Cite https://learn.microsoft.com/graph/utcm-agent-resources and https://learn.microsoft.com/graph/utcm-remediation-applyonce-resources; update the rendered API cell consistently. | Source: https://learn.microsoft.com/graph/utcm-agent-resources#allowedagenttypes-resource-type
- [unsupported, major] Why it matters; rationale: impact / behaviour: The new entry point adds no new capability, data source or setting. | Found: Searched: "Copilot" "Add work content"; "Copilot" "Agents and Skills"; "Copilot" "plus menu" "skills". Read roadmap, build-copilot-chat-skills and agent-settings; none explicitly rules out additional capabilities, data sources or settings. | Fix: Replace 'This is a new entry point, not a new capability' with 'The roadmap describes a new entry point for agents and skills'. Remove 'but it adds no new data source or setting' from the impact rationale.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: skill upload route / admin-path: Learn gives the skill-upload route in Copilot Chat as Agents > More agents, the drop-down beside Add, then Upload skill. | Found: In Copilot Chat, select Agents > More agents. Select the drop-down beside Add, and select Upload skill. | Fix: Keep this as the skills-authoring page's documented route, and add: 'The agent-store documentation instead says the store now appears as Plugins in the left pane; Microsoft documentation currently describes different navigation.' Cite https://learn.microsoft.com/copilot/manage/copilot-agent-store. | Source: https://learn.microsoft.com/plugins/build-copilot-chat-skills
- [supported, minor] controls[0].note; Governance controls: first row note / applicability: The correctly documented User access row adds that its reach is not stated for the plus-menu entry. | Found: Use User access to control how members of your organization access and install agents and plugins. Plugins include tools, MCP servers, connectors, skills, and other AI artifacts. | Fix: Replace 'Not stated for the plus-menu entry.' in controls[0].note and the rendered row with 'Applies to agents and plugins, including skills.' The exact new menu's presentation can remain an open question. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
-->
