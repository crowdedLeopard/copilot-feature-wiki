---
title: "Microsoft Teams: AI-generated meeting memory for knowledge retention"
slug: "teams-ai-generated-meeting-memory"
roadmapId: 558933
topic: "m365-copilot"
products: ["Microsoft Teams","Microsoft Copilot (Microsoft 365)"]
summary: "Teams will store an AI-generated .meeting memory file for recapped meetings so Copilot and Facilitator can answer questions after the transcript expires. On by default, kept five years unless admins or Purview say otherwise."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "high"
cost: "none"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "per-user"
  notes: "Memory is generated for meetings with intelligent recap on and a Copilot-licensed participant invited. Preview is limited to Teams Technology Adoption Program tenants; no additional licence stated."
audiences: ["compliance","m365-admin","security","service-owner","change-adoption"]
tags: ["teams","copilot","facilitator","meeting-memory","intelligent-recap","retention","sharepoint-embedded","ediscovery","meeting-policy"]
sources:
  - title: "Microsoft 365 Roadmap 558933"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558933"
    kind: "roadmap"
  - title: "Memory for Microsoft Teams Meetings"
    url: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Copilot in meetings and events (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    kind: "learn"
  - title: "Retention of memory containers (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    kind: "learn"
  - title: "Retention of memory containers (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","purview-retention-last-accessed-sharepoint-onedrive"]
controls:
  - governs: "Whether meeting memory is generated and for which meetings"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting memory"
      docs: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
    api: null
    note: "On for all meetings, Only for meetings with transcription, or Off. Applies through meeting policy assignment."
  - governs: "Inspecting and removing generated memory for a meeting"
    scope: "other"
    ui: null
    api:
      kind: "powershell"
      call: "Get-AIGeneratedKnowledgeContainer -ThreadId <id>; Remove-AIGeneratedKnowledge -ThreadId <id>"
      docs: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
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
  - governs: "Retention of memory containers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
confidence: "high"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-11-03T00:14:11"
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
  claims: 59
  confirmed: 53
  unconfirmed: 2
  contradicted: 4
  attempts: 1
---

## What's changing

For meetings where intelligent recap is on and at least one Copilot-licensed participant was invited, Teams will generate a **meeting memory** file (extension `.meeting`, formerly "AI meeting archive"). It holds meeting metadata (title, date, invite list) and an AI-generated summary of key insights and discussion. Microsoft states that no raw transcript excerpts or user data are included, only AI-generated content.

The file is stored in a **Teams-owned SharePoint Embedded container**, not in any user's OneDrive, and is not visible or openable by users. Copilot, Facilitator and other Microsoft AI tools read it to answer questions about the meeting for people who had access to the meeting (or were given access through recap sharing), and responses cite the recap or invite. Search indexes the file but redirects to the recap page. The file cannot be moved, renamed or modified. Memory is not generated for meetings with encrypting sensitivity labels, end-to-end encryption, or restricted copy and forward.

Memory generation is **on by default** for each tenant. Default expiry is **five years (1,825 days)**, configurable in the Teams admin center; Purview retention policies take precedence over that setting. Memory is not deleted when the transcript or recording expires; organisers delete it by deleting recap content, and Teams admins can delete it with `Remove-AIGeneratedKnowledge`. Memory files are in scope for eDiscovery and hold through the All SharePoint Sites workload or by container URL; they do not yet support Information Barriers. Preview is limited to Teams TAP tenants; General Availability is targeted for January 2027.

## Why it matters

This is a new category of record: derived, machine-written knowledge that outlives the transcript and that users cannot see. Organisations that set transcript retention to 60 or 90 days to limit the life of meeting content will find Copilot still answering questions about those meetings years later unless they change the memory expiry or scope a Purview policy. It is also defaulted on, so when GA arrives it will apply to every recapped meeting without an admin decision.

For compliance and records teams the questions are concrete: is a `.meeting` file a record, what is its retention class, how do you produce it in eDiscovery (by container URL), and how do you explain to staff that AI retains "key insights" from meetings they attended.

## Risk assessment

**Data exposure**
- The memory is accessible only through AI tools to people with meeting access, which is the same boundary as the recap. Recap sharing extends that boundary.
- Information Barriers are not supported, so segmented organisations have a gap.
- A disabled organiser's meetings keep their memory until expiry, since storage is tenant owned.

**Security & identity**
- Stored in Teams-managed containers that admins cannot manage directly via SharePoint Embedded APIs; recovery after expiry is impossible.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Default on, five-year retention, invisible files: a classic "we did not know this existed" scenario during an audit or litigation.
- Setting the policy to "only for meetings with transcription" couples memory to the transcript decision, which may be the simpler governance story.

## Cost and licensing

- No additional licence stated. Requires Copilot-licensed participants and intelligent recap (Teams Premium or Copilot).
- Storage in Teams-owned containers; no customer-visible storage charge is documented.
- Indirect: compliance analysis, policy changes, communication.

## Scope

- All tenants (default on); memory created for meetings with intelligent recap and a Copilot-licensed invitee.
- Worldwide (standard multi-tenant). Preview limited to TAP tenants.
- Not generated for encrypted or copy-restricted meetings.

## Governance guidance

**Before rollout**
- Decide, with legal and records, whether memory should be On for all meetings, Only for meetings with transcription, or Off, and what expiry applies.
- Classify `.meeting` files in your retention schedule and decide whether a Purview policy should target the memory containers.
- Prepare staff communications explaining what is retained and for how long.

**At rollout**
- Set the **Meeting memory** meeting policy and the default expiration in the Teams admin center before GA reaches the tenant.
- Record the PowerShell procedure for finding container URLs (`Get-AIGeneratedKnowledgeContainer`) and deleting memory (`Remove-AIGeneratedKnowledge`) in the eDiscovery runbook.

**After rollout**
- Test an eDiscovery search against a known meeting's container URL.
- Review expiry annually alongside transcript and recording retention.
- Watch for Information Barriers support and for GA date changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether meeting memory is generated and for which meetings</strong><br><small>User</small><br><small class="controls__note">On for all meetings, Only for meetings with transcription, or Off. Applies through meeting policy assignment.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting memory <a href="https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Inspecting and removing generated memory for a meeting</strong></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AIGeneratedKnowledgeContainer -ThreadId &lt;id&gt;; Remove-AIGeneratedKnowledge -ThreadId &lt;id&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot in meetings and events</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -Copilot Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retention of memory containers</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The meeting memory policy setting has no documented cmdlet parameter yet, so it is set in the admin center and read back from the policy. The two cmdlets act on content after the fact and need the meeting's thread ID. Memory containers live in SharePoint, so Purview retention and eDiscovery reach them by container URL; Learn describes the precedence between the policy's default expiry and a retention policy. Organisers can also turn off intelligent recap per meeting, which stops memory generation for that meeting.

## Open questions

- Whether the preview tenant restriction lifts before GA and whether default-on will hold at GA.
- Information Barriers support timeline.
- Whether the content of a `.meeting` file can be exported in a human-readable form for subject access requests.

<!-- rationale
risk: High. Default-on, five-year, user-invisible AI-derived records that outlive transcripts and lack Information Barriers support.
cost: None. Included with Copilot and recap licensing.
impact: High. Applies to every recapped meeting in the tenant once GA arrives.
-->

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] summary; What's changing; Why it matters / behaviour: Copilot, Facilitator and other Microsoft AI tools use meeting memory to answer meeting questions. | Found: Copilot and Facilitator use meeting memory to answer questions about a meeting. | Fix: Retain the Learn description but also cite MC1429018 at https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1429018: the notice says Facilitator uses memory at release and Copilot will use it in the future. Explicitly distinguish that release sequencing from Learn's broader description. | Source: https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings
- [contradicted, blocker] What's changing; Risk assessment: Data exposure / applicability: Memory has the same access boundary as the recap, extended by recap sharing. | Found: Memory knowledge is only shared with users who are in the same tenant as the meeting organizer. | Fix: Qualify both access descriptions: users must have meeting or shared-recap access and be in the same tenant as the organiser. Remove 'the same boundary as the recap': https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings explicitly allows sharing a recap with external attendees, whereas MC1429018 restricts memory knowledge to the organiser's tenant.
- [supported, minor] What's changing / behaviour: Opening a memory search result redirects to the meeting recap page. | Found: Opening a memory file from a search point redirects the user to the meeting recap page or meeting invite. | Fix: Complete the destination description: 'redirects to the meeting recap page or meeting invite'. | Source: https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings
- [supported, minor] controls[2].api; Governance controls / command: Set-CsTeamsMeetingPolicy -Identity <policy> -Copilot accepts Enabled, EnabledWithTranscript, EnabledWithTranscriptDefaultOn or Disabled. | Found: PowerShell setting value
Enabled
EnabledWithTranscript
EnabledWithTranscriptDefaultOn
Disabled
Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot Enabled | Fix: Keep the call supported by the cited management article, but note that https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingpolicy currently lists only Enabled and EnabledWithTranscript in its -Copilot parameter description; the management article documents all four values. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events
- [contradicted, blocker] controls[3].api; Governance controls / command: New-RetentionCompliancePolicy alone is the automation equivalent for configuring retention of memory containers. | Found: Policies are not valid until a rule is added (for retention policies) or a label is added (for retention label policies). In addition, at least one location parameter must be defined to create a retention policy or retention label policy. | Fix: Replace the bare cmdlet with a scoped policy-and-rule sequence in Security & Compliance PowerShell: New-RetentionCompliancePolicy -Name <policy> -SharePointLocation <container-url>; New-RetentionComplianceRule -Name <rule> -Policy <policy> -RetentionDuration <days> -RetentionComplianceAction <action>. Explain that the action is Keep, Delete or KeepAndDelete and cite https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule?view=exchange-ps for the rule. Do not imply that creating an unscoped policy alone enforces retention. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps
- [supported, minor] Cost and licensing / licensing: Intelligent recap requires Teams Premium or Microsoft Copilot licensing. | Found: You must assign a Teams Premium license or Microsoft Copilot license to your users. | Fix: Add https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings to sources for the recap licensing statement; preserve the separately stated Copilot-licensed-invitee prerequisite for memory generation. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings
- [unsupported, blocker] front matter: cost; rationale: cost / cost: Meeting memory is included with Copilot and recap licensing, justifying cost none. | Found: Searched: Teams meeting memory licensing pricing storage charges intelligent recap Teams Premium Copilot; "meeting memory" "included" "cost". Read memory prerequisites/storage and intelligent recap licensing: no passage says memory is included at no additional cost. | Fix: Change cost to low for the documented administrative and communications work. Replace the rationale with 'Low. Compliance review, configuration and communication are the known costs; additional memory licensing and storage billing are not yet published.' Keep 'no additional licence stated' distinct from a promise of inclusion or no charge.
- [unsupported, major] Governance controls / behaviour: The meeting memory setting can be read back from the policy. | Found: Searched: "meeting memory" "read" "policy" Teams PowerShell. Opened the memory article, full Get-CsTeamsMeetingPolicy reference and searched Set-CsTeamsMeetingPolicy: no passage identifies a meeting-memory readback property or procedure. | Fix: Remove 'and read back from the policy'. Retain the documented Teams admin center configuration route without implying an undocumented readback capability.
- [contradicted, blocker] Why it matters; rationale: impact; What's changing / record: Memory generation applies as soon as the January General Availability rollout arrives. | Found: The dates above reflect when admin controls become available.
Memory file generation will begin 4 weeks after the setting is released to your organization. | Fix: Keep January CY2027 as the roadmap target, but cite MC1429018 and state its actual sequencing: Targeted Release controls begin early January 2027 and complete mid-January 2027; Worldwide GA controls begin mid-January 2027 and complete late January 2027. Memory file generation begins four weeks after the setting reaches the organisation. Replace 'when GA arrives it will apply to every recapped meeting' and the impact rationale with 'memory generation begins four weeks after controls arrive, for eligible meetings with recap enabled and a Copilot-licensed invitee'.
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The controls table covers the default-expiration setting administrators are instructed to configure. | Found: Set the Meeting memory meeting policy and the default expiration in the Teams admin center before GA reaches the tenant.
The controls rows cover generation, inspection/removal, Copilot, and Purview retention, but not the Teams default-expiration setting. | Fix: Add a separate 'Default expiration of meeting memory files' control row. The cited memory article documents the Teams admin center surface and configurable five-year default, but gives no exact navigation path; research that path and the automation equivalent before populating the row rather than inventing either.
-->
