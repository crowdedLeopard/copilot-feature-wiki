---
title: "Microsoft Teams: grant recording and transcript access when sharing a recap link"
slug: "microsoft-teams-sharing-recap-access"
roadmapId: 559606
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Recording and transcript owners can grant access to named people when they copy or share a Teams recap link, so those people need not request access. No admin setting for it is documented yet."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Desktop","Mac"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for this feature. Learn says intelligent recap needs a Teams Premium or Microsoft Copilot licence; whether that covers this sharing option is not stated."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","intelligent-recap","transcripts","meeting-policy","m365-copilot","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 559606"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559606"
    kind: "roadmap"
  - title: "Teams meeting recording and transcript storage and permissions in OneDrive and SharePoint"
    url: "https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change"
    kind: "learn"
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
videos: []
related: ["intelligent-recap","meeting-transcripts","meeting-policy","microsoft-teams-delete-meeting-generated-content-in-recap","teams-intelligent-recap-without-saving-transcript"]
controls:
  - governs: "Whether users can transcribe meetings, which transcript access depends on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing policy: decides whether transcripts are created, not who they are shared with. On by default for new policies."
  - governs: "Whether users can record meetings, which recording access depends on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Existing policy: decides whether meetings can be recorded, not who the recording is shared with."
  - governs: "Whether recording and transcript owners can grant access through the recap link"
    scope: "tenant"
    ui: null
    api: null
    note: "No tenant or policy setting for this option is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-05-26T23:00:59"
changes:
  - date: "2026-11-24"
    note: "New briefing: owners can grant recording and transcript access to named people when sharing the recap link; no admin setting or licence is documented yet."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 48
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "182b000a6ae10adc31ffdd0fd4a1e3ab"
---

## What's changing

The roadmap item says recording and transcript owners can now grant recording and transcript access to specified people when they copy or share the recap link, and that those people can open the recap without having to request access.

Microsoft Learn does not describe this option yet at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. For context, Learn says that for non-channel meetings all invitees except external participants automatically get a personally shared link to the recording, that the organiser must add external participants to the shared list, and that participants without access can ask the recording owner to add them. The roadmap item does not say which of these steps the new option changes.

The roadmap record gives the status as Rolling out, with a target of May CY2026, and lists Microsoft Teams and Microsoft Copilot (Microsoft 365) as products. The release phases are General Availability and Targeted Release, the platforms are Desktop and Mac, and the clouds are Worldwide (Standard Multi-Tenant), GCC and GCC High. Those dates are Microsoft's targets, and the record was last modified on 26 May 2026.

## Why it matters

Access to a meeting's recording and transcript is normally decided by the file permissions in OneDrive or SharePoint. This option lets the owner grant that access at the moment of sharing the recap link, so more of the decisions about who can open a transcript are taken by individual owners at the point of sharing, not by an administrator.

Microsoft has not stated what happens on arrival or whether an administrator can switch the option off, so base your plan on no source saying existing behaviour changes. The controls Learn documents decide whether recordings and transcripts exist at all, not who they are shared with, so decide now whether that is enough for your sensitive meetings.

## Risk assessment

**Data exposure**

- Recordings and transcripts are stored in the organiser's OneDrive or, for channel meetings, in the channel's SharePoint site, and the roadmap says the owner can grant access to them to specified people. Which people can be specified is not yet documented, so confirm it before assuming the grant stays inside your organisation.
- Learn says external participants have no access to a recording unless the organiser shares it with them. Whether this option changes that is not stated.

**Security & identity**

- The roadmap describes the grant as made by the recording and transcript owner. Learn does not describe a Teams admin policy or Conditional Access control that applies to the grant itself.

**Autonomy & actions**

- No change described: the roadmap item describes an action an owner takes when copying or sharing the link, not an automatic one.

**Change & support**

- Users who today ask the recording owner to add them to the shared list, as Learn describes, may stop doing so. Expect questions about who can open a recap link and whether a forwarded link still works; Microsoft has not said.

## Cost and licensing

Microsoft Learn names no licence or meter for this sharing option at the time of writing, and none is published for it.

For the recap itself, the intelligent recap page says users need a Microsoft 365 subscription that includes Teams, plus a Teams Premium or Microsoft Copilot licence. It does not say whether the sharing option falls under that requirement. Recording and transcript files are stored in OneDrive and SharePoint, so any indirect cost is admin time and communication with organisers.

## Scope

The roadmap item applies to Microsoft Teams and Microsoft Copilot (Microsoft 365) and names recording and transcript owners as the people who can grant access. Rollout status is Rolling out, with a May CY2026 target, in Targeted Release and General Availability phases.

The roadmap lists the Worldwide (Standard Multi-Tenant), GCC and GCC High clouds and the Desktop and Mac platforms. Learn says recordings and transcripts need recording and transcription to be turned on in the user's meeting policy; the intelligent recap page says that where recording is off, users get recap without the recording. Roles needed to configure the option are not yet documented.

## Governance guidance

### Before rollout

- Check which Teams meeting policies have Transcription and Meeting recording turned on in the Teams admin center, because recap access can only apply to files that exist.
- Identify the meetings where recordings or transcripts are sensitive, and tell their organisers that Microsoft has not yet said who can be named when a recap link is shared.
- Review how your helpdesk handles requests to access a recording, so you can tell whether the option changes them.

### At rollout

- Test with a pilot organiser on Desktop and Mac: record and transcribe a meeting, share the recap link to a named colleague and a guest, and note what each can open.
- Record the result for each cloud you use, since Microsoft lists GCC and GCC High on the roadmap item and has not described behaviour there.

### After rollout

- Watch Message center and the intelligent recap and recording storage pages on Learn for documentation of the option and any admin setting.
- Ask organisers whether access requests for recordings have fallen, and whether anyone has granted access to the wrong person.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which transcript access depends on</strong><br><small>User</small><br><small class="controls__note">Existing policy: decides whether transcripts are created, not who they are shared with. On by default for new policies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings, which recording access depends on</strong><br><small>User</small><br><small class="controls__note">Existing policy: decides whether meetings can be recorded, not who the recording is shared with.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether recording and transcript owners can grant access through the recap link</strong><br><small>Tenant</small><br><small class="controls__note">No tenant or policy setting for this option is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting that governs this sharing option is documented at the time of writing, so the table's first two rows are existing policies that decide whether recordings and transcripts are created. They do not decide who is named when a recap link is shared.

The transcription page says transcription is both a per-organiser and per-user policy setting. The same page says admins can choose whether organisers can restrict participants from copying or forwarding transcripts and AI-generated insights in meeting recaps, and that this per-organiser setting is On by default. Whether it affects this option is not stated.

## Open questions

- Can the people an owner specifies include external participants or guests, and does Learn's rule that organisers must add external participants to the shared list still apply? Watch the recording storage and permissions page on Learn.
- Is there a Teams admin centre or PowerShell setting to turn the option off, and is it on by default? Watch Message center.
- Does the option need a Teams Premium or Microsoft Copilot licence, or does it come with the existing recording and transcript permissions?
- Can a grant made through a recap link be removed later, and does it change the file's permissions in OneDrive or SharePoint?

<!-- rationale
risk: Low. The roadmap describes an owner-initiated grant on files that owners can already share; no source says it widens access on its own, though who can be named is not yet documented.
cost: Low. The only cost the sources show is admin time and user communication; a licence or charge specific to this feature is not yet published.
impact: Medium. Meeting organisers and recording owners using Teams desktop and Mac will notice it, and people who currently ask for access to a recap may stop needing to.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: second paragraph / licensing: Intelligent recap requires a Microsoft 365 subscription that includes Teams. | Found: You must assign your users a Microsoft 365 subscription that includes Teams or a Microsoft 365 (no Teams) subscription with a separate Teams license. | Fix: Replace the prerequisites sentence with 'For intelligent recap, users need a Microsoft 365 subscription that includes Teams or a Microsoft 365 (no Teams) subscription with a separate Teams license, plus a Teams Premium or Microsoft Copilot license.' Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings
- [contradicted, blocker] Scope: recording and transcription prerequisites / applicability: Recording and transcription being turned on in the user's meeting policy supplies the required policy permissions. | Found: For meetings and events to include transcripts, the organizer must have this setting turned on. The user who starts the recording or transcript must also have this setting turned on. | Fix: Replace the prerequisite clause with 'For meeting recording, both the organiser and recording initiator need recording permissions; for meeting transcription, both the organiser and the user who starts the recording or transcript need transcription turned on.' Sources: https://learn.microsoft.com/microsoftteams/meeting-recording and https://learn.microsoft.com/microsoftteams/meeting-transcription-captions. | Source: https://learn.microsoft.com/microsoftteams/meeting-transcription-captions
- [contradicted, blocker] Risk assessment: Data exposure; Governance guidance; rationale: risk / absence: Microsoft has not documented which people can be specified when sharing a recap link. | Found: Share the link to a recap with anyone in your org ... Open the recap and select Share. Add recipient names, emails, groups, or tags. Then, select Share. The specified people will have recap access when you share. | Fix: Replace assertions that no recipients are documented with 'Microsoft Support documents sharing a recap link with people in your organisation by adding recipient names, emails, groups, or tags and selecting Share; it does not explicitly document guests or external recipients for this link-sharing option.' Cite https://support.microsoft.com/office/c2e3a0fe-504f-4b2c-bf85-504938f110ef. In Governance guidance, replace the instruction to tell organisers no recipients are documented with 'Tell organisers that Microsoft Support documents sharing recap links with people in their organisation.' | Source: https://support.microsoft.com/office/c2e3a0fe-504f-4b2c-bf85-504938f110ef
- [contradicted, blocker] Why it matters: second paragraph / applicability: The controls Learn documents decide whether recordings and transcripts exist, not who they are shared with. | Found: | Who has access to the recording and transcript (Teams Premium/Copilot license) | No | No | Yes | Yes | | Fix: Replace 'The controls Learn documents decide whether recordings and transcripts exist at all, not who they are shared with' with 'The two existing policies in this briefing's table control whether users can record or transcribe meetings; they do not select recipients when a recap link is shared.' This preserves the verified scope of the table without claiming Learn documents no access controls. | Source: https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: second paragraph / absence: Microsoft Learn does not yet describe this recap-link sharing option. | Found: Searched: 'sharing recap access'; 'recap link access recording transcript'. Opened intelligent-recap-calls-meetings, tmr-meeting-recording-change, meeting-recording and meeting-transcription-captions. Learn has no dedicated description; Microsoft Support does document Share recap. | Fix: Keep the Learn-specific statement, but replace 'so what follows about its behaviour is the roadmap's description' with 'Microsoft Support documents recap sharing with people in your organisation through Share; copying a link still lets people without access request it.' Cite https://support.microsoft.com/office/c2e3a0fe-504f-4b2c-bf85-504938f110ef.
- [supported, minor] What's changing: non-channel meeting context / behaviour: All non-channel meeting invitees except external participants automatically get a personally shared recording link. | Found: All meeting invitees, except for external participants, automatically get a personally shared link. | Fix: Append: 'For large meetings with more than 2,000 participants, some participants may not automatically receive permissions to the recording file.' This qualification appears at https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change. | Source: https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change
- [supported, minor] Why it matters: first sentence / applicability: OneDrive and SharePoint file permissions normally govern access to meeting transcripts. | Found: The captions and transcript file is stored with the video in OneDrive for Business or SharePoint. This inherits the same permissions and policy as the video file, so that whoever has access to the video file has access to the captions and transcript. | Fix: Add https://support.microsoft.com/office/3cb9acb6-05b2-4f59-a50d-7df61123aa20 to sources for the general statement about transcript file permissions; the cited recording page expressly supports channel transcript permissions. | Source: https://support.microsoft.com/office/3cb9acb6-05b2-4f59-a50d-7df61123aa20
- [supported, minor] Risk assessment: Data exposure / behaviour: Non-channel meeting recordings are stored in the organizer's OneDrive. | Found: For meetings and events, the recording saves to the organizer's OneDrive ... To understand what happens if an organizer doesn't have a OneDrive account, see the Recording storage for organizers without OneDrive accounts section | Fix: Replace the storage bullet's opening with 'Recordings and transcripts are stored in OneDrive or SharePoint.' This narrower statement is supported at https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change and avoids omitting the documented alternative recording locations. | Source: https://learn.microsoft.com/microsoftteams/tmr-meeting-recording-change
- [supported, minor] front matter: licensing.model and notes / licensing: Feature-specific licensing is not published, so the licensing model is unknown. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included'. Begin its notes with 'Each user in the organisation needs a Teams license to use Teams, except when joining meetings anonymously. No additional licence specific to recap-link access sharing is published.' Cite https://learn.microsoft.com/microsoftteams/user-access; retain the distinction from intelligent recap licensing. | Source: https://learn.microsoft.com/microsoftteams/user-access
-->
