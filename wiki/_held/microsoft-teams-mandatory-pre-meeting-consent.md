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
  model: "unknown"
  notes: "Not yet published. The Learn page on pre-meeting consent and Message Center post MC1454114 name no licence or meter for the feature."
audiences: ["m365-admin","compliance","end-user"]
tags: ["teams","meeting-policy","auditing","powershell","admin-center","user-experience","gcc","gcc-high","dod"]
sources:
  - title: "Require participant consent before joining Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "MC1454114"
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
      path: "Teams admin center > Meetings > Meeting policies > policy > Meeting join & lobby > Enable pre-meeting participant consent"
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
      path: "Teams admin center > Meetings > Meeting policies > policy > Meeting join & lobby > Customize message"
      docs: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    api:
      kind: "powershell"
      call: "New-CsPreMeetingConsent -LocalizedContent <localized content>"
      docs: "https://learn.microsoft.com/microsoftteams/pre-meeting-consent"
    note: "Up to five languages, one default. Assign the returned identifier with -PreMeetingConsentContentIdentifier on Set-CsTeamsMeetingPolicy."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-21"
    note: "New briefing: admin-configured consent message that all participants accept before joining Teams meetings, set in meeting policies and off by default."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 51
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "e1fba761b5bdae235ae6922c0b9ed03c"
---

## What's changing

Microsoft Teams is adding mandatory pre-meeting consent. An admin writes a consent message, such as terms and conditions, a disclaimer, a recording notice or responsible AI usage guidelines, and participants must accept it before they can join. The Learn page says all meeting participants, including organisers, internal users, external users and anonymous attendees, must accept, and that a participant who does not accept cannot join.

The feature is controlled through Teams meeting policies and is turned off by default. When enabled, the consent experience applies to meetings organised by users who are assigned the policy. An admin can give one default language and up to four additional languages; participants see the message for their device language, or the default language if theirs is not configured. The message can contain up to 1,500 characters, and admins can preview it before saving. Consent acknowledgements are recorded in audit logs.

The roadmap item is **Rolling out**, with a target of September CY2026, for General Availability and Targeted Release on Android, Desktop, iOS and Mac. Microsoft's notice MC1454114 (published 2026-08-13) gives these rollout windows: Targeted Release beginning in September 2026; Worldwide and GCC beginning mid-October 2026 and expected to complete by mid-November 2026; GCC High and DoD beginning mid-November 2026 and expected to complete by mid-December 2026. The notice sets no act-by date.

The sources differ on maturity. The roadmap record and MC1454114 describe General Availability, while the Learn page carries the note "This feature is currently in Public Preview." Treat the Learn page's behaviour as the documented description and check it again before relying on it.

## Why it matters

This is a new compliance control for organisations that must show attendees were told something before a meeting, for example that it will be recorded or that AI is used. Acknowledgements are recorded in audit logs, so legal and compliance teams can use them for reporting and investigations.

If nobody acts, MC1454114 says there is no impact to users or meetings unless admins enable the feature, and the Learn page says it is off by default. The decision is therefore whether any policy needs it. If one does, the wording, languages and the people assigned the policy need agreeing with legal first, because organisers and external guests are not exempt.

## Risk assessment

**Data exposure**
- MC1454114 states that participant consent acknowledgements are stored in audit logs. Decide who in your organisation may search those logs and how long you keep them; the briefing on [auditing](/concepts/auditing/) covers the audit log itself.
- The consent message is shown to external and anonymous attendees as well as staff, so keep internal-only wording or confidential detail out of it.

**Security & identity**
- The Learn page says participants who do not accept cannot join, and that the requirement covers organisers, external users and anonymous attendees. It is a join gate, not a sign-in or identity check.
- The Learn page lists meeting scenarios where pre-meeting consent does not currently apply: an originator starting an ad-hoc meeting in a channel, accepting an incoming direct request to join a meeting on mobile, Siri or voice-activated joins on mobile, and Apple CarPlay or other car systems. Do not rely on it as the only evidence that everyone consented in those cases.

**Autonomy & actions**
- The Learn page describes a consent message that participants accept before joining. It describes no agent or automated action.

**Change & support**
- Enabling the policy changes how people join. A participant who declines or cannot see the message cannot join, so expect help desk calls from external guests and from users on the mobile join paths above.
- The consent applies to meetings organised by users assigned the policy, so a user who is moved between meeting policies changes what their guests see.

## Cost and licensing

The Learn page on pre-meeting consent and MC1454114 name no licence, meter or price for the feature. A licence requirement is not yet published, so confirm it with your Microsoft account team or on the Learn page before budgeting.

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
- Create the message in the Teams admin center or with PowerShell, use **Preview** to check how participants see it, then turn on **Enable pre-meeting participant consent** in the chosen policy.
- Test a join as an organiser, an internal user and an anonymous guest on desktop and mobile before assigning the policy widely.
- Publish a short notice to users that organisers must also accept the message.

### After rollout
- Check the Teams meeting audit logs in Microsoft Purview for consent acknowledgements and agree who reviews them.
- Review help desk tickets about failed joins and refine the wording or the policy assignment.
- Re-read the Learn page for changes to the known limitations and for the end of the preview note.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether pre-meeting consent is required for meetings organised by users with a policy</strong><br><small>User</small><br><small class="controls__note">Default is False (off). Assigned per meeting policy; the policy must also point to consent content.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams admin center › Meetings › Meeting policies › policy › Meeting join &amp; lobby › Enable pre-meeting participant consent <a href="https://learn.microsoft.com/microsoftteams/pre-meeting-consent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -EnablePreMeetingConsent $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>The consent message, its title and its languages</strong><br><small>Tenant</small><br><small class="controls__note">Up to five languages, one default. Assign the returned identifier with -PreMeetingConsentContentIdentifier on Set-CsTeamsMeetingPolicy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams admin center › Meetings › Meeting policies › policy › Meeting join &amp; lobby › Customize message <a href="https://learn.microsoft.com/microsoftteams/pre-meeting-consent" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsPreMeetingConsent -LocalizedContent &lt;localized content&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/pre-meeting-consent" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both controls sit in the Teams meeting policy, so the setting follows whichever policy is assigned to the organiser. The message content is a separate object that a policy points to: the Learn page's PowerShell example creates it with `New-CsPreMeetingConsent` and assigns it with `-PreMeetingConsentContentIdentifier`, and says to remove the assignment from all meeting policies before deleting a configuration.

The Learn page does not name a role needed to set these controls. The recording-and-transcription agreement setting is a different meeting policy option from this feature.

## Open questions

- Does the feature need a specific licence or add-on? Watch the Learn page and Message center for a licensing statement.
- Which Purview audit activity records a consent acknowledgement, and what does it contain? Watch the audit log activities page on Microsoft Learn.
- How do Teams Rooms devices, PSTN dial-in participants and meeting bots meet the requirement? The Learn page does not say.
- When does the Learn page move from Public Preview to General Availability, given the roadmap lists General Availability and the status Rolling out?

<!-- rationale
risk: Low. The Learn page says pre-meeting consent is turned off by default and set in Teams meeting policies, so nothing changes until an admin enables it. Once on, participants who decline cannot join.
cost: Low. The only cost the sources show is admin time to write, translate and test the consent message and to brief users. No licence or meter is named on the Learn page or in MC1454114; licensing is not yet published.
impact: Low. Microsoft's notice says there is no impact to users or meetings unless admins enable the feature. Where a policy enables it, everyone joining that policy's organisers' meetings notices.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance controls; Governance guidance: At rollout / admin-path: Admins reach Customize message directly through Meeting join & lobby without first enabling pre-meeting participant consent. | Found: 3. Under Meeting join & lobby, turn the Enable pre-meeting participant consent toggle On. 4. Select Customize message. | Fix: Replace the message path in front matter and table with 'Teams admin center > Meetings > Meeting policies > policy > Meeting join & lobby > Enable pre-meeting participant consent > Customize message'. Add to its note: 'Turn the consent toggle On before selecting Customize message.' Replace the first At rollout bullet with 'In the chosen policy, turn on Enable pre-meeting participant consent, select Customize message, compose the message and use Preview before saving.' This follows https://learn.microsoft.com/microsoftteams/pre-meeting-consent. | Source: https://learn.microsoft.com/microsoftteams/pre-meeting-consent
- [unsupported, major] Risk assessment: Change & support / behaviour: A participant who cannot see the consent message cannot join the meeting. | Found: Searched: 'Teams pre-meeting consent participants unsupported client cannot see consent message join'; read pre-meeting-consent and results. The guide documents declining consent and exempt join scenarios, not this unseen-message outcome. | Fix: Replace 'A participant who declines or cannot see the message cannot join' with 'A participant who declines the message cannot join'. Remove 'and from users on the mobile join paths above' from the helpdesk forecast: those paths are documented exceptions, not documented failed joins.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls / command: Set-CsTeamsMeetingPolicy -Identity <policy name> -EnablePreMeetingConsent $true enables the consent requirement. | Found: $true: All participants must explicitly accept a custom consent dialog before joining any meeting hosted by the tenant. Note: This feature has not been fully released yet, so the setting will have no effect. | Fix: Keep the call, but add to the maturity paragraph: 'The Set-CsTeamsMeetingPolicy reference also says EnablePreMeetingConsent and PreMeetingConsentContentIdentifier have no effect because the feature is not fully released, while the feature guide documents using them.' Both pages are already cited. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps
- [supported, minor] front matter: licensing.model; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no feature-specific licence requirement is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included' under the standard's product-level entitlement rule. Replace the licensing notes and corresponding prose with 'Teams requires a Teams license for each user in the organization, except anonymous meeting joins. A requirement specific to pre-meeting consent is not yet published.' Cite https://learn.microsoft.com/microsoftteams/user-access. Retain cost low and the narrower unpublished feature-specific licensing caveat. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] Governance guidance: After rollout / applicability: Admins can review Teams consent audit records in Microsoft Purview. | Found: To retrieve audit logs for Teams activities, use the Microsoft Purview portal. ... Audit data is only visible in the audit log if auditing is turned on. | Fix: Remove the audit-review checklist bullet as requested by the table-consistency finding. If retaining its factual premise in Risk assessment: Data exposure, use 'Teams audit data is retrieved through Microsoft Purview and is visible only if auditing is turned on.' Cite https://learn.microsoft.com/purview/audit-teams-audit-log-events. Keep the specific consent activity name as an open question. | Source: https://learn.microsoft.com/purview/audit-teams-audit-log-events
- [supported, minor] Governance controls / behaviour: Participant agreement for recording and transcription is a different meeting policy option from pre-meeting consent. | Found: Within your chosen policy, navigate to the Recording & Transcription section. Toggle the Require participant agreement for recording and transcription setting On or Off. | Fix: Add https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription to sources for this distinction. | Source: https://learn.microsoft.com/microsoftteams/participant-agreement-recording-transcription
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: Every control the governance checklist asks readers to check appears in the controls table. | Found: After rollout: 'Check the Teams meeting audit logs in Microsoft Purview for consent acknowledgements'. The controls table has only the enable toggle and consent message rows. | Fix: The audit-review checklist step has no corresponding controls row. Remove that checklist bullet; do not add a new row as part of this correction. The audit logging fact and audit-activity open question can remain.
-->
