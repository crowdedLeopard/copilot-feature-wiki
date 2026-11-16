---
title: "Planner Agent in Copilot Chat: task assignment, scheduled catch-up and memory"
slug: "planner-planner-agent-in-copilot-v2-improvements"
roadmapId: 573168
topic: "modern-work"
products: ["Planner"]
summary: "Microsoft's notice MC1539002 says Planner Agent in Copilot Chat gains task assignment, scheduled catch-up and Copilot memory from early December 2026, on by default for licensed users. No admin action is required; Microsoft's act-by date is 2026-12-04."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Teams and Surface Devices","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1539002 says users need an active Microsoft Copilot licence to use Planner Agent. No separate price or meter for task assignment, catch-up or memory is published at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["planner","copilot-chat","agents","m365-copilot","memory","m365-admin-center","write-actions"]
sources:
  - title: "Microsoft 365 Roadmap 573168"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573168"
    kind: "roadmap"
  - title: "MC1539002: Microsoft Copilot Chat: Planner Agent task assignment, catch-up, and Copilot memory integration"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1539002"
    kind: "message-center"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Governance and lifecycle actions for agents available in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    kind: "learn"
  - title: "Manage agent registry in Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    kind: "learn"
  - title: "Manage Copilot personalization and memory"
    url: "https://learn.microsoft.com/copilot/manage/copilot-personalization-memory"
    kind: "learn"
  - title: "Update enhancedPersonalizationSetting"
    url: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Microsoft Planner usage report"
    url: "https://learn.microsoft.com/microsoft-365/admin/activity-reports/planner-activity"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","agent-365-control-plane-for-agents"]
controls:
  - governs: "Availability of Planner Agent in Microsoft Copilot (tenant-wide block)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > select the agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api: null
    note: "Learn gives this path for agents generally. The notice says Planner Agent availability is managed in the admin center; the Planner Agent entry is not shown on the Learn page."
  - governs: "Whether Planner Agent is pinned for users or groups"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Manage pinned agents"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api: null
    note: "AI Administrator role. Up to three admin-pinned agents; can take up to six hours to appear. Visibility only, not an access control."
  - governs: "Copilot memory used by Planner Agent (Enhanced personalization)"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization (isEnabledInOrganization, disabledForGroup)"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Beta API; People Administrator is the least privileged role. General Copilot memory control, on by default; Learn page is preview."
  - governs: "Planner Agent access in Planner (not Copilot Chat)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId <security group id>"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Documented for Planner Agent in Planner; Microsoft has not confirmed it applies to Planner Agent in Copilot Chat. Changes can take up to 1 hour."
  - governs: "Switch for scheduled task catch-up or task assignment"
    scope: "tenant"
    ui: null
    api: null
    note: "Not documented at the time of writing. Users manage their own catch-up schedules."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-14T23:01:02"
changes:
  - date: "2026-11-16"
    note: "New briefing: Microsoft's notice MC1539002 sets rollout for early December 2026 with an act-by date of 2026-12-04, later than the roadmap's October CY2026 target."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 71
  unconfirmed: 1
  contradicted: 3
  attempts: 1
---

## What's changing

Microsoft is expanding Planner Agent in Microsoft Copilot Chat, the agent that lets users create, update and manage personal tasks and shared basic plans without leaving chat. Microsoft's notice MC1539002 (published 2026-11-05) lists three additions: task assignment, scheduled task catch-up and Copilot memory integration. It also describes support for larger plans, better response quality, speed and reliability.

In practice, users can assign tasks to one or more people in shared basic plans, including several tasks at once, reassign or remove assignees, view tasks grouped by person and review proposed changes before saving. Catch-up identifies outstanding work, commitments and items awaiting the user's input from recent emails, chats and meetings. Users can run it on demand or set a recurring schedule with optional email notification; suggested tasks show their sources and stay editable drafts until saved to Planner. With memory, Planner Agent can personalise responses using saved memories and preferences inferred from earlier Copilot chats. The previous 30-task limit when creating plans is removed.

The notice says these improvements are enabled by default for users with access to Planner Agent, and that no recurring schedule is created automatically. Planner Agent supports personal tasks and shared basic plans, not premium plans, and cannot delete tasks or undo changes. It uses only content the signed-in user can already access. Users find it under Agents & Skills, can pin it, or can invoke it with @Planner Agent.

The roadmap item (ID 573168) is In development with a target of October CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant), on Desktop, Teams and Surface Devices, and Web. The notice gives a later and more specific window: rollout begins in early December 2026 and is expected to complete in early December 2026, with Microsoft's end date 2027-01-08 and an act-by date of 2026-12-04. Microsoft Learn does not describe the task assignment or catch-up behaviour at the time of writing (November 2026), so the behaviour above rests on the roadmap item and the notice.

## Why it matters

This is a default-on change to an agent that can write to shared plans. Nothing needs configuring for it to arrive, so unless an administrator decides otherwise, every licensed user with access gets task assignment, scheduled catch-up that reads their recent emails, chats and meetings, and memory-based personalisation in early December 2026.

The practical effect for a service owner is on support and data handling rather than licensing. Expect questions about wrongly assigned tasks (the agent cannot undo changes), about suggestions drawn from private mail appearing in shared plans, and about where Copilot memory is stored and whether retention policies reach it. The controls that exist are coarse: blocking or pinning the agent as a whole, and the tenant-level Enhanced personalization control for memory.

## Risk assessment

**Data exposure**

- Catch-up reads recent emails, chats and meetings to propose tasks. The notice says Planner Agent uses only content the signed-in user can already access, so permissions are not widened. A user can still save a suggestion drawn from a private message into a shared plan; suggestions show their sources and stay drafts until saved.
- Memory integration lets Planner Agent use saved memories and preferences inferred from earlier chats. Microsoft Learn says memories are stored in the user's Exchange mailbox in a hidden folder, that Purview retention policies and labels do not apply to Copilot memory, and that admins cannot restrict what type of information is added. That Learn page is marked preview.

**Security & identity**

- The agent works under the signed-in user's access, so existing Planner and Microsoft 365 permissions bound what it can read and change. Assignment lets a user place work on other people in shared basic plans; premium plans are not supported.

**Autonomy & actions**

- AI-generated tasks, plans and updates, including assignments, remain drafts until the user reviews and confirms them. Bulk assignment of several tasks at once makes a careless confirmation costlier, and the agent cannot delete tasks or undo changes, so corrections are manual.
- A recurring catch-up schedule runs without a prompt each time once a user creates it, and can email the user. The notice says none is created automatically, and users can modify, pause or delete schedules.
- Microsoft Learn states that memory and personalisation actions do not generate audit log entries in Purview.

**Change & support**

- On by default, with rollout in early December 2026. Pinned agents can take up to six hours to appear for users, so pinning after rollout starts will look inconsistent for a time.
- Planner usage reporting does not cover Planner Agent; Microsoft says Planner Agent is included in the Microsoft Copilot Agents report instead.

## Cost and licensing

Microsoft's notice MC1539002 says affected users are those with an active Microsoft Copilot licence who have access to Planner Agent. The Learn page on access to Planner Agent lists a Microsoft Copilot licence as the licence users must have for Planner Agent in Planner, and names no other licence or meter. That page is about Planner Agent inside Planner, so it supports the licence requirement but not the Copilot Chat behaviour.

No price, meter or Copilot Credits rate for task assignment, scheduled catch-up or memory is published at the time of writing (November 2026). Indirect cost is admin time to review availability, user communications, training material updates and support for assignment mistakes. The optional email notifications for catch-up are a user-side setting, not a charge.

## Scope

**Who:** users with an active Microsoft Copilot licence who have access to Planner Agent, per Microsoft's notice. Administrators manage availability in the Microsoft 365 admin center.

**Where:** Microsoft Copilot on the web, Microsoft Copilot in Microsoft Teams and Microsoft Planner. The roadmap lists Desktop, Teams and Surface Devices, and Web, in the Worldwide (Standard Multi-Tenant) cloud only; no other cloud is listed on the item.

**Plans:** personal tasks and shared basic plans. Premium plans are not supported.

**Rollout:** roadmap target October CY2026, status In development; the notice gives early December 2026 for both start and completion of Worldwide general availability.

**Roles:** pinning the agent requires the AI Administrator role, per the notice. The least privileged Entra role for the Graph call that governs Enhanced personalization is People Administrator.

## Governance guidance

### Before rollout

- Confirm by 2026-12-04, Microsoft's act-by date in MC1539002, that the users who should have Planner Agent hold an active Microsoft Copilot licence. The notice states no admin action is required and recommends this check.
- Decide whether Planner Agent stays available to everyone: open Agents > All agents in the Microsoft 365 admin center, find Planner Agent and review its availability and Block action (first controls row).
- Decide whether Copilot memory stays on for your tenant, using the Enhanced personalization control (third controls row). Memory is on by default and Purview retention does not reach it.
- Brief users that suggestions and assignments stay drafts until confirmed, that the agent cannot delete tasks or undo changes, and that catch-up schedules are optional and user-configured.

### At rollout

- Pin Planner Agent if you want it visible: Agents > All agents > Manage pinned agents, as an AI Administrator. Allow up to six hours for it to appear.
- Watch Message center for changes to MC1539002 during early December 2026 and the end date of 2027-01-08.
- Update internal documentation and training with the new assignment, catch-up and memory behaviour, as the notice recommends.

### After rollout

- Review Planner Agent use in the Microsoft 365 Copilot Agents report, because the Planner usage report does not cover it.
- Collect support cases on wrongly assigned tasks or unexpected catch-up suggestions and decide whether to restrict availability.
- Re-check Microsoft Learn for an admin setting that governs catch-up or assignment separately (fifth controls row).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Availability of Planner Agent in Microsoft Copilot (tenant-wide block)</strong><br><small>Tenant</small><br><small class="controls__note">Learn gives this path for agents generally. The notice says Planner Agent availability is managed in the admin center; the Planner Agent entry is not shown on the Learn page.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › select the agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Planner Agent is pinned for users or groups</strong><br><small>Group</small><br><small class="controls__note">AI Administrator role. Up to three admin-pinned agents; can take up to six hours to appear. Visibility only, not an access control.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Manage pinned agents <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot memory used by Planner Agent (Enhanced personalization)</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; People Administrator is the least privileged role. General Copilot memory control, on by default; Learn page is preview.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization (isEnabledInOrganization, disabledForGroup)</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Planner Agent access in Planner (not Copilot Chat)</strong><br><small>Tenant</small><br><small class="controls__note">Documented for Planner Agent in Planner; Microsoft has not confirmed it applies to Planner Agent in Copilot Chat. Changes can take up to 1 hour.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for scheduled task catch-up or task assignment</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing. Users manage their own catch-up schedules.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Availability and pinning share the Agents area of the Microsoft 365 admin center. Learn describes Block as a tenant-wide action for an agent, and the notice says administrators manage Planner Agent availability there. Learn does not show the Planner Agent entry itself, so check which actions it offers. No block or pin API is documented in the pages read; the preview Graph APIs for the agent registry list agents and return agent details.

Set-PlannerConfiguration is documented for Planner Agent inside Planner. The same Learn page sends administrators to the Microsoft 365 admin center for Planner Agent in Microsoft Copilot, and Microsoft has not confirmed the cmdlet governs Copilot Chat, so do not rely on it for this change.

Enhanced personalization governs Copilot memory generally, not only Planner Agent, and its Graph resource is in beta. Turning it off stops Copilot applying saved memories and does not remove them.

## Open questions

- Does the Planner Agent entry in Agents > All agents offer Block and per-group availability, and does Set-PlannerConfiguration -AllowPlannerCopilot affect Planner Agent in Copilot Chat? Watch the Learn pages on managing agents and on turning off Planner Agent.
- Is there an admin control that disables only task assignment or scheduled catch-up? Watch Message center and Learn.
- Will task assignment, catch-up runs or memory use consume Copilot Credits or need any licence beyond Microsoft Copilot? Microsoft has not published this.
- Will Planner Agent actions in Copilot Chat be audited? The Planner Agent page says Planner Agent plans to provide the same auditing as premium plans, and Learn says memory actions are not audited.
- Will the Copilot memory integration keep its preview status when it reaches Planner Agent in December 2026?

<!-- rationale
risk: Medium. The new capabilities are on by default for users with access and can write assignments to shared plans, but the notice says changes stay drafts until the user confirms them and the agent reads only what the user can already open.
cost: Low. Microsoft's notice and the Learn page name an active Microsoft Copilot licence as the requirement and list no other licence or meter; the cost shown is admin time, communications and support. Any further pricing is not yet published.
impact: Medium. Every user with a Microsoft Copilot licence and access to Planner Agent sees the new behaviour, and the notice says it is enabled by default, but Planner Agent is one agent among many in Copilot Chat.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] Cost and licensing: final sentence / cost: Optional catch-up email notifications are not a charge. | Found: Searched: "Planner Agent" "catch-up" "email" pricing charge; Planner Agent Copilot Chat scheduled catch-up assignment Copilot Credits pricing license. Read MC1539002, turn-off-planner-agent and cost-considerations excerpts; none states these notifications have no charge. | Fix: Remove ', not a charge' from the final sentence of Cost and licensing. Say only 'The optional email notifications for catch-up are a user-side setting'; retain the separate statement that feature-specific pricing is not yet published.
- [contradicted, blocker] controls[1].ui; Governance guidance: At rollout; Governance controls / admin-path: The cited Learn page gives Agents > All agents > Manage pinned agents without an intervening menu. | Found: 1. In the All agents page, select the ellipse on the right to display a dropdown menu.
2. Select the Manage pinned agents. | Fix: In controls[1].ui.path and the repeated table and guidance, use 'Agents > All agents > ellipsis menu > Manage pinned agents'. The notice gives a shortened route, but the cited Learn instructions require opening that menu. | Source: https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview
- [contradicted, minor] front matter: risk; rationale: risk / consistency: A medium risk rating fits this default-on agent change with write access and coarse controls. | Found: risk: "medium"; "This is a default-on change to an agent that can write to shared plans." The assessment scale says "an on-by-default agent with write access is high". | Fix: Set risk to high and start its rationale with 'High.': the change is default-on, can write assignments to shared plans and has coarse controls. Retain the user-confirmation and existing-permissions qualifications as mitigations.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: A medium impact rating fits the change to default behavior for all licensed users with Planner Agent access. | Found: impact: "medium"; "Every user with a Microsoft Copilot licence and access to Planner Agent sees the new behaviour". The assessment scale defines high impact as "most users, or a change to default behaviour". | Fix: Set impact to high and start its rationale with 'High.': the additions change default behavior for all licensed users who already have Planner Agent access; keep that audience qualification.
-->
