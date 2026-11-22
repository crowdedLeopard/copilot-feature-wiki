---
title: "Microsoft Teams Shifts: Assign open shifts fills open shifts automatically"
slug: "microsoft-teams-assign-open-shifts"
roadmapId: 562535
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "Managers using Teams Shifts get an optional Assign open shifts button that fills open shifts into a draft schedule. Nothing is switched on for you and Microsoft says no action is required; admins may update guidance."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Mac"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Shifts page says users must have a Teams licence to use Shifts. Microsoft has published no licence, price or meter specific to Assign open shifts at the time of writing (November 2026)."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["teams","shifts","frontline","admin-controls","app-management"]
sources:
  - title: "Microsoft 365 Roadmap 562535"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562535"
    kind: "roadmap"
  - title: "Auto-assign open shifts"
    url: "https://learn.microsoft.com/microsoft-365/frontline/shifts-auto-assign-open-shifts"
    kind: "learn"
  - title: "Manage the Shifts app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/expand-teams-across-your-org/shifts/manage-the-shifts-app-for-your-organization-in-teams"
    kind: "learn"
  - title: "Manage Shifts permissions for frontline managers"
    url: "https://learn.microsoft.com/microsoft-365/frontline/manage-shifts-permissions-frontline-managers"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
  - title: "shift resource type"
    url: "https://learn.microsoft.com/graph/api/resources/shift?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update shiftsRoleDefinition"
    url: "https://learn.microsoft.com/graph/api/shiftsroledefinition-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Use app permission policies to control user access to apps"
    url: "https://learn.microsoft.com/microsoftteams/teams-app-permission-policies"
    kind: "learn"
  - title: "MC1324280: (Updated) Assign open shifts in Microsoft Teams Shifts"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1324280"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Whether the Shifts app, which hosts Assign open shifts, is available in the organisation"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Shifts > Status"
      docs: "https://learn.microsoft.com/microsoftteams/expand-teams-across-your-org/shifts/manage-the-shifts-app-for-your-organization-in-teams"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <app-id> -IsBlocked <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Whole Shifts app, not just this feature. IsBlocked is described as the app state, but examples using $true and $false are both labelled unblocking; use the documented Status toggle for Blocked or Allowed."
  - governs: "Which Shifts settings frontline managers may change, including the Open shifts setting"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "PATCH /beta/teams/{team-id}/schedule/shiftsRoleDefinition/teamowner"
      docs: "https://learn.microsoft.com/microsoft-365/frontline/manage-shifts-permissions-frontline-managers"
    note: "Beta. Not stated to govern the Assign open shifts button. Graph's update reference prints PATCH /beta/team/{teamId}/schedule/shiftsRoleDefinitions/{roleId} with shiftsRolePermissions, so the pages disagree on route and body."
  - governs: "Dedicated switch to turn off Assign open shifts"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-22"
    note: "First briefing for roadmap item 562535: optional Assign open shifts button in Teams Shifts; Learn still says public preview while the roadmap says Launched."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 68 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: removed the unsupported spending-cap statement, changed the Update-M365TeamsApp call to -IsBlocked <Boolean> with a note on the documented examples, and noted the Graph route disagreement."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 69 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 69
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "ab179b95327d3186f656f8d6081b2f53"
---

## What's changing

Assign open shifts is a button in the Teams Shifts app that fills a schedule's open (unassigned) shifts automatically. The manager enters the shifts that need cover as open shifts, selects **Assign open shifts**, and picks a schedule group. Learn says the app then finds and applies a schedule that fits workers' approved time off and the scheduling rules, and the roadmap description adds employee availability and past scheduling patterns as inputs.

The result is a draft. Learn says the manager can review and edit it before publishing, and can use **Undo** to return to the state before assignment. Shifts that cannot be filled stay as open shifts for the manager to deal with. A manager can review the rules (maximum weekly and daily hours, maximum consecutive days worked and minimum rest periods) under **Auto assignment rules**; Learn says rule changes apply to all members of the team and take effect the next time open shifts are assigned.

Microsoft's notice MC1324280 tells administrators that the button appears for users with scheduling permissions, that using the feature is optional and that no action is required; it suggests admins may share documentation and update internal guidance for scheduling managers. The notice gives a general availability rollout in Worldwide beginning mid-June 2026 and, as updated on 22 September 2026, expected to complete by end of October 2026 (previously mid-September). It names Teams Shifts on web and desktop, while the roadmap record lists Desktop and Mac.

The roadmap record shows status Launched, release phase General Availability and a target of June CY2026. The Learn page for the feature, "Auto-assign open shifts", still carries a note that the feature is in public preview at the time of writing (November 2026). Microsoft's sources therefore disagree on whether it is generally available; this briefing reports both.

## Why it matters

This is a manager-side scheduling aid, not a tenant-wide change. Microsoft states it is optional and that no action is required, and the notice describes no new data types: it says the feature uses existing Shifts data to generate suggested assignments. For most tenants the decision is whether to tell frontline managers it exists and how Microsoft expects them to use it.

The point worth a view is accountability. The assignment is a draft until the manager publishes, so the manager remains the person who checks hours, rest and fairness before workers see it. Expect questions from frontline managers about why a worker was or was not assigned; Learn describes the inputs but not how they are weighed.

## Risk assessment

**Data exposure**
- The notice says the feature uses existing Shifts data (availability, time off, scheduling rules, historical patterns) and introduces no new data types. Time-off data is an input, so who can run the feature is who can trigger a schedule built from it; the control is Shifts scheduling permissions (see the controls table).

**Security & identity**
- Visibility of the button follows existing Shifts scheduling permissions, per the notice. Managers are users with the team owner or schedule owner role, so anyone given those roles can run it.

**Autonomy & actions**
- Assignment does not reach workers on its own: the result is a draft until the manager selects **Share with team** and publishes. Unfilled shifts remain open, so an incomplete draft is possible and the manager needs to check for it.
- A change to **Auto assignment rules** applies to all members of the team on the next run, so one manager's rule change affects every schedule group in that team.

**Change & support**
- Expect help-desk and manager questions about the new button and about results. The rollout window in MC1324280 ran to end of October 2026, so availability may differ between teams in a tenant during rollout.
- Learn and the roadmap disagree on preview or general availability; tell managers what status the Learn page shows.

## Cost and licensing

**Licence.** The Learn page "Manage the Shifts app for your organization in Microsoft Teams" says users must have a Teams licence to use Shifts. The Auto-assign open shifts page and notice MC1324280 name no other licence, and neither publishes a separate price or meter for Assign open shifts. At the time of writing (November 2026) Microsoft has not published a licence or charge specific to this feature.

**Meter and caps.** Microsoft documents no meter for this feature at the time of writing (November 2026).

**Indirect costs.** Admin time to brief managers, and manager time to review each draft before publishing.

## Scope

**Users.** Frontline managers who create or manage schedules in Teams Shifts and have scheduling permissions, according to the notice. Frontline managers in Shifts are users with the team owner or schedule owner role, per Learn. Workers see only the published schedule.

**Clouds and platforms.** The roadmap record lists Worldwide (Standard Multi-Tenant) only, and platforms Desktop and Mac. The notice names Teams Shifts on web and desktop.

**Rollout.** General Availability in Worldwide began in mid-June 2026 and, per the notice updated 22 September 2026, was expected to complete by end of October 2026. Microsoft's end date on the notice is 30 November 2026.

**Prerequisites.** Shifts must be available to the manager: Learn says it is enabled by default for all Teams users and can be turned off at the org level on the Manage apps page. Open shifts must be entered in the schedule first, and Learn says only schedule groups with open shifts appear in the dialog.

## Governance guidance

### Before rollout
- Confirm the Shifts app is allowed in the Teams admin center (Teams apps > Manage apps) for the managers who should use the feature.
- Decide whether to restrict the Open shifts setting for managers with the shiftsRoleDefinition Graph API (beta); read the note under the table first.

### At rollout
- Send frontline managers a short note on where the button is, that the result is a draft and that they publish with **Share with team**.
- Tell managers that changes under **Auto assignment rules** apply to every member of the team.

### After rollout
- Sample a few published schedules from teams that used the feature and compare them with local rest-time and hours rules.
- Re-read the Auto-assign open shifts page and the roadmap item for a change to the preview note or to the rollout dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Shifts app, which hosts Assign open shifts, is available in the organisation</strong><br><small>Tenant</small><br><small class="controls__note">Whole Shifts app, not just this feature. IsBlocked is described as the app state, but examples using $true and $false are both labelled unblocking; use the documented Status toggle for Blocked or Allowed.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Shifts › Status <a href="https://learn.microsoft.com/microsoftteams/expand-teams-across-your-org/shifts/manage-the-shifts-app-for-your-organization-in-teams" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;app-id&gt; -IsBlocked &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Shifts settings frontline managers may change, including the Open shifts setting</strong><br><small class="controls__note">Beta. Not stated to govern the Assign open shifts button. Graph's update reference prints PATCH /beta/team/{teamId}/schedule/shiftsRoleDefinitions/{roleId} with shiftsRolePermissions, so the pages disagree on route and body.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/teams/{team-id}/schedule/shiftsRoleDefinition/teamowner</code> <a href="https://learn.microsoft.com/microsoft-365/frontline/manage-shifts-permissions-frontline-managers" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Dedicated switch to turn off Assign open shifts</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting dedicated to Assign open shifts is documented. The Shifts app block applies to the whole Shifts app, so using it also removes scheduling, swap and time-off features. The Update-M365TeamsApp reference describes IsBlocked as the app state, but labels examples using both $true and $false as unblocking. Use the documented Status toggle for a Blocked or Allowed choice until Microsoft clarifies the examples. For organisations still using app permission policies, Learn says specific users can be allowed or blocked by creating a custom app permission policy and assigning it to them; Shifts must be allowed at the org level. Microsoft says permission policies no longer apply after moving to app-centric management.

The Graph row is the closest control on the input side. Learn lists Open shifts (turn on or turn off the ability to create and request open shifts) among the capabilities whose manager permission is controlled with the shiftsRoleDefinition Graph API. The Learn page does not say this governs the Assign open shifts button itself, and the API is documented under /beta/. Use scheduleowner in place of teamowner for the schedule owner role; the frontline article's body lists CanModifyShiftRequestsCapabilities in allowedResourceActions, which covers Open shifts, Swap shifts and Offer shift. Microsoft's Graph update reference instead prints PATCH /beta/team/{teamId}/schedule/shiftsRoleDefinitions/{roleId}, with allowedResourceActions nested in shiftsRolePermissions. The two Microsoft pages disagree on the route and body wrapper.

## Open questions

- Is Assign open shifts generally available? The roadmap says Launched and General Availability while the Learn page still says public preview. Watch the Auto-assign open shifts page and Message centre.
- Will Microsoft publish a tenant-level switch or Shifts permission for Assign open shifts itself? Watch the Shifts permissions page for frontline managers.
- How are availability, past scheduling patterns and the scheduling rules weighed when shifts are assigned? Learn lists the inputs without describing the weighting.
- Does the Teams audit log record a manager running Assign open shifts? Check the Shifts activities list on the Teams audit log events page.

<!-- rationale
risk: Low. Assignments are built from existing Shifts data and land as a draft the manager can review, edit or undo before publishing, and Microsoft's notice says using the feature is optional.
cost: Low. The only cost the sources show is admin and manager time; Learn says Shifts needs a Teams licence, and no separate licence, price or meter for Assign open shifts is published.
impact: Medium. Frontline managers with scheduling permissions see a new button and build schedules differently; their teams see the published result. Admins and other users are not affected.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary / default: Nothing is switched on for the reader. | Found: A new “Assign open shifts” button appears for users with scheduling permissions. ... Using the feature is optional. | Fix: Replace 'Nothing is switched on for you' with 'Managers choose whether to use it': the button appears without an administrator enabling it, although assignment is optional.
- [supported, minor] controls[1].api; rendered controls table; Governance guidance: Before rollout / command: The frontline-manager article documents PATCH /beta/teams/{team-id}/schedule/shiftsRoleDefinition/teamowner to update manager permissions. | Found: PATCH https://graph.microsoft.com/beta/teams/fb963991-69a8-4d2c-8465-cd8e374891c4/schedule/shiftsRoleDefinition/teamowner ... "allowedResourceActions": [ "CanModifyShiftRequestsCapabilities" | Fix: Append to controls[1].note: 'The frontline article sets allowedResourceActions; CanModifyShiftRequestsCapabilities controls permission to change Open shifts, Swap shifts and Offer shift settings.' Keep the existing warning about the conflicting Graph reference. | Source: https://learn.microsoft.com/microsoft-365/frontline/manage-shifts-permissions-frontline-managers
- [supported, minor] What's changing; Scope: Rollout; Risk assessment: Change & support / record: The notice gives Worldwide general availability rollout beginning mid-June 2026 and expected completion by end of October 2026. | Found: General Availability (Worldwide): Rollout begins in mid-June 2026 and is expected to complete by end of October 2026 (previously mid-September). | Fix: In Scope replace 'General Availability in Worldwide began in mid-June 2026' with 'Microsoft's notice gives General Availability rollout in Worldwide beginning mid-June 2026'. In Risk assessment replace 'The rollout window in MC1324280 ran to end of October 2026' with 'MC1324280 expected rollout to complete by end of October 2026'.
-->
