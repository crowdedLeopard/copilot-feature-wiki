---
title: "Microsoft Teams: collaborative meeting notes saved to the meeting organiser's OneDrive"
slug: "microsoft-teams-loop-meeting-notes-stored-in-the-meeting-organizer-s-onedrive"
roadmapId: 576194
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "New Loop and Facilitator notes in non-channel Teams meetings will be saved to the organiser's OneDrive, not the note-starter's. No configuration is required; review retention, hold and leaver processes that assume the starter's OneDrive."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn says Loop components need a OneDrive or SharePoint licence, and that Facilitator is included with a Microsoft Copilot licence, with an eligible Microsoft 365 base licence and Teams licence also required. No licence or charge specific to organiser-owned storage is published."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["teams","microsoft-loop","onedrive","facilitator","data-governance","retention","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 576194"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576194"
    kind: "roadmap"
  - title: "MC1523076: Microsoft Teams: Loop meeting notes stored in the meeting organizer's OneDrive"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1523076"
    kind: "message-center"
  - title: "Overview of Loop storage"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-storage"
    kind: "learn"
  - title: "Admin policies for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    kind: "learn"
  - title: "Requirements for Loop components and Loop workspaces"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-requirements"
    kind: "learn"
  - title: "Summary of governance, lifecycle, and compliance capabilities for Loop"
    url: "https://learn.microsoft.com/microsoft-365/loop/loop-compliance-summary"
    kind: "learn"
  - title: "Set up Facilitator in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "docs"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "docs"
  - title: "Common settings for retention policies and retention label policies"
    url: "https://learn.microsoft.com/purview/retention-settings"
    kind: "learn"
  - title: "Use Microsoft Purview to manage data security & compliance for Microsoft Facilitator"
    url: "https://learn.microsoft.com/purview/ai-teams-facilitator"
    kind: "learn"
  - title: "Learn about retention for SharePoint and OneDrive"
    url: "https://learn.microsoft.com/purview/retention-policies-sharepoint"
    kind: "learn"
  - title: "Create holds in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-create"
    kind: "learn"
videos: []
related: ["microsoft-teams-facilitator-in-gcc","cloud-policy","ediscovery"]
controls:
  - governs: "Whether collaborative meeting notes can be created in Teams (tenant-wide, not where they are stored)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true"
      docs: "https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration"
    note: "Applies to the entire tenant; not configurable per user. Does not apply to notes in Teams New Calendar, which use Cloud Policy. Needs the latest SharePoint PowerShell module. Does not choose the storage location."
  - governs: "Whether Facilitator is allowed or blocked for the organisation"
    scope: "app"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Facilitator > Allow or Block"
      docs: "https://learn.microsoft.com/microsoftteams/facilitator-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Facilitator only. Allowed by default, but blocked if all apps are blocked. The reference calls both its $true and $false examples unblocking, so use Allow or Block in the Teams admin center to block."
  - governs: "Choice between organiser's and note-starter's OneDrive for new meeting notes"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026); the notice says no configuration is required."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-22"
    note: "New briefing: new non-channel Teams meeting notes move to the organiser's OneDrive; rollout mid to late November 2026 per MC1523076."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 57 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected Facilitator licence prerequisites, the Update-M365TeamsApp call and note, the rollout wording and the action rating; added Purview retention and hold references."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 66
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "3e95f14639bd73a409d6a629bdc2ab44"
---

## What's changing

For non-channel Microsoft Teams meetings, collaborative meeting notes, including Loop-powered meeting notes and Facilitator notes, will be stored in the meeting organiser's OneDrive for Business instead of the OneDrive of the person who starts the notes. The roadmap item describes this as more consistent ownership and management of meeting content, with the note-taking and collaboration experience for participants preserved.

Microsoft's notice MC1523076 gives the detail. Newly created notes for non-channel meetings go into the organiser's OneDrive for Business, in the Meetings folder, and the organiser owns the file even when another participant starts notes or Facilitator. Participants can keep opening and editing notes in Teams, subject to the organisation's existing sharing policies. Notes created before the change stay where they are and are not moved. Storage for channel meeting notes is not changing. The notice says no configuration change is required.

The roadmap record lists the item as Rolling out with a target of November CY2026, in General Availability and Targeted Release, for Android, Desktop, iOS, Mac and Web, in Worldwide (Standard Multi-Tenant) and GCC. The notice's rollout schedule names Worldwide: rollout begins in mid-November 2026 and is expected to complete by late November 2026. It sets no act-by date.

At the time of writing (November 2026), Microsoft Learn's Loop storage page still lists a Teams private meeting's Loop content as stored in the user's OneDrive Meetings folder, and the Facilitator page still says Facilitator data is stored in the OneDrive of the user who initiated Facilitator. Neither page yet describes the organiser rule, so what this briefing says about the new behaviour comes from the roadmap record and MC1523076.

## Why it matters

Where a file lives decides which retention policies, holds, sharing rules and leaver processes reach it. Until now, as the notice describes it, the file followed whoever started the notes; after this change new notes follow the organiser. Microsoft's notice asks administrators to review governance processes and data location and retention policies that assume the note-starter's OneDrive, and that is the main work here.

The change arrives on its own: the default is on and the notice names no setting that keeps the old location. Expect a period in which a tenant holds both layouts, older notes in note-starters' OneDrives and new notes in organisers' OneDrives, and expect support questions about where a note went. An organiser's departure now matters for notes other people wrote: Microsoft Learn says that when Loop content is stored in OneDrive and the user leaves the organisation, the standard OneDrive IT policy is applied.

## Risk assessment

**Data exposure**

- New non-channel notes, including text other participants type and Facilitator's AI-generated notes, sit in one person's OneDrive Meetings folder: the organiser's (MC1523076). Anything scoped to the note-starter's OneDrive, such as a retention policy, an eDiscovery custodian list or a hold, will not cover new notes unless it also covers the organiser. Microsoft Learn says retention policies can be scoped to individual OneDrive accounts (https://learn.microsoft.com/purview/retention-settings#locations) and that an eDiscovery hold is placed on the OneDrive accounts of the people in a case (https://learn.microsoft.com/purview/edisc-hold-create).
- The SharePoint and OneDrive retention page marks Facilitator notes support as preview (https://learn.microsoft.com/purview/retention-policies-sharepoint#what's-included-for-retention-and-deletion), while the Facilitator Purview page lists it as supported (https://learn.microsoft.com/purview/ai-teams-facilitator).
- Notes created before the change are not moved, so the same meeting series can have notes in more than one OneDrive. Check both locations when searching or placing holds.

**Security & identity**

- The organiser owns the file even when someone else starts notes or Facilitator. The notice says participants keep access subject to existing sharing policies; it does not describe how that access is granted, so confirm it in a test meeting before relying on it for sensitive meetings.
- Facilitator's own limits are unchanged by this item as far as the notice says: Microsoft Learn states that a sensitivity label is not inherited by AI-generated notes from the meeting.

**Autonomy & actions**

- No change to what Facilitator or the notes feature does is described; only the storage location of newly created notes changes.

**Change & support**

- Internal guidance, runbooks and helpdesk scripts that say notes are in the starter's OneDrive become wrong for new notes; the notice asks administrators to update them.
- Leaver processes: when an organiser leaves, the standard OneDrive policy applies to their OneDrive, which now holds notes other people contributed to. Plan how that content is handed over.

## Cost and licensing

Microsoft's notice and the roadmap item name no new licence, meter or charge for this change. The cost the sources show is admin time to update guidance and retention scoping.

Licence: Microsoft Learn's requirements page for Loop says users need a OneDrive or SharePoint licence for Loop components (https://learn.microsoft.com/microsoft-365/loop/loop-requirements). Facilitator is included with a Microsoft Copilot licence and subject to available capacity; to use it a user also needs an eligible Microsoft 365 base licence and an eligible Microsoft Teams licence (https://learn.microsoft.com/microsoftteams/facilitator-teams). Neither page says anything about organiser-owned storage.

Storage: Microsoft Learn says Loop files in OneDrive and SharePoint locations follow the quotas of those storage locations (https://learn.microsoft.com/microsoft-365/loop/loop-compliance-summary). With notes now created in the organiser's OneDrive, expect their size to count against that location. A licence or price specific to this change is not yet published.

## Scope

**Meetings:** non-channel Teams meetings. Channel meeting notes are not changing (MC1523076). Only newly created notes are affected; existing notes are not moved.

**Notes covered:** Loop-powered collaborative meeting notes and Facilitator notes, per the roadmap description.

**Clouds and rollout:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC; the notice's schedule names Worldwide, with rollout from mid-November 2026 to late November 2026. Microsoft Learn's Loop requirements page lists Loop components in Teams, including meeting notes, as available in the commercial cloud and in US government cloud environments (GCC, GCC High, DoD).

**Platforms:** Android, Desktop, iOS, Mac and Web, per the record.

**Prerequisites:** the notes feature must be available in the tenant; see the controls below. To initiate Facilitator, a user needs an eligible Microsoft 365 base licence, an eligible Microsoft Teams licence and a Microsoft Copilot licence, with Facilitator allowed for that user and Loop experiences in Teams turned on.

## Governance guidance

### Before rollout

- Find internal guidance, runbooks and helpdesk scripts that say meeting notes live in the OneDrive of whoever starts them, and rewrite them for organiser-owned storage of new non-channel notes, as MC1523076 asks.
- Check that the retention policies, holds and eDiscovery collections you use for meeting content reach organisers' OneDrive locations, since MC1523076 asks administrators to review data location and retention policies.
- Check the current value of the tenant's collaborative meeting notes setting (first row below) so you know whether notes are being created at all.

### At rollout

- Brief Teams champions and the helpdesk that, as the storage update reaches users during the rollout beginning in mid-November 2026 and expected to complete by late November 2026, newly created notes appear in the organiser's OneDrive Meetings folder; older notes stay where they are.
- Run a test meeting in which someone other than the organiser starts notes and Facilitator, then confirm which OneDrive holds the file and that participants can open it.

### After rollout

- Add organiser OneDrive accounts to your leaver checklist, since the standard OneDrive policy applies when an organiser leaves.
- Re-read Microsoft Learn's Loop storage and Facilitator pages, which describe the earlier storage location at the time of writing, and update your guidance when they change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether collaborative meeting notes can be created in Teams (tenant-wide, not where they are stored)</strong><br><small>Tenant</small><br><small class="controls__note">Applies to the entire tenant; not configurable per user. Does not apply to notes in Teams New Calendar, which use Cloud Policy. Needs the latest SharePoint PowerShell module. Does not choose the storage location.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -IsCollabMeetingNotesFluidEnabled $true</code> <a href="https://learn.microsoft.com/microsoft-365/loop/loop-components-configuration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Facilitator is allowed or blocked for the organisation</strong><br><small>App</small><br><small class="controls__note">Facilitator only. Allowed by default, but blocked if all apps are blocked. The reference calls both its $true and $false examples unblocking, so use Allow or Block in the Teams admin center to block.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Facilitator › Allow or Block <a href="https://learn.microsoft.com/microsoftteams/facilitator-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Choice between organiser's and note-starter's OneDrive for new meeting notes</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026); the notice says no configuration is required.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No row below chooses where notes are stored: Microsoft Learn documents no setting that selects between the organiser's and the note-starter's OneDrive, and the notice says no configuration is required. The collaborative meeting notes property decides whether notes can be created, for the whole tenant, so it is a switch for the feature and not a way to keep the old location.

Microsoft Learn's admin policies page gives two places for this. IsCollabMeetingNotesFluidEnabled is described there as controlling collaborative meeting notes creation in Teams and applying to the entire tenant, and the Facilitator page names it for AI-generated notes; but that page's creation-path table lists IsLoopEnabled for a Teams private meeting, so check both properties. For notes created in Teams New Calendar, the same page says the SharePoint property does not apply and lists the Cloud Policy settings Create and view Loop files in Microsoft apps that support Loop and Create and view Loop files in Outlook instead (https://learn.microsoft.com/microsoft-365/loop/loop-admin-configuration).

Blocking Facilitator stops Facilitator, not Loop notes started by people.

## Open questions

- Which setting governs organiser-owned notes: IsCollabMeetingNotesFluidEnabled, IsLoopEnabled or, for Teams New Calendar, Cloud Policy? Watch the Loop admin policies page on Microsoft Learn.
- What happens when the organiser has no OneDrive for Business, is external to the tenant or has left? Watch MC1523076 and the Loop storage page.
- How is access for participants and co-organisers granted on a file owned by the organiser, and what happens if the organiser changes or the meeting is transferred?
- Does the change reach GCC on the same timetable? The roadmap record lists GCC, but the notice's schedule names Worldwide only.

<!-- rationale
risk: Medium. Newly created notes move from the note-starter's OneDrive to the organiser's, so retention, hold and leaver handling that assumes the starter's OneDrive no longer matches where new notes are; Microsoft's notice asks administrators to review this.
cost: Low. Microsoft's notice and the roadmap item name no new licence or charge; the cost is admin time to update guidance, plus where the files count against OneDrive storage. Microsoft Learn says Loop files in OneDrive follow that location's quotas.
impact: Medium. Anyone who starts notes in a meeting they did not organise stops owning the file, and organisers become owners of files others created. The notes experience in Teams is described as unchanged for participants.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control that the page tells readers to check is represented in its controls table. | Found: Check that the retention policies, holds and eDiscovery collections you use for meeting content reach organisers' OneDrive locations; check both properties. The table contains only collaborative notes creation, Facilitator availability and the storage-choice gap. | Fix: The retention-policy, hold and eDiscovery-collection scoping checklist step has no corresponding row; replace it with 'Ask compliance owners to review the effect of organiser-owned storage on meeting-content governance, as MC1523076 recommends.' In Governance controls, remove 'so check both properties' because IsLoopEnabled has no row. Do not add control rows in this correction.
-->
