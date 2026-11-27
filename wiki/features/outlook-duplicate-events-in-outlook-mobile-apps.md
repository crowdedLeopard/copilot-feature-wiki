---
title: "Outlook mobile: duplicate a calendar event from its details on iOS and Android"
slug: "outlook-duplicate-events-in-outlook-mobile-apps"
roadmapId: 570666
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iOS and Android adds a Duplicate event option that creates a new event from an existing one. It reaches users without admin action; Microsoft says no action is required and documents no setting to hide it."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Android","iOS"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "medium"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Included with the Outlook for iOS and Android app. The Outlook mobile FAQ says commercial users need an Office 365 or Microsoft 365 subscription that includes the Office desktop applications, with smaller-screen use allowed on plans such as Business Basic and E1. Nothing specific to this option is published."
audiences: ["m365-admin","change-adoption"]
tags: ["outlook","mobile","ios","exchange","user-experience","gcc","gcc-high"]
sources:
  - title: "MC1492166: (Updated) Microsoft Outlook: New event duplication capability"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1492166"
    kind: "message-center"
  - title: "Release notes for Outlook mobile"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-mobile"
    kind: "learn"
  - title: "Outlook for iOS and Android in Exchange Online: FAQ"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq"
    kind: "learn"
  - title: "Deploying Outlook for iOS and Android app configuration settings in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune"
    kind: "learn"
  - title: "Outlook: Duplicate events in Outlook mobile apps"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570666"
    kind: "roadmap"
videos: []
related: ["outlook-enhanced-user-interface-updates-for-iphone-and-ipad","outlook-copilot-chat-sheet-ux-update-for-mobile","outlook-purview-data-loss-prevention-support-for-calendar-events-in-outlook-mobile-apps"]
controls:
  - governs: "Whether users see the Duplicate event option in Outlook for iOS and Android"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin centre setting or app configuration key for this option is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-27"
    note: "New briefing: Duplicate event option in Outlook for iOS and Android, rolling out to early December 2026 per MC1492166, with no documented admin setting."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 37 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 37
  confirmed: 37
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0da7295625783f7b38c613b5bcf343d7"
---

## What's changing

Outlook for iOS and Android gains a **Duplicate event** option that creates a new calendar event from an existing one. Microsoft's notice MC1492166 says that from the event details, users can select Duplicate event "to quickly create a new event based on an existing event without re-entering the same details".

The option arrives without admin action: MC1492166 says a new Duplicate event option will appear in Outlook event details and that no action is required. The Outlook mobile release notes dated November 20, 2026 list it as a feature update for both iOS ("You can now duplicate an event by going to the Event Details and selecting Duplicate Event") and Android. Microsoft has not described which details the copy keeps (attendees, online meeting link, attachments, recurrence) or whether saving it invites the original attendees.

The roadmap item is Rolling out, released as General Availability, with a target of October CY2026, for Worldwide (Standard Multi-Tenant), GCC and GCC High. MC1492166, updated on November 6, 2026, is the later statement: rollout began in late September 2026 and is expected to complete by early December 2026 (previously late October). The post sets no act-by date.

## Why it matters

For most tenants this is a convenience that needs no decision. MC1492166 describes the result as a new event based on an existing one, which a user could already produce by re-entering the details by hand, so the option saves typing rather than opening new data or permissions. If nobody acts, the option appears for Outlook mobile users as the rollout reaches them.

The point to check is what the copy carries. If a duplicated meeting keeps the original attendee list or online meeting details, a user who saves it could send a fresh invitation to the same people or reuse a meeting link meant for one occasion. Microsoft has not documented that behaviour, so the service desk should try it on a test device before users ask.

## Risk assessment

**Data exposure**
- No new data reach is described: MC1492166 describes a new event based on an existing event the user has open. Microsoft has not said which calendar the copy is saved to when the original sits in a shared or delegated calendar.

**Security & identity**
- No change: Microsoft describes no new sign-in, permission or identity for this option.

**Autonomy & actions**
- Nothing happens on its own: the user selects Duplicate event. Whether saving the copy sends invitations to the original attendees is not documented, and that is the step most likely to surprise recipients.

**Change & support**
- A new option in event details on iOS and Android, rolling out between late September and early December 2026, so some users will see it before colleagues do. Expect occasional questions about duplicated meetings and repeated invitations.
- Microsoft Learn documents no admin setting for the option at the time of writing (November 2026); see Governance controls.

## Cost and licensing

The option is part of the Outlook for iOS and Android app, so it comes with the app's licence. The Outlook for iOS and Android in Exchange Online FAQ says the app is free for consumer use, while commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop applications: Microsoft 365 Apps for Business, Microsoft 365 Business Standard, Microsoft 365 Apps for enterprise, Office 365 Enterprise E3, Office 365 Enterprise E5, or the corresponding Government or Education plans. The same FAQ allows Office 365 Enterprise E1, Office 365 F1, Office 365 A1, Microsoft 365 Business Basic and Exchange Online-only licences on devices with integrated screens 10.1" diagonally or less.

- **Meter:** the FAQ and MC1492166 publish no separate licence, meter or charge for Duplicate event.
- **Indirect costs:** a short note to the service desk and, if wanted, to users.

## Scope

- **Users:** people who create events in Outlook (MC1492166), using Outlook for iOS or Outlook for Android under a licence that covers the app (see Cost and licensing).
- **Platforms:** Android and iOS, as the roadmap record lists them; the release notes list the option under both.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC and GCC High, as the roadmap record and MC1492166 list them.
- **Rollout:** general availability, rolling out from late September 2026 and expected to complete by early December 2026 (MC1492166). The release notes say Outlook mobile updates are available from Microsoft on a weekly basis and that Microsoft often rolls features out over a period of time, so the option may appear some time after the app update.
- **Other Outlook clients:** the roadmap item covers the mobile apps and says nothing about Outlook for Windows, Mac or the web.

## Governance guidance

### Before rollout
- Tell the service desk that Outlook for iOS and Android is gaining a Duplicate event option in event details (MC1492166), rolling out until early December 2026.
- Test duplicating a meeting that has attendees and a Teams meeting link on a test iOS device and a test Android device, and record what the copy keeps and whether saving it sends invitations.

### At rollout
- Add the test findings to service desk guidance, so staff can answer questions about repeated invitations or reused meeting links.

### After rollout
- Watch MC1492166 and the Outlook mobile release notes for changes to the option or for a new app configuration key that governs it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users see the Duplicate event option in Outlook for iOS and Android</strong><br><small>Tenant</small><br><small class="controls__note">No admin centre setting or app configuration key for this option is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for the Duplicate event option at the time of writing (November 2026). The Outlook for iOS and Android app configuration reference, which lists the app settings administrators can deliver through Microsoft Intune or another unified endpoint management tool, includes calendar keys such as calendar sync and calendar sharing, but no key for duplicating events. MC1492166 states that no action is required.

## Open questions

- Which details does Duplicate event copy into the new event: attendees, the online meeting link, attachments, recurrence? Watch the Outlook mobile release notes and MC1492166.
- Does saving a duplicated meeting send invitations to the original attendees, or does the user add them again?
- Will Microsoft add an app configuration key to hide the option in managed apps? Watch the Outlook for iOS and Android app configuration page.
- Does the option work on shared or delegated calendars, and in which calendar is the copy saved?

<!-- rationale
risk: Low. The user chooses to duplicate an event they already have open, and Microsoft describes the result as a new event based on an existing one, which saves retyping rather than reaching new data.
cost: None. Duplicate event is an option inside Outlook for iOS and Android, which commercial users are licensed to use through the Microsoft 365 and Office 365 subscriptions the Outlook mobile FAQ lists; no separate licence or meter is published for it.
impact: Medium. Outlook mobile users who open event details see a new option as the rollout reaches them; nothing they already use changes.
-->
