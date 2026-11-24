---
title: "Outlook for iPhone and iPad: refreshed interface in the Liquid Glass style"
slug: "outlook-enhanced-user-interface-updates-for-iphone-and-ipad"
roadmapId: 568789
topic: "modern-work"
products: ["Outlook"]
summary: "Outlook for iOS on iPhone and iPad gets a refreshed look aligned with Apple's Liquid Glass design, on by default. The roadmap says no admin action is needed; plan user communication and help desk notes."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["iOS"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's Outlook for iOS and Android FAQ says commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop applications, with listed exceptions for small screens. A licence specific to this refresh is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["outlook","mobile","ios","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Outlook: Enhanced user interface updates for iPhone and iPad"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568789"
    kind: "roadmap"
  - title: "Outlook for iOS and Android in Exchange Online: FAQ"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq"
    kind: "learn"
  - title: "Deploying Outlook for iOS and Android app configuration settings in Exchange Online"
    url: "https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-configuration-with-microsoft-intune"
    kind: "learn"
  - title: "Release notes for Outlook mobile"
    url: "https://learn.microsoft.com/officeupdates/release-notes-outlook-mobile"
    kind: "learn"
videos: []
related: ["outlook-copilot-chat-pop-out-for-outlook-for-mac-and-ipad"]
controls:
  - governs: "Tenant-wide switch for the refreshed Outlook for iOS interface"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft documents no such setting at the time of writing (November 2026). The roadmap says the change is enabled by default with no administrator action required."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-08-06T22:54:24"
changes:
  - date: "2026-11-24"
    note: "First briefing for this roadmap item: a Liquid Glass-style interface refresh for Outlook for iOS on iPhone and iPad, on by default with no documented admin control."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 39 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 39
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e38c8a9eb264bf6bd418ee1e86affa1c"
---

## What's changing

Outlook for iOS on iPhone and iPad is getting refreshed interface elements. The roadmap item describes them as aligned with the latest Liquid Glass iOS visual experience, including modernised app chrome, navigation and use of screen space. The roadmap says the change is enabled by default with no administrator action required.

Microsoft Learn does not describe this refresh at the time of writing (November 2026), so what follows about behaviour is the roadmap's description. The roadmap text does not say which screens change, whether users can keep the old layout, or which app build or iOS version carries it.

The roadmap record shows status In development with a target date of September CY2026, and no preview date. That target month has passed and the status has not moved, so treat the timing as unconfirmed. The record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, release phase General Availability and the iOS platform.

## Why it matters

This is a look-and-feel change to an app many users open daily, and the roadmap says it arrives by default. Nothing in the record suggests a security or data change, but users on iPhone and iPad may see different navigation and screen layout from one app update to the next, which tends to show up as how-do-I questions at the help desk.

Because Microsoft has not published a build number or a rollout date, the practical task is to prepare: tell iPhone and iPad users that the app's appearance is changing, update any internal screenshots or training material for Outlook mobile, and brief the help desk. The record gives no admin switch, so there is nothing to configure before the change lands.

## Risk assessment

**Data exposure**
- No change is described: the roadmap item covers interface elements, navigation and screen layout only, and names no new data source or sharing path.

**Security & identity**
- No change is described: the roadmap item says nothing about sign-in, authentication or permissions for Outlook for iOS.

**Autonomy & actions**
- No change is described: the roadmap item lists no new automated or background behaviour.

**Change & support**
- The roadmap says the refresh is on by default for people using Outlook for iOS on iPhone and iPad, so users may see moved navigation and different use of screen space without notice from IT. Prepare help desk guidance and update training screenshots for Outlook mobile.
- Microsoft has not said whether users can postpone or opt out of the new layout, so assume they cannot until a Microsoft page says otherwise.

## Cost and licensing

Microsoft has published no separate licence, meter or price for this refresh. The roadmap describes it as part of the Outlook for iOS app, and says it needs no administrator action.

The Outlook for iOS and Android FAQ states that Outlook for iOS and Android is free for consumer usage from the iOS App store and from Google Play, and that commercial users require an Office 365 or Microsoft 365 subscription that includes the Office desktop applications. The same page lists Office 365 Enterprise E1, Office 365 F1, Office 365 A1, Microsoft 365 Business Basic and Exchange Online-only licences as allowed on devices with integrated screens 10.1" diagonally or less. Check that page against the iPads in your estate before budgeting.

The indirect cost is admin and support time: user communication, training material and help desk briefings. A licence or meter specific to this refresh is not yet published.

## Scope

The roadmap item covers people using Outlook for iOS on iPhone and iPad. The record lists the clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, the iOS platform and the release phase General Availability. It lists Outlook as the only product.

The roadmap says the refresh is enabled by default. No required roles, prerequisites, minimum iOS version or minimum app build are given on the roadmap item, and Microsoft Learn does not describe them for this refresh at the time of writing (November 2026). Outlook for Android, Outlook for Mac and the Outlook for Windows apps are not part of this record.

## Governance guidance

### Before rollout
- Tell service desk staff and iPhone and iPad users that Outlook for iOS is getting a refreshed interface, quoting the roadmap's description rather than screen-specific details, which Microsoft has not published.
- Identify the training guides, screenshots and internal how-to articles that show Outlook for iOS so they can be refreshed once the new interface appears.
- Watch Message center and the roadmap item for a post or status change, because the target month in the record (September CY2026) has passed without a status move.

### At rollout
- Test the updated app on a pilot iPhone and iPad, comparing common tasks such as reading, replying and calendar navigation against your existing guides.
- Collect user questions and route any that suggest a functional problem, not just a layout difference, to Microsoft support.

### After rollout
- Update screenshots and guides to match the new interface.
- Confirm the roadmap item's status and release notes for Outlook mobile, and record the app build in which the new look first appeared in your tenant.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for the refreshed Outlook for iOS interface</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft documents no such setting at the time of writing (November 2026). The roadmap says the change is enabled by default with no administrator action required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No tenant setting for this refresh is documented at the time of writing (November 2026); the roadmap says it is enabled by default with no administrator action required, so the table records the gap. Outlook for iOS and Android app configuration through Microsoft Intune exists for the general app settings listed on its page, and that page's general settings table does not include a setting described as controlling the layout or visual redesign of the app. Do not assume those settings govern this refresh.

## Open questions

- Which Outlook for iOS build and which iOS and iPadOS versions carry the Liquid Glass refresh, and when will Microsoft move the roadmap item past In development given that its September CY2026 target has passed? Watch the roadmap item and the Outlook mobile release notes.
- Can an administrator or user defer or switch off the refreshed interface? Watch Message center and the Outlook for iOS and Android Learn pages.
- Will Microsoft publish which screens change, so that training material can be updated before users see them?
- Does Microsoft intend any licence or plan to apply specifically to this refresh? None is published at the time of writing.

<!-- rationale
risk: Low. The roadmap describes a change to interface elements, navigation and use of screen space, and says no administrator action is required. The record names no new data access or autonomous action.
cost: Low. Microsoft has published no separate licence or meter for this refresh. The cost is admin time for user communication and help desk preparation, plus the licence Outlook for iOS already needs for commercial use.
impact: High. The roadmap says the refreshed interface is enabled by default for people using Outlook for iOS on iPhone and iPad, so every such user can notice the new look and navigation.
-->
