---
title: "Microsoft Purview: archive SharePoint files with retention policies"
slug: "microsoft-purview-archive-sharepoint-files-under-retention-policies"
roadmapId: 562345
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview retention policies gain an archive action that moves inactive SharePoint files to Microsoft 365 Archive. Off until an admin configures it; billed through pay-as-you-go storage, and archived files leave Copilot indexing."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says file-level archive requires a Microsoft 365 E5 licence. Archive storage is billed per GB through pay-as-you-go billing, only above the tenant's storage quota."
audiences: ["compliance","m365-admin","finops","service-owner"]
tags: ["purview","data-lifecycle-management","retention","sharepoint","onedrive","m365-archive","m365-copilot","ediscovery","pay-as-you-go","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 562345"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=562345"
    kind: "roadmap"
  - title: "MC1472601: (Updated) Microsoft Purview: Archive SharePoint files under retention policies"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1472601"
    kind: "message-center"
  - title: "Common settings for retention policies and retention label policies"
    url: "https://learn.microsoft.com/purview/retention-settings"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Set up Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-setup"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-pricing"
    kind: "learn"
  - title: "Manage Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-manage"
    kind: "learn"
  - title: "Frequently asked questions about Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-faq"
    kind: "learn"
videos: []
related: ["purview-retention-last-accessed-sharepoint-onedrive","m365-paygo-consumption-based-meter-for-your-extra-sharepoint-storage-needs","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep"]
controls:
  - governs: "Whether a retention policy archives inactive SharePoint files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api: null
    note: "The archive option is in the policy's retention settings. Not enabled by default; event-based retention unsupported. SharePoint locations need an unrestricted administrator."
  - governs: "Connecting Microsoft 365 Archive to a pay-as-you-go billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Services > Microsoft 365 Archive > Connect a policy"
      docs: "https://learn.microsoft.com/microsoft-365/archive/archive-setup"
    api: null
    note: "Requires SharePoint Administrator or Global Administrator. Earlier tenants may use Settings > Org settings > Pay-as-you-go services instead."
  - governs: "Whether users see the manual Archive action (does not stop policy archiving)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -AllowFileArchive $false"
      docs: "https://learn.microsoft.com/microsoft-365/archive/archive-manage"
    note: "Existing control, not specific to the retention archive action: it hides the manual action and policies still archive. SharePoint Administrator or Global Administrator."
confidence: "high"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-18"
    note: "New briefing: retention-policy archive action for SharePoint files, with Microsoft 365 Archive billing and Copilot indexing effects."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 79 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 76
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "489c985065ce101c3bae92a8a96d7e08"
---

## What's changing

Microsoft Purview Data Lifecycle Management retention policies and retention labels gain an archive action for SharePoint. Microsoft Learn describes it as moving supported inactive files to Microsoft 365 Archive while the files remain subject to retention and legal holds; items that do not support the action stay active. Archived files remain available to Purview eDiscovery and content search but are excluded from Microsoft 365 Copilot indexing.

The admin chooses the **Archive retained items in secure and compliant Microsoft 365 Archive to reduce cost** option in the retention settings, then sets when the archive period starts (created or last modified) and how long files stay active first. Event-based retention is not supported for file-level archive. A file that is already archived stays archived when a policy evaluates it, and after a file is reactivated it cannot be archived, manually or by policy, for 120 days.

The roadmap item (In development, target December CY2026, General Availability) lists GCC, GCC High and DoD, and Web. Microsoft's notice MC1472601, updated 19 October 2026, gives the rollout for GCC, GCC High and DoD as beginning in early December 2026 and expected to complete by early January 2027 (previously early November 2026), with no act-by date. Microsoft Learn already documents the archive action without that cloud qualification, so the roadmap status and the Learn text differ. The notice says no immediate action is required and that the feature is not enabled by default.

## Why it matters

This is a storage-cost and Copilot-relevance lever that compliance teams, not only SharePoint admins, can now pull. Moving inactive content to Microsoft 365 Archive can reduce storage spend once the tenant is over its quota, and keeps stale files out of Copilot answers, while the retention and hold rules keep applying.

Because the archive action is not on by default and existing policies do not archive anything unless an admin updates them, doing nothing leaves current behaviour unchanged. The decisions are whether to use it, for which policies, and who funds the pay-as-you-go meter. Expect questions from users when a file they need is archived and from Copilot users when expected content stops appearing.

## Risk assessment

**Data exposure**
- Archived files are excluded from Microsoft 365 Copilot indexing (Learn), so a broad archive policy can remove content that people expect Copilot to find. Nothing new is exposed; the exposure change is reduced availability to Copilot.
- Archived files stay available to Purview eDiscovery and content search, and the archive action does not replace retention or legal holds.

**Security & identity**
- Users with read access can reactivate an archived file. Review whether that matches who should be able to bring back content that a policy archived.
- The audit log records an **Archived file** (`FileArchived`) event; for automatic archiving it includes the policy ID, policy version and the file's last access date.

**Autonomy & actions**
- A policy archives eligible files on its own once configured, without a per-file approval. Hiding the manual **Archive** action from users does not stop policy archiving: Learn describes the two as separate controls.
- Event-based retention is not supported for file-level archive, so policies built on it cannot use the action.

**Change & support**
- Expect support calls about files that need reactivation, and about the 120-day wait before a reactivated file can be archived again.
- Learn lists the Archive pay-as-you-go billing setup as the way to get the cost savings, and the pricing page says new archive actions are blocked until Microsoft 365 Archive is turned on and billing is healthy. Confirm how that interacts with the retention archive action (see Open questions).

## Cost and licensing

**Licence.** The Purview retention page states that file-level archive requires a Microsoft 365 E5 licence. It adds that no additional setup is required to archive files by using retention policies or labels, and that to use the cost-saving benefits of Microsoft 365 Archive you first set up pay-as-you-go billing for it.

**Meter.** Microsoft 365 Archive is billed per GB of archived data through an Azure subscription linked to pay-as-you-go billing. The pricing page says the meter is charged only when archived plus active SharePoint storage exceeds the tenant's licensed storage capacity, so there is no extra storage cost below that point. Its billing scenarios use $0.05/GB/month as an example rate; confirm the current price on Microsoft's pay-as-you-go services and pricing page. Learn lists an optional budget and alerts on the billing policy; it does not describe a hard cap.

**Indirect costs.** If Microsoft 365 Archive or its billing is turned off or unhealthy, archived content stays archived but counts as active storage. Admin time to design policies and handle reactivation requests is also a cost.

**Not yet published.** The roadmap and notice MC1472601 give no separate price or licence for the retention-driven archive action beyond the pages above.

## Scope

**Who and what.** The archive action applies to SharePoint files. Learn says file-level archive is currently available only on SharePoint sites. Notice MC1472601 names organisations using retention policies in SharePoint Online and OneDrive as affected, and the roadmap description speaks only of SharePoint Online; whether OneDrive files are archived by this action is not stated (see Open questions).

**Roles.** Learn says a restricted administrator assigned administrative units cannot configure a retention policy that includes SharePoint sites; those locations need an unrestricted administrator. Setting up Microsoft 365 Archive needs a SharePoint Administrator or Global Administrator.

**Clouds and rollout.** The roadmap lists GCC, GCC High and DoD on the Web. Microsoft Learn states Microsoft 365 Archive for SharePoint sites is available for GCC organisations; at the time of writing (November 2026) it does not state GCC High or DoD availability for it. MC1472601 gives the early December 2026 to early January 2027 window.

## Governance guidance

### Before rollout
- Inventory the retention policies that cover SharePoint sites and decide which, if any, should gain the archive action; existing policies archive nothing until updated.
- Confirm the tenant holds Microsoft 365 E5 licences for the content in scope, as Learn states file-level archive requires them.
- Ask a SharePoint Administrator or Global Administrator whether Microsoft 365 Archive and its pay-as-you-go billing policy are connected, and who owns the Azure subscription and budget.
- Tell compliance, records and Copilot owners that archived files drop out of Copilot indexing and need reactivation to read.

### At rollout
- Create or edit a retention policy and select the archive option, choosing the archive start (created or last modified) and active period; start with a narrow location.
- Decide whether to hide the manual **Archive** action from users while keeping policy archiving, using the tenant control in the controls table.
- Avoid event-based retention for content you intend to archive, as Learn says it is not supported.

### After rollout
- Search the audit log for **Archived file** (`FileArchived`) to see which policy archived what.
- Review archive storage against the tenant quota and the pay-as-you-go bill; `Get-SPOSite` reports `ArchivedFileDiskUsed` per site.
- Check reactivation requests and the 120-day wait, and adjust the archive period if users keep reactivating.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a retention policy archives inactive SharePoint files</strong><br><small>Tenant</small><br><small class="controls__note">The archive option is in the policy's retention settings. Not enabled by default; event-based retention unsupported. SharePoint locations need an unrestricted administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connecting Microsoft 365 Archive to a pay-as-you-go billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Requires SharePoint Administrator or Global Administrator. Earlier tenants may use Settings &gt; Org settings &gt; Pay-as-you-go services instead.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Services › Microsoft 365 Archive › Connect a policy <a href="https://learn.microsoft.com/microsoft-365/archive/archive-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users see the manual Archive action (does not stop policy archiving)</strong><br><small>Tenant</small><br><small class="controls__note">Existing control, not specific to the retention archive action: it hides the manual action and policies still archive. SharePoint Administrator or Global Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -AllowFileArchive $false</code> <a href="https://learn.microsoft.com/microsoft-365/archive/archive-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The retention archive action is the only control that makes a policy archive files, and it is set in the retention settings of each policy or label. Microsoft Learn's `New-RetentionComplianceRule` and `Set-RetentionComplianceRule` references list no archive parameter at the time of writing (November 2026).

The manual **Archive** action and policy archiving are separate controls: `Set-SPOTenant -AllowFileArchive $false` hides the manual action across the tenant, and admin-defined policies can still archive eligible files. Learn also documents `Set-SPOSite -AllowFileArchive $false` to hide the action on a single site, and `Set-SPOTenant -AllowFileArchiveOnNewSitesByDefault $false` for sites created later. Turning off Archive or its billing blocks new archive actions.

## Open questions

- Does the retention archive action work when Microsoft 365 Archive and pay-as-you-go billing are not connected? The retention page says no additional setup is required, while the pricing page says new archive actions are blocked until Archive is turned on and billing is healthy. Watch the Purview retention settings page.
- Does the action apply to OneDrive files? Notice MC1472601 mentions OneDrive; the Learn page and the roadmap speak of SharePoint. Watch Message center and the Learn page.
- When will the archive action reach GCC High and DoD, given that Learn states Archive for SharePoint sites only for GCC and the roadmap lists all three clouds? Watch MC1472601 and the roadmap item.
- Will PowerShell or another API support creating a retention policy with the archive action? None is documented at the time of writing (November 2026).

<!-- rationale
risk: Medium. Nothing archives until an admin adds the archive action, but a policy then moves files out of active storage and out of Microsoft 365 Copilot indexing, and users must reactivate files to read them.
cost: Variable. File-level archive requires a Microsoft 365 E5 licence, and archive storage is a per-GB pay-as-you-go meter that applies once archived plus active storage exceeds the tenant's storage quota.
impact: Low. Compliance and SharePoint admins configure it, and users notice only where a policy archives their files. Microsoft states it is not enabled by default.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: second paragraph / command: Set-SPOSite -AllowFileArchive $false is the printed command to hide manual archiving on a single site. | Found: Set-SPOSite [-Identity] <SpoSitePipeBind> ... -Identity ... Mandatory: | True | Fix: Replace `Set-SPOSite -AllowFileArchive $false` with `Set-SPOSite -Identity <site_url> -AllowFileArchive $false`, as printed at https://learn.microsoft.com/microsoft-365/archive/archive-manage. The site identity is mandatory and is not supplied by the existing call. | Source: https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Governance controls: first paragraph / absence: The New-RetentionComplianceRule reference lists no archive parameter. | Found: Searched: New-RetentionComplianceRule Set-RetentionComplianceRule archive parameter retention archive files PowerShell. Opened the full New-RetentionComplianceRule reference; read its syntax and parameters. RetentionComplianceAction lists Delete, Keep and KeepAndDelete, not Archive. | Fix: Add https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule to the page's sources to cite the reference on which this absence statement depends.
- [supported, minor] Governance controls: first paragraph / absence: The Set-RetentionComplianceRule reference lists no archive parameter. | Found: Searched: New-RetentionComplianceRule Set-RetentionComplianceRule archive parameter retention archive files PowerShell. Opened the full Set-RetentionComplianceRule reference; read its syntax and parameters. RetentionComplianceAction lists Delete, Keep and KeepAndDelete, not Archive. | Fix: Add https://learn.microsoft.com/powershell/module/exchangepowershell/set-retentioncompliancerule to the page's sources to cite the reference on which this absence statement depends.
- [contradicted, minor] front matter: risk; rationale: risk / consistency: The medium risk rating is based on the consequences of enabling this optional control rather than exposure if it is left at its default. | Found: risk: "medium"; rationale: "Nothing archives until an admin adds the archive action, but a policy then moves files out of active storage and out of Microsoft 365 Copilot indexing". The scale assigns low when nothing happens until admin opt-in. | Fix: Set risk to `low` and replace its rationale with: `Low. The archive action is not enabled by default, and existing retention policies do not archive files unless an administrator updates them. Leaving the new control unconfigured preserves current behaviour.`
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist tells administrators to search FileArchived audit records, but the controls table has no audit-monitoring row. | Found: After rollout: "Search the audit log for Archived file (FileArchived) to see which policy archived what." The three table rows cover retention configuration, billing connection and the manual Archive action, not audit monitoring. | Fix: Remove the checklist bullet `Search the audit log for **Archived file** (`FileArchived`) to see which policy archived what.`; its monitoring control has no corresponding row. Keep the supported audit-event description in Risk assessment.
-->
