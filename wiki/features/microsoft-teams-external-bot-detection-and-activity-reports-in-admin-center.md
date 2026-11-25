---
title: "Microsoft Teams: external bot detection and activity reports in the Teams admin center"
slug: "microsoft-teams-external-bot-detection-and-activity-reports-in-admin-center"
roadmapId: 582050
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans admin center reporting on external bots detected in, and admitted to, meetings in your tenant. It is a visibility change; no source says existing bot behaviour changes with this item, and nothing is required yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Teams service description says Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU. Nothing specific to this report is published, and the bot management page names no separate licence."
audiences: ["m365-admin","security","compliance"]
tags: ["teams","external-meeting-bots","meeting-policy","monitoring","admin-center","gcc"]
sources:
  - title: "Microsoft 365 Roadmap: Microsoft Teams: External bot detection and activity reports in Admin Center"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=582050"
    kind: "roadmap"
  - title: "Manage external bots and their access to meetings hosted in your organization"
    url: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    kind: "learn"
  - title: "Microsoft Teams analytics and reporting"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference"
    kind: "learn"
  - title: "Security detections report in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Set-CsTeamsMeetingPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    kind: "learn"
  - title: "Microsoft Teams service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/teams-service-description"
    kind: "learn"
videos: []
related: ["microsoft-teams-identify-bots-joining-your-teams-meetings","microsoft-teams-block-all-identified-external-bots-automatically-from-joining-your-meeting","microsoft-teams-configure-a-list-of-allowed-external-meeting-notetaker-bots-for-your-teams","microsoft-teams-security-detection-report-in-teams-admin-center","meeting-policy"]
controls:
  - governs: "How detected external bots are handled in meetings (detect, require approval, or block)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting join & lobby > Manage external bots and their access to meetings"
      docs: "https://learn.microsoft.com/microsoftteams/manage-external-bots"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -ExternalBotAccessMode RequireApprovalWhenDetected"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps"
    note: "Existing setting that governs bot handling today, not the planned report. Applies to meetings hosted by users assigned the policy. Other values: AllowBots, BlockDetectedBots."
  - governs: "Admin center report of external bot detection and meeting access activity"
    scope: "tenant"
    ui: null
    api: null
    note: "Planned in the roadmap item; no report or API is documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-25"
    note: "New briefing: planned Teams admin center reporting on external bots, with the existing bot meeting policy as today's control and the report's gaps listed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 72 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: removed the claim that the bot policy is unchanged, narrowed the Security detections wording, replaced the report-role gap with the documented Teams Administrator access, and removed the audit-log checklist bullet."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "68befef73ba7afa433a6a05f994c6042"
---

## What's changing

The roadmap item says admins should be able to track the detection and meeting access activity of external bots in the meetings and events hosted in their tenant. Its title places this in the admin center. The record gives status In development, a target of January CY2027, release phase General Availability, platform Web, and clouds Worldwide (Standard Multi-Tenant) and GCC. Microsoft Learn does not describe this report at the time of writing (November 2026), so everything above about the report is the roadmap's wording.

What Learn does document is the detection the report would draw on. [Manage external bots and their access to meetings hosted in your organization](https://learn.microsoft.com/microsoftteams/manage-external-bots) says Teams identifies external AI bots from signals collected during the meeting join process, and applies a meeting policy setting with three options: do not detect bots, when detected require approval before joining (the default), and block all detected bots. In the meeting lobby, registered bots appear under **Waiting** and bots detected from behavioural and infrastructure signals appear under **Suspected threats**.

Two points to keep apart. The roadmap item mentions events, but that Learn page's applies-to banner marks Meetings with a tick and Events with a cross. And the [Teams reporting reference](https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference) lists no external bot report today; the Security detections report it lists includes detections such as impersonation, malicious URL and weaponizable file, and its [page](https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/security-detections-report) does not list external bot detections. Columns, date ranges, export options and per-user detail for the new report are not published.

## Why it matters

Detection and the meeting policy already exist, but the Learn page's only monitoring advice is to monitor audit logs for unusual participant activity. A dedicated admin center report would give security and compliance teams a place to see how often bots are detected and what happened to them, which is what you need to judge whether the policy setting you chose is working. That is the wiki's reading of the roadmap wording; Microsoft has not described the report's contents.

Microsoft has not stated what happens on arrival: whether the report appears for all admins automatically or needs setting up. No source says existing bot behaviour changes with this item, so the practical step now is to know your current policy setting and be ready to read the report when it ships.

## Risk assessment

**Data exposure**
- The report would be built on bot detections, so it inherits the limits Learn lists: some bots may not be detected and may continue to join under existing meeting access settings, and detection may wrongly identify a human as a bot. Treat the report as a record of what Teams detected, not of every bot present.
- Microsoft has not said whether the report shows participant names or emails. Learn says Teams admin center reports are open to the Teams or Skype for Business administrator role and to Global reader (tenant-level aggregate and no per-user or team data). Microsoft documents [Teams Administrator access to all reports](https://learn.microsoft.com/microsoftteams/using-admin-roles) in the Teams admin center; report-specific permission details are not yet published.

**Security & identity**
- The policy option **Do not detect bots** means, per Learn, that bots are not detected or marked in the lobby or in the meeting. Confirm with Microsoft whether a report can show anything for users on that option.
- Block all detected bots means detected bots cannot be admitted by organisers or other participants; Learn also says it does not guarantee all external bots will be blocked.

**Autonomy & actions**
- The roadmap wording is about tracking activity. It does not describe a new way to approve, block or remove bots, so enforcement stays with the meeting policy row below.

**Change & support**
- Where the policy blocks detected bots, Learn says a participant wrongly identified as a bot may be prevented from joining, and eligible participants can use an email verification recovery experience where supported. Expect support calls from affected external participants.
- Where approval is required, Learn says organisers can admit a wrongly identified participant and use the This is not a bot option. Brief organisers on this.

## Cost and licensing

No licence, price or meter for this report is published. The Microsoft Teams service description says Teams can be licensed as part of qualifying Microsoft 365 offerings or as a standalone SKU, and the bot management page names no separate licence. The wiki therefore lists licensing as included in the Teams licence you already hold, with the caveat that nothing specific to this report is published.

Indirect cost is admin time: reading the report, tuning the meeting policy and briefing organisers. Microsoft's Teams reporting reference lists reports by cloud; a row for this report is not published, so cloud availability beyond the roadmap record's Worldwide and GCC is not stated.

## Scope

The roadmap record lists clouds Worldwide (Standard Multi-Tenant) and GCC, and platform Web. It states no other clouds; that is a record fact and not a statement that the report is unavailable elsewhere.

The existing bot policy is a Teams meeting policy applied at user or group level, and Learn says the setting applies to meetings hosted by users assigned the policy. Learn says Teams admin center reports are open to the Teams or Skype for Business administrator role and to Global reader with tenant-level aggregate data only, and documents Teams Administrator access to all reports in the Teams admin center; report-specific permission details are not yet published. Rollout mechanics, prerequisites and the report's date range are not published.

## Governance guidance

### Before rollout
- Read the current bot setting on each meeting policy, with `Get-CsTeamsMeetingPolicy -Identity "<policy name>" | Select-Object Identity, ExternalBotAccessMode`, so you know which user groups are on detect-and-require-approval, block, or do not detect.
- Decide whether organisers who host external meetings need Block all detected bots, and trial it with a selected group first, as the Learn best practices suggest.
- Identify which Teams or Skype for Business administrators and Global readers will review the report, given Learn's role rule for Teams admin center reports.

### At rollout
- Watch Message center and the roadmap item for the report's availability date and its Learn page.
- Open the Teams admin center under Analytics & reports and check whether an external bot report appears, and which columns and date range it offers.
- Tell organisers how detected bots appear in the lobby and what the This is not a bot option does.

### After rollout
- Compare the report's detections with organisers' and help desk reports of undetected or wrongly identified participants.
- Revisit the policy setting per user group when the report shows heavy detection volume for a group.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How detected external bots are handled in meetings (detect, require approval, or block)</strong><br><small>User</small><br><small class="controls__note">Existing setting that governs bot handling today, not the planned report. Applies to meetings hosted by users assigned the policy. Other values: AllowBots, BlockDetectedBots.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting join &amp; lobby › Manage external bots and their access to meetings <a href="https://learn.microsoft.com/microsoftteams/manage-external-bots" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -ExternalBotAccessMode RequireApprovalWhenDetected</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin center report of external bot detection and meeting access activity</strong><br><small>Tenant</small><br><small class="controls__note">Planned in the roadmap item; no report or API is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The meeting policy row documents the existing admin setting for how detected bots are handled. Learn's prose and reference name Set-CsTeamsMeetingPolicy for the setting, but the page's PowerShell examples print Set-CsTeamsEventsPolicy; the row follows the cmdlet that carries the ExternalBotAccessMode parameter in the cmdlet reference. The reference lists the parameter's default value as RequireApprovalWhenDetected. The values the bot management page shows are AllowBots, RequireApprovalWhenDetected and BlockDetectedBots.

Microsoft Learn documents no admin center report and no API for external bot detections at the time of writing (November 2026), so that row has both sides empty.

## Open questions

- What will the report contain: detection counts only, or participant, meeting and outcome detail, with export? Watch the Teams reporting reference and Message center.
- Beyond the Teams Administrator access to all Teams admin center reports that Learn documents, what report-specific permissions apply, and will per-user detail be hidden from Global reader as with other Teams reports?
- Will the report cover events as well as meetings, given the roadmap wording and the Learn page's applies-to banner that marks Events with a cross?
- Will detections appear for users on the Do not detect bots option, or only for policies that detect bots?
- Is a licence beyond the Teams licence needed for the report, and will it be available in GCC on the same date as Worldwide?

<!-- rationale
risk: Low. The item adds reporting, not a new way for bots to reach meetings; the exposure that remains is the existing bot policy, whose Learn default is to require approval when a bot is detected.
cost: Low. The only cost the sources show is admin time to read the reports; Microsoft has not published a licence, meter or price specific to this report.
impact: Low. The roadmap describes a tool for admins; Microsoft has not said that meeting organisers or participants see anything new.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls / command: The bot management page gives AllowBots as the detection-disabled PowerShell value. | Found: Do not detect bots | AllowBots | Bots aren't detected or marked in the lobby or in the meeting. | Fix: Remove 'AllowBots' from the unqualified 'Other values' note, leaving 'Other value: BlockDetectedBots.' After the sentence listing the bot management page's values, add: 'The Set-CsTeamsMeetingPolicy reference instead lists AllowAllBots for disabling detection; Microsoft's pages disagree on this value.' Cite https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsmeetingpolicy?view=teams-ps, whose ExternalBotAccessMode section says 'AllowAllBots: Don't detect bots'. | Source: https://learn.microsoft.com/microsoftteams/manage-external-bots
- [supported, minor] Risk assessment: Data exposure; Scope; Governance guidance: Before rollout / role: The Teams reporting reference permits the Teams or Skype for Business administrator role to access Teams admin center reports. | Found: To access the reports, you must be assigned one of the following roles: Teams or Skype for Business administrator. | Fix: After the first general reporting-role statement, add: 'Microsoft's Teams enterprise deployment overview instead says these reports require a Global Administrator or Teams administrator; its role wording differs from the reporting reference.' Cite https://learn.microsoft.com/microsoftteams/deploy-enterprise-overview#teams-analytics-&-reports, which states 'To view these reports, you must be a global administrator or Teams administrator.' Keep the separately documented Teams Administrator access and report-specific permission caveat. | Source: https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/teams-reporting-reference
-->
