---
title: "Microsoft Entra ID: extended 30-day backup and recovery through Microsoft 365 Backup"
slug: "entra-id-backup-and-recovery-30-day"
roadmapId: 567885
topic: "governance"
products: ["Microsoft 365","Microsoft 365 admin center","Microsoft Entra"]
summary: "Microsoft Entra Backup and Recovery Premium (preview) keeps up to 30 days of backups, against seven for Standard. It is off by default and billed per protected object, so an administrator must turn it on and budget for it."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Premium (preview) requires at least one SharePoint license or a license that includes SharePoint, plus consumption billing; Microsoft Entra ID P1 or P2 licenses are not required. The Standard plan (up to seven days) is included with Entra ID P1 or P2."
audiences: ["security","m365-admin","service-owner"]
tags: ["entra-id","backup-and-recovery","m365-backup","identity","point-in-time-restore","restore","resilience","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 567885"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567885"
    kind: "roadmap"
  - title: "Microsoft Entra Backup and Recovery overview"
    url: "https://learn.microsoft.com/entra/backup/overview"
    kind: "learn"
  - title: "Microsoft Entra Backup and Recovery plans"
    url: "https://learn.microsoft.com/entra/backup/backup-recovery-plans"
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
  - title: "backupRestoreRoot resource type"
    url: "https://learn.microsoft.com/graph/api/resources/backuprestoreroot"
    kind: "learn"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    kind: "learn"
  - title: "Create, view, and edit backup policies in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    kind: "learn"
  - title: "Microsoft Entra ID and data residency"
    url: "https://learn.microsoft.com/entra/fundamentals/data-residency"
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
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup > Entra > Set up policy > Overview > Policy Settings > Review Entra backup policy > Create policy"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies"
    api: null
    note: "Premium (preview) is off by default; configure billing and create the Entra policy to enable it. The backup recovery window is fixed at 30 days."
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
    note: "Premium billing is set up in the Microsoft 365 admin center. Billing-node steps are for GCC and new Backup customers; existing customers use the Setup node, with optional migration per the Set up Microsoft 365 Backup article."
confidence: "high"
created: "2026-11-13"
updated: "2026-11-21"
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
  - date: "2026-11-21"
    note: "Corrected after verification: Premium (preview) default (off), licence, $0.025 per object price, roles, admin enablement path, data location and object coverage now come from Microsoft Learn."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 97 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 6
verification:
  status: "held"
  date: "2026-11-21"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 97
  confirmed: 92
  unconfirmed: 0
  contradicted: 5
  attempts: 2
  hash: "c38b6998a256b9a7f4538ecaa1397610"
---

## What's changing

The roadmap item describes extended backup and recovery for a tenant's Microsoft Entra objects: a point-in-time restore to a last known good state, going back a rolling 30 days. Customers would use the Microsoft 365 Backup native app in the Microsoft 365 admin center, and ISV apps would use the Microsoft 365 Backup Storage platform APIs. The roadmap still lists In development with a December CY2026 General Availability target, while Microsoft Learn now documents the 30-day Microsoft Entra Backup and Recovery Premium plan in preview. Microsoft describes Premium as an optional, consumption-based plan that retains up to 30 days of backup history.

The roadmap item says advanced recovery features are currently limited to the Microsoft Entra admin portal, and that some user recovery actions will be possible in the Microsoft 365 Backup native app. It also says the existing 7-day recovery that comes with Entra ID P1 and P2 licences is already generally available and independent of this item.

That existing recovery is documented. Microsoft Entra Backup and Recovery takes backups of supported objects automatically once a day and keeps up to seven days of history. Administrators can view backups, create difference reports (a comparison of a backup with the current tenant), recover objects and review recovery history. Supported objects include users, groups, apps, service principals, Conditional Access policies, named locations, and selected properties of the authentication method and authorization policies. Agent ID is covered through its underlying user and service principal objects.

Two documentation points need care. The Entra overview says seven days of backup history, while the Microsoft Graph backup overview says five days. Separately, the 30-day soft-deletion retention window is distinct from Premium's up-to-30-day backup history; Standard retains up to seven days of backups. Soft-deleted users, Microsoft 365 Groups, cloud security groups, application registrations and service principals can be restored for 30 days. Soft delete and restore for cloud security groups is in preview and available only in public clouds, and it is not supported for EDU tenants using OneDrive for Business storage or for audience targeting with classic web parts.

The roadmap record gives status In development, a target of December CY2026, release phase General Availability, the Worldwide (Standard Multi-Tenant) cloud and the Web platform. The date is a target, not a confirmed availability date.

## Why it matters

Identity is the layer that every other Microsoft 365 permission depends on, and soft delete does not help when an object still exists but has been changed wrongly, for example a Conditional Access policy, a group's attributes or an app registration. Point-in-time recovery turns a rebuild into a rollback, and a longer window would help where a bad change is noticed late. Premium (preview) has a fixed 30-day backup recovery window; available history accumulates with daily backups rather than appearing immediately at enablement. Premium supports the same object types and recovery scope as Standard, limited to the supported properties listed in Microsoft's supported-objects article.

If nobody acts, Premium stays off and the existing recovery continues, because Microsoft documents Premium as off by default and turned on by an administrator. Rehearse the existing recovery to build operational experience, but revalidate restore behaviour and limits against the Premium documentation, which is in preview.

## Risk assessment

**Data exposure**
- Backups hold directory data for the supported objects and properties. For the existing backups Microsoft states that data stays in the same geo-location as the Microsoft Entra tenant. The Microsoft 365 Backup overview points Entra Premium geographic residency to Microsoft's Entra data-residency documentation, which states that Backup and Recovery snapshots are stored in Microsoft-managed Azure storage and replicated to multiple datacenters in the same region as the tenant.

**Security & identity**
- Restoring a soft-deleted user reinstates their attributes, group memberships, licences and assignments, and recovering a service principal also restores its OAuth2 permission grants and app role assignments. A restore can therefore bring back access that was removed on purpose, such as at off-boarding. Run a difference report and review it before recovering security-relevant objects.
- Existing recovery needs the Microsoft Entra Backup Administrator role (included in Global Administrator). The Microsoft 365 Backup role table lists Global Administrator and Microsoft Entra Backup Administrator for Entra. Microsoft Entra Backup Administrator is the least-privileged role for enabling Premium and recovering objects.

**Autonomy & actions**
- Recovery returns objects to the backup state: objects added since the backup are soft-deleted, and updated objects revert to the backup value. A restore can remove recently created users, groups or apps, so scope it by object type or object ID.
- The roadmap says ISV apps can restore through the Backup Storage platform APIs. What permissions such an app would need is not yet published.

**Change & support**
- The roadmap splits the experience across two consoles: advanced recovery in the Microsoft Entra admin portal and some user recovery actions in the Microsoft 365 Backup app. Write down which console covers which restore.
- Recovery has limits: hard-deleted objects cannot be recovered, changes to on-premises synced objects (except group memberships) are excluded from recovery, and manager, sponsor and group ownership changes are out of scope. Only one job can run at a time.

## Cost and licensing

The existing seven-day recovery requires Microsoft Entra ID P1 or P2 licences, as listed in the prerequisites of the Microsoft Entra Backup and Recovery overview.

Microsoft Entra Backup and Recovery Premium (preview) requires at least one SharePoint license or a license that includes SharePoint, plus consumption billing; Microsoft Entra ID P1 or P2 licenses are not required. Premium uses consumption-based billing through Microsoft 365 Backup, at $0.025 USD per protected Microsoft Entra object per month. Premium is metered by protected Microsoft Entra objects; usage is represented as GB-based billing units for commerce billing, not as backup storage consumed.

Microsoft 365 Backup for SharePoint, OneDrive and Exchange is metered separately, with a list price of $0.15/GiB/month of protected content. If an ISV app built on the Backup Storage platform is used, the Microsoft 365 Backup pricing page says that partner charges you for its application and that you receive no separate Microsoft bill for the Backup Storage consumption.

The indirect cost is admin time to define restore procedures and to test them.

## Scope

- **Roadmap scope:** Worldwide (Standard Multi-Tenant), Web platform, release phase General Availability, status In development, target December CY2026. No other cloud is listed on the roadmap item.
- **Existing recovery (Standard plan):** workforce tenants only (External ID and Azure AD B2C tenants are not supported), with Microsoft Entra ID P1 or P2 licences.
- **Roles:** Microsoft Entra Backup Reader can view backups, comparisons and recovery history. Microsoft Entra Backup Administrator can also start difference reports and trigger recovery. The Microsoft 365 Backup role table lists Global Administrator and Microsoft Entra Backup Administrator for Entra; Microsoft Entra Backup Administrator is the least-privileged role for enabling Premium and recovering objects.
- **Objects:** the supported objects and properties are listed in Microsoft's supported-objects article. Premium supports the same object types and recovery scope as Standard, limited to the supported properties listed in that article.

## Governance guidance

### Before rollout
- Confirm the tenant has Microsoft Entra ID P1 or P2 and assign Microsoft Entra Backup Reader to reviewers and Microsoft Entra Backup Administrator to the few people who may restore.
- Plan a separate backup for objects managed in AD DS; changes to synced objects, except group memberships, are excluded from Entra recovery.
- Decide who approves a restore of Conditional Access policies, app registrations and privileged groups, and require a reviewed difference report first.

### At rollout
- Decide whether to turn on Premium (preview): configure billing and create the Entra backup policy in the Microsoft 365 admin center (see the first control).
- Run a restore test on a non-production group or test app, scoped by object type or object ID, using the existing recovery.
- Record in the runbook which console to use for which restore, since the roadmap splits advanced recovery and user actions across two consoles.

### After rollout
- Review Recovery History after each restore and confirm that objects created since the backup were not soft-deleted by mistake.
- Re-run the test after sync changes or source-of-authority moves, and after Microsoft changes the supported-objects list.
- Watch Microsoft Learn for Premium to move out of preview and for the details listed under Open questions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Switch or setting for the 30-day extension</strong><br><small>Tenant</small><br><small class="controls__note">Premium (preview) is off by default; configure billing and create the Entra policy to enable it. The backup recovery window is fixed at 30 days.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup › Entra › Set up policy › Overview › Policy Settings › Review Entra backup policy › Create policy <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Viewing existing Entra backups (snapshots)</strong><br><small>Tenant</small><br><small class="controls__note">Existing seven-day recovery, not the 30-day extension. Entra Backup Reader or Entra Backup Administrator; Entra ID P1 or P2 required.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Backup and recovery › Backups <a href="https://learn.microsoft.com/entra/backup/overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/directory/recovery/snapshots</code> <a href="https://learn.microsoft.com/graph/api/entrarecoveryservices-recovery-list-snapshots?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Starting recovery jobs on existing Entra backups</strong><br><small>Tenant</small><br><small class="controls__note">Existing recovery. Entra Backup Administrator is the least privileged role for the API. Backup and recovery &gt; Recovery History is where an admin cancels a running job; it does not start restores.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Backup and recovery › Backups › backup › Recover backup <a href="https://learn.microsoft.com/entra/backup/recover-objects" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/recovery/snapshots/{snapshot-id}/recoveryJobs</code> <a href="https://learn.microsoft.com/graph/api/entrarecoveryservices-snapshot-post-recoveryjobs?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing policy for Microsoft 365 Backup</strong><br><small>Tenant</small><br><small class="controls__note">Premium billing is set up in the Microsoft 365 admin center. Billing-node steps are for GCC and new Backup customers; existing customers use the Setup node, with optional migration per the Set up Microsoft 365 Backup article.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The first row is the Microsoft 365 admin center path for creating the Entra Premium (preview) backup policy; Microsoft Learn documents no Premium-specific enablement API at the time of writing (November 2026). The two Entra rows govern existing seven-day recovery. Microsoft directs administrators to Microsoft 365 Backup setup to configure billing and turn on Entra Premium; Standard remains included with Entra ID P1 or P2. No signed-in user or application, even with the highest admin privileges, can turn off, delete or modify Standard plan backups. Premium requires administrator enablement.

The Graph snapshot operation is documented at v1.0, while the Microsoft Graph backup overview labels the Entra recovery APIs as available on beta only. Confirm the version before scripting. The Billing-node instructions are for GCC and new Microsoft 365 Backup customers only; the cited page directs existing backup customers to the Setup node.

## Open questions

- When will Premium move from preview to general availability, and will the roadmap's December CY2026 target hold? Watch Message center and the roadmap item.
- Which user recovery actions will be available in the Microsoft 365 Backup native app, as the roadmap describes, and what permissions will ISV apps need on the Backup Storage platform APIs? Watch the Microsoft 365 Backup overview.
- Is the existing backup history seven days or five days? The Entra overview and the Microsoft Graph backup overview disagree.

<!-- rationale
risk: Medium. A restore can reinstate memberships, grants and role assignments that were removed on purpose; Premium is documented as off by default, so that exposure arises once an administrator turns it on.
cost: Variable. Premium is metered at $0.025 USD per protected Microsoft Entra object per month; restore planning and testing also take administrator time.
impact: Low. Identity, security and Microsoft 365 administrators notice it; end users see nothing unless a restore changes their account or group membership.
-->

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Security & identity; rationale: risk / behaviour: Recovering a service principal restores its OAuth2 permission grants without qualification. | Found: When a service principal is recovered, Microsoft Entra Backup and Recovery also restores: OAuth2 permission grants where the recovered service principal is the target object | Fix: Replace 'also restores its OAuth2 permission grants and app role assignments' with 'also restores OAuth2 permission grants and app role assignments where the recovered service principal is the target object', matching https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations. Keep this target-object qualification in the risk rationale if it names service-principal grants. | Source: https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations
- [contradicted, blocker] Risk assessment: Security & identity; rationale: risk / behaviour: Recovering a service principal restores its app role assignments without qualification. | Found: App role assignments where the recovered service principal is the target object | Fix: Use 'also restores OAuth2 permission grants and app role assignments where the recovered service principal is the target object' in the service-principal recovery sentence, as stated at https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations. | Source: https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations
- [contradicted, blocker] controls[1].note; controls[2].note; Governance controls prose and table / applicability: The two Entra viewing and recovery rows govern existing seven-day recovery, not the 30-day extension. | Found: Backups: Browse available backups. The Standard plan retains up to 7 days of backup history, and the Premium plan retains up to 30 days. | Fix: Replace controls[1].note with 'Microsoft Entra Backup Reader or Microsoft Entra Backup Administrator can view backups. Standard requires Entra ID P1 or P2; Premium (preview) requires at least one SharePoint license or a license that includes SharePoint, plus consumption billing.' Remove 'Existing recovery.' from controls[2].note. Replace 'The two Entra rows govern existing seven-day recovery' with 'The Entra admin center viewing and recovery paths apply to retained Standard and Premium backups; the Graph references document listing snapshots and starting recovery jobs.' Use https://learn.microsoft.com/entra/backup/overview, https://learn.microsoft.com/entra/backup/backup-recovery-plans and https://learn.microsoft.com/entra/backup/recover-objects, already cited. | Source: https://learn.microsoft.com/entra/backup/overview
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Security & identity; Scope / role: Microsoft Entra Backup Administrator is the least-privileged role for enabling Premium. | Found: Microsoft Entra Backup Administrator is the least-privileged role that can turn on Premium for your tenant. | Fix: Add to this role sentence: 'The Microsoft 365 Backup setup article separately says a SharePoint Administrator or Global Administrator is required to access the Microsoft 365 admin center and set up Microsoft 365 Backup.' Both pages are already cited: https://learn.microsoft.com/entra/backup/overview and https://learn.microsoft.com/microsoft-365/backup/backup-setup. | Source: https://learn.microsoft.com/entra/backup/overview
- [supported, minor] Risk assessment: Change & support; Governance guidance: Before rollout / behaviour: Changes to on-premises synced objects, except group memberships, are excluded from recovery. | Found: Any changes made to on-premises synced objects (except group memberships) appear in difference reports, but are automatically excluded from recovery. | Fix: Add to this sentence: 'The backup, difference report, and recovery model article instead says on-premises synchronized objects cannot be recovered, without stating this group-membership exception.' Cite the already-listed https://learn.microsoft.com/entra/backup/backup-difference-report-recovery-model alongside https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations. | Source: https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations
- [supported, minor] controls[2].ui; Governance controls table / admin-path: Starting recovery is at Microsoft Entra admin center > Backup and recovery > Backups > backup > Recover backup. | Found: Go to Backup and recovery > Backups. Select a backup and select Recover backup. ... Select Recover to start the recovery job. | Fix: Complete the route with the final action: 'Backup and recovery > Backups > backup > Recover backup > Recover'. The current path reaches the correct recovery dialog but stops before starting the job; scoping filters are optional. Source: https://learn.microsoft.com/entra/backup/recover-objects. | Source: https://learn.microsoft.com/entra/backup/recover-objects
- [supported, minor] controls[3].ui; Governance controls table / admin-path: Native Microsoft 365 Backup billing policy creation is under Billing > Pay-as-you-go > Billing policies > Add a billing policy in the Microsoft 365 admin center. | Found: go to Billing > Pay-as-you-go. On the Billing policies tab, select Add a billing policy. | Fix: Complete the billing-policy creation route as 'Billing > Pay-as-you-go > Billing policies > Add a billing policy > Billing details > Choose users > Budget (optional) > Review and create policy > Create policy', from https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node. The printed route reaches the correct wizard but stops early. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [contradicted, minor] front matter: risk; rationale: risk / consistency: A medium risk rating based on post-enablement recovery exposure fits the standard for this off-by-default capability. | Found: risk: "medium"; rationale: 'Premium is documented as off by default, so that exposure arises once an administrator turns it on.' Standard: low includes 'nothing happens until an admin opts in'. | Fix: Set risk to 'low' and replace its rationale with 'Low. Premium is off by default, so existing behaviour continues until an administrator enables it; review recovery changes before restoring objects.' Keep the documented post-enablement recovery risks in the body.
- [contradicted, minor] Governance guidance: Before rollout and After rollout; controls / consistency: Every control that the governance checklist asks administrators to set or review appears in the controls table. | Found: Checklist: 'assign Microsoft Entra Backup Reader ... Microsoft Entra Backup Administrator'; 'require a reviewed difference report first'; 'Review Recovery History after each restore'. Table: enablement, viewing backups, starting recovery, billing. | Fix: The role-assignment instruction, difference-report review instruction and Recovery History review instruction have no corresponding controls-table rows. Remove those checklist instructions, retaining their already-documented role and recovery advice in the body; do not add unverified control rows.
-->
