---
title: "Microsoft Teams: granular channel notification controls"
slug: "microsoft-teams-granular-channel-notification-controls"
roadmapId: 565132
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams adds three per-channel notification presets (All new messages, Mentions and replies, Mute) with finer options. Microsoft's notice says it is on for all users and needs no admin action; helpdesk should be told."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor Message Center post MC1388719 names a licence or meter for this feature."
audiences: ["m365-admin","change-adoption","end-user"]
tags: ["teams","channels","user-experience","personal-settings","mobile","adoption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: Granular channel notification controls"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565132"
    kind: "roadmap"
  - title: "MC1388719: (Updated) Microsoft Teams: Granular channel notification settings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1388719"
    kind: "message-center"
  - title: "Manage Collaboration Experiences in Teams for iOS and Android With Microsoft Intune"
    url: "https://learn.microsoft.com/intune/app-management/configuration/configure-teams-mobile"
    kind: "learn"
  - title: "Update iosManagedAppProtection"
    url: "https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Set-CsTeamsNotificationAndFeedsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsnotificationandfeedspolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-improved-organization-for-muted-and-meeting-chats"]
controls:
  - governs: "Tenant-level switch or policy for the channel notification presets"
    scope: "tenant"
    ui: null
    api: null
    note: "None documented at the time of writing (November 2026); Microsoft's notice says no changes are required to existing admin settings or policies."
  - governs: "How Teams notifications are displayed or suppressed on iOS and Android"
    scope: "app"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Apps > Protection > Create Policy > platform > Basics > Apps > Data Protection > Org data notifications"
      docs: "https://learn.microsoft.com/intune/app-management/configuration/configure-teams-mobile"
    api:
      kind: "graph"
      call: "PATCH https://graph.microsoft.com/beta/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtectionId} with body {\"notificationRestriction\": \"blockOrganizationalData\"}"
      docs: "https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-update?view=graph-rest-beta"
    note: "General control for Teams on mobile; Microsoft has not confirmed how it interacts with the new channel presets. Beta Graph API; iOS/iPadOS policy shown."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-06T22:56:31"
changes:
  - date: "2026-11-17"
    note: "New briefing: per-channel notification presets rolling out to Teams, with the notice's cloud-by-cloud timeline and no documented tenant control."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 46 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 45
  unconfirmed: 1
  contradicted: 0
  attempts: 1
  hash: "d394a8036adda6c261429dfadfd26688"
---

## What's changing

Teams users get three presets for each channel's notifications: **All new messages**, **Mentions and replies** and **Mute**. Users can then adjust the chosen preset for unfollowed threads, tag mentions, channel mentions and team mentions, and control banner notifications for the channel. The roadmap item describes this as a way to match alerts to a person's work style and reduce distraction.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap item's and Microsoft's notice MC1388719's description. The notice says existing notification behaviour remains unchanged unless users modify their settings, that the feature is enabled by default for all users, and that no changes are required to existing admin settings or policies. It lists Teams on desktop, web and mobile (Windows, Mac, iOS, Android).

The roadmap item is at status Rolling out, with a target date of October CY2026, release phases General Availability and Targeted Release, and the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds. MC1388719 was updated on 19 October 2026 with a new timeline: targeted release begins in early October 2026 and completes in early October 2026; Worldwide begins in early November 2026 and completes in mid-November 2026; GCC and GCC High begin in mid-November 2026 and complete in late November 2026; DoD begins in late November 2026 and completes by mid-December 2026. The notice sets no act-by date.

## Why it matters

Most of the impact is on user expectations and support. The notice says nothing changes for a user until they alter their settings, so channels keep notifying as they do today, but users will see new options and some will start muting or narrowing channels. Expect questions from people who miss a channel post after choosing **Mute** or **Mentions and replies**, and from people who cannot find where the new options sit.

The notice recommends two things: inform helpdesk teams, and update any internal documentation or training that refers to Teams notifications. That communication is the whole of the preparation Microsoft describes. Microsoft Learn documents no tenant-level control over these presets at the time of writing (November 2026), so the rollout cannot be switched off or constrained by policy on the evidence available.

## Risk assessment

**Data exposure**

- No new data access is described. The feature changes which channel notifications a user receives, and the notice identifies no compliance considerations.
- On mobile, how much of a notification's content shows on the lock screen is governed today by Intune app protection (see the controls table); Microsoft has not said whether that control interacts with the new banner settings.

**Security & identity**

- No change described: the notice mentions no new permissions, roles or sign-in behaviour.

**Autonomy & actions**

- No change: the presets are user settings and nothing in the roadmap item or notice describes an automated action.

**Change & support**

- A user who chooses **Mute** for a channel or limits it to **Mentions and replies** can miss announcements posted there; no tenant-wide control over the presets is documented, so the mitigation is communication to users and helpdesk.
- The rollout is staged by cloud, with Worldwide in November 2026 and DoD finishing in mid-December 2026 according to the notice, so users in different tenants and clouds will see the options at different times.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for this feature: neither the roadmap item nor MC1388719 names one. Licensing is therefore Not yet published, and the briefing does not assume that no licence applies.

The only cost the sources show is indirect: helpdesk briefing, and updating internal Teams notification guidance and training, both of which the notice recommends.

## Scope

The notice says the feature is enabled by default for all users. The roadmap item lists the Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD clouds and the Android, Desktop, iOS and Web platforms, with release phases General Availability and Targeted Release.

Microsoft has not stated which admin role, if any, can configure the presets, and the notice says no changes are required to existing admin settings or policies. Whether the options apply to every channel type (standard, private or shared) is not stated.

## Governance guidance

### Before rollout

- Brief the helpdesk team, as the notice MC1388719 recommends, on the three presets and the per-channel customisations so they can answer questions about missed or muted channel posts.
- Update internal Teams notification guidance and training material that describes how channel notifications work today.
- Review any Intune app protection policy for Teams on iOS or Android that sets **Org data notifications**, so you know how mobile notification content is already handled before users change their channel settings.

### At rollout

- Track the cloud-specific window in MC1388719 for your tenant: Worldwide from early November 2026, GCC and GCC High from mid-November 2026, DoD from late November 2026.
- Tell users that the presets apply per channel and that, according to the notice, existing behaviour stays as it is until they change their settings.

### After rollout

- Review helpdesk tickets for missed channel messages that trace back to **Mute** or **Mentions and replies**, and feed the pattern into user guidance.
- Re-check MC1388719 and the roadmap item for further date changes, as the notice has already been re-dated once.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-level switch or policy for the channel notification presets</strong><br><small>Tenant</small><br><small class="controls__note">None documented at the time of writing (November 2026); Microsoft's notice says no changes are required to existing admin settings or policies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How Teams notifications are displayed or suppressed on iOS and Android</strong><br><small>App</small><br><small class="controls__note">General control for Teams on mobile; Microsoft has not confirmed how it interacts with the new channel presets. Beta Graph API; iOS/iPadOS policy shown.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Apps › Protection › Create Policy › platform › Basics › Apps › Data Protection › Org data notifications <a href="https://learn.microsoft.com/intune/app-management/configuration/configure-teams-mobile" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH https://graph.microsoft.com/beta/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtectionId} with body {&quot;notificationRestriction&quot;: &quot;blockOrganizationalData&quot;}</code> <a href="https://learn.microsoft.com/graph/api/intune-mam-iosmanagedappprotection-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No tenant-level control for the presets is documented at the time of writing (November 2026): the Teams settings reference lists a single setting under notifications and feeds, for suggested feeds, and the notifications and feeds policy cmdlet documents only suggested-feeds and trending-feeds parameters. Microsoft's notice also says no changes are required to existing admin settings or policies.

The Intune row is an existing, general control for Teams on mobile. It governs how notifications are displayed or suppressed through an app protection policy; Microsoft has not confirmed how it interacts with the new channel presets. The Graph call shown is the iOS/iPadOS policy object and needs the Intune permission the reference page names.

## Open questions

- Will Microsoft add a tenant or policy control over the channel notification presets? Watch the Teams admin center settings reference and MC1388719.
- Does the Intune **Org data notifications** setting apply to notifications shaped by the new banner options on mobile? Watch Microsoft Learn for a feature page.
- Does the feature carry any licence requirement or meter? Microsoft has not published one.
- Which date applies to a Worldwide tenant: the roadmap item's October CY2026 target or the notice's early November 2026 start for Worldwide? The notice is the later and more specific statement.
- Do the presets apply equally to standard, private and shared channels? Not stated.

<!-- rationale
risk: Low. Microsoft's notice describes a user-side notification setting that leaves existing behaviour unchanged until a user changes it, and identifies no new data access or compliance considerations.
cost: Low. The only cost the sources show is helpdesk and communication time; Microsoft has not published a licence or meter for this feature.
impact: Medium. Users in Teams channels get new notification options, but the notice says existing notification behaviour stays as it is until a user changes their settings.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters: second paragraph / applicability: The rollout cannot be switched off or constrained by policy on the evidence available. | Found: Searched: Teams granular channel notification presets administrator role PowerShell Microsoft Graph disable. Read Teams settings reference, notification policy cmdlet and MC1388719. No source states that policy cannot constrain or disable the rollout. | Fix: Delete ', so the rollout cannot be switched off or constrained by policy on the evidence available'. Keep the preceding statement that Microsoft Learn documents no tenant-level control over these presets at the time of writing.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: rollout schedule / record: Targeted release begins and completes in early October 2026. | Found: Targeted release: Rollout will begin in early October 2026 (previously late September) and is expected to complete in early October 2026 (previously mid-August). | Fix: Preserve the notice's uncertainty throughout the schedule: replace 'completes' with 'is expected to complete', and replace 'complete' with 'are expected to complete' for GCC and GCC High. In Risk assessment replace 'DoD finishing in mid-December 2026' with 'DoD expected to finish by mid-December 2026'.
- [supported, minor] controls[1].ui; rendered Governance controls table / admin-path: The Intune path is Apps > Protection > Create Policy > platform > Basics > Apps > Data Protection > Org data notifications. | Found: On the Apps page, click Select public apps, then find and select the Microsoft Teams apps. Click Next. | Fix: Replace the path in front matter and the rendered table with 'Apps > Protection > Create Policy > platform > Basics > Apps > Select public apps > Microsoft Teams > Data Protection > Org data notifications'. The omitted steps select the apps the policy applies to. | Source: https://learn.microsoft.com/intune/app-management/configuration/configure-teams-mobile
-->
