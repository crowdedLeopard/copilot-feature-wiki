---
title: "Microsoft Teams: pop out calls into a separate window in the browser"
slug: "microsoft-teams-pop-out-calls-into-a-new-browser-window"
roadmapId: 569206
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams for web users get a separate call window that stays visible when they leave the call tab. The roadmap status is Launched, with an October CY2026 target; no admin action is required and Learn documents no admin setting for it."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says that, except for joining Teams meetings anonymously, each user in the organisation must have a Teams license before using Teams. No licence or meter specific to this call window is published at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption"]
tags: ["teams","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 569206"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569206"
    kind: "roadmap"
  - title: "MC1462921: (Updated) Calls popout into a new window on the browser to support multi-tasking and collaboration during a meeting"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1462921"
    kind: "message-center"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Limits and specifications for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/limits-specifications-teams"
    kind: "learn"
videos: []
related: ["microsoft-teams-pop-out-sign-language-interpreter-meeting-video-for-continuous-visibility"]
controls:
  - governs: "Admin setting for the call pop-out window and PiP Call Monitor in Teams for web"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no admin setting for this window at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-22"
    note: "New briefing: Launched in October 2026; Microsoft documents no admin control or licence for the call window."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 43 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Correction: summary now says the roadmap status is Launched with an October CY2026 target; window behaviour and rollout dates reworded to match MC1462921; licensing set to included under the Teams licence requirement."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 48 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 48
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "309aebeb29d2e761a2023f4b4fafd266"
---

## What's changing

Teams for web gets a separate call window that stays available when a user navigates away from, hides or minimises the browser tab or progressive web app (PWA) that hosts the call. The roadmap item describes it as a "simplified call window" for users of the Microsoft Teams browser app.

Microsoft's notice MC1462921 describes the same item as a new Call Monitor experience in Teams for Web. When a user moves away from the active meeting tab, Teams can show key meeting controls in a separate Picture-in-Picture (PiP) window. The post says the experience is available only in browsers that support the required browser capabilities, names Microsoft Edge and Google Chrome as supported browsers, and says no changes to existing meeting or calling workflows are required.

The roadmap record gives status Launched, a target of October CY2026, release phases General Availability and Targeted Release, platform Web and the Worldwide (Standard Multi-Tenant) cloud. MC1462921 (updated 15 October 2026, Microsoft's end date 30 November 2026) gives the schedule: Targeted Release scheduled to begin in mid-October 2026 and expected to complete by mid-October 2026, and General Availability scheduled to begin in mid-October 2026 and expected to complete by late October 2026.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description and the Message Center post.

## Why it matters

This arrives without an administrator choosing it. MC1462921 says users will receive the experience and that no admin action is required before rollout, and that Teams can display meeting controls in a separate PiP window when users move away from the active meeting tab.

The practical effect is on support and user expectations, not on data or spend. Microsoft documents no admin setting for the window, so the useful preparation is communication: tell helpdesk what the window is, which browsers support it and that it is a Teams feature, not a pop-up from another site.

## Risk assessment

**Data exposure**
- The roadmap and MC1462921 describe the window as showing call or meeting controls. Neither says what else it shows, such as participant names, video or shared content. Check what appears in the window during a pilot call before deciding whether it matters for sensitive meetings.

**Security & identity**
- No change documented: neither source mentions new permissions, sign-in or identity behaviour. MC1462921 states that no compliance considerations were identified.

**Autonomy & actions**
- No change documented: both sources describe a user-facing window for controlling a call the user is already in, and neither describes an agent or automated action.

**Change & support**
- Teams can display the window when users leave the active meeting tab, and MC1462921 says it works only in browsers that support the required capabilities. Expect questions from users on other browsers who do not see it.
- Microsoft Learn documents no admin setting for the window at the time of writing (November 2026), so helpdesk cannot switch it off for a user or group through a documented control.

## Cost and licensing

The roadmap record and MC1462921 name no licence, meter or charge for this feature. Microsoft Learn says that, except for joining Teams meetings anonymously, each user in the organisation must have a Teams license before using Teams ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). No licence or meter specific to this call window is published at the time of writing (November 2026).

The only cost the sources show is indirect: helpdesk briefing and training updates, and confirming that users run supported browser versions, as MC1462921 recommends.

## Scope

- **Users:** users of Teams for Web who join meetings in supported browsers, per MC1462921. The roadmap item refers to Teams browser app users and to calls.
- **Platform:** Web. The record lists no other platform.
- **Cloud:** Worldwide (Standard Multi-Tenant) only on the roadmap record. Other clouds are not listed on the record; that is a record fact, not a statement that the feature is unavailable there.
- **Browsers:** MC1462921 says supported browsers include Microsoft Edge and Google Chrome, and that the experience is available only in browsers that support the required browser capabilities.
- **Rollout:** Targeted Release and General Availability, both scheduled to begin in mid-October 2026 per MC1462921; the roadmap status is Launched.

## Governance guidance

### Before rollout
- Brief helpdesk and support staff on the new call window and the browsers that support it, as MC1462921 recommends.
- Update internal training and support material for Teams for web.
- Confirm that users run supported browser versions for Teams for web, and review the Teams for web prerequisites on Microsoft Learn.

### At rollout
- Test a call in Microsoft Edge and in Google Chrome with a small group, and note what the window shows and how users close or restore it.
- Check the meetings that matter to you for sensitive content, so you know what is visible in the window while the user works in another tab.

### After rollout
- Collect helpdesk tickets that mention the call window and group them by browser, so gaps in browser support show up.
- Watch Message center and the Teams admin documentation for an admin setting for the window, which Microsoft has not documented at the time of writing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Admin setting for the call pop-out window and PiP Call Monitor in Teams for web</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no admin setting for this window at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin control for the call pop-out or PiP Call Monitor is documented, so the table shows that gap. MC1462921 says no admin action is required before rollout and asks for no setting to be changed.

The Teams meeting policy pages describe policies for features available to meeting organisers and participants; Microsoft Learn does not list this window among them at the time of writing (November 2026). The browser a user runs decides whether the window is available, per MC1462921.

## Open questions

- Which admin control, if any, will govern the call window for a user or group? Watch Message center and the Teams meeting policies reference.
- Are the roadmap's "simplified call window" and the Picture-in-Picture Call Monitor in MC1462921 the same experience, and does it apply to one-to-one calls as well as meetings?
- What does the window show beyond call controls, and does it respect meeting sensitivity settings?
- Will Microsoft publish any licence requirement specific to this call window? Watch the Teams licensing pages.

<!-- rationale
risk: Low. The change is a window for controls the user already has in the call, and no source describes new data access; no admin switch to turn it off is documented.
cost: Low. The only cost the sources show is admin time for helpdesk briefing and browser checks; no licence or meter is named for this feature.
impact: Medium. Teams for web meeting participants in supported browsers can receive a separate window containing meeting controls when they switch tabs, so support staff may get questions.
-->
