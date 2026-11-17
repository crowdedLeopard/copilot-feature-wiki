---
title: "Microsoft Teams: call history, voicemail and recordings in separate tabs per phone line"
slug: "microsoft-teams-multi-line-call-history-tabs-in-the-calls-app"
roadmapId: 570962
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Phone users with multi-line calling get a Calls app tab for each phone line. Microsoft's notice says it turns on automatically and no action is required; help desks should be told."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published for the tabs themselves. The multi-line page says alternate lines have the same licensing requirements as the user's primary phone number."
audiences: ["m365-admin","change-adoption"]
tags: ["teams","teams-phone","multi-line-calling","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 570962"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570962"
    kind: "roadmap"
  - title: "MC1484013: (Updated) Microsoft Teams: Multi-line call history tabs in the Calls app"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1484013"
    kind: "message-center"
  - title: "Configure Multi-line in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/multi-line"
    kind: "learn"
videos: []
related: ["microsoft-teams-enhanced-delegated-calling-with-delegate-call-access-restrictions-and-join"]
controls:
  - governs: "Whether the per-line Calls app tabs are shown"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting is documented; MC1484013 says the feature is enabled automatically for eligible users with multi-line calling configured."
  - governs: "Which users have alternate phone lines (and so can see per-line tabs)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Users > Manage users > user > Account > Assigned phone number > Assign alternate phone number"
      docs: "https://learn.microsoft.com/microsoftteams/multi-line"
    api:
      kind: "powershell"
      call: "Set-CsPhoneNumberAssignment -Identity user1@contoso.com -PhoneNumber '+14255551234' -PhoneNumberType CallingPlan -AssignmentCategory Alternate"
      docs: "https://learn.microsoft.com/microsoftteams/multi-line"
    note: "Existing multi-line control; it governs who has alternate lines, not the new tabs. Needs a Teams Administrator, Teams Communications Administrator or Teams Telephony Administrator role."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-03T00:14:11"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item; notes that Microsoft's notice and the multi-line page differ on per-line history and voicemail."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 52
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "643d248db52f4bc43320c0b1b7ca20d5"
---

## What's changing

Teams is redesigning the Calls app for Teams Phone users who have multi-line calling enabled. The roadmap item states that call activity is organised into a dedicated tab for each phone line, so call history, voicemails and recordings appear under the line they belong to.

Microsoft's notice MC1484013 says a tab is created for each assigned phone line, call history is shown under the line associated with the activity, voicemails appear under the line where they were received, and recordings appear under the line associated with the call. It also says the feature will be enabled automatically for eligible users with multi-line calling configured, and that users without multi-line calling are not affected. The notice lists Teams desktop for Windows, Teams desktop for Mac, Teams on the web and Teams Phone.

Microsoft's multi-line page describes the Calls app differently: it says each alternate number appears as a separate tab in the Calls app, but that call history is unified, with identifiers showing which number was used, and that all lines share one voicemail box. The two sources differ on whether history and voicemail are split by line, and the page does not yet reflect the roadmap description.

The roadmap record shows the status as Rolling out, with a target of November CY2026, the General Availability and Targeted Release phases, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds. MC1484013, updated 6 October 2026, gives Targeted Release as beginning in early November 2026 and expected to complete by early November 2026, and General Availability (Worldwide, GCC, GCC High, DoD) as beginning in early November 2026 and expected to complete by end of November 2026. The notice lists no act-by date.

## Why it matters

The change arrives without an administrator choosing it: Microsoft's notice says it will be enabled automatically for eligible users and that no action is required. Affected users will find call history, voicemail and recordings in a different place, so expect questions to the help desk from anyone who manages several lines.

Microsoft recommends notifying help desk and support teams, informing affected users who manage multiple phone lines, and updating internal documentation, training materials and support content that references call history, voicemail or recordings in the Calls app. Because the multi-line page currently describes unified history and one voicemail box, check which behaviour your users see before you write guidance.

## Risk assessment

**Data exposure**

- No new data source is described: the notice covers where existing call history, voicemails and recordings are displayed. Microsoft's notice states no compliance considerations were identified; it also says to review as appropriate for your organisation.

**Security & identity**

- No change described to sign-in, roles or permissions. Per-line grouping of recordings and voicemail is a display change in the notice; whether access rules change is not stated.

**Autonomy & actions**

- No change: the notice describes no automated actions. Users view and manage activity separately for each phone line.

**Change & support**

- Users with several numbers will see a tab per assigned line, so existing instructions for finding call history, voicemail and recordings may be out of date.
- The roadmap description and the multi-line page differ on whether history and voicemail are per line or unified, so support content could contradict what users see. Test with a multi-line account before publishing guidance.

## Cost and licensing

Microsoft has not published a licence or charge for the per-line tabs. The roadmap item and MC1484013 name no licence, meter or price for this feature.

The multi-line page states that alternate lines have the same licensing requirements as the user's primary phone number, and lists Teams Phone and Teams Phone with Calling Plan as the supported licence combinations. It also states that call forwarding for alternate lines follows the same rules as the primary line and that, depending on licensing, this may result in extra cost.

The indirect cost the sources show is admin and support time: notifying the help desk and updating documentation and training, as the notice recommends.

## Scope

The change applies to Teams Phone users with multi-line calling enabled and multiple phone numbers assigned. MC1484013 says users without multi-line calling are not affected.

- **Platforms:** Teams desktop for Windows, Teams desktop for Mac and Teams on the web, per the notice and the roadmap record. Teams mobile is not listed; the multi-line page says mobile support for alternate lines is coming soon.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the roadmap record lists them.
- **Multi-line prerequisites:** the multi-line page lists users assigned one primary line and up to nine alternate lines, a primary line assigned before an alternate line, and users who are voice enabled. It states that multi-line is not supported for users located in India.
- **Rollout:** Targeted Release beginning early November 2026 and General Availability beginning early November 2026, per MC1484013.

## Governance guidance

### Before rollout

- Identify which users have alternate lines assigned, using the Account tab for each user in the Teams admin center (row 2 of the table).
- Notify the help desk and support teams about the updated Calls app experience, as MC1484013 recommends.
- Update internal documentation and training that describes call history, voicemail or recordings in the Calls app.

### At rollout

- Sign in as a test user with several assigned lines and record what the Calls app shows for history, voicemail and recordings, because Microsoft's sources differ.
- Tell affected users who manage multiple phone lines that a tab per line is arriving, per the notice's recommendation.

### After rollout

- Collect help desk tickets that mention call history, voicemail or recordings in the Calls app, and update guidance where users see something your documentation does not describe.
- Re-read MC1484013 and the multi-line page for changes to the schedule or to the description of per-line history and voicemail.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the per-line Calls app tabs are shown</strong><br><small>Tenant</small><br><small class="controls__note">No setting is documented; MC1484013 says the feature is enabled automatically for eligible users with multi-line calling configured.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users have alternate phone lines (and so can see per-line tabs)</strong><br><small>User</small><br><small class="controls__note">Existing multi-line control; it governs who has alternate lines, not the new tabs. Needs a Teams Administrator, Teams Communications Administrator or Teams Telephony Administrator role.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Manage users › user › Account › Assigned phone number › Assign alternate phone number <a href="https://learn.microsoft.com/microsoftteams/multi-line" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsPhoneNumberAssignment -Identity user1@contoso.com -PhoneNumber '+14255551234' -PhoneNumberType CallingPlan -AssignmentCategory Alternate</code> <a href="https://learn.microsoft.com/microsoftteams/multi-line" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft's notice MC1484013 and the multi-line page describe no admin setting that turns the per-line tabs on or off, so row 1 shows both surfaces as not yet documented. The notice says the feature is enabled automatically for eligible users with multi-line calling configured.

Row 2 is the existing control over who has alternate lines. It decides who is eligible, not whether the tabs appear. The multi-line page states that you need the Teams Administrator, Teams Communications Administrator or Teams Telephony Administrator role, and Teams PowerShell Module version 7.6.0 or later to use the updated Set-CsPhoneNumberAssignment cmdlets.

Removing the primary line also removes all alternate lines from the user, according to the multi-line page, so changing licences or number assignments can change which tabs a user sees.

## Open questions

- Does the Calls app split call history and voicemail by line, as the roadmap and MC1484013 describe, or keep them unified as the multi-line page states? Watch the multi-line Learn page and Message center.
- Will an administrator be able to turn the per-line tabs off or on for a tenant or a group of users? Microsoft has not documented a setting.
- Is a licence or charge attached to the per-line tabs beyond the Teams Phone licence the user already needs? Not yet published.
- Do recordings and voicemail under each line keep the access rules they have today? The notice does not say.

<!-- rationale
risk: Low. The change reorganises how existing call history, voicemail and recordings are shown in the Calls app; Microsoft's notice describes no new data access or sharing.
cost: Low. The only cost the sources show is admin time for help desk, training and documentation updates; a licence for the tabs themselves is not yet published.
impact: Medium. Only Teams Phone users with multi-line calling and several assigned numbers see the new layout, but it changes where they find call history, voicemail and recordings.
-->
