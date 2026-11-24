---
title: "Microsoft Teams Rooms on Android: redesigned on-device admin settings"
slug: "microsoft-teams-improved-device-settings-experience-on-teams-rooms-on-android"
roadmapId: 581965
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to reorganise the on-device admin settings on Teams Rooms on Android. It affects admins who configure rooms at the console. Microsoft has not stated a default or any admin action; target January CY2027."
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
action: "prepare"
licensing:
  model: "included"
  notes: "Learn says Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licences (Teams Rooms legacy licences are also valid). A licence, price or meter specific to this redesign is not yet published."
audiences: ["m365-admin","service-owner"]
tags: ["teams","teams-rooms","pro-management-portal","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 581965"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581965"
    kind: "roadmap"
  - title: "Teams Rooms (Windows and Android) home screen and admin controls"
    url: "https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Update-MgBetaTeamworkDeviceConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.teams/update-mgbetateamworkdeviceconfiguration?view=graph-powershell-beta"
    kind: "learn"
  - title: "teamworkDeviceConfiguration resource type"
    url: "https://learn.microsoft.com/graph/api/resources/teamworkdeviceconfiguration?view=graph-rest-beta"
    kind: "learn"
  - title: "teamworkDevice resource type"
    url: "https://learn.microsoft.com/graph/api/resources/teamworkdevice?view=graph-rest-beta"
    kind: "learn"
videos: []
related: ["microsoft-teams-one-stop-admin-portal-for-teams-devices-with-teams-rooms-pro-management"]
controls:
  - governs: "Settings of a Teams Rooms on Android device, changed remotely"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > device > Settings > category > setting"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    api:
      kind: "powershell"
      call: "Update-MgBetaTeamworkDeviceConfiguration -TeamworkDeviceId <device-id> -TeamsClientConfiguration <teams-client-configuration>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.teams/update-mgbetateamworkdeviceconfiguration?view=graph-powershell-beta"
    note: "Needs Rooms Management RBAC permissions and a signed-in device. Categories: About, Account, Meetings, Device, Network. Historical documentation only: the underlying Graph beta device-management APIs are unsupported after November 2025."
  - governs: "Meeting settings on the room console, such as whether meeting names show"
    scope: "other"
    ui:
      surface: "Teams Rooms on Android console"
      path: "Teams Admin Settings > Meetings > Show meeting names"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh"
    api:
      kind: "powershell"
      call: "Update-MgBetaTeamworkDeviceConfiguration -TeamworkDeviceId <device-id> -TeamsClientConfiguration @{ FeaturesConfiguration = @{ IsHideMeetingNamesEnabled = $true } }"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.beta.teams/update-mgbetateamworkdeviceconfiguration?view=graph-powershell-beta"
    note: "Path is as Learn documents it today; navigation will change. Set on the device. Licence comparison lists Show meeting names under Pro only. Historical documentation only: Graph beta APIs unsupported after November 2025."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-24"
    note: "New briefing on the planned redesign of the on-device admin settings for Teams Rooms on Android; Microsoft Learn does not describe the redesign yet."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected licensing to include Teams Rooms legacy licences, replaced the no-API statement with the deprecated Graph cmdlet documentation, and narrowed the pre-rollout recording step."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected the controls table: the deprecated Update-MgBetaTeamworkDeviceConfiguration cmdlet is now listed as historical API documentation, and the portal path now ends at category and setting."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 49 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 48
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "b5d589ae54e7dd6c21e6c8a37422bc34"
---

## What's changing

Microsoft plans to redesign the on-device admin settings on Teams Rooms on Android. The roadmap item describes better information structure, organisation and navigation, so that admins can find, understand and adjust device settings directly from the console.

Microsoft Learn does not describe this redesign yet, so what follows about its behaviour is the roadmap's description. Learn documents the current on-device settings as **Teams Admin Settings** on a Teams Rooms on Android device, with sections such as General (for example Bluetooth beaconing) and Meetings (for example Show meeting names).

The roadmap item gives the status as In development and the target as January CY2027. The release phase is General Availability, the cloud is Worldwide (Standard Multi-Tenant) and the platform is Android. The target date is Microsoft's plan, not a commitment.

## Why it matters

This is a layout change to a screen that administrators use to configure rooms, so the effect falls on runbooks, screenshots and support scripts that quote today's Teams Admin Settings labels. Microsoft has not stated what happens on arrival, and no source says that existing setting values change, so plan for the layout moving rather than for settings being reset.

Because settings changed on the device are synchronised to the Teams Rooms Pro Management portal, the portal is a second place to check a room's configuration before and after the redesign reaches your devices.

## Risk assessment

**Data exposure**

- No new data access is described: the roadmap item covers settings structure and navigation only. Learn documents privacy-related switches on the device, such as Show meeting names under Teams Admin Settings > Meetings; record their values before the update and compare afterwards.

**Security & identity**

- Learn documents Require passcode for all meetings under Teams Admin Settings > Meetings on Teams Rooms on Android, and says the feature requires a Teams Rooms Pro licence on the device account. Confirm it is still set as intended once the new layout is on your devices.

**Autonomy & actions**

- No change: the roadmap item describes no autonomous or AI behaviour.

**Change & support**

- Settings may move in the console, so room technicians following existing instructions may not find them. Learn documents the Teams Rooms Pro Management portal (Rooms > device > Settings) as a place to change settings for Teams Rooms on Android devices, which is a second route while staff learn the new layout.

## Cost and licensing

**Licence.** The Teams Rooms licences page says Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licences (Teams Rooms legacy licences are also valid). It says Teams Rooms Basic provides core meeting experiences to organisations that purchase a certified Microsoft Teams Rooms system, at no additional cost, and that the Pro licence also provides advanced management features such as remote device management. The roadmap item names no licence for this redesign.

**Meter.** No meter is named in the roadmap item. A price, meter or licence condition specific to this redesign is not yet published.

**Indirect cost.** Admin time to update runbooks and brief room support staff.

## Scope

The roadmap item is aimed at admins who configure Teams Rooms on Android devices at the console. It lists the platform as Android, the cloud as Worldwide (Standard Multi-Tenant) and the release phase as General Availability; no other cloud is listed on the record.

The roadmap names no prerequisite. Learn documents that changing settings from the Teams Rooms Pro Management portal needs role-based access control permissions for Rooms Management and a signed-in device. Rollout mechanics are not stated.

## Governance guidance

### Before rollout

- Record the current value of Show meeting names in Teams Admin Settings on a representative Teams Rooms on Android device.
- Check which rooms hold Teams Rooms Pro licences, since the Learn page ties Require passcode for all meetings to a Pro licence on the device account.
- Tell room technicians that the roadmap targets the settings layout change for January CY2027.

### At rollout

- Open Teams Admin Settings on a pilot room after the update and compare each recorded value with what is shown.
- Check the room's Settings tab in the Teams Rooms Pro Management portal to see that it reflects the on-device values.

### After rollout

- Update runbooks and screenshots that quote the old Teams Admin Settings labels.
- Watch Message center and the Learn page on settings available for remote management, which says the full Android settings list is coming soon.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Settings of a Teams Rooms on Android device, changed remotely</strong><br><small class="controls__note">Needs Rooms Management RBAC permissions and a signed-in device. Categories: About, Account, Meetings, Device, Network. Historical documentation only: the underlying Graph beta device-management APIs are unsupported after November 2025.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › device › Settings › category › setting <a href="https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaTeamworkDeviceConfiguration -TeamworkDeviceId &lt;device-id&gt; -TeamsClientConfiguration &lt;teams-client-configuration&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.beta.teams/update-mgbetateamworkdeviceconfiguration?view=graph-powershell-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Meeting settings on the room console, such as whether meeting names show</strong><br><small class="controls__note">Path is as Learn documents it today; navigation will change. Set on the device. Licence comparison lists Show meeting names under Pro only. Historical documentation only: Graph beta APIs unsupported after November 2025.</small></td><td data-label="Admin UI"><strong>Teams Rooms on Android console</strong><br>Teams Admin Settings › Meetings › Show meeting names <a href="https://learn.microsoft.com/microsoftteams/rooms/mtr-home-refresh" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaTeamworkDeviceConfiguration -TeamworkDeviceId &lt;device-id&gt; -TeamsClientConfiguration @{ FeaturesConfiguration = @{ IsHideMeetingNamesEnabled = $true } }</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.beta.teams/update-mgbetateamworkdeviceconfiguration?view=graph-powershell-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents two places to change these settings: on the device under Teams Admin Settings, and remotely from the Teams Rooms Pro Management portal. Learn also says some Android settings can be updated with the Teams Rooms on Android configuration profile in the Teams admin center; it has no row in the table.

Remote changes from the portal need role-based access control permissions for Rooms Management, and Learn says settings management is available only for signed-in devices. Learn retains documentation for Update-MgBetaTeamworkDeviceConfiguration, including Bluetooth beaconing and hiding meeting names. The underlying Graph teamworkDevice APIs are deprecated and no longer supported after November 2025; this is not supported automation for the redesign. Nothing in the sources says whether the redesign can be deferred or switched off.

## Open questions

- Does the redesign arrive on every Teams Rooms on Android device automatically, and can administrators defer it? Watch Message center and the roadmap item.
- Will existing setting labels and paths, such as Teams Admin Settings > Meetings > Show meeting names, keep their names, and will Learn be updated when they move?
- Will the redesigned settings still match what the Teams Rooms Pro Management portal and the Teams admin center configuration profile show?
- Does the redesign add or remove any setting, or only reorganise existing ones?

<!-- rationale
risk: Low. The roadmap item describes a reorganised settings layout and names no new data access or autonomous behaviour; Microsoft has not stated whether existing settings values are touched.
cost: Low. The only cost the sources show is admin time to relearn the layout; the roadmap names no licence or meter, and rooms already need a Teams Rooms licence.
impact: Low. The roadmap item is about admins finding and changing device settings at the console, so the people who notice are those who configure Teams Rooms on Android devices.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support / admin-path: Rooms > device > Settings in the Teams Rooms Pro Management portal is a place to change device settings. | Found: Select the Settings tab in the device panel. Use the left navigation in the device panels to browse settings categories (About, Account, Meetings, Device, Network, etc.). Modify the desired settings using the form fields. | Fix: Replace the prose path 'Rooms > device > Settings' with 'Rooms > device > Settings > category > setting', matching controls[0].ui and https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings. | Source: https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist asks administrators to take stock of room licences, but no controls-table row covers that check. | Found: Check which rooms hold Teams Rooms Pro licences, since the Learn page ties Require passcode for all meetings to a Pro licence on the device account. The controls table covers remote device settings and on-console meeting settings, not licence stocktaking. | Fix: Remove the Before rollout bullet 'Check which rooms hold Teams Rooms Pro licences, since the Learn page ties Require passcode for all meetings to a Pro licence on the device account.' Do not add a controls-table row.
-->
