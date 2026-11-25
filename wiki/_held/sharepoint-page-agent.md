---
title: "SharePoint: Page Agent creates and refines SharePoint pages from Copilot chat"
slug: "sharepoint-page-agent"
roadmapId: 518641
topic: "modern-work"
products: ["SharePoint"]
summary: "The roadmap describes a declarative agent that creates SharePoint pages from BizChat and other Copilot apps. Microsoft Learn does not document it yet, so default, licence and controls are unconfirmed."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: "November CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: no Microsoft page states which licence covers the SharePoint Page Agent or whether it is metered. The separately documented Copilot in SharePoint feature has its own terms, which are not confirmed for this agent."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","declarative-agents","m365-copilot","agents"]
sources:
  - title: "SharePoint: Page Agent"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=518641"
    kind: "roadmap"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
videos: []
related: ["declarative-agents","agent-registry","m365-copilot-sharepoint-site-builder"]
controls:
  - governs: "Whether an agent is available to the organisation (existing control; not confirmed to list the Page Agent)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST /beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "Existing control for agents in general. Blocking an agent created by using SharePoint affects only Microsoft Copilot Chat. Graph call is beta and needs a Microsoft Agent 365 license."
  - governs: "A switch specific to the SharePoint Page Agent"
    scope: "tenant"
    ui: null
    api: null
    note: "No Page Agent setting is documented at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-11-20T00:00:17"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 518641; Microsoft Learn does not yet document the Page Agent, so the page rests on the roadmap text."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 37 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 36
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "6021f96ace1ff42b432a746f871bd696"
---

## What's changing

The roadmap item describes the SharePoint Page Agent as a declarative agent that lets users create and refine SharePoint pages from within BizChat or other Copilot apps, without switching apps or opening SharePoint first. It names meeting recaps, announcements and project updates as the kind of structured content users can generate, and says pages can be created from chat.

Microsoft Learn does not describe the Page Agent at the time of writing (November 2026), so everything above and below about its behaviour is the roadmap's description. Searches for it returned no page that names it. Learn's pages on Copilot in SharePoint describe a separate, documented feature and are not treated here as describing this agent.

The roadmap record gives the status as In development, with both the target date and the preview date as November CY2025, release phases General Availability and Preview, platform Web and cloud Worldwide (Standard Multi-Tenant). The record was last modified on 2025-11-20 and the target month has passed, so treat the dates as unconfirmed targets. The record has no more-info link and no Message center post was supplied for it.

## Why it matters

If the agent ships as described, page creation moves from the SharePoint authoring surface into chat. Pages could then be written by people who never open the site, which changes who sees draft content and how site owners find out about new pages. Microsoft has not stated what happens on arrival, so the wiki's advice rests on no source saying that existing behaviour changes: nothing in the record says the agent switches on for anyone.

The practical task is to find out early what the agent reads, where it saves pages and under whose identity, because Microsoft has not described any of these. Decide who in your organisation would use it, and watch Message center and the roadmap item for a post that sets the rollout and default.

## Risk assessment

**Data exposure**
- The roadmap says the agent generates content such as meeting recaps from conversations, so chat content may end up in a page. Which sources it reads and where the page is saved are not described; confirm both before a pilot.

**Security & identity**
- Microsoft has not described which identity the agent uses or how it relates to site permissions. Confirm before rollout that a page can only be created where the user could already author one.

**Autonomy & actions**
- The roadmap says pages can be created "instantly from chat". Whether the user is asked to confirm before a page is created or published is not described; test this in a pilot.

**Change & support**
- The dates in the record are a year old and the status is still In development, so expect questions about availability that cannot yet be answered.
- The one documented way to remove an agent from the organisation is the Block action on the All agents page. Learn does not say the Page Agent appears there.

## Cost and licensing

Which licence covers the Page Agent is not yet published, and no meter for it is documented at the time of writing (November 2026). The Learn page on Copilot in SharePoint, a separate feature, says that everyday Copilot in SharePoint capabilities are included with the Microsoft 365 Copilot license and that advanced work requires usage-based billing and consumes Copilot Credits. That page does not mention the Page Agent, so neither rule is confirmed for it.

The cost known today is indirect: admin time to review the agent when it appears, and communication to the people who author pages. If you script the Block action through Microsoft Graph, the reference says access to the Package Management API requires a Microsoft Agent 365 license.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, and release phases General Availability and Preview. It does not say which users, licences or roles get the agent, or whether it needs prerequisites in SharePoint. No rollout mechanics have been published. Treat the status as In development until the record changes.

## Governance guidance

### Before rollout
- Watch Message center and the roadmap item 518641 for a post that states the rollout window, default and licence, and update this plan when it appears.
- Identify which site owners and communications teams would use chat-created pages, so a pilot group is ready when the agent arrives.
- Open Microsoft 365 admin center > Agents > All agents and note whether a SharePoint page agent is listed; Learn does not say it will be.

### At rollout
- Pilot with a small group and record where a chat-created page is saved, who is shown as its author and whether a confirmation step appears.
- Block the agent for the organisation with the Block action in All agents if the pilot shows behaviour you cannot accept and the agent is listed there.

### After rollout
- Ask site owners to review newly created pages for content that was not meant to be shared.
- Re-check this page and the roadmap item for the status, default and licence, which Microsoft has not yet published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an agent is available to the organisation (existing control; not confirmed to list the Page Agent)</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for agents in general. Blocking an agent created by using SharePoint affects only Microsoft Copilot Chat. Graph call is beta and needs a Microsoft Agent 365 license.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A switch specific to the SharePoint Page Agent</strong><br><small>Tenant</small><br><small class="controls__note">No Page Agent setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only control documented today is the existing Block action for agents, which applies to the selected agent for the whole organisation. The Learn page says that blocking an agent created by using SharePoint or Microsoft Foundry only impacts its availability in Microsoft Copilot Chat. Whether the Page Agent is such an agent, or appears in All agents at all, is not documented.

The Graph side is a beta API and, per its reference, needs a Microsoft Agent 365 license. A control specific to the Page Agent, such as a tenant switch or a site-level setting, is not yet documented on either surface.

## Open questions

- What is the default state of the Page Agent on arrival, and which users or sites get it first? Watch Message center and the roadmap item.
- Which licence covers the Page Agent, and does it consume Copilot Credits? Watch the Copilot in SharePoint page on Microsoft Learn and Message center.
- Which identity does the agent use to create pages, and does it respect SharePoint site permissions and Restricted Content Discovery? Watch for a Learn page on the agent.
- Is a confirmation step required before a page is created, and where is the page saved?
- Will the Page Agent appear in Agents > All agents so that it can be blocked? Watch the Learn page on agent governance.

<!-- rationale
risk: Medium. The roadmap describes an agent that creates pages in SharePoint from chat, but Microsoft has not said which content it reads, where it saves pages or under whose identity, so rating assumes existing SharePoint permissions and the agent block apply.
cost: Low. The only cost the sources show is admin time to review and communicate; a licence or meter for the Page Agent is not yet published.
impact: Medium. The people who would notice are those who author SharePoint pages, such as site owners and communicators; Microsoft has not stated who gets the agent or when.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls; Risk assessment: Change & support / applicability: Block is the only documented control for agents and the one documented way to remove an agent from the organisation. | Found: You can uninstall first-party or external agents across the whole organization or for specific users or groups by using the same controls that work for any other agent in the Microsoft 365 admin center. | Fix: Replace 'The only control documented today is the existing Block action for agents' with 'The existing Block action for agents is documented'. Replace 'The one documented way to remove an agent from the organisation is the Block action on the All agents page' with 'The Block action on the All agents page is a documented way to restrict access to an agent'. Keep the existing caveats that Page Agent applicability is not documented. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions
-->
