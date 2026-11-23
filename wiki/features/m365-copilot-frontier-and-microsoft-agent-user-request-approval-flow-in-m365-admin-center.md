---
title: "Microsoft 365 admin center: user requests for blocked Microsoft-built Frontier agents"
slug: "m365-copilot-frontier-and-microsoft-agent-user-request-approval-flow-in-m365-admin-center"
roadmapId: 494809
topic: "governance"
products: ["Microsoft Copilot (Microsoft 365)","Microsoft 365 admin center"]
summary: "Users can ask admins to approve Microsoft-built agents that policy has made unavailable, and admins approve or reject each request under Agents > All agents > Requests. Launched; review who will act on requests."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Frontier features for Copilot need a Microsoft Copilot licence or one that includes access to Copilot (Frontier page); the Graph Package Management API needs a Microsoft Agent 365 licence. The agent requests page names no licence or meter for the request flow itself."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["frontier-program","agent-governance","m365-admin-center","agents","copilot-control-system","approvals","agent-registry","m365-copilot"]
sources:
  - title: "Microsoft 365 Roadmap 494809"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=494809"
    kind: "roadmap"
  - title: "Manage agent requests in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    kind: "learn"
  - title: "Get started with the Microsoft Frontier Program"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    kind: "learn"
  - title: "Agent management roles and permissions in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-roles-perms"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Agent settings in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-settings"
    kind: "learn"
  - title: "Manage plugins, skills, and MCP servers"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/manage-plugins-skills-mcp-servers"
    kind: "learn"
  - title: "copilotPackage: approve"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-approve"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["frontier-program","agent-registry","app-management","m365-copilot-agent-lifecycle-management-rules"]
controls:
  - governs: "Approving or rejecting a user's request for a blocked Microsoft-built agent"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Requests"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/approve"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-approve"
    note: "Choose Approve or Reject in the request pane. Graph: beta; the body sets requestId and packageVersion; approves one individual access or hiring request; needs a Microsoft Agent 365 licence."
  - governs: "Whether a Microsoft-built agent is blocked for the whole organisation"
    scope: "agent"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "A blocked agent must be unblocked before a user's request to install it can be accepted. Graph: beta; needs a Microsoft Agent 365 licence."
  - governs: "Which users are enrolled in the Frontier program"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Release preferences > Turn on Frontier"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier"
    api: null
    note: "Roles: AI Administrator, Security Administrator or Office Apps Administrator. The page also gives an existing route under Copilot > Settings."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-07-10T21:58:35"
changes:
  - date: "2026-11-23"
    note: "First briefing: documents the user request and admin approve or reject flow for Microsoft-built agents, its controls and the open question on Frontier."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 50 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 50
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "106153f15fa80f031efb5bc5163c5ec6"
---

## What's changing

The roadmap item says users can request Microsoft-built agents in the Frontier program when organisational policy blocks them, and administrators can approve or reject those requests in the Microsoft 365 admin center. The record lists the item as Launched, with a target of July CY2026, General Availability, Worldwide (Standard Multi-Tenant) and the Web platform.

Microsoft Learn describes the flow on its page "Manage agent requests in Microsoft 365 admin center", for Microsoft-built agents in general. When such an agent is unavailable because of an admin policy, for example because it is blocked, a member opens it in the store and selects **Request**. The request appears under **Agents** > **All agents** > **Requests** with the state **Allow user to install**. The administrator selects the agent, opens the **Requests** tab in its details pane to see who asked (**Requested from**, with the date), and chooses **Approve** or **Reject**. That page does not name Frontier agents, so the link between this flow and Frontier agents rests on the roadmap description.

The Learn page limits the flow to Microsoft-built agents: users cannot request third-party agents through the admin center, and administrators, including Global Administrators, cannot approve access to third-party agents there. Approval does not override other settings: if the agent is blocked, it must be unblocked first, and if the organisation's settings block a member from access, that member cannot install the agent even after approval.

## Why it matters

Frontier agents are preview features, and since 29 March 2026 newly published Frontier agents reach only users enrolled in Frontier. Admins who block or restrict Microsoft-built agents now give users a way to ask for one, so someone has to own the Requests list and decide how much a single request should change.

Microsoft has not stated whether the request option is on by default, so plan on the assumption that users may already be able to submit requests. Unblocking an agent to approve one request is the wiki's concern: Learn describes blocking as restricting an agent across the organisation, so expect an unblock to reach every user the other settings allow, not only the requester.

## Risk assessment

**Data exposure**

- Approving a request lets the requesting user install the agent, but Learn says a blocked agent must first be unblocked with **Unblock agent**. Learn describes blocking as organisation-wide, so expect that unblock to make the agent available beyond the requester, within the limits of your other agent settings (controls rows 1 and 2).
- Frontier features are preview. Learn states they do not comply with ISO 27001, ISO 27002 or ISO 27018 requirements and that HIPAA Business Associate Agreement coverage is not included, which matters before approving a Frontier agent for users who handle regulated data.

**Security & identity**

- Only select Entra roles can approve agent requests: the roles page lists Global Administrator and AI Administrator, while Security Administrator can view the registry but not approve. Check who holds these roles before relying on the flow.
- The flow covers Microsoft-built agents only; Learn says administrators cannot approve third-party agent access in the admin center, so third-party agents need another route.

**Autonomy & actions**

- Approve lets the user install the agent; it does not install it for them. The Graph reference for the approve operation says it does not activate a template, unblock a package, change settings, install an agent or grant consent.

**Change & support**

- Users who select Request wait on an admin decision, so expect questions from them about status. Learn does not describe a status shown to the user for these requests.
- Frontier agents may be modified, suspended or discontinued, and may not be covered by standard support commitments (Frontier page); an approved agent can change or disappear.

## Cost and licensing

Learn's agent requests page names no licence or meter for the request flow, so the known direct cost is administrator time to review requests.

The Frontier page says that to use Frontier features for Copilot, users need a Microsoft Copilot licence or a licence that includes access to Copilot, and that users enrolled in Frontier without one are not shown Copilot-related Frontier features. It also says certain Frontier experiences may only be available on a paid basis and points to the Microsoft Copilot Credits Guide for credit consumption requirements. A rate or meter for an individual Frontier agent is not stated on the pages read.

If you script approvals or blocks through Microsoft Graph, the Package Management API reference says access requires a Microsoft Agent 365 licence.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform; no other cloud is listed. Users must be able to see the Microsoft-built agent in the store to request it, and Frontier agents published on or after 29 March 2026 are available only to Frontier-enrolled users. Frontier agents published before that date remain accessible to all users with a Microsoft Copilot licence.

Requests are handled by administrators in the Microsoft 365 admin center. The roles page lists Global Administrator and AI Administrator as able to install, modify, approve and manage agent configurations. Frontier enrolment itself needs an account with the AI Administrator, Security Administrator or Office Apps Administrator role (Frontier page).

## Governance guidance

### Before rollout

- Check which users are enrolled in Frontier, because newly published Frontier agents reach only enrolled users (controls row 3).
- Assign the AI Administrator or Global Administrator role to the people who will approve requests, and name an owner for the Requests list.
- Decide which Microsoft-built agents stay blocked organisation-wide, knowing an unblock is needed before a request can be accepted (controls row 2).

### At rollout

- Open Agents > All agents > Requests and filter by the state Allow user to install to see waiting requests (controls row 1).
- Read the Requests tab in the agent's details pane to see who asked and when before choosing Approve or Reject.
- Select Unblock agent only after deciding the agent can be available organisation-wide, then approve the request.

### After rollout

- Test that an approved user can install the agent, since organisational settings that block a member still prevent installation after approval.
- Revisit the Frontier page when the unified release preferences experience reaches your tenant, because Learn says it is rolling out gradually from mid-November 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Approving or rejecting a user's request for a blocked Microsoft-built agent</strong><br><small>Agent</small><br><small class="controls__note">Choose Approve or Reject in the request pane. Graph: beta; the body sets requestId and packageVersion; approves one individual access or hiring request; needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Requests <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{packageId}/approve</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-approve" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Microsoft-built agent is blocked for the whole organisation</strong><br><small>Agent</small><br><small class="controls__note">A blocked agent must be unblocked before a user's request to install it can be accepted. Graph: beta; needs a Microsoft Agent 365 licence.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users are enrolled in the Frontier program</strong><br><small>Tenant</small><br><small class="controls__note">Roles: AI Administrator, Security Administrator or Office Apps Administrator. The page also gives an existing route under Copilot &gt; Settings.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Release preferences › Turn on Frontier <a href="https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Approve and Reject are actions in the agent's request pane in the admin center, and the Learn page does not give a separate setting that turns the request option on or off. The Graph approve call is a beta API and its reference says availability depends on the matching schema and backend release.

Related settings read on Learn: **Agents** > **Settings** > **Agent and plugin access** > **Allow agents and plugins built by Microsoft** is the setting the Frontier page names for allowing Microsoft Frontier agents. The agent settings page says users see Microsoft-built agents even when it is disabled, but cannot install them. The Frontier page also says the Frontier admin control does not override settings in the Agent section: an agent an admin turned off is unavailable regardless of Frontier enrolment.

## Open questions

- Does the Request and approval flow described for Microsoft-built agents apply unchanged to agents marked (Frontier), which the Learn request page does not name? Watch the agent requests page and the roadmap item.
- Is the Graph approve operation for an individual access request the same request that the store's Request option creates? Watch the Package Management API reference.
- Is the request option on by default, and is there an admin setting for it? Microsoft has not stated either; watch Message center and the agent requests page.
- How are administrators told that a request is waiting, and what does the requesting user see until it is decided?

<!-- rationale
risk: Low. Approval is a manual admin step on Microsoft-built agents only, and Learn says a blocked agent must be unblocked before a request to install it can be accepted.
cost: Low. The agent requests page names no licence or meter for the request flow, so the known cost is admin time, plus the Microsoft Copilot licence users need for Copilot-related Frontier features.
impact: Low. Admins who review requests and users who find a blocked Microsoft-built agent notice it; nothing changes for other users.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; summary; Governance controls; Governance guidance / admin-path: The Microsoft-built agent request workflow is reached through Microsoft 365 admin center > Agents > All agents > Requests. | Found: The request is submitted to your administrators and appears in the Microsoft 365 admin center under **Agents** > **All agents** > **Requests**. | Fix: The path stops on the correct list. Complete controls[0].ui.path and its rendered counterpart as 'Agents > All agents > Requests > agent > Requests > request > Approve', retaining the note that Reject is the alternative action. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-requests
- [supported, minor] controls[2].ui; Governance controls / admin-path: Frontier enrolment is managed through Settings > Org settings > Organization profile > Release preferences > Turn on Frontier. | Found: Under the **Organization profile** tab, select **Release preferences**. To opt in to Frontier preview, toggle **Turn on Frontier** to **On**. Choose how Frontier access is assigned in your organization: | Fix: For the row about which users are enrolled, complete controls[2].ui.path and its rendered counterpart as 'Settings > Org settings > Organization profile > Release preferences > Turn on Frontier > All users or Specific users and groups'. The existing path reaches the correct panel but stops before audience selection. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/get-started-frontier
- [supported, minor] front matter: licensing.model / licensing: The admin request-approval capability has an included licensing model. | Found: | Admin agent governance actions (publish, deploy, block, delete, approve, assign, reassign owner, pin, etc.) | Microsoft 365 admin center | Yes | Yes | Yes | | Fix: Keep licensing.model as 'included'. Add the Microsoft Agent 365 service description at https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365 to sources and add: 'The service description includes admin agent governance actions, including approval, with a Microsoft cloud subscription.' | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-agent-365/microsoft-agent-365
-->
