---
title: "Microsoft Teams: quick view controls in the chat list for GCC High and DoD (desktop, Mac and web)"
slug: "microsoft-teams-new-controls-for-quick-views-in-the-chat-list"
roadmapId: 567301
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users in GCC High and DoD can choose when quick views (mentions, followed threads) show at the top of the chat list, or collapse them. Roadmap status is Launched; no admin control is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Teams is licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU (Teams service description), which lists Chat for GCC High and DoD. No licence or meter specific to quick views is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","user-experience","adoption","personal-settings","channels","gcc-high","dod"]
sources:
  - title: "Release notes for Government Channel releases"
    url: "https://learn.microsoft.com/officeupdates/governmentchannel"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Microsoft Teams: New controls for quick views in the chat list"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567301"
    kind: "roadmap"
videos: []
related: ["microsoft-teams-improved-organization-for-muted-and-meeting-chats","microsoft-teams-granular-channel-notification-controls"]
controls:
  - governs: "Tenant or policy control over quick views in the chat list"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft documents no admin setting for quick views at the time of writing (November 2026); the roadmap describes user choices."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-15T23:00:36"
changes:
  - date: "2026-11-23"
    note: "New briefing for the GCC High and DoD item (desktop, Mac and web); no admin control for quick views is documented."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 41 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 41
  confirmed: 41
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e196499930e724519f3f532d4066b674"
---

## What's changing

Teams is adding user controls for the quick views at the top of the chat and channels list. Quick views are views into mentions, followed threads and more, introduced with the new chats and channels experience. The roadmap says users will be able to choose when and how they are shown, with options such as always show, always hide and show only when unread, and to collapse the quick views section.

This page covers roadmap item 567301, which lists GCC High and DoD and the Desktop, Mac and Web platforms. Microsoft lists the same feature under a second roadmap item, 555856, which lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and Android, Desktop, iOS and Mac; that item shows status Rolling out and a March CY2026 target.

Item 567301 has status Launched, release phase General Availability and an August CY2026 target. Microsoft's Government Channel release notes list the feature under "Teams app: September 09" for GCCH customers, in the same words as the roadmap. Microsoft Learn has no separate page describing the controls, so what this page says about behaviour is the roadmap's description. Microsoft has not stated what the quick views show by default.

## Why it matters

Nothing in the sources asks administrators to act. This is a per-user display choice, and the roadmap describes no tenant setting for it, so the practical effect is on what users see first in Teams and what they ask the service desk.

Because Microsoft has not stated the default display, plan on users in GCC High and DoD seeing a changed top of the chat list and on some of them hiding or collapsing quick views. Mentions and followed threads are where people look for requests addressed to them, so a hidden view is the support risk worth communicating about.

## Risk assessment

**Data exposure**

- No change documented. The roadmap describes a display option for views the experience already shows and names no new data source, sharing or storage.

**Security & identity**

- No change documented. The roadmap names no permission, sign-in or identity change.

**Autonomy & actions**

- No change documented. The controls are choices a user makes about what is shown; the roadmap describes no automated or agent action.

**Change & support**

- Users who choose always hide, or who collapse the section, may stop seeing mentions and followed threads at the top of the list, and may report missed requests. Brief the service desk on the options the roadmap lists.
- Item 567301 lists Desktop, Mac and Web; item 555856 lists Android and iOS. Expect users in the same tenant to see different behaviour on different clients, and confirm with a pilot group.

## Cost and licensing

The Teams service description says Microsoft Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, and its feature table lists Chat as available in GCC High and DoD. Quick views sit in the Teams chat and channels list, so the Teams licence you already hold is the relevant one.

A licence or meter specific to quick view controls is not yet published, and Microsoft Learn documents no separate charge for them at the time of writing (November 2026). The indirect cost is user communication and service desk time.

## Scope

**Clouds:** GCC High and DoD, as item 567301 lists them. Item 555856 also lists Worldwide (Standard Multi-Tenant) and GCC.

**Platforms:** Desktop, Mac and Web on this item. Item 555856 lists Android, Desktop, iOS and Mac.

**Users:** people using the new chats and channels experience, which is where the roadmap says quick views were introduced. Roles, prerequisites and rollout mechanics (release channel, targeted release) are not stated beyond release phase General Availability.

**Status:** Launched, with an August CY2026 target on the record. Microsoft's Government Channel release notes list it for GCCH customers; they do not name DoD for this feature.

## Governance guidance

### Before rollout

- Identify a pilot group in GCC High or DoD that uses the new chats and channels experience on desktop, Mac or web, and ask them to report what the chat list shows today.
- Brief the service desk that users can show, hide, show only when unread, or collapse quick views, so missed-mention reports are traced to this setting first.
- Read roadmap items 567301 and 555856 together so you know which clouds and platforms each covers.

### At rollout

- Ask pilot users to record which quick views appear by default and where the controls are, since Microsoft has not stated either.
- Tell users that hiding or collapsing quick views removes mentions and followed threads from the top of the list.

### After rollout

- Watch Message center and the Government Channel release notes for a stated default or an admin control.
- Review service desk tickets about missed mentions or followed threads and feed the wording back into user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or policy control over quick views in the chat list</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft documents no admin setting for quick views at the time of writing (November 2026); the roadmap describes user choices.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), neither the Teams settings and policies reference nor the Set-CsTeamsMessagingPolicy reference documents a setting for quick views in the chat list, so the table records no admin path or command. The roadmap describes the options as choices for users.

Existing Teams policies cover other chat behaviour and are not documented as covering quick views. Do not use them as a substitute for a control that Microsoft has not documented.

## Open questions

- What do quick views show by default for users in GCC High and DoD, and does the default change on arrival? Watch the roadmap item and Message center.
- Will Microsoft document an admin setting or policy for quick views in the chat list? Watch the Teams settings and policies reference.
- The Government Channel release notes name GCCH customers for this feature; will Microsoft confirm DoD availability on Learn, as the roadmap record lists it?
- Do the quick view choices apply on mobile clients in these clouds, given item 567301 lists only Desktop, Mac and Web?

<!-- rationale
risk: Low. This is a display choice for views the new chats and channels experience already has; the roadmap names no new data access, permission or automation. The residual risk is users hiding mentions and missing them.
cost: Low. The only cost the sources show is communication and service desk time. Teams is licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU; no licence or meter specific to quick views is published.
impact: Medium. Users of the new chats and channels experience on desktop, Mac and web in GCC High and DoD see changed behaviour at the top of the chat list; Microsoft has not stated whether the default display changes.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Governance guidance: Before rollout / record: Microsoft lists the same quick-view controls under roadmap item 555856. | Found: "id": 555856, "title": "Microsoft Teams: New controls for quick views in the chat list" | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=555856 to sources, titled 'Microsoft Teams: New controls for quick views in the chat list', with kind 'roadmap'.
-->
