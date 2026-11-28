---
title: "Microsoft Teams Rooms on Windows: reserve a free room on the spot from the console"
slug: "microsoft-teams-ad-hoc-room-reservation-from-teams-rooms-on-windows-console"
roadmapId: 548648
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Windows consoles in Pro-licensed rooms show a Reserve button so people can book a free room for immediate use. Admins switch it per room in the Teams Rooms Pro Management portal; the default is not stated."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Teams and Surface Devices"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Included with Microsoft Teams Rooms Pro: the release notes mark ad-hoc room reservation with the icon for features available only with the Teams Rooms Pro licence. Rooms on Teams Rooms Basic do not get it."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams-rooms","pro-management-portal","teams","admin-controls","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 548648"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=548648"
    kind: "roadmap"
  - title: "Teams Rooms (Windows and Android) home screen and admin controls"
    url: "https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
  - title: "Teams Device Known Issues"
    url: "https://learn.microsoft.com/microsoftteams/devices/known-issues"
    kind: "learn"
  - title: "Deployment overview"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-deploy"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available?tabs=WindowsSettings"
    kind: "learn"
  - title: "Manage a Microsoft Teams Rooms console settings remotely with an XML configuration file"
    url: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    kind: "learn"
  - title: "teamworkFeaturesConfiguration resource type"
    url: "https://learn.microsoft.com/graph/api/resources/teamworkfeaturesconfiguration?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["microsoft-teams-set-and-manage-meeting-timers-in-teams-rooms-on-windows","microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p"]
controls:
  - governs: "Whether the Reserve button for ad-hoc room reservation appears on a room's Teams Rooms on Windows console"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > room > Settings > Meetings > Allow ad hoc room reservation"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh"
    api: null
    note: "Set per room. Apply Now restarts the device; Schedule Later applies it in the nightly maintenance window. Needs RBAC permissions for room management."
  - governs: "Which portal users can change room settings, and for which rooms"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Roles > role > Assignments > Add assignment"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    api: null
    note: "Assigning roles needs Global Administrator or Teams Administrator in Microsoft Entra ID, or Teams Rooms Pro Manager. Assignments are scoped to rooms or room groups."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: ad-hoc room reservation on Teams Rooms on Windows consoles, its Pro Management portal toggle, Pro licensing and the Canada time zone known issue."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 49
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "d770b9cde19ae4b2066fb33fc31c4559"
---

## What's changing

Teams Rooms on Windows consoles gain a **Reserve** button that lets someone standing in a free meeting room book it for immediate use. Microsoft's page for the Teams Rooms home screen says the button "appears on the calendar when the room is available", and describes the aim as avoiding scheduling conflicts so that spontaneous meetings are not interrupted.

The feature is limited to rooms with a Teams Rooms Pro licence. Administrators control it per room with the **Allow ad hoc room reservation** setting in the Teams Rooms Pro Management portal. Microsoft does not state whether the setting is on or off when a room receives the update. The same capability exists on Teams Rooms on Android, with its own setting on the device and in the Teams admin center configuration profile.

The roadmap item is **Launched**, with a target of July CY2026, for General Availability and Targeted Release, on Worldwide, GCC, GCC High and DoD. The Teams Rooms release notes list it under app version 5.6.137.0 (6/18/2026), added as part of a web client build on 7/20/2026.

## Why it matters

The change moves some room booking from Outlook to the room itself. A walk-in group can hold a free room on the calendar rather than risk being displaced by someone who books it from their desk a minute later. For workplace and facilities teams that rely on the room calendar for utilisation figures, short-notice bookings made at the console will appear alongside scheduled ones.

Microsoft has not stated whether the toggle starts on or off, so check a Pro-licensed room on version 5.6.137.0 or later to see whether the button is showing. If your rooms use Canada's newer time zones, the known issue under Risk assessment is the decision that matters most.

## Risk assessment

**Data exposure**
- No new data reach is described: the feature books the room it is running in. Who the booking shows as organiser, and what the console shows of it, is not documented; check on a test room before relying on meeting-name privacy settings.

**Security & identity**
- Microsoft does not describe which identity creates the reservation, so confirm it on a test room rather than assume it.

**Autonomy & actions**
- A person at the console can place a booking on the room calendar from the **Reserve** button. The control is the per-room toggle; how long a reservation lasts and whether the room mailbox's Exchange calendar processing settings apply are not documented.

**Change & support**
- Microsoft lists a known issue: ad-hoc room reservation "may not correctly adjust" to the British Columbia, Alberta and Manitoba time zones on Teams Rooms on Windows. The workaround is to disable the feature temporarily in the Pro Management portal or to configure an alternative time zone on the console.
- Applying a setting change with **Apply Now** restarts the device as soon as possible; **Schedule Later** applies it in the nightly maintenance window.

## Cost and licensing

- **Licence:** the Teams Rooms release notes state that features marked with the Pro icon "are available only with Teams Rooms Pro license", and ad-hoc room reservation carries that icon. The roadmap item says the same: "Available in Teams Rooms Pro-licensed rooms".
- **Rooms on Basic:** the Teams Rooms licences page states that a feature not available for a licence "can't be used on Teams Rooms devices that have been assigned that license". A room on Teams Rooms Basic would need a Teams Rooms Pro licence to get the button.
- **Management:** the control lives in the Teams Rooms Pro Management portal, which the deployment overview says can be enabled once a Teams Rooms Pro licence is available in the tenant.
- **Indirect cost:** admin time to decide the setting per room and to brief room users and facilities staff.

## Scope

- **Devices:** Teams Rooms on Windows consoles signed in with a Teams Rooms Pro licensed account. Settings changes from the portal apply only to signed-in devices.
- **Version:** Teams Rooms app 5.6.137.0, with the feature delivered in a web client build on 7/20/2026.
- **Who configures it:** portal users with role-based access control (RBAC) permissions for room management in the Teams Rooms Pro Management portal.
- **Clouds (roadmap record):** Worldwide, GCC, GCC High and DoD.
- **Platforms (roadmap record):** Desktop, Teams and Surface Devices.
- **Not in this item:** Teams Rooms on Android, which has its own **Allow ad hoc room reservation** setting.

## Governance guidance

### Before rollout
- Open a Pro-licensed Teams Rooms on Windows room in the Pro Management portal and check **Allow ad hoc room reservation** under **Settings** > **Meetings**, since Microsoft does not state its default.
- Decide with the workplace or facilities team which rooms should allow walk-in reservations, for example open huddle rooms but not rooms booked by request.
- Check which Pro Management portal role assignments can change room settings (**Settings** > **Roles**), and scope them to the rooms each team runs.

### At rollout
- Turn off **Allow ad hoc room reservation** on rooms that should not take walk-in bookings, choosing **Schedule Later** so the device restart falls in the nightly maintenance window.
- Disable the setting on rooms set to the British Columbia, Alberta or Manitoba time zones until Microsoft resolves the known issue, or move those consoles to the alternative time zones Microsoft lists.
- Tell room users that a free room can be held from the console with **Reserve**.

### After rollout
- Review the calendars of a few rooms to see how console reservations appear and how long they last.
- Watch the Teams device known issues page and the Teams Rooms release notes for changes to the feature and to the time zone issue.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Reserve button for ad-hoc room reservation appears on a room's Teams Rooms on Windows console</strong><br><small class="controls__note">Set per room. Apply Now restarts the device; Schedule Later applies it in the nightly maintenance window. Needs RBAC permissions for room management.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › room › Settings › Meetings › Allow ad hoc room reservation <a href="https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which portal users can change room settings, and for which rooms</strong><br><small class="controls__note">Assigning roles needs Global Administrator or Teams Administrator in Microsoft Entra ID, or Teams Rooms Pro Manager. Assignments are scoped to rooms or room groups.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Roles › role › Assignments › Add assignment <a href="https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The toggle is set per room. Microsoft's settings page describes device settings jobs and settings templates for bulk changes, but its list of settings available for remote management does not include **Allow ad hoc room reservation** at the time of writing (November 2026), so whether it can be applied in bulk is unconfirmed. Settings changes need RBAC permissions for room management. To create, edit or assign Pro Management portal roles, an account needs Global Administrator or Teams Administrator in Microsoft Entra ID, or the Teams Rooms Pro Manager role in the portal. The XML configuration file is not a route: Microsoft no longer publishes new XML settings and points admins to the portal. The Microsoft Graph Teams device features configuration resource documents no property for this setting at the time of writing (November 2026).

## Open questions

- Is **Allow ad hoc room reservation** on or off when a Pro-licensed room first receives the update? Watch the [home screen and admin controls page](https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh).
- Which account is recorded as the organiser of a console reservation, and how long does the reservation hold the room?
- Do Exchange calendar processing settings on the room mailbox apply to reservations made at the console?
- Can the setting be applied in bulk through device settings jobs or settings templates in the Pro Management portal?
- When will the Canada time zone known issue be resolved? Watch the Teams device known issues page.

<!-- rationale
risk: Low. The feature books the room's own calendar for immediate use from the console in that room, and each room has an Allow ad hoc room reservation toggle in the Pro Management portal.
cost: None. Microsoft's release notes mark the feature as available only with the Teams Rooms Pro licence, so rooms already on Pro get it without a further licence; rooms on Teams Rooms Basic do not.
impact: Medium. People who use Pro-licensed Teams Rooms on Windows rooms see a new Reserve button on the console calendar, and the teams who manage room bookings see short-notice bookings made at the console.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: creating and editing roles / role: Creating or editing portal roles requires Global Administrator, Teams Administrator or Teams Rooms Pro Manager permissions. | Found: Teams Administrator or Teams Devices Administrator assigned to an Administrative Unit (AU), can't access the Teams Rooms Pro Management portal, as AUs aren't currently supported. | Fix: Qualify Teams Administrator as tenant-wide in the role requirement: 'Creating or editing portal roles requires Global Administrator, tenant-wide Teams Administrator, or Teams Rooms Pro Manager.' Apply together with the assignment correction below. Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac
- [contradicted, blocker] controls[1].note; Governance controls: assigning roles / role: Assigning portal roles requires Global Administrator, Teams Administrator or Teams Rooms Pro Manager. | Found: To assign roles, you must be a Global Administrator/ Teams Administrator or Teams Rooms Pro Manager role or have a custom role with role management permissions. | Fix: Replace the assignment requirement in controls[1].note and the matching table note with 'Assigning roles requires Global Administrator, tenant-wide Teams Administrator, Teams Rooms Pro Manager, or a custom role with role management permissions.' In Governance controls, replace the combined requirement sentence with 'Creating or editing portal roles requires Global Administrator, tenant-wide Teams Administrator, or Teams Rooms Pro Manager. Assigning roles also permits a custom role with role management permissions.' Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac; its note says an Administrative Unit-scoped Teams Administrator cannot access the portal. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac
- [contradicted, blocker] Risk assessment: Data exposure / absence: What the console shows of a room-calendar reservation is not documented. | Found: By default, room users can join meetings in one touch and view meeting details including the meeting name, organizer, time, and platform. ... meeting names can be hidden ... and replaced with the organizer name if desired | Fix: Narrow the sentence to 'Who the booking shows as organiser is not documented; check on a test room before relying on meeting-name privacy settings.' Remove 'and what the console shows of it': https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh documents the general room-calendar display fields and meeting-name privacy behavior, even though it does not identify the organizer account or generated subject for this reservation. | Source: https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table; Governance guidance / admin-path: Portal role assignments are reached through Settings > Roles > role > Assignments > Add assignment. | Found: In the left navigation ... expand Settings > Roles. ... Select the role you want to assign. ... In the role pane, select Assignments > Add assignment. | Fix: The path correctly opens the assignment wizard but stops before its user and room selections. Extend controls[1].ui.path and the matching table path to 'Settings > Roles > role > Assignments > Add assignment > General settings > Members > Scope', as documented at https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac
- [supported, minor] Why it matters: booking from Outlook / behaviour: Users can book meeting rooms from Outlook. | Found: Room Finder is an Outlook feature that helps users find rooms that are near them, available for reservation, and meet other criteria such as the availability of a display. | Fix: Add https://learn.microsoft.com/microsoftteams/hybrid-meetings-device-config-calendar to sources for the Outlook booking premise in Why it matters, or remove 'from Outlook' from that sentence. | Source: https://learn.microsoft.com/microsoftteams/hybrid-meetings-device-config-calendar
- [supported, minor] Governance controls: settings templates / behaviour: The portal documents reusable settings templates for bulk configuration. | Found: Settings templates let you define a named, reusable configuration that is assigned to specific devices or device groups. ... Navigate to: Settings > Device settings page > Templates (Preview) tab | Fix: Change 'device settings jobs and settings templates for bulk changes' to 'device settings jobs and preview settings templates for bulk changes' in Governance controls, preserving the existing caveat about this toggle. Source: https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings. | Source: https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist tells administrators to change console time zones, but the controls table has no time-zone control. | Found: At rollout: 'or move those consoles to the alternative time zones Microsoft lists.' The controls table contains only the reservation toggle and portal role assignments. | Fix: The alternative-time-zone checklist action has no controls-table row. Remove ', or move those consoles to the alternative time zones Microsoft lists' from Governance guidance: At rollout, leaving the documented disable-setting action. The workaround description in Risk assessment can remain.
-->
