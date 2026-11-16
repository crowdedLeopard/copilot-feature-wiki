---
title: "Microsoft Teams: separate attendance and engagement report policy for Teams events"
slug: "microsoft-teams-teams-events-attendance-and-engagement-report-policy"
roadmapId: 567466
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Microsoft plans a CsTeamsEventsPolicy setting that controls organisers' attendance and engagement reports for Teams events apart from CsTeamsMeetingPolicy. Rollout is targeted from mid-December 2026."
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
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, Message Center post MC1455014 nor Learn's attendance report page states a licence or meter for this setting."
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
  - title: "Manage meeting and events policies in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/meeting-policies-overview"
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
    note: "Learn marks the Teams events policy as still in preview. Enabled is On, organizers can turn it off; Disabled is Off, organizers can turn it on."
  - governs: "Whether meeting organisers can view and download attendance and engagement reports (current control)"
    scope: "user"
    ui:
      surface: "Teams admin center"
      path: "Meetings > Meeting policies > Meeting scheduling > Attendance and engagement report"
      docs: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report"
    api:
      kind: "powershell"
      call: "Set-CsTeamsMeetingPolicy -Identity <policy name> -AllowEngagementReport Disabled | Enabled | ForceEnabled"
      docs: "https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report"
    note: "Learn says it also covers events today; per Microsoft's notice MC1455014 it will not control events once the new events setting applies."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, reflecting MC1455014 as updated on 3 November 2026 (rollout from mid-December 2026) and the events policy cmdlet reference."
version: 1
---

## What's changing

Microsoft is adding a setting to the Teams events policy (CsTeamsEventsPolicy) that decides whether event organisers can view and download attendance and engagement reports. The setting is separate from the attendance and engagement report setting in the Teams meeting policy (CsTeamsMeetingPolicy), so an administrator can allow reports for events and restrict them for meetings, or the reverse.

Microsoft's notice MC1455014 lists four values for the new setting. **On** lets organisers view and download reports for all events and stops them disabling reporting. **Off** stops organisers viewing or downloading reports for any events. **On, organizers can turn it off** is the default and lets organisers disable reporting in event options. **Off, organizers can turn it on** disables reporting by default and lets organisers enable it for individual events. The notice tells administrators not to assume Teams events will keep inheriting attendance and engagement report settings from CsTeamsMeetingPolicy.

The Learn attendance report page, at the time of writing (November 2026), still describes the meeting policy setting as covering "all meetings and events they create". The Set-CsTeamsEventsPolicy reference already lists an `-AllowEngagementReport` parameter with matching values, and marks the Teams events policy as still in preview. The roadmap item (567466) is In development, so treat that parameter as documented ahead of the rollout rather than as shipped behaviour.

The roadmap target is December CY2026 for General Availability in Worldwide (Standard Multi-Tenant) and GCC, on Desktop. MC1455014, updated 3 November 2026, moved rollout to begin in mid-December 2026 (previously early November) and to complete by early January 2027 (previously early December 2026). The notice sets no act-by date.

## Why it matters

Attendance and engagement reports show who attended and when, and how people reacted and interacted. Learn describes one meeting policy setting that covers both meetings and events; with this change the two can diverge, and the events setting needs its own decision. If nobody acts, event organisers get the new setting's default (On, organizers can turn it off).

The point to verify is carry-over. Microsoft has not said whether a tenant that has set Attendance and engagement report to Off in a meeting policy will see that restriction applied to events. Plan on checking the events behaviour after rollout rather than assuming it, as the notice advises, and update any internal guidance that points event organisers to meeting policies.

## Risk assessment

**Data exposure**

- The reports list attendees with join and leave times and counts of unmuting, camera use, hand raises, reactions and Q&A activity. Under the default, event organisers can view and download them for all their events; the events policy setting is the control that limits this.
- Microsoft has not said whether a restriction already set in a meeting policy is copied to the events policy, so an organisation that relies on meeting policy Off to withhold event reports could find organisers able to download them.

**Security & identity**

- The setting is per policy, so a user's events policy determines what that user can do as an organiser. A user can be assigned only one events policy at a time, so a custom policy replaces the global one for that user rather than adding to it.
- Administrators cannot view reports for events they did not organise, so the setting cannot be bypassed by an administrator downloading the report.

**Autonomy & actions**

- No change: the setting does not introduce any automated action. It governs whether a person can see a report.

**Change & support**

- Help-desk guidance that sends event organisers to meeting policies for reporting becomes wrong once the events setting applies. Expect questions from organisers whose events show no report after an administrator sets Off.
- With the **On, organizers can turn it off** default, a per-event organiser choice can differ between events; with **Off**, no organiser can override it.

## Cost and licensing

No licence, price or meter is stated for this setting. The roadmap item and MC1455014 name none, and Learn's attendance report page describes the report and its policy options without listing a licence for them. The page's Teams Premium note says that to manage Teams Premium features the tenant needs at least one active Teams Premium licence; it does not say the attendance report is one of those features.

The cost evident today is administrator time to choose a value, assign a policy and update guidance. Licensing is not yet published for the events policy setting itself.

## Scope

The setting applies to Teams events organisers through the events policy assigned to them. Per the roadmap record, it is targeted for General Availability in Worldwide (Standard Multi-Tenant) and GCC on Desktop; no other clouds or platforms are listed on the item, which is a record fact and not a statement that anything is unavailable elsewhere.

Microsoft's notice says rollout begins in mid-December 2026 and completes by early January 2027. Learn names no administrator role needed to edit the events policy and gives no Teams admin center path for the new setting at the time of writing (November 2026).

## Governance guidance

### Before rollout

- Record which meeting policies set Attendance and engagement report to Off or On, and which users hold them, so you can compare event behaviour afterwards.
- Decide which of the four values suits event organisers, and whether reports for events should differ from reports for meetings.
- Tell help-desk staff and event organisers that event reporting will have its own policy, and that the meeting policy setting may no longer govern events.

### At rollout

- Set the attendance and engagement report value in each custom events policy with Set-CsTeamsEventsPolicy (see the controls table), rather than relying on the default.
- Check which events policy each event-organising user holds, because a user can be assigned only one events policy at a time.

### After rollout

- Test with an organiser on a restricted policy and confirm they can or cannot view and download a report for an event, as the setting should dictate.
- Update internal documentation that describes attendance reporting for events through meeting policies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether event organisers can view and download attendance and engagement reports</strong><br><small>User</small><br><small class="controls__note">Learn marks the Teams events policy as still in preview. Enabled is On, organizers can turn it off; Disabled is Off, organizers can turn it on.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsEventsPolicy -Identity &lt;policy name&gt; -AllowEngagementReport Enabled | Disabled | ForceEnabled | ForceDisabled</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamseventspolicy?view=teams-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether meeting organisers can view and download attendance and engagement reports (current control)</strong><br><small>User</small><br><small class="controls__note">Learn says it also covers events today; per Microsoft's notice MC1455014 it will not control events once the new events setting applies.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Meetings › Meeting policies › Meeting scheduling › Attendance and engagement report <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsMeetingPolicy -Identity &lt;policy name&gt; -AllowEngagementReport Disabled | Enabled | ForceEnabled</code> <a href="https://learn.microsoft.com/microsoftteams/teams-analytics-and-reports/meeting-attendance-report" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The events setting is documented today only as a PowerShell parameter; no Teams admin center path for it is documented at the time of writing. The meeting policy row is the current alternative: its Learn page says it covers "meetings and events", and Microsoft's notice says events will stop inheriting from it, so do not treat it as the long-term control for events.

The Learn reference marks the Teams events policy as still in preview. Both controls apply per policy and take effect for the users assigned that policy.

## Open questions

- Will an existing meeting policy value of Off or ForceEnabled be copied to the events policy at rollout, or will every tenant start at On, organizers can turn it off? Watch MC1455014 and the Learn attendance report page.
- Where will the setting appear in the Teams admin center for events policies? Learn documents no path for it at the time of writing (November 2026).
- Will the attendee-inclusion and attendee-information settings also separate for events? The Set-CsTeamsEventsPolicy syntax lists -InfoShownInReportMode alongside -AllowEngagementReport but no attendee-inclusion parameter.
- Is a licence required for event reports, and is the setting available in GCC at the same time as Worldwide? Neither is stated beyond the roadmap's cloud list.

<!-- rationale
risk: Medium. Event organisers get reports under the new setting's default (On, organizers can turn it off), and Microsoft has not said whether a meeting policy set to Off carries over to events.
cost: Low. The only cost evident is admin time to set and communicate the policy; the roadmap and Learn's attendance report page name no licence or meter for it at the time of writing (November 2026).
impact: Medium. Teams events organisers notice if reports appear or disappear; organisers of ordinary meetings are not affected by the new setting.
-->
