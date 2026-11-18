---
title: "Power Automate process mining: custom KPIs in the process intelligence experience"
slug: "power-automate-process-mining-create-and-visualize-custom-kpis-in-the-process-intelligence"
roadmapId: 576868
topic: "power-platform"
products: ["Power Automate"]
summary: "Makers can define their own formula-based KPIs in the process intelligence experience of Power Automate process mining. The roadmap says it is on automatically; no admin action is documented, but plan for ownership and licensing."
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
  model: "mixed"
  notes: "Process mining is licensed as part of Power Automate: Power Automate Premium (per user) adds capacity, and a tenant-wide Process Mining add-on extends it. No licence specific to custom KPIs is published."
audiences: ["power-platform-admin","maker","change-adoption"]
tags: ["power-automate","process-mining","process-intelligence","analytics","dataverse","security-roles"]
sources:
  - title: "Microsoft 365 Roadmap 576868"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576868"
    kind: "roadmap"
  - title: "Use KPI (key performance indicator) cards in the process intelligence experience"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-kpi-card"
    kind: "learn"
  - title: "Process intelligence experience overview"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-overview"
    kind: "learn"
  - title: "Manage tabs in the process intelligence experience"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-tab-management"
    kind: "learn"
  - title: "Overview of process mining and task mining in Power Automate"
    url: "https://learn.microsoft.com/power-automate/process-advisor-overview"
    kind: "learn"
  - title: "Security and privacy"
    url: "https://learn.microsoft.com/power-automate/process-advisor-security"
    kind: "learn"
  - title: "Share process mining processes"
    url: "https://learn.microsoft.com/power-automate/process-mining-share"
    kind: "learn"
  - title: "Basic examples"
    url: "https://learn.microsoft.com/power-automate/minit/custom-metrics-beginner-examples"
    kind: "learn"
  - title: "PM Inferred Task (msdyn_pminferredtask) table/entity reference (Microsoft Dataverse)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/msdyn_pminferredtask"
    kind: "learn"
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process","power-automate-process-mining-get-support-for-normalized-schema-import-for-data-ingestion","power-automate-process-mining-export-object-centric-process-mining-data-to-microsoft-fabri"]
controls:
  - governs: "Which user owns a process mining process"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Environments > environment > Settings > Users + permissions > Users > user > Reassign records"
      docs: "https://learn.microsoft.com/power-automate/process-mining-share"
    api:
      kind: "rest"
      call: "PATCH /msdyn_pminferredtasks(<msdyn_pminferredtaskid>) to update the ownerid property"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/msdyn_pminferredtask"
    note: "Existing control for process ownership, not a control over custom KPIs. Target user needs privileges on the process mining entities; Environment Maker is sufficient."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:09:59"
changes:
  - date: "2026-11-18"
    note: "First briefing for this item: roadmap shows custom KPIs in the process intelligence experience as Launched (target July CY2026); Learn has no page for the feature yet."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 56 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 49
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "bbb88b6fd9131e3294c513dbf68d77b8"
---

## What's changing

Power Automate process mining is adding custom KPIs to the process intelligence experience, the card-based dashboard that replaces the earlier process overview. The roadmap item says makers can build a metric with a formula editor, using case attributes, event data, timestamps, existing metrics and mathematical operations, then edit or delete it and reuse it in the experience's cards and filters.

The roadmap item says changes to a custom metric are reflected in every visualisation that uses it, and that custom metrics are evaluated against the process data and stay current with each data refresh. It describes the audience as "Enabled for admins/makers/marketers automatically".

The roadmap item shows status Launched, release phase General Availability, a target of July CY2026, the Web platform and Worldwide (Standard Multi-Tenant) only. Microsoft Learn does not yet describe this feature: the KPI card page the roadmap links to lists the metric types Frequency, Performance, Rework and Finance and does not mention custom metrics. Learn does document custom metrics for the Power Automate Process Mining desktop app, but Microsoft has not said that those pages describe this experience, so what follows about behaviour is the roadmap's description.

## Why it matters

For a service owner this is a change to who can define what counts as a measure of process performance. Custom KPIs let makers publish their own ratios, scores and cost figures next to the standard metrics, so two dashboards over the same process can show different numbers for similar-sounding measures. Agree naming and ownership early.

The roadmap says the capability is enabled automatically, and Microsoft Learn documents no admin switch for it at the time of writing (November 2026). If nobody acts, makers with access to a process can start using it, so communicate it to the people who own process mining dashboards rather than waiting for questions.

## Risk assessment

**Data exposure**
- A custom KPI is built from the process's own case attributes, event data and timestamps, according to the roadmap item. It does not add a data source, but a formula can surface an attribute (for example a cost or customer field) on a card that is wider-shared than the raw data. Review who is a co-owner or viewer of each process: Learn states that process mining currently doesn't support sharing for Microsoft Entra groups, so sharing is per person.
- The tab-management page lists a **Make public** option that shares a tab with other users. Learn does not say how this applies to cards that use custom KPIs; confirm in a test process.

**Security & identity**
- No new identity, permission or role is described. Learn states that the **Environment Maker** role can create, share and contribute to processes, while the **Process Mining User** role can only view created process reports. Microsoft has not said which role can define custom KPIs.

**Autonomy & actions**
- No autonomous action is described: the roadmap item covers defining, editing and displaying metrics.

**Change & support**
- The roadmap says edits to a metric flow into every visualisation that uses it, so one maker's change can alter figures other people rely on. Agree who may edit a shared KPI before it appears on executive tabs.
- Learn documents no separate guide for custom KPIs in this experience at the time of writing, so support teams have only the roadmap text and the KPI card page. Expect questions about formula syntax.

## Cost and licensing

Licence: Microsoft Learn states that "Process mining is licensed as part of Microsoft Power Automate." The licensing section of the process mining overview describes a Power Automate trial licence, the per-user Power Automate Premium licence, and a tenant-wide Process Mining add-on that is available for the Power Automate Premium licence. No licence specific to custom KPIs is published.

Meter: each Power Automate Premium licence adds 50 MB of process mining capacity to a tenant-wide pool up to a total of 100 GB, and the add-on extends that capacity. Learn does not say that creating or evaluating a custom KPI consumes capacity or any other meter; the roadmap says only that custom metrics are evaluated dynamically against process data. Treat any effect on capacity as not yet published.

Indirect costs: maker and analyst time to define and maintain formulas, and the support load described under Change & support. Process mining also needs a Power Platform environment with a Dataverse database, so Dataverse storage in that environment is a related cost.

## Scope

Audience: the roadmap item lists admins, makers and marketers, enabled automatically. The Learn overview says you need the **Environment Maker** role to create, share and contribute to processes, and that the **Process Mining User** role can only view created process reports. Whether either role can create custom KPIs is not stated.

Platform and cloud: the roadmap lists Web and Worldwide (Standard Multi-Tenant) only. Other clouds are not listed on the roadmap item; that is a record fact and not a statement that the feature is unavailable there.

Prerequisites: a Power Platform environment with a Dataverse database, and the licensing described above. Rollout mechanics beyond the roadmap's target of July CY2026 and status Launched are not published.

## Governance guidance

### Before rollout
- Tell makers and analysts who build process mining dashboards that custom KPIs can be defined in the process intelligence experience, and ask them to agree names for shared KPIs.
- Identify the owner of each process in your environments and agree who may edit a KPI that other tabs use, because the roadmap says edits flow into every visualisation using the metric.
- Confirm which licences your process mining users hold (Power Automate Premium or the Process Mining add-on) so that any capacity effect can be traced later.

### At rollout
- Rehearse a new KPI in a test process or on a duplicated tab before putting it on a tab you share; the tab menu offers **Duplicate tab**, which copies the tab with all its cards and layout.
- Check how **Make public** treats a tab that holds a custom KPI before using it, since Learn does not describe this.

### After rollout
- Reassign processes owned by people who leave, using the Dataverse owner update or the **Reassign records** action in the row below.
- Re-read the Learn pages for the process intelligence experience for a page on custom KPIs, and update your guidance when Microsoft publishes one.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which user owns a process mining process</strong><br><small>Environment</small><br><small class="controls__note">Existing control for process ownership, not a control over custom KPIs. Target user needs privileges on the process mining entities; Environment Maker is sufficient.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Environments › environment › Settings › Users + permissions › Users › user › Reassign records <a href="https://learn.microsoft.com/power-automate/process-mining-share" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>PATCH /msdyn_pminferredtasks(&lt;msdyn_pminferredtaskid&gt;) to update the ownerid property</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/reference/entities/msdyn_pminferredtask" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The control that Learn documents for process ownership is the environment's **Reassign records** action, with the Dataverse **Assign** operation as its API equivalent. Learn states that for a process mining process, giving the **Environment Maker** role to the target user is sufficient.

Microsoft Learn documents no switch that turns custom KPIs on or off, and no way to restrict who defines one, at the time of writing (November 2026). Access to process mining follows Dataverse security roles; the [Security and privacy](https://learn.microsoft.com/power-automate/process-advisor-security) page describes them, and sharing a process is described on the [Share process mining processes](https://learn.microsoft.com/power-automate/process-mining-share) page. Neither page mentions custom KPIs, so Microsoft has not confirmed that these controls apply to them.

## Open questions

- Which Microsoft Learn page will document creating custom KPIs in the process intelligence experience, and do the formula rules in the Process Mining desktop app custom metrics pages apply to it? Watch the process intelligence experience pages on Learn.
- Are custom KPIs stored per process, per view or per tab, and who can edit or delete a KPI that other makers' cards use?
- Do custom KPIs behave differently when a tab is made public or a process is shared with a viewer?
- Does evaluating custom KPIs count toward process mining capacity, and is any licence beyond Power Automate Premium needed? Watch the process mining licensing section on Learn.
- Will Microsoft publish an admin control to restrict who can define custom KPIs? Watch Message center and the Learn security page for process mining.

<!-- rationale
risk: Low. Custom KPIs are calculated from process data already imported into the process, and no new data source, connector or autonomous action is described in the roadmap item.
cost: Low. Process mining is licensed as part of Power Automate, and no separate price or meter for custom KPIs is published; the known cost is admin time and process mining capacity already in use.
impact: Medium. Makers and analysts who build process mining dashboards see a new formula editor and new metrics in their cards; other users are unaffected.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] What's changing / behaviour: The process intelligence experience replaces the earlier process overview. | Found: Searched: "process intelligence" "replaces" "overview". Opened process-mining-studio-overview; it says the experience enhances the previous overview, not that it replaces it. | Fix: Replace 'the card-based dashboard that replaces the earlier process overview' with 'a card-based dashboard that enhances the previous process overview'.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Custom KPIs do not add a data source. | Found: Searched: "process intelligence" "custom metrics" security roles admin switch data source. Opened studio overview and KPI card pages; neither states that custom KPIs cannot add a source. The record describes existing process data, not an exhaustive source restriction. | Fix: Replace 'It does not add a data source, but a formula can surface an attribute' with 'The roadmap describes calculations over existing process data; a formula could surface an attribute'. Keep the wider-sharing scenario explicitly as risk analysis.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The cited sharing page gives Environments > environment > Settings > Users + permissions > Users > user > Reassign records. | Found: Sign in to Power Platform admin center. Select the environment where the process is located. On the command bar, select Settings. Under Users + permissions, select Users. | Fix: Replace the path in front matter and the table with 'environment > Settings > Users + permissions > Users > user > Reassign records'. The cited page starts at the linked admin center environment list and does not specify an Environments navigation step. | Source: https://learn.microsoft.com/power-automate/process-mining-share
- [contradicted, blocker] Governance controls: final paragraph / applicability: Because security and sharing pages do not mention custom KPIs, Microsoft has not confirmed that these controls apply to them. | Found: The process mining capability relies on environment security and Microsoft Dataverse security roles and privileges to grant access to its features in Power Automate. | Fix: Replace the final sentence with 'Process mining access is governed by environment security and Dataverse roles and privileges; Microsoft has not documented a permission specifically for creating or editing custom KPIs.' Keep the narrower uncertainty about custom-KPI behavior on shared tabs. | Source: https://learn.microsoft.com/power-automate/process-advisor-security
- [contradicted, blocker] Governance guidance: Before rollout / licensing: Process mining users can hold either Power Automate Premium or the Process Mining add-on. | Found: The Process Mining add-on is a tenant-wide license that's available for the Power Automate Premium license. ... An extra 100 GB of process mining capacity to the capacity pool, which users with the Power Automate Premium license can use. | Fix: Replace the licence-check bullet with 'Confirm which users hold Power Automate Premium and whether the tenant has the Process Mining add-on so that any capacity effect can be traced later.' The add-on is tenant-wide additional capacity, not an alternative user licence. | Source: https://learn.microsoft.com/power-automate/process-advisor-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] rationale: impact / consistency: Other users are unaffected even though metric edits can alter figures those users rely on. | Found: impact: ... other users are unaffected. / Change & support: ... one maker's change can alter figures other people rely on. | Fix: Remove '; other users are unaffected' from the impact rationale. Keep the medium impact rating and the supported description of makers and analysts seeing the editor and metrics.
- [supported, minor] controls[0].note; Governance guidance: After rollout / admin-path: Reassign records can be used to transfer ownership after an employee leaves. | Found: In the Assign to field, use the dropdown menu to assign all the records to either the administrator or another user. | Fix: Append to the control note and the After rollout reassignment instruction: 'Reassign records transfers all of the selected user's records, not just one process.' The current wording omits this important scope qualification. | Source: https://learn.microsoft.com/power-automate/process-mining-share
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist tells readers to check Make public, but that control has no row in the controls table. | Found: Check how Make public treats a tab that holds a custom KPI before using it / The controls table contains only Which user owns a process mining process. | Fix: The At rollout step 'Check how Make public treats a tab that holds a custom KPI before using it' has no corresponding control row. Remove this duplicate checklist bullet; the same test advice already appears under Risk assessment: Data exposure.
-->
