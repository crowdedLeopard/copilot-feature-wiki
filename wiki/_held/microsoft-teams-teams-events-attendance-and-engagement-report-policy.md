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
  model: "included"
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
videos: []
related: []
controls:
  - governs: "Whether event organisers can view and download attendance and engagement reports"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-CsTeamsEventsPolicy -Identity <policy name> -AllowEngagementReport Enabled | Disabled | ForceEnabled | ForceDisabled"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps"
    note: "Learn says the Teams events policy is still in preview. Enabled: On, but organizers can turn it off. Disabled: Off, but organizers can turn it on. ForceDisabled: Off."
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
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, reflecting MC1455014 as updated on 3 November 2026 (rollout from mid-December 2026) and the events policy cmdlet reference."
  - date: "2026-11-16"
    note: "Action raised to act-now (rollout from mid-December 2026); added the events licensing position, an events policy assignment row, the admin participant-details route, and corrected the meeting policy path and the GCC question."
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 63
  unconfirmed: 2
  contradicted: 3
  attempts: 2
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

- No change: the setting governs whether a person can see a report and starts no automated action.

**Change & support**

- Help-desk guidance that sends event organisers to meeting policies for reporting becomes wrong once the events setting applies. Expect questions from organisers whose events show no report after an administrator sets Off.
- With **On, organizers can turn it off** or **Off, organizers can turn it on**, an organiser's choice can differ between events; with **On** or **Off**, organisers cannot override it.

## Cost and licensing

The notice and the roadmap item name no licence or meter for the new setting. Learn's Teams events licensing page says all eligible Teams licences include the foundational capabilities to review attendance reports, and lists "Attendance and engagement reports" among the advanced event features. In its enterprise row the advanced category includes Office 365 E1, E3, E5 and Microsoft 365 E3, E5, E7; the Business and frontline licences it lists are in the foundational category. The page also says that to access the full set of Teams events features, users must have a licence from the advanced category.

That page describes the reports, not the new policy setting; whether the setting carries a licence condition of its own is not yet published. The cost evident today is administrator time to choose a value, assign policies and update guidance.

## Scope

The setting applies to Teams events organisers through the events policy assigned to them. Per the roadmap record, it is targeted for General Availability in Worldwide (Standard Multi-Tenant) and GCC on Desktop. Other clouds and platforms are not listed on the item; that is a record fact, not a statement that anything is unavailable elsewhere.

Microsoft's notice says rollout begins in mid-December 2026 and completes by early January 2027, for both Worldwide and GCC; this does not promise activation in every tenant on the same day. Learn names no administrator role needed to edit the events policy, and at the time of writing (November 2026) documents no Teams admin center path for the new setting.

## Governance guidance

### Before rollout

- Record which meeting policies set Attendance and engagement report to Off or On and which users hold them, so you can compare event behaviour afterwards (Teams admin center > Meetings > Meeting policies).
- Decide which of the four values suits event organisers, and whether reports for events should differ from reports for meetings.
- Tell help-desk staff and event organisers that event reporting will have its own policy and that the meeting policy setting may stop governing events.

### At rollout

- Set the attendance and engagement report value in each custom events policy with Set-CsTeamsEventsPolicy rather than relying on the default (see the controls table).
- Check which events policy each event-organising user holds, using Teams admin center > Meetings > Events policies or Grant-CsTeamsEventsPolicy, because a user can be assigned only one events policy at a time.

### After rollout

- Test with an organiser on a restricted policy and confirm they can or cannot view and download a report for an event, as the setting should dictate.
- Update internal documentation that describes attendance reporting for events through meeting policies, as the notice recommends.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether event organisers can view and download attendance and engagement reports</strong><br><small>User</small><br><small class="controls__note">Learn says the Teams events policy is still in preview. Enabled: On, but organizers can turn it off. Disabled: Off, but organizers can turn it on. ForceDisabled: Off.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowEngagementReport Enabled | Disabled | ForceEnabled | ForceDisabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which events policy each organiser holds (create, edit and assign events policies)</strong><br><small>User</small><br><small class="controls__note">General control for events policies; a user can be assigned only one events policy at a time. The Grant cmdlet is also marked preview.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Events policies › policy › Edit <a href="https://learn.microsoft.com/microsoftteams/meeting-policies-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Grant-CsTeamsEventsPolicy -Identity &lt;user&gt; -Policy &lt;policy name&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamseventspolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meeting organisers can view and download attendance and engagement reports (current control)</strong><br><small>User</small><br><small class="controls__note">Learn says it covers meetings and events today; per Microsoft's notice MC1455014 events will stop inheriting from it once the new events setting applies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › policy › Meeting scheduling › Attendance and engagement report <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowEngagementReport Disabled</code> <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The events setting is documented only as a PowerShell parameter at the time of writing (November 2026); a search of Learn found no Teams admin center path for it, and the Set-CsTeamsEventsPolicy reference and Teams events policy are still marked preview. The events policy row covers editing a policy in the admin centre and assigning it with PowerShell; the policy assignment overview that the meeting policies page links to covers other assignment methods.

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

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] What's changing; Scope / record: MC1455014 expects rollout completion by early January 2027 for Worldwide and GCC. | Found: General Availability (Worldwide, GCC): Rollout will begin in mid-December 2026 (previously early November) and is expected to complete by early January 2027 | Fix: In Scope, replace 'completes by early January 2027' with 'is expected to complete by early January 2027', preserving the qualification already present in What's changing.
- [contradicted, blocker] controls[0].api; Governance controls table / command: The events-setting call can use '-AllowEngagementReport Enabled | Disabled | ForceEnabled | ForceDisabled' as printed. | Found: [-AllowEngagementReport <String>]
Controls whether attendance and engagement reports are allowed for events.
Possible values are: | Fix: Print one value in the call, for example 'Set-CsTeamsEventsPolicy -Identity <policy name> -AllowEngagementReport ForceDisabled', and label it as the example that blocks reports. List Enabled, Disabled, ForceEnabled and ForceDisabled with their meanings in the note. The current pipes invoke additional commands rather than select a parameter value; the cmdlet and both parameter names themselves are documented. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The setting starts no automated action. | Found: Searched: "TeamsEventsPolicy" "AllowEngagementReport" "automatic". Opened Set-CsTeamsEventsPolicy and meeting-attendance-report and read MC1455014; they describe report access and generation, not an explicit guarantee that no automated action occurs. | Fix: Replace the bullet with 'The announced change separates policy control over organisers' report access.' Remove the unsupported categorical statement about automated actions.
- [unsupported, blocker] front matter: licensing.model / licensing: The new policy setting's licensing model is included. | Found: Searched: Teams events attendance engagement report policy AllowEngagementReport licensing license meter price; "TeamsEventsPolicy" "AllowEngagementReport" "license". Opened events-licensing, meeting-attendance-report and Set-CsTeamsEventsPolicy. Report licensing does not state inclusion of the new  | Fix: Set licensing.model to 'unknown'. Keep the documented report-licensing background and the existing statement that a separate condition for the new setting is not yet published; those do not establish that the setting is included.
- [contradicted, blocker] Scope / absence: Learn names no administrator role needed to edit the events policy. | Found: Teams Administrator | Manage the Teams service, and manage and create Microsoft 365 Groups. | Everything in the Microsoft Teams admin center and associated PowerShell controls | Fix: Replace the sentence with 'The Teams Administrator role can manage the Teams admin center and its associated PowerShell controls.' Cite https://learn.microsoft.com/microsoftteams/using-admin-roles. Do not assert this is the only or least-privileged eligible role. | Source: https://learn.microsoft.com/microsoftteams/using-admin-roles
- [contradicted, blocker] Governance guidance: At rollout / command: Grant-CsTeamsEventsPolicy can be used to check which events policy a user currently holds. | Found: Assigns Teams Events policy to a user, group of users, or the entire tenant. | Fix: Replace 'or Grant-CsTeamsEventsPolicy' with 'or Get-CsUserPolicyAssignment -Identity <user>'. Cite https://learn.microsoft.com/powershell/module/microsoftteams/get-csuserpolicyassignment?view=teams-ps, which returns effective assignments and explains that a missing effective policy entry means the tenant or system global default. Retain Grant only for assigning a policy, not inspecting one. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/grant-csteamseventspolicy?view=teams-ps
- [supported, minor] Governance controls: assignment overview / behaviour: The policy assignment overview linked by the meeting-policies page describes other policy assignment methods. | Found: Assign a policy directly to users, either individually or at scale through a batch assignment, or to a group that the users are members of. | Fix: Add https://learn.microsoft.com/microsoftteams/policy-assignment-overview to sources and link the existing mention of the policy assignment overview directly to it. | Source: https://learn.microsoft.com/microsoftteams/policy-assignment-overview
-->
