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
impact: "high"
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
  - title: "Release notes for Microsoft Teams Rooms (Android)"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note?tabs=Android"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Microsoft Teams Rooms on Windows and Teams Android device security"
    url: "https://learn.microsoft.com/microsoftteams/rooms/security#software-security"
    kind: "learn"
videos: []
related: ["microsoft-teams-modernized-gallery-view-in-teams-rooms-on-android","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on"]
controls:
  - governs: "Default chat panel behaviour in Gallery view on Teams Rooms on Android"
    scope: "other"
    ui:
      surface: "Microsoft Teams Rooms Pro Management portal"
      path: "Rooms > device > Settings"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    api: null
    note: "This path reaches the device settings page; the Android chat-default label is not yet documented. Needs a signed-in device and Rooms Management permissions, and Teams Admin Agent 1.0.0.202606082157 or greater (June 2026 release notes)."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-02T22:56:59"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: default chat panel in Gallery view on Teams Rooms on Android, launched June 2026."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 31 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: replaced the role and prerequisite absences and the 'only documented control' statement with what Learn says, and raised impact to high."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 36 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: the controls table now gives the Teams Rooms Pro Management portal route to device settings; Android chat-default label still not documented."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 37 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 37
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5f531af3b975e3acfd2d137a068b790e"
---

## What's changing

On Teams Rooms on Android, the chat panel now opens by default when a meeting uses the Gallery or Large Gallery layout, so participants in the room see ongoing meeting chat as soon as they join. The roadmap item describes this as the chat panel opening by default in gallery view, with admins able to configure the default device behaviour and users able to close the panel in one tap.

Microsoft's release notes for Teams Rooms on Android list the change under build 1449/1.0.96.2026129709 (June 2026) as "Open chat panel by default on Gallery view". They say users can open or close the panel with one touch using the chat button, which has moved from the view switcher to the meeting utility bar, and that IT admins can change the default using a local device setting.

The roadmap record gives the status as Launched, with a target of June CY2026, release phase General Availability, and clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The release notes do not name the local device setting's label, and Microsoft Learn's settings list for Teams Rooms on Android does not yet cover it (see Governance controls).

## Why it matters

Room devices are shared, so a default that opens the chat panel changes what everyone in the room sees at the start of every Gallery or Large Gallery meeting, whether or not they asked for it. Because the release notes describe this as the new default, rooms updated to the June 2026 build or later start showing chat without any admin action.

Expect questions from room users who notice the changed layout, and decide room by room whether an open panel suits the room. Where it does not, the release notes point to a local device setting. The June 2026 release notes also say settings for this release are managed through the Teams Rooms Pro management portal; the Android settings list does not yet give this setting's label.

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

The release arrived with Teams Rooms on Android app build 1449/1.0.96.2026129709 (June 2026). Teams Android devices use a local device administrator account to access device settings; obtain its initial username and password from the device manufacturer. The June 2026 release notes say portal management of settings for this release requires Teams Admin Agent 1.0.0.202606082157 or greater.

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
<tr><td data-label="Control"><strong>Default chat panel behaviour in Gallery view on Teams Rooms on Android</strong><br><small class="controls__note">This path reaches the device settings page; the Android chat-default label is not yet documented. Needs a signed-in device and Rooms Management permissions, and Teams Admin Agent 1.0.0.202606082157 or greater (June 2026 release notes).</small></td><td data-label="Admin UI"><strong>Microsoft Teams Rooms Pro Management portal</strong><br>Rooms › device › Settings <a href="https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The June 2026 release notes name a local device setting for this default, and also say settings for this release are managed through the Teams Rooms Pro management portal. The table gives the portal's route to a device's settings page; the Android settings list does not yet give this setting's label, and its Android settings page says the full settings list documentation is coming soon. Microsoft Learn documents no API for this setting at the time of writing (November 2026). The Teams Rooms Pro Management portal's settings page lists "Open Chat by Default" for Teams Rooms on Windows only; do not assume it applies to Android.

Teams Android devices use a local device administrator account to access device settings; obtain its initial username and password from the device manufacturer.

## Open questions

- What is the exact name and location of the local device setting that controls the default chat panel on Teams Rooms on Android? Watch the Teams Rooms on Android settings page on Microsoft Learn.
- What is the exact Android chat-default setting label in the Pro Management portal? Watch the device settings list.
- Does the chat panel default also apply to rooms using other licences than Teams Rooms Pro? Watch the Teams Rooms licences page.

<!-- rationale
risk: Low. The change only alters whether the chat panel is open when a meeting starts on a room device; users can close it with one touch, and Microsoft's notes document a local device setting to change the default.
cost: Low. The only cost the sources show is admin time to decide on the default and tell room users. The Teams Rooms licence comparison lists Meeting chat as a Teams Rooms Pro feature, and no separate meter for this change is published.
impact: High. This changes the default starting layout for people using Teams Rooms on Android in Gallery and Large Gallery meetings.
-->
