---
title: "Microsoft 365 Apps cloud update: extended rollback that holds Monthly Enterprise Channel devices until an admin resumes them"
slug: "m365-apps-cloud-update-extended-rollback-support-for-monthly-enterprise-channel"
roadmapId: 572673
topic: "modern-work"
products: ["Microsoft 365","Microsoft 365 app"]
summary: "Cloud update can now roll Monthly Enterprise Channel devices back two versions, and rolled-back devices no longer resume on the next release. Admins who use rollback must now resume devices themselves."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "September CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Cloud update requires users to be assigned Microsoft 365 A3/A5, Business Standard/Premium, Office 365 E3/E5 or Microsoft 365 E3/E5, per its requirements page. Nothing specific to extended rollback is published."
audiences: ["m365-admin","security","service-owner"]
tags: ["cloud-update","microsoft-365-apps","release-channels","auditing"]
sources:
  - title: "Pause and rollback"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback"
    kind: "learn"
  - title: "New changes coming to cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-enhancements"
    kind: "learn"
  - title: "Requirements for cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-requirements"
    kind: "learn"
  - title: "Prepare to use cloud update"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-prepare"
    kind: "learn"
  - title: "Audit cloud update activity with Microsoft Purview"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-purview"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 572673"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=572673"
    kind: "roadmap"
  - title: "Review of who triggered rollbacks and resumes (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Review of who triggered rollbacks and resumes (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    kind: "learn"
videos: []
related: ["m365-apps-cloud-update-export-improvements","m365-app-inventory-update-repair","auditing"]
controls:
  - governs: "Which devices are rolled back, and to which earlier version and security build"
    scope: "group"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Update > Monthly Enterprise > Overview > Actions > Roll back devices"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback"
    api: null
    note: "Targets all eligible devices, device names or Microsoft Entra groups. Re-running it with a newer security build replaces the target and keeps devices rolled back."
  - governs: "When rolled-back devices return to the normal update process"
    scope: "other"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Update > Monthly Enterprise > Overview > Actions > Manage rolled back devices > device > Resume"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback"
    api: null
    note: "Per device, or all devices with Resume updates for all rolled back devices. Since September 2026 devices stay rolled back until this is done."
  - governs: "Whether the Monthly Enterprise profile continues deploying updates"
    scope: "other"
    ui:
      surface: "Microsoft 365 Apps admin center"
      path: "Cloud Update > Monthly Enterprise > Overview > Pause updates"
      docs: "https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback"
    api: null
    note: "Stops remaining deployments until Resume updates; installs already in progress continue. Does not roll devices back."
  - governs: "Review of who triggered rollbacks and resumes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <ExDateTime> -EndDate <ExDateTime> -Operations updateddeviceconfiguration"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    note: "Activity Device configuration updated covers triggering a rollback, resuming a rolled back device or changing the update channel. Needs auditing enabled."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-27"
    note: "New briefing: extended rollback for Monthly Enterprise Channel in cloud update, with rolled-back devices now held until an admin resumes them."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 57
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "e0794dac83b5cb877118ea03ac9c435b"
---

## What's changing

Cloud update in the Microsoft 365 Apps admin center now lets administrators roll eligible devices back to either of the two previous Monthly Enterprise Channel versions, and keeps them there across later releases until an administrator resumes them. When available, the earlier version includes its latest security update.

The Learn page states that, starting in September 2026, rolled-back devices no longer resume automatically when a new Monthly Enterprise Channel version is released; they stay on the selected rollback target until an admin resumes them from **Actions > Manage rolled back devices**. Existing rollback actions remain in effect when a later release arrives. If a newer security build becomes available for the version devices are rolled back to, an administrator applies another rollback action selecting that build; this replaces the existing target and the devices stay rolled back. Rollback can take up to 24 hours to complete.

Pause and rollback are available only for devices managed by the Monthly Enterprise profile, and rollback does not change a device's assigned update channel. Rollback can target all eligible devices, named devices or Microsoft Entra groups; groups of users are matched to their devices in Inventory.

The roadmap item is Launched, with a target and preview date of September CY2026, listed as both General Availability and Preview. Microsoft's "New changes coming to cloud update" page gives the rollout as September 2026 and lists Message Center post MC1478946, added September 21, 2026.

## Why it matters

Rolled-back devices no longer resume automatically when a new Monthly Enterprise Channel version is released, so rollback is now a state that persists until someone ends it. A device rolled back for an add-in problem will sit on the older build through later monthly releases unless an administrator resumes it, and keeping it on the latest security build for that version is a further rollback action. This means rollback needs an owner and an exit date, much like an exception to patching policy.

The gain is real: teams investigating a compatibility issue get more than one release cycle and a choice of two earlier versions without moving devices off Monthly Enterprise Channel. Because rollback actions already in place stay in effect after this change, check now for devices that were rolled back and expected to resume on their own.

## Risk assessment

**Data exposure**
- No change: the feature changes which Microsoft 365 Apps build a device runs, not what data the apps can reach.

**Security & identity**
- Devices left rolled back stay on an older version. Learn's method for installing a newer security build on them is another **Roll back devices** action selecting that build, so a rollback without an owner can leave devices behind on security fixes. Monitor them on the **Devices** tab or under **Manage rolled back devices**.
- **Roll back all devices** rolls back every eligible device and, per Learn, also prevents other devices from continuing with the update. Restrict who holds the roles that can manage cloud update (see the notes under the controls table).

**Autonomy & actions**
- Learn describes rollback, re-targeting to a newer security build and resume as actions an administrator starts. The audit log records triggering a rollback and resuming a rolled-back device.

**Change & support**
- Runbooks that relied on devices resuming at the next release are now wrong. Service desks should expect users on rolled-back devices to stay on an older version, and to see a gap of up to 24 hours after a rollback or resume.

## Cost and licensing

Cloud update's requirements page says the user must be assigned one of: Microsoft 365 A3 or A5; Microsoft 365 Business Standard or Business Premium; Office 365 E3 or E5; Microsoft 365 E3 or E5. It lists Microsoft 365 operated by 21Vianet, Microsoft 365 GCC, and Microsoft 365 GCC High and DoD as not supported. Extended rollback is part of cloud update and no separate licence, price or meter is published for it.

The indirect cost is administrator time: tracking rolled-back devices, re-targeting them to newer security builds, and resuming them. Learn says rollback completion depends on content download, and cloud update devices download updates from the Office Content Delivery Network (CDN); plan for that on constrained networks.

## Scope

- **Devices:** Microsoft 365 Apps on Windows managed by the cloud update Monthly Enterprise profile. Rollback is not available for the Current profile.
- **Roles:** Office Apps Administrator (recommended), Security Administrator or Global Administrator. Global Reader does not support cloud update.
- **Targeting:** all eligible devices, device names, or Microsoft Entra groups. Device objects must be Microsoft Entra joined or hybrid joined; a group should hold no more than 20,000 objects.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant). The requirements page lists GCC, GCC High and DoD, and 21Vianet, as not supported.
- **Rollout:** Learn gives September 2026; the roadmap record is Launched.

## Governance guidance

### Before rollout
- Open **Cloud Update > Monthly Enterprise > Overview > Actions > Manage rolled back devices** and list every device currently rolled back, since existing rollbacks no longer end at the next release.
- Agree with the Office Apps Administrators who own each rollback and the date it must be resumed.
- Update the update-incident runbook so it ends with an explicit resume step rather than waiting for the next release.

### At rollout
- Choose the rollback target in the **Roll back devices** flyout deliberately: the previous version, or the earlier version with its latest security update.
- Target a Microsoft Entra group or named devices rather than **Roll back all devices** unless the whole profile must stop, since that option also holds back other devices.
- Pause the Monthly Enterprise profile with **Pause updates** when the issue needs investigation before any further devices update.

### After rollout
- Check the **Devices** tab each release for devices in a rolled-back state.
- Apply a further **Roll back devices** action selecting the newer security build when one is released for the rollback version, rather than **Resume**.
- Resume devices from **Manage rolled back devices** once the issue is fixed, then confirm updates restart within 24 hours.
- Search the audit log for the **Device configuration updated** activity to review who triggered rollbacks and resumes.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which devices are rolled back, and to which earlier version and security build</strong><br><small>Group</small><br><small class="controls__note">Targets all eligible devices, device names or Microsoft Entra groups. Re-running it with a newer security build replaces the target and keeps devices rolled back.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Update › Monthly Enterprise › Overview › Actions › Roll back devices <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>When rolled-back devices return to the normal update process</strong><br><small class="controls__note">Per device, or all devices with Resume updates for all rolled back devices. Since September 2026 devices stay rolled back until this is done.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Update › Monthly Enterprise › Overview › Actions › Manage rolled back devices › device › Resume <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether the Monthly Enterprise profile continues deploying updates</strong><br><small class="controls__note">Stops remaining deployments until Resume updates; installs already in progress continue. Does not roll devices back.</small></td><td data-label="Admin UI"><strong>Microsoft 365 Apps admin center</strong><br>Cloud Update › Monthly Enterprise › Overview › Pause updates <a href="https://learn.microsoft.com/microsoft-365-apps/admin-center/cloud-update-pause-rollback" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Review of who triggered rollbacks and resumes</strong><br><small>Tenant</small><br><small class="controls__note">Activity Device configuration updated covers triggering a rollback, resuming a rolled back device or changing the update channel. Needs auditing enabled.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;ExDateTime&gt; -EndDate &lt;ExDateTime&gt; -Operations updateddeviceconfiguration</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All cloud update actions need Office Apps Administrator (recommended), Security Administrator or Global Administrator; Global Reader does not support cloud update. Microsoft Learn documents no API or PowerShell for cloud update rollback, resume or pause at the time of writing (November 2026); the audit records of those actions can be searched with PowerShell. Rollback can start while the profile is paused. Resuming the profile (**Resume updates**) and resuming rolled-back devices are separate actions: Learn documents **Manage rolled back devices** as where rolled-back devices are resumed. Cloud update audit records are generated when auditing is enabled for Microsoft 365.

## Open questions

- Does a rolled-back device ever pick up a newer security build for its rollback version without a further rollback action? Watch the Pause and rollback page.
- What happens to devices still rolled back when their target version stops receiving security updates? Watch the Pause and rollback page and Message center.
- Will Microsoft publish an API or PowerShell for rollback and resume, so long-lived rollbacks can be reported and ended by script? Watch the cloud update Learn pages.
- Is any alert or notification raised for devices left rolled back across several releases? Watch the "New changes coming to cloud update" page.

<!-- rationale
risk: Medium. Rolled-back devices now stay on the older version until an admin resumes them, so a forgotten rollback leaves devices off the current release and dependent on manual security builds.
cost: Low. Cloud update comes with the Microsoft 365 and Office 365 plans its requirements page lists; the cost is admin time to track and resume rolled-back devices.
impact: Low. Only admins who use rollback, and the users of devices they roll back, notice the change.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Extended rollback does not change what data the apps can reach. | Found: Searched: 'Microsoft 365 Apps cloud update rollback data access permissions data exposure'; read Pause and rollback, New changes coming to cloud update, Requirements for cloud update, and returned data-access excerpts. None states that rollback preserves application data reach. | Fix: Remove 'No change' and 'not what data the apps can reach'. Replace the bullet with: 'The feature changes which Microsoft 365 Apps build a device runs.'
-->
