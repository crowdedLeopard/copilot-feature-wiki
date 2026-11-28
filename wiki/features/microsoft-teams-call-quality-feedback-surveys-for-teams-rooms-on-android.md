---
title: "Microsoft Teams Rooms on Android: call quality feedback surveys after meetings"
slug: "microsoft-teams-call-quality-feedback-surveys-for-teams-rooms-on-android"
roadmapId: 543713
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android devices will show users a call quality survey after meetings, on by default per Microsoft's notice. No action is required, but plan communication and review the feedback policy."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Teams and Surface Devices"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams Rooms devices need a Teams Rooms licence: Teams Rooms Basic or Pro, and legacy Teams Rooms licences are also valid (Plan Microsoft Teams Rooms). No survey-specific licence, meter or price is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","user-experience","privacy","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 543713"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543713"
    kind: "roadmap"
  - title: "MC1490912: Microsoft Teams: Call quality feedback surveys for Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1490912"
    kind: "message-center"
  - title: "Release notes for Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note"
    kind: "learn"
  - title: "Plan Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-plan"
    kind: "learn"
  - title: "Manage user feedback in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-feedback-policies-in-teams"
    kind: "learn"
  - title: "Manage Microsoft feedback for your organization"
    url: "https://learn.microsoft.com/privacy/microsoft-365/feedback/feedback-manage"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Manage updates for Teams Android devices in Pro Management Portal (PMP)"
    url: "https://learn.microsoft.com/microsoftteams/rooms/androidupdatemanagementinpmp"
    kind: "learn"
  - title: "Transitioning Teams Android Device Management from Teams Admin Center to the Teams Rooms Pro Management Portal"
    url: "https://learn.microsoft.com/microsoftteams/rooms/aboutunifieddevicemanagement-pmp1"
    kind: "learn"
videos: []
related: ["microsoft-teams-admin-center-intelligent-insights-for-meeting-quality","microsoft-teams-teams-admin-center-single-pane-for-monitoring-and-troubleshooting-for-meet"]
controls:
  - governs: "Whether Teams Rooms devices show in-product surveys, including call quality feedback prompts"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow users to receive and respond to in-product surveys from Microsoft"
      docs: "https://learn.microsoft.com/privacy/microsoft-365/feedback/feedback-manage"
    api: null
    note: "Policy: Allow users to receive and respond to in-product surveys from Microsoft. Release notes say the surveys can be controlled using feedback policies. Not Configured has the same effect as Enabled."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-28"
roadmapModified: "2026-11-20T23:20:27"
changes:
  - date: "2026-11-18"
    note: "First briefing for the Teams Rooms on Android call quality surveys, based on MC1490912 and the Cloud Policy feedback documentation."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: the Teams Rooms licence requirement is now stated, the Cloud Policy admin path is complete, the autonomy statement is narrowed, and two checklist steps without table rows were removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: rollout end date removed, release-note app version and feedback-policy control for Android added, licence model set to included, Cloud Policy path completed."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: Teams Rooms licence wording now matches the Plan Teams Rooms page, and the survey control's docs link now points to the feedback policies page."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 63 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: broad statements that survey retention is unpublished now say only that MC1490912 does not specify retention or storage duration, and the release notes' Call Quality Dashboard visibility is added."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 59 statements confirmed"
  - date: "2026-11-21"
    note: "Status moved from In development to Rolling out; release notes now tie the surveys to the November 2026 app version and feedback policies, and the Cloud Policy licence and group condition is flagged to confirm for room accounts."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 71 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected after verification: device update checks now point to the Teams Rooms Pro Management portal, the Teams admin center retirement for Android rooms is noted, the unsupported signed-in room account statement is removed, and the survey control is attributed to the feedback policies page."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 7
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 7
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "4b71665b0d0d6b93fc568a092f7576ba"
---

## What's changing

Microsoft Teams is adding call quality feedback (CQF) surveys to Microsoft Teams Rooms on Android. After a meeting ends, users are periodically shown a survey where they can rate the call or meeting and give feedback on call, video, audio and screen-sharing quality. The roadmap item describes the purpose as helping organisations keep experiences consistent and high quality.

Microsoft's notice MC1490912 (published 7 October 2026) says the feature becomes available once eligible Teams Rooms on Android devices are updated to the required app version, and that it is enabled by default once available. The notice says no admin action is required before rollout. It recommends updating devices to the latest supported app version through the Teams admin center, telling users they may be prompted, and updating training and support material. Microsoft's current [transition guidance](https://learn.microsoft.com/microsoftteams/rooms/aboutunifieddevicemanagement-pmp1) makes the Teams Rooms Pro Management portal the primary management portal; public-cloud Android room administration in the Teams admin center is being retired from mid-November to the end of November 2026. The notice does not name the required app version. The Teams Rooms release notes list Call Quality Feedback surveys under app version 1449/1.0.96.2026344105 (November 2026) and say the results are visible in the Call Quality Dashboard and can be controlled using feedback policies.

The roadmap record lists the item as Rolling out, with a General Availability target of November CY2026 for Worldwide (Standard Multi-Tenant) on Android and Teams and Surface Devices. Dates are Microsoft's targets. The notice says Worldwide General Availability begins in November 2026.

## Why it matters

For service owners, this changes what meeting-room users see, on Microsoft's schedule and by default once devices run the required app version. Plan for extra prompts in shared rooms, service desk questions about who the survey is from, and a decision on whether to leave the surveys on.

The notice says the change stores new customer data (survey responses) and does not specify storage location, retention or storage duration. If your privacy or records teams need those answers, raise the question before rollout rather than after.

## Risk assessment

**Data exposure**

- Users can submit ratings and feedback through post-meeting surveys, which Microsoft's notice describes as new customer data. MC1490912 does not specify storage location, retention or storage duration. The release notes say the results are visible in the Call Quality Dashboard.
- Microsoft's feedback policy page says Microsoft acts as a data processor for your tenant's feedback and that the feedback it collects from your users is available in the Microsoft 365 admin center.

**Security & identity**

- No change documented: Microsoft has not described any new identity, permission or sign-in requirement for the surveys.

**Autonomy & actions**

- The feature asks users to rate calls and meetings and provide feedback to Microsoft. The notice describes no action taken on a tenant's behalf.

**Change & support**

- The surveys appear by default once devices are updated, so users in shared rooms may be prompted without warning. Communicate this ahead of rollout, using the notice's recommended actions.
- Surveys depend on the device app version, and the release notes say features can reach a given device make and model later than Microsoft releases them, so rooms may behave differently from one another. Check device update status in the Teams Rooms Pro Management portal under Rooms > device > Updates before telling users to expect the prompt.

## Cost and licensing

Teams Rooms devices need a Teams Rooms licence: the Plan Microsoft Teams Rooms page says they should only be assigned Teams Rooms Basic or Teams Rooms Pro licences, and that Teams Rooms legacy licences are also valid. Neither MC1490912, the roadmap record nor the release notes name a licence, meter or price specific to the surveys, so a survey-specific requirement is Not yet published.

The cost the sources show is indirect: admin time to update Teams Rooms on Android devices to the required app version, plus user communication, training and support updates, which are the recommended actions in the notice.

## Scope

Users: people who take part in meetings on Teams Rooms on Android devices, per MC1490912. Clouds: Worldwide (Standard Multi-Tenant) on the roadmap record. Platforms: Android, and Teams and Surface Devices. Release phase: General Availability.

Rollout: the notice says it begins in November 2026 and that the feature becomes available once eligible devices run the required app version. The release notes list the surveys under app version 1449/1.0.96.2026344105 (November 2026). The Cloud Policy page says the feedback policy is managed by Office Apps Administrator (recommended), Security Administrator or Global Administrator roles.

## Governance guidance

### Before rollout

- Decide whether to leave the Cloud Policy survey setting at its default or set it to Disabled for the users who sign in to room devices, and who approves that decision.
- Confirm that your room accounts can receive Cloud Policy settings: the Cloud Policy page says policies apply to user objects in Microsoft Entra ID that have a supported licence assigned.
- Ask your privacy team to review the notice's statement that new customer data is stored, given that MC1490912 does not specify storage location, retention or storage duration.

### At rollout

- Tell users in advance that a survey may appear after meetings on room devices.
- Brief the service desk on what users can rate: call, video, audio and screen-sharing quality.
- Check device update status in the Teams Rooms Pro Management portal under Rooms > device > Updates, then confirm on a pilot room that an updated device shows the survey.

### After rollout

- Re-check the Cloud Policy setting if users report surveys after you disabled them, remembering that policy changes can take a few hours to reach clients.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Teams Rooms devices show in-product surveys, including call quality feedback prompts</strong><br><small>User</small><br><small class="controls__note">Policy: Allow users to receive and respond to in-product surveys from Microsoft. Release notes say the surveys can be controlled using feedback policies. Not Configured has the same effect as Enabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow users to receive and respond to in-product surveys from Microsoft <a href="https://learn.microsoft.com/privacy/microsoft-365/feedback/feedback-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented switch is not specific to this feature: the feedback policies page lists Teams Rooms as supporting in-product surveys and documents the Allow users to receive and respond to in-product surveys from Microsoft policy, configured through Cloud Policy. The Teams Rooms release notes say the Call Quality Feedback surveys can be controlled using feedback policies.

The feedback policies page says policies set to Not Configured have the same effect as Enabled, so surveys are not suppressed until an administrator sets the policy to Disabled. Cloud Policy applies to user objects in Microsoft Entra groups that have a supported licence assigned; whether your room accounts meet that condition is for you to confirm. Microsoft Learn documents no PowerShell, Graph or other API for Cloud Policy policy configurations at the time of writing (November 2026).

## Open questions

- Where is call quality survey data stored, for how long is it kept, and who in the tenant can see individual responses? MC1490912 does not say; watch Message center and the Teams Rooms release notes.
- Which app version is required for the surveys on each Teams Rooms on Android device make and model? The notice does not name it.
- Do Teams Rooms on Android room accounts receive Cloud Policy settings under the Cloud Policy licensing and group requirements? The release notes say feedback policies control the surveys, but do not describe how room accounts are targeted.

<!-- rationale
risk: Low. The surveys collect user ratings and Microsoft's notice says they store new customer data, but a feedback policy that can disable in-product surveys is documented for Teams Rooms.
cost: Low. The only cost the sources show is admin time for device updates and user communication; Microsoft has not published a survey-specific licence or meter.
impact: Medium. People who attend meetings on Teams Rooms on Android devices will periodically be prompted after a meeting ends.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout / consistency: The checklist's instruction to check device update status is represented in the controls table. | Found: Check device update status in the Teams Rooms Pro Management portal under Rooms > device > Updates ... Whether Teams Rooms devices show in-product surveys, including call quality feedback prompts | Fix: Remove the At rollout bullet beginning 'Check device update status in the Teams Rooms Pro Management portal'. The device-update control has no row in the controls table; do not add a row as part of this correction.
-->
