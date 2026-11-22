---
title: "Microsoft Teams: pop out calls into a separate window in the browser"
slug: "microsoft-teams-pop-out-calls-into-a-new-browser-window"
roadmapId: 569206
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams for web users get a separate call window that stays visible when they leave the call tab. Launched in October 2026 with no admin action required; Microsoft Learn documents no admin setting for it."
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
  model: "unknown"
  notes: "Neither the roadmap record nor Message Center post MC1462921 names a licence or meter for this feature, and Microsoft Learn documents none for it at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption"]
tags: ["teams","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Pop out calls into a new browser window"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569206"
    kind: "roadmap"
  - title: "MC1462921: (Updated) Calls popout into a new window on the browser to support multi-tasking and collaboration during a meeting"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1462921"
    kind: "message-center"
  - title: "Limits and specifications for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/limits-specifications-teams"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
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
version: 1
verification:
  status: "held"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 41
  unconfirmed: 2
  contradicted: 0
  attempts: 1
  hash: "59055aa5045255471f789d29199a03a0"
---

## What's changing

Teams for web gets a separate call window that stays available when a user navigates away from, hides or minimises the browser tab or progressive web app (PWA) that hosts the call. The roadmap item describes it as a "simplified call window" for users of the Microsoft Teams browser app.

Microsoft's notice MC1462921 describes the same item as a new Call Monitor experience in Teams for Web. When a user moves away from the active meeting tab, Teams can show key meeting controls in a separate Picture-in-Picture (PiP) window. The post says the experience is available only in browsers that support the required browser capabilities, names Microsoft Edge and Google Chrome as supported browsers, and says no changes to existing meeting or calling workflows are required.

The roadmap record gives status Launched, a target of October CY2026, release phases General Availability and Targeted Release, platform Web and the Worldwide (Standard Multi-Tenant) cloud. MC1462921 (updated 15 October 2026, Microsoft's end date 30 November 2026) gives the schedule: Targeted Release rolling out from mid-October 2026 and expected to complete by mid-October 2026, and General Availability from mid-October 2026 and expected to complete by late October 2026.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description and the Message Center post.

## Why it matters

This arrives without an administrator choosing it. MC1462921 says users will receive the experience and that no admin action is required before rollout, so Teams for web users in your tenant will see a new window during calls as they work in other tabs.

The practical effect is on support and user expectations, not on data or spend. Microsoft documents no admin setting for the window, so the useful preparation is communication: tell helpdesk what the window is, which browsers support it and that it is a Teams feature, not a pop-up from another site.

## Risk assessment

**Data exposure**
- The roadmap and MC1462921 describe the window as showing call or meeting controls. Neither says what else it shows, such as participant names, video or shared content. Check what appears in the window during a pilot call before deciding whether it matters for sensitive meetings.

**Security & identity**
- No change documented: neither source mentions new permissions, sign-in or identity behaviour. MC1462921 states that no compliance considerations were identified.

**Autonomy & actions**
- No change documented: both sources describe a user-facing window for controlling a call the user is already in, and neither describes an agent or automated action.

**Change & support**
- Users will see a window appear when they leave the call tab, and MC1462921 says it works only in browsers that support the required capabilities. Expect questions from users on other browsers who do not see it.
- Microsoft Learn documents no admin setting for the window at the time of writing (November 2026), so helpdesk cannot switch it off for a user or group through a documented control.

## Cost and licensing

The roadmap record and MC1462921 name no licence, meter or charge for this feature. Microsoft Learn documents no separate licence or meter for it at the time of writing (November 2026), so the licensing model is recorded as not yet published.

The only cost the sources show is indirect: helpdesk briefing and training updates, and confirming that users run supported browser versions, as MC1462921 recommends.

## Scope

- **Users:** users of Teams for Web who join meetings in supported browsers, per MC1462921. The roadmap item refers to Teams browser app users and to calls.
- **Platform:** Web. The record lists no other platform.
- **Cloud:** Worldwide (Standard Multi-Tenant) only on the roadmap record. Other clouds are not listed on the record; that is a record fact, not a statement that the feature is unavailable there.
- **Browsers:** MC1462921 says supported browsers include Microsoft Edge and Google Chrome, and that the experience is available only in browsers that support the required browser capabilities.
- **Rollout:** Targeted Release and General Availability, both from mid-October 2026 per MC1462921; the roadmap status is Launched.

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
- Which licence, if any, does the feature need? Watch the Teams licensing and Learn pages for Teams for web.

<!-- rationale
risk: Low. The change is a window for controls the user already has in the call, and no source describes new data access; no admin switch to turn it off is documented.
cost: Low. The only cost the sources show is admin time for helpdesk briefing and browser checks; no licence or meter is named for this feature.
impact: Medium. Every Teams for web user who takes calls or meetings in a supported browser can see the new window appear when they switch tabs, so support staff will get questions.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary; front matter: changes / date: The feature actually launched in October 2026. | Found: Searched: "Teams" "569206" "October 2026" launched Call Monitor; read roadmap record and MC1462921. The record gives Launched plus an October target; the notice gives expected October rollout completion, not confirmed actual launch timing. | Fix: Replace 'Launched in October 2026' in the summary and change note with 'The roadmap status is Launched, with an October CY2026 target'. Keep the notice's rollout dates explicitly described as scheduled starts and expected completion dates.
- [unsupported, major] Why it matters; Risk assessment: Change & support; rationale: impact / behaviour: Users will see a call window appear when they leave the active call tab. | Found: Searched: "Teams" "web" "Call Monitor" "Picture-in-Picture"; read MC1462921 and roadmap description. The notice says Teams 'can display' meeting controls; the roadmap says users 'will be able to pop out calls', not that leaving the tab always opens a window. | Fix: Replace 'Teams for web users in your tenant will see a new window during calls as they work in other tabs' with 'Teams can display meeting controls in a separate PiP window when users move away from the active meeting tab'. Replace 'Users will see a window appear when they leave the call tab' with 'Teams can display the window when users leave the active meeting tab'. In the impact rationale, replace the sentence with 'Teams for web meeting participants in supported browsers can receive a separate window containing meeting controls when they switch tabs, so support staff may get questions.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; Cost and licensing; Open questions / licensing: The licensing model is unknown because no licence specific to the call window is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to included. Replace the licensing notes and the corresponding Cost and licensing sentence with: 'Microsoft Learn says that, except for joining Teams meetings anonymously, each user in the organisation must have a Teams license before using Teams. No licence or meter specific to this call window is published at the time of writing (November 2026).' Cite https://learn.microsoft.com/microsoftteams/user-access. Replace the licensing open question with 'Will Microsoft publish any licence requirement specific to this call window? Watch the Teams licensing pages.' | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
