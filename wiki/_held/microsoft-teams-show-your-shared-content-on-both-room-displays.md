---
title: "Microsoft Teams Rooms on Android: show HDMI content on both room displays"
slug: "microsoft-teams-show-your-shared-content-on-both-room-displays"
roadmapId: 582052
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android with two displays will be able to show HDMI-shared content on both screens, in or out of a meeting. The roadmap targets January CY2027; no admin action is required yet, but check your dual display profiles."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Teams Rooms systems need a Teams Rooms Basic or Pro licence; Microsoft's licence page lists dual screen support under Pro. A licence requirement specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["teams","teams-rooms","dual-display"]
sources:
  - title: "Microsoft 365 Roadmap item 582052"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=582052"
    kind: "roadmap"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Meeting room guidance for Teams"
    url: "https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
videos: []
related: ["microsoft-teams-front-of-room-view-control-for-town-hall-in-teams-rooms-on-android-500378","microsoft-teams-breakout-room-support-on-teams-rooms-on-android","microsoft-teams-front-of-room-view-control-for-webinars-and-structured-meetings-in-teams-r"]
controls:
  - governs: "Whether a Teams Rooms on Android device runs in dual display mode"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Configuration profiles > General > Dual display mode"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance"
    api: null
    note: "Prerequisite for any dual display behaviour. Release notes say it is disabled by default and set per configuration profile. Not confirmed to govern the new feature itself."
  - governs: "Whether HDMI content is shown on both displays in Teams Rooms on Android"
    scope: "other"
    ui: null
    api: null
    note: "Not yet documented. The roadmap says admins will have settings; Learn names none for Android at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-25"
    note: "First briefing for roadmap item 582052: HDMI content on both displays in Teams Rooms on Android; no Android setting is documented yet."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 43
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "9e84d4933bde3022f23dfeb17c67fbec"
---

## What's changing

The roadmap item describes a change for Microsoft Teams Rooms on Android with dual displays: content that someone shares through an HDMI connection can appear on both screens at once. It says this applies even when the room is not in a Teams meeting, and that people can start or stop showing the content on both screens from the room controls. It also says admins can use settings to manage how this works in their rooms.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn does describe the surrounding product. Its release notes say users can project HDMI content to the front-of-room display without joining an online Teams meeting, and its room guidance says that in a dual display room the extended display shows date/time, room name and shared content, including HDMI content.

The roadmap record gives the status as In development, with a target date of January CY2027, for Worldwide (Standard Multi-Tenant), the Android platform and the General Availability release phase. The roadmap lists no preview date and Microsoft has not stated what happens on arrival, so the default state is not stated.

## Why it matters

This is a presentation feature for rooms, so the day-to-day effect is on presenters and on whoever supports the rooms. If your dual display rooms are configured correctly, you would expect nothing to need doing before the feature arrives. Microsoft has not stated whether it is on or off when it arrives, so plan on checking one room rather than assuming either.

The practical exposure is configuration drift. Microsoft's release notes warn that dual display mode must be enabled in the configuration profile, is disabled by default, and can be switched off in existing dual display rooms by a profile designed for single-display devices. A room that silently falls back to single display mode is a room where this feature cannot apply.

## Risk assessment

**Data exposure**
- The roadmap describes shared content appearing on both of the room's own displays. It does not mention content leaving the room or being shared into a meeting, so treat anything beyond the two displays as something to confirm.
- Anything a presenter connects over HDMI becomes visible on both screens, so presenters should expect a wider audience in the room than a single screen gives.

**Security & identity**
- No change is described: the roadmap item mentions no sign-in, permission or identity change for the room account.

**Autonomy & actions**
- No autonomous behaviour is described. The roadmap says people start and stop the two-screen display from the room controls.

**Change & support**
- Microsoft's release notes say dual display mode is off unless the configuration profile enables it, so a rooms profile built for single displays can switch it off in dual display rooms. Keep a separate profile for dual display rooms.
- Learn documents a touch console as required for dual display configurations. Rooms without one are outside that certified setup.
- Microsoft Learn documents no Teams Rooms on Android setting for this feature at the time of writing (November 2026), so the settings the roadmap mentions cannot yet be planned against.

## Cost and licensing

Each room needs a Teams Rooms licence: Microsoft's licence page names Microsoft Teams Rooms Basic and Microsoft Teams Rooms Pro, and says a Teams Rooms system includes a Teams Rooms on Android device and touch console. That page's feature comparison lists dual screen support under Teams Rooms Pro and content sharing as part of Teams Rooms Basic.

A licence requirement, price or meter specific to showing content on both displays is not yet published. The roadmap item names no licence. The indirect cost is admin time to review dual display configuration profiles and to brief presenters. Source: [Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing).

## Scope

- **Devices:** Microsoft Teams Rooms on Android with dual displays. Learn describes a touch console as required for dual display configurations.
- **Content:** content shared through an HDMI connection, in or out of a Teams meeting, per the roadmap description.
- **Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Android. No other cloud is listed on the roadmap item.
- **Rollout:** In development, targeted for January CY2027. Rollout mechanics, release channel and prerequisites beyond dual display mode are not yet published.

## Governance guidance

### Before rollout
- Identify Teams Rooms on Android rooms that have two front-of-room displays, and confirm each room's configuration profile has Dual display mode on.
- Keep a separate configuration profile for dual display rooms, as the release notes advise, so a single-display profile cannot switch dual display mode off.
- Check which Teams Rooms licence each dual display room holds, because Microsoft's licence page lists dual screen support under Teams Rooms Pro.

### At rollout
- Watch Message center and the roadmap item for the January CY2027 target and for the names of the admin settings the roadmap mentions.
- Test one dual display room by connecting a laptop over HDMI outside a meeting and starting and stopping the two-screen display from the room controls.
- Tell presenters that content may appear on both displays in the room.

### After rollout
- Re-check that Dual display mode is still on after any configuration profile change.
- Review Learn and the Teams Rooms release notes for a documented Android setting for this feature, and add it to your profiles once it exists.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Teams Rooms on Android device runs in dual display mode</strong><br><small class="controls__note">Prerequisite for any dual display behaviour. Release notes say it is disabled by default and set per configuration profile. Not confirmed to govern the new feature itself.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Configuration profiles › General › Dual display mode <a href="https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether HDMI content is shown on both displays in Teams Rooms on Android</strong><br><small class="controls__note">Not yet documented. The roadmap says admins will have settings; Learn names none for Android at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Dual display mode is the one documented control that bears on this feature: it decides whether a Teams Rooms on Android device runs in dual display mode at all. The release notes say it is disabled by default and must be enabled in the configuration profile. The room guidance gives the Teams admin center path, and a matching on-device setting under Home screen > Settings > Teams admin settings > General.

The settings the roadmap says admins will get for this feature are not yet documented for Teams Rooms on Android. The Android tab of the Teams Rooms Pro Management portal settings page says the full settings list documentation is coming soon. An Allow content duplication setting appears on the Teams Rooms on Windows tab of that page, so do not treat it as a control for this feature. Roles required for the Android settings are not yet published.

## Open questions

- Which Teams Rooms on Android setting will manage showing content on both displays, and will it live in Teams admin center configuration profiles, the Teams Rooms Pro Management portal or both? Watch the Teams Rooms release notes and the Pro Management portal settings page.
- Is the feature on or off when it arrives in January CY2027? The roadmap item does not say.
- Does the feature need a Teams Rooms Pro licence, or does Teams Rooms Basic cover it? Watch the Microsoft Teams Rooms licences page.
- Will an API or PowerShell cmdlet exist for the Android setting, so rooms can be configured in bulk? Watch the Teams Rooms release notes.

<!-- rationale
risk: Low. The roadmap describes content appearing on the room's own displays, started and stopped from the room controls; it names no new data access, identity change or default that alters existing rooms.
cost: Low. Rooms already need a Teams Rooms licence and no feature-specific charge is published; the cost known today is admin time to check configuration profiles and brief presenters.
impact: Low. Only people who present from a laptop over HDMI in Teams Rooms on Android rooms with two displays will notice it, and the roadmap says it is controlled from the room.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls / admin-path: Configuration profiles > General > Dual display mode is the complete Teams admin center route to the Android control. | Found: To manage Teams Rooms devices, open the Microsoft Teams admin center and go to Devices > Teams Rooms on Android, Teams Rooms on Windows, or Surface Hubs. | Fix: Replace the path in controls[0].ui and the rendered table with 'Devices > Teams Rooms on Android > Configuration profiles > General > Dual display mode'. Cite https://learn.microsoft.com/training/modules/configure-deploy-manage-teams-devices/3-manage-microsoft-teams-room-systems for the navigation and retain https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance for the control's final steps. | Source: https://learn.microsoft.com/training/modules/configure-deploy-manage-teams-devices/3-manage-microsoft-teams-room-systems
- [contradicted, blocker] Risk assessment: Data exposure / default: Anything a presenter connects over HDMI becomes visible on both screens. | Found: content you share through an HDMI connection can now appear on both screens at once. You can start or stop showing your content on both screens from the room controls. | Fix: Replace 'Anything a presenter connects over HDMI becomes visible on both screens' with 'HDMI-shared content can appear on both screens when people start the two-screen display from the room controls'. Do not state that connecting HDMI automatically activates the new behaviour.
- [contradicted, blocker] Scope: Rollout / absence: Prerequisites beyond dual display mode are not yet published. | Found: A touch console is required for dual display configurations. Dual display mode without a touch console is not supported nor certified. | Fix: Replace 'prerequisites beyond dual display mode are not yet published' with 'additional prerequisites specific to the new HDMI duplication option are not yet published'. This preserves the already stated touch-console prerequisite instead of denying it. | Source: https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance
- [contradicted, blocker] Governance controls: roles / absence: Roles required for the Android settings are not yet published. | Found: Teams Device Administrator | Manage devices configured for use with the Teams service. | Manage device configuration and updates, review device health and status of connected peripherals, set up and apply configuration profiles, and restart devices. | Fix: Remove 'Roles required for the Android settings are not yet published.' General Android device and configuration-profile administration roles are documented; the absence of the new duplication setting does not establish an absence of administration roles. | Source: https://learn.microsoft.com/microsoftteams/using-admin-roles#teams-roles-and-capabilities
- [contradicted, blocker] Governance controls: opening paragraph / absence: Dual display mode is the one documented control that bears on this HDMI presentation feature. | Found: On a Teams Rooms on Android device, you can disable HDMI ingest audio and automatic HDMI content sharing onto the front-of-room display (which also disables automatic sharing into a Teams meeting). | Fix: Replace 'Dual display mode is the one documented control that bears on this feature' with 'Dual display mode is a documented prerequisite control for this feature'. Existing Android HDMI-sharing controls also bear on presentation behaviour, even though the new duplication-specific control is undocumented. | Source: https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh#home-screen-actions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: on-device path / admin-path: The on-device route to the matching dual display setting is Home screen > Settings > Teams admin settings > General. | Found: On the device: Home screen > Settings > Teams admin settings > General > Turn on dual display mode > Swap screen. | Fix: Extend the on-device path to 'Home screen > Settings > Teams admin settings > General > Turn on dual display mode'. General is the correct page, but the printed path stops before the control. | Source: https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance
-->
