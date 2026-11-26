---
title: "Microsoft Teams: third-party synthetic audio and video detection in meetings"
slug: "microsoft-teams-third-party-synthetic-audio-and-video-detection-in-microsoft-teams"
roadmapId: 573451
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams will surface deepfake detection signals from certified third-party providers in meetings. Administrators deploy a provider app and set a meeting policy; providers supply the service under their own licensing."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "add-on"
  notes: "The provider supplies the service under its own licensing and activation model. Complete any provider-side licensing or service activation before setup; a detection-specific Teams licence, price or meter is not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["teams","meeting-policy","threat-detection","defender-for-office-365","powershell","integration"]
sources:
  - title: "Microsoft 365 Roadmap 573451"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573451"
    kind: "roadmap"
  - title: "MC1509787: (Updated) Microsoft Teams: Third-party synthetic audio and video detection in meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1509787"
    kind: "message-center"
  - title: "Certified third-party synthetic audio and video detection in Microsoft Teams meetings (Preview)"
    url: "https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings"
    kind: "learn"
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
related: ["meeting-policy"]
controls:
  - governs: "Whether detection is permitted and which provider a meeting policy uses"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting protection > Synthetic audio and video detection provider > Turn on synthetic audio and video protection"
      docs: "https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy-name> -SyntheticMediaDetection Enabled -SyntheticMediaDetectionAppId <supported-provider-app-id>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Applies to meetings organised by users assigned the policy. Learn documents the admin centre route as public preview. Use -SyntheticMediaDetection Disabled to turn detection off for that policy."
  - governs: "Whether the provider's Teams app is allowed or blocked in the tenant"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > app > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-apps"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "App availability, required consent, provider-side activation and meeting policy configuration are separate prerequisites. The reference describes -IsBlocked $true as unblocking; use Manage apps > app > Block."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-26"
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
  - date: "2026-11-19"
    note: "Corrected after verification: added the documented Teams admin center route and preview status, provider licensing and prerequisite, organiser actions, and the Manage apps path; removed unsupported engine names."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 70 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected after verification: cost rating raised to medium because detection requires a provider service under its own licensing; cost rationale reworded to match."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 75
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a895a4669e2bc12b8687fc01cbaa51e8"
---

## What's changing

Teams is adding a way for certified third-party providers to tell meeting participants when a participant's audio or video looks synthetic, such as a deepfake. The roadmap item states that the detection is performed by the provider, and that Teams provides the platform integration and the in-meeting experiences for showing and acting on the provider's signals.

Microsoft Learn documents the pieces administrators and providers touch. The Microsoft Graph beta reference for `participant: reportSyntheticMedia` says a certified detection bot admitted to the call reports a flagged participant, and that the result is propagated to all participants through roster updates. The `Set-CsTeamsMeetingPolicy` reference adds two parameters, `SyntheticMediaDetection` and `SyntheticMediaDetectionAppId`, that point a meeting policy at a provider's Teams App ID. Providers such as Reality Defender and Pindrop Pulse have Microsoft 365 App Certification pages. Microsoft Learn now has a feature overview, which describes the feature as public preview: detection results use the provider experience in public preview, while native Teams detection alerts, participant indicators and associated actions are separately in private preview. UI labels and supported scenarios can change before general availability.

The roadmap item is Rolling out, with a target of November CY2026, release phases General Availability and Targeted Release, and platforms Desktop, Mac and Web, for Worldwide (Standard Multi-Tenant) only. Microsoft's notice MC1509787, updated 17 November 2026, says Targeted Release (Worldwide) begins in late November 2026 (previously mid-November) and is expected to complete by late November 2026, and that Microsoft will announce General Availability through Message center. The notice gives no act-by date.

## Why it matters

Deepfake voices and faces are a social-engineering risk for meetings that approve payments, password resets or access. This item lets an organisation bring in a specialist provider's detection instead of relying on participants' judgement, and the roadmap says the signals feed in-meeting controls.

Microsoft's notice describes an opt-in route: administrators evaluate and select a provider, deploy its app, grant the required permissions and configure meeting policies. Nothing in the sources says Teams switches on a third-party provider by itself, so if nobody acts, existing meetings behave as they do today. The decision for a service owner is whether the benefit justifies letting a third party's bot analyse live meeting media, and for which users.

## Risk assessment

**Data exposure**

- Microsoft's notice says certified providers may analyse meeting audio and video signals and tells administrators to review provider terms, data handling and compliance documentation before enabling. Reality Defender's attested App Certification page lists the `Calls.AccessMedia.All` application permission, justified as access to real-time audio and video; that page is the developer's own self-assessment and Microsoft makes no guarantee of its accuracy.
- Detection events can appear in the Microsoft Defender advanced hunting table `SyntheticMediaDetectionEvents`, which Learn says is populated from Defender for Office 365 records and holds data only for an approved detection engine. Synthetic media detection hunting is a Microsoft 365 E5 or Defender for Office 365 Plan 2 capability. Confirm who can query that table, because it names detected users and meetings.

**Security & identity**

- A third-party bot can report detections only when the tenant administrator grants the app the `Calls.ReportSyntheticMedia.All` application permission, per the Graph reference. Grant it only to the provider app you have assessed.
- The `SyntheticMediaDetectionAppId` page warns that saving a policy does not confirm the App ID belongs to a supported provider, and an incorrect or unsupported App ID can stop the detection bot joining eligible meetings. A successful save is not proof that the bot can join, so test it.

**Autonomy & actions**

- The roadmap describes in-meeting experiences and controls driven by the provider's signals. In private preview, the organizer can Remove a flagged participant or select Mark as not a concern from the alert or roster; Teams does not remove participants automatically. Reality Defender's publisher-attested listing says hosts can rescan a participant or end the meeting if manipulation is detected.
- Detection is a provider's classification, not proof. Treat a flag as a prompt for verification and plan how people should respond.

**Change & support**

- Provider choice is per policy through an App ID, and a user can be assigned only one meeting policy, so different groups can use different providers or none. Expect support questions when a flag appears for a legitimate participant.
- Timeline has already moved once: Targeted Release slipped from mid-November to late November 2026, and General Availability has no date.

## Cost and licensing

The provider supplies the service under its own licensing and activation model. Complete any provider-side licensing or service activation before setup; a detection-specific Teams licence, price or meter is not yet published. This is from the feature's Learn page (https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings).

Providers are separate vendors with their own terms, as the provider listings show, and fees are not stated in any Microsoft source read. Indirect cost is administrator time: selecting and assessing a provider, deploying the app, granting permissions and testing meeting policies. Ask each shortlisted provider for pricing and for any Teams licence it expects before a pilot.

## Scope

**Users and policies.** The `SyntheticMediaDetection` setting applies to meetings organised by users assigned the meeting policy that holds it, per the `Set-CsTeamsMeetingPolicy` reference. Users get the global policy unless you create and assign a custom one.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) only, and Desktop, Mac and Web.

**Prerequisites.** MC1509787 asks administrators to deploy the provider app through Manage apps in the Teams admin center, grant the required permissions and configure Teams meeting policies. The Graph reference names the `Calls.ReportSyntheticMedia.All` application permission. Learn requires an agreement with a supported provider and completion of any provider-side licensing or service activation.

## Governance guidance

### Before rollout

- Shortlist providers from the certified list and read each provider's terms, data handling and compliance documentation, as MC1509787 asks. Record where each provider processes audio and video.
- Ask providers for their Teams App ID, the application permissions they request and any fees, since each provider has its own licensing and activation model.
- Decide which users' meetings need detection, such as executives, finance and help desk, and plan a pilot meeting policy for them.
- Agree with security and compliance who can see detection events and how a flagged participant is verified.

### At rollout

- Allow the provider app in Teams admin center > Teams apps > Manage apps > app > Allow, following the provider's guidance for any publisher configuration.
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
<tr><td data-label="Control"><strong>Whether detection is permitted and which provider a meeting policy uses</strong><br><small>User</small><br><small class="controls__note">Applies to meetings organised by users assigned the policy. Learn documents the admin centre route as public preview. Use -SyntheticMediaDetection Disabled to turn detection off for that policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting protection › Synthetic audio and video detection provider › Turn on synthetic audio and video protection <a href="https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy-name&gt; -SyntheticMediaDetection Enabled -SyntheticMediaDetectionAppId &lt;supported-provider-app-id&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the provider's Teams app is allowed or blocked in the tenant</strong><br><small>App</small><br><small class="controls__note">App availability, required consent, provider-side activation and meeting policy configuration are separate prerequisites. The reference describes -IsBlocked $true as unblocking; use Manage apps &gt; app &gt; Block.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › app › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/manage-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The meeting policy parameters decide whether detection is permitted and which provider is used. Setting `SyntheticMediaDetection` to Disabled turns detection off for meetings organised by users on that policy, regardless of the configured provider, and the App ID is left unchanged. The default for `SyntheticMediaDetection` is Enabled, which permits detection only when a configured provider is available; the zero GUID default for the App ID does not select a third-party provider.

Microsoft Learn documents a Teams admin center route to the same policy setting, described as public preview: under Meeting protection, select a provider from the Synthetic audio and video detection provider dropdown list, and the Turn on synthetic audio and video protection setting then appears. MC1509787 also refers to configuring Teams meeting policies. The feature page lists the Teams Administrator role (or higher) to manage the app and meeting policies. The app allow or block control governs the provider app itself, not the meeting setting. `Update-M365TeamsApp` is documented, but its reference describes `-IsBlocked $true` as unblocking. Use Teams apps > Manage apps > app > Block until Microsoft clarifies the reference. Granting application permissions such as `Calls.ReportSyntheticMedia.All`, assigning the pilot meeting policy and reviewing detection events have no rows in the table; the two rows do not document those operations. Confirm the permission path with the provider's deployment guide.

## Open questions

- What detection-specific Teams licence, if any, does this feature require, and what do providers charge? Watch Message center (MC1509787) and the Teams admin documentation.
- The App ID parameter text refers to Microsoft Detection when it is available. Will Microsoft offer its own detection engine, and does it follow the same policy setting?
- When will General Availability happen, and which cloud environments beyond Worldwide will be supported?

<!-- rationale
risk: Low. Third-party detection does not start until administrators configure a provider; review its media access and data handling before opting in.
cost: Medium. Detection requires a provider service under its own licensing and activation model. Microsoft has not published provider fees or a detection-specific Teams licence, price or meter.
impact: Low. Administrators choose and deploy the provider; meeting participants notice only in meetings organised by users whose policy points to a provider.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; What's changing; Governance guidance: At rollout / command: Set-CsTeamsMeetingPolicy -Identity <policy-name> -SyntheticMediaDetection Enabled -SyntheticMediaDetectionAppId <supported-provider-app-id> permits detection with the provider's Teams App ID. | Found: Set-CsTeamsMeetingPolicy -Identity "SyntheticDetectionPolicy" -SyntheticMediaDetection Enabled -SyntheticMediaDetectionAppId "<supported-provider-app-id>" ... Replace `<supported-provider-app-id>` with the Teams App ID of a supported certified detection provider | Fix: Keep the call and Teams App ID wording. Append to controls[0].note: 'The feature overview's PowerShell example labels this value as a provider bot application ID, while the cmdlet reference explicitly requires the supported provider Teams App ID, not an arbitrary Entra application ID or bot ID.' The differing example is at https://learn.microsoft.com/microsoftteams/third-party-synthetic-audio-video-detection-meetings. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy
-->
