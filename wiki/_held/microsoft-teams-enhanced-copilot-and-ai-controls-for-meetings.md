---
title: "Microsoft Teams: MeetingAI and TranscriptionWithMeetingAI replace the Copilot meeting policy"
slug: "microsoft-teams-enhanced-copilot-and-ai-controls-for-meetings"
roadmapId: 577399
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans to replace the Teams Copilot meeting policy with MeetingAI and TranscriptionWithMeetingAI and add organiser AI options. Existing values are mapped automatically; scripts that set the Copilot policy need updating."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Teams is licensed through qualifying Microsoft 365 offerings or a standalone Teams SKU. No separate requirement for these replacement policy settings is published. Learn lists an add-on Microsoft Copilot licence for intended users as the prerequisite for Copilot in Teams meetings and events; no separate meter is documented for these settings."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["teams","copilot","m365-copilot","meeting-policy","powershell","facilitator","intelligent-recap","meeting-transcripts","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 577399"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577399"
    kind: "roadmap"
  - title: "MC1532253: (Updated) Enhanced Copilot and AI controls for meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1532253"
    kind: "message-center"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
  - title: "Manage Teams meeting transcription"
    url: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Intelligent recap in Teams meetings without saving transcripts"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Manage transcript API access for Teams meetings"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
videos: []
related: ["teams-intelligent-recap-without-saving-transcript","work-iq-real-time-transcripts","teams-ai-generated-meeting-memory"]
controls:
  - governs: "Current Copilot meeting policy, which Microsoft says the new policies replace"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription > Copilot"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -Copilot <Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled>"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    note: "Today's control. Per MC1532253 it can no longer be updated directly once the new controls are enabled. The cmdlet reference lists only Enabled and EnabledWithTranscript for -Copilot."
  - governs: "Whether transcription is allowed (Transcription policy, which remains)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Recording & transcription"
      docs: "https://learn.microsoft.com/microsoftteams/copilot-teams-transcription"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowTranscription <$true|$false>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "MC1532253 says this policy remains and still controls whether transcription is allowed; TranscriptionWithMeetingAI only controls whether it starts with AI."
  - governs: "Whether intelligent recap is allowed in meetings (AllowIntelligentRecap)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policyname> -AllowIntelligentRecap $false"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    note: "Learn says this turns off recap for all meetings, with or without saved transcripts. The cmdlet reference says the parameter is not fully released and has no effect; the two pages disagree."
  - governs: "Whether agents and apps receive real-time transcripts through Work IQ"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting settings > Transcript API access > WorkIQ access"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access"
    note: "Adjacent control. Learn says AI must be allowed in the meeting for an app to receive a transcript; Work IQ access is off by default. The PowerShell parameter requires the latest version of the Teams PowerShell module."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-19"
roadmapModified: "2026-11-19T00:53:06"
changes:
  - date: "2026-11-16"
    note: "First briefing: Microsoft's notice MC1532253 replaces the Copilot meeting policy with MeetingAI and TranscriptionWithMeetingAI; rollout moved to December 2026 and January 2027."
  - date: "2026-11-16"
    note: "Corrected after verification: default state is now on (existing values are mapped; Learn gives parameter defaults), added the -AllowIntelligentRecap control and the Learn disagreements, and removed an unsupported claim about attendees."
  - date: "2026-11-17"
    note: "Corrected after verification: the page now states that Learn documents Teams Administrator and Teams Communications Administrator as able to manage meeting policies, replacing the claim that no role was named."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed the MeetingAI and TranscriptionWithMeetingAI table rows; the planned admin UI and the PowerShell parameters are now described in the notes under the table."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
  - date: "2026-11-19"
    note: "Corrected the roadmap target date to January CY2027, as the roadmap record now gives it; the rest of the page is carried over unchanged."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected after verification: licensing model is now included, citing the Teams service description; noted the Teams PowerShell module requirement for the Work IQ parameter; marked the MeetingAI checklist steps as documented only in the notes under the table."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-26"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 77
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "e07ffc2ebd3f9fd427a57b1ba580cd8b"
---

## What's changing

Microsoft plans to replace the existing Copilot Teams meeting policy with two narrower policies, **MeetingAI** and **TranscriptionWithMeetingAI**. MeetingAI controls whether Copilot, Facilitator, Intelligent Recap and other AI features are available in meetings. TranscriptionWithMeetingAI controls whether transcription starts automatically when meeting AI is turned on. Today's Copilot policy combines the two questions; the new model separates them and adds the ability to enforce Copilot off.

The new policies arrive without administrator action. Microsoft's notice MC1532253 says a one-time update maps each existing Copilot value to MeetingAI and TranscriptionWithMeetingAI values so that the current effective behaviour is preserved, and that administrators do not need to recreate policies. The Set-CsTeamsMeetingPolicy reference gives parameter defaults of EnabledAllowOrganizerOverride for -MeetingAI and EnabledNoOverride for -TranscriptionWithMeetingAI; the notice's mapping, not a reset to those defaults, decides what an existing policy ends up with. The same reference says the feature has not been fully released, so the parameters have no effect yet (November 2026).

The notice says the Teams admin center meeting policy will show the new settings under **Recording and transcription** and **Copilot and other AI**, with Allow AI in meetings (On; Off but organisers can change; Off and organisers cannot change) and Start transcription when AI is turned on (On but organisers can change; On and organisers cannot change; Off). The Transcription policy stays and still controls whether transcription is allowed. Meeting options for organisers change too: **Who can manage AI** replaces the Allow Copilot and Facilitator option (and is set to No one if an admin turns Meeting AI off), and **Who can use AI**, **Start Transcription with AI** and Intelligent Recap controls are added. Microsoft says administrators can also control Start Transcription with AI in the Teams admin center.

Status is In development with a roadmap target of January CY2027. MC1532253 (updated 3 November 2026) gives Targeted Release starting early December 2026 and completing mid-December 2026, and General Availability (Worldwide) starting early January 2027 and completing mid-January 2027. The notice sets no act-by date.

## Why it matters

Anyone who manages Teams meeting policies by script is affected whether or not they choose to be. Microsoft says that once the new controls are enabled, attempts to update the Copilot policy directly return guidance to use the new policies. Automation, runbooks and internal documentation that name the Copilot policy will stop working as written, and the failure appears at the point someone next tries to change a policy.

The change also makes AI governance in meetings more precise. This page's view: administrators can state separately whether AI may run, whether organisers may override that, and whether a saved transcript is produced, which matters for compliance teams that treat a saved transcript as a retained record. Check the mapped values after rollout, because the two settings interact (see the risk assessment).

## Risk assessment

**Data exposure**

- Microsoft's notice says the change does not alter how existing customer data is processed or stored. What changes is who decides whether a transcript starts: where TranscriptionWithMeetingAI allows organisers to change the setting, the organiser decides per meeting.
- Real-time transcript access for apps through Work IQ depends on AI being allowed in the meeting: Learn's table shows that with Allow AI in all meetings Off, no transcript is available, whatever the Work IQ access setting is.

**Security & identity**

- No change to identity, permissions or roles is described in the notice. Microsoft documents Teams Administrator and Teams Communications Administrator as able to manage meeting policies through Teams admin center and PowerShell; no separate role requirement is stated for these new parameters.

**Autonomy & actions**

- Start Transcription with AI means transcription can begin as soon as AI is turned on, without a separate action by the organiser. Where recording and transcription consent matters to your organisation, check what each policy's mapped value is before the settings arrive.
- Who can use AI lets organisers narrow which participants can use Copilot in their meeting. Microsoft's notice names no admin control over that option.

**Change & support**

- Microsoft says that if MeetingAI is set to enforced off, transcription is also turned off, and that turning transcription back on means MeetingAI is no longer enforced off. An administrator who needs Copilot off for a group should re-check the pair after any change to transcription.
- Scripts and tooling that read or write the Copilot policy need updating to MeetingAI and TranscriptionWithMeetingAI. Expect help-desk questions from Teams administrators who see two settings where there was one.

## Cost and licensing

Teams is licensed through qualifying Microsoft 365 offerings or a standalone Teams SKU, according to the Microsoft Teams service description. No separate requirement for these replacement policy settings is published, and neither the roadmap item nor MC1532253 mentions a charge. The Learn page Manage Teams meeting transcription lists an add-on Microsoft Copilot licence for intended users as its prerequisite; that page describes the current Copilot policy, not the new ones.

The known cost is indirect: admin time to update scripts, runbooks and documentation, and to confirm that the mapped values match intent. No cap or budget control is relevant to these settings.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only, on Android, Desktop, iOS, Mac and Web, with Targeted Release and General Availability phases. MC1532253 names Microsoft Teams and Microsoft Copilot (Microsoft 365) as the services. The roadmap does not list GCC, GCC High or DoD; that is not a statement that the change is unavailable there.

The settings sit in Teams meeting policies, which Learn says can be applied to groups or individual users. Learn also says Copilot in Teams meetings and events is not available in end-to-end encrypted meetings. The notice says MeetingAI covers Copilot, Facilitator, Intelligent Recap and other AI features in meetings; whether it also covers post-meeting experiences is not detailed beyond the roadmap description.

## Governance guidance

### Before rollout

- Inventory scripts, runbooks and documentation that run Set-CsTeamsMeetingPolicy with -Copilot, and plan changes to -MeetingAI and -TranscriptionWithMeetingAI, which Learn says must be used together.
- Record each meeting policy's current Copilot value (On, On with saved transcript required, On with transcript saved by default, or Off) so the mapped result can be checked afterwards.
- Tell Teams administrators and help-desk staff that existing behaviour will appear as two settings in the Teams admin center.
- Decide, per policy, whether organisers may override the AI and transcription settings (MeetingAI and TranscriptionWithMeetingAI are documented only in the notes under the controls table, not as table rows).

### At rollout

- Watch Message center for MC1532253 updates; Microsoft has already moved the dates once.
- Switch updated scripts over once the controls reach your tenant, because the Copilot policy cannot then be updated directly.
- Compare each policy's mapped MeetingAI and TranscriptionWithMeetingAI values with the values you recorded (documented only in the notes under the controls table).

### After rollout

- Test a policy where Copilot is enforced off and confirm transcription is also off, as Microsoft describes.
- Check that any app relying on Work IQ real-time transcripts still receives them where AI is allowed.
- Decide whether -AllowIntelligentRecap $false is needed for any policy where recap must stay off, and review organiser guidance for Who can manage AI and Who can use AI.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Current Copilot meeting policy, which Microsoft says the new policies replace</strong><br><small>User</small><br><small class="controls__note">Today's control. Per MC1532253 it can no longer be updated directly once the new controls are enabled. The cmdlet reference lists only Enabled and EnabledWithTranscript for -Copilot.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -Copilot &lt;Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcription is allowed (Transcription policy, which remains)</strong><br><small>User</small><br><small class="controls__note">MC1532253 says this policy remains and still controls whether transcription is allowed; TranscriptionWithMeetingAI only controls whether it starts with AI.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription &lt;$true|$false&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether intelligent recap is allowed in meetings (AllowIntelligentRecap)</strong><br><small>User</small><br><small class="controls__note">Learn says this turns off recap for all meetings, with or without saved transcripts. The cmdlet reference says the parameter is not fully released and has no effect; the two pages disagree.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policyname&gt; -AllowIntelligentRecap $false</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether agents and apps receive real-time transcripts through Work IQ</strong><br><small>Tenant</small><br><small class="controls__note">Adjacent control. Learn says AI must be allowed in the meeting for an app to receive a transcript; Work IQ access is off by default. The PowerShell parameter requires the latest version of the Teams PowerShell module.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › WorkIQ access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

MC1532253 documents the planned admin UI for the new settings, but Microsoft Learn does not yet give its complete navigation path (November 2026). The notice says they will appear in the Teams admin center meeting policy under Recording and transcription and Copilot and other AI, and that administrators can also control Start Transcription with AI there.

The Set-CsTeamsMeetingPolicy reference lists the two parameters, for example `Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingAI <EnabledAllowOrganizerOverride|DisabledAllowOrganizerOverride|DisabledNoOverride> -TranscriptionWithMeetingAI <EnabledAllowOrganizerOverride|DisabledAllowOrganizerOverride|EnabledNoOverride>`. It says -MeetingAI must be used together with -TranscriptionWithMeetingAI, and that the feature has not been fully released, so the setting has no effect yet (November 2026).

The Copilot row is today's control; Microsoft says it stops being directly updatable once the new controls are enabled. Learn's two pages disagree on the -Copilot values: the Manage Teams meeting transcription page lists four, while the Set-CsTeamsMeetingPolicy reference lists only Enabled and EnabledWithTranscript.

Intelligent Recap has its own policy parameter. Learn says turning it off disables intelligent recap for all meetings, with or without saved transcripts, and makes the related settings unavailable; the Set-CsTeamsMeetingPolicy reference still says AllowIntelligentRecap is not fully released and has no effect, so check behaviour before relying on it. Organiser meeting options (Who can manage AI, Who can use AI) are set per meeting; Microsoft's notice names Start Transcription with AI as the one organiser option administrators can also control in the Teams admin center.

## Open questions

- What is the Teams admin center path and the exact setting labels for MeetingAI and TranscriptionWithMeetingAI once documented on Learn? Watch the Set-CsTeamsMeetingPolicy reference and the Manage Teams meeting transcription page.
- How will a tenant know the new controls have been enabled, and is the Copilot policy retired per tenant or per policy? Watch MC1532253.
- How does -AllowIntelligentRecap interact with MeetingAI, and will administrators get controls over Who can use AI? Microsoft has not said; watch the Learn pages and MC1532253.
- Does the roadmap target of January CY2027 or the notice's General Availability window of early to mid-January 2027 apply to each tenant? Watch the roadmap item and MC1532253.

<!-- rationale
risk: Medium. Existing behaviour is mapped across, but once the new controls are enabled the Copilot policy can no longer be updated directly, so scripts and runbooks that set it will fail, and organisers gain new AI options.
cost: Low. The only cost the sources show is admin time to update scripts and runbooks; Microsoft has not published a separate licence or meter for the new policies. Copilot in meetings itself lists an add-on Microsoft Copilot licence.
impact: Medium. Teams administrators see two settings where there was one, and organisers get new AI options in their meeting options; Microsoft says the one-time mapping preserves each policy's current effective behaviour.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: rollout paragraph / date: MC1532253 carrying the quoted rollout schedule was updated on 3 November 2026. | Found: Updated November 19, 2026: We have updated the content. Thank you for your patience. | Fix: Replace 'MC1532253 (updated 3 November 2026)' with 'MC1532253 (updated 19 November 2026)'. Keep the rollout windows unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls table / admin-path: The transcription UI path ends at Teams admin center > Meetings > Meeting policies > policy > Recording & transcription. | Found: You can use the Recording & Transcription section in the Teams admin center ... to manage your transcription policy. | Fix: Extend controls[1].ui.path and the rendered path to 'Meetings > Meeting policies > policy > Recording & transcription > Transcription'. The Transcription toggle is documented at https://learn.microsoft.com/microsoftteams/meeting-transcription-captions; cite that page. | Source: https://learn.microsoft.com/microsoftteams/copilot-teams-transcription
- [contradicted, minor] Governance guidance: Before rollout, At rollout and After rollout / consistency: The checklist directs readers to decide, compare and test replacement-policy settings that have no controls-table rows. | Found: Decide, per policy, whether organisers may override the AI and transcription settings ... not as table rows. ... Compare each policy's mapped MeetingAI and TranscriptionWithMeetingAI values ... Test a policy where Copilot is enforced off | Fix: Remove the Before rollout bullet beginning 'Decide, per policy', the At rollout bullet beginning 'Compare each policy', and the After rollout bullet beginning 'Test a policy'. Keep the replacement-policy descriptions and migration recommendations in the prose; the notes about missing rows do not resolve the checklist/table inconsistency.
-->
