---
title: "Microsoft Purview: Azure PST Import to Exchange Online mailboxes"
slug: "microsoft-purview-data-lifecycle-management-azure-pst-import"
roadmapId: 557559
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a PowerShell-only way to import PST files from Azure Blob Storage into Exchange Online mailboxes, in preview from January CY2027 and general availability targeted March CY2027. Admin-driven; no direct user impact."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "March CY2027"
previewDate: "January CY2027"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft publishes user rights for bulk-importing PST files to Exchange Online mailboxes, including Exchange Online P2 and Microsoft 365 E5/A5/G5/E3/A3/G3. Any licence or charge specific to Azure PST Import is not yet published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","exchange","migration","data-lifecycle-management","powershell","retention","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 557559"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557559"
    kind: "roadmap"
  - title: "MC1281505"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1281505"
    kind: "message-center"
  - title: "Learn about importing your organization's PST files"
    url: "https://learn.microsoft.com/purview/pst-import-overview"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan and manage costs for Azure Blob Storage"
    url: "https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs"
    kind: "learn"
  - title: "Assign Azure roles using the Azure portal"
    url: "https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal"
    kind: "learn"
  - title: "Assign an Azure role for access to blob data"
    url: "https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Access of the Office 365 Import Service app to the Azure storage account holding the PST files"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "resource > Access control (IAM) > Role assignments > Add > Add role assignment"
      docs: "https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal"
    api:
      kind: "azure-cli"
      call: "az role assignment create --role \"Storage Blob Data Reader\" --assignee-object-id \"<object-id>\" --assignee-principal-type \"<type>\" --scope \"/subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.Storage/storageAccounts/<account>\""
      docs: "https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access"
    note: "General Azure role-assignment control; MC1281505 names the role and the app. Assigning roles needs Microsoft.Authorization/roleAssignments/write permissions at the scope or higher."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: PowerShell-only Azure PST Import, with the timeline Microsoft updated on 17 November 2026."
  - date: "2026-11-17"
    note: "First briefing: Azure PST Import is known from the roadmap item and Microsoft's notice MC1455013; Microsoft Learn has no page for it yet."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected licensing (Microsoft publishes bulk-PST-import user rights; model now included) and cost (variable: Azure Blob Storage is metered), and added the storage account step to the Azure role path."
  - date: "2026-11-17"
    note: "Corrected for the Worldwide item (preview January 2027, target March 2027, MC1281505): licensing now cites Microsoft's published bulk-PST-import user rights, cost is rated variable for Azure Blob Storage metering, and the Azure role path includes the storage account step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 87 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Corrected: cited the existing PST import page, removed two checklist steps without table rows and a user-search detail; text now follows roadmap 565865 (GCC, GCC High, DoD; April CY2027) and MC1455013."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 80 statements confirmed"
  - date: "2026-11-18"
    note: "Rewritten for the Worldwide roadmap item 557559 and notice MC1281505: preview January 2027, general availability March 2027, with the rollout windows Microsoft gave on 17 November 2026."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 85 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Corrected licensing to included, citing Microsoft's published bulk-PST-import user rights, and removed the retention-review checklist step that had no controls row."
  - date: "2026-11-18"
    note: "Corrected licensing: Microsoft publishes bulk-PST-import user rights, so the model is now included; removed the retention-review checklist step that had no controls row. Text follows roadmap 565865 (GCC, GCC High, DoD; April CY2027) and MC1455013."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 85 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Corrected the open question on existing import limits to separate the 20 GB size guidance from the enforced limits; text now follows this Worldwide item (preview January CY2027, target March CY2027) and MC1281505."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 86 statements not yet confirmed"
  - date: "2026-11-18"
    note: "Corrected the New-MigrationEndpoint note: -PSTImport is documented as on-premises only and reserved for internal Microsoft use; text now follows roadmap 565865 (GCC, GCC High, DoD; April CY2027) and MC1455013."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 83 statements confirmed"
  - date: "2026-11-18"
    note: "Timeline updated by Microsoft on 17 November 2026: Public Preview now mid-January 2027 and Worldwide rollout early to late March 2027. Text now follows this Worldwide item and MC1281505."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 89 statements not yet confirmed"
version: 11
verification:
  status: "verified-with-gaps"
  date: "2026-11-18"
  version: 11
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 89
  confirmed: 89
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "5307b86f8c813180ee366fcb496daa29"
---

## What's changing

Azure PST Import is a planned method for importing PST files that sit in Azure Blob Storage straight into Exchange Online mailboxes. The roadmap item describes the standard two-step Exchange Migration Service pattern: an analysis phase that validates and assesses the PST data, then the migration itself. Administrators create a migration endpoint, run an analysis-only migration batch, use the results to configure the final batch, and start it.

Microsoft's notice MC1281505 adds that the process is run with PowerShell cmdlets only and is not available through a graphical user interface. It lists the steps as: create an Azure PST Import migration endpoint, run a batch in Analyze mode, review the analysis results and reports, create and start the import batch, and clean up after the import. Microsoft Learn has no page for this feature yet, so what is said here about its behaviour is the roadmap's and the notice's description.

This is separate from the existing PST import in the Microsoft Purview portal, where administrators upload PST files by network upload or ship a drive and create an import job on the **Import PST files** page; see [Learn about importing your organization's PST files](https://learn.microsoft.com/purview/pst-import-overview).

The roadmap item is In development, with a preview target of January CY2027 and a General Availability target of March CY2027. It lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform. MC1281505, updated 17 November 2026, says the Public Preview begins rolling out mid-January 2027 (previously mid-October 2026) and completes by mid-February 2027 (previously late October 2026), and the Worldwide rollout begins early March 2027 (previously late January) and completes by late March 2027 (previously late February). The notice sets no act-by date.

## Why it matters

If you migrate historical email from PST files, this would give you an Exchange migration-service route that validates the files and the target mailboxes before anything is written, and produces reports along the way. That matters most to organisations clearing out file-share or desktop PSTs, where the risk is importing into the wrong mailbox or into a mailbox that cannot hold the data.

Microsoft's notice describes the feature as admin-driven, so it does not reach users or mailbox data until an administrator runs the process. Treat it as an option from the preview in January 2027 and the March 2027 general availability target rather than a change that lands on its own, and decide now who will hold the Azure storage and mailbox permissions it needs.

## Risk assessment

**Data exposure**

- Imported PST content is stored in the target Exchange Online mailboxes within your tenant, under your tenant's data residency and storage configuration, per MC1281505. Check what the PST files contain before analysis, because the import writes it into mailboxes.
- Once imported, mailbox data becomes subject to the retention policies, retention labels, holds and deletion workflows already set on the target mailboxes, per MC1281505. Review what applies to each target mailbox before you start the import batch.

**Security & identity**

- The target storage account must grant the **Storage Blob Data Reader** role to the **Office 365 Import Service** app; without it, creating the Azure PST Import endpoint fails, per MC1281505. Grant it on the target storage account only, and review the assignment after the import.
- MC1281505 says the endpoint creation cmdlet validates the storage account and container during setup. Microsoft has not said which identity or credential the cmdlet uses beyond that role assignment; confirm this before changing any firewall or network rule on the storage account.

**Autonomy & actions**

- MC1281505 describes no automatic or scheduled imports: the administrator creates and starts the import batch after reviewing the analysis. Make the Analyze-mode review a named step in your own change process.

**Change & support**

- MC1281505 lists the analysis conditions: an appropriate licence assigned, mailbox not inactive or soft-deleted, recipient type UserMailbox, archive enabled where the import targets the archive, ArchiveQuota and RecoverableItemsQuota validations, and that all specified PST files exist and their sizes are validated. Expect failed analysis rows for mailboxes that do not meet these conditions and fix them before the import batch.
- With no graphical interface, support staff need the cmdlets and the batch input files (XML and/or CSV) to hand; the notice does not name the cmdlets.

## Cost and licensing

Microsoft publishes user rights for bulk-importing PST files to Exchange Online mailboxes, including Exchange Online P2 and Microsoft 365 E5/A5/G5/E3/A3/G3, in its [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description). Microsoft has not published any licence requirement or charge specific to Azure PST Import. MC1281505 says target mailboxes need an appropriate licence assigned, without naming one.

MC1281505 requires an Azure storage account and container that already exist and hold the PST files. Azure documents that when you create or use Blob Storage resources you are charged for meters including data storage (per GB per month) and operations (per transaction); see [Plan and manage costs for Azure Blob Storage](https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs). Expect those meters on the account that holds the PST files. Microsoft has not described any storage cost specific to this feature.

Plan for admin time: preparing the XML or CSV batch input files, running the Analyze-mode batch, reviewing reports and cleaning up afterwards.

## Scope

MC1281505 names the affected audience as Microsoft 365 administrators managing Exchange Online, administrators using Microsoft Purview Data Lifecycle Management, and organisations that import PST files into user or archive mailboxes. It says there is no direct user impact.

The roadmap item lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, with the release phases General Availability and Preview. The rollout windows are in What's changing.

Prerequisites in the notice: an existing, reachable Azure storage account and container; the Storage Blob Data Reader role granted to the Office 365 Import Service app on the target storage account; and target mailboxes that meet the analysis conditions listed under Risk assessment. The Exchange or Purview admin roles needed to run the cmdlets are not yet published.

## Governance guidance

### Before rollout

- Identify which PST files you intend to import and which mailboxes (primary or archive) are the targets.
- Check each target mailbox against the conditions in MC1281505: licence assigned, not inactive or soft-deleted, recipient type UserMailbox, and archive enabled where the import goes to the archive.
- Decide who will hold Azure permission to assign roles on the storage account (see the controls table).

### At rollout

- Confirm the storage account and container exist and are reachable, and grant the Storage Blob Data Reader role to the Office 365 Import Service app on that account (see the controls table).
- Prepare the XML and/or CSV batch input files and run the first migration batch in Analyze mode.
- Review the analysis results and reports, including the quota and file-existence checks, before creating and starting the import batch.

### After rollout

- Perform the post-import cleanup that MC1281505 lists as part of the workflow.
- Review the role assignment on the storage account once no further imports are planned, and remove it if it is no longer needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access of the Office 365 Import Service app to the Azure storage account holding the PST files</strong><br><small class="controls__note">General Azure role-assignment control; MC1281505 names the role and the app. Assigning roles needs Microsoft.Authorization/roleAssignments/write permissions at the scope or higher.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>resource › Access control (IAM) › Role assignments › Add › Add role assignment <a href="https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az role assignment create --role &quot;Storage Blob Data Reader&quot; --assignee-object-id &quot;&lt;object-id&gt;&quot; --assignee-principal-type &quot;&lt;type&gt;&quot; --scope &quot;/subscriptions/&lt;sub-id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Storage/storageAccounts/&lt;account&gt;&quot;</code> <a href="https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

MC1281505 says the feature is controlled through administrator access to the PowerShell cmdlets and through Azure role assignments, including permissions on the storage account used for the import. The notice does not name the cmdlets or the Exchange or Purview roles needed to run them, and Microsoft Learn describes no Azure PST Import cmdlets at the time of writing (November 2026), so the table has no row for them.

The Azure role row is a general Azure control: it is the mechanism for the role assignment the notice requires, and the Learn pages cited describe role assignment in general, not Azure PST Import. Azure says role assignments can take up to 10 minutes to take effect.

## Open questions

- Which cmdlet names, Exchange or Purview roles and batch file formats does Azure PST Import use? Watch the Microsoft Learn page for the feature and Message center.
- Does Azure PST Import carry any licence requirement or charge beyond the existing bulk-PST-import user rights and ordinary Azure Blob Storage metering?
- Does it turn on retention hold for imported mailboxes, as the existing Purview PST import does? Without that, retention settings could delete old imported items.
- Do the existing Purview PST import size guidance (PST files no larger than 20 GB) and limits (150 MB items and 100 GB into an archive in one import) apply to Azure PST Import?
- Is any audit event recorded for the Azure PST Import steps beyond the existing Exchange Online and Microsoft Purview audit logging the notice refers to?

<!-- rationale
risk: Medium. Imported mail is written into live Exchange Online mailboxes and then falls under the retention policies, holds and deletion workflows on those mailboxes, per Microsoft's notice MC1281505; only administrators run it.
cost: Variable. The Azure storage account holding the PST files must exist, and Azure Blob Storage is metered (data storage per GB per month, operations per transaction); Azure PST Import-specific charges are not yet published.
impact: Low. Microsoft's notice MC1281505 says there is no direct user impact and the feature is admin-driven; users notice only the imported mail appearing in their mailboxes.
-->

<!-- verifier-findings (2026-11-18, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; front matter: previewDate; What's changing; Why it matters / record: The preview is planned for January CY2027. | Found: "previewDate": "January CY2027" | Fix: In the summary, replace 'in preview from January CY2027' with 'with preview targeted for January CY2027'.
-->
