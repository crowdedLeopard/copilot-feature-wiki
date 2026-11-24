---
title: "Planner: Planner Agent chat for plan questions, task discovery and task updates"
slug: "planner-planner-agent-chat"
roadmapId: 560532
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "Planner Agent chat lets users ask questions about a plan and update tasks in natural language. Users need a Microsoft Copilot licence. Admins can switch it off or limit it to a security group with Planner PowerShell."
status: "launched"
releasePhase: ["Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices","Web"]
targetDate: "June CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists a Microsoft Copilot licence as the licence users must have for Planner Agent in Planner, and says users with Microsoft Copilot can use Planner Agent. No price or meter specific to the chat is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["planner","copilot-chat","agents","powershell","licensing","teams"]
sources:
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Prerequisites for making Planner changes in Windows PowerShell"
    url: "https://learn.microsoft.com/planner/prerequisites-for-powershell"
    kind: "learn"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 560532"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560532"
    kind: "roadmap"
videos: []
related: ["planner-planner-agent-chat-in-basic-plans","planner-planner-agent-in-copilot-v2-improvements","planner-save-ai-generated-filters-in-planner-agent-chat","planner-ai-generated-status-reports-in-planner-agent","m365-copilot-planner-capabilities-in-copilot-chat-m365-copilot"]
controls:
  - governs: "Whether Planner Agent and Planner Agent chat are on or off for all users"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $false"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Needs a global admin and the Planner Tenant Admin PowerShell module. Changes may take up to 1 hour. Also disables the document authoring skill of Facilitator."
  - governs: "Which security group can use Planner Agent and Planner Agent chat"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId <security group id>"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Nested group members are included. An invalid group ID turns the features off for all users."
  - governs: "Whether the Planner app is available in Teams (coarse alternative; not specific to the chat)"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Blocks the Planner app in Teams, not the chat on the web. The Teams page does not name Planner Agent chat."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-29T23:02:39"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: Planner Agent chat, its Microsoft Copilot licence requirement and the Planner PowerShell switch, with the default state still not stated."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fa78bb8107eb4840db33773296e64c13"
---

## What's changing

Planner Agent chat is a built-in chat in Microsoft Planner. The roadmap item describes it as natural language Q&A, smart task discovery and in-plan task management, on Teams and Surface Devices and on the web, in the Worldwide (Standard Multi-Tenant) cloud.

Microsoft Learn describes the chat as an in-app natural language experience in premium plans (previously "Copilot in Planner") that lets users request updates to their plans and receive summaries and insights from the plan content. The same Learn page says its instructions cover Planner Agent chat in premium plans only, and cover the Planner Agent experience for task execution and status reporting in both basic and premium plans. This briefing therefore describes the chat in premium plans; chat in basic plans is covered by a separate briefing.

The roadmap record shows status Launched, with a target date and a preview date of June CY2026, while its release phase still lists Preview. Treat the record's own wording as the current statement and re-check it in Message center. No Message Center post was supplied for this item.

## Why it matters

This puts a conversational route to plan data and plan changes in front of Planner users. A user who asks the chat to update a plan is changing shared work records, so a service owner should know who holds the licence and how the feature can be limited before users find it.

Microsoft has not stated what happens on arrival, so do not assume the chat is off until someone enables it. Plan on the basis that no source says existing behaviour changes, and decide now whether to leave access as it is or to restrict it to a security group.

## Risk assessment

**Data exposure**
- Learn describes the chat as returning summaries and insights from the plan content. Confirm before rollout whether it reads anything beyond the plan a user has open.
- Learn says Planner Agent plans to provide the same auditing capabilities as premium plans; use the Planner Premium audit log activities page it links to when you plan monitoring.

**Security & identity**
- Access is governed by `Set-PlannerConfiguration -AllowPlannerCopilot` and, optionally, a Microsoft Entra security group. An invalid group ID turns the features off for all users, so a mistyped ID blocks everyone, including the people you meant to allow.
- The Planner tenant admin PowerShell commands need a global admin account, so the people who can change this setting are a short list.

**Autonomy & actions**
- The chat lets users request updates to their plans, and the roadmap item names in-plan task management. Learn does not describe an approval step for those updates on the page read, so confirm in a test plan what the chat changes without a further click.

**Change & support**
- Policy changes may take up to an hour to apply, so allow for that when you test a restriction.
- The documented switch turns Planner Agent and Planner Agent chat off or on together. Turning off Planner Agent also disables the document authoring skill of Facilitator; Learn says all other Facilitator skills remain unaffected.

## Cost and licensing

Learn's Planner Agent page says users must have a Microsoft Copilot licence to access Planner Agent in Planner. The Planner for admins page adds that users with Microsoft Copilot can use the premium and AI-powered capabilities included with that licence, such as Planner Agent. Neither page states a price or a meter for the chat.

The indirect cost is admin time: someone with a global admin account has to run the Planner PowerShell commands to restrict it, and support teams need to know what the chat can change.

A price or meter specific to Planner Agent chat is not yet published on the pages read.

## Scope

The roadmap record lists Planner and Microsoft Copilot (Microsoft 365) as products, the Worldwide (Standard Multi-Tenant) cloud, and the Teams and Surface Devices and Web platforms. It lists no US Government cloud.

Users need a Microsoft Copilot licence per Learn. Learn says the chat is covered in premium plans only, while Planner Agent task execution and status reporting are covered in both basic and premium plans. Settings and policies configured for Planner for the web also apply to Planner in Teams, according to the Planner in Teams page.

Microsoft has not stated on the pages read whether the chat is on by default for licensed users, and the rollout mechanics are not described beyond the roadmap record.

## Governance guidance

### Before rollout
- List the Planner users who hold a Microsoft Copilot licence, because Learn names it as the requirement for Planner Agent in Planner.
- Decide whether access is for everyone or for one security group, and create the Microsoft Entra security group first if it is a group.
- Get a global admin to set up the Planner Tenant Admin PowerShell module using the prerequisites page.
- Run Get-PlannerConfiguration to record the current AllowPlannerCopilot and PlannerCopilotAllowedGroupId values.

### At rollout
- Set AllowPlannerCopilot to $false to turn Planner Agent and its chat off for all users, or to $true with a PlannerCopilotAllowedGroupId to limit them to one group.
- Wait up to one hour, then test with a user inside the group and one outside it.
- Tell pilot users that the chat can be used to request updates to plans, and ask them to report unexpected changes.

### After rollout
- Run Get-PlannerConfiguration again to confirm the values that are in force.
- Review the Planner Premium audit log activities page for the events available, and check them against the chat activity you expect.
- Watch Message center and the Planner Learn pages for the default state, licensing detail and any change to the roadmap record.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Planner Agent and Planner Agent chat are on or off for all users</strong><br><small>Tenant</small><br><small class="controls__note">Needs a global admin and the Planner Tenant Admin PowerShell module. Changes may take up to 1 hour. Also disables the document authoring skill of Facilitator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $false</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which security group can use Planner Agent and Planner Agent chat</strong><br><small>Group</small><br><small class="controls__note">Nested group members are included. An invalid group ID turns the features off for all users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Planner app is available in Teams (coarse alternative; not specific to the chat)</strong><br><small>Tenant</small><br><small class="controls__note">Blocks the Planner app in Teams, not the chat on the web. The Teams page does not name Planner Agent chat.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The Planner PowerShell commands are the only settings documented for Planner Agent chat on the pages read. They need a global admin and apply to Planner Agent and its chat together, so there is no way on that page to leave the agent on and switch only the chat off.

The Teams admin center row is a coarse alternative: it blocks the Planner app in Teams for the organisation. It is not specific to the chat and does not appear on the page as a control for the Planner Agent.

The Behavior matrix on the Learn page decides the outcome: $false is off for all users, $true with no group is on for all users, and $true with a valid group ID is on for that group and its nested members only.

## Open questions

- Is Planner Agent chat on by default for users who hold a Microsoft Copilot licence, or does an admin have to enable it? Watch the Planner Learn page and Message center.
- Does the chat ask the user to approve each task change it makes in a plan? Watch the Planner Agent chat user documentation.
- Which audit events does Planner Agent chat record, given that Learn says Planner Agent plans to provide the same auditing as premium plans?
- Will Microsoft add a Microsoft 365 admin center or Planner admin setting for the chat, alongside the PowerShell switch?

<!-- rationale
risk: Medium. The chat lets users request updates to their plans, and Microsoft has not stated whether it is on by default; a PowerShell switch exists but there is no chat-only setting and no documented admin centre page.
cost: Medium. Learn names a Microsoft Copilot licence as the requirement for Planner Agent in Planner; no separate price or meter for the chat is published on the pages read.
impact: Medium. Planner users who hold a Microsoft Copilot licence notice it in the plans they work in; people without that licence are not named as users of it.
-->
