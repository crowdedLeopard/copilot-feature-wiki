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
defaultState: "admin-opt-in"
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
  - title: "MC1560924: Microsoft Teams: Tenant policy controls who can record and transcribe"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1560924"
    kind: "message-center"
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
    note: "Not yet documented on Microsoft Learn at the time of writing (November 2026). MC1560924 says the control appears under Recording & transcription in the applicable Teams meeting policy in the Teams admin center."
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
    note: "Existing control. It switches recording on or off. MC1560924 says the new policy remains subject to existing recording and transcription availability controls."
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
      path: "Solutions > Information protection > Labels > Create a label > Define the scope for this label > Choose protection settings for types of items you selected > Protect Teams meetings and chats"
      docs: "https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection"
    api:
      kind: "powershell"
      call: "Set-Label -Identity <label name> -TeamsWhoCanRecord <value>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-label"
    note: "Existing alternative, per meeting; needs Teams Premium. Select Files & other data assets, Emails and Meetings in scope; then on Settings for Teams meetings and chats, select Control who can record and transcribe."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-20"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-16"
    note: "First briefing for this roadmap item; Learn does not yet document the new tenant policy."
  - date: "2026-11-16"
    note: "Corrected control paths and the auto-recording command, removed an unsupported claim about existing policies, and added template and sensitivity label rows."
  - date: "2026-11-16"
    note: "Corrected the sensitivity label path and Set-Label call, narrowed the Meet Now limitation to the Who can record and transcribe option, and removed the auto-recording row."
  - date: "2026-11-20"
    note: "Added the Define the scope for this label step to the sensitivity label path; added Message Center post MC1560924 (default, options, precedence and rollout windows) and set the default state to admin opt-in."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-20"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 56
  unconfirmed: 0
  contradicted: 4
  attempts: 1
  hash: "c247db0d2bed598f21add427bc58f7f3"
---

## What's changing

Microsoft plans to let Teams administrators use meeting policies to decide who can start recording and transcription in a meeting. According to the roadmap item, an administrator can restrict these permissions to organisers and co-organisers, or extend them to presenters, and can decide whether organisers may change the setting or whether the policy enforces it.

Microsoft Learn does not describe this tenant policy yet, so the behaviour above is the roadmap's and Message Center's description. Today Learn documents who can record as a choice made by the meeting organiser (organisers and co-organisers, or organisers, co-organisers and presenters), which a meeting template or sensitivity label can enforce. Learn also states that no admin policy exists for **Who can record**: a meeting policy can only disable recording completely.

The roadmap item is In development, targeted for December CY2026 as General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on Android, Desktop, iOS and Mac. It has no preview date and no more-info link. The target is Microsoft's plan, not a commitment.

Microsoft's notice MC1560924 (published 2026-11-20) says a new **Who can record and transcribe** control will appear in the **Recording & transcription** section of the applicable Teams meeting policy in the Teams admin center, as one dropdown with four options: organisers and co-organisers, or organisers, co-organisers and presenters, each with organisers able or unable to change it. It gives the default value as **Organizers, co-organizers, and presenters. Organizers can change**, which it says preserves the current behaviour, and it says no action is required. It also says a sensitivity label that configures this option takes precedence over the meeting policy, and a locked meeting policy takes precedence over a meeting template. Its rollout schedule is Targeted Release (Worldwide) from mid-December 2026; General Availability (Worldwide) in late December 2026; GCC from late December 2026, completing by late January 2027; GCC High from mid-February 2027, completing by late February 2027; and DoD from mid-February 2027, completing by early March 2027. The roadmap record gives December CY2026 for all four clouds.

## Why it matters

If the policy ships as described, administrators get a tenant-level way to apply one recording and transcription permission model, instead of relying on each organiser's meeting options or on templates and labels that only cover meetings that use them. That matters most where recordings of sensitive meetings must not be started by every presenter.

If nobody acts, Microsoft's notice MC1560924 says no action is required and that existing recording and transcription behaviour remains unchanged if the policy is not configured, so organisers keep choosing for themselves. The decision to prepare for is enforcement: an enforced policy would remove the organiser's option, and the wiki expects support questions from presenters who can no longer record.

## Risk assessment

**Data exposure**

- Learn says a recorded meeting is uploaded to the organiser's OneDrive (private meetings) or SharePoint (channel meetings), so a wider group allowed to start recording means more content in that storage. Limiting the permission to organisers and co-organisers would narrow who can create it.
- MC1560924 says a sensitivity label that configures this option takes precedence over the meeting policy, and a locked meeting policy takes precedence over a meeting template. Sensitivity labels and meeting templates remain the documented way to enforce who can record in specific meetings.

**Security & identity**

- The roadmap names organisers and co-organisers as the restricted option and presenters as the wider one, so meeting role assignment becomes the permission boundary for recording. Check who gets promoted to presenter.
- Learn says that both the organiser and the recording initiator need recording permissions under the existing recording policy. How the new policy combines with that rule is not stated.

**Autonomy & actions**

- No autonomous behaviour is described: the policy governs who may start recording and transcription, not whether either starts by itself.
- Learn notes that when organisers turn off Microsoft Copilot in Teams meetings and events, recording and transcription are also turned off, so this policy would not be the only switch that stops them.

**Change & support**

- If the policy is enforced, organisers lose the per-meeting choice and presenters may lose the record option. Expect help-desk questions and tell organisers before it lands.
- MC1560924 says the new policy remains subject to existing recording and transcription availability controls and to any sensitivity label that configures this option.

## Cost and licensing

No licence or price is published for the new meeting policy (Not yet published), and the roadmap item names none.

For context, Learn says organisers with a Teams Premium licence can use their meeting options to control who can record and transcribe, and that meeting options in sensitivity labels and custom meeting templates require Teams Premium ("Manage Teams recording policies for meetings and events"; "Configure Teams meetings with protection for sensitive data"). Whether the new tenant policy carries the same requirement is not stated.

The only cost the sources support is administrator time and communication to organisers. Learn says recordings are stored in the organiser's OneDrive or SharePoint, so wider recording permission can add to storage use.

## Scope

- **Clouds, per the roadmap record:** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD.
- **Platforms, per the roadmap record:** Android, Desktop, iOS and Mac.
- **Who is affected:** meeting organisers, co-organisers and presenters, according to the roadmap description.
- **Roles to configure it:** Not yet published. Learn does not name the role for the new policy.
- **Rollout and default:** targeted for December CY2026. MC1560924 gives the later GCC, GCC High and DoD windows listed under What's changing, and says the default value is organisers, co-organisers and presenters with organisers able to change it.

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
<tr><td data-label="Control"><strong>Who can start recording and transcription (the planned tenant policy)</strong><br><small>User</small><br><small class="controls__note">Not yet documented on Microsoft Learn at the time of writing (November 2026). MC1560924 says the control appears under Recording &amp; transcription in the applicable Teams meeting policy in the Teams admin center.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether meeting recording is allowed for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. It switches recording on or off. MC1560924 says the new policy remains subject to existing recording and transcription availability controls.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meeting transcription is allowed for users with a policy</strong><br><small>User</small><br><small class="controls__note">Existing control. Learn says it is both a per-organiser and a per-user policy setting.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can record in meetings that use a template (enforced or left to the organiser)</strong><br><small class="controls__note">Existing alternative, per meeting; needs Teams Premium. The cmdlet only fetches templates and their options; no setter was found.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting templates › Add › Recording &amp; transcription › Who can record <a href="https://learn.microsoft.com/microsoftteams/create-custom-meeting-template" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-CsTeamsMeetingTemplateConfiguration</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can record and transcribe in meetings that carry a sensitivity label</strong><br><small class="controls__note">Existing alternative, per meeting; needs Teams Premium. Select Files &amp; other data assets, Emails and Meetings in scope; then on Settings for Teams meetings and chats, select Control who can record and transcribe.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Information protection › Labels › Create a label › Define the scope for this label › Choose protection settings for types of items you selected › Protect Teams meetings and chats <a href="https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-Label -Identity &lt;label name&gt; -TeamsWhoCanRecord &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-label" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no admin centre path or PowerShell parameter for the new policy. Learn states that there is no admin policy for **Who can record**.

The existing recording and transcription toggles decide whether recording or transcription is allowed at all, not who within a meeting can start it. Learn says that to prevent meetings and events being recorded entirely you must use the recording policies in the Teams admin center, which a template or sensitivity label cannot do. Templates and labels set who can record per meeting and need Teams Premium. A label's **Who can record and transcribe** option does not take effect in Meet Now meetings.

## Open questions

- What are the admin centre path and PowerShell parameter for the new policy? Watch the Set-CsTeamsMeetingPolicy reference and the Teams recording policies page on Microsoft Learn.
- Does the policy need a Teams Premium or Copilot licence, as the organiser-level setting does? Watch Message center and the Teams Premium licensing pages.
- How does an enforced policy interact with the Copilot setting On with saved transcript required?
- Does the policy apply to channel meetings and events?

<!-- rationale
risk: Low. Microsoft's notice MC1560924 says existing recording and transcription behaviour remains unchanged until an administrator configures the new policy, so the exposure left at the default is today's: organisers choose who can record.
cost: Low. Admin time and organiser communication are the only costs the sources show; the licence for the new policy is not yet published, and the organiser-level setting it parallels is marked as needing Teams Premium.
impact: Medium. Organisers and presenters notice if an admin enforces it: presenters who can record today could lose that ability, and organisers could lose the per-meeting choice.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity / absence: How the new policy combines with the existing recording-permissions rule is not stated. | Found: These configurations remain subject to existing recording and transcription availability controls and any sensitivity label that configures this option. | Fix: Remove 'How the new policy combines with that rule is not stated.' The later Change & support bullet already states MC1560924's qualification that existing recording and transcription availability controls still apply.
- [contradicted, blocker] Scope: Roles to configure it / absence: Roles to configure the new meeting policy are not yet published. | Found: Teams Communications Administrator | Manage calling and meetings features within the Teams service. | Manage meetings, including meeting policies, configurations, and conference bridges. | Fix: Replace the Roles to configure it bullet with 'Roles to configure it: Teams Administrator and Teams Communications Administrator can manage meeting policies.' Cite https://learn.microsoft.com/microsoftteams/using-admin-roles, whose table gives this capability to both roles. | Source: https://learn.microsoft.com/microsoftteams/using-admin-roles
- [contradicted, blocker] controls[0]; Governance controls table; Open questions / absence: The new tenant control has neither a documented admin UI nor documented automation, so both control sides are null. | Found: A new Who can record and transcribe policy control will be available in the Recording & transcription section of the applicable Teams meeting policy in the Teams admin center. | Fix: Keep controls[0].api null, but set controls[0].ui.surface to 'Teams admin center', path to 'Meetings > Meeting policies > policy > Recording & transcription > Who can record and transcribe', and docs to 'https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1560924'. The existing cited meeting-recording page supplies the navigation to a policy and MC1560924 supplies the new control's final steps. Say this is the announced rollout path, not a control already launched. Remove the admin-centre-path question from Open questions, retaining the PowerShell question.
- [contradicted, blocker] controls[3].api / command: Get-CsTeamsMeetingTemplateConfiguration is the automation operation for configuring who can record through a template. | Found: This cmdlet fetches the custom meeting templates stored on the tenant. Note: This configuration is read only and will only have the Global instance. | Fix: Set controls[3].api to null and remove the read-only Get-CsTeamsMeetingTemplateConfiguration call from the automation cell. Keep the note that no setter was found; do not substitute a getter for a setting operation. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/get-csteamsmeetingtemplateconfiguration
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: The new policy's licensing model is unknown because no feature-specific licence requirement has been published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to 'included' under the standard's product-level licensing rule. Add to licensing.notes and Cost and licensing: 'Teams users need a Microsoft Teams license, except when joining meetings anonymously. A requirement specific to the new tenant policy is not yet published.' Cite https://learn.microsoft.com/microsoftteams/user-access. Do not infer a Teams Premium requirement for the new policy. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] controls[4].ui / admin-path: The printed Purview label path reaches the wizard for configuring Who can record and transcribe. | Found: On the Choose protection settings for types of items you selected page, select Protect Teams meetings and chats, and then select Next. On the Settings for Teams meetings and chats page | Fix: Complete the path as 'Solutions > Information protection > Labels > Create a label > Define the scope for this label > Choose protection settings for types of items you selected > Protect Teams meetings and chats > Settings for Teams meetings and chats > Control who can record and transcribe'. The current path stops early on the correct wizard page; the note already supplies the remaining setting. | Source: https://learn.microsoft.com/microsoftteams/configure-meetings-sensitive-protection
-->
