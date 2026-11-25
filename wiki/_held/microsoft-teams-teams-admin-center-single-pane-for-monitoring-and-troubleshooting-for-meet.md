---
title: "Microsoft Teams: organisation-wide meeting and call troubleshooting in the Teams admin center"
slug: "microsoft-teams-teams-admin-center-single-pane-for-monitoring-and-troubleshooting-for-meet"
roadmapId: 568782
topic: "modern-work"
products: ["Microsoft Teams"]
summary: "The Teams admin center gains one place to monitor and troubleshoot in-progress and completed meetings and calls across the tenant. Microsoft says no action is required; plan for who sees participant telemetry."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn says data is available for all Teams users regardless of licence type, while depth and retention vary by licence (Teams Premium, Teams Rooms Pro). Copilot analysis needs at least one Copilot-licensed user. No price is published."
audiences: ["m365-admin","service-owner","security"]
tags: ["teams","monitoring","telemetry","debugging","admin-center","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 568782"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568782"
    kind: "roadmap"
  - title: "MC1462463: Teams Admin Center - Single pane for monitoring"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1462463"
    kind: "message-center"
  - title: "Monitor and troubleshoot Teams meetings and calls from the Teams admin center"
    url: "https://learn.microsoft.com/microsoftteams/monitor-troubleshoot-teams-meetings-calls"
    kind: "learn"
  - title: "Use Microsoft Teams administrator roles to manage Teams"
    url: "https://learn.microsoft.com/microsoftteams/using-admin-roles"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
  - title: "List callRecords"
    url: "https://learn.microsoft.com/graph/api/callrecords-cloudcommunications-list-callrecords?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["microsoft-teams-admin-center-intelligent-insights-for-meeting-quality"]
controls:
  - governs: "Which admins hold the Teams roles that can open meeting and call details"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Roles & admins > role > Add assignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    api:
      kind: "powershell"
      call: "New-MgRoleManagementDirectoryRoleAssignment -DirectoryScopeId '/' -PrincipalId <user-or-group-id> -RoleDefinitionId <role-definition-id>"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Role names are on the Teams roles page. Teams Reader cannot access Meetings & Calls details of users. Learn does not say which roles reach the new organisation-wide lists."
  - governs: "Where admins open meeting and call troubleshooting data, and the call records feed"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Manage users > user > Meetings & calls"
      docs: "https://learn.microsoft.com/microsoftteams/monitor-troubleshoot-teams-meetings-calls"
    api:
      kind: "graph"
      call: "GET /v1.0/communications/callRecords"
      docs: "https://learn.microsoft.com/graph/api/callrecords-cloudcommunications-list-callrecords?view=graph-rest-1.0"
    note: "UI path is the per-user route Learn documents, not the notice's Meetings & Calls > Meetings route. Graph call records are an existing API (CallRecords.Read.All); not confirmed as the pane's data source."
  - governs: "Tenant-wide switch to turn the organisation-wide Meetings & Calls pages on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such switch at the time of writing (November 2026); the notice says the experience is available automatically."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 568782, covering the organisation-wide meeting and call troubleshooting pane and its role and licence conditions."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 77 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 80 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 76
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "00411d72e8e26a7a8a2eeb45c0d4d5a2"
---

## What's changing

The Teams admin center is getting an organisation-wide view for monitoring and troubleshooting meetings and calls. The roadmap item describes it as a single pane where administrators monitor meeting and call health across the organisation, uncover recurring patterns, and troubleshoot active and completed meetings and calls.

Microsoft's notice MC1462463 says administrators will find a new experience under Meetings & Calls: "Teams admin center > Meetings & Calls > Meetings or Calls". It lists in-progress and completed meetings, completed calls, issue details, detailed diagnostics, filters (time range of 7, 15 or 30 days or a custom range, meetings with issues, organiser, meeting type), search by meeting identifier, export for offline analysis, and Microsoft 365 Copilot for Admins to investigate a meeting or analyse trends. The notice says completed meetings cover the previous 30 days.

The Learn article for the experience describes three connected views (user, meeting and participant), and its steps start from a user: Manage users, select the user, then the Meetings & calls tab. It does not give the Meetings & Calls > Meetings route from the notice, so that route rests on the notice. Learn says meeting and call quality is no longer labelled Good or Poor; it now shows whether the user had quality or reliability issues, judged by intelligent media classifiers once the meeting ends.

The roadmap record shows status Rolling out, release phase General Availability, target September CY2026, for Worldwide (Standard Multi-Tenant) and GCC, on the web. The notice gives a rollout window of late September 2026 to mid October 2026 for both clouds and says the experience is available automatically after rollout.

## Why it matters

This is a visibility change for the people who run Teams support, not a change for end users. Microsoft's notice says no action is required and the experience appears automatically, so help desk and Teams administrators will find a tenant-wide list of meetings and calls; the Learn steps for the experience start from one user's profile.

The wiki's view: the new pane makes participant-level telemetry easier to reach, including device details and a location based on public IP, so decide who should hold the roles that can open it and brief your support team on what the data does and does not prove. Learn warns that a highlighted value or an in-progress issue does not necessarily mean the user experienced poor quality.

## Risk assessment

**Data exposure**
- Participant details show username and licence type, device used, location based on public IP, join and leave times and duration. Treat the roles that can open meeting details as roles that handle personal data, and confirm how far each role's view extends across the tenant.
- For federated and external participants, Learn says end-user identifiable information is obfuscated; for peer-to-peer calls it is not obfuscated, because the shared call session requires participant information.
- Export downloads completed meeting data for the 30-day period as a CSV file per Learn. Microsoft Learn documents no control over who may export; the exported file leaves the admin centre, so handle it as personal data.

**Security & identity**
- Access follows Microsoft Entra role assignment. Learn says Teams Reader cannot access Meetings & Calls details of users, and partner admins using GDAP must hold the Teams Communications Support Specialist or Teams Communications Support Engineer role in the customer tenant.
- Administrative Units scope which users' meetings an admin can reach. Microsoft has not said how that scoping applies to the new organisation-wide lists; confirm it before relying on it to limit visibility.

**Autonomy & actions**
- No change: the sources describe a read-only monitoring and troubleshooting view. The notice describes Copilot analysis of meetings and trends; Learn says the Troubleshoot action opens Copilot in a chat window with a prefilled prompt that the admin runs.

**Change & support**
- Support staff used to the earlier Recent meetings and Past meetings lists will see In-progress meetings and Completed meetings instead, and the Good or Poor labels are gone. Brief them before they open tickets about missing labels.
- The notice and Learn differ on in-progress data and licences (see Scope), so test with a known meeting before telling staff what they can see.
- Completed-meeting telemetry takes 30 minutes to 2 hours to process after a meeting ends, per Learn, so a recent meeting may not be listed yet.

## Cost and licensing

Learn's prerequisites for the experience list an admin role in Microsoft Entra ID, Administrative Unit assignment where used, a GDAP role for partners, and that the users being investigated use Microsoft Teams; the list names no licence for the administrator. Learn adds that meeting troubleshooting data (real-time granular and aggregate) is available for all Teams users regardless of licence type, while the depth and retention period of telemetry varies by licence.

The documented difference: real-time telemetry is kept for seven days after the meeting ends for Teams Premium and Teams Rooms Pro accounts, and for the duration of the meeting for other users. Aggregated telemetry is available for 30 days after the meeting ends for all users. Copilot analysis is described by Learn as available only if at least one user in the organisation has a Copilot licence. No meter, price or Copilot Credits rate is published for the Copilot analysis in these pages at the time of writing (November 2026).

Indirect cost is admin and support time to learn the new views and to review who holds the roles. Sources: MC1462463 and the Learn article "Monitor and troubleshoot Teams meetings and calls from the Teams admin center".

## Scope

**Who and where.** The record lists Worldwide (Standard Multi-Tenant) and GCC, on the web, with the notice giving the same late September to mid October 2026 rollout window for both. The Learn article says the experience is available in Worldwide (Public) and GCC and applies to conferences (including events) and calls across Windows, Mac, Android, iOS and Web. For events, telemetry is available for presenters and organisers if they participate, and not for other attendees.

**Roles.** An admin role assigned in Microsoft Entra ID is required; see the controls table for the roles Learn names. Teams Reader is stated not to access Meetings & Calls details of users.

**Licence differences to reconcile.** The notice says in-progress meetings are viewable when at least one participant has a Teams Premium or Teams Rooms Pro licence. The Learn article says in-progress meeting data includes all users regardless of licence type while the meeting is live. Both are Microsoft statements, and Microsoft has not said how they fit together.

## Governance guidance

### Before rollout
- Identify which people hold Teams Administrator, Teams Communications Administrator, Teams Communications Support Engineer and Teams Communications Support Specialist roles, and remove access that support work does not need (role assignment row in the controls table).
- Tell the help desk that the Good or Poor labels have been replaced by issue-based results, and that Meetings & Calls > Meetings or Calls is where the notice says the new lists appear.
- Agree with your privacy or HR contact how exported meeting data is stored and for how long, because Microsoft Learn documents no setting that limits who can export.

### At rollout
- Open Meetings & Calls in the Teams admin center, check whether the new Meetings and Calls pages are visible to your role, and compare with the per-user route (Manage users > user > Meetings & calls) that Learn documents.
- Run a test meeting with a Teams Premium or Teams Rooms Pro participant and one without, and note what each licence shows for in-progress and completed data.
- Confirm how Administrative Unit scoping behaves for delegated admins before you rely on it.

### After rollout
- Review who has opened or exported meeting data once Microsoft documents audit events for it; Microsoft Learn documents none at the time of writing (November 2026).
- Check the Learn article and Message center for the Meetings & Calls > Meetings route, role scope and Copilot licensing, and update your runbooks when Microsoft documents them.
- Consider Microsoft Graph call records if you need a programmatic feed; it is a separate existing API (see the controls table).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which admins hold the Teams roles that can open meeting and call details</strong><br><small>Tenant</small><br><small class="controls__note">Role names are on the Teams roles page. Teams Reader cannot access Meetings &amp; Calls details of users. Learn does not say which roles reach the new organisation-wide lists.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Roles &amp; admins › role › Add assignments <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-MgRoleManagementDirectoryRoleAssignment -DirectoryScopeId '/' -PrincipalId &lt;user-or-group-id&gt; -RoleDefinitionId &lt;role-definition-id&gt;</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where admins open meeting and call troubleshooting data, and the call records feed</strong><br><small>Tenant</small><br><small class="controls__note">UI path is the per-user route Learn documents, not the notice's Meetings &amp; Calls &gt; Meetings route. Graph call records are an existing API (CallRecords.Read.All); not confirmed as the pane's data source.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Manage users › user › Meetings &amp; calls <a href="https://learn.microsoft.com/microsoftteams/monitor-troubleshoot-teams-meetings-calls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/communications/callRecords</code> <a href="https://learn.microsoft.com/graph/api/callrecords-cloudcommunications-list-callrecords?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn the organisation-wide Meetings &amp; Calls pages on or off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such switch at the time of writing (November 2026); the notice says the experience is available automatically.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Access is controlled by role assignment, not by a feature switch. Microsoft Learn documents no tenant-wide setting to turn the organisation-wide Meetings & Calls pages off at the time of writing (November 2026), so the roles in the table are the practical lever.

The per-user route and the Graph call records API are existing surfaces. Microsoft has not said that the new organisation-wide pages use call records or the same permissions; treat Graph as an alternative feed, not as a control over the new pane. The call records API list page names the application permission CallRecords.Read.All, so grant it sparingly. Teams Communications Support Specialist is described on the roles page as able to view information only for the specific user being searched for; whether that limit applies to the new lists is not documented.

## Open questions

- Which roles can open the organisation-wide Meetings and Calls pages, and does the Teams Communications Support Specialist limit to a specific searched user apply? Watch the Learn article and the Teams admin roles page.
- Which licence conditions apply to in-progress meetings: the notice says a Teams Premium or Teams Rooms Pro participant is needed, while Learn says in-progress data includes all users regardless of licence type?
- Does Microsoft 365 Copilot for Admins in this pane consume Copilot Credits or need a licence beyond at least one Copilot-licensed user in the organisation? No rate is published.
- Is there a switch, policy or audit event for who views or exports meeting and call data? Watch Message center and the Teams admin center documentation.

<!-- rationale
risk: Low. The feature adds a read-only view of meeting and call telemetry for administrators; it shows participant details such as location based on public IP, and Microsoft Learn documents no tenant-wide switch for it.
cost: Low. The only cost the sources show is admin time. Microsoft Learn says troubleshooting data is available regardless of licence type but that telemetry depth varies by licence; no price is published.
impact: Low. Teams administrators and support staff see a new Meetings and Calls experience; end users see no change described in the sources.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity / absence: Microsoft has not said how Administrative Unit scoping applies to the new organisation-wide lists. | Found: If your organization uses Administrative Units (AUs), your AU assignment determines which users' meetings you can access. | Fix: Remove 'Microsoft has not said how that scoping applies to the new organisation-wide lists; confirm it before relying on it to limit visibility.' Keep the preceding sentence about Administrative Units scoping access: Learn states that prerequisite for the troubleshooting experience without a list-specific exception. | Source: https://learn.microsoft.com/microsoftteams/monitor-troubleshoot-teams-meetings-calls
- [unsupported, major] Risk assessment: Autonomy & actions; rationale: risk / behaviour: The sources describe a read-only experience with no change to autonomy or actions. | Found: Searched: Teams admin center meetings troubleshooting read-only callRecords. Opened troubleshooting and Teams roles articles; read MC1462463. They describe monitoring, diagnostics, exports and Copilot analysis, but do not guarantee read-only behaviour. | Fix: Replace 'No change: the sources describe a read-only monitoring and troubleshooting view.' with 'The sources describe monitoring, diagnostics and Copilot analysis.' In the risk rationale replace 'a read-only view of meeting and call telemetry' with 'a view of meeting and call telemetry'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / licensing: Other users retain real-time telemetry for the duration of the meeting. | Found: For all other users, the real-time telemetry is retained for the duration of the meeting. | Fix: Keep the cited current-experience statement, but add: 'The older real-time telemetry article instead says users without Teams Premium retain real-time telemetry for 24 hours.' Cite https://learn.microsoft.com/microsoftteams/use-real-time-telemetry-to-troubleshoot-poor-meeting-quality#where-to-find-per-user-real-time-troubleshooting-telemetry for that differing statement. | Source: https://learn.microsoft.com/microsoftteams/monitor-troubleshoot-teams-meetings-calls
- [supported, minor] controls[0].note; Governance controls; Open questions / applicability: The row caveats the reach of the documented Teams admin roles for the organisation-wide lists. | Found: Teams Administrator ... Everything in the Microsoft Teams admin center and associated PowerShell controls | Fix: Replace 'Learn does not say which roles reach the new organisation-wide lists.' in controls[0].note and the rendered row with 'The roles page gives Teams Administrator access to everything in the Teams admin center; Teams Communications Support Specialist is limited to information for the specific user being searched for.' | Source: https://learn.microsoft.com/microsoftteams/using-admin-roles
- [contradicted, minor] Governance guidance: At rollout; Governance controls table / consistency: The checklist instruction to check Administrative Unit scoping has a corresponding controls-table row. | Found: Confirm how Administrative Unit scoping behaves for delegated admins before you rely on it. ... Controls cover tenant role assignment, the troubleshooting route/call-record feed, and the tenant-wide switch. | Fix: Remove the At rollout checklist item 'Confirm how Administrative Unit scoping behaves for delegated admins before you rely on it.' No control row covers that scoping check.
- [contradicted, minor] Risk assessment: Data exposure; Governance guidance: Before rollout; Governance controls table / consistency: The documented absence of an export-specific restriction is represented in the controls table. | Found: Microsoft Learn documents no control over who may export ... Microsoft Learn documents no setting that limits who can export. ... The table has no export-restriction row. | Fix: Remove 'Microsoft Learn documents no control over who may export;' from Risk assessment and remove 'because Microsoft Learn documents no setting that limits who can export' from the Before rollout checklist item. Keep the advice on handling exported personal data.
-->
