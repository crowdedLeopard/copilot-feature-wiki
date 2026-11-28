---
title: "Microsoft Copilot (Microsoft 365): video recap of recorded meetings in Copilot Chat"
slug: "m365-copilot-video-recap-in-copilot-chat"
roadmapId: 501452
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Copilot Chat can play a video recap of a recorded, transcribed Teams meeting: AI narration plus 20–40 second clips. Launched for licensed users; admins steer it through Copilot licences and Teams recording and transcription policies."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2025"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Meeting Recaps app page states that AI-generated recap experiences, including video recap, require a Microsoft Copilot license. No separate price or meter for video recap is published."
audiences: ["m365-admin","service-owner","compliance","end-user"]
tags: ["copilot-chat","m365-copilot","intelligent-recap","meeting-transcripts","meeting-policy","teams"]
sources:
  - title: "Microsoft 365 Roadmap 501452"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=501452"
    kind: "roadmap"
  - title: "Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings"
    kind: "learn"
  - title: "Manage the Meeting Recaps app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-meeting-recaps-app"
    kind: "learn"
  - title: "Intelligent recap in Teams meetings without saving transcripts"
    url: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    kind: "learn"
  - title: "Teams Rooms and Copilot overview"
    url: "https://learn.microsoft.com/microsoftteams/rooms/copilot-admin-mtr"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that video recap requires (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold the Microsoft Copilot licence that video recap requires (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Whether users can record meetings, without which no video recap is made (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    kind: "learn"
  - title: "Whether users can transcribe meetings, which intelligent recap depends on (Teams admin center)"
    url: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    kind: "learn"
videos: []
related: ["intelligent-recap","meeting-transcripts","meeting-policy","m365-copilot-find-meetings-based-on-topics-and-keywords","microsoft-teams-use-copilot-chat-after-a-call-in-queues-app"]
controls:
  - governs: "Which users hold the Microsoft Copilot licence that video recap requires"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Licenses > product > Assign licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "The Meeting Recaps app page states video recap requires a Microsoft Copilot license."
  - governs: "Whether users can record meetings, without which no video recap is made"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting recording"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity \"Your Policy Name\" -AllowCloudRecording $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-recording"
    note: "Learn says video recap isn't available for meetings that are transcribed but not recorded."
  - governs: "Whether users can transcribe meetings, which intelligent recap depends on"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Transcription"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity \"Your Policy Name\" -AllowTranscription $true"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-transcription-captions"
    note: "On by default for new policies, per the Learn page."
  - governs: "Whether intelligent recap, which includes video recap in Teams, is available"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policyname> -AllowIntelligentRecap $false"
      docs: "https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts"
    note: "Turns off intelligent recap for all meetings. Learn lists video recap as an intelligent meeting recap feature in Teams; its effect on Copilot Chat is not stated."
  - governs: "Setting that turns off video recap alone, in Teams or Copilot Chat"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-04-27T23:15:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: video recap in Copilot Chat, its Microsoft Copilot licence requirement and the Teams recording, transcription and intelligent recap policies that govern it."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 45
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "eaea09344677e592a8208dd3f3af00bc"
---

## What's changing

Copilot Chat can now produce a video recap of a recorded Teams meeting. The roadmap item states that it identifies key topics from the transcript, adds AI-generated narration that summarises the discussion, and pairs each topic with a 20–40 second clip from the recording.

Microsoft Learn documents video recap as part of Teams intelligent meeting recap, not yet as a Copilot Chat feature. There, video recap "creates narrated highlights from recorded and transcribed meetings", its data is stored as part of the original meeting recording file in OneDrive or SharePoint, and each recording allows up to 100 highlights. The meeting must be at least 10 minutes long, and a meeting that was transcribed but not recorded gets no video highlights. Learn says users view video recaps on Teams desktop and mobile clients; the roadmap item lists Desktop and Web for the Copilot Chat version. How the Copilot Chat entry point behaves beyond the roadmap description is not yet documented.

The roadmap item is **Launched**, in General Availability, with a target of December CY2025, for the Worldwide (Standard Multi-Tenant) cloud. Microsoft has not stated whether it appears for licensed users without admin action.

## Why it matters

Video recap turns a long recording into short clips that people can watch without opening the full meeting, which makes individual moments easier to watch out of context. The narration around the clips is written by AI, and a user may take the recap as the record of what was decided. Expect questions from meeting organisers about who can see clips of them and from users about recaps that misstate a discussion.

Microsoft has not stated what happens on arrival in Copilot Chat. No source says existing behaviour changes for meetings that are not both recorded and transcribed, so the tenant's recording and transcription policies decide which meetings can have a video recap at all. Teams documents intelligent recap as automatically available to users with the required licences and policies, which is the closest published statement.

## Risk assessment

**Data exposure**
- Clips are cut from the meeting recording, and video recap data is stored as part of that recording file in OneDrive or SharePoint. Microsoft's Teams Rooms page says people invited to a meeting have permissions to its recording; confirm in a test tenant that Copilot Chat shows a video recap only to people who can open the recording.
- Highlights add data to the recording file (up to 100 per recording). Confirm that the retention and eDiscovery settings you apply to recordings cover this highlight data.

**Security & identity**
- No change documented: Microsoft describes no new identity, connection or permission for video recap.

**Autonomy & actions**
- The narration is AI-generated. Microsoft notes for the related audio recap that AI-generated content might contain inaccuracies; plan to tell users that a recap is a summary, not the minutes.

**Change & support**
- Users will ask why some meetings have no video recap: Microsoft documents that meetings under 10 minutes and meetings transcribed but not recorded do not support it.
- Microsoft Learn documents no setting for video recap on its own at the time of writing (November 2026); turning off recording, transcription or intelligent recap also removes other recap features.

## Cost and licensing

- **Licence:** the Meeting Recaps app page states that "AI-generated recap experiences, including audio recap and video recap, require a Microsoft Copilot license." Intelligent recap in Teams also needs a Microsoft 365 subscription that includes Teams, or a Microsoft 365 (no Teams) subscription with a separate Teams licence (Intelligent recap for Teams calls, meetings, and events).
- **Meter:** Microsoft publishes no separate price or meter for video recap.
- **Indirect costs:** highlight data is added to the recording file in OneDrive or SharePoint. Microsoft's recording page asks admins to make sure the required OneDrive or SharePoint storage is available before enabling meeting recording.
- **Not yet published:** whether Copilot Chat users without a Microsoft Copilot licence can open a video recap.

## Scope

- **Users:** people with a Microsoft Copilot licence, per the Meeting Recaps app page.
- **Meetings:** recorded and transcribed meetings of at least 10 minutes. Transcription must be on for intelligent recap; recording is needed for the full recap experience.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** the roadmap item lists Desktop and Web. Learn documents video recap on Teams desktop and mobile clients.
- **Rollout:** the roadmap status is Launched, General Availability, target December CY2025.

## Governance guidance

### Before rollout
- Check in the Microsoft 365 admin center which users hold a Microsoft Copilot licence, since that is the group Microsoft says video recap requires.
- Review the Teams meeting policies assigned to sensitive groups (board, HR, legal) for **Meeting recording** and **Transcription**; a meeting with either off gets no video recap.
- Decide with the compliance owner whether recordings of those groups should carry AI-generated highlights, and if not, set `-AllowIntelligentRecap $false` in their meeting policy, accepting that it removes all intelligent recap and that Microsoft has not stated its effect on Copilot Chat.

### At rollout
- Tell Copilot-licensed users that video recaps use AI narration and short clips, and that the full recording and transcript remain the record.
- Tell meeting organisers that clips of them may be watched in Copilot Chat by people who can access the recording.

### After rollout
- Test with a recorded 10-minute meeting that a colleague without access to the recording cannot get a video recap of it in Copilot Chat.
- Watch the Microsoft 365 Copilot release notes and Message center for a video recap setting or a Copilot Chat admin page.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold the Microsoft Copilot licence that video recap requires</strong><br><small>User</small><br><small class="controls__note">The Meeting Recaps app page states video recap requires a Microsoft Copilot license.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Licenses › product › Assign licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can record meetings, without which no video recap is made</strong><br><small>User</small><br><small class="controls__note">Learn says video recap isn't available for meetings that are transcribed but not recorded.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting recording <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &quot;Your Policy Name&quot; -AllowCloudRecording $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-recording" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can transcribe meetings, which intelligent recap depends on</strong><br><small>User</small><br><small class="controls__note">On by default for new policies, per the Learn page.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Transcription <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &quot;Your Policy Name&quot; -AllowTranscription $true</code> <a href="https://learn.microsoft.com/microsoftteams/meeting-transcription-captions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether intelligent recap, which includes video recap in Teams, is available</strong><br><small>User</small><br><small class="controls__note">Turns off intelligent recap for all meetings. Learn lists video recap as an intelligent meeting recap feature in Teams; its effect on Copilot Chat is not stated.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policyname&gt; -AllowIntelligentRecap $false</code> <a href="https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting that turns off video recap alone, in Teams or Copilot Chat</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

None of these controls is specific to video recap or to Copilot Chat: Microsoft Learn documents no setting that turns off video recap alone at the time of writing (November 2026). Recording and transcription are per-user meeting policy settings; the organiser and the person starting the recording both need them on. `-AllowIntelligentRecap $false` turns off intelligent recap for all meetings with that policy, including recaps without saved transcripts. Assign meeting policies to users or groups after changing them.

## Open questions

- Does video recap in Copilot Chat follow the meeting recording's permissions exactly, or can anyone who attended see it? Watch the intelligent recap Learn page.
- Does `-AllowIntelligentRecap $false` remove video recap from Copilot Chat as well as from the Teams Recap tab?
- Can Copilot Chat users without a Microsoft Copilot licence open a video recap that a licensed colleague can see?
- Do highlight clips expire with the recording they are stored in, and are they returned by eDiscovery searches of that recording?

<!-- rationale
risk: Medium. It replays clips of recorded meetings with AI-written narration, and Microsoft documents no switch for video recap itself; the levers are recording, transcription, intelligent recap and the Copilot licence.
cost: Low. Microsoft states video recap requires a Microsoft Copilot licence, which tenants using it already hold; no separate meter is published, and the extra cost is a small amount of OneDrive or SharePoint storage per recording.
impact: Medium. Copilot-licensed users who attend recorded and transcribed meetings notice it; meeting organisers and presenters appear in the clips others watch.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].governs; Scope / applicability: Intelligent recap depends on transcription being enabled. | Found: With this feature, an AI summary is generated even when recording and transcription aren't enabled. | Fix: Change controls[2].governs to 'Whether users can transcribe meetings, which video recap depends on'. Replace 'Transcription must be on for intelligent recap' in Scope with 'Video recap requires a recorded and transcribed meeting', as stated at https://learn.microsoft.com/microsoftteams/intelligent-recap-calls-meetings. Apply the same control label in the rendered table. | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts
- [contradicted, blocker] Risk assessment: Data exposure / availability: People invited to a meeting have permissions to its recording. | Found: People invited to the meeting have permissions to the recording (guests and external attendees can view the recording only if the recording is explicitly shared with them). | Fix: Add the source's qualification: 'People invited to a meeting have permissions to its recording; guests and external attendees can view it only if the recording is explicitly shared with them.' Keep the following Copilot Chat test recommendation. | Source: https://learn.microsoft.com/microsoftteams/rooms/copilot-admin-mtr
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].api and note; Governance guidance; Governance controls / command: Set-CsTeamsMeetingPolicy -Identity <policyname> -AllowIntelligentRecap $false disables intelligent recap for all meetings covered by the policy, including meetings without saved transcripts. | Found: Turning off intelligent recap disables intelligent recap for all meetings, regardless of whether transcripts are saved. Set-CsTeamsMeetingPolicy -Identity <policyname> -AllowIntelligentRecap $false | Fix: Keep the call and add to controls[3].note and the advice relying on it: 'The intelligent recap guidance documents this switch, but the Set-CsTeamsMeetingPolicy reference says the feature is not fully released and the setting has no effect; test enforcement before relying on it.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy, whose -AllowIntelligentRecap section says 'This feature has not been fully released yet, so the setting will have no effect.' | Source: https://learn.microsoft.com/microsoftteams/intelligent-recap-without-saving-transcripts
- [supported, minor] Governance guidance: At rollout / applicability: People who can access the recording may see clips of it through Copilot Chat. | Found: Microsoft Copilot only surfaces organizational data to which individual users have at least view permissions. | Fix: Cite https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy for the general permission boundary. Keep the explicit test recommendation and the open question about the exact Copilot Chat video recap access experience. | Source: https://learn.microsoft.com/copilot/plan/microsoft-365-copilot-privacy
-->
