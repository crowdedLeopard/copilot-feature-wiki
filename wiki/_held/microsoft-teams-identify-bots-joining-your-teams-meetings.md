---
title: "Microsoft Teams: identify external bots joining meetings"
slug: "microsoft-teams-identify-bots-joining-your-teams-meetings"
roadmapId: 558107
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Teams flags external meeting bots in the lobby and makes organisers admit them. On by default; a meeting policy can switch detection off or block detected bots. Review which option each policy should use."
status: "rolling-out"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Android","Desktop","iOS","Mac"]
targetDate: "May CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn page and MC1251206 name no licence or meter for bot detection; MC1251206 says all organisations using Microsoft Teams meetings are affected."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["teams","external-meeting-bots","meeting-policy","meeting-controls","admin-controls","privacy","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 558107"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558107"
    kind: "roadmap"
  - title: "MC1251206: (Updated) Microsoft Teams: Identify external bots joining your Teams meetings"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1251206"
    kind: "message-center"
  - title: "Manage external bots and their access to meetings hosted in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    kind: "learn"
  - title: "IT Admins - Manage lobby options in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
videos: []
related: ["microsoft-teams-block-all-identified-external-bots-automatically-from-joining-your-meeting","microsoft-teams-configure-a-list-of-allowed-external-meeting-notetaker-bots-for-your-teams","meeting-policy","microsoft-teams-report-a-security-concern-in-meetings"]
controls:
  - governs: "How detected external bots are handled in meetings (detect and require approval, block, or do not detect)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Manage external bots and their access to meetings"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ExternalBotAccessMode RequireApprovalWhenDetected"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Other values on the Learn page: BlockDetectedBots and AllowBots (do not detect bots). Applies to meetings hosted by users assigned the policy."
  - governs: "Who can admit people from the lobby, which decides who can admit a detected bot"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Who can admit from lobby"
      docs: "https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -UsersCanAdmitFromLobby OrganizerAndCoOrganizersOnly"
      docs: "https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby"
    note: "Sets a default that organisers can change in Meeting options. Existing control, not specific to bots; Learn's tip on the bot page recommends organisers and co-organisers only."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-05-19T22:45:25"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 558107, with the Teams meeting policy option, its three values and the default."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 62 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 60
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "14ef3f84d2843dd9d719915b1db835c1"
---

## What's changing

Teams now detects external meeting bots, such as transcription and note-taking assistants, as they try to join a meeting hosted by your organisation. By default Teams places a detected bot in the lobby and requires the organiser to admit it explicitly. The roadmap item describes this as a clear representation of the bots in the lobby, with organisers admitting them separately and only if really required.

The behaviour is set by a Teams meeting policy option, **Manage external bots and their access to meetings**. Microsoft Learn documents three values: do not detect bots, when detected require approval before joining (the default), and block all detected bots. Detected bots wait in the lobby regardless of the meeting's lobby configuration. Registered bots appear in the lobby's **Waiting** section and unverified bots caught by Teams' detection appear under **Suspected threats**. MC1251206 lists only two options (do not detect bots, require approval) and says bot detection will be enabled by default for all tenants; the block option appears on the Learn page. The setting applies to meetings hosted by users assigned the policy.

Detection is not complete. Learn says some bots may not be detected and may continue to join under the meeting's existing access settings, and that a human participant can be wrongly flagged as a bot. The roadmap item is Rolling out with a target of May CY2026, for Worldwide (Standard Multi-Tenant) and GCC, on Android, Desktop, iOS and Mac, in General Availability and Targeted Release. MC1251206 (updated 22 September 2026) gives Targeted Release from mid-May 2026 to early June 2026, and General Availability for Worldwide and GCC from early June 2026 to the end of October 2026 (previously mid-September), with Microsoft's end date 30 November 2026.

## Why it matters

External AI notetakers can record or transcribe a meeting and keep the content in third-party systems outside your compliance boundary, which Learn lists as the reason for the feature. Because detection is on by default and the default policy value requires approval, the change reaches organisers without any admin action, and it is the organiser's admission decision that now stands between a bot and your meeting content.

The wiki's view: keep the default, decide deliberately which policies should use **Block all detected bots**, and tell organisers what the new labels mean. Detection does not replace the lobby: an undetected bot is treated like any other external participant, so lobby and anonymous-join settings still do the work for those.

## Risk assessment

**Data exposure**

- Bots can record or transcribe meetings and store the content in third-party systems (Microsoft Learn). Under the default value, a detected bot waits in the lobby until someone admits it; the admission is the point at which exposure is decided.
- Under **Do not detect bots**, bots are not detected or marked and appear as any other external participant, following the meeting's existing access and lobby settings.

**Security & identity**

- Detection can miss bots and can wrongly flag a person. Learn says the block option does not guarantee that all external bots are blocked, and that a wrongly flagged participant may be prevented from joining under **Block all detected bots**; where supported, eligible participants can use an email verification recovery experience.
- Under the default value, organisers (and presenters, depending on the meeting setting) admit detected bots. Learn tips that lobby settings should let only organisers and co-organisers admit participants; the **Who can admit from lobby** default is **Organizers and presenters**, and organisers can change it in **Meeting options** (controls table, second row).

**Autonomy & actions**

- MC1251206 says the detection logic analyses meeting join metadata to identify external automated bots. Under the default, a person decides each admission; under **Block all detected bots**, Teams blocks detected bots without an organiser decision.

**Change & support**

- Organisers see new labels and approval prompts, so expect helpdesk questions. Learn describes a **This is not a bot** option organisers can use to correct a wrongly flagged participant in the lobby, and asks users to report undetected bots through the Feedback option in Teams.

## Cost and licensing

The Learn page for this feature and MC1251206 name no licence and no meter for bot detection, so the licence position is not yet published. MC1251206 says the change affects all organisations using Microsoft Teams meetings, including GCC tenants.

The known cost is indirect: admin time to choose a meeting policy option, a pilot if you want to test blocking, and communication to organisers and the helpdesk. No cap or budget control applies, because no charge is documented.

## Scope

**Who and where:** meetings hosted by users assigned the meeting policy; the option sits in meeting policies, which Learn describes as scoped to users and groups, and can be set on the org-wide default policy or on a targeted policy. MC1251206 adds that the change cannot be controlled through Entra ID group membership at this time. Learn's applicability banner marks the page for Meetings, not Events.

**Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, and Android, Desktop, iOS and Mac.

**Rollout:** status Rolling out, target May CY2026 on the roadmap; MC1251206 gives the rollout windows in What's changing. No act-by date is set. Microsoft's notice says no action is required at this time.

**Related items:** see [/features/microsoft-teams-block-all-identified-external-bots-automatically-from-joining-your-meeting/](/features/microsoft-teams-block-all-identified-external-bots-automatically-from-joining-your-meeting/) and [/features/microsoft-teams-configure-a-list-of-allowed-external-meeting-notetaker-bots-for-your-teams/](/features/microsoft-teams-configure-a-list-of-allowed-external-meeting-notetaker-bots-for-your-teams/).

## Governance guidance

### Before rollout

- Decide which meeting policies should use each option of **Manage external bots and their access to meetings**, and record the choice (controls table, first row).
- Pilot **Block all detected bots** with a selected group before applying it organisation-wide, as Learn advises.
- Review **Who can admit from lobby** so that only organisers and co-organisers can admit participants, as the Learn tip recommends (controls table, second row).
- Brief organisers and the helpdesk on the **Waiting** and **Suspected threats** lobby sections and the **This is not a bot** option, and update any documentation on meeting join and lobby behaviour.

### At rollout

- Check that each meeting policy shows the intended value under **Meeting join & lobby**.
- Ask organisers to report undetected bots through the Feedback option in Teams.
- Watch the helpdesk for people wrongly flagged as bots, especially in policies set to block.

### After rollout

- Read back the setting with `Get-CsTeamsMeetingPolicy -Identity "<policy name>" | Select-Object Identity, ExternalBotAccessMode`, as Learn gives it.
- Monitor audit logs for unusual participant activity, as Learn recommends.
- Avoid choosing **Do not detect bots** unless a specific business scenario needs it, and watch Message center for the expanded admin controls MC1251206 says Microsoft intends to provide.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How detected external bots are handled in meetings (detect and require approval, block, or do not detect)</strong><br><small>User</small><br><small class="controls__note">Other values on the Learn page: BlockDetectedBots and AllowBots (do not detect bots). Applies to meetings hosted by users assigned the policy.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Manage external bots and their access to meetings <a href="https://learn.microsoft.com/microsoftteams/manage-external-bots" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ExternalBotAccessMode RequireApprovalWhenDetected</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can admit people from the lobby, which decides who can admit a detected bot</strong><br><small>User</small><br><small class="controls__note">Sets a default that organisers can change in Meeting options. Existing control, not specific to bots; Learn's tip on the bot page recommends organisers and co-organisers only.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Who can admit from lobby <a href="https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -UsersCanAdmitFromLobby OrganizerAndCoOrganizersOnly</code> <a href="https://learn.microsoft.com/microsoftteams/who-can-bypass-meeting-lobby" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The bot option is a per-policy setting, so organisers get the behaviour of the policy assigned to them. Learn's example PowerShell blocks print `Set-CsTeamsEventsPolicy`, while its text and the cmdlet reference name `Set-CsTeamsMeetingPolicy` for `ExternalBotAccessMode`; the table uses the cmdlet the reference documents.

The lobby row is a related control, not a bot setting: Learn says organisers can change the default through **Meeting options**, so it sets a default rather than enforcing a value. The lobby page's example script for this setting pairs the value with a different parameter than the one it names; confirm the call against the cmdlet reference before scripting it.

## Open questions

- Which licence, if any, does bot detection need? Watch the Learn page and MC1251206.
- Does the **Block all detected bots** option, described on Learn but not in MC1251206's two-option list, apply in GCC tenants as the roadmap item does? Watch Message center and the Learn page.
- Which audit events record bot detection, lobby admission or blocking, so that the audit-log monitoring Learn recommends can be targeted?
- Will Microsoft correct the Learn PowerShell examples that print `Set-CsTeamsEventsPolicy` for a meeting policy setting?
- When will the roadmap item move from Rolling out to Launched, given MC1251206's end of October 2026 completion date?

<!-- rationale
risk: Medium. Detected bots are held in the lobby by default, but Microsoft says some bots go undetected and then follow the meeting's existing access settings.
cost: Low. Neither the Learn page nor Message center names a licence or meter for this feature; the known cost is admin time to review policies and brief organisers. A licence statement is not yet published.
impact: Medium. Meeting organisers see new lobby labels and approval prompts, and by default they must admit detected bots before they join.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Cost and licensing / cost: No cap or budget control applies because no charge is documented. | Found: Searched: "external bots" "budget" "Teams" spending cap; Teams external bot detection license pricing budget. Read manage-external-bots, Teams add-on licenses and user-access; searches found no statement that no cap or budget control applies to detection. | Fix: Remove 'No cap or budget control applies, because no charge is documented.' The narrower statement that no feature-specific meter or charge is published is already covered by the licensing paragraph.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note / command: The other PowerShell values on the feature's Learn page are BlockDetectedBots and AllowBots. | Found: Do not detect bots | AllowBots ... Block all detected bots | BlockDetectedBots | Fix: Replace the note's first sentence with 'The feature page lists BlockDetectedBots and AllowBots; the Set-CsTeamsMeetingPolicy reference instead names AllowAllBots for disabling detection.' Both URLs are already cited: https://learn.microsoft.com/microsoftteams/manage-external-bots and https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps. | Source: https://learn.microsoft.com/microsoftteams/manage-external-bots
- [supported, minor] front matter: licensing.model; Cost and licensing; rationale: cost; Open questions / licensing: The licensing model is unknown because no licence specific to bot detection has been published. | Found: Except for joining Teams meetings anonymously, each user in your organization must have a Teams license before they can use Teams. | Fix: Set licensing.model to included. Replace the licensing notes and the first licensing paragraph with 'A Microsoft Teams license is required for each user in the organisation to use Teams, except for joining meetings anonymously. Microsoft has not published a licence or meter specific to bot detection as of November 2026.' Cite https://learn.microsoft.com/microsoftteams/user-access. In the cost rationale replace 'A licence statement is not yet published' with 'No feature-specific licence or meter is published.' Replace the first open question with 'Will Microsoft publish any licence or meter specific to bot detection? Watch the Learn page and MC1251206.' | Source: https://learn.microsoft.com/microsoftteams/user-access
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The governance checklist tells administrators to monitor audit logs, but the controls table has no audit-monitoring row. | Found: After rollout: 'Monitor audit logs for unusual participant activity, as Learn recommends.' Controls table: only external-bot handling and who can admit from lobby. | Fix: Remove the 'Monitor audit logs for unusual participant activity, as Learn recommends' checklist bullet, which has no corresponding controls row. Retain the open question about which audit events record detection, admission or blocking.
-->
