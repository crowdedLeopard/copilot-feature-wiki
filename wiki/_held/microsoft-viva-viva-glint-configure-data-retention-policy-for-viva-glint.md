---
title: "Viva Glint: configure a data retention policy for survey data"
slug: "microsoft-viva-viva-glint-configure-data-retention-policy-for-viva-glint"
roadmapId: 560551
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Glint service administrators can set how long Viva Glint keeps survey data. The default keeps it while the subscription lasts; a custom period permanently deletes older data. Nothing changes until an admin sets it."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn says a Viva suite or Viva Glint subscription plan is required to use Viva Glint. No separate licence or price for the data retention policy is stated on the Learn pages read (November 2026)."
audiences: ["compliance","service-owner","m365-admin"]
tags: ["viva-glint","retention","data-governance","privacy","admin-controls","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 560551"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560551"
    kind: "roadmap"
  - title: "Manage General Settings in Viva Glint"
    url: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    kind: "learn"
  - title: "Viva Glint licensing"
    url: "https://learn.microsoft.com/viva/glint/setup/glint-order-teams"
    kind: "learn"
  - title: "Assign Viva Glint Service and Tenant Administrators"
    url: "https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps"
    kind: "learn"
  - title: "Viva Glint Activity Audit Log"
    url: "https://learn.microsoft.com/viva/glint/setup/activity-audit-log"
    kind: "learn"
  - title: "Feature availability for Microsoft Viva Glint in Microsoft 365 Government Community Cloud (GCC)"
    url: "https://learn.microsoft.com/viva/glint/setup/supported-environments"
    kind: "learn"
videos: []
related: ["microsoft-viva-viva-glint-configure-user-and-survey-data-retention-for-deleted-users-in-vi","microsoft-viva-import-hris-data-in-viva-glint-from-microsoft-admin-center"]
controls:
  - governs: "How long Viva Glint keeps survey data before permanently deleting it"
    scope: "tenant"
    ui:
      surface: "Viva Glint admin dashboard"
      path: "Configuration > Service Configuration > General Settings > User Data > Data retention policy"
      docs: "https://learn.microsoft.com/viva/glint/setup/manage-general-settings"
    api: null
    note: "Values: Until subscription ends (default) or Custom time period of 6 to 1000 months. Deletion is irreversible. Applies to all survey programs."
  - governs: "Who holds the Viva Glint Service Admin role that can change the retention policy"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Glint > Assign Glint service admin > Add users"
      docs: "https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps"
    api: null
    note: "Only a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator can add or remove Service Admins."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-08-10T22:43:02"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: documents the Data retention policy control, its values, what it deletes and where it is set."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 38 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 35
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "83a87db517ec07fcacd08f4db5b379d8"
---

## What's changing

Viva Glint now has a **Data retention policy** control that lets an administrator decide how long the instance keeps its survey data. The roadmap item describes it as a way for Glint service administrators to match retention to organisational policy, covering engagement surveys, always-on surveys, lifecycle surveys and 360s.

Learn documents the control under User Data in General Settings. It has two values: **Until subscription ends** (the default), which keeps Glint data indefinitely while the tenant has an active Viva Glint subscription, and **Custom time period**, a retention period in months that must be between 6 and 1000. When the period is met, applicable survey data is permanently deleted, and Learn states that this is irreversible and cannot be recovered.

The policy works from a date that depends on the data. Engagement surveys (recurring, ad-hoc and lifecycle) are evaluated on the survey cycle end date once the cycle is Completed. Always-on surveys use the survey response date. 360 surveys use the feedback cycle effective due date. Focus Areas and Goals use their due date. The policy also applies to historical imports: imported data older than the period is deleted shortly after the import finishes. Learn says it does not apply to configurations set in place.

The roadmap record lists the item as Launched, with a target of June CY2026, release phase General Availability, on the web, for Worldwide (Standard Multi-Tenant) and GCC.

## Why it matters

This is the first documented way for a service owner to make Glint's retention follow the organisation's own records policy instead of the subscription term. Teams that must delete employee survey data after a set period, or that want to limit how much feedback history sits in one platform, now have a setting for it.

Because the default keeps data while the subscription lasts, doing nothing leaves current behaviour in place. The decision is therefore deliberate and one-way: a custom period deletes data permanently, so agree the period with HR, legal and privacy owners and with the leaders who rely on trend reporting before anyone sets it.

## Risk assessment

**Data exposure**
- Setting a custom period permanently deletes survey data once it passes the period: programs, 360 data, associated reporting conversations and actions, Focus Areas and Goals, per the Learn page. Learn says deleted data cannot be recovered, so a period set too short is a data-loss risk, not only a reporting one.
- The default keeps Glint data while the subscription is active. Organisations with a shorter retention requirement carry that exposure until someone sets the control.

**Security & identity**
- The control sits in Viva Glint General Settings, and Learn states that changes in General Settings apply to all survey programs in the platform. Learn's Viva Glint role pages describe the Service Admin as the owner of the app with access to all administrative functionality. Keep that role small; Learn recommends no more than five.
- Only a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator can add or remove Service Admins, so those two roles decide who can reach this control.

**Autonomy & actions**
- Once a period is set, Viva Glint deletes applicable survey data when the period is met; the control is a setting an administrator chooses, and deletion follows from it.

**Change & support**
- Historical data you import that is older than the period is deleted shortly after the import finishes, so a back-fill of old cycles can disappear. Check the period before running such an import.
- Reports and comparisons that depend on older cycles lose that data once it is deleted. Plan communication to leaders and analysts before the first deletion.

## Cost and licensing

Learn's Viva Glint licensing page says a Viva Suite or Viva Glint subscription plan is required to use Viva Glint, and that individual user licence assignment is not required for using Viva Glint. The Learn page for the Data retention policy control lists no separate licence, meter or price, and Microsoft Learn states no charge specific to it at the time of writing (November 2026).

The indirect cost is admin and governance time: agreeing a period with HR, legal and privacy owners, and communicating it to survey leaders. A price or licence specific to this control is not yet published.

## Scope

The roadmap names Glint service administrators as the people who configure the policy. It applies to the Glint instance, and Learn says changes in General Settings apply to all survey programs in the platform.

The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, with the web as the platform and General Availability as the release phase. The record shows the status as Launched with a target of June CY2026.

The policy covers survey data (engagement, always-on, lifecycle and 360 surveys, plus Focus Areas and Goals). It does not apply to configurations set in place.

## Governance guidance

### Before rollout
- Agree with HR, legal and privacy owners which period, in months from 6 to 1000, your organisation's records policy requires, and what happens to older survey data you still need.
- List who holds the Viva Glint Service Admin role in the Microsoft 365 admin center and remove anyone who does not need access to General Settings.
- Tell leaders and analysts that survey cycles older than the chosen period will be permanently deleted and cannot be recovered.

### At rollout
- Open Viva Glint General Settings and set the **Data retention policy** control to a custom period only once the period is signed off; leave **Until subscription ends** if no period is agreed.
- Check the end, response and due dates of your oldest cycles against the chosen period, since each survey type is evaluated on a different date.
- Pause any historical data import until the period is set, because imported data older than the period is deleted shortly after the import finishes.

### After rollout
- Review the control's value at each records-policy review and whenever the survey programme changes.
- Confirm after the first deletions that reports leaders rely on still show the cycles you meant to keep.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>How long Viva Glint keeps survey data before permanently deleting it</strong><br><small>Tenant</small><br><small class="controls__note">Values: Until subscription ends (default) or Custom time period of 6 to 1000 months. Deletion is irreversible. Applies to all survey programs.</small></td><td data-label="Admin UI"><strong>Viva Glint admin dashboard</strong><br>Configuration › Service Configuration › General Settings › User Data › Data retention policy <a href="https://learn.microsoft.com/viva/glint/setup/manage-general-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who holds the Viva Glint Service Admin role that can change the retention policy</strong><br><small>User</small><br><small class="controls__note">Only a Microsoft 365 Global Administrator or Viva Glint Tenant Administrator can add or remove Service Admins.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Glint › Assign Glint service admin › Add users <a href="https://learn.microsoft.com/viva/glint/setup/post-provisioning-next-steps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Data retention policy control is set in the Viva Glint application, not in the Microsoft 365 admin center. Learn documents no PowerShell, Microsoft Graph or other API for it at the time of writing (November 2026), so changes are made through the interface by a Service Admin.

The Service Admin role can only be added or removed by a Microsoft 365 Global Administrator or a Viva Glint Tenant Administrator in the Microsoft 365 admin center, so those roles control who can change the retention period. Learn says changes in General Settings apply to all survey programs in the platform.

## Open questions

- Is a change to the Data retention policy control recorded in the Viva Glint Activity Audit Log, and under which event name? Watch the Activity Audit Log and Purview audit log activities pages on Microsoft Learn.
- How soon after a cycle passes the retention period is its data deleted? Watch the General Settings page on Microsoft Learn for a stated schedule.
- Does the GCC availability page for Viva Glint list this control? The roadmap record lists GCC, but the Learn page on GCC feature availability does not name it.

<!-- rationale
risk: Low. The default keeps Glint data until the subscription ends, so nothing is deleted until an administrator sets a custom period; once set, deletion of past cycles is permanent and irreversible.
cost: Low. The only cost the sources show is admin time to agree and set a period. Learn's Viva Glint licensing page requires a Viva suite or Viva Glint subscription and names no separate charge for this setting.
impact: Low. Glint service administrators configure it and employees see no change, but leaders who report on older survey cycles notice once data past the period is deleted.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Cost and licensing / cost: Microsoft Learn states that there is no charge specific to the retention control. | Found: Searched: "Viva Glint" "data retention policy" licensing price; Viva Glint data retention policy licensing price meter first retention policy audit deletion schedule. Read General Settings and Viva Glint licensing; neither states the control has no charge. | Fix: Remove 'and Microsoft Learn states no charge specific to it at the time of writing (November 2026)'. Keep the preceding narrower statement that the control's Learn page lists no separate licence, meter or price.
- [unsupported, major] Why it matters / behaviour: This is the first documented way to make Glint retention follow organisational records policy instead of the subscription term. | Found: Searched: "Viva Glint" "data retention" "first". Read General Settings and returned data-residency, deletion and role excerpts; none establishes that no earlier documented mechanism existed. | Fix: Replace the first sentence with 'This gives a service owner a documented way to make Glint retention follow the organisation's own records policy instead of the subscription term.'
- [contradicted, blocker] Open questions: Activity Audit Log / absence: Whether a retention-policy change is recorded in the Activity Audit Log is wholly undocumented. | Found: Details changes saved | Change activity in General Settings or Advanced Configuration: Details. | Fix: Replace the audit question with 'Learn documents Details changes saved as change activity in General Settings. Which event specifically identifies a Data retention policy change? Watch the Activity Audit Log and Purview audit log activities pages on Microsoft Learn.' Do not claim a retention-specific event is documented. | Source: https://learn.microsoft.com/viva/glint/setup/activity-audit-log
-->
