---
title: "Microsoft Teams: separate attendance and engagement report policy for Teams events"
slug: "microsoft-teams-teams-events-attendance-and-engagement-report-policy"
roadmapId: 567466
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a CsTeamsEventsPolicy setting for organisers' attendance and engagement reports, separate from CsTeamsMeetingPolicy. Rollout is due to start mid-December 2026; administrators should choose a value for events first."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Learn's events licensing page lists attendance and engagement reports for events under the advanced event features licence category. A separate licence or meter for the new policy setting is not yet published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","meeting-policy","teams-events","powershell","policy","admin-controls","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 567466"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567466"
    kind: "roadmap"
  - title: "MC1455014: (Updated) Microsoft Teams: Teams Events Attendance and Engagement Report Policy"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1455014"
    kind: "message-center"
  - title: "Manage the attendance and engagement report for meetings and events in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report"
    kind: "learn"
  - title: "Set-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    kind: "learn"
  - title: "Grant-CsTeamsEventsPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamseventspolicy?view=teams-ps"
    kind: "learn"
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    kind: "learn"
  - title: "Teams events licensing overview"
    url: "https://learn.microsoft.com/microsoftteams/events-licensing"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Get-CsUserPolicyAssignment"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/get-csuserpolicyassignment?view=teams-ps"
    kind: "learn"
  - title: "Assign policies in Teams – getting started"
    url: "https://learn.microsoft.com/microsoftteams/policy-assignment-overview"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether event organisers can view and download attendance and engagement reports"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowEngagementReport ForceDisabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    note: "Example blocks reports; policy is in preview. Enabled: On, organizers can turn it off. Disabled: Off, organizers can turn it on. ForceEnabled: On, cannot be turned off. ForceDisabled: Off, no view or download."
  - governs: "Which events policy each organiser holds (create, edit and assign events policies)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Events policies > policy > Edit"
      docs: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
    api:
      kind: "powershell"
      call: "Grant-CsTeamsEventsPolicy -Identity <user> -Policy <policy name>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamseventspolicy?view=teams-ps"
    note: "General control for events policies; a user can be assigned only one events policy at a time. The Grant cmdlet is also marked preview."
  - governs: "Whether meeting organisers can view and download attendance and engagement reports (current control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > policy > Meeting scheduling > Attendance and engagement report"
      docs: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowEngagementReport Disabled"
      docs: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report"
    note: "Learn says it covers meetings and events today; per Microsoft's notice MC1455014 events will stop inheriting from it once the new events setting applies."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, reflecting MC1455014 as updated on 3 November 2026 (rollout from mid-December 2026) and the events policy cmdlet reference."
  - date: "2026-11-16"
    note: "Action raised to act-now (rollout from mid-December 2026); added the events licensing position, an events policy assignment row, the admin participant-details route, and corrected the meeting policy path and the GCC question."
  - date: "2026-11-17"
    note: "Corrected after verification: one example value in the events policy call with all four values in the note, licensing model set to unknown, Teams Administrator role stated, and Get-CsUserPolicyAssignment used to check a user's events policy."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 70 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: removed the undocumented Teams admin center route for checking which events policy a user holds; the check now uses Get-CsUserPolicyAssignment."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 73 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f731ef5660467ca329f3574a7ff69f87"
---

## What's changing

Microsoft is adding a setting to the Teams events policy (CsTeamsEventsPolicy) that decides whether event organisers can view and download attendance and engagement reports. It is separate from the equivalent setting in the Teams meeting policy (CsTeamsMeetingPolicy), so an administrator can allow reports for events while restricting them for meetings, or the reverse.

Microsoft's notice MC1455014 lists four values. **On** lets organisers view and download reports for all events and stops them disabling reporting. **Off** stops organisers viewing or downloading reports for any events. **On, organizers can turn it off** is the default and lets organisers disable reporting in event options. **Off, organizers can turn it on** disables reporting by default and lets organisers enable it for individual events. The notice tells administrators not to assume Teams events will keep inheriting these settings from CsTeamsMeetingPolicy.

The Learn attendance report page still describes the meeting policy setting as covering "all meetings and events they create", and the Set-CsTeamsEventsPolicy reference already lists an `-AllowEngagementReport` parameter with matching values and says the Teams events policy is still in preview. At the time of writing (November 2026) the roadmap item is In development, so treat the parameter as documented ahead of rollout, not as shipped behaviour.

The roadmap target is December CY2026 for General Availability in Worldwide (Standard Multi-Tenant) and GCC, on Desktop. MC1455014, updated 3 November 2026, gives the same window for Worldwide and GCC: rollout begins in mid-December 2026 (previously early November) and is expected to complete by early January 2027 (previously early December 2026). The notice sets no act-by date and says no immediate action is required before rollout.

## Why it matters

Attendance and engagement reports show who attended, when they joined and left, and how many attendees unmuted, turned on cameras, raised hands, reacted or used Q&A. Today Learn describes one meeting policy setting that covers both meetings and events; once the new setting applies, the two can diverge and events need their own decision. If nobody acts, organisers get the notice's default (On, organizers can turn it off).

The rollout is about a month away on 16 November 2026, so the wiki rates this act-now: decide the events value before mid-December rather than discover it afterwards. Microsoft has not said whether a tenant that set Attendance and engagement report to Off in a meeting policy will see that restriction applied to events, so check event behaviour after rollout and update guidance that points event organisers to meeting policies.

## Risk assessment

**Data exposure**

- The reports list attendees with join and leave times and engagement counts. Under the default, event organisers can view and download them for all their events; the events policy setting is the control that limits this.
- Microsoft has not said whether a restriction already set in a meeting policy is copied to the events policy, so an organisation that relies on the meeting policy being Off to withhold event reports could find organisers able to download them.

**Security & identity**

- The setting is per policy, so each organiser's events policy determines what they can do. Learn says a user can be assigned only one events policy at a time, so a custom policy replaces the global one for that user.
- Learn says administrators cannot view the report for events they did not organise, but can view attendee details within 24 hours of the event under Users > Manage users > organizer > Meetings & calls > meeting or call ID > Participant details. That is attendee detail, not the report.

**Autonomy & actions**

- The announced change separates policy control over organisers' report access.

**Change & support**

- Help-desk guidance that sends event organisers to meeting policies for reporting becomes wrong once the events setting applies. Expect questions from organisers whose events show no report after an administrator sets Off.
- With **On, organizers can turn it off** or **Off, organizers can turn it on**, an organiser's choice can differ between events; with **On** or **Off**, organisers cannot override it.

## Cost and licensing

The notice and the roadmap item name no licence or meter for the new setting. Learn's Teams events licensing page says all eligible Teams licences include the foundational capabilities to review attendance reports, and lists "Attendance and engagement reports" among the advanced event features. In its enterprise row the advanced category includes Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7; the Business and frontline licences it lists are in the foundational category. The page also says that to access the full set of Teams events features, users must have a licence from the advanced category.

That page describes the reports, not the new policy setting; whether the setting carries a licence condition of its own is not yet published. The cost evident today is administrator time to choose a value, assign policies and update guidance.

## Scope

The setting applies to Teams events organisers through the events policy assigned to them. Per the roadmap record, it is targeted for General Availability in Worldwide (Standard Multi-Tenant) and GCC on Desktop. Other clouds and platforms are not listed on the item; that is a record fact, not a statement that anything is unavailable elsewhere.

Microsoft's notice says rollout begins in mid-December 2026 and is expected to complete by early January 2027, for both Worldwide and GCC; this does not promise activation in every tenant on the same day. The Teams Administrator role can manage the Teams admin center and its associated PowerShell controls. At the time of writing (November 2026) Learn documents no Teams admin center path for the new setting.

## Governance guidance

### Before rollout

- Record which meeting policies set Attendance and engagement report to Off or On and which users hold them, so you can compare event behaviour afterwards (Teams admin center > Meetings > Meeting policies).
- Decide which of the four values suits event organisers, and whether reports for events should differ from reports for meetings.
- Tell help-desk staff and event organisers that event reporting will have its own policy and that the meeting policy setting may stop governing events.

### At rollout

- Set the attendance and engagement report value in each custom events policy with Set-CsTeamsEventsPolicy rather than relying on the default (see the controls table).
- Check which events policy each event-organising user holds, using Get-CsUserPolicyAssignment -Identity <user>, because a user can be assigned only one events policy at a time.

### After rollout

- Test with an organiser on a restricted policy and confirm they can or cannot view and download a report for an event, as the setting should dictate.
- Update internal documentation that describes attendance reporting for events through meeting policies, as the notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether event organisers can view and download attendance and engagement reports</strong><br><small>User</small><br><small class="controls__note">Example blocks reports; policy is in preview. Enabled: On, organizers can turn it off. Disabled: Off, organizers can turn it on. ForceEnabled: On, cannot be turned off. ForceDisabled: Off, no view or download.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowEngagementReport ForceDisabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which events policy each organiser holds (create, edit and assign events policies)</strong><br><small>User</small><br><small class="controls__note">General control for events policies; a user can be assigned only one events policy at a time. The Grant cmdlet is also marked preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Edit <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsEventsPolicy -Identity &lt;user&gt; -Policy &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamseventspolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meeting organisers can view and download attendance and engagement reports (current control)</strong><br><small>User</small><br><small class="controls__note">Learn says it covers meetings and events today; per Microsoft's notice MC1455014 events will stop inheriting from it once the new events setting applies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting scheduling › Attendance and engagement report <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowEngagementReport Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The events setting is documented only as a PowerShell parameter at the time of writing (November 2026); a search of Learn found no Teams admin center path for it, and the Set-CsTeamsEventsPolicy reference and Teams events policy are still marked preview. The events policy row covers editing a policy in the admin centre and assigning it with PowerShell; the [policy assignment overview](https://learn.microsoft.com/microsoftteams/policy-assignment-overview) that the meeting policies page links to covers other assignment methods.

The meeting policy row is the current alternative. Its Learn page says it covers meetings and events today, and the notice says events will stop inheriting from it, so do not treat it as the long-term control for events. Both controls apply per policy to the users assigned that policy.

## Open questions

- Will an existing meeting policy value of Off be copied to the events policy at rollout, or will every tenant start at On, organizers can turn it off? Watch MC1455014 and the Learn attendance report page.
- Where will the setting appear in the Teams admin center for events policies? Learn documents no path for it at the time of writing (November 2026).
- Will the attendee-inclusion setting also separate for events? The Set-CsTeamsEventsPolicy syntax lists -InfoShownInReportMode alongside -AllowEngagementReport but no attendee-inclusion parameter.
- Does the new events setting carry any licence condition beyond the advanced event features category that Learn lists for event reports? Watch the Teams events licensing page.

<!-- rationale
risk: Medium. Under the notice's default (On, organizers can turn it off) event organisers can view and download reports, and Microsoft has not said whether a meeting policy set to Off carries over to events.
cost: Low. The only cost shown is admin time to choose and communicate a value; Learn's events licensing page puts attendance and engagement reports under the advanced event features licences, and no separate licence for the new setting is published.
impact: Medium. Teams events organisers notice if reports appear or disappear; organisers of ordinary meetings are not affected by the new events setting, per Microsoft's notice MC1455014.
-->
