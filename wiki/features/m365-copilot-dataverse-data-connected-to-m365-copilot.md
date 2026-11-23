---
title: "Microsoft 365 Copilot: search and query Dataverse business data with Business Applications in Work IQ"
slug: "m365-copilot-dataverse-data-connected-to-m365-copilot"
roadmapId: 560539
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot can search and query Dataverse data through Business Applications in Work IQ. Microsoft says it is on by default in new public production environments; admins can limit it by tenant audience, environment and app."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "mixed"
  notes: "Learn lists Power Apps premium plus Microsoft 365 Copilot, or Dynamics 365 Enterprise or Premium, for Copilot in model-driven apps; Cowork and Work IQ API use bills Copilot Credits. No rate for this feature is stated."
audiences: ["m365-admin","power-platform-admin","security","finops"]
tags: ["work-iq","dataverse","m365-copilot","copilot-chat","business-skills","semantic-model","power-platform-admin-center","m365-admin-center","usage-based-billing","dynamics-365"]
sources:
  - title: "Microsoft 365 Roadmap 560539"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560539"
    kind: "roadmap"
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
  - title: "Business Applications in Work IQ administration"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/"
    kind: "learn"
  - title: "Use Business Applications in Work IQ"
    url: "https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq"
    kind: "learn"
  - title: "Add Microsoft Copilot for app users in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot"
    kind: "learn"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
  - title: "Understand usage-based billing and cost management for Copilot Credits"
    url: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    kind: "learn"
  - title: "Update spendingPolicy"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    kind: "learn"
  - title: "SaveSettingValue Action"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    kind: "learn"
  - title: "Get or update a setting value using client API"
    url: "https://learn.microsoft.com/power-apps/developer/model-driven-apps/clientapi/get-update-setting-value-using-code"
    kind: "learn"
  - title: "MC1483492: Business Skills in Work IQ - Default On"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1483492"
    kind: "message-center"
videos: []
related: ["work-iq","microsoft-dataverse-enable-semantic-data-understanding-for-agentic-use","spending-policies","security-roles","declarative-agents"]
controls:
  - governs: "Which users can use Business Applications data in Work IQ through Microsoft 365 Copilot"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot > No users / All users / Specific groups"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api: null
    note: "Options: No users, All users (the default), Specific groups. Tenant administrator per the page; the access page names the AI Administrator role."
  - governs: "Whether Work IQ features are on in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > environment > Settings > Product > Features > Work IQ"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation"
    api: null
    note: "Environment administrator per the default settings page; the participation page names the Power Platform Administrator role."
  - governs: "Whether a model-driven app's tables, forms and views are available to Microsoft 365 Copilot Chat"
    scope: "app"
    ui:
      surface: "Power Apps maker portal"
      path: "Apps > app > Edit > Settings > Features > Enable Microsoft 365 Copilot in model-driven apps"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    api:
      kind: "rest"
      call: "POST /api/data/v9.2/SaveSettingValue"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue"
    note: "Maker-side setting; the portal steps end with Save and Publish. The request body uses SettingName m365copilotmodelappenabled, Value for the override, and AppUniqueName for the target app."
  - governs: "Whether the Work IQ MCP server is available at all"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > Tools > Work IQ MCP > Block"
      docs: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access"
    api: null
    note: "Applies to the entire server, separate from the Copilot audience setting and App Access. AI Administrator role per the page."
  - governs: "Copilot Credit spending for Cowork and Work IQ API use of business data"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Cost management"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits"
    api:
      kind: "graph"
      call: "PATCH /beta/copilot/costManagement/spendingPolicies/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update"
    note: "Beta API. Updatable body properties include displayName, periodLimit, perUserLimit and billingMethods. Covers the consuming experience, not a business applications category."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-23"
    note: "New briefing: Business Applications in Work IQ is on by default in new public production environments, with tenant, environment and app controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 98 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected a held page: Dataverse access is bounded by permissions, participating apps and the selected view; solution-import rule qualified; documented Web API action added for the app-level setting; action now act-now."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 112 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 112
  confirmed: 112
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "3a32bbc352ada657cc9911881f7fd1a8"
---

## What's changing

The roadmap item says people can search and query Dataverse business data from Microsoft 365 Copilot. Microsoft Learn calls the capability **Business Applications in Work IQ**, and describes it as a set of capabilities that lets Microsoft 365 Copilot, Microsoft 365 Copilot Chat, Copilot Cowork and Model Context Protocol (MCP) clients work with Power Apps and Dynamics 365 data. When it is on, Learn lists these capabilities: searching Power Apps and Dynamics 365 data from Copilot Chat in-app and mainline search, semantic modelling, Power Apps and Dynamics 365 data in Agent Builder declarative agents, and MCP client interactions with the Work IQ MCP server.

**Default and rollout.** Microsoft's notice MC1483492 (published 2026-09-30, Microsoft's end date 2026-12-16) says the feature is enabled by default on September 30, 2026 for environments where Microsoft Copilot Premium and either Power Apps Premium or Dynamics 365 products are active. It lists as not enabled: environments created before September 30, 2026, environments in the EU or EEA regions, non-Production environments (Trial, Developer, Sandbox), government clouds and FedRAMP environments. The notice says enabling it creates additional supporting indexes and token consumption, that no action is required, and that users can opt out by disabling the feature.

The Learn default settings page says Business Applications in Work IQ is on by default for new public production environments created for new or existing tenants, with exceptions for EU and EFTA environments, government-related environments and non-production environments. It does not repeat the licence condition in the notice. It also says the plan to turn it on for existing environments has been deferred from the previously documented November 2026 schedule, and asks readers to check the article for updates. Where the two differ, this briefing reports both.

**Status.** The roadmap record lists status Launched, a target of September CY2026, a preview date of June CY2026 and release phases General Availability and Preview. Learn says access through the Work IQ MCP server and Microsoft Copilot Studio is generally available, and access through Cowork is in public preview.

## Why it matters

If your tenant creates new public production environments with Dynamics 365 or Power Apps, Copilot can reach business records in them without an administrator turning anything on. Learn states that the feature respects existing permissions and that enabling an experience does not grant access to business data. Natural-language access is limited by existing permissions and participating apps; the selected view determines the records and fields returned.

The cost side is indirect for most tenants: extra search-index storage and, for Cowork and Work IQ API use, Copilot Credits. The notice lists environments created before September 30, 2026 as not enabled, and Learn says the plan to turn it on for them is deferred, so the decision for those environments is still yours. Decide now which audience, environments and apps you want, because the controls cascade and are easiest to set before new environments appear.

## Risk assessment

**Data exposure**
- Learn says the tenant setting lets environments in the tenant share Dataverse and Microsoft 365 data bidirectionally, so business records and Microsoft 365 content are both in scope. Limit it with the tenant audience, the environment-level **Work IQ** setting and the app-level setting listed in the controls table.
- Learn's compliance notes warn that for tenants using FedRAMP-accredited environments, enabling Work IQ might send data outside the FedRAMP authorization boundary, and that PCI DSS, HITRUST and FERPA coverage of the source service does not automatically extend to Copilot. Review them before enabling in regulated environments.

**Security & identity**
- Learn says Work IQ respects the user, agent and application access already configured for the data. Check Dataverse security roles in each participating environment (/concepts/security-roles/), because those roles decide what a question can return.
- Learn says participation settings do not prevent agentic access to environment data, and points to App Access controls (Power Platform admin center > Security > Identity & access > App Access Control > environment > Enable) for that. Read that page before relying on the environment setting to keep agents out.

**Autonomy & actions**
- Learn says the Business Applications paths in the Work IQ MCP and business skills sit behind the environment-level **Work IQ** setting, and that users can only perform actions their permissions allow. Microsoft's notice says business skills automate and simplify complex business scenarios. The Work IQ MCP server has its own **Block** control for the whole server.

**Change & support**
- Learn says that when an app is imported in a solution into an environment where Business Applications in Work IQ is on, an **Enable Copilot in model-driven apps** setting of **On** or **Default** becomes **On** in the destination environment. Moving solutions between environments can therefore turn it on where Work IQ is already on.
- Learn says Microsoft 365 Copilot Chat is automatically included in every new app created in an environment where the feature is on. Expect questions from makers.
- The notice and the Learn pages describe eligibility and exceptions differently and the existing-environment date has moved, so confirm the state of each environment rather than relying on either text.

## Cost and licensing

**Licence.** The Learn page on Microsoft Copilot in model-driven apps says users of a Power Apps app need both a Power Apps premium licence and a Microsoft 365 Copilot licence, and users of a Dynamics 365 app need a Dynamics 365 Enterprise or Premium licence, with a Microsoft 365 Copilot licence required for the full capabilities of Work IQ beyond Dataverse grounding. Microsoft's notice ties the default-on state to environments where Microsoft Copilot Premium and either Power Apps Premium or Dynamics 365 products are active.

**Meters.** The Learn costs page says charges follow the experience used. Copilot Chat's applicable entitlement includes business-data grounding in the licensed chat scenario, with no extra Work IQ API charge. Work IQ consumption that supports a Cowork task is attributed to Cowork, and direct calls through the Work IQ API appear under Work IQ API. Work IQ API use is paid through a usage-based model that uses Copilot Credits. The page says the cost of a task varies because one request can involve several tool calls and reasoning steps, and that Work IQ API consumption includes Microsoft 365 context as well as business application context, so it is not a business-applications-only breakdown.

**Spending controls.** There is no separate business applications spending policy. Learn says to configure the policy for the consuming experience, in Microsoft 365 admin center > Copilot > Cost management (see the controls table).

**Indirect costs.** The Learn default settings page says semantic modelling and access to Power Apps and Dynamics 365 data through Copilot Chat use extra storage for search indexes. Learn's page on Copilot in model-driven apps says enabling it might increase the environment's Dataverse capacity consumption. A Copilot Credit rate for this feature is not published on the pages read.

## Scope

**Environments.** New public production environments, subject to the exceptions in What's changing. The notice lists environments created before September 30, 2026 as not enabled, and Learn says the plan to turn it on for them is deferred. Administrators can turn the feature on where it is not on by default, using both the tenant-level setting and the environment-level setting.

**Users.** The tenant audience can be All users (the default per Learn), Specific groups or No users. Each person still needs the Dataverse permissions that govern the data.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) and the platforms Desktop and Web. Learn says Business Applications in Work IQ is not currently available in sovereign or government cloud environments, including DoD, GCC and GCC High.

**Roles.** Learn gives the tenant-level setting to a tenant administrator, the environment-level setting to an environment administrator and the app-level setting to a maker. The participation and access pages name the Power Platform Administrator role, AI Administrator for Microsoft 365 admin center settings, and Environment Maker or System Customizer for app-level participation.

**Prerequisites.** Learn says the tenant setting must be on for environments to use Work IQ capabilities. The page on Copilot in model-driven apps also lists Dataverse Search set to Default or On for the environment.

## Governance guidance

### Before rollout
- List the environments in Power Platform admin center and note which are new public production environments created since September 30, 2026, which are existing, and which fall under the exceptions in MC1483492 and the Learn default settings page.
- Read the compliance notes on the Learn default settings page with your compliance team before enabling in any environment that holds regulated or FedRAMP-scoped data.
- Ask makers which model-driven apps should keep **Enable Microsoft 365 Copilot in model-driven apps** on, and tell them about the solution import behaviour in environments where Work IQ is on.

### At rollout
- Set the tenant audience to All users, Specific groups or No users in the Microsoft 365 admin center; use Specific groups for a pilot.
- Turn **Work IQ** off in environments that are not ready, in Power Platform admin center > Manage > environment > Settings > Product > Features.
- Decide whether to leave the Work IQ MCP server available or select **Block** in Microsoft 365 admin center > Agents > Tools > Work IQ MCP.
- Confirm the licences the Learn page lists for the app types in use are assigned to the pilot users.

### After rollout
- Review Copilot Credit consumption for Cowork and Work IQ API in Microsoft 365 admin center > Copilot > Cost management, and adjust the spending policy that covers those services.
- Re-read the Learn default settings page and Message center for the new date on which existing environments are switched on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can use Business Applications data in Work IQ through Microsoft 365 Copilot</strong><br><small>Tenant</small><br><small class="controls__note">Options: No users, All users (the default), Specific groups. Tenant administrator per the page; the access page names the AI Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › View all › Business Applications data in Work IQ available to Copilot › No users / All users / Specific groups <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Work IQ features are on in an environment</strong><br><small>Environment</small><br><small class="controls__note">Environment administrator per the default settings page; the participation page names the Power Platform Administrator role.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › environment › Settings › Product › Features › Work IQ <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-participation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a model-driven app's tables, forms and views are available to Microsoft 365 Copilot Chat</strong><br><small>App</small><br><small class="controls__note">Maker-side setting; the portal steps end with Save and Publish. The request body uses SettingName m365copilotmodelappenabled, Value for the override, and AppUniqueName for the target app.</small></td><td data-label="Admin UI"><strong>Power Apps maker portal</strong><br>Apps › app › Edit › Settings › Features › Enable Microsoft 365 Copilot in model-driven apps <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST /api/data/v9.2/SaveSettingValue</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Work IQ MCP server is available at all</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the entire server, separate from the Copilot audience setting and App Access. AI Administrator role per the page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › Tools › Work IQ MCP › Block <a href="https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/manage-ai-experience-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot Credit spending for Cowork and Work IQ API use of business data</strong><br><small>Tenant</small><br><small class="controls__note">Beta API. Updatable body properties include displayName, periodLimit, perUserLimit and billingMethods. Covers the consuming experience, not a business applications category.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Cost management <a href="https://learn.microsoft.com/microsoft-365/copilot/usage-based-billing-overview-copilot-credits" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/copilot/costManagement/spendingPolicies/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/cost-management/spendingpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The three levels cascade. Learn says that if the tenant setting is off, data is not shared between Microsoft 365 Copilot Chat and Dataverse even if an app is configured to share data. If the environment setting is off, business skills, semantic modelling and Dataverse data access through Copilot Chat, Research and Agent Builder are not available in that environment. Only apps with the app-level setting on share their data, and Learn notes a table shared by several apps stays available until each of those apps is turned off.

The Learn pages name the tenant setting differently: **Business Applications data in Work IQ available to Copilot** in the steps, **Dataverse Data Available in Microsoft 365 Copilot** in the list of defaults, and **Enable Microsoft 365 Copilot Chat and Dataverse** in the cascade description. The path above follows the steps on the default settings page.

Microsoft Learn documents no API, PowerShell cmdlet or CLI command for the tenant audience, the environment-level **Work IQ** setting or the Work IQ MCP block at the time of writing (November 2026). The app-level setting has a documented Dataverse Web API action and the spending policy has a documented Graph call, both in the controls table; the spending-policy call is a beta API that Learn says is subject to change. The tenant audience, environment-level and MCP settings are changed in the portals.

## Open questions

- When will Microsoft switch the feature on for existing environments, given that Learn says the November 2026 schedule has been deferred? Watch the Learn default settings page and Message center.
- Does the licence condition in MC1483492 (Microsoft Copilot Premium plus Power Apps Premium or Dynamics 365) apply to the default-on state of new environments, as the notice says, or do all new public production environments qualify, as the Learn page reads?
- Does App Access control cover Microsoft 365 Copilot Chat access to Dataverse data, or only agentic applications such as Cowork? Learn names Cowork as an example of the latter.
- How many Copilot Credits does a typical business-data request use in Cowork or through the Work IQ API? Learn says the cost varies by task.
- Will Microsoft document an API or CLI for the tenant and environment settings so they can be audited and scripted?

<!-- rationale
risk: Medium. Microsoft says it is on by default in new public production environments and opens Dataverse data to Copilot, but it works within existing permissions and has tenant, environment and app switches.
cost: Variable. Copilot Cowork and Work IQ API use of business data is metered in Copilot Credits, and the feature adds search indexes that use storage; Copilot Chat grounding carries no separate Work IQ API charge.
impact: Medium. People who use model-driven apps and Dynamics 365 in new production environments, plus makers and environment admins, notice it; Microsoft's notice does not say it changes anything for users elsewhere.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: Status / availability: The user guide says access to Business Applications through Microsoft Copilot Studio is generally available. | Found: Access to Business Applications through Work IQ Model Context Protocol (MCP) and Microsoft Copilot Studio is generally available. | Fix: Replace the Studio availability clause with: 'The Business Applications user guide says access through Microsoft Copilot Studio is generally available, but the Copilot Studio Work IQ page labels Business apps as preview and requires preview workloads to be enabled.' Cite https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/add-work-iq. | Source: https://learn.microsoft.com/power-apps/user/use-business-apps-work-iq
- [supported, minor] controls[2].api; Governance controls table and prose / command: POST /api/data/v9.2/SaveSettingValue sets an app-level setting override. | Found: SaveSettingValue Action ... Creates or updates app/organization level override. | Fix: Keep the call and add https://learn.microsoft.com/power-apps/developer/data-platform/webapi/use-web-api-actions to sources. It documents POST for Web API actions and the /api/data/v9.2/ unbound-action route; the cited action reference documents the operation and parameters. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/savesettingvalue
-->
