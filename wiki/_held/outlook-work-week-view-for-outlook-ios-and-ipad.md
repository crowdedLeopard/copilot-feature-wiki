---
title: "Outlook for iOS and iPad: work week calendar view"
slug: "outlook-work-week-view-for-outlook-ios-and-ipad"
roadmapId: 559795
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iOS adds a Work week calendar view on iPad and, in landscape, on iPhone. Users choose it from the view picker. It has launched, needs no admin action, and Microsoft documents no admin setting for it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["iOS"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "user-opt-in"
action: "none"
licensing:
  model: "included"
  notes: "Comes with the Outlook for iOS app. The Outlook for iOS and Android FAQ says commercial users need an Office 365 or Microsoft 365 subscription that includes the Office desktop applications, with smaller-screen use allowed on plans such as Business Basic and E1. Nothing specific to this view is published."
audiences: ["m365-admin","change-adoption"]
tags: ["outlook","mobile","ios","user-experience","gcc","gcc-high"]
sources:
  - title: "Release notes for Outlook mobile"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-mobile"
    kind: "learn"
  - title: "Outlook for iOS and Android in Exchange Online: FAQ"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq"
    kind: "learn"
  - title: "Deploying Outlook for iOS and Android app configuration settings in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune"
    kind: "learn"
  - title: "Outlook: Work week view for Outlook iOS and iPad"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559795"
    kind: "roadmap"
videos: []
related: ["outlook-duplicate-events-in-outlook-mobile-apps","outlook-copilot-chat-sheet-ux-update-for-mobile"]
controls:
  - governs: "Whether users can select the Work week calendar view in Outlook for iOS"
    scope: "tenant"
    ui: null
    api: null
    note: "No admin centre setting or app configuration key for this view is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-09-30T23:31:03"
changes:
  - date: "2026-11-28"
    note: "New briefing: Work week calendar view in Outlook for iOS and iPad, launched in build 5.2620.0 (May 28, 2026), with no documented admin setting."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 33 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 33
  confirmed: 30
  unconfirmed: 3
  contradicted: 0
  attempts: 1
  hash: "9dba12740f41d3ef90f8ce8ee8296b2b"
---

## What's changing

Outlook for iOS gains a **Work week** calendar view that shows only the days a person works. The roadmap item states that on iPad users select "work week" directly from the view picker, and on iPhone they select it from the view picker after rotating the device to landscape.

The roadmap item also states that users choose which days make up their work week, either by syncing from their default account or by customising the days for that device only. Microsoft Learn does not describe how the synced days are read or what happens when the two differ, so that detail rests on the roadmap's description.

The Outlook mobile release notes list the view for iOS in build 5.2620.0, dated May 28, 2026: "You can now use a work week calendar view on iOS and iPad." The roadmap item is Launched, released as General Availability, with a target of May CY2026, for Worldwide (Standard Multi-Tenant), GCC and GCC High.

## Why it matters

For most tenants this is a convenience that needs no decision. The view is a new choice in the calendar's view picker: users who want it select it, and the roadmap and release notes describe no change to anyone's existing view. It shows the user's own calendar over fewer days, so it opens no new data, permission or sharing path.

The likely service desk question is why the option is missing on an iPhone held upright, since the roadmap item places it behind landscape orientation on phones. A second is why the work week differs between a phone and a desktop client, because the days can be customised per device.

## Risk assessment

**Data exposure**
- No change: the view displays the user's existing calendar over the days they choose and reads nothing new.

**Security & identity**
- No change: Microsoft describes no new sign-in, permission or identity for the view.

**Autonomy & actions**
- Nothing happens on its own: the user selects Work week in the view picker.

**Change & support**
- On iPhone the option appears in the view picker only in landscape, according to the roadmap item, which may read as a missing feature to users holding the phone upright.
- Work week days can be set per device, so a user's phone and desktop calendars may show different days.
- Microsoft Learn documents no admin setting for the view at the time of writing (November 2026); see Governance controls.

## Cost and licensing

The view is part of the Outlook for iOS app and comes with the app's licence. The Outlook for iOS and Android in Exchange Online FAQ says the app is free for consumer usage, while commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop applications: Microsoft 365 Apps for Business, Microsoft 365 Business Standard, Microsoft 365 Apps for enterprise, Office 365 Enterprise E3, Office 365 Enterprise E5, or the corresponding Government or Education plans. The same FAQ allows Office 365 Enterprise E1, Office 365 F1, Office 365 A1, Microsoft 365 Business Basic and Exchange Online-only licences on devices with integrated screens 10.1" diagonally or less.

- **Meter:** the FAQ and the release notes publish no separate licence, meter or charge for the Work week view.
- **Indirect costs:** a short note to the service desk.

## Scope

- **Users:** people using Outlook for iOS under a licence that covers the app (see Cost and licensing).
- **Devices:** iPad, from the view picker; iPhone, from the view picker in landscape (roadmap item). The roadmap record lists the platform as iOS.
- **Other platforms:** the release notes list the view under iOS only; the Android entry for the same build reads "Various fixes to functionality and performance."
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC and GCC High, as the roadmap record lists them.
- **Release:** General Availability, status Launched; the release notes date the iOS build that adds it, 5.2620.0, to May 28, 2026.

## Governance guidance

### Before rollout
- Tell the service desk that Outlook for iOS has a Work week calendar view, chosen from the view picker on iPad and in landscape on iPhone.

### At rollout
- Check on a test iPhone and iPad how the days synced from the default account compare with the days the user sets on the device, and add the result to service desk guidance.

### After rollout
- Watch the Outlook mobile release notes and the Outlook for iOS and Android app configuration page for any change to the view or a new configuration key that governs it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can select the Work week calendar view in Outlook for iOS</strong><br><small>Tenant</small><br><small class="controls__note">No admin centre setting or app configuration key for this view is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no admin setting for the Work week view at the time of writing (November 2026). The Outlook for iOS and Android app configuration reference, which lists the in-app settings administrators can pre-set through Microsoft Intune or another unified endpoint management tool, includes calendar settings such as Sync Calendars and Calendar Notifications, but no setting or key for calendar views or the work week.

## Open questions

- Which setting does "syncing from your default account" read the work week days from, and does it follow working hours set in Outlook on the web or Outlook for Windows? Watch the Outlook mobile release notes.
- Can an administrator pre-set the work week days or the default calendar view for managed devices? Watch the Outlook for iOS and Android app configuration page.
- Will the view come to Outlook for Android? The roadmap item lists iOS only.

<!-- rationale
risk: Low. A display option the user picks from the calendar's view picker; it shows the same calendar data and reaches nothing new.
cost: None. The view is part of Outlook for iOS, which commercial users are licensed for through the subscriptions the Outlook mobile FAQ lists; no separate licence or meter is published for it.
impact: Low. Only Outlook for iOS users who choose Work week in the view picker notice it; the roadmap and release notes describe no change to existing views.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters; Risk assessment: Data exposure; rationale: risk / behaviour: The view reads nothing new and reaches only the user's existing calendar data. | Found: Searched: Outlook iOS work week view default account sync working days data access sharing permissions. Opened release notes, Outlook mobile FAQ and app configuration reference; the view entry does not specify its data-access boundary. | Fix: Remove 'It shows the user's own calendar over fewer days, so it opens no new data, permission or sharing path.' Replace the Data exposure bullet with 'Microsoft describes a calendar view focused on work days; its release notes do not describe additional data access.' Replace 'it shows the same calendar data and reaches nothing new' in the risk rationale with 'Microsoft describes it as a calendar view focused on work days'.
- [unsupported, major] Why it matters: permission path / behaviour: The work week view opens no new permission path. | Found: Searched: "Outlook" "work week" "iOS" "permissions" "default"; Outlook iOS work week view default account sync working days data access sharing permissions. Read release notes, FAQ and app configuration; no passage guarantees an unchanged permission path. | Fix: Remove 'It shows the user's own calendar over fewer days, so it opens no new data, permission or sharing path.' Retain the narrower Security & identity statement that Microsoft describes no new permission for the view.
- [unsupported, major] Why it matters: sharing path / behaviour: The work week view opens no new sharing path. | Found: Searched: Outlook iOS work week view default account sync working days data access sharing permissions. Read release notes, FAQ and app configuration; none states that the work week view introduces no sharing path. | Fix: Remove 'It shows the user's own calendar over fewer days, so it opens no new data, permission or sharing path.'
-->
