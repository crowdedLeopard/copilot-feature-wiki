---
title: "Microsoft Purview: archive SharePoint files from retention policies"
slug: "microsoft-purview-data-lifecycle-management-archive-sharepoint-files-under-retention"
roadmapId: 561208
topic: "governance"
products: ["Microsoft Purview"]
summary: "Retention policies in Purview Data Lifecycle Management gain an opt-in archive action that moves inactive SharePoint files to Microsoft 365 Archive. Learn requires a Microsoft 365 E5 licence; archive storage is billed pay-as-you-go."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says file-level archive requires a Microsoft 365 E5 licence, and Microsoft 365 Archive storage is billed pay-as-you-go per GB through an Azure subscription. A rate specific to retention-based archiving is not yet published."
audiences: ["compliance","m365-admin","finops","service-owner"]
tags: ["purview","data-lifecycle-management","retention","m365-archive","sharepoint","pay-as-you-go","m365-copilot","ediscovery"]
sources:
  - title: "Microsoft 365 Roadmap 561208"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561208"
    kind: "roadmap"
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
  - title: "Compliance features in Microsoft 365 Archive"
    url: "https://learn.microsoft.com/microsoft-365/archive/archive-compliance"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
  - title: "New-RetentionComplianceRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancerule"
    kind: "learn"
  - title: "MC1325441: (Updated) Microsoft Purview | Data Lifecycle Management - Archive SharePoint files under retention"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1325441"
    kind: "message-center"
videos: []
related: ["microsoft-purview-archive-sharepoint-files-under-retention-policies","purview-retention-last-accessed-sharepoint-onedrive","auditing","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep"]
controls:
  - governs: "Whether a retention policy archives inactive SharePoint files"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Assign admin units > Full directory > Static > Choose locations > Decide if you want to retain content, delete it, or both"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api: null
    note: "Turn on the SharePoint sites location, then on the retain/delete page select 'Archive retained items in secure and compliant Microsoft 365 Archive to reduce cost'. Not enabled by default."
  - governs: "Connection of Microsoft 365 Archive to a pay-as-you-go billing policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Services > Microsoft 365 Archive > Connect a policy > Connection status"
      docs: "https://learn.microsoft.com/microsoft-365/archive/archive-setup"
    api: null
    note: "Flow for new configurations after October 2026; the page gives an earlier flow under Settings > Org settings. SharePoint Administrator or Global Administrator."
  - governs: "Whether users can archive files manually, separate from policy archiving"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -AllowFileArchive $false"
      docs: "https://learn.microsoft.com/microsoft-365/archive/archive-manage"
    note: "Hides the Archive action from users; admin-defined policies can still archive eligible files. SharePoint Administrator or Global Administrator."
  - governs: "Audit records of files archived by users or policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -Operations FileArchived"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell."
confidence: "high"
created: "2026-11-19"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-19"
    note: "First briefing: retention-policy archive action for SharePoint files, with its E5 and pay-as-you-go billing requirements, opt-in default and controls."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 81 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected the retention-policy and billing-connection admin paths, described the Public Preview dates as planned in MC1325441, and removed the optional budget step from the pre-rollout checklist."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 75 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Corrected the retention-policy admin path to include the Assign admin units step, and updated the General Availability target and MC1325441 rollout dates to match the current record and notice."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
version: 3
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 89
  confirmed: 89
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "8d704380f22553319eb9936295279f4e"
---

## What's changing

Microsoft Purview Data Lifecycle Management retention policies for SharePoint gain an archive action, alongside the existing keep and delete actions. Learn says the action "moves supported inactive files to Microsoft 365 Archive while the files remain subject to retention and legal holds", and that it can be added to retention policies and retention labels. Archived files stay available to Microsoft Purview eDiscovery and content search but are excluded from Microsoft 365 Copilot indexing.

The archive action is not enabled by default, and existing retention policies and labels do not archive files unless an administrator updates them to include it. In the retention settings an admin selects **Archive retained items in secure and compliant Microsoft 365 Archive to reduce cost**, then sets when the archive period starts (when items were created or last modified) and how long files remain active before they are archived. Learn says event-based retention is not supported for file-level archive, and that a file already archived stays archived when a policy evaluates it again.

A user with read access can reactivate an archived file. After reactivation the file cannot be archived manually or by policy for 120 days, and retention and hold requirements continue to apply.

The roadmap record shows status In development, with a preview target of September CY2026 and a General Availability target of December CY2026, for Worldwide (Standard Multi-Tenant) on the web. Microsoft's notice MC1325441 (updated 23 November 2026) gives a planned Public Preview rollout from early September 2026 to early October 2026, and says General Availability (Worldwide) rollout will begin in early December 2026 and is expected to complete by early January 2027. The notice sets no act-by date and says no immediate action is required.

## Why it matters

This gives records and compliance teams a way to cut SharePoint storage cost without leaving retention scope: Learn states that archived files remain subject to retention and legal holds, and that archived content still honours the retention and deletion periods of retention policies and labels. It also changes what Copilot can draw on, because archived files are excluded from Copilot indexing. That helps relevance, and it means an over-broad archive rule can remove current-looking content from Copilot answers.

If nobody acts, the notice says the feature is not enabled by default and existing policies are unchanged, so nothing is archived by this feature. The decision is whether the storage saving justifies the licence and billing set-up, and who owns the archive periods.

## Risk assessment

**Data exposure**
- Archived files stay inside the tenant's compliance boundary: Learn says archived data stays within the geo compliance boundary and keeps the same level of security as active data. Sensitivity label settings are still honoured on archived content.
- Archiving excludes files from Copilot indexing, which narrows what Copilot can ground on. Choose archive periods that match how stale a file must be before Copilot should stop seeing it.

**Security & identity**
- Archiving is not an access barrier: any user with read access to an archived file can reactivate it, and Learn says permissions and access policies are retained on the site through archiving and reactivation.
- Archive actions are written to the audit log as **Archived file** (`FileArchived`), identifying the user or system account, so policy-driven archiving is traceable.

**Autonomy & actions**
- Once a retention policy includes the archive action, files are moved without a person approving each one. A policy does not reactivate or otherwise change a file that is already archived.
- After a file is archived it requires reactivation before it can be read, and after reactivation it cannot be archived again by policy for 120 days.

**Change & support**
- Expect helpdesk questions from users who open an archived file and find it must be reactivated first.
- Archived storage adds a pay-as-you-go meter that requires a linked Azure subscription (see Cost and licensing).

## Cost and licensing

**Licence.** The Common settings for retention policies page says: "File-level archive requires a Microsoft 365 E5 license." It adds that no additional setup is required to archive files by using retention policies or labels, and that to use the cost-saving benefits of Microsoft 365 Archive you first set up pay-as-you-go billing for it.

**Meter.** Microsoft 365 Archive storage is charged at a per-GB monthly rate. The pricing page says the meter is charged only when archived storage plus active storage in SharePoint exceeds the tenant's included or licensed SharePoint storage capacity limit. Monthly archive usage counts the storage of archived sites and of archived files in non-archived SharePoint sites. The pricing page's billing scenarios use $0.05/GB/month in an example; the pricing page links to a separate page for the current price list. Before Archive can be used, an Azure subscription must be linked in pay-as-you-go billing.

**Budget.** When creating the billing policy, the setup page lets an admin optionally set a budget and alerts. It does not say that use stops when the budget is reached.

**Indirect costs.** Admin time to design archive periods, and user time reactivating files. If Archive is turned off or its billing is unhealthy, the pricing page says archived content stays archived but counts as active storage usage, and new archive actions are blocked.

**Not yet published.** The pricing page counts archived files in non-archived sites within the same meter; a rate specific to retention-based archiving is not published separately at the time of writing (November 2026).

## Scope

**Who and what.** The retention policies and labels that can carry the archive action apply to SharePoint; the Message Center notice also names OneDrive retention policies as affected. Learn gives the action for SharePoint files. Items that do not support the archive action remain active.

**Licences and roles.** Learn says file-level archive requires a Microsoft 365 E5 licence. Setting up Microsoft 365 Archive requires the SharePoint Administrator or Global Administrator role; creating retention policies has its own permissions, set out in the Data Lifecycle Management permissions page that the retention policy article links to.

**Clouds, platform and rollout.** The roadmap lists Worldwide (Standard Multi-Tenant) and the web platform, with release phases General Availability and Preview. Rollout windows are those in MC1325441 above.

**Prerequisites.** Microsoft 365 Archive needs pay-as-you-go billing linked to an Azure subscription. The setup page covers both the Billing > Pay-as-you-go flow used for new configurations after October 2026 and an earlier Settings > Org settings flow.

## Governance guidance

### Before rollout
- Review current retention policies in Microsoft Purview Data Lifecycle Management and list the SharePoint locations where an archive period would suit inactive content, as the notice recommends.
- Confirm Microsoft 365 E5 licensing against the Learn requirement, and ask finance owners to approve the archive storage meter.
- Connect Microsoft 365 Archive to a pay-as-you-go billing policy in the Microsoft 365 admin center.
- Decide whether users keep the manual **Archive** action; hide it with the tenant PowerShell setting if policies alone should archive files.

### At rollout
- Add the archive action to one retention policy first, in the retention settings of the Microsoft Purview portal, and set when the archive period starts and how long files stay active.
- Tell compliance and records management stakeholders that archived files must be reactivated before they can be read, and that policies cannot re-archive a reactivated file for 120 days.

### After rollout
- Search the audit log for **Archived file** (`FileArchived`) to see which policy archived which files.
- Review the Microsoft 365 Archive charge against the tenant's SharePoint storage allocation before widening the policy.
- Check Message center and the roadmap item for changes to the rollout dates.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a retention policy archives inactive SharePoint files</strong><br><small>Tenant</small><br><small class="controls__note">Turn on the SharePoint sites location, then on the retain/delete page select 'Archive retained items in secure and compliant Microsoft 365 Archive to reduce cost'. Not enabled by default.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy › Assign admin units › Full directory › Static › Choose locations › Decide if you want to retain content, delete it, or both <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Connection of Microsoft 365 Archive to a pay-as-you-go billing policy</strong><br><small>Tenant</small><br><small class="controls__note">Flow for new configurations after October 2026; the page gives an earlier flow under Settings &gt; Org settings. SharePoint Administrator or Global Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Services › Microsoft 365 Archive › Connect a policy › Connection status <a href="https://learn.microsoft.com/microsoft-365/archive/archive-setup" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can archive files manually, separate from policy archiving</strong><br><small>Tenant</small><br><small class="controls__note">Hides the Archive action from users; admin-defined policies can still archive eligible files. SharePoint Administrator or Global Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -AllowFileArchive $false</code> <a href="https://learn.microsoft.com/microsoft-365/archive/archive-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit records of files archived by users or policies</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Run the cmdlet in Exchange Online PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -Operations FileArchived</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The archive action is set per retention policy (retention labels can also carry it, according to Learn), so the control sits wherever the policy or label is edited; the table gives the policy route. Manual user archiving and policy archiving are separate controls: Learn says setting `-AllowFileArchive` to False on the tenant hides the **Archive** action from users while admin-defined policies can still archive eligible files. Policies can still archive eligible files when the setting is False.

The tenant setting is changed by a SharePoint Administrator or Global Administrator. Learn also describes `Set-SPOSite -AllowFileArchive` for individual sites and `Set-SPOTenant -AllowFileArchiveOnNewSitesByDefault` for new sites; both concern manual archiving only. To see how much storage archived files use on a site, Learn names the `ArchivedFileDiskUsed` property of `Get-SPOSite`.

Audit search needs the Audit Logs or View-Only Audit Logs role in the Microsoft Purview portal.

## Open questions

- Does a retention policy with the archive action run when Microsoft 365 Archive is not yet connected to billing? The retention settings page says no additional setup is required, while the pricing page says new archive actions are blocked until Archive is turned on and billing is healthy. Watch the Learn pages and MC1325441.
- Which users or sites must hold the Microsoft 365 E5 licence for file-level archive? The retention settings page states the requirement without saying.
- Which items do not support the archive action? The retention settings page says they remain active and does not list them.
- Do the preview and General Availability releases behave differently? The roadmap lists both phases and still shows In development, while Learn already describes the action. Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Microsoft's notice MC1325441 says the feature is not enabled by default and existing retention policies stay unchanged, so no file moves until an admin adds the archive action to a policy.
cost: Variable. Learn says file-level archive requires a Microsoft 365 E5 licence, and Microsoft 365 Archive storage is a pay-as-you-go per-GB monthly meter, charged once archived plus active storage passes the tenant's SharePoint allocation.
impact: Low. Compliance and SharePoint admins see a new option; users notice once a policy archives their files, which then need reactivating before they can be read.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; rationale: risk / behaviour: Existing retention policies and labels must be updated to include the archive action before they archive files. | Found: Existing retention policies and labels don't archive files unless an administrator updates them to include the archive action. | Fix: Add: 'The feature-specific retention settings guidance says existing policies can be updated to add archiving; the general create-retention-policies article still says retention settings other than the retention period cannot be changed after creation.' Both https://learn.microsoft.com/purview/retention-settings and https://learn.microsoft.com/purview/create-retention-policies are already cited. | Source: https://learn.microsoft.com/purview/retention-settings
- [supported, minor] Risk assessment: Security & identity; controls[3]; Governance guidance: After rollout / behaviour: File archive actions, including policy-driven actions, are recorded as Archived file (FileArchived). | Found: File archive actions are recorded in the Microsoft 365 audit log. The Archived file (FileArchived) record identifies the user or system account that archived the file. | Fix: Add: 'The archive-specific guidance documents FileArchived events for automatic archiving, although the general retention overview still says retention actions are audited for retention labels only, not retention policies.' Cite https://learn.microsoft.com/purview/retention#auditing-retention-configuration-and-actions alongside the existing archive sources. | Source: https://learn.microsoft.com/purview/retention-settings
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Purview policy route reaches the retain/delete settings page through Full directory and Static. | Found: For the Assign admin units page, keep the default of Full directory. ... For the Choose the type of retention policy to create page, select Adaptive or Static ... If you chose Static: On the Choose locations page | Fix: Replace controls[0].ui.path and its rendered route with 'Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy > Assign admin units > Full directory > Choose the type of retention policy to create > Static > Choose locations > Decide if you want to retain content, delete it, or both > Archive retained items in secure and compliant Microsoft 365 Archive to reduce cost'. The existing cited pages https://learn.microsoft.com/purview/create-retention-policies and https://learn.microsoft.com/purview/retention-settings document the route and final option. | Source: https://learn.microsoft.com/purview/create-retention-policies
-->
