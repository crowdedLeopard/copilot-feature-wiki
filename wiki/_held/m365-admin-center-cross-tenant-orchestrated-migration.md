---
title: "Microsoft 365 admin center: Cross-Tenant Orchestrated Migration"
slug: "m365-admin-center-cross-tenant-orchestrated-migration"
roadmapId: 576273
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Orchestrated cross-tenant migration moves user data and shared data such as mailboxes, OneDrive, Teams and SharePoint between Microsoft 365 tenants."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "high"
cost: "high"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "For the existing tools: Cross-tenant User Data Migration is a per-user one-time licence add-on. For the existing cross-tenant SharePoint tool, Cross-Tenant Shared Data Migration licences are currently available only to Enterprise Agreement customers, per 100 GB moved."
audiences: ["m365-admin","service-owner","security","compliance","finops"]
tags: ["migration","cross-tenant","tenant-to-tenant","exchange","onedrive","sharepoint","teams"]
sources:
  - title: "Microsoft 365 Roadmap item 576273"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576273"
    kind: "roadmap"
  - title: "An overview of tenant-to-tenant migration with orchestrator in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide"
    kind: "learn"
  - title: "Plan a Microsoft 365 tenant-to-tenant migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/microsoft-365-tenant-to-tenant-migrations?view=o365-worldwide"
    kind: "learn"
  - title: "Creating, validating and running a migration batch (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration"
    kind: "learn"
  - title: "SharePoint and OneDrive trust between the two tenants (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step2"
    kind: "learn"
  - title: "Moving one user's OneDrive (existing tooling) (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step6"
    kind: "learn"
  - title: "Moving a SharePoint site (existing tooling) (PowerShell)"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step6"
    kind: "learn"
  - title: "Cross-tenant SharePoint migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration"
    kind: "learn"
  - title: "Cross-tenant OneDrive migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration"
    kind: "learn"
  - title: "Step 4: Precreate users and groups"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step4"
    kind: "learn"
  - title: "Cross-tenant mailbox migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-mailbox-migration?view=o365-worldwide"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Validating and running an existing migration batch"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Connect-MgGraph -Scopes 'CrossTenantContentMigration.ReadWrite.All'; Test-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <id>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration"
    note: "Run from the target tenant as Microsoft 365 Migration Administrator or Global Administrator. Batches hold up to 100 users. After status ValidatePassed, run Move-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <id>."
  - governs: "SharePoint and OneDrive trust between the two tenants"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Target -PartnerCrossTenantHostUrl <target-host-url>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step2"
    note: "Run on the source tenant; trust setup has two halves. The target tenant runs Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Source -PartnerCrossTenantHostUrl <source-host-url>."
  - governs: "Moving one user's OneDrive (existing tooling)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Start-SPOCrossTenantUserContentMove -SourceUserPrincipalName <upn> -TargetUserPrincipalName <upn> -TargetCrossTenantHostUrl <url>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step6"
    note: "Run from the source tenant by a SharePoint Admin or Microsoft 365 Global Admin."
  - governs: "Moving a SharePoint site (existing tooling)"
    scope: "site"
    ui: null
    api:
      kind: "powershell"
      call: "Start-SPOCrossTenantSiteContentMove -SourceSiteUrl <source-site-url> -TargetSiteUrl <target-site-url> -TargetCrossTenantHostUrl <target-host-url>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step6"
    note: "Run from the source tenant by a SharePoint Admin or Microsoft 365 Global Admin."
  - governs: "Admin centre page for the orchestrated migration"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap entry describes an admin centre experience; Learn documents only the Graph path at review time."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576273."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Correction: limited one-way and redirect statements to the workloads Learn describes, qualified shared data licensing to Enterprise Agreement customers, split the batch commands, clarified source and target roles, and moved group preparation before migration."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Correction: batch validation and migration commands split, default state and licensing model set to unknown for the roadmap experience, and group and identity checklist steps narrowed to planning advice."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 0
  contradicted: 2
  attempts: 4
  hash: "dee3e764d9f0cf4df43ee6c025b06273"
---

## What's changing

Cross-Tenant Orchestrated Migration lets customers move Microsoft 365 data from one tenant to another. User Data Migration (UDM) covers mailboxes, OneDrive accounts, Teams chats and Teams meetings. Shared Data Migration (SDM) covers Microsoft 365 Groups, SharePoint sites, group mailboxes, and teams and channels.

The roadmap entry lists the Microsoft 365 admin center, Worldwide only, with a December 2026 target. The more-info link reads TBD. Microsoft has not stated the default for the roadmap admin-center experience.

Microsoft Learn already documents a Migration Orchestrator that sequences supported workloads, alongside individual cross-tenant tools for mailbox, OneDrive and SharePoint.

## Why it matters

Mergers, divestitures and consolidations drive these moves. They affect identity, licensing, compliance holds and user access, and Learn notes migrations carry no SLA. Planning needs to start well before any tool is available.

## Risk assessment

**Data exposure**
- Content leaves one tenant for another; incorrect mapping can place data with the wrong users.

**Security & identity**
- Requires cross-tenant trust and identity mapping. For OneDrive, Learn says target users and groups are precreated and users are added as members of the appropriate security or unified groups before migration begins. After a SharePoint migration, Learn says workflows (2010 or 2013) must be re-created and republished, and Power Apps and automation tasks must be recreated and reconnected to the site.

**Autonomy & actions**
- Orchestration sequences workloads automatically.

**Change & support**
- The existing OneDrive and SharePoint tools describe cross-tenant moves as one and done: content moves to the target and a redirect link is left on the source, and incremental and delta passes can't be performed. For orchestrated Teams chats and meetings, Learn says the original content remains on the source, though it might be in an edited form. For mailboxes, Learn says that if a mailbox must move back to the original source tenant, the same steps and scripts are run in both tenants, with some variance.

## Cost and licensing

Learn states cross-tenant migrations need a per-user one-time licence, assignable to the source or target user, and that migrations fail without it. For the existing cross-tenant SharePoint tool, Cross-Tenant Shared Data Migration licences are currently available only to Enterprise Agreement customers, offered per 100 GB of data moved. That describes the existing tool; final licensing for the roadmap experience is not yet published. Pricing for the orchestrated service is not yet published.

## Scope

Worldwide (Standard Multi-Tenant) per the roadmap. Learn states the existing cross-tenant OneDrive migration feature isn't supported for users of the Government Cloud, including GCC, Consumer, GCC High or DoD. Source and target tenants both need administrators involved.

## Governance guidance

### Before rollout
- Confirm legal and compliance sign-off for the data move.
- Plan identity mapping, target-tenant licences and holds with the teams that own them.
- Plan the precreation of target groups and their memberships ahead of content migration, as Learn describes for OneDrive.

### At rollout
- Pilot with a small batch and validate redirects, permissions and Teams content.
- Communicate cut-over windows to users.

### After rollout
- Reconcile mailbox and file counts.
- Compare group memberships and permissions between source and target, and decommission source content per policy.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Validating and running an existing migration batch</strong><br><small>Tenant</small><br><small class="controls__note">Run from the target tenant as Microsoft 365 Migration Administrator or Global Administrator. Batches hold up to 100 users. After status ValidatePassed, run Move-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId &lt;id&gt;.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Connect-MgGraph -Scopes 'CrossTenantContentMigration.ReadWrite.All'; Test-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId &lt;id&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>SharePoint and OneDrive trust between the two tenants</strong><br><small>Tenant</small><br><small class="controls__note">Run on the source tenant; trust setup has two halves. The target tenant runs Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Source -PartnerCrossTenantHostUrl &lt;source-host-url&gt;.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Target -PartnerCrossTenantHostUrl &lt;target-host-url&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step2" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Moving one user's OneDrive (existing tooling)</strong><br><small>User</small><br><small class="controls__note">Run from the source tenant by a SharePoint Admin or Microsoft 365 Global Admin.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCrossTenantUserContentMove -SourceUserPrincipalName &lt;upn&gt; -TargetUserPrincipalName &lt;upn&gt; -TargetCrossTenantHostUrl &lt;url&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step6" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Moving a SharePoint site (existing tooling)</strong><br><small>Site</small><br><small class="controls__note">Run from the source tenant by a SharePoint Admin or Microsoft 365 Global Admin.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCrossTenantSiteContentMove -SourceSiteUrl &lt;source-site-url&gt; -TargetSiteUrl &lt;target-site-url&gt; -TargetCrossTenantHostUrl &lt;target-host-url&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step6" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin centre page for the orchestrated migration</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap entry describes an admin centre experience; Learn documents only the Graph path at review time.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Everything documented today is script-driven: the orchestrator is a set of Graph APIs that Learn shows being called from Graph PowerShell or Graph Explorer, and the workload-specific cmdlets come from the SharePoint Online Management Shell. Orchestrator Graph migration commands run from the target tenant. The standalone OneDrive and SharePoint move commands in this table run from the source tenant as a SharePoint Admin or Microsoft 365 Global Admin. Each migrated user needs a Cross Tenant User Data Migration licence, as set out in the [orchestrator overview](https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview). Validation results expire after seven days.

## Open questions

- Final licensing and pricing for the orchestrated service.
- Whether government clouds will be supported.
- How this differs from the existing Migration Orchestrator.

<!-- rationale
risk: High. Moves organisational data between tenants, with identity mapping and compliance implications if mis-scoped.
cost: High. Per-user migration licences are required, and the existing shared data tool is licensed per 100 GB moved for Enterprise Agreement customers, plus substantial project effort.
impact: Medium. Affects migrating users and the admins of the source and target tenants, typically in mergers and divestitures.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: Everything documented today is script-driven / admin-path: Everything Microsoft currently documents for these migration tools is script-driven. | Found: Migration batch submission is also supported from the new Exchange admin center when selecting the cross-tenant option. | Fix: Replace 'Everything documented today is script-driven' with 'The controls documented in this table use Microsoft Graph or SharePoint Online PowerShell'. This limits the statement to the checked rows rather than incorrectly excluding the documented standalone mailbox admin UI. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-mailbox-migration?view=o365-worldwide
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The high cost rating is established for the new roadmap experience by the licences required for existing migration tools. | Found: cost: "high"; rationale: 'Per-user migration licences are required'; body: 'That describes the existing tool; final licensing for the roadmap experience is not yet published.' | Fix: Set cost to 'low' and replace the cost rationale with 'Low. Migration planning and administration require staff time; licensing and pricing for the roadmap admin-centre experience are not yet published.' The assessment scale requires rating the known cost of this change, not carrying existing-tool licensing into an experience whose licensing is unconfirmed. Keep the qualified existing-tool licensing background.
-->
