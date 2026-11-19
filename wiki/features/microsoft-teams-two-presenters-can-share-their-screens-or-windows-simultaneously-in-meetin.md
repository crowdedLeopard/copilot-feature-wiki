---
title: "Microsoft Teams: two presenters can share screens or windows at the same time in meetings"
slug: "microsoft-teams-two-presenters-can-share-their-screens-or-windows-simultaneously-in-meetin"
roadmapId: 80239
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft is adding simultaneous sharing by two presenters in Teams meetings, on by default, with rollout targeted to begin in early December 2026. Admins get a tenant-level control and organisers a meeting option; tell users and support teams."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft documents Teams licensing: except for joining meetings anonymously, each user in the organisation needs a Teams license to use Teams. The Teams service description includes meetings and screen sharing across Teams plans. No requirement specific to simultaneous sharing is published at the time of writing (November 2026)."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","meeting-policy","sharing","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 80239"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=80239"
    kind: "roadmap"
  - title: "MC1528014: (Updated) Microsoft Teams: Two presenters can share their screens or windows simultaneously in meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1528014"
    kind: "message-center"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Manage meeting policies for content sharing"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-new-sharing-panel-in-meetings-improved-content-discovery-and-ease-of-shari","microsoft-teams-pinch-to-zoom-in-on-shared-screens","microsoft-teams-specify-who-has-control-of-production-tools-in-teams-meetings-and-events"]
controls:
  - governs: "Whether multiple screenshare is available to users with a meeting policy"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowMultipleScreenshare $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Learn does not say this is the control MC1528014 describes, and says the setting has no effect until the feature is fully released."
  - governs: "Whether a user can share a desktop and window in a meeting (existing control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Content sharing"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ScreenSharingMode <value>"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing"
    note: "General control: governs whether a user can share a desktop or window in a Teams meeting. It does not determine how many presenters share at once."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-18"
    note: "First briefing for this roadmap item, built from the roadmap record, MC1528014 and the Set-CsTeamsMeetingPolicy reference."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 47 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: removed an unsupported claim about caps, named the organiser role for the per-meeting option, described the Multiple VBSS meeting options, and raised impact to high."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: Screen sharing mode note now states what Learn says it governs; licensing is now Teams licensing (included), with only a simultaneous-sharing requirement unpublished; removed an organiser-option check with no controls row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 46 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-18"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 46
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "b345ff83750935b732079b2f4f5a4252"
---

## What's changing

Two presenters will be able to share a screen or window at the same time in a Teams meeting, and participants will see both shared content streams at once. The roadmap item describes the purpose as making it easier to compare and discuss content from different presenters.

Microsoft's notice MC1528014 (updated 3 November 2026) says the capability will be enabled for all meetings by default, so a second presenter can start sharing without the first presenter stopping. It also says meeting organisers will get a meeting option to control whether multiple presenters can share simultaneously in an individual meeting, and that organisations will have a tenant-level admin control over whether simultaneous sharing is available to their users. The notice sets no act-by date.

The roadmap item (ID 80239) lists the status as In development, with a target of January CY2027, for General Availability and Targeted Release, on Desktop and Web, in the Worldwide (Standard Multi-Tenant) cloud. MC1528014 gives a later and more specific rollout window: it begins in early December 2026 (previously late November) and is expected to complete by mid-December 2026. Where the two differ, the notice's window is the one Microsoft gave tenants. Microsoft Learn has no page for this feature yet, so the behaviour described here is the roadmap's and the notice's description.

## Why it matters

Meetings change on Microsoft's schedule, not yours. If nobody acts, the notice says simultaneous sharing is on for all meetings from the December 2026 rollout, so presenters, participants and the help desk meet a new sharing behaviour at the same time.

The practical decision is whether that default suits each part of the organisation. For meetings where accidental exposure matters, such as finance reviews or customer calls, decide before rollout whether to leave the capability on and brief organisers on the meeting option, or to restrict it through the tenant-level control once you have confirmed where it lives.

## Risk assessment

**Data exposure**
- Two presenters' content can be on screen for participants at the same time, so a second presenter can show material while the first presenter is still sharing. The notice says the second presenter does not need the first to stop. Existing sharing limits, such as the **Screen sharing mode** meeting policy setting, still decide who can share at all, though that setting does not determine how many presenters share at once.
- MC1528014 states: "No compliance considerations identified." It does not describe any new data being stored or processed.

**Security & identity**
- No change to identity or authentication is described in the roadmap item or the notice. The notice does not say which roles can be the second presenter; confirm that before assuming the existing presenter role is the only gate.

**Autonomy & actions**
- No change: sharing is started by a person in the meeting. Neither source describes any automated or agent-driven sharing.

**Change & support**
- The capability is on by default for all meetings, so expect questions from organisers and participants about two streams on screen and about who can start the second share. The notice asks administrators to inform users and support teams about the new experience.
- The roadmap lists Desktop and Web. Microsoft has not said how the second stream appears on other clients, so support teams should not promise parity.

## Cost and licensing

Microsoft documents Teams licensing: except for joining meetings anonymously, each user in the organisation needs a Teams license to use Teams (Manage Teams licenses). The Teams service description includes meetings and screen sharing across Teams plans. No requirement specific to simultaneous sharing is published at the time of writing (November 2026).

The known cost is indirect: admin time to review sharing settings and communication for users and support teams, as the notice recommends.

## Scope

**Who and where.** The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud only, and the Desktop and Web platforms. It does not list US Government clouds; that is a record fact, not a statement that the feature is unavailable there.

**Rollout.** Per MC1528014, General Availability (Worldwide) begins in early December 2026 and is expected to finish by mid-December 2026. The roadmap item gives a January CY2027 target and the status In development; treat both dates as Microsoft's targets.

**Who configures it.** The notice says organisations have a tenant-level admin control and organisers have a per-meeting option. The notice identifies meeting organisers for the per-meeting option but does not name a specific administrator role for the tenant-level control. The Set-CsTeamsMeetingPolicy reference documents an AllowMultipleScreenshare parameter, covered in the controls table, but does not say that it is the control the notice describes.

## Governance guidance

### Before rollout
- Tell service desk and meeting organisers about the new behaviour before the early December 2026 rollout window that MC1528014 gives, as the notice recommends.
- Identify teams that present sensitive material in meetings, and decide whether the default suits them or whether to limit simultaneous sharing once Microsoft confirms which control applies.
- Review the current **Screen sharing mode** meeting policy setting for each policy (Teams admin center > Meetings > Meeting policies > policy > Content sharing), because it decides who can share a screen or window at all.

### At rollout
- Confirm in Message center whether MC1528014 changes again, since its timeline was already moved once.
- Check, once Microsoft confirms that AllowMultipleScreenshare is the tenant-level control for this feature, that your policies hold the value you intend before the feature reaches your tenant.

### After rollout
- Collect support tickets about simultaneous sharing and adjust the guidance you gave users.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether multiple screenshare is available to users with a meeting policy</strong><br><small>User</small><br><small class="controls__note">Learn does not say this is the control MC1528014 describes, and says the setting has no effect until the feature is fully released.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowMultipleScreenshare $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a user can share a desktop and window in a meeting (existing control)</strong><br><small>User</small><br><small class="controls__note">General control: governs whether a user can share a desktop or window in a Teams meeting. It does not determine how many presenters share at once.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Content sharing <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ScreenSharingMode &lt;value&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-content-sharing" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no Teams admin center path for the multiple-screenshare setting at the time of writing (November 2026), so that side of the first row is empty. The notice describes a tenant-level control but gives no location for it.

The Set-CsTeamsMeetingPolicy reference describes AllowMultipleScreenshare as a setting that "controls whether Multiple Screenshare is on or off for the entire tenant or for a particular user", and notes that the feature "has not been fully released yet, so the setting will have no effect". It does not tie the parameter to the roadmap item, so confirm that it is the control the notice means before relying on it.

The Screen sharing mode row is today's alternative. It decides whether a user can share a desktop and window at all; the page does not describe any effect on how many presenters share at once. The AllowMultipleScreenshare reference describes Multiple VBSS meeting options as available and enabled for the organiser when true, and hidden when false; it also warns that the setting currently has no effect.

## Open questions

- Which setting is the tenant-level control that MC1528014 describes, and is it the AllowMultipleScreenshare parameter in the meeting policy? Watch Message center and the Set-CsTeamsMeetingPolicy page.
- Where will the control appear in the Teams admin center, and which role can change it?
- If the tenant-level control is off, can an organiser's meeting option still allow simultaneous sharing, or does the tenant setting win?
- Is any licence requirement specific to simultaneous sharing published? Microsoft has not published one yet.
- Will the feature reach Teams on mobile and Teams Rooms devices, given the roadmap lists Desktop and Web only?

<!-- rationale
risk: Low. It adds a second simultaneous shared stream in meetings; Microsoft's notice MC1528014 identifies no compliance considerations and describes a tenant-level admin control and an organiser meeting option.
cost: Low. Teams licensing is documented and no meter is documented for this feature at the time of writing (November 2026), so the known cost is admin time and user communication. A requirement specific to simultaneous sharing is not yet published.
impact: High. Microsoft's notice says the capability is enabled for all meetings by default, changing default screen-sharing behaviour.
-->
