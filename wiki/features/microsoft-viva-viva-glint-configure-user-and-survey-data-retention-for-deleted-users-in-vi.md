---
title: "Viva Glint: choose whether to retain or erase survey data for deleted users"
slug: "microsoft-viva-viva-glint-configure-user-and-survey-data-retention-for-deleted-users-in-vi"
roadmapId: 560548
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva Glint has a platform-wide setting that decides whether survey responses and identifiable data are kept or erased when a user is deleted manually or by a Microsoft Entra signal. It defaults to retain."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Using Viva Glint requires a Viva Suite or Viva Glint subscription plan, per the Viva Glint licensing page. That page names no separate licence or charge for this control."
audiences: ["service-owner","compliance","m365-admin"]
tags: ["viva-glint","entra-id","retention","privacy","data-governance","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 560548"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560548"
    kind: "roadmap"
  - title: "Manage General Settings in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    kind: "learn"
  - title: "Delete user data from Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/delete-user-data"
    kind: "learn"
  - title: "FAQs for deleting user data"
    url: "https://learn.microsoft.com/viva/glint/setup/delete-user-data-faq"
    kind: "learn"
  - title: "Responding to Data Subject Requests (DSRs) in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/raw-data-request-response"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Set up multiple Viva Glint experiences in your tenant"
    url: "https://learn.microsoft.com/viva/glint/setup/multi-glint-exp-overview"
    kind: "learn"
videos: []
related: ["microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"]
controls:
  - governs: "Whether survey responses and identifiable data are retained or erased for deleted users"
    scope: "other"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Service Configuration > General Settings > User Data > Retain survey responses and identifiable data for deleted users"
      docs: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    api: null
    note: "Scope: Viva Glint instance. Applies to all requests and survey programs in the instance. On (default) retains; Off erases. Changes apply going forward, not retrospectively."
  - governs: "Manual deletion of a user and their data"
    scope: "user"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Employees > People > user > Actions > Delete User"
      docs: "https://learn.microsoft.com/viva/glint/setup/raw-data-request-response"
    api: null
    note: "What happens to the data afterwards follows the User Data control above. Deletion is irreversible once the 30-day soft-delete period ends."
  - governs: "How long Glint holds survey data, separate from deleted-user handling"
    scope: "other"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Service Configuration > General Settings > User Data > Data retention policy"
      docs: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    api: null
    note: "Scope: Viva Glint instance. Existing control, not specific to deleted users. Default is until the subscription ends; a custom period is 6 to 1000 months."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-23"
    note: "New briefing on the Viva Glint control for retaining or erasing survey and identifiable data for deleted users."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected scope to the Viva Glint instance, the Data retention policy description and the soft-delete update qualification; removed the Activity Audit Log checklist step."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected the first sentence of Why it matters to name the documented deletion routes (manual deletion in Glint and Microsoft Entra delete signals) instead of HR-system deletions."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 66 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-23"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 66
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f89d55b1839b478f496bf3349162f2fa"
---

## What's changing

Viva Glint now has a User Data control, **Retain survey responses and identifiable data for deleted users**, that decides what happens to a person's Glint data once they are deleted. The roadmap item says service administrators can choose to retain or delete survey and relevant identifiable user data for users deleted manually from Glint or through signals received from Microsoft Entra. The roadmap status is Launched, with a target of September CY2026, at General Availability.

Microsoft Learn documents two values. **On** (the default) retains all survey responses and identifiable data for deleted users, including first and last name, email address and employee ID. **Off** erases all data related to the requester, including survey responses. The setting is platform-wide and applies to all requests equally. A deleted user's employee record stays soft-deleted for 30 days and can be updated back to the status in the HRIS file in that period; after it, all data related to the employee is permanently deleted in line with this control. The update depends on the separate **Disregard Employee IDs of previously deleted employees** control: Off permits the update when uploaded employee IDs and email addresses match; On, the default, excludes those records from uploads.

Learn also describes the Entra side. Its pages say processing of delete signals from Microsoft Entra was paused until September 30, 2026, that live processing starts again from October 1, 2026, and that historical delete signals from June 2025 to September 2026 are then processed under the same setting. The FAQ says that from September 1, 2026 Microsoft offers only retain or erase, with no option to de-identify deleted users while keeping their responses. The pages carry the pause note as of November 2026.

## Why it matters

This setting decides what happens to survey data when a user is deleted manually in Glint or through a Microsoft Entra delete signal. With On, previous survey reports stay consistent, which is the reason the roadmap item gives. With Off, a deletion removes that person's responses and identifiers, and Learn says permanently deleted data can't be restored.

Because the control is documented as platform-wide, one value serves every survey program. Learn also says that anyone who had **Delete survey data for deleted users** set to Off has the new control set to On, and the reverse. Confirm today that the value matches your data protection policy, because Learn says Entra delete signals, including historical ones, are processed under whatever value is set.

## Risk assessment

**Data exposure**
- With **On**, deleted users' first and last name, email address and employee ID stay in Glint with their survey responses. Your privacy and retention policy has to accept that, or the control should be Off.
- With **Off**, all data related to the requester is erased, including survey responses. Learn gives Off no de-identification alternative.

**Security & identity**
- Microsoft Entra delete signals feed this control. Learn says processing was paused until September 30, 2026, and that historical signals from June 2025 to September 2026 are processed under the same setting, so a deletion made in Entra can end in permanent erasure of Glint data if the value is Off.

**Autonomy & actions**
- Permanent deletion follows the 30-day soft-delete automatically. Learn says that during historical processing user records are not deleted where hierarchy changes caused status changes, and advises reviewing the active and inactive user lists.

**Change & support**
- A deleted user is removed from distribution lists and future surveys, and role definitions and reporting permissions are removed. Direct reports are assigned to a placeholder name that can be updated later.
- Don't create a new record with the same email address or employee ID during the 30-day soft-delete period: Learn says the upload can fail.

## Cost and licensing

Using Viva Glint requires a Viva Suite or Viva Glint subscription plan, and the total number of active licences must be at least the number of active users, according to the Viva Glint licensing page. The same page says individual user licence assignment is not required to use Viva Glint.

That page and the General Settings page publish no separate licence, meter or price for this control. The remaining cost is admin time to check the value and, if you choose Off, to explain to survey owners why deleted users' data is gone from reports.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and GCC, on the Web platform, at General Availability. The setting applies to all survey programs in the selected Viva Glint instance. Multiple experiences in one tenant have independent in-app settings ([Learn](https://learn.microsoft.com/viva/glint/setup/multi-glint-exp-overview)). Changes apply to users deleted from the point of feature release onward, not retrospectively, according to Learn.

It covers users deleted manually in Glint (People > Actions > Delete User) and, per Learn, delete signals from Microsoft Entra ID and Data Subject Requests. Learn names Viva Glint Admins, as data controllers, as the people who choose the value.

## Governance guidance

### Before rollout
- Compare your records retention and data subject request policy with the two documented values, and decide whether deleted users' names, email addresses and employee IDs may stay in Glint.
- Open **General Settings** and read the current value of **Retain survey responses and identifiable data for deleted users**, noting that Learn says a previous **Delete survey data for deleted users** value was carried over.
- Ask HR and Entra owners whether bulk deletions occurred between June 2025 and September 2026, since Learn says historical signals are processed under this setting.

### At rollout
- Set the value to match the decision, as a Viva Glint Admin, knowing it applies to all survey programs.
- Tell survey owners whether reports will keep or lose deleted users' responses.
- Hold new uploads that reuse an email address or employee ID of a user deleted within 30 days.

### After rollout
- Review the Active and Inactive user lists for people who should show as Deleted but have not been deleted, as the Learn FAQ advises.
- Revisit the Learn pages for confirmation that live Entra delete signal processing has restarted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether survey responses and identifiable data are retained or erased for deleted users</strong><br><small class="controls__note">Scope: Viva Glint instance. Applies to all requests and survey programs in the instance. On (default) retains; Off erases. Changes apply going forward, not retrospectively.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Service Configuration › General Settings › User Data › Retain survey responses and identifiable data for deleted users <a href="https://learn.microsoft.com/viva/glint/setup/manage-general-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Manual deletion of a user and their data</strong><br><small>User</small><br><small class="controls__note">What happens to the data afterwards follows the User Data control above. Deletion is irreversible once the 30-day soft-delete period ends.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Employees › People › user › Actions › Delete User <a href="https://learn.microsoft.com/viva/glint/setup/raw-data-request-response" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How long Glint holds survey data, separate from deleted-user handling</strong><br><small class="controls__note">Scope: Viva Glint instance. Existing control, not specific to deleted users. Default is until the subscription ends; a custom period is 6 to 1000 months.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Service Configuration › General Settings › User Data › Data retention policy <a href="https://learn.microsoft.com/viva/glint/setup/manage-general-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Learn describes one setting for this behaviour, and it applies to all survey programs in the selected Viva Glint instance: there is no per-program or per-user value documented. The **Data retention policy** control is separate. It sets how long Glint holds survey data (by default until the subscription ends, or a custom period of 6 to 1000 months) and applies to all Glint survey data; it does not replace the separate decision whether to retain or erase data when a user is deleted.

Microsoft Learn documents no API for these settings at the time of writing (November 2026), so changes are made in the Viva Glint admin dashboard.

## Open questions

- Has live processing of Microsoft Entra delete signals restarted? The Learn pages still say it is paused until September 30, 2026 and that it starts again on October 1, 2026. Watch the Manage General Settings and FAQ pages.
- How do the note that changes apply "from the point of feature release and going forward, not retrospectively" and the processing of historical Entra signals from June 2025 to September 2026 fit together for users already deleted?
- Which roles besides Viva Glint Admins can change this setting? The pages read name data controllers but do not list the role permissions.
- Is a de-identify option planned, given the FAQ says only retain or erase is offered from September 1, 2026?

<!-- rationale
risk: Medium. The default retains data, but setting it to Off erases survey responses and identifiers after a 30-day soft-delete, and Learn says permanently deleted data can't be restored.
cost: Low. The only cost the pages show is admin time to review the setting; the Viva Glint licensing page names no separate charge for this control.
impact: Low. Viva Glint admins configure it; survey takers and report readers notice only if the setting is Off and a deleted user's data disappears from reports.
-->
