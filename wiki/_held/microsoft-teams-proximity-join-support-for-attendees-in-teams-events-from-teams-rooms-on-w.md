---
title: "Microsoft Teams Rooms: proximity join for attendees of Teams events"
slug: "microsoft-teams-proximity-join-support-for-attendees-in-teams-events-from-teams-rooms-on-w"
roadmapId: 568781
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Attendees of Teams events (town halls, webinars, structured meetings) can connect to a nearby Teams Rooms device on Windows or Android. Microsoft says it is on by default and needs no admin action; tell room users."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Android","Desktop","iOS","Mac","Teams and Surface Devices"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn lists joining Teams meetings with 1-touch, proximity and meeting ID under both Teams Rooms Basic and Teams Rooms Pro. A licence or meter specific to attendee proximity join in events is not yet published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","teams-rooms","teams-events","pro-management-portal","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 568781"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568781"
    kind: "roadmap"
  - title: "MC1461157: (Updated) Microsoft Teams: Proximity join support for attendees in Teams events from Teams Rooms on Windows and Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1461157"
    kind: "message-center"
  - title: "Proximity Join using Bluetooth and ultrasound"
    url: "https://learn.microsoft.com/microsoftteams/rooms/proximity-join"
    kind: "learn"
  - title: "Managing settings for Teams devices"
    url: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    kind: "learn"
  - title: "Settings available for remote management in Teams Rooms Pro management portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/device-settings-available"
    kind: "learn"
  - title: "Manage a Microsoft Teams Rooms console settings remotely with an XML configuration file"
    url: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    kind: "learn"
  - title: "Microsoft Teams Rooms licenses"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing"
    kind: "learn"
  - title: "Meetings and events feature and capacity comparison"
    url: "https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison"
    kind: "learn"
  - title: "Teams Device feature comparison (Windows, Android, & Panels)"
    url: "https://learn.microsoft.com/microsoftteams/rooms/teams-devices-feature-comparison"
    kind: "learn"
  - title: "Microsoft Teams Rooms on Windows and Teams Android device security"
    url: "https://learn.microsoft.com/microsoftteams/rooms/security"
    kind: "learn"
videos: []
related: ["microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webin-557165","microsoft-teams-front-of-room-view-control-for-webinars-and-structured-meetings-in-teams-r","microsoft-teams-standard-and-basic-licensed-teams-rooms-on-windows-in-the-pro-management-p"]
controls:
  - governs: "Bluetooth beaconing on a Teams Rooms device, which proximity join uses to find the room"
    scope: "other"
    ui:
      surface: "Teams Rooms Pro Management portal"
      path: "Rooms/ Phones > device > Settings > Device"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings"
    api:
      kind: "other"
      call: "SkypeSettings.xml element <BluetoothAdvertisementEnabled>"
      docs: "https://learn.microsoft.com/microsoftteams/rooms/xml-config-file"
    note: "The Allow Bluetooth beaconing toggle is in the Device category for Windows (enabled by default). The XML file applies to Teams Rooms on Windows; Learn recommends the portal instead."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-22"
    note: "First briefing: attendee proximity join for Teams events is rolling out, on by default per MC1461157, with per-device Bluetooth beaconing as the documented control."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 55
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "d66881f18b5c96ba258ecc3f0b5dd7f6"
---

## What's changing

Microsoft is adding attendee proximity join for Microsoft Teams Rooms on Windows and Android. When someone joins a Teams event (the roadmap names town halls, webinars and structured meetings), they can connect to a nearby room system with fewer steps. The roadmap item describes this as "fast, effortless connection to nearby room systems".

Microsoft's notice MC1461157 says the affected users are people who use Teams Rooms on Windows or Android to join Teams events, and that the functionality "will be available by default as part of the Microsoft Teams Rooms experience". It says no action is required to enable it and recommends telling users who regularly attend Teams events that they can use proximity join with nearby rooms. The notice sets no act-by date.

Microsoft Learn has no page for this feature itself at the time of writing (November 2026), so how it behaves in events is the roadmap and the notice's description. The general [Proximity Join page](https://learn.microsoft.com/microsoftteams/rooms/proximity-join) describes the existing feature for Teams meetings: a user in the Teams app on a desktop or mobile device invites or nudges a Teams Room into a meeting, using Bluetooth and, on Windows consoles, ultrasound. Microsoft has not said that every detail on that page applies unchanged to events.

The roadmap status is Rolling out, with a target of November CY2026, in General Availability and Targeted Release for Worldwide (Standard Multi-Tenant), GCC and GCC High. The notice (updated 25 September 2026 with a later timeline) gives Targeted Release as beginning in early November 2026 and completing by mid-November 2026, and General Availability as beginning in mid-November 2026 and completing by early December 2026.

## Why it matters

This change reaches users without an admin switch: Microsoft's notice says it arrives by default during rollout. For most tenants the cost is communication and support rather than configuration. Event organisers and attendees who sit in meeting rooms will start to see nearby rooms offered when they join an event, so expect questions about which room was added and why a room appeared.

It also depends on settings you may already have changed. Learn states that Bluetooth must be enabled on both the Teams Rooms device and the desktop or mobile client for proximity to function, so rooms where Bluetooth beaconing was switched off are the first to check. If nobody acts, Microsoft's notice says the feature still arrives by default.

## Risk assessment

**Data exposure**

- Proximity join works through Microsoft Teams: Learn says it "doesn't require a direct network connection between a user personal devices and the Teams Rooms device". Microsoft has not described what extra data events send about the attendee or the room, so confirm that before telling security teams there is no change.
- Bluetooth discovery lists rooms by signal strength and includes rooms in use and not in use, and Learn notes the signal can pass through walls. An attendee can therefore be offered a room that is not the one they are sitting in.

**Security & identity**

- Learn says proximity join nudges must come from a user in the same tenant or a trusted external organisation, and that it fails if the participant cannot bypass the Teams meeting lobby. Whether the same rules cover events with external or anonymous attendees is not stated.
- Teams Rooms on Android uses Bluetooth advertising beacons and prompted proximal connections only, with no Bluetooth pairing, according to Microsoft's device security page.

**Autonomy & actions**

- No autonomous or AI action is described. The attendee chooses to bring a room in; Microsoft does not say that rooms join events on their own.

**Change & support**

- Expect helpdesk questions from attendees who see a nearby-room prompt, and from room owners whose Bluetooth beaconing is off. Ultrasound is not available on Teams Rooms on Android, so behaviour can differ between Windows and Android rooms.
- Learn cautions that people or animals with sensitive hearing may hear ultrasound tones from Windows consoles; review that before enabling ultrasound in rooms.

## Cost and licensing

Microsoft Learn's [Teams Rooms licences page](https://learn.microsoft.com/microsoftteams/rooms/rooms-licensing) lists joining Teams meetings with 1-touch, proximity and meeting ID under both Microsoft Teams Rooms Basic and Microsoft Teams Rooms Pro, and says a shared meeting device requires a Teams Rooms licence. Enterprise per-user Microsoft 365 suite licences are not authorised for shared meeting devices.

The roadmap record, MC1461157 and the Proximity Join page name no separate licence, meter or charge for attendee proximity join in events. A licence or meter specific to this feature is not yet published.

One qualification applies to rooms in events generally. The [meetings and events comparison](https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison) says only Teams Rooms on Windows with a Pro licence are officially supported to join meetings and events as a presenter or as an attendee. Microsoft has not said whether that statement governs proximity join.

Indirect costs are admin time, user communication and helpdesk load. Remote configuration in the Teams Rooms Pro Management portal is listed for Teams Rooms Pro, not Basic.

## Scope

**Who:** people who join Teams events and use Teams Rooms on Windows or Android, according to MC1461157; room owners and Teams administrators who manage those devices.

**Clouds and release phase:** the roadmap lists Worldwide (Standard Multi-Tenant), GCC and GCC High, in General Availability and Targeted Release.

**Platforms:** the roadmap lists Android, Desktop, iOS, Mac, and Teams and Surface Devices. The notice names Teams Rooms on Windows, Teams Rooms on Android and Teams events, including town halls and webinars.

**Prerequisites documented for proximity join generally:** Bluetooth enabled on the room and on the client device; the user's nudge must come from the same tenant or a trusted external organisation; the participant must be able to bypass the lobby. Ultrasound applies to Windows consoles only. Microsoft has not said that these apply unchanged to events.

## Governance guidance

### Before rollout

- Check which Teams Rooms on Windows and Android have Bluetooth beaconing turned off, in the Teams Rooms Pro Management portal (control row 1) or, for Android, in Teams admin center configuration profiles, and decide whether each should stay off.
- Confirm which Teams Rooms licence (Basic or Pro) each room account holds, because remote configuration and the events footnote refer to Pro.
- Draft a short note for event organisers and regular attendees, as MC1461157 recommends, saying that nearby rooms can be added when joining events.

### At rollout

- Follow MC1461157 in Message center for the Targeted Release and General Availability windows and any further date change.
- Test joining a webinar or town hall as an attendee from one pilot Windows room and one Android room, and record what attendees see.
- Send the user note once the feature reaches your tenant.

### After rollout

- Review helpdesk tickets about nearby-room prompts and rooms that are missing from the list.
- Re-read the Proximity Join page and the Teams Rooms release notes for event-specific behaviour or new settings.
- Recheck that Bluetooth beaconing settings on rooms still match your decision.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Bluetooth beaconing on a Teams Rooms device, which proximity join uses to find the room</strong><br><small class="controls__note">The Allow Bluetooth beaconing toggle is in the Device category for Windows (enabled by default). The XML file applies to Teams Rooms on Windows; Learn recommends the portal instead.</small></td><td data-label="Admin UI"><strong>Teams Rooms Pro Management portal</strong><br>Rooms/ Phones › device › Settings › Device <a href="https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>SkypeSettings.xml element &lt;BluetoothAdvertisementEnabled&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/rooms/xml-config-file" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The documented controls are per device, not a tenant-wide or event-specific switch. Microsoft's notice and the Proximity Join page describe only the beaconing settings below.

- Teams Rooms on Android: the Proximity Join page says Bluetooth beaconing is managed in Teams admin center under Teams Rooms on Android configuration profiles. The path was not read, so use the linked page for the steps. The page also lists the setting in the Pro Management portal and in local device settings.
- Teams Rooms on Windows: the Pro Management portal lists Allow Bluetooth beaconing (enabled by default), and Ultrasound beaconing, with Automatically accept proximity-based meeting invitations. Ultrasound does not apply to Android.
- Roles: the Pro Management portal settings page says you need the role-based access control permissions for Rooms Management.
- The XML file route is documented, but Learn recommends the portal's individual and bulk settings instead, and says new XML settings are no longer published.

## Open questions

- Does attendee proximity join in events follow the same tenant, trusted-organisation and lobby rules that the Proximity Join page gives for meetings? Watch the Proximity Join page and MC1461157.
- Will Microsoft document an admin setting specific to attendee proximity join in events, or does Bluetooth and ultrasound beaconing remain the only documented control? Watch the Learn Proximity Join page.
- Does the Teams Rooms Pro requirement in the events comparison footnote apply to proximity join, or can Teams Rooms Basic rooms be used? Watch the meetings and events comparison and the licences page.
- What attendee information do events share with the room when it is added, and how does it appear in the event roster or reports? Watch Message center and the events documentation.

<!-- rationale
risk: Low. Microsoft's notice says the feature is available by default with no action required, but it relies on the room Bluetooth beacon and the proximity join model that Learn already documents for meetings.
cost: Low. The roadmap record, Microsoft's notice MC1461157 and the Learn pages name no separate licence or meter for this feature; the only cost shown is admin time and user communication.
impact: Medium. It is on by default for people who join Teams events and use Teams Rooms on Windows or Android, so event attendees and room owners will notice it, but other users will not.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; Open questions / applicability: Microsoft has not said whether the published Teams Rooms Pro event-attendee requirement governs proximity join. | Found: Only Microsoft Teams Rooms on Windows with a Pro license are officially supported to join meetings and events as a presenter or as an attendee. | Fix: Remove 'Microsoft has not said whether that statement governs proximity join.' Replace the licensing open question with 'How will Microsoft reconcile the comparison footnote requiring Windows with Pro for event attendees with its table and MC1461157, which include Android? Watch the meetings and events comparison and MC1461157.' The published requirement covers Windows Rooms joining as event attendees without excluding proximity join; do not present Basic event entitlement as merely an unaddressed join-method question. | Source: https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / licensing: The events comparison says only Teams Rooms on Windows with Pro are officially supported as presenters or attendees. | Found: Only Microsoft Teams Rooms on Windows with a Pro license are officially supported to join meetings and events as a presenter or as an attendee. | Fix: Add after the quoted requirement: 'However, the same comparison table lists Teams Rooms on Android as able to join as an attendee or presenter, and MC1461157 names both Windows and Android for this rollout.' This explicitly reports the conflicting support statements rather than implying only the roadmap supports Android. | Source: https://learn.microsoft.com/microsoftteams/meetings-events-feature-comparison
- [supported, minor] controls[0].ui / admin-path: The Pro Management portal route to the Bluetooth setting is Rooms/ Phones > device > Settings > Device. | Found: Go to Rooms/ Phones in the left navigation and click the device you want to configure. Select the Settings tab in the device panel. ... browse settings categories (About, Account, Meetings, Device, Network, etc.). | Fix: Extend controls[0].ui.path to 'Rooms/ Phones > device > Settings > Device > Allow Bluetooth beaconing'. The existing route stops on the correct settings category; https://learn.microsoft.com/microsoftteams/rooms/device-settings-available lists the final toggle under Device and is already cited. | Source: https://learn.microsoft.com/microsoftteams/rooms/pro-portal-settings
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks administrators to take stock of room-account licences, but the controls table has no licensing row. | Found: Confirm which Teams Rooms licence (Basic or Pro) each room account holds ... Controls: Bluetooth beaconing on a Teams Rooms device | Fix: Remove the checklist bullet 'Confirm which Teams Rooms licence (Basic or Pro) each room account holds, because remote configuration and the events footnote refer to Pro.' Its supporting licensing facts remain in Cost and licensing; do not add a new control row as part of this correction.
-->
