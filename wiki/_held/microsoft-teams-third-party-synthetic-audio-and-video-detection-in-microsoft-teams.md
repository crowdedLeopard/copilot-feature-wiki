---
title: "Microsoft Teams: third-party synthetic audio and video detection in meetings"
slug: "microsoft-teams-third-party-synthetic-audio-and-video-detection-in-microsoft-teams"
roadmapId: 573451
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams will surface deepfake detection signals from certified third-party providers in meetings. Administrators deploy a provider app and set a meeting policy; Microsoft has not published licensing."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, Microsoft's notice MC1509787 nor the Learn pages read state a Teams licence, a meter or what certified providers charge."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["teams","meeting-policy","threat-detection","defender-for-office-365","powershell","integration"]
sources:
  - title: "Microsoft 365 Roadmap 573451"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573451"
    kind: "roadmap"
  - title: "MC1509787: (Updated) Microsoft Teams: Third-party synthetic audio and video detection in meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1509787"
    kind: "message-center"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "participant: reportSyntheticMedia"
    url: "https://learn.microsoft.com/graph/api/participant-reportsyntheticmedia?view=graph-rest-beta"
    kind: "learn"
  - title: "SyntheticMediaDetectionEvents"
    url: "https://learn.microsoft.com/defender-xdr/advanced-hunting-synthetic-media-detection-events"
    kind: "learn"
  - title: "Reality Defender RealMeeting (general)"
    url: "https://learn.microsoft.com/microsoft-365-app-certification/teams/reality-defender-realmeeting"
    kind: "learn"
  - title: "Pindrop Pulse (general)"
    url: "https://learn.microsoft.com/microsoft-365-app-certification/teams/pindrop-security-inc-pulse"
    kind: "learn"
  - title: "Microsoft Defender for Office 365 support for Microsoft Teams"
    url: "https://learn.microsoft.com/defender-office-365/mdo-support-teams-about"
    kind: "learn"
  - title: "Overview of agent and app management and governance in Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/manage-apps"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-report-a-security-concern-in-meetings"]
controls:
  - governs: "Whether detection is permitted and which provider a meeting policy uses"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy-name> -SyntheticMediaDetection Enabled -SyntheticMediaDetectionAppId <supported-provider-app-id>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Applies to meetings organised by users assigned the policy. Use -SyntheticMediaDetection Disabled to turn detection off for that policy."
  - governs: "Whether the provider's Teams app is allowed or blocked in the tenant"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "General app control: not confirmed as the only gate. The reference describes -IsBlocked $true as unblocking; use Manage apps > app > Block until Microsoft clarifies. Some apps show as Blocked by publisher until configured."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-17"
    note: "New briefing: documents the meeting policy parameters, provider app controls and permissions; Microsoft's notice moved Targeted Release to late November 2026."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: App ID wording, Defender for Office 365 Plan 2 for event hunting, app block command caveat, provider response actions, risk lowered to low."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Removed three checklist steps (grant permissions, assign the pilot policy, review detection events) that have no controls-table row; status wording now matches the roadmap's Rolling out."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 54 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-19"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 47
  unconfirmed: 1
  contradicted: 6
  attempts: 1
  hash: "0d7c8dc4c57c70627abb55720678d277"
---

## What's changing

Teams is adding a way for certified third-party providers to tell meeting participants when a participant's audio or video looks synthetic, such as a deepfake. The roadmap item states that the detection is performed by the provider, and that Teams provides the platform integration and the in-meeting experiences for showing and acting on the provider's signals.

Microsoft Learn documents the pieces administrators and providers touch. The Microsoft Graph beta reference for `participant: reportSyntheticMedia` says a certified detection bot admitted to the call reports a flagged participant, and that the result is propagated to all participants through roster updates. The `Set-CsTeamsMeetingPolicy` reference adds two parameters, `SyntheticMediaDetection` and `SyntheticMediaDetectionAppId`, that point a meeting policy at a provider's Teams App ID. Providers such as Reality Defender and Pindrop Pulse have Microsoft 365 App Certification pages. Learn has no overview page for the feature itself, so how the experience looks to participants is known only from the roadmap description and those provider pages.

The roadmap item is Rolling out, with a target of November CY2026, release phases General Availability and Targeted Release, and platforms Desktop, Mac and Web, for Worldwide (Standard Multi-Tenant) only. Microsoft's notice MC1509787, updated 17 November 2026, says Targeted Release (Worldwide) begins in late November 2026 (previously mid-November) and is expected to complete by late November 2026, and that Microsoft will announce General Availability through Message center. The notice gives no act-by date.

## Why it matters

Deepfake voices and faces are a social-engineering risk for meetings that approve payments, password resets or access. This item lets an organisation bring in a specialist provider's detection instead of relying on participants' judgement, and the roadmap says the signals feed in-meeting controls.

Microsoft's notice describes an opt-in route: administrators evaluate and select a provider, deploy its app, grant the required permissions and configure meeting policies. Nothing in the sources says Teams switches on a third-party provider by itself, so if nobody acts, existing meetings behave as they do today. The decision for a service owner is whether the benefit justifies letting a third party's bot analyse live meeting media, and for which users.

## Risk assessment

**Data exposure**

- Microsoft's notice says certified providers may analyse meeting audio and video signals and tells administrators to review provider terms, data handling and compliance documentation before enabling. Reality Defender's attested App Certification page lists the `Calls.AccessMedia.All` application permission, justified as access to real-time audio and video; that page is the developer's own self-assessment and Microsoft makes no guarantee of its accuracy.
- Detection events can appear in the Microsoft Defender advanced hunting table `SyntheticMediaDetectionEvents`, which Learn says is populated from Defender for Office 365 records and holds data only for an approved detection engine, including GetReal, Pindrop, Reality Defender and Resemble AI. Confirm who can query that table, because it names detected users and meetings.

**Security & identity**

- A third-party bot can report detections only when the tenant administrator grants the app the `Calls.ReportSyntheticMedia.All` application permission, per the Graph reference. Grant it only to the provider app you have assessed.
- The `SyntheticMediaDetectionAppId` page warns that saving a policy does not confirm the App ID belongs to a supported provider, and an incorrect or unsupported App ID can stop the detection bot joining eligible meetings. A successful save is not proof that the bot can join, so test it.

**Autonomy & actions**

- The roadmap describes in-meeting experiences and controls driven by the provider's signals. Microsoft has not documented a provider-independent Teams response workflow; Reality Defender's publisher-attested listing says hosts can rescan a participant or end the meeting if manipulation is detected. Do not rely on automatic ejection or blocking until Microsoft documents it.
- Detection is a provider's classification, not proof. Treat a flag as a prompt for verification and plan how people should respond.

**Change & support**

- Provider choice is per policy through an App ID, and a user can be assigned only one meeting policy, so different groups can use different providers or none. Expect support questions when a flag appears for a legitimate participant.
- Timeline has already moved once: Targeted Release slipped from mid-November to late November 2026, and General Availability has no date.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this feature at the time of writing (November 2026). The roadmap item, MC1509787 and the Learn pages read name no Teams licence, and none of them states that the feature is included in existing licences, so do not budget on either assumption.

Providers are separate vendors with their own terms, as the provider listings show, and fees are not stated in any Microsoft source read. Indirect cost is administrator time: selecting and assessing a provider, deploying the app, granting permissions and testing meeting policies. Ask each shortlisted provider for pricing and for any Teams licence it expects before a pilot.

## Scope

**Users and policies.** The `SyntheticMediaDetection` setting applies to meetings organised by users assigned the meeting policy that holds it, per the `Set-CsTeamsMeetingPolicy` reference. Users get the global policy unless you create and assign a custom one.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) only, and Desktop, Mac and Web.

**Prerequisites.** MC1509787 asks administrators to deploy the provider app through Manage apps in the Teams admin center, grant the required permissions and configure Teams meeting policies. The Graph reference names the `Calls.ReportSyntheticMedia.All` application permission. Learn names no licence prerequisite.

## Governance guidance

### Before rollout

- Shortlist providers from the certified list and read each provider's terms, data handling and compliance documentation, as MC1509787 asks. Record where each provider processes audio and video.
- Ask providers for their Teams App ID, the application permissions they request and any fees, since Microsoft has published no licensing.
- Decide which users' meetings need detection, such as executives, finance and help desk, and plan a pilot meeting policy for them.
- Agree with security and compliance who can see detection events and how a flagged participant is verified.

### At rollout

- Allow the provider app in Teams admin center > Teams apps > Manage apps, following the provider's guidance for any publisher configuration.
- Set `SyntheticMediaDetection` and `SyntheticMediaDetectionAppId` on a pilot meeting policy with `Set-CsTeamsMeetingPolicy`, using the provider's Teams App ID.
- Run test meetings to confirm the detection bot joins before assigning the policy more widely.

### After rollout

- Watch Message center for the General Availability announcement and for any licensing notice.
- Re-read the provider's terms when it changes them, and block the app in Manage apps if you no longer accept them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether detection is permitted and which provider a meeting policy uses</strong><br><small>User</small><br><small class="controls__note">Applies to meetings organised by users assigned the policy. Use -SyntheticMediaDetection Disabled to turn detection off for that policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy-name&gt; -SyntheticMediaDetection Enabled -SyntheticMediaDetectionAppId &lt;supported-provider-app-id&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the provider's Teams app is allowed or blocked in the tenant</strong><br><small>App</small><br><small class="controls__note">General app control: not confirmed as the only gate. The reference describes -IsBlocked $true as unblocking; use Manage apps &gt; app &gt; Block until Microsoft clarifies. Some apps show as Blocked by publisher until configured.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The meeting policy parameters decide whether detection is permitted and which provider is used. Setting `SyntheticMediaDetection` to Disabled turns detection off for meetings organised by users on that policy, regardless of the configured provider, and the App ID is left unchanged. The default for `SyntheticMediaDetection` is Enabled, which permits detection only when a configured provider is available; the zero GUID default for the App ID does not select a third-party provider.

Microsoft Learn documents no Teams admin center setting for these two parameters at the time of writing (November 2026), although MC1509787 refers to configuring Teams meeting policies, so the table shows PowerShell only. The app allow or block control governs the provider app itself, not the meeting setting. `Update-M365TeamsApp` is documented, but its reference describes `-IsBlocked $true` as unblocking. Use Teams apps > Manage apps > app > Block until Microsoft clarifies the reference. Granting application permissions such as `Calls.ReportSyntheticMedia.All`, assigning the pilot meeting policy and reviewing detection events have no rows in the table; the two rows do not document those operations. Confirm the permission path with the provider's deployment guide. The reference pages for these cmdlets do not state the admin role needed to run them.

## Open questions

- What licence, if any, does Teams require for third-party synthetic media detection, and what do providers charge? Watch Message center (MC1509787) and the Teams admin documentation.
- Which provider-independent actions can an organiser or participant take when a participant is flagged, and which Teams admin center setting controls those in-meeting experiences?
- The App ID parameter text refers to Microsoft Detection when it is available. Will Microsoft offer its own detection engine, and does it follow the same policy setting?
- When will General Availability happen, and which cloud environments beyond Worldwide will be supported?
- Is there a Teams admin center path for the meeting policy settings, and which admin role is needed to run `Set-CsTeamsMeetingPolicy`?

<!-- rationale
risk: Low. Third-party detection does not start until administrators configure a provider; review its media access and data handling before opting in.
cost: Low. The only cost the sources show is administrator time; Microsoft has not published a Teams licence or meter for this feature, and any provider fees are not stated.
impact: Low. Administrators choose and deploy the provider; meeting participants notice only in meetings organised by users whose policy points to a provider.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls; Open questions / absence: Microsoft has not documented a Teams admin center setting for detection permission and provider selection. | Found: Under Meeting protection, select a provider from the Synthetic audio and video detection provider dropdown list. ... The Turn on synthetic audio and video protection setting appears and is on by default. | Fix: Replace controls[0].ui null with surface 'Teams admin center', path 'Meetings > Meeting policies > policy > Meeting protection > Synthetic audio and video detection provider > Turn on synthetic audio and video protection', and docs https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings. Replace the repeated UI absence and corresponding open question with that documented preview route, and cite the page. | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
- [contradicted, blocker] controls[1].ui; Governance guidance: At rollout / admin-path: Teams admin center > Teams apps > Manage apps is the complete path to the app allow/block control. | Found: Sign in to the Teams admin center and access Teams apps > Manage apps. ... Select the app on the Manage apps page and select Allow or Block option. | Fix: Change controls[1].ui.path to 'Teams apps > Manage apps > app > Allow or Block'. End the rollout instruction at 'app > Allow'; retain the existing prose route ending in 'app > Block' for blocking. | Source: https://learn.microsoft.com/microsoftteams/manage-apps
- [unsupported, blocker] Risk assessment: Data exposure / availability: Learn identifies GetReal, Pindrop, Reality Defender and Resemble AI as approved engines for the detection events table. | Found: Searched: Microsoft Teams synthetic media detection GetReal Pindrop Reality Defender Resemble approved engines. Opened SyntheticMediaDetectionEvents, the feature overview, both cited provider listings and Defender for Office 365 support for Teams; none lists these four approved engines. | Fix: Remove 'including GetReal, Pindrop, Reality Defender and Resemble AI'. Retain the documented statement that the table requires an approved Microsoft or third-party detection engine.
- [contradicted, blocker] What's changing / absence: Learn has no overview page for this feature, leaving the participant experience documented only by the roadmap and provider pages. | Found: Certified third-party synthetic audio and video detection in Microsoft Teams meetings (Preview) ... In public preview, detection results are surfaced through the provider's experience. | Fix: Replace the absence sentence with 'Microsoft Learn now has a feature overview: detection results use the provider experience in public preview, while native Teams detection alerts, participant indicators and associated actions are separately in private preview.' Cite https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings. | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
- [contradicted, blocker] Risk assessment: Autonomy & actions; Open questions / absence: Microsoft has not documented a provider-independent Teams response workflow. | Found: This experience is available only in private preview. ... From the alert or the roster, the organizer can: Remove the flagged participant from the meeting. Mark as not a concern ... Teams doesn't remove participants automatically. | Fix: Replace the absence with 'In private preview, the organizer can Remove a flagged participant or select Mark as not a concern from the alert or roster; Teams does not remove participants automatically.' Cite https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings and remove the open question asking which provider-independent actions exist. | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
- [contradicted, blocker] front matter: licensing.model; licensing.notes; summary; Cost and licensing; rationale: cost / licensing: Licensing for the feature is wholly unpublished, represented by licensing.model unknown. | Found: Each provider has its own licensing, service activation, data handling, and support model. Contact the provider directly to purchase or activate its service. | Fix: Set licensing.model to 'add-on' for the separately licensed provider service. Replace the blanket licensing absence in the notes, summary, body and cost rationale with 'The provider supplies the service under its own licensing and activation model. Complete any provider-side licensing or service activation before setup; a detection-specific Teams licence, price or meter is not yet published.' Cite https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings. Do not infer a provider price or change the cost rating solely from unpublished prices. | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
- [contradicted, blocker] Scope: Prerequisites; Cost and licensing / licensing: Learn names no licence prerequisite for the feature or its described detection-event hunting capability. | Found: Your organization has an agreement with a supported detection provider and has completed any provider-side licensing or service activation. | Fix: Replace 'Learn names no licence prerequisite' with 'Learn requires an agreement with a supported provider and completion of any provider-side licensing or service activation.' Also qualify the existing event-hunting sentence: 'Synthetic media detection hunting is a Microsoft 365 E5 or Defender for Office 365 Plan 2 capability,' as stated at the already cited https://learn.microsoft.com/defender-office-365/mdo-support-teams-about. Keep the narrower detection-specific Teams licence uncertainty. | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Governance controls / applicability: App allow/block governs provider app availability and is not sufficient by itself to enable detection. | Found: App availability and required consent must remain in place for the integration to function. A provider appearing in the dropdown doesn't confirm that these prerequisites are met. | Fix: Add https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings to sources. Replace 'not confirmed as the only gate' with 'App availability, required consent, provider-side activation and meeting policy configuration are separate prerequisites.' | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
- [supported, minor] What's changing; Governance controls / availability: The roadmap's Rolling out status and General Availability release phase are reported without the feature documentation's preview qualifications. | Found: This feature is currently in public preview. ... Native Teams detection alerts, participant indicators, and associated actions are available separately in private preview. | Fix: Retain the roadmap status, target and release phases. Add 'Learn describes the feature as public preview, with native Teams detection alerts, participant indicators and associated actions separately in private preview; UI labels and supported scenarios can change before general availability.' Cite https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings and qualify the newly documented UI and organizer actions as preview. | Source: https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings
-->
