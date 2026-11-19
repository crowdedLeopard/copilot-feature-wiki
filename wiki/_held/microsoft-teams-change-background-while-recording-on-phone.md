---
title: "Microsoft Teams: change the background while recording a video clip on iPhone"
slug: "microsoft-teams-change-background-while-recording-on-phone"
roadmapId: 380852
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams on iOS lets users blur or replace their background while recording a video clip to share in chat or a channel. It is launched, and a messaging policy setting governs sending video messages."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["iOS"]
targetDate: "May CY2024"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and the Learn pages read name no licence or meter for this feature."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["teams","mobile","channels","policy","powershell","admin-center","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 380852"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=380852"
    kind: "roadmap"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "learn"
  - title: "Meeting policy settings for audio & video"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-audio-and-video"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can send video messages in chats and channels"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Messaging policies > policy > Video messages"
      docs: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMessagingPolicy -Identity <policy name> -AllowVideoMessages $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps"
    note: "Learn describes sending video messages, and does not name video clips or the background option. Confirm that the setting covers clips on iOS."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-19T01:58:21"
changes:
  - date: "2026-11-19"
    note: "New briefing: Launched iOS option to blur or replace the background while recording a Teams video clip, and the Video messages policy that governs sending clips."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "13fb87f12c481ddc015633826c211daf"
---

## What's changing

Users of Microsoft Teams on iOS can now change their background while they record a video clip on their phone. The roadmap item says they can switch the background to any picture they want or make it blurry, and then share the clip with coworkers in a Teams chat or channel.

Microsoft Learn has no page for this background option. It does describe the wider capability: Microsoft's Government Channel release notes describe Video clip as a feature that lets a user "record, review, send, and view short-form video in Teams chat from desktop and mobile". Learn's messaging policy page calls the matching admin setting **Video messages**. What follows about behaviour beyond the roadmap description therefore comes from those pages, and the roadmap item does not use the name "Video clip".

The roadmap record gives the status as Launched, the target date as May CY2024 and the platform as iOS. The release phase is General Availability, and the clouds listed are Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

## Why it matters

For most tenants this is a small change in what a user can send. The clip is a video of a person, and a custom picture used as a background is chosen by the user. Teams' meeting policy page says Teams does not screen the images users upload for meeting backgrounds, so the wiki's view is that internal guidance on appropriate background images is worth having.

Microsoft has not stated what happens on arrival, so base your plan on no source saying that existing behaviour changes. The control to know about is the Video messages setting in messaging policies: it decides whether users can send video messages in chats and channels, whichever background they use.

## Risk assessment

**Data exposure**
- A clip recorded on a phone can show the user's surroundings, or colleagues behind them, and is then shared in a chat or channel. Blurring or replacing the background is the user's own choice. The Video messages setting in the messaging policy decides whether users can send video messages in chats and channels at all.

**Security & identity**
- No change to identity or sign-in is described in the roadmap item or on Learn. A replacement background picture is chosen by the user, and Teams' meeting policy page says Teams does not screen uploaded background images in meetings. Whether any equivalent screening or policy applies to clips is an open question.

**Autonomy & actions**
- No change: the user records and sends the clip. Nothing in the roadmap description acts on its own.

**Change & support**
- Users on iOS will see a new option while recording and may ask the service desk about it. Learn's Video messages setting is a messaging policy setting assigned per user, so a user with a different policy may see different behaviour from a colleague.

## Cost and licensing

The roadmap item and the Learn pages read name no licence, add-on or meter for changing the background while recording a clip. A licence for this feature is not yet published, so no extra cost should be assumed or ruled out from these sources.

The cost the sources show is indirect: admin time to review the Video messages messaging policy setting and to brief users. The Learn page for the Video messages setting names no licence requirement either.

## Scope

The roadmap record lists the platform as iOS only, so this option is for users of Teams on iPhone. The clouds listed are Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the release phase is General Availability. The status is Launched with a target date of May CY2024.

The messaging policy page says users in your organisation automatically get the global policy unless you create and assign a custom policy. That policy decides whether a user can send video messages in chats and channels. Microsoft has not stated whether the background option is on by default.

## Governance guidance

### Before rollout
- Check which messaging policies your users hold, and whether the **Video messages** setting is on in each (Teams admin center > Messaging policies).
- Decide whether iOS users should be able to send video clips in chats and channels, and turn the setting off in the policies of any group that should not.
- Agree internal guidance on which background pictures are appropriate, because Teams does not screen the images users choose in meetings.

### At rollout
- Tell iPhone users that they can blur or replace their background while recording a clip.
- Brief the service desk on the Video messages setting, so they can tell a policy block from a missing feature.

### After rollout
- Ask a pilot group on iOS whether the background option appears while recording, and whether it follows their messaging policy.
- Revisit the Learn pages for messaging policies and meeting policies for any statement on how video effects apply to clips.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can send video messages in chats and channels</strong><br><small>User</small><br><small class="controls__note">Learn describes sending video messages, and does not name video clips or the background option. Confirm that the setting covers clips on iOS.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Messaging policies › policy › Video messages <a href="https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMessagingPolicy -Identity &lt;policy name&gt; -AllowVideoMessages $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls table covers sending video messages. The setting belongs to messaging policies, which are assigned per user; a user can be assigned only one messaging policy at a time.

Microsoft Learn does not describe a setting for the background option itself. The meeting policy setting for video effects is described for meetings, and whether it affects clips is an open question. Do not treat it as a control over this feature.

## Open questions

- Is the background option on by default for iOS users, and does Microsoft plan to change that? Watch the Teams release notes and the roadmap item.
- Does the Video messages messaging policy setting cover clips recorded with a changed background? The roadmap item does not use that name, so confirm with a test user.
- Does the meeting policy setting for video effects (**Participants can use video effects**) or a customisation policy affect backgrounds in clips? Watch the Learn pages for meeting policies.
- Which licence, if any, does the background option need? Watch the Teams service description.

<!-- rationale
risk: Low. It is a camera effect on a clip a user chooses to record and share in Teams chat or a channel, which the Video messages messaging policy setting already covers.
cost: Low. The only cost the sources show is admin time to check the messaging policy and tell users; no licence or meter for this feature is published.
impact: Low. Only users who record video clips in Teams on iOS notice it, and the record lists no other platform.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Open questions / record: The roadmap item does not use the name video clip. | Found: You can record a video clip with your phone camera and switch your background to any picture you want or make it blurry. | Fix: Remove 'and the roadmap item does not use the name "Video clip"' from What's changing and remove 'The roadmap item does not use that name, so' from Open questions. The roadmap description explicitly says 'video clip'.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: Teams admin center > Messaging policies > policy > Video messages is the path to edit the setting. | Found: Select the policy by clicking to the left of the policy name, and then select Edit. | Fix: Replace controls[0].ui.path and the rendered table path with 'Messaging policies > policy > Edit > Video messages'. The cited page requires selecting Edit after selecting the policy. | Source: https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams
-->
