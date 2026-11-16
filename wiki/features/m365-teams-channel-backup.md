---
title: "Microsoft 365 Backup: Teams channel backup and recovery"
slug: "m365-teams-channel-backup"
roadmapId: 570668
topic: "governance"
products: ["Microsoft 365","Microsoft 365 admin center"]
summary: "Microsoft 365 Backup will cover teams and channels, so channel messages and files can be restored to a known good point within 30 days after accidental change or compromise. Billing is pay-as-you-go like the rest of Microsoft 365 Backup."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft 365 Backup is pay-as-you-go against an Azure subscription. Existing workloads are listed at $0.15 per GiB per month of protected content; the Teams rate is not yet published."
audiences: ["m365-admin","security","service-owner","finops","compliance"]
tags: ["m365-backup","teams","channels","backup-and-recovery","pay-as-you-go","ransomware","restore","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 570668"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570668"
    kind: "roadmap"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "Pricing model for Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-pricing"
    kind: "learn"
  - title: "Set up Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup"
    kind: "learn"
  - title: "Restore data in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-restore-data"
    kind: "learn"
  - title: "What's new in Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-whats-new"
    kind: "learn"
  - title: "Backup policies per workload and restore points (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies#create-backup-policies"
    kind: "learn"
  - title: "Backup policies per workload and restore points (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0"
    kind: "learn"
  - title: "Pay-as-you-go billing policy and budget alerts for backup (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
videos: []
related: ["entra-id-backup-and-recovery-30-day","purview-retention-last-accessed-sharepoint-onedrive"]
controls:
  - governs: "Backup policies per workload and restore points"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies#create-backup-policies"
    api:
      kind: "graph"
      call: "POST /solutions/backupRestore/enable"
      docs: "https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0"
    note: "The Graph call is for backup controller apps (BackupRestore-Control.ReadWrite.All)."
  - governs: "Pay-as-you-go billing policy and budget alerts for backup"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
  - governs: "Teams channel workload in backup policies"
    scope: "tenant"
    ui: null
    api: null
    note: "Not in the setup guide at review time; expected to appear with the release."
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Microsoft 365 Backup today protects OneDrive accounts, SharePoint sites and Exchange mailboxes with frequent restore points and fast restores from within the Microsoft 365 admin center. This roadmap item extends it to **Microsoft Teams**: teams, standard, private and shared channels, and the underlying data including channel messages and files. Administrators will be able to roll a team or channel back to a previously known good state after accidental changes or a security compromise. The supported retention period is 30 days.

The item is listed for Targeted Release and General Availability in December 2026, worldwide only. No preview date is given. The roadmap text does not state whether chats (as opposed to channel messages) or meeting content are in scope.

## Why it matters

Channel conversations are the system of record for a lot of operational work, and today the only safety nets are Purview retention (which preserves but does not restore structure) and the recycle bin behaviour of the underlying SharePoint site. A compromised account that deletes channels, or a bulk mistake by an owner, has had no clean recovery path. Teams backup gives administrators a point-in-time restore, and the 30-day window matches the rest of Microsoft 365 Backup.

Because Microsoft 365 Backup is consumption billed, the service owner for Teams needs to decide which teams justify protection rather than assuming everything should be backed up.

## Risk assessment

**Data exposure**
- Restores can bring back content that was deliberately deleted (for example under a legal instruction). Coordinate restore authority with compliance.
- Backup data stays within the Microsoft 365 trust boundary and the tenant's geography; multi-geo is supported for existing workloads.

**Security & identity**
- Backup administration roles (SharePoint Administrator, Microsoft 365 Backup Administrator) gain the power to overwrite live channel content with a restore. Treat as privileged; departmental billing can confine admins to their own Azure subscription.

**Autonomy & actions**
- Not applicable.

**Change & support**
- Restoring in place replaces current content; restoring to a new location avoids overwriting but changes links. Decide the default before an incident.
- Interaction with Purview retention and holds during restore needs testing once documented.

## Cost and licensing

- **Pay-as-you-go** against an Azure subscription. Existing Microsoft 365 Backup workloads are priced at **$0.15 per GiB per month** of protected content (the live size plus deleted and versioned data held for recovery). The Teams rate is **not yet published**.
- Set up through Microsoft 365 admin center > **Billing** > **Pay-as-you-go**, which also offers departmental billing, budget alerts and subscription creation.
- Indirect: admin time to scope policies and to test restores.

## Scope

- Teams and channels (standard, private, public per the roadmap; shared channels not named) and their messages and files.
- Worldwide (standard multi-tenant) at launch; Microsoft 365 Backup for other workloads is also available in GCC.
- Roles: SharePoint Administrator or Global Administrator to set up; Microsoft 365 Backup Administrator for policies and restores.

## Governance guidance

**Before rollout**
- Classify teams by criticality and estimate protected size to forecast cost at the published rate once available.
- Confirm your Microsoft 365 Backup billing is on the **Billing > Pay-as-you-go** experience (customers onboarded before April 2026 can migrate) so budget alerts and departmental billing apply.
- Agree restore authority and the compliance check required before an in-place restore.

**At rollout**
- Protect the highest-criticality teams first; review the first month's consumption before widening.
- Configure email notifications for backup events to the operations team.
- Run a test restore to a new location for one team and document the procedure.

**After rollout**
- Review protected size and cost monthly; remove teams that have been archived or deleted from policies.
- Re-test restore procedures twice a year and after any Teams structural change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Backup policies per workload and restore points</strong><br><small>Tenant</small><br><small class="controls__note">The Graph call is for backup controller apps (BackupRestore-Control.ReadWrite.All).</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup <a href="https://learn.microsoft.com/microsoft-365/backup/backup-view-edit-policies#create-backup-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /solutions/backupRestore/enable</code> <a href="https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing policy and budget alerts for backup</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Teams channel workload in backup policies</strong><br><small>Tenant</small><br><small class="controls__note">Not in the setup guide at review time; expected to appear with the release.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Setup is described in [Set up Microsoft 365 Backup](https://learn.microsoft.com/microsoft-365/backup/backup-setup#2-create-backup-policies-to-protect-your-data); a pay-as-you-go billing policy must exist before a backup policy can be created. The Graph Backup Storage API is designed for partner controller apps rather than for tenant admins scripting their own policies. Notification digests and departmental billing are set in the same Backup pages. Billed amounts appear in Azure Cost Management under the Microsoft 365 Backup meter.

## Open questions

- Teams pricing per GiB and how channel message size is counted.
- Whether chats, meeting recordings and shared channels are included.
- Restore granularity (whole team, channel, individual messages or files) and whether the 14-day granular restore window for SharePoint applies.

<!-- rationale
risk: Low. A recovery capability; residual risks are restore authority and interaction with retention.
cost: Variable. Pay-as-you-go per GiB; Teams rate unpublished.
impact: Low. Admin-facing; users only notice during a restore.
-->
