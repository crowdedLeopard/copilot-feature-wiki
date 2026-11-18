---
title: "Microsoft Teams: meeting policy option to automatically block identified external bots"
slug: "microsoft-teams-block-all-identified-external-bots-automatically-from-joining-your-meeting"
roadmapId: 566201
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams is adding a meeting policy option that blocks identified external meeting bots from joining. Microsoft says it is off by default and needs no action unless you want to use it."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and notice MC1459141 name no licence or meter, and the Learn page on managing external bots lists no licence requirement."
audiences: ["m365-admin","security","change-adoption"]
tags: ["teams","meeting-policy","admin-controls","threat-detection","powershell","external-meeting-bots","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 566201"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566201"
    kind: "roadmap"
  - title: "MC1459141: (Updated) Microsoft Teams: Admin policy to automatically block identified external meeting bots from joining meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1459141"
    kind: "message-center"
  - title: "Manage external bots and their access to meetings hosted in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "IT Admins - Manage lobby options in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby"
    kind: "learn"
videos: []
related: ["meeting-policy","microsoft-teams-report-a-security-concern-in-meetings","microsoft-teams-granular-conditional-access-for-teams-meetings","microsoft-teams-third-party-synthetic-audio-and-video-detection-in-microsoft-teams"]
controls:
  - governs: "How identified external bots are handled in meetings, including the planned automatic block"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting Join and Lobby > Manage external bots and their access to meetings"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ExternalBotAccessMode <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Documented values are AllowBots and RequireApprovalWhenDetected (default); the block option is not yet listed. Assign to users or groups through a meeting policy."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-09-01T23:00:02"
changes:
  - date: "2026-11-18"
    note: "New briefing: Teams meeting policy option to automatically block identified external bots, off by default per MC1459141, with the existing ExternalBotAccessMode control."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 43
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "49ad740a94364b21876cc006e0bab7d4"
---

## What's changing

Microsoft Teams is adding an option to its meeting policy that automatically blocks external meeting bots once Teams has identified them. The roadmap item describes it as extending the admin controls for external AI bots with "the option to automatically block all identified bots".

Today, the Learn page for the existing **Manage external bots and their access to meetings** setting documents two options. **Do not detect bots** (`AllowBots`) treats bots like any other external participant. **When detected, require approval before joining** (`RequireApprovalWhenDetected`) is the default: bots are detected, marked in the lobby and kept there until someone admits them. The page does not yet list a block option at the time of writing (November 2026), so what follows about the new option is the roadmap item's and Microsoft's notice's description.

Microsoft's notice MC1459141 says the new option is added to the existing **Manage bots** meeting protection settings in the Teams admin center and can be assigned to specific users or groups through existing Teams meeting policy management. When it is enabled, identified external meeting bots are prevented from joining meetings governed by the assigned policy, and the existing detection and visibility experiences for organisers and administrators continue. Organisations that do not enable it keep the current detection experience with no change to meeting participation behaviour.

The roadmap item is Rolling out with a target of September CY2026, for Worldwide (Standard Multi-Tenant) and GCC, on Android, desktop, iOS, Mac and web. The notice, updated on 3 November 2026, gives Targeted Release from mid-September 2026 to late September 2026, and General Availability (Worldwide) from early October 2026, expected to complete by the end of November 2026. It names no act-by date.

## Why it matters

This gives administrators a way to stop identified bots at the door instead of relying on each organiser to refuse them in the lobby. The Learn page describes the risk: external note-taking tools can record or transcribe meetings without participants' awareness and store meeting data in third-party systems outside the organisation's compliance boundary.

If nobody acts, Microsoft's notice says nothing changes: the option is off by default and the current detection experience continues. Treat it as a decision for security and Teams owners rather than a deadline, and make it deliberately, because blocking is only as good as detection. Learn states that some external bots may not be detected and that detection may occasionally misclassify human participants as bots.

## Risk assessment

**Data exposure**

- Learn states that undetected or admitted external bots may record or transcribe meetings and store the data in third-party systems. Blocking identified bots reduces that route; it does not cover bots that detection misses, which Learn lists as a known limitation.

**Security & identity**

- The block depends on Teams' own detection, which Learn says uses infrastructural and behavioural signals gathered at join time. Microsoft's notice describes the policy as applying to identified external meeting bots, so an unidentified bot is not covered by it.
- Where bot detection is set to **Do not detect bots**, Learn says bots are not detected or marked and appear like any other external participant; confirm the option you assign does not leave users in that state unintentionally.

**Autonomy & actions**

- No change: the option restricts what automated participants can do and gives no new agent or automation any access.

**Change & support**

- Learn says detection may occasionally misclassify human participants as bots, and that organisers can admit them from the lobby and mark them "This is not a bot". Microsoft has not said whether a blocked participant receives that lobby route once automatic blocking is enabled, so expect help desk calls from legitimate guests and staff who use meeting assistants.
- Microsoft's notice recommends piloting with a group first and telling organisers and users who rely on automated meeting bots.

## Cost and licensing

Microsoft has not published a licence requirement or a meter for this option. The roadmap item and notice MC1459141 name none, and the Learn page [Manage external bots and their access to meetings](https://learn.microsoft.com/microsoftteams/manage-external-bots) lists none for the existing setting either, so this briefing records the licensing model as not yet published rather than concluding that no licence is needed.

The cost the sources do show is time: piloting the policy, deciding which users or groups receive it, and updating internal documentation and help desk guidance, as the notice recommends. Business workflows that rely on a third-party meeting bot may stop working for users in the assigned policy, which is a cost for the teams that use them.

## Scope

The option is configured in a Teams meeting policy. Learn gives the scope of the existing setting as meeting policies at a user or group level, and says to set it at tenant level in the default org-wide meeting policy or for specific users or groups in a targeted meeting policy. Notice MC1459141 says this applies to meetings governed by the assigned policy.

The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, with General Availability and Targeted Release phases, on Android, desktop, iOS, Mac and web. Notice MC1459141 gives rollout dates for Worldwide only; it does not give a separate GCC schedule. The Learn page on managing external bots marks its content as applying to meetings and not to events. Microsoft Learn documents no licence prerequisite for the existing setting.

## Governance guidance

### Before rollout

- Inventory which meeting bots and automated meeting applications your organisation actually uses, so a block does not stop a sanctioned workflow; the notice recommends reviewing this first.
- Review your existing Teams meeting policies and decide which users or groups should receive the new option, using the meeting policy row in the controls table.
- Confirm that the Learn page and the Teams admin center list the block option before you plan around it, as the page lists only two options at the time of writing.

### At rollout

- Enable the option for a pilot group first, as the notice recommends, by editing or creating a targeted meeting policy rather than the org-wide default.
- Tell organisers and users of meeting assistants what will be blocked, and update help desk guidance on false detections.
- Consider restricting who can admit participants from the lobby to organisers and co-organisers, which Learn recommends so presenters cannot admit bots; see [IT Admins - Manage lobby options in Microsoft Teams](https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby).

### After rollout

- Collect reports of people wrongly blocked and of bots that still joined, and send undetected bots to Microsoft through the Feedback option in Teams, as Learn asks.
- Monitor audit logs for unusual participant activity, which Learn lists as a best practice.
- Widen the assignment only once the pilot group's results are acceptable.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How identified external bots are handled in meetings, including the planned automatic block</strong><br><small>User</small><br><small class="controls__note">Documented values are AllowBots and RequireApprovalWhenDetected (default); the block option is not yet listed. Assign to users or groups through a meeting policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting Join and Lobby › Manage external bots and their access to meetings <a href="https://learn.microsoft.com/microsoftteams/manage-external-bots" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ExternalBotAccessMode &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The existing setting is the control that the new option extends. Learn documents it as a meeting policy setting in the **Meeting Join and Lobby** section, with the PowerShell attribute `ExternalBotAccessMode`. The values Learn documents are `AllowBots` and `RequireApprovalWhenDetected`; the value for the new block option is not yet documented, so check the Learn page for it before scripting.

The notice says the option is assigned through existing Teams meeting policy management, so it follows normal policy assignment to users or groups. The admin role needed to edit meeting policies is not covered by the Learn page on external bots, so confirm it against the Teams meeting policy documentation.

## Open questions

- What value does `ExternalBotAccessMode` take for automatic blocking, and what is the label in the Teams admin center? Watch the Learn page on managing external bots and the `Set-CsTeamsMeetingPolicy` reference.
- What does a blocked bot, or a person wrongly detected as a bot, see, and can an organiser override the block? Watch the Learn page and Message center.
- Does the option require any licence, including Teams Premium? Watch the roadmap item and Learn.
- What is the GCC rollout schedule? The roadmap lists GCC but notice MC1459141 gives dates for Worldwide only.

<!-- rationale
risk: Low. Microsoft's notice MC1459141 says the policy is off by default and nothing changes unless an administrator enables it; the main exposure once enabled is a person wrongly detected as a bot being kept out.
cost: Low. The only cost the sources show is admin time to pilot and assign the policy; Microsoft has not published a licence requirement or meter for this option, and the feature page lists none.
impact: Low. Administrators who manage meeting policies see the new option; organisers and participants notice only in the users or groups where an administrator enables it.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Governance controls; Open questions / absence: The PowerShell value for the new automatic blocking option is not yet documented. | Found: **BlockDetectedBots**: When detected, external third-party meeting bots and meeting assistants are blocked from joining meetings hosted in the organization. | Fix: Replace the claim that the blocking value is undocumented, including the control note and the PowerShell part of the first open question, with: 'The Set-CsTeamsMeetingPolicy reference documents BlockDetectedBots for automatic blocking, although the feature guide still lists only two options.' Give the call as 'Set-CsTeamsMeetingPolicy -Identity <policy name> -ExternalBotAccessMode BlockDetectedBots' and retain the existing cmdlet-reference citation. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; controls[0].note; Governance controls; Risk assessment / command: The feature guide documents AllowBots for Do not detect bots, under which bots are not marked and appear as ordinary external participants. | Found: Do not detect bots | *AllowBots* | Bots aren't detected or marked in the lobby or in the meeting. They appear as any other external participant in the meetings. | Fix: Qualify references to AllowBots with: 'The feature guide calls this value AllowBots, but the Set-CsTeamsMeetingPolicy reference lists AllowAllBots for disabling detection.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps. Do not present AllowBots as an undisputed scripting value. | Source: https://learn.microsoft.com/microsoftteams/manage-external-bots
- [contradicted, minor] Governance guidance: At rollout and After rollout; Governance controls / consistency: The checklist tells readers to configure lobby admission and monitor audit logs, but neither control has a row in the controls table. | Found: Consider restricting who can admit participants from the lobby to organisers and co-organisers; Monitor audit logs for unusual participant activity. The only control row is How identified external bots are handled in meetings, including the planned automatic block. | Fix: Remove the At rollout bullet beginning 'Consider restricting who can admit participants' and the After rollout bullet beginning 'Monitor audit logs'; these checklist controls have no table rows. Do not add rows as part of this correction.
-->
