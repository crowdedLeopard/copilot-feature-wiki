---
title: "Microsoft Dataverse: bulk delete gains run details and solution-aware jobs"
slug: "microsoft-dataverse-improved-enterprise-experiences-in-power-platform-improve-bulk-delete"
roadmapId: 576810
topic: "power-platform"
products: ["Microsoft Dataverse"]
summary: "Dataverse bulk delete jobs now show job-level errors in a Run details tab and can be added to solutions to move between environments. Admins who run bulk deletes should check how imported jobs behave."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "April CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and the Learn page for bulk deletion state no licence or meter for these changes; the page names System Administrator permissions for updating bulk delete settings."
audiences: ["power-platform-admin","service-owner","maker"]
tags: ["dataverse","solutions","power-platform-admin-center","data-lifecycle-management","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap 576810"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576810"
    kind: "roadmap"
  - title: "Remove a large amount of specific, targeted data with bulk deletion"
    url: "https://learn.microsoft.com/power-platform/admin/delete-bulk-records"
    kind: "learn"
  - title: "Delete data in bulk"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/delete-data-bulk"
    kind: "learn"
  - title: "Bulk Delete Failure (BulkDeleteFailure) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/bulkdeletefailure"
    kind: "learn"
  - title: "pac solution"
    url: "https://learn.microsoft.com/power-platform/developer/cli/reference/solution"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Creating, running and reviewing bulk delete jobs in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Data management > Bulk deletion"
      docs: "https://learn.microsoft.com/power-platform/admin/delete-bulk-records"
    api:
      kind: "rest"
      call: "POST [Organization Uri]/api/data/v9.2/BulkDelete with a JSON body containing QuerySet, JobName and StartDateTime"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/delete-data-bulk"
    note: "UI: System Administrator permissions. API: BulkDelete and Delete privileges on the tables plus read access to the queried records."
  - governs: "Job-level and record-level failure details for a bulk delete job"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Data management > Bulk deletion > job > Run details"
      docs: "https://learn.microsoft.com/power-platform/admin/delete-bulk-records"
    api:
      kind: "rest"
      call: "GET [Organization Uri]/api/data/v9.2/bulkdeletefailures"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/bulkdeletefailure"
    note: "Read-only view of failures; it does not roll back records a job already deleted."
  - governs: "Moving a bulk delete job definition between environments in a solution"
    scope: "environment"
    ui:
      surface: "Power Apps (maker)"
      path: "solution > Add existing > More > Other > Data Life Cycle Config"
      docs: "https://learn.microsoft.com/power-platform/admin/delete-bulk-records"
    api:
      kind: "pac-cli"
      call: "pac solution import --path Solution.zip --environment <environment ID or URL>"
      docs: "https://learn.microsoft.com/power-platform/developer/cli/reference/solution"
    note: "Only admins can create and import these solutions. Imported jobs run immediately. The pac command is the general solution import, not a bulk delete-specific control."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:09:22"
changes:
  - date: "2026-11-18"
    note: "New briefing on Dataverse bulk delete Run details and solution-aware jobs, based on the roadmap item and the Learn bulk deletion pages."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 50 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 48
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "7f600669d4cad58265c0ae9f9a1f6cca"
---

## What's changing

The roadmap item states that Microsoft Dataverse bulk delete gets two improvements: clearer error details for jobs and records, and bulk delete configurations that are solution aware. The roadmap item gives a preview date of April CY2026 and a target date of June CY2026, lists General Availability and Preview as release phases, and shows the status as Launched. It lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform, and describes the change as "Enabled for end users automatically".

Microsoft Learn describes both improvements. Errors from a bulk delete job appear on a **Run details** tab, which shows job status, start and end time, the number of records deleted, the number of records failed and the number of errors. A **Failed** status indicates that the job did not start. The failure record for each record that was not deleted is stored in the Bulk Delete Failure (BulkDeleteFailure) table, so the same detail can be read through the Web API.

Bulk delete jobs are now solution aware. An administrator adds one or more jobs to a solution in the Power Apps maker portal as a **Data Life Cycle Config** component, then exports and imports the solution like any other. Learn lists four limits: only admins can create and import solutions that contain bulk deletion jobs, only jobs created in Power Platform environments can be solution aware, only job definitions are portable (deleted data is not included), and imported jobs run immediately on import.

## Why it matters

Bulk delete is one of the few Dataverse tools that removes records at scale, and a failed or partly failed job does not roll back what it already deleted. Learn states that if a job fails or ends prematurely, the record data remains deleted. Per-job error detail therefore matters for support: it tells a system administrator how many records were removed and how many failed before anyone reruns a job.

Solution-aware jobs bring a destructive operation into the same development, test and production pipeline as apps and flows. The benefit is consistency across environments; the exposure is that a job definition now travels with a solution and, per Learn, runs as soon as the solution is imported. Treat any solution containing a **Data Life Cycle Config** component as a data-deletion change, not a routine deployment. Microsoft has not stated how existing, unpackaged jobs are affected, so expect them to keep working as they do today until a source says otherwise.

## Risk assessment

**Data exposure**

- Imported bulk delete jobs run immediately on import (Learn). A solution that carries a job aimed at production tables deletes records as part of the deployment, with no separate start step.
- The wizard's **Permanent deletion** checkbox removes records so they cannot be recovered. Check that production jobs in solutions do not select it unless that is intended.

**Security & identity**

- Learn limits creating and importing solutions that contain bulk deletion jobs to admins. Microsoft has not said which role or security privilege that means beyond "admins", so confirm it against your deployment accounts before relying on it.
- Running a job through the API needs `BulkDelete` and `Delete` privileges on the tables involved plus read permission on the records queried, according to Learn.

**Autonomy & actions**

- No agent or AI action is described. Learn lists periodic deletion among the operations bulk delete supports, so confirm whether a job you move is set to recur.
- Delete actions on a table can trigger plug-ins or workflows for each deleted record, per Learn, so a job in a solution can start downstream logic in the target environment.

**Change & support**

- The Run details tab and the BulkDeleteFailure table give support teams the counts and errors without a rerun. Roll the new view out to administrators who currently diagnose failures from a generic status.
- Only job definitions move with a solution; deleted data does not. Test results in a sandbox do not prove what a production job will delete, because the data differs.

## Cost and licensing

Microsoft has not published licensing for these changes. The roadmap item lists no licence, and the Learn page for bulk deletion names System Administrator permissions as the requirement for updating bulk delete settings and names no licence or meter. This briefing therefore treats the known cost as admin time and rates licensing as not yet published.

Indirect effects: Learn describes bulk deletion as a way to manage consumption of system storage, so deleting data may reduce storage use.

## Scope

The roadmap record lists Microsoft Dataverse, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. It does not list GCC, GCC High or DoD, which is a record fact and not a statement that the feature is unavailable there.

The roadmap item says it is enabled for end users automatically. In practice the bulk deletion settings are reached in the Power Platform admin center by someone with System Administrator permissions (per Learn). Solution awareness applies only to bulk deletion jobs created in Power Platform environments, and only an admin can create and import solutions that contain them. Learn does not describe a separate prerequisite or flag for the Run details tab.

## Governance guidance

### Before rollout

- List the recurring and one-off bulk delete jobs in each environment under **Data management > Bulk deletion** and record who owns each one.
- Decide which jobs, if any, should be added to a solution, and agree that a solution containing a **Data Life Cycle Config** component needs the same approval as any data-deletion change.
- Confirm which admin accounts or service principals import solutions into production, since only admins can import solutions that contain bulk deletion jobs.

### At rollout

- Validate each bulk delete job in a sandbox and then in preproduction before it is imported to production, as Learn's example describes.
- Import such solutions at a planned time, because imported jobs run immediately.
- Open the **Run details** tab after the first runs to confirm the counts of deleted and failed records match expectations.

### After rollout

- Review failed jobs through **Run details** or the BulkDeleteFailure table, and rerun only after the cause is understood, as a failed job does not roll back deleted records.
- Re-check target environments after each solution import for jobs that were added or changed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating, running and reviewing bulk delete jobs in an environment</strong><br><small>Environment</small><br><small class="controls__note">UI: System Administrator permissions. API: BulkDelete and Delete privileges on the tables plus read access to the queried records.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Data management › Bulk deletion <a href="https://learn.microsoft.com/power-platform/admin/delete-bulk-records" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization Uri]/api/data/v9.2/BulkDelete with a JSON body containing QuerySet, JobName and StartDateTime</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/delete-data-bulk" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Job-level and record-level failure details for a bulk delete job</strong><br><small>Environment</small><br><small class="controls__note">Read-only view of failures; it does not roll back records a job already deleted.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Data management › Bulk deletion › job › Run details <a href="https://learn.microsoft.com/power-platform/admin/delete-bulk-records" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization Uri]/api/data/v9.2/bulkdeletefailures</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/bulkdeletefailure" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Moving a bulk delete job definition between environments in a solution</strong><br><small>Environment</small><br><small class="controls__note">Only admins can create and import these solutions. Imported jobs run immediately. The pac command is the general solution import, not a bulk delete-specific control.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>solution › Add existing › More › Other › Data Life Cycle Config <a href="https://learn.microsoft.com/power-platform/admin/delete-bulk-records" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform CLI</strong><br><code>pac solution import --path Solution.zip --environment &lt;environment ID or URL&gt;</code> <a href="https://learn.microsoft.com/power-platform/developer/cli/reference/solution" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The rows cover where jobs are run and reviewed, where failure detail is read and how a job reaches another environment. Learn names System Administrator permissions for updating bulk delete settings in the Power Platform admin center. For the API, Learn states that running a job needs `BulkDelete` and `Delete` privileges on the table types and read permission on the queried records, and that a system administrator has them by default.

The wizard's **Permanent deletion** checkbox is a per-job option and not a control over this change; Learn describes it as skipping the step of moving data to deleted records tables when deleted record keeping is turned on.

## Open questions

- Does adding a bulk delete job to a solution run it again each time that solution is re-imported or upgraded, or only on first import? Watch the Learn page for bulk deletion.
- Which role or security privilege do the Learn notes mean by "admins" for creating and importing solutions that contain bulk deletion jobs?
- Does the Run details tab cover record-level errors in the admin centre, or only job-level counts and the BulkDeleteFailure table? The roadmap says job- and record-level detail; the Learn page lists job-level fields.
- Will Microsoft publish any licensing or storage implications for these changes? Check the roadmap item and Message center.

<!-- rationale
risk: Medium. A bulk delete job added to a solution runs immediately when the solution is imported, so a job moved to the wrong environment deletes data straight away.
cost: Low. The only cost the sources show is admin time; the Learn page names System Administrator permissions as the requirement and names no licence or meter, and Microsoft has not published licensing for this change.
impact: Low. The changes are in bulk deletion settings and the solution explorer, which system administrators and solution owners use; end users do not see them.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].api; Governance controls: first API row / command: The printed BulkDelete POST instructions specify a request body containing QuerySet, JobName and StartDateTime. | Found: SendEmailNotification | Edm.Boolean | False; ToRecipients | Collection(activityparty) | False; CCRecipients | Collection(activityparty) | False; RecurrencePattern | Edm.String | False | Fix: Replace the call in both locations with 'POST [Organization Uri]/api/data/v9.2/BulkDelete with JSON body {"QuerySet": <query-expression array>, "JobName": "<job name>", "SendEmailNotification": false, "ToRecipients": [], "CCRecipients": [], "RecurrencePattern": "", "StartDateTime": "<ISO 8601 start time>"}'. The existing cited developer article shows these fields together; the action reference at https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/bulkdelete confirms that the four omitted parameters are non-nullable. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/bulkdelete
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [unsupported, minor] rationale: impact / behaviour: End users do not see these changes. | Found: Searched: Dataverse bulk delete Run details solution aware end users administrators visibility. Read delete-bulk-records and delete-data-bulk; they document administrative surfaces and privileges, but do not state that end users cannot see the changes. | Fix: Replace the impact rationale with 'Low. The documented changes appear in bulk deletion settings and the solution explorer, so this briefing expects administrators and solution owners to notice them.' Keep the low impact rating as the wiki's judgement.
-->
