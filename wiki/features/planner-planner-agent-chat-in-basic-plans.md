---
title: "Planner: Planner Agent chat in basic plans"
slug: "planner-planner-agent-chat-in-basic-plans"
roadmapId: 567671
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "Planner Agent chat reaches basic plans for users with a Microsoft 365 Copilot licence. Microsoft says blocking the Planner Agent removes access; check which control applies, then tell users."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Microsoft Learn says users need a Microsoft Copilot licence to access Planner Agent in Planner. No separate price or meter for Planner Agent chat in basic plans is published at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["planner","m365-copilot","agents","m365-admin-center","powershell","ai","governance"]
sources:
  - title: "Microsoft 365 Roadmap 567671"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567671"
    kind: "roadmap"
  - title: "MC1443514"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1443514"
    kind: "message-center"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Manage agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Whether the Planner Agent is available to users in the organisation (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Whether the Planner Agent is available to users in the organisation (Microsoft Graph)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
videos: []
related: ["planner-planner-agent-in-copilot-v2-improvements","planner-save-ai-generated-filters-in-planner-agent-chat","m365-copilot-agent-lifecycle-management-rules"]
controls:
  - governs: "Whether the Planner Agent is available to users in the organisation"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block > Block agent > Save"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "MC1443514 says blocking the Planner Agent removes access. The Graph API is beta and needs a Microsoft Agent 365 licence; whether the Planner Agent is a listed package is not stated."
  - governs: "Whether Planner Agent and its chat are on or off for all users"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $false"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Learn says chat is covered in premium plans only; not confirmed for chat in basic plans. Changes may take up to 1 hour."
  - governs: "Which security group can use Planner Agent and its chat"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId <security group id>"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "An invalid group ID turns it off for all users. Not confirmed for chat in basic plans."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: Planner Agent chat in basic plans, with the Microsoft 365 admin center block and Planner PowerShell controls and the gap between them."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 61
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "34c2d678d1a5304cf2dfc064a5141a4d"
---

## What's changing

Planner Agent chat is a built-in chat in Microsoft Planner basic plans where users ask questions about a plan in natural language, find tasks and manage tasks without leaving the plan. The roadmap item describes it as "natural language Q&A, smart task discovery, and in-plan task management".

Microsoft's notice MC1443514 says users will be able to ask about plan status, priorities and upcoming work, apply AI-generated filters, use interactive task cards to draft updates and review tasks, receive insights on high-priority, upcoming and at-risk work, create new plans organised by goals and buckets, and use information from emails, meetings and files. Microsoft Learn has no page describing this chat for basic plans at the time of writing (November 2026), so the behaviour above is Microsoft's description in the notice.

The roadmap record gives the status as Launched, with a target date of September CY2026, phases General Availability and Targeted Release, clouds Worldwide (Standard Multi-Tenant), and platforms Desktop and Web. MC1443514 (last updated 15 October 2026, with no act-by date) gives the rollout as Targeted Release from early September 2026 to mid-September 2026, and General Availability (Worldwide) from mid-September 2026 to the end of October 2026. The notice lists Web as the platform.

## Why it matters

This puts an AI chat that can read Microsoft 365 content inside a tool many teams use for everyday task lists. The notice states that it is aimed at users with an active Microsoft 365 Copilot licence in organisations that allow access to Planner Agent, and that no additional action is required before rollout. In practice, expect licensed users in basic plans to find the chat unless an administrator has blocked the Planner Agent.

The decision for a service owner is whether to leave it available, restrict it or block it, and which control does that for basic plans. Microsoft's two documented controls describe their reach differently (see the controls notes), so confirm the result in a test tenant before relying on either.

## Risk assessment

**Data exposure**

- The chat can use Planner data and Microsoft 365 content, including emails, meetings and files, that the user already has permission to access, according to MC1443514. Over-shared files and mailboxes therefore surface in answers as they do elsewhere in Copilot; review what a Copilot-licensed user can already reach.
- Microsoft Learn says Planner Agent is built on Microsoft's approach to security, compliance and privacy and links to Data, Privacy, and Security for Microsoft Copilot. It does not describe basic-plan chat processing in detail.

**Security & identity**

- Access depends on a Microsoft Copilot licence, so licence assignment is the first gate. The notice says the chat uses content the user is already permitted to access; it does not describe a separate identity for the agent.

**Autonomy & actions**

- The notice says users can draft updates, review tasks and track progress with interactive task cards, and manage tasks. Microsoft has not described in the sources read whether a person confirms each change; confirm this in a test plan before wide use.

**Change & support**

- The rollout window was moved by the October 2026 update, so users may have seen the chat at different times. Expect help-desk questions about who sees the chat and why it is missing for unlicensed users.
- If the Planner Agent is blocked, Microsoft's notice says users will not have access to this capability. Tell users where to ask for access.

## Cost and licensing

**Licence.** The Learn page "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner" says users must have a Microsoft Copilot licence to access Planner Agent in Planner. MC1443514 says the same for the chat: users with an active Microsoft 365 Copilot licence. Confirm licences with the people who should use it.

**Meter and price.** No separate meter, credit rate or price for Planner Agent chat in basic plans is published in the pages read at the time of writing (November 2026). The Learn page lists the Copilot licence as the only licence under its prerequisites.

**Indirect cost.** Expect admin time to review the controls, plus user guidance. Microsoft's notice asks administrators to update internal documentation and user guidance as appropriate.

## Scope

**Who.** Users with an active Microsoft 365 Copilot licence, in organisations that allow access to Planner Agent (MC1443514). The notice says eligible users can use the chat while working in basic plans.

**Where.** The roadmap lists Worldwide (Standard Multi-Tenant) only, with platforms Desktop and Web. MC1443514 lists Web. No other cloud is listed on the roadmap item; that is a record fact, not a statement that the chat is unavailable elsewhere.

**Rollout.** Targeted Release then General Availability (Worldwide), finishing by the end of October 2026 according to MC1443514. The roadmap status is Launched.

**Related plans.** Microsoft Learn states that Planner Agent chat in premium plans is a separate experience (previously "Copilot in Planner").

## Governance guidance

### Before rollout

- Confirm which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center, because they are the people who can use the chat.
- Decide whether to leave the Planner Agent available, limit it to a security group or block it, using the controls in the table.
- Draft user guidance and update internal documentation, as MC1443514 asks.

### At rollout

- Test the chosen control with one licensed user and one unlicensed user in a basic plan, and note whether the chat appears.
- Allow up to one hour for Planner PowerShell policy changes to take effect, as the Learn page states, before testing again.
- Tell users where to request access if you block or restrict it.

### After rollout

- Recheck the Learn page "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner" and MC1443514 for updates to the rollout window or controls.
- Review whether a restriction group still matches the people who should have access.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Planner Agent is available to users in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">MC1443514 says blocking the Planner Agent removes access. The Graph API is beta and needs a Microsoft Agent 365 licence; whether the Planner Agent is a listed package is not stated.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block › Block agent › Save <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Planner Agent and its chat are on or off for all users</strong><br><small>Tenant</small><br><small class="controls__note">Learn says chat is covered in premium plans only; not confirmed for chat in basic plans. Changes may take up to 1 hour.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $false</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which security group can use Planner Agent and its chat</strong><br><small>Group</small><br><small class="controls__note">An invalid group ID turns it off for all users. Not confirmed for chat in basic plans.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two controls are documented, and Microsoft's pages describe their reach differently. MC1443514 says administrators can control access through agent settings and that blocking the Planner Agent removes access. The Learn page for Planner PowerShell says it covers Planner Agent chat in premium plans only, and covers the Planner Agent experience for task execution and status reporting in both basic and premium plans. Microsoft has not confirmed that Set-PlannerConfiguration governs Planner Agent chat in basic plans, so test it before relying on it.

The Planner Learn page behavior matrix: AllowPlannerCopilot set to $false is off for all users; set to $true with no group is on for all users; with a valid security group ID it is on for members of that group, including nested groups; with an invalid group ID it is off for all users. Turning off Planner Agent also disables the document authoring skill of Facilitator.

The Graph block operation is a preview (beta) API that requires a Microsoft Agent 365 licence. Whether the Planner Agent appears as a package it can block is not stated on that page. The block pane in the admin centre is documented for agents in general; the Learn page read does not give a Planner-specific path, and Microsoft Learn documents no Planner admin UI for these settings at the time of writing (November 2026).

## Open questions

- Which control governs Planner Agent chat in basic plans: the Microsoft 365 admin center agent block, Set-PlannerConfiguration, or both? The Planner Learn page limits chat to premium plans, while MC1443514 points to agent settings. Watch the Planner Learn page and Message center.
- Does the Planner Agent appear under Agents > All agents for blocking, and does it appear as a Copilot package in the Graph API? Neither page says so.
- Does a person confirm changes the chat makes to tasks, and are they audited? Learn says Planner Agent plans to provide the same auditing capabilities as premium plans, which is a plan rather than a shipped control.
- The Microsoft 365 Copilot release notes of 23 September 2026 list "Planner Agent chat" under roadmap ID 560532 with the same description as this item. Is that the same rollout as 567671? Watch the release notes and the roadmap.

<!-- rationale
risk: Medium. The chat can use Planner data and Microsoft 365 emails, meetings and files the user can already open, and Microsoft's notice says no action is needed before rollout, so Copilot-licensed users can reach it unless an admin blocks it.
cost: Low. The sources name a Microsoft Copilot licence as the requirement and publish no separate meter or price for the chat; the cost the sources show is admin time and user guidance.
impact: Medium. Users with a Microsoft 365 Copilot licence who work in Planner basic plans see a new chat experience; users without the licence are not in scope.
-->

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout, licence-checking bullet / admin-path: Administrators can check users' licence assignments in the Microsoft 365 admin center. | Found: Assign or unassign licenses for users in the Microsoft 365 admin center | Fix: If retaining the licence-checking bullet, add https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users to the sources. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users?view=o365-worldwide#use-the-active-users-page-to-assign-or-unassign-licenses
- [contradicted, minor] Governance guidance: Before rollout, licence-checking bullet / consistency: The checklist instructs administrators to check licence assignments, but that control has no corresponding row in the controls table. | Found: Confirm which users hold a Microsoft 365 Copilot licence in the Microsoft 365 admin center ... Table rows cover agent blocking, AllowPlannerCopilot and PlannerCopilotAllowedGroupId, not licence assignment. | Fix: Remove the first bullet under Governance guidance > Before rollout; the licence prerequisite is already stated in Cost and licensing and Scope.
-->
