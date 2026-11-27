---
title: "Microsoft Teams: Facilitator meeting agent for GCC"
slug: "microsoft-teams-facilitator-in-gcc"
roadmapId: 577401
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to bring the Facilitator meeting agent to Teams in GCC, targeted December CY2026. It needs a Microsoft 365 Copilot licence. Admins can allow or block it in the Teams admin center; GCC behaviour is not yet documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC"]
platforms: ["Desktop","Mac","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "The roadmap item says a Microsoft 365 Copilot licence is required. Learn says Facilitator is included with a Microsoft Copilot licence and subject to available capacity. No Facilitator-specific price or meter is published."
audiences: ["m365-admin","compliance","security","change-adoption"]
tags: ["facilitator","teams","m365-copilot","microsoft-loop","meeting-transcripts","unlicensed-users","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 577401"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577401"
    kind: "roadmap"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Microsoft Copilot (service description)"
    url: "https://learn.microsoft.com/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-copilot"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    kind: "learn"
  - title: "Best migration practices for app centric management"
    url: "https://learn.microsoft.com/microsoftteams/pre-and-post-migration"
    kind: "learn"
videos: []
related: ["meeting-transcripts","microsoft-teams-facilitator-detects-and-answers-questions","microsoft-teams-ai-powered-notes-for-in-person-meetings-with-facilitator-in-teams-r-560318","ediscovery","sensitivity-labels"]
controls:
  - governs: "Whether the Facilitator app is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > actions menu > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Learn says Facilitator is allowed by default and is also blocked if all apps are blocked. The page describes Facilitator generally and does not mention GCC."
  - governs: "Which users and groups Facilitator is available to"
    scope: "group"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to"
      docs: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -AppAssignmentType Everyone"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Learn names app centric management for allowing Facilitator to a group of users. Availability changes take up to 24 hours to take effect; in rare cases, they can take up to six days to reflect in the client."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-20"
    note: "New briefing: Facilitator in Teams for GCC, targeted December CY2026; GCC behaviour is not yet documented on Learn."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected the app availability timing note, the Allow or Block admin path, and the sensitivity label qualification; removed two checklist steps that had no controls-table row."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 70
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "44d7067fd255867a520a95bd8fb32979"
---

## What's changing

The Microsoft 365 Roadmap item states that Facilitator is coming to Microsoft Teams meetings in GCC. It describes the Facilitator agent as able to capture notes in real time, answer questions about the meeting and help keep the agenda and discussion on track. The item is In development, targeted for December CY2026, in the General Availability release phase, on Desktop, Mac and Web, and it lists GCC as the only cloud.

Microsoft Learn does not describe Facilitator in GCC at the time of writing (November 2026). The Learn page for Facilitator in Teams describes the product as it is documented for Microsoft's commercial service and does not mention GCC, and the Microsoft 365 Copilot service description lists no Facilitator row for GCC. What follows about behaviour is therefore Learn's description of Facilitator in general, and the roadmap's plan for GCC.

Per that Learn page, generally available Facilitator capabilities include collaborative, real-time notes in a Notes tab, AI-powered Q&A from meeting and web content, timeline markers with reminders, and Word document creation in or after a meeting. Task tracking with Planner and PowerPoint deck creation are listed as public preview. The roadmap item does not say which of these capabilities will be available in GCC.

Learn also says Facilitator behaves like an assistant sitting in the meeting: if a user prompts it, all users can view that communication, and Facilitator displays its response in the meeting's conversation.

## Why it matters

For a GCC tenant, this adds an AI agent that writes into the meeting conversation and creates a notes file, which changes what meeting participants see and what records exist after a meeting. Microsoft has not stated what happens on arrival in GCC (whether Facilitator is allowed, or available to licensed users, without admin action), so the safe reading is that no source says existing behaviour changes, and that the Teams admin center allow/block control is worth checking before December CY2026.

The cost question is mainly licensing. A Microsoft 365 Copilot licence is required, so the number of users who will start Facilitator decides the spend. Unlicensed attendees still see its output, which matters for sensitive government meetings where notes may reach people who did not ask for them.

## Risk assessment

**Data exposure**

- Learn says Facilitator data in meetings is stored as a `.loop` file in a OneDrive folder titled Meetings of the user who initiated Facilitator, and is treated as meeting transcript data. Decide who may initiate it with that location in mind.
- Learn says that if a user prompts Facilitator, all users can view that communication, and that unlicensed users can see Facilitator's notes in meetings.
- Learn lists limits on the notes: they do not inherit the meeting's sensitivity label (a label can be applied to the notes' Loop component in the Loop app or OneDrive), Prevent copy and paste and Watermarks are not applied to Facilitator's responses or notes, retention labels are not supported for cloud attachments in AI-generated notes, and the notes are not automatically collected as cloud attachments in Microsoft Purview eDiscovery. If a sensitivity label is applied to the notes outside of Teams, the note's file cannot be accessed in Teams. Learn does not say whether these limits are the same in GCC.

**Security & identity**

- Learn says only licensed users can initiate Facilitator, and that it is not supported in 1:1 chats, group chats or external chats and meetings.
- Learn lists turning on Loop experiences in Teams as a requirement for Facilitator in meetings. Microsoft has not documented GCC-specific identity or permission behaviour for Facilitator.

**Autonomy & actions**

- Facilitator responds in the meeting conversation for everyone to see, and Learn lists Word document creation in or after a meeting as generally available. Whether Planner task tracking and PowerPoint creation (public preview on Learn) will reach GCC is not stated.

**Change & support**

- Learn says the Facilitator app is allowed by default, but that if all apps are blocked for the organisation Facilitator is also blocked. Expect support questions when a tenant's app settings and the Loop setting disagree.
- Learn says AI-generated notes are controlled by Loop experiences in Teams, through the `IsCollabMeetingNotesFluidEnabled` setting, which applies to the whole tenant and cannot be set per user.

## Cost and licensing

The roadmap item states that a Microsoft 365 Copilot licence is required to use Facilitator. The Learn page for Facilitator in Teams says Facilitator is included with a Microsoft Copilot licence and subject to available capacity, and lists an eligible Microsoft 365 base licence, an eligible Microsoft Teams licence and a Microsoft Copilot licence as requirements for users. The Microsoft 365 Copilot service description describes Microsoft 365 Copilot as an add-on plan with specific licensing prerequisites.

A Facilitator-specific price, meter or capacity figure is not yet published; the Learn page gives no figure for "available capacity". Indirect costs include admin time to set the Teams app controls and communications to meeting organisers.

## Scope

The roadmap item lists GCC only, with Desktop, Mac and Web platforms, and targets December CY2026 (status In development). The roadmap item does not mention GCC High or DoD, and this briefing does not say they are excluded.

Per Learn, users need an eligible Microsoft 365 base licence, an eligible Teams licence and a Microsoft Copilot licence, and Loop experiences in Teams turned on for Facilitator in meetings. Only licensed users can initiate Facilitator; unlicensed users can see its responses and notes. Learn says Facilitator is not supported in 1:1 chats, group chats or external chats and meetings. Admins with Teams admin credentials manage the app in the Teams admin center.

## Governance guidance

### Before rollout

- Check which GCC users hold Microsoft 365 Copilot licences, since only licensed users can initiate Facilitator.
- Decide whether Facilitator should be available to everyone or a group of users, and plan the app availability setting in the Teams admin center.
- Review the documented limits (sensitivity label inheritance, retention labels, eDiscovery collection) with your compliance team before enabling it for sensitive meetings.

### At rollout

- Search Manage apps in the Teams admin center for Facilitator and check whether it appears and is allowed or blocked.
- Assign availability to the intended users and groups where the default is not right for your tenant.
- Tell meeting organisers that Facilitator prompts and responses are visible to everyone in the meeting, and that unlicensed attendees can see its notes.

### After rollout

- Check where Facilitator notes are stored (the Meetings folder in the initiating user's OneDrive). Learn says that if a sensitivity label is applied to the notes outside of Teams, the note's file cannot be accessed in Teams.
- Watch Message center and the Learn page for GCC-specific limits and for which Facilitator capabilities are available.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Facilitator app is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Learn says Facilitator is allowed by default and is also blocked if all apps are blocked. The page describes Facilitator generally and does not mention GCC.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › actions menu › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups Facilitator is available to</strong><br><small>Group</small><br><small class="controls__note">Learn names app centric management for allowing Facilitator to a group of users. Availability changes take up to 24 hours to take effect; in rare cases, they can take up to six days to reflect in the client.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Users and groups › Select to manage who this app is installed for or available to in your organization › Availability › Edit availability › Available to <a href="https://learn.microsoft.com/microsoftteams/app-centric-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -AppAssignmentType Everyone</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first two rows are the Learn-documented controls for allowing Facilitator. Blocking the app in the Teams admin center is the switch that Learn describes; if all apps are blocked for the organisation, Learn says Facilitator is also blocked. Both rows come from Learn pages that describe Facilitator generally; they do not mention GCC, so confirm each in your GCC admin center once Facilitator appears.

AI-generated notes are controlled separately through Loop experiences in Teams: Learn names the tenant-wide `IsCollabMeetingNotesFluidEnabled` setting, documented on [Admin policies for Loop components and Loop workspaces](https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration), and says it cannot be configured at the user level. Disabling it turns AI-generated notes for meetings off for every user in the organisation.

## Open questions

- Which Facilitator capabilities (notes, Q&A, document creation, Planner and PowerPoint preview features) will be available in GCC at launch? Watch the roadmap item and Message center.
- Will Facilitator be allowed by default for licensed GCC users on arrival, or does an admin have to allow it first? Microsoft has not stated this for GCC.
- Do the documented limits (no sensitivity label inheritance, no automatic eDiscovery collection of notes) apply unchanged in GCC? Watch the Facilitator page on Learn.
- What does "subject to available capacity" mean for Facilitator, and is there any Facilitator-specific meter? Watch the Learn licensing section.

<!-- rationale
risk: Medium. Facilitator writes shared meeting notes to a .loop file in the initiating user's OneDrive, and Learn lists gaps for those notes (no sensitivity label inheritance, no automatic eDiscovery collection); Learn does not yet describe GCC.
cost: Medium. The roadmap item says a Microsoft 365 Copilot licence is required, and the service description calls Microsoft 365 Copilot an add-on plan; a Facilitator-specific price or meter is not yet published.
impact: Medium. Licensed users start Facilitator, but Learn says unlicensed users in the same meeting can see its notes and responses, so everyone who attends affected meetings will notice it.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls; Governance guidance: At rollout / admin-path: Assign Facilitator availability to intended users and groups through Teams admin center > Teams apps > Manage apps > Facilitator > Users and groups > Select to manage who this app is installed for or available to in your organization > Availability > Edit availability > Available to. | Found: If your organization isn't migrated to unified app management, allow apps and Copilot agents in Teams admin center and under the Integrated apps page in Microsoft 365 admin center. | Fix: Keep the printed Teams admin center path, whose labels and order are documented. Append to controls[1].note and the At rollout availability instruction: 'For tenants not migrated to unified app management, also allow the app under Integrated apps in the Microsoft 365 admin center; migrated tenants can allow it in either admin center.' The prerequisite is documented at https://learn.microsoft.com/microsoftteams/app-centric-management#add-or-modify-app-availability-for-users. | Source: https://learn.microsoft.com/microsoftteams/app-centric-management
-->
