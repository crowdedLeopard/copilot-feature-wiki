---
title: "Microsoft Purview: sensitivity label inheritance for Teams meeting artifacts (Worldwide)"
slug: "microsoft-purview-information-protection-sensitivity-label-inheritance-for-teams-me-558686"
roadmapId: 558686
topic: "governance"
products: ["Microsoft Purview"]
summary: "A label policy setting can stamp a Teams meeting's sensitivity label on its recordings, transcripts and Loop notes. This item covers Worldwide and is Launched; Learn still marks the setting preview. Administrators choose whether to configure it."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The Purview service description lists manual labelling for Teams online meetings under Microsoft 365 E5/A5/G5 (and listed equivalents) plus Teams Premium. The meetings page says some options need Teams Premium in the tenant. Nothing specific to artifact inheritance is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitivity-labels","information-protection","teams","teams-premium","meeting-transcripts","microsoft-loop","sharepoint","onedrive"]
sources:
  - title: "Microsoft 365 Roadmap 558686"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558686"
    kind: "roadmap"
  - title: "Use sensitivity labels to protect calendar items, Teams meetings, and chat"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-meetings"
    kind: "learn"
  - title: "Create and configure sensitivity labels and their policies"
    url: "https://learn.microsoft.com/purview/create-sensitivity-labels"
    kind: "learn"
  - title: "Enable sensitivity labels for files in SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft Teams Premium licensing"
    url: "https://learn.microsoft.com/microsoftteams/teams-add-on-licensing/licensing-enhance-teams"
    kind: "learn"
  - title: "Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-meetings#configure-a-corresponding-sensitivity-label-publishing-policy"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-sensitivity-label-inheritance-for-teams-meeting-a","sensitivity-labels","meeting-transcripts"]
controls:
  - governs: "Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label > Apply meeting label to artifacts"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-meetings#configure-a-corresponding-sensitivity-label-publishing-policy"
    api: null
    note: "Preview on Learn. Applies to the users and groups the label policy is published to. Edit an existing policy with Edit Policy."
  - governs: "Whether .mp4 meeting recordings and transcripts can carry a sensitivity label"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableSensitivityLabelForVideoFiles $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    note: "Without it, .mp4 files aren't labelled when Apply meeting label to artifacts is selected. Run per geo-location in Multi-Geo. Also controls Clipchamp project labels."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-07T23:01:01"
changes:
  - date: "2026-11-26"
    note: "New briefing for the Worldwide roadmap item 558686; the GCC, GCC High and DoD item 581739 has its own page."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 53
  unconfirmed: 4
  contradicted: 1
  attempts: 1
  hash: "f6135cf209eba39832468f9a29489f3d"
---

## What's changing

Teams meeting artifacts (recordings, transcripts and Loop notes) can be set to inherit the sensitivity label of the meeting they came from, so nobody has to label them by hand.

Microsoft Learn documents this as a label policy setting, **Apply meeting label to artifacts**. For Teams meetings it applies the meeting's label to recordings and their transcripts (.mp4 files) and to meeting notes (.loop files) at the time the artifact is saved to SharePoint or OneDrive. If the meeting label changes later, the inherited label doesn't change automatically. For .mp4 files the setting needs sensitivity label support for MP4 enabled in SharePoint and OneDrive; without it, those files aren't labelled.

This page covers roadmap item 558686 for Worldwide (Standard Multi-Tenant), platform Web: status Launched, preview May CY2026, general availability target June CY2026, release phases General Availability and Preview. Microsoft Learn still marks the setting as in preview at the time of writing (November 2026). Microsoft lists the feature under a second roadmap item, 581739, for GCC, GCC High and DoD, which is In development with a December CY2026 target; it has [its own briefing](/features/microsoft-purview-information-protection-sensitivity-label-inheritance-for-teams-meeting-a/).

## Why it matters

Recordings, transcripts and meeting notes often hold more detail than the invite or the chat, yet a meeting label on its own protects the meeting, not the files it leaves behind in SharePoint or OneDrive. This setting closes that gap for organisations that already label meetings, and it does so at save time, so the label is in place before anyone shares the file.

Microsoft has not stated what this setting does on arrival, and no source says existing behaviour changes, so plan on artifacts staying unlabelled from the meeting until a label policy is configured. The side effect to prepare for is download: an artifact whose label applies encryption can be played but not downloaded, which changes how people pass recordings on.

## Risk assessment

**Data exposure**
- Without the setting, artifacts from a labelled meeting do not carry the meeting's label from the meeting. Control: **Apply meeting label to artifacts** in the label policy (first row below).
- The label is copied when the artifact is saved: if the meeting label is raised afterwards, the artifact keeps the old one. Re-check artifacts of meetings whose label changes after recording.
- Without MP4 support, recordings and transcripts are not labelled even with the policy setting selected (second row below).

**Security & identity**
- Recordings respect the access permissions and usage rights of the label's encryption settings. With an encrypting label, recording and transcript can't be downloaded; without encryption they can, but the downloaded file doesn't keep the label.
- Labels that apply encryption to MP4 files must use **Assign permissions now**, not user-defined permissions, so meeting labels that use **Let users assign permissions** need review before they are relied on here.

**Autonomy & actions**
- No change: the feature applies an existing label to a file at save time and takes no other action. Owners can relabel the file from its **Details** pane in SharePoint or OneDrive, subject to permission to change an encrypting label, which the meeting owner always has.

**Change & support**
- Expect helpdesk calls about recordings that play in the browser but cannot be downloaded, and requests to relabel them so they can be shared.

## Cost and licensing

The Microsoft Purview service description lists **Manual Sensitivity Labeling for Teams online meetings** as included with Microsoft 365 E5/A5/G5 + Teams Premium and the other suites it lists with Teams Premium. The Teams Premium licensing page says assigning Purview sensitivity labels to meetings is available only to Teams Premium users with a Microsoft 365 E5, E5 Compliance, F5 Compliance or F5 Security + Compliance subscription. The page on labelling Teams meetings adds that some of its options can't be configured if no Teams Premium licence is found for the tenant.

A licence statement specific to **Apply meeting label to artifacts**, and whether it falls under manual or automatic labelling in the service description, is not yet published. No meter is documented for this setting. The indirect cost is admin time to configure label policies and MP4 support, and to explain download behaviour.

## Scope

- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it. GCC, GCC High and DoD are a separate roadmap item.
- **Platform:** Web, per the record.
- **Users:** the users and groups a label policy is published to; the label must be published to meeting organisers and participants.
- **Labels:** the label's scopes must include **Files & other data assets**, **Emails** and **Meetings**.
- **Artifacts:** recordings and transcripts (.mp4) and meeting notes (.loop) saved to SharePoint or OneDrive. MP4 labelling needs `EnableSensitivityLabelForVideoFiles` set, per geo-location in Multi-Geo tenants.
- **Status:** the setting is marked preview on Learn.

## Governance guidance

### Before rollout
- Decide which meeting labels should follow the meeting onto recordings, transcripts and Loop notes, and note which of them apply encryption.
- Check that encrypting meeting labels use **Assign permissions now**, since MP4 files need it.
- Enable MP4 label support with `Set-SPOTenant -EnableSensitivityLabelForVideoFiles $true`, in each geo-location for Multi-Geo tenants, after checking its effect on Clipchamp projects.
- Confirm the meeting labels are published to the organisers and participants who will use them.

### At rollout
- Select **Apply meeting label to artifacts** in a label policy published first to a pilot group of organisers.
- Tell pilot users that recordings with an encrypting label play in Teams, SharePoint or Clipchamp but cannot be downloaded.

### After rollout
- Open a recording, transcript and Loop note from a labelled pilot meeting and confirm each carries the meeting's label.
- Relabel, from the file's **Details** pane, artifacts of meetings whose label was changed after recording.
- Extend the label policy to more organisers once support calls about downloads settle.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes</strong><br><small>User</small><br><small class="controls__note">Preview on Learn. Applies to the users and groups the label policy is published to. Edit an existing policy with Edit Policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label › Apply meeting label to artifacts <a href="https://learn.microsoft.com/purview/sensitivity-labels-meetings#configure-a-corresponding-sensitivity-label-publishing-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether .mp4 meeting recordings and transcripts can carry a sensitivity label</strong><br><small>Tenant</small><br><small class="controls__note">Without it, .mp4 files aren't labelled when Apply meeting label to artifacts is selected. Run per geo-location in Multi-Geo. Also controls Clipchamp project labels.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableSensitivityLabelForVideoFiles $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The artifact setting is part of a label policy, so it reaches only the users and groups that policy is published to, and policy order decides which policy wins where several apply. At the time of writing (November 2026), the Set-LabelPolicy advanced settings on Microsoft Learn include meeting settings for mandatory and default labels but none for artifact inheritance, so the Purview portal is the documented route. The MP4 setting is tenant-wide (per geo-location in Multi-Geo tenants) and also governs Clipchamp project labels. Some options on the meetings page need a Teams Premium licence in the tenant.

## Open questions

- Is **Apply meeting label to artifacts** off until a label policy selects it, and will that change when Learn drops the preview label? Watch the Learn page on labelling Teams meetings.
- Which licence covers this setting specifically: the service description's manual labelling for Teams online meetings, or its automatic labelling row?
- Will a Set-LabelPolicy advanced setting or other API be documented for artifact inheritance, so it can be scripted?
- Does the setting cover channel meetings, which take their label from the channel's container label rather than from the organiser? Watch the Learn page and Message center.

<!-- rationale
risk: Medium. Recordings, transcripts and Loop notes from labelled meetings are not labelled from the meeting unless a label policy turns this on and MP4 support is enabled, and Microsoft has not stated the setting's default.
cost: Low. The known cost is admin time plus licences already needed to label Teams meetings (Microsoft 365 E5 or equivalent with Teams Premium, per Microsoft's pages). A licence statement specific to this setting is not yet published.
impact: Medium. People who record, transcribe or take Loop notes in labelled meetings notice it: an artifact whose label applies encryption plays in the browser but cannot be downloaded.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Data exposure; Why it matters; rationale: risk / default: Without configuring the policy setting, artifacts do not inherit the meeting label and a meeting label alone does not protect the resulting files. | Found: Searched: Teams meeting sensitivity label artifacts inheritance only actions without policy label channel meetings; "Apply meeting label to artifacts" "default" enabled automatically. Read sensitivity-labels-meetings and create-sensitivity-labels; neither states unconfigured inheritance behaviour. | Fix: Replace the first Data exposure bullet with 'Microsoft has not stated this setting's default. Review Apply meeting label to artifacts in the label policy (first row below).' Replace the factual 'meeting label on its own ... not the files' clause in Why it matters with 'Learn documents artifact inheritance as a separate label policy setting.' In the risk rationale replace 'are not labelled from the meeting unless a label policy turns this on and MP4 support is enabled' with 'can inherit the meeting label through a label policy setting; MP4 files require MP4 support'. Keep the qualified planning advice based on no documented change to existing behaviour.
- [unsupported, major] Why it matters / behaviour: Save-time inheritance guarantees the label is in place before anyone shares the file. | Found: Searched: "Apply meeting label to artifacts" "actions" "sharing". Read sensitivity-labels-meetings and sensitivity-labels-sharepoint-onedrive-files; they describe save-time inheritance, not an ordering guarantee against every sharing operation. | Fix: Delete 'so the label is in place before anyone shares the file'. Retain the documented statement that inheritance occurs at save time.
- [unsupported, blocker] Why it matters; rationale: impact / behaviour: An artifact whose label applies encryption can be played in the browser but cannot be downloaded. | Found: Searched: Loop meeting notes sensitivity label encryption download file "artifacts". Read sensitivity-labels-meetings, sensitivity-labels-sharepoint-onedrive-files and sensitivity-labels-loop. Download and playback restrictions are stated for recordings/transcripts or MP4, not Loop notes. | Fix: In Why it matters replace 'an artifact whose label applies encryption can be played but not downloaded' with 'a recording whose label applies encryption can be played but not downloaded'. In the impact rationale replace 'an artifact whose label applies encryption plays in the browser but cannot be downloaded' with 'a recording whose label applies encryption plays in the browser but cannot be downloaded'. Source: https://learn.microsoft.com/purview/sensitivity-labels-meetings.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no action other than applying an existing label at save time. | Found: Searched: "Apply meeting label to artifacts" "actions" "sharing"; Teams meeting sensitivity label artifacts inheritance only actions without policy label channel meetings. Read sensitivity-labels-meetings and sensitivity-labels-loop; neither states that there are no other actions or effects. | Fix: Replace 'No change: the feature applies an existing label to a file at save time and takes no other action' with 'The feature applies the meeting's label to an artifact at save time'. Do not claim an exhaustive absence of other actions.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Governance controls; Governance guidance: Before rollout / applicability: EnableSensitivityLabelForVideoFiles also controls Clipchamp project labels. | Found: The same setting also controls sensitivity label behavior for Clipchamp projects. | Fix: Qualify this statement as 'Also controls Clipchamp project labels after the Clipchamp update reaches the tenant.' Add https://learn.microsoft.com/powershell/module/sharepoint-online/set-spotenant to sources: its parameter reference says that before the update reaches a tenant this setting does not control project labelling, and a rollout schedule does not confirm individual-tenant availability. | Source: https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files
- [supported, minor] Governance controls / behaviour: Label policy order resolves conflicting settings when multiple policies apply to a user. | Found: If there's a conflict in settings from multiple policies, the settings from the policy with the highest priority (highest order number) is applied. | Fix: Add https://learn.microsoft.com/purview/sensitivity-labels#what-label-policies-can-do to sources for the policy-priority statement. The cited create-sensitivity-labels page links to this explanation. | Source: https://learn.microsoft.com/purview/sensitivity-labels#what-label-policies-can-do
- [contradicted, minor] Governance guidance; Governance controls table / consistency: The checklist instructs readers to check encryption configuration, publish labels and relabel files, but those controls have no rows in the table. | Found: Checklist: 'Check that encrypting meeting labels use Assign permissions now'; 'Confirm the meeting labels are published'; 'Relabel, from the file's Details pane'. Table: artifact inheritance policy setting and MP4 support only. | Fix: The checklist steps for Assign permissions now, publishing meeting labels and relabelling artifacts have no corresponding table rows. Do not add rows as part of this correction; retain the verified advice without presenting the table as exhaustive.
-->
