---
title: "Microsoft Teams: enhanced media quality for Direct Guest Join"
slug: "microsoft-teams-enhanced-media-quality-for-direct-guest-join"
roadmapId: 558922
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "The roadmap describes up to 16 videos (4×4 grid) and simulcast when joining Teams meetings from Zoom, Google Meet or Cisco devices through Direct Guest Join. Launched; no admin action is stated."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Teams and Surface Devices"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn's Teams Rooms licences page says Direct Guest Join (DGJ) is designed to let shared meeting devices join Teams meetings without a separate Teams meeting licence for the joining device, when implemented through Microsoft-supported interoperability experiences. No separate price or meter is published for the 4×4 grid or simulcast."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","pro-management-portal","direct-guest-join"]
sources:
  - title: "Microsoft 365 Roadmap 558922"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558922"
    kind: "roadmap"
  - title: "Third-party meetings on Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/third-party-join"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Manage a Microsoft Teams Rooms console settings remotely with an XML configuration file"
    url: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    kind: "learn"
  - title: "Resolve Direct Guest Join issues in Teams Rooms"
    url: "https://learn.microsoft.com/troubleshoot/microsoftteams/teams-rooms-and-devices/resolve-direct-guest-join-issues"
    kind: "learn"
  - title: "Microsoft Teams Rooms on Surface Hub"
    url: "https://learn.microsoft.com/surface-hub/surface-hub-teams-rooms"
    kind: "learn"
  - title: "Set-CalendarProcessing"
    url: "https://learn.microsoft.com/powershell/module/exchange/set-calendarprocessing"
    kind: "learn"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
videos: []
related: ["microsoft-teams-call-quality-feedback-surveys-for-teams-rooms-on-android","microsoft-teams-admin-center-intelligent-insights-for-meeting-quality"]
controls:
  - governs: "Whether a room joins Zoom, Google Meet and Cisco Webex meetings through Direct Guest Join"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > room > Settings > Meetings > provider"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/third-party-join"
    api:
      kind: "other"
      call: "<ZoomMeetingsEnabled>true</ZoomMeetingsEnabled>"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    note: "Background, for the opposite meeting direction. Per room. The XML element enables Zoom only in the Teams Rooms on Windows console settings file; it is not the automation for all three provider toggles."
  - governs: "Whether the room mailbox keeps third-party invite details so a Join button appears"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CalendarProcessing <UserPrincipalName> -ProcessExternalMeetingMessages $True -DeleteComments $False"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/third-party-join"
    note: "Background, for the opposite meeting direction. Exchange Online PowerShell, run per room mailbox. The -DeleteComments setting applies only to resource mailboxes with AutomateProcessing set to AutoAccept."
  - governs: "Tenant-wide switch for the 4×4 grid and simulcast improvements"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: Direct Guest Join gets a 4×4 video grid and simulcast; Learn does not yet describe either."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: meeting direction now follows the roadmap, SIP fallback and mailbox qualification added, control notes corrected."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 76 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: Google Meet DGJ on Teams Rooms for Android now reflects Learn's September 2026 release notes; action set to prepare; one firewall checklist bullet and a WebRTC aside removed."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 81 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-22"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 81
  confirmed: 81
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ca65a596da1fe877bfa80c26ff314b88"
---

## What's changing

The roadmap item says Direct Guest Join (DGJ) gets media quality improvements: support for up to 16 participant videos in a 4×4 grid, available in May, and simulcast streaming in June. It describes them as making cross-platform meetings more immersive and reliable when joining Teams meetings from Zoom, Google Meet or Cisco devices.

The roadmap direction is a Zoom, Google Meet or Cisco device joining a Teams meeting. Microsoft Learn's third-party meetings page covers the opposite direction, a Teams Rooms device joining a third-party meeting over WebRTC, and describes it alongside the SIP-based alternative, cross-platform meetings via SIP join. That material is background on DGJ, not a description of these improvements. The roadmap item still says DGJ is not yet available for Google Meet on Teams Rooms for Android, but Learn's September 2026 Android release notes announce two-way Google Meet DGJ in version 1449/1.0.96.2026261804 ([Teams Rooms release notes](https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution)).

The roadmap record shows status Launched, release phase General Availability, target May CY2026, cloud Worldwide (Standard Multi-Tenant) and platform Teams and Surface Devices. Microsoft Learn does not describe the 4×4 grid or simulcast at the time of writing (November 2026): its third-party meetings page, which is about Teams Rooms joining third-party meetings, lists DGJ receive video as up to 720p / 30 fps. What this page says about the grid and simulcast is therefore the roadmap's description.

## Why it matters

For most tenants this is a quality improvement, not a decision. The meetings the roadmap says are affected are Teams meetings joined through DGJ from Zoom, Google Meet or Cisco devices. Microsoft has not stated whether the improvements need any setting, so treat them as arriving with DGJ rather than as something you switch on.

The Teams Rooms configuration Learn documents for DGJ is background, because it governs rooms joining third-party meetings, the opposite direction. It is still useful context: Learn says those rooms connect directly to the third-party platform's website, so firewalls, web filters and QoS must allow it, and each room needs the provider switched on and its mailbox set to keep invite details.

## Risk assessment

**Data exposure**
- The roadmap item states no new data access. Background, for Teams Rooms joining third-party meetings: devices connect directly to the third-party platform's website, so that meeting runs on that platform; check that platform's own settings for what it records or shares.

**Security & identity**
- Background, for Teams Rooms joining third-party meetings: a room joins with the username and email address of its room mailbox, or with a custom name and email you set per device, so guests of the other platform see that identity.
- Background, for the same direction: joining third-party and externally scheduled invites relies on the room mailbox processing external meeting messages (`ProcessExternalMeetingMessages`). That is an existing prerequisite, not a new one.

**Autonomy & actions**
- No change: the roadmap describes video layout and streaming, and nothing the room or device does on its own.

**Change & support**
- Users may see more videos on screen in DGJ meetings. Whether more video or simulcast changes bandwidth needs is not stated, so confirm it with your network team before assuming current firewall and QoS rules suffice.
- Background, for Teams Rooms joining third-party meetings: SIP-enabled rooms use SIP for enabled third-party meetings, but automatically fall back to DGJ over WebRTC for calendar-joined invitations without a SIP dial string; join by ID fails when the meeting lacks SIP capabilities ([Learn](https://learn.microsoft.com/microsoftteams/rooms/third-party-join)).
- Background: Learn's DGJ troubleshooting page covers the common failures for Teams Rooms: a missing Join button, forwarded invites that do not parse and cameras that stay off in Zoom meetings.

## Cost and licensing

**Licence.** Learn's Teams Rooms licences page says DGJ is designed to let shared meeting devices join Teams meetings without a separate Teams meeting licence for the joining device, when implemented through Microsoft-supported interoperability experiences. Background, for Teams Rooms joining third-party meetings: Learn's third-party meetings page lists Teams Rooms Basic and Teams Rooms Pro as the licences for DGJ, and the Teams Rooms licences page marks Direct Guest Join for Zoom and Webex meetings under both. Teams Rooms Basic can be assigned to up to 25 Teams Rooms systems in an organisation; beyond that, Teams Rooms Pro is needed.

**Meter.** Neither page publishes a separate price or meter for the 4×4 grid or simulcast.

**Indirect costs.** Background, for Teams Rooms joining third-party meetings: Learn contrasts DGJ with SIP join, which needs a paid SIP dialling plan; DGJ does not, but needs direct internet access from the room. Expect admin time to enable providers per room and network-team time to check firewall, web filter and QoS rules. Remote configuration through the Pro Management portal is listed for Teams Rooms Pro only.

## Scope

**Who and what.** The roadmap describes people using DGJ to join Teams meetings from Zoom, Google Meet or Cisco devices, and lists Teams and Surface Devices as the platform. Background, for Teams Rooms joining third-party meetings: Learn describes Teams Rooms on Windows and on Android, and states that Teams Rooms on Surface Hub supports DGJ.

**Providers.** The roadmap names Zoom, Google Meet and Cisco devices, and still says DGJ for Google Meet is not yet available on Teams Rooms for Android; Learn's September 2026 Android release notes announce two-way Google Meet DGJ in version 1449/1.0.96.2026261804 ([Teams Rooms release notes](https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution)). Background: Learn's join-button row for DGJ, for Teams Rooms joining third-party meetings, lists Cisco Webex, Zoom and Google Meet.

**Cloud and rollout.** The roadmap lists Worldwide (Standard Multi-Tenant) only. The roadmap gives May CY2026 for the 4×4 grid and June for simulcast; status is Launched.

**Prerequisites for Teams Rooms joining third-party meetings (background, from Learn).** Understand whether DGJ or SIP join suits you, configure the room mailbox to process third-party and external invites, make sure no tenant policy blocks the rooms from the third-party services, and enable third-party meetings on each device. If you use a third-party URL-scanning solution rather than Defender for Office 365 Safe Links, it may rewrite join links and make the meeting unrecognisable to the room; Learn says to add the provider's URLs to its exception list. Learn lists none of this as a prerequisite for the roadmap improvements.

## Governance guidance

### Before rollout
- Ask the network team whether the 4×4 grid or simulcast changes the bandwidth DGJ meetings need, because Microsoft has not stated it.
- Check in the Teams Rooms Pro Management portal which rooms have Zoom, Google Meet or Cisco Webex switched on under Meetings; this is background for rooms joining third-party meetings, not a prerequisite for the roadmap improvements.
- Check each room mailbox that will join third-party meetings against the `Set-CalendarProcessing` step on the third-party meetings page, which sets `ProcessExternalMeetingMessages` and `DeleteComments`; the `-DeleteComments` setting applies only to resource mailboxes with AutomateProcessing set to AutoAccept.

### At rollout
- Test a Teams meeting that a guest joins from a Zoom, Google Meet or Cisco device and note the video layout.
- Report to room users that the roadmap still says Google Meet DGJ is not yet available on Teams Rooms for Android, while Learn's September 2026 Android release notes announce two-way Google Meet DGJ in version 1449/1.0.96.2026261804, rather than telling them it is unavailable.

### After rollout
- Collect help-desk reports of missing Join buttons or unparsed forwarded invites and apply the fixes on Learn's DGJ troubleshooting page.
- Re-check Learn's third-party meetings page for a description of the 4×4 grid and simulcast, and for any change to the 720p / 30 fps limit it lists.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a room joins Zoom, Google Meet and Cisco Webex meetings through Direct Guest Join</strong><br><small class="controls__note">Background, for the opposite meeting direction. Per room. The XML element enables Zoom only in the Teams Rooms on Windows console settings file; it is not the automation for all three provider toggles.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › room › Settings › Meetings › provider <a href="https://learn.microsoft.com/microsoftteams/rooms/third-party-join" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>&lt;ZoomMeetingsEnabled&gt;true&lt;/ZoomMeetingsEnabled&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/xml-config-file" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the room mailbox keeps third-party invite details so a Join button appears</strong><br><small class="controls__note">Background, for the opposite meeting direction. Exchange Online PowerShell, run per room mailbox. The -DeleteComments setting applies only to resource mailboxes with AutomateProcessing set to AutoAccept.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CalendarProcessing &lt;UserPrincipalName&gt; -ProcessExternalMeetingMessages $True -DeleteComments $False</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/third-party-join" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the 4×4 grid and simulcast improvements</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

There is no documented tenant-wide switch for the 4×4 grid or simulcast. The first two rows govern Teams Rooms joining third-party meetings, the opposite direction to these improvements, and are listed as background.

- Remote configuration of rooms is listed for Teams Rooms Pro only. Settings changes from the Pro Management portal apply only to signed-in devices and queue a job that restarts the device, so use Schedule Later to avoid meeting hours.
- Each provider can also be switched on from the device's own settings; Learn gives the steps for the Windows console and the Android device.
- Microsoft recommends the Pro Management portal over the XML configuration file and states it no longer publishes new XML settings.
- Safe Links in Defender for Office 365 needs no extra step for third-party links, per Learn; a different URL-scanning product may need an exception list, and Learn describes that step on the third-party meetings page.

## Open questions

- Which Learn page will describe the 4×4 grid and simulcast, and will the DGJ receive video limit of up to 720p / 30 fps on the third-party meetings page change? Watch the page and the Teams Rooms release notes.
- Do the improvements need a client version, a device setting or a licence beyond DGJ itself? Microsoft has not stated the default.
- Do the 4×4 grid and simulcast change the network bandwidth DGJ needs? Watch the third-party meetings page, Step 3B.
- Which Zoom, Google Meet and Cisco devices get the grid and simulcast? Watch the roadmap item and Learn.

<!-- rationale
risk: Low. The roadmap describes video grid and streaming improvements to an existing join method and states no new data access, autonomous action or admin setting.
cost: Low. No separate price or meter is published for the grid or simulcast, and the roadmap states no new licence; the cost is admin and network-team time.
impact: Low. The roadmap describes the improvements as changes to video layout and streaming for people using Direct Guest Join to join Teams meetings from Zoom, Google Meet or Cisco devices; no admin setting is stated.
-->
