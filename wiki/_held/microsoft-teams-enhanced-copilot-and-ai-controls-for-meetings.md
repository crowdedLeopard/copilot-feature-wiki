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
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published for the new policies. Learn lists an add-on Microsoft Copilot licence for intended users as the prerequisite for Copilot in Teams meetings and events; no separate meter is documented for these settings."
audiences: ["m365-admin","service-owner","compliance"]
tags: ["teams","copilot","m365-copilot","meeting-policy","powershell","facilitator","intelligent-recap","meeting-transcripts","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 577399"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577399"
    kind: "roadmap"
  - title: "MC1532253: (Updated) Enhanced Copilot and AI controls for meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1532253"
    kind: "message-center"
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
  - governs: "Whether AI is available in meetings, and whether organisers can change it (MeetingAI)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -MeetingAI <EnabledAllowOrganizerOverride|DisabledAllowOrganizerOverride|DisabledNoOverride> -TranscriptionWithMeetingAI <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Reference says the feature is not fully released, so the setting has no effect yet (November 2026). Parameter default: EnabledAllowOrganizerOverride. MC1532253 says the UI setting will appear in the meeting policy; Learn gives no path."
  - governs: "Whether transcription starts when meeting AI is turned on (TranscriptionWithMeetingAI)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -TranscriptionWithMeetingAI <EnabledAllowOrganizerOverride|DisabledAllowOrganizerOverride|EnabledNoOverride> -MeetingAI <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    note: "Must be used together with -MeetingAI. Parameter default: EnabledNoOverride. Same not-fully-released caveat as the MeetingAI row."
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
    note: "Adjacent control. Learn says AI must be allowed in the meeting for an app to receive a transcript; Work IQ access is off by default."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing: Microsoft's notice MC1532253 replaces the Copilot meeting policy with MeetingAI and TranscriptionWithMeetingAI; rollout moved to December 2026 and January 2027."
  - date: "2026-11-16"
    note: "Corrected after verification: default state is now on (existing values are mapped; Learn gives parameter defaults), added the -AllowIntelligentRecap control and the Learn disagreements, and removed an unsupported claim about attendees."
  - date: "2026-11-17"
    note: "Corrected after verification: the page now states that Learn documents Teams Administrator and Teams Communications Administrator as able to manage meeting policies, replacing the claim that no role was named."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 3
verification:
  status: "held"
  date: "2026-11-17"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 67
  unconfirmed: 0
  contradicted: 2
  attempts: 3
  hash: "7e23c22538d213d1995cdf61abea403d"
---

## What's changing

Microsoft plans to replace the existing Copilot Teams meeting policy with two narrower policies, **MeetingAI** and **TranscriptionWithMeetingAI**. MeetingAI controls whether Copilot, Facilitator, Intelligent Recap and other AI features are available in meetings. TranscriptionWithMeetingAI controls whether transcription starts automatically when meeting AI is turned on. Today's Copilot policy combines the two questions; the new model separates them and adds the ability to enforce Copilot off.

The new policies arrive without administrator action. Microsoft's notice MC1532253 says a one-time update maps each existing Copilot value to MeetingAI and TranscriptionWithMeetingAI values so that the current effective behaviour is preserved, and that administrators do not need to recreate policies. The Set-CsTeamsMeetingPolicy reference gives parameter defaults of EnabledAllowOrganizerOverride for -MeetingAI and EnabledNoOverride for -TranscriptionWithMeetingAI; the notice's mapping, not a reset to those defaults, decides what an existing policy ends up with. The same reference says the feature has not been fully released, so the parameters have no effect yet (November 2026).

The notice says the Teams admin center meeting policy will show the new settings under **Recording and transcription** and **Copilot and other AI**, with Allow AI in meetings (On; Off but organisers can change; Off and organisers cannot change) and Start transcription when AI is turned on (On but organisers can change; On and organisers cannot change; Off). The Transcription policy stays and still controls whether transcription is allowed. Meeting options for organisers change too: **Who can manage AI** replaces the Allow Copilot and Facilitator option (and is set to No one if an admin turns Meeting AI off), and **Who can use AI**, **Start Transcription with AI** and Intelligent Recap controls are added. Microsoft says administrators can also control Start Transcription with AI in the Teams admin center.

Status is In development with a roadmap target of December CY2026. MC1532253 (updated 3 November 2026) gives Targeted Release starting early December 2026 and completing mid-December 2026, and General Availability (Worldwide) starting early January 2027 and completing mid-January 2027. The notice sets no act-by date.

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

Microsoft has not published a licence requirement or meter for MeetingAI or TranscriptionWithMeetingAI, and neither the roadmap item nor MC1532253 mentions a charge. The Learn page Manage Teams meeting transcription lists an add-on Microsoft Copilot licence for intended users as its prerequisite; that page describes the current Copilot policy, not the new ones.

The known cost is indirect: admin time to update scripts, runbooks and documentation, and to confirm that the mapped values match intent. No cap or budget control is relevant to these settings.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only, on Android, Desktop, iOS, Mac and Web, with Targeted Release and General Availability phases. MC1532253 names Microsoft Teams and Microsoft Copilot (Microsoft 365) as the services. The roadmap does not list GCC, GCC High or DoD; that is not a statement that the change is unavailable there.

The settings sit in Teams meeting policies, which Learn says can be applied to groups or individual users. Learn also says Copilot in Teams meetings and events is not available in end-to-end encrypted meetings. The notice says MeetingAI covers Copilot, Facilitator, Intelligent Recap and other AI features in meetings; whether it also covers post-meeting experiences is not detailed beyond the roadmap description.

## Governance guidance

### Before rollout

- Inventory scripts, runbooks and documentation that run Set-CsTeamsMeetingPolicy with -Copilot, and plan changes to -MeetingAI and -TranscriptionWithMeetingAI, which Learn says must be used together.
- Record each meeting policy's current Copilot value (On, On with saved transcript required, On with transcript saved by default, or Off) so the mapped result can be checked afterwards.
- Tell Teams administrators and help-desk staff that existing behaviour will appear as two settings in the Teams admin center.
- Decide, per policy, whether organisers may override the AI and transcription settings.

### At rollout

- Watch Message center for MC1532253 updates; Microsoft has already moved the dates once.
- Switch updated scripts over once the controls reach your tenant, because the Copilot policy cannot then be updated directly.
- Compare each policy's mapped MeetingAI and TranscriptionWithMeetingAI values with the values you recorded.

### After rollout

- Test a policy where Copilot is enforced off and confirm transcription is also off, as Microsoft describes.
- Check that any app relying on Work IQ real-time transcripts still receives them where AI is allowed.
- Decide whether -AllowIntelligentRecap $false is needed for any policy where recap must stay off, and review organiser guidance for Who can manage AI and Who can use AI.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI is available in meetings, and whether organisers can change it (MeetingAI)</strong><br><small>User</small><br><small class="controls__note">Reference says the feature is not fully released, so the setting has no effect yet (November 2026). Parameter default: EnabledAllowOrganizerOverride. MC1532253 says the UI setting will appear in the meeting policy; Learn gives no path.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -MeetingAI &lt;EnabledAllowOrganizerOverride|DisabledAllowOrganizerOverride|DisabledNoOverride&gt; -TranscriptionWithMeetingAI &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcription starts when meeting AI is turned on (TranscriptionWithMeetingAI)</strong><br><small>User</small><br><small class="controls__note">Must be used together with -MeetingAI. Parameter default: EnabledNoOverride. Same not-fully-released caveat as the MeetingAI row.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -TranscriptionWithMeetingAI &lt;EnabledAllowOrganizerOverride|DisabledAllowOrganizerOverride|EnabledNoOverride&gt; -MeetingAI &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Current Copilot meeting policy, which Microsoft says the new policies replace</strong><br><small>User</small><br><small class="controls__note">Today's control. Per MC1532253 it can no longer be updated directly once the new controls are enabled. The cmdlet reference lists only Enabled and EnabledWithTranscript for -Copilot.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription › Copilot <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -Copilot &lt;Enabled|EnabledWithTranscript|EnabledWithTranscriptDefaultOn|Disabled&gt;</code> <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether transcription is allowed (Transcription policy, which remains)</strong><br><small>User</small><br><small class="controls__note">MC1532253 says this policy remains and still controls whether transcription is allowed; TranscriptionWithMeetingAI only controls whether it starts with AI.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Recording &amp; transcription <a href="https://learn.microsoft.com/microsoftteams/copilot-teams-transcription" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowTranscription &lt;$true|$false&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether intelligent recap is allowed in meetings (AllowIntelligentRecap)</strong><br><small>User</small><br><small class="controls__note">Learn says this turns off recap for all meetings, with or without saved transcripts. The cmdlet reference says the parameter is not fully released and has no effect; the two pages disagree.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policyname&gt; -AllowIntelligentRecap $false</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether agents and apps receive real-time transcripts through Work IQ</strong><br><small>Tenant</small><br><small class="controls__note">Adjacent control. Learn says AI must be allowed in the meeting for an app to receive a transcript; Work IQ access is off by default.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting settings › Transcript API access › WorkIQ access <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingConfiguration -EnableWorkIQTranscriptAccess $true -Identity Global</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcript-api-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The new settings have no Learn-documented admin centre path yet: MC1532253 says they will appear in the Teams admin center meeting policy, but Learn gives no navigation path, so the table shows that side as not documented. The PowerShell reference lists the parameters but says the setting has no effect until the feature is fully released. The Copilot row is today's control; Microsoft says it stops being directly updatable once the new controls are enabled. Learn's two pages disagree on the -Copilot values: the Manage Teams meeting transcription page lists four, while the Set-CsTeamsMeetingPolicy reference lists only Enabled and EnabledWithTranscript.

Intelligent Recap has its own policy parameter. Learn says turning it off disables intelligent recap for all meetings, with or without saved transcripts, and makes the related settings unavailable; the Set-CsTeamsMeetingPolicy reference still says AllowIntelligentRecap is not fully released and has no effect, so check behaviour before relying on it. Organiser meeting options (Who can manage AI, Who can use AI) are set per meeting; Microsoft's notice names Start Transcription with AI as the one organiser option administrators can also control in the Teams admin center.

## Open questions

- What is the Teams admin center path and the exact setting labels for MeetingAI and TranscriptionWithMeetingAI once documented on Learn? Watch the Set-CsTeamsMeetingPolicy reference and the Manage Teams meeting transcription page.
- How will a tenant know the new controls have been enabled, and is the Copilot policy retired per tenant or per policy? Watch MC1532253.
- How does -AllowIntelligentRecap interact with MeetingAI, and will administrators get controls over Who can use AI? Microsoft has not said; watch the Learn pages and MC1532253.
- Does the roadmap target of December CY2026 or the notice's General Availability window of early to mid-January 2027 apply to each tenant? Watch the roadmap item and MC1532253.

<!-- rationale
risk: Medium. Existing behaviour is mapped across, but once the new controls are enabled the Copilot policy can no longer be updated directly, so scripts and runbooks that set it will fail, and organisers gain new AI options.
cost: Low. The only cost the sources show is admin time to update scripts and runbooks; Microsoft has not published a separate licence or meter for the new policies. Copilot in meetings itself lists an add-on Microsoft Copilot licence.
impact: Medium. Teams administrators see two settings where there was one, and organisers get new AI options in their meeting options; Microsoft says the one-time mapping preserves each policy's current effective behaviour.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; rendered table; Governance controls / absence: The MeetingAI admin UI control is Not yet documented because Learn supplies no complete navigation path. | Found: The new settings will appear in the Teams admin center meeting policy under Recording and transcription and Copilot and other AI. | Fix: Remove the MeetingAI table row, including its rendered copy, rather than representing its known planned UI as an absent control. Retain the already verified command and planned-UI description in Governance controls prose. State: 'MC1532253 documents the planned admin UI, but Microsoft Learn does not yet give its complete navigation path (November 2026).' The standard permits describing a known control in notes without a path; it does not permit a null UI solely because its full path has not been published.
- [contradicted, blocker] controls[1].ui; rendered table; Governance controls / absence: The TranscriptionWithMeetingAI admin UI control is Not yet documented because Learn supplies no complete navigation path. | Found: Start Transcription with AI - lets organizers choose whether transcription starts with AI. Administrators can also control this option through Teams admin center. | Fix: Remove the TranscriptionWithMeetingAI table row, including its rendered copy, rather than representing its known planned UI as an absent control. Retain the already verified command and planned-UI description in Governance controls prose. Use the same qualification as for MeetingAI: 'MC1532253 documents the planned admin UI, but Microsoft Learn does not yet give its complete navigation path (November 2026).' Do not invent a complete path by combining separate sources.
-->
