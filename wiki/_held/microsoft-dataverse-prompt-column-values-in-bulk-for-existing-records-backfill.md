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
    note: "On by default per Learn; an imported job pauses in System jobs and can be started manually after review."
  - governs: "Whether AI prompts, which prompt columns rely on, are available in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > AI Builder > AI prompts"
      docs: "https://learn.microsoft.com/ai-builder/administer"
    api: null
    note: "Existing control, enabled by default per Learn. It switches AI prompts off or on generally; it is not specific to backfill. An environment group rule for AI prompts can lock it."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-18"
    note: "New briefing: backfill of Dataverse prompt columns over existing records, with its off-by-default environment setting, credit consumption and job limits."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 65 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 59
  unconfirmed: 2
  contradicted: 4
  attempts: 1
  hash: "c6fd705e0ac663e90dd802e4a2339031"
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

**Meter.** Each prompt execution consumes credits. A backfill queues one execution per record in scope, so the spend scales with the table size and the filter. Learn says to apply filters so the prompt runs only on the records needed and to test a few records first. The maker sees the number of records and the estimated credit consumption before running the job.

**Where it shows.** Microsoft says prompt column executions appear in Power Automate > Automation center > AI Builder activity, in the **Estimated consumption** column, and show whether each execution used AI Builder credits or Copilot Credits. Learn also says the credits consumed by the job can be viewed in System jobs. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter.

**Capacity.** Learn says to ensure sufficient AI credit capacity is available in the environment before enabling the bulk setting. A per-record rate for backfill is not given on the prompt column page; the estimate shown in the maker panel is the figure to use.

**Indirect cost.** Admin time to decide which environments allow the setting, and maker time to test prompts and filters before a run.

## Scope

**Who and where.** The setting applies per environment, and the option is used by makers on the prompt columns they own. The roadmap record lists Power Apps, Microsoft Dataverse and Microsoft Power Platform governance and administration, with the web platform and the Worldwide (Standard Multi-Tenant), GCC and GCC High clouds.

**Prerequisites.** Learn lists the Copilot and AI Prompts features turned On in the Features area of the environment settings, and the AI Builder prompts licensing model. A table can have up to five prompt columns. Input columns cannot be formula, file, image or other prompt columns; Microsoft says their input value is ignored.

**Roles.** The Manage feature settings page says you need the System Administrator security role or equivalent permissions to update the settings in the Features area.

**Rollout.** The roadmap record gives a target of November CY2026. The Learn page says the capability is in process of rolling out and might not be available in your region yet.

## Governance guidance

### Before rollout

- Identify the environments where makers build prompt columns and confirm that **Allow bulk processing of existing records** is still off in each (see the controls table).
- Check the available AI credit capacity in those environments, as Microsoft advises, and agree with makers who may spend it.
- Confirm the AI prompts feature is on only where you intend prompt columns to run, since Learn lists it as a prerequisite.
- Brief makers to apply filters and test a few records before a backfill.

### At rollout

- Turn on **Allow bulk processing of existing records** one environment at a time, starting with a non-production environment.
- Decide whether to leave **Require review before processing imported prompt columns** on; Microsoft documents it as on by default and it pauses imported jobs until reviewed.
- Ask makers to review the record count and estimated credit consumption shown before they select **Run prompt**.

### After rollout

- Monitor jobs in System jobs and act on failed or paused ones; the notes under the table give the path.
- Review the **Estimated consumption** column in the AI Builder activity report for the credits each run used.
- Ask makers to check the Status and Details columns on a sample of records after each run.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether prompt columns can be run on existing records in bulk in an environment</strong><br><small>Environment</small><br><small class="controls__note">Off by default per Learn. The setting label is read on the prompt column page; the route to the Features page is on the Manage feature settings page. Needs System Administrator or equivalent.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Allow bulk processing of existing records <a href="https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether imported prompt column jobs pause for review before they run</strong><br><small>Environment</small><br><small class="controls__note">On by default per Learn; an imported job pauses in System jobs and can be started manually after review.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › Require review before processing imported prompt columns <a href="https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether AI prompts, which prompt columns rely on, are available in an environment</strong><br><small>Environment</small><br><small class="controls__note">Existing control, enabled by default per Learn. It switches AI prompts off or on generally; it is not specific to backfill. An environment group rule for AI prompts can lock it.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › AI Builder › AI prompts <a href="https://learn.microsoft.com/ai-builder/administer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The environment settings are changed by someone with the System Administrator role or equivalent, per the Manage feature settings page. Learn says the **Allow bulk processing of existing records** setting is off by default and that **Require review before processing imported prompt columns** is on by default.

Maker-side, the column panel option **Also generate values for Existing records in bulk** starts the job, and Learn says the **Allow prompt column execution** checkbox on the Edit column pane is enabled by default and, when cleared, stops AI analysis for that column. Learn adds that for prompts to be executed, both tenant level and column level settings need to be enabled.

To monitor or stop a job, go to Power Platform admin center > Manage > Environments > environment > Settings > Audit and logs > System jobs; Microsoft says that if there is a problem with a system job you can cancel, postpone, pause or resume it, and you cannot change the status of a completed or cancelled job.

## Open questions

- Which identity does a bulk backfill job run under, and does it respect the column-level security of the maker who started it? Watch the prompt columns page on Microsoft Learn.
- Can the environment settings be changed through the Power Platform admin center environment group rules or automation, rather than one environment at a time? Watch the Manage feature settings page.
- Will the roadmap's November CY2026 target and the Learn page's rolling-out note line up with availability in GCC and GCC High? Watch the roadmap item and Message center.
- Is a record-level audit of values changed by a backfill planned, given that prompt columns are documented as not audited?

<!-- rationale
risk: Medium. A backfill writes AI-generated values into many existing records at once, but the environment setting that allows it is off by default and Microsoft documents filters and a review step.
cost: Variable. Microsoft's prompt column page says prompt columns consume both AI Builder credits and Copilot Credits each time a prompt runs, so a backfill over a large table spends credits in one job.
impact: Medium. Makers who own prompt columns notice it first, and the generated values then appear for the app users who read those tables; admins decide where the setting is turned on.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[2].api; Governance controls: third table row / absence: An automation operation for the AI prompts environment switch is not yet documented. | Found: Update ... PATCH /organizations(organizationid) ... AiPromptsEnabled ... Indicates whether AI Prompts feature is enabled. ... LogicalName ... aipromptsenabled | Fix: Set controls[2].api to kind 'rest', call 'PATCH /organizations(<organizationid>)', docs 'https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization'. Add to its note: 'The request body sets aipromptsenabled, a Boolean that enables or disables AI prompts.' The v9.2 Web API reference also documents this property at https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization?view=dataverse-latest. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization
- [unsupported, blocker] Cost and licensing: Meter / cost: A backfill queues exactly one prompt execution per record in scope. | Found: Searched: 'prompt column backfill credits rate per record'. Opened Prompt columns and Specialized columns using code; they describe per-record results and per-execution credits but do not specify an exact queued-execution count per record. | Fix: Replace 'A backfill queues one execution per record in scope, so the spend scales with the table size and the filter' with 'A backfill runs the prompt over existing records in scope; review the record count and estimated credit consumption before running it.'
- [unsupported, major] Scope: Who and where; rationale: impact / behaviour: Makers use the option on prompt columns they own. | Found: Searched: 'prompt columns own', 'prompt columns backfill execution user identity security permissions owner'. Read Prompt columns and Specialized columns using code; neither establishes maker ownership of a prompt column. | Fix: Replace 'the option is used by makers on the prompt columns they own' with 'makers use the option from a prompt column panel'. In the impact rationale, replace 'Makers who own prompt columns notice it first' with 'Makers using prompt columns notice it first'.
- [contradicted, blocker] Governance controls: maker-side settings / behaviour: The Also generate values for Existing records in bulk checkbox starts the job. | Found: Review the number of records to process and the estimated credit consumption for the job, and save the column configuration. ... Select Run prompt when you're ready to queue the job. | Fix: Replace 'Maker-side, the column panel option Also generate values for Existing records in bulk starts the job' with 'Maker-side, select Also generate values for Existing records in bulk, review the record count and credit estimate, save the column configuration, and select Run prompt to queue the job'. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column
- [contradicted, blocker] rationale: cost / consistency: Every prompt execution consumes both AI Builder credits and Copilot Credits. | Found: Rationale: 'consume both AI Builder credits and Copilot Credits each time a prompt runs'. Learn and the body: 'show whether the execution consumed AI Builder credits or Copilot Credits.' | Fix: Replace the cost rationale with 'Variable. Prompt columns consume credits each time a prompt executes; the activity report shows whether an execution used AI Builder credits or Copilot Credits, so a bulk backfill can consume substantial credits.' | Source: https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Risk assessment: Autonomy & actions; Governance guidance / behaviour: With import review enabled, a solution-imported job pauses in System jobs and can be started manually after review. | Found: When enabled, an imported job pauses for review in System jobs and can be manually started after review. | Fix: Add: 'Microsoft's Specialized columns using code page still states that importing and exporting solutions with prompt columns is not supported, whereas the Prompt columns page documents imported jobs.' Cite https://learn.microsoft.com/power-apps/developer/data-platform/specialized-columns#prompt-columns. | Source: https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column
- [supported, minor] controls[2].note; Governance controls: third table row / default: Microsoft's AI Builder administration page says AI prompts is enabled by default. | Found: By default, the AI prompts feature is enabled for makers to create and experiment with various AI-generated content. | Fix: Retain the attributed administration-page default, but add: 'The Organization table reference lists DefaultValue False for AiPromptsEnabled; this differs from the administration page's enabled-by-default statement.' Cite https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/organization#BKMK_AiPromptsEnabled. | Source: https://learn.microsoft.com/ai-builder/administer
- [supported, minor] What's changing: historical execution behaviour / behaviour: The existing execution mechanism runs on record creation or a change to an input column, rather than automatically populating pre-existing records when the column is added. | Found: Prompt column values are populated when records are created and when the input column values are updated. When prompt columns are added to tables with records, the existing records' new prompt columns aren't populated automatically. | Fix: Cite https://learn.microsoft.com/power-apps/developer/data-platform/specialized-columns#prompt-columns for the historical execution behaviour; that supporting page is absent from sources. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/specialized-columns
- [supported, minor] Risk assessment: Data exposure / applicability: Access to the generated prompt column governs who can see its output, so its column security needs checking. | Found: When a calculated column or prompt column includes a column that is secured, data might be displayed in the calculated or prompt column to users that don't have permission to the secured column. Both the original column and the calculated or prompt column should be secured. | Fix: Cite https://learn.microsoft.com/power-platform/admin/field-level-security for the prompt-column visibility and security advice; the existing sources do not state this access-control premise. | Source: https://learn.microsoft.com/power-platform/admin/field-level-security
- [contradicted, minor] Governance guidance: Before rollout and After rollout / consistency: The governance checklist asks readers to check capacity and monitor System jobs and AI Builder activity, but those controls have no table rows. | Found: Checklist: 'Check the available AI credit capacity'; 'Monitor jobs in System jobs'; 'Review the Estimated consumption column'. The table contains only the bulk switch, import-review switch and AI prompts switch. | Fix: Remove the checklist bullets beginning 'Check the available AI credit capacity', 'Monitor jobs in System jobs' and 'Review the Estimated consumption column'. Keep the existing capacity and monitoring information in the body; these checklist controls lack table rows.
-->
