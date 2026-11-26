---
title: "Planner: task hierarchy (nested tasks) in unified plans"
slug: "planner-task-hierarchy-for-unified-plans"
roadmapId: 580879
topic: "modern-work"
products: ["Planner"]
summary: "Microsoft plans to bring nested tasks to unified plans in Planner for the web, targeted for March CY2027. Who can create them depends on licence; no admin switch is documented. Review licensing before it lands."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "per-user"
  notes: "The Planner service description lists task hierarchy as included with Planner Plan 1 and Planner and Project Plan 3, view only with Microsoft 365 Copilot, and not included with Microsoft 365 suites. That row currently refers to premium plans; licensing for task hierarchy in unified plans is not yet published."
audiences: ["m365-admin","service-owner","finops","change-adoption"]
tags: ["planner","licensing","microsoft-graph","powershell"]
sources:
  - title: "Planner: Task Hierarchy for Unified Plans"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580879"
    kind: "roadmap"
  - title: "Microsoft Planner service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description"
    kind: "learn"
  - title: "Microsoft Planner for admins"
    url: "https://learn.microsoft.com/planner/planner-for-admins"
    kind: "learn"
  - title: "task resource type"
    url: "https://learn.microsoft.com/graph/api/resources/task?view=graph-rest-beta"
    kind: "learn"
  - title: "Converting basic plans into premium plans"
    url: "https://learn.microsoft.com/planner/plan-conversion"
    kind: "learn"
  - title: "Understand Planner trials and license assignments"
    url: "https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments"
    kind: "learn"
  - title: "Microsoft Planner support in Microsoft Purview"
    url: "https://learn.microsoft.com/planner/planner-in-purview"
    kind: "learn"
  - title: "Security, privacy, and compliance in Microsoft Planner"
    url: "https://learn.microsoft.com/planner/planner-security-privacy-compliance"
    kind: "learn"
  - title: "Prerequisites for making Planner changes in Windows PowerShell"
    url: "https://learn.microsoft.com/planner/prerequisites-for-powershell"
    kind: "learn"
  - title: "Turn off Outlook calendar sync in Planner for your organization"
    url: "https://learn.microsoft.com/planner/turn-off-outlook-calendar-sync"
    kind: "learn"
  - title: "Disable the creation of Roster containers in your organization's Planner tenant"
    url: "https://learn.microsoft.com/planner/disable-roster-containers"
    kind: "learn"
  - title: "Disable Planner tab in shared and private channels"
    url: "https://learn.microsoft.com/planner/disable-planner-tab-shared-private-channels"
    kind: "learn"
  - title: "Disabling direct-push planner mobile notifications"
    url: "https://learn.microsoft.com/planner/disabling-direct-push-planner-mobile-notifications"
    kind: "learn"
  - title: "Turn off or restrict access to Planner Agent and Planner Agent chat in Planner"
    url: "https://learn.microsoft.com/planner/turn-off-planner-agent"
    kind: "learn"
  - title: "Which users hold a Planner Plan 1 or Planner and Project Plan 3 licence (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    kind: "learn"
  - title: "Which users hold a Planner Plan 1 or Planner and Project Plan 3 licence (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    kind: "learn"
  - title: "Whether users can convert basic plans into premium plans (today's route to subtasks) (PowerShell)"
    url: "https://learn.microsoft.com/planner/allow-data-flow-to-dataverse"
    kind: "learn"
  - title: "Whether Planner is available to the organisation at all (PowerShell)"
    url: "https://learn.microsoft.com/planner/disable-planner"
    kind: "learn"
videos: []
related: ["planner-local-custom-fields-columns","planner-capacity-view","planner-add-times-to-task-start-finish-and-due-dates","microsoft-purview-compliance-portal-data-lifecycle-management-apply-a-retention-policy-to"]
controls:
  - governs: "Which users hold a Planner Plan 1 or Planner and Project Plan 3 licence"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Users > Active users > user > Licenses and Apps > Licenses"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users"
    api:
      kind: "powershell"
      call: "Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = \"<SkuId>\"} -RemoveLicenses @()"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell"
    note: "Requires at least License or User Administrator. The service description lists task hierarchy for these licences; licensing in unified plans is not yet published."
  - governs: "Separate switch for task hierarchy in unified plans"
    scope: "tenant"
    ui: null
    api: null
    note: "No Set-PlannerConfiguration parameter or admin centre setting for nested tasks is documented at the time of writing (November 2026)."
  - governs: "Whether users can convert basic plans into premium plans (today's route to subtasks)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -AllowDataFlowToDataverse $false"
      docs: "https://learn.microsoft.com/planner/allow-data-flow-to-dataverse"
    note: "Enabled by default. Governs conversion to premium plans only, not task hierarchy in unified plans."
  - governs: "Whether Planner is available to the organisation at all"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-PlannerConfiguration -IsPlannerAllowed $false"
      docs: "https://learn.microsoft.com/planner/disable-planner"
    note: "Global admin. Turns off Planner as a whole, not this feature alone; premium plans are covered by a separate page."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-26"
    note: "New briefing: nested tasks planned for unified plans in Planner, with current licensing for task hierarchy and the Planner tenant settings."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 63 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: acknowledged Learn's beta Graph description of parent and child tasks, narrowed unified plan eligibility and autonomy wording, re-rated cost low, removed an eDiscovery checklist step, added sources."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 61 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 60
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "9cf74094bb0794654946ddba81df8a1f"
---

## What's changing

Microsoft plans to add task hierarchy, meaning tasks nested under other tasks, to unified plans in Planner. The roadmap item states that it "introduces nested tasks to organize complex work, making plan structure clearer and execution easier". Microsoft Learn describes parent and child tasks in the beta unified plans Graph API, but has not stated the rollout default or which licences will allow creating nested tasks in unified plans.

Task hierarchy already exists in Planner, but only in premium plans: the Planner service description marks it "Currently available only in premium plans". Unified plans are the plan type Microsoft now uses in place of basic plans ("Basic plans are now unified plans"), and in them "the capabilities available to each user depend on their assigned license". This item brings the hierarchy into that plan type.

The beta Microsoft Graph API for unified plans already documents a task property for it: **parentTaskId**, "ID of the parent task, if this task is a subtask", and a read-only **hasChildren** flag. The beta API is marked by Microsoft as not supported for production use.

The roadmap item is **In development**, targeted for **March CY2027**, for general availability on the web, in the Worldwide (Standard Multi-Tenant) cloud. Microsoft has not stated whether it will be on by default when it arrives.

## Why it matters

The main question for a service owner is licensing, not risk. Today, subtasks live in premium plans, which a user with a Planner premium licence can create by converting a basic plan. Moving the hierarchy into unified plans brings it to a plan type that users with an eligible Microsoft 365 licence can use, while the service description still lists task hierarchy for Planner Plan 1 and Planner and Project Plan 3 only. Expect requests for those licences, or for trials, once users see nested tasks in plans they share with licensed colleagues.

Microsoft has not stated what happens on arrival, nor whether users without a qualifying licence will see nested tasks as view only, as Microsoft 365 users do in premium plans today. No source says existing plans or tasks change. Plan for a mixed experience in shared plans, since "a unified plan doesn't require every member of the plan to have the same license".

## Risk assessment

**Data exposure**
- No change documented: nested tasks sit inside plans whose membership already decides who can see them. Microsoft has not described any new data the feature reads or shares.
- The Planner in Microsoft Purview page lists tasks in plans shared with groups as supported for eDiscovery search and legal hold, and premium plans as unsupported. It does not name unified plans or nested tasks, so compliance teams should confirm parent–child structure is preserved in a search before relying on it.

**Security & identity**
- No change: Microsoft has not described any new identity, permission or sharing model for nested tasks.

**Autonomy & actions**
- No change: the feature organises tasks people create; Microsoft has not described autonomous actions introduced by task hierarchy.

**Change & support**
- Users in the same plan may get different capabilities, because features in unified plans depend on each user's licence. Expect help-desk questions about why one member can nest tasks and another cannot.
- The beta unified plans task resource documents **parentTaskId**, and its page contrasts that API with the plannerTask and plannerTaskDetails objects of the basic plans Graph API. Confirm which API your Planner integrations and reports use before relying on them to show nested tasks.

## Cost and licensing

**Licence.** The [Microsoft Planner service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description) lists task hierarchy as: not included in Microsoft 365 suites, included with Planner Plan 1 and Planner and Project Plan 3, and view only with Microsoft 365 Copilot. That row carries the note "Currently available only in premium plans". Microsoft has not yet published which licences will allow creating nested tasks in unified plans. The [Planner for admins](https://learn.microsoft.com/planner/planner-for-admins) page says additional capabilities in unified plans "are available based on whether the user has Microsoft Copilot, Planner Plan 1 or Planner and Project Plan 3".

**Meter.** Microsoft documents no meter for this feature.

**Indirect costs.** The [Planner trials page](https://learn.microsoft.com/planner/understand-planner-trial-and-license-assignments) explains that users can start a 30-day Planner and Project Plan 3 trial from Planner and then request a licence from their administrator. Budget for those requests and for the admin time to handle them.

**Not yet published.** Licensing specific to task hierarchy in unified plans; any per-user price for this feature beyond the existing Planner subscriptions.

## Scope

- **Users:** people working in unified plans in Planner. Unified plans are available to "all users with Microsoft 365, Planner Plan 1, Planner and Project Plan 3, or Microsoft 365 Copilot"; which of them can create nested tasks is not yet published.
- **Platforms:** Web, as the roadmap record lists it.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Release phase:** General Availability, targeted for March CY2027.
- **Roles:** turning Planner off with PowerShell is documented for a global admin; licence assignment needs at least a License or User Administrator.
- **Out of scope:** premium plans, which already have task hierarchy.

## Governance guidance

### Before rollout
- Identify which plan owners and project leads hold Planner Plan 1 or Planner and Project Plan 3 licences, using the licence assignment control in the table.
- Decide whether teams that converted basic plans to premium plans only to get subtasks should stay there, and whether to keep allowing conversion (the AllowDataFlowToDataverse setting).
- Prepare guidance for plan members explaining that features in a unified plan depend on each person's licence.

### At rollout
- Check Message center for a post on this roadmap item that states the default and the rollout window.
- Confirm in a test plan which licences can create nested tasks and which see them only, before answering licence requests.

### After rollout
- Review Planner Plan 1 and Planner and Project Plan 3 licence requests against actual need.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users hold a Planner Plan 1 or Planner and Project Plan 3 licence</strong><br><small>User</small><br><small class="controls__note">Requires at least License or User Administrator. The service description lists task hierarchy for these licences; licensing in unified plans is not yet published.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Users › Active users › user › Licenses and Apps › Licenses <a href="https://learn.microsoft.com/microsoft-365/admin/manage/assign-licenses-to-users" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-MgUserLicense -UserId $userUPN -AddLicenses @{SkuId = &quot;&lt;SkuId&gt;&quot;} -RemoveLicenses @()</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/assign-licenses-to-user-accounts-with-microsoft-365-powershell" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for task hierarchy in unified plans</strong><br><small>Tenant</small><br><small class="controls__note">No Set-PlannerConfiguration parameter or admin centre setting for nested tasks is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can convert basic plans into premium plans (today's route to subtasks)</strong><br><small>Tenant</small><br><small class="controls__note">Enabled by default. Governs conversion to premium plans only, not task hierarchy in unified plans.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -AllowDataFlowToDataverse $false</code> <a href="https://learn.microsoft.com/planner/allow-data-flow-to-dataverse" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Planner is available to the organisation at all</strong><br><small>Tenant</small><br><small class="controls__note">Global admin. Turns off Planner as a whole, not this feature alone; premium plans are covered by a separate page.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-PlannerConfiguration -IsPlannerAllowed $false</code> <a href="https://learn.microsoft.com/planner/disable-planner" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns task hierarchy on or off separately at the time of writing (November 2026). The Planner tenant settings are changed with Set-PlannerConfiguration in the Planner Tenant Admin PowerShell module; the parameters documented on Microsoft Learn cover Planner as a whole, calendar sync, roster containers, plan conversion, channel tabs, mobile notifications and Planner Agent, and none covers nested tasks.

The practical lever is licensing: who holds Planner Plan 1 or Planner and Project Plan 3. Turning Planner off removes far more than this feature. The conversion setting governs moving basic plans into premium plans, which is today's route to subtasks; it does not govern task hierarchy in unified plans.

## Open questions

- Will task hierarchy in unified plans follow the service description's split (Planner Plan 1 and Planner and Project Plan 3 create, Microsoft 365 Copilot view only, Microsoft 365 suites not included)? Watch the Planner service description.
- Will nested tasks appear automatically in existing unified plans, or does a plan owner turn the feature on? Watch Message center.
- Will eDiscovery and retention for Planner keep the parent and child relationship of nested tasks? Watch the Planner in Microsoft Purview page.
- Will parentTaskId in the unified plans Graph API move from beta to v1.0 with this release? Watch the Microsoft Graph changelog.

<!-- rationale
risk: Low. Nested tasks organise work inside plans users already share; Microsoft documents no new data access, and Planner itself can still be turned off with PowerShell.
cost: Low. Reviewing licences, handling requests and preparing guidance takes administrator time; licensing specific to task hierarchy in unified plans is not yet published.
impact: Medium. Project leads and plan members who structure work in Planner notice; Microsoft has not said whether the feature appears for every unified plan user.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: first paragraph / licensing: The service description lists task hierarchy for Planner Plan 1 and Planner and Project Plan 3 only. | Found: Existing customers may continue to use their subscriptions in line with applicable renewal and lifecycle policies. ... Plan 5 includes all Planner and Project Plan 3 capabilities, plus the following: | Fix: Delete 'only' from 'the service description still lists task hierarchy for Planner Plan 1 and Planner and Project Plan 3 only'. The same cited service description also includes Plan 3 capabilities in existing Planner and Project Plan 5 subscriptions. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-planner-service-description
-->
