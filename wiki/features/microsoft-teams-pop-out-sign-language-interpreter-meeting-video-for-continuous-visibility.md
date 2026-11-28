---
title: "Microsoft Teams: pop out the sign language interpreter video in meetings"
slug: "microsoft-teams-pop-out-sign-language-interpreter-meeting-video-for-continuous-visibility"
roadmapId: 571387
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams users who work with sign language interpreters get a resizable pop-out window for the interpreter video. Preview is targeted for December 2026, GA for January 2027. Microsoft says there is no admin policy for it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Teams service description says Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. Microsoft has not published a licence, price or meter specific to the pop-out."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["teams","accessibility","user-experience","meeting-policy","macos","gcc","gcc-high","dod"]
sources:
  - title: "MC1559642: (Updated) Continuous interpreter visibility with pop out video in Teams"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1559642"
    kind: "message-center"
  - title: "Accessibility guide for Microsoft Teams Admins"
    url: "https://learn.microsoft.com/microsoftteams/accessibility-guide-admin"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 571387"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571387"
    kind: "roadmap"
videos: []
related: ["meeting-policy"]
controls:
  - governs: "Whether the sign language interpreter pop-out is available to users"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice MC1559642 says there is no admin policy for this feature."
  - governs: "Whether interpreters can share an IP video feed in meetings (closest documented control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Audio & video > IP video"
      docs: "https://learn.microsoft.com/microsoftteams/accessibility-guide-admin"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowIPVideo $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Existing setting that the accessibility guide ties to interpreters sharing video. Not confirmed to govern the pop-out."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-21"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-19"
    note: "First briefing for this roadmap item: planned sign language interpreter pop-out in Teams meetings, with no documented admin control yet."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected: IP video is no longer called the only documented interpreter video setting (Mode for IP video added), and the guest-access checklist bullet was removed."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 43 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected: noted that Mode for IP video is not available in GCC, GCC High or DoD, and reworded the IP video check to match; spelled out the full IP video path in the governance checklist."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
  - date: "2026-11-21"
    note: "Added Microsoft's notice MC1559642: preview from early December 2026, GA from mid January 2027, user steps, and no admin policy. Default is now user opt-in."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 59
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "95d0bb5c34cdbf74c1c494b55a619450"
---

## What's changing

Teams will let a user pop out the video of their paired sign language interpreters into a separate window. The window can be resized and moved anywhere on screen, including to another monitor, and stays on top of other apps. The roadmap item describes it as designed to support Deaf and Hard of Hearing users, and says the video stays visible while viewers multitask, share content or change meeting layouts.

Microsoft's notice MC1559642 (published 2026-11-18, updated 2026-11-20) gives the user-side steps: in Teams Accessibility settings, turn on **Sign language mode** and select **I am a Signer**; select **Manage interpreters** and add the people who interpret for you; then select **View > Pop out interpreters** during a meeting. Users open the pop-out in each meeting, and can pin the **Pop out interpreters** button to the meeting toolbar. The notice says the pop-out only changes the user's own view, interpreters stay in the main meeting gallery for everyone else, and the window is not visible to other participants when the user shares their screen. It applies to Teams desktop on Windows and Mac.

The notice's rollout schedule for Worldwide is: public preview beginning early December 2026 and completing by late December 2026; general availability beginning mid January 2027 and completing by late January 2027. The roadmap record lists the status as In development, with a preview date of December CY2026 and a target date of January CY2027, and General Availability and Preview as release phases. These are Microsoft's targets, not shipped behaviour. The notice sets no act-by date.

Microsoft Learn documents no page for this feature at the time of writing (November 2026), so the behaviour above comes from the roadmap item and the notice.

## Why it matters

For most tenants this is a small accessibility change that only affects people who use sign language interpretation in Teams meetings. For them, losing sight of the interpreter means losing access to the conversation, as the notice puts it, so the pop-out matters most when they present, view shared content or minimise the main meeting window.

The notice says you do not need to do anything to prepare and suggests telling Deaf and Hard of Hearing users and their interpreters, and updating training and accessibility documentation. Because users turn it on themselves and Microsoft says there is no admin policy for it, the work is communication, not configuration.

## Risk assessment

**Data exposure**

- The notice describes the pop-out as a change to the user's own view only: interpreters stay in the main meeting gallery for everyone else, and the window is not visible to other participants when the user shares their screen.

**Security & identity**

- Microsoft's accessibility guide says sign language interpreters and CART captioners likely do not work for your organisation and can be invited to meetings through guest access, so interpreter video may come from guest accounts. The guide does not tie guest access to the pop-out.

**Autonomy & actions**

- No change reported: the pop-out is a viewing option that the user opens in each meeting.

**Change & support**

- Expect questions from users who cannot find the option: it needs **Sign language mode**, **I am a Signer** and a list of interpreters under **Manage interpreters** before **Pop out interpreters** appears under **View**, and the notice says it applies to Teams desktop on Windows and Mac.
- The accessibility guide documents the **IP video** meeting policy setting as what gives interpreters the ability to share an IP video feed. Whether the pop-out depends on it is not documented, so keep it turned on for the policies your interpreters' hosts hold.

## Cost and licensing

Microsoft has not published a licence, price or meter specific to the pop-out. The Teams service description says Microsoft Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, and the roadmap record names Microsoft Teams as the only product.

The cost the sources show is indirect: admin time to brief affected users and interpreters, update training and accessibility documentation as the notice suggests, and check the **IP video** meeting policy. Any licence or charge specific to this feature is not yet published.

## Scope

The notice says the feature applies to Teams desktop on Windows and Mac, and the roadmap record lists Desktop and Mac as platforms. The record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as clouds; the notice's rollout schedule gives dates for Worldwide only.

The notice describes the users as Deaf and Hard of Hearing users and their paired interpreters. Each user turns on Sign language mode, selects I am a Signer and adds their interpreters; Microsoft's notice says there is no admin policy for the feature. Microsoft has not stated which licences or roles are required beyond Teams itself.

## Governance guidance

### Before rollout

- Identify the Deaf and Hard of Hearing users and the sign language interpreters who work with them, so you know who to brief.
- Draft user guidance from the notice's steps: **Sign language mode**, **I am a Signer**, **Manage interpreters**, then **View > Pop out interpreters** in each meeting.
- Check that **IP video** is turned on in the meeting policies those users' meetings use (Teams admin center > Meetings > Meeting policies > policy > Audio & video > IP video).

### At rollout

- Send the guidance to affected users and their interpreters, and update training and accessibility documentation, as the notice suggests.
- Test an interpreted meeting on Teams desktop for Windows and for Mac when the preview reaches your tenant, with an interpreter who joins as a guest if that is how your interpreters attend.

### After rollout

- Ask users whether the pop-out window stays visible across monitors and apps while they share content or change layouts, and report differences to Microsoft support.
- Watch Message center for further updates to MC1559642, since Microsoft has already revised its timeline once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the sign language interpreter pop-out is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice MC1559642 says there is no admin policy for this feature.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether interpreters can share an IP video feed in meetings (closest documented control)</strong><br><small>User</small><br><small class="controls__note">Existing setting that the accessibility guide ties to interpreters sharing video. Not confirmed to govern the pop-out.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Audio &amp; video › IP video <a href="https://learn.microsoft.com/microsoftteams/accessibility-guide-admin" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowIPVideo $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice MC1559642 says there is no admin policy for the pop-out, so the first row records that there is no tenant switch. The second row is an existing meeting policy setting that the accessibility guide ties to interpreters sharing video; it is the closest documented control, and Microsoft has not said it governs the pop-out.

Meeting policies are assigned to users, so the IP video setting applies to the people who hold the policy. The accessibility guide describes the steps in the Teams admin center and names no role requirement.

## Open questions

- Does the pop-out depend on the **IP video** meeting policy setting or on any other meeting policy? Watch the Teams admin documentation and MC1559642.
- When will the pop-out reach GCC, GCC High and DoD, which the roadmap record lists as clouds but the notice's schedule does not cover?
- Is any licence beyond the Teams licence needed for the feature, and will Microsoft Learn publish a page for it?
- Will the pop-out arrive for Teams on the web or on mobile? The notice names only Teams desktop on Windows and Mac.

<!-- rationale
risk: Low. Microsoft's notice says the pop-out only changes the user's own view and that interpreters stay in the main meeting gallery for everyone else, so no new data or action reaches other people.
cost: Low. Microsoft has published no licence or meter specific to this feature; the only cost the sources show is admin time to brief Deaf and Hard of Hearing users and interpreters, and to update training material.
impact: Low. The notice aims the feature at Deaf and Hard of Hearing users and their paired interpreters on Teams desktop for Windows and Mac, a small group in most tenants; each user turns it on for themselves.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].governs and note; Risk assessment: Change & support; Governance controls / applicability: The accessibility guide ties the IP video meeting policy setting to interpreters sharing an IP video feed. | Found: Give sign language interpreters the ability to share IP video feed during Microsoft Teams meetings ... Check that IP video is turned On | Fix: Keep the attribution to the accessibility guide, and add: 'The audio and video policy article currently warns that Video conferencing does not turn off video for meetings and events, and directs organisers to Allow camera for attendees in Meeting Options.' Cite https://learn.microsoft.com/microsoftteams/meeting-policies-audio-and-video. This is differing general video-control guidance, not documentation of a pop-out switch. | Source: https://learn.microsoft.com/microsoftteams/accessibility-guide-admin
- [supported, minor] controls[1].ui; Governance guidance: Before rollout; Governance controls table / admin-path: The accessibility guide gives Teams admin center > Meetings > Meeting policies > policy > Audio & video > IP video. | Found: In the Teams admin center, go to Meetings, and then select Meeting policies. ... Select the policy you want to modify. ... Go to the Audio & video section. ... Check that IP video is turned On | Fix: Keep the cited path, but add: 'For the Unified Policies & Settings management experience, the accessibility guide says these options are under Settings & Policies. The audio and video policy article calls IP video "Video conferencing".' Cite https://learn.microsoft.com/microsoftteams/meeting-policies-audio-and-video alongside the existing accessibility guide. | Source: https://learn.microsoft.com/microsoftteams/accessibility-guide-admin
- [supported, minor] controls[1].scope; Governance controls / applicability: Meeting policies are assigned to users and the IP video setting applies to policy holders. | Found: You can assign a policy directly to users, either individually or at scale through a batch assignment (if supported for the policy type), or to a group that the users are members of (if supported for the policy type). | Fix: Add https://learn.microsoft.com/microsoftteams/meeting-policies-overview to sources for the existing statement that meeting policies are assigned to users. Keep the statement and the user scope. | Source: https://learn.microsoft.com/microsoftteams/meeting-policies-overview
-->
