---
title: "Microsoft Dataverse: run prompt columns on existing records in bulk (backfill)"
slug: "microsoft-dataverse-prompt-column-values-in-bulk-for-existing-records-backfill"
roadmapId: 570865
topic: "power-platform"
products: ["Power Apps","Microsoft Dataverse","Microsoft Power Platform governance and administration"]
summary: "Makers will be able to run a Dataverse prompt column over records that already exist. An environment setting, off by default, gates it, and each run consumes credits, so admins decide where to allow it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's prompt column page says prompt columns use the same licensing model as AI Builder prompts and consume both AI Builder credits and Copilot Credits. The AI Builder prompts page lists Copilot Credits as a prerequisite."
audiences: ["power-platform-admin","maker","finops"]
tags: ["dataverse","power-apps","ai","copilot-credits","power-platform-admin-center","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 570865"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570865"
    kind: "roadmap"
  - title: "Prompt columns"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Monitor system jobs"
    url: "https://learn.microsoft.com/power-platform/admin/monitor-system-jobs"
    kind: "learn"
  - title: "Overview of prompts"
    url: "https://learn.microsoft.com/ai-builder/prompts-overview"
    kind: "learn"
  - title: "Administer AI Builder"
    url: "https://learn.microsoft.com/ai-builder/administer"
    kind: "learn"
  - title: "Specialized columns using code"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/specialized-columns#prompt-columns"
    kind: "learn"
  - title: "Column-level security to control access"
    url: "https://learn.microsoft.com/power-platform/admin/field-level-security"
    kind: "learn"
  - title: "Organization table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether prompt columns can be run on existing records in bulk in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Allow bulk processing of existing records"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column"
    api: null
    note: "Off by default per Learn. The setting label is read on the prompt column page; the route to the Features page is on the Manage feature settings page. Needs System Administrator or equivalent."
  - governs: "Whether imported prompt column jobs pause for review before they run"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > Require review before processing imported prompt columns"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column"
    api: null
    note: "On by default per Learn; an imported job pauses in System jobs and can be started manually after review. Specialized columns using code page still states importing and exporting solutions with prompt columns is not supported."
  - governs: "Whether AI prompts, which prompt columns rely on, are available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > AI Builder > AI prompts"
      docs: "https://learn.microsoft.com/ai-builder/administer"
    api:
      kind: "rest"
      call: "PATCH /organizations(<organizationid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization"
    note: "Not specific to backfill. The request body sets aipromptsenabled, a Boolean that enables or disables AI prompts. Administration page: enabled by default; Organization table reference: DefaultValue False for AiPromptsEnabled."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-18"
    note: "New briefing: backfill of Dataverse prompt columns over existing records, with its off-by-default environment setting, credit consumption and job limits."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 65 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: added the Dataverse Web API call for the AI prompts switch, reworded the per-record credit, maker-side and credit-type statements, and removed checklist items that had no table row."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 73 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "77e8bdf6b5d04aa6da0f8ac65b462027"
---

## What's changing

Prompt columns in Microsoft Dataverse can now be applied to records that already exist in a table, not only to new or updated ones. The roadmap item describes this as makers choosing to apply a prompt to existing records in bulk, optionally filtered to the rows they need.

Microsoft Learn documents the option as **Apply prompt to existing records in bulk** (backfill). A maker opens the prompt column in Power Apps, checks **Also generate values for Existing records in bulk**, reviews the number of records to process and the estimated credit consumption, saves the column, and selects **Run prompt** to queue the job. The system then generates the values as an asynchronous background job managed in System jobs, and updates the prompt column and its Status and Details columns as each record completes.

Before this option, a prompt ran when a record was created or when one or more of the columns the prompt references was updated. Microsoft's FAQ says updating a prompt definition does not recalculate existing values until a later update to one of those columns.

Status: the roadmap item is In development with a target of November CY2026, release phase General Availability. The Learn page already documents the option and notes that it is in process of rolling out and might not be available in your region yet. The two sources differ on status, and the briefing reports both.

## Why it matters

This is a spend and data-quality decision that lands on makers by default, so admins should decide where it is allowed. A backfill runs the prompt over history in one job, and each execution consumes credits. Microsoft tells admins to ensure sufficient AI credit capacity in the environment before enabling the setting.

The gate is the environment setting **Allow bulk processing of existing records**, which Learn says is off by default. Until an admin turns it on in an environment, the bulk option is not available there. Where it is on, plan for makers to use it against production tables, and agree filters and test runs with them first.

## Risk assessment

**Data exposure**

- A prompt column sends the values of its input columns to an AI model and stores the result persistently in the table. A backfill does this for existing rows, so older data that was never sent to a prompt before is processed. Microsoft's prompts page says prompts use models powered by Azure Foundry.
- The generated values are written to the same table as the source data, so anyone with access to that column sees them. Check column and table security before running a backfill.

**Security & identity**

- Microsoft's failure notes say a run can fail when the user does not have sufficient permissions on one or more input columns. Which identity a backfill job runs under is not described on the pages read; treat that as something to confirm (see open questions).
- Microsoft's FAQ says prompt columns are not audited, so a backfill leaves no audit trail of changed values. The System jobs entry for the job is the record, and Learn says a successful job stays visible there for 30 days and a failed or cancelled job for 60 days.

**Autonomy & actions**

- The job writes AI-generated text into many records without a person reviewing each one. Microsoft's own prompts guidance says a human should review generated content before it informs a business decision.
- The job expires after seven days and is automatically cancelled, regardless of status, so a large backfill can end part-way. Plan runs, and use filters, so that they complete in that window.
- After a solution import, **Require review before processing imported prompt columns** (on by default) pauses the imported job for review in System jobs until someone starts it.

**Change & support**

- Makers need the credit estimate and the number of records shown before they save; expect support questions when a job fails or stops. Learn tells makers to check the Status and Details columns.
- Microsoft's FAQ says creating or editing prompt columns needs the **Block unmanaged customizations** environment setting to be disabled, which can surprise makers in locked-down environments.

## Cost and licensing

**Licence.** Microsoft's prompt column page says prompt columns use the same licensing model as AI Builder prompts. The AI Builder prompts page lists Copilot Credits among the prerequisites, and the prompt column page says prompt columns consume both AI Builder credits and Copilot Credits, adding that AI Builder credits are retiring soon.

**Meter.** Each prompt execution consumes credits. A backfill runs the prompt over existing records in scope; review the record count and estimated credit consumption before running it. Learn says to apply filters so the prompt runs only on the records needed and to test a few records first. The maker sees the number of records and the estimated credit consumption before running the job.

**Where it shows.** Microsoft says prompt column executions appear in Power Automate > Automation center > AI Builder activity, in the **Estimated consumption** column, and show whether each execution used AI Builder credits or Copilot Credits. Learn also says the credits consumed by the job can be viewed in System jobs. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter.

**Capacity.** Learn says to ensure sufficient AI credit capacity is available in the environment before enabling the bulk setting. A per-record rate for backfill is not given on the prompt column page; the estimate shown in the maker panel is the figure to use.

**Indirect cost.** Admin time to decide which environments allow the setting, and maker time to test prompts and filters before a run.

## Scope

**Who and where.** The setting applies per environment, and makers use the option from a prompt column panel. The roadmap record lists Power Apps, Microsoft Dataverse and Microsoft Power Platform governance and administration, with the web platform and the Worldwide (Standard Multi-Tenant), GCC and GCC High clouds.

**Prerequisites.** Learn lists the Copilot and AI Prompts features turned On in the Features area of the environment settings, and the AI Builder prompts licensing model. A table can have up to five prompt columns. Input columns cannot be formula, file, image or other prompt columns; Microsoft says their input value is ignored.

**Roles.** The Manage feature settings page says you need the System Administrator security role or equivalent permissions to update the settings in the Features area.

**Rollout.** The roadmap record gives a target of November CY2026. The Learn page says the capability is in process of rolling out and might not be available in your region yet.

## Governance guidance

### Before rollout

- Identify the environments where makers build prompt columns and confirm that **Allow bulk processing of existing records** is still off in each (see the controls table).
- Confirm the AI prompts feature is on only where you intend prompt columns to run, since Learn lists it as a prerequisite.
- Brief makers to apply filters and test a few records before a backfill.

### At rollout

- Turn on **Allow bulk processing of existing records** one environment at a time, starting with a non-production environment.
- Decide whether to leave **Require review before processing imported prompt columns** on; Microsoft documents it as on by default and it pauses imported jobs until reviewed.
- Ask makers to review the record count and estimated credit consumption shown before they select **Run prompt**.

### After rollout

- Ask makers to check the Status and Details columns on a sample of records after each run.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether prompt columns can be run on existing records in bulk in an environment</strong><br><small>Environment</small><br><small class="controls__note">Off by default per Learn. The setting label is read on the prompt column page; the route to the Features page is on the Manage feature settings page. Needs System Administrator or equivalent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Allow bulk processing of existing records <a href="https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether imported prompt column jobs pause for review before they run</strong><br><small>Environment</small><br><small class="controls__note">On by default per Learn; an imported job pauses in System jobs and can be started manually after review. Specialized columns using code page still states importing and exporting solutions with prompt columns is not supported.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Require review before processing imported prompt columns <a href="https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether AI prompts, which prompt columns rely on, are available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Not specific to backfill. The request body sets aipromptsenabled, a Boolean that enables or disables AI prompts. Administration page: enabled by default; Organization table reference: DefaultValue False for AiPromptsEnabled.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › AI Builder › AI prompts <a href="https://learn.microsoft.com/ai-builder/administer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /organizations(&lt;organizationid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The environment settings are changed by someone with the System Administrator role or equivalent, per the Manage feature settings page. Learn says the **Allow bulk processing of existing records** setting is off by default and that **Require review before processing imported prompt columns** is on by default.

Maker-side, select **Also generate values for Existing records in bulk**, review the record count and credit estimate, save the column configuration, and select **Run prompt** to queue the job. Learn says the **Allow prompt column execution** checkbox on the Edit column pane is enabled by default and, when cleared, stops AI analysis for that column. Learn adds that for prompts to be executed, both tenant level and column level settings need to be enabled.

To monitor or stop a job, go to Power Platform admin center > Manage > Environments > environment > Settings > Audit and logs > System jobs; Microsoft says that if there is a problem with a system job you can cancel, postpone, pause or resume it, and you cannot change the status of a completed or cancelled job.

## Open questions

- Which identity does a bulk backfill job run under, and does it respect the column-level security of the maker who started it? Watch the prompt columns page on Microsoft Learn.
- Can the environment settings be changed through the Power Platform admin center environment group rules or automation, rather than one environment at a time? Watch the Manage feature settings page.
- Will the roadmap's November CY2026 target and the Learn page's rolling-out note line up with availability in GCC and GCC High? Watch the roadmap item and Message center.
- Is a record-level audit of values changed by a backfill planned, given that prompt columns are documented as not audited?

<!-- rationale
risk: Medium. A backfill writes AI-generated values into many existing records at once, but the environment setting that allows it is off by default and Microsoft documents filters and a review step.
cost: Variable. Prompt columns consume credits each time a prompt executes; the activity report shows whether an execution used AI Builder credits or Copilot Credits, so a bulk backfill can consume substantial credits.
impact: Medium. Makers using prompt columns notice it first, and the generated values then appear for the app users who read those tables; admins decide where the setting is turned on.
-->
