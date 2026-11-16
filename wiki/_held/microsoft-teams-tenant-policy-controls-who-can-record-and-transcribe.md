---
title: "Microsoft Teams: tenant meeting policy for who can start recording and transcription"
slug: "microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe"
roadmapId: 579860
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a Teams meeting policy that sets whether organisers, co-organisers or presenters can start recording and transcription, and whether organisers may change it. Targeted December CY2026; no action yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for the new policy. Microsoft Learn marks today's organiser-level \"Who can record and transcribe\" setting as needing a Teams Premium or Copilot licence."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","transcripts","policy","admin-controls","governance","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 579860"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=579860"
    kind: "roadmap"
  - title: "Manage Teams recording policies for meetings and events"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Manage Microsoft Teams meeting recording and transcription options for sensitive meetings"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","work-iq-real-time-transcripts","teams-ai-generated-meeting-memory"]
controls:
  - governs: "Who can start recording and transcription (the planned tenant policy)"
    scope: "user"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026). The roadmap describes it as a Teams meeting policy setting."
  - governs: "Whether meeting recording is allowed for users with a policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Existing control. It switches recording on or off; Microsoft has not said how it combines with the new policy."
  - governs: "Whether meeting transcription is allowed for users with a policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Existing control. Learn says it is both a per-organiser and a per-user setting."
  - governs: "Whether organisers see Record and transcribe automatically in Meeting options"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AutoRecording"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Existing control. Learn describes it as a PowerShell policy; it governs auto-recording, not who can start recording."
  - governs: "Who can record and transcribe in a given meeting, today (organiser setting)"
    scope: "other"
    ui:
      surface: "Teams meeting options (organiser)"
      path: "Meeting options > Who can record and transcribe"
      docs: "https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options"
    api: null
    note: "Existing alternative. Marked Teams Premium/Copilot licence; admins can enforce it with meeting templates or sensitivity labels, not an admin policy."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; Learn does not yet document the new tenant policy."
version: 1
---

## What's changing

Microsoft plans to let Teams administrators use meeting policies to decide who can start recording and transcription in a meeting. According to the roadmap item, an administrator can restrict these permissions to organisers and co-organisers, or extend them to presenters, and can decide whether organisers may change the setting or whether the policy enforces it.

Microsoft Learn does not describe this tenant policy yet, so the behaviour above is the roadmap's description. Today, Learn documents "Who can record and transcribe" as a meeting-organiser setting with two options (organisers and co-organisers, or organisers, co-organisers and presenters), which can also be enforced through meeting templates or sensitivity labels. Its comparison table lists no admin policy for that setting.

The roadmap item is In development, targeted for December CY2026 as General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, Desktop, iOS and Mac. It has no preview date and no more-info link. The target is Microsoft's plan, not a commitment.

## Why it matters

If the policy ships as described, administrators get a tenant-level way to apply one recording and transcription permission model, instead of relying on each organiser's meeting options or on templates and labels that only cover some meetings. That matters most where recordings of sensitive meetings must not be started by every presenter.

If nobody acts, the roadmap and Learn give no indication that existing behaviour changes: organisers keep choosing for themselves. Expect the decision to be about enforcement, because an enforced policy removes the organiser's option and will generate support questions from presenters who can no longer record.

## Risk assessment

**Data exposure**

- Recordings and transcripts are stored in the organiser's OneDrive (or in SharePoint for channel meetings), so a wider group allowed to start recording means more content in that storage. A policy limited to organisers and co-organisers narrows who can create it.
- Microsoft Learn documents no setting that ties the new policy to meeting sensitivity; sensitivity labels and templates remain the documented way to enforce who can record for specific meetings.

**Security & identity**

- Organisers and co-organisers are the roles the roadmap names as the restricted option; presenters are the wider option. Meeting role assignment therefore becomes a permission boundary for recording, so check who is promoted to presenter.
- The policy is described as a tenant meeting policy, so Learn's existing model applies by analogy only: meeting policies are assigned to users and groups. Microsoft has not confirmed how this one is assigned.

**Autonomy & actions**

- No autonomous behaviour is described. The policy governs who a person can allow to start recording and transcription; it does not start either by itself.
- Learn states that when organisers turn off Microsoft Copilot in Teams meetings and events, recording and transcription are also turned off, so this policy is not the only switch that stops them.

**Change & support**

- If the policy is enforced, organisers lose the per-meeting choice and presenters may lose the ability to record. Expect help-desk questions about a missing record option; communicate the change before it lands.
- Existing recording, transcription and auto-recording policies stay as they are today. Check how the new policy combines with them once Microsoft documents it.

## Cost and licensing

No licence or price is published for the new meeting policy (Not yet published), and the roadmap item names none.

For context, the Learn page "Manage Microsoft Teams meeting recording and transcription options for sensitive meetings" marks the organiser-level "Who can record and transcribe" setting as needing a Teams Premium or Copilot licence. Whether the new tenant policy carries the same requirement is not stated.

The only cost the sources support is administrator time and communication to organisers. Recordings count towards the organiser's OneDrive or SharePoint storage; Learn notes that the recording policy does not configure or validate that storage.

## Scope

- **Clouds, per the roadmap record:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Platforms, per the roadmap record:** Android, Desktop, iOS and Mac.
- **Who is affected:** meeting organisers, co-organisers and presenters, according to the roadmap description.
- **Roles to configure it:** not yet published. Today's meeting recording and transcription policies are set in the Teams admin center; Learn does not state the role required for the new policy.
- **Rollout and default:** targeted for December CY2026. Not stated whether the policy starts restricting anything on arrival.

## Governance guidance

### Before rollout

- Record the current values of the **Meeting recording** and **Transcription** toggles in each meeting policy, so you know who can record today.
- List the sensitivity labels and meeting templates that already enforce **Who can record and transcribe**, so you can see which meetings the new policy would overlap.
- Decide which groups of users should be limited to organisers and co-organisers, and which can be extended to presenters.

### At rollout

- Check Message center and the Teams admin center meeting policies page for the new setting before assigning it; Learn does not document it yet.
- Pilot the policy with one group through a custom meeting policy before changing the Global policy.
- Tell organisers whether they can still change the setting or whether the policy now enforces it.

### After rollout

- Test a meeting as presenter and as co-organiser to confirm the record and transcribe options match the policy.
- Review support tickets for "cannot record" and compare them with the policy assignments.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can start recording and transcription (the planned tenant policy)</strong><br><small>User</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). The roadmap describes it as a Teams meeting policy setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether meeting recording is allowed for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. It switches recording on or off; Microsoft has not said how it combines with the new policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meeting transcription is allowed for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. Learn says it is both a per-organiser and a per-user setting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether organisers see Record and transcribe automatically in Meeting options</strong><br><small>User</small><br><small class="controls__note">Existing control. Learn describes it as a PowerShell policy; it governs auto-recording, not who can start recording.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AutoRecording</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can record and transcribe in a given meeting, today (organiser setting)</strong><br><small class="controls__note">Existing alternative. Marked Teams Premium/Copilot licence; admins can enforce it with meeting templates or sensitivity labels, not an admin policy.</small></td><td data-label="Admin UI"><strong>Teams meeting options (organiser)</strong><br>Meeting options › Who can record and transcribe <a href="https://learn.microsoft.com/microsoftteams/manage-meeting-recording-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The new policy has no documented admin centre path or PowerShell parameter at the time of writing (November 2026). The Set-CsTeamsMeetingPolicy reference lists no parameter for who can start recording or transcription, and the Learn comparison table shows no admin policy for "Who can record and transcribe".

The existing recording and transcription toggles decide whether recording or transcription is allowed at all, not who within a meeting can start it. Learn states that both the organiser and the person starting the recording need recording permission, and that transcription must be on for the organiser and for the user who starts it. Learn also says that to prevent recording entirely you must use the recording policies in the Teams admin center, which a template or sensitivity label cannot do.

## Open questions

- What are the setting names, admin centre path and PowerShell parameter for the new policy? Watch the Set-CsTeamsMeetingPolicy reference and the Teams recording policy page on Microsoft Learn.
- Does the policy need a Teams Premium or Copilot licence, as the organiser-level setting does? Watch Message center and the Teams Premium licensing pages.
- Which default does the policy have, and does it restrict anything until an admin configures it?
- How does an enforced policy interact with meeting templates, sensitivity labels and the Copilot setting On with saved transcript required?
- Does the policy cover recording and transcription together or as two settings, and does it apply to channel meetings and events?

<!-- rationale
risk: Low. The roadmap item describes a new admin control; its default is not stated, so on today's behaviour organisers keep choosing who can record and transcribe, and nothing is enforced until an admin sets the policy.
cost: Low. Admin time and organiser communication are the only costs the sources show; the licence for the new policy is not yet published, and the organiser-level setting it parallels is marked Teams Premium/Copilot licence.
impact: Medium. Organisers and presenters notice if an admin enforces the setting: presenters who record today could lose that ability, and organisers could lose the option to change it per meeting.
-->
