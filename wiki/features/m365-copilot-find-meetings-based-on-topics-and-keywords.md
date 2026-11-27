---
title: "Microsoft Copilot (Microsoft 365): find meetings by topic or keyword in meeting body, chat and transcript"
slug: "m365-copilot-find-meetings-based-on-topics-and-keywords"
roadmapId: 559110
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot can now find a user's meetings by topic or keyword, searching the meeting body, meeting chat and, for the last two months, transcripts. No admin switch for it is documented; tell users and check who can transcribe."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Listed in the Microsoft 365 Copilot release notes. Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible plans. Copilot Search is included as part of the Microsoft Copilot license. Microsoft Copilot Search requires an eligible Microsoft Copilot licence and is not included with Microsoft Copilot Chat; users without that licence retain Microsoft Search."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["m365-copilot","meeting-transcripts","meeting-policy","teams","oversharing"]
sources:
  - title: "Microsoft 365 Roadmap 559110"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559110"
    kind: "roadmap"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Microsoft Copilot Search frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-faq"
    kind: "learn"
  - title: "Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-overview"
    kind: "learn"
  - title: "Data, Privacy, and Security for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy"
    kind: "learn"
  - title: "License options for Microsoft Copilot"
    url: "https://learn.microsoft.com/copilot/plan/copilot-license-options"
    kind: "learn"
  - title: "Configure Microsoft Copilot settings in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center"
    kind: "learn"
  - title: "Update copilotPolicySetting"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/api/admin-settings/copilotpolicysetting-update"
    kind: "docs"
  - title: "Teams meeting recording and transcript storage and permissions in OneDrive and SharePoint"
    url: "https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change"
    kind: "learn"
  - title: "Whether users can transcribe meetings, which transcript matches depend on (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Microsoft Copilot licence (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
videos: []
related: ["meeting-transcripts","meeting-policy","intelligent-recap"]
controls:
  - governs: "Switch to turn meeting search by topic and keyword on or off on its own"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting specific to this search at the time of writing (November 2026)."
  - governs: "Whether users can transcribe meetings, which transcript matches depend on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $false"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Decides whether transcripts are created, not whether Copilot searches existing ones. On by default for new policies."
  - governs: "Which users hold a Microsoft Copilot licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Governs access to Microsoft Copilot as a whole, not this feature alone."
confidence: "medium"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-07-15T22:55:27"
changes:
  - date: "2026-11-27"
    note: "New briefing: launched Copilot meeting search by topic and keyword across meeting body, chat and transcripts."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-27"
    note: "Corrected licensing: Copilot Search is included with the Microsoft Copilot licence and not with Copilot Chat; narrowed the undocumented-sources statement and reworded who governs transcript access."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 57 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 57
  confirmed: 57
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "dcb365dc33d4acc7c75a95ea677f362b"
---

## What's changing

Copilot can find meetings from a topic or keyword. According to the Microsoft 365 Copilot release notes, Copilot now searches meetings using topics or keywords found in the meeting body, chat messages and transcription text, and the search on transcript text covers meetings in the last two months. The release notes say that previously meeting searches were limited and did not include chat or transcript content.

The user enters a topic or keyword, reviews the list of meetings that include it in the body, chat or transcript, and selects a meeting to see its details and related content. Microsoft Learn describes the feature only in its release note, so how results are ranked, how this feature selects meeting-body, chat and transcript sources for an individual result, and whether events and calls are included are not described.

The roadmap item is **Launched**, with a target of June CY2026, in General Availability, for the Worldwide (Standard Multi-Tenant) cloud on Android, Desktop, iOS and Mac. The release notes list it in the September 23, 2026 entry (updates released between August 26, 2026 and September 22, 2026), on Android, Windows, iOS and Mac. The release notes page says Copilot features roll out gradually to a subset of users in a tenant before expanding across the organisation.

## Why it matters

Meeting chat and transcripts hold the unplanned part of a meeting: side remarks, figures read aloud, names of customers and staff. A keyword typed into Copilot can now lead straight to the meeting where something was said. Nothing is newly reachable, because Copilot works within the user's existing permissions, but content that was effectively buried becomes easy to find. Expect questions from users who see a meeting turn up because of something said in it, and from compliance teams about how long transcripts are kept.

Microsoft describes the change as already live for Copilot users, with no admin step. If nobody acts, users with Copilot get the search as it rolls out to them. Teams meeting policies govern whether users can transcribe meetings; sharing and file permissions govern access to stored transcripts ([Teams meeting recording and transcript storage and permissions in OneDrive and SharePoint](https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change)).

## Risk assessment

**Data exposure**
- Transcripts and meeting chat become searchable by keyword through Copilot for anyone who can already open them. Microsoft states that Copilot only surfaces organisational data to which individual users have at least view permissions, so what a user can find is bounded by the meeting chat and transcripts they can already open.
- Transcripts are stored with meeting recordings in OneDrive and SharePoint storage, so sharing of those files governs who can reach them.

**Security & identity**
- No change: the feature works under the signed-in user's permissions as Copilot does generally; no new identity or consent is described.

**Autonomy & actions**
- No change: the feature finds and lists meetings; the release note describes no action taken on the user's behalf.

**Change & support**
- Users may be surprised when a meeting is matched on transcript text, or when an older meeting is not, because transcript search covers the last two months only. Prepare a short note for the service desk.
- Microsoft Learn documents no admin setting specific to this search at the time of writing (November 2026), so a request to switch only this off cannot be met with a documented toggle.

## Cost and licensing

The feature appears in the Microsoft 365 Copilot release notes, which give no licence or charge for it. The [License options for Microsoft Copilot](https://learn.microsoft.com/copilot/plan/copilot-license-options) page states that Microsoft Copilot is available with Microsoft 365 E7 or as an add-on for eligible commercial, US Government and education subscription plans. The [Microsoft Copilot Search FAQ](https://learn.microsoft.com/copilot/manage/copilot-search-faq) states that there's no additional cost for Microsoft Copilot Search itself and that it's included as part of the Microsoft Copilot license. Microsoft Copilot Search requires an eligible Microsoft Copilot licence and is not included with Microsoft Copilot Chat; users without that licence retain Microsoft Search.

No meter is documented for this feature at the time of writing. The indirect cost is communication to Copilot users and service-desk time.

## Scope

- **Users:** users with an eligible Microsoft Copilot licence; Microsoft Copilot Search is not included with Microsoft Copilot Chat, and users without that licence retain Microsoft Search.
- **Data:** meeting body, meeting chat and transcription text; transcript search covers meetings in the last two months.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists.
- **Platforms:** Android, Desktop, iOS and Mac on the roadmap; Android, Windows, iOS and Mac in the release notes.
- **Rollout:** status Launched; Copilot features roll out gradually to a subset of users in a tenant before expanding across the organisation.
- **Prerequisite for transcript matches:** a transcript must exist, which depends on the Teams meeting policy **Transcription** setting.

## Governance guidance

### Before rollout
- Tell Copilot users that meetings can now be found by words used in meeting chat and transcripts from the last two months.
- Check which Teams meeting policies have **Transcription** turned on (Teams admin center > Meetings > Meeting policies), since only transcribed meetings can be matched on transcript text.
- Confirm which users hold a Microsoft Copilot licence (Microsoft 365 admin center > Billing > Licenses) so you know who receives the change.

### At rollout
- Brief the service desk that transcript matching is limited to the last two months and to meetings the user can already open.

### After rollout
- Collect user reports of unexpected matches and trace each one to the meeting's invite list or transcript sharing.
- Watch the Microsoft 365 Copilot release notes and Message center for a setting specific to this search.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch to turn meeting search by topic and keyword on or off on its own</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting specific to this search at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which transcript matches depend on</strong><br><small>User</small><br><small class="controls__note">Decides whether transcripts are created, not whether Copilot searches existing ones. On by default for new policies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $false</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users hold a Microsoft Copilot licence</strong><br><small>User</small><br><small class="controls__note">Governs access to Microsoft Copilot as a whole, not this feature alone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns this meeting search on or off on its own at the time of writing (November 2026). The Copilot settings page in the Microsoft 365 admin center lists Copilot actions such as image generation and Copilot in Teams meetings, but none for finding meetings. The transcription policy decides whether transcripts are created; Microsoft does not describe it as a control over this search. Transcription is both a per-organiser and a per-user policy setting. Licence assignment decides who has Microsoft Copilot at all, not this feature alone.

## Open questions

- Will Microsoft add a Copilot setting or Graph policy setting to turn this search off separately? Watch Message center.
- Does the search include Teams calls, webinars and town halls, or meetings only?
- Why did the roadmap target June CY2026 while the release notes list the feature in the September 23, 2026 entry, and did some tenants receive it earlier?

<!-- rationale
risk: Low. Copilot surfaces only data the user already has at least view permission to; the change makes existing meeting chat and transcripts easier to find, not newly reachable.
cost: Low. The feature is listed in the Microsoft 365 Copilot release notes with no separate charge or meter documented; the cost is user communication and admin time.
impact: Medium. Copilot users notice that meeting searches now match chat and transcript text; administrators and other users see no change.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance guidance: Before rollout, transcription checklist / admin-path: The transcription-policy checklist sends administrators to Teams admin center > Meetings > Meeting policies. | Found: In the left navigation of the Teams admin center, go to Meetings > Meeting policies. Select the policy that you want to edit or create a new one. Toggle Transcription On or Off. | Fix: Complete the parenthetical checklist route as 'Teams admin center > Meetings > Meeting policies > policy > Transcription', matching controls[1].ui and https://learn.microsoft.com/microsoftteams/meeting-transcription-captions. | Source: https://learn.microsoft.com/microsoftteams/meeting-transcription-captions
- [supported, minor] Governance guidance: Before rollout, licence checklist / admin-path: The licence-assignment checklist sends administrators to Microsoft 365 admin center > Billing > Licenses. | Found: In the admin center, go to the Billing > Licenses page. Select a product. On the product details page, select Assign licenses. | Fix: Complete the licence-inspection checklist route as 'Microsoft 365 admin center > Billing > Licenses > product', reaching the product's assignments as documented at https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users
-->
