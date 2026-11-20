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
videos: []
related: ["sensitivity-labels","meeting-transcripts","meeting-policy"]
controls:
  - governs: "Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information Protection > Publishing policies > Publish label"
      docs: "https://learn.microsoft.com/purview/create-sensitivity-labels"
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
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 48
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "8626cc482e78abc143860dcf293de7c9"
---

## What's changing

Microsoft plans to let Teams meeting artifacts (recordings, transcripts and Loop notes) inherit the sensitivity label of the meeting they came from, so that nobody has to label them by hand. The roadmap item describes this as something an administrator can configure.

Microsoft Learn already documents a label policy setting for this, **Apply meeting label to artifacts**. It applies the meeting's label to recordings and their transcripts (.mp4 files) and to meeting notes (.loop files) when the artifact is saved to SharePoint or OneDrive. If the meeting's label changes later, the inherited label doesn't change automatically. Learn marks the setting as in preview, and for .mp4 files it requires sensitivity label support for MP4 to be enabled in SharePoint and OneDrive; without it, those files aren't labelled. Learn does not say whether the setting is available in GCC, GCC High or DoD.

This page covers roadmap item 581739: status In development, target December CY2026, release phase General Availability, platform Web, clouds GCC, GCC High and DoD. Microsoft lists the feature under a second roadmap item, 558686, for Worldwide (Standard Multi-Tenant): status Launched, target June CY2026, preview May CY2026. The dates are targets, and the two items differ in clouds and status.

## Why it matters

Meeting recordings and transcripts routinely hold the most sensitive things said in an organisation, and today's protection depends on someone labelling the files. A label that follows the meeting puts the same protection on the artifacts, including any encryption the label applies, without relying on the organiser.

Microsoft has not stated what this setting does on arrival, so assume that existing behaviour continues until a label policy is configured, and decide in advance whether your meeting labels should reach artifacts. The side effect to plan for is that a recording or transcript with an encrypting label can't be downloaded, which changes how people share meeting content.

## Risk assessment

**Data exposure**
- Recordings, transcripts and Loop notes from meetings are labelled only when a published label policy applies **Apply meeting label to artifacts** and the label is the meeting's label. Artifacts from unlabelled meetings have no label to inherit. Control: the label policy row below.
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
- Identify which meeting labels should reach recordings, transcripts and Loop notes, and whether any of them apply encryption, since encrypted artifacts can't be downloaded.
- Check that those labels have the Files & other data assets, Emails and Meetings scopes and are published to organisers (Purview portal, Publishing policies row below).
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
<tr><td data-label="Control"><strong>Whether a label policy applies the meeting's label to recordings, transcripts and Loop notes</strong><br><small>User</small><br><small class="controls__note">The Apply meeting label to artifacts setting is described on the meetings page; it is in preview there. Edit an existing policy with Edit Policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information Protection › Publishing policies › Publish label <a href="https://learn.microsoft.com/purview/create-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
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

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Today's protection of meeting recordings and transcripts depends on someone labelling the files. | Found: Searched: Teams recordings transcripts Loop notes sensitivity labels manual labeling existing protection automatic inheritance before artifacts. Read sensitivity-labels-meetings and the MP4 support section; neither establishes this blanket account of existing protection in these clouds. | Fix: Remove 'and today's protection depends on someone labelling the files' from the first sentence of Why it matters. The sources establish the new inheritance mechanism, not this history of existing protection.
- [contradicted, blocker] Why it matters / applicability: Inheritance puts the same protection on artifacts, including any encryption the meeting label applies. | Found: Sensitivity labels that apply encryption must be configured with the Assign permissions now option, rather than user-defined permissions. | Fix: Replace the second sentence of Why it matters with: 'A label that follows the meeting reduces reliance on manual artifact labelling. For MP4 files, labels that apply encryption must use Assign permissions now rather than user-defined permissions.' The existing SharePoint and OneDrive source documents this qualification. | Source: https://learn.microsoft.com/purview/sensitivity-labels-sharepoint-onedrive-files
- [contradicted, blocker] Risk assessment: Data exposure / behaviour: Meeting recordings, transcripts and Loop notes are labelled only when a published policy applies Apply meeting label to artifacts. | Found: You can, if required, manually relabel these files in SharePoint or OneDrive, by using the file's Details pane. | Fix: Replace the first sentence of the Data exposure bullet with: 'Apply meeting label to artifacts automatically applies the meeting label to recordings, transcripts and Loop notes when they are saved to SharePoint or OneDrive.' This states what this setting does without claiming it is the only way to label a file. | Source: https://learn.microsoft.com/purview/sensitivity-labels-meetings
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; front matter: changes / record: A separate roadmap item, 558686, describes the same feature for Worldwide (Standard Multi-Tenant). | Found: "id": 558686; "title": "Microsoft Purview: Information Protection - Sensitivity label inheritance for Teams meeting artifacts"; "clouds": [ "Worldwide (Standard Multi-Tenant)" ] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=558686 to sources as 'Microsoft 365 Roadmap 558686', kind roadmap, for the Worldwide status and dates. These facts were verified against its local roadmap record.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Purview route Solutions > Information Protection > Publishing policies > Publish label starts configuration of the label policy containing the artifact option. | Found: Solutions > Information Protection > Publishing policies. ... select Publish label to start the Create policy configuration. | Fix: Extend the path to 'Solutions > Information Protection > Publishing policies > Publish label > Apply meeting label to artifacts'. The meetings source identifies that setting within the publishing policy; the current path stops at the start of configuration. Keep the existing note about editing a policy with Edit Policy. | Source: https://learn.microsoft.com/purview/create-sensitivity-labels
- [contradicted, minor] Governance guidance: Before rollout; controls / consistency: The checklist's instruction to check the label scopes has a corresponding control row. | Found: Check that those labels have the Files & other data assets, Emails and Meetings scopes ... Controls cover the artifact publishing policy and MP4 support, not label scope configuration. | Fix: Narrow that checklist bullet to 'Check that the meeting labels are published to organisers (Purview portal, Publishing policies row below).' Keep the verified scope prerequisites in Scope; do not add a control row.
-->
