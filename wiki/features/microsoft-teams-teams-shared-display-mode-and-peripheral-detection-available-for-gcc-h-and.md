---
title: "Microsoft Teams: shared display mode and BYOD peripheral detection in GCC High and DoD"
slug: "microsoft-teams-teams-shared-display-mode-and-peripheral-detection-available-for-gcc-h-and"
roadmapId: 553592
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams desktop can extend a meeting to the room screen in bring-your-own-device rooms, and the Teams client reports room peripherals to the Pro Management portal. Admins should decide on peripheral data collection."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "March CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Pro Management portal access needs at least one Teams Rooms Pro, Premium or Teams Shared Device licence. The Shared Space licensing page enables BYOD usage analytics through Shared Space or Shared Space - Single Space assigned to the room, or a Shared Space licensed device in the room. No licence specific to shared display mode is published."
audiences: ["m365-admin","service-owner","security","end-user"]
tags: ["teams","teams-rooms","pro-management-portal","byod-rooms","telemetry","privacy","usage-reports","licensing","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 553592"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=553592"
    kind: "roadmap"
  - title: "Bring Your Own Device Rooms in Teams Pro Management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device"
    kind: "learn"
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "learn"
  - title: "Microsoft Teams Shared Space licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/teams-shared-device-license"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/managed-meeting-rooms-portal"
    kind: "learn"
  - title: "Microsoft Teams Rooms Pro Management"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-management"
    kind: "learn"
  - title: "Accessing the Pro Management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service"
    kind: "learn"
  - title: "Setting up Bookable Desks in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/rooms/bookable-desks"
    kind: "learn"
  - title: "Role-based access control in the Microsoft Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac"
    kind: "learn"
videos: []
related: ["microsoft-teams-analytics-for-desk-utilization-on-teams-pro-management-portal","microsoft-teams-additional-health-signals-available-for-teams-rooms-on-android-on-pro-mana","usage-reports"]
controls:
  - governs: "Whether the Teams client sends peripheral data for BYOD discovery and automatic room experiences"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsBYODAndDesksPolicy -Identity <policy name> -DeviceDataCollection Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device"
    note: "Disabling also stops automatic activation of BYOD end-user experiences for those users. Requires MicrosoftTeams module 6.5.0 or later."
  - governs: "Whether peripheral data is ingested into the Pro Management portal"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > General > BYOD Rooms and Desk management"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device"
    api: null
    note: "Enabled by default. Turning it off hides BYOD and desk reports and inventory; the page lists it under its Settings section."
  - governs: "Who can manage all rooms and features in the Pro Management portal"
    scope: "tenant"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Settings > Roles > Teams Rooms Pro Manager > Assignments > Add"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service"
    api: null
    note: "The assignment applies to all rooms and room groups."
  - governs: "Admin switch for shared display mode itself"
    scope: "tenant"
    ui: null
    api: null
    note: "Only the peripheral data collection setting is documented as affecting automatic activation."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-22T22:58:40"
changes:
  - date: "2026-11-27"
    note: "New briefing: shared display mode and BYOD peripheral detection for GCC High and DoD, with the data collection controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 71 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected: default state now Not stated (the client collection policy is off by default in government clouds), BYOD analytics licensing and the MCA requirement, portal roles and the Administrative Unit limit; cost raised to medium."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 74 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 74
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "7a9d579fe627f8520a7949e5f9ea74a3"
---

## What's changing

Two bring-your-own-device (BYOD) room features reach GCC High and DoD tenants. A BYOD room is, in Microsoft's definition, any room without a Microsoft Teams Rooms system or Surface Hub, where people connect their own PC to the room's screen, camera and speakers.

**Shared display mode.** Microsoft's Government Channel release notes describe it as giving users "the ability to extend their Teams meeting via a pop-out view-only version of the stage onto the TV screen in BYOD meeting rooms", so that the host's own desktop stays for their viewing only. The Pro Management portal documentation says that users who plug in peripherals associated with a room have the BYOD end-user experiences activated automatically.

**Peripheral detection.** The Teams client discovers peripherals for the Teams Rooms Pro Management portal: "When a user enters the prejoin screen of a meeting, any connected displays and USB audio/video peripherals are scanned and transmitted to the cloud." A personal device filter holds each peripheral back until at least five unique users in the organisation have used it. The portal can then associate peripherals with room accounts, automatically or by hand, and report usage, quality and peripheral status (offline or moved) per room.

The roadmap item lists the change as Launched, General Availability, with a target of March CY2026, for the GCC High and DoD clouds on Desktop and Mac.

## Why it matters

This puts device telemetry from users' own PCs into a cloud portal. The Bookable Desks page documents the shared TeamsBYODAndDesks collection policy as [off by default in government clouds](https://learn.microsoft.com/microsoftteams/rooms/bookable-desks); the BYOD rooms page separately documents portal ingestion as enabled by default. Confirm the effective collection policy before enabling or disabling it.

The two halves are linked. Microsoft's page warns that the BYOD solution requires the peripheral data sent from users to activate the BYOD end-user experiences automatically, so turning collection off for a group also stops the automatic room experience for that group. Expect help-desk questions from users whose Teams window moves to the room screen when they plug in.

## Risk assessment

**Data exposure**
- The Teams client sends peripheral identifiers (product ID, vendor ID and serial number) with usage, quality and status signals to the service. Microsoft states that no personally identifiable data is collected. Control: `DeviceDataCollection` in the Teams BYOD and desks policy, per user or group.
- Shared display mode puts a view-only copy of the meeting stage on the room screen, which is the intent; whatever is on the stage is visible to everyone in the room.

**Security & identity**
- Anyone holding the Teams Rooms Pro Manager role sees every room and feature in the portal, including the BYOD inventory. Control: role assignments under Settings > Roles in the portal.

**Autonomy & actions**
- Auto association links peripherals to rooms without an admin, once at least five unique users' signals agree. It can be turned off in the portal settings, and the threshold raised.

**Change & support**
- Peripherals without unique serial numbers cannot be managed and may cause overcounted usage; Microsoft advises checking with the manufacturer.
- Microsoft's pages disagree on DoD support for the Pro Management service (see Scope).

## Cost and licensing

- **Portal access**: the BYOD rooms page says "To have access to the portal, you'll need at least one pro, premium, or Teams Shared Device (TSD) license."
- **Usage reports**: the same page says a Teams Shared Device licence is required to unlock the BYOD room usage report, and only rooms with Teams Shared Devices or Pro licences appear in it. The [Shared Space licensing page](https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/teams-shared-device-license) enables BYOD usage analytics through Shared Space or Shared Space - Single Space assigned to the room; a Shared Space licensed device in the room also grants analytics without an additional Single Space licence.
- **Licence name and price**: the Teams Shared Space licensing page says the licence was called Microsoft Teams Shared Devices before April 2026, and that "a single $8 Shared Space license can be used to enable 4 bookable desks or bring your own device (BYOD) rooms" (one paid licence plus three $0 Single Space licences). Acquiring the Single Space licences requires a Microsoft Customer Agreement (MCA) billing account; they are not available through a Microsoft Online Services Agreement (MOSA) billing account. The Shared Space licence is available to GCC High and DoD tenants.
- **Shared display mode**: Microsoft Learn names no licence specific to shared display mode at the time of writing (November 2026).
- **Indirect cost**: admin time to review peripheral associations and to decide on data collection.

## Scope

- **Clouds**: GCC High and DoD, as the roadmap record lists them.
- **Platforms**: Desktop and Mac (record).
- **Rooms**: BYOD rooms that have a room account, are bookable in Exchange and are visible in the global address list; auto association works only for those, with audio, video, display or dock peripherals that have unique serial numbers.
- **Portal**: GCC High tenants reach the Pro Management portal at devices.gov.teams.microsoft.us; the portal page gives devices.dod.teams.microsoft.us for DoD.
- **Conflicting sources**: the Pro Management portal page says it is available in the commercial, GCC, GCC-High and DoD clouds, while the Teams Rooms Pro Management service page lists supported clouds as "All Microsoft clouds except DoD and Office 365 operated by 21Vianet".
- **Roles**: Teams Rooms Pro Manager provides full portal access. The [access page](https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service) also lists Global Administrator, Teams Administrator, Teams Devices Administrator and Global Reader; Teams Administrator and Teams Devices Administrator assignments scoped to an Administrative Unit do not grant portal access. The [RBAC page](https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac) identifies Global Reader as read-only.

## Governance guidance

### Before rollout
- Confirm the effective `DeviceDataCollection` value in your Teams BYOD and desks policies, then decide which users or groups should send peripheral data and set the policy to Enabled or Disabled for them.
- Review who holds the Teams Rooms Pro Manager role in the Pro Management portal, since it grants access to all rooms and features.
- Confirm with peripheral manufacturers that room cameras, speakers and docks report unique serial numbers.

### At rollout
- Check the BYOD Rooms and Desk management setting in the portal and turn it off if peripheral data should not be ingested.
- Tell users in BYOD rooms that Teams may move the meeting stage to the room screen when they plug in.

### After rollout
- Confirm the documented analytics entitlement for the rooms whose usage you need to report on.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Teams client sends peripheral data for BYOD discovery and automatic room experiences</strong><br><small>User</small><br><small class="controls__note">Disabling also stops automatic activation of BYOD end-user experiences for those users. Requires MicrosoftTeams module 6.5.0 or later.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsBYODAndDesksPolicy -Identity &lt;policy name&gt; -DeviceDataCollection Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether peripheral data is ingested into the Pro Management portal</strong><br><small>Tenant</small><br><small class="controls__note">Enabled by default. Turning it off hides BYOD and desk reports and inventory; the page lists it under its Settings section.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › General › BYOD Rooms and Desk management <a href="https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can manage all rooms and features in the Pro Management portal</strong><br><small>Tenant</small><br><small class="controls__note">The assignment applies to all rooms and room groups.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Settings › Roles › Teams Rooms Pro Manager › Assignments › Add <a href="https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Admin switch for shared display mode itself</strong><br><small>Tenant</small><br><small class="controls__note">Only the peripheral data collection setting is documented as affecting automatic activation.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

`DeviceDataCollection` is a per-user Teams policy setting; disabling it stops BYOD and desk information flowing to the service and also stops automatic activation of the BYOD end-user experiences for those users. The portal's BYOD Rooms and Desk management setting acts tenant-wide on ingestion: turning it off hides reports and inventory, though Microsoft says the devices continue to exist in the database. The portal also offers **Delete Device Data** for a specific user, an inventory management permission for custom roles, and a setting to turn off auto association or raise its threshold (minimum five unique signals); the BYOD page names these without giving their full paths. The PowerShell setting needs MicrosoftTeams module version 6.5.0 or later.

## Open questions

- Is there an admin setting that turns off shared display mode itself, separate from peripheral data collection? Watch the BYOD rooms page on Microsoft Learn.
- Which licence, if any, does shared display mode need in the Teams desktop client?
- Is the Pro Management service supported in DoD, given that two Microsoft pages disagree?

<!-- rationale
risk: Medium. The Teams client scans connected displays and USB audio and video peripherals at meeting join and sends that data to the cloud, and Microsoft documents the portal's ingestion setting as enabled by default.
cost: Medium. Portal access requires a qualifying licence, and BYOD room usage analytics require a documented reporting entitlement. Additional licensing may be needed for selected rooms; admin time is an indirect cost.
impact: Medium. Users who join meetings from their own PC in BYOD rooms see the room-screen behaviour change; room and device admins gain an inventory and reports.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / behaviour: The PowerShell setting requires MicrosoftTeams module version 6.5.0 or later. | Found: First, ensure that your Microsoft Teams module is on version 6.5.0 or higher. | Fix: Keep the 6.5.0-or-later requirement, but add: 'The Bookable Desks page says 6.5.0 or higher; the BYOD rooms page says greater than 6.5.0, although its update instruction refers to versions older than 6.5.0.' Cite https://learn.microsoft.com/microsoftteams/rooms/bookable-desks and https://learn.microsoft.com/microsoftteams/rooms/bring-your-own-device. | Source: https://learn.microsoft.com/microsoftteams/rooms/bookable-desks
- [supported, minor] controls[2].ui; Risk assessment: Security & identity / admin-path: Teams Rooms Pro Manager assignments are opened at Settings > Roles > Teams Rooms Pro Manager > Assignments > Add. | Found: Navigate to Settings > Roles and then select Teams Rooms Pro Manager. ... select the Assignments tab and then select Add. | Fix: Keep the path supported by the access page. Add to the row note: 'The RBAC page instead labels the button Add assignment.' Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-pro-rbac#assign-a-role. | Source: https://learn.microsoft.com/microsoftteams/rooms/enrolling-mtrp-managed-service
-->
