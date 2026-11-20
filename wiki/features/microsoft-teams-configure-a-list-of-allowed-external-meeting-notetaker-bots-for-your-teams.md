---
title: "Microsoft Teams: allowed list of external meeting notetaker bots"
slug: "microsoft-teams-configure-a-list-of-allowed-external-meeting-notetaker-bots-for-your-teams"
roadmapId: 580451
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams plans a list of external notetaker bots that may join your meetings, with other bots blocked or sent to the lobby. In development for January CY2027; Microsoft has not stated a default or any action for admins."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence or meter, and the Learn page on managing external bots lists no licence requirement."
audiences: ["m365-admin","security","compliance"]
tags: ["teams","meeting-policy","admin-controls","external-meeting-bots","threat-detection","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 580451"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580451"
    kind: "roadmap"
  - title: "Manage external bots and their access to meetings hosted in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    kind: "learn"
  - title: "Teams Bot Identification Program"
    url: "https://learn.microsoft.com/microsoftteams/teams-bot-identification"
    kind: "learn"
  - title: "IT Admins - Manage lobby options in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-block-all-identified-external-bots-automatically-from-joining-your-meeting","meeting-policy","microsoft-teams-report-a-security-concern-in-meetings","microsoft-teams-granular-conditional-access-for-teams-meetings"]
controls:
  - governs: "Allowed list of external meeting notetaker bots, with the choice to block or lobby all others (planned)"
    scope: "tenant"
    ui: null
    api: null
    note: "Described only on the roadmap item. Microsoft Learn documents no setting or API for it at the time of writing (November 2026)."
  - governs: "How external bots are detected and handled in meetings today (existing meeting policy setting)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting Join and Lobby > Manage external bots and their access to meetings"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ExternalBotAccessMode RequireApprovalWhenDetected"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Existing setting, not the planned allow list. Its documented options are detect and require approval, or do not detect; it names no allowed bots."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-11-19T23:37:54"
changes:
  - date: "2026-11-20"
    note: "New briefing: planned allowed list of external notetaker bots for Teams meetings, with the existing external bots meeting policy as today's control."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 51 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 49
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "3f6a45139e3c5ce0c368eb598739e433"
---

## What's changing

Microsoft Teams plans to let administrators keep a list of external meeting notetaker bots that are allowed to join meetings hosted in their organisation. The roadmap item says admins can also choose to block all other bots, or let them be enforced into "the currently available high friction lobby experience". Allowed bots are treated like a regular external participant, and meeting policies are enforced as appropriate.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say how a bot is named on the list or how Teams recognises it. It does not say which existing behaviour it means by the "high friction lobby" either.

The nearest documented behaviour is the existing meeting policy setting **Manage external bots and their access to meetings**. Learn says Teams detects external bots from signals collected during the join process, places detected bots in the lobby irrespective of the meeting's lobby configuration, and requires an organiser to admit them. Its default option, **When detected, require approval before joining** (`RequireApprovalWhenDetected`), keeps detected bots in the lobby until explicitly admitted. Treat this as background, not as a description of the new list.

The roadmap item is In development, with a target of January CY2027, General Availability, for Worldwide (Standard Multi-Tenant) and GCC, on Android, Desktop, iOS and Mac.

## Why it matters

Notetaker bots are the exposure the Learn page describes: external tools can record or transcribe meetings without participants' awareness and store meeting data in third-party systems outside the organisation's compliance boundary. Today the documented choices are to detect and require approval, or not to detect at all. A named allow list would let a security team approve the tools it has vetted instead of leaving each organiser to judge a lobby request.

Microsoft has not stated what happens on arrival, so this briefing assumes today's documented behaviour continues until an admin acts, and treats the list as a decision for security and Teams owners rather than a deadline. The roadmap gives no act-by date and no Message Center post was supplied with the item.

## Risk assessment

**Data exposure**

- An allowed bot is treated like a regular external participant, per the roadmap, so what it can hear or record in a meeting depends on the meeting policies applied. The list approves a bot; it does not by itself limit where that bot stores transcripts. Review each bot's data handling before listing it.
- Learn states that some external bots may not be detected. Detection is the existing documented mechanism, and the roadmap does not say whether the new list depends on it.

**Security & identity**

- Microsoft has not said how a bot is identified for the list. If a vetted bot's identity can be matched loosely, an unvetted tool may be admitted. Ask Microsoft how entries are matched before relying on the list.
- The Teams Bot Identification Program, which Learn describes as a public preview for software vendors, lets eligible vendors register and include a self-identification marker in join requests. Learn does not say whether it relates to this allow list.

**Autonomy & actions**

- No change documented: the roadmap describes entry control for bots, and gives bots no new access beyond what an external participant has.

**Change & support**

- Choosing to block all other bots could stop tools that staff use today, such as a team's own notetaker. Expect support requests from users whose preferred bot is not on the list.
- Learn says detection may occasionally misclassify human participants as bots, and that organisers can admit them from the lobby and mark them "This is not a bot". Microsoft has not said whether a blocked participant has that route.

## Cost and licensing

Microsoft has not published a licence requirement or a meter for this feature. The roadmap item names none, and the Learn page [Manage external bots and their access to meetings hosted in your organization](https://learn.microsoft.com/microsoftteams/manage-external-bots) lists none for the existing setting, so this briefing records the licensing model as not yet published rather than concluding that no licence is needed.

The cost the sources show is time: deciding which bots are sanctioned, building and maintaining the list, assigning a policy to the right users or groups and briefing organisers. Teams that rely on a bot left off the list bear a cost too.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, with General Availability, on Android, Desktop, iOS and Mac. The target is January CY2027. The roadmap does not list the web.

The roadmap describes controls for bots joining meetings hosted in your organisation, so it governs your meetings, not the meetings your users join elsewhere. The existing external bots setting is a meeting policy applied at user or group level, set for the whole tenant in the default org-wide meeting policy or for specific users or groups in a targeted policy, and its Learn page marks its content as applying to meetings and not to events. Whether the new list follows the same policy scope is not documented.

## Governance guidance

### Before rollout

- Inventory the external notetaker bots your staff and partners actually use, and decide which are sanctioned, so the allow list is ready when the control appears. Ask security and compliance to review where each bot stores meeting data.
- Check which meeting policies carry the existing **Manage external bots and their access to meetings** setting today, using the second row of the controls table, and note any that use **Do not detect bots**.
- Set who can admit people from the lobby to organisers and co-organisers only, as Learn's tip advises, so no presenter can admit a bot unnoticed.

### At rollout

- Confirm in the Teams admin center and on Learn that an allowed-bots control exists before planning around it; none is documented at the time of writing (November 2026).
- Pilot with a targeted meeting policy for a small group before changing the default org-wide policy.
- Tell organisers and regular bot users what will be allowed, blocked or sent to the lobby.

### After rollout

- Collect reports of wrongly blocked people and of bots that still joined, and report undetected bots to Microsoft through the Feedback option in Teams, as Learn asks.
- Review the allow list on a schedule and remove bots no longer in use.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Allowed list of external meeting notetaker bots, with the choice to block or lobby all others (planned)</strong><br><small>Tenant</small><br><small class="controls__note">Described only on the roadmap item. Microsoft Learn documents no setting or API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How external bots are detected and handled in meetings today (existing meeting policy setting)</strong><br><small>User</small><br><small class="controls__note">Existing setting, not the planned allow list. Its documented options are detect and require approval, or do not detect; it names no allowed bots.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting Join and Lobby › Manage external bots and their access to meetings <a href="https://learn.microsoft.com/microsoftteams/manage-external-bots" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ExternalBotAccessMode RequireApprovalWhenDetected</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

At the time of writing (November 2026), Microsoft Learn documents no admin centre setting or API for an allowed-bots list, so the first row is empty until Microsoft publishes it. The second row is today's alternative: it decides whether bots are detected and held in the lobby, and Learn does not say it can approve named bots.

Learn says the existing setting is assigned through meeting policies at user or group level. The admin role needed to edit meeting policies is not stated on the external bots page. Learn's tip for the lobby is to allow only organisers and co-organisers to admit participants from the meeting lobby, which is set in the same **Meeting join & lobby** section of a meeting policy.

## Open questions

- Where will the allowed-bots list live and how is a bot named on it (by vendor, by app, by domain)? Watch the Learn page on managing external bots and Message center.
- What is the default, and does anything change for existing meetings before an admin configures the list? Watch the roadmap item and Message center.
- Which licence, if any, covers the list? Watch the roadmap item and Learn.
- How does the allow list relate to bot detection and the Teams Bot Identification Program? Watch the Learn pages on both.
- Will a bot that is neither allowed nor blocked still reach the lobby, and can organisers still override a block? Watch Learn.

<!-- rationale
risk: Low. This is a new control over external bots; Microsoft has not stated its default, so exposure is rated on today's documented behaviour continuing, where detected bots wait in the lobby for organiser approval.
cost: Low. The only cost the sources show is admin time to build the list and brief organisers; no licence or meter is published for this feature, and the Learn page on external bots lists none.
impact: Low. Admins who manage meeting policies see the control; organisers and guests notice only where a policy blocks or admits a bot, and Microsoft has not said whether it applies to anyone before an admin configures it.
-->

<!-- verifier-findings (2026-11-20, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The planned list does not itself limit where an allowed bot stores transcripts. | Found: Searched: Teams allowed external meeting bots list bot identity matching Bot Identification Program storage transcripts blocked participant override admin role. Read roadmap, manage-external-bots and teams-bot-identification; none states the planned list's transcript-storage behaviour. | Fix: Replace 'The list approves a bot; it does not by itself limit where that bot stores transcripts.' with 'The roadmap does not describe transcript-storage restrictions for allowed bots.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; Cost and licensing / licensing: The briefing records licensing as unknown because no feature-specific licensing requirement is published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to included under the schema's product-level licensing rule. Use: 'Teams requires a Teams license for each organizational user except anonymous meeting join. No licensing requirement specific to the planned allowed-bots list is published.' Cite https://learn.microsoft.com/microsoftteams/user-access. | Source: https://learn.microsoft.com/microsoftteams/user-access
- [supported, minor] What's changing; rationale: risk / role: Detected bots require an organizer to admit them. | Found: Even when a meeting allows participants to bypass the lobby, detected bots still require organizer approval before joining. | Fix: Acknowledge the qualification on the other cited page. Replace the admission wording in What's changing and the risk rationale with: 'Detected bots require explicit admission; the external-bots guidance says presenters can also admit them depending on the meeting setting.' See https://learn.microsoft.com/microsoftteams/manage-external-bots. | Source: https://learn.microsoft.com/microsoftteams/teams-bot-identification
- [supported, minor] controls[1].note; Why it matters / behaviour: The documented existing choices are detect and require approval, or do not detect bots. | Found: | Do not detect bots | *AllowBots* | Bots aren't detected or marked in the lobby or in the meeting. They appear as any other external participant in the meetings. | | Fix: Replace the two-options wording in controls[1].note, its rendered table note and Why it matters with: 'The external-bots guide lists detection with approval and no detection. The cited Set-CsTeamsMeetingPolicy reference additionally documents BlockDetectedBots to block detected external bots.' Reference: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps. | Source: https://learn.microsoft.com/microsoftteams/manage-external-bots
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells administrators to set lobby admission, but that control has no controls-table row. | Found: Set who can admit people from the lobby to organisers and co-organisers only; the controls table lists only the planned allowed-bots list and the existing external-bot detection policy. | Fix: Remove the Before rollout checklist bullet beginning 'Set who can admit people from the lobby' because that control has no table row. Do not add a row as part of this correction.
-->
