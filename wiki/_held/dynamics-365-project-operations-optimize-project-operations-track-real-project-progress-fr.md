---
title: "Dynamics 365 Project Operations: approved Field Service time updates project task progress"
slug: "dynamics-365-project-operations-optimize-project-operations-track-real-project-progress-fr"
roadmapId: 576798
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)","Dynamics 365 Project Operations"]
summary: "Approved Field Service time entries now feed task-level effort tracking in Project Operations when the Field Service integration is enabled. Project managers and time approvers notice; no new switch is documented."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Project Operations is where project tasks are managed, and Learn says that requires a Project Operations licence. The installing user needs at least one Project Operations licence. No separate price or meter for this behaviour is published."
audiences: ["service-owner","power-platform-admin","finops"]
tags: ["project-operations","field-service","dynamics-365","integration","approvals","power-platform-admin-center","power-platform-cli"]
sources:
  - title: "Microsoft 365 Roadmap 576798"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576798"
    kind: "roadmap"
  - title: "Project task and work order integration"
    url: "https://learn.microsoft.com/dynamics365/project-operations/field-service-integration/project-operations-integration-project-task"
    kind: "learn"
  - title: "Time entry flow between Field Service and Project Operations"
    url: "https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-time"
    kind: "learn"
  - title: "Project effort tracking"
    url: "https://learn.microsoft.com/dynamics365/project-operations/project-management/project-tracking-overview"
    kind: "learn"
  - title: "Security and approvals"
    url: "https://learn.microsoft.com/dynamics365/project-operations/approvals/approvals-security"
    kind: "learn"
  - title: "Install the Field Service integration with Project Operations"
    url: "https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install"
    kind: "learn"
  - title: "Projects, project contracts, and project tasks"
    url: "https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-projects"
    kind: "learn"
  - title: "pac application"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/application"
    kind: "learn"
  - title: "Field Service Setting (msdyn_fieldservicesetting) table/entity reference"
    url: "https://learn.microsoft.com/dynamics365/field-service/developer/reference/entities/msdyn_fieldservicesetting"
    kind: "learn"
videos: []
related: ["security-roles"]
controls:
  - governs: "Whether the Field Service integration with Project Operations is turned on"
    scope: "environment"
    ui:
      surface: "Field Service"
      path: "Settings > Features > Field Service Integration with Project Operations"
      docs: "https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install"
    api: null
    note: "Needs a Field Service administrator or system administrator role. The roadmap item says this feature is available only when the integration is enabled."
  - governs: "Whether the integration package is installed in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Dynamics 365 Apps > Dynamics 365 Field Service and Project Operations Integration"
      docs: "https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install"
    api:
      kind: "pac-cli"
      call: "pac application install --environment-id <environment-id> --application-name <application-name>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/application"
    note: "The pac command is documented for Dataverse applications from Microsoft Marketplace in general. The installing user needs at least one Project Operations licence."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-16T19:09:12"
changes:
  - date: "2026-11-23"
    note: "First briefing: approved Field Service time now updates Project Operations WBS task progress when the integration is enabled."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 49 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 49
  confirmed: 47
  unconfirmed: 0
  contradicted: 2
  attempts: 1
  hash: "1a93454363d179340241bdacc7f4bfe9"
---

## What's changing

Approved time entries captured in Dynamics 365 Field Service now count towards task progress in the Project Operations work breakdown structure (WBS). This applies when the Field Service and Project Operations integration is enabled and the time is captured against a project task. Microsoft Learn states that approved time entries are the only signal used to update task execution progress in the WBS: when project managers approve time entries, the system reduces remaining effort by the approved hours and recalculates effort completed, percent complete and estimate at completion.

The calculation happens on leaf tasks, and Learn says the Effort tracking and Cost tracking views show progress at the project root, summary and leaf task levels. The roadmap item states that no new execution logic or formulas are introduced: field labour is handled under the same native rules as time entered directly in Project Operations. Submitted but unapproved time entries do not affect task effort completed, project progress or project actual hours until they are approved.

The roadmap item lists the status as Launched with a target date of July CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) and the Web platform. It states that the feature is enabled automatically and is only available when the Field Service and Project Operations integration is enabled. The Learn page for this behaviour is the project task and work order integration page.

## Why it matters

Project health figures now depend on how quickly field time is approved. Because only approved entries move task progress, a backlog of unapproved Field Service time leaves effort completed, percent complete and schedule indicators behind the real work. Approval is also a financial event: Learn says approved time generates actual labour cost and unbilled sales based on project pricing rules, and that approved entries are included in the project's actual hours.

For service owners this means progress reporting and billing inputs share one approval step, owned by project approvers rather than dispatchers. The roadmap states the behaviour is enabled automatically where the integration is enabled, so organisations already running the integration should expect their effort tracking views to reflect approved field time and should tell project managers.

## Risk assessment

**Data exposure**
- Time entered in Field Service flows to Project Operations after submission, and approved entries are added to the project's actual hours. Learn describes this flow on the time entry page; it describes no new data store for this behaviour.
- Learn states that time entries currently do not appear in work order-level financial summaries or work order financial totals, so work order totals and project actuals can differ.

**Security & identity**
- Approval gates progress. Learn's time entry page says approvers must be team members on the project with the Project Approver Admin field on their team member record set to Yes. Learn's approvals security page words the requirement as the Project Approver field, and says the Project Approver Admin security role bypasses the team-member validation and allows approval of all entries.

**Autonomy & actions**
- Learn describes progress updating when project managers approve time entries. It does not describe the feature acting without an approval.

**Change & support**
- Progress, percent complete and estimate at completion on existing projects will move as approved field time arrives. Brief project managers before they read the Effort tracking view.
- Learn states that time off entered in Field Service does not affect the project's financials, and that Field Service scheduling changes do not update project task dates.

## Cost and licensing

Learn says that managing project tasks happens in Project Operations, which requires a Project Operations licence (Projects, project contracts, and project tasks page). The install page says the user who installs the integration package must have at least one Project Operations licence. The project task and work order integration page, which describes this behaviour, names no licence or meter.

The install page also says the integration package includes a flow that runs regularly under the installing user, and asks administrators to confirm that user and the flow are licensed appropriately under Power Automate licensing. That applies to the integration as a whole rather than to this behaviour.

Approved time creates actual labour cost and, under project pricing rules, unbilled sales. Admin time for approvals is the main indirect cost. A price or meter specific to this behaviour is not yet published.

## Scope

- **Who notices:** project managers and project approvers on projects where Field Service work orders are linked to project tasks, and anyone reading the Effort tracking view or project status.
- **Prerequisite:** the Field Service and Project Operations integration must be enabled; the roadmap item states the feature is only available then. Learn's install page lists Field Service minimum version 8.8.150.63, Project Operations minimum version 4.172.3603.1, and a Field Service administrator or system administrator role to install.
- **Task level:** creating work orders from a project task needs tasks at the leaf level of the WBS, and the roadmap item says time must be captured against a project task.
- **Product coverage:** the effort tracking page applies to Project Operations Integrated with ERP and Project Operations Core.
- **Clouds and platforms:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.

## Governance guidance

### Before rollout
- Confirm in Power Platform admin center whether the Field Service and Project Operations integration package is installed in each environment, and in Field Service whether its toggle is on.
- List the project approvers and the people holding the Project Approver Admin role for projects that receive Field Service time, using the approvals security page.
- Tell project managers that only approved time updates task progress, and agree an approval turnaround.

### At rollout
- Compare effort completed, percent complete and estimate at completion on a sample project before and after a batch of Field Service time is approved.
- Explain to finance staff that approved Field Service time also creates actual labour cost and, under project pricing rules, unbilled sales.

### After rollout
- Review the Approvals view for submitted Field Service time that is still waiting, since it holds back task progress.
- Reconcile work order totals with project actuals, because time entries do not appear in work order-level financial totals at the time of writing.
- Watch Message center and the project task integration page for changes to the behaviour.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Field Service integration with Project Operations is turned on</strong><br><small>Environment</small><br><small class="controls__note">Needs a Field Service administrator or system administrator role. The roadmap item says this feature is available only when the integration is enabled.</small></td><td data-label="Admin UI"><strong>Field Service</strong><br>Settings › Features › Field Service Integration with Project Operations <a href="https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the integration package is installed in an environment</strong><br><small>Environment</small><br><small class="controls__note">The pac command is documented for Dataverse applications from Microsoft Marketplace in general. The installing user needs at least one Project Operations licence.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Dynamics 365 Apps › Dynamics 365 Field Service and Project Operations Integration <a href="https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac application install --environment-id &lt;environment-id&gt; --application-name &lt;application-name&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/application" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting that applies to this behaviour alone is documented. The integration toggle in Field Service is the documented switch for the integration as a whole, and the roadmap item states the feature is only available when it is enabled. Installing the package needs a Field Service administrator or system administrator role, and the installing user needs a Project Operations licence.

The install command is documented for Dataverse applications from Microsoft Marketplace in general. Who may approve time is set on project team member records and by security role (Project Approver and Project Approver Admin), not in an admin centre path read for this briefing; see the approvals security page.

## Open questions

- Is there a setting that excludes Field Service time from WBS effort tracking separately from the integration toggle? Watch the project task integration page.
- Which Project Operations version first includes this behaviour for existing integration installs? Watch Message center and the Project Operations release notes.
- Which approval permission is authoritative for Field Service time: the Project Approver Admin field on the team member record (time entry page) or the Project Approver field (approvals security page)?
- Will time entries be added to work order-level financial summaries, which Learn says they do not currently appear in?

<!-- rationale
risk: Low. The roadmap says no new execution logic or formulas are added, and progress moves only when a project approver approves time that Field Service technicians submitted.
cost: Low. The Learn page for this behaviour names no separate licence or meter; the integration needs a Project Operations licence for project task management, so the cost is mainly approval time.
impact: Medium. Project managers and time approvers on projects that use the integration see task progress and project actual hours change as field time is approved.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance controls / role: The Project Approver Admin security role bypasses team-member validation and allows approval of all entries without a related-table access qualification. | Found: You must have access to the relevant related tables, such as Project, via security roles assigned to you. | Fix: Add after the approval-role sentence: 'Approvers, including users with Project Approver Admin, must also have access to relevant related tables such as Project through their assigned security roles.' This qualification is stated at https://learn.microsoft.com/dynamics365/project-operations/approvals/approvals-security. | Source: https://learn.microsoft.com/dynamics365/project-operations/approvals/approvals-security
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment; Governance guidance / behaviour: Learn says approved time entries are the only signal used to update WBS task execution progress. | Found: Approved time entries are the only signal used to update task execution progress in the Work Breakdown Structure (WBS). | Fix: Narrow 'only approved entries move task progress' to 'Only approved time contributes actual effort to task progress.' The cited project-tracking-overview page also says updating Remaining Effort during reprojection recalculates EAC and progress percentage; add that qualification to the absolute statement in What's changing. | Source: https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-time
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Power Platform admin center > Manage > Dynamics 365 Apps > Dynamics 365 Field Service and Project Operations Integration reaches the integration package. | Found: Select Manage > Dynamics 365 Apps > Dynamics 365 Field Service and Project Operations Integration. Select Install and follow the prompts. | Fix: Extend controls[1].ui.path to 'Manage > Dynamics 365 Apps > Dynamics 365 Field Service and Project Operations Integration > Install', as documented at https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install. | Source: https://learn.microsoft.com/dynamics365/field-service/project-operations-integration-install
- [supported, minor] Governance guidance: After rollout / behaviour: The Approvals view contains submitted time awaiting approval. | Found: You can find these records in the Approvals view under the Projects area of the sitemap. ... Go to the Approvals page and select Expenses, Time, Material Usage, or Recalls. | Fix: Add https://learn.microsoft.com/dynamics365/project-operations/approvals/approvals-overview to sources, titled 'Approvals overview'. | Source: https://learn.microsoft.com/dynamics365/project-operations/approvals/approvals-overview
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells readers to inventory project approvers and Project Approver Admin role holders, but no control row covers approval permissions. | Found: List the project approvers and the people holding the Project Approver Admin role ...; controls contains only integration enablement and package installation. | Fix: Remove the checklist bullet beginning 'List the project approvers and the people holding the Project Approver Admin role'; it has no corresponding controls row. Do not add a row as part of this correction.
-->
