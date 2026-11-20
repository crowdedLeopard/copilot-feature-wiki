---
title: "Microsoft Purview: Azure PST Import to Exchange Online mailboxes (GCC, GCC High and DoD)"
slug: "microsoft-purview-data-lifecycle-management-azure-pst-import-us-government"
roadmapId: 565865
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a PowerShell-based way to import PST files from Azure Blob Storage into Exchange Online mailboxes, listed for GCC, GCC High and DoD (April CY2027 target). Admin-driven; no direct user impact."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's Purview service description lists user rights for bulk-importing PST files to Exchange Online mailboxes, including Exchange Online P2 and Microsoft 365 E5/A5/G5/E3/A3/G3. A licence or charge specific to Azure PST Import is not yet published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","exchange","migration","data-lifecycle-management","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565865"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565865"
    kind: "roadmap"
  - title: "MC1455013: (Updated) Microsoft Purview: Data Lifecycle Management- Azure PST Import"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1455013"
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
  - title: "New-MigrationEndpoint"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-migrationendpoint?view=exchange-ps"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-azure-pst-import","auditing"]
controls:
  - governs: "Access of the Office 365 Import Service app to the Azure storage account holding the PST files"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "storage account > Access control (IAM) > Role assignments > Add > Add role assignment > Role > Job function roles > Storage Blob Data Reader > Members > User, group, or service principal > Select members > Office 365 Import Service"
      docs: "https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal"
    api:
      kind: "azure-cli"
      call: "az role assignment create --role \"Storage Blob Data Reader\" --assignee-object-id \"<object-id>\" --assignee-principal-type \"<type>\" --scope \"<storage-account-scope>\""
      docs: "https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access"
    note: "General Azure role-assignment control; MC1455013 names the role and the app. Assigning roles needs Microsoft.Authorization/roleAssignments/write permissions at the scope or higher."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-11-17T18:34:37"
changes:
  - date: "2026-11-19"
    note: "First briefing for roadmap item 565865 (GCC, GCC High, DoD; April CY2027 target) and notice MC1455013, whose Global rollout now begins early April 2027."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 71 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 82 statements confirmed"
version: 1
verification:
  status: "verified"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 82
  confirmed: 82
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "02768d984e9363b5d6c1ee2f6e147a30"
---

## What's changing

Azure PST Import is a planned method for importing PST files that sit in Azure Blob Storage straight into Exchange Online mailboxes. The roadmap item describes the standard two-step Exchange Migration Service pattern: an analysis phase that validates and assesses the PST data, then the migration itself. Administrators create a migration endpoint, run an analysis-only migration batch, use the results to configure the final batch, and start it.

Microsoft's notice MC1455013 adds that administrators complete the process with PowerShell cmdlets only, and that it is not available through a graphical user interface. It lists the steps as: create an Azure PST Import migration endpoint, run a batch in Analyze mode, review the analysis results and reports, create and start the import batch, and perform post-import cleanup. Microsoft Learn has no page for this feature at the time of writing (November 2026), so what is said here about its behaviour is the roadmap's and the notice's description.

Learn documents a different, existing PST import in the Microsoft Purview portal, where administrators upload PST files by network upload or ship a drive and create an import job; see [Learn about importing your organization's PST files](https://learn.microsoft.com/purview/pst-import-overview). Microsoft lists Azure PST Import under two roadmap items. This page covers item 565865, which lists the GCC, GCC High and DoD clouds; the Worldwide item, 557559, is covered at [Microsoft Purview: Azure PST Import to Exchange Online mailboxes](/features/microsoft-purview-data-lifecycle-management-azure-pst-import/).

The roadmap item is In development, lists the Web platform and General Availability as its release phase, and has a target of April CY2027 with no preview date. MC1455013, updated 17 November 2026, gives a Global rollout that begins early April 2027 (previously early December 2026) and completes by late April 2027 (previously late December 2026). The notice sets no act-by date.

## Why it matters

If you migrate historical email from PST files, this would give you an Exchange migration-service route that validates the files and the target mailboxes before anything is written, and produces reports along the way. That matters most to organisations clearing out file-share or desktop PSTs, where the risk is importing into the wrong mailbox or into a mailbox that cannot hold the data.

Microsoft's notice describes the feature as admin-driven with no direct user impact, and says it is controlled through administrator access to PowerShell cmdlets and Azure role assignments. Microsoft has not stated a default beyond that, so treat it as an option from the April CY2027 target rather than a change that lands on its own, and decide now who will hold the Azure storage and mailbox permissions it needs.

## Risk assessment

**Data exposure**

- Imported PST content is stored in the target Exchange Online mailboxes within your tenant, under your tenant's data residency and storage configuration, per MC1455013. Check what the PST files contain before analysis, because the import writes it into mailboxes.
- Once imported, mailbox data becomes subject to the retention policies, retention labels, holds and deletion workflows already set on the target mailboxes, per MC1455013. Review what applies to each target mailbox before you start the import batch.

**Security & identity**

- The notice says the Storage Blob Data Reader role must be granted to the Office 365 Import Service app on the target storage account, and that without it creating the Azure PST Import endpoint fails. Grant it on the storage account and review the assignment after the import.
- MC1455013 says the endpoint creation cmdlet validates the storage account and container during setup. Confirm which component contacts the storage account before changing any firewall or network rule on it.

**Autonomy & actions**

- MC1455013 describes the import as admin-driven: an administrator runs the Analyze-mode batch, reviews the results, then creates and starts the import batch. Make the Analyze-mode review a named step in your own change process.

**Change & support**

- MC1455013 lists the analysis conditions: an appropriate licence assigned, mailbox not inactive or soft-deleted, recipient type UserMailbox, archive enabled where the import targets the archive, ArchiveQuota and RecoverableItemsQuota validations, and that all specified PST files exist and their sizes are validated. Expect failed analysis results for mailboxes that do not meet these conditions and fix them before the import batch.
- With no graphical interface, support staff need the cmdlets and the batch input files (XML and/or CSV) to hand.
- The notice says administrative actions related to PST import and the resulting mailbox changes are logged using existing Exchange Online and Microsoft Purview audit logging mechanisms.

## Cost and licensing

Microsoft's [Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists the licences that provide user rights to bulk-import PST files to Exchange Online mailboxes: Exchange Online P2, Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5/E3/A3/G3. A licence requirement or charge specific to Azure PST Import is not yet published. MC1455013 says target mailboxes need an appropriate licence assigned, without naming one.

MC1455013 requires an Azure storage account and container that already exist and are reachable. Azure documents that when you create or use Blob Storage resources you are charged for meters including data storage (per GB per month) and operations (per transaction); see [Plan and manage costs for Azure Blob Storage](https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs). Expect those meters on the account that holds the PST files.

Plan for admin time: preparing the XML or CSV batch input files, running the Analyze-mode batch, reviewing reports and cleaning up afterwards.

## Scope

MC1455013 names the affected audience as Microsoft 365 administrators managing Exchange Online, administrators using Microsoft Purview Data Lifecycle Management, and organisations that import PST files into user or archive mailboxes. It says there is no direct user impact.

The roadmap item lists the GCC, GCC High and DoD clouds and the Web platform, with General Availability as its release phase. The notice describes its rollout as Global; the dates are in What's changing.

Prerequisites in the notice: an existing, reachable Azure storage account and container; the Storage Blob Data Reader role granted to the Office 365 Import Service app on the target storage account; and target mailboxes that meet the analysis conditions listed under Risk assessment. The notice names no Exchange or Purview admin role for running the cmdlets.

## Governance guidance

### Before rollout

- Identify which PST files you intend to import and which mailboxes, primary or archive, are the targets.
- Decide who will hold Azure permission to assign roles on the storage account, as the controls table's role-assignment row requires.

### At rollout

- Confirm the storage account and container exist and are reachable, then grant the Storage Blob Data Reader role to the Office 365 Import Service app on that account (see the controls table).
- Prepare the XML and/or CSV batch input files and run the first migration batch in Analyze mode.
- Review the analysis results and reports, including the quota and file-existence checks, before creating and starting the import batch.

### After rollout

- Perform the post-import cleanup that MC1455013 lists as part of the workflow.
- Review the role assignment on the storage account once no further imports are planned, and remove it if it is no longer needed.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Access of the Office 365 Import Service app to the Azure storage account holding the PST files</strong><br><small class="controls__note">General Azure role-assignment control; MC1455013 names the role and the app. Assigning roles needs Microsoft.Authorization/roleAssignments/write permissions at the scope or higher.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>storage account › Access control (IAM) › Role assignments › Add › Add role assignment › Role › Job function roles › Storage Blob Data Reader › Members › User, group, or service principal › Select members › Office 365 Import Service <a href="https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az role assignment create --role &quot;Storage Blob Data Reader&quot; --assignee-object-id &quot;&lt;object-id&gt;&quot; --assignee-principal-type &quot;&lt;type&gt;&quot; --scope &quot;&lt;storage-account-scope&gt;&quot;</code> <a href="https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

MC1455013 says the feature is controlled through administrator access to the PowerShell cmdlets and through Azure role assignments, including permissions on the storage account used for the import. The notice does not name the cmdlets, and Microsoft Learn documents no Azure PST Import cmdlet or parameter at the time of writing (November 2026), so the table has no row for them.

The Azure role row is a general Azure control: it is the mechanism for the role assignment the notice requires, and the Learn pages cited describe role assignment in general, not Azure PST Import. Azure says role assignments can take up to 10 minutes to take effect.

## Open questions

- Which cmdlet names, Exchange or Purview roles and batch file formats does Azure PST Import use? Watch the Microsoft Learn page for the feature and Message center.
- Does Azure PST Import carry any licence requirement or charge beyond the existing bulk-PST-import user rights and ordinary Azure Blob Storage metering?
- MC1455013 describes a Global rollout while the roadmap item lists GCC, GCC High and DoD. How the notice's rollout maps to those clouds is not stated; watch Message center and the roadmap item.
- How will Azure PST Import sit alongside the existing PST import in the Microsoft Purview portal? Watch the Learn PST import pages and Message center.
- Will the April 2027 rollout window move again? Microsoft revised it in MC1455013 on 17 November 2026.

<!-- rationale
risk: Medium. Imported mail is written into live Exchange Online mailboxes and then falls under the retention policies, holds and deletion workflows on those mailboxes, per Microsoft's notice MC1455013; only administrators run it.
cost: Variable. The Azure storage account holding the PST files is metered by Azure (data storage per GB per month, operations per transaction); a licence or charge specific to Azure PST Import is not yet published.
impact: Low. Microsoft's notice MC1455013 says there is no direct user impact and the feature is admin-driven; users notice only the imported mail appearing in their mailboxes.
-->
