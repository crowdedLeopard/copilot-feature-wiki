---
title: "Microsoft Entra ID: extended 30-day backup and recovery through Microsoft 365 Backup"
slug: "entra-id-backup-and-recovery-30-day"
roadmapId: 567885
topic: "governance"
products: ["Microsoft 365","Microsoft 365 admin center","Microsoft Entra"]
summary: "Microsoft plans to extend Microsoft Entra object recovery from 7 to a rolling 30 days via Microsoft 365 Backup. Default, licensing and admin roles are not yet published; the existing 7-day recovery is unchanged."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "The existing seven-day Entra recovery needs Microsoft Entra ID P1 or P2. Licensing and billing for the planned 30-day extension are not yet published."
audiences: ["security","m365-admin","service-owner"]
tags: ["entra-id","backup-and-recovery","m365-backup","identity","point-in-time-restore","restore","resilience","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 567885"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567885"
    kind: "roadmap"
  - title: "Microsoft Entra Backup and Recovery overview"
    url: "https://learn.microsoft.com/entra/backup/overview"
    kind: "learn"
  - title: "Supported objects and recoverable properties in Microsoft Entra Backup and Recovery"
    url: "https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations"
    kind: "learn"
  - title: "Backup, difference report, and recovery model in Microsoft Entra Backup and Recovery"
    url: "https://learn.microsoft.com/entra/backup/backup-difference-report-recovery-model"
    kind: "learn"
  - title: "Recover user authentication methods using Microsoft Entra Backup and Recovery"
    url: "https://learn.microsoft.com/entra/backup/recover-user-secrets"
    kind: "learn"
  - title: "Restore a deleted Microsoft 365 group or cloud security group in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/users/groups-restore-deleted"
    kind: "learn"
  - title: "Backup and recovery APIs in Microsoft Graph"
    url: "https://learn.microsoft.com/graph/api/resources/tenants-backup-recovery-overview?view=graph-rest-1.0"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    kind: "learn"
  - title: "Viewing existing Entra backups (snapshots) (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/entrarecoveryservices-recovery-list-snapshots?view=graph-rest-1.0"
    kind: "learn"
  - title: "Starting and reviewing recovery jobs on existing Entra backups (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/backup/recover-objects"
    kind: "learn"
  - title: "Starting and reviewing recovery jobs on existing Entra backups (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/entrarecoveryservices-snapshot-post-recoveryjobs?view=graph-rest-1.0"
    kind: "learn"
  - title: "Pay-as-you-go billing policy for Microsoft 365 Backup (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
  - title: "Soft deletion in Microsoft Entra Backup and Recovery"
    url: "https://learn.microsoft.com/entra/backup/soft-deletion"
    kind: "learn"
videos: []
related: ["agent-identity"]
controls:
  - governs: "Switch or setting for the 30-day extension"
    scope: "tenant"
    ui: null
    api: null
    note: "No setting, default or enablement procedure for the 30-day extension is documented at the time of writing (November 2026)."
  - governs: "Viewing existing Entra backups (snapshots)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Backup and recovery > Backups"
      docs: "https://learn.microsoft.com/entra/backup/overview"
    api:
      kind: "graph"
      call: "GET /v1.0/directory/recovery/snapshots"
      docs: "https://learn.microsoft.com/graph/api/entrarecoveryservices-recovery-list-snapshots?view=graph-rest-1.0"
    note: "Existing seven-day recovery, not the 30-day extension. Entra Backup Reader or Entra Backup Administrator; Entra ID P1 or P2 required."
  - governs: "Starting recovery jobs on existing Entra backups"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Backup and recovery > Backups > backup > Recover backup"
      docs: "https://learn.microsoft.com/entra/backup/recover-objects"
    api:
      kind: "graph"
      call: "POST /v1.0/directory/recovery/snapshots/{snapshot-id}/recoveryJobs"
      docs: "https://learn.microsoft.com/graph/api/entrarecoveryservices-snapshot-post-recoveryjobs?view=graph-rest-1.0"
    note: "Existing recovery. Entra Backup Administrator is the least privileged role for the API. Backup and recovery > Recovery History is where an admin cancels a running job; it does not start restores."
  - governs: "Pay-as-you-go billing policy for Microsoft 365 Backup"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "Billing-node instructions are for GCC and new Microsoft 365 Backup customers only; the cited page directs existing backup customers to the Setup node. General Microsoft 365 Backup control; not confirmed for the Entra extension."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-17"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default and licensing now Not stated or not yet published, cost lowered to low, Graph snapshot call and billing path qualified, and soft-delete exclusions added."
  - date: "2026-11-17"
    note: "Corrected after verification: recovery is started from Backups > Recover backup (Recovery History only cancels), the AD DS-synced exception and the billing-row wording now match their sources, and the 30-day extension no longer assumes existing limits apply."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: the billing-policy row and its notes now say the Billing-node steps are for GCC and new Microsoft 365 Backup customers only, with existing customers directed to the Setup node."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 77 statements not yet confirmed"
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 18 of 103 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 5
verification:
  status: "held"
  date: "2026-11-21"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 103
  confirmed: 85
  unconfirmed: 0
  contradicted: 18
  attempts: 1
  hash: "e64bfd1ae60d58a62ca95f216f0d7433"
---

## What's changing

The roadmap item describes extended backup and recovery for a tenant's Microsoft Entra objects: a point-in-time restore to a last known good state, going back a rolling 30 days. Customers would use the Microsoft 365 Backup native app in the Microsoft 365 admin center, and ISV apps would use the Microsoft 365 Backup Storage platform APIs. Microsoft Learn does not describe this 30-day extension at the time of writing (November 2026), so what follows about it is the roadmap's description.

The roadmap item says advanced recovery features are currently limited to the Microsoft Entra admin portal, and that some user recovery actions will be possible in the Microsoft 365 Backup native app. It also says the existing 7-day recovery that comes with Entra ID P1 and P2 licences is already generally available and independent of this item.

That existing recovery is documented. Microsoft Entra Backup and Recovery takes backups of supported objects automatically once a day and keeps up to seven days of history. Administrators can view backups, create difference reports (a comparison of a backup with the current tenant), recover objects and review recovery history. Supported objects include users, groups, apps, service principals, Conditional Access policies, named locations, and selected properties of the authentication method and authorization policies. Agent ID is covered through its underlying user and service principal objects.

Two documentation points need care. The Entra overview says seven days of backup history, while the Microsoft Graph backup overview says five days. Separately, the 30-day window in the Entra documentation is soft deletion, not backup retention: soft-deleted users, Microsoft 365 Groups, cloud security groups, application registrations and service principals can be restored for 30 days. Soft delete and restore for cloud security groups is in preview and available only in public clouds, and it is not supported for EDU tenants using OneDrive for Business storage or for audience targeting with classic web parts.

The roadmap record gives status In development, a target of December CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The date is a target, not a confirmed availability date.

## Why it matters

Identity is the layer that every other Microsoft 365 permission depends on, and soft delete does not help when an object still exists but has been changed wrongly, for example a Conditional Access policy, a group's attributes or an app registration. Point-in-time recovery turns a rebuild into a rollback, and a longer window would help where a bad change is noticed late. Whether the window really reaches 30 days, for which objects and under which roles is not yet published.

If nobody acts, nothing is documented to change in your tenant: the existing recovery stays as it is. Rehearse the existing recovery to build operational experience, but revalidate restore behaviour, limits and roles against the extension documentation when Microsoft publishes it.

## Risk assessment

**Data exposure**
- Backups hold directory data for the supported objects and properties. For the existing backups Microsoft states that data stays in the same geo-location as the Microsoft Entra tenant; where data for a 30-day extension is held is not yet published.

**Security & identity**
- Restoring a soft-deleted user reinstates their attributes, group memberships, licences and assignments, and recovering a service principal also restores its OAuth2 permission grants and app role assignments. A restore can therefore bring back access that was removed on purpose, such as at off-boarding. Run a difference report and review it before recovering security-relevant objects.
- Existing recovery needs the Microsoft Entra Backup Administrator role (included in Global Administrator). Which roles may run the 30-day restores in the Microsoft 365 Backup app is not yet published; the Microsoft 365 Backup role table covers OneDrive, SharePoint and Exchange only.

**Autonomy & actions**
- Recovery returns objects to the backup state: objects added since the backup are soft-deleted, and updated objects revert to the backup value. A restore can remove recently created users, groups or apps, so scope it by object type or object ID.
- The roadmap says ISV apps can restore through the Backup Storage platform APIs. What permissions such an app would need is not yet published.

**Change & support**
- The roadmap splits the experience across two consoles: advanced recovery in the Microsoft Entra admin portal and some user recovery actions in the Microsoft 365 Backup app. Write down which console covers which restore.
- Recovery has limits: hard-deleted objects cannot be recovered, changes to on-premises synced objects (except group memberships) are excluded from recovery, and manager, sponsor and group ownership changes are out of scope. Only one job can run at a time.

## Cost and licensing

The existing seven-day recovery requires Microsoft Entra ID P1 or P2 licences, as listed in the prerequisites of the Microsoft Entra Backup and Recovery overview.

For the 30-day extension, licensing, meter and rate are not yet published. Microsoft 365 Backup for SharePoint, OneDrive and Exchange is a separate pay-as-you-go service with a list price of $0.15/GiB/month of protected content, and its Microsoft Graph overview describes it as covering those three workloads. Microsoft has not said that this meter applies to Entra objects, so treat it as context, not as a forecast. If an ISV app built on the Backup Storage platform is used, the Microsoft 365 Backup pricing page says that partner charges you for its application and that you receive no separate Microsoft bill for the Backup Storage consumption.

The indirect cost is admin time to define restore procedures and to test them.

## Scope

- **Roadmap scope:** Worldwide (Standard Multi-Tenant), Web platform, release phase General Availability, status In development, target December CY2026. No other cloud is listed on the roadmap item.
- **Existing recovery:** workforce tenants only (External ID and Azure AD B2C tenants are not supported), with Microsoft Entra ID P1 or P2 licences.
- **Roles:** Microsoft Entra Backup Reader can view backups, comparisons and recovery history. Microsoft Entra Backup Administrator can also start difference reports and trigger recovery. Roles for the 30-day extension are not yet published.
- **Objects:** the supported objects and properties are listed in Microsoft's supported-objects article; the 30-day extension's coverage is not yet published.

## Governance guidance

### Before rollout
- Confirm the tenant has Microsoft Entra ID P1 or P2 and assign Microsoft Entra Backup Reader to reviewers and Microsoft Entra Backup Administrator to the few people who may restore (see the first two controls).
- Plan a separate backup for objects managed in AD DS; changes to synced objects, except group memberships, are excluded from Entra recovery.
- Decide who approves a restore of Conditional Access policies, app registrations and privileged groups, and require a reviewed difference report first.

### At rollout
- Check Message center and Microsoft Learn for the enablement, role and billing instructions for the 30-day extension before changing any billing setup (see the first control).
- Run a restore test on a non-production group or test app, scoped by object type or object ID, using the existing recovery.
- Record in the runbook which console to use for which restore, since the roadmap splits advanced recovery and user actions across two consoles.

### After rollout
- Review Recovery History after each restore and confirm that objects created since the backup were not soft-deleted by mistake.
- Re-run the test after sync changes or source-of-authority moves, and after Microsoft changes the supported-objects list.
- Watch Microsoft Learn for the licensing, default state and role details listed under Open questions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch or setting for the 30-day extension</strong><br><small>Tenant</small><br><small class="controls__note">No setting, default or enablement procedure for the 30-day extension is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Viewing existing Entra backups (snapshots)</strong><br><small>Tenant</small><br><small class="controls__note">Existing seven-day recovery, not the 30-day extension. Entra Backup Reader or Entra Backup Administrator; Entra ID P1 or P2 required.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Backup and recovery › Backups <a href="https://learn.microsoft.com/entra/backup/overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/directory/recovery/snapshots</code> <a href="https://learn.microsoft.com/graph/api/entrarecoveryservices-recovery-list-snapshots?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Starting recovery jobs on existing Entra backups</strong><br><small>Tenant</small><br><small class="controls__note">Existing recovery. Entra Backup Administrator is the least privileged role for the API. Backup and recovery &gt; Recovery History is where an admin cancels a running job; it does not start restores.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Backup and recovery › Backups › backup › Recover backup <a href="https://learn.microsoft.com/entra/backup/recover-objects" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/recovery/snapshots/{snapshot-id}/recoveryJobs</code> <a href="https://learn.microsoft.com/graph/api/entrarecoveryservices-snapshot-post-recoveryjobs?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing policy for Microsoft 365 Backup</strong><br><small>Tenant</small><br><small class="controls__note">Billing-node instructions are for GCC and new Microsoft 365 Backup customers only; the cited page directs existing backup customers to the Setup node. General Microsoft 365 Backup control; not confirmed for the Entra extension.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the 30-day extension is documented at the time of writing (November 2026), so the first row records that gap. The two Entra rows govern existing seven-day recovery. The billing row is general Microsoft 365 Backup context and is not documented as a control for existing Entra recovery or the planned extension. Microsoft states that no signed-in user or application, even with the highest admin privileges, can turn off, delete or modify the tenant's Entra backups, so the governance task is access to restore, not enablement.

The Graph snapshot operation is documented at v1.0, while the Microsoft Graph backup overview labels the Entra recovery APIs as available on beta only. Confirm the version before scripting. The Microsoft 365 Backup billing controls (Billing > Pay-as-you-go) are general; the Learn pages describe OneDrive, SharePoint and Exchange policies, and Microsoft has not confirmed how they apply to Entra objects. The Billing-node instructions are for GCC and new Microsoft 365 Backup customers only; the cited page directs existing backup customers to the Setup node.

## Open questions

- How is the 30-day extension enabled, and is it on by default or opt-in? Watch Message center and the Microsoft Entra Backup and Recovery overview.
- Which licence or meter applies to the extension, and where is the charge billed? Watch the Microsoft 365 Backup pricing page.
- Which roles can run Entra restores in the Microsoft 365 Backup app, and what permissions will ISV apps need on the Backup Storage platform APIs?
- Which objects and properties does the 30-day window cover, including Conditional Access policies and Agent ID objects?
- Is the existing backup history seven days or five days? The Entra overview and the Microsoft Graph backup overview disagree.

<!-- rationale
risk: Medium. A restore can reinstate memberships, grants and role assignments that were removed on purpose, and Microsoft has not yet published who may run the 30-day restores.
cost: Low. The only cost the sources show is admin time for restore planning and testing; licensing, meter and rate for the 30-day extension are not yet published.
impact: Low. Identity, security and Microsoft 365 administrators notice it; end users see nothing unless a restore changes their account or group membership.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] front matter: defaultState; summary; controls[0].note; Open questions / default: The default state of the 30-day extension is unknown. | Found: | **Default state** | Available automatically for tenants with Microsoft Entra ID P1 or P2 licenses. | Off by default. | | Fix: Set defaultState to admin-opt-in and replace the default-state gap throughout with: 'Microsoft Entra Backup and Recovery Premium (preview) is off by default and must be turned on by an administrator in the Microsoft 365 admin center.' Cite https://learn.microsoft.com/entra/backup/backup-recovery-plans. | Source: https://learn.microsoft.com/entra/backup/backup-recovery-plans
- [contradicted, blocker] front matter: licensing.model; summary; licensing.notes; Open questions / licensing: Licensing for the 30-day extension is unknown and not yet published. | Found: To use the Premium plan, the tenant has at least one SharePoint license or a license that includes SharePoint. Microsoft Entra ID P1 or P2 licenses aren't required. | Fix: Set licensing.model to consumption. Replace the extension licensing gap with: 'Premium (preview) requires at least one SharePoint license or a license that includes SharePoint, plus consumption billing; Microsoft Entra ID P1 or P2 licenses are not required.' Retain P1/P2 only as the Standard plan prerequisite. | Source: https://learn.microsoft.com/entra/backup/overview
- [contradicted, blocker] front matter: licensing.notes; Cost and licensing; Open questions / cost: Billing for the 30-day extension is not yet published. | Found: Microsoft Entra Backup and Recovery Premium uses consumption-based pricing. | Fix: Replace the billing gap with: 'Microsoft Entra Backup and Recovery Premium uses consumption-based billing through Microsoft 365 Backup.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-pricing
- [contradicted, blocker] Cost and licensing; rationale: cost; Open questions / cost: The meter for the 30-day extension is not yet published. | Found: The estimate uses the number of protected objects as its input. For commerce billing, protected-object usage is represented as GB-based billing units. These units don't indicate the amount of backup storage consumed. | Fix: Replace the meter gap with: 'Premium is metered by protected Microsoft Entra objects; usage is represented as GB-based billing units for commerce billing, not as backup storage consumed.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-pricing
- [contradicted, blocker] Cost and licensing; rationale: cost / cost: The rate for the 30-day extension is not yet published. | Found: The price is $0.025 USD per protected Microsoft Entra object per month. | Fix: Replace the unpublished-rate statement with: 'Premium costs $0.025 USD per protected Microsoft Entra object per month.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-pricing
- [contradicted, blocker] controls[0].ui; controls[0].api; controls[0].note; Governance controls / absence: No switch, setting or enablement procedure for the 30-day extension is documented on either surface. | Found: Select Settings. Select Microsoft 365 Backup from the list of products. On the Microsoft 365 Backup page, in the Entra section, select Set up policy. | Fix: Replace the existing row's UI null with surface 'Microsoft 365 admin center' and path 'Settings > Microsoft 365 Backup > Entra > Set up policy > Overview > Policy Settings > Review Entra backup policy > Create policy', with docs https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies. Replace its note with 'Premium (preview) is off by default; configure billing and create the Entra policy to enable it. The backup recovery window is fixed at 30 days.' Leave the API null; no Premium-specific enablement API was found in the targeted search. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, blocker] What's changing / absence: Microsoft Learn does not describe the 30-day extension in November 2026. | Found: Premium (preview): An optional, consumption-based plan that retains up to 30 days of backup history. | Fix: Replace the sentence with: 'The roadmap still lists In development with a December CY2026 General Availability target, while Microsoft Learn now documents the 30-day Microsoft Entra Backup and Recovery Premium plan in preview.' | Source: https://learn.microsoft.com/entra/backup/overview
- [contradicted, blocker] summary; Risk assessment: Security & identity; Scope: Roles; Open questions; rationale: risk / role: Administrator roles for the 30-day extension are not yet published. | Found: | Global Administrator | ✓ | ✓ | ✓ | ✓ | | Microsoft Entra Backup Administrator |  |  |  | ✓ | | Fix: Replace the role gap with: 'The Microsoft 365 Backup role table lists Global Administrator and Microsoft Entra Backup Administrator for Entra. Microsoft Entra Backup Administrator is the least-privileged role for enabling Premium and recovering objects.' Keep the separate ISV API-permission question. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
- [contradicted, blocker] Risk assessment: Security & identity / role: The Microsoft 365 Backup role table covers only OneDrive, SharePoint and Exchange. | Found: | Admin role | OneDrive | SharePoint | Exchange | Entra | | Fix: Remove 'the Microsoft 365 Backup role table covers OneDrive, SharePoint and Exchange only'; the cited table now includes Entra. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
- [contradicted, blocker] Why it matters; Scope: Objects; Open questions / absence: The objects and properties covered by the 30-day extension are not yet published. | Found: | Supported objects | All object types supported by Microsoft Entra Backup and Recovery. | The same supported object types as the Standard plan. | | Fix: Replace the coverage gap with: 'Premium supports the same object types and recovery scope as Standard, limited to the supported properties listed in Microsoft's supported-objects article.' Cite https://learn.microsoft.com/entra/backup/backup-recovery-plans. | Source: https://learn.microsoft.com/entra/backup/backup-recovery-plans
- [contradicted, blocker] Why it matters / absence: Whether the extension's window really reaches 30 days is not yet published. | Found: Premium's backup recovery window is fixed at 30 days and isn't configurable. Available backup history accumulates after each daily backup cycle. | Fix: Replace the retention uncertainty with: 'Premium (preview) has a fixed 30-day backup recovery window; available history accumulates with daily backups rather than appearing immediately at enablement.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies
- [contradicted, blocker] Risk assessment: Data exposure / absence: The location of data for the 30-day extension is not yet published. | Found: Microsoft automatically takes snapshots of certain directory data at regular intervals, which are stored in Microsoft-managed Azure storage and replicated to multiple datacenters in the same region as the tenant. | Fix: Replace the location gap with: 'The Microsoft 365 Backup overview points Entra Premium geographic residency to Microsoft's Entra data-residency documentation, which states that Backup and Recovery snapshots are stored in Microsoft-managed Azure storage and replicated within the tenant's region.' Cite https://learn.microsoft.com/microsoft-365/backup/backup-overview and https://learn.microsoft.com/entra/fundamentals/data-residency#data-residency-across-microsoft-entra-components. | Source: https://learn.microsoft.com/entra/fundamentals/data-residency#data-residency-across-microsoft-entra-components
- [contradicted, blocker] Governance controls: prose / applicability: Microsoft has not confirmed how Microsoft 365 Backup billing controls apply to Entra objects. | Found: Configure billing and turn on Premium in the Microsoft 365 admin center. Microsoft Entra Backup Administrator is the least-privileged role that can turn on Premium for your tenant. | Fix: Replace the prose billing caveat with: 'Microsoft directs administrators to Microsoft 365 Backup setup to configure billing and turn on Entra Premium; Standard remains included with Entra ID P1 or P2.' | Source: https://learn.microsoft.com/entra/backup/overview
- [contradicted, blocker] Governance controls: prose / behaviour: No user or application can turn off, delete or modify the tenant's Entra backups, so governance is access to restore rather than enablement. | Found: No signed-in user or application, even with the highest admin privileges, can turn off, delete, or modify Standard plan backups in the tenant. | Fix: Narrow the sentence to: 'No signed-in user or application, even with the highest admin privileges, can turn off, delete or modify Standard plan backups. Premium requires administrator enablement.' Remove the conclusion that enablement is not a governance task. | Source: https://learn.microsoft.com/entra/backup/overview
- [contradicted, blocker] What's changing / behaviour: The 30-day window in Entra documentation is soft deletion, not backup retention. | Found: Premium (preview): An optional, consumption-based plan that retains up to 30 days of backup history. | Fix: Replace the sentence with: 'The 30-day soft-deletion retention window is distinct from Premium's up-to-30-day backup history; Standard retains up to seven days of backups.' | Source: https://learn.microsoft.com/entra/backup/overview
- [contradicted, blocker] front matter: cost; rationale: cost; Cost and licensing / consistency: Cost is low because admin time is the only known cost for the extension. | Found: Page: 'The only cost the sources show is admin time'. Microsoft: 'Microsoft Entra Backup and Recovery Premium uses consumption-based pricing. The price is $0.025 USD per protected Microsoft Entra object per month.' | Fix: Set cost to variable and replace the cost rationale with: 'Variable. Premium is metered at $0.025 USD per protected Microsoft Entra object per month; restore planning and testing also take administrator time.' | Source: https://learn.microsoft.com/microsoft-365/backup/backup-pricing
- [contradicted, blocker] Governance controls: prose / absence: Microsoft 365 Backup policy documentation does not yet cover Entra objects. | Found: Create backup policies for OneDrive, SharePoint, Exchange, or Entra. | Fix: Remove the limiting clause 'the Learn pages describe OneDrive, SharePoint and Exchange policies'; the setup article now links to policy creation for Entra as well. | Source: https://learn.microsoft.com/microsoft-365/backup/backup-setup
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Governance controls table / applicability: The billing policy is a general Microsoft 365 Backup control, not confirmed for the Entra extension. | Found: Premium charges depend on the number of protected directory objects captured in each backup. Configure billing and turn on Premium in the Microsoft 365 admin center. | Fix: Replace the row's general-control caveat with: 'Premium billing is configured in the Microsoft 365 admin center; the Entra overview links to Microsoft 365 Backup setup for instructions.' | Source: https://learn.microsoft.com/entra/backup/overview
- [supported, minor] controls[3].note; Governance controls table and prose / applicability: The cited Billing-node instructions are for GCC and new Backup customers and direct existing customers to Setup. | Found: Government Community Cloud (GCC) and new Microsoft 365 Backup customers only: Existing backup customers must use the Setup node to set up pay-as-you-go billing. | Fix: Keep this attribution, but append: 'The separately cited Microsoft 365 Backup setup article documents optional migration of existing customers to the new Billing experience.' | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The role-assignment and reviewed-difference-report checklist steps are represented by the referenced controls. | Found: Checklist: 'assign Microsoft Entra Backup Reader ... and Microsoft Entra Backup Administrator' and 'require a reviewed difference report first'. Rows: extension switch, viewing snapshots, starting recovery, billing; no role-assignment or difference-report row. | Fix: Remove '(see the first two controls)' from the role-assignment step: those rows do not document assigning roles. The role-assignment and reviewed-difference-report checklist controls have no corresponding rows; no new rows are requested.
-->
