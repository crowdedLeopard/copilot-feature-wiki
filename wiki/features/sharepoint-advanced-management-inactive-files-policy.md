---
title: "SharePoint: automatically archive inactive files with an Advanced Management policy"
slug: "sharepoint-advanced-management-inactive-files-policy"
roadmapId: 573699
topic: "modern-work"
products: ["SharePoint"]
summary: "SharePoint Advanced Management gains an inactive files policy that archives files not accessed for 6 to 48 months into Microsoft 365 Archive. The preview is PowerShell-only and admin-created; archived storage is billed pay-as-you-go."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "October CY2026"
risk: "low"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The feature page requires the SharePoint Advanced Management entitlement and Microsoft 365 Archive, which is billed per GB archived through pay-as-you-go billing. The pricing page's billing examples use $0.05/GB/month."
audiences: ["m365-admin","finops","compliance","service-owner"]
tags: ["sharepoint","sharepoint-advanced-management","m365-archive","pay-as-you-go","data-lifecycle-management","powershell"]
sources:
  - title: "Microsoft 365 Roadmap 573699"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573699"
    kind: "roadmap"
  - title: "Manage inactive files policy with SharePoint Advanced Management (preview)"
    url: "https://learn.microsoft.com/microsoft-365/archive/manage-inactive-files?view=o365-worldwide"
    kind: "learn"
  - title: "Overview of Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-overview?view=o365-worldwide"
    kind: "learn"
  - title: "Set up Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-setup?view=o365-worldwide"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-pricing?view=o365-worldwide"
    kind: "learn"
  - title: "Frequently asked questions about Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-faq?view=o365-worldwide"
    kind: "learn"
  - title: "Prerequisites for SharePoint Advanced Management"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites"
    kind: "learn"
  - title: "SharePoint Advanced Management features in Microsoft Copilot licenses"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-features-copilot-license"
    kind: "learn"
  - title: "New-SPOFileArchivePolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy?view=sharepoint-ps"
    kind: "learn"
  - title: "Whether a policy is running or stopped (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy?view=sharepoint-ps"
    kind: "learn"
  - title: "Which sites a policy includes or exempts (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/add-spositetofilearchivepolicy?view=sharepoint-ps"
    kind: "learn"
  - title: "Review of simulation and enforcement run results (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spofilearchivepolicyreport?view=sharepoint-ps"
    kind: "learn"
videos: []
related: ["m365-paygo-consumption-based-meter-for-your-extra-sharepoint-storage-needs","purview-retention-last-accessed-sharepoint-onedrive","microsoft-purview-data-lifecycle-management-archive-sharepoint-files-under-retention","auditing","ediscovery"]
controls:
  - governs: "Inactivity threshold, scope and file types of an inactive files policy"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-SPOFileArchivePolicy -PolicyType SelectedSites -LastAccessDateCriteria 12"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy?view=sharepoint-ps"
    note: "Preview. Creates the policy in an Inactive state; -LastAccessDateCriteria takes 6 to 48 months, -FileTypeCriteria and -FileTypeExclusionCriteria filter by extension."
  - governs: "Whether a policy is running or stopped"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOFileArchivePolicy -PolicyId <policy GUID> -State Active"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy?view=sharepoint-ps"
    note: "Preview. -State Inactive stops the policy; files already archived stay archived."
  - governs: "Simulation or enforcement for a policy"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOFileArchivePolicy -PolicyId <policy GUID> -IsWhatIfMode $false"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy?view=sharepoint-ps"
    note: "Preview. $true reports eligible files without archiving; $false archives qualifying files when the policy is active."
  - governs: "Which sites a policy includes or exempts"
    scope: "site"
    ui: null
    api:
      kind: "powershell"
      call: "Add-SPOSiteToFileArchivePolicy -PolicyId <policy GUID> -Site <site URL> -Exclude"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/add-spositetofilearchivepolicy?view=sharepoint-ps"
    note: "Preview. -Exclude is valid only for AllSites or AllODBSites policies; omit it to include a site in a SelectedSites policy. Maximum 1,000 sites per policy."
  - governs: "Review of simulation and enforcement run results"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Get-SPOFileArchivePolicyReport -PolicyId <policy GUID>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spofilearchivepolicyreport?view=sharepoint-ps"
    note: "Preview. Read-only: returns run reports for the past 12 months; it does not change the policy."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-05T23:03:05"
changes:
  - date: "2026-11-21"
    note: "New briefing: the PowerShell-only preview of the inactive files policy, its Microsoft 365 Archive billing dependency and the threshold and OneDrive differences between Learn pages."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 120 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected after verification: added the new-policy step for policies covering more than 100,000 sites, rated risk Low, and removed two checklist items that had no controls-table row."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 118 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 118
  confirmed: 118
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "76699a4c8d89180f36db223e94e88e31"
---

## What's changing

SharePoint Advanced Management (SAM) is adding an inactive files policy that automatically archives SharePoint files based on when they were last accessed. Microsoft 365 Archive provides the cold-storage tier and the reactivation experience; the policy supplies the rules and automation that pick the files. Files stay in place and, per the roadmap item, keep their metadata, permissions, compliance and searchability.

Administrators choose an inactivity threshold from 6 to 48 months, scope a policy to `AllSites` (with site exclusions) or `SelectedSites` (with site inclusions), and filter by file type. Policies have a simulation mode (`IsWhatIfMode`) that reports which files would be archived without archiving them. Learn describes creating a policy as not activating it, and activating a policy in simulation mode as not enabling enforcement. The last access date used is the recorded date a human last accessed the file; AI agent, application, script and system access don't update it.

The roadmap item lists the status as In development, with a preview target of October CY2026 and a general availability target of December CY2026. The Learn page for the policy is marked preview, says public preview is planned for October 2026 and general availability by the end of 2026, and calls these dates targets that may change. It says the current preview is available only through PowerShell, with SharePoint Admin Agent support planned before general availability. Two Microsoft pages differ on the default threshold when none is given: see Open questions.

## Why it matters

This is a storage-cost and content-lifecycle control that acts on files without anyone choosing them one by one. Used well, it moves rarely opened content to a cheaper tier and keeps it out of Microsoft Copilot answers; used carelessly, it archives files people still need, in apps that cannot yet open archived content.

Nothing in the sources says a policy exists or runs until an administrator creates and activates one, so the wiki treats the feature as admin opt-in. The risk is in the decisions that follow: a threshold that relies on last access dates Microsoft says may be incomplete before July 2025, a broad `AllSites` scope, and a billing meter that starts once the tenant's licensed storage is exceeded.

## Risk assessment

**Data exposure**

- Archived content is no longer directly accessible to anyone until reactivated, but the Learn overview says full content search still works for Purview Content Search, end-user search and eDiscovery. Microsoft's FAQ says archived content isn't used by Microsoft Copilot, so Copilot answers will stop drawing on files the policy archives.
- Archiving changes the file's storage and access state; Learn says it doesn't replace retention requirements, so retention and legal hold settings still need their own review.

**Security & identity**

- Configuring policies needs the SharePoint Administrator or Global Administrator role. Use the SharePoint Administrator role in preference to Global Administrator.
- The Microsoft 365 audit log records an Archived file (FileArchived) activity that distinguishes user and system actions; policy events include the policy ID, policy version and the file's last access date.

**Autonomy & actions**

- An active policy outside simulation mode archives qualifying files when it processes them, without a per-file approval. The recorded last access date can lag human access by up to 30 days, so a file opened recently can still qualify.
- Human access before July 2025 may not have been captured, so a file can look inactive for longer than it was. Learn says older dates are still used. Set the threshold so the period falls after July 2025 for critical content, and review simulation results with site owners.
- Simulation results are estimates, and an enforcement run does not necessarily archive the same set of files.

**Change & support**

- Some apps don't yet support file-level archive, including Word for the web, PowerPoint for the web, the Teams, OneDrive and SharePoint mobile apps, and the OneDrive sync client on macOS. Users may see errors when opening archived files there.
- Files that are reactivated cannot be archived again for 120 days. Stopping a policy doesn't reactivate files it already archived.
- Excluding a site from a policy doesn't exempt it from another archive policy or manual archiving. Running multiple `AllSites` policies at once slows processing.

## Cost and licensing

The policy needs two things, both set out on Learn. The feature page requires the SharePoint Advanced Management entitlement and says the tenant must meet the Microsoft 365 Archive service and billing prerequisites. The SAM prerequisites page lists a Microsoft 365 or Office 365 base subscription plus one of: at least one user with a Microsoft Copilot licence, the SharePoint Advanced Management Plan 1 add-on on a subscription that includes SharePoint K, P1 or P2, or Microsoft 365 E7. The page that lists SAM features included with Copilot licences does not list the inactive files policy, so confirm which route covers it (see Open questions).

Microsoft 365 Archive follows a pay-as-you-go model and is billed per GB archived. The pricing page says the storage meter is charged only when archived storage plus active storage in SharePoint exceeds the tenant's included or licensed SharePoint storage limit. Its billing scenarios use $0.05/GB/month as the example rate and point to the Pay-as-you-go services and pricing page for pricing. Monthly archive usage counts archived sites plus archived files that sit in non-archived sites.

If Archive is turned off or its billing is unhealthy, the pricing page says archived content stays archived and can be reactivated, but new archive actions are blocked and archived content counts as active storage. Indirect costs are admin time to pilot and review simulations, and support effort for users who hit archived files.

## Scope

**Who and what.** The roadmap item targets SharePoint administrators on Worldwide (Standard Multi-Tenant), on the Web platform. The Learn page covers SharePoint sites; it says OneDrive sites aren't supported in this preview, even though the `New-SPOFileArchivePolicy` reference lists an `AllODBSites` policy type.

**Roles and tools.** The administrator account needs the SharePoint Administrator or Global Administrator role and Microsoft.Online.SharePoint.PowerShell version 16.0.27709.12000 or later.

**Limits during preview.** A single policy holds at most 1,000 associated sites. An `AllSites` policy run scans at most 100,000 sites, with remaining sites picked up in later monthly runs; Microsoft plans to raise that to 1,000,000 by general availability. Built-in file type exclusions apply regardless of the policy's file type filters, and certain file types such as OneNote files, SharePoint pages and SharePoint agents can't be archived.

**Prerequisites.** Microsoft 365 Archive must be set up with pay-as-you-go billing in the Microsoft 365 admin center, as the Archive setup page describes. Enabling Archive alone doesn't create a policy.

## Governance guidance

### Before rollout

- Confirm which SharePoint Advanced Management entitlement your tenant holds, because the feature page requires one.
- Install Microsoft.Online.SharePoint.PowerShell 16.0.27709.12000 or later and sign in with the SharePoint Administrator role.
- Agree an inactivity threshold with site owners, and for critical content pick a period that falls after July 2025.
- Check which apps your users rely on against the file archive limitations list before choosing scope.

### At rollout

- Create the first policy as a `SelectedSites` pilot with `IsWhatIfMode` set to `$true`, and add the pilot site with `Add-SPOSiteToFileArchivePolicy`.
- Add site exclusions with `-Exclude` before activating any `AllSites` policy.
- Activate the policy with `Set-SPOFileArchivePolicy -State Active` while it is still in simulation mode, and tell the affected site owners how results will be reviewed.
- Treat creation, activation and enforcement as three separate steps; do not set `IsWhatIfMode` to `$false` until the report review is signed off.
- For a policy covering more than 100,000 sites, create a new policy with the same criteria, scope and site inclusions or exclusions and set `IsWhatIfMode` to `$false` on that new policy. Switching the existing simulation policy resumes its previous processing position and may skip sites already evaluated in simulation.

### After rollout

- Run `Get-SPOFileArchivePolicyReport` and review configuration, processing coverage, projected impact and outcome reasons with site owners before enabling enforcement.
- Stop a policy by setting its state to Inactive, and remember files already archived stay archived until reactivated.
- Re-check the Learn pages when the roadmap status moves, as preview limits and the default threshold may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Inactivity threshold, scope and file types of an inactive files policy</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Creates the policy in an Inactive state; -LastAccessDateCriteria takes 6 to 48 months, -FileTypeCriteria and -FileTypeExclusionCriteria filter by extension.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SPOFileArchivePolicy -PolicyType SelectedSites -LastAccessDateCriteria 12</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/new-spofilearchivepolicy?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a policy is running or stopped</strong><br><small>Tenant</small><br><small class="controls__note">Preview. -State Inactive stops the policy; files already archived stay archived.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOFileArchivePolicy -PolicyId &lt;policy GUID&gt; -State Active</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Simulation or enforcement for a policy</strong><br><small>Tenant</small><br><small class="controls__note">Preview. $true reports eligible files without archiving; $false archives qualifying files when the policy is active.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOFileArchivePolicy -PolicyId &lt;policy GUID&gt; -IsWhatIfMode $false</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spofilearchivepolicy?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which sites a policy includes or exempts</strong><br><small>Site</small><br><small class="controls__note">Preview. -Exclude is valid only for AllSites or AllODBSites policies; omit it to include a site in a SelectedSites policy. Maximum 1,000 sites per policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-SPOSiteToFileArchivePolicy -PolicyId &lt;policy GUID&gt; -Site &lt;site URL&gt; -Exclude</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/add-spositetofilearchivepolicy?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Review of simulation and enforcement run results</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Read-only: returns run reports for the past 12 months; it does not change the policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-SPOFileArchivePolicyReport -PolicyId &lt;policy GUID&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/get-spofilearchivepolicyreport?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Policies are managed through PowerShell only in the current preview; Learn says SharePoint Admin Agent support is planned before general availability. The cmdlet reference marks the file archive policy cmdlets as part of a feature currently in preview.

Manual file archiving and automatic policy archiving are separate controls: Learn says disabling the user-facing Archive action doesn't prevent automatic policies from archiving files. A site exclusion affects future processing by that policy only; it doesn't reactivate archived files or exempt the site from another archive policy or manual archiving.

A `SelectedSites` policy needs at least one included site before it can be activated, and inclusions and exclusions are valid only for the matching policy type.

## Open questions

- Which default inactivity threshold applies when `-LastAccessDateCriteria` is omitted: 18 months as the `New-SPOFileArchivePolicy` reference says, or 24 months as the Learn feature page says? Watch both pages.
- Which SharePoint Advanced Management entitlement route covers the inactive files policy, given that the Copilot-licence SAM feature table doesn't list it? Check the SAM prerequisites page.
- Will OneDrive for Business sites be supported at general availability, given the `AllODBSites` policy type in the cmdlet reference and the preview's SharePoint-only scope?
- When will the SharePoint admin center or SharePoint Admin Agent offer a way to manage these policies? Watch the Learn page and Message center.

<!-- rationale
risk: Low. The policy is created inactive and archives nothing until an administrator activates it outside simulation mode.
cost: Variable. Microsoft 365 Archive storage is billed per GB through pay-as-you-go billing, and only once archived plus active storage exceeds the tenant's licensed SharePoint storage; a SharePoint Advanced Management entitlement is also required.
impact: Medium. Site owners and users notice when a file they open has been archived and must be reactivated; how many people that is depends on the scope and threshold the admin sets.
-->
