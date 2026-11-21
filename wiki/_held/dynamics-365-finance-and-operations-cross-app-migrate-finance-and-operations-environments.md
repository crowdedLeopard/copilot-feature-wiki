---
title: "Dynamics 365 finance and operations: migrate environments from Lifecycle Services to Power Platform admin center"
slug: "dynamics-365-finance-and-operations-cross-app-migrate-finance-and-operations-environments"
roadmapId: 573244
topic: "power-platform"
products: ["Dynamics 365 Finance","Dynamics 365 Supply Chain Management","Dynamics 365 Project Operations","Dynamics 365 Commerce","Microsoft Dataverse","Dynamics 365 Finance and Operations cross-app","Microsoft Power Platform governance and administration"]
summary: "Self-service migration moves management of a finance and operations apps environment from Lifecycle Services to the Power Platform admin center. It is one-way and causes downtime, and an administrator starts it per environment."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published: the Learn page names no licence and publishes no migration price. After migration the environment consumes capacity under the Power Platform capacity model."
audiences: ["power-platform-admin","service-owner","change-adoption"]
tags: ["dynamics-365","finance-and-operations","lifecycle-services","migration","power-platform-admin-center","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap 573244"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=573244"
    kind: "roadmap"
  - title: "Migrate finance and operations environments from Lifecycle Services to Power Platform admin center (preview)"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/migrate-lifecycle-services-environments-power-platform-admin-center"
    kind: "learn"
  - title: "Overview of unified admin experience for finance and operations apps"
    url: "https://learn.microsoft.com/power-platform/admin/unified-experience/finance-operations-apps-overview"
    kind: "learn"
  - title: "Finance and operations storage capacity"
    url: "https://learn.microsoft.com/power-platform/admin/finance-operations-storage-capacity"
    kind: "learn"
  - title: "Enable Power Platform integration"
    url: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/power-platform/enable-power-platform-integration"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Starting the migration of a finance and operations environment to Power Platform admin center"
    scope: "environment"
    ui:
      surface: "Lifecycle Services"
      path: "project > Environments > environment > Full details > Power Platform migration (Preview) > Migrate to Power Platform Admin Center"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/migrate-lifecycle-services-environments-power-platform-admin-center"
    api: null
    note: "Public preview. One-way; performed per environment. The person must be an administrator of the linked Power Platform environment."
  - governs: "Finance and operations storage capacity that must be free before migration"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Licensing > Capacity add-ons > Finance and Operations"
      docs: "https://learn.microsoft.com/power-platform/admin/finance-operations-storage-capacity"
    api: null
    note: "Existing report that shows usage against entitlement; the migration page links it for resolving a capacity deficit."
  - governs: "Whether a Power Platform environment is linked to the finance and operations environment (migration prerequisite)"
    scope: "environment"
    ui:
      surface: "Lifecycle Services"
      path: "project > Environments > environment > Full details > Power Platform migration (Preview) > Power Platform environment is linked"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/migrate-lifecycle-services-environments-power-platform-admin-center"
    api:
      kind: "rest"
      call: "GET [Organization URI]/api/data/v9.1/RetrieveFinanceAndOperationsIntegrationDetails"
      docs: "https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/power-platform/enable-power-platform-integration"
    note: "The Dataverse call verifies Power Platform integration status; it is not a migration control."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-17"
    note: "New briefing: documents the Lifecycle Services to Power Platform admin center environment migration, its one-way and downtime effects, preview limits and prerequisites."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 65 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the cost statement: the Learn migration page lists no licence and publishes no migration price, rather than stating there is no charge."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 74 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-21"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 73
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "a06afeaf0616e14f75a0fa7aa2021b11"
---

## What's changing

The self-service environment migration feature moves management of an existing finance and operations apps environment from Microsoft Dynamics Lifecycle Services to the Power Platform admin center. Migration is performed separately for each environment in a Lifecycle Services project, and it does not migrate the Lifecycle Services project itself.

Microsoft Learn describes the change as one to the control plane: environment metadata is updated across Microsoft services, the database is not moved and the environment infrastructure is not materially changed. Afterwards, the Power Platform admin center is the management experience for lifecycle operations such as copy, backup, restore, servicing, updates and monitoring, and Learn says to use Azure Pipelines and Power Platform deployment capabilities for application lifecycle management (ALM) and code deployment.

Migration is a one-way operation. After an environment is migrated, its management experience is read-only in Lifecycle Services, and Learn says you cannot move management back through a customer-initiated operation. The environment is unavailable during part of the migration: Learn advises planning for approximately 15 minutes of downtime for each Application Object Server (AOS) instance.

The Learn page is marked as prerelease and says the feature is in public preview. During public preview, Microsoft recommends migrating sandbox environments first and not using the feature for production environments. The roadmap item is "In development", with a preview date of September CY2026 and a target date of December CY2026 for general availability; both are Microsoft's targets, and the roadmap lists Worldwide (Standard Multi-Tenant) only.

## Why it matters

This is an opt-in change that rewires how an environment is operated, so the main decision is when to take it and in what order. The Learn steps start with an administrator selecting **Migrate to Power Platform Admin Center** and typing the environment name. If nobody acts, the documented steps do not start.

The cost of getting the order wrong falls on the team that runs deployments. After a sandbox is migrated, Lifecycle Services deployment and promotion workflows no longer manage it, so Azure Pipelines that produce Power Platform unified packages need to exist and be tested first. The roadmap lists Dynamics 365 Commerce among the products, yet the Learn page says environments that use Commerce functionality are not supported in public preview and that the prerequisite check does not detect Commerce usage, so that check falls to the administrator.

## Risk assessment

**Data exposure**

- Learn says the database is not moved and the infrastructure is not materially changed, so no new data location is documented. Check the overview page's statement that in Power Platform a backup is kept in the cloud and never downloaded as a SQL `.bak` or `.bacpac` file, and confirm whether any offline-copy process you rely on in Lifecycle Services still works.

**Security & identity**

- The person who starts the migration must be an administrator of the linked Power Platform environment, and the Lifecycle Services page checks this. Learn's fix for a failed check is to have an existing administrator assign an appropriate environment admin role, so review who holds that role before migration day.

**Autonomy & actions**

- The migration is started manually per environment and needs the environment name typed to confirm. Learn tells you not to start other lifecycle operations while it runs. The action cannot be reversed by a customer-initiated operation, so a wrong environment choice cannot be rolled back through Lifecycle Services.

**Change & support**

- Downtime is about 15 minutes per AOS instance, and environments with more AOS instances take longer.
- Cloud-hosted developer environments are not supported; Learn points to Unified Developer Environments or a downloadable virtual hard disk (VHD).
- A self-service production environment may show the migration action, but Learn does not recommend production migration during public preview.
- Commerce usage is not detected by the prerequisite check, so an environment that uses Commerce functionality can show all checks green and still be unsupported.

## Cost and licensing

The Learn migration page lists no licence among its prerequisites and does not publish a migration price. Treat the migration price and licence as not yet published, and rely on the documented capacity effects below.

After migration the environment consumes capacity under the Power Platform capacity model, and available database capacity is validated before migration, so a Power Platform storage capacity deficit has to be resolved first. The capacity page says to delete unneeded environments and data or buy more capacity if you have a deficit, and that exceeding storage entitlements currently does not affect the availability of the service. The migration page also says the Lifecycle Services environment slot is not returned or made available for another environment, and that future provisioning is based on available Power Platform capacity instead of Lifecycle Services slots.

Indirect costs are admin time, an out-of-hours maintenance window, and the work to build Unified Developer Environments and Azure Pipelines before migrating.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform, with release phases General Availability and Preview. Learn lists self-service sandbox environments as supported and self-service production as possibly showing the action but not recommended during public preview. Cloud-hosted developer environments are not supported, and environments that use Dynamics 365 Commerce functionality are not supported during public preview.

Prerequisites on the Learn page: the environment is healthy with status **Deployed** in Lifecycle Services, it is linked to a Power Platform environment, any Power Platform storage capacity deficit is resolved, and the person starting the migration is an administrator of the linked Power Platform environment. The page says you do not have to enable dual-write to migrate. The page names no Lifecycle Services project role.

## Governance guidance

### Before rollout

- List every environment in each Lifecycle Services project and identify any that use Dynamics 365 Commerce functionality, because the migration prerequisite check does not detect it.
- Review the Finance and Operations storage capacity report (see the controls table) and resolve any deficit, since database capacity is validated before migration.
- Confirm each candidate environment is in **Deployed** status and linked to a Power Platform environment, and agree who will be the administrator of that linked environment.
- Deploy Unified Developer Environments and build and test Azure Pipelines that produce Power Platform unified packages before the first migration.

### At rollout

- Migrate a less critical sandbox first, from the **Power Platform migration (Preview)** section in Lifecycle Services, outside business hours.
- Reserve a maintenance window of about 15 minutes per AOS instance plus extra time, and tell users that the environment is unavailable and that migration cannot be reversed through Lifecycle Services.
- Keep the window open and avoid other lifecycle operations on the environment until **Migration status** shows **Migrated**.

### After rollout

- Validate sign-in, environment details, monitoring, backup, restore, copy and update operations in the Power Platform admin center, and deploy a validated customisation through the new Azure Pipelines process.
- Run an environment copy and validate the target before migrating further environments, and hold further migrations if validation finds an issue.
- Plan production last, and re-read the Learn page before then for the production recommendation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Starting the migration of a finance and operations environment to Power Platform admin center</strong><br><small>Environment</small><br><small class="controls__note">Public preview. One-way; performed per environment. The person must be an administrator of the linked Power Platform environment.</small></td><td data-label="Admin UI"><strong>Lifecycle Services</strong><br>project › Environments › environment › Full details › Power Platform migration (Preview) › Migrate to Power Platform Admin Center <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/migrate-lifecycle-services-environments-power-platform-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Finance and operations storage capacity that must be free before migration</strong><br><small>Tenant</small><br><small class="controls__note">Existing report that shows usage against entitlement; the migration page links it for resolving a capacity deficit.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Licensing › Capacity add-ons › Finance and Operations <a href="https://learn.microsoft.com/power-platform/admin/finance-operations-storage-capacity" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether a Power Platform environment is linked to the finance and operations environment (migration prerequisite)</strong><br><small>Environment</small><br><small class="controls__note">The Dataverse call verifies Power Platform integration status; it is not a migration control.</small></td><td data-label="Admin UI"><strong>Lifecycle Services</strong><br>project › Environments › environment › Full details › Power Platform migration (Preview) › Power Platform environment is linked <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/lifecycle-services/migrate-lifecycle-services-environments-power-platform-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET [Organization URI]/api/data/v9.1/RetrieveFinanceAndOperationsIntegrationDetails</code> <a href="https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/power-platform/enable-power-platform-integration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The migration is started in Lifecycle Services, not in the Power Platform admin center; the Power Platform admin center becomes the management experience once it completes. Learn documents the prerequisite checks as four green-check conditions on the migration section: **Environment is in Deployed status**, **Power Platform environment is linked**, **Database storage capacity is available**, and **You are an administrator of the linked Power Platform environment**.

Microsoft Learn documents no API for starting the migration or for the finance and operations storage report at the time of writing (November 2026). The Dataverse call in the last row only reports whether a link exists and returns the finance and operations environment details; the page does not state which role may call it.

## Open questions

- What will general availability look like: does Microsoft lift the sandbox-first and no-production recommendation, and will the Commerce restriction go? Watch the Learn migration page and the roadmap item for the December CY2026 target.
- Will the prerequisite check come to detect Commerce usage, so an unsupported environment is blocked rather than left to the administrator?
- Which Lifecycle Services project role is needed to see and start the migration, beyond being an administrator of the linked Power Platform environment?
- Will the migration carry any licence or price once it reaches general availability? Watch Message center and the Learn page.

<!-- rationale
risk: Medium. Migration starts only when an administrator chooses it, but it is one-way, takes the environment offline for about 15 minutes per AOS instance, and Learn does not recommend production use during public preview.
cost: Low. The Learn page lists no licence and publishes no migration price; the known costs are admin time, downtime and capacity, because the migrated environment consumes capacity under the Power Platform capacity model.
impact: Medium. Environment administrators and developers change from Lifecycle Services to Power Platform admin center and Azure Pipelines, and users of a migrated environment notice the downtime window.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: A low cost rating accurately represents the documented costs of this change. | Found: cost: low; Low. ... the known costs are admin time, downtime and capacity ... consumes capacity under the Power Platform capacity model. Standard: low means indirect cost only; medium includes predictable consumption. | Fix: Set cost to medium. Replace the cost rationale with: 'Medium. The migrated environment consumes Power Platform capacity, and a storage deficit must be cleared by freeing or purchasing capacity before migration. Admin time and downtime are indirect costs; a separate migration price is not yet published.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing; Open questions / licensing: Licensing is unknown because no migration-specific licence is published. | Found: Customers must acquire and assign appropriate subscription licenses for their users ... Example: Dynamics 365 Commerce, Dynamics 365 Finance, Dynamics 365 Supply Chain Management, Dynamics 365 Team Members, and more. | Fix: Set licensing.model to included. Replace the licensing notes and the sentence treating the licence as unpublished with: 'Finance and operations apps require appropriate product subscription licences, such as Dynamics 365 Finance or Dynamics 365 Supply Chain Management. No migration-specific licence or migration price is published as of November 2026. After migration the environment consumes Power Platform capacity.' Add https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/sysadmin/stay-compliant-user-license-requirement to sources. Narrow the final Open questions bullet to ask whether a separate migration licence or price will be introduced. | Source: https://learn.microsoft.com/dynamics365/fin-ops-core/dev-itpro/sysadmin/stay-compliant-user-license-requirement#assign-licenses-to-users
-->
