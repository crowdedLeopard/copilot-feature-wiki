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
cost: "low"
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
  - title: "MC1275312: (Updated) Microsoft Teams: AI meeting recap without transcript to meet compliance policies"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1275312"
    kind: "message-center"
  - title: "Intelligent recap in Teams meetings without saving transcripts"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Manage Teams meeting transcription"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    kind: "learn"
  - title: "Memory for Microsoft Teams Meetings"
    url: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
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
related: ["microsoft-teams-automatic-recording-and-transcription-choices-align-with-admin-policies","microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe"]
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
      call: "Set-CsTeamsMeetingPolicy -Identity <policy> -Copilot Enabled"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    note: "Other -Copilot values on the Learn page: EnabledWithTranscript (the default), EnabledWithTranscriptDefaultOn and Disabled."
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
  - date: "2026-11-16"
    note: "Corrected after verification: softened unsupported claims on prior use, recap elements, identities and permissions, and cost; added the MC1275312 rollout window, in-meeting roles and meeting memory preview status."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 60
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "69aca0f54bb304a1e8da763304d7b046"
---

## What's changing

The full intelligent recap experience includes transcription and recordings. This feature adds an alternative: a meeting organiser with a Microsoft 365 Copilot licence can enable an AI summary for a **scheduled meeting** without saving a transcript or recording, from meeting options before the meeting or by Copilot-licensed organisers, co-organisers and presenters during the meeting. After the meeting the **AI summary** appears on the Recap tab for attendees in the organiser's organisation who hold a Copilot licence. The roadmap item says other recap elements, including chapters, topics, mentions and audio recap, may not be available.

The roadmap item describes the in-meeting option as available to organisers and eligible participants. Microsoft's notice MC1275312 is not consistent on this: its in-meeting controls paragraph says participants cannot change the setting, while its compliance table says organisers or participants with Copilot licences can toggle it during the meeting.

Transcription data is held in a service-managed cache during generation and purged within a day; no transcript or recording is retained. The summary is stored as a **read-only Word document in the Meetings folder of the organiser's OneDrive**. It expires after **120 days** by default; administrators can set 1 to 9999 days or no expiry per meeting policy. The documents are indexed for Purview eDiscovery and support legal hold. Organisers can delete the summary from the Recap tab or OneDrive; deleting in one place deletes both. Guests and external attendees cannot view it.

The feature is available automatically to Copilot-licensed users whose meeting policy allows Copilot. The roadmap item lists it as Launched with a target of October CY2026. MC1275312 (updated 27 July 2026) gives Microsoft's expected rollout: Targeted Release from early October to mid-October 2026, and General Availability (Worldwide) from mid-October to late October 2026. The roadmap item lists desktop, Mac, web, iOS and Android.

## Why it matters

Microsoft positions this experience for organisations that restrict transcript or recording retention for compliance reasons. It gives those organisations AI meeting notes without a saved transcript or recording. Legal and employee-representative stakeholders may find that relevant, but that is this wiki's analysis, not a request Microsoft reports.

Eligible users can use it without a separate administrator rollout; organisers then choose, in meeting options or during the meeting, whether a given meeting gets a summary. The compliance question shifts from "do we allow transcripts" to "how long do AI summaries live and where". The summary is stored in the organiser's OneDrive and expires after 120 days by default. The feature article does not say what happens to a summary if the organiser's account is deleted before it expires, so that is a decision to confirm.

## Risk assessment

**Data exposure**
- The summary can contain decisions, names and sensitive topics; Microsoft documents it as viewable by Copilot-licensed attendees in the organiser's organisation. Unlicensed attendees and externals cannot view it, which may surprise participants.
- Stored as a Word file in the organiser's OneDrive, so check whether your OneDrive sharing restrictions, sensitivity labels and DLP policies cover it; the feature article does not say how these apply to summaries, and sensitivity labels need to be enabled and configured for OneDrive files.

**Security & identity**
- Access is documented as attendees in the organiser's organisation who hold a Copilot licence; guests and external attendees cannot access the summary.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Automatically available to Copilot-licensed users whose meeting policy has Copilot enabled. Organisations that promised staff "no AI notes without consent" need to review meeting policies now.
- Confusion about why some attendees cannot see the summary (licence) and why some recap elements, such as chapters, may be missing (no transcript).

## Cost and licensing

- The feature article says organisers with a Microsoft Copilot licence can generate the summary and attendees with a Copilot licence can view it. MC1275312 names the M365 Copilot (Premium) licence.
- Microsoft documents no separate meter for this experience in the feature guidance at the time of writing (November 2026).
- Indirect: policy review, communications, and OneDrive storage for summaries (small).

## Scope

- Scheduled meetings only; not ad hoc meetings or calls.
- Organiser and viewers need Copilot licences and a meeting policy with Copilot enabled; viewers must be in the organiser's organisation.
- Worldwide (standard multi-tenant). Government cloud dates not published for this item.
- All platforms: desktop, Mac, web, iOS, Android.

## Governance guidance

### Before rollout
- Decide the expiry period for AI summaries per meeting policy (default 120 days) in line with your records policy.
- Decide whether any user groups should have intelligent recap disabled entirely (`-AllowIntelligentRecap $false` turns off recap in all modes while keeping Copilot).
- Update meeting etiquette and privacy notices to cover AI summaries without transcripts.

### At rollout
- Set `-IntelligentRecapDocxFileExpirationDays` on the relevant meeting policies.
- Tell organisers where the summary lives, who can see it and how to delete it.

### After rollout
- Sample summaries in eDiscovery to confirm indexing and hold behaviour meet expectations.
- Review the expiry setting after six months against actual use.
- Watch the companion meeting memory feature: Learn documents it as in preview and available only to organisations in the Teams TAP programme, with a default expiration of five years (1,825 days) that administrators can change and that Purview retention policies take precedence over.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Expiry of recap documents for non-transcribed meetings</strong><br><small>User</small><br><small class="controls__note">1 to 9999 days, or -1 for no expiry.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Copilot and other AI › Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -IntelligentRecapDocxFileExpirationDays 180</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#configure-expiration-for-ai-summary-documents" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Intelligent recap on or off</strong><br><small>User</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -AllowIntelligentRecap $false</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts#manage-intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot in meetings and events</strong><br><small>User</small><br><small class="controls__note">Other -Copilot values on the Learn page: EnabledWithTranscript (the default), EnabledWithTranscriptDefaultOn and Disabled.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -Copilot Enabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The expiry is the control that matters for data minimisation: it sets how long the summary document stays in the organiser's OneDrive (120 days by default). Both settings are meeting policy settings, and the Copilot meeting policy page says policies can be applied to groups or individual users. The full parameter list is in the [Set-CsTeamsMeetingPolicy reference](https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy). The feature article says AI summary documents support Purview eDiscovery and legal hold.

## Open questions

- Whether sensitivity labels can be auto-applied to the summary documents.
- Behaviour when the organiser's account is deleted before the summary expires, including whether Recap access continues.
- Government cloud availability.

<!-- rationale
risk: Medium. It is automatically available to Copilot-licensed users and creates a new AI-generated record with its own lifecycle, though no transcript or recording is saved.
cost: Low. It needs a Copilot licence for the organiser and for attendees who view the summary; Microsoft documents no separate meter for it at the time of writing (November 2026), so the known cost is policy review and communications.
impact: High. It is automatically available to Copilot-licensed organisers and attendees whose meeting policy has Copilot enabled, so most Copilot users in a tenant can meet it.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: Cost is Low, meaning indirect costs only, despite the documented Copilot add-on licence requirement. | Found: Prerequisites: An add-on Microsoft Copilot license for intended users. The briefing rates cost Low; the standard defines Low as indirect cost only and Medium as add-on licences for a subset of users. | Fix: Change cost to medium and replace the cost rationale with: "Medium. Organisers and attendees who view the summary need a Copilot licence, documented as an add-on prerequisite. The feature guidance documents no separate meter at the time of writing (November 2026)." | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Data exposure / applicability: Sensitivity-label support needs to be enabled and configured for OneDrive files. | Found: Enable built-in labeling for supported Office files and PDF files in SharePoint and OneDrive so that users can apply your sensitivity labels in Office for the web. | Fix: Add https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files to sources for the statement about enabling sensitivity labels for OneDrive files. | Source: https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files
-->
