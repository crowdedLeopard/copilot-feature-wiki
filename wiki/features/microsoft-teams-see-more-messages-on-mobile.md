---
title: "Microsoft Teams: more messages on screen in the iOS and Android apps"
slug: "microsoft-teams-see-more-messages-on-mobile"
roadmapId: 568067
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a more streamlined message view in Teams on iOS and Android that fits more content on screen. No admin setting is documented; tell mobile users and the service desk before the February CY2027 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The Teams service description states that all supported Teams subscription plans are eligible for the mobile apps. Microsoft publishes no separate licence for this layout change."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["teams","mobile","adoption"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: See more messages on mobile"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568067"
    kind: "roadmap"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Teams client system requirements"
    url: "https://learn.microsoft.com/microsoftteams/teams-client-system-requirements"
    kind: "learn"
  - title: "Manage Collaboration Experiences in Teams for iOS and Android With Microsoft Intune"
    url: "https://learn.microsoft.com/intune/app-management/configuration/configure-teams-mobile"
    kind: "learn"
videos: []
related: ["microsoft-teams-emoji-shortcuts-with-autocomplete-on-mobile","microsoft-teams-unblock-users-to-send-message-while-file-is-uploading-in-the-background"]
controls:
  - governs: "Whether users get the new mobile message layout or keep the current one"
    scope: "tenant"
    ui: null
    api: null
    note: "Messaging policies list no layout or density setting for mobile at the time of writing (November 2026)."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-11-11T00:52:46"
changes:
  - date: "2026-11-27"
    note: "New briefing on the planned denser message layout in Teams on iOS and Android, targeted for February CY2027."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 35 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected after the independent check: removed the claims that the service desk cannot revert the layout, that no admin role is involved and that the layout arrives with an app update; narrowed the autonomy statement to what the roadmap describes."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 39 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 39
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6cfe2ab09c73f6d07e258308d0ba4e43"
---

## What's changing

Microsoft plans to change how messages are laid out in Teams on iOS and Android so that more content fits on the screen. The roadmap item describes "a more streamlined messaging experience" that also improves readability, so that users can scan conversations and follow the discussion more easily.

Microsoft Learn does not describe this feature yet (November 2026), so what is known about its behaviour is the roadmap's description. The item does not say whether the new layout replaces the current one for everyone, whether users can switch between layouts, or which conversation types (chats, channels, meeting chats) it covers.

The roadmap item is **In development**, targeted for **February CY2027**, for General Availability in the Worldwide (Standard Multi-Tenant) cloud on Android and iOS. No preview date is given.

## Why it matters

This is a visual change to a screen many people use every day. A changed layout on a screen this familiar usually brings questions to the service desk in the first days and out-of-date screenshots in internal guides for Teams on mobile.

Microsoft has not stated what happens on arrival: whether every mobile user gets the new layout automatically or chooses it. Because it is described as a redesign of the existing message view, plan on the assumption that mobile users will meet it with the February CY2027 update and prepare a short note for them in advance.

## Risk assessment

**Data exposure**
- No change described: the roadmap item concerns how existing messages are displayed, not which messages a user can see or share.

**Security & identity**
- No change described: the item mentions no sign-in, permission or device change. Existing Intune app protection and Conditional Access policies for Teams on iOS and Android are not mentioned as affected.

**Autonomy & actions**
- No automated action is described in the roadmap item.

**Change & support**
- Fitting more content on screen changes a layout people are used to; users who rely on larger text or screen readers may notice the change most. Microsoft has not said how the new layout treats device text-size settings.
- Microsoft Learn documents no admin setting to keep the current layout at the time of writing (November 2026).

## Cost and licensing

**Licence.** The [Microsoft Teams service description](https://learn.microsoft.com/office365/servicedescriptions/teams-service-description) states that all supported Teams subscription plans are eligible for access to the Teams mobile apps, and lists Chat as available in Teams Business, Enterprise and Education plans. This layout change is part of the mobile apps; Microsoft publishes no separate licence or add-on for it.

**Meter.** None is described for this feature on the roadmap item.

**Indirect costs.** Admin and adoption time to update user guides, brief the service desk and tell mobile users what has changed.

## Scope

- **Users:** people who use Teams on mobile devices. The record lists **Android** and **iOS** as the platforms.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the record lists it.
- **Devices:** Microsoft's [Teams client system requirements](https://learn.microsoft.com/microsoftteams/teams-client-system-requirements) limit support to the last four major versions of Android and the two most recent major versions of iOS.
- **Rollout:** General Availability, target February CY2027. Rollout mechanics (staged rollout, app version) are not yet published.
- **Roles:** no feature-specific configuration role is documented.

## Governance guidance

### Before rollout
- Watch Message center for a post on this change that gives the rollout window and whether the new layout is on by default.
- Update screenshots of Teams chats and channels on iOS and Android in internal training and help pages.
- Brief the service desk about the planned Teams mobile layout change and that no admin setting to revert it is documented at the time of writing.
- Prepare a short note for mobile users explaining that the roadmap describes a change to how messages are displayed, with more content on screen.

### At rollout
- Check the new layout on a test iPhone and Android device as soon as the update reaches them, before users ask.
- Confirm in the app whether users can switch back to the previous layout or adjust density, and add the answer to the service desk guidance.

### After rollout
- Track service desk tickets about Teams mobile chat readability for a few weeks, and pass recurring accessibility problems to Microsoft through support.
- Re-check the Teams admin center messaging policy settings for any new mobile display option.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users get the new mobile message layout or keep the current one</strong><br><small>Tenant</small><br><small class="controls__note">Messaging policies list no layout or density setting for mobile at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Messaging policies in the Teams admin center and Set-CsTeamsMessagingPolicy in Teams PowerShell control which chat features users get, such as Immersive reader for messages, but list no setting for message layout or density on mobile at the time of writing (November 2026). Until Microsoft documents one, communication is the lever administrators have.

## Open questions

- Will the new layout reach all Teams mobile users automatically, or will users or admins opt in? Watch Message center for a post on this roadmap item.
- Will users be able to switch back to the current layout or choose a density, and will admins get a messaging policy setting for it?
- Does the new layout apply to chats, channels and meeting chats alike?
- How does the denser layout behave with device text-size and screen reader settings on iOS and Android?

<!-- rationale
risk: Low. The roadmap item describes a change to how existing messages are displayed in the Teams mobile app, with no new data access, sharing or automated action described.
cost: Low. All supported Teams subscription plans are eligible for the mobile apps; the cost the sources show is the time to brief users and the service desk.
impact: Medium. People who read Teams messages on iOS and Android see a different message layout; the record lists no desktop or web platforms.
-->
