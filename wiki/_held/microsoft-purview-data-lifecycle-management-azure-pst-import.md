---
title: "Microsoft Purview: Azure PST Import to Exchange Online mailboxes"
slug: "microsoft-purview-data-lifecycle-management-azure-pst-import"
roadmapId: 565865
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans a PowerShell-only way to import PST files from Azure Blob Storage into Exchange Online mailboxes, targeted for April 2027. Admin-driven, no direct user impact; licensing is not yet published."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item nor Microsoft's notice MC1455013 names a licence or meter for Azure PST Import; the notice only says an appropriate licence must be assigned to target mailboxes."
audiences: ["m365-admin","compliance","service-owner"]
tags: ["purview","exchange","migration","data-lifecycle-management","powershell","retention","gcc","gcc-high","dod"]
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
  - title: "New-MigrationEndpoint"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-migrationendpoint"
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
      path: "Access control (IAM) > Role assignments > Add > Add role assignment"
      docs: "https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal"
    api:
      kind: "azure-cli"
      call: "az role assignment create --role \"Storage Blob Data Reader\" --assignee-object-id <object-id> --assignee-principal-type <type> --scope \"/subscriptions/<sub-id>/resourceGroups/<rg>/providers/Microsoft.Storage/storageAccounts/<account>\""
      docs: "https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access"
    note: "General Azure role-assignment control; MC1455013 names the role and the app. Needs permission to assign roles on the storage account."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-17T18:34:37"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: PowerShell-only Azure PST Import, with the timeline Microsoft updated on 17 November 2026."
  - date: "2026-11-17"
    note: "First briefing: Azure PST Import is known from the roadmap item and Microsoft's notice MC1455013; Microsoft Learn has no page for it yet."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 68 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 65
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "2de30dfd15f36c1b6a41cfc218a997fa"
---

## What's changing

Azure PST Import is a planned method for importing PST files that sit in Azure Blob Storage straight into Exchange Online mailboxes. The roadmap item describes a two-step pattern: an analysis step that validates and assesses the PST data, then the migration itself. Administrators create a migration endpoint, run an analysis-only migration batch, use the results to configure the final batch, and start it.

Microsoft's notice MC1455013 adds that the whole process is run with PowerShell cmdlets only and is not available through a graphical user interface. It lists the steps as: create an Azure PST Import migration endpoint, run a batch in Analyze mode, review the analysis results and reports, create and start the import batch, and clean up after the import. Microsoft Learn has no page for this feature yet, so what is described here about its behaviour is the roadmap's and the notice's description.

This is separate from the existing PST import in the Microsoft Purview portal, where administrators upload PST files by network upload or ship a drive and create an import job on the **Import PST files** page.

The roadmap item is In development, with an April CY2027 target and release phase General Availability. The roadmap lists the GCC, GCC High and DoD clouds and the Web platform. MC1455013, updated 17 November 2026, moves the Global rollout to begin early April 2027 (previously early December 2026) and to complete by late April 2027 (previously late December 2026). The notice sets no act-by date.

## Why it matters

If you migrate historical email from PST files, this would give you an Exchange migration-service route that validates the files and mailboxes before anything is written, and produces reports along the way. That matters most to organisations clearing out file-share or desktop PSTs, where the risk is importing into the wrong mailbox or into a mailbox that cannot hold the data.

Nothing reaches users or data until an administrator runs the process, and Microsoft's notice describes the feature as admin-driven. Plan for it as an option from April 2027 rather than a change that lands on its own, and decide now who in your organisation will hold the storage and mailbox permissions it needs.

## Risk assessment

**Data exposure**

- Imported PST content is stored in the target Exchange Online mailboxes within your tenant and handled under your tenant's data residency and storage configuration, per MC1455013. Check what the PST files contain before analysis, because the import writes it into mailboxes people can search and share from.
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

Licensing is not yet published. The roadmap item and MC1455013 name no licence, price or meter for Azure PST Import. The notice lists that target mailboxes need an "appropriate license" assigned but does not say which one.

The process needs an Azure storage account and container that already exist and hold the PST files, per MC1455013. How that storage is billed is set by Azure, and Microsoft has not described any storage cost specific to this feature. For comparison, the existing Purview network upload import is described on Learn as free and drive shipping as carrying costs; the Learn overview does not say that either applies to Azure PST Import.

Plan for admin time: preparing the XML or CSV batch input files, running the Analyze-mode batch, reviewing reports and cleaning up afterwards.

## Scope

Microsoft 365 administrators managing Exchange Online and those using Microsoft Purview Data Lifecycle Management are the affected audience, per MC1455013, as are organisations importing PST files into user or archive mailboxes. The notice says there is no direct user impact.

The roadmap item lists the GCC, GCC High and DoD clouds and the Web platform. MC1455013 describes the rollout as Global and does not mention clouds; Microsoft has not reconciled the two, so confirm availability for your cloud before planning.

Prerequisites in the notice: an existing, reachable Azure storage account and container; the Storage Blob Data Reader role granted to the Office 365 Import Service app; and target mailboxes that meet the analysis conditions listed under Risk assessment. Which Exchange or Purview admin roles are needed to run the cmdlets is not yet published.

## Governance guidance

### Before rollout

- Check whether your tenant's cloud is covered: the roadmap lists GCC, GCC High and DoD, while MC1455013 says Global.
- Identify which PST files you intend to import and which mailboxes (primary or archive) are the targets.
- Confirm that each target mailbox has an appropriate licence, is not inactive or soft-deleted, is a UserMailbox, and has an archive enabled where the import goes to the archive.
- Review the retention policies, labels and holds on target mailboxes, because imported data becomes subject to them.

### At rollout

- Create or confirm the Azure storage account and container, and grant the Storage Blob Data Reader role to the Office 365 Import Service app on that account (see the controls table).
- Prepare the XML and/or CSV batch input files and run the first migration batch in Analyze mode.
- Review the analysis results and reports, including quota and file-existence checks, before creating and starting the import batch.

### After rollout

- Perform the post-import cleanup that MC1455013 lists as part of the workflow.
- Remove the role assignment on the storage account once no further imports are planned.
- Check the Exchange Online and Microsoft Purview audit logs for the PST import activity, which the notice says use existing logging mechanisms.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Running the Azure PST Import endpoint, Analyze batch and import batch</strong><br><small>Tenant</small><br><small class="controls__note">MC1455013 says the workflow is PowerShell cmdlets only, with no graphical interface. No Learn page for the cmdlets or required roles found at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Access of the Office 365 Import Service app to the Azure storage account holding the PST files</strong><br><small class="controls__note">General Azure role-assignment control; MC1455013 names the role and the app. Needs permission to assign roles on the storage account.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Access control (IAM) › Role assignments › Add › Add role assignment <a href="https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Azure CLI</strong><br><code>az role assignment create --role &quot;Storage Blob Data Reader&quot; --assignee-object-id &lt;object-id&gt; --assignee-principal-type &lt;type&gt; --scope &quot;/subscriptions/&lt;sub-id&gt;/resourceGroups/&lt;rg&gt;/providers/Microsoft.Storage/storageAccounts/&lt;account&gt;&quot;</code> <a href="https://learn.microsoft.com/azure/storage/blobs/assign-azure-role-data-access" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft's notice says the feature is controlled through administrator access to the PowerShell cmdlets and through Azure role assignments, including permissions on the storage account used for the import. Microsoft Learn describes neither the cmdlets nor the Exchange or Purview roles needed to run them at the time of writing (November 2026), so the first row is not yet documented.

The Azure role row is a general Azure control: it is the mechanism for the role assignment the notice requires, but the Learn pages cited describe role assignment in general, not Azure PST Import.

For the existing Purview PST import service, Learn lists the **Mailbox Import Export** and **Mail Recipients** Exchange Online roles, or Global Administrator, as the permissions to create import jobs. Microsoft has not said whether the same roles apply to Azure PST Import.

## Open questions

- Which licence, if any, does Azure PST Import require beyond a licensed target mailbox, and is any charge or meter involved? Watch the Learn page for the feature and Message center.
- Which cmdlet names, Exchange or Purview roles and batch file formats does the workflow use? Microsoft Learn did not document them at the time of writing; the New-MigrationEndpoint reference lists a PSTImport parameter set without describing it, and Microsoft has not said whether it relates to this feature.
- Is the feature available in the worldwide commercial cloud, given that MC1455013 says Global while the roadmap lists only GCC, GCC High and DoD?
- Do the limits of the existing Purview PST import (such as file size and archive import limits) apply to Azure PST Import?
- Is any additional audit event recorded for the Azure PST Import steps, beyond the existing Exchange Online and Microsoft Purview audit logging the notice refers to?

<!-- rationale
risk: Medium. Imported mail lands in live mailboxes and becomes subject to existing retention policies, holds and deletion workflows, per Microsoft's notice MC1455013; the import is run by administrators only.
cost: Low. The only costs the sources show are admin time and an Azure storage account to hold the PST files; no licence or meter for Azure PST Import is yet published.
impact: Low. Microsoft's notice MC1455013 says there is no direct user impact and the feature is admin-driven; users notice only the imported mail appearing in their mailboxes.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: licensing.model, licensing.notes; summary; Cost and licensing; Open questions / licensing: Licensing is wholly unpublished and the licensing model is unknown. | Found: To bulk-import PST files to Exchange Online mailboxes, the following licenses provide user rights: - Exchange Online P2 - Microsoft 365 E5/A5/G5/E3/A3/G3 | Fix: Set licensing.model to included for the published bulk-PST-import user rights. Replace the blanket licensing gap throughout with: 'Microsoft publishes bulk-PST-import user rights for Exchange Online P2, Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Microsoft 365 E5/A5/F5/G5 Information Protection and Governance, and Office 365 E5/A5/G5/E3/A3/G3. Additional Azure PST Import-specific licensing or charges are not yet published.' Cite this service-description URL; keep the additional-feature-charge question narrow. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: A low, indirect-cost-only rating fits a workflow requiring an Azure storage account holding the PST files. | Found: Page: 'cost: low'; 'an Azure storage account to hold the PST files'. Learn: 'When you create or use Blob Storage resources, you're charged for the following meters:'; 'Data storage | Per GB / per month'; 'Operations | Per transaction'. | Fix: Set cost to variable. Replace the cost rationale with: 'Variable. The required Azure Blob Storage is metered for data storage per GB per month and operations per transaction; admin time also applies. Additional Azure PST Import-specific charges are not yet published.' Add this billing URL to sources and cite it in Cost and licensing. Do not equate an unpublished import-specific meter with an absence of ordinary Azure storage consumption. | Source: https://learn.microsoft.com/azure/storage/common/storage-plan-manage-costs#understand-the-full-billing-model-for-azure-blob-storage
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing / cost: Billing for the Azure storage account is governed by Azure's storage billing rules. | Found: Azure Storage bills based on your storage account usage. All objects in a storage account are billed together as a group. | Fix: Cite https://learn.microsoft.com/azure/storage/common/storage-account-overview#storage-account-billing after the sentence about Azure storage billing. | Source: https://learn.microsoft.com/azure/storage/common/storage-account-overview#storage-account-encryption
- [supported, minor] controls[1].ui / admin-path: Azure role assignment is reached through Access control (IAM) > Role assignments > Add > Add role assignment. | Found: Click Access control (IAM). Click the Role assignments tab to view the role assignments at this scope. Click Add > Add role assignment. | Fix: Include the omitted resource-selection step: 'storage account > Access control (IAM) > Role assignments > Add > Add role assignment'. Use the same path in the rendered table. | Source: https://learn.microsoft.com/azure/role-based-access-control/role-assignments-portal
- [supported, minor] Open questions: cmdlet names / command: New-MigrationEndpoint lists a PSTImport parameter set without explaining this feature's workflow. | Found: ### -PSTImport This parameter is available only in on-premises Exchange. This parameter is reserved for internal Microsoft use. | Fix: Replace the clause about the reference with: 'The New-MigrationEndpoint reference lists PSTImport but marks the parameter as on-premises-only and reserved for internal Microsoft use; it does not document the Azure PST Import workflow.' | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/new-migrationendpoint
- [contradicted, minor] Governance guidance: Before rollout, After rollout; Governance controls / consistency: The governance checklist's controls are represented in the controls table. | Found: Checklist: 'Review the retention policies, labels and holds on target mailboxes'; 'Check the Exchange Online and Microsoft Purview audit logs'. Table: only workflow execution and Azure storage role assignment. | Fix: The retention policies, labels and holds review and the Exchange Online/Purview audit-log check have no controls-table rows. Do not add unverified rows as part of this correction.
-->
