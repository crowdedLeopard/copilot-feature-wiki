---
title: "Microsoft Teams: tenant meeting policy for who can start recording and transcription"
slug: "microsoft-teams-tenant-policy-controls-who-can-record-and-transcribe"
roadmapId: 579860
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a Teams meeting policy that sets whether organisers, co-organisers or presenters can start recording and transcription, and whether organisers may change it. Targeted December CY2026; Learn does not describe it yet."
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
  notes: "Not yet published for the new policy. Microsoft Learn says organisers with a Teams Premium licence can use meeting options to control who can record and transcribe, and that label and template meeting options require Teams Premium."
audiences: ["m365-admin","compliance","change-adoption"]
tags: ["teams","meeting-policy","meeting-transcripts","transcripts","policy","admin-controls","governance","sensitivity-labels","gcc","gcc-high","dod"]
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
  - title: "Use Teams meeting templates, sensitivity labels, and admin policies together for sensitive meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-templates-sensitivity-labels-policies"
    kind: "learn"
  - title: "Admins - Manage transcription and captions for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
  - title: "IT admins - Create a custom meeting template in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/create-custom-meeting-template"
    kind: "learn"
  - title: "Configure Teams meetings with protection for sensitive data"
    url: "https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection"
    kind: "learn"
  - title: "Use sensitivity labels to protect calendar items, Teams meetings, and chat"
    url: "https://learn.microsoft.com/purview/sensitivity-labels-meetings"
    kind: "learn"
  - title: "Get-CsTeamsMeetingTemplateConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration"
    kind: "learn"
  - title: "Set-Label"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    kind: "learn"
videos: []
related: ["microsoft-teams-automatic-recording-indicator-for-call-queue-calls-on-mobile","teams-intelligent-recap-without-saving-transcript","work-iq-real-time-transcripts"]
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
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Existing control. It switches recording on or off; Microsoft has not said how it combines with the new policy."
  - governs: "Whether meeting transcription is allowed for users with a policy"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "Existing control. Learn says it is both a per-organiser and a per-user policy setting."
  - governs: "Who can record in meetings that use a template (enforced or left to the organiser)"
    scope: "other"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting templates > Add > Recording & transcription > Who can record"
      docs: "https://learn.microsoft.com/microsoftteams/create-custom-meeting-template"
    api:
      kind: "powershell"
      call: "Get-CsTeamsMeetingTemplateConfiguration"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration"
    note: "Existing alternative, per meeting; needs Teams Premium. The cmdlet only fetches templates and their options; no setter was found."
  - governs: "Who can record and transcribe in meetings that carry a sensitivity label"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Information protection > Labels > Create a label > Choose protection settings for types of items you selected > Protect Teams meetings and chats > Settings for Teams meetings and chats > Control who can record and transcribe"
      docs: "https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label name> -TeamsWhoCanRecord <value>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Existing alternative, per meeting; needs Teams Premium. On Define the scope for this label, select Files & other data assets, Emails and Meetings. Set-Label runs in Security & Compliance PowerShell."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; Learn does not yet document the new tenant policy."
  - date: "2026-11-16"
    note: "Corrected control paths and the auto-recording command, removed an unsupported claim about existing policies, and added template and sensitivity label rows."
  - date: "2026-11-16"
    note: "Corrected the sensitivity label path and Set-Label call, narrowed the Meet Now limitation to the Who can record and transcribe option, and removed the auto-recording row."
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
---

## What's changing

Microsoft plans to let Teams administrators use meeting policies to decide who can start recording and transcription in a meeting. According to the roadmap item, an administrator can restrict these permissions to organisers and co-organisers, or extend them to presenters, and can decide whether organisers may change the setting or whether the policy enforces it.

Microsoft Learn does not describe this tenant policy yet, so the behaviour above is the roadmap's description. Today Learn documents who can record as a choice made by the meeting organiser (organisers and co-organisers, or organisers, co-organisers and presenters), which a meeting template or sensitivity label can enforce. Learn also states that no admin policy exists for **Who can record**: a meeting policy can only disable recording completely.

The roadmap item is In development, targeted for December CY2026 as General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, Desktop, iOS and Mac. It has no preview date and no more-info link. The target is Microsoft's plan, not a commitment, and no Message Center post for the item was available at the time of writing (November 2026).

## Why it matters

If the policy ships as described, administrators get a tenant-level way to apply one recording and transcription permission model, instead of relying on each organiser's meeting options or on templates and labels that only cover meetings that use them. That matters most where recordings of sensitive meetings must not be started by every presenter.

If nobody acts, neither the roadmap nor Learn says existing behaviour changes, so organisers keep choosing for themselves. The decision to prepare for is enforcement: an enforced policy would remove the organiser's option, and the wiki expects support questions from presenters who can no longer record.

## Risk assessment

**Data exposure**

- Learn says a recorded meeting is uploaded to the organiser's OneDrive (private meetings) or SharePoint (channel meetings), so a wider group allowed to start recording means more content in that storage. Limiting the permission to organisers and co-organisers would narrow who can create it.
- Microsoft Learn documents no link between the new policy and meeting sensitivity. Sensitivity labels and meeting templates remain the documented way to enforce who can record in specific meetings.

**Security & identity**

- The roadmap names organisers and co-organisers as the restricted option and presenters as the wider one, so meeting role assignment becomes the permission boundary for recording. Check who gets promoted to presenter.
- Learn says that both the organiser and the recording initiator need recording permissions under the existing recording policy. How the new policy combines with that rule is not stated.

**Autonomy & actions**

- No autonomous behaviour is described: the policy governs who may start recording and transcription, not whether either starts by itself.
- Learn notes that when organisers turn off Microsoft Copilot in Teams meetings and events, recording and transcription are also turned off, so this policy would not be the only switch that stops them.

**Change & support**

- If the policy is enforced, organisers lose the per-meeting choice and presenters may lose the record option. Expect help-desk questions and tell organisers before it lands.
- Existing recording and transcription policies are documented separately; Microsoft has not yet explained how they interact with the new policy.

## Cost and licensing

No licence or price is published for the new meeting policy (Not yet published), and the roadmap item names none.

For context, Learn says organisers with a Teams Premium licence can use their meeting options to control who can record and transcribe, and that meeting options in sensitivity labels and custom meeting templates require Teams Premium ("Manage Teams recording policies for meetings and events"; "Configure Teams meetings with protection for sensitive data"). Whether the new tenant policy carries the same requirement is not stated.

The only cost the sources support is administrator time and communication to organisers. Learn says recordings are stored in the organiser's OneDrive or SharePoint, so wider recording permission can add to storage use.

## Scope

- **Clouds, per the roadmap record:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Platforms, per the roadmap record:** Android, Desktop, iOS and Mac.
- **Who is affected:** meeting organisers, co-organisers and presenters, according to the roadmap description.
- **Roles to configure it:** Not yet published. Learn does not name the role for the new policy.
- **Rollout and default:** targeted for December CY2026. Not stated whether the policy restricts anything on arrival.

## Governance guidance

### Before rollout

- Record the current **Meeting recording** and **Transcription** values in each Teams meeting policy, so you know who can record today.
- Identify the sensitivity labels and meeting templates that already enforce **Who can record**, so you can see which meetings the new policy would overlap.
- Decide which groups should be limited to organisers and co-organisers and which could extend to presenters.

### At rollout

- Watch Message center and the Teams admin center meeting policies page for the new setting before assigning it; Learn does not document it yet.
- Pilot the policy with one group through a custom meeting policy before changing the Global policy.
- Tell organisers whether they can still change the setting or whether the policy enforces it.

### After rollout

- Test a meeting as presenter and as co-organiser to confirm the record and transcribe options match the policy.
- Compare "cannot record" support tickets with the policy assignments.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can start recording and transcription (the planned tenant policy)</strong><br><small>User</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). The roadmap describes it as a Teams meeting policy setting.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether meeting recording is allowed for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. It switches recording on or off; Microsoft has not said how it combines with the new policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meeting transcription is allowed for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. Learn says it is both a per-organiser and a per-user policy setting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can record in meetings that use a template (enforced or left to the organiser)</strong><br><small class="controls__note">Existing alternative, per meeting; needs Teams Premium. The cmdlet only fetches templates and their options; no setter was found.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting templates › Add › Recording &amp; transcription › Who can record <a href="https://learn.microsoft.com/microsoftteams/create-custom-meeting-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-CsTeamsMeetingTemplateConfiguration</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can record and transcribe in meetings that carry a sensitivity label</strong><br><small class="controls__note">Existing alternative, per meeting; needs Teams Premium. On Define the scope for this label, select Files &amp; other data assets, Emails and Meetings. Set-Label runs in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information protection › Labels › Create a label › Choose protection settings for types of items you selected › Protect Teams meetings and chats › Settings for Teams meetings and chats › Control who can record and transcribe <a href="https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label name&gt; -TeamsWhoCanRecord &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no admin centre path or PowerShell parameter for the new policy. Learn states that there is no admin policy for **Who can record**.

The existing recording and transcription toggles decide whether recording or transcription is allowed at all, not who within a meeting can start it. Learn says that to prevent meetings and events being recorded entirely you must use the recording policies in the Teams admin center, which a template or sensitivity label cannot do. Templates and labels set who can record per meeting and need Teams Premium. A label's **Who can record and transcribe** option does not take effect in Meet Now meetings.

## Open questions

- What are the setting names, admin centre path and PowerShell parameter for the new policy? Watch the Set-CsTeamsMeetingPolicy reference and the Teams recording policies page on Microsoft Learn.
- Does the policy need a Teams Premium or Copilot licence, as the organiser-level setting does? Watch Message center and the Teams Premium licensing pages.
- What is the default, and does the policy restrict anything until an admin configures it?
- How does an enforced policy interact with meeting templates, sensitivity labels and the Copilot setting On with saved transcript required?
- Does the policy cover recording and transcription together or as two settings, and does it apply to channel meetings and events?

<!-- rationale
risk: Low. The roadmap describes a new admin control and states no default, so the rating assumes today's behaviour continues: organisers choose who can record, and nothing new is enforced until Microsoft documents otherwise.
cost: Low. Admin time and organiser communication are the only costs the sources show; the licence for the new policy is not yet published, and the organiser-level setting it parallels is marked as needing Teams Premium.
impact: Medium. Organisers and presenters notice if an admin enforces it: presenters who can record today could lose that ability, and organisers could lose the per-meeting choice.
-->

<!-- verifier-findings (2026-11-16, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] controls[4].ui; Governance controls: sensitivity-label row / admin-path: The label creation path reaches Control who can record and transcribe through Protect Teams meetings and chats. | Found: On the Define the scope for this label page, make sure Files & other data assets, Emails, and Meetings are selected. ... On the Choose protection settings for types of items you selected page, select Protect Teams meetings and chats | Fix: Insert 'Define the scope for this label' after 'Create a label' and before 'Choose protection settings for types of items you selected' in controls[4].ui.path and the rendered row. Keep the existing note specifying Files & other data assets, Emails and Meetings; the cited procedure includes this scope-selection page. | Source: https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection
-->
