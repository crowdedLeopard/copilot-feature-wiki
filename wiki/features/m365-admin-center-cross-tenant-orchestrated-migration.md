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
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Cross-tenant User Data Migration is a per-user one-time licence add-on; shared data migration is licensed per 100 GB per Learn."
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
videos: []
related: ["m365-teams-channel-backup","entra-id-backup-and-recovery-30-day"]
controls:
  - governs: "Creating, validating and running a migration batch"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Connect-MgGraph -Scopes 'CrossTenantContentMigration.ReadWrite.All'; Test-MgBetaCrossTenantMigrationJob / Move-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <id>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration"
    note: "Run from the target tenant as Microsoft 365 Migration Administrator or Global Administrator. Batches hold up to 100 users."
  - governs: "SharePoint and OneDrive trust between the two tenants"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Target -PartnerCrossTenantHostUrl <url>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step2"
  - governs: "Moving one user's OneDrive (existing tooling)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Start-SPOCrossTenantUserContentMove -SourceUserPrincipalName <upn> -TargetUserPrincipalName <upn> -TargetCrossTenantHostUrl <url>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step6"
  - governs: "Moving a SharePoint site (existing tooling)"
    scope: "site"
    ui: null
    api:
      kind: "powershell"
      call: "Start-SPOCrossTenantSiteContentMove"
      docs: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step6"
  - governs: "Admin centre page for the orchestrated migration"
    scope: "tenant"
    ui: null
    api: null
    note: "The roadmap entry describes an admin centre experience; Learn documents only the Graph path at review time."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576273."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Cross-Tenant Orchestrated Migration lets customers move Microsoft 365 data from one tenant to another. User Data Migration (UDM) covers mailboxes, OneDrive accounts, Teams chats and Teams meetings. Shared Data Migration (SDM) covers Microsoft 365 Groups, SharePoint sites, group mailboxes, and teams and channels.

The roadmap entry lists the Microsoft 365 admin center, Worldwide only, with a December 2026 target. The more-info link reads TBD.

Microsoft Learn already documents a Migration Orchestrator that sequences supported workloads, alongside individual cross-tenant tools for mailbox, OneDrive and SharePoint.

## Why it matters

Mergers, divestitures and consolidations drive these moves. They affect identity, licensing, compliance holds and user access, and Learn notes migrations carry no SLA. Planning needs to start well before any tool is available.

## Risk assessment

**Data exposure**
- Content leaves one tenant for another; incorrect mapping can place data with the wrong users.

**Security & identity**
- Requires cross-tenant trust and identity mapping; security groups and some objects need rebuilding.

**Autonomy & actions**
- Orchestration sequences workloads automatically.

**Change & support**
- Cross-tenant moves are one-way with redirects left behind; delta passes are not possible for OneDrive and SharePoint.

## Cost and licensing

Learn states cross-tenant migrations need a per-user one-time licence, assignable to the source or target user, and that migrations fail without it. Shared data migration licences are offered per 100 GB. Pricing for the orchestrated service is not yet published.

## Scope

Worldwide (Standard Multi-Tenant) per the roadmap. Learn states cross-tenant OneDrive migration is not supported in government clouds. Source and target tenants both need administrators involved.

## Governance guidance

### Before rollout
- Confirm legal and compliance sign-off for the data move.
- Plan identity mapping, licences in the target tenant and holds.

### At rollout
- Pilot with a small batch and validate redirects, permissions and Teams content.
- Communicate cut-over windows to users.

### After rollout
- Reconcile mailbox and file counts.
- Rebuild security groups and decommission source content per policy.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating, validating and running a migration batch</strong><br><small>Tenant</small><br><small class="controls__note">Run from the target tenant as Microsoft 365 Migration Administrator or Global Administrator. Batches hold up to 100 users.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Connect-MgGraph -Scopes 'CrossTenantContentMigration.ReadWrite.All'; Test-MgBetaCrossTenantMigrationJob / Move-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId &lt;id&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>SharePoint and OneDrive trust between the two tenants</strong><br><small>Tenant</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Target -PartnerCrossTenantHostUrl &lt;url&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step2" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Moving one user's OneDrive (existing tooling)</strong><br><small>User</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCrossTenantUserContentMove -SourceUserPrincipalName &lt;upn&gt; -TargetUserPrincipalName &lt;upn&gt; -TargetCrossTenantHostUrl &lt;url&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step6" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Moving a SharePoint site (existing tooling)</strong><br><small>Site</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPOCrossTenantSiteContentMove</code> <a href="https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step6" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Admin centre page for the orchestrated migration</strong><br><small>Tenant</small><br><small class="controls__note">The roadmap entry describes an admin centre experience; Learn documents only the Graph path at review time.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Everything documented today is script-driven: the orchestrator is a set of Graph APIs that Learn shows being called from Graph PowerShell or Graph Explorer, and the workload-specific cmdlets come from the SharePoint Online Management Shell. Source tenants cannot run the migration commands. Each migrated user needs a Cross Tenant User Data Migration licence, as set out in the [orchestrator overview](https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview). Validation results expire after seven days.

## Open questions

- Final licensing and pricing for the orchestrated service.
- Whether government clouds will be supported.
- How this differs from the existing Migration Orchestrator.

<!-- rationale
risk: High. Moves organisational data between tenants, with one-way moves, identity mapping and compliance implications if mis-scoped.
cost: High. Per-user migration licences are required and shared data licences are per 100 GB, plus substantial project effort.
impact: Medium. Affects migrating users and the admins of the source and target tenants, typically in mergers and divestitures.
-->
