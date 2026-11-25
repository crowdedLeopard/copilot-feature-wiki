---
title: "Microsoft Foundry: publish agents to the Microsoft 365 Copilot Agent Store without code"
slug: "m365-copilot-copilot-extensibility-no-code-publishing-for-azure-ai-foundry-agents-to-m365"
roadmapId: 501112
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Developers can publish a Foundry agent to Microsoft Copilot and Teams from the Foundry portal. Organisation-wide publishing waits for admin approval in the Microsoft 365 admin center; admins need a review routine."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says a running Foundry agent bills model calls and the tools and resources it uses on separate Azure meters. The publish page lists roles and a project as prerequisites and names no Microsoft 365 licence."
audiences: ["m365-admin","service-owner","security","maker"]
tags: ["microsoft-foundry","agents","approvals","agent-governance","extensibility","m365-copilot","m365-admin-center","app-management"]
sources:
  - title: "Microsoft 365 Roadmap 501112"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501112"
    kind: "roadmap"
  - title: "Publish agents to Microsoft Copilot and Microsoft Teams in the Foundry portal"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot"
    kind: "learn"
  - title: "Publish agents to Microsoft Copilot and Microsoft Teams by using the REST API"
    url: "https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot-virtual-network"
    kind: "learn"
  - title: "Manage agent requests in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: publish"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Billing concepts for Microsoft Foundry"
    url: "https://learn.microsoft.com/azure/foundry/concepts/billing-concepts"
    kind: "learn"
videos: []
related: ["agent-registry","app-management"]
controls:
  - governs: "Approving a Foundry agent request and choosing its audience and policy template"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests > agent > Publish to store"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/publish"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish"
    note: "Beta; the reference calls it a proposed typed beta contract and needs an Agent 365 licence. The request body sets publishScope and policyTemplateId."
  - governs: "Blocking a published agent for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Beta; needs an Agent 365 licence and takes no request body. Applies after the agent is listed."
  - governs: "Who a developer publishes a Foundry agent to: just themselves or the organisation"
    scope: "agent"
    ui:
      surface: "Microsoft Foundry portal"
      path: "Publish > Teams and Microsoft Copilot > Direct publish > Choose who can use this agent"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot"
    api:
      kind: "rest"
      call: "POST {{endpoint}}/agents/<agent-name>/microsoft365/publish?api-version=v1"
      docs: "https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot-virtual-network"
    note: "Developer-side control; needs the Foundry User role on the project. The request body sets publishScope: Shared, Tenant or Personal."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-03-12T23:15:41"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 501112: how Foundry agents are published to Microsoft Copilot and Teams, the admin approval step and the controls that apply."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 59
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "8e4a54b3f47e544ef69652337cf31153"
---

## What's changing

Developers can publish a Microsoft Foundry agent to Microsoft Copilot and Teams from the Foundry portal, without building a separate package by hand. The roadmap item describes this as publishing Azure AI Foundry agents directly to the Microsoft 365 Copilot Agent Store with a simplified, no-code experience. Learn's page for the feature calls the product Microsoft Foundry.

In the portal, the developer selects **Publish**, then **Teams and Microsoft Copilot**, fills in the agent's name, publish version and descriptions, and chooses **Direct publish**. Foundry then compiles a Teams app manifest as a `.zip` package and submits it to the Microsoft Copilot and Teams agent catalogs on the developer's behalf. The developer picks one of two scopes. **Just you** is available immediately with no admin approval, and the agent appears only for that developer under **Your agents**. **People in your organization** submits the agent for admin approval; once approved it appears under **Built by your org** for all tenant users.

There is a second route: **Download & customize** gives the developer a `.zip` of the app manifest, which they can inspect and then upload in Microsoft Teams. Updates to a published agent's active version are made in Foundry through its version selector, and Learn says there is no need to republish to Microsoft 365 and Teams.

The roadmap record gives the status as Launched, with a target of November CY2025, for General Availability on the web in the Worldwide (Standard Multi-Tenant) cloud. Microsoft's admin-side Learn page lists Microsoft Foundry among the tools whose agents can be submitted for admin approval.

## Why it matters

Anyone holding the Foundry User role on a project can start a publication that, with the organisation scope, ends in the admin's queue. The admin gate is the Requests queue in the Microsoft 365 admin center: whoever works that queue decides which Foundry-built agents reach the tenant, and Learn says that approval makes the agent discoverable and usable by anyone in the tenant.

The sources do not say that anything changes in your tenant until a developer publishes. The practical work is to agree who reviews Foundry requests, what they check (data, permissions the agent requests, what its Foundry tools can reach) and how the agent will be blocked if it proves unsuitable.

## Risk assessment

**Data exposure**
- Learn warns that Microsoft 365 and Teams process and store data tied to publishing and using the agent, including the agent's name, icon and description and the data in its responses to users' queries, under Microsoft 365 and Teams terms and commitments. Evaluate compliance and data residency before approving a request.
- Learn tells developers not to put secrets, API keys or sensitive information in the metadata fields, because users can see them.

**Security & identity**
- With **People in your organization**, Learn says anyone in the tenant can discover and use the agent after approval, and that app policies in the tenant control which users can access it. In the publishing wizard, the **Review permissions** step shows the permissions the agent requests and lets the admin grant admin consent if appropriate; read it for every request.
- Learn says channel authorisation, store visibility and downstream model or tool permissions are separate concerns, so approving the listing does not by itself review what the agent's Foundry tools can reach.
- The **Download & customize** route ends in a manual upload in Teams. Check how your Teams app management settings treat uploaded custom apps (see [/concepts/app-management/](/concepts/app-management/)).

**Autonomy & actions**
- The Requests details show the agent's capabilities, data sources and custom actions, and Learn says downstream model or tool permissions are separate from the listing. Check what the agent can invoke before you approve.

**Change & support**
- Learn says a new agent version needs no republishing, and that the version selector set to **Always use latest** (the default) serves a new version in Microsoft 365 and Teams automatically. For agents already approved, plan for the live behaviour to change in Foundry.
- Learn lists limitations for agents published to Microsoft 365: file uploads and image generation do not work there (they work in Teams), and published agents do not support citations. Portal publishing is not supported for projects that disable public network access; those use the REST API route.

## Cost and licensing

Learn's Foundry billing page says that when an agent runs you pay for the model calls it makes and for the tools and resources it uses, each on its own meters, so an agent's total cost spans several meters in Azure Cost Management. That is a Foundry cost owned by the Azure subscription behind the project, not by the Microsoft 365 admin centre.

The publish page lists its prerequisites as portal access, a Foundry project with a tested agent version, and the Foundry User role on the project scope. It names no Microsoft 365 licence, and Microsoft Learn publishes no charge or meter specific to publishing an agent to the Agent Store at the time of writing (November 2026).

The Microsoft Graph Package Management API pages used in the controls table state that access to that API requires a Microsoft Agent 365 licence. The admin centre steps for approving a request do not state that requirement. Indirect cost is reviewer time in the Requests queue.

## Scope

**Who publishes.** A developer with access to the Microsoft Foundry portal and the Foundry User role on the Foundry project scope, for a project with an agent version they tested. Learn says the Foundry RBAC roles were recently renamed from Azure AI User, Azure AI Owner, Azure AI Account Owner and Azure AI Project Manager.

**Who approves.** For **People in your organization**, a Microsoft 365 admin approves the request in the Microsoft 365 admin center under Agents > All agents > Requests.

**Where.** The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform and General Availability. That is a record fact; it does not state that other clouds are excluded.

**Prerequisites and constraints.** Publishing from the Foundry portal is not supported for projects that disable public network access; Learn points those projects to the REST API and the `enable_m365_public_endpoint` setting, and says Microsoft 365 and Teams channel traffic does not use Private Link.

## Governance guidance

### Before rollout
- Name who works the Requests queue under Agents > All agents > Requests and agree what they check: the agent's capabilities, data sources, security and permissions and custom actions, as the controls table sets out.
- Ask your Foundry project owners who holds the Foundry User role on projects whose agents could be published, and which projects are likely to publish to Microsoft 365 and Teams.
- Decide whether you accept the data handling in Learn's warning for Microsoft 365 and Teams, and brief developers not to put secrets in metadata fields.

### At rollout
- Review each pending request's details, then publish it with the audience and policy template you choose in the wizard, or reject it; use the publish row in the controls table.
- Read the **Review permissions** step before granting admin consent for a Foundry agent.
- Test the approved agent as an ordinary user under **Built by your org** and confirm the limitations Learn lists (file uploads, image generation, citations) are acceptable.

### After rollout
- Watch the Requests queue for **Pending update** items; Learn says users keep the previous version until you approve an update.
- Block the agent for the whole organisation from the All agents page if it proves unsuitable, using the block row in the controls table.
- Ask developers to tell you when they pin or change the active agent version in Foundry, since Learn says that needs no republishing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Approving a Foundry agent request and choosing its audience and policy template</strong><br><small>Agent</small><br><small class="controls__note">Beta; the reference calls it a proposed typed beta contract and needs an Agent 365 licence. The request body sets publishScope and policyTemplateId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests › agent › Publish to store <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/publish</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagepublishresult-publish" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking a published agent for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">Beta; needs an Agent 365 licence and takes no request body. Applies after the agent is listed.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who a developer publishes a Foundry agent to: just themselves or the organisation</strong><br><small>Agent</small><br><small class="controls__note">Developer-side control; needs the Foundry User role on the project. The request body sets publishScope: Shared, Tenant or Personal.</small></td><td data-label="Admin UI"><strong>Microsoft Foundry portal</strong><br>Publish › Teams and Microsoft Copilot › Direct publish › Choose who can use this agent <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST {{endpoint}}/agents/&lt;agent-name&gt;/microsoft365/publish?api-version=v1</code> <a href="https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot-virtual-network" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The approval gate applies to the **People in your organization** scope. Learn says **Just you** needs no admin approval and the agent appears only for the developer, so the Requests queue does not see those publications.

Publishing through the Microsoft Graph route needs a Microsoft Agent 365 licence, and its reference page calls the publish operation a proposed typed beta contract, not a deployed availability or a v1.0 release. Treat the admin centre steps as the dependable route. Learn's block steps cover agents in **All agents**; confirm that a published Foundry agent appears there after approval.

The Foundry-side row is a developer control, not an admin one: the scope the developer picks sets whether the request reaches you at all.

## Open questions

- Does changing the active version in Foundry, which Learn says needs no republishing, raise a **Pending update** request in the Microsoft 365 admin center, or does the new version reach users without review? Watch the Foundry publishing page and the agent requests page.
- Is there a Microsoft 365 licence or meter specific to users who use a Foundry agent in Copilot or Teams? Watch the Foundry billing page and Message center.
- Can an admin stop developers from publishing with the **Just you** scope, where Learn says no admin approval is required? Watch the agent settings page on Learn.
- Which Teams app policies apply to a package a developer uploads through **Download & customize**?

<!-- rationale
risk: Medium. A Foundry developer can publish an agent that, once an admin approves it, appears for everyone in the tenant, and Learn warns that Microsoft 365 and Teams process and store data from its use.
cost: Variable. Foundry bills the agent's model calls and tools on Azure meters; the publish page names no Microsoft 365 licence and no charge specific to publishing, so Azure consumption is the cost to watch.
impact: Medium. Developers choose to publish and admins approve, so only those roles act; tenant users notice when an approved agent appears under Built by your org in the agent store.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].governs; rendered table; Governance guidance: After rollout / applicability: The admin-centre Block action blocks a published Foundry agent for the whole organisation without a host limitation. | Found: However, blocking an agent that you created by using SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. | Fix: Change controls[1].governs and its rendered label to 'Blocking a published Foundry agent in Microsoft Copilot Chat'. Add to its note: 'For Microsoft Foundry agents, the admin-centre Block action only affects availability in Microsoft Copilot Chat.' Replace the After rollout block bullet with 'Block the Foundry agent in Microsoft Copilot Chat from the All agents page if it proves unsuitable; this action does not block its availability in Teams.' Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment; rationale: risk and impact / availability: An approved organisation-scope agent appears under Built by your org for all tenant users and anyone in the tenant can discover and use it. | Found: After approval, the agent appears for everyone in your tenant under **Built by your org**, and anyone in the tenant can discover and use it. | Fix: After the first description of post-approval availability, add: 'The admin requests page also says administrators can scope the audience to specific users or groups, or everyone: https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests.' This cited page qualifies the tenant-wide wording used by the Foundry page. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot
- [supported, minor] front matter: licensing.model and cost; Cost and licensing; rationale: cost / licensing: Consumption is the documented Foundry billing model relevant to running the agent, with separate model, tool and resource meters. | Found: When an agent in Foundry Agent Service runs, you pay for the model calls it makes and for the tools and resources it uses. Each item bills on its own meters, so an agent's total cost spans several meters in Azure Cost Management. | Fix: Keep the Azure-meter statement, but add: 'The Agent Applications FAQ describes published applications as publisher-pays, with costs based on deployed underlying infrastructure rather than per-call consumption: https://learn.microsoft.com/azure/foundry/agents/how-to/agent-applications#faqs.' This is a different emphasis in Microsoft's published-agent billing guidance, not grounds to discard the cited billing page. | Source: https://learn.microsoft.com/azure/foundry/concepts/billing-concepts
- [supported, minor] Cost and licensing / cost: Foundry charges are Azure costs borne by the publisher's project infrastructure rather than charges owned by the Microsoft 365 admin centre. | Found: Published agents use a publisher-pays model: the publisher (the Foundry project owner) incurs costs based on the underlying infrastructure that is deployed when the agent is published as an application, not based on per-call consumption. | Fix: Add https://learn.microsoft.com/azure/foundry/agents/how-to/agent-applications#faqs to sources for the publisher-pays attribution. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/agent-applications#faqs
- [supported, minor] controls[0].ui; rendered table / admin-path: Agents > All agents > Requests > agent > Publish to store opens the wizard for audience, policy template and permission review. | Found: select **Publish to store** within the agent details pane to view the agent publishing wizard. The publishing wizard steps you through the process of selecting users, applying a policy template, and accepting permissions. | Fix: Keep the path, which correctly reaches the publishing wizard, and append to controls[0].note: 'The UI path opens the wizard. Select the users or groups who can install the agent, optionally select preinstalled users, choose a policy template, review permissions and grant admin consent if appropriate, then select Publish.' The current route stops before the audience and template controls named in governs. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests
- [supported, minor] controls[2].ui; rendered table / admin-path: The Foundry scope control is at Publish > Teams and Microsoft Copilot > Direct publish > Choose who can use this agent. | Found: Select **Next: Publish options**. ... On **Publish options**, select the **Direct publish** tab. ... Under **Choose who can use this agent**, select a scope: | Fix: Include the wizard page heading: 'Publish > Teams and Microsoft Copilot > Publish options > Direct publish > Choose who can use this agent' in controls[2].ui.path and the rendered table. The omitted Next transition and metadata fields are not blockers. | Source: https://learn.microsoft.com/azure/foundry/agents/how-to/publish-copilot
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist's instruction to take stock of Foundry User role assignments has a corresponding control row. | Found: Ask your Foundry project owners who holds the Foundry User role ... Controls cover publishing approval, blocking and developer publishing scope, not project role assignments. | Fix: Narrow that checklist bullet to 'Ask your Foundry project owners which projects are likely to publish agents to Microsoft 365 and Teams.' Do not add a control row.
-->
