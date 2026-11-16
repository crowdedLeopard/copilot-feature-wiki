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
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 63
  confirmed: 55
  unconfirmed: 0
  contradicted: 8
  attempts: 2
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

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] Risk assessment: Security & identity / behaviour: Security groups need preparation or recreation in the target tenant. | Found: Precreate users and groups as needed in the target tenant's directory. ... Precreated users must be added as members of any appropriate security groups or unified groups before the OneDrive migration begins. | Fix: Cite https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step4 and describe target group and membership preparation before migration. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step4
- [supported, minor] Risk assessment: Security & identity / behaviour: Some associated objects need rebuilding during migration. | Found: Workflows (2010 or 2013) must be re-created and republished on the Target tenant. ... PowerApps and Automation Tasks must be recreated and reconnected to the Site on the target tenant. | Fix: Name SharePoint workflows and Power Apps/automation tasks as the examples and cite https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration
- [contradicted, blocker] Risk assessment: Change & support; rationale: risk / behaviour: Cross-tenant moves generally are one-way. | Found: Move mailboxes back to the original source ... If a mailbox is required to move back to the original source tenant, the same set of steps and scripts must be run in both new source and new target tenants, with some variance. | Fix: Limit the one-and-done wording to existing OneDrive and SharePoint migration, citing their migration overviews. Remove the blanket one-way assertion from the risk rationale; mailbox migration documents moving back to the original source. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-mailbox-migration?view=o365-worldwide#prepare-target-user-objects-for-migration
- [contradicted, blocker] Risk assessment: Change & support / behaviour: Cross-tenant moves generally leave redirects behind. | Found: Chats and meetings are migrated from the source to the target. The original content on the source remains, though it might be in an edited form. | Fix: Say that OneDrive and SharePoint moves leave redirect links, rather than applying redirect behaviour to every workload. The orchestrator overview says original Teams content remains in the source. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide
- [supported, minor] Risk assessment: Change & support / behaviour: SharePoint migration does not support incremental or delta passes. | Found: Incremental and delta migration passes can't be performed. | Fix: Add https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration to sources and scope this limitation to the existing SharePoint tool. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration
- [supported, minor] Cost and licensing / licensing: Migration fails without the required migration licence. | Found: If you don't have the proper license assigned to the user being migrated, the migration fails | Fix: Add https://learn.microsoft.com/microsoft-365/migration/cross-tenant-mailbox-migration?view=o365-worldwide#licensing to sources for the explicit licence-failure statement. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-mailbox-migration?view=o365-worldwide#licensing
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Shared data migration licences are offered per 100 GB, without an eligibility restriction. | Found: The Cross-Tenant Shared Data Migration feature and licenses are currently only available to Enterprise Agreement customers. ... Licenses are offered on a per 100 GB of data moved basis. | Fix: Qualify all three locations: 'For the existing cross-tenant SharePoint tool, Cross-Tenant Shared Data Migration licences are currently available only to Enterprise Agreement customers, per 100 GB moved.' Cite https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration and distinguish this from final licensing for the roadmap experience. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration
- [supported, minor] Scope / availability: The existing cross-tenant OneDrive migration feature is not supported in government clouds. | Found: This feature isn't supported for users of the Government Cloud, including GCC, Consumer, GCC High, or DoD. | Fix: Cite https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration for this restriction, retaining its explicit scope to OneDrive migration. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration
- [contradicted, blocker] controls[0].api; Governance controls table / command: The slash-combined Test-MgBetaCrossTenantMigrationJob / Move-MgBetaCrossTenantMigrationJob expression creates, validates and runs a batch. | Found: Test-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <batch display name or job id> ... Once the batch status is ValidatePassed, call migrate ... Move-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <batch display name or job id> | Fix: Retain Connect-MgGraph -Scopes 'CrossTenantContentMigration.ReadWrite.All'. Print Test-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <id> and Move-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <id> separately, requiring ValidatePassed before Move. Rename the row 'Validating and running an existing migration batch', or add creation using New-MgBetaCrossTenantMigrationJob with the documented body/settings. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration
- [supported, minor] controls[1].api; Governance controls table / command: Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Target -PartnerCrossTenantHostUrl <url> requests trust with the target tenant. | Found: On the source tenant, run this command to send a trust request to the target tenant: Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Target -PartnerCrossTenantHostUrl <TARGETCrossTenantHostUrl> | Fix: Note that the printed call runs on the source and is one half of trust setup. Also give the target-side call: Set-SPOCrossTenantRelationship -Scenario MnA -PartnerRole Source -PartnerCrossTenantHostUrl <source-host-url>, as the cited page documents. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step2
- [supported, minor] controls[3].api; Governance controls table / command: Start-SPOCrossTenantSiteContentMove is the documented cmdlet for moving a SharePoint site. | Found: Start-SPOCrossTenantSiteContentMove -SourceSiteUrl <...> -TargetSiteUrl <...> -TargetCrossTenantHostUrl <...> | Fix: Give the useful documented call: Start-SPOCrossTenantSiteContentMove -SourceSiteUrl <source-site-url> -TargetSiteUrl <target-site-url> -TargetCrossTenantHostUrl <target-host-url>. Note that a source-tenant SharePoint Admin or Microsoft 365 Global Admin runs it. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration-step6
- [supported, minor] Governance controls: closing paragraph / command: The standalone SharePoint and OneDrive migration cmdlets use SharePoint Online Management Shell. | Found: Microsoft SharePoint Online Powershell. Confirm you have the most recent version installed. Download SharePoint Online Management Shell from the official Microsoft Download Center. | Fix: Add https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration and https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration to sources for their tooling prerequisites. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration
- [contradicted, blocker] Governance controls: closing paragraph / role: Source tenants cannot run the migration commands, without a qualification limiting this to orchestrator commands. | Found: To start the migration, a SharePoint Admin or Microsoft 365 Global Admin of the source tenant must run the following command: Start-SPOCrossTenantUserContentMove | Fix: Replace with: 'Orchestrator Graph migration commands run from the target tenant. The standalone OneDrive and SharePoint move commands in this table run from the source tenant as a SharePoint Admin or Microsoft 365 Global Admin.' Both cited step-6 pages document the source-side role. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step6
- [contradicted, blocker] Governance guidance: After rollout / behaviour: Rebuilding security groups is an after-rollout preparation step. | Found: Precreate users and groups as needed in the target tenant's directory. ... Precreated users must be added as members of any appropriate security groups or unified groups before the OneDrive migration begins. | Fix: Move group preparation to Before rollout: 'Precreate target security groups, populate memberships and include them in identity mapping before migrating content.' After rollout, verify memberships and permissions instead of first rebuilding groups. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration-step4
- [contradicted, minor] front matter: action / consistency: The prepare action rating fits this optional admin-opt-in migration capability. | Found: action: "prepare"; defaultState: "admin-opt-in". The assessment scale assigns review when nothing changes until an administrator chooses an optional capability. | Fix: Set action to review: the documented process requires administrative setup and explicit batch submission, with no supplied mandatory deadline or automatic content migration.
- [contradicted, minor] Governance guidance; Governance controls / consistency: The controls table covers the operational controls named in the governance checklist. | Found: The checklist says 'Plan identity mapping, licences in the target tenant and holds' and 'Rebuild security groups'; the table has batch execution, trust, workload moves and an admin-page gap, but no preparation or hold-check rows. | Fix: Add rows covering identity mapping, licence assignment and hold checks, and target group preparation; combine directly related preparation controls if needed. Cite the documented surfaces rather than assuming null, and move group preparation before migration.
-->
