---
title: "Outlook mobile: refreshed Copilot Chat sheet with the new and temporary chat button moved behind the ... menu"
slug: "outlook-copilot-chat-sheet-ux-update-for-mobile"
roadmapId: 579897
topic: "modern-work"
products: ["Outlook"]
summary: "Copilot Chat in Outlook for iOS and Android gets smoother animations, reworded text and a revised header that moves the new/temporary chat button behind the ... button. No admin setting changes; tell mobile users where the button went."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn states that Copilot Chat is available to users with an eligible Microsoft 365 subscription and that a Microsoft Copilot licence is not required for eligible users. Nothing specific to this update is published."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["outlook","copilot-chat","mobile","ios","user-experience","app-management"]
sources:
  - title: "Microsoft 365 Roadmap item 579897"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579897"
    kind: "roadmap"
  - title: "Microsoft Copilot requirements"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-copilot-requirements"
    kind: "learn"
  - title: "Manage Copilot Chat"
    url: "https://learn.microsoft.com/copilot/manage/manage-copilot-chat"
    kind: "learn"
  - title: "Apps for Microsoft 365 that work across application hosts"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    kind: "learn"
  - title: "Archived Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes-archive"
    kind: "learn"
  - title: "copilotPackage: block"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/copilotpackage-block"
    kind: "learn"
  - title: "Agent 365 Package Management API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/package/overview"
    kind: "learn"
videos: []
related: ["outlook-copilot-chat-pop-out-for-outlook-for-mac-and-ipad","m365-copilot-copilot-chat-in-outlook-expands-to-reason-over-inbox-calendar-and-enterprise","app-management","outlook-enhanced-user-interface-updates-for-iphone-and-ipad"]
controls:
  - governs: "Whether users can use the Copilot app, and so Copilot Chat, in Outlook and the Microsoft Copilot app"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Block app"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Admins only. Blocks the app in the Microsoft Copilot app, Outlook and the web, incl. licensed users. Integrated Apps guide says Teams keeps its Teams admin center setting; Manage Copilot Chat says the block also affects Teams."
  - governs: "Which users can install and use the Copilot app themselves in Outlook and the Microsoft Copilot app"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Integrated Apps > Available Apps > app > Users > Specific users/group in the organization can install"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365"
    api: null
    note: "Global Admins only. Does not affect apps an admin has deployed; the CoPilot app settings apply to both Microsoft Copilot and Copilot Chat."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-27"
    note: "New briefing on the refreshed Copilot Chat sheet in Outlook for iOS and Android, targeted for December CY2026."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 43 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected the default state to unknown, as Microsoft has not stated what happens on arrival; noted that Manage Copilot Chat says the Integrated Apps block also affects Teams; reworded the Package Management API scope."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 48
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f7bc529a2790740240788aed8cb35a00"
---

## What's changing

Microsoft plans to refresh the Copilot Chat sheet in Outlook for iOS and Android. The roadmap item lists smoother animations, improved strings (the wording in the interface) and small changes to the header, among them moving the new/temporary chat button behind the **...** button.

Microsoft Learn does not describe this update yet, so what follows about its behaviour is the roadmap's description. Microsoft has not stated what happens on arrival for this refresh. Copilot Chat itself is not new on these platforms: Microsoft's release notes for August 2024 record that the Copilot Chat experience became available in Outlook for iOS and Android.

The roadmap item is **In development**, targeted for **December CY2026**, in the General Availability release phase, for the Worldwide (Standard Multi-Tenant) cloud on Android and iOS.

## Why it matters

This is a cosmetic change to an experience users already have, so the service-owner angle is support, not risk. The one change that alters how people work is the new/temporary chat button: users who start a fresh or temporary chat from the header will find it behind the **...** button instead. Expect a few "where did the button go" questions in December, and put one line about it in your mobile or Copilot adoption notes.

No source describes any change to what Copilot Chat can reach, who can use it or how it is licensed, and the existing Integrated Apps controls on the Copilot app continue to decide whether people see Copilot Chat in Outlook at all.

## Risk assessment

**Data exposure**
- No change: the roadmap item describes layout, animation and wording, and says nothing about the data Copilot Chat reads.

**Security & identity**
- No change described. Users still reach Copilot Chat in Outlook through the Copilot app, which Microsoft documents as the integrated app that provides Copilot Chat in Outlook on web, desktop and mobile.

**Autonomy & actions**
- No change: nothing in the item adds an action Copilot Chat can take.

**Change & support**
- Moving the new/temporary chat button behind **...** changes a step users may already rely on; plan a short note for mobile users and the helpdesk.
- The roadmap item does not say whether the same header change reaches Outlook on other platforms, so expect Outlook mobile and desktop to differ for a while.

## Cost and licensing

**Licence.** Microsoft's Copilot requirements page states that Copilot Chat is available to users with an eligible Microsoft 365 subscription, and that a Microsoft Copilot licence is not required for eligible users. This update changes the layout of that existing experience; nothing specific to it is published.

**Meter.** The roadmap item and the Learn pages for Copilot Chat in Outlook publish no meter or charge for this update.

**Indirect costs.** Admin and adoption time to tell mobile users where the new/temporary chat button now sits, and any helpdesk calls about it.

## Scope

- **Users:** people who use Copilot Chat in Outlook on iOS and Android. Copilot Chat is available to users with an eligible Microsoft 365 subscription and a Microsoft Entra ID work or school account.
- **Platforms:** Android and iOS, as the roadmap item lists them.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists it.
- **Roles:** the Integrated Apps controls on the Copilot app are, according to the Integrated Apps page, available only to Global Admins.
- **Rollout:** In development, targeted for December CY2026; the roadmap item gives no rollout window beyond that target.

## Governance guidance

### Before rollout
- Add a line to mobile and Copilot adoption material saying the new/temporary chat button in Outlook for iOS and Android moves behind the **...** button.
- Brief the helpdesk on the header change so that "I can't start a new chat" calls from Outlook mobile get a quick answer.
- Check the Copilot app's status under Settings > Integrated Apps in the Microsoft 365 admin center, so you know which users will see the refreshed sheet at all.

### At rollout
- Confirm on a test iOS and Android device that the new/temporary chat option sits behind **...** before sending the user note.
- Update any screenshots of the Outlook mobile Copilot Chat sheet in internal guides.

### After rollout
- Watch Message center for a post on this item, in case Microsoft adds detail on timing or other platforms.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can use the Copilot app, and so Copilot Chat, in Outlook and the Microsoft Copilot app</strong><br><small>Tenant</small><br><small class="controls__note">Global Admins only. Blocks the app in the Microsoft Copilot app, Outlook and the web, incl. licensed users. Integrated Apps guide says Teams keeps its Teams admin center setting; Manage Copilot Chat says the block also affects Teams.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Block app <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users can install and use the Copilot app themselves in Outlook and the Microsoft Copilot app</strong><br><small>Group</small><br><small class="controls__note">Global Admins only. Does not affect apps an admin has deployed; the CoPilot app settings apply to both Microsoft Copilot and Copilot Chat.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Integrated Apps › Available Apps › app › Users › Specific users/group in the organization can install <a href="https://learn.microsoft.com/microsoft-365/admin/manage/teams-apps-work-on-outlook-and-m365" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that governs this layout change itself; the controls in the table decide whether users get Copilot Chat in Outlook at all, and so whether they see the refreshed sheet.

- The Integrated Apps page states that the **CoPilot** app settings apply to both the Microsoft Copilot and Copilot Chat apps, and that blocking an app there takes effect in the Microsoft Copilot application and Outlook, not in Teams, which keeps the setting made in the Teams admin center. [Manage Copilot Chat](https://learn.microsoft.com/copilot/manage/manage-copilot-chat#block-users-from-using-copilot-chat), however, says this block also affects Teams: it blocks Copilot in the Microsoft Copilot app, Teams, Outlook and Copilot Chat on the web.
- Blocking the Copilot app through Integrated Apps blocks it tenant-wide across the Microsoft Copilot app, Outlook and the web, including for users assigned a Microsoft 365 Copilot licence.
- The availability setting controls which users can install the app themselves; the page says it does not affect apps an admin has deployed.
- The Package Management API in Microsoft Graph (beta, requiring a Microsoft Agent 365 licence) can block a Copilot package, but its overview describes packages as agents or tools and does not say whether the Copilot app is a package in that catalogue, so it is not listed as the automation for these rows.

## Open questions

- Does the header change, and the move of the new/temporary chat button, also come to Copilot Chat in Outlook on Windows, Mac or the web? Watch the roadmap and Message center.
- Will Microsoft publish a Message center post with a rollout window for this item, and will it reach Targeted release users first?
- Is the Copilot app listed in the Microsoft Graph Package Management catalogue, so that the Integrated Apps block can be scripted? Watch the Package Management API reference.

<!-- rationale
risk: Low. The roadmap item describes animations, wording and header layout only; nothing in it changes what Copilot Chat can read or do.
cost: Low. Copilot Chat is available to users with an eligible Microsoft 365 subscription, and this is a layout change to it; the cost is a note to mobile users and any helpdesk questions about the moved button.
impact: Low. Only people who use Copilot Chat in Outlook on iOS and Android notice, and the change is to how the chat sheet looks and where one button sits.
-->
