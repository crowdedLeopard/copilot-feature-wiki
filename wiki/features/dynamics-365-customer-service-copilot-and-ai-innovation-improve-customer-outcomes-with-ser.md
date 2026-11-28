---
title: "Dynamics 365 Customer Service: Service Agent in Microsoft 365 Copilot Chat"
slug: "dynamics-365-customer-service-copilot-and-ai-innovation-improve-customer-outcomes-with-ser"
roadmapId: 576818
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Customer Service"]
summary: "Service Agent brings Microsoft 365 Copilot Chat into Dynamics 365 Customer Service to review cases, draft replies and find knowledge. An administrator has to enable it; the roadmap lists it as launched."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says a Dynamics 365 Enterprise or Premium licence is needed to use Microsoft Copilot in a Dynamics 365 app, and a Microsoft 365 Copilot licence for the full Work IQ capabilities. No price or rate specific to Service Agent is published."
audiences: ["service-owner","m365-admin","power-platform-admin","security"]
tags: ["m365-copilot","copilot-chat","customer-service","dynamics-365","agents","work-iq","write-actions","dataverse","m365-admin-center","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576818"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576818"
    kind: "roadmap"
  - title: "Enable Service Agent in Microsoft Copilot"
    url: "https://learn.microsoft.com/dynamics365/customer-service/administer/configure-service-agent"
    kind: "learn"
  - title: "Use Service Agent in Customer Service"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/use-service-agent"
    kind: "learn"
  - title: "Manage the Service app in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    kind: "learn"
  - title: "Add Microsoft Copilot for app users in model-driven apps"
    url: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot"
    kind: "learn"
  - title: "Enable the Dynamics 365 ERP apps plugin for Copilot Cowork"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Customer Service Copilot tool privilege reference"
    url: "https://learn.microsoft.com/dynamics365/customer-service/develop/customer-service-tool-privilege-reference"
    kind: "learn"
  - title: "Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["m365-copilot-service-agent-in-m365-your-dedicated-service-specialist","work-iq"]
controls:
  - governs: "Which users the Service app is installed to and available to"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Service > Users > Available to"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Needs a Microsoft Agent 365 licence for the API. Beta. Request body sets availableTo and deployedTo. Confirm the Service app is listed as a package in your tenant. Installed to is edited on the same Users tab."
  - governs: "Whether the Service app is blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Service > Block"
      docs: "https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Blocking removes the app from users who already installed it. API needs a Microsoft Agent 365 licence and is in beta; confirm the Service app is listed as a package in your tenant."
  - governs: "Whether Microsoft Copilot is on in an environment or environment group"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Copilot > Settings > Power Apps > Chat Agent > Microsoft Copilot > environment > Edit Setting > On"
      docs: "https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot"
    api: null
    note: "Power Platform administrators. Makers can also turn it on for one model-driven app or, through an environment value, for every model-driven app in the environment."
  - governs: "Whether Dataverse data is available to Microsoft Copilot for the tenant"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Settings > Dataverse data available in Microsoft Copilot"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp"
    api: null
    note: "A prerequisite of Microsoft Copilot in model-driven apps. The path is read on the finance and operations Cowork plugin page, which describes the same setting."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-28"
roadmapModified: "2026-10-16T19:09:27"
changes:
  - date: "2026-11-21"
    note: "First briefing for roadmap item 576818: Service Agent in Microsoft 365 Copilot Chat for Dynamics 365 Customer Service."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 101 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the write-action guard to the Dataverse privileges each Service Agent tool requires, completed the environment setting path, and removed checklist items that had no control row."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 106 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 106
  confirmed: 106
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7e23abc05f5927f8eb156bc528eaa3d5"
---

## What's changing

Service Agent puts Dynamics 365 Customer Service data inside Microsoft 365 Copilot Chat. Microsoft Learn describes it as a Microsoft 365 Copilot agent that helps customer service representatives find, summarise and update customer service information, using Customer Service data and connected knowledge sources. The roadmap item describes the same chat experience arriving in Customer Service with service-aware grounding, so that supervisors, leads and representatives can see and prioritise work, draft customer communications, spot trends across cases and find answers in support knowledge.

On the Learn page for using Service Agent, representatives can ask Copilot to review and prioritise cases, summarise cases and recent interactions (across Teams, Outlook and Customer Service), retrieve knowledge from Dynamics 365 and SharePoint, and draft knowledge articles and customer emails. They can also take actions on cases: adding notes, updating status, updating priority, creating child cases and resolving a case. Service Agent works against the Customer Service environment chosen under **Sources**, and can use the active case or work item as context in Copilot Service workspace. That page lists case-level tasks and next best actions; it does not describe the cross-case trend analysis for supervisors that the roadmap mentions.

Two separate tasks switch it on. A Microsoft 365 administrator manages installation and assignment of the Service app, and a Dynamics 365 administrator adds Microsoft Copilot to the Customer Service environment for the in-app experience. Microsoft Learn says the app is installed automatically if a Customer Service licence is assigned in the tenant.

The roadmap record gives status Launched, a preview date of March CY2026 and a target date of June CY2026, with release phases General Availability and Preview, Worldwide (Standard Multi-Tenant) cloud and the Web platform. The Learn page for using Service Agent states that Service Agent is generally available as a Microsoft 365 Copilot agent.

## Why it matters

Service Agent gives representatives a chat route into case records, customer interactions and knowledge, including actions that change cases. For a service owner this moves the question of who can see and change case data from the Customer Service forms to a chat surface, so the Dynamics 365 security roles behind it need to be right before the app is assigned widely.

Microsoft's configuration page says an administrator enables Service Agent and gives no sign that representatives get it without that step, so a tenant that does nothing is not described as receiving it. The decision for administrators is who should receive the Service app, which environments Service Agent may read, and whether the licence and Dataverse capacity position supports it.

## Risk assessment

**Data exposure**
- Service Agent reads cases, customer records and recent interactions, and discovers knowledge from Dynamics 365 and SharePoint. The environment chosen under **Sources** decides which customer service records it can access in a session. Microsoft's configuration page warns that when you connect to other services, data might be sent outside the Dynamics 365 compliance boundary and that managing this is the customer's responsibility.
- Microsoft Copilot in model-driven apps depends on the tenant setting **Dataverse data available in Microsoft Copilot** and on Dataverse Search set to **Default** or **On** for the environment. Turning these on widens what the chat can search.

**Security & identity**
- The Service app's assignment does not grant Dynamics 365 data rights: Microsoft's Service app page states that Dynamics 365 security roles and data access decide the environments, tools, records and actions a user can reach. Review those roles for representatives before assigning the app.
- Installing the Service app from Microsoft Marketplace needs permissions equivalent to the tenant administrator and a paid licence for using its capabilities, so plan who performs the installation.

**Autonomy & actions**
- Service Agent can update case priority, add notes, create child cases and resolve a case when a representative asks, and can send a drafted email after the representative reviews it. These are changes to live case data, so treat the Dataverse security privileges required by each tool as the guard on write actions ([Customer Service Copilot tool privilege reference](https://learn.microsoft.com/dynamics365/customer-service/develop/customer-service-tool-privilege-reference)).
- Microsoft's Service app page says the package gives no separate administrator targeting for individual Service components, so deployment is controlled at app level.

**Change & support**
- Removing the Service app can affect more than one experience, because it packages Service Agent and Customer Service plugins for several Copilot experiences. Installation does not confirm that Chat or Cowork is enabled or available to every assigned user, so expect support questions about why an assigned user sees nothing.
- Microsoft Copilot is gradually replacing Copilot chat in model-driven apps, and during the transition makers can enable either or both, so representatives might see two chat entries in the **Copilot** menu.

## Cost and licensing

Licence: Microsoft Learn says that to use Microsoft Copilot in a Dynamics 365 app, users must have a Dynamics 365 Enterprise or Premium licence, and that the full Work IQ capabilities beyond Dataverse grounding need a Microsoft 365 Copilot licence ([Add Microsoft Copilot for app users in model-driven apps](https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot)). The Service Agent page adds that specific licensing requirements apply and that available capabilities vary with the organisation's licensing and tenant configuration, and points to the Dynamics 365 Licensing Guide.

Installing the Service app from Microsoft Marketplace needs permissions equivalent to the tenant administrator and a paid licence for using its capabilities.

Indirect cost: Microsoft Copilot for model-driven apps relies on Dataverse Search indexes, and enabling it might increase the environment's Dataverse capacity consumption. Learn also says sufficient Dataverse database capacity must be available for indexing, semantic search and Copilot operations. Connecting to other services might incur costs, according to the Service Agent configuration page.

Not yet published: the Service Agent pages publish no separate price, meter or credit rate for it at the time of writing (November 2026).

## Scope

**Users and licences:** customer service representatives, leads and supervisors, per the roadmap description, who hold the licences described under Cost and licensing.

**Roles:** a Microsoft 365 administrator manages installation and assignment of the Service app; a Dynamics 365 administrator adds Microsoft Copilot to the Customer Service environment. Power Platform administrators set up Microsoft Copilot for model-driven apps at environment level, and makers can enable it for a single app.

**Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. Microsoft Learn says Microsoft Copilot for model-driven apps is not available in the Power Apps mobile app.

**Prerequisites:** the tenant setting **Dataverse data available in Microsoft Copilot** is on, and Dataverse Search is **Default** or **On** for the environment. **Rollout:** status is Launched on the roadmap, with targets of March CY2026 (preview) and June CY2026.

## Governance guidance

### Before rollout
- Check whether the Service app is already installed and assigned: the Service entry in the Microsoft 365 admin center agent registry, where the Learn page says it might already be installed because Customer Service licences install it automatically.
- Confirm licences for the intended group: Dynamics 365 Enterprise or Premium, and Microsoft 365 Copilot where full Work IQ capabilities are wanted.
- Confirm with the Dynamics 365 administrator which environment representatives should select under **Sources**.

### At rollout
- Set **Installed to** and **Available to** on the Service app's **Users** tab to the same pilot group; the two scopes are independent, so changing only **Available to** does not narrow a wider installation.
- Turn on **Dataverse data available in Microsoft Copilot** in the Microsoft 365 admin center, and set Microsoft Copilot to **On** for the chosen environment or environment group in the Power Platform admin center.
- Test with a representative's own account rather than an administrator account, as Microsoft recommends.

### After rollout
- Check that excluded users cannot reach the app, looking at overlapping group memberships and organisation-wide installations.
- Use **Block** on the Service app to stop installation and use across the organisation if a problem appears, remembering that it removes the app from users who already installed it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users the Service app is installed to and available to</strong><br><small>User</small><br><small class="controls__note">Needs a Microsoft Agent 365 licence for the API. Beta. Request body sets availableTo and deployedTo. Confirm the Service app is listed as a package in your tenant. Installed to is edited on the same Users tab.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Service › Users › Available to <a href="https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Service app is blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Blocking removes the app from users who already installed it. API needs a Microsoft Agent 365 licence and is in beta; confirm the Service app is listed as a package in your tenant.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Service › Block <a href="https://learn.microsoft.com/dynamics365/customer-service/use/manage-service-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Copilot is on in an environment or environment group</strong><br><small>Environment</small><br><small class="controls__note">Power Platform administrators. Makers can also turn it on for one model-driven app or, through an environment value, for every model-driven app in the environment.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Copilot › Settings › Power Apps › Chat Agent › Microsoft Copilot › environment › Edit Setting › On <a href="https://learn.microsoft.com/power-apps/maker/model-driven-apps/add-microsoft-365-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Dataverse data is available to Microsoft Copilot for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">A prerequisite of Microsoft Copilot in model-driven apps. The path is read on the finance and operations Cowork plugin page, which describes the same setting.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Settings › Dataverse data available in Microsoft Copilot <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Service app's **Installed to** and **Available to** scopes are independent: preinstallation can include users outside the availability scope, and organisation-wide installation can override a limited scope. **Block** prevents installation and use and removes the app from users who already installed it. Uninstalling is a separate action that does not delete Dynamics 365 records.

The two Graph rows come from the Agent 365 Package Management API reference, which needs a Microsoft Agent 365 licence and is in beta. That reference describes agents and tools as packages; confirm that the Service app is returned as a package in your tenant before scripting against it.

None of these controls limits individual Service components or write actions. Dynamics 365 security roles and the Service Agent tool configuration, which the configuration page says you can configure after installation, are the route to narrow what Service Agent can reach. No steps for that tool configuration are given on the configuration page, so it has no row here.

## Open questions

- Does Service Agent cover the cross-case trends and operational signals for supervisors that the roadmap describes, and which tools or licences provide them?
- Is a Copilot Credit or other meter charged for Service Agent use? Watch the Dynamics 365 Licensing Guide and the Service Agent pages.
- Does the Service app appear as a package that the Agent 365 Package Management API can block and scope in a given tenant?
- How do the roadmap's two release phases, General Availability and Preview, map to individual capabilities? Watch the roadmap item for changes.

<!-- rationale
risk: Medium. Service Agent can update and resolve cases and send emails after a representative reviews them, and Microsoft warns that data might leave the Dynamics 365 compliance boundary when other services are connected.
cost: Medium. Dynamics 365 Customer Service users need a Dynamics 365 Enterprise or Premium licence for Microsoft Copilot, full Work IQ capabilities need Microsoft 365 Copilot, and Dataverse capacity use might rise. No separate meter is published.
impact: Medium. The audience is customer service representatives, leads and supervisors, a specific set of roles rather than most users in a tenant.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls; Governance guidance: At rollout / admin-path: The tenant Dataverse setting is at Microsoft 365 admin center > Copilot > Settings > Dataverse data available in Microsoft Copilot. | Found: Navigate to Copilot > Settings. ... Enable Dataverse data available in Microsoft Copilot. | Fix: Keep the path supported by the cited ERP page, but add to controls[3].note: 'The Business Applications in Work IQ default settings page instead gives Copilot > Settings > View all > Business Applications data in Work IQ available to Copilot > All users or Specific groups.' Cite https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings#cascading-control-settings in sources. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/copilot/enable-copilot-cowork-erp
-->
