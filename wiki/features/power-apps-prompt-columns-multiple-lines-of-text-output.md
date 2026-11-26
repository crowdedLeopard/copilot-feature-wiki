---
title: "Power Apps: prompt columns can store multiple lines of text output"
slug: "power-apps-prompt-columns-multiple-lines-of-text-output"
roadmapId: 573279
topic: "power-platform"
products: ["Power Apps","Microsoft Dataverse"]
summary: "Prompt columns in Dataverse tables are planned to store multi-line AI output (target November CY2026). Makers and table owners are affected; the default is not stated and no new admin switch is documented."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "consumption"
  notes: "Learn says prompt columns use the same licensing model as AI Builder prompts, whose prerequisites list Copilot Credits. AI Builder features in apps and flows first consume AI Builder credits, then Copilot Credits. Nothing specific to multi-line output is published."
audiences: ["power-platform-admin","maker","finops"]
tags: ["prompt-columns","dataverse","power-apps","ai","copilot-credits","usage-based-billing","gcc","gcc-high"]
sources:
  - title: "Microsoft 365 Roadmap 573279"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573279"
    kind: "roadmap"
  - title: "Prompt columns"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column"
    kind: "learn"
  - title: "Overview of prompts"
    url: "https://learn.microsoft.com/ai-builder/prompts-overview"
    kind: "learn"
  - title: "Administer AI Builder"
    url: "https://learn.microsoft.com/ai-builder/administer"
    kind: "learn"
  - title: "Manage feature settings"
    url: "https://learn.microsoft.com/power-platform/admin/settings-features"
    kind: "learn"
  - title: "Prompt tokens"
    url: "https://learn.microsoft.com/ai-builder/licensing-prompt-tokens"
    kind: "learn"
  - title: "Overview of licensing"
    url: "https://learn.microsoft.com/ai-builder/administer-licensing"
    kind: "learn"
  - title: "organization EntityType"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization?view=dataverse-latest"
    kind: "learn"
videos: []
related: ["copilot-credits"]
controls:
  - governs: "Whether AI prompts, and so prompt columns, can run in an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Features > AI Builder > AI prompts"
      docs: "https://learn.microsoft.com/ai-builder/administer"
    api:
      kind: "rest"
      call: "PATCH /api/data/v9.2/organizations(<organizationid>)"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization?view=dataverse-latest"
    note: "System Administrator role or equivalent. An environment group rule named AI prompts sets the same control for a group; once published it locks the environment setting. The request body sets aipromptsenabled to true or false."
  - governs: "Whether a single prompt column runs AI generation"
    scope: "other"
    ui:
      surface: "Power Apps (maker)"
      path: "Tables > table > Columns > column > Edit column > Allow prompt column execution"
      docs: "https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column"
    api: null
    note: "Maker-side, per column. Enabled by default per Learn; when cleared, AI analysis isn't performed for that column."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: roadmap target November CY2026; prompt column controls, credits and open questions documented from Learn."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: cost now says prompt-run cost depends on input tokens, output tokens and model version; credit wording clarified; Edit column added to the column path; monitoring steps moved out of the checklist."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: the environment AI prompts setting now lists its Dataverse Web API call (PATCH on the organization table, aipromptsenabled); the API open question now covers only the column-level setting."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 69 statements confirmed"
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 68
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "485534b55294a3ecaf00a98b65eb6730"
---

## What's changing

The roadmap item states that prompt columns can store multiple lines of text as prompt output, so longer and more detailed AI-generated text can be kept in Dataverse tables. It is listed for Power Apps and Microsoft Dataverse on the web.

A prompt column is a Dataverse data type that holds the result of a natural language prompt tied to other columns in the table. Learn says the prompt runs when a record is created or when one or more of the columns the prompt references is updated. At the time of writing (November 2026), the Learn page for prompt columns does not describe multi-line output, so everything beyond the roadmap description below is how prompt columns behave in general. How multi-line output is chosen, whether existing prompt columns are affected and any length limit are not yet documented.

The roadmap record gives the status as In development, with a target of November CY2026 and the release phase General Availability. It lists Worldwide (Standard Multi-Tenant), GCC and GCC High, and the Web platform. The record gives no preview date, and its date is a target, not a commitment.

## Why it matters

This change is mainly about data and spend, not a new switch. Prompt columns write AI-generated text into table rows, and the roadmap item says that text can now be longer and more detailed. Longer generated text in a table means more content for anyone with read access to that column to see, and the credits for each run are still charged to the environment's AI consumption.

Microsoft has not stated what happens on arrival, so the default is not stated. No source says existing prompt columns change behaviour, so treat this as something to review with makers rather than an event you must prepare for. Re-check the Learn page for prompt columns when the target month arrives.

## Risk assessment

**Data exposure**
- Learn says a prompt column holds generative AI results stored in the table persistently, so multi-line output becomes ordinary table data. Review who can read tables that carry prompt columns before makers adopt longer output.
- Learn lists missing permission on an input column as one cause of a prompt column failing to generate, so input-column permissions are a documented factor in what a prompt can read.

**Security & identity**
- No change described: the roadmap item mentions no new connector, identity or permission.

**Autonomy & actions**
- A prompt column runs on its own when a record is created or a referenced column is updated, and Learn states on-demand execution is not currently supported. Learn's prompts overview advises that a human should review generated content before it is used for a business decision, so keep that review step for longer output.

**Change & support**
- Learn states that prompt columns aren't audited, so changes in generated text leave no audit trail from that source.
- Each prompt column gets Status and Details columns that record execution status and failure details; use them when a longer output fails to appear.

## Cost and licensing

Learn's prompt columns page says prompt columns use the same licensing model as AI Builder prompts. The prompts overview page lists Copilot Credits as a prerequisite, a Dataverse installation on the environment, and an environment in an available region.

The meter is credits: Learn says prompt columns support AI Builder credits and Copilot Credits, and notes that AI Builder credits are retiring soon. Learn's AI Builder licensing page says AI Builder features in apps and flows first try to consume AI Builder credits, then Copilot Credits if AI Builder credits are absent or exhausted. Consumption is charged every time a prompt runs; testing a prompt in the designer is free. Learn's prompt columns page points to the **AI Builder activity** report in the Automation center of Power Automate, whose Estimated consumption column shows credits per prompt execution. Filter conditions on a prompt column reduce unnecessary executions, which Learn says helps optimise credit consumption.

Prompt-run cost depends on input tokens, output tokens and the model version; longer generated output can therefore increase consumption. See [Copilot Credits](/concepts/copilot-credits/) for the shared meter.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC and GCC High, the Web platform and the release phase General Availability, with a November CY2026 target. Rollout mechanics are not stated.

Prerequisites come from the prompt columns page: the Copilot and AI Prompts features must be on in the environment's Features settings, and a table can hold up to five prompt columns. The same page says the **Block unmanaged customizations** environment setting must be disabled to create or edit prompt columns. The prompts overview page lists an available region and Dataverse on the environment. Learn says the AI prompts feature is enabled by default, and changing the setting needs the System Administrator security role or equivalent permissions.

## Governance guidance

### Before rollout
- List the tables in your environments that already have Prompt data-type columns and ask their makers whether they plan to use multi-line output.
- Check the AI prompts setting for each environment that holds prompt columns, using the first row of the controls table, and confirm the result matches your intent.
- Agree with makers that generated text is reviewed by a person before it feeds a business decision, as Learn's prompts overview advises.

### At rollout
- Ask makers to run the prompt designer's Test option, which Learn says is free, on a few records before saving a prompt that produces longer output.
- Set the column-level Allow prompt column execution control (second row of the controls table) off for any prompt column that should not run yet.

### After rollout
- Re-read the Learn page for prompt columns for multi-line output details and check Message center for a notice.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether AI prompts, and so prompt columns, can run in an environment</strong><br><small>Environment</small><br><small class="controls__note">System Administrator role or equivalent. An environment group rule named AI prompts sets the same control for a group; once published it locks the environment setting. The request body sets aipromptsenabled to true or false.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Features › AI Builder › AI prompts <a href="https://learn.microsoft.com/ai-builder/administer" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /api/data/v9.2/organizations(&lt;organizationid&gt;)</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/organization?view=dataverse-latest" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a single prompt column runs AI generation</strong><br><small class="controls__note">Maker-side, per column. Enabled by default per Learn; when cleared, AI analysis isn't performed for that column.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Tables › table › Columns › column › Edit column › Allow prompt column execution <a href="https://learn.microsoft.com/power-apps/maker/data-platform/prompt-column" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn says that for prompts to be executed, both tenant level and column level settings need to be enabled; its prerequisites also name the environment's Copilot and AI Prompts features. Learn does not tie either control to multi-line output, so treat both as the general prompt column controls.

If the environment is in an environment group, Learn says a published AI prompts group rule locks the setting at environment level, so change it in the group rule. Learn states prompt columns aren't audited, and no audit control is listed here.

For monitoring, add the Status and Details columns for each prompt column to a view so failures are visible, and review the AI Builder activity report in Power Automate's Automation center for credit use by prompt column executions.

## Open questions

- How is multi-line output chosen for a prompt column, and does it change existing prompt columns? Watch the prompt columns page on Learn and Message center.
- Is there a length limit on stored multi-line output?
- What happens on arrival: is multi-line output on by default or chosen by makers? The default is not stated.
- Will Microsoft document an API or command for the Allow prompt column execution setting?

<!-- rationale
risk: Low. The roadmap item describes only a change to the text a prompt column can hold, and the existing AI prompts and column settings still govern prompt columns; Learn says prompt columns aren't audited.
cost: Variable. Prompt columns support AI Builder credits and Copilot Credits each time a prompt runs; prompt-run cost depends on input tokens, output tokens and the model version.
impact: Low. Only makers who define prompt columns and people who read the tables that hold them are in scope; the roadmap item lists the web platform only.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls: first row / admin-path: The environment control is at Power Platform admin center > Manage > Environments > environment > Settings > Product > Features > AI Builder > AI prompts. | Found: select Environments > [select an environment] > Settings > Product > Features. On the Features settings page under AI Builder, enable or disable the AI prompts toggle. | Fix: Append to controls[0].note: 'Administer AI Builder places this toggle under AI Builder; Manage feature settings lists it under AI prompts (https://learn.microsoft.com/power-platform/admin/settings-features#ai-prompts).' Manage feature settings also supports the initial Manage > Environments steps; retain the existing path. | Source: https://learn.microsoft.com/ai-builder/administer
-->
