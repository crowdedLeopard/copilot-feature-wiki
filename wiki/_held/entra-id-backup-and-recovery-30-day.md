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
videos: []
related: ["m365-teams-channel-backup","agent-identity"]
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
  - governs: "Starting and reviewing recovery jobs on existing Entra backups"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Backup and recovery > Recovery History"
      docs: "https://learn.microsoft.com/entra/backup/recover-objects"
    api:
      kind: "graph"
      call: "POST /v1.0/directory/recovery/snapshots/{snapshot-id}/recoveryJobs"
      docs: "https://learn.microsoft.com/graph/api/entrarecoveryservices-snapshot-post-recoveryjobs?view=graph-rest-1.0"
    note: "Existing recovery. Entra Backup Administrator is the least privileged role for the API. The UI path shows history and lets an admin cancel a running job."
  - governs: "Pay-as-you-go billing policy for Microsoft 365 Backup"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
    note: "General Microsoft 365 Backup control; not confirmed for the Entra extension. Existing Backup customers use Setup > Billing and licenses instead of the Billing node."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-16"
    note: "Corrected after verification: default and licensing now Not stated or not yet published, cost lowered to low, Graph snapshot call and billing path qualified, and soft-delete exclusions added."
version: 3
verification:
  status: "held"
  date: "2026-11-16"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 78
  confirmed: 73
  unconfirmed: 1
  contradicted: 4
  attempts: 2
---

## What's changing

The roadmap item describes extended backup and recovery for a tenant's Microsoft Entra objects: a point-in-time restore to a last known good state, going back a rolling 30 days. Customers would use the Microsoft 365 Backup native app in the Microsoft 365 admin center, and ISV apps would use the Microsoft 365 Backup Storage platform APIs. Microsoft Learn does not describe this 30-day extension at the time of writing (November 2026), so what follows about it is the roadmap's description.

The roadmap item says advanced recovery features are currently limited to the Microsoft Entra admin portal, and that some user recovery actions will be possible in the Microsoft 365 Backup native app. It also says the existing 7-day recovery that comes with Entra ID P1 and P2 licences is already generally available and independent of this item.

That existing recovery is documented. Microsoft Entra Backup and Recovery takes backups of supported objects automatically once a day and keeps up to seven days of history. Administrators can view backups, create difference reports (a comparison of a backup with the current tenant), recover objects and review recovery history. Supported objects include users, groups, apps, service principals, Conditional Access policies, named locations, and selected properties of the authentication method and authorization policies. Agent ID is covered through its underlying user and service principal objects.

Two documentation points need care. The Entra overview says seven days of backup history, while the Microsoft Graph backup overview says five days. Separately, the 30-day window in the Entra documentation is soft deletion, not backup retention: soft-deleted users, Microsoft 365 Groups, cloud security groups, application registrations and service principals can be restored for 30 days. Soft delete and restore for cloud security groups is in preview and available only in public clouds, and it is not supported for EDU tenants using OneDrive for Business storage or for audience targeting with classic web parts.

The roadmap record gives status In development, a target of December CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The date is a target, not a confirmed availability date.

## Why it matters

Identity is the layer that every other Microsoft 365 permission depends on, and soft delete does not help when an object still exists but has been changed wrongly, for example a Conditional Access policy, a group's attributes or an app registration. Point-in-time recovery turns a rebuild into a rollback, and a longer window would help where a bad change is noticed late. Whether the window really reaches 30 days, for which objects and under which roles is not yet published.

If nobody acts, nothing is documented to change in your tenant: the existing recovery stays as it is. The useful work now is to rehearse the existing recovery, because the same restore behaviours, limits and role questions will apply to whatever Microsoft ships.

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
- List the users and groups synchronised from Active Directory Domain Services and plan a separate backup for them, because their changes are excluded from recovery.
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
<tr><td data-label="Control"><strong>Starting and reviewing recovery jobs on existing Entra backups</strong><br><small>Tenant</small><br><small class="controls__note">Existing recovery. Entra Backup Administrator is the least privileged role for the API. The UI path shows history and lets an admin cancel a running job.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Backup and recovery › Recovery History <a href="https://learn.microsoft.com/entra/backup/recover-objects" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/recovery/snapshots/{snapshot-id}/recoveryJobs</code> <a href="https://learn.microsoft.com/graph/api/entrarecoveryservices-snapshot-post-recoveryjobs?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing policy for Microsoft 365 Backup</strong><br><small>Tenant</small><br><small class="controls__note">General Microsoft 365 Backup control; not confirmed for the Entra extension. Existing Backup customers use Setup &gt; Billing and licenses instead of the Billing node.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

No setting for the 30-day extension is documented at the time of writing (November 2026), so the first row records that gap. The remaining rows govern the existing seven-day recovery, which is the nearest documented control. Microsoft states that no signed-in user or application, even with the highest admin privileges, can turn off, delete or modify the tenant's Entra backups, so the governance task is access to restore, not enablement.

The Graph snapshot operation is documented at v1.0, while the Microsoft Graph backup overview labels the Entra recovery APIs as available on beta only. Confirm the version before scripting. The Microsoft 365 Backup billing controls (Billing > Pay-as-you-go) are general; the Learn pages describe OneDrive, SharePoint and Exchange policies, and Microsoft has not confirmed how they apply to Entra objects.

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

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[2].ui; Governance controls table / admin-path: Backup and recovery > Recovery History is the UI path paired with starting and reviewing existing recovery jobs. | Found: Go to Backup and recovery > Backups. Select a backup and select Recover backup.
Select Recover to start the recovery job.
Go to Backup and recovery > Recovery History.
Select the in-progress recovery job, and then select Cancel. | Fix: Split this row: use 'Backup and recovery > Backups > backup > Recover backup' for starting recovery, and retain 'Backup and recovery > Recovery History' in a separate reviewing/cancelling row. Cite https://learn.microsoft.com/entra/backup/recover-objects for both; do not imply that Recovery History starts restores. | Source: https://learn.microsoft.com/entra/backup/recover-objects
- [supported, minor] controls[3].note; Governance controls table / admin-path: Existing Backup customers use Setup > Billing and licenses instead of the Billing node. | Found: Government Community Cloud (GCC) and new Microsoft 365 Backup customers only: Existing backup customers must use the Setup node to set up pay-as-you-go billing. | Fix: Qualify this as existing customers whose billing has not migrated. The already-cited https://learn.microsoft.com/microsoft-365/backup/backup-setup documents migration to the Billing experience for customers onboarded before April 1, 2026; mention that alternative rather than making Setup mandatory for every existing customer. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [supported, minor] Why it matters / behaviour: Soft-delete recovery addresses deleted objects, whereas backup recovery can also roll back unintended attribute changes. | Found: Soft delete | Object is retained in a deleted state for a limited time
When combined with soft deletion, Microsoft Entra Backup and Recovery enables organizations to recover from unintended or malicious attribute changes and deletions. | Fix: Add https://learn.microsoft.com/entra/backup/soft-deletion to sources to support the explicit distinction between soft-delete recovery and recovery of modified objects. | Source: https://learn.microsoft.com/entra/backup/soft-deletion
- [unsupported, blocker] Why it matters: second paragraph / applicability: The same existing restore behaviours and limits will apply to whatever Microsoft ships for the 30-day extension. | Found: Searched: Entra 30-day Backup Storage enable default license roles objects residency; Entra 30-day backup Graph switch enable. Opened Entra overview, supported objects, recovery model and Graph backup overview; no text carries existing limits into the extension. | Fix: Replace the final sentence with 'Rehearse the existing recovery to build operational experience, but revalidate restore behaviour, limits and roles against the extension documentation when Microsoft publishes it.' Do not promise that existing recovery limits apply to an undocumented capability.
- [contradicted, blocker] Governance guidance: Before rollout; Risk assessment: Change & support / consistency: The governance checklist excludes all changes to synced users and groups even though the risk section retains the group-membership exception. | Found: Risk: 'changes to on-premises synced objects (except group memberships) are excluded from recovery'. Guidance: 'List the users and groups synchronised from Active Directory Domain Services ... because their changes are excluded from recovery.' | Fix: In Before rollout, say 'Plan a separate backup for objects managed in AD DS; changes to synced objects, except group memberships, are excluded from Entra recovery.' Retain the exception from https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations. Note that the recovery-model article gives a broader exclusion if discussing the documentation discrepancy.
- [contradicted, blocker] Governance controls: first paragraph after table / consistency: All rows after the extension row govern existing seven-day Entra recovery, including the Microsoft 365 Backup billing row. | Found: 'The remaining rows govern the existing seven-day recovery' conflicts with 'General Microsoft 365 Backup control; not confirmed for the Entra extension' and 'Microsoft has not said that this meter applies to Entra objects'. | Fix: Replace 'The remaining rows govern the existing seven-day recovery' with 'The two Entra rows govern existing seven-day recovery. The billing row is general Microsoft 365 Backup context and is not documented as a control for existing Entra recovery or the planned extension.'
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist tells administrators to assign backup roles and require reviewed difference reports, but the controls table has no rows for those controls. | Found: 'assign Microsoft Entra Backup Reader to reviewers and Microsoft Entra Backup Administrator' and 'require a reviewed difference report first'; table rows cover the extension switch, viewing backups, recovery jobs and billing only. | Fix: Add controls rows named 'Assigning Entra backup and recovery roles' and 'Creating and reviewing difference reports'. The existing view-backups and recovery-history rows do not describe either action; supply separately verified paths and API equivalents or explain the undocumented surface.
-->
