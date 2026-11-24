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
risk: "high"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Microsoft's notice MC1539002 says affected users hold an active Microsoft Copilot licence. No separate price or meter for task assignment, catch-up or memory is published at the time of writing (November 2026)."
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
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
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
related: ["planner-save-ai-generated-filters-in-planner-agent-chat"]
controls:
  - governs: "Availability of Planner Agent in Microsoft Copilot (tenant-wide block)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > agent > Block"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    note: "General agent control; Planner Agent entry not shown on Learn. API is beta, unsupported for production, needs Agent 365 licence and delegated CopilotPackages.ReadWrite.All; Planner applicability not established."
  - governs: "Whether Planner Agent is pinned for users or groups"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Agents > All agents > Registry > ellipsis menu > Manage pinned agents"
      docs: "https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview"
    api: null
    note: "AI Administrator role, per the notice. Up to three admin-pinned agents; can take up to six hours to appear. Visibility only, not an access control."
  - governs: "Copilot memory used by Planner Agent (Enhanced personalization)"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization with Content-Type: application/json and body {\"isEnabledInOrganization\": false}"
      docs: "https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta"
    note: "Beta API; People Administrator is the least privileged role. General Copilot memory control, on by default; the memory Learn page is preview."
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
updated: "2026-11-17"
roadmapModified: "2026-10-14T23:01:02"
changes:
  - date: "2026-11-16"
    note: "New briefing: Microsoft's notice MC1539002 sets rollout for early December 2026 with an act-by date of 2026-12-04, later than the roadmap's October CY2026 target."
  - date: "2026-11-16"
    note: "Corrected after verification: risk and impact raised to High, pinning path now includes the ellipsis menu, and the unsupported 'not a charge' wording is removed."
  - date: "2026-11-17"
    note: "Corrected after verification: the Block control now cites the beta Microsoft Graph copilotPackage block call with its caveats, and the pinning path includes the Registry step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 94 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the Enhanced personalization Graph call now gives the JSON body instead of a property list, and the private-message sharing claim is reworded as a caution."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 95 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 103 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 102
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "ff545088fa72272f3e3b85c7e8a9053a"
---

## What's changing

Microsoft is expanding Planner Agent in Microsoft Copilot Chat, the agent that lets users create, update and manage personal tasks and shared basic plans without leaving chat. Microsoft's notice MC1539002 (published 2026-11-05) lists three additions: task assignment, scheduled task catch-up and Copilot memory integration. It also describes support for larger plans, better response quality, speed and reliability.

Users can assign tasks to one or more people in shared basic plans, including several tasks at once, reassign or remove assignees, view tasks grouped by person and review proposed changes before saving. Catch-up identifies outstanding work, commitments and items awaiting the user's input from recent emails, chats and meetings. Users can run it on demand or set a recurring schedule with optional email notification; suggested tasks show their sources and stay editable drafts until saved to Planner. With memory, Planner Agent can personalise responses using saved memories and preferences inferred from earlier Copilot chats. The previous 30-task limit when creating plans is removed.

The notice says these improvements are enabled by default for users with access to Planner Agent, and that no recurring schedule is created automatically. Planner Agent supports personal tasks and shared basic plans, not premium plans, and cannot delete tasks or undo changes. It uses only content the signed-in user can already access. Users find it under Agents & Skills, can pin it, or can invoke it with @Planner Agent.

The roadmap item (ID 573168) is In development with a target of October CY2026, release phase General Availability. The notice gives a later and more specific window: rollout begins in early December 2026 and is expected to complete in early December 2026, with Microsoft's end date 2027-01-08 and an act-by date of 2026-12-04. Microsoft Learn does not describe the task assignment or catch-up behaviour at the time of writing (November 2026), so that behaviour rests on the roadmap item and the notice.

## Why it matters

This is a default-on change to an agent that can write to shared plans. Nothing needs configuring for it to arrive, so unless an administrator decides otherwise, every licensed user with access gets task assignment, scheduled catch-up that reads their recent emails, chats and meetings, and memory-based personalisation in early December 2026.

The effect for a service owner is on support and data handling rather than licensing. Expect questions about wrongly assigned tasks (the agent cannot undo changes), about suggestions drawn from private mail appearing in shared plans, and about where Copilot memory is stored and whether retention policies reach it. The controls that exist are coarse: blocking or pinning the agent as a whole, and the tenant-level Enhanced personalization control for memory.

## Risk assessment

**Data exposure**

- Catch-up reads recent emails, chats and meetings to propose tasks. The notice says Planner Agent uses only content the signed-in user can already access, so permissions are not widened. Consider the risk of users moving information from private messages into shared plans; suggestions show their sources and stay drafts until saved.
- Memory integration lets Planner Agent use saved memories and preferences inferred from earlier chats. Microsoft Learn says memories are stored in the user's Exchange mailbox in a hidden folder, that Purview retention policies and labels do not apply to Copilot memory, and that admins cannot restrict what type of information is added. That Learn page is marked preview.

**Security & identity**

- The agent works under the signed-in user's access, so existing Planner and Microsoft 365 permissions bound what it can read and change. Assignment lets a user place work on other people in shared basic plans; premium plans are not supported.

**Autonomy & actions**

- AI-generated tasks, plans and updates, including assignments, remain drafts until the user reviews and confirms them. Bulk assignment of several tasks at once makes a careless confirmation costlier, and the agent cannot delete tasks or undo changes, so corrections are manual.
- A recurring catch-up schedule runs without a prompt each time once a user creates it, and can email the user. The notice says none is created automatically, and users can modify, pause or delete schedules.
- Microsoft Learn states that memory and personalisation actions do not generate audit log entries in Purview.

**Change & support**

- On by default, with rollout in early December 2026. Pinned agents can take up to six hours to appear for users, so pinning after rollout starts will look inconsistent for a time.
- The Planner usage report does not cover Planner Agent; Learn says Planner Agent is included in the Microsoft Copilot Agents report instead.

## Cost and licensing

Microsoft's notice MC1539002 says affected users are those with an active Microsoft Copilot licence who have access to Planner Agent. The Learn page on access to Planner Agent lists a Microsoft Copilot licence as the licence users must have for Planner Agent in Planner, and names no other licence or meter. That page is about Planner Agent inside Planner, so it supports the licence requirement but not the Copilot Chat behaviour.

No price, meter or Copilot Credits rate for task assignment, scheduled catch-up or memory is published at the time of writing (November 2026). Indirect cost is admin time to review availability, user communications, training material updates and support for assignment mistakes. The optional email notifications for catch-up are a user-side setting.

## Scope

**Who:** users with an active Microsoft Copilot licence who have access to Planner Agent, per Microsoft's notice. Administrators manage availability in the Microsoft 365 admin center.

**Where:** Microsoft Copilot on the web, Microsoft Copilot in Microsoft Teams and Microsoft Planner. The roadmap lists Desktop, Teams and Surface Devices, and Web, in the Worldwide (Standard Multi-Tenant) cloud only; no other cloud is listed on the item.

**Plans:** personal tasks and shared basic plans. Premium plans are not supported.

**Rollout:** roadmap target October CY2026, status In development; the notice gives early December 2026 for both start and completion of Worldwide general availability.

**Roles:** pinning the agent requires the AI Administrator role, per the notice. The least privileged Entra role for the Graph call that governs Enhanced personalization is People Administrator.

## Governance guidance

### Before rollout

- Confirm by 2026-12-04, Microsoft's act-by date in MC1539002, that the users who should have Planner Agent hold an active Microsoft Copilot licence. The notice states no admin action is required and recommends this check.
- Decide whether Planner Agent stays available to everyone: open Agents > All agents in the Microsoft 365 admin center, select Planner Agent and review the Block action (first controls row).
- Decide whether Copilot memory stays on for your tenant, using the Enhanced personalization control (third controls row). It is on by default and Purview retention does not reach it.
- Brief users that suggestions and assignments stay drafts until confirmed, that the agent cannot delete tasks or undo changes, and that catch-up schedules are optional and user-configured.

### At rollout

- Pin Planner Agent if you want it visible: Agents > All agents > Registry > ellipsis menu > Manage pinned agents, as an AI Administrator (second controls row). Allow up to six hours for it to appear.
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
<tr><td data-label="Control"><strong>Availability of Planner Agent in Microsoft Copilot (tenant-wide block)</strong><br><small>Tenant</small><br><small class="controls__note">General agent control; Planner Agent entry not shown on Learn. API is beta, unsupported for production, needs Agent 365 licence and delegated CopilotPackages.ReadWrite.All; Planner applicability not established.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › agent › Block <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-actions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/beta/copilot/admin/catalog/packages/{id}/block</code> <a href="https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Planner Agent is pinned for users or groups</strong><br><small>Group</small><br><small class="controls__note">AI Administrator role, per the notice. Up to three admin-pinned agents; can take up to six hours to appear. Visibility only, not an access control.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Agents › All agents › Registry › ellipsis menu › Manage pinned agents <a href="https://learn.microsoft.com/microsoft-agent-365/admin/agent-registry-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot memory used by Planner Agent (Enhanced personalization)</strong><br><small>Tenant</small><br><small class="controls__note">Beta API; People Administrator is the least privileged role. General Copilot memory control, on by default; the memory Learn page is preview.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization with Content-Type: application/json and body {&quot;isEnabledInOrganization&quot;: false}</code> <a href="https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Planner Agent access in Planner (not Copilot Chat)</strong><br><small>Tenant</small><br><small class="controls__note">Documented for Planner Agent in Planner; Microsoft has not confirmed it applies to Planner Agent in Copilot Chat. Changes can take up to 1 hour.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for scheduled task catch-up or task assignment</strong><br><small>Tenant</small><br><small class="controls__note">Not documented at the time of writing. Users manage their own catch-up schedules.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Availability and pinning share the Agents area of the Microsoft 365 admin center. Learn describes Block as an organisation-wide action for an agent, and the notice says administrators manage Planner Agent availability there. Learn does not show the Planner Agent entry itself, so check which actions it offers.

Learn also documents a beta Microsoft Graph call that blocks a Copilot package (first controls row). It requires Microsoft Agent 365 licensing and the delegated CopilotPackages.ReadWrite.All permission, and is not supported for production applications. It is a general package control, and its applicability to Planner Agent has not been established.

Set-PlannerConfiguration is documented for Planner Agent inside Planner. The same Learn page sends administrators to the Microsoft 365 admin center for Planner Agent in Microsoft Copilot, and Microsoft has not confirmed the cmdlet governs Copilot Chat, so do not rely on it for this change.

Enhanced personalization governs Copilot memory generally, not only Planner Agent, and its Graph resource is in beta. Turning it off stops Copilot applying saved memories and does not remove them.

## Open questions

- Does the Planner Agent entry in Agents > All agents offer Block and per-group availability, and does Set-PlannerConfiguration -AllowPlannerCopilot affect Planner Agent in Copilot Chat? Watch the Learn pages on managing agents and on turning off Planner Agent.
- Is there an admin control that disables only task assignment or scheduled catch-up? Watch Message center and Learn.
- Will task assignment, catch-up runs or memory use consume Copilot Credits or need any licence beyond Microsoft Copilot? Microsoft has not published this.
- Will Planner Agent actions in Copilot Chat be audited? The Planner Agent page says Planner Agent plans to provide the same auditing as premium plans, and Learn says memory actions are not audited.
- Will the Copilot memory integration keep its preview status when it reaches Planner Agent in December 2026?

<!-- rationale
risk: High. The additions are on by default for users with Planner Agent access, can write assignments to shared plans and read recent emails, chats and meetings, and the admin controls are coarse: block, pin, or the tenant-wide memory switch. User confirmation of drafts and existing permissions mitigate.
cost: Low. Microsoft's notice names an active Microsoft Copilot licence as the requirement and no separate meter is published at the time of writing (November 2026); the known cost is admin time, communications and support. Further pricing is not yet published.
impact: High. The additions change default behaviour for every user with a Microsoft Copilot licence and access to Planner Agent, and the notice says they are enabled by default; users notice new assignment, catch-up and memory behaviour in Copilot Chat.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What's changing; Why it matters; Scope; Risk assessment: Change & support / date: The notice schedules Worldwide rollout to begin in early December 2026. | Found: General Availability (Worldwide): Rollout will begin in early December 2026 and is expected to complete by early December 2026. | Fix: In Why it matters, replace the sentence beginning 'Nothing needs configuring' with 'No admin configuration is required for rollout; Microsoft plans to deliver task assignment, optional scheduled catch-up and memory-based personalisation to licensed users with Planner Agent access in early December 2026.' The notice supplies a rollout plan, not a guarantee that every user receives it within that window.
- [supported, minor] controls[2].api; controls[2].note; Governance controls / command: The beta PATCH call to enhancedpersonalization with Content-Type application/json and isEnabledInOrganization false disables Enhanced personalization. | Found: PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization ... Content-Type | application/json. Required. ... isEnabledInOrganization | Boolean | If true, enables the enhanced personalization control | Fix: Set controls[2].api.call and its rendered table call to 'PATCH https://graph.microsoft.com/beta/copilot/settings/people/enhancedpersonalization'. Add to controls[2].note and its rendered note: 'The JSON request body sets isEnabledInOrganization to false to disable Enhanced personalization.' The endpoint, header and printed property are correct; the standard keeps headers and request bodies out of the one-line call. | Source: https://learn.microsoft.com/graph/api/enhancedpersonalizationsetting-update?view=graph-rest-beta
- [supported, minor] Risk assessment: Security & identity; rationale: risk / applicability: Existing Planner permissions bound the plan and task changes available to the signed-in user. | Found: Within Planner, each Plan is inside a container, and access to the plan is defined by the container. ... Generally, the members of a container can create, update, and delete the tasks in the plan. | Fix: Add 'Security, privacy, and compliance in Microsoft Planner' at https://learn.microsoft.com/planner/planner-security-privacy-compliance to sources. This supports the Planner permissions premise alongside the supplied notice's signed-in-user access boundary. | Source: https://learn.microsoft.com/planner/planner-security-privacy-compliance
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The reporting control the checklist tells administrators to review is represented in the controls table. | Found: Review Planner Agent use in the Microsoft 365 Copilot Agents report, because the Planner usage report does not cover it. The controls table lists availability, pinning, memory, Planner access and a catch-up/assignment switch, but no reporting control. | Fix: Remove the After rollout checklist bullet 'Review Planner Agent use in the Microsoft 365 Copilot Agents report, because the Planner usage report does not cover it.' Keep the supported reporting information in Risk assessment; do not add a control row.
-->
