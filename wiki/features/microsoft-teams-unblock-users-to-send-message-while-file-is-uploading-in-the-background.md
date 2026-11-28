---
title: "Microsoft Teams: send chat messages while a file uploads in the background"
slug: "microsoft-teams-unblock-users-to-send-message-while-file-is-uploading-in-the-background"
roadmapId: 560813
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams is rolling out background file uploads so users can keep sending messages while a file uploads. Microsoft says it is on by default for all tenants and asks for no admin action; plan user communication."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The Teams service description says Teams is licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, and lists Chat as available in each plan column. No licence or price specific to this feature is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","file-upload","user-experience","onedrive","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 560813"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560813"
    kind: "roadmap"
  - title: "MC1317836: (Updated) Microsoft Teams: Unblock users to send message while file is uploading in the background"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1317836"
    kind: "message-center"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Isolation and access control in Microsoft 365"
    url: "https://learn.microsoft.com/compliance/assurance/assurance-isolation-in-microsoft-365"
    kind: "learn"
  - title: "Teams settings and policies reference"
    url: "https://learn.microsoft.com/microsoftteams/settings-policies-reference"
    kind: "learn"
  - title: "Set-CsTeamsMessagingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmessagingpolicy"
    kind: "learn"
  - title: "Limits and specifications for Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/limits-specifications-teams"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "A tenant or policy switch for background file uploads in Teams"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice says the feature is enabled by default for all tenants. No admin setting for it is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-08-03T22:55:03"
changes:
  - date: "2026-11-21"
    note: "First briefing for roadmap item 560813, using the roadmap record and Message Center notice MC1317836 updated 3 November 2026."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the prerequisite statement: no admin role specific to this change is documented, and existing chat file sharing requires OneDrive for Business, tied to the SharePoint licence."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 51 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6e0cf9414ed8bc49b2903cdd7248af72"
---

## What's changing

Teams will let users keep sending messages while a file is still uploading. Today the roadmap item says large file sharing blocks users until the upload finishes; with this change the upload runs in the background and the message box is no longer blocked.

Microsoft Learn has no page for this feature at the time of writing (November 2026), so what follows about behaviour is the roadmap description and Microsoft's notice MC1317836. The notice says files are stored and shared as before, and that existing compliance, retention and security policies remain unchanged. It says the feature is enabled by default for all tenants and that no action is required.

The roadmap record gives the status as Rolling out with a target of August CY2026, for Desktop, Mac and Web, in Targeted Release and General Availability, in Worldwide, GCC, GCC High and DoD. The notice, updated 3 November 2026, gives a later timeline: Targeted Release rollout began in early August 2026 and was expected to complete by mid-August 2026. General Availability (Worldwide) rollout begins in mid-August 2026 and is expected to complete by end of November 2026. The notice also lists Mobile (iOS, Android) as a platform, which the roadmap record does not. The two sources differ, and the notice is the later one for rollout timing.

## Why it matters

Teams users who send files will see different behaviour in the compose box, and Microsoft's notice says no administrator action is required. The practical effect is on users and the help desk: people can send a message while a file is still uploading, so expect questions about what recipients see in that interval. Microsoft's notice recommends telling users and updating internal training or support documentation that refers to file-sharing workflows.

Because Microsoft states the default is on and requires no action, doing nothing means users get the change as the rollout reaches the tenant, with General Availability (Worldwide) expected to complete by end of November 2026. Microsoft has not described how an interrupted or failed upload is shown, so brief the service desk to collect examples rather than assume.

## Risk assessment

**Data exposure**

- Microsoft's notice says there are no changes to how files are stored or shared. Learn states that files shared in a private chat or a chat during a meeting or call are stored in the OneDrive for work or school account of the user who shares the file, and files shared in a channel are stored in the team's SharePoint site, so the existing OneDrive and SharePoint locations apply.

**Security & identity**

- No change is described: the notice says existing compliance, retention and security policies remain unchanged, and it describes no new permission or identity.

**Autonomy & actions**

- No change: the feature changes when a user can send a message, not what any agent or app does.

**Change & support**

- Users will see a different compose experience during uploads, so brief them and the service desk. Microsoft has not said how a message sent during an upload is shown to recipients, or how a failed upload is reported to the sender; ask pilot users to report what they see.
- Microsoft Learn documents no tenant-level switch for this behaviour at the time of writing (November 2026), so raise problems with Microsoft support.

## Cost and licensing

The Teams service description says Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, and its feature table shows Chat as Yes for Business, Enterprise, GCC, GCC High, DoD and Education columns. Microsoft's notice names no licence for this change and no charge.

A licence or price specific to this feature is not yet published, and no meter is documented for it at the time of writing (November 2026). The indirect cost is admin and help-desk time for communication and documentation updates, which the notice recommends.

## Scope

Microsoft's notice says all Microsoft Teams users who send files in chats or channels are affected, on Desktop (Windows, Mac), Web and Mobile (iOS, Android). The roadmap record lists Desktop, Mac and Web.

The record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the release phases Targeted Release and General Availability. The notice's General Availability schedule is headed Worldwide and gives no separate schedule for GCC, GCC High or DoD. Rollout dates are in What's changing.

Microsoft states the feature is enabled by default for all tenants. No administrator role specific to this change is documented. Existing chat file sharing requires OneDrive for Business, which is tied to the SharePoint licence ([Limits and specifications for Microsoft Teams](https://learn.microsoft.com/microsoftteams/limits-specifications-teams#storage)).

## Governance guidance

### Before rollout

- Tell users, through your usual Teams adoption channel, that they can keep sending messages while a file uploads, using Microsoft's notice MC1317836 as the source.
- Update internal training and support documentation that describes file-sharing workflows in Teams, as the notice recommends.
- Brief the service desk to collect examples of messages sent during an upload that are shown unexpectedly, and to report them to Microsoft support.

### At rollout

- Watch the Message center for further updates to MC1317836, because its timeline has already moved once.
- Check a pilot user's Teams client on Desktop, Web and Mobile to see the new behaviour once it appears.

### After rollout

- Review help-desk tickets about file uploads in the weeks after the General Availability (Worldwide) window ends, expected by end of November 2026.
- Confirm with Microsoft support, for any tenant in GCC, GCC High or DoD, when the change reaches that cloud.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>A tenant or policy switch for background file uploads in Teams</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice says the feature is enabled by default for all tenants. No admin setting for it is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant or policy setting for this behaviour at the time of writing (November 2026), consistent with the notice saying the feature is enabled by default for all tenants. The Teams settings and policies reference describes messaging policies as controlling which chat and channel messaging features are available to users, and the Set-CsTeamsMessagingPolicy reference lists no parameter for upload behaviour.

The notice says there are no changes to how files are stored or shared.

## Open questions

- What do recipients see when a message is sent while its file is still uploading, and what does the sender see if the upload fails? Watch the Teams documentation and MC1317836.
- When will the change reach GCC, GCC High and DoD, which the roadmap record lists? The notice gives a General Availability (Worldwide) schedule only. Watch the roadmap item and Message center.
- Will Microsoft document an administrator control for this behaviour? None is documented at the time of writing.

<!-- rationale
risk: Low. Microsoft's notice MC1317836 says files are stored and shared as before and compliance, retention and security policies are unchanged, so the change stays inside existing boundaries.
cost: Low. The only cost the sources show is admin time to brief users and update support documentation; the notice names no licence or charge, and Learn publishes nothing specific to this feature.
impact: High. The notice says all Teams users who send files in chats or channels are affected, and the message box no longer blocks during an upload, which is a change to default behaviour.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / record: Targeted Release rollout began in early August 2026. | Found: Targeted Release: Rollout will begin in early August 2026 (previously early July) | Fix: Replace 'Targeted Release rollout began in early August 2026' with 'Targeted Release rollout was scheduled to begin in early August 2026'. The notice supplies a planned start, not confirmation that rollout began.
-->
