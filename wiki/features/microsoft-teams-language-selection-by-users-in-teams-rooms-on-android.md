---
title: "Microsoft Teams Rooms on Android: room users can change the app language"
slug: "microsoft-teams-language-selection-by-users-in-teams-rooms-on-android"
roadmapId: 565425
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Room users can pick a Teams app language from the console of Teams Rooms on Android. The choice lasts until the app restarts. Microsoft says no admin action is required, but room guidance and default languages are worth checking."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's licensing page says Teams Rooms devices should be assigned Teams Rooms Basic or Teams Rooms Pro licences. The release note entry for this feature carries no Pro-only marker. No separate price or meter is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","teams-rooms","pro-management-portal","user-experience","mobile"]
sources:
  - title: "Microsoft 365 Roadmap item 565425"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565425"
    kind: "roadmap"
  - title: "MC1461164: (Updated) Microsoft Teams Rooms on Android: room users can change the app language"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1461164"
    kind: "message-center"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Teams Rooms (Windows and Android) home screen and admin controls"
    url: "https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh"
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
videos: []
related: ["microsoft-teams-modernized-gallery-view-in-teams-rooms-on-android","microsoft-teams-breakout-room-support-on-teams-rooms-on-android","microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management"]
controls:
  - governs: "Whether room users can change the Teams Rooms app language on Android"
    scope: "other"
    ui: null
    api: null
    note: "Learn documents this switch for Teams Rooms on Windows only. Language options on Android are described as controlled by the device manufacturer."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-22"
    note: "New briefing: the Android language option is launched, on by default per MC1461164, and has no documented admin switch."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 47
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "c9c6479149faf8fff46134a841e7d195"
---

## What's changing

Users of Teams Rooms on Android can now choose the display language of the Teams Rooms app from the room console. The roadmap item says users select from up to 69 languages with the language button on the console, and that the room system must restart after a language is selected.

Microsoft's notice MC1461164 describes it slightly differently. After a selection the Teams Rooms app reloads and briefly shows the Teams curtain before returning in the chosen language. The choice is session-scoped: when the app restarts it returns to the room's configured default language. The notice adds that the change applies only to the Teams Rooms app and does not affect the device operating system, peripherals, keyboard language or administrative settings. The notice says the feature is available by default on devices running Teams Rooms app version 2.12.0 or later.

The Microsoft Teams Rooms release notes list "Change the app display language from the device" under Teams Rooms on Android build 1449/1.0.96.2026344105 (November 2026), and say users can do this "without admin intervention". The release notes and the notice number app versions differently, and this page does not reconcile them. Separately, the Learn page on home screen and admin controls still says language options on Teams Rooms on Android devices are controlled by the device manufacturer; that statement and the newer release note both stand on Microsoft Learn at the time of writing (November 2026).

The roadmap record shows status Launched, target date September CY2026, release phases General Availability and Targeted Release, Worldwide (Standard Multi-Tenant) cloud, Android platform. MC1461164 gives the Targeted Release rollout as late June 2026 to late September 2026 and General Availability as late September 2026 to late October 2026, after Microsoft moved the General Availability start from early September.

## Why it matters

This is a user-facing change on shared room devices, and Microsoft's notice says it needs no administrator action. Because the feature is on by default on eligible app versions, room users will see the Language option as the app updates, whether or not anyone has told them.

The practical consequence is expectation management. A selected language reverts when the app restarts, so a room can show a different language from one meeting to the next. Microsoft's notice recommends checking each room's default Teams app language, because that is the language rooms return to, and updating room guidance to say the choice is temporary.

## Risk assessment

**Data exposure**
- No change identified. The notice says the selection applies to the Teams Rooms app only and does not affect the device operating system, peripherals, keyboard language or administrative settings. It does not describe any new data being read.

**Security & identity**
- No change identified. The release note says users change the language "without admin intervention", so no sign-in or approval step is described for the selection.

**Autonomy & actions**
- No autonomous behaviour is described. The app reloads and shows the Teams curtain after a selection (MC1461164), so a room user changing language on the console briefly interrupts that room's app.

**Change & support**
- Expect help-desk questions where a room appears in an unexpected language: the choice lasts only until the app restarts, and the roadmap text says a restart is needed after selecting, while the notice describes an app reload. Confirm the behaviour on a pilot device before writing guidance.
- Microsoft Learn documents an administrator switch to stop room users changing the language on Teams Rooms on Windows through the Teams Pro Management Portal, but documents no equivalent for Android at the time of writing (November 2026).

## Cost and licensing

The Learn licensing page says Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licences, so the room's existing licence is the one that applies. The release notes mark Pro-only features with an icon, and the entry for this feature carries none; the roadmap record and MC1461164 name no licence for it.

Microsoft has published no separate price, meter or add-on for this feature at the time of writing (November 2026). The indirect cost is admin and communications time: updating room signage and user documentation, as Microsoft's notice recommends.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) only, platform Android, with General Availability and Targeted Release phases. No other cloud is listed on the record; this page makes no claim about availability elsewhere.

MC1461164 says the feature is available by default on Teams Rooms on Android devices running Teams Rooms app version 2.12.0 or later, and recommends confirming that devices run a supported operating system version and are configured to receive that update. The Learn release notes warn that a feature can reach a particular device make and model later than Microsoft releases it, so check with your device manufacturer. The feature is described for Teams Rooms on Android; the Windows experience is a separate, earlier feature.

## Governance guidance

### Before rollout
- Confirm with your device manufacturer when the Teams Rooms app update reaches each Teams Rooms on Android model, since Learn says availability on a make and model can lag Microsoft's release.
- Record each room's current default Teams app language, because rooms return to it after every app restart (MC1461164).
- Update room signage and user documentation to say language selection is temporary and applies only to the current session.

### At rollout
- Test the Language option on one pilot Android room: select a language, note whether the app reloads or asks for a restart, and note the language after the next restart.
- Tell room users and the help desk that the Teams curtain appears briefly after a selection.

### After rollout
- Review help-desk tickets from rooms showing an unexpected language and check whether the room restarted since the last selection.
- Re-read the Learn home screen and admin controls page for an Android administrator setting, as the page says Android language options are controlled by the device manufacturer.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether room users can change the Teams Rooms app language on Android</strong><br><small class="controls__note">Learn documents this switch for Teams Rooms on Windows only. Language options on Android are described as controlled by the device manufacturer.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table records that no administrator switch for this feature is documented on Teams Rooms on Android. Learn documents such a switch for Teams Rooms on Windows through the Teams Pro Management Portal, but that setting is Windows-only and is not a control over this feature. The Learn page listing remotely managed settings says the full list for Teams Android devices is coming soon, so the position may change.

Microsoft's notice states that the selection does not permanently override administrator-configured language settings and that rooms revert to the room's configured default language on restart.

## Open questions

- Is there an administrator setting, in the Teams admin center configuration profile or the Pro Management portal, to stop room users changing the language on Teams Rooms on Android? Watch the Learn home screen and admin controls page and the device settings list, which says the Android list is coming soon.
- Where is the room's default Teams app language set for Teams Rooms on Android, and does the Language option list match the Teams desktop app? The roadmap says up to 69 languages.
- Does the room need a restart after a selection (roadmap text) or does the app reload (MC1461164)? Watch the release notes and Message center.
- Which Teams Rooms on Android app version carries the feature: 2.12.0 or later (MC1461164) or build 1449/1.0.96.2026344105 (release notes)? Check with your device manufacturer.

<!-- rationale
risk: Low. The choice is temporary, covers only the Teams Rooms app, and Microsoft's notice says it does not override the administrator-configured language or touch device settings.
cost: Low. The only cost the sources show is admin time to update room guidance. Microsoft has published no separate price or meter for this feature; the room already needs a Teams Rooms licence.
impact: Medium. Anyone using a Teams Rooms on Android device will see a new Language option on the console, and the feature is on by default on eligible app versions.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: The licensing page says Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licences. | Found: Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licenses (Teams Rooms legacy licenses are also valid). | Fix: Add '(Teams Rooms legacy licences are also valid)' immediately after the Basic-or-Pro statement in licensing.notes and Cost and licensing, preserving the qualification at https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to take stock of the configured default language, but the controls table has no corresponding row. | Found: Record each room's current default Teams app language ... The table's sole row is Whether room users can change the Teams Rooms app language on Android. | Fix: Remove the Before rollout bullet beginning 'Record each room's current default Teams app language'. The verified Microsoft recommendation can remain in Why it matters; do not add an unverified control row.
-->
