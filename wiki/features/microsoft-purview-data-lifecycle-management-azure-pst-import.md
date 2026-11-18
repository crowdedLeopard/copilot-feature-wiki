---
title: "Microsoft Purview: Azure PST Import to Exchange Online mailboxes"
slug: "microsoft-purview-data-lifecycle-management-azure-pst-import"
roadmapId: 565865
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a PowerShell-only way to import PST files from Azure Blob Storage into Exchange Online mailboxes, listed for GCC, GCC High and DoD: general availability targeted April 2027. Admin-driven, no direct user impact."
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
  notes: "Microsoft publishes bulk-PST-import user rights for Exchange Online P2, Microsoft 365 E5/A5/G5/E3/A3/G3 and other plans listed in the Microsoft Purview service description. Additional Azure PST Import-specific licensing or charges are not yet published."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","exchange","migration","data-lifecycle-management","powershell","retention","licensing","gcc","gcc-high","dod"]
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
videos: []
related: []
controls:
  - governs: "Running the Azure PST Import endpoint, Analyze batch and import batch"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1455013 says the workflow is PowerShell cmdlets only, with no graphical interface. No Learn page for the cmdlets or required roles found at the time of writing (November 2026)."
  - governs: "Access of the Office 365 Import Service app to the Azure storage account holding the PST files"
    scope: "other"
    ui:
      surface: "Azure portal"
      path: "Storage account > Access control (IAM) > Role assignments > Add > Add role assignment"
      docs: "https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal"
    api:
      kind: "azure-cli"
      call: "az role assignment create --role \"Storage Blob Data Reader\" --assignee-object-id <object-id> --assignee-principal-type <type> --scope \"/subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.Storage/storageAccounts/<account>\""
      docs: "https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access"
    note: "General Azure role-assignment control; MC1455013 names the role and the app. Needs permission to assign roles on the storage account."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-18"
roadmapModified: "2026-11-17T18:34:37"
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
version: 5
verification:
  status: "verified"
  date: "2026-11-18"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 80
  confirmed: 80
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "0213d8647f532be00087b96b374cac00"
---

## What's changing

Azure PST Import is a planned method for importing PST files that sit in Azure Blob Storage straight into Exchange Online mailboxes. The roadmap item describes a two-step pattern: an analysis step that validates and assesses the PST data, then the migration itself. Administrators create a migration endpoint, run an analysis-only migration batch, use the results to configure the final batch, and start it.

Microsoft's notice MC1455013 adds that the whole process is run with PowerShell cmdlets only and is not available through a graphical user interface. It lists the steps as: create an Azure PST Import migration endpoint, run a batch in Analyze mode, review the analysis results and reports, create and start the import batch, and clean up after the import. Microsoft Learn has no page for this feature yet, so what is described here about its behaviour is the roadmap's and the notice's description.

This is separate from the existing PST import in the Microsoft Purview portal, where administrators upload PST files by network upload or ship a drive and create an import job on the **Import PST files** page; see [Learn about importing your organization's PST files](https://learn.microsoft.com/purview/pst-import-overview).

The roadmap item is In development, with a target date of April CY2027 and no preview date; its release phase is General Availability. It lists the GCC, GCC High and DoD clouds and the Web platform. MC1455013, updated 17 November 2026, says Microsoft will begin rolling out in early April 2027 (previously early December 2026) and expects to complete by late April 2027 (previously late December 2026), and gives the schedule as "Global". The notice sets no act-by date.

## Why it matters

If you migrate historical email from PST files, this would give you an Exchange migration-service route that validates the files and mailboxes before anything is written, and produces reports along the way. That matters most to organisations clearing out file-share or desktop PSTs, where the risk is importing into the wrong mailbox or into a mailbox that cannot hold the data.

Nothing reaches users or data until an administrator runs the process, and Microsoft's notice describes the feature as admin-driven. Plan for it as an option from the April 2027 target rather than a change that lands on its own, and decide now who in your organisation will hold the storage and mailbox permissions it needs.

## Risk assessment

**Data exposure**

- Imported PST content is stored in the target Exchange Online mailboxes within your tenant and handled under your tenant's data residency and storage configuration, per MC1455013. Check what the PST files contain before analysis, because the import writes it into mailboxes.
- Once imported, mailbox data becomes subject to the retention policies, retention labels, holds and deletion workflows already set on the target mailboxes, per MC1455013. Review what applies to each target mailbox before you start the import batch.

**Security & identity**

- The Azure storage account holding the PST files must grant the **Storage Blob Data Reader** role to the **Office 365 Import Service** app; without it, creating the endpoint fails, per MC1455013. Grant it on the target storage account only, and review the assignment after the import.
- Microsoft says the endpoint creation cmdlet validates the storage account and container during setup. Microsoft has not said which identity or credential the cmdlet uses beyond that role assignment; confirm this before widening any firewall or network rule on the storage account.

**Autonomy & actions**

- Nothing in the notice describes automatic or scheduled imports: the administrator creates and starts the import batch after reviewing the analysis. The wiki reads that as a deliberate approval point, so make the Analyze-mode review a named step in your own change process.

**Change & support**

- Analysis is documented as checking that mailboxes have an appropriate licence, are not inactive or soft-deleted, are of recipient type UserMailbox and have an archive enabled where the import targets the archive, and as validating ArchiveQuota and RecoverableItemsQuota and that all specified PST files exist, per MC1455013. Expect failed analysis rows for mailboxes that do not meet these conditions and fix them before the import batch.
- With no graphical interface, support staff need the cmdlets and the batch input files (XML and/or CSV) to hand; Microsoft Learn did not describe them at the time of writing (November 2026).

## Cost and licensing

Microsoft publishes bulk-PST-import user rights for Exchange Online P2, Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5/E3/A3/G3, in the [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description). Additional Azure PST Import-specific licensing or charges are not yet published. MC1455013 lists that target mailboxes need an appropriate licence assigned.

The process needs an Azure storage account and container that already exist and hold the PST files, per MC1455013. Azure documents that, when you create or use Blob Storage resources, you are charged for meters including data storage (per GB per month) and operations (per transaction); see [Plan and manage costs for Azure Blob Storage](https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs). Microsoft has not described any storage cost specific to this feature.

Plan for admin time: preparing the XML or CSV batch input files, running the Analyze-mode batch, reviewing reports and cleaning up afterwards.

## Scope

Microsoft 365 administrators managing Exchange Online and those using Microsoft Purview Data Lifecycle Management are the affected audience, per MC1455013, as are organisations importing PST files into user or archive mailboxes. The notice says there is no direct user impact.

The roadmap item lists the GCC, GCC High and DoD clouds and the Web platform. MC1455013 describes a single rollout, labelled "Global", and does not mention clouds.

Prerequisites in the notice: an existing, reachable Azure storage account and container; the Storage Blob Data Reader role granted to the Office 365 Import Service app; and target mailboxes that meet the analysis conditions listed under Risk assessment. Which Exchange or Purview admin roles are needed to run the cmdlets is not yet published.

## Governance guidance

### Before rollout

- Confirm your tenant is in one of the clouds the roadmap item lists: GCC, GCC High or DoD.
- Identify which PST files you intend to import and which mailboxes (primary or archive) are the targets.
- Confirm that each target mailbox has an appropriate licence, is not inactive or soft-deleted, is a UserMailbox, and has an archive enabled where the import goes to the archive.

### At rollout

- Create or confirm the Azure storage account and container, and grant the Storage Blob Data Reader role to the Office 365 Import Service app on that account (see the controls table).
- Prepare the XML and/or CSV batch input files and run the first migration batch in Analyze mode.
- Review the analysis results and reports, including quota and file-existence checks, before creating and starting the import batch.

### After rollout

- Perform the post-import cleanup that MC1455013 lists as part of the workflow.
- Remove the role assignment on the storage account once no further imports are planned.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running the Azure PST Import endpoint, Analyze batch and import batch</strong><br><small>Tenant</small><br><small class="controls__note">MC1455013 says the workflow is PowerShell cmdlets only, with no graphical interface. No Learn page for the cmdlets or required roles found at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Access of the Office 365 Import Service app to the Azure storage account holding the PST files</strong><br><small class="controls__note">General Azure role-assignment control; MC1455013 names the role and the app. Needs permission to assign roles on the storage account.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Storage account › Access control (IAM) › Role assignments › Add › Add role assignment <a href="https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az role assignment create --role &quot;Storage Blob Data Reader&quot; --assignee-object-id &lt;object-id&gt; --assignee-principal-type &lt;type&gt; --scope &quot;/subscriptions/&lt;sub-id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Storage/storageAccounts/&lt;account&gt;&quot;</code> <a href="https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says the feature is controlled through administrator access to the PowerShell cmdlets and through Azure role assignments, including permissions on the storage account used for the import. Microsoft Learn describes neither the cmdlets nor the Exchange or Purview roles needed to run them at the time of writing (November 2026), so the first row is not yet documented.

The Azure role row is a general Azure control: it is the mechanism for the role assignment the notice requires, but the Learn pages cited describe role assignment in general, not Azure PST Import.

## Open questions

- Does Azure PST Import carry any licence requirement or charge beyond the bulk-PST-import user rights and ordinary Azure Blob Storage metering? Watch the Learn page for the feature and Message center.
- Which cmdlet names, Exchange or Purview roles and batch file formats does the workflow use? Microsoft Learn did not document them at the time of writing (November 2026).
- Do the limits of the existing Purview PST import (such as file size and archive import limits) apply to Azure PST Import?
- Is any additional audit event recorded for the Azure PST Import steps, beyond the existing Exchange Online and Microsoft Purview audit logging the notice refers to?

<!-- rationale
risk: Medium. Imported mail lands in live mailboxes and becomes subject to existing retention policies, holds and deletion workflows, per Microsoft's notice MC1455013; the import is run by administrators only.
cost: Variable. The required Azure Blob Storage is metered for data storage per GB per month and operations per transaction; admin time also applies. Additional Azure PST Import-specific charges are not yet published.
impact: Low. Microsoft's notice MC1455013 says there is no direct user impact and the feature is admin-driven; users notice only the imported mail appearing in their mailboxes.
-->
