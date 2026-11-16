---
title: "Microsoft 365 Apps admin center: Update Repair in Inventory"
slug: "m365-app-inventory-update-repair"
roadmapId: 576286
topic: "modern-work"
products: ["Microsoft 365","Microsoft 365 app"]
summary: "Update Repair in the Microsoft 365 Apps admin center flags Windows devices with out-of-date or failing Microsoft 365 Apps and lets admins start Online Repair remotely. Nothing is repaired until an admin selects Repair."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Inventory page says the signed-in user must hold one of its listed plans (for example Microsoft 365 E3 or E5). The Update Repair page lists prerequisites but names no additional licence or meter."
audiences: ["m365-admin","change-adoption"]
tags: ["admin-center","monitoring","microsoft-365-apps","inventory"]
sources:
  - title: "Microsoft 365 Roadmap 576286"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576286"
    kind: "roadmap"
  - title: "Use Update Repair to identify and remediate Microsoft 365 Apps update issues"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair"
    kind: "learn"
  - title: "Overview of inventory in the Microsoft 365 Apps admin center"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/inventory"
    kind: "learn"
  - title: "MC1518032: Microsoft 365 apps: Introducing Update Repair in Inventory"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1518032"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Whether Inventory, the data source for Update Repair, is set up"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Inventory"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/inventory"
    api: null
    note: "A new tenant completes a one-step setup. Roles listed on the Inventory page: Office Apps Administrator, Security Administrator, Global Administrator."
  - governs: "Which devices are repaired remotely, and when"
    scope: "other"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Review devices > Update Repair table > select one or more devices > Repair"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair"
    api: null
    note: "Per-device action; the device receives it at its next Inventory check-in. Not available for Needs attention devices."
  - governs: "Tenant-wide switch to turn Update Repair off or restrict who can start Repair"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026)."
  - governs: "Manual Online Repair on a single device (alternative for Needs attention)"
    scope: "other"
    ui:
      surface: "Windows (on the device)"
      path: "Installed apps (or Add or remove programs) > Microsoft 365 Apps > Modify or Change > Online Repair > Repair"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair"
    api:
      kind: "other"
      call: "\"C:\\Program Files\\Common Files\\Microsoft Shared\\ClickToRun\\OfficeClickToRun.exe\" scenario=Repair platform=x64 RepairType=FullRepair forceappshutdown=True DisplayLevel=True"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair"
    note: "Run from an elevated Command Prompt; verify the x64 platform matches the installation. Covers one device, not the admin-centre report."
confidence: "high"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-16"
    note: "First briefing for this item, written after Microsoft's notice MC1518032 and the Update Repair Learn page, which still says preview."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 56
  unconfirmed: 4
  contradicted: 0
  attempts: 1
---

## What's changing

Update Repair is a new report in the Microsoft 365 Apps admin center that shows Windows devices whose Microsoft 365 Apps are out of date or reporting update errors, and lets an admin start Online Repair on eligible devices remotely. The roadmap item describes it as part of Inventory.

The report builds on Inventory data: the installed version and build, the target version policy and Click-to-Run error information. It compares the installed version with the latest version for the device's update channel and shows only devices in the **Needs repair** and **Needs attention** states. **Needs repair** covers a device at least one version behind with an error that needs no separate fix, or at least three versions behind with no error. **Needs attention** covers devices with an error that needs separate remediation, or that qualify for repair but run a build earlier than 16.0.20326.20000; the **Repair** action is not available for these, and the Learn page gives manual steps and a list of Click-to-Run error codes instead.

The **Repair** action triggers Click-to-Run Online Repair. It closes any open Microsoft 365 Apps and reinstalls them by downloading the latest available build for the device's configured update channel from the Microsoft Content Delivery Network (CDN). The device receives the action at its next Inventory check-in, not immediately.

The roadmap record shows the item as Launched, with a preview date of October CY2026 and a target date of November CY2026, for Worldwide (Standard Multi-Tenant) on Desktop and Web. Microsoft's notice MC1518032 (published 2026-10-20, no act-by date) says Public Preview rollout began in mid-October 2026 and General Availability rollout starts in mid-November 2026, finishing by late November 2026. The Learn page still describes Update Repair as currently available as a preview at the time of writing (November 2026).

## Why it matters

This gives admins a tenant-wide list of devices that have fallen behind on Microsoft 365 Apps updates, with a remote fix, which removes some hands-on desk-side work. The same button is also the main risk: it closes Office apps on the selected devices without the user choosing the moment.

Nothing happens if nobody acts: no device is repaired and no setting changes. The practical decision is who may use Repair, when, and how users are warned. Plan that before the first batch, because Microsoft's own warning is that Repair interrupts users.

## Risk assessment

**Data exposure**
- No new data collection is described: the report reads data already sent to Inventory. Repair downloads the latest build from the Microsoft CDN, so devices need to reach it.

**Security & identity**
- Repair is performed through the Microsoft 365 Apps admin center, where the Inventory page lists Office Apps Administrator (recommended), Security Administrator and Global Administrator as the supported built-in roles. Any holder can select devices and start a repair; keep that group small.
- Repair reinstalls the latest build for the device's update channel, so it also moves a repaired device to the current build of that channel.

**Autonomy & actions**
- Repair acts on a device remotely once an admin confirms it. The device carries it out at its next check-in (every 12 hours, or every 2 hours if managed by cloud update, during preview), so the interruption can land at a time the admin did not pick.
- Devices in **Needs attention** are excluded from Repair, so a green repair run does not mean the fleet is clean.

**Change & support**
- Repair closes open Microsoft 365 Apps. Users with unsaved work are exposed to data loss, so notify them first and ask them to save and close their Office apps.
- A device that is powered off, signed out or offline simply keeps the action pending until it checks in.
- Successfully repaired devices can stay in the table for up to 28 days, which can confuse a follow-up review.

## Cost and licensing

Microsoft Learn names no separate licence or meter for Update Repair. Its prerequisites are a Windows device with Microsoft 365 Apps that appears in Inventory and reports current data, and for Repair, build 16.0.20326.20000 or later.

Update Repair depends on Inventory, and the Inventory page (Overview of inventory in the Microsoft 365 Apps admin center) says the user must be assigned to one of its listed plans, for example Microsoft 365 E3 or E5, Microsoft 365 Business Standard or Premium, or the Office 365 E3 or E5 plans. Microsoft 365 operated by 21Vianet, Microsoft 365 GCC, and Microsoft 365 GCC High and DoD are listed as unsupported plans.

Indirect costs are admin time, user downtime during a repair, and a download of the full build from the CDN for each repaired device. No price, credit rate or cap is published at the time of writing (November 2026).

## Scope

- **Devices:** Windows devices with Microsoft 365 Apps that appear in Inventory and report current data. Only devices in **Needs repair** or **Needs attention** appear in the report.
- **Repair eligibility:** build 16.0.20326.20000 or later. Earlier builds show as **Needs attention** and need manual Online Repair.
- **Admins:** the Inventory page lists Office Apps Administrator (recommended), Security Administrator and Global Administrator. The Update Repair page itself does not list roles.
- **Cloud:** the roadmap record lists Worldwide (Standard Multi-Tenant) only. The Inventory page also lists the GCC, GCC High and DoD plans as unsupported.
- **Rollout:** Public Preview began in mid-October 2026 and General Availability began rolling out in mid-November 2026 (MC1518032). The Learn page still says preview.
- **Prerequisite:** Inventory must be enabled; a new tenant completes a one-step setup, after which devices appear as users launch Office apps.

## Governance guidance

### Before rollout
- Confirm Inventory is set up in the Microsoft 365 Apps admin center and that your admins hold one of the roles the Inventory page lists; give Repair only to Office Apps Administrators.
- Check which devices run a build earlier than 16.0.20326.20000; they cannot use Repair and need manual Online Repair.
- Agree a notice with the service desk telling affected users to save work and close Office apps before a repair.

### At rollout
- Open Update Repair from the **Review devices** banner on the Home or Inventory page and read the **Needs repair** and **Needs attention** lists.
- Start with a small pilot batch of devices, then select further devices and **Repair**.
- Keep pilot devices powered on, signed in and connected so they can receive the action at their next check-in.

### After rollout
- Recheck repaired devices after the next check-in; they can remain in the table for up to 28 days.
- Work through **Needs attention** devices using the error-code table on the Learn page, for example freeing disk space or fixing proxy and firewall rules.
- Watch the Learn page and Message center for the end of the preview wording.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Inventory, the data source for Update Repair, is set up</strong><br><small>Tenant</small><br><small class="controls__note">A new tenant completes a one-step setup. Roles listed on the Inventory page: Office Apps Administrator, Security Administrator, Global Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Inventory <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/inventory" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which devices are repaired remotely, and when</strong><br><small class="controls__note">Per-device action; the device receives it at its next Inventory check-in. Not available for Needs attention devices.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Review devices › Update Repair table › select one or more devices › Repair <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn Update Repair off or restrict who can start Repair</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Manual Online Repair on a single device (alternative for Needs attention)</strong><br><small class="controls__note">Run from an elevated Command Prompt; verify the x64 platform matches the installation. Covers one device, not the admin-centre report.</small></td><td data-label="Admin UI"><strong>Windows (on the device)</strong><br>Installed apps (or Add or remove programs) › Microsoft 365 Apps › Modify or Change › Online Repair › Repair <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>&quot;C:\Program Files\Common Files\Microsoft Shared\ClickToRun\OfficeClickToRun.exe&quot; scenario=Repair platform=x64 RepairType=FullRepair forceappshutdown=True DisplayLevel=True</code> <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/update-repair" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Repair and the report share one surface, and the only gate on Repair that Microsoft documents is the admin role needed for the Microsoft 365 Apps admin center. No setting is documented that restricts Repair to a subset of devices, schedules it or turns it off separately; Inventory is the only on/off dependency Microsoft names. Manual Online Repair is the alternative for devices Repair excludes; it runs on the device and is not governed from the admin centre.

## Open questions

- Does Update Repair have its own switch, role restriction or scheduling window, separate from Inventory? Watch the Update Repair Learn page.
- When will the Learn page drop its preview wording, and do the preview check-in intervals (12 hours, or 2 hours with cloud update) change at General Availability?
- Is a Repair action logged anywhere an admin can audit, and is there an API for it? None is documented at the time of writing (November 2026).
- Does the Inventory plan list apply unchanged to Update Repair, given that its Learn page names no licence?

<!-- rationale
risk: Medium. A Repair action closes open Microsoft 365 Apps on the selected devices and reinstalls them, so users can lose unsaved work unless admins warn them first; it reads no new data and starts only when an admin selects it.
cost: Low. The Update Repair page names no separate licence or meter; the costs shown are admin time, user disruption and a CDN download per repaired device. Inventory itself requires one of the plans its Learn page lists.
impact: Low. Admins use the report; users notice only on devices an admin repairs, where Office apps close and reinstall.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [unsupported, blocker] front matter: defaultState / default: Update Repair has an admin-opt-in default state. | Found: Searched: "Update Repair" "default" "enable"; opened Update Repair and Inventory Learn pages. They document Inventory setup and confirmation of each Repair action, not a separate Update Repair enablement default. | Fix: Set defaultState to unknown. Retain the supported, narrower statement that each remote repair requires an administrator to select devices and confirm Repair; do not equate invoking an action with enabling the feature.
- [unsupported, blocker] front matter: licensing.model / licensing: Update Repair is included in the licences the product already requires. | Found: Searched: "Update Repair" "license" "price" and site:learn.microsoft.com/microsoft-365-apps/ "Update Repair" "license" "included"; opened Update Repair and Inventory. Neither states Update Repair is included. | Fix: Set licensing.model to unknown. Keep the notes distinguishing Inventory's published plan requirements from the Update Repair page's silence about a feature-specific licence; silence does not establish inclusion.
- [supported, minor] What's changing; Scope: Rollout / record: MC1518032 gives a mid-November 2026 start and late-November 2026 completion window for Worldwide General Availability. | Found: General Availability (Worldwide): Rollout will begin in mid-November 2026 and is expected to complete by late November 2026. | Fix: Preserve the notice's planned wording in both sections: 'MC1518032 says General Availability rollout will begin in mid-November 2026 and is expected to complete by late November 2026.' Replace 'finishing by' and 'began rolling out'; the notice itself does not confirm actual commencement or guarantee completion.
- [unsupported, blocker] Risk assessment: Security & identity; Governance controls / role: Any holder of the listed Inventory roles can start Repair, and admin-center role membership is the documented authorization gate for Repair. | Found: Searched: "Update Repair" "Microsoft 365 Apps" "role" and site:learn.microsoft.com/microsoft-365-apps/admin-center/ "Update Repair" "permissions"; opened Inventory and Update Repair. Inventory roles are listed, but Repair authorization is not specified. | Fix: Remove 'Any holder can select devices and start a repair' and the assertion that the admin-center role is the only documented Repair authorization gate. Say: 'Inventory lists these access roles; the Update Repair page does not specify which roles can start Repair.' Keep limiting operators as organizational advice, not a documented Repair-specific permission.
- [unsupported, major] Risk assessment: Change & support / behaviour: A powered-off, signed-out or offline device simply keeps the Repair action pending until it checks in. | Found: Searched: site:learn.microsoft.com/microsoft-365-apps/ "Update Repair" "pending" "signed out"; opened Update Repair. It specifies next-check-in delivery and connectivity advice, not pending-action persistence or expiry for unavailable devices. | Fix: Replace with: 'Keep devices powered on, signed in and connected so they can receive the action at their next Inventory check-in.' Do not promise that an action remains pending for an unavailable device.
-->
