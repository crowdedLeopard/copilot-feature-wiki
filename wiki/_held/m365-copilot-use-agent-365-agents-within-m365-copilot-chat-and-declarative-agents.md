---
title: "Microsoft 365 Copilot: Agent 365 agents as connected agents in declarative agents"
slug: "m365-copilot-use-agent-365-agents-within-m365-copilot-chat-and-declarative-agents"
roadmapId: 567670
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Declarative agents can call Agent2Agent agents registered in Agent 365. Administrators install those agents from the Microsoft 365 admin center, so review which ones to allow and who gets them. Rolling out now."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Microsoft Learn says Microsoft Agent 365 is licensed on a per-user basis, and that the Package Management API needs an Agent 365 licence."
audiences: ["m365-admin","security","service-owner"]
tags: ["agent-365","a2a","declarative-agents","copilot-chat","agent-registry","agent-governance","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 567670"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567670"
    kind: "roadmap"
  - title: "MC1478975"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1478975"
    kind: "message-center"
  - title: "Connect to other agents from a declarative agent"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-connected-agent"
    kind: "learn"
  - title: "Manage connected agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents"
    kind: "learn"
  - title: "Overview of Microsoft Agent 365"
    url: "https://learn.microsoft.com/microsoft-agent-365/overview"
    kind: "learn"
  - title: "Agent management in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-365-overview"
    kind: "learn"
  - title: "Agent management roles and permissions in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms"
    kind: "learn"
  - title: "Microsoft Agent 365"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365"
    kind: "learn"
  - title: "Agent Registration API overview (preview)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/agent-registration/overview"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Blocking an agent for the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Update Copilot package"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    kind: "learn"
  - title: "Get Copilot package details"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-get"
    kind: "learn"
  - title: "packageElement complex type"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/resources/packageelement"
    kind: "learn"
videos: []
related: ["work-iq-a2a-and-mcp-long-running-tasks","m365-copilot-agent-lifecycle-management-rules","work-iq-agent-policy-governance","agent-identity","mcp"]
controls:
  - governs: "Whether an Agent2Agent agent is installed for users or groups"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > Status > Available > agent > Install > Deploy agent to selected users > Next > Review permissions > Grant admin consent > Permissions requested > Accept > Next > Review & finish > Finish deployment"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id} with Content-Type: application/json and body {\"acquireUsersAndGroups\":[{\"resourceType\":\"group\",\"resourceId\":\"<group-id>\"}],\"deployedTo\":\"acquiredForSome\"}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update"
    note: "Role: AI Admin or Global Admin. General package-deployment API; Microsoft does not separately describe A2A registration applicability. The API is in preview, requires an Agent 365 licence and CopilotPackages.ReadWrite.All (delegated)."
  - governs: "Review of the agents a declarative agent connects to"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Connected Agents"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents"
    api:
      kind: "graph"
      call: "GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages/{id}"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-get"
    note: "General manifest-inspection API: inspect the declarativeAgent elementDetails[].elements[].definition JSON for worker_agents title IDs; this does not add or remove connections. Requires an Agent 365 licence and CopilotPackages.Read.All."
  - governs: "Blocking an agent for the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General control: Microsoft has not confirmed it applies to Agent2Agent agents. The API is in preview, uses the CopilotPackages.ReadWrite.All delegated permission and requires an Agent 365 licence."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-17"
    note: "New briefing: Agent2Agent agents registered in Agent 365 can be used as connected agents in declarative agents; rollout expected to complete by end of December 2026."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the install row: full admin-centre path including the Permissions requested consent step, and the documented Graph PATCH call for deploying a package to users or groups."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 82 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 81 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the connected-agents review row to give its documented Graph call, replaced the roles and licence sentences with the pages that state them, and removed an unsupported absence statement."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected the preview statement: only the package-update and blocking APIs are in preview; the package-details API also has a v1.0 endpoint."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 80 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-19"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 77
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "a24905e716392bfd7a7882d3b3dbaa83"
---

## What's changing

Microsoft is adding support for Agent2Agent (A2A) agents published to Microsoft Agent 365 as connected agents in declarative agents. The roadmap item describes this as using Agent 365 agents within Microsoft 365 Copilot Chat and declarative agents. Message Center post MC1478975 says it sits alongside the existing OpenAPI and Model Context Protocol (MCP) server connections for declarative agents built with Microsoft 365 Agents Toolkit.

Microsoft Learn describes the mechanism. A developer lists the connected agent's title ID in the `worker_agents` property of the declarative agent manifest. At run time Microsoft 365 Copilot picks a connected agent from its name, description and example prompts, sends it a text request and folds the text response into the user's conversation. The connected agent must be registered in the Microsoft Agent 365 agent registry, and an A2A agent needs a registered agent card.

MC1478975 says administrators install A2A-enabled Agent 365 agents from the **All agents** page in the Microsoft 365 admin center, that users cannot install them themselves, and that administrators can review connections on the **Connected agents** tab of the declarative agent's details page before approving their use. The roadmap description also names agents built in Agent Builder or Copilot Studio, while the notice and the Learn page describe declarative agents; Microsoft has not reconciled the two in the sources.

The roadmap item is General Availability for Worldwide (Standard Multi-Tenant), on Android, Desktop, iOS and Web, with status Rolling out and a target of August CY2026. MC1478975, updated 9 November 2026, says rollout began in late August 2026 and is expected to complete by the end of December 2026. It sets no act-by date.

## Why it matters

This gives declarative agents a route to agents that other teams or vendors run, and the administrator's install step becomes the decision point for whether a user can reach them. The notice says users cannot install A2A agents themselves, so what happens in your tenant depends on what administrators choose to install.

Treat it as a new approval path to define before developers ask. If nobody installs an A2A agent, the notice describes no way for users to reach one. If you do install one, expect questions about which data the primary agent passes on, who reviews that, and who can switch the agent off.

## Risk assessment

**Data exposure**
- Microsoft Learn says that if a connected agent is external to your organisation, the primary agent can include information from its context in the prompt it sends to it, and that the primary agent decides what the connected agent needs. Review the agent and your organisation's data policies before installing it.
- The active agent sends text only to a connected agent. A2A agents can return text, Base64 image binaries and Base64 file binaries, which the declarative agent then handles.

**Security & identity**
- An A2A agent registered in Agent 365 declares how Microsoft 365 Copilot authenticates to it through an `authorization` object that references an existing authentication registration. Check that registration during review.
- Installing the agent includes a **Review permissions** step with **Grant admin consent**, so installation is also a permission decision.

**Autonomy & actions**
- Copilot selects the connected agent from its name, description and example prompts, so a user conversation can reach an installed A2A agent without the user choosing it. An agent can connect to up to 10 other agents.
- The **Block** action in the Microsoft 365 admin center is the documented way to stop an agent. Whether it covers an A2A-registered agent is an open question below.

**Change & support**
- Both the primary agent and each connected agent must be acquired for the user, so a declarative agent that connects to an agent you have not installed will not work for those users. Expect support calls on that point.
- For agents other than Researcher and Sales, Learn says administrators can view the connections the developer configured but cannot add or remove them.

## Cost and licensing

Microsoft has not published the licence or meter for using an Agent2Agent agent as a connected agent, and the roadmap item names none. Treat the cost known today as admin time and communications.

Microsoft Learn says Microsoft Agent 365 is licensed on a per-user basis and that at least one user must hold a qualifying Agent 365 licence to enable Agent 365 (Overview of Microsoft Agent 365). Microsoft 365 E7 includes Microsoft 365 E5, Microsoft Copilot, Microsoft Agent 365 and the Microsoft Entra Suite (Agent management in Microsoft 365 admin center). The Package Management API, used in the review and block rows below, requires an Agent 365 licence.

Whether an A2A agent you install carries its own charge, and whether using it counts against Copilot Credits, is not published at the time of writing (November 2026). The Agent 365 service description lists basic governance actions, including approval, as included with Microsoft 365 Enterprise, Business, Education and Front Line Worker plans. The agent-management roles page lists AI Administrator and Global Administrator for management actions, and Global Reader as read-only.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) only, on Android, Desktop, iOS and Web, as General Availability. The listing does not mention GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

MC1478975 names three groups: administrators who manage agents in the Microsoft 365 admin center, developers building declarative agents with Microsoft 365 Agents Toolkit, and users assigned access to approved Agent 365 agents. Learn says the connected agent must be registered in the Agent 365 agent registry, and an A2A agent needs a registered agent card.

Rollout began in late August 2026 and is expected to complete by the end of December 2026, per MC1478975. To configure, manage and deploy agents, Learn lists the AI Admin and Global Admin roles; Global Reader is view-only.

## Governance guidance

### Before rollout
- Review the agents on **Agents** > **All agents** in the Microsoft 365 admin center and decide which Agent2Agent-enabled ones, if any, you would make available, as MC1478975 recommends.
- Ask developers who build declarative agents with Microsoft 365 Agents Toolkit which agents they plan to list in `worker_agents`, so you can review them before users do.
- Agree who holds the AI Admin or Global Admin role for installing agents, and update your agent approval process to cover connected agents.
- Check your data policies for what an external connected agent may receive, since Learn says the primary agent can pass context from the conversation to it.

### At rollout
- Install each approved A2A agent for a pilot group first, using the **Deploy agent to selected users** pane, and read the permissions in the **Review permissions** step before granting consent.
- Open the **Connected agents** tab for each declarative agent that uses a connection and review every connected agent before approving its use.
- Install the primary agent and each connected agent for the same users; both must be acquired before the primary agent can call the other.
- Tell administrators and developers about the review and approval process, as the notice suggests.

### After rollout
- Re-check the **Connected agents** tab for declarative agents in use, because developers set these connections in the manifest.
- Block an agent from **Agents** > **All agents** if its behaviour is not acceptable, and confirm that the block takes effect for the declarative agents that call it.
- Watch Message Center for MC1478975 updates; the rollout is expected to complete by the end of December 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an Agent2Agent agent is installed for users or groups</strong><br><small>Tenant</small><br><small class="controls__note">Role: AI Admin or Global Admin. General package-deployment API; Microsoft does not separately describe A2A registration applicability. The API is in preview, requires an Agent 365 licence and CopilotPackages.ReadWrite.All (delegated).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › Status › Available › agent › Install › Deploy agent to selected users › Next › Review permissions › Grant admin consent › Permissions requested › Accept › Next › Review &amp; finish › Finish deployment <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id} with Content-Type: application/json and body {&quot;acquireUsersAndGroups&quot;:[{&quot;resourceType&quot;:&quot;group&quot;,&quot;resourceId&quot;:&quot;&lt;group-id&gt;&quot;}],&quot;deployedTo&quot;:&quot;acquiredForSome&quot;}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Review of the agents a declarative agent connects to</strong><br><small>Agent</small><br><small class="controls__note">General manifest-inspection API: inspect the declarativeAgent elementDetails[].elements[].definition JSON for worker_agents title IDs; this does not add or remove connections. Requires an Agent 365 licence and CopilotPackages.Read.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Connected Agents <a href="https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET https://graph.microsoft.com/v1.0/copilot/admin/catalog/packages/{id}</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-get" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Blocking an agent for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to Agent2Agent agents. The API is in preview, uses the CopilotPackages.ReadWrite.All delegated permission and requires an Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Installing an agent and blocking an agent are separate actions on the same **All agents** page; the notice describes installation as the step that makes an A2A agent available, and users cannot install these agents themselves. The connected-agents page says administrators can view developer-configured connections for most agents but not add or remove them, so the tab is a review point, not an editing control.

The package-update and blocking APIs are in preview; the package-details API also has a v1.0 endpoint. Access to the Package Management API requires an Agent 365 licence. Developers register A2A agents with the Agent Registration API (preview), which Microsoft's overview says also lets administrators retrieve, update and delete registrations.

## Open questions

- Does "approving" a connected agent in MC1478975 correspond to the **Install** action, or is there a separate approval step in the **Connected agents** tab? Watch the Learn page for managing connected agents.
- Does the **Block** action, or the Package Management API block call, stop an Agent2Agent agent registered through the Agent Registration API? Watch the Agent 365 admin pages.
- Is a separate licence or meter charged when a declarative agent calls an Agent2Agent agent, and does it consume Copilot Credits? Watch Message Center and the Agent 365 licensing pages.
- Does support for connecting Agent 365 agents extend to agents built in Agent Builder or Copilot Studio, as the roadmap description says? Watch the roadmap item and Learn.

<!-- rationale
risk: Medium. For connected agents outside your organisation, Microsoft says the primary agent can include context in the prompt it sends, but an administrator installs the Agent2Agent agent before users can reach it.
cost: Low. The only cost the sources show is admin time; the licence this feature itself needs is not yet published, and Agent 365 management features are licensed per user.
impact: Medium. Administrators and developers who build declarative agents notice first, then users who are given an approved Agent2Agent agent and a declarative agent that connects to it.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: Licensing entitlement is unknown because no feature-specific licence has been published. | Found: Microsoft 365 with a Microsoft 365 Copilot add-on license - Users with a Microsoft 365 subscription and a Copilot add-on license have full access to Copilot agent experiences across supported apps and platforms. | Fix: Set licensing.model to 'mixed'. Replace the unpublished-entitlement wording in licensing.notes, Cost and licensing and the cost rationale with: 'Microsoft documents Copilot agent access through Microsoft 365 Copilot licensing and Copilot Chat usage-based billing. A2A-specific additional charges are not yet published. Package Management API access requires a Microsoft Agent 365 licence.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites. Its Agent capabilities and licensing models section documents these underlying entitlements; an unpublished feature-specific surcharge does not make the product entitlement unknown. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/prerequisites
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity / behaviour: The registration declares authentication using an authorization object referencing an existing authentication registration. | Found: the registration references an existing authentication registration through the authorization object in the agentRegistration. | Fix: Append: 'The declarative-agent guide calls this object authorization; the registration API update reference instead names a2aAuthorization, described as authorization configuration used to invoke an Agent2Agent server.' Cite https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/agent-registration/agentregistration-update. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-connected-agent
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: An agent can connect to up to 10 other agents. | Found: Limit - An agent can connect to up to 10 other agents. | Fix: Append: 'The agent-details guide describes its limit as up to 10 connected agents excluding those added by the agent maker.' Cite https://learn.microsoft.com/microsoft-agent-365/admin/agent-details#connected-agents, which differs from the connected-agents guide. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/manage-connected-agents
- [supported, minor] controls[0].api; Governance controls table / command: The beta package PATCH deploys to selected groups using acquireUsersAndGroups and deployedTo acquiredForSome with the printed JSON keys. | Found: PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}; acquireUsersAndGroups: Users/groups for whom the package is deployed.; deployedTo: Required if updating acquireUsersAndGroups. | Fix: Set controls[0].api.call to 'PATCH https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}'. Add to its note: 'The request body sets acquireUsersAndGroups and deployedTo; acquiredForSome scopes deployment to the specified users or groups.' Remove the inline header and JSON from the rendered call too. | Source: https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackagedetail-update
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to check data policies, but no controls row covers that check. | Found: Check your data policies for what an external connected agent may receive ...; controls: installation, review of connected agents, blocking an agent. | Fix: The Before rollout step 'Check your data policies for what an external connected agent may receive' has no corresponding controls-table row. Remove this checklist step if correcting without adding controls; the data-exposure warning can remain.
-->
