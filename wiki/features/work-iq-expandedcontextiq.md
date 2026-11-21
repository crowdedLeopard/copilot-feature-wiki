---
title: "Work IQ: Context IQ adds agents, skills and content sources to the prompt menu"
slug: "work-iq-expandedcontextiq"
roadmapId: 570854
topic: "copilot-studio"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let Copilot Chat users pick extra agents, skills and content sources while writing a prompt. Microsoft has not said how it is switched on or governed, so plan communication and check agent controls."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Copilot Chat requires an eligible Microsoft 365 subscription. Declarative agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); agents accessing shared tenant data are metered for the Basic licences. Which new Context IQ choices each licence shows, and any separate charge for the menu, are not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["work-iq","m365-copilot","copilot-chat","agents","skills","knowledge-grounding","copilot-connectors"]
sources:
  - title: "Microsoft 365 Roadmap 570854"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570854"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Refer to specific files and more in Microsoft Copilot"
    url: "https://support.microsoft.com/topic/using-context-iq-to-refer-to-specific-files-people-and-more-in-microsoft-365-copilot-and-copilot-chat-272ac2c1-c5f7-49c9-8a42-2a8a87846fa0"
    kind: "docs"
  - title: "Work IQ overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq"
    kind: "learn"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/microsoft-365/copilot/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Business Applications in Work IQ default settings"
    url: "https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings"
    kind: "learn"
  - title: "Purchase and manage agents in Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat"
    kind: "learn"
  - title: "List packages"
    url: "https://learn.microsoft.com/microsoft-365-copilot/extensibility/api/admin-settings/package/copilotpackages-list"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["work-iq","work-iq-agent-policy-governance","work-iq-federated-connectors"]
controls:
  - governs: "Tenant-wide switch for the new agent, skill and source choices in the Context IQ menu"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026). The Work IQ button in Copilot Chat is a per-user control."
  - governs: "Which agents are in the tenant inventory and whether they are blocked"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "The block operation is preview, requires a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All permission, and is not supported for production use."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-19"
roadmapModified: "2026-09-29T23:05:21"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 570854; Microsoft Learn does not yet describe the expansion, so it rests on the roadmap text and the existing Context IQ menu."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: agent billing rules for Copilot Chat (Basic) licences, the Agent 365 licence and permission for the packages API, and the November CY2026 target wording."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the agent-blocking automation: the row now gives the Graph block operation (beta, preview) in place of the list call, which stays in the notes as an inventory operation."
  - date: "2026-11-19"
    note: "Corrected the licensing model to mixed, with the published Copilot Chat entitlement and agent billing rules, and reworded the package inventory API note to match the Learn pages."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 61 statements confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-21"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 71
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e008712ab42afaadb60c36110be221cc"
---

## What's changing

Microsoft plans to expand Context IQ so that users can discover and select additional agents, skills and content sources while composing prompts. That is the roadmap item's description, and Microsoft Learn does not yet describe this expansion, so the detail of which agents, skills and sources appear is not known.

Context IQ already exists in Copilot Chat. Microsoft's Copilot release notes for 10 March 2026 say users can use the Context IQ menu to search for and select a Microsoft Teams channel so that responses are grounded in that channel. The support article those notes link for Context IQ describes a references menu opened by typing **/** in the compose box, from which users pick files, people, meetings, emails, Teams chats and channels, SharePoint sites and lists, and content from Copilot connectors. It lists no agents or skills among them, which suggests those are the planned additions, but Microsoft has not said so.

The roadmap record shows status In development, with a preview target of October CY2026 and a general availability target of November CY2026. Both are Microsoft's targets, not commitments, and the record still shows In development after the preview month. The record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with the products Work IQ and Microsoft Copilot (Microsoft 365). It has no more-info link.

## Why it matters

Today a user who types a prompt chooses its grounding from a menu of files, people and similar items. Once agents, skills and extra sources sit in the same menu, a prompt can pull in more capability, and more data, with one selection. That moves part of the decision about what Copilot may use from the administrator's tenant settings to the user's click, so administrators need to know which existing controls the menu respects.

Microsoft has not stated how this arrives, so this briefing does not assume that nothing changes if nobody acts. No source says existing behaviour stays the same. Plan against the roadmap target of November CY2026, without treating it as a confirmed rollout date, and prepare controls and user communication.

## Risk assessment

**Data exposure**

- The support article says the references menu suggests content by scanning the user's files, emails, conversations and other Microsoft 365 apps and services, and that Copilot refers to the content the user includes in its response. Extra content sources in the same menu widen what a single prompt can draw on. Which sources are added is not stated.
- The Work IQ overview says Work IQ actions are user scoped, so a request only accesses what that user is allowed to see or do. The page does not say this covers the Context IQ menu.

**Security & identity**

- The Work IQ overview says every tool invocation is logged and evaluated. Microsoft has not said whether selecting an agent or skill in Context IQ goes through the same path, or which identity an agent runs under when picked this way.

**Autonomy & actions**

- Microsoft has not said whether a selected agent or skill can only read content or can also take actions. Confirm this before rollout, because it decides whether the menu is a grounding change only or also an action change.

**Change & support**

- Users will see new choices in the prompt box. Expect questions about why an agent shows or does not show, since the Manage agents page says members of an organisation can only access the agents the administrator has allowed.
- Microsoft has not said whether the licence or the Work IQ setting changes what appears. The support article says unlicensed Copilot Chat users can reference only files, and that only files are available when the Work IQ button is off.

## Cost and licensing

Copilot Chat requires an eligible Microsoft 365 subscription, as [Microsoft Copilot requirements](https://learn.microsoft.com/microsoft-365/copilot/microsoft-copilot-requirements) sets out. Declarative agents grounded in instructions and public websites are included with Copilot Chat (Basic) and Microsoft 365 Copilot (Basic) and (Premium); agents accessing shared tenant data are metered for the Basic licences. Microsoft has not specified which new Context IQ choices each licence will show or published a separate charge for the menu interaction. Microsoft Learn names no price for this change, and the roadmap record gives no licence or meter either.

The nearest published rules are on neighbouring pages. The Work IQ overview says Work IQ API usage consumes Copilot Credits shared with other eligible services, and that for Microsoft 365 Copilot licensed users Work IQ is available in all Microsoft 365 Copilot experiences and agents, subject to usage-based billing for custom and third-party agents. That page describes the Work IQ API; it does not say that selecting an agent or source in Context IQ is metered. A separate charge for the new menu interaction is not published. Existing agent usage remains subject to published licensing and billing rules: agents accessing shared tenant data are metered for Copilot Chat (Basic) and Microsoft 365 (Basic) licences, while declarative agents grounded in instructions and public websites are included, as [Purchase and manage agents in Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-agents-copilot-chat) sets out. See [Copilot Credits](/concepts/copilot-credits/) for how the meter works.

The indirect cost is admin time to check agent availability and to brief users.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. It does not list the US Government clouds, but that is a record fact, not a statement that the feature is unavailable there.

The record gives release phases of General Availability and Preview, with a preview target of October CY2026 and a general availability target of November CY2026. It does not say which users, licences or roles are in scope. For the existing menu, the support article gives different options by licence: users with a Microsoft Copilot licence and the Work IQ button on can reference people, files, meetings and emails, while users without a licence, and users with Work IQ off, can reference files only. Whether the new agents, skills and sources follow the same split is not stated.

## Governance guidance

### Before rollout

- Take stock of the agents users can reach today by reading the Agents > All agents list in the Microsoft 365 admin center, so you know what could appear in a menu.
- Block any agent you do not want users to select, using the Block action in the agent's details pane (see the controls table).
- Brief the Copilot champions and service desk that the prompt menu is planned to offer more choices, and that the details are not yet published.
- Ask your Microsoft account team to confirm whether the menu follows the admin allow and block decisions and the Work IQ setting, once Microsoft confirms it applies.

### At rollout

- Test the Context IQ menu in Copilot Chat on the web with a licensed user, an unlicensed user and a blocked agent, and record what each sees.
- Watch Message center and the Microsoft 365 Copilot release notes for a post that gives the rollout window and any switch.

### After rollout

- Review the agent list again for agents that were published or shared since your last check.
- Collect user reports of unexpected agents or sources in the menu and compare them with the blocked and allowed agent list.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the new agent, skill and source choices in the Context IQ menu</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026). The Work IQ button in Copilot Chat is a per-user control.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which agents are in the tenant inventory and whether they are blocked</strong><br><small>Tenant</small><br><small class="controls__note">The block operation is preview, requires a Microsoft Agent 365 licence and delegated CopilotPackages.ReadWrite.All permission, and is not supported for production use.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant switch for the Context IQ menu or for its agent, skill or source choices at the time of writing (November 2026), so the first row has no path or call. The only user-level control the support article describes is the **Work IQ** button at the top right of the chat page: with it on, users can reference people, files, meetings and emails, and with it off only files.

The agent row is a general control. The Manage agents page says members of an organisation can only access the agents the administrator has allowed, and the block action covers any agent in the list. Microsoft has not confirmed that the Context IQ menu respects it. The block call in the row is a preview operation documented on its own page. The registry overview labels its inventory API preview, while the List packages reference documents `GET /v1.0/copilot/admin/catalog/packages` as well as a beta version; its production-use warning is attached to beta. The API works with the AI Admin Role. The Package Management API requires a Microsoft Agent 365 licence and CopilotPackages.Read.All permission (or CopilotPackages.ReadWrite.All).

Business Applications in Work IQ has its own tenant setting in the Microsoft 365 admin center, named **Business Applications data in Work IQ available to Copilot**, which governs whether Power Apps and Dynamics 365 data can be used in Microsoft 365 Copilot Chat. Microsoft has not said whether it governs Context IQ choices. See [Work IQ](/concepts/work-iq/) and the page [Business Applications in Work IQ default settings](https://learn.microsoft.com/power-platform/admin/business-applications-work-iq/default-settings).

## Open questions

- Which agents, skills and content sources will appear in the Context IQ menu, and do they depend on the user's Microsoft 365 Copilot licence or the Work IQ button?
- Is the expansion on by default, and is there an admin setting to turn off the new choices? Watch Message center and the Microsoft 365 Copilot release notes.
- Do the admin block and allow decisions for agents, and the Work IQ policy controls, decide which agents and skills the menu shows?
- Does the new Context IQ menu interaction itself incur any additional charge?
- Why does the roadmap record still show In development when its preview target of October CY2026 has passed, and when will the November CY2026 general availability target be confirmed?

<!-- rationale
risk: Medium. The roadmap says users will select more agents, skills and content sources in the prompt, but Microsoft has not described which of them appear, the default, or a switch for the menu.
cost: Low. No separate charge for this change is published; the costs the sources show are admin and communication time, and existing agent usage under published billing rules, which is not confirmed to apply to the new menu.
impact: Medium. It changes the prompt box in Copilot Chat on the web for users who compose prompts, but the roadmap does not say which licensed or unlicensed users get the new choices.
-->
