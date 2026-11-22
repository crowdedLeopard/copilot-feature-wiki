---
title: "Microsoft 365 Apps admin center: Cloud Update and Inventory export improvements"
slug: "m365-apps-cloud-update-export-improvements"
roadmapId: 577398
topic: "modern-work"
products: ["Microsoft 365","Microsoft 365 app"]
summary: "The Microsoft 365 Apps admin center is adding richer, filter-aware device exports across Inventory and Cloud Update. It affects administrators; review export permissions and re-test CSV consumers as it rolls out."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Per the Inventory page, the signed-in user must hold one of its listed plans (for example Microsoft 365 E3 or E5, Office 365 E3 or E5, Business Standard or Premium, A3 or A5). Nothing specific to the export improvements is published."
audiences: ["m365-admin","change-adoption"]
tags: ["admin-center","inventory","microsoft-365-apps","data-export","cloud-update"]
sources:
  - title: "Microsoft 365 Roadmap 577398"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577398"
    kind: "roadmap"
  - title: "Overview of inventory in the Microsoft 365 Apps admin center"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/inventory"
    kind: "learn"
  - title: "New changes coming to cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-enhancements"
    kind: "learn"
  - title: "Prepare to use cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-prepare"
    kind: "learn"
videos: []
related: ["m365-app-inventory-update-repair"]
controls:
  - governs: "Exporting the Inventory device list to a .csv file"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Inventory > Devices > Show all devices > Export"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/inventory"
    api: null
    note: "Requires an Entra role such as Office Apps Administrator. The page describes the export as it stands today, not the planned improvements."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-11T00:51:09"
changes:
  - date: "2026-11-22"
    note: "First briefing for this roadmap item: records the planned export improvements against the Inventory export Learn describes today."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 4 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected after verification: removed unsupported claims about configuration, device-side effects and role inheritance on CSV files; action set to prepare; removed the role-holder checklist step."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 54
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e5d940cbc10ddba32e764aaf06615af6"
---

## What's changing

The Microsoft 365 Roadmap item says export is being improved in Cloud Update in the Microsoft 365 Apps admin center. Microsoft describes three changes: export will be available across the Inventory and Cloud Update device views, exports will include additional device and update information, and admins will be able to export filtered results so they can focus on the devices most relevant to them.

Microsoft Learn has not yet been updated to describe these changes. At the time of writing (November 2026), the Inventory page describes the current export: you select **Export** in the Devices view, the service prepares a .csv file in the background, and the export always contains all data points regardless of the filters set. It adds that inventory data can be exported once per day, and that the *Cloud Update Status*, *Update Status* and *Wave* columns are not currently included when exporting. The roadmap item describes the direction of change; treat the Learn behaviour as today's baseline, not as the new design.

Cloud update's own device views already offer some export. Microsoft's cloud update changes page says that selecting an issue on a profile's Issues tab opens a details pane with the impacted device list and an option to export that list. The same page says the Devices tab for each profile has sort and filter controls.

The roadmap record gives the status as Rolling out, the release phase as General Availability, a target of November CY2026 and the platform as Web. The record lists only Worldwide (Standard Multi-Tenant) and links to no Message Center post or Learn page.

## Why it matters

Exports are how many teams turn device data into compliance reports, patch-readiness lists and tickets. Today's Inventory export ignores filters and omits the cloud update columns, so a team that wants only, say, devices failing an update must filter the CSV by hand. The planned changes target exactly that gap, which is why this is worth a look while Microsoft has not documented an enablement setting for the improvements.

Microsoft has not stated what happens on arrival, so the page cannot say whether the new options appear for every tenant at once or in stages. Nothing in the roadmap record says existing exports change in a way that breaks anything, but plan for the CSV layout to differ if you feed exports into scripts or reports.

## Risk assessment

**Data exposure**
- The Inventory device table includes the last signed-in user and that user's email address. If the improved exports add device and update fields, a CSV may carry personal data and device details outside the admin centre. Decide where exports may be stored and who may receive them.
- Filtered exports produce smaller, targeted files, which are easier to share than the full list. Treat each as the same sensitivity as the Inventory view it came from.

**Security & identity**
- Access follows the roles for the Microsoft 365 Apps admin center. The Inventory page lists Office Apps Administrator (recommended), Security Administrator and Global Administrator. The roadmap describes no new role or permission for export.

**Autonomy & actions**
- The Inventory page documents export as creating a .csv file for use in other tools.

**Change & support**
- Exports will contain more fields and may be available from more views. Any script, spreadsheet or report that expects today's Inventory CSV columns should be re-tested once the new export reaches your tenant.
- Help-desk and update-management teams may ask why the Inventory export and a filtered Cloud Update export differ, since the Learn page currently says the Inventory export ignores filters.

## Cost and licensing

Licence: the Inventory page says your user must be assigned to one of its listed subscription plans: Microsoft 365 A3 or A5; Microsoft 365 Business Standard or Premium; Office 365 E3 or E5; or Microsoft 365 E3 or E5. It lists Microsoft 365 operated by 21Vianet, Microsoft 365 GCC, and Microsoft 365 GCC High and DoD as not supported plans. The roadmap item describes export improvements within these existing admin centre views and mentions no add-on licence.

Meter and price: the Inventory page names no meter or separate charge for export, and no rate specific to the improved export is published at the time of writing (November 2026).

Indirect cost: admin time to review new export fields, update any reports that consume the CSV, and decide how long exported files are retained.

## Scope

**Who and where.** The roadmap item targets administrators who use the Microsoft 365 Apps admin center. The record lists the platform as Web and the cloud as Worldwide (Standard Multi-Tenant) only. The Inventory page separately lists the GCC, GCC High and DoD plans as not supported for Inventory.

**Roles.** The Inventory page lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as built-in Microsoft Entra roles for accessing and managing the feature. It adds that Global Reader is supported by the admin centre but does not support some features such as cloud update. The cloud update preparation page says admins need a supported Microsoft Entra role and recommends Office Apps Administrator for least privilege.

**Rollout.** The record gives the status as Rolling out with a target of November CY2026. No Message Center post or Learn page for the improved export was available at the time of writing.

**Prerequisites.** Devices must appear in Inventory; per the Inventory page, devices are included automatically once a user launches Office apps on a supported device.

## Governance guidance

### Before rollout
- List the scripts, spreadsheets or reports that consume today's Inventory CSV, so you can re-test them when the new export arrives.
- Decide where exported device lists may be stored and for how long, because the Inventory table includes the last user and their email.

### At rollout
- Open Inventory > Devices > Show all devices in the Microsoft 365 Apps admin center and check whether the Export button behaves as the Learn page describes or offers filtered output.
- Compare a new export with an earlier one and note any added columns, including the Cloud Update Status, Update Status and Wave columns the Learn page says are not currently exported.

### After rollout
- Update the internal runbook to say which view to export from and whether filters are applied.
- Review Microsoft Learn's Inventory and cloud update pages for revised export wording, and record the date you last checked.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Exporting the Inventory device list to a .csv file</strong><br><small>Tenant</small><br><small class="controls__note">Requires an Entra role such as Office Apps Administrator. The page describes the export as it stands today, not the planned improvements.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Inventory › Devices › Show all devices › Export <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/inventory" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The one documented control is the Export button in the Inventory device view. The Inventory page says Inventory does not support alternative methods for data export, so there is no documented script route for the Inventory export at the time of writing (November 2026). Access is governed by Microsoft Entra roles, not by an export-specific setting.

A setting that turns the improved exports on or off for a tenant is not described in the sources read; confirm in the Microsoft 365 Apps admin center and via Message center. The existing Issues-tab export in cloud update is a separate, older option that Microsoft describes as part of an issue's details pane.

## Open questions

- Which extra device and update fields will the improved export include, and will the Cloud Update Status, Update Status and Wave columns that the Inventory page lists as not exported now be added? Watch the Inventory page on Microsoft Learn.
- Will the once-per-day limit on Inventory exports still apply when filtered exports are available? Watch the Inventory page's export section.
- Is there an admin setting, or a role requirement beyond the current roles, that controls the new export options? Watch Message center and the Microsoft 365 Roadmap item.
- Will the new export be recorded in the cloud update audit log in Microsoft Purview? Watch the cloud update Purview auditing page.
- Which release or Message Center post will give the tenant-by-tenant rollout window? The roadmap record links to none.

<!-- rationale
risk: Low. Export is an admin action in the Microsoft 365 Apps admin center, and the roadmap describes no change to who can see device data; which extra fields the exports will carry is not yet published.
cost: Low. The only cost the sources show is admin time; the Inventory page lists the subscription plans a user needs and names no separate charge for export, and nothing specific to this change is published.
impact: Low. The roadmap describes export improvements for administrators using Inventory and Cloud Update device views.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Open questions: cloud update audit log / behaviour: Microsoft has a cloud update Purview auditing page that readers can watch for export-auditing guidance. | Found: Cloud update supports Microsoft Purview Audit so you can review admin activity for cloud update in Microsoft 365 Apps admin center. | Fix: Add the source 'Audit cloud update activity with Microsoft Purview' at https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-purview. Keep export auditing as an open question; the documented activities do not state that export is audited. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-purview
-->
