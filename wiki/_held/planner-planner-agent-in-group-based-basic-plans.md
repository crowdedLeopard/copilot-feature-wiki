---
title: "Planner: Planner Agent in group-based basic plans"
slug: "planner-planner-agent-in-group-based-basic-plans"
roadmapId: 511820
topic: "m365-copilot"
products: ["Planner","Microsoft Copilot (Microsoft 365)"]
summary: "Planner Agent is now listed as available in basic Planner plans for users with a Microsoft 365 Copilot licence. Admins can limit or turn it off with Planner PowerShell; Microsoft has not stated the default."
status: "launched"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "March CY2026"
previewDate: "March CY2025"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "per-user"
  notes: "Microsoft Learn says users must have a Microsoft Copilot licence to access Planner Agent in Planner. A price or meter specific to Planner Agent in basic plans is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["planner","m365-copilot","agents","powershell","licensing","governance","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 511820"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=511820"
    kind: "roadmap"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Prerequisites for making Planner changes in Windows PowerShell"
    url: "https://learn.microsoft.com/planner/prerequisites-for-powershell"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Manage agents in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/manage-copilot-agents-integrated-apps"
    kind: "learn"
  - title: "Assign or unassign licenses for users in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Assign Microsoft 365 licenses to user accounts with PowerShell"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["m365-copilot-planner-agent-in-m365-copilot","planner-planner-agent-chat-in-basic-plans","planner-planner-agent-chat","planner-ai-generated-status-reports-in-planner-agent","planner-planner-agent-in-copilot-v2-improvements"]
controls:
  - governs: "Whether Planner Agent is on or off for all users"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $false"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Needs a global admin and the Planner Tenant Admin PowerShell module. Changes may take up to 1 hour. $true turns it on for all users."
  - governs: "Which security group can use Planner Agent"
    scope: "group"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId <security group id>"
      docs: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    note: "Nested group members are included. An invalid group ID turns the agent off for all users."
  - governs: "Which users hold the Microsoft Copilot licence Planner Agent requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least a License or User Administrator. This is the licence gate, not a Planner Agent switch."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-06-05T22:00:28"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: Planner Agent in group-based basic plans, with the Planner PowerShell controls and the Copilot licence gate."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "e0b28beb92a5bb42e1e8ad5d945148c1"
---

## What's changing

Planner Agent is now available to Microsoft 365 Copilot licensed users in all group-based Planner plans, including basic plans. The roadmap item says exactly that, and the Microsoft 365 Copilot release notes list it with the explanation that Planner Agent was previously limited to premium plans. The release notes name task execution and status reporting as the Planner Agent features that basic plans gain.

The Planner for admins page explains the licence model behind this: basic plans are now unified plans, premium capabilities are increasingly available in them based on each user's licence, and a unified plan does not require every member to hold the same licence. Users with Microsoft Copilot can use Planner Agent in these plans. Planner Agent chat is a separate capability with its own briefing: see [Planner Agent chat in basic plans](/features/planner-planner-agent-chat-in-basic-plans/).

The roadmap record gives the status as Launched, with a target date of March CY2026, a preview date of March CY2025, phases General Availability, Preview and Targeted Release, cloud Worldwide (Standard Multi-Tenant), and platforms Desktop, Mac and Web.

## Why it matters

An AI agent that executes tasks and reports status now reaches plans that many teams run without any governance thinking, because basic plans come with the Microsoft 365 plans people already have. For a service owner the decision is whether licensed users should have it everywhere, only for some groups, or not yet.

Microsoft has not stated what happens on arrival if nobody acts, so base the advice on the roadmap's wording that the agent is available to Copilot-licensed users: expect those users to find it. The setting that governs it sits in Planner PowerShell, which needs a global admin and a separate module download, so agree who owns it before users start asking.

## Risk assessment

**Data exposure**

- Learn says Planner Agent is built on Microsoft's comprehensive approach to security, compliance and privacy and points to Data, Privacy, and Security for Microsoft Copilot. Basic plans are unified plans in which members can hold different licences, so check what a plan's unlicensed members can see once a licensed member uses the agent.

**Security & identity**

- Access is gated by the Microsoft Copilot licence, so licence assignment is the first control. Restricting to a security group with Set-PlannerConfiguration is the second; an invalid group ID turns the agent off for all users, so a typo removes access rather than widening it.

**Autonomy & actions**

- The release notes describe task execution and status reporting, and Planner for admins describes the agent as helping to identify and address risks, communicate progress and drive work forward. Confirm in a test plan which changes the agent makes to tasks before wide use.

**Change & support**

- Planner policy changes may take up to an hour to apply, so test a restriction before announcing it.
- Turning Planner Agent off also disables the document authoring skill of Facilitator; all other Facilitator skills remain unaffected.
- Expect questions from users in the same plan who see different capabilities because their licences differ.

## Cost and licensing

**Licence.** The Learn page on turning off Planner Agent says users must have a Microsoft Copilot licence to access Planner Agent in Planner. The Planner for admins page says users with Microsoft Copilot can use premium and AI-powered capabilities included with that licence, such as Planner Agent. The Planner service description lists Microsoft 365 Copilot as a licence column and says the features available to each user in a unified plan depend on their licence.

**Meter and price.** The Planner service description and the Planner Agent admin page publish no separate Planner Agent price or meter at the time of writing (November 2026). A price or meter specific to Planner Agent in basic plans is not yet published.

**Indirect cost.** Expect admin time to decide on and test the Planner PowerShell setting, plus user guidance on who has the agent and why.

## Scope

**Who.** Users with a Microsoft Copilot licence, in group-based Planner plans including basic plans, according to the roadmap item and the Copilot release notes.

**Where.** The roadmap lists Worldwide (Standard Multi-Tenant) only, with platforms Desktop, Mac and Web. No other cloud is listed on the item; that is a record fact, not a statement that the agent is unavailable elsewhere.

**Rollout.** The roadmap status is Launched, with phases General Availability, Preview and Targeted Release.

**Administration.** The Planner PowerShell commands need a global admin and the Planner Tenant Admin PowerShell module, as described on Learn. The Learn page says its instructions cover the Planner Agent experience for task execution and status reporting in both basic and premium plans.

## Governance guidance

### Before rollout

- Identify which users hold a Microsoft Copilot licence (Microsoft 365 admin center > Users > Active users) and agree whether all of them should have Planner Agent in basic plans.
- Download and load the Planner Tenant Admin PowerShell module and confirm a global admin can run it.
- Run Get-PlannerConfiguration and record the AllowPlannerCopilot and PlannerCopilotAllowedGroupId values before changing anything.

### At rollout

- Decide whether to restrict Planner Agent to a security group with Set-PlannerConfiguration, and create that group in Microsoft Entra ID first.
- Test the setting with one licensed member and one unlicensed member of the same basic plan, allowing up to an hour for the change to apply.
- Tell users which group has the agent and who to ask for access.

### After rollout

- Review the security group's membership against the people who should have the agent.
- Recheck the Learn page on turning off Planner Agent for new controls, including an admin centre setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Planner Agent is on or off for all users</strong><br><small>Tenant</small><br><small class="controls__note">Needs a global admin and the Planner Tenant Admin PowerShell module. Changes may take up to 1 hour. $true turns it on for all users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $false</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which security group can use Planner Agent</strong><br><small>Group</small><br><small class="controls__note">Nested group members are included. An invalid group ID turns the agent off for all users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowPlannerCopilot $true -PlannerCopilotAllowedGroupId &lt;security group id&gt;</code> <a href="https://learn.microsoft.com/planner/turn-off-planner-agent" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence Planner Agent requires</strong><br><small>User</small><br><small class="controls__note">Requires at least a License or User Administrator. This is the licence gate, not a Planner Agent switch.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented switch for Planner Agent in Planner is PowerShell only. The Learn page says changes may take up to 1 hour, that a valid security group ID limits access to that group including nested members, and that an invalid group ID turns the agent off for all users even when AllowPlannerCopilot is $true. Get-PlannerConfiguration shows the current values.

Running the Planner commands requires a global admin, per the Learn prerequisites page. Licence assignment needs at least a License or User Administrator. The Learn page also says that for the Planner Agent in Microsoft Copilot you should see Manage agents in the Microsoft 365 admin center; that page does not mention Planner, so treat the PowerShell setting as the documented control for the agent in Planner.

## Open questions

- What is the tenant default for AllowPlannerCopilot when nobody has run Set-PlannerConfiguration, and does the agent appear in basic plans without any admin action? Watch the Learn page on turning off Planner Agent and Message center.
- Does Planner Agent change tasks without a person approving each change in basic plans? Watch the Planner Learn pages.
- Does blocking an agent in the Microsoft 365 admin center affect Planner Agent in basic plans, or only the Planner Agent in Microsoft Copilot that the Learn page points to?
- Learn says Planner Agent plans to provide the same auditing capabilities as premium plans. Which audit events will it record for basic plans, and when?

<!-- rationale
risk: Medium. Planner Agent, which does task execution and status reporting, reaches basic plans for every Copilot-licensed user, and the only documented switch is a Planner PowerShell setting that needs a global admin.
cost: Low. Microsoft Learn names a Microsoft Copilot licence as the requirement and publishes no separate Planner Agent price or meter; for users who already hold the licence the cost is admin time and user guidance.
impact: Medium. Users with a Microsoft 365 Copilot licence who work in group-based basic plans gain Planner Agent; users without that licence do not.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Governance controls table / command: Setting AllowPlannerCopilot to $true turns Planner Agent on for all users without further qualification. | Found: $true | $null (00000000-0000-0000-0000-000000000000) | 'ON' for all users; $true | valid security group ID | 'ON' for users in the security group only (or nested members); $true | invalid security group ID | 'OFF' for all users | Fix: Replace '$true turns it on for all users.' in controls[0].note and its rendered table note with 'With PlannerCopilotAllowedGroupId set to $null, $true turns it on for all users.' The qualification is documented at https://learn.microsoft.com/planner/turn-off-planner-agent. | Source: https://learn.microsoft.com/planner/turn-off-planner-agent
-->
