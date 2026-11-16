---
title: "Microsoft Teams: intelligent recap without saving a transcript"
slug: "teams-intelligent-recap-without-saving-transcript"
roadmapId: 558286
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Copilot-licensed organisers can get an AI summary of a scheduled meeting without retaining a transcript or recording. The summary is a read-only Word file in the organiser's OneDrive that expires after 120 days by default."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "none"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Requires a Microsoft 365 Copilot licence for the organiser and for attendees who view the summary. Available automatically where the meeting policy has Copilot enabled."
audiences: ["m365-admin","compliance","service-owner","end-user","change-adoption"]
tags: ["teams","intelligent-recap","copilot","transcripts","meeting-policy","retention","ediscovery","onedrive"]
sources:
  - title: "Microsoft 365 Roadmap 558286"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558286"
    kind: "roadmap"
  - title: "Intelligent recap in Teams meetings without saving transcripts"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Expiry of recap documents for non-transcribed meetings (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents"
    kind: "learn"
  - title: "Intelligent recap on or off (PowerShell)"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#manage-intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Copilot in meetings and events (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    kind: "learn"
videos: []
related: ["teams-ai-generated-meeting-memory","purview-retention-last-accessed-sharepoint-onedrive"]
controls:
  - governs: "Expiry of recap documents for non-transcribed meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Copilot and other AI > Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy> -IntelligentRecapDocxFileExpirationDays 180"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents"
    note: "1 to 9999 days, or -1 for no expiry."
  - governs: "Intelligent recap on or off"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy> -AllowIntelligentRecap $false"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#manage-intelligent-recap-without-saving-transcripts"
  - governs: "Copilot in meetings and events"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy> -Copilot Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Intelligent recap used to depend on a saved transcript or recording. Now a meeting organiser with a Microsoft 365 Copilot licence can enable an AI summary for a **scheduled meeting** without saving either: from meeting options before the meeting, or during the meeting by the organiser or an eligible participant. After the meeting the **AI summary** appears on the Recap tab for attendees in the organiser's organisation who hold a Copilot licence; chapters, topics, mentions and audio recap are not available because they need a transcript.

Transcription data is held in a service-managed cache during generation and purged within a day; no transcript or recording is retained. The summary is stored as a **read-only Word document in the Meetings folder of the organiser's OneDrive**. It expires after **120 days** by default; administrators can set 1 to 9999 days or no expiry per meeting policy. The documents are indexed for Purview eDiscovery and support legal hold. Organisers can delete the summary from the Recap tab or OneDrive; deleting in one place deletes both. Guests and external attendees cannot view it.

The feature is available automatically to Copilot-licensed users whose meeting policy allows Copilot, and launched in October 2026 across desktop, web and mobile.

## Why it matters

Many organisations disabled transcription because transcripts are discoverable, long-lived verbatim records. This feature gives them AI notes without the verbatim record, which is exactly what legal and works councils have asked for in several jurisdictions. It is also on by default for Copilot users, so it is already in use if you have Copilot licences and have not changed the policy.

The compliance question shifts from "do we allow transcripts" to "how long do AI summaries live and where". A summary in the organiser's OneDrive is subject to that person's OneDrive retention and to the 120-day expiry; when the organiser leaves, the file follows the OneDrive off-boarding process. Those are decisions to make deliberately.

## Risk assessment

**Data exposure**
- The summary can contain decisions, names and sensitive topics; it is viewable by Copilot-licensed attendees in the organisation only. Unlicensed attendees and externals cannot see it, which may surprise participants.
- Stored in OneDrive, so sharing controls, sensitivity labels and DLP for OneDrive apply.

**Security & identity**
- No new identities or permissions. Access follows meeting attendance plus Copilot licence.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Default on for Copilot users. Organisations that promised staff "no AI notes without consent" need to review meeting policies now.
- Confusion about why some attendees cannot see the summary (licence) and why chapters are missing (no transcript).

## Cost and licensing

- Included with **Microsoft 365 Copilot** licences; no metered cost.
- Indirect: policy review, communications, and OneDrive storage for summaries (small).

## Scope

- Scheduled meetings only; not ad hoc meetings or calls.
- Organiser and viewers need Copilot licences and a meeting policy with Copilot enabled; viewers must be in the organiser's organisation.
- Worldwide (standard multi-tenant). Government cloud dates not published for this item.
- All platforms: desktop, Mac, web, iOS, Android.

## Governance guidance

**Before rollout**
- Decide the expiry period for AI summaries per meeting policy (default 120 days) in line with your records policy.
- Decide whether any user groups should have intelligent recap disabled entirely (`-AllowIntelligentRecap $false` turns off recap in all modes while keeping Copilot).
- Update meeting etiquette and privacy notices to cover AI summaries without transcripts.

**At rollout**
- Set `-IntelligentRecapDocxFileExpirationDays` on the relevant meeting policies.
- Tell organisers where the summary lives, who can see it and how to delete it.

**After rollout**
- Sample summaries in eDiscovery to confirm indexing and hold behaviour meet expectations.
- Review the expiry setting after six months against actual use.
- Watch the companion meeting memory feature, which stores AI-generated meeting knowledge for up to five years by default.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Expiry of recap documents for non-transcribed meetings</strong><br><small>User</small><br><small class="controls__note">1 to 9999 days, or -1 for no expiry.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Copilot and other AI › Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -IntelligentRecapDocxFileExpirationDays 180</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Intelligent recap on or off</strong><br><small>User</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -AllowIntelligentRecap $false</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#manage-intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot in meetings and events</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -Copilot Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The expiry is the control that matters for data minimisation: without it the summary document persists in the organiser's OneDrive. Both settings are meeting policy attributes, so they apply through policy assignment rather than tenant-wide, and the full parameter list is in the [Set-CsTeamsMeetingPolicy reference](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy). Purview eDiscovery and OneDrive retention policies cover the documents independently of the expiry.

## Open questions

- Whether sensitivity labels can be auto-applied to the summary documents.
- Behaviour when the organiser's account is deleted before the summary expires.
- Government cloud availability.

<!-- rationale
risk: Medium. On by default for Copilot users and creates a new AI-generated record with its own lifecycle, though it removes the heavier transcript record.
cost: None. Included with Copilot licences.
impact: High. Changes default behaviour for every Copilot-licensed organiser and attendee.
-->
