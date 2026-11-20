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
  model: "unknown"
  notes: "Teams Rooms devices require a Teams Rooms licence; any additional survey-specific requirement is Not yet published. Neither Microsoft's notice MC1490912 nor the Learn pages read name a survey-specific licence, meter or charge."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","teams-rooms","user-experience","privacy","cloud-policy"]
sources:
  - title: "Microsoft 365 Roadmap 543713"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=543713"
    kind: "roadmap"
  - title: "MC1490912: Microsoft Teams: Call quality feedback surveys for Teams Rooms on Android"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1490912"
    kind: "message-center"
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
      path: "Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    api: null
    note: "Policy: Allow users to receive and respond to in-product surveys from Microsoft. Learn names Teams Rooms generally, not Android. Not Configured equals Enabled."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
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
version: 2
verification:
  status: "held"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 54
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "95de077cc8760d3cff16523f837b138d"
---

## What's changing

Microsoft Teams is adding call quality feedback (CQF) surveys to Microsoft Teams Rooms on Android. After a meeting ends, users are periodically shown a survey where they can rate the call or meeting and give feedback on call, video, audio and screen-sharing quality. The roadmap item describes the purpose as helping organisations keep experiences consistent and high quality.

Microsoft's notice MC1490912 (published 7 October 2026) says the feature becomes available once eligible Teams Rooms on Android devices are updated to the required app version, and that it is enabled by default once available. The notice says no admin action is required before rollout. It recommends updating devices to the latest supported app version through the Teams admin center, telling users they may be prompted, and updating training and support material. It also says feedback is used by Microsoft to improve Teams products and services, and that the experience aligns with call quality surveys already available in Teams Rooms on Windows and other Teams clients. The notice does not name the required app version.

The roadmap record lists the item as In development, with a General Availability target of November CY2026 for Worldwide (Standard Multi-Tenant) on Android and Teams and Surface Devices. Dates are Microsoft's targets. The notice gives the rollout as beginning in November 2026, with an end date of 30 December 2026.

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

The cost the sources show is indirect: admin time to update Teams Rooms on Android devices to the required app version, plus user communication, training and support updates, which are the recommended actions in the notice. Teams Rooms devices require a Teams Rooms licence; any additional survey-specific requirement is Not yet published.

## Scope

Users: people who take part in meetings on Teams Rooms on Android devices, per MC1490912. Clouds: Worldwide (Standard Multi-Tenant) only on the roadmap record; the record lists no US Government cloud. Platforms: Android, and Teams and Surface Devices. Release phase: General Availability.

Rollout: the notice says it begins in November 2026 and the feature becomes available once eligible devices run the required app version. Which version that is has not been published. Roles: the Learn page on managing Teams Rooms says a Teams Administrator or Teams Devices Administrator role is needed to manage devices in the Teams admin center.

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
<tr><td data-label="Control"><strong>Whether Teams Rooms devices show in-product surveys, including call quality feedback prompts</strong><br><small>User</small><br><small class="controls__note">Policy: Allow users to receive and respond to in-product surveys from Microsoft. Learn names Teams Rooms generally, not Android. Not Configured equals Enabled.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Customization › Policy Management › Policy configurations › Create › Start with the basics › Choose the scope › Configure Settings <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The documented switch is not specific to this feature: Learn says Teams Rooms devices may display in-product surveys, including call quality feedback prompts, and points administrators to Cloud Policy service for Microsoft 365 to disable them. The page does not name Teams Rooms on Android, so confirm on a pilot device that the policy suppresses the new survey before relying on it.

The feedback policies page says policies set to Not Configured have the same effect as Enabled, so surveys are not suppressed until an administrator sets the policy to Disabled. Cloud Policy management is done in the Microsoft 365 Apps admin center; Microsoft recommends the Office Apps Administrator role for it. Microsoft Learn documents no PowerShell, Graph or other API for Cloud Policy at the time of writing (November 2026).

## Open questions

- Which Teams Rooms on Android app version is required, and does the Teams admin center show which devices have it? Watch MC1490912 and the Teams Rooms Learn pages.
- Where is call quality survey data stored, for how long is it kept, and who in the tenant can see individual responses? The notice does not say.
- Does the Cloud Policy survey setting (Allow users to receive and respond to in-product surveys from Microsoft) suppress this survey on Teams Rooms on Android specifically? Microsoft Learn refers to Teams Rooms devices in general.

<!-- rationale
risk: Low. The survey collects user ratings on call, video, audio and screen-sharing quality; Microsoft's notice says it is on by default and stores new customer data, but a Cloud Policy survey setting is documented for Teams Rooms.
cost: Low. The only cost the sources show is admin time for communication and device updates; Microsoft has not published a survey-specific licence or meter for the surveys.
impact: Medium. People who attend meetings on Teams Rooms on Android devices will periodically be prompted after a meeting ends; admins and other users do not otherwise notice it.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: final sentence / date: The notice gives the rollout an end date of 30 December 2026. | Found: Microsoft's end date 2026-12-30; [Rollout schedule] - General Availability (Worldwide): Beginning in November 2026 | Fix: Replace the final sentence with 'The notice says Worldwide General Availability rollout begins in November 2026; it does not state a rollout completion date.' The supplied 30 December date is the post's end-date metadata, not a completion date in its rollout schedule.
- [contradicted, blocker] Governance controls: first paragraph after table; Open questions: final question / applicability: Microsoft has not confirmed that feedback policies control the new call quality survey on Android specifically. | Found: Call Quality Feedback surveys: Users can now rate the quality of their calls and meetings ... These results are visible in the Call Quality Dashboard and can be controlled using feedback policies. | Fix: Replace the Android uncertainty in the paragraph after the table with 'The Teams Rooms on Android release notes explicitly say Call Quality Feedback surveys can be controlled using feedback policies.' Remove the final Open questions bullet asking whether those policies apply to Android. Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution
- [contradicted, blocker] Scope: Rollout; Open questions: first question / absence: The app version introducing Android call quality feedback surveys has not been published. | Found: 1449/1.0.96.2026344105 (November 2026) Introduced in this update: ... Call Quality Feedback surveys | Fix: Replace 'Which version that is has not been published.' with 'The Teams Rooms on Android release notes list Call Quality Feedback surveys as introduced in app version 1449/1.0.96.2026344105 (November 2026), while the roadmap record still says In development. Microsoft notes that availability can vary by device make and model.' Remove the first Open questions bullet's question about which app version is required. Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown because no survey-specific requirement is published. | Found: Each meeting room needs a Teams Rooms license, such as a Teams Rooms console, Surface Hub, or Teams panel. Teams provides two licenses for Teams Rooms: Microsoft Teams Rooms Pro and Microsoft Teams Rooms Basic. | Fix: Set licensing.model to 'included'. Replace the notes with 'Teams Rooms devices require Microsoft Teams Rooms Basic or Microsoft Teams Rooms Pro. Microsoft has not published an additional licence requirement specific to these surveys.' The schema assigns included to a new option inside a product with a published general licence requirement. | Source: https://learn.microsoft.com/microsoftteams/rooms/rooms-plan
- [supported, minor] controls[0].ui; Governance controls: table / admin-path: The Cloud Policy route is Microsoft 365 Apps admin center > Customization > Policy Management > Policy configurations > Create > Start with the basics > Choose the scope > Configure Settings. | Found: Under Customization, select Policy Management. On the Policy configurations page, select Create. On the Start with the basics page, enter a name ... On the Choose the scope page ... On the Configure Settings page, select the policies | Fix: The printed route correctly reaches the settings page but stops before its named control. Append ' > Allow users to receive and respond to in-product surveys from Microsoft' to controls[0].ui.path; feedback-manage documents searching for 'feedback' or 'survey' there and gives this policy name. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [supported, minor] controls[0].note; Governance controls: table note / applicability: The row qualifies the documented survey policy by saying Learn names Teams Rooms generally, not Android. | Found: | Teams Rooms | Yes | Yes | Yes | No | | Fix: Replace 'Learn names Teams Rooms generally, not Android.' with 'The Teams Rooms on Android release notes confirm that Call Quality Feedback surveys can be controlled using feedback policies.' Cite https://learn.microsoft.com/microsoftteams/rooms/rooms-release-note#teams-rooms-on-android-feature-introduction-and-issue-resolution. | Source: https://learn.microsoft.com/privacy/microsoft-365/feedback/feedback-manage
-->
