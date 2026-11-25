---
title: "Microsoft Teams: real-time call queue metrics in the Queues app on mobile"
slug: "microsoft-teams-real-time-queue-metrics-in-the-queues-app-on-mobile"
roadmapId: 579859
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Calling representatives and supervisor leads get real-time call queue metrics in the Queues app on Teams mobile from December 2026. No admin action is required; existing licences and voice applications policies decide who sees what."
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
  model: "add-on"
  notes: "Learn says users must have a Teams Phone and a Teams Premium license to use Queues app. Microsoft has not published a licence or price specific to the mobile metrics."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","call-queues","teams-phone","mobile","real-time","analytics"]
sources:
  - title: "Microsoft 365 Roadmap 579859"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579859"
    kind: "roadmap"
  - title: "MC1559637: Microsoft Teams: Real-time queue metrics in the Queues app on Mobile"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1559637"
    kind: "message-center"
  - title: "Manage Queues app for Microsoft Teams in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    kind: "learn"
  - title: "Manage - Voice applications policies"
    url: "https://learn.microsoft.com/microsoftteams/aa-cq-manage-voice-applications-policies"
    kind: "learn"
  - title: "Release notes for Microsoft Teams admin features"
    url: "https://learn.microsoft.com/officeupdates/teams-admin"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Set-CsTeamsVoiceApplicationsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvoiceapplicationspolicy?view=teams-ps"
    kind: "learn"
  - title: "Update-MgTeamworkTeamAppSetting"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.teams/update-mgteamworkteamappsetting?view=graph-powershell-1.0"
    kind: "learn"
videos: []
related: ["microsoft-teams-copilot-in-the-queues-app-on-mobile","microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile","microsoft-teams-automatic-recording-and-transcription-for-teams-call-queues"]
controls:
  - governs: "Which authorised users can access real-time call queue metrics in the Queues app"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Voice > Voice applications policies > policy"
      docs: "https://learn.microsoft.com/microsoftteams/aa-cq-manage-voice-applications-policies"
    api:
      kind: "powershell"
      call: "Set-CsTeamsVoiceApplicationsPolicy -Identity <policy name> -RealTimeCallQueueMetricsPermission AuthorizedOnly"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvoiceapplicationspolicy?view=teams-ps"
    note: "Setting is Real-time call queue metrics; values None, AuthorizedOnly (All no longer supported). Needs Teams Premium. Existing policy for authorised users."
  - governs: "Whether the Queues app is available in the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Actions > Org-wide app settings > Microsoft apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-queues-app"
    api: null
    note: "Switching Microsoft apps off also turns off Insights and Tasks. Not a control over mobile metrics alone."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-19"
    note: "New briefing: real-time call queue metrics reach the Queues app on Teams mobile from December 2026; no admin action required, licences and voice applications policies decide access."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 59 statements not yet confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 62 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 71 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 68
  unconfirmed: 1
  contradicted: 2
  attempts: 0
  hash: "0328ca1fa473956160e16260bafa3f21"
---

## What's changing

Microsoft is adding real-time call queue metrics to the Queues app on Teams mobile (Android and iOS). Calling representatives and supervisor leads will be able to see current queue activity from their phones instead of switching to desktop. Microsoft's notice MC1559637 lists calls waiting, calls presented and calls answered among the metrics, and says representatives see the metrics available to them while supervisor leads see additional queue information based on their permissions.

The notice states that this extends the existing real-time queue metrics experience to mobile and does not change how call queues are configured or managed. The Queues app itself is already documented as supported on iOS and Android mobile clients, and on Teams desktop, Mac, Virtualized Desktop Infrastructure clients and touch-device Teams phones; it is not supported on web clients.

The roadmap item is In development, General Availability, with a target of December CY2026, for Worldwide (Standard Multi-Tenant) on Android and iOS. MC1559637 (published 18 November 2026) says Microsoft expects to begin rolling out in early December 2026 and complete by mid-December 2026, and sets no act-by date.

The sources differ on timing. The Teams admin release notes dated June 03, 2026 already describe the Queues app on Teams mobile as letting users "access real-time metrics", while the roadmap item and MC1559637 describe mobile real-time metrics as arriving in December 2026. Treat the roadmap item and the notice as the plan for this capability.

## Why it matters

Representatives and leads who work away from a desk can now see queue conditions and decide on their availability and queue participation from a phone. For a service owner this means more people looking at queue figures on mobile devices, and more questions to the help desk when what a user sees differs from a colleague's.

Microsoft's notice says no new admin action is required before rollout and that the feature rolls out to eligible users. Plan for it arriving in mid-December 2026: confirm licences and permissions, and brief the people who will see it. Which metrics each person sees depends on their role and permissions, so a permissions review now avoids surprises later.

## Risk assessment

**Data exposure**

- Queue figures such as calls waiting, calls presented and calls answered become visible on users' phones. Decide whether that fits your rules for information shown on personal or unmanaged devices.
- Supervisor leads see additional queue information based on their permissions (MC1559637). The voice applications policy decides which real-time reports authorised users can access.

**Security & identity**

- No change to sign-in or identity is described in the notice. Access follows the user's existing Teams Phone and Teams Premium licences and their role and permissions.

**Autonomy & actions**

- The metrics are read-only information. Microsoft's notice says users can use them to understand demand and manage their own availability and queue participation; it describes no automated action.

**Change & support**

- The notice says the metrics available depend on role and existing permissions, so expect support questions where two users' permissions differ.
- Microsoft recommends informing the help desk and users and updating internal training and support materials (MC1559637).

## Cost and licensing

Learn's Manage Queues app page says users must have a Teams Phone and a Teams Premium license to use Queues app, and that once a user is licensed for Teams Premium it can take up to 48 hours for the app to appear in the Teams client. The Teams Premium licensing page lists real-time metrics for Call queues and Auto attendants as a Teams Premium feature.

The roadmap item and MC1559637 name no licence, price or meter for the mobile metrics, and no separate charge for them is published at the time of writing (November 2026). Microsoft's notice recommends reviewing licence assignments for users who need the Queues app on mobile.

The remaining cost is indirect: admin time to check licences and permissions, and communication and training for representatives and leads.

## Scope

**Who.** Calling representatives and supervisor leads who use the Queues app. MC1559637 says eligible users get the metrics available to their role and existing permissions.

**Licences.** Teams Phone and Teams Premium, as above. Learn says Queues app is enabled by default for all Teams users who are assigned both licences and who are voice enabled, and that users must be in at least one call queue to use it.

**Platforms and clouds.** Android and iOS. The roadmap item lists Worldwide (Standard Multi-Tenant) only. Learn says Queues app is available in Commercial, GCC, GCC High and DoD environments, but that statement is about the app, not about this mobile feature.

**Rollout.** Early December 2026 to mid-December 2026 per MC1559637; the roadmap target is December CY2026.

## Governance guidance

### Before rollout

- Review Teams Phone and Teams Premium licence assignments for the representatives and leads who need the Queues app on mobile (Microsoft 365 admin center licence assignment).
- Check the voice applications policies assigned to your supervisor leads, in particular the real-time call queue metrics setting, so each person gets the access you intend.
- Confirm representatives and leads are members of, or authorised users for, at least one call queue.
- Brief the help desk and update training material before the December 2026 rollout, as Microsoft recommends.

### At rollout

- Tell representatives and supervisor leads that real-time queue metrics are arriving in the Queues app on Android and iOS, and that what they see depends on their role.
- Ask a pilot representative and a pilot supervisor lead to compare mobile and desktop metrics and report differences.

### After rollout

- Review help desk tickets for permission-related differences and adjust voice applications policy assignments where needed.
- Re-read the Manage Queues app and voice applications policies pages for any mobile-specific setting Microsoft adds after rollout.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which authorised users can access real-time call queue metrics in the Queues app</strong><br><small>User</small><br><small class="controls__note">Setting is Real-time call queue metrics; values None, AuthorizedOnly (All no longer supported). Needs Teams Premium. Existing policy for authorised users.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Voice › Voice applications policies › policy <a href="https://learn.microsoft.com/microsoftteams/aa-cq-manage-voice-applications-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsVoiceApplicationsPolicy -Identity &lt;policy name&gt; -RealTimeCallQueueMetricsPermission AuthorizedOnly</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsvoiceapplicationspolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Queues app is available in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Switching Microsoft apps off also turns off Insights and Tasks. Not a control over mobile metrics alone.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Actions › Org-wide app settings › Microsoft apps <a href="https://learn.microsoft.com/microsoftteams/manage-queues-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft's notice says the feature does not change how call queues are configured or managed. The rows below are existing Queues app controls an administrator has today, not controls introduced for the mobile metrics.

The voice applications policy only reaches users who are authorised users of at least one call queue or auto attendant and have a policy assigned; Learn says the global policy disables all configuration change capabilities and should not be changed. The setting name differs between pages: the policy page lists the parameter as RealTimeQueueMetricsPermission, while the cmdlet reference spells it RealTimeCallQueueMetricsPermission.

Turning off Microsoft apps in the org-wide app settings switches off the Queues app for all users, and also Insights and Tasks, so it is not a targeted control over mobile metrics.

## Open questions

- Does the voice applications policy setting for real-time call queue metrics apply identically on mobile and desktop? Watch the Manage Queues app and voice applications policies pages on Microsoft Learn.
- Which of the real-time metrics listed on the Learn reporting page will appear on mobile, and will representatives see the same set as on desktop? Watch the end-user Queues app documentation.
- Will any Teams Premium or Teams Phone licence requirement change for the mobile metrics? Watch Message center and the Teams Premium licensing page.
- How should the June 03, 2026 release note about real-time metrics on Teams mobile be read alongside the December 2026 roadmap target? Watch the roadmap item for status changes.

<!-- rationale
risk: Low. The feature extends real-time queue metrics that already exist in the Queues app to iOS and Android, and Microsoft's notice says the metrics shown depend on each user's role and existing permissions.
cost: Low. Queues app needs Teams Phone and Teams Premium licences; no separate charge or licence for the mobile metrics is published, so the cost is admin time to check licences and brief users.
impact: Medium. Only calling representatives and supervisor leads who use the Queues app see the change, and the help desk may field questions about it on their phones.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The metrics are read-only information. | Found: Searched: 'Queues app mobile real-time metrics read-only separate license price charge'; '"Queues" "mobile" "read-only"'. Read MC1559637, Manage Queues app, licensing and reporting search excerpts; none states a categorical read-only restriction. | Fix: Remove 'The metrics are read-only information.' Keep the following sentence attributing demand awareness and management of availability and queue participation to Microsoft's notice.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; front matter: targetDate and changes; What's changing; Why it matters; Scope / record: The mobile metrics arrive from December 2026, with a roadmap target of December CY2026. | Found: "status": "In development"; "targetDate": "December CY2026" | Fix: In the summary and new-briefing change note replace 'from December 2026' with 'targeted for December 2026'. In Why it matters replace 'can now see' with 'are expected to be able to see'. Keep the explicitly labelled roadmap target unchanged.
- [supported, minor] What's changing; Why it matters; Scope: Rollout / record: The notice expects completion by mid-December 2026, and the briefing tells readers to plan for arrival then. | Found: expect to complete by mid-December 2026. | Fix: In Why it matters replace 'Plan for it arriving in mid-December 2026' with 'Plan around Microsoft's expected completion by mid-December 2026'.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Teams admin center > Voice > Voice applications policies > policy reaches the existing metrics-access policy area. | Found: go to **Voice** > **Voice applications policies**. 2. Select the option to the left of the policy name, and then select **Edit**. 3. Change the settings you want to allow your authorized users to configure. | Fix: Set controls[0].ui.path and the matching table path to 'Voice > Voice applications policies > policy > Edit > Real-time call queue metrics'. The existing path stops early in the correct policy area; the cited page provides the editing steps and setting label. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-manage-voice-applications-policies
- [supported, minor] controls[0].note; Governance controls table / behaviour: None is the policy page's reporting value for no metrics access. | Found: **None** - no access to any metrics. | Fix: In controls[0].note and its table note replace 'values None, AuthorizedOnly (All no longer supported)' with 'The policy page lists None and AuthorizedOnly; the PowerShell reference uses Disabled rather than None. All is no longer supported.' The cited Set-CsTeamsVoiceApplicationsPolicy reference states 'Supported values: Disabled | AuthorizedOnly | All'. | Source: https://learn.microsoft.com/microsoftteams/aa-cq-manage-voice-applications-policies
- [contradicted, minor] Governance guidance: Before rollout, licence assignments / consistency: The governance checklist's license-assignment control is represented in the controls table. | Found: Review Teams Phone and Teams Premium licence assignments ... (Microsoft 365 admin center licence assignment). The table contains only metrics-access policy and organization-wide Queues app availability controls. | Fix: Replace the licence-assignment bullet with 'Review whether the intended mobile users meet the Teams Phone and Teams Premium requirements described in Cost and licensing.' This removes the checklist control without adding a table row.
- [contradicted, minor] Governance guidance: Before rollout, call queue membership / consistency: The governance checklist's queue membership or authorized-user designation control is represented in the controls table. | Found: Confirm representatives and leads are members of, or authorised users for, at least one call queue. The table contains only metrics-access policy and organization-wide Queues app availability controls. | Fix: Remove the bullet 'Confirm representatives and leads are members of, or authorised users for, at least one call queue.' The prerequisite remains in Scope; do not add a control row.
-->
