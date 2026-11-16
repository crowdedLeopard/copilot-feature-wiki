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
  - date: "2026-11-16"
    note: "Taken offline until a corrected version passes its check: a failed check no longer keeps a page online with a notice."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 48
  unconfirmed: 7
  contradicted: 0
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] front matter: targetDate; What's changing / record: The launch month is October 2026. | Found: "targetDate": "October CY2026" | Fix: Keep the month, but add and cite MC1275312's rollout window: Targeted Release early October to mid-October 2026; General Availability (Worldwide) mid-October to late October 2026. Attribute these as Microsoft's expected rollout dates, not independently verified completion dates.
- [supported, minor] What's changing: opening sentence / behaviour: The earlier intelligent recap experience depended on transcription or recording. | Found: To use intelligent recap users must enable meeting transcription and recording, which admins can manage with Recording & transcription meeting policies in the Teams admin center. | Fix: Cite this background documentation and describe the traditional transcribed recap experience rather than implying that the older privacy article documents a dated product transition. | Source: https://learn.microsoft.com/microsoftteams/privacy/intelligent-recap#what-content-is-used-to-provide-intelligent-recap-and-where-is-it-stored
- [unsupported, major] Why it matters: already in use / behaviour: The feature is already in use wherever Copilot licences exist and the policy has not been changed. | Found: Searched: intelligent recap without transcripts already automatically generated summary. Opened intelligent-recap-without-saving-transcripts and copilot-teams-transcription; they establish availability and meeting controls, not actual use in every eligible tenant. | Fix: Replace 'it is already in use' with 'eligible users can use it without a separate administrator rollout'; distinguish automatic availability from organisers enabling summaries for individual meetings.
- [supported, minor] What's changing: during the meeting / role: Organisers and eligible participants can enable the experience during a meeting. | Found: Organizers, co-organizers, and presenters with a Copilot license can turn it on or off during the meeting by using the meeting controls. | Fix: Name the eligible roles as Copilot-licensed organisers, co-organisers and presenters. Note that MC1275312's in-meeting-controls paragraph says participants cannot change the setting, while its compliance table and the Learn article allow eligible participants; do not silently resolve that source conflict. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts
- [unsupported, major] What's changing: chapters, topics, mentions and audio recap; Risk assessment / behaviour: Chapters, topics, mentions and audio recap are categorically unavailable because they require a transcript. | Found: Searched: Teams recap without transcription chapters topics mentions audio recap unavailable. Read roadmap description and intelligent-recap-calls-meetings excerpts: the roadmap says other recap elements 'may not be available', not that all are always unavailable. | Fix: Use the roadmap's qualified wording: 'Other recap elements, including chapters, topics, mentions and audio recap, may not be available.' Remove the blanket transcript-dependency explanation unless separately documented for each element.
- [unsupported, major] Why it matters: organisations disabled transcription / behaviour: Many organisations disabled transcription specifically because transcripts are discoverable, long-lived verbatim records. | Found: Searched: Teams transcripts works councils; intelligent recap without saving transcripts compliance. Read the feature overview and MC1275312: they describe intended compliance scenarios, not measured organisational adoption or reasons for disabling transcription. | Fix: Replace the historical prevalence claim with the documented use case: 'Microsoft positions this experience for organisations that restrict transcript or recording retention for compliance reasons.'
- [unsupported, major] Why it matters: legal and works councils / behaviour: Legal teams and works councils in several jurisdictions specifically asked for this capability. | Found: Searched: Teams transcripts works councils. Opened intelligent-recap-without-saving-transcripts and read MC1275312; neither attributes this request to legal teams or works councils in any jurisdiction. | Fix: Remove 'which is exactly what legal and works councils have asked for in several jurisdictions'. Frame any potential relevance to those stakeholders as the wiki's analysis, not a reported request.
- [supported, minor] Why it matters; Governance controls: OneDrive retention / applicability: OneDrive retention policies can govern these documents independently of the Teams expiration setting. | Found: When a user changes an item that's subject to retention from a retention policy or a retention label that marks items as a record, or deletes any item subject to retention, the original content is copied to the Preservation Hold library. | Fix: Add this source and explain that expiry or user deletion does not guarantee permanent deletion while retention or a hold preserves a copy. Applicability follows from the feature article placing the summary in a Word file in OneDrive. | Source: https://learn.microsoft.com/purview/retention-policies-sharepoint#how-retention-works-for-sharepoint-and-onedrive
- [supported, minor] Why it matters: organiser leaving; Open questions / behaviour: The summary file follows OneDrive off-boarding when the organiser leaves. | Found: The OneDrive retention period for cleanup of OneDrive begins when a user account is deleted from Microsoft Entra ID. No other action causes the cleanup process to occur, including blocking the user from signing in or removing the user's license. | Fix: Cite the OneDrive lifecycle article and say 'when the organiser's account is deleted' rather than merely 'leaves'. Keep the open question focused on continued Recap access, which the generic file-lifecycle guidance does not establish. | Source: https://learn.microsoft.com/sharepoint/retention-and-deletion
- [supported, minor] Risk assessment: sharing controls / applicability: OneDrive sharing restrictions apply to stored summary documents. | Found: For SharePoint and OneDrive, you create a policy to help prevent sharing of sensitive items with external users via SharePoint and OneDrive. | Fix: Cite this general OneDrive document-control guidance; distinguish restrictions on the stored Word file from the feature-specific licensed-attendee checks in Teams. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [supported, minor] Risk assessment: sensitivity labels / applicability: Sensitivity labels for OneDrive documents can protect these Word files. | Found: When users download or access these files from SharePoint or OneDrive, the sensitivity label and any encryption settings from the label are enforced and remain with the file, wherever it's stored. | Fix: Cite this source and qualify that built-in sensitivity-label support must be enabled and configured; do not imply that every summary automatically receives a label. | Source: https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files
- [supported, minor] Risk assessment: DLP / applicability: OneDrive DLP can govern the stored summary documents. | Found: a Microsoft Purview Data Loss Prevention (DLP) policy that helps prevent users from sharing sensitive items via SharePoint and OneDrive with external users. | Fix: Add this source and state that applicable configured OneDrive DLP policies govern the stored file, not that every tenant already has an effective DLP policy. | Source: https://learn.microsoft.com/purview/dlp-create-policy-spo-odb-external
- [unsupported, major] Risk assessment: Security & identity / behaviour: The feature introduces no new identities. | Found: Searched: intelligent recap without new identities permissions; intelligent recap without no permissions. Read the feature article and Copilot policy documentation; neither inventories service identities or states that none are introduced. | Fix: Remove 'No new identities'. Describe only the documented access model: licensed attendees in the organiser's organisation can access the summary.
- [unsupported, major] Risk assessment: Security & identity / behaviour: The feature introduces no new permissions. | Found: Searched: intelligent recap without new identities permissions; intelligent recap without no permissions. Read intelligent-recap-without-saving-transcripts; it documents attendee access and OneDrive storage but does not state that no permissions are introduced. | Fix: Remove the blanket 'no new permissions' assurance. Retain the documented licensed-attendee access restriction without making claims about the underlying permission changes.
- [unsupported, blocker] Cost and licensing: no metered cost / cost: There is no metered cost. | Found: Searched: intelligent recap without saving transcripts included cost; intelligent recap without metered; intelligent recap no additional cost Copilot. Read the feature, Copilot policy and AI overview articles; none explicitly states that this experience has no metered cost. | Fix: Replace 'no metered cost' with 'Microsoft documents no separate meter for this experience in the feature guidance reviewed in November 2026.' Do not turn the absence of a published meter into a guarantee of no charge.
- [supported, minor] controls[0].api; Governance guidance; Governance controls: expiry row / command: Set-CsTeamsMeetingPolicy -Identity <policy> -IntelligentRecapDocxFileExpirationDays 180 configures the expiration period. | Found: Set-CsTeamsMeetingPolicy -Identity <policyname> -IntelligentRecapDocxFileExpirationDays 180 | Fix: Keep the documented command, but disclose that the linked Set-CsTeamsMeetingPolicy reference still says for this parameter: 'This feature has not been fully released yet, so the setting will have no effect.' Cite both sources and advise checking policy enforcement rather than presenting the conflicting documentation as unanimous. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents
- [supported, minor] controls[1].api; Governance guidance; Governance controls: intelligent recap row / command: Set-CsTeamsMeetingPolicy -Identity <policy> -AllowIntelligentRecap $false disables intelligent recap. | Found: Set-CsTeamsMeetingPolicy -Identity <policyname> -AllowIntelligentRecap $false | Fix: Keep the feature article's command but also report the conflicting parameter-reference note: 'This feature has not been fully released yet, so the setting will have no effect.' Link https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy and qualify the enforcement advice. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#manage-intelligent-recap-without-saving-transcripts
- [supported, minor] controls[2].api; Governance controls: Copilot row / command: Set-CsTeamsMeetingPolicy -Identity <policy> -Copilot supports Enabled, EnabledWithTranscript, EnabledWithTranscriptDefaultOn and Disabled. | Found: On | Enabled ... On with saved transcript required | EnabledWithTranscript ... On with transcript saved by default | EnabledWithTranscriptDefaultOn ... Off | Disabled | Fix: Print an executable example such as 'Set-CsTeamsMeetingPolicy -Identity <policy> -Copilot Enabled' and list alternative values separately, not joined by PowerShell pipeline characters. Note that the parameter reference lists only Enabled and EnabledWithTranscript, whereas this policy guide documents all four. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events
- [supported, minor] Governance guidance: companion meeting memory / behaviour: Meeting memory stores AI-generated meeting knowledge with a default expiration of five years. | Found: The default expiration time for memory files is five years (1,825 days), but admins can customize the expiration time as needed for their organization. | Fix: Add this Microsoft source and state that its meeting-memory documentation is for preview, available only to organisations in Teams TAP. Say 'default expiration of five years', not 'up to five years', because administrators can change it and Purview retention takes precedence. | Source: https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings
-->
