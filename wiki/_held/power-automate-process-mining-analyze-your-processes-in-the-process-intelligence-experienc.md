---
title: "Power Automate process mining: tabs and customisable layouts in the process intelligence experience"
slug: "power-automate-process-mining-analyze-your-processes-in-the-process-intelligence-experienc"
roadmapId: 576869
topic: "power-platform"
products: ["Power Automate"]
summary: "Power Automate process mining gets a tabbed, card-based analysis workspace that replaces the fixed process overview. It is on automatically for admins and makers; plan communication and sharing, as no admin switch is documented."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Microsoft Learn says process mining is licensed as part of Power Automate: a per-user Power Automate Premium licence adds process mining capacity, and a tenant-wide Process Mining add-on adds more. No separate licence for this experience is published."
audiences: ["power-platform-admin","maker","change-adoption","finops"]
tags: ["power-automate","process-mining","process-intelligence","analytics","power-platform","dataverse","security-roles","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 576869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576869"
    kind: "roadmap"
  - title: "Manage tabs in the process intelligence experience"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-tab-management"
    kind: "learn"
  - title: "Process intelligence experience overview"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-overview"
    kind: "learn"
  - title: "Customize layouts in the process intelligence experience"
    url: "https://learn.microsoft.com/power-automate/process-mining-studio-dynamic-layout"
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
videos: []
related: ["power-automate-process-mining-enable-process-intelligence-studio-in-object-centric-process","power-automate-process-mining-export-object-centric-process-mining-data-to-microsoft-fabri","power-automate-process-mining-get-support-for-normalized-schema-import-for-data-ingestion"]
controls:
  - governs: "Switch to turn the process intelligence experience on or off, or to limit tab sharing"
    scope: "environment"
    ui: null
    api: null
    note: "Microsoft Learn documents no such control at the time of writing (November 2026). Access follows Dataverse security roles (Environment maker, Process Mining User) per the Security and privacy page."
  - governs: "Owner of a departed user's process mining records"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "environment > Settings > Users + permissions > Users > user > Reassign records"
      docs: "https://learn.microsoft.com/power-automate/process-mining-share"
    api: null
    note: "The Learn page says a co-owner does not automatically become the process owner when the owner's account is disabled."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:10:00"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 576869: tabs and customisable card layouts in the process mining process intelligence experience."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 75 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected after verification: reassign-records path now matches the Learn page, the unsupported API call and tab-ownership claim were removed, and the desktop-app wording was narrowed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 82 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-18"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 80
  unconfirmed: 0
  contradicted: 2
  attempts: 2
  hash: "ef32515fa4d4d172c77cbb19bae64263"
---

## What's changing

Power Automate process mining has a new analysis interface, the process intelligence experience. Instead of one fixed process overview, each process view gets a set of tabs, and each tab holds cards (visualisations) that users arrange, resize and configure themselves. Microsoft Learn describes it as the next-generation interface for process analysis in Power Automate Process Mining and says it enhances the previous process overview.

On the Learn pages, a tab is created with the (+) button or the **Edit tabs** menu and can be renamed, duplicated, deleted, moved or made public. **Edit layout** opens a mode where cards are added from an **Add card** panel (KPI, Donut chart, Process map, Vertical bar chart, Horizontal bar chart, Line chart, Statistical grid and Variant DNA), then moved and resized on a grid. Filters set on a tab apply to all its cards, and persistent filters are saved with the tab layout. Process views are defined in the Process Mining desktop application, and each view has its own set of tabs.

The roadmap item lists the feature as Launched, with General Availability and Preview release phases, a preview date of March CY2026 and a target date of June CY2026. It is listed for Worldwide (Standard Multi-Tenant) on the web, and the roadmap says it is "enabled for admins/makers/marketers automatically". The tab page links to the layout page with the label "(preview)"; Microsoft does not say which cards or functions are still preview.

## Why it matters

For a service owner, the main change is the user experience of every process already in process mining: the previous fixed overview gives way to analysis workspaces that people build and share themselves. Expect questions from process owners and analysts, and expect inconsistent dashboards unless someone sets conventions for tab names, persistent filters and which tabs are made public.

Because the roadmap says it is enabled automatically, waiting does not stop it arriving; the preparation is communication and agreeing who may share what. Microsoft Learn documents no admin setting that turns this experience off, so the practical controls are the Dataverse security roles that already decide who can use process mining.

## Risk assessment

**Data exposure**

- A tab marked **Make public** is shared with other users, and the overview page says tabs or whole dashboard configurations can be shared with team members. Microsoft Learn does not say who can see a public tab beyond that, so confirm in a test environment whether a public tab shows data to a user who has no access to the process.
- Persistent filters are saved with the tab layout and cannot be removed when someone views the tab, so a tab can quietly restrict or narrow what its viewers see. Treat them as a presentation choice, not as a security boundary.

**Security & identity**

- Access follows Dataverse security roles. Per Microsoft Learn, the Environment Maker role can create, share and contribute to processes, and the Process Mining User role can only view created process reports. Do not assign the internal Process Mining Application role or change the privileges of the Process Mining User or Process Mining Application roles.
- If you use Conditional Access to limit Power Automate, Microsoft Learn says conditional access to only Power Automate is not enough; Power Apps and Power Automate must both be in the policy's Cloud apps.

**Autonomy & actions**

- No change documented: the pages describe an analysis and visualisation interface and describe no actions taken on tenant data.

**Change & support**

- Existing users move to a different layout from the previous process overview, so help-desk and training material that shows the old screen needs updating.
- When a process owner's account is disabled, a process co-owner does not automatically become the process owner. Plan record reassignment (see the controls table).

## Cost and licensing

Microsoft Learn's process mining overview says process mining is licensed as part of Microsoft Power Automate. A Power Automate Premium licence is per user and adds 50 MB of process mining capacity to a tenant-wide pool up to a total of 100 GB; beyond that, the tenant-wide Process Mining add-on adds a further 100 GB. A 90-day trial gives limited capacity of 100 MB per process. The page names a Power BI Premium licence for customising the report in your own Power BI workspace.

No meter or price specific to the process intelligence experience is published at the time of writing (November 2026), and the pages on tabs, layouts and the overview name no licence. The overview page says the process data mostly uses Dataverse file capacity, and that you might run out of Dataverse storage if you import a lot of data; more cards and tabs are not described as consuming capacity. Confirm that point before assuming it.

Sources: Overview of process mining and task mining in Power Automate (Licensing section).

## Scope

The roadmap item lists Power Automate on the web for Worldwide (Standard Multi-Tenant); no other cloud is listed, which is a record fact and not a statement that it is unavailable elsewhere. It is described as enabled for admins, makers and marketers automatically.

Prerequisites on Microsoft Learn for process mining are the licences or trials, a Power Platform environment with a Dataverse database, and suitable roles: the Environment Maker role to create, share and contribute to processes. Administrators and system customizers can access all processes created in the environment. Process views can be defined in the Process Mining desktop application; a default view is provided automatically after process creation.

## Governance guidance

### Before rollout

- Tell process owners and analysts that the process overview is moving to tabs and cards, and point them at the Learn pages on tabs and layouts.
- List who holds the Environment maker, Process Mining User and administrator roles in each environment that holds process mining data.
- Check that any Conditional Access policy for Power Automate also covers Power Apps in its Cloud apps, as Microsoft Learn requires.
- Agree a naming convention for tabs and when a tab may be made public.

### At rollout

- Test with a pilot process owner: create a tab, add cards, set a persistent filter, mark a tab public, and confirm what a second user with the Process Mining User role can see.
- Tell makers that Edit layout changes are saved to the tab and that persistent filters cannot be removed in the viewing mode.

### After rollout

- Review public tabs on key processes periodically and ask owners to remove those no longer needed.
- Reassign the records of departing process owners using Power Platform admin center > environment > Settings > Users + permissions > Users > user > Reassign records, because a co-owner does not take over automatically.
- Watch Dataverse file capacity as processes grow, using the licensing page for the capacity pool figures.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch to turn the process intelligence experience on or off, or to limit tab sharing</strong><br><small>Environment</small><br><small class="controls__note">Microsoft Learn documents no such control at the time of writing (November 2026). Access follows Dataverse security roles (Environment maker, Process Mining User) per the Security and privacy page.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Owner of a departed user's process mining records</strong><br><small>Environment</small><br><small class="controls__note">The Learn page says a co-owner does not automatically become the process owner when the owner's account is disabled.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>environment › Settings › Users + permissions › Users › user › Reassign records <a href="https://learn.microsoft.com/power-automate/process-mining-share" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No admin setting for switching the process intelligence experience on or off, or for restricting tab sharing, is documented at the time of writing (November 2026). Access is governed by the Dataverse security roles that already apply to process mining, so the roles, not this feature, are the lever. The Learn security page notes some privileges are set by default in Dataverse so that built-in roles can use process mining without further action.

The reassign-records path in the table is the documented route for assigning a new owner to a leaving employee's Dataverse records for a process mining process. Required role for the admin steps: the Learn page does not state one for this path.

## Open questions

- Which cards and functions in the process intelligence experience remain in preview, given the roadmap lists both General Availability and Preview and the tab page labels the layout page "(preview)"? Watch the Learn layout page and the roadmap item.
- Who can see a tab that has been made public, and does it respect a viewer's access to the underlying process? Watch the Learn tab management page.
- Does the new experience change process mining capacity or Dataverse storage consumption, and is any licence needed beyond the existing process mining licensing? Watch the Learn process mining overview.
- Will Microsoft add an admin setting to turn the experience off or restrict tab sharing? Watch Message center and the Power Platform admin center release notes.

<!-- rationale
risk: Low. It is a new analysis interface over process data that makers and admins can already reach; Microsoft documents no new data source, and sharing is a per-tab choice by the person building it.
cost: Low. The pages tie only admin and training time to this experience; process mining itself is licensed under Power Automate, and no separate price for the new experience is published.
impact: Medium. The roadmap says it is enabled automatically for admins and makers, so process owners and analysts who use process mining will see a different interface from the previous process overview.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].api; Governance controls: API and automation cell / absence: Automation for reassigning a departed user's Dataverse records is not yet documented. | Found: Reassigns all records that are owned by a specified user to another security principal (user, team, or organization). | Fix: Remove controls[1] and its generated table row rather than printing an incorrect API absence; retain the verified UI reassignment instructions in prose. In Governance controls add: 'Microsoft also documents the Dataverse ReassignObjectsSystemUser action for reassigning all records owned by a specified user.' Cite https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/reassignobjectssystemuser. This is a general Dataverse operation, not a process-only transfer. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/webapi/reference/reassignobjectssystemuser
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: trial duration / licensing: The cited overview describes a 90-day Power Automate trial. | Found: For a limited time of 90 days, the Power Automate trial license offers: | Fix: Replace 'A 90-day trial gives limited capacity of 100 MB per process' with 'The process mining overview describes a 90-day Power Automate trial with 100 MB per process; the Power Platform licensing FAQ instead describes a free 30-day Process Mining trial included in the Power Automate trial.' Cite https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq#power-automate for the second statement. | Source: https://learn.microsoft.com/power-automate/process-advisor-overview
- [supported, minor] Cost and licensing: Power BI / licensing: The overview names Power BI Premium for report customization in the user's own Power BI workspace. | Found: To customize your report, you need to link the process to your own Power BI workspace, and a **Power BI Premium** license. | Fix: After this sentence add: 'The Power Platform licensing FAQ instead says further customization and analysis may require Power BI Pro, Power BI per user or Power BI premium capacity licences, and that Power BI licences are not included in Power Automate Process Mining.' Cite https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq#power-automate. | Source: https://learn.microsoft.com/power-automate/process-advisor-overview
- [contradicted, minor] Governance guidance compared with Governance controls / consistency: The checklist names security-role review, Conditional Access, public-tab management and capacity monitoring without corresponding control rows. | Found: Checklist: 'List who holds the Environment maker, Process Mining User and administrator roles'; 'Check that any Conditional Access policy'; 'Review public tabs'; 'Watch Dataverse file capacity'. Table: only a missing feature switch and departed-owner reassignment. | Fix: The role-inventory, Conditional Access, public-tab review and Dataverse-capacity checklist steps have no corresponding controls-table rows. Remove these checklist bullets to restore table/checklist parity without adding unverified control rows; their documented factual background can remain in the body.
-->
