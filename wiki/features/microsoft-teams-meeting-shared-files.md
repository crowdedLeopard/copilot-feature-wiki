---
title: "Microsoft Teams: Meeting Shared Files for meeting participants and Facilitator"
slug: "microsoft-teams-meeting-shared-files"
roadmapId: 570427
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Planned for January CY2027: users add files and links to a Teams meeting, which are shared with all participants and used by Facilitator for grounding. Default and controls are not yet documented."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Facilitator page says Facilitator is included with a Microsoft Copilot license and subject to available capacity. Licensing specific to Meeting Shared Files is not yet published."
audiences: ["m365-admin","service-owner","security"]
tags: ["teams","facilitator","m365-copilot","knowledge-grounding","microsoft-365-files","sharing","oversharing","meeting-policy"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Meeting Shared Files"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570427"
    kind: "roadmap"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Use app centric management to manage access to apps"
    url: "https://learn.microsoft.com/microsoftteams/app-centric-management"
    kind: "learn"
videos: []
related: ["microsoft-teams-facilitator-in-gcc","teams-ai-generated-meeting-memory","meeting-policy","microsoft-teams-default-meeting-templates","meeting-transcripts"]
controls:
  - governs: "Whether Facilitator is allowed or blocked for the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Governs Facilitator, not Meeting Shared Files. The reference calls IsBlocked the tenant app state, but its Example 3 describes $true as unblocking; confirm the intended state before using automation."
  - governs: "A tenant switch for Meeting Shared Files"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026); the feature is still In development."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-21"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-20"
    note: "New briefing: Meeting Shared Files is known only from the roadmap item (target January CY2027); Facilitator's allow or block control is the only documented lever."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: users, not organisers, are named as adding files; removed a visibility claim; Facilitator availability is now an alternative lever, with app-centric management wording and the IsBlocked caveat."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 65 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 64
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "99d392c801e87cc0a928614a837b6bc2"
---

## What's changing

Meeting Shared Files lets users add files and links to a Teams meeting so they are easy to reach and are shared automatically with all meeting participants. The roadmap item also says AI in the meeting, such as the Facilitator agent, uses these files for targeted grounding (answering from a chosen set of content) to answer questions and enhance skill functionality.

Microsoft Learn does not describe Meeting Shared Files yet, so what follows about its behaviour is the roadmap's description. Which file locations are supported, how sharing is granted, whether sensitivity labels or external participants are handled, and where users add the files are not stated at the time of writing (November 2026).

The roadmap item lists the status as In development, with a target of January CY2027. Release phases are General Availability and Targeted Release, platforms are Desktop, Mac and Web, and the cloud is Worldwide (Standard Multi-Tenant). These dates are targets, not commitments.

Facilitator itself is documented. Microsoft's Facilitator page describes it as an agent that acts like an assistant in meetings: if a user prompts Facilitator, all users can view that communication and Facilitator's response in the meeting conversation.

## Why it matters

This feature puts user-added content in front of every participant and in front of an AI agent whose answers everyone in the meeting can read. The roadmap says users add the content; it does not identify which meeting roles can do so.

Microsoft has not stated what happens on arrival, so plan on the basis that no source says existing behaviour changes, and watch the roadmap item and Message center for the rollout notice. Decide now who in your organisation hosts meetings with sensitive material, and what you will tell them before the target month.

## Risk assessment

**Data exposure**
- The roadmap says added files and links are shared automatically with all meeting participants. Microsoft has not said whether this grants access to the underlying file, or how it treats external, guest or anonymous participants. Confirm this before telling organisers it is safe for confidential files.
- Facilitator's Q&A responses are visible to everyone in the meeting, per the Facilitator page. An answer grounded on a shared file could therefore show its content to all participants.
- The Facilitator page says it is currently not supported in external chats and meetings. Whether Meeting Shared Files is limited the same way is not stated.

**Security & identity**
- Microsoft Learn does not say which identity Facilitator uses to read the files, or whether sensitivity labels or retention labels on a file are respected. Treat both as items to confirm.
- The Facilitator page says the meeting settings Prevent copy and paste and Watermarks are not applied to Facilitator's responses or AI-generated notes, so a shared file's content can reach participants through an answer without those meeting protections.

**Autonomy & actions**
- The roadmap describes Facilitator using the files to answer questions and to enhance skill functionality. Microsoft has not said which skills read the files or whether any write actions result.

**Change & support**
- Users will ask where files appear and who can see them. Microsoft has not published user guidance for the feature yet, so expect questions to the help desk once it rolls out.

## Cost and licensing

Microsoft's Facilitator page says Facilitator is included with a Microsoft Copilot license and subject to available capacity. Its prerequisites are an eligible Microsoft 365 base licence, an eligible Teams licence and a Microsoft Copilot licence, and the page says only licensed users can initiate Facilitator; unlicensed users can see others' prompts and Facilitator's responses.

A price, meter or licence specific to Meeting Shared Files is not yet published. The roadmap item names Microsoft Teams and Microsoft Copilot (Microsoft 365) as the products. The known indirect cost is admin and communication time for users and organisers.

## Scope

The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud only, with Desktop, Mac and Web as platforms. It lists no other clouds; the item does not state whether the feature will be offered elsewhere.

The roadmap describes users adding files and links, meeting participants receiving them, and Facilitator in the meeting using them. The Facilitator page says users need the Facilitator licence prerequisites above, and Loop experiences in Teams for Facilitator in meetings turned on, to use Facilitator in a meeting. Whether Meeting Shared Files itself has those prerequisites is not stated.

## Governance guidance

### Before rollout
- Confirm with your Microsoft contact or in Message center how files shared to a meeting are granted to participants, and whether external participants receive them.
- Check whether Facilitator is allowed in the Teams admin center, because it is allowed by default, and decide whether the groups that handle sensitive meetings should keep it.
- Brief meeting organisers that anything they add to a meeting is intended to reach all participants.

### At rollout
- Watch the roadmap item and Message center for the rollout notice and any admin setting that ships with the feature.
- Pilot with a small group of Copilot-licensed organisers and test who can open a shared file, including an invited guest.

### After rollout
- Review support requests about files visible to the wrong participants and decide whether to restrict Facilitator for those groups.
- Re-read the Facilitator and meeting policy pages for a setting that governs the feature, and add it to your runbook if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Facilitator is allowed or blocked for the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Governs Facilitator, not Meeting Shared Files. The reference calls IsBlocked the tenant app state, but its Example 3 describes $true as unblocking; confirm the intended state before using automation.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A tenant switch for Meeting Shared Files</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026); the feature is still In development.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for Meeting Shared Files itself is documented on Microsoft Learn at the time of writing (November 2026). The table documents Facilitator's availability as an alternative lever, and it governs whether Facilitator is available, not whether users can add files to a meeting.

Per the Facilitator page, Facilitator is allowed by default, and if all apps are blocked for the organisation Facilitator is also blocked. Facilitator access for groups can be managed with app-centric management. In tenants migrated to app-centric management, app permission policies are no longer available. Whether blocking Facilitator also stops it using Meeting Shared Files is not stated.

## Open questions

- Is Meeting Shared Files on by default, and will an admin setting or meeting policy control it? Watch Message center and the Teams admin center documentation.
- How is access to a shared file granted to participants, and are external, guest or anonymous participants included?
- Do sensitivity labels, retention labels and Restricted Content Discovery affect files that Facilitator uses for grounding?
- Is any licence beyond the Facilitator prerequisites needed to add or see shared files?

<!-- rationale
risk: Medium. The roadmap says content added to a meeting is shared automatically with all participants and used by AI in the meeting, and Microsoft Learn documents no setting for the feature yet.
cost: Low. The only documented cost is admin time; Facilitator is included with a Microsoft Copilot licence, and licensing specific to Meeting Shared Files is not yet published.
impact: Medium. Users who add files and every participant who receives them notice it, and Facilitator answers in the meeting for everyone to see.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing.notes; Cost and licensing / licensing: The licensing model is included for a new option within Teams, with feature-specific licensing unpublished. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Keep licensing.model as 'included'. Add to licensing.notes and Cost and licensing: 'Except for joining Teams meetings anonymously, each user in the organisation must have a Teams license before using Teams, according to Manage Teams licenses.' Add https://learn.microsoft.com/microsoftteams/user-access to sources. Retain the distinct Facilitator prerequisites and feature-specific licensing gap. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, minor] Governance guidance: After rollout; controls[0] / consistency: The checklist recommends restricting Facilitator for groups, but no group-availability control appears in the controls table. | Found: After rollout: 'decide whether to restrict Facilitator for those groups.' controls[0]: 'Whether Facilitator is allowed or blocked for the organisation'; scope: 'tenant'. | Fix: Replace the After rollout bullet with: 'Review support requests about files visible to the wrong participants and decide whether to allow or block Facilitator for the organisation.' This uses the existing tenant-level row without adding a control.
-->
