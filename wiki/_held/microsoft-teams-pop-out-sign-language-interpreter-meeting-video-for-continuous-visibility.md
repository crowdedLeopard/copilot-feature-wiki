---
title: "Microsoft Teams: pop out the sign language interpreter video in meetings"
slug: "microsoft-teams-pop-out-sign-language-interpreter-meeting-video-for-continuous-visibility"
roadmapId: 571387
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans a separate, resizable window for the sign language interpreter's video that stays visible across monitors and apps. Targeted January CY2027. No admin control for it is documented yet."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The Teams service description says Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. Microsoft has not published a licence, price or meter specific to this feature."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["teams","meeting-policy","user-experience","macos","accessibility","gcc","gcc-high","dod"]
sources:
  - title: "Accessibility guide for Microsoft Teams Admins"
    url: "https://learn.microsoft.com/microsoftteams/accessibility-guide-admin"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
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
    note: "Microsoft Learn documents no setting for this feature at the time of writing (November 2026)."
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
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-19"
    note: "First briefing for this roadmap item: planned sign language interpreter pop-out in Teams meetings, with no documented admin control yet."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 40
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "afc73b03f5e7f3088e3d2c4cb84f962a"
---

## What's changing

Microsoft plans to let people pop out a sign language interpreter's video in a Teams meeting into its own resizable window. The roadmap item says the window stays visible across monitors and apps, and keeps showing the interpreter while viewers multitask, share content or change meeting layouts. It is described as designed to support Deaf and Hard of Hearing users.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap text reads "You can now pop out", but the status is In development, so treat it as a plan. How a viewer opens the pop-out, and how a participant is marked as the interpreter, are not described in the record.

The record lists Desktop and Mac as platforms, and General Availability and Targeted Release as release phases. The clouds are Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The target date is January CY2027, and no preview date is given. The roadmap record does not say whether the pop-out is on by default.

## Why it matters

For most tenants this is a small, user-facing accessibility change. If Deaf and Hard of Hearing colleagues rely on interpreters in your meetings, the pop-out affects how they follow a meeting while sharing or switching apps, so it is worth telling them and their interpreters when it arrives.

Microsoft has not stated what happens on arrival or whether an administrator can switch the pop-out off, so no source says existing behaviour changes for anyone else. Plan on the basis that you will find out through Message center and the Teams documentation closer to the target date.

## Risk assessment

**Data exposure**

- The roadmap describes the pop-out as a display of the interpreter's existing meeting video in a separate window. It mentions no new data being collected or stored. Microsoft has not documented where the pop-out window can be placed, so confirm whether it can be moved onto a screen that others can see.

**Security & identity**

- Sign language interpreters often work for an outside organisation. Microsoft's accessibility guide says you can invite interpreters to Teams meetings by giving them guest access, so interpreter video can come from guest accounts. Microsoft has not documented any identity change for this feature.

**Autonomy & actions**

- No change reported: the roadmap describes a viewing option and no automated action.

**Change & support**

- Expect help-desk questions from users who rely on interpreters if the pop-out is absent on a platform: the roadmap lists Desktop and Mac only, and Learn documents nothing about other clients.
- The only meeting policy setting documented for interpreter video is **IP video**, which the accessibility guide says gives interpreters the ability to share an IP video feed. Whether the pop-out depends on that setting is not documented, so check it is on for the policies that interpreters' hosts use.

## Cost and licensing

Microsoft has not published a licence, price or meter for this feature. The Teams service description says Microsoft Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, and the roadmap record names Microsoft Teams as the only product.

The cost the sources show is indirect: admin time to check meeting policies and tell affected users, and any guest-access setup for external interpreters. A licence or charge specific to this feature is not yet published.

## Scope

The roadmap record lists Desktop and Mac as platforms and Microsoft Teams as the product. It lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD as clouds, and General Availability and Targeted Release as release phases. The target is January CY2027.

Which users, roles or licences get the pop-out is not documented. The roadmap describes it as designed for Deaf and Hard of Hearing users, and the video it pops out is the sign language interpreter's. Microsoft's accessibility guide says interpreters may need guest access to join your meetings.

## Governance guidance

### Before rollout

- Identify which meeting organisers and Deaf or Hard of Hearing users in your tenant work with sign language interpreters, so you know who to brief.
- Check the **IP video** setting in the meeting policies those users hold (Teams admin center > Meetings > Meeting policies), because Microsoft's accessibility guide ties it to interpreters sharing video.
- Confirm that guest access is set up for external interpreters, as the accessibility guide describes.

### At rollout

- Watch Message center and the Teams documentation for a notice or Learn page that describes the pop-out and any setting that governs it.
- Test an interpreted meeting on Desktop and Mac clients with an interpreter account once the feature reaches your tenant.

### After rollout

- Ask affected users whether the pop-out window stays visible across monitors and apps as the roadmap describes, and report differences to Microsoft support.
- Record the setting or policy that governs the pop-out in your Teams runbook once Microsoft documents one.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the sign language interpreter pop-out is available to users</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether interpreters can share an IP video feed in meetings (closest documented control)</strong><br><small>User</small><br><small class="controls__note">Existing setting that the accessibility guide ties to interpreters sharing video. Not confirmed to govern the pop-out.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Audio &amp; video › IP video <a href="https://learn.microsoft.com/microsoftteams/accessibility-guide-admin" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowIPVideo $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that governs the sign language pop-out itself at the time of writing (November 2026), so the first row records that gap. The second row is an existing meeting policy setting that the accessibility guide ties to interpreters sharing video. It is the closest documented control, and Microsoft has not said that it governs the pop-out.

Meeting policies are assigned to users, so the setting applies to the people who hold the policy. The accessibility guide describes the steps in the Teams admin center and does not name a role requirement.

## Open questions

- Is there an admin setting or meeting policy that turns the interpreter pop-out on or off, and where will it be documented? Watch Message center and the Teams admin documentation.
- Is the pop-out on by default when it arrives, and does Microsoft plan a Message center notice with an act-by date?
- Does the pop-out depend on the **IP video** meeting policy setting or on a separate interpreter role in the meeting?
- Will the pop-out reach Teams on the web and on mobile, given that the roadmap lists Desktop and Mac?
- Is any licence beyond the Teams licence needed for the feature?

<!-- rationale
risk: Low. The roadmap describes a viewing change for the interpreter's meeting video and mentions no new data access, and nothing in Microsoft's text suggests an admin decision is needed before it arrives.
cost: Low. Microsoft has published no licence or meter for this feature; the only cost the sources show is admin and communication time. Teams itself is licensed through Microsoft 365 offerings or a standalone SKU.
impact: Low. The roadmap aims the change at Deaf and Hard of Hearing users and the interpreters they work with, a small group in most tenants, on Desktop and Mac clients.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Change & support / absence: IP video is the only documented meeting policy setting for interpreter video. | Found: This setting controls both outgoing and incoming video for meetings and group calls that a user organizes or attends. | Fix: Replace 'The only meeting policy setting documented for interpreter video is IP video' with 'The accessibility guide documents IP video as a meeting policy setting for interpreter video'. Microsoft also documents Mode for IP video as controlling incoming and outgoing meeting video at https://learn.microsoft.com/microsoftteams/meeting-policies-audio-and-video; do not claim IP video is the only policy. | Source: https://learn.microsoft.com/microsoftteams/meeting-policies-audio-and-video
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The accessibility guide gives Teams admin center > Meetings > Meeting policies > policy > Audio & video > IP video. | Found: In the Teams admin center, go to Meetings, and then select Meeting policies. Select the policy you want to modify. Go to the Audio & video section. Check that IP video is turned On, then select Save. | Fix: Keep the cited path, but add: 'The accessibility guide calls the setting IP video; the audio and video policy reference instead lists Mode for IP video and Video conferencing.' Cite https://learn.microsoft.com/microsoftteams/meeting-policies-audio-and-video, which uses those labels. | Source: https://learn.microsoft.com/microsoftteams/accessibility-guide-admin
- [contradicted, minor] Governance guidance: Before rollout, guest-access bullet / consistency: Every control the governance checklist tells readers to check has a controls-table row. | Found: Confirm that guest access is set up for external interpreters ... Controls rows: Whether the sign language interpreter pop-out is available to users; Whether interpreters can share an IP video feed in meetings. | Fix: Remove the Before rollout bullet 'Confirm that guest access is set up for external interpreters, as the accessibility guide describes.' It directs readers to check guest access, which has no controls-table row.
-->
