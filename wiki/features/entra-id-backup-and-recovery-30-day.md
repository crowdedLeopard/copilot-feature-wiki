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
version: 5
verification:
  status: "verified-with-gaps"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 77
  confirmed: 76
  unconfirmed: 0
  contradicted: 1
  attempts: 0
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

<!-- verifier-findings (2026-11-17, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].note; Governance controls table and prose / applicability: The cited Billing-node article limits its instructions to GCC and new Microsoft 365 Backup customers and directs existing customers to Setup. | Found: Government Community Cloud (GCC) and new Microsoft 365 Backup customers only: Existing backup customers must use the Setup node to set up pay-as-you-go billing. | Fix: Keep the attribution to the Billing-node article, but append: 'The separately cited Set up Microsoft 365 Backup page also documents an optional migration from Setup to the new Billing experience for existing customers.' Use https://learn.microsoft.com/microsoft-365/backup/backup-setup#1-set-up-pay-as-you-go-billing. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: All controls the governance checklist tells readers to configure or check have corresponding controls-table rows. | Found: Checklist: 'assign Microsoft Entra Backup Reader ... and Microsoft Entra Backup Administrator' and 'require a reviewed difference report first'. Table: extension switch, viewing snapshots, starting recovery, and billing; no role-assignment or difference-report control row. | Fix: The Before rollout steps for assigning the two Entra Backup roles and requiring a reviewed difference report have no corresponding controls-table rows. Remove '(see the first two controls)' from the role-assignment step because those rows do not document assigning roles; no new rows are requested.
-->
