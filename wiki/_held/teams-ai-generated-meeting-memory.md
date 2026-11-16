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
cost: "low"
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
  - title: "MC1429018"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1429018"
    kind: "message-center"
  - title: "Memory for Microsoft Teams Meetings"
    url: "https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings"
    kind: "learn"
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Copilot in meetings and events (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events"
    kind: "learn"
  - title: "Create and configure a retention policy (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "New-RetentionComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule?view=exchange-ps"
    kind: "learn"
videos: []
related: []
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
      call: "New-RetentionCompliancePolicy -Name <policy> -SharePointLocation <container-url>; New-RetentionComplianceRule -Name <rule> -Policy <policy> -RetentionDuration <days> -RetentionComplianceAction <Keep|Delete|KeepAndDelete>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    note: "Security & Compliance PowerShell. A policy needs a location and a rule before it is valid."
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
  - date: "2026-11-16"
    note: "Corrected access boundary (same-tenant condition), rollout sequencing per MC1429018, Purview retention call, cost rating, and removed an undocumented policy readback claim."
  - date: "2026-11-16"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 63
  unconfirmed: 1
  contradicted: 2
  attempts: 2
  hash: "a855cb6bb97c65010525bcf70f9826a2"
---

## What's changing

For meetings where intelligent recap is on and at least one Copilot-licensed participant was invited, Teams will generate a **meeting memory** file (extension `.meeting`, formerly "AI meeting archive"). It holds meeting metadata (title, date, invite list) and an AI-generated summary of key insights and discussion. Microsoft states that no raw transcript excerpts or user data are included, only AI-generated content.

The file is stored in a **Teams-owned SharePoint Embedded container**, not in any user's OneDrive, and is not visible or openable by users. Learn says Copilot, Facilitator and other Microsoft AI tools read it to answer questions about the meeting for people invited to the meeting or given access by sharing the meeting recap. Microsoft's notice MC1429018 adds that memory knowledge is only shared with users in the same tenant as the meeting organiser, and that at release Facilitator will use the memory to answer questions about meetings, with Copilot to follow in the future. Responses cite the recap or invite. Search indexes the file but opening it redirects to the meeting recap page or meeting invite. The file cannot be moved, renamed or modified. Memory is not generated for meetings with encrypting sensitivity labels, end-to-end encryption, or restricted copy and forward.

Memory generation is **on by default** for each tenant. Default expiry is **five years (1,825 days)**, configurable in the Teams admin center; Purview retention policies take precedence over that setting. Memory is not deleted when the transcript or recording expires; organisers delete it by deleting recap content, and Teams admins can delete it with `Remove-AIGeneratedKnowledge`. Memory files are in scope for eDiscovery and hold through the All SharePoint Sites workload or by container URL; they do not yet support Information Barriers.

The roadmap item is In development with a target of January CY2027. MC1429018 (updated 30 October 2026) gives the sequence: Targeted Release controls begin early January 2027 and complete mid-January 2027; Worldwide General Availability controls begin mid-January 2027 and complete late January 2027. Teams admin center controls arrive about four weeks before memory file generation begins, so generation begins four weeks after the setting reaches the organisation. Learn marks meeting memory as in preview and limited to Teams Technology Adoption Program tenants.

## Why it matters

This is a new category of record: derived, machine-written knowledge that outlives the transcript and that users cannot see. Organisations that set transcript retention to 60 or 90 days to limit the life of meeting content will find Copilot and Facilitator still able to answer questions about those meetings years later unless they change the memory expiry or scope a Purview policy. It is also defaulted on, so memory generation begins four weeks after the controls arrive, for eligible meetings with recap enabled and a Copilot-licensed invitee, without an admin decision.

For compliance and records teams the questions are concrete: is a `.meeting` file a record, what is its retention class, how do you produce it in eDiscovery (by container URL), and how do you explain to staff that AI retains "key insights" from meetings they attended.

## Risk assessment

**Data exposure**
- Learn says memory is available to users invited to the meeting and users given access by sharing the meeting recap, and MC1429018 says memory knowledge is only shared with users in the same tenant as the meeting organiser. Both conditions apply, so an external attendee given the recap is not described as receiving answers grounded in the memory.
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

- No additional licence stated for meeting memory. Learn lists a Copilot-licensed invited participant and intelligent recap as conditions for generation, and intelligent recap needs a Teams Premium licence or a Microsoft Copilot licence. Additional memory licensing is not yet published.
- Storage is in Teams-owned containers; no customer-visible storage charge is documented, and storage billing is not yet published.
- Indirect: compliance analysis, policy changes, communication.

## Scope

- All tenants (default on); memory created for meetings with intelligent recap and a Copilot-licensed invitee.
- Worldwide (standard multi-tenant). Preview limited to TAP tenants.
- Not generated for encrypted or copy-restricted meetings.

## Governance guidance

### Before rollout
- Decide, with legal and records, whether memory should be On for all meetings, Only for meetings with transcription, or Off, and what expiry applies.
- Classify `.meeting` files in your retention schedule and decide whether a Purview policy should target the memory containers.
- Prepare staff communications explaining what is retained and for how long.

### At rollout
- Set the **Meeting memory** meeting policy and the default expiration in the Teams admin center before memory generation begins, four weeks after the setting reaches the tenant (MC1429018).
- Record the PowerShell procedure for finding container URLs (`Get-AIGeneratedKnowledgeContainer`) and deleting memory (`Remove-AIGeneratedKnowledge`) in the eDiscovery runbook.

### After rollout
- Test an eDiscovery search against a known meeting's container URL.
- Review expiry annually alongside transcript and recording retention.
- Watch for Information Barriers support and for rollout date changes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether meeting memory is generated and for which meetings</strong><br><small>User</small><br><small class="controls__note">On for all meetings, Only for meetings with transcription, or Off. Applies through meeting policy assignment.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting memory <a href="https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Inspecting and removing generated memory for a meeting</strong></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AIGeneratedKnowledgeContainer -ThreadId &lt;id&gt;; Remove-AIGeneratedKnowledge -ThreadId &lt;id&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/ai-archive-teams-meetings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Copilot in meetings and events</strong><br><small>User</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy&gt; -Copilot Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retention of memory containers</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell. A policy needs a location and a rule before it is valid.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies#create-and-configure-a-retention-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy&gt; -SharePointLocation &lt;container-url&gt;; New-RetentionComplianceRule -Name &lt;rule&gt; -Policy &lt;policy&gt; -RetentionDuration &lt;days&gt; -RetentionComplianceAction &lt;Keep|Delete|KeepAndDelete&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The meeting memory policy setting has no documented cmdlet parameter yet, so it is set in the admin center. The Learn page says the default expiration of memory files is controlled through the Teams admin center and gives no navigation path for it, so it is not a row in the table. The two Teams cmdlets act on content after the fact and need the meeting's thread ID. Memory containers live in SharePoint, so Purview retention and eDiscovery reach them by container URL; Learn describes the precedence between the policy's default expiry and a retention policy. Organisers can also turn off intelligent recap per meeting, which stops memory generation for that meeting.

The Purview retention call is a sequence in Security & Compliance PowerShell: a policy needs at least one location parameter and is not valid until a rule is added, and the rule's action is Keep, Delete or KeepAndDelete. The rule cmdlet is documented at https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule?view=exchange-ps. An unscoped policy on its own does not enforce retention.

## Open questions

- Whether the preview tenant restriction lifts before GA and whether default-on will hold at GA.
- Information Barriers support timeline.
- Whether the content of a `.meeting` file can be exported in a human-readable form for subject access requests.

<!-- rationale
risk: High. Default-on, five-year, user-invisible AI-derived records that outlive transcripts and lack Information Barriers support.
cost: Low. Compliance review, configuration and communication are the known costs; additional memory licensing and storage billing are not yet published.
impact: High. Memory generation begins four weeks after the controls arrive, for eligible meetings with Intelligent Recap enabled and a Copilot-licensed invitee, so most recapped meetings are affected unless an admin changes the default.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls prose and table / absence: No cmdlet parameter for the meeting memory policy setting is documented. | Found: -AllowMeetingKnowledgeGeneration: This setting allows admins to control whether an AI-generated meeting knowledge file is created for meetings organized by the user. This feature has not been fully released yet, so the setting will have no effect. | Fix: Set controls[0].api.kind to 'powershell', call to 'Set-CsTeamsMeetingPolicy -Identity <policy> -AllowMeetingKnowledgeGeneration <Boolean>', and docs to https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingpolicy; mirror this in the rendered table. Replace the prose absence assertion with 'PowerShell documents -AllowMeetingKnowledgeGeneration, but its reference warns that the feature is not fully released and the setting currently has no effect.' Add that same warning to the control note; do not describe this as an effective pre-release switch. | Source: https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingpolicy
- [unsupported, blocker] controls[3].api; Governance controls table / command: The linked New-RetentionCompliancePolicy reference documents the entire printed policy-and-rule retention sequence. | Found: Searched: New-RetentionComplianceRule, RetentionDuration and RetentionComplianceAction in the cited New-RetentionCompliancePolicy reference. It links to the separate rule reference but does not document the rule's parameters; both references were opened. | Fix: Keep the complete, separately cited policy-and-rule procedure in the prose. In controls[3].api and its rendered cell, use only 'New-RetentionComplianceRule -Name <rule> -Policy <existing-policy> -RetentionDuration <days> -RetentionComplianceAction <Keep|Delete|KeepAndDelete>' and set docs to https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule?view=exchange-ps. Change the note to 'Security & Compliance PowerShell. Requires an existing policy scoped to the memory container URL.' This makes the table call and its single reference agree without adding a row.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].api; Governance controls table / command: Set-CsTeamsMeetingPolicy -Identity <policy> -Copilot supports Enabled, EnabledWithTranscript, EnabledWithTranscriptDefaultOn and Disabled. | Found: On | Enabled; On with saved transcript required | EnabledWithTranscript; On with transcript saved by default | EnabledWithTranscriptDefaultOn; Off | Disabled | Fix: Add a qualification to this control note: 'The Copilot management guide lists these four values; the Set-CsTeamsMeetingPolicy reference currently lists only Enabled and EnabledWithTranscript.' Cite https://learn.microsoft.com/powershell/module/teams/set-csteamsmeetingpolicy for that reference discrepancy. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription#manage-copilot-for-teams-meetings-and-events
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist instructs admins to configure default expiration, but the controls table omits that control. | Found: Set the Meeting memory meeting policy and the default expiration in the Teams admin center ... The Learn page says the default expiration ... gives no navigation path for it, so it is not a row in the table. | Fix: Remove 'and the default expiration' from the At rollout checklist instruction. Retain the prose describing configurable expiration and the missing documented UI path; no additional control row is requested.
-->
