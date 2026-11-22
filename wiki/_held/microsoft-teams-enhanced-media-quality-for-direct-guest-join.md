---
title: "Microsoft Teams: enhanced media quality for Direct Guest Join"
slug: "microsoft-teams-enhanced-media-quality-for-direct-guest-join"
roadmapId: 558922
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms that join Zoom, Google Meet or Cisco meetings by Direct Guest Join get up to 16 videos (4×4 grid) and simulcast, per the roadmap. Launched; no admin action is stated, but rooms need DGJ enabled and a clear network path."
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
action: "review"
licensing:
  model: "included"
  notes: "Learn's third-party meetings page lists Teams Rooms Basic and Teams Rooms Pro for Direct Guest Join, and the Teams Rooms licences page marks it for both. No separate price or meter is published for the 4×4 grid or simulcast."
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
videos: []
related: ["microsoft-teams-call-quality-feedback-surveys-for-teams-rooms-on-android","microsoft-teams-admin-center-intelligent-insights-for-meeting-quality"]
controls:
  - governs: "Whether a room joins Zoom, Google Meet and Cisco Webex meetings through Direct Guest Join"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms > room > Settings > Meetings"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/third-party-join"
    api:
      kind: "other"
      call: "<ZoomMeetingsEnabled>true</ZoomMeetingsEnabled>"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    note: "Per room. The portal route lists a toggle per provider and supports bulk jobs; remote configuration is Teams Rooms Pro only. The XML element is the console settings file; Microsoft recommends the portal."
  - governs: "Whether the room mailbox keeps third-party invite details so a Join button appears"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CalendarProcessing <UserPrincipalName> -ProcessExternalMeetingMessages $True -DeleteComments $False"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/third-party-join"
    note: "Exchange Online PowerShell, run per room mailbox. The third-party meetings page gives this step as PowerShell only."
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
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 59
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "8c0f7666644b2a00b616333ba81af17a"
---

## What's changing

The roadmap item says Direct Guest Join (DGJ) gets media quality improvements: support for up to 16 participant videos in a 4×4 grid, available in May, and simulcast streaming in June. It describes them as making cross-platform meetings more immersive and reliable when joining from Zoom, Google Meet or Cisco devices.

DGJ is the way a Teams Rooms device joins a third-party meeting over WebRTC, a browser-style real-time media technology. Microsoft Learn describes it alongside the SIP-based alternative, cross-platform meetings via SIP join. The roadmap item also states that DGJ is not yet available for Google Meet on Teams Rooms for Android.

The roadmap record shows status Launched, release phase General Availability, target May CY2026, cloud Worldwide (Standard Multi-Tenant) and platform Teams and Surface Devices. Microsoft Learn does not describe the 4×4 grid or simulcast at the time of writing (November 2026): its third-party meetings page still lists DGJ receive video as up to 720p / 30 fps. What this page says about the grid and simulcast is therefore the roadmap's description.

## Why it matters

For most tenants this is a quality improvement, not a decision. Rooms that already join Zoom, Google Meet or Cisco meetings through DGJ are the ones that may show more participants at once. Microsoft has not stated whether the improvements need any setting, so treat them as arriving with DGJ rather than as something you switch on.

The work for an administrator is in what DGJ already depends on. Learn says rooms connect directly to the third-party platform's website, so firewalls, web filters and QoS must allow it, and each room needs the provider switched on and its mailbox set to keep invite details. A room that cannot join today will not benefit from a better grid.

## Risk assessment

**Data exposure**
- The roadmap item states no new data access. Under DGJ, Teams Rooms devices connect directly to the third-party platform's website, so the meeting itself runs on that platform; check that platform's own settings for what it records or shares.

**Security & identity**
- A room joins with the username and email address of its room mailbox, or with a custom name and email you set per device, so guests of the other platform see that identity. Decide which each room should use.
- Joining third-party and externally scheduled invites relies on the room mailbox processing external meeting messages (`ProcessExternalMeetingMessages`). That is an existing prerequisite, not a new one, but it applies to every room you enable.

**Autonomy & actions**
- No change: the roadmap describes video layout and streaming, and nothing the room does on its own.

**Change & support**
- Users may see more videos on screen in DGJ meetings. Whether more video or simulcast changes bandwidth needs is not stated, so confirm it with your network team before assuming current firewall and QoS rules suffice.
- Learn says a room with SIP calling enabled uses SIP instead of WebRTC to join the enabled third-party meetings. Rooms in that state may not use DGJ for those meetings; confirm which rooms are affected.
- Learn's DGJ troubleshooting page covers the common failures: a missing Join button, forwarded invites that do not parse and cameras that stay off in Zoom meetings.

## Cost and licensing

**Licence.** Learn's third-party meetings page lists Teams Rooms Basic and Teams Rooms Pro as the licences for DGJ, and the Teams Rooms licences page marks Direct Guest Join for Zoom and Webex meetings under both. Teams Rooms Basic can be assigned to up to 25 Teams Rooms systems in an organisation; beyond that, Teams Rooms Pro is needed.

**Meter.** Neither page publishes a separate price or meter for the 4×4 grid or simulcast.

**Indirect costs.** Learn contrasts DGJ with SIP join, which needs a paid SIP dialling plan; DGJ does not, but needs direct internet access from the room. Expect admin time to enable providers per room and network-team time to check firewall, web filter and QoS rules. Remote configuration through the Pro Management portal is listed for Teams Rooms Pro only.

## Scope

**Who and what.** Teams Rooms devices that join third-party meetings by DGJ. Learn describes Teams Rooms on Windows and on Android, and states that Teams Rooms on Surface Hub supports DGJ. The roadmap lists Teams and Surface Devices as the platform.

**Providers.** The roadmap names Zoom, Google Meet and Cisco devices, and notes that DGJ for Google Meet is not yet available on Teams Rooms for Android. Learn's join-button row for DGJ lists Cisco Webex, Zoom and Google Meet.

**Cloud and rollout.** The roadmap lists Worldwide (Standard Multi-Tenant) only. The roadmap gives May CY2026 for the 4×4 grid and June for simulcast; status is Launched.

**Prerequisites (from Learn).** Understand whether DGJ or SIP join suits you, configure the room mailbox to process third-party and external invites, make sure no tenant policy blocks the rooms from the third-party services, and enable third-party meetings on each device. If you use a third-party URL-scanning solution rather than Defender for Office 365 Safe Links, it may rewrite join links and make the meeting unrecognisable to the room; Learn says to add the provider's URLs to its exception list.

## Governance guidance

### Before rollout
- Check in the Teams Rooms Pro Management portal which rooms have Zoom, Google Meet or Cisco Webex switched on under Meetings, and which use the room mailbox identity or a custom name and email.
- Check each room mailbox that will join third-party meetings against the `Set-CalendarProcessing` step on the third-party meetings page, which sets `ProcessExternalMeetingMessages` and `DeleteComments`.
- Ask the network team to confirm that firewalls and web filters allow the rooms to reach each provider's website without authentication, with the right QoS class if you use one.
- Find out which rooms have SIP calling enabled, because Learn says those rooms use SIP instead of WebRTC for the enabled third-party meetings.

### At rollout
- Test one room per hardware type by joining a Zoom and a Google Meet meeting from the calendar Join button and noting the video layout.
- Enable providers in bulk with a Device Settings job in the Pro Management portal where you have many rooms with Teams Rooms Pro licences.
- Tell room users that Google Meet through DGJ is not yet available on Teams Rooms for Android, per the roadmap.

### After rollout
- Collect help-desk reports of missing Join buttons or unparsed forwarded invites and apply the fixes on Learn's DGJ troubleshooting page.
- Re-check Learn's third-party meetings page for a description of the 4×4 grid and simulcast, and for any change to the 720p / 30 fps limit it lists.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a room joins Zoom, Google Meet and Cisco Webex meetings through Direct Guest Join</strong><br><small class="controls__note">Per room. The portal route lists a toggle per provider and supports bulk jobs; remote configuration is Teams Rooms Pro only. The XML element is the console settings file; Microsoft recommends the portal.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms › room › Settings › Meetings <a href="https://learn.microsoft.com/microsoftteams/rooms/third-party-join" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>&lt;ZoomMeetingsEnabled&gt;true&lt;/ZoomMeetingsEnabled&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/xml-config-file" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the room mailbox keeps third-party invite details so a Join button appears</strong><br><small class="controls__note">Exchange Online PowerShell, run per room mailbox. The third-party meetings page gives this step as PowerShell only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CalendarProcessing &lt;UserPrincipalName&gt; -ProcessExternalMeetingMessages $True -DeleteComments $False</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/third-party-join" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for the 4×4 grid and simulcast improvements</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

There is no documented tenant-wide switch for the 4×4 grid or simulcast, so the controls that matter are the ones that decide whether a room can use DGJ at all.

- Remote configuration of rooms is listed for Teams Rooms Pro only. Settings changes from the Pro Management portal apply only to signed-in devices and queue a job that restarts the device, so use Schedule Later to avoid meeting hours.
- Each provider can also be switched on from the device's own settings; Learn gives the steps for the Windows console and the Android device.
- Microsoft recommends the Pro Management portal over the XML configuration file and states it no longer publishes new XML settings.
- Safe Links in Defender for Office 365 needs no extra step for third-party links, per Learn; a different URL-scanning product may need an exception list, and Learn describes that step on the third-party meetings page.

## Open questions

- Which Learn page will describe the 4×4 grid and simulcast, and will the DGJ receive video limit of up to 720p / 30 fps on the third-party meetings page change? Watch the page and the Teams Rooms release notes.
- Do the improvements need a room app version, a room setting or a licence beyond DGJ being enabled? Microsoft has not stated the default.
- Do the 4×4 grid and simulcast change the network bandwidth DGJ needs? Watch the third-party meetings page, Step 3B.
- Do the improvements apply to meetings joined by SIP on rooms that have SIP calling enabled?
- When will DGJ for Google Meet reach Teams Rooms on Android? Watch the roadmap item.

<!-- rationale
risk: Low. The roadmap describes video grid and streaming improvements to an existing join method and states no new data access, autonomous action or admin setting.
cost: Low. Learn lists Direct Guest Join under Teams Rooms Basic and Teams Rooms Pro, and no separate price or meter is published for the grid or simulcast; the cost is admin and network-team time.
impact: Low. Only people in Teams Rooms that join Zoom, Google Meet or Cisco meetings through Direct Guest Join see the change, and it affects video layout and streaming, not how they join.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] summary; What's changing; Why it matters; Scope; rationale: impact / record: The roadmap improvements affect Teams Rooms joining Zoom, Google Meet or Cisco meetings through DGJ. | Found: These updates make cross-platform meetings more immersive and reliable when joining Teams meetings from Zoom, Google Meet, or Cisco devices. | Fix: Replace the summary's first sentence with 'The roadmap describes up to 16 videos (4×4 grid) and simulcast when joining Teams meetings from Zoom, Google Meet or Cisco devices through Direct Guest Join.' Use that meeting direction throughout What's changing and Scope. Remove statements in Why it matters, Risk assessment and the impact rationale that assign these improvements exclusively to Teams Rooms joining other platforms. Label the existing Teams Rooms configuration material as background for the opposite meeting direction, not as a prerequisite or control for these roadmap improvements.
- [contradicted, blocker] Risk assessment: Change & support; Governance guidance: Before rollout; Open questions / behaviour: Enabling SIP calling makes the room use SIP instead of WebRTC for enabled third-party meetings. | Found: Teams Rooms will automatically use Direct Guest Join over WebRTC if the third party meeting invite doesn't contain a SIP dial string. ... Automatic fallback to WebRTC DGJ works for meetings using the calendar join button. | Fix: Replace the unqualified SIP statement in Risk assessment and Governance guidance with 'SIP-enabled rooms use SIP for enabled third-party meetings, but automatically fall back to DGJ over WebRTC for calendar-joined invitations without a SIP dial string; join by ID fails when the meeting lacks SIP capabilities.' Cite https://learn.microsoft.com/microsoftteams/rooms/third-party-join. | Source: https://learn.microsoft.com/microsoftteams/rooms/third-party-join
- [contradicted, blocker] controls[1].note and governs; Why it matters; Governance guidance: Before rollout / applicability: The printed mailbox command preserves invitation text for each room mailbox without another mailbox-processing qualification. | Found: The DeleteComments parameter specifies whether to remove or keep any text in the message body of incoming meeting requests. ... This parameter is used only on resource mailboxes where the AutomateProcessing parameter is set to AutoAccept. | Fix: Add 'The -DeleteComments setting applies only to resource mailboxes with AutomateProcessing set to AutoAccept' to controls[1].note and its rendered note, and qualify the mailbox-check instruction with 'for resource mailboxes with AutomateProcessing set to AutoAccept'. Cite https://learn.microsoft.com/powershell/module/exchange/set-calendarprocessing in sources. Keep the documented command unchanged. | Source: https://learn.microsoft.com/powershell/module/exchange/set-calendarprocessing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table; Governance guidance / admin-path: The provider controls are reached through Teams Rooms Pro Management portal > Rooms > room > Settings > Meetings. | Found: Select Rooms. ... Select your desired room. ... Select Settings. ... Select Meetings. ... Toggle your desired meeting platforms (for example, Cisco Webex, Zoom, Google Meet, etc.). | Fix: Extend controls[0].ui.path and its rendered table path to 'Rooms > room > Settings > Meetings > provider'. The current path stops on the correct settings page but omits the provider toggle. | Source: https://learn.microsoft.com/microsoftteams/rooms/third-party-join
- [supported, minor] controls[0].api; controls[0].note; Governance controls table / command: The XML element <ZoomMeetingsEnabled>true</ZoomMeetingsEnabled> enables Zoom DGJ. | Found: | <ZoomMeetingsEnabled> | Boolean ❷ | First ❶ | Disabled by default. If true, enables direct guest join experience for Zoom meetings. | | Fix: In controls[0].note and its rendered note, replace 'The XML element is the console settings file' with 'The XML element enables Zoom only in the Teams Rooms on Windows console settings file; it is not the automation for all three provider toggles.' Keep the existing XML element and reference. | Source: https://learn.microsoft.com/microsoftteams/rooms/xml-config-file
- [contradicted, minor] Governance guidance: Before rollout and At rollout; controls / consistency: The governance checklist's named controls are represented in the controls table. | Found: Check ... which use the room mailbox identity or a custom name and email. ... Find out which rooms have SIP calling enabled. ... Enable providers in bulk with a Device Settings job. | Fix: The identity-selection, SIP-calling and bulk Device Settings job checklist steps have no matching control rows; the table contains only per-room provider toggles, mailbox processing and a missing enhancement switch. Remove these checklist instructions if they are retained without matching table coverage; do not add rows as part of this correction.
-->
