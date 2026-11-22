---
title: "Microsoft Teams: personal message reminders for chat and channels"
slug: "microsoft-teams-personal-message-reminders-for-chat-and-channels"
roadmapId: 565869
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users can set private reminders on chat and channel messages. Microsoft's notice says it is on by default and needs no admin action, with no admin controls; plan user communication."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says Teams is provided as part of many Microsoft 365 licenses. No licence, meter or price specific to message reminders is published in the roadmap item or notice MC1470887."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","channels","mobile","user-experience","personal-settings","adoption","privacy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft Teams: Personal message reminders for chat and channels"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565869"
    kind: "roadmap"
  - title: "MC1470887: (Updated) Microsoft Teams: Personal message reminders for chat and channels"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1470887"
    kind: "message-center"
  - title: "Chat, teams, channels, & apps in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/deploy-chat-teams-channels-microsoft-teams-landing-page"
    kind: "learn"
  - title: "Manage messaging policies in Teams"
    url: "https://learn.microsoft.com/microsoftteams/messaging-policies-in-teams"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
videos: []
related: ["microsoft-teams-granular-channel-notification-controls","microsoft-teams-improved-organization-for-muted-and-meeting-chats"]
controls:
  - governs: "Tenant or policy switch for personal message reminders"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1470887 states no admin controls or configuration are required. Messaging policies exist but list no reminders setting."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: Rolling out, on by default per MC1470887, no admin control documented."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 48 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after the independent check: removed the claim that reminders only link to messages a user can already see, narrowed the notification-settings and prerequisites statements to what MC1470887 says, and qualified the toast notification wording."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 59 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 59
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a3e0d86a6bd4abf07b386c6089af7d88"
---

## What's changing

Teams is adding personal reminders on chat and channel messages. A user can set a reminder on a message, update it, mark it complete or delete it. Reminders appear in a dedicated Reminders view, and the user gets a toast notification when one is due.

Microsoft's notice MC1470887 says the Reminders view groups items as upcoming, active and completed, and that a badge count appears on the Teams chat icon. It also says reminders are private to each user, include message context for quick follow-up, and respect existing Teams notification settings. The notice lists Desktop (Windows, Mac) and Mobile (iOS, Android); the roadmap item also lists Web.

The roadmap item is Rolling out with a target of November CY2026, in Targeted Release and General Availability, for Worldwide, GCC, GCC High and DoD. MC1470887 (updated 3 November 2026) gives the timeline as: Targeted Release beginning mid-November 2026, expected to complete in mid-November 2026; General Availability beginning mid-November 2026 and completing in December 2026. Microsoft Learn has no page for this feature at the time of writing (November 2026), so everything above is the roadmap's and the notice's description.

## Why it matters

Microsoft's notice says the feature is enabled by default for all Teams users, so users will find a new Message Reminder option and Reminders view without any admin step. The notice says no action is required and suggests informing users and updating training or documentation material. That is the whole of the administrator's job unless your organisation wants to control the feature, and Microsoft documents no admin control for it.

The notice answers its own compliance questions: reminders are stored as new customer data associated with message context, and they give another way to reach message content. Expect questions from compliance and records teams about where reminders sit relative to your retention and eDiscovery processes; Microsoft has not yet answered that (see Open questions).

## Risk assessment

**Data exposure**
- Per MC1470887, a reminder is stored and associated with message context, so a message can now be reached through a user's reminder as well as through the chat or channel. The notice says reminders are private to each user.
- Microsoft's notice does not say how reminder data is retained or searched. Treat that as unconfirmed until Microsoft says otherwise.

**Security & identity**
- No change to sign-in or permissions is described in the roadmap item or the notice.

**Autonomy & actions**
- No autonomous behaviour is described. Reminders are created, changed, completed and deleted by the user, and the notice says users can manage their own reminders.

**Change & support**
- The feature arrives on by default, so expect helpdesk questions about the new Message Reminder menu item, the Reminders view, toast notifications and the badge count on the Teams chat icon.
- Notifications respect existing Teams notification settings, so a user who has muted notifications may not see a reminder alert as expected.

## Cost and licensing

Microsoft Learn's Teams deployment page says "Teams is provided as part of many Microsoft 365 licenses" and points to the Microsoft Teams service description for licensing requirements. Neither the roadmap item nor MC1470887 names a licence, add-on or meter for message reminders, and a price or rate specific to this feature is not yet published.

The cost the sources show is indirect: admin and helpdesk time for informing users and updating training material, as the notice suggests.

## Scope

Microsoft's notice says all Microsoft Teams users in the organisation are affected. The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD; the notice names the same four clouds for General Availability.

Platforms: the roadmap item lists Android, Desktop, iOS, Mac and Web. The notice lists Desktop (Windows, Mac) and Mobile (iOS, Android). Rollout is through Targeted Release then General Availability on the timeline given above. The notice names no prerequisites and says no admin configuration is required.

## Governance guidance

### Before rollout
- Tell users, helpdesk and change champions that Teams is adding message reminders, a Reminders view and due-time toast notifications, using the rollout window in MC1470887.
- Update internal Teams training and guidance to describe the Message Reminder option and the privacy of reminders, as Microsoft's notice suggests.
- Ask your compliance and records owners whether personal reminders raise any retention or eDiscovery question for your organisation, and record the answer against the open questions below.

### At rollout
- Compare what pilot users in Targeted Release see with the notice: the Message Reminder menu item, the Reminders view, toast notifications and the chat icon badge.
- Brief the helpdesk on how reminder alerts follow existing Teams notification settings.

### After rollout
- Watch Message center and the Microsoft 365 Roadmap item 565869 for changes to the timeline, which MC1470887 has already revised.
- Check Microsoft Learn for a feature page or an admin setting and add it to your controls once one is documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or policy switch for personal message reminders</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1470887 states no admin controls or configuration are required. Messaging policies exist but list no reminders setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice MC1470887 says no admin controls or configuration are required, and the Teams messaging policies page lists no reminders setting at the time of writing (November 2026). The row above records that gap: no tenant or policy switch is documented, so users cannot be kept from using reminders by policy as far as Microsoft has said.

The notice says reminders respect existing Teams notification settings; it does not specify which settings.

## Open questions

- Is there, or will there be, an admin setting or policy to turn message reminders off for some users? Watch the Teams messaging policies page and Message center.
- How long is reminder data retained, and do Teams retention policies or eDiscovery searches cover it? The notice says reminders are stored with message context but does not say.
- What happens to a reminder when its source message is edited, deleted or removed by retention?
- Will message reminders need any licence beyond the Teams licence a user already has? Watch the Teams service description.

<!-- rationale
risk: Low. Reminders are private to each user, but they store new data tied to message context and Microsoft documents no admin switch for them.
cost: Low. No licence or meter is published for this feature; the known cost is admin time for user communication and training material updates, which Microsoft's notice MC1470887 suggests.
impact: High. Microsoft's notice says all Teams users are affected and the feature is enabled by default, so every user will see a new Message Reminder option and a Reminders view. Users receive toast notifications when their reminders are due, subject to existing Teams notification settings.
-->
