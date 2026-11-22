---
title: "Microsoft 365 Copilot: build custom engine agents with the Microsoft 365 Agents SDK"
slug: "m365-copilot-copilot-extensibility-developers-can-build-custom-engine-agents-with-the-m365"
roadmapId: 474445
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers can build custom engine agents on their own AI stack with the Microsoft 365 Agents SDK and deploy them to Copilot, Teams and other channels. Admins control which agent packages are published and who can use them."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "May CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's cost page lists user licences, usage-based consumption and hosting as separate cost categories and says to budget for your own orchestration, models and hosting. A licence specific to the Agents SDK is not yet published."
audiences: ["m365-admin","service-owner","security","finops"]
tags: ["m365-copilot","custom-engine-agents","agents","extensibility","teams","app-management","agent-registry"]
sources:
  - title: "Microsoft 365 Roadmap 474445"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=474445"
    kind: "roadmap"
  - title: "Build custom engine agents with Microsoft 365 Agents SDK"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/m365-agents-sdk"
    kind: "learn"
  - title: "Custom engine agents for Microsoft 365 overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/overview-custom-engine-agent"
    kind: "learn"
  - title: "Custom engine agent architecture"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/custom-engine-agent-architecture"
    kind: "learn"
  - title: "Create and deploy an agent with Microsoft 365 Agents SDK"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/create-deploy-agents-sdk"
    kind: "learn"
  - title: "Plan licensing and cost"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/cost-considerations"
    kind: "learn"
  - title: "Manage custom apps in Microsoft Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/teams-custom-app-policies-and-settings"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Publishing a custom app or agent package to the organisation's catalogue (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/teamsapp-publish?view=graph-rest-1.0"
    kind: "learn"
  - title: "Whether an agent is available to anyone in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-extensibility-users-will-be-able-to-upload-files-stored-locally-or-in","m365-copilot-copilot-extensibility-users-in-gcc-m-will-able-to-use-custom-engine-agents","m365-copilot-copilot-extensibility-users-in-gcc-h-will-be-able-to-use-custom-engine-agents","m365-copilot-copilot-extensibility-users-in-dod-will-be-able-to-use-custom-engine-agents"]
controls:
  - governs: "Publishing a custom app or agent package to the organisation's catalogue"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Upload new app"
      docs: "https://learn.microsoft.com/microsoftteams/teams-custom-app-policies-and-settings"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/appCatalogs/teamsApps"
      docs: "https://learn.microsoft.com/graph/api/teamsapp-publish?view=graph-rest-1.0"
    note: "Delegated permissions only. AppCatalog.Submit submits an app for review and does not publish it. Teams admin center upload: Global or Teams administrators."
  - governs: "Whether an agent is available to anyone in the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The Graph call needs a Microsoft Agent 365 licence and is a /beta API. The UI blocks the selected agent for the organisation; the documented effects across host products vary by agent type."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2025-01-10T23:15:46"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: covers the Agents SDK route for custom engine agents, the admin upload and block controls, and cost categories."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: the agent permissions review now sits before finishing deployment, not before choosing the audience; the Block note and open question about Agents SDK coverage were narrowed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 72 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 71
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "4af5fa15fd66871ca92206e69bca4958"
---

## What's changing

The roadmap item states that developers can use the Microsoft 365 Agents SDK to create custom engine agents: agents built on their own AI stack that can be deployed to Microsoft 365 Copilot, Microsoft Teams and other non-Microsoft channels. For an administrator this is a developer capability, and what reaches your tenant is the agents that your developers or software vendors build with it.

Microsoft Learn describes the SDK as a framework for building full-stack, multi-channel agents. The developer brings the orchestration (Learn names Semantic Kernel and LangChain as examples) and the AI models, and Learn says custom engine agents are supported in app manifest version 1.21 and later. Learn also says publishing agents via the Microsoft 365 Agents Toolkit isn't supported in Microsoft 365 Government tenants.

The roadmap record shows status In development, a target of May CY2025, release phase General Availability, platform Developer and the Worldwide (Standard Multi-Tenant) cloud only. That target month has passed while the status is unchanged, and Learn documents building and deploying with the SDK in the present tense, so the two sources differ on status.

## Why it matters

A custom engine agent gives its developer control over orchestration, models and data integrations, so what the agent does with a prompt is decided by code your organisation or a vendor wrote, not by Copilot's own experience. Your tenant's control point is the route by which that agent's package becomes available to users.

Microsoft has not stated what happens on arrival, so the wiki treats the default as unknown and bases its advice on no source saying that existing behaviour changes. The practical task is to decide who may upload or approve agent packages before developers start asking.

## Risk assessment

**Data exposure**
- Learn says pro-code agents, including those built with the Agents SDK, can access Microsoft 365 data via Microsoft Graph APIs and use the Retrieval API for grounding. Check the permissions an agent package requests at the upload step in the Microsoft 365 admin center before finishing deployment.
- Prompts and responses of custom engine agents in Copilot Chat and Teams are stored under Microsoft 365 product terms, and admins can use Content Search or Microsoft Purview to view and manage that data. Anything the agent sends to its own models or hosting is handled by that service, so ask the developer where it runs.

**Security & identity**
- Any user can submit a custom app for admin approval and Learn says that option can't be turned off; an admin can disapprove a submission. An app an admin uploads is available in the organisation's catalogue without further approval, so uploading is the decision that needs a reviewer.

**Autonomy & actions**
- Learn lists proactive automation among custom engine agent characteristics: programmatically triggering workflows and taking actions across enterprise applications. The table controls limit who can install or use an agent, not what its code does once published, so review the code's actions with the developer.

**Change & support**
- The developer owns orchestration, models and hosting, so support for failures sits with whoever runs that stack. Agents Toolkit publishing is not supported in Microsoft 365 Government tenants, and the roadmap record lists only the Worldwide cloud.

## Cost and licensing

Microsoft's cost page says costs vary by product and distribution route and lists user and administrator licences, usage-based consumption, hosting and development tools as separate categories. For a custom engine agent it says to budget for your own orchestration, models and hosting, and points to Azure AI Foundry, App Service and Azure AI Bot Service pricing as existing resources.

On the Microsoft 365 Copilot APIs, which an agent can call, the same page says they are available at no additional cost to users with a Microsoft 365 Copilot licence.

A licence or Copilot Credits rate specific to the Agents SDK is not yet published.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud, the Developer platform and the General Availability release phase, with status In development and a May CY2025 target.

The agents surface in Microsoft 365 Copilot, Teams and other channels the developer targets. Custom engine agents need app manifest version 1.21 or later. Learn says publishing via the Agents Toolkit isn't supported in Microsoft 365 Government tenants. In the Teams admin center, Learn lists Global or Teams administrators as the roles that upload custom apps for the whole organisation. To pin agents in Microsoft Copilot, Learn lists the AI Administrator role.

## Governance guidance

### Before rollout
- Decide who may upload custom apps: review the **Upload custom apps** option in the Teams admin center app setup policy and the org-wide custom app settings, which Learn describes as controlling who can upload custom apps.
- Ask each development team for the agent's app manifest version, the permissions it requests and where its orchestration, models and hosting run.
- Agree a budget owner for the hosting and model costs the developer's stack will incur.

### At rollout
- Upload the package in the Teams admin center, or review a user's submission, using the first row of the controls table.
- Use the Microsoft 365 admin center upload to start with a small audience such as **Just me** or a single test group, and review the agent permissions step before finishing deployment.

### After rollout
- Open Agents > All agents > Registry in the Microsoft 365 admin center to see how the agent is listed, and use the block action in the second table row if it must be withdrawn.
- Use Content Search or Microsoft Purview to review stored prompts and responses of the agent in Copilot Chat and Teams.
- Re-check the roadmap item, because the May CY2025 target has passed with the status still In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Publishing a custom app or agent package to the organisation's catalogue</strong><br><small>Tenant</small><br><small class="controls__note">Delegated permissions only. AppCatalog.Submit submits an app for review and does not publish it. Teams admin center upload: Global or Teams administrators.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Upload new app <a href="https://learn.microsoft.com/microsoftteams/teams-custom-app-policies-and-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/appCatalogs/teamsApps</code> <a href="https://learn.microsoft.com/graph/api/teamsapp-publish?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether an agent is available to anyone in the organisation</strong><br><small>Agent</small><br><small class="controls__note">The Graph call needs a Microsoft Agent 365 licence and is a /beta API. The UI blocks the selected agent for the organisation; the documented effects across host products vary by agent type.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two routes put a custom app or agent package into the organisation's catalogue: an admin uploads it (Learn says no approval is required), or a user submits it for admin approval. Learn says the user submit option can't be turned off. Separately, Learn says the **Upload custom apps** option in the app setup policy decides which users can upload custom apps for their own or a team's use, and an app permission policy restricts which users can use a particular custom app.

The Microsoft 365 admin center also takes an agent ZIP file under Agents > All agents > Add agent, lets you pick who can install and who gets it preinstalled, and lists the result in the registry. The Graph block call requires a Microsoft Agent 365 licence, per its reference page. The UI blocks the selected agent for the organisation; the documented effects across host products vary by agent type.

## Open questions

- Will Microsoft move the roadmap item off In development, and will the May CY2025 target be updated? Watch the roadmap item and Message center.
- Which licence, if any, is required for end users of an Agents SDK agent in Microsoft 365 Copilot? Watch the Copilot extensibility cost and licensing page.
- Is the default for a newly published custom engine agent on or off for users? Microsoft has not stated it.

<!-- rationale
risk: Medium. A custom engine agent brings its own orchestration, models and hosting and can read Microsoft 365 data through Microsoft Graph APIs; existing admin controls decide which agents are published and available.
cost: Variable. Microsoft's cost page tells builders to budget for their own orchestration, models and hosting (Azure services are its examples); a licence or meter specific to the Agents SDK is not yet published.
impact: Low. Developers and the admins who publish agents notice first; end users are affected only when a custom engine agent is made available to them. No source says the SDK changes existing Copilot behaviour.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / behaviour: Data sent to the agent's own external models or hosting is handled by those services. | Found: Data processed by non-Microsoft services isn't subject to Microsoft agreements. Review the terms provided by non-Microsoft agent and plugin publishers | Fix: Add https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings to sources for the external-service data-handling statement. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings
- [supported, minor] Governance guidance: Before rollout / applicability: Learn describes org-wide custom app settings as contributing to control of user uploads. | Found: To allow all users to upload custom apps, use the custom app setting in Org-wide app settings. | Fix: Replace the first Before rollout bullet with: 'Decide who may upload custom apps: review Upload custom apps in the Teams admin center app setup policy. Also review Let users interact with custom apps in preview for user-uploaded packages; Microsoft's documentation also describes the org-wide setting as affecting upload availability.' The cited page's distribution table distinguishes this preview-access setting from catalogue access. | Source: https://learn.microsoft.com/microsoftteams/teams-custom-app-policies-and-settings
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist directs readers to review controls not represented in the controls table. | Found: Checklist: review Upload custom apps and org-wide settings; choose a small upload audience; use Content Search or Microsoft Purview. Table: only publishing a package and blocking an agent. | Fix: The Before rollout upload-policy and org-wide-settings review, At rollout Microsoft 365 upload audience and permissions review, and After rollout stored-data review have no corresponding table rows. Remove those checklist instructions rather than adding unverified control rows.
-->
