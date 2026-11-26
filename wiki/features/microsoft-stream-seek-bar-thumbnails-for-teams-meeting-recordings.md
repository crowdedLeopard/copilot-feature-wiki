---
title: "Microsoft Stream: seek bar thumbnails for Teams meeting recordings"
slug: "microsoft-stream-seek-bar-thumbnails-for-teams-meeting-recordings"
roadmapId: 406910
topic: "modern-work"
products: ["Microsoft Stream"]
summary: "Stream's web video player is planned to show a thumbnail preview when people hover over the seek bar of a Teams meeting recording. Microsoft documents no admin setting for it; no action is needed beyond awareness."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "June CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "none"
licensing:
  model: "included"
  notes: "The Microsoft Stream service description says Stream (on SharePoint) is available to all Microsoft 365 customers through plans that have SharePoint and OneDrive, and that feature availability may vary across plans. Nothing specific to seek bar thumbnails is published."
audiences: ["m365-admin","end-user","change-adoption"]
tags: ["microsoft-stream","teams","user-experience","clipchamp","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Stream: Seek bar thumbnails for Teams meeting recordings"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=406910"
    kind: "roadmap"
  - title: "Microsoft Stream service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-stream"
    kind: "learn"
  - title: "Current features and upcoming roadmap for Clipchamp in Microsoft 365"
    url: "https://learn.microsoft.com/stream/streamnew/features-new-version-stream"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
videos: []
related: ["meeting-policy"]
controls:
  - governs: "Tenant-wide switch for seek bar thumbnails in Stream's player"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting for this feature at the time of writing (November 2026)."
  - governs: "Whether users can record meetings, and so whether there are recordings for thumbnails to appear on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Allows or prevents meeting recording for users assigned the policy. Governs recording itself, not the thumbnails."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2024-10-23T23:15:28"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned seek bar thumbnails in Stream's player for Teams meeting recordings, with licensing from the Stream service description and no documented admin setting."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 38 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected four statements the check could not confirm: removed the claims that the feature leaves storage and access unchanged and the seek bar's on-screen position, and narrowed the autonomy line to what the roadmap describes."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 39 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 39
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "d8409dbb6b29c7e65fb593df44bb98b3"
---

## What's changing

Microsoft plans to add thumbnail previews to the seek bar of Microsoft Stream's video player. According to the roadmap item, hovering over the seek bar at a given point shows a preview of the video content at that timestamp, and the feature is to be made available only for Teams meeting recordings at first. The roadmap lists the web as the platform.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn's current list of video features in Microsoft 365, now titled "Current features and upcoming roadmap for Clipchamp in Microsoft 365", lists other player features such as multi-speed playback for Teams meeting recordings and chapters, but not seek bar thumbnails, at the time of writing (November 2026). Microsoft has not stated whether the thumbnails appear automatically or whether anyone has to turn them on.

The roadmap item's status is In development, with a target of June CY2025 for General Availability and Targeted Release. That target has passed and the status has not moved; the record was last modified on 23 October 2024. No Message center post was supplied for this item.

## Why it matters

For a service owner this is a viewing convenience, not a governance change. It makes long meeting recordings easier to navigate, which may reduce "where in the recording was that?" questions. Teams meeting recordings are uploaded to the organiser's OneDrive (private meetings) or SharePoint (channel meetings), and OneDrive file storage and access permissions apply to them as to other files.

Microsoft has not stated what happens on arrival. The roadmap item has also outlived its June CY2025 target while still marked In development, so treat the timing as uncertain and watch Message center for a rollout notice.

## Risk assessment

**Data exposure**
- The roadmap describes the thumbnails as a preview of the recording's own content shown inside Stream's player. Microsoft has not described how the thumbnail images are produced or whether they are stored apart from the recording file; the recording file follows OneDrive and SharePoint permissions as other files do.

**Security & identity**
- No change described: the roadmap item mentions no new sign-in, permission or sharing behaviour.

**Autonomy & actions**
- The roadmap describes previews displayed when someone hovers over the seek bar; it mentions no autonomous actions.

**Change & support**
- Users who watch meeting recordings on the web see a new hover preview. Microsoft Learn documents no admin setting to turn it off at the time of writing (November 2026), so any question about it goes to the help desk rather than to a policy change.

## Cost and licensing

**Licence.** The Microsoft Stream service description states that Stream (on SharePoint) is available for all Microsoft 365 customers through plans that have SharePoint and OneDrive available, and that feature availability may vary across plans. Seek bar thumbnails are a change to Stream's player, so they fall under that statement; a plan-by-plan entry for this feature is not yet published.

**Meter.** The roadmap item and the service description mention no meter for this feature.

**Indirect costs.** Expect only a short note to users or the help desk.

## Scope

- **Content:** Teams meeting recordings only, according to the roadmap item ("Currently, it will only be made available for Teams meeting recordings").
- **Platform:** Web, as the record lists it.
- **Clouds:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, as the record lists them.
- **Release phase:** General Availability and Targeted Release, as the record lists them.
- **Prerequisites:** Not yet published beyond the Stream licensing above. A recording has to exist for thumbnails to appear, and whether users can record meetings is set by the Teams meeting policy.

## Governance guidance

### Before rollout
- Watch Message center for a post about roadmap item 406910, since the June CY2025 target has passed without a status change.
- Add a line to help desk notes that hover previews on Teams meeting recordings in Stream are a planned player feature with no documented admin setting.

### At rollout
- Open a Teams meeting recording in Stream on the web and hover over the seek bar to confirm the previews appear for your tenant.
- Tell users who review recordings often (trainers, project teams) that they can use the previews to find a point in a long meeting.

### After rollout
- Route any request to switch the previews off to Microsoft support or feedback, as Microsoft Learn documents no admin setting for them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for seek bar thumbnails in Stream's player</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting for this feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings, and so whether there are recordings for thumbnails to appear on</strong><br><small>User</small><br><small class="controls__note">Allows or prevents meeting recording for users assigned the policy. Governs recording itself, not the thumbnails.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant, site or user setting for seek bar thumbnails in Stream's player at the time of writing (November 2026); neither the video feature list for Microsoft 365 nor the Set-SPOTenant reference mentions one. The meeting recording setting governs whether users can record meetings at all, and so whether there are recordings for thumbnails to appear on; it does not switch the thumbnails on or off, and turning it off to avoid thumbnails would remove meeting recording for everyone the policy covers.

## Open questions

- Do seek bar thumbnails appear for all users automatically, or does any setting turn them on? Watch Message center.
- What is the revised target date now that June CY2025 has passed with the item still In development? Watch the roadmap item and Message center.
- Will the thumbnails extend beyond Teams meeting recordings to other videos in OneDrive and SharePoint, as the word "Currently" in the roadmap item suggests may happen?
- Are thumbnail images generated and stored separately from the recording file, and if so, do they count against OneDrive or SharePoint storage and follow the recording's retention?
- Do thumbnails appear for channel meeting recordings saved to the View only folder when channel recording download is blocked?

<!-- rationale
risk: Low. The roadmap describes a cosmetic preview of a recording's own content inside Stream's player, and nothing in the record adds new data access or actions.
cost: Low. Stream comes with Microsoft 365 plans that include SharePoint and OneDrive; licensing specific to seek bar thumbnails is not yet published, and the only cost the sources show is telling users.
impact: Medium. People who watch Teams meeting recordings in Stream on the web would notice the hover preview; other videos are out of scope according to the roadmap item.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: Set-SPOTenant reference / absence: The Set-SPOTenant reference does not mention a seek bar thumbnail setting. | Found: Searched: "Set-SPOTenant" "thumbnail". Fetched the Set-SPOTenant reference and searched its entire text for thumbnail, seek, Stream and Clipchamp; no seek bar thumbnail setting found. StreamLaunchConfig describes only the Stream Launch config state. | Fix: Add https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant to sources for the reference explicitly mentioned in Governance controls.
-->
