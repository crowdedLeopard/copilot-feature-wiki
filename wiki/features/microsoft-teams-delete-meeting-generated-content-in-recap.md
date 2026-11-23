---
title: "Microsoft Teams: organisers can delete meeting recording, transcript and AI notes from the recap"
slug: "microsoft-teams-delete-meeting-generated-content-in-recap"
roadmapId: 557170
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Teams meeting organisers can now delete a meeting's recording, transcript, AI summary and notes from the recap page. No admin switch is documented, so check retention and expiry settings."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Desktop"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Teams use requires a Teams licence. No requirement specific to the recap delete button is published. Intelligent recap separately requires Teams Premium or Microsoft Copilot; recap without saved transcripts requires Microsoft Copilot."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","m365-copilot","intelligent-recap","meeting-transcripts","meeting-memory","meeting-policy","retention","ediscovery","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 557170"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557170"
    kind: "roadmap"
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Intelligent recap in Teams meetings without saving transcripts"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Memory for Microsoft Teams Meetings"
    url: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
    kind: "learn"
  - title: "Manage the Meeting Recaps app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-recaps-app"
    kind: "learn"
  - title: "Compliance"
    url: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-compliance"
    kind: "learn"
  - title: "Manage Teams recording expiration policy"
    url: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    kind: "learn"
  - title: "Teams meeting recording and transcript storage and permissions in OneDrive and SharePoint"
    url: "https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Learn about retention for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/retention-policies-sharepoint"
    kind: "learn"
  - title: "Manage Teams licenses"
    url: "https://learn.microsoft.com/microsoftteams/user-access"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","teams-ai-generated-meeting-memory","meeting-transcripts","meeting-policy","ediscovery"]
controls:
  - governs: "Tenant or policy switch for the recap delete button"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026). Meeting policy settings below govern transcripts and expiry, not the button."
  - governs: "Whether users can transcribe meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Decides whether transcripts exist to be deleted; it is not a button-specific switch."
  - governs: "Whether recordings and transcripts expire automatically, and after how many days"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Recording & transcription > Recordings and transcriptions automatically expire"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -NewMeetingRecordingExpirationDays <days>"
      docs: "https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy"
    note: "Learn says changes affect only newly created recordings and transcripts, and that users can change the expiry of recordings they control."
  - governs: "Expiry of AI summary documents for meetings without saved transcripts"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Copilot and other AI > Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policyname> -IntelligentRecapDocxFileExpirationDays 180"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    note: "Applies to recap without saving transcripts; Learn gives 1 to 9999 days, or -1 for no expiration."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-08T23:04:12"
changes:
  - date: "2026-11-23"
    note: "New briefing on the recap delete button for meeting organisers, with retention and expiry controls."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 55 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: licensing now Teams-included, recording storage and Purview retention statements narrowed to what Learn says, and the policy-setting claim limited to the recap delete button."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 61 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cdc012e697330e1a27d24ea4a6f2cd1d"
---

## What's changing

Teams has a new delete button on the meeting recap page. The roadmap item states that meeting organisers can use it to delete the meeting's generated content: the recording, the transcript, the AI summary and the notes. It adds that files shared in the meeting are not deleted.

The roadmap record gives the status as Launched, with a target of May CY2026, release phases General Availability and Targeted Release, for Worldwide (Standard Multi-Tenant), GCC and GCC High, on desktop. Microsoft Learn has no page for the button at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description.

Two Learn pages describe nearby delete actions. The meeting memory page says an organiser deletes meeting memory by deleting the meeting recap: open the **…** menu on the recap and select **Delete recap content**. That page says meeting memory is in preview and only available to organisations in the Teams TAP programme. The page on intelligent recap without saving transcripts says organisers can delete the AI summary from the **Recap** tab or from the Word document in OneDrive, and that deleting it in either place deletes it in the other. Neither page says it describes this roadmap item.

## Why it matters

The decision to remove a meeting's recording, transcript and AI notes now sits with each organiser. For a records or compliance owner, that matters more than the feature's size.

Purview retention covers files in OneDrive, SharePoint and SharePoint Embedded; deleting an item subject to retention preserves its original content for compliance ([Learn about retention for SharePoint and OneDrive](https://learn.microsoft.com/purview/retention-policies-sharepoint)). The exact set of artifacts removed by the recap button remains to be confirmed. The roadmap record and Learn describe no admin switch for the button, so if nobody acts, organisers of launched tenants can use it. Plan on that: test the retention behaviour and tell organisers what the button removes.

## Risk assessment

**Data exposure**
- Deleting reduces what the organisation holds rather than exposing more. For non-channel meetings, recordings normally save to the organiser's OneDrive; channel meeting recordings save to the channel's SharePoint site. If the organiser has no OneDrive, storage falls back to a co-organiser or the recording initiator ([Teams meeting recording and transcript storage and permissions](https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change)).
- For ordinary non-channel meetings, other internal attendees normally have read access to the recording; some participants in large meetings may not receive access automatically, and channel meetings inherit channel permissions.
- The roadmap says shared files in the meeting are not deleted, so files shared in the meeting remain after the recap content is gone.

**Security & identity**
- No new data access is described: the roadmap describes deletion only. Who counts as an organiser for the button, beyond the roadmap's word 'organizers', is not stated.

**Autonomy & actions**
- The roadmap describes an organiser selecting the button. It does not describe automatic or agent-driven deletion.

**Change & support**
- Retention and legal hold are the main exposure. Purview retention covers files in OneDrive, SharePoint and SharePoint Embedded, and deleting an item subject to retention preserves its original content for compliance ([Learn about retention for SharePoint and OneDrive](https://learn.microsoft.com/purview/retention-policies-sharepoint)). The exact set of artifacts removed by the recap button remains to be confirmed.
- Learn notes that end users can modify the expiration date of recordings they control, so expiry settings are not legal protection on their own.
- Learn says meeting memory is not automatically deleted if the transcript or recording is deleted or expired; the route it documents for removing memory is deleting the recap content. Expect support questions about what the button removed and what remained.

## Cost and licensing

Microsoft's pages name no licence or meter for the delete button itself. Teams use requires a Teams licence ([Manage Teams licenses](https://learn.microsoft.com/microsoftteams/user-access)). Intelligent recap requires Teams Premium or Microsoft Copilot, and AI-generated recap experiences including audio and video recap need a Microsoft Copilot licence ([Intelligent recap for Teams calls, meetings, and events](https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings); [Manage the Meeting Recaps app](https://learn.microsoft.com/microsoftteams/manage-meeting-recaps-app)). Recap without saving transcripts needs an organiser with a Microsoft Copilot licence ([Intelligent recap in Teams meetings without saving transcripts](https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts)).

A licence specific to the delete button is not yet published, and no meter is documented for it at the time of writing (November 2026). The indirect cost is admin time: reviewing retention and expiry settings and briefing organisers and the service desk.

## Scope

The roadmap names meeting organisers as the people who can delete. The record lists Worldwide (Standard Multi-Tenant), GCC and GCC High, the desktop platform, and the release phases General Availability and Targeted Release. A cloud the record does not list is not thereby excluded; Microsoft has not said.

The recap itself depends on policy. The full intelligent recap experience requires transcription; intelligent recap without saving transcripts can generate an AI summary even when recording and transcription are not enabled. If recording is turned off, users get recap without the recording, speakers, topics and chapters. For non-channel meetings, recordings normally save to the organiser's OneDrive; channel meeting recordings save to the channel's SharePoint site. If the organiser has no OneDrive, storage falls back to a co-organiser or the recording initiator. AI summaries from recap without saving transcripts are stored in the organiser's OneDrive.

## Governance guidance

### Before rollout
- Check which Teams meeting policies turn Transcription on, because transcripts exist only where it is on (second controls row).
- Review the recording and transcript expiry, and the AI summary document expiry, so organiser deletion is not your only route to removing content (third and fourth controls rows).
- Ask your compliance team to test, on a pilot meeting, whether content deleted from the recap is preserved under your Purview retention policies, and which artifacts the button removes.

### At rollout
- Tell organisers what the button deletes (recording, transcript, AI summary and notes) and that files shared in the meeting remain, as the roadmap states.
- Brief the service desk that no policy setting specifically for the recap delete button is documented as of November 2026.

### After rollout
- Review the pilot result against your retention and eDiscovery obligations, and record whether deleted recap content reached the Preservation Hold library.
- Watch the Teams meeting policy reference and Message center for a setting that governs the button.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant or policy switch for the recap delete button</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). Meeting policy settings below govern transcripts and expiry, not the button.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings</strong><br><small>User</small><br><small class="controls__note">Decides whether transcripts exist to be deleted; it is not a button-specific switch.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether recordings and transcripts expire automatically, and after how many days</strong><br><small>User</small><br><small class="controls__note">Learn says changes affect only newly created recordings and transcripts, and that users can change the expiry of recordings they control.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Recording &amp; transcription › Recordings and transcriptions automatically expire <a href="https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -NewMeetingRecordingExpirationDays &lt;days&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Expiry of AI summary documents for meetings without saved transcripts</strong><br><small>User</small><br><small class="controls__note">Applies to recap without saving transcripts; Learn gives 1 to 9999 days, or -1 for no expiration.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Copilot and other AI › Set a default expiration time for Intelligent Recap .docx files for non-transcribed meetings <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policyname&gt; -IntelligentRecapDocxFileExpirationDays 180</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No policy setting specifically for the recap delete button is documented as of November 2026, which is the first row. These rows document transcription and expiration controls, not a button-specific switch.

Where Purview retention applies, Learn says file retention takes precedence over a Teams recording expiration policy. If meeting memory remains after other content is deleted, a Teams admin can delete a memory file with `Remove-AIGeneratedKnowledge -ThreadId <String> -CallId <String>` as the meeting memory page documents. The recording expiry setting only affects newly created recordings and transcripts.

## Open questions

- Which artifacts does the recap delete button remove, and are they preserved under Purview retention and legal hold where a policy applies? Watch the Teams recap pages on Microsoft Learn.
- Will Microsoft add a meeting policy setting or admin control for the button? Watch the Set-CsTeamsMeetingPolicy reference and Message center.
- Can deleted recap content be recovered, and does the button also delete meeting memory and the OneDrive AI summary document? Watch the recap pages on Microsoft Learn.
- Does the button need any licence beyond Teams itself? Watch the Teams licensing pages.

<!-- rationale
risk: Medium. Organisers can remove a meeting's recording, transcript and AI notes themselves, and the exact set of artifacts the button removes remains to be confirmed against your Purview retention settings.
cost: Low. No licence or meter is documented for the delete button; the cost shown is admin time. Intelligent recap requires Teams Premium or Microsoft Copilot.
impact: Medium. Meeting organisers who use Teams recap see the button, and attendees lose access to anything an organiser deletes.
-->

<!-- verifier-findings (2026-11-23, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / absence: Learn does not explicitly document this roadmap item's full delete action, although it documents related recap deletion. | Found: Searched: Teams delete recap content 557170 policy license; Teams delete recap content recording notes. Opened intelligent-recap-calls-meetings, intelligent-recap-without-saving-transcripts and ai-archive-teams-meetings; no explicit identification of this roadmap item. | Fix: Replace 'Microsoft Learn has no page for the button at the time of writing (November 2026)' with 'Microsoft Learn documents related recap deletion actions but does not explicitly identify them with this roadmap item as of November 2026'. Keep the subsequent description of those related actions.
- [supported, minor] controls[2].ui; Governance controls: recording expiry row / admin-path: Recording expiry is at Teams admin center > Meetings > Meeting policies > Recording & transcription > Recordings and transcriptions automatically expire. | Found: under Meetings > Meeting policies > Recording & transcription. ... After turning on Recordings and transcriptions automatically expire, you'll get the option to set the Default expiration time, measured in days. | Fix: Set controls[2].ui.path and its rendered path to 'Meetings > Meeting policies > policy > Recording & transcription > Recordings and transcriptions automatically expire > Default expiration time'. The policy selection is documented at https://learn.microsoft.com/microsoftteams/meeting-transcription-captions; the two expiry settings are documented at https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy. | Source: https://learn.microsoft.com/microsoftteams/manage-teams-recording-expiration-policy
- [supported, minor] controls[3].api; Governance controls: AI summary expiry row / command: Set-CsTeamsMeetingPolicy -Identity <policyname> -IntelligentRecapDocxFileExpirationDays 180 sets AI-summary document expiry to 180 days. | Found: The following example sets the default expiration time to 180 days. Set-CsTeamsMeetingPolicy -Identity <policyname> -IntelligentRecapDocxFileExpirationDays 180 | Fix: Append to controls[3].note and its rendered note: 'The feature guide documents this setting as usable, but the Set-CsTeamsMeetingPolicy reference says IntelligentRecapDocxFileExpirationDays has not been fully released and will have no effect.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy alongside the existing feature guide. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts
-->
