---
title: "Microsoft Teams Rooms on Android: modernised Gallery view prioritises video on stage"
slug: "microsoft-teams-modernized-gallery-view-in-teams-rooms-on-android"
roadmapId: 567468
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android is rolling out a redesigned Gallery view that puts video participants on stage by default. Users can hide self-preview; admins set defaults in the Pro Management portal. Microsoft says no action is required."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Teams and Surface Devices"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams Rooms on Android devices require a Teams Rooms licence; Basic, Pro and valid legacy Teams Rooms licences are supported. The release notes entry for this feature carries no Pro marker, and the licences page lists the Teams video gallery under Basic and Pro. Remote configuration in the Pro Management portal is listed as Pro. No separate price is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","pro-management-portal","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 567468"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567468"
    kind: "roadmap"
  - title: "MC1446797: (Updated) Microsoft Teams: Modernized Gallery view in Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1446797"
    kind: "message-center"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management"
    kind: "learn"
  - title: "Transitioning Teams Android Device Management from Teams Admin Center to the Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/aboutunifieddevicemanagement-pmp1"
    kind: "learn"
  - title: "Enrolling a device into the Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/enroll-a-device"
    kind: "learn"
videos: []
related: ["microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management","microsoft-teams-breakout-room-support-on-teams-rooms-on-android"]
controls:
  - governs: "Default Gallery view behaviour on a Teams Rooms on Android device"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms / Phones > device > Settings > settings category > setting"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    api: null
    note: "Needs Rooms Management permissions and a signed-in device. Gallery category and label not yet published. The overview excludes DoD; the transition page lists Android device settings in DoD as completed in October 2026."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-20T22:38:45"
changes:
  - date: "2026-11-21"
    note: "New briefing: the modernised Gallery view for Teams Rooms on Android, with its rollout window, licensing basis and the Pro Management portal route to set the default."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: the audio-participant wording now follows MC1446797, a licensing question and a monitoring step were removed, and the Pro Management cloud and Settings-category notes were added."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the licence statement to say Teams Rooms Basic, Pro and valid legacy licences are supported, extended the portal path, and updated the DoD note."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after the independent check: removed the sentence tying the Gallery default to a Pro licence, raised impact to high, and added the enrolment page as a source."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-28"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a1517b23bdb8f6d61d7a9a848c95df09"
---

## What's changing

Microsoft is replacing the Gallery view on Teams Rooms on Android devices with a modernised one that gives priority to video participants on the meeting stage. The roadmap item states that participant tiles use consistent aspect ratios and move less on stage. Microsoft's notice MC1446797 gives the ratios as 16:9, 4:3 and 1:1, and says the change aligns the experience more closely with Teams Rooms on Windows.

According to MC1446797, video prioritisation is on by default, and audio participants are deprioritised while it is enabled so that more video participants fit on screen. Meeting participants can hide the room self-preview video for a meeting, or show audio and video participants equally. Admins can choose the default behaviour through local device settings and the Teams Rooms Pro Management portal.

The roadmap item is **Rolling out** with a target date of August CY2026 and lists General Availability for Worldwide, GCC, GCC High and DoD. MC1446797 (updated 5 October 2026) gives the schedule: Worldwide and GCC from mid-August 2026, expected to complete by late October 2026 (previously mid-August); GCC High and DoD from early September 2026, expected to complete in late October 2026 (previously late September). The Teams Rooms release notes list the feature under Android build 1449/1.0.96.2026249711 (September 2026) and note that a feature can reach a given device make and model later than Microsoft's release.

## Why it matters

Microsoft's notice says organisations using Teams Rooms on Android devices are affected, and it describes the video-prioritised layout as the default, so room users will see a different stage layout without any admin action. The wiki's view is that this is a communication and support task rather than a risk task: expect questions from people in rooms with many audio-only participants, who will be shown less prominently while video prioritisation is on.

Microsoft's notice says no action is required before the rollout and recommends telling users if your organisation provides training or adoption materials. The default can be set by an administrator, so decide whether the delivered default suits your rooms before users form habits around it.

## Risk assessment

**Data exposure**
- Neither the roadmap item nor MC1446797 describes new data collection or storage, and the notice states "No compliance considerations identified." Hiding the self-preview is described as a display choice for a meeting.

**Security & identity**
- No identity, permission or sign-in change is described. Settings changes from the Pro Management portal need Rooms Management permissions under the portal's role-based access control, and only apply to signed-in devices.

**Autonomy & actions**
- No autonomous behaviour is described: the feature changes how participants are arranged and lets users choose between two display modes.

**Change & support**
- Audio participants are deprioritised while video prioritisation is on, helping display more video participants on screen. Users can switch to equal display, and the default can be set by an admin.
- Applying a setting with Apply Now in the portal restarts the device, which interrupts a room. Schedule Later applies the change in the nightly maintenance window.

## Cost and licensing

Teams Rooms on Android devices require a Teams Rooms licence; Basic, Pro and valid legacy Teams Rooms licences are supported, per the Teams Rooms licences page. That page lists "Teams video gallery with multiple layout options" under both Basic and Pro. In the release notes, features marked with the Pro icon are only available with a Teams Rooms Pro licence, and the entry for the modernised Gallery view carries no such marker.

The licences page lists "Remote configuration" as a Pro feature. No meter, price or feature-specific licence for this feature is published at the time of writing (November 2026). The only indirect cost the sources show is admin time and user communication.

## Scope

**Who and what:** Teams Rooms on Android devices; the roadmap item lists platforms as Android and Teams and Surface Devices, and the notice names organisations using Teams Rooms on Android devices as affected.

**Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, all at General Availability.

**Rollout:** see the dates in What's changing. A feature can reach a given device make and model after Microsoft's release, so confirm with the device manufacturer if a room does not show it.

**Admin prerequisites:** Rooms Management permissions in the Pro Management portal to change device settings there, and a signed-in device for the change to apply.

## Governance guidance

### Before rollout
- Tell room users and floor champions about the new layout and the self-preview and equal-display options, as Microsoft's notice recommends if you run training or adoption materials.
- Confirm that the Teams Rooms on Android devices you want to manage centrally are enrolled in the Pro Management portal, licensed for remote configuration and signed in.
- Decide whether to keep the delivered video-prioritised default or set another default, and who in your team holds Rooms Management permissions.

### At rollout
- Pilot in one room and compare its app version with build 1449/1.0.96.2026249711, where the release notes list the feature.
- Apply any default change from the portal with Schedule Later so the restart falls in the nightly maintenance window, not during meetings.

### After rollout
- Ask users in rooms with many audio-only attendees whether the default suits them, and adjust the default if it does not.
- Recheck the Android settings list in Microsoft Learn for the Gallery setting once it is published.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default Gallery view behaviour on a Teams Rooms on Android device</strong><br><small class="controls__note">Needs Rooms Management permissions and a signed-in device. Gallery category and label not yet published. The overview excludes DoD; the transition page lists Android device settings in DoD as completed in October 2026.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms / Phones › device › Settings › settings category › setting <a href="https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Gallery default is a device setting reached through the Pro Management portal. Microsoft Learn's Android settings list there says its full list is coming soon, so the name of the Gallery setting and its place among the settings categories (About, Account, Meetings, Device, Network) are not yet documented. The row above therefore gives the page's generic route, Settings tab, then a settings category and the setting's form field.

To change settings for many devices at once, the same page describes Settings > Device Settings > Jobs, and reusable templates under the Templates (Preview) tab. Settings changed directly on a device are synchronised back to the portal. The release notes also name local device settings as a way to choose the default; Learn does not document a path for that setting at the time of writing (November 2026). No API or PowerShell call for portal device settings is documented either. Each user's hide-self-preview and equal-display choices are made in the meeting, not by an admin control.

## Open questions

- What is the Gallery view setting called, and where does it sit in the Pro Management portal and on the device? Watch the Android tab of the portal's settings list on Microsoft Learn.
- Is any API, PowerShell cmdlet or Graph call documented for setting device defaults in the portal, so that it can be scripted across many rooms?
- The notice expected completion by late October 2026, but the roadmap still shows Rolling out: when will it complete for each cloud? Watch MC1446797 in Message center.

<!-- rationale
risk: Low. This changes how participants are laid out on a room display; Microsoft's notice lists no compliance considerations and says no action is required before the rollout.
cost: Low. The only cost the sources show is admin time and user communication; the Teams Rooms licences page lists the Teams video gallery under both Basic and Pro, and no feature-specific price is published.
impact: High. Room participants see a different default stage layout: video participants are prioritised without administrator action.
-->
