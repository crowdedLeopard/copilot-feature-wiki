---
title: "Power Automate: export work queue items to CSV from the automation center"
slug: "power-automate-desktop-flows-export-work-queue-items-to-csv"
roadmapId: 577791
topic: "power-platform"
products: ["Power Automate"]
summary: "Launched: the automation center now offers a download of work queue items as a CSV file. The roadmap says it is on automatically for admins and makers; Microsoft Learn documents no switch for it yet."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published for the export itself. Microsoft Learn says work queue data in the automation center requires a Power Automate Premium licence, and lists a Premium licence as a prerequisite for work queues."
audiences: ["power-platform-admin","maker","security","service-owner"]
tags: ["power-automate","desktop-flows","data-export","security-roles","dataverse","monitoring","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 577791"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577791"
    kind: "roadmap"
  - title: "Explore Power Automate's automation center"
    url: "https://learn.microsoft.com/power-automate/automation-center-overview"
    kind: "learn"
  - title: "Work queues overview"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/work-queues"
    kind: "learn"
  - title: "Manage work queues"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/work-queues-manage"
    kind: "learn"
  - title: "Known limitations for work queues"
    url: "https://learn.microsoft.com/power-automate/desktop-flows/work-queues-known-limitations"
    kind: "learn"
  - title: "Assign a security role to a user"
    url: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    kind: "learn"
  - title: "Which users can read work queue items (Dataverse security roles) (REST API)"
    url: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    kind: "learn"
  - title: "Requests limits and allocations"
    url: "https://learn.microsoft.com/power-platform/admin/api-request-limits-allocations"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which users can read work queue items (Dataverse security roles)"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Users + permissions > Users > user > Manage security roles"
      docs: "https://learn.microsoft.com/power-platform/admin/assign-security-roles"
    api:
      kind: "rest"
      call: "POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref with body {\"@odata.id\":\"[Organization URI]/api/data/v9.0/roles(<role ID>)\"}"
      docs: "https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team"
    note: "General control: Microsoft has not confirmed it applies to the CSV export. The API page shows the call for a Microsoft Entra ID group user."
  - governs: "Switch to turn the work queue CSV export on or off"
    scope: "environment"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-22T23:45:44"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: documents the roadmap's CSV export for work queue items and the Dataverse security roles that govern access to the data."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: removed an unsupported claim about Dataverse controls after download, stated that Dataverse request limits cover read operations, and changed action to act-now."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 58
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "8fb1da596c13df3a204b5f3a56792d7e"
---

## What's changing

Power Automate's automation center now has an option, in its work queues experience, to download work queue items as a CSV file. The roadmap item describes it as a way to take work queue data into other tools for analysis and reporting without relying on external APIs or custom solutions.

The roadmap states that the feature is enabled automatically for admins and makers. Microsoft Learn does not describe the export at the time of writing (November 2026): the automation center page describes an **Items** tab that lists individual work queue items with their status, priority, enqueue date, completion date and assigned processors, but mentions no export, and neither does the Manage work queues page. What this briefing says about the export's behaviour is therefore the roadmap's description.

The roadmap record shows the item as Launched, with a target date of July CY2026, release phase General Availability, on the web, in Worldwide, GCC, GCC High and DoD.

## Why it matters

A work queue holds the items that automations and people process, so an export turns that operational data into a file that can be saved, emailed or opened in a spreadsheet. The roadmap says the feature is on automatically for admins and makers, so people who can already see work queue items in the automation center are the likely first users; an administrator who does nothing should expect them to start downloading.

The wiki's view is that the useful decision is who should be able to read work queue items at all, because Microsoft documents that access to the automation center's data is controlled through Dataverse security roles, and documents no separate control for the export.

## Risk assessment

**Data exposure**
- The New work queue item panel on Microsoft Learn includes an **Input** value and **Processing notes**, so items can carry business data. Microsoft has not said which columns the CSV contains. Agree where downloaded CSV files should be stored and who should be allowed to receive them.

**Security & identity**
- The automation center page says its underlying data is secured through role-based access control, and that in standard Dataverse environments the necessary privileges are included in the default environment maker role. In the Default environment with a Dataverse database, all users automatically become environment makers. Microsoft has not confirmed that the export applies these privileges, so confirm this before relying on security roles to limit what can be downloaded.

**Autonomy & actions**
- No change documented: the roadmap describes the export as an option that lets you download items. No Microsoft page describes an automated or scheduled export.

**Change & support**
- No tenant or environment setting for the export is documented, so the control available today is who holds a role with access to the work queue tables. Expect questions from makers about where downloaded files should be kept.

## Cost and licensing

No licence or meter is published for the export itself. Microsoft Learn says data under the automation center **Work queues** tab is a premium feature that requires a Power Automate Premium licence, and the Work queues overview lists a Premium Power Automate licence and the Environment maker role (or other roles that include access to work queue tables) as prerequisites.

The roadmap item states no licence for the export. The indirect costs are administrator time to review who has access and the effort of handling exported files. Dataverse request limits cover read operations, including user-driven and internal requests from any client; Microsoft has not published the request count for a CSV download. The known limitations page says work queues are based on Dataverse, so the same service protection and API limits apply to work queues in general.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web, and says the feature is enabled automatically for admins and makers. Microsoft Learn says the **Work Queue** tab isn't available in Dataverse for Teams environments, so the export has nothing to act on there.

Users need access to the work queue tables: the Work queues overview lists the Environment maker role (or other roles that include access to work queue tables) as a prerequisite. Rollout mechanics beyond the roadmap's target date are not documented.

## Governance guidance

### Before rollout
- Identify which environments hold work queues and who holds a role with access to the Work Queue and Work Queue Item tables, using the security roles control in the table below.
- Check whether the Default environment hosts work queues, because every user there automatically becomes an environment maker.
- Ask makers and operators which work queue fields hold personal or confidential data, so you know what a CSV could contain.

### At rollout
- Tell work queue users that the export is available and where downloaded files should be stored.
- Test the export with a user who has a narrow custom security role and record what that user can download, since Microsoft has not said whether the export follows security roles.

### After rollout
- Review role assignments on the work queue tables at the cadence you use for other Dataverse data.
- Watch the automation center and Manage work queues pages on Microsoft Learn for documentation of the export, its columns and any admin control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users can read work queue items (Dataverse security roles)</strong><br><small>Environment</small><br><small class="controls__note">General control: Microsoft has not confirmed it applies to the CSV export. The API page shows the call for a Microsoft Entra ID group user.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Users + permissions › Users › user › Manage security roles <a href="https://learn.microsoft.com/power-platform/admin/assign-security-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=&lt;user object ID&gt;)/systemuserroles_association/$ref with body {&quot;@odata.id&quot;:&quot;[Organization URI]/api/data/v9.0/roles(&lt;role ID&gt;)&quot;}</code> <a href="https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch to turn the work queue CSV export on or off</strong><br><small>Environment</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Access to work queue data in the automation center is controlled through Dataverse security roles; assigning them needs a role with Read and Assign privileges on the Security Role table, which the System Administrator role has by default. This is a general control: Microsoft Learn documents it for the automation center's data and for limiting work queue use in API-based scenarios, but no page confirms that it applies to the CSV export.

The second row states a gap: Microsoft Learn documents no setting that turns the export on or off. Until one is documented, removing access to the work queue tables is the documented way to limit who sees work queue items.

## Open questions

- Does the export apply the Dataverse security roles of the person downloading it? Watch the automation center page on Microsoft Learn.
- Which columns and how many rows does the CSV contain, and does it include item Input and Processing notes?
- Will Microsoft provide an administrator setting to turn the export off, in the Power Platform admin center or elsewhere?
- Is the download recorded in an audit log, and is any separate licence or limit attached to the export?

<!-- rationale
risk: Medium. Work queue items can hold business data in free-text fields, and the export puts a copy in a file outside Dataverse; Microsoft has not said whether the export follows the Dataverse security roles that protect the data.
cost: Low. No separate licence or meter for the export is published; work queue data in the automation center already requires a Power Automate Premium licence, so the visible cost is admin time.
impact: Medium. Makers, operators and analysts who use work queues in the automation center will see the new option; administrators who do not use work queues will not notice it.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; Governance guidance: At rollout; Governance controls; rationale: risk / absence: Microsoft has not confirmed that Dataverse security roles govern the work queue data downloaded by the CSV export. | Found: The automation center's underlying data is managed through Dataverse tables, secured through role-based access control (RBAC). | Fix: Replace the prose caveats that security roles may not apply to exported work queue data with 'The automation center's underlying work queue data is secured through Dataverse role-based access control.' In At rollout, use 'Test the export with a user who has a narrow custom security role and record what that user can download.' In the risk rationale, remove the clause beginning 'Microsoft has not said whether'. Remove the corresponding Open question about whether the person's Dataverse roles apply. Source: https://learn.microsoft.com/power-automate/automation-center-overview#required-permissions. | Source: https://learn.microsoft.com/power-automate/automation-center-overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance controls: first row note / applicability: The correctly documented security roles control is presented as a general control not confirmed for the CSV export. | Found: The automation center's underlying data is managed through Dataverse tables, secured through role-based access control (RBAC). | Fix: Replace 'General control: Microsoft has not confirmed it applies to the CSV export.' in the row note with 'Controls access to the automation center's underlying Dataverse data.' The control's published reach includes the work queue data; retain the note about the API's Microsoft Entra ID group user example. | Source: https://learn.microsoft.com/power-automate/automation-center-overview
- [supported, minor] front matter: licensing.model / licensing: The licensing model is unknown despite the published Power Automate Premium requirement for work queue data. | Found: Data under the Work queues tab is a premium feature, which requires a Power Automate Premium license. | Fix: Set licensing.model to 'included'. Replace the opening sentence of licensing.notes with 'Work queue data in the automation center requires a Power Automate Premium licence; Microsoft has not published a licence specific to the CSV export.' Retain the documented work queue prerequisite. Source: https://learn.microsoft.com/power-automate/automation-center-overview#data-and-visualization-strategy. | Source: https://learn.microsoft.com/power-automate/automation-center-overview
- [supported, minor] controls[0].api; Governance controls: first row API and automation / command: The printed v9.0 POST systemuserroles_association/$ref call with an @odata.id role reference assigns a security role to a user. | Found: POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref Accept: application/json { "@odata.id":"[Organization URI]/api/data/v9.0/roles(<role ID>)" } | Fix: Set controls[0].api.call to 'POST [Organization URI]/api/data/v9.0/systemusers(azureactivedirectoryobjectid=<user object ID>)/systemuserroles_association/$ref' and use that call in the rendered table. Add 'The request body sets @odata.id to the role reference.' to the row note. The existing body is correct but the standard puts the body property in the note. | Source: https://learn.microsoft.com/power-apps/developer/data-platform/aad-group-team
-->
