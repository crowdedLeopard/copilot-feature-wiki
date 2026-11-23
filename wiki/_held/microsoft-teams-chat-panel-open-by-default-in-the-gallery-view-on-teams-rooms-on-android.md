---
title: "Microsoft Teams Rooms on Android: chat panel opens by default in Gallery view"
slug: "microsoft-teams-chat-panel-open-by-default-in-the-gallery-view-on-teams-rooms-on-android"
roadmapId: 561604
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "On Teams Rooms on Android, the meeting chat panel now opens by default in Gallery and Large Gallery. Room users can close it with one touch; admins change the default with a local device setting. No action is required."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Teams and Surface Devices"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Teams Rooms licences page lists Meeting chat as a Teams Rooms Pro feature and not a Teams Rooms Basic one. The release note names no separate licence or meter for this change."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 561604"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561604"
    kind: "roadmap"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
videos: []
related: ["microsoft-teams-modernized-gallery-view-in-teams-rooms-on-android","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on"]
controls:
  - governs: "Default chat panel behaviour in Gallery view on Teams Rooms on Android"
    scope: "other"
    ui: null
    api: null
    note: "The release notes say IT admins change it with a local device setting. No setting label, remote path or API is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: default chat panel in Gallery view on Teams Rooms on Android, launched June 2026."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 31 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 31
  confirmed: 27
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "42803a512a92cfb9d3f08a8f1e38eb63"
---

## What's changing

On Teams Rooms on Android, the chat panel now opens by default when a meeting uses the Gallery or Large Gallery layout, so participants in the room see ongoing meeting chat as soon as they join. The roadmap item describes this as the chat panel opening by default in gallery view, with admins able to configure the default device behaviour and users able to close the panel in one tap.

Microsoft's release notes for Teams Rooms on Android list the change under build 1449/1.0.96.2026129709 (June 2026) as "Open chat panel by default on Gallery view". They say users can open or close the panel with one touch using the chat button, which has moved from the view switcher to the meeting utility bar, and that IT admins can change the default using a local device setting.

The roadmap record gives the status as Launched, with a target of June CY2026, release phase General Availability, and clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The release notes do not name the local device setting's label, and Microsoft Learn's settings list for Teams Rooms on Android does not yet cover it (see Governance controls).

## Why it matters

Room devices are shared, so a default that opens the chat panel changes what everyone in the room sees at the start of every Gallery or Large Gallery meeting, whether or not they asked for it. Because the release notes describe this as the new default, rooms updated to the June 2026 build or later start showing chat without any admin action.

Expect questions from room users who notice the changed layout, and decide room by room whether an open panel suits the room. Where it does not, the release notes point to a local device setting, but Microsoft Learn does not yet say where in the device settings it sits or whether it can be set remotely.

## Risk assessment

**Data exposure**
- Chat messages from the meeting appear in the panel when it is open, so a room that joins a meeting with sensitive chat shows that chat to people in the room by default. Users can close the panel with one touch, and the release notes document a local device setting to change the default.

**Security & identity**
- No change is described to sign-in, permissions or who can join a meeting. The release notes describe a change to the default state of an existing chat panel.

**Autonomy & actions**
- No change: the release notes describe no agent or automated action. The chat button in the meeting utility bar is the one control users need.

**Change & support**
- The chat button moved from the view switcher to the meeting utility bar, so room users who looked for it in the view switcher may report it as missing.

## Cost and licensing

The Teams Rooms licences page lists **Meeting chat** as available with Microsoft Teams Rooms Pro and not with Microsoft Teams Rooms Basic ([Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing)). The roadmap record and the release note name no other licence for this change.

No separate meter or charge for this change is published on the Teams Rooms licences page at the time of writing (November 2026). The indirect cost is admin time to choose the default and to brief room users on the moved chat button.

## Scope

The change applies to Teams Rooms on Android devices in the Gallery and Large Gallery layouts, according to the June 2026 release notes. The roadmap record lists the platforms as Android and Teams and Surface Devices, and the clouds as Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.

The release arrived with Teams Rooms on Android app build 1449/1.0.96.2026129709 (June 2026). Microsoft Learn does not describe a role needed to change the local device setting, or any other prerequisite.

## Governance guidance

### Before rollout
- Check which Teams Rooms on Android devices run build 1449/1.0.96.2026129709 or later, because that is the release the June 2026 notes list for this change.
- Decide which rooms should keep the chat panel open by default and which should not, for example rooms where meeting chat is unlikely to suit the people present.
- Tell room users that the chat button now sits in the meeting utility bar and that one touch closes the panel.

### At rollout
- Join a test meeting in a Gallery layout from a pilot room and confirm the panel opens, then close it with the chat button.
- Change the local device setting on any room where the open panel is not wanted, then repeat the test meeting to confirm the new default.

### After rollout
- Ask room users whether the open panel helps or distracts, and adjust the device setting for the rooms that report problems.
- Check the Teams Rooms on Android settings documentation again for the full settings list, which Microsoft's Learn page says is coming soon.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default chat panel behaviour in Gallery view on Teams Rooms on Android</strong><br><small class="controls__note">The release notes say IT admins change it with a local device setting. No setting label, remote path or API is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The only documented control is the local device setting named in the release notes. Microsoft Learn gives no label for it, and its Android settings page says the full settings list documentation is coming soon, so the table shows no admin-centre path or API. The Teams Rooms Pro Management portal's settings page lists "Open Chat by Default" for Teams Rooms on Windows only; do not assume it applies to Android.

No role requirement for the local device setting is documented.

## Open questions

- What is the exact name and location of the local device setting that controls the default chat panel on Teams Rooms on Android? Watch the Teams Rooms on Android settings page on Microsoft Learn.
- Will Teams Rooms Pro Management portal or Teams admin center settings gain a remote option to set this default for many Android rooms at once? Watch the Pro Management portal device settings page.
- Does the chat panel default also apply to rooms using other licences than Teams Rooms Pro? Watch the Teams Rooms licences page.

<!-- rationale
risk: Low. The change only alters whether the chat panel is open when a meeting starts on a room device; users can close it with one touch, and Microsoft's notes document a local device setting to change the default.
cost: Low. The only cost the sources show is admin time to decide on the default and tell room users. The Teams Rooms licence comparison lists Meeting chat as a Teams Rooms Pro feature, and no separate meter for this change is published.
impact: Medium. People who use Teams Rooms on Android devices see a different starting layout in every Gallery or Large Gallery meeting, because the chat panel is now open when they join.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope; Governance controls / absence: Microsoft Learn documents no role or administrative access requirement for changing the local device setting. | Found: Teams Android devices include an administrative account to access device settings, the local web server (if installed), and any OEM specific settings. | Fix: Replace both role-absence statements with: 'Teams Android devices use a local device administrator account to access device settings; obtain its initial username and password from the device manufacturer.' Cite https://learn.microsoft.com/microsoftteams/rooms/security#software-security. | Source: https://learn.microsoft.com/microsoftteams/rooms/security#software-security
- [contradicted, blocker] Scope / absence: Microsoft Learn describes no other prerequisite relevant to managing this setting. | Found: Management of settings related to features in this release and future releases is only available within the Teams Rooms Pro management portal | Fix: Remove 'or any other prerequisite'. If retaining a statement about remote management, write: 'The June 2026 release notes say portal management of settings for this release requires Teams Admin Agent 1.0.0.202606082157 or greater.' The immediately following sentence at https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note?tabs=Android states this version requirement. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note?tabs=Android
- [contradicted, blocker] Governance controls; Why it matters; Open questions: remote option / absence: The local device setting is the only documented control and Microsoft Learn has not said whether the default can be managed remotely. | Found: Management of settings related to features in this release and future releases is only available within the Teams Rooms Pro management portal | Fix: Replace the 'only documented control' and 'whether it can be set remotely' statements with: 'The June 2026 release notes also say settings for this release are managed through the Teams Rooms Pro management portal; the Android settings list does not yet give this setting's label.' Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note?tabs=Android. Replace the remote-option question with: 'What is the exact Android chat-default setting label in the Pro Management portal? Watch the device settings list.' Do not copy the Windows checkbox label into an Android path. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note?tabs=Android
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: An impact rating of medium fits a change to default behaviour. | Found: impact: "medium"; rationale: "the chat panel is now open when they join". The standard defines high impact as "most users, or a change to default behaviour". | Fix: Set impact to 'high' and replace the rationale with: 'High. This changes the default starting layout for people using Teams Rooms on Android in Gallery and Large Gallery meetings.'
-->
