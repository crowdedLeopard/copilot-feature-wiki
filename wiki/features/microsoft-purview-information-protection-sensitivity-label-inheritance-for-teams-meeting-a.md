---
title: "Microsoft Purview: sensitivity label inheritance for Teams meeting artifacts (GCC, GCC High and DoD)"
slug: "microsoft-purview-information-protection-sensitivity-label-inheritance-for-teams-meeting-a"
roadmapId: 581739
topic: "governance"
products: ["Microsoft Purview"]
summary: "Planned label policy setting that stamps a Teams meeting's sensitivity label on its recordings, transcripts and Loop notes. This roadmap item covers GCC, GCC High and DoD. Administrators choose whether to configure it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "mixed"
  notes: "The Microsoft Purview service description says sensitivity labelling, including automatic or policy-based labelling, requires Microsoft 365 E5 or Microsoft 365 Information Protection and Governance (IPG). The meetings page adds that some options need Teams Premium. Nothing specific to this setting is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","sensitivity-labels","information-protection","teams","meeting-transcripts","microsoft-loop","sharepoint","onedrive","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 581739"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581739"
    kind: "roadmap"
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
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy"
    kind: "learn"
  - title: "Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-meetings#configure-a-corresponding-sensitivity-label-publishing-policy"
    kind: "learn"
videos: []
related: ["sensitivity-labels","meeting-transcripts","meeting-policy"]
controls:
  - governs: "Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label > Apply meeting label to artifacts"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-meetings#configure-a-corresponding-sensitivity-label-publishing-policy"
    api: null
    note: "The Apply meeting label to artifacts setting is described on the meetings page; it is in preview there. Edit an existing policy with Edit Policy."
  - governs: "Whether .mp4 meeting recordings can carry a sensitivity label"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -EnableSensitivityLabelForVideoFiles $true"
      docs: "https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files"
    note: "Without it, .mp4 files aren't labelled when Apply meeting label to artifacts is selected. Also controls Clipchamp project labels."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T00:35:27"
changes:
  - date: "2026-11-20"
    note: "New briefing for the GCC, GCC High and DoD roadmap item; the Worldwide item 558686 is listed separately by Microsoft."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 52 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: removed the unsupported claim about existing protection, added the Assign permissions now qualification for MP4 encryption, reworded the data exposure bullet, extended the Purview path and narrowed one checklist item."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: the label policy row now links the meetings page that documents Apply meeting label to artifacts, and the download restriction is limited to recordings and transcripts."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 58 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 54 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-27"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "c8c19fd29bd360742a2e9e57470b6434"
---

## What's changing

Microsoft plans to let Teams meeting artifacts (recordings, transcripts and Loop notes) inherit the sensitivity label of the meeting they came from, so that nobody has to label them by hand. The roadmap item describes this as something an administrator can configure.

Microsoft Learn already documents a label policy setting for this, **Apply meeting label to artifacts**. It applies the meeting's label to recordings and their transcripts (.mp4 files) and to meeting notes (.loop files) when the artifact is saved to SharePoint or OneDrive. If the meeting's label changes later, the inherited label doesn't change automatically. Learn marks the setting as in preview, and for .mp4 files it requires sensitivity label support for MP4 to be enabled in SharePoint and OneDrive; without it, those files aren't labelled. Learn does not say whether the setting is available in GCC, GCC High or DoD.

This page covers roadmap item 581739: status In development, target December CY2026, release phase General Availability, platform Web, clouds GCC, GCC High and DoD. Microsoft lists the feature under a second roadmap item, 558686, for Worldwide (Standard Multi-Tenant): status Launched, target June CY2026, preview May CY2026. The dates are targets, and the two items differ in clouds and status.

## Why it matters

Meeting recordings and transcripts routinely hold the most sensitive things said in an organisation. A label that follows the meeting reduces reliance on manual artifact labelling. For MP4 files, labels that apply encryption must use Assign permissions now rather than user-defined permissions.

Microsoft has not stated what this setting does on arrival, so assume that existing behaviour continues until a label policy is configured, and decide in advance whether your meeting labels should reach artifacts. The side effect to plan for is that a recording or transcript with an encrypting label can't be downloaded, which changes how people share meeting content.

## Risk assessment

**Data exposure**
- Apply meeting label to artifacts automatically applies the meeting label to recordings, transcripts and Loop notes when they are saved to SharePoint or OneDrive. Artifacts from unlabelled meetings have no label to inherit. Control: the label policy row below.
- The inherited label is a copy at save time: if the meeting label changes later, the artifact keeps the old label. Check high-sensitivity meetings whose labels are changed after recording.

**Security & identity**
- Recordings respect the access permissions and usage rights from the label's encryption settings. A label that applies encryption stops download of the recording and transcript; one that doesn't apply encryption allows download, but the downloaded file doesn't retain the labelling information.
- An owner or admin can relabel the files in SharePoint or OneDrive from the file's Details pane, subject to permission to change a label that applies encryption.

**Autonomy & actions**
- The label is applied automatically when the artifact is saved to SharePoint or OneDrive. No approval step is documented.

**Change & support**
- Expect helpdesk questions about recordings that play in the browser but can't be downloaded.
- .mp4 recordings aren't labelled unless MP4 support is enabled with the SharePoint Online setting in the controls table.

## Cost and licensing

Microsoft Learn's page on labelling Teams meetings lists no price or meter for this setting. The Microsoft Purview service description says sensitivity labelling, including automatic or policy-based labelling, requires a Microsoft 365 E5 licence or Microsoft 365 Information Protection and Governance (IPG), and it lists manual labelling for Teams online meetings under Microsoft 365 E5/A5/G5 plus Teams Premium. The meetings page also says some of its options can't be configured without a Teams Premium licence in the tenant.

A licence statement specific to the artifact inheritance setting is not yet published. The indirect cost is admin time to configure label policies and to explain download behaviour to users.

## Scope

The roadmap item lists the clouds GCC, GCC High and DoD, and the platform Web. Microsoft Learn does not state which clouds the artifact setting is available in, so confirm it against your cloud when the roadmap item moves.

For a label to protect a meeting, its scope must include **Files & other data assets**, **Emails** and **Meetings**, and the label must be published to meeting organisers and participants. Artifacts are labelled when saved to SharePoint or OneDrive. Meeting settings from the label need a supported Teams client; the Learn page lists minimum versions and says that where a client doesn't meet them the label's meeting options can't be enforced.

## Governance guidance

### Before rollout
- Identify which meeting labels should reach recordings, transcripts and Loop notes, and whether any of them apply encryption, since recordings and transcripts with labels that apply encryption cannot be downloaded.
- Check that the meeting labels are published to organisers (Purview portal, Publishing policies row below).
- Enable MP4 sensitivity label support in SharePoint Online if recordings must be labelled (SharePoint row below), running the command in each geo-location for Multi-Geo tenants.
- Check the roadmap item and Learn for availability in GCC, GCC High and DoD before planning a date.

### At rollout
- Configure **Apply meeting label to artifacts** in a label policy scoped first to a pilot group of organisers.
- Allow 24 hours for label and label policy changes to propagate before troubleshooting.
- Tell pilot users that encrypted recordings play in the browser but can't be downloaded.

### After rollout
- Open a sample recording, transcript and Loop note from a labelled meeting in SharePoint or OneDrive and confirm the label matches the meeting.
- Re-check artifacts of meetings whose label changed after recording, since they don't follow the change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes</strong><br><small>User</small><br><small class="controls__note">The Apply meeting label to artifacts setting is described on the meetings page; it is in preview there. Edit an existing policy with Edit Policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label › Apply meeting label to artifacts <a href="https://learn.microsoft.com/purview/sensitivity-labels-meetings#configure-a-corresponding-sensitivity-label-publishing-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether .mp4 meeting recordings can carry a sensitivity label</strong><br><small>Tenant</small><br><small class="controls__note">Without it, .mp4 files aren't labelled when Apply meeting label to artifacts is selected. Also controls Clipchamp project labels.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -EnableSensitivityLabelForVideoFiles $true</code> <a href="https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The artifact setting is part of a label policy, so it applies to the users and groups the policy is published to. At the time of writing (November 2026), the Set-LabelPolicy advanced settings Microsoft Learn lists include meeting settings for mandatory and default labels, but none for artifact inheritance, so the Purview portal is the documented route.

The SharePoint setting is tenant-wide, and Learn says Multi-Geo tenants must run it per geo-location. Learn's setting description does not name a role for the artifact setting.

## Open questions

- Is the artifact setting available in GCC, GCC High and DoD, and from which date within the December CY2026 target? Watch the roadmap item and the Learn page on labelling Teams meetings.
- Is **Apply meeting label to artifacts** off until a policy configures it, and does it change when it moves out of preview?
- Which licence covers this setting specifically, beyond the service description's labelling and Teams Premium statements?
- Will Microsoft document a PowerShell or API setting for the artifact option, so that it can be scripted?

<!-- rationale
risk: Medium. Until a policy applies the meeting label to artifacts, recordings, transcripts and Loop notes are not labelled from the meeting, and Microsoft has not stated the default for this setting.
cost: Low. The only cost the sources show is admin time and licences organisations may already hold: the service description ties sensitivity labelling to Microsoft 365 E5 or IPG, and some meeting label options to Teams Premium. A licence specific to this setting is not yet published.
impact: Medium. Meeting organisers and participants who record or transcribe meetings notice it: a labelled recording that is encrypted cannot be downloaded, and an unencrypted download loses its label.
-->
