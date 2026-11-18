---
title: "Power Apps: model-driven apps as Business Applications in Work IQ"
slug: "power-apps-model-driven-applications-in-business-apps-in-work-iq"
roadmapId: 571888
topic: "power-platform"
products: ["Power Apps"]
summary: "Users can list, read, create, update and delete model-driven app records by chat through Work IQ, with confirmation before changes. Admins decide per tenant, environment and app; billing follows the experience used."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Learn says usage and billing depend on the experience used: Copilot Studio uses Copilot Credits; Cowork and direct Work IQ API calls are attributed to their own consumption. No per-operation rate or extra licence is stated for this feature."
audiences: ["power-platform-admin","m365-admin","security","finops"]
tags: ["model-driven-apps","power-apps","work-iq","mcp","copilot-studio","write-actions","user-confirmation","dataverse","usage-based-billing","copilot-credits","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 571888"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571888"
    kind: "roadmap"
  - title: "Use Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Manage participation in Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    kind: "learn"
  - title: "Manage AI experience access to Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    kind: "learn"
  - title: "Understand costs for Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/understand-costs"
    kind: "learn"
  - title: "Work IQ in Copilot Studio (Microsoft Copilot)"
    url: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    kind: "learn"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/"
    kind: "learn"
  - title: "Policy governance for Work IQ MCP"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/mcp/policy-governance-mcp"
    kind: "learn"
videos: []
related: ["work-iq","mcp","copilot-credits","work-iq-granular-mcp-policies","work-iq-business-skills-to-manage-your-business-processes-in-work-iq-mcp"]
controls:
  - governs: "Whether Work IQ features are on in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    api: null
    note: "Environment administrator. Separate from allowing Work IQ to reason over the environment's data."
  - governs: "Who in the tenant can use Business Applications data through Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Options: All users (default), Specific groups, No users. Tenant administrator. Learn describes it for Microsoft 365 Copilot; whether it governs the Copilot Studio tool is not stated."
  - governs: "Availability of the Work IQ MCP server"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "AI Administrator. Applies to the whole server, separate from the Copilot audience setting and App Access."
  - governs: "Which applications can access an environment's data"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Security > Identity & access > App Access Control > environment > Enable > Save"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Power Platform Administrator. Learn says Work IQ participation settings do not prevent agentic access; App Access is the control for that."
  - governs: "Whether a model-driven app shares its data with Work IQ"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Apps > app > Edit > Settings > Features > Enable Microsoft 365 Copilot in model-driven apps"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Maker setting; save and publish after changing. The user page requires Default or On for Work IQ access."
  - governs: "Whether a Copilot Studio agent can use the Business apps (preview) workload"
    scope: "agent"
    ui:
      surface: "Copilot Studio (maker)"
      path: "agent > ellipsis (...) > Settings > Work IQ > Enable preview workloads"
      docs: "https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq"
    api: null
    note: "Per-agent maker setting; also clear Business apps (preview) under Sources on the Work IQ tool to drop the workload."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: Learn documents behaviour, defaults and admin controls, while the roadmap item is still In development."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 82
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "9307afd0e86931436416b95b7ef4a808"
---

## What's changing

Power Apps model-driven apps become Business Applications in Work IQ, so users can list and read records, or create, update and delete them, by typing natural-language prompts instead of opening the app. The roadmap item names two entry points: the Work IQ (Preview) tool in Copilot Studio, and a chat experience powered by Work IQ MCP (Model Context Protocol, the open standard agents use to call tools). For create and update, Work IQ maps the values in the prompt to the app's fields, and the proposed values need explicit user confirmation before they are submitted.

The Learn page for users describes the behaviour in more detail. The user selects an environment and a model-driven app, and Work IQ uses the app's views, forms and tables. Records come from the table's default system view unless the prompt names another; create and update use the default main form, and the fields on its first tab. Learn says form-scoped and table-scoped business rules are enforced, delete operations also need explicit confirmation, and table security decides what the user can read or change. Create and update are not available where the form has JavaScript `OnLoad`, `OnChange` or `OnSave` event handlers, and custom controls and subgrids are not supported.

The sources differ on status. The roadmap item is In development, with a preview target of September CY2026 and a target of November CY2026 (both Microsoft's targets), release phases General Availability and Preview, worldwide cloud and web only. Learn already says access through Work IQ MCP and Copilot Studio is generally available and access through Cowork is in public preview, while the Copilot Studio page still labels the workload **Business apps (preview)** and asks you to turn on preview workloads in the agent's settings.

On defaults, Learn says Business Applications in Work IQ is on by default for new public production environments, except European Union and EFTA environments, government-related environments and nonproduction environments (trial, sandbox, developer). Learn also says the plan to turn it on for existing environments has been deferred from the previously documented November 2026 schedule. No replacement date is given.

## Why it matters

This moves record changes out of the model-driven app's own forms and into chat. Learn says Work IQ respects existing Power Platform security permissions, so the Dataverse security roles you already grant become the effective limit on what a prompt can read or change. Over-broad roles, harmless when users had to find the right form, deserve a review before this reaches them.

If nobody acts, new qualifying production environments get Business Applications in Work IQ on by default, and Learn says the switch-on for existing environments is deferred with no new date stated. Decide now which environments should take part, and who will pay for the consumption, rather than finding out from the first bill or the first helpdesk question.

## Risk assessment

**Data exposure**

- Learn says Work IQ applies Copilot reasoning to data and app components the user already has permission to access, and does not grant additional access to business data. Reads therefore follow Dataverse security roles and record access; audit those roles, not the chat tool.
- Where an environment is on a FedRAMP-accredited service, Learn says enabling Work IQ might cause data to flow to Microsoft 365, outside the FedRAMP authorisation boundary. Government-related environments are an exception to the default-on rule.

**Security & identity**

- Learn says App Access controls which applications may reach an environment's data, and that Work IQ participation settings do not prevent agentic access. Switching Work IQ off in an environment is not, on its own, a block on every agent.
- The Work IQ MCP server has its own availability control in the Microsoft 365 admin center, separate from the Copilot audience setting and App Access.

**Autonomy & actions**

- Create, update and delete are possible by prompt. Learn says proposed values must be explicitly confirmed before submission and delete also needs explicit confirmation, so a person approves each change. Whether that confirmation applies when a Copilot Studio agent runs without a person present is not stated.
- Learn says business rules and form control metadata (read-only, required) are enforced, and forms with JavaScript event handlers cannot be created or updated through Work IQ.

**Change & support**

- Expect questions about missing environments or apps. Learn's troubleshooting steps are to check Work IQ is enabled for the environment, that the app's **Enable Microsoft 365 Copilot in model-driven apps** setting is **On** or **Default** and the app is published, and that Dataverse roles allow access.
- Learn says users get a record link after create or update, to open the record in the app.

## Cost and licensing

Learn's cost page says usage and billing depend on the experience used to reach Business Applications, and that cost is tracked by experience, not by a dedicated business applications category.

- **Copilot Studio agents:** the Work IQ page says Work IQ in Copilot Studio is powered by the Microsoft Copilot harness, which uses Copilot Credits for usage-based billing, and that a separate spending policy is not required for Work IQ.
- **Copilot Cowork:** Work IQ consumption that supports a Cowork task is attributed to Cowork.
- **Direct calls** (coding agents or custom integrations calling Work IQ): reported under Work IQ API, which can mix Microsoft 365 and business applications context, so it is not a business-applications-only breakdown.
- **Microsoft 365 Copilot Chat:** the cost page says the applicable entitlement includes business-data grounding in the licensed chat scenario.

The cost page says one request can involve several tool calls and reasoning steps, so cost per prompt varies. The pages read state no credit rate for Business Applications operations (Not yet published), and the user page lists access to the Work IQ experience, an enabled environment, the app setting and data permissions as prerequisites and names no licence. Learn also says Work IQ API usage consumes Copilot Credits shared with other eligible services; see [Copilot Credits](/concepts/copilot-credits/).

## Scope

- **Who:** users who can open the environment and the model-driven app and who have access to the Work IQ experience. Learn says they see only the environments and apps their permissions allow.
- **Prerequisites (user page):** a Power Platform administrator enables Work IQ for the environment; the app's **Enable M365 Copilot in model-driven apps** setting (`m365copilotmodelappenabled`) is **Default** or **On**; the user has permission to the environment, app and data.
- **Default environments:** new public production environments, excluding EU and EFTA, government-related and nonproduction environments. Existing environments: switch-on deferred.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web. Learn says Business Applications in Work IQ is not currently available in sovereign or government cloud environments, including DoD, GCC and GCC High.
- **Roles:** AI Administrator (Microsoft 365 admin center settings), Power Platform Administrator (App Access and environment settings), and Environment Maker or System Customizer for app-level participation.
- **Copilot Studio:** the Business apps workload needs **Enable preview workloads** turned on in the agent's settings.

## Governance guidance

### Before rollout

- Decide which environments should take part, and list them against Learn's default-on exclusions (EU and EFTA, government-related, nonproduction), using the Work IQ environment setting in the controls table.
- Review Dataverse security roles for the model-driven apps involved with the Power Platform Administrator, because Learn says Work IQ does not grant additional access to business data.
- Ask makers which apps use JavaScript event handlers, custom controls or subgrids, since create and update will not work there through Work IQ.
- Agree who owns the Copilot Credits budget for Copilot Studio agents and Cowork before any pilot starts.

### At rollout

- Set the tenant audience in the Microsoft 365 admin center to **Specific groups** for a pilot, or leave **All users** (Learn's stated default).
- Turn **Work IQ** on only in pilot environments, and check each app's **Enable Microsoft 365 Copilot in model-driven apps** setting.
- Use App Access control for the environments where particular applications must be blocked, since participation settings do not do that.
- Test a create, an update and a delete as a pilot user, and confirm the confirmation prompt appears.

### After rollout

- Review consumption by experience (Copilot Studio, Cowork, Work IQ API) rather than looking for a separate business applications meter.
- Recheck the default-settings page for the revised date for existing environments.
- Repeat the role review when apps, agents or owners change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Work IQ features are on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Environment administrator. Separate from allowing Work IQ to reason over the environment's data.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who in the tenant can use Business Applications data through Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Options: All users (default), Specific groups, No users. Tenant administrator. Learn describes it for Microsoft 365 Copilot; whether it governs the Copilot Studio tool is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Availability of the Work IQ MCP server</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. Applies to the whole server, separate from the Copilot audience setting and App Access.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which applications can access an environment's data</strong><br><small>Environment</small><br><small class="controls__note">Power Platform Administrator. Learn says Work IQ participation settings do not prevent agentic access; App Access is the control for that.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Security › Identity &amp; access › App Access Control › environment › Enable › Save <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a model-driven app shares its data with Work IQ</strong><br><small>App</small><br><small class="controls__note">Maker setting; save and publish after changing. The user page requires Default or On for Work IQ access.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Apps › app › Edit › Settings › Features › Enable Microsoft 365 Copilot in model-driven apps <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a Copilot Studio agent can use the Business apps (preview) workload</strong><br><small>Agent</small><br><small class="controls__note">Per-agent maker setting; also clear Business apps (preview) under Sources on the Work IQ tool to drop the workload.</small></td><td data-label="Admin UI"><strong>Copilot Studio (maker)</strong><br>agent › ellipsis (...) › Settings › Work IQ › Enable preview workloads <a href="https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The settings cascade: tenant audience in the Microsoft 365 admin center, the **Work IQ** setting per environment in the Power Platform admin center, and the app-level setting in Power Apps. Learn says that if the tenant setting is off, data is not shared between Microsoft 365 Copilot Chat and Dataverse even if an app is configured to share it. The roles are in the Scope section.

The tenant setting appears under two names on Learn: the default-settings page says **Business Applications data in Work IQ available to Copilot**, while the AI-experience access page says to open the setting for business applications availability. The row uses the default-settings path.

General-purpose controls do not replace these: Learn says participation settings do not stop agentic access, so App Access and the Work IQ MCP block are separate decisions. Microsoft Learn documents no API or CLI for any of these settings at the time of writing (November 2026), so every row shows its API side as Not yet documented, and none of the rows can be scripted from what Learn currently publishes.

## Open questions

- When will Business Applications in Work IQ be switched on for existing environments? Learn says the November 2026 schedule is deferred; watch the default-settings page.
- Does the explicit confirmation step apply when a Copilot Studio agent runs without a person present, or only in a chat with the user?
- Does the Work IQ MCP tenant policy, which Learn says disallows mutation operations by default for Microsoft 365 resource paths, also govern create, update and delete on Business Applications data?
- What credit rate applies to Business Applications operations in Copilot Studio and through Work IQ API? Watch the cost page.
- Which release phase applies to each entry point: the roadmap item lists General Availability and Preview, Learn says MCP and Copilot Studio are generally available, and the Copilot Studio page labels the Business apps workload preview?

<!-- rationale
risk: Medium. Users can create, update and delete Dataverse records by chat, but Learn says only within their own permissions and after explicit confirmation, and switches exist at tenant, environment and app level.
cost: Variable. Learn says charges follow the experience used: Copilot Credits for Copilot Studio agents, Cowork consumption for Cowork, and Work IQ API consumption for direct calls. No rate for these operations is stated.
impact: Medium. Users of model-driven apps in environments where Work IQ is on notice it first. Learn says it is on by default only in new public production environments, and has deferred switching on existing ones.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Governance guidance: Before rollout, third bullet / behaviour: Create and update will not work through Work IQ in apps that use custom controls or subgrids. | Found: Searched: "Work IQ" "custom controls" "create" "subgrids"; opened use-business-apps-work-iq. It says those components are unsupported, but only JavaScript handlers are stated to block creating or updating a record on the selected form. | Fix: Replace the bullet with: "Ask makers which selected forms use JavaScript OnLoad, OnChange or OnSave event handlers, since Work IQ cannot create or update records using those forms. Custom controls and subgrids are not supported." Cite https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq.
- [contradicted, blocker] controls[3].ui; Governance guidance: At rollout / admin-path: Security > Identity & access > App Access Control > environment > Enable > Save is the complete procedure for choosing which applications can access the environment. | Found: Select **Enable**, and then select **Save**. Return to the environment and select the applications you want to block from accessing the environment. | Fix: Keep the documented path but append to controls[3].note and the corresponding rendered row: "After Enable > Save, return to the environment and select the applications you want to block from accessing it." The enablement steps alone do not choose the blocked applications. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access
- [contradicted, blocker] controls[5].ui / admin-path: The preview workload path is agent > ellipsis (...) > Settings > Work IQ > Enable preview workloads. | Found: In the **Agent settings** dialog, select **Work IQ**. Under **Preview workloads**, turn on **Enable preview workloads**. | Fix: Replace controls[5].ui.path and the rendered path with "agent > ellipsis (...) > Settings > Work IQ > Preview workloads > Enable preview workloads" to include the documented section between Work IQ and the toggle. | Source: https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: Model Context Protocol is an open standard agents use to call tools. | Found: MCP defines how AI agents connect to external tools and data sources, acting as the "agent-to-tool" layer. | Fix: Cite https://learn.microsoft.com/azure/horizondb/ai/ai-agents#agent-standards-and-protocols for the MCP definition, or remove the parenthetical definition. | Source: https://learn.microsoft.com/azure/horizondb/ai/ai-agents#agent-standards-and-protocols
- [supported, minor] controls[2].ui; Risk assessment / admin-path: Work IQ MCP can be blocked at Microsoft 365 admin center > Agents > Tools > Work IQ MCP > Block. | Found: Select **Agents** > **Tools**. Select **Work IQ MCP**. Review its current availability. To block access to the server, select **Block**. | Fix: Append to controls[2].note: "The Copilot Studio Work IQ page says the ability to allow or disallow tooling and MCP servers might not yet be available in your region." Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access
- [supported, minor] controls[4].ui / admin-path: App participation is configured in Power Apps > Apps > app > Edit > Settings > Features > Enable Microsoft 365 Copilot in model-driven apps. | Found: In the left navigation pane, select **Apps**. Find the app that you want to manage, and then select **Edit**. On the app navigation bar, select **Settings**. Select **Features**. Set **Enable Microsoft 365 Copilot in model-driven apps** to **On** or **Off**. | Fix: Append to controls[4].note: "The maker configuration page labels this option Microsoft Copilot in model-driven apps." Cite https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot#enable-microsoft-copilot-in-a-single-model-driven-app; retain the path supported by default-settings. | Source: https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings
-->
