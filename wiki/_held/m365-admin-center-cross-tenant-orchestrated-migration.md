---
title: "Microsoft 365 admin center: cross-tenant orchestrated migration of user and shared data"
slug: "m365-admin-center-cross-tenant-orchestrated-migration"
roadmapId: 576273
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Microsoft plans to let administrators move mailboxes, OneDrive, Teams chats and meetings (UDM), and Groups, sites and teams (SDM), between tenants. Licences are needed; Learn documents the Graph route today."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "high"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn: user data migration needs a per-user licence (one-time fee); shared data migration licences are offered per 100 GB of data moved and, for the SharePoint tool, currently only to Enterprise Agreement customers. No price is published on the pages read."
audiences: ["m365-admin","service-owner","compliance","finops"]
tags: ["migration","tenant-to-tenant","cross-tenant","m365-admin-center","exchange","onedrive","teams","sharepoint","microsoft-graph","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 576273"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576273"
    kind: "roadmap"
  - title: "An overview of tenant-to-tenant migration with orchestrator in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide"
    kind: "learn"
  - title: "Running the migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide"
    kind: "learn"
  - title: "Planning and prerequisites"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-2-planning-prerequisites?view=o365-worldwide"
    kind: "learn"
  - title: "FAQ and troubleshooting"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-8-faq?view=o365-worldwide"
    kind: "learn"
  - title: "Create crossTenantMigrationJob"
    url: "https://learn.microsoft.com/graph/api/migrationsroot-post-crosstenantmigrationjobs?view=graph-rest-1.0"
    kind: "learn"
  - title: "Cross-tenant SharePoint migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/cross-tenant-sharepoint-migration?view=o365-worldwide"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who can create, validate and start orchestrated migration batches"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "POST /v1.0/solutions/migrations/crossTenantMigrationJobs with displayName, completeAfterDateTime, sourceTenantId, resources, resourceType Users, workloads"
      docs: "https://learn.microsoft.com/graph/api/migrationsroot-post-crosstenantmigrationjobs?view=graph-rest-1.0"
    note: "Needs CrossTenantContentMigration.ReadWrite.All; delegated callers need Microsoft 365 Migration Administrator or Global Administrator on the target tenant."
  - governs: "Cancelling a whole batch before the CompleteAfterDate"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Stop-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <batch display name or job id>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide"
    note: "Possible only before the Complete After Date is reached."
  - governs: "Removing one user from a batch and cancelling that user's migration"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Stop-MgBetaCrossTenantMigrationJobUser -CrossTenantMigrationJobId <batch display name or job id> -CrossTenantMigrationTaskId <ExternalDirectoryObjectId for the target user>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide"
    note: "Possible only before the user's mailbox cutover and before Teams chats, Teams meetings and OneDrive migration start."
  - governs: "When cutover begins (the CompleteAfterDate)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Update-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId <batch display name or job id> -CompleteAfterDateTime <date time to update to>"
      docs: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide"
    note: "Learn says the date can be updated at any point before it passes."
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
  - date: "2026-11-17"
    note: "New briefing: roadmap item 576273 and the orchestrator documented on Learn, with the shared data scope gap and licensing noted."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 85 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 85
  confirmed: 77
  unconfirmed: 1
  contradicted: 7
  attempts: 5
  hash: "cd0c911acf6b203a996e3d1a26d6fab3"
---

## What's changing

The roadmap item says Microsoft plans to offer Cross-Tenant Orchestrated Migration in the Microsoft 365 admin center, so customers can move Microsoft 365 data from one Microsoft tenant to another. It names two parts: User Data Migration (UDM), covering user mailboxes, OneDrive accounts, Teams chats and Teams meetings, and Shared Data Migration (SDM), covering Microsoft 365 Groups, SharePoint sites, group mailboxes, and teams and channels.

The roadmap item has no more-info link ("TBD"), and Microsoft Learn does not describe an admin centre experience for it at the time of writing (November 2026). What Learn does document is the Microsoft 365 migration orchestrator. It supports four workloads in a batch: Exchange mailboxes, OneDrives, Teams chats and Teams meetings. It moves content, not identities, so administrators create the target users and run identity mapping first. The orchestrator is run through Microsoft Graph by creating a batch of users, validating it, then migrating it.

The two sources differ on shared data. The roadmap item lists SDM workloads. The orchestrator overview on Learn says the Cross-Tenant User Data Migration solution doesn't migrate shared data, such as Teams and Channels or SharePoint Sites, and that this data remains in the source tenant. Learn documents a separate Cross-tenant SharePoint migration tool, run by SharePoint admins in SharePoint Online PowerShell. Whether SDM in the admin centre builds on these tools is not stated.

The roadmap record gives the status as In development, the target as December CY2026, the release phase as General Availability, the cloud as Worldwide (Standard Multi-Tenant) and the platforms as Desktop and Web. The target is Microsoft's plan, not a commitment.

## Why it matters

This is a mergers, acquisitions and divestitures tool, so the readers who matter are administrators on both sides of a deal. It moves mailboxes, files, chats and meetings between legal entities' tenants, and Learn says that after migration the source mailbox is not available, discoverable or accessible in the source tenant. Retention, eDiscovery and records obligations therefore need settling before a batch runs, not after.

The default state for the new admin centre experience is not stated. The orchestrator Learn documents is started by an administrator creating a batch, so this briefing treats migration as something that happens only when an administrator submits users. Plan the licences, identity mapping and user communications now if a deal is in prospect; otherwise there is nothing to do before the feature ships.

## Risk assessment

**Data exposure**
- Learn says mailboxes on any type of hold aren't migrated and a move for those mailboxes is blocked. Settle holds and retention with legal and compliance teams before submitting a batch.
- Learn says the source mailbox is deleted after a successful migration. OneDrive content moves, leaving a redirect link on the source, and incremental and delta passes can't be performed, so there is no second pass to correct a missed user.
- Teams chats and meetings are copied: Learn says the original content on the source remains, possibly edited, and duplicate threads might exist on both tenants. Source copies can therefore outlive the move.

**Security & identity**
- The orchestrator moves content, not identities. Target users must be created and mapped by the customer, and Learn says users must not have mailboxes or OneDrive sites provisioned on the target before migration or the migration fails.
- Learn says migration commands are run from the target tenant by a Microsoft 365 Migration Administrator or Global Administrator, and that source tenants can't run them. Treat both roles as high-privilege during a migration.

**Autonomy & actions**
- After the CompleteAfterDate passes, Learn says migrations can't be cancelled and continue. Mailbox cutover starts then, and OneDrive, Teams chats and Teams meetings begin to move.

**Change & support**
- Learn says migrations are not subject to SLAs and that duration depends on size and overall traffic. Do not promise users a completion time.
- Learn says users should use only their target identity in Teams after migration, and that Teams meetings aren't recreated if data is moved back. Communicate this before cutover.
- The sources disagree on shared data scope (see What's changing), so do not plan a Groups, sites or teams move around the orchestrator until Microsoft documents SDM.

## Cost and licensing

**Licence.** The orchestrator overview on Learn says cross-tenant migrations require a per-user licence (one-time fee) that can be assigned on either the source or the target user object, and that it enables migration of all content the orchestrator supports. Cross Tenant User Data Migration is listed as an add-on to Microsoft 365 Business Basic, Standard and Premium; Microsoft 365 F1/F3/E3/E5; Office 365 F3/E1/E3/E5; Exchange Online; SharePoint in Microsoft 365; OneDrive; and EDU. The page says the product is available for EA, CSP, Web direct, small business and EDU customers.

**Shared data.** The Cross-tenant SharePoint migration page on Learn says Cross-Tenant Shared Data Migration licences are currently only available to Enterprise Agreement customers and are offered on a per 100 GB of data moved basis. Whether that licence applies to SDM in the admin centre is not stated.

**Not yet published.** No price for either licence appears on the pages read, and no licence for the admin centre experience is published. Indirect costs are admin time, identity preparation on the target tenant, and the licences users need on both tenants: Learn says all users need a Teams licence on both tenants for Teams migration.

## Scope

The record lists Worldwide (Standard Multi-Tenant) as the only cloud and Desktop and Web as platforms. Learn says cross-cloud tenant-to-tenant migration isn't supported, for example Office 365 Worldwide to Government Cloud. The Graph reference for creating a migration job lists the global service as supported and US Government and China cloud deployments as not.

A migration is run from the target tenant by a Microsoft 365 Migration Administrator or Global Administrator. Learn's prerequisites include identity mapping for every migrating user, a mail user on the target, an organisation relationship between the tenants, and apps for Teams chat and meeting migration provisioned and enabled on source and target. All users submitted must belong to the scope security group linked in the organisation relationship. A batch is limited to 100 users on the orchestrator pages, while the Graph reference states a limit of 2,000 resources per job; Learn does not reconcile the two.

## Governance guidance

### Before rollout
- Confirm with your Microsoft account team whether SDM in the admin centre is licensed separately, and which licence applies to groups, sites and teams, before budgeting a deal.
- Review mailboxes under holds with legal and compliance, because Learn says held mailboxes aren't migrated.
- Plan target users as mail users, run identity mapping, and keep OneDrive creation disabled for target users until the move, as Learn's prerequisites require.
- Assign the target-tenant Microsoft 365 Migration Administrator role to named people rather than using Global Administrator.

### At rollout
- Create batches of no more than 100 users and submit them at least two weeks before the CompleteAfterDate, as Learn recommends for mailbox sync.
- Run validation until the batch reaches ValidatePassed; Learn says validation results expire after seven days.
- Cancel a batch or remove a user before the CompleteAfterDate passes if a problem appears, using the cancel rows in the controls table.

### After rollout
- Monitor batch and per-user status, and retry a batch that ends in CompletedWithErrors or Failed by calling migrate again, as Learn describes.
- Tell migrated users to use only their target identity in Teams, and decommission source MailUsers when business processes allow.
- Check mailbox migrations that stall after the CompleteAfterDate; Learn describes a Data Consistency Score check in Exchange Online PowerShell.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can create, validate and start orchestrated migration batches</strong><br><small>Tenant</small><br><small class="controls__note">Needs CrossTenantContentMigration.ReadWrite.All; delegated callers need Microsoft 365 Migration Administrator or Global Administrator on the target tenant.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/solutions/migrations/crossTenantMigrationJobs with displayName, completeAfterDateTime, sourceTenantId, resources, resourceType Users, workloads</code> <a href="https://learn.microsoft.com/graph/api/migrationsroot-post-crosstenantmigrationjobs?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Cancelling a whole batch before the CompleteAfterDate</strong><br><small>Tenant</small><br><small class="controls__note">Possible only before the Complete After Date is reached.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Stop-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId &lt;batch display name or job id&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removing one user from a batch and cancelling that user's migration</strong><br><small>User</small><br><small class="controls__note">Possible only before the user's mailbox cutover and before Teams chats, Teams meetings and OneDrive migration start.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Stop-MgBetaCrossTenantMigrationJobUser -CrossTenantMigrationJobId &lt;batch display name or job id&gt; -CrossTenantMigrationTaskId &lt;ExternalDirectoryObjectId for the target user&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>When cutover begins (the CompleteAfterDate)</strong><br><small>Tenant</small><br><small class="controls__note">Learn says the date can be updated at any point before it passes.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgBetaCrossTenantMigrationJob -CrossTenantMigrationJobId &lt;batch display name or job id&gt; -CompleteAfterDateTime &lt;date time to update to&gt;</code> <a href="https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Learn documents the orchestrator through Microsoft Graph and PowerShell. It documents no Microsoft 365 admin center path for it at the time of writing (November 2026), so the UI side of each row is Not yet documented and may change when the roadmap item ships.

The controls apply to the orchestrator that Learn describes today. Microsoft has not confirmed that SDM or the admin centre experience uses the same batch controls. The cmdlets shown are Microsoft Graph PowerShell beta cmdlets as the running-migration page gives them, while the create-job reference page shows a v1.0 path.

The standalone Cross-tenant SharePoint migration tool is run by SharePoint admins in SharePoint Online PowerShell. Authorisation of source users runs through the scope security group linked in the organisation relationship; Learn says to add source users to it, and changes can take up to an hour to be processed.

## Open questions

- Will the admin centre offer a Microsoft 365 admin center path for orchestrated migration, and who can use it? Watch the roadmap item and the orchestrator overview on Learn.
- Does SDM (Groups, SharePoint sites, group mailboxes, teams and channels) use the orchestrator, and does it change the statement that UDM doesn't migrate shared data?
- What does the SDM licence cost for this feature, and is it still Enterprise Agreement only, per 100 GB of data moved?
- Is the batch limit 100 users or 2,000 resources, given that the orchestrator pages and the Graph reference differ?
- Is the experience off until an administrator starts a batch, or does anything change for tenants that take no action? The roadmap item does not say.

<!-- rationale
risk: High. The migration moves organisational data between tenants, and Learn says the source mailbox is deleted after a successful migration and that migrations are not subject to SLAs.
cost: Medium. Learn describes a per-user licence (one-time fee) for user data migration and a per 100 GB of data moved licence for shared data migration; no price is stated on the pages read.
impact: Medium. Only users an administrator submits are moved, but they change mailbox, OneDrive and Teams location and must switch to their target identity.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; Why it matters / consistency: The briefing assigns admin-opt-in as the planned feature's default while saying that this default is not stated. | Found: defaultState: "admin-opt-in"; "The default state for the new admin centre experience is not stated."; "The controls apply to the orchestrator that Learn describes today." | Fix: Set defaultState to "unknown". Retain the distinction that the documented orchestrator requires an administrator to submit a batch, without using that background workflow as the default of the planned admin centre experience.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The absence of incremental OneDrive passes means there is no second pass to correct a missed user. | Found: Searched: "orchestrator" "missed users" migration batch OneDrive incremental delta. Opened overview, running-migration and FAQ. No passage equates no incremental OneDrive passes with inability to correct a missed user; the running page describes retries and new batches. | Fix: Delete ', so there is no second pass to correct a missed user'. Keep only the documented statement that incremental and delta OneDrive migration passes cannot be performed.
- [contradicted, blocker] Risk assessment: Autonomy & actions; controls[3].governs / behaviour: Mailbox cutover and the other workloads begin when CompleteAfterDate passes, without a synchronization prerequisite being stated. | Found: completeAfterDateTime - The date that specifies the earliest acceptable time for the cutover of Exchange to begin. There's no user impact until this date passes and the Exchange sync is complete. | Fix: Replace 'Mailbox cutover starts then, and OneDrive, Teams chats and Teams meetings begin to move' with 'Cutover begins only after all pre-cutover steps finish and the CompleteAfterDate passes. If Exchange is selected, mailbox synchronization and cutover must finish before the selected OneDrive, Teams chat and Teams meeting workloads begin to move.' Rename controls[3].governs to 'Earliest cutover time (the CompleteAfterDate)' and mirror it in the table. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-5-running-migration?view=o365-worldwide
- [contradicted, blocker] front matter: licensing.model; Cost and licensing / consistency: The planned feature is assigned a mixed licensing model even though the body says its licensing is not published and the shared-data licence's applicability is unknown. | Found: model: "mixed"; "Whether that licence applies to SDM in the admin centre is not stated."; "no licence for the admin centre experience is published." | Fix: Set licensing.model to "unknown" for the planned admin centre experience. Keep the notes and body describing the documented per-user orchestrator licence and the separate SharePoint tool's per-100-GB licence as background, with their existing applicability qualification.
- [contradicted, blocker] controls[0].note / role: Delegated create-job callers need one of the two named built-in roles, with no custom-role alternative mentioned. | Found: the signed-in user must be assigned a supported Microsoft Entra role or a custom role that grants the permissions required for this operation. | Fix: Replace the note with 'Needs CrossTenantContentMigration.ReadWrite.All; for delegated creation, the caller needs Microsoft 365 Migration Administrator, Global Administrator, or a custom role granting the required permissions, on the target tenant.' Mirror the note in the rendered table; keep the body's separate description of the running-migration instructions. | Source: https://learn.microsoft.com/graph/api/migrationsroot-post-crosstenantmigrationjobs?view=graph-rest-1.0
- [contradicted, blocker] controls[0].api / command: The listed POST v1.0 create-job request supplies the settings needed to create the described migration batch. | Found: exchangeSettings | exchangeOnlineCrossTenantMigrationSettings | Settings for Exchange Online migrations. Optional, but required if Exchange is a specified workload. | Fix: Replace the call with 'POST /v1.0/solutions/migrations/crossTenantMigrationJobs with displayName <unique batch name>, completeAfterDateTime <date-time>, sourceTenantId <source tenant GUID>, resources [<target user GUIDs>], resourceType Users, workloads [<workload names>], and exchangeSettings {targetDeliveryDomain: <target routing domain>, sourceEndpoint: <target migration endpoint name>} when Exchange is selected'. Mirror it in the table. The endpoint and these keys are documented on the existing Graph create-job URL. | Source: https://learn.microsoft.com/graph/api/migrationsroot-post-crosstenantmigrationjobs?view=graph-rest-1.0
- [contradicted, blocker] controls[0].governs; controls[0].api / applicability: The create-job POST supplies the control for creating, validating and starting orchestrated migration batches. | Found: A job defines the migration batch but doesn't start validation or migration. | Fix: Change controls[0].governs and its rendered table heading to 'Creating an orchestrated migration batch'. Keep this row limited to job creation; retain the body's existing statement that validation and migration are subsequent operations. | Source: https://learn.microsoft.com/graph/api/migrationsroot-post-crosstenantmigrationjobs?view=graph-rest-1.0
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Licence / availability: The overview says the product is available for EA, CSP, Web direct, small business and EDU customers. | Found: This product is available for EA, CSP, Web direct, small business, and EDU customers. | Fix: Add the qualification: 'The standalone OneDrive migration page still describes the add-on as being for Enterprise Agreement customers, as of November 2022 (https://learn.microsoft.com/microsoft-365/migration/cross-tenant-onedrive-migration?view=o365-worldwide#licensing).' This preserves both published accounts rather than silently resolving their difference. | Source: https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist directs administrators to configure or check controls not represented by the four table rows. | Found: Checklist: 'keep OneDrive creation disabled', 'Assign the target-tenant Microsoft 365 Migration Administrator role', 'Monitor batch and per-user status'. Table: create batch, cancel batch, remove user, update date. | Fix: The checklist steps for disabling target OneDrive creation, assigning the Migration Administrator role, running validation, monitoring batch and per-user status, retrying failed batches, decommissioning source MailUsers and checking Data Consistency Score have no matching controls-table row. Do not add rows as part of this correction.
-->
