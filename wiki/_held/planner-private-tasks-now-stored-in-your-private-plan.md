---
title: "Planner: private tasks stored in your private plan instead of Microsoft To Do"
slug: "planner-private-tasks-now-stored-in-your-private-plan"
roadmapId: 569426
topic: "modern-work"
products: ["Planner"]
summary: "From December 2026 Microsoft plans to store new private tasks in each user's private Planner plan, not the Microsoft To Do store. It is automatic; check retention, discovery and reporting that rely on To Do storage."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn says users with a Microsoft 365 licence are entitled to the Planner app and lists the plans that include Planner. A licence or meter specific to this change is not yet published."
audiences: ["m365-admin","compliance","service-owner","change-adoption"]
tags: ["planner","ediscovery","retention","exchange","data-lifecycle-management","user-experience","microsoft-to-do"]
sources:
  - title: "Planner: Private tasks now stored in your private plan"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569426"
    kind: "roadmap"
  - title: "MC1488845: (Updated) Private tasks now stored in your private plan in Planner"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1488845"
    kind: "message-center"
  - title: "Manage the Planner app for your organization in Microsoft Teams"
    url: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    kind: "learn"
  - title: "Security, privacy, and compliance in Microsoft Planner"
    url: "https://learn.microsoft.com/planner/planner-security-privacy-compliance"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/office365/planner/planner-for-admins"
    kind: "learn"
  - title: "Turn off Planner for your organization"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
  - title: "Update-M365TeamsApp"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether new private tasks are stored in the private Planner plan or in Microsoft To Do"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft's notice says the feature is enabled automatically and no administrator action is required for deployment."
  - governs: "Whether the Planner app is available in Microsoft Teams"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Teams apps > Manage apps > Planner > Block"
      docs: "https://learn.microsoft.com/microsoftteams/manage-planner-app"
    api:
      kind: "powershell"
      call: "Update-M365TeamsApp -Id <Teams app ID> -IsBlocked $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp"
    note: "Existing control for the Planner app in Teams only. Not a way to keep private tasks in Microsoft To Do."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-04T00:02:09"
changes:
  - date: "2026-11-19"
    note: "New briefing: private tasks move to the private Planner plan from December 2026; enabled automatically, no admin switch documented."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 52 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 52
  confirmed: 50
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "cd8672cffed6692dd16c73db284a3da8"
---

## What's changing

Microsoft plans to store private tasks created in Planner and Planner-powered experiences in the user's own private Planner plan, instead of the Microsoft To Do task store. The roadmap item describes this as a single place for tasks visible only to that user. Microsoft's notice MC1488845 adds that this enables Planner capabilities such as labels and task history.

Microsoft's notice says new private tasks will be stored in a private Planner plan, that users keep seeing existing private tasks in Planner My Tasks, and that new private tasks created in Planner will no longer appear in Microsoft To Do. It also says private tasks remain visible only to the task owner, cannot be shared or assigned to others, and that existing tasks continue to work and appear alongside them. The notice says the feature is enabled automatically and that no administrator action is required for deployment.

For comparison, Microsoft Learn currently describes private tasks and their attachments as stored in Microsoft Exchange, and tasks in basic plans as stored in Azure and managed by the Planner service. Learn does not yet describe the private plan storage, so what the change does to storage, discovery and retention is known only from the roadmap item and the notice.

The roadmap item is In development with a target of December CY2026, for General Availability, on the Web platform, in Worldwide (Standard Multi-Tenant). MC1488845, updated 3 November 2026, gives the rollout as beginning in early December 2026 (previously November), with completion expected in late December 2026 (previously November). It sets no act-by date.

## Why it matters

The change arrives without anyone switching it on, so the question for a service owner is what depends on private tasks being in Microsoft To Do. Microsoft's notice answers yes to whether it changes how existing customer data is stored or accessed, and says organisations should validate retention, discovery, reporting and governance processes that depend on To Do storage.

Expect two practical effects: users who look for new private tasks in the To Do app will not find the ones created in Planner, and compliance or reporting routines built on the To Do store will need checking. Support teams are better placed if they hear about it before December.

## Risk assessment

**Data exposure**
- Microsoft's notice says new private tasks are stored in the user's private Planner plan and remain visible only to the task owner. Learn describes private tasks today as stored in Exchange and basic-plan tasks as stored in Azure, so the storage location of new private tasks moves under the Planner service. Where exactly the private plan is stored is not yet documented.
- Microsoft Learn's Planner security page says Purview eDiscovery and history are supported for basic plans contained by groups, and that premium plans and non-group plans aren't currently supported. It does not say how a private plan is treated, which is the point to confirm for eDiscovery of new private tasks.

**Security & identity**
- No change documented to who can see a private task: the notice says tasks cannot be shared or assigned to others. The notice says existing compliance and security protections continue to apply.

**Autonomy & actions**
- No change: the notice describes a storage and experience update and says it is not a generative AI capability.

**Change & support**
- Users will see new private tasks in Planner but, per the notice, not in Microsoft To Do. Expect help desk questions and out-of-date internal guides that say Planner private tasks show in To Do.
- Learn lists Power Automate support for private tasks through the To Do route and for basic-plan tasks through the Planner connector. Which route applies to new private tasks is not documented, so test any flow that reads private tasks.
- Learn's security page says retention policy isn't currently supported for Planner. Microsoft's notice asks organisations to validate retention processes that depend on To Do storage.

## Cost and licensing

Microsoft Learn says users with a Microsoft 365 licence are entitled to the Planner app, and the Planner for admins page lists the subscription plans that include Planner (for example Office 365 E3 and Microsoft 365 Business Basic). Those pages do not name a separate licence for private tasks.

No meter, price or licence specific to this change is yet published. Microsoft's notice says no administrator action is required for deployment, so the cost the sources show is time: informing support teams, updating internal documentation and checking compliance and reporting processes.

## Scope

Who: users who create and manage private tasks in Planner and Planner-powered experiences, per Microsoft's notice. The notice names Microsoft Planner, Planner on the web, Planner-powered experiences and Microsoft To Do as the affected services.

Where: the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform. Other clouds are not listed on the roadmap item; that is a record fact, not a statement that the change is unavailable there.

Rollout: early to late December 2026 according to MC1488845, enabled automatically. Microsoft Learn's Teams admin page says the Planner app in Teams shows Private Tasks under My Tasks, but does not yet describe how the change appears in Teams.

## Governance guidance

### Before rollout
- Ask the owners of retention, eDiscovery and reporting processes to list anything that reads private tasks from the Microsoft To Do store, as Microsoft's notice asks organisations to validate these.
- Test any Power Automate flow that reads or writes private tasks, because Learn lists Power Automate support for private tasks through To Do and for basic-plan tasks through the Planner connector.
- Brief the help desk that new private tasks created in Planner will no longer appear in Microsoft To Do.
- Update internal guides that say Planner private tasks appear in To Do.

### At rollout
- Watch Message center for further changes to MC1488845, which has already moved from November to December 2026.
- Tell users that existing private tasks stay visible in Planner My Tasks and new ones are kept in the private Planner plan.

### After rollout
- Check whether a test eDiscovery search finds a new private task, because Learn's Planner security page does not say how private plans are treated.
- Decide whether any user group should not have the Planner app in Teams; the controls table shows what that setting covers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether new private tasks are stored in the private Planner plan or in Microsoft To Do</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft's notice says the feature is enabled automatically and no administrator action is required for deployment.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Planner app is available in Microsoft Teams</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for the Planner app in Teams only. Not a way to keep private tasks in Microsoft To Do.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Teams apps › Manage apps › Planner › Block <a href="https://learn.microsoft.com/microsoftteams/manage-planner-app" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-M365TeamsApp -Id &lt;Teams app ID&gt; -IsBlocked $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No administrator switch for this change is documented at the time of writing (November 2026), and Microsoft's notice says it is enabled automatically. The first row of the table records that gap.

The Teams admin centre row is an existing control for the Planner app in Teams, not a control over where private tasks are stored. Learn says that blocking the app in the Teams admin centre turns Planner off for the organisation in Teams; the roadmap item lists the Web platform. It is not a way to keep private tasks in To Do.

## Open questions

- Are eDiscovery, content search and Purview audit applied to new private tasks in the private plan as they are to private tasks in Exchange today? Watch the Planner security page and MC1488845.
- Is there any setting to keep new private tasks in Microsoft To Do, or is the change unconditional? Watch Message center and the Planner for admins page.
- Which Power Automate connector and Microsoft Graph APIs reach tasks in a private plan? Watch the Planner Learn pages.
- How will the Planner app in Teams show the change, given that the roadmap item lists only the Web platform?

<!-- rationale
risk: Medium. Where new private tasks are stored changes, and Microsoft's notice says retention, discovery and governance processes tied to Microsoft To Do storage should be validated; no setting to opt out is documented.
cost: Low. The only cost the sources show is admin and support time; Microsoft has not published a licence or meter specific to this change.
impact: High. It changes default behaviour for users who create private tasks: new ones are stored in Planner and, per Microsoft's notice, no longer appear in Microsoft To Do.
-->

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing; Risk assessment: Data exposure; Governance guidance: After rollout; Open questions / absence: Microsoft has not said how a user's private, non-shared Planner plan is treated for eDiscovery. | Found: Purview eDiscovery and history are supported for basic plans contained by groups. Premium plans and non-group plans aren't currently supported. | Fix: Replace 'It does not say how a private plan is treated, which is the point to confirm for eDiscovery of new private tasks.' with 'Microsoft documents no current Purview eDiscovery and history support for non-group plans.' In What's changing, replace 'Learn does not yet describe the private plan storage, so what the change does to storage, discovery and retention is known only from the roadmap item and the notice.' with 'Learn does not yet identify the precise storage backend for the new private plan.' In After rollout, remove the reason 'because Learn's Planner security page does not say how private plans are treated'. Remove eDiscovery and content search from the first Open questions bullet rather than presenting their support for a non-group plan as undocumented. Keep the existing source https://learn.microsoft.com/planner/planner-security-privacy-compliance. | Source: https://learn.microsoft.com/planner/planner-security-privacy-compliance
- [contradicted, blocker] controls[1].api; Governance controls / command: Update-M365TeamsApp -Id <Teams app ID> -IsBlocked $true is documented as blocking the Planner app in Teams. | Found: Update-M365TeamsApp -Id 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b -IsBlocked $true Unblocks Bookings app (App ID 4c4ec2e8-4a2c-4bce-8d8f-00fc664a4e5b). | Fix: Remove the printed PowerShell call and set controls[1].api to null; retain the verified UI Block path. Add to the row note: 'The PowerShell reference labels its -IsBlocked $true example as unblocking an app, so the blocking call is not verified.' Do not reverse the Boolean by inference: the same reference also labels its $false example as unblocking. | Source: https://learn.microsoft.com/powershell/module/microsoftteams/update-m365teamsapp
-->
