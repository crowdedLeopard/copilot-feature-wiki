---
title: "Microsoft Teams Rooms on Windows: view two shared screens side by side in meetings"
slug: "microsoft-teams-multiple-screen-shares-in-teams-rooms-on-windows"
roadmapId: 579184
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to let Teams Rooms on Windows show up to two shared screens side by side, targeted for January CY2027 and available with Teams Rooms Pro. No admin setting is documented yet; brief room users and support staff."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Teams and Surface Devices"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The roadmap item states the feature is available with Teams Rooms Pro. Microsoft's Teams Rooms licences page says a feature not available for a licence can't be used on devices assigned that licence. No price specific to this feature is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams-rooms","teams","dual-display","pro-management-portal","meeting-policy","sharing"]
sources:
  - title: "Microsoft 365 Roadmap 579184"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579184"
    kind: "roadmap"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Meeting room guidance for Teams"
    url: "https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance"
    kind: "learn"
  - title: "Manage a Microsoft Teams Rooms console settings remotely with an XML configuration file"
    url: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    kind: "learn"
  - title: "Manage meeting policies for content sharing"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-two-presenters-can-share-their-screens-or-windows-simultaneously-in-meetin","microsoft-teams-show-your-shared-content-on-both-room-displays","meeting-policy"]
controls:
  - governs: "Room or tenant switch for showing two screen shares side by side on Teams Rooms on Windows"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting in the Pro Management portal settings list or the XML configuration file at the time of writing (November 2026)."
  - governs: "Whether Multiple Screenshare meeting options are available to organisers"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowMultipleScreenshare $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Default True. The reference says the feature has not been fully released, so the setting has no effect, and does not mention Teams Rooms."
  - governs: "Whether a user can share a desktop or window in meetings (existing control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Content sharing > Screen sharing mode"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ScreenSharingMode Disabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Per-user policy for presenters; it decides whether they can share at all, not how a room lays out two shares."
  - governs: "Whether a Teams Rooms on Windows device uses dual monitor mode"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > device > Settings > Device > Dual monitor mode"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance"
    api:
      kind: "other"
      call: "SkypeSettings.xml element DualScreenMode set to true"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    note: "Per device, disabled by default. Dual screen support is a Teams Rooms Pro feature. Existing setting; not documented as a control for this feature."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-27"
    note: "New briefing: planned side-by-side view of two shared screens on Teams Rooms on Windows with a Pro licence, with the related meeting policy and dual monitor settings."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 48 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected three unsupported statements: Why it matters no longer asserts the change leaves data and identity untouched, and Autonomy & actions now says the roadmap names no autonomous actions."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bd68c902276397103358b93022e90f58"
---

## What's changing

Microsoft plans to let Teams Rooms on Windows show up to two shared screens side by side during a meeting, so a second presenter does not have to take over the first presenter's share. The roadmap item states that participants can switch between side-by-side and expanded views, see which presenter owns each screen, and get layouts optimised for single or dual displays. It states the feature is available with Teams Rooms Pro.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The Teams Rooms release notes list no such entry at the time of writing (November 2026). Microsoft has not stated whether the layouts appear automatically on Pro-licensed rooms or need a setting.

The roadmap item is **In development**, with a General Availability target of **January CY2027**, for the Worldwide (Standard Multi-Tenant) cloud and the Desktop and Teams and Surface Devices platforms. The meeting-side change that lets two presenters share at once has its own briefing: [/features/microsoft-teams-two-presenters-can-share-their-screens-or-windows-simultaneously-in-meetin/](/features/microsoft-teams-two-presenters-can-share-their-screens-or-windows-simultaneously-in-meetin/).

## Why it matters

For room service owners, the roadmap describes a change to what people see on the front-of-room displays. Because the roadmap ties it to Teams Rooms Pro, an estate that mixes Pro and Basic rooms should expect different behaviour from room to room when two people share. The licences page lists dual screen support as a Pro feature too, and the Pro Management portal lists **Dual Monitor mode** as disabled by default, so confirm after release which layout each room shows.

Microsoft has not stated what happens on arrival. Plan as though Pro rooms may start showing two shares once the Teams Rooms app update lands in January CY2027, and prepare a short note for room users and the service desk explaining the side-by-side and expanded views.

## Risk assessment

**Data exposure**
- Two shares can be on the room displays at once, so more meeting content is visible to people in the room at the same time. The content is what presenters chose to share; who may share is set by the meeting policy's **Screen sharing mode** (row 3).

**Security & identity**
- No change described: the roadmap names no new sign-in, permission or account for the room.

**Autonomy & actions**
- The roadmap describes displaying shared screens and switching views; it names no autonomous actions.

**Change & support**
- Room users meet new layouts and a view switch without training, and Pro and Basic rooms may behave differently when two people share. Expect service desk questions about why one room shows both shares and another does not.
- Microsoft Learn documents no room-level or tenant-level setting for this feature at the time of writing (row 1), so a phased rollout by room cannot yet be planned.

## Cost and licensing

- **Licence.** The roadmap item states the feature is available with Teams Rooms Pro. The [Microsoft Teams Rooms licenses](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing) page says that if a feature isn't available for a licence, it can't be used on Teams Rooms devices assigned that licence, and lists **Dual screen support** under Teams Rooms Pro only.
- **Basic rooms.** The same page says up to 25 Teams Rooms Basic licences can be assigned, with additional rooms needing Pro. Rooms on Basic would need a Pro licence to get this feature.
- **Meter.** The roadmap item describes no consumption charge, and no meter is documented for this feature.
- **Indirect costs.** Admin time to brief room users and the service desk, and to decide which rooms run dual monitor mode.
- **Not yet published.** A price specific to this feature.

## Scope

- **Devices.** Teams Rooms on Windows, per the roadmap title; the record lists the Desktop and Teams and Surface Devices platforms.
- **Licence.** Rooms with Teams Rooms Pro, per the roadmap item.
- **Displays.** Layouts for single and dual displays, per the roadmap. Dual monitor mode is a per-device setting in the Teams Rooms Pro Management portal, disabled by default.
- **Cloud.** Worldwide (Standard Multi-Tenant) only on the roadmap item.
- **Roles.** Changing device settings in the Pro Management portal needs the portal's role-based access control permissions for Rooms Management.
- **Rollout.** Target January CY2027 (General Availability). Mechanics are not stated.

## Governance guidance

### Before rollout
- Take stock of which Teams Rooms on Windows devices hold Pro and which hold Basic licences, using the License Type column in the Pro Management portal's Rooms or Inventory view.
- Check which Pro rooms have **Dual monitor mode** turned on in the Pro Management portal (row 4), since the roadmap describes separate layouts for single and dual displays.
- Confirm that the meeting policy **Screen sharing mode** for presenters (row 3) matches what you are comfortable showing in rooms.
- Prepare a short note for room users and the service desk on the side-by-side and expanded views.

### At rollout
- Watch the Teams Rooms release notes and Message center for the Teams Rooms on Windows update that carries the feature, and for any setting it introduces.
- Test two simultaneous shares in one Pro room with single and one with dual displays before announcing the change.

### After rollout
- Review service desk tickets from rooms for confusion over the new layouts or differences between Pro and Basic rooms.
- Revisit the Pro Management portal settings list for a new setting for this feature and add it to your room templates if one appears.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Room or tenant switch for showing two screen shares side by side on Teams Rooms on Windows</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting in the Pro Management portal settings list or the XML configuration file at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether Multiple Screenshare meeting options are available to organisers</strong><br><small>User</small><br><small class="controls__note">Default True. The reference says the feature has not been fully released, so the setting has no effect, and does not mention Teams Rooms.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowMultipleScreenshare $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user can share a desktop or window in meetings (existing control)</strong><br><small>User</small><br><small class="controls__note">Per-user policy for presenters; it decides whether they can share at all, not how a room lays out two shares.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Content sharing › Screen sharing mode <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ScreenSharingMode Disabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a Teams Rooms on Windows device uses dual monitor mode</strong><br><small class="controls__note">Per device, disabled by default. Dual screen support is a Teams Rooms Pro feature. Existing setting; not documented as a control for this feature.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › device › Settings › Device › Dual monitor mode <a href="https://learn.microsoft.com/microsoftteams/rooms/room-planning-guidance" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>SkypeSettings.xml element DualScreenMode set to true</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/xml-config-file" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns this feature on or off for a room or a tenant at the time of writing (November 2026). The Teams Rooms XML configuration page says Microsoft no longer publishes new XML settings and that all settings are manageable in the Pro Management portal.
- The **AllowMultipleScreenshare** meeting policy parameter (row 2) controls Multiple Screenshare meeting options for organisers. Its reference says the feature has not been fully released, so the setting has no effect, and does not mention Teams Rooms. Treat it as the control for multiple sharing in meetings, not for room layouts.
- **Screen sharing mode** (row 3) is a per-user policy that decides whether a user can share a desktop or window at all; it does not change how a room lays out shares.
- Device settings in the Pro Management portal need the portal's role-based access control permissions for Rooms Management, and apply only to signed-in devices.

## Open questions

- Will the side-by-side layout appear automatically on Pro-licensed Teams Rooms on Windows devices, or will it need a setting in the Pro Management portal? Watch Message center and the Teams Rooms release notes.
- Does the AllowMultipleScreenshare meeting policy parameter, once it takes effect, decide whether a room ever receives two shares?
- What does a Teams Rooms Basic room show when two presenters share at once in a meeting?
- Which Teams Rooms on Windows app version will carry the feature, and will it reach rooms through the usual automatic updates?

<!-- rationale
risk: Low. The room shows content that presenters already chose to share in the meeting; Microsoft describes no new data access, and who may share stays under the meeting policy's screen sharing setting.
cost: Low. The roadmap item says the feature is available with Teams Rooms Pro, so rooms already on Pro need no new licence; the cost is support and user communication, plus Pro licences for any Basic rooms that should get it.
impact: Medium. People meeting in Teams Rooms on Windows rooms with a Pro licence notice the new layouts, along with the room support team; people in other rooms do not.
-->
