---
title: "Microsoft Teams Rooms on Android: call quality feedback surveys after meetings"
slug: "microsoft-teams-call-quality-feedback-surveys-for-teams-rooms-on-android"
roadmapId: 543713
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams Rooms on Android devices will show users a call quality survey after meetings, on by default per Microsoft's notice. No action is required, but you can plan communication and review the feedback policy."
status: "in-development"
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
  notes: "Teams Rooms devices require Microsoft Teams Rooms Basic or Microsoft Teams Rooms Pro. Microsoft has not published an additional licence requirement specific to these surveys."
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
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution"
    kind: "learn"
  - title: "Managing Microsoft Teams Rooms"
    url: "https://learn.microsoft.com/microsoftteams/rooms/rooms-manage"
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
videos: []
related: ["microsoft-teams-admin-center-intelligent-insights-for-meeting-quality","microsoft-teams-chat-for-organizers-and-presenters-in-structured-meetings-and-webinars-on"]
controls:
  - governs: "Whether Teams Rooms devices show in-product surveys, including call quality feedback prompts"
    scope: "user"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings > Allow users to receive and respond to in-product surveys from Microsoft"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Policy: Allow users to receive and respond to in-product surveys from Microsoft. The Teams Rooms on Android release notes confirm that Call Quality Feedback surveys can be controlled using feedback policies. Not Configured equals Enabled."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-20"
roadmapModified: "2026-09-09T22:36:54"
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
version: 3
verification:
  status: "held"
  date: "2026-11-20"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 56
  unconfirmed: 1
  contradicted: 1
  attempts: 2
  hash: "8661b8f87e942131385bc2b7263f7e13"
---

## What's changing

Microsoft Teams is adding call quality feedback (CQF) surveys to Microsoft Teams Rooms on Android. After a meeting ends, users are periodically shown a survey where they can rate the call or meeting and give feedback on call, video, audio and screen-sharing quality. The roadmap item describes the purpose as helping organisations keep experiences consistent and high quality.

Microsoft's notice MC1490912 (published 7 October 2026) says the feature becomes available once eligible Teams Rooms on Android devices are updated to the required app version, and that it is enabled by default once available. The notice says no admin action is required before rollout. It recommends updating devices to the latest supported app version through the Teams admin center, telling users they may be prompted, and updating training and support material. It also says feedback is used by Microsoft to improve Teams products and services, and that the experience aligns with call quality surveys already available in Teams Rooms on Windows and other Teams clients. The notice does not name the required app version.

The roadmap record lists the item as In development, with a General Availability target of November CY2026 for Worldwide (Standard Multi-Tenant) on Android and Teams and Surface Devices. Dates are Microsoft's targets. The notice says Worldwide General Availability rollout begins in November 2026; it does not state a rollout completion date.

## Why it matters

For service owners, this is a change to what meeting-room users see, arriving on Microsoft's schedule and by default once devices run the required app version. Plan for a few extra prompts in shared rooms, questions to the service desk about who the survey is from, and a decision on whether to leave the surveys on.

The notice says the change stores new customer data (survey responses) and does not state where it is stored, how long it is kept or for how long. If your privacy or records teams need those answers, they are not yet published, so raise the question before rollout rather than after.

## Risk assessment

**Data exposure**

- Users can submit ratings and feedback through post-meeting surveys, which Microsoft's notice describes as new customer data. The notice does not specify storage location, retention or storage duration, so a retention or residency review cannot be completed from published information.
- Microsoft's feedback policy page says Microsoft acts as a data processor for your tenant's feedback and that the feedback it collects from your users is available in the Microsoft 365 admin center. That page lists Teams Rooms among the apps connected to in-product surveys but does not mention Android specifically.

**Security & identity**

- No change documented: Microsoft has not described any new identity, permission or sign-in requirement for the surveys. The Learn page on managing Teams Rooms says surveys can be shown to signed-in room accounts.

**Autonomy & actions**

- The feature asks users to rate calls and meetings and provide feedback to Microsoft.

**Change & support**

- The surveys appear by default once devices are updated, so users in shared rooms may be prompted without warning. Communicate this ahead of the November 2026 target, using the notice's recommended actions.
- Surveys depend on the device app version, so rooms that are not updated will behave differently from those that are. Check the Teams admin center for device update status before telling users to expect the prompt.

## Cost and licensing

Microsoft has not published a survey-specific licence requirement, meter or price for the Teams Rooms on Android call quality surveys. Neither MC1490912, the roadmap record nor the Learn pages read for this briefing name one, so survey-specific licensing is Not yet published.

The cost the sources show is indirect: admin time to update Teams Rooms on Android devices to the required app version, plus user communication, training and support updates, which are the recommended actions in the notice. Teams Rooms devices require Microsoft Teams Rooms Basic or Microsoft Teams Rooms Pro. Microsoft has not published an additional licence requirement specific to these surveys.

## Scope

Users: people who take part in meetings on Teams Rooms on Android devices, per MC1490912. Clouds: Worldwide (Standard Multi-Tenant) only on the roadmap record; the record lists no US Government cloud. Platforms: Android, and Teams and Surface Devices. Release phase: General Availability.

Rollout: the notice says it begins in November 2026 and the feature becomes available once eligible devices run the required app version. The Teams Rooms on Android release notes list Call Quality Feedback surveys as introduced in app version 1449/1.0.96.2026344105 (November 2026), while the roadmap record still says In development. Microsoft notes that availability can vary by device make and model. Roles: the Learn page on managing Teams Rooms says a Teams Administrator or Teams Devices Administrator role is needed to manage devices in the Teams admin center.

## Governance guidance

### Before rollout

- Decide whether to leave the Cloud Policy survey setting at its default or disable in-product surveys for the Teams Rooms accounts, and who approves that decision.
- Ask your privacy team to review the notice's statement that new customer data is stored, given that location and retention are not yet published.

### At rollout

- Tell users in advance that a survey may appear after meetings on room devices, and who it comes from.
- Brief the service desk with the notice's description of what users can rate: call, video, audio and screen-sharing quality.
- Confirm on a pilot room that updating the device app version produces the survey, then check the room accounts you use.

### After rollout

- Re-check the Cloud Policy setting if users report surveys after you disabled them, remembering that policy changes can take a few hours to reach clients.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Teams Rooms devices show in-product surveys, including call quality feedback prompts</strong><br><small>User</small><br><small class="controls__note">Policy: Allow users to receive and respond to in-product surveys from Microsoft. The Teams Rooms on Android release notes confirm that Call Quality Feedback surveys can be controlled using feedback policies. Not Configured equals Enabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings › Allow users to receive and respond to in-product surveys from Microsoft <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented switch is not specific to this feature: Learn says Teams Rooms devices may display in-product surveys, including call quality feedback prompts, and points administrators to Cloud Policy service for Microsoft 365 to disable them. The Teams Rooms on Android release notes explicitly say Call Quality Feedback surveys can be controlled using feedback policies.

The feedback policies page says policies set to Not Configured have the same effect as Enabled, so surveys are not suppressed until an administrator sets the policy to Disabled. Cloud Policy management is done in the Microsoft 365 Apps admin center; Microsoft recommends the Office Apps Administrator role for it. Microsoft Learn documents no PowerShell, Graph or other API for Cloud Policy at the time of writing (November 2026).

## Open questions

- Where is call quality survey data stored, for how long is it kept, and who in the tenant can see individual responses? The notice does not say.

<!-- rationale
risk: Low. The survey collects user ratings on call, video, audio and screen-sharing quality; Microsoft's notice says it is on by default and stores new customer data, but a Cloud Policy survey setting is documented for Teams Rooms.
cost: Low. The only cost the sources show is admin time for communication and device updates; Microsoft has not published a survey-specific licence or meter for the surveys.
impact: Medium. People who attend meetings on Teams Rooms on Android devices will periodically be prompted after a meeting ends; admins and other users do not otherwise notice it.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing / licensing: Teams Rooms devices require Microsoft Teams Rooms Basic or Microsoft Teams Rooms Pro. | Found: Teams Rooms devices should only be assigned Teams Rooms Basic or Teams Rooms Pro licenses (Teams Rooms legacy licenses are also valid). | Fix: Replace the requirement in licensing.notes and Cost and licensing with: 'Teams Rooms devices require a Teams Rooms licence: Microsoft Teams Rooms Basic or Microsoft Teams Rooms Pro; valid Teams Rooms legacy licences are also accepted.' Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-plan. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-plan
- [unsupported, blocker] controls[0].ui; Governance controls table / admin-path: The linked Cloud Policy overview documents the route through Configure Settings to Allow users to receive and respond to in-product surveys from Microsoft. | Found: Searched: full Cloud Policy overview for the survey setting. It gives Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings, but not the named control; feedback-manage supplies that last step. | Fix: Keep the path unchanged, but set controls[0].ui.docs and the rendered row's Learn link to https://learn.microsoft.com/privacy/microsoft-365/feedback/feedback-manage, which names the survey control and links to the Cloud Policy wizard. Retain the Cloud Policy overview in sources for the preceding route.
-->
