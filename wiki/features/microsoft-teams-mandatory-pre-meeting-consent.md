---
title: "Microsoft Teams: mandatory pre-meeting consent for meeting participants"
slug: "microsoft-teams-mandatory-pre-meeting-consent"
roadmapId: 561914
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Admins can require every participant, including organisers and external guests, to accept a custom consent message before joining meetings. It is off by default and set in Teams meeting policies; no action unless you use it."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Teams requires a Teams licence for each user in the organisation, except for anonymous meeting joins. A requirement specific to pre-meeting consent is not yet published."
audiences: ["m365-admin","compliance","end-user"]
tags: ["teams","meeting-policy","auditing","powershell","admin-center","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Require participant consent before joining Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
  - title: "Search the audit log for events in Microsoft Teams"
    url: "https://learn.microsoft.com/purview/audit-teams-audit-log-events"
    kind: "learn"
  - title: "Manage participant agreement for recording and transcription"
    url: "https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription"
    kind: "learn"
  - title: "MC1454114: Microsoft Teams: Configure mandatory participant consent before joining meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1454114"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap item 561914"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561914"
    kind: "roadmap"
videos: []
related: ["meeting-policy","auditing","microsoft-teams-audio-announcement-for-recording-and-transcription","microsoft-teams-ability-for-it-admins-to-customize-the-user-notification-messages-for-reco","microsoft-teams-explicit-consent-for-recording-and-transcription-in-one-to-one-pstn-calls"]
controls:
  - governs: "Whether pre-meeting consent is required for meetings organised by users with a policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Enable pre-meeting participant consent"
      docs: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -EnablePreMeetingConsent $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Default is False (off). Assigned per meeting policy; the policy must also point to consent content."
  - governs: "The consent message, its title and its languages"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Enable pre-meeting participant consent > Customize message"
      docs: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    api:
      kind: "powershell"
      call: "New-CsPreMeetingConsent -LocalizedContent <localized content>"
      docs: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    note: "Up to five languages, one default. Assign the returned identifier with -PreMeetingConsentContentIdentifier on Set-CsTeamsMeetingPolicy. Turn the consent toggle On before selecting Customize message."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-21"
    note: "New briefing: admin-configured consent message that all participants accept before joining Teams meetings, set in meeting policies and off by default."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the Customize message path (the consent toggle comes first), removed an unsupported failed-join claim, and set licensing to included under the Teams licence requirement."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "545b0b4db25d3d5fdccd4f1751029e1c"
---

## What's changing

Microsoft Teams is adding mandatory pre-meeting consent. An admin writes a consent message, such as terms and conditions, a disclaimer, a recording notice or responsible AI usage guidelines, and participants must accept it before they can join. The Learn page says all meeting participants, including organisers, internal users, external users and anonymous attendees, must accept, and that a participant who does not accept cannot join.

The feature is controlled through Teams meeting policies and is turned off by default. When enabled, the consent experience applies to meetings organised by users who are assigned the policy. An admin can give one default language and up to four additional languages; participants see the message for their device language, or the default language if theirs is not configured. The message can contain up to 1,500 characters, and admins can preview it before saving. Consent acknowledgements are recorded in audit logs.

The roadmap item is **Rolling out**, with a target of September CY2026, for General Availability and Targeted Release on Android, Desktop, iOS and Mac. Microsoft's notice MC1454114 (published 2026-08-13) gives these rollout windows: Targeted Release beginning in September 2026; Worldwide and GCC beginning mid-October 2026 and expected to complete by mid-November 2026; GCC High and DoD beginning mid-November 2026 and expected to complete by mid-December 2026. The notice sets no act-by date.

The sources differ on maturity. The roadmap record and MC1454114 describe General Availability, while the Learn page carries the note "This feature is currently in Public Preview." Treat the Learn page's behaviour as the documented description and check it again before relying on it. The Set-CsTeamsMeetingPolicy reference also says EnablePreMeetingConsent and PreMeetingConsentContentIdentifier have no effect because the feature is not fully released, while the feature guide documents using them.

## Why it matters

This is a new compliance control for organisations that must show attendees were told something before a meeting, for example that it will be recorded or that AI is used. Acknowledgements are recorded in audit logs, so legal and compliance teams can use them for reporting and investigations.

If nobody acts, MC1454114 says there is no impact to users or meetings unless admins enable the feature, and the Learn page says it is off by default. The decision is therefore whether any policy needs it. If one does, the wording, languages and the people assigned the policy need agreeing with legal first, because organisers and external guests are not exempt.

## Risk assessment

**Data exposure**
- MC1454114 states that participant consent acknowledgements are stored in audit logs. Teams audit data is retrieved through Microsoft Purview and is visible only if auditing is turned on. Decide who in your organisation may search those logs and how long you keep them; the briefing on [auditing](/concepts/auditing/) covers the audit log itself.
- The consent message is shown to external and anonymous attendees as well as staff, so keep internal-only wording or confidential detail out of it.

**Security & identity**
- The Learn page says participants who do not accept cannot join, and that the requirement covers organisers, external users and anonymous attendees. It is a join gate, not a sign-in or identity check.
- The Learn page lists meeting scenarios where pre-meeting consent does not currently apply: an originator starting an ad-hoc meeting in a channel, accepting an incoming direct request to join a meeting on mobile, Siri or voice-activated joins on mobile, and Apple CarPlay or other car systems. Do not rely on it as the only evidence that everyone consented in those cases.

**Autonomy & actions**
- The Learn page describes a consent message that participants accept before joining. It describes no agent or automated action.

**Change & support**
- Enabling the policy changes how people join. A participant who declines the message cannot join, so expect help desk calls from external guests.
- The consent applies to meetings organised by users assigned the policy, so a user who is moved between meeting policies changes what their guests see.

## Cost and licensing

Teams requires a Teams licence for each user in the organisation, except for joining Teams meetings anonymously ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). A requirement specific to pre-meeting consent is not yet published: the Learn page on pre-meeting consent and MC1454114 name no licence, meter or price for the feature.

The cost the sources show is indirect: admin time to write and preview the message in up to five languages, legal review, user communication and help desk guidance. MC1454114 asks admins who enable the feature to review compliance and legal requirements, communicate the new join requirement and update internal documentation and help desk guidance.

## Scope

**Who is affected.** Admins who manage Teams meeting policies, and all participants in meetings organised by users assigned a policy that has pre-meeting consent enabled, including the organiser, internal and external users and anonymous attendees.

**Roles and prerequisites.** The Learn page does not name an admin role. It describes configuring the feature in the Teams admin center or with PowerShell.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platforms Android, Desktop, iOS and Mac. Rollout windows for each cloud are in the first section.

**Meetings only.** The Learn page marks the feature as applying to Meetings and not to Events.

**Out of scope today.** The Learn page's known limitations list the ad-hoc channel, mobile direct-request, Siri or voice-activated and car-system join scenarios.

## Governance guidance

### Before rollout
- Agree the consent wording, default language and up to four additional languages with legal and compliance; the message is limited to 1,500 characters.
- Decide which Teams meeting policy, and therefore which organisers, should carry the requirement, and whether a new custom policy is needed instead of the Global policy.
- Check which of your meeting scenarios fall under the Learn page's known limitations, and tell compliance that consent is not enforced there.
- Tell the help desk and external-facing teams that participants must accept the message before they can join.

### At rollout
- In the chosen policy, turn on **Enable pre-meeting participant consent**, select **Customize message**, compose the message and use **Preview** before saving.
- Test a join as an organiser, an internal user and an anonymous guest on desktop and mobile before assigning the policy widely.
- Publish a short notice to users that organisers must also accept the message.

### After rollout
- Review help desk tickets about failed joins and refine the wording or the policy assignment.
- Re-read the Learn page for changes to the known limitations and for the end of the preview note.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether pre-meeting consent is required for meetings organised by users with a policy</strong><br><small>User</small><br><small class="controls__note">Default is False (off). Assigned per meeting policy; the policy must also point to consent content.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Enable pre-meeting participant consent <a href="https://learn.microsoft.com/microsoftteams/pre-meeting-consent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -EnablePreMeetingConsent $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The consent message, its title and its languages</strong><br><small>Tenant</small><br><small class="controls__note">Up to five languages, one default. Assign the returned identifier with -PreMeetingConsentContentIdentifier on Set-CsTeamsMeetingPolicy. Turn the consent toggle On before selecting Customize message.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Enable pre-meeting participant consent › Customize message <a href="https://learn.microsoft.com/microsoftteams/pre-meeting-consent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsPreMeetingConsent -LocalizedContent &lt;localized content&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/pre-meeting-consent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls sit in the Teams meeting policy, so the setting follows whichever policy is assigned to the organiser. The message content is a separate object that a policy points to: the Learn page's PowerShell example creates it with `New-CsPreMeetingConsent` and assigns it with `-PreMeetingConsentContentIdentifier`, and says to remove the assignment from all meeting policies before deleting a configuration.

The Learn page does not name a role needed to set these controls. The recording-and-transcription agreement setting is a different meeting policy option from this feature ([Manage participant agreement for recording and transcription](https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription)).

## Open questions

- Does the feature need a specific licence or add-on? Watch the Learn page and Message center for a licensing statement.
- Which Purview audit activity records a consent acknowledgement, and what does it contain? Watch the audit log activities page on Microsoft Learn.
- How do Teams Rooms devices, PSTN dial-in participants and meeting bots meet the requirement? The Learn page does not say.
- When does the Learn page move from Public Preview to General Availability, given the roadmap lists General Availability and the status Rolling out?

<!-- rationale
risk: Low. The Learn page says pre-meeting consent is turned off by default and set in Teams meeting policies, so nothing changes until an admin enables it. Once on, participants who decline cannot join.
cost: Low. The only cost the sources show is admin time to write, translate and test the consent message and to brief users. Teams requires a Teams licence for each user; a licence or meter specific to this feature is not yet published.
impact: Low. Microsoft's notice says there is no impact to users or meetings unless admins enable the feature. Where a policy enables it, everyone joining that policy's organisers' meetings notices.
-->
