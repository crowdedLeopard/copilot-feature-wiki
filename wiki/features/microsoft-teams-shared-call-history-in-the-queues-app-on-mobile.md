---
title: "Microsoft Teams: shared call history in the Queues app on mobile"
slug: "microsoft-teams-shared-call-history-in-the-queues-app-on-mobile"
roadmapId: 578858
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Call queue representatives and supervisors get shared call history in the Queues app on Teams mobile from early December 2026. Needs Teams Premium; no new admin action required, but tell queue staff."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","iOS"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft Learn says users must have a Teams Phone and a Teams Premium licence to use the Queues app, and MC1556098 says shared call history in the Queues app is included with a Teams Premium licence. No mobile-specific price is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-phone","call-queues","mobile","queues-app","shared-call-history","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 578858"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578858"
    kind: "roadmap"
  - title: "MC1556098: Microsoft Teams Mobile: Introducing shared call history in the Queues app"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1556098"
    kind: "message-center"
  - title: "Planning - Shared Call History for voice applications"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-plan-shared-call-history"
    kind: "learn"
  - title: "Setup - Shared Call History template for Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history"
    kind: "learn"
  - title: "Setup - Call Queue"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue"
    kind: "learn"
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Reference - Voice applications prerequisites and licensing"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-reference-prerequisites-licensing"
    kind: "learn"
  - title: "New-CsSharedCallHistoryTemplate"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/new-cssharedcallhistorytemplate?view=teams-ps"
    kind: "learn"
  - title: "Set-CsCallQueue"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-multi-line-call-history-tabs-in-the-calls-app","microsoft-teams-real-time-queue-metrics-in-the-queues-app-on-mobile","microsoft-teams-copilot-in-the-queues-app-on-mobile","microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues"]
controls:
  - governs: "Which shared call history categories are visible, and to whom"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Templates and resources > Templates > Shared call history > Add > Incoming missed calls permission"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history"
    api:
      kind: "powershell"
      call: "New-CsSharedCallHistoryTemplate -Name <String> -Description <String> -IncomingMissedCalls AuthorizedUsersAndAgents -AnsweredAndOutboundCalls AuthorizedUsersOnly"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/new-cssharedcallhistorytemplate?view=teams-ps"
    note: "The template form sets the Incoming missed calls permission and Answered and outbound calls permission levels. The reference lists None, AuthorizedUsersOnly and AuthorizedUsersAndAgents."
  - governs: "Which call queues have shared call history"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Voice > Call queues > call queue > General info > Shared call history template"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history"
    api:
      kind: "powershell"
      call: "Set-CsCallQueue -Identity <Guid> -SharedCallQueueHistoryTemplateId <String>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue?view=teams-ps"
    note: "Conference mode must be on. The setup steps say General info, but the page's August 17, 2026 change log says template assignment moved to Templates, as the call queue guide has it."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-19"
    note: "First briefing for this roadmap item, covering MC1556098 and the Learn pages for shared call history templates and the Queues app."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after the independent check: licensing model is now included with Teams Premium; removed two governance steps with no control row; extended two admin paths and added the Templates note."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 52 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ebf70092b2a156723b8dd7942a79c15c"
---

## What's changing

Microsoft plans to bring shared call history to the Queues app on Teams mobile (Android and iOS). Representatives and supervisors with access can see calls handled across their call queue, including missed, answered, outgoing and voicemail calls, according to Microsoft's notice MC1556098.

Per that notice, users can filter by resolution status and tap a call to see the caller, call type, time, voicemail or forwarding information and a timeline of the call's progress through the queue. The system marks missed calls as Unresolved. Users can change a missed call to In progress or Resolved, and all queue members with access to shared call history can see the new status, who changed it and when. Users without shared call history enabled continue to see only their personal call history.

The notice says rollout begins in early December 2026 and is expected to complete by mid-December 2026 for Worldwide. The roadmap item is In development with a target of December CY2026, release phase General Availability, for Android and iOS, and lists only Worldwide (Standard Multi-Tenant). The notice says no new administrative action is required and that shared call history on mobile uses the same administrative settings as the desktop experience.

## Why it matters

If your queue staff already have shared call history, MC1556098 says eligible users automatically receive the mobile experience, so this arrives without an admin decision. The practical effect is that missed-call statuses can now be changed from phones, which is where duplicate callbacks or ignored follow-ups arise if staff do not know the status is shared.

If you have not enabled shared call history, nothing in the notice says it will be switched on for you: it says you can enable it by creating a Shared Call History template and assigning it to call queues. Plan the communication the notice recommends, particularly how to update missed-call statuses.

## Risk assessment

**Data exposure**

- Shared call history shows call participants, call times and duration, missed calls, shared voicemails and call status (Learn: planning page for shared call history). Mobile puts that data on phones. Who sees it is set by the template's **Incoming missed calls permission** and **Answered and outbound calls permission** levels, which the controls table covers.
- Learn's cmdlet reference lists the values None, AuthorizedUsersOnly and AuthorizedUsersAndAgents for those two template settings. A template set to AuthorizedUsersAndAgents shows that category to representatives as well as authorised users, on mobile as on desktop.

**Security & identity**

- Access follows the existing template and Queues app licensing; the notice names no new identity or permission model for mobile. Confirm that representatives' phones are covered by your device management policy, since the call data is now available on them.

**Autonomy & actions**

- Users can set missed calls to In progress or Resolved, and every queue member with access sees the change, who made it and when (MC1556098). A wrong status from a phone is visible to the whole queue, so brief staff on its meaning.

**Change & support**

- Expect questions from queue staff when the mobile screens appear in December 2026. Eligible users receive the experience automatically if shared call history is already in use (MC1556098).
- Learn lists Teams Phone and Teams Premium as licences needed for the Queues app and says a newly licensed user can wait up to 48 hours for the app to appear.

## Cost and licensing

Learn's Queues app page says users must have a Teams Phone and a Teams Premium licence to use the Queues app, and the voice applications licensing page says all Queues app users require a Teams Premium licence. MC1556098 says shared call history in the Queues app is included with a Teams Premium licence. The Learn planning page for shared call history lists the Auto Attendant and Call Queue licensing (at least one Teams Phone licence) and the Queues app licensing as its requirements.

Neither the roadmap record nor MC1556098 names a separate licence or charge for the mobile experience, and no price or meter for it appears on the pages cited. Budget for Teams Premium only for staff who are not yet licensed. Other costs are staff time for communication and training.

## Scope

**Who:** representatives and supervisors with access to shared call history in the Queues app (MC1556098). Access is decided by the template permission levels and, for supervisors, authorised-user setup.

**Platforms:** Microsoft Teams mobile on Android and iOS, per the roadmap record. Learn lists iOS and Android mobile clients among those that support the Queues app.

**Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant) only; the notice gives a Worldwide rollout schedule.

**Prerequisites from Learn:** conference mode must be enabled on the call queue, and Set-CsCallQueue's reference says shared call history is not available when a Teams channel is used for queue membership. Users must be in at least one call queue to use the Queues app.

**Rollout:** early December 2026 to mid-December 2026 per MC1556098; the roadmap target is December CY2026.

## Governance guidance

### Before rollout

- List the call queues that have a Shared call history template, and check each template's two permission levels in the Teams admin center before the mobile screens appear.
- Draft guidance for queue staff on the Unresolved, In progress and Resolved statuses, as MC1556098 recommends.

### At rollout

- Tell representatives and supervisors that the Queues app on mobile shows shared call history from early December 2026 if their queue has a template.
- Watch Message center for MC1556098 updates and the roadmap item for status changes; rollout is expected to finish by mid-December 2026.
- Create and assign a Shared call history template only for the queues where you want the history shared.

### After rollout

- Ask supervisors whether missed calls are being followed up once rather than twice, which is the outcome the notice describes.
- Review the template permission levels if representatives report seeing calls or voicemails they should not.
- Re-check the Learn pages for shared call history for any mobile-specific limits added after rollout.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which shared call history categories are visible, and to whom</strong><br><small class="controls__note">The template form sets the Incoming missed calls permission and Answered and outbound calls permission levels. The reference lists None, AuthorizedUsersOnly and AuthorizedUsersAndAgents.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Templates and resources › Templates › Shared call history › Add › Incoming missed calls permission <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-CsSharedCallHistoryTemplate -Name &lt;String&gt; -Description &lt;String&gt; -IncomingMissedCalls AuthorizedUsersAndAgents -AnsweredAndOutboundCalls AuthorizedUsersOnly</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/new-cssharedcallhistorytemplate?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which call queues have shared call history</strong><br><small class="controls__note">Conference mode must be on. The setup steps say General info, but the page's August 17, 2026 change log says template assignment moved to Templates, as the call queue guide has it.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Call queues › call queue › General info › Shared call history template <a href="https://learn.microsoft.com/microsoftteams/aa-cq-setup-call-queue-template-shared-history" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsCallQueue -Identity &lt;Guid&gt; -SharedCallQueueHistoryTemplateId &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-cscallqueue?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Shared call history on mobile uses the same administrative settings as the desktop experience (MC1556098), so the two rows above cover it. The template decides which call categories are visible and to whom; assigning it to a queue switches the history on for that queue.

The Queues app itself can be turned off org-wide in the Teams admin center under Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps > Off (Learn: Manage Queues app). That page says doing so also turns off other Microsoft apps such as Insights and Tasks, so it is a blunt control for this feature.

The Set-CsCallQueue reference says -ConferenceMode must be $true for the template parameter to apply.

## Open questions

- Does the mobile experience apply the same history window as Learn's planning page gives for shared call history (the last 3,000 entries or 6 months of calls per call queue)? Watch the Shared Call History planning page.
- Will the rollout reach GCC, GCC High and DoD tenants? The roadmap record lists Worldwide only; watch the roadmap item and Message center.
- Is any mobile-specific licence, price or limit planned beyond Teams Premium? Watch MC1556098 and the Queues app page.
- Do the template permission levels hide a call category on mobile in the same way as on desktop? Test with a pilot queue before wide rollout.

<!-- rationale
risk: Low. Microsoft's notice says mobile uses the same administrative settings as the desktop experience, so it adds a phone surface for call data users can already see, not a new audience.
cost: Low. Learn requires a Teams Premium licence for every Queues app user, and the roadmap and notice add no new licence for mobile; the new cost is staff communication.
impact: Medium. Only representatives and supervisors in call queues with shared call history see the change, but they can edit missed-call statuses that every queue member with access then sees.
-->
