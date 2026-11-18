---
title: "Microsoft 365 admin center: cross-tenant orchestrated migration of user and shared data"
slug: "m365-admin-center-cross-tenant-orchestrated-migration"
roadmapId: 576273
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Microsoft plans an admin center experience for moving user and shared data between tenants (target December CY2026). Learn documents only the user-data orchestrator, run through Graph. Licensing is a per-user add-on."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn says cross-tenant migrations need a per-user licence (one-time fee) that is an add-on to listed Microsoft 365, Office 365, Exchange Online, SharePoint, OneDrive and EDU plans. No amount, and no licence for shared data migration, is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["migration","tenant-to-tenant","cross-tenant","m365-admin-center","licensing","exchange","onedrive","teams","sharepoint","microsoft-graph"]
sources:
  - title: "Microsoft 365 Roadmap 576273"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576273"
    kind: "roadmap"
  - title: "An overview of tenant-to-tenant migration with orchestrator in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide"
    kind: "learn"
  - title: "Configuring source and target tenants"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/migration-orchestrator-3-tenant-config"
    kind: "learn"
  - title: "Planning and prerequisites"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-2-planning-prerequisites?view=o365-worldwide"
    kind: "learn"
  - title: "Running the migration"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/migration-orchestrator-5-running-migration"
    kind: "learn"
  - title: "crossTenantMigrationJob: migrate"
    url: "https://learn.microsoft.com/graph/api/crosstenantmigrationjob-migrate?view=graph-rest-1.0"
    kind: "learn"
  - title: "Cross-tenant SharePoint migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration?view=o365-worldwide"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Starting the migration of a validated batch"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/solutions/migrations/crossTenantMigrationJobs/{crossTenantMigrationJobId}/migrate"
      docs: "https://learn.microsoft.com/graph/api/crosstenantmigrationjob-migrate?view=graph-rest-1.0"
    note: "Target tenant. Needs Microsoft 365 Migration Administrator or Global Administrator. The job must pass validation first."
  - governs: "Cancelling a batch before its Complete After Date"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Stop-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <batch display name or job id>"
      docs: "https://learn.microsoft.com/microsoft-365/enterprise/migration-orchestrator-5-running-migration"
    note: "Target tenant. Covers users whose mailboxes have not cut over and whose Teams and OneDrive migrations have not started."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-18"
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
  - date: "2026-11-17"
    note: "New briefing: roadmap item 576273 and the orchestrator documented on Learn, with the shared data scope gap and licensing noted."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "First briefing for roadmap item 576273: the roadmap plan set against what Learn documents today for user data migration, licensing and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 75 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-18"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 70
  unconfirmed: 0
  contradicted: 5
  attempts: 6
  hash: "a7857fc5b1dfb2bed061fd54a9dccc62"
---

## What's changing

The roadmap item describes cross-tenant orchestrated migration in the Microsoft 365 admin center, which moves Microsoft 365 data from one Microsoft tenant to another. It covers two parts. User Data Migration (UDM) moves user mailboxes, OneDrive accounts, Teams chats and Teams meetings. Shared Data Migration (SDM) moves Microsoft 365 Groups, SharePoint sites, group mailboxes, and teams and channels.

Microsoft Learn describes the UDM part as tenant-to-tenant migration with orchestrator. Its overview lists four workloads that can be chosen when creating a batch: Exchange mailboxes, OneDrives, Teams chats and Teams meetings. The same page says the Cross-Tenant User Data Migration solution does not migrate shared data such as Teams and channels or SharePoint sites. At the time of writing (November 2026), Learn documents running the orchestrator through Microsoft Graph APIs and documents no admin centre page or SDM orchestration, so what the roadmap says about those two is a plan, not documented behaviour.

As Learn describes UDM, it moves content, not identities. Customers create and configure the target users, and every migrating user must be mapped one-to-one from source to target through Cross-Tenant Identity Mapping. Users are grouped into batches of up to 100, validated, and migrated. Mailboxes sync in the background until the Complete After Date, then cut over and OneDrive, Teams chats and Teams meetings begin to move.

The roadmap lists the item as In development, with a target of December CY2026, General Availability, for Worldwide (Standard Multi-Tenant) on desktop and web. The roadmap's more info link is TBD. The date is a target, not a commitment.

## Why it matters

This matters to any organisation heading into a merger, acquisition or divestiture. Moving data between tenants is the highest-consequence change a Microsoft 365 administrator makes: Learn says the source mailbox is deleted after a successful migration, and cancellation is not possible once the Complete After Date has passed. Expect the work to span both tenants, and expect the planning (identity mapping, licences, holds, communications) to take longer than the batch itself.

Neither the roadmap nor Learn states what happens on arrival of the admin centre version, so base planning on no source saying existing tenants change. The documented orchestrator needs setup in both tenants and a batch created by a target-tenant administrator before any data moves. The shared data half is the largest gap: Learn today excludes shared data from the orchestrator, so plan SDM timelines from Microsoft's announcements, not from the roadmap target.

## Risk assessment

**Data exposure**

- Content crosses a tenant boundary. For UDM, Learn says at least one mail-enabled security group in the source tenant scopes which users can move, which stops unintended users being migrated or their data accessed. How SDM scopes groups and sites is not documented.
- Learn says mailboxes on any type of hold are not migrated and the move is blocked. Settle holds with compliance before batching, because the source mailbox is not available, discoverable or accessible in the source tenant after migration.
- For Teams, Learn says the original content stays on the source, possibly edited, and duplicate threads might exist in both tenants. Expect records to exist in two places.

**Security & identity**

- Learn says running the tenant configuration steps adds many permissions to your tenant and applications, including the Cross-Tenant Migration Service app and Teams chat and meeting migration apps. Review them with your security team.
- Teams chat migration requires federated users to be allowed in both tenants. Confirm what allowing federated users changes in each tenant before you enable it.
- Migration commands run from the target tenant as Microsoft 365 Migration Administrator or Global Administrator. Learn recommends the role with the fewest permissions.

**Autonomy & actions**

- Once a batch is validated and migrated, Learn says Exchange cuts over at the Complete After Date, source OneDrive is removed, and no cancellation is possible after that date. Treat the date as a point of no return.
- Learn says migrations are not subject to SLAs and that the size of the migration and overall traffic determine the completion time.

**Change & support**

- Users feel the impact at cutover. Learn says target users must not have mailboxes or OneDrive sites provisioned before migration, or the migration fails.
- After migration, Learn says users should use only their target identity for Teams. Prepare help desk guidance for duplicate threads and the source mailbox becoming a MailUser.

## Cost and licensing

Learn's overview says cross-tenant migrations require a per-user licence (one-time fee), assignable on either the source or the target user object, and that the licence covers all content the orchestrator supports. Cross Tenant User Data Migration is an add-on to Microsoft 365 Business Basic, Standard and Premium; Microsoft 365 F1, F3, E3 and E5; Office 365 F3, E1, E3 and E5; Exchange Online; SharePoint in Microsoft 365; OneDrive; and EDU plans. It is available for EA, CSP, Web direct, small business and EDU customers.

The overview gives no amount for the fee, and no licence specific to SDM or to the admin centre experience is published at the time of writing (November 2026). Indirect costs are admin time in both tenants and licences users need on both sides: Learn's prerequisites say all users need a Teams licence on both tenants and an Exchange Online licence in both tenants.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) only, on desktop and web.

Who does the work, as Learn documents it for UDM: source and target administrators need Global Administrator access on their own tenant for the tenant and user configuration steps. Migration commands run from the target tenant as a Microsoft 365 Migration Administrator or Global Administrator, and source tenants cannot run them. Learn's prerequisites say all users submitted in a batch must belong to the scope security group.

Rollout is by tenant-to-tenant project, not a service switch. Prerequisites in Learn include identity mapping for every user, apps and permissions in both tenants, and a source MailUser configuration for each migrating user. SDM scope and prerequisites are not documented.

## Governance guidance

### Before rollout

- Confirm in Message center and on the roadmap item whether the admin centre experience and SDM ship in December CY2026, and plan on the documented Graph and PowerShell orchestrator until then.
- Decide which workloads move. UDM covers Exchange mailboxes, OneDrives, Teams chats and Teams meetings; Learn says run them in one batch, and the meetings workload fails to start without chats and mailboxes selected too.
- Resolve mailboxes on hold with your compliance team before batching, since Learn says held mailboxes are blocked.
- Budget the per-user add-on licence for every migrating user and request the price from your Microsoft partner or account team.
- Create the target users, run Cross-Tenant Identity Mapping, and keep mailboxes and OneDrive sites from being provisioned on the target.

### At rollout

- Create the mail-enabled security group in the source tenant and add the users whose content may move; allow up to an hour for membership changes to be processed.
- Run the migration as a Microsoft 365 Migration Administrator in the target tenant in place of Global Administrator.
- Create and validate the batch, fix failures until it reaches ValidatePassed, then start the migration within seven days (the start-migration row in the controls table).
- Submit batches two weeks before the Complete After Date, as Learn recommends, so mailbox sync finishes without user impact.

### After rollout

- Monitor batch and per-user status; call migrate again on a batch with CompletedWithErrors or Failed status to retry.
- Use the cancel row in the controls table before the Complete After Date, not after it.
- Tell migrated users to use their target identity for Teams and mail.
- Remove or convert the source MailUser when business processes allow.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Starting the migration of a validated batch</strong><br><small>Tenant</small><br><small class="controls__note">Target tenant. Needs Microsoft 365 Migration Administrator or Global Administrator. The job must pass validation first.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/solutions/migrations/crossTenantMigrationJobs/{crossTenantMigrationJobId}/migrate</code> <a href="https://learn.microsoft.com/graph/api/crosstenantmigrationjob-migrate?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Cancelling a batch before its Complete After Date</strong><br><small>Tenant</small><br><small class="controls__note">Target tenant. Covers users whose mailboxes have not cut over and whose Teams and OneDrive migrations have not started.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Stop-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId &lt;batch display name or job id&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/enterprise/migration-orchestrator-5-running-migration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn documents no Microsoft 365 admin center path for orchestrated migration at the time of writing (November 2026), so both rows print the UI side as not yet documented. Starting and cancelling a batch are documented through Microsoft Graph and the Microsoft Graph PowerShell beta module, run from the target tenant.

The source tenant's lever is the mail-enabled security group that scopes which users can migrate; the target tenant holds the batch controls. Learn says the start-migration operation needs a Microsoft 365 Migration Administrator or Global Administrator. Cancellation covers users whose mailboxes have not yet cut over and whose Teams and OneDrive migrations have not started, and only before the Complete After Date.

No control is documented for SDM. Sites can be moved today with the separate cross-tenant SharePoint migration feature, which Learn says SharePoint admins run with SharePoint Online PowerShell.

## Open questions

- Will the Microsoft 365 admin center experience replace the Graph and PowerShell orchestrator, or sit alongside it, and where will its path be documented? Watch the roadmap item and Learn.
- Which licence and price apply to Shared Data Migration, and does the per-user UDM add-on cover it? Watch the migration orchestrator overview.
- What will SDM scope, limits and prerequisites be for groups, sites and teams and channels, given that Learn today says the user data solution excludes shared data?
- What is the default state of the admin centre experience on arrival in a tenant? Neither the roadmap nor Learn states it.

<!-- rationale
risk: Medium. An administrator starts each migration, but after the Complete After Date Learn says it cannot be cancelled, and the source mailbox is deleted once the move succeeds.
cost: Medium. Learn documents a per-user, one-time-fee add-on licence for Cross Tenant User Data Migration; the amount, and any licence for shared data migration, is not yet published.
impact: Medium. Admins in both tenants do the work, and users in a batch move to a new mailbox, OneDrive and Teams location at cutover and must switch to their target identity.
-->

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing, third paragraph; Risk assessment: Autonomy & actions; rationale: impact / behaviour: Mailboxes cut over at the Complete After Date and then OneDrive, Teams chats and Teams meetings begin moving. | Found: completeAfterDateTime - The date that specifies the earliest acceptable time for the cutover of Exchange to begin. There's no user impact until this date passes and the Exchange sync is complete. | Fix: Replace the timing statement with: 'The Complete After Date is the earliest acceptable time for Exchange cutover to begin; it also requires Exchange synchronization to be complete. If Exchange is selected, it cuts over before the other selected workloads begin moving.' Apply this qualification to What's changing, Autonomy & actions and the impact rationale. Source: https://learn.microsoft.com/microsoft-365/enterprise/migration-orchestrator-5-running-migration. | Source: https://learn.microsoft.com/microsoft-365/enterprise/migration-orchestrator-5-running-migration
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Open questions; rationale: cost / absence: Microsoft has published no licence for Shared Data Migration. | Found: The Cross-Tenant Shared Data Migration feature and licenses are currently only available to Enterprise Agreement customers. ... Licenses are offered on a per 100 GB of data moved basis. | Fix: Replace the broad licensing absence everywhere, including the notes and cost rationale, with: 'For the separate cross-tenant SharePoint migration feature, Microsoft publishes Cross-Tenant Shared Data Migration licences for Enterprise Agreement customers, per 100 GB of data moved. Licensing specific to the roadmap's SDM orchestration is not yet published.' Narrow the open question to licensing for the roadmap's SDM orchestration. Cite https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration?view=o365-worldwide. | Source: https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration?view=o365-worldwide
- [contradicted, blocker] Scope, third paragraph / behaviour: A source MailUser configuration for each migrating user is a migration prerequisite. | Found: The product does, however, require that a user be specifically configured as having a mailbox on the source tenant and not having a mailbox on the target tenant (MailUser) before Identity Mapping can be performed. | Fix: Replace 'a source MailUser configuration for each migrating user' with 'a target MailUser configuration for each migrating user'. The source retains its mailbox before migration; the MailUser prerequisite is in the target tenant. Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide
- [contradicted, blocker] Governance guidance: Before rollout, last bullet; At rollout, first bullet / behaviour: The checklist can run identity mapping before creating and populating the source migration-scope security group. | Found: If the source users aren't already added into the mail-enabled security group you created before, this addition must be done before Identity Mapping is complete. | Fix: Move the existing 'Create the mail-enabled security group in the source tenant and add the users whose content may move; allow up to an hour for membership changes to be processed' bullet into Before rollout, immediately before the target-user creation and identity-mapping bullet. Cite https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-4-user-prep?view=o365-worldwide for this ordering. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-4-user-prep?view=o365-worldwide
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing, first paragraph / availability: The overview says UDM is available to EA, CSP, Web direct, small business and EDU customers. | Found: This product is available for EA, CSP, Web direct, small business, and EDU customers. | Fix: Keep the overview's statement and append: 'The separate OneDrive migration licensing page still describes the add-on for Enterprise Agreement customers as of November 2022; confirm purchase eligibility with Microsoft.' Cite https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration?view=o365-worldwide#licensing, whose wording is 'for Enterprise Agreement customers'. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide
- [contradicted, minor] Governance guidance versus Governance controls / consistency: The checklist names controls that are not represented in the two-row controls table. | Found: Checklist: 'Decide which workloads move'; 'run Cross-Tenant Identity Mapping'; 'keep mailboxes and OneDrive sites from being provisioned'; 'Create the mail-enabled security group'; 'Create and validate the batch'; 'Monitor batch and per-user status'. Table: starting and cancelling only. | Fix: The checklist steps for workload selection, identity mapping, target-provisioning prevention, scope-group membership, batch creation/validation, status monitoring and source-MailUser cleanup have no corresponding controls-table rows. This finding identifies the mismatch only; it does not request additional rows.
-->
