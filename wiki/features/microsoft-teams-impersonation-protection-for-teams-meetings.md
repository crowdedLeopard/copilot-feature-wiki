---
title: "Microsoft Teams: impersonation protection warnings in meetings"
slug: "microsoft-teams-impersonation-protection-for-teams-meetings"
roadmapId: 573157
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans to warn meeting participants when it detects a possible impersonation attempt. Microsoft says no admin action is required; Learn documents no setting, default or licence for it yet."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, MC1530613 nor the Microsoft Learn pages read name a licence or meter for meeting impersonation protection."
audiences: ["m365-admin","security","end-user","change-adoption"]
tags: ["teams","impersonation","identity"]
sources:
  - title: "Microsoft 365 Roadmap item 573157: Microsoft Teams: Impersonation Protection for Teams meetings"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573157"
    kind: "roadmap"
  - title: "MC1530613: Microsoft Teams: Impersonation protection for Teams meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1530613"
    kind: "message-center"
  - title: "Block meeting participants from changing their display names"
    url: "https://learn.microsoft.com/microsoft-365/baseline-security-mode/dont-allow-meeting-participants-to-change-names"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
videos: []
related: ["microsoft-teams-third-party-synthetic-audio-and-video-detection-in-microsoft-teams","microsoft-teams-facilitator-s-enhanced-protection-skill-can-alert-you-to-potential-scams","microsoft-teams-report-a-security-concern-in-meetings","meeting-policy"]
controls:
  - governs: "Tenant or policy switch for meeting impersonation protection"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented at the time of writing (November 2026). ParticipantNameChange is a separate, related setting."
confidence: "low"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-22"
    note: "First briefing: warnings for suspected impersonation in Teams meetings, with the roadmap and MC1530613 timing differences and no documented setting, default or licence yet."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 42 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 41
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "26f5062c8a47b96e68ca57e4bf9c11e2"
---

## What's changing

Teams plans to show warnings and risk indicators in meetings when it detects a potential impersonation attempt, so that users can spot suspicious participants and meeting organisers before and while they take part. This description comes from the roadmap item and Microsoft's notice MC1530613, which use the same wording.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's and the notice's description. Neither says how Teams detects impersonation, what a warning looks like, or who sees it.

The roadmap item is at status Rolling out, with a target of November CY2026, release phases General Availability and Targeted Release, the Worldwide (Standard Multi-Tenant) cloud, and the Android, Desktop, iOS, Mac and Web platforms. MC1530613 (published 2026-10-29) gives a later schedule: Microsoft will begin rolling out in mid-December 2026 and expects to complete by late December 2026. The notice is the more specific statement of rollout timing; the two dates differ.

MC1530613 is categorised "Plan for change" and has no act-by date. It states that no immediate admin action is required, and recommends that admins familiarise themselves with the new protection experience and communicate the change to users and security teams as appropriate.

## Why it matters

For a service owner this is a user-facing security change that Microsoft says needs no switch to be flipped, so the work is communication. Users will meet a new kind of warning in meetings, and security teams and the service desk will get questions about it, including from people who are flagged but are genuine.

Microsoft has not stated whether the feature is on by default or whether admins can turn it off. Plan on the basis that no source says existing behaviour changes beyond the warnings, and watch Message center and Microsoft Learn for a feature page before the mid-December 2026 rollout window.

## Risk assessment

**Data exposure**

- No source describes what data the detection uses or where it is processed. Treat that as an open question rather than an assumption.

**Security & identity**

- The feature is a security aid for users: MC1530613 answers "Yes" to whether the change introduces or modifies security controls, because it surfaces meeting impersonation warnings and risk indicators.
- A warning is information for the participant. Neither source describes the feature blocking a participant or changing meeting admission, so existing lobby and policy settings remain the enforcement point.
- Microsoft Learn documents a separate meeting policy setting, ParticipantNameChange, that stops participants editing their display names in meetings when it is disabled. It addresses renaming, not this feature's detection.

**Autonomy & actions**

- No source describes the feature taking action on its own beyond showing warnings and risk indicators.

**Change & support**

- Expect questions from users who see a warning on a colleague or organiser they trust, and from users who do not understand a risk indicator. MC1530613 asks admins to communicate the change to users and security teams.
- The roadmap item (target November CY2026) and the notice (rollout mid-December to late December 2026) differ, so agree one communication date with the service desk after the notice's window opens.

## Cost and licensing

No licence, price or meter for meeting impersonation protection is published at the time of writing (November 2026). The roadmap item and MC1530613 name none, and Microsoft's Teams Premium licensing page does not mention this feature.

The cost known today is indirect: admin time to read the notice, brief the service desk and security team, and tell users what the warnings mean. A licence requirement for this feature is not yet published; check Message center and the Teams Premium licensing page before rollout.

## Scope

- **Users and licences:** who sees the warnings, and under which licence, is not yet published.
- **Cloud:** the roadmap item lists Worldwide (Standard Multi-Tenant). It lists no US Government cloud.
- **Platforms:** Android, Desktop, iOS, Mac and Web, as the roadmap item lists them.
- **Rollout:** the roadmap item shows Rolling out, target November CY2026, with General Availability and Targeted Release phases. MC1530613 says rollout begins in mid-December 2026 and completes by late December 2026.
- **Roles and prerequisites:** none are documented for this feature at the time of writing.

## Governance guidance

### Before rollout

- Read MC1530613 in the Microsoft 365 admin center Message center and share it with the security team and the service desk.
- Brief the service desk on what Microsoft says the feature does: it shows warnings and risk indicators when Teams detects a potential impersonation attempt.
- Decide whether to restrict participant renaming through the ParticipantNameChange meeting policy setting described in the controls notes, since it addresses a related impersonation route.

### At rollout

- Tell users, from the notice's mid-December 2026 start, that warnings may appear in meetings and that a warning is not proof of impersonation.
- Ask security teams to agree how a user should report a suspected impersonator, using whichever channel they already use.

### After rollout

- Collect the questions and examples users raise in the first weeks and compare them with the Learn page once Microsoft publishes one.
- Re-check Microsoft Learn for a feature page, a setting and a licence statement, and update the open questions below.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or policy switch for meeting impersonation protection</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented at the time of writing (November 2026). ParticipantNameChange is a separate, related setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

At the time of writing (November 2026), no admin setting for meeting impersonation protection is documented, so the table records that gap. The Set-CsTeamsMeetingPolicy reference lists no impersonation-protection parameter, and the meeting policies overview describes no such setting.

The ParticipantNameChange setting in Teams meeting policies is a related control for display-name changes, documented at https://learn.microsoft.com/microsoft-365/baseline-security-mode/dont-allow-meeting-participants-to-change-names and in the Set-CsTeamsMeetingPolicy reference. It does not govern the detection or warnings in this feature.

## Open questions

- Is meeting impersonation protection on by default, and can an administrator turn it off or tune it? Watch Message center and the Teams meeting policies pages on Microsoft Learn.
- Which licence, if any, does the feature need, and does it differ for Teams Premium or Teams Enterprise customers?
- How does Teams decide that a participant or organiser may be impersonating someone, and what data does it use?
- Who sees a warning (the organiser, other participants, or both), and can guests and external participants see it?
- Will the rollout reach tenants on the roadmap's November CY2026 target or the notice's mid-December 2026 window, and is Targeted Release earlier?

<!-- rationale
risk: Low. The feature adds warnings and risk indicators for users; neither the roadmap item nor Microsoft's notice MC1530613 describes new data access or automated action, and the default state is not stated.
cost: Low. The known costs are admin time and user communication; a licence or meter for this feature is not yet published.
impact: Medium. Users on Android, desktop, iOS, Mac and web may see impersonation warnings in meetings, and Microsoft asks admins to communicate the change to users and security teams; how often warnings appear is not stated.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope: Rollout; Risk assessment: Change & support / record: MC1530613 gives late December 2026 as the completion window, which Scope presents as definite. | Found: expect to complete by late December 2026. | Fix: In Scope, replace 'MC1530613 says rollout begins in mid-December 2026 and completes by late December 2026' with 'MC1530613 says rollout begins in mid-December 2026 and is expected to complete by late December 2026.'
- [supported, minor] summary; What's changing; Why it matters / record: Microsoft says no admin action is required, described more precisely in the body as no immediate admin action. | Found: No immediate admin action is required. | Fix: In the summary, replace 'Microsoft says no admin action is required' with 'Microsoft says no immediate admin action is required'. In Why it matters, replace 'Microsoft says needs no switch to be flipped' with 'Microsoft says requires no immediate admin action'.
- [supported, minor] front matter: licensing.model and notes; summary; Cost and licensing; Scope / licensing: The licensing model is unknown because no feature-specific licence requirement is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included' under the standard's product-level licensing rule. Replace the notes with 'Except for joining Teams meetings anonymously, each user in your organisation needs a Teams licence to use Teams. A licence requirement specific to meeting impersonation protection is not yet published.' Cite https://learn.microsoft.com/microsoftteams/user-access and use this same qualification in Cost and licensing; do not claim Teams Premium is required. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist asks readers to decide whether to restrict participant renaming, but that control has no table row. | Found: Decide whether to restrict participant renaming through the ParticipantNameChange meeting policy setting described in the controls notes. The table contains only 'Tenant or policy switch for meeting impersonation protection'. | Fix: Remove the Before rollout bullet beginning 'Decide whether to restrict participant renaming'. Keep the existing descriptive controls note; do not add a control row as part of this correction.
-->
