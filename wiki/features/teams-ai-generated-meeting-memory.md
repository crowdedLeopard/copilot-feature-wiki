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
version: 2
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
