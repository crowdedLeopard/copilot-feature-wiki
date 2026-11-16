---
title: "Microsoft 365 Backup: 30-day backup and recovery for Microsoft Entra ID objects"
slug: "entra-id-backup-and-recovery-30-day"
roadmapId: 567885
topic: "governance"
products: ["Microsoft 365","Microsoft 365 admin center","Microsoft Entra"]
summary: "Extended 30-day point-in-time recovery of Entra objects (users, groups, app registrations and more) through the Microsoft 365 Backup app and Backup Storage APIs, beyond the 7-day recovery included with Entra ID P1 and P2."
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
  model: "mixed"
  notes: "The existing 7-day recovery is included with Entra ID P1 and P2. The extended 30-day capability is delivered through Microsoft 365 Backup, which is pay-as-you-go; the Entra rate is not yet published. ISV apps can use the Backup Storage platform APIs."
audiences: ["security","m365-admin","compliance","finops"]
tags: ["entra-id","backup-and-recovery","m365-backup","identity","point-in-time-restore","pay-as-you-go","resilience"]
sources:
  - title: "Microsoft 365 Roadmap 567885"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567885"
    kind: "roadmap"
  - title: "Microsoft Entra Backup and Recovery overview"
    url: "https://learn.microsoft.com/entra/backup/overview"
    kind: "learn"
  - title: "Supported objects and recoverable properties (Microsoft Entra Backup and Recovery)"
    url: "https://learn.microsoft.com/entra/backup/scope-supported-objects-limitations"
    kind: "learn"
  - title: "Overview of Microsoft 365 Backup"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-overview"
    kind: "learn"
  - title: "Microsoft Entra backup, difference reports and recovery (Microsoft Entra admin center)"
    url: "https://learn.microsoft.com/entra/backup/overview#get-started"
    kind: "learn"
  - title: "Microsoft Entra backup, difference reports and recovery (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/resources/entrarecoveryservices-backup-recovery-overview?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Backup enablement and backup policies (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/backup/backup-setup#2-create-backup-policies-to-protect-your-data"
    kind: "learn"
  - title: "Microsoft 365 Backup enablement and backup policies (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0"
    kind: "learn"
  - title: "Pay-as-you-go billing policy for backup storage (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    kind: "learn"
videos: []
related: ["m365-teams-channel-backup","agent-365-control-plane-for-agents"]
controls:
  - governs: "Microsoft Entra backup, difference reports and recovery"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Backup and recovery > Overview, Backups, Difference Reports, Recovery History, Hard deletion protection"
      docs: "https://learn.microsoft.com/entra/backup/overview#get-started"
    api:
      kind: "graph"
      call: "entraRecoveryServices resources (Microsoft Graph beta)"
      docs: "https://learn.microsoft.com/graph/api/resources/entrarecoveryservices-backup-recovery-overview?view=graph-rest-1.0"
    note: "Always on; cannot be turned off. Needs Entra ID P1 or P2 and the Entra Backup Reader or Entra Backup Administrator role."
  - governs: "Microsoft 365 Backup enablement and backup policies"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft 365 Backup"
      docs: "https://learn.microsoft.com/microsoft-365/backup/backup-setup#2-create-backup-policies-to-protect-your-data"
    api:
      kind: "graph"
      call: "POST /solutions/backupRestore/enable"
      docs: "https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0"
    note: "The Graph call is for backup controller apps and needs BackupRestore-Control.ReadWrite.All."
  - governs: "Pay-as-you-go billing policy for backup storage"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Billing > Pay-as-you-go > Billing policies > Add a billing policy"
      docs: "https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node"
    api: null
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-16"
roadmapModified: "2026-09-01T22:59:38"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
---

## What's changing

Microsoft Entra Backup and Recovery restores supported properties and links of directory objects from retained backups, complementing the 30-day soft-delete that already protects users, Microsoft 365 Groups, security groups, app registrations and service principals from permanent deletion. The recovery window included with Entra ID P1 and P2 is seven days.

This roadmap item extends that window to a **rolling 30 days** through Microsoft 365 Backup: customers and ISV applications can perform a point-in-time restore of Entra objects to a last known good state via the Microsoft 365 Backup native app in the Microsoft 365 admin center or the Microsoft 365 Backup Storage platform APIs. Microsoft notes that advanced recovery features remain in the Entra admin center for now, with some user recovery actions available in the admin center app. Hard-deleted objects cannot be recreated by Backup and Recovery; objects synchronised from Active Directory Domain Services need their own backup unless their source of authority is moved to the cloud.

Target is December 2026, worldwide.

## Why it matters

Identity is the control plane for everything else in Microsoft 365, including agents. A misconfigured script, a compromised admin account or a bad sync cycle can alter thousands of group memberships, Conditional Access assignments or application permissions in minutes; soft delete does not help when the object still exists but is wrong. A 30-day property-level restore turns a rebuild into a rollback.

The feature also matters for agent governance: agent identities and their permissions are Entra objects. Being able to restore an app registration or agent identity to its state before an unwanted change is part of the agent incident playbook.

## Risk assessment

**Data exposure**
- Backups contain directory data (names, attributes, memberships). They stay within Microsoft's service boundary, but access to restore operations is a new privileged path.

**Security & identity**
- A restore can reintroduce memberships or permissions that were removed on purpose (for example after an off-boarding). Require a review step before restoring security-relevant objects.
- Roles that can perform restores (Entra and Backup admin roles) must be covered by Privileged Identity Management and access reviews.

**Autonomy & actions**
- Not applicable. Restores are admin-initiated.

**Change & support**
- Two consoles (Entra admin center for advanced recovery, Microsoft 365 admin center app for some actions) until the experiences converge; document which to use for what.
- Hybrid objects are out of scope unless source of authority is moved; many organisations will have mixed coverage.

## Cost and licensing

- **7-day recovery**: included with Entra ID P1 and P2, already generally available.
- **30-day extension**: delivered through Microsoft 365 Backup, which is **pay-as-you-go** against an Azure subscription. The Entra meter and rate are **not yet published**; existing Backup workloads are charged per GiB of protected content, which is unlikely to translate directly to directory objects.
- Indirect: time to define restore procedures and test them.

## Scope

- Entra objects supported by Backup and Recovery (see the supported objects article): cloud-mastered users, groups, app registrations, service principals and others as documented.
- Worldwide (standard multi-tenant). Government cloud dates not published.
- Roles: Entra administrators for advanced recovery; Microsoft 365 Backup administrators for the admin center app; ISV applications via Backup Storage APIs.

## Governance guidance

**Before rollout**
- Review the supported objects list against your directory and identify the gap (hybrid objects, unsupported properties).
- Decide which object classes you want 30-day coverage for and who may authorise a restore of security-relevant objects.
- Confirm Microsoft 365 Backup billing is set up in **Billing > Pay-as-you-go** with budget alerts.

**At rollout**
- Enable the Entra workload in Microsoft 365 Backup once available and run a test restore of a non-production group to a point in time.
- Write the restore runbook with the review step and the console to use for each scenario.

**After rollout**
- Include Entra backup status in the identity resilience review.
- Re-test after major directory changes (tenant merges, sync changes, source-of-authority moves).
- Watch for pricing publication and government cloud availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Microsoft Entra backup, difference reports and recovery</strong><br><small>Tenant</small><br><small class="controls__note">Always on; cannot be turned off. Needs Entra ID P1 or P2 and the Entra Backup Reader or Entra Backup Administrator role.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Backup and recovery › Overview, Backups, Difference Reports, Recovery History, Hard deletion protection <a href="https://learn.microsoft.com/entra/backup/overview#get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>entraRecoveryServices resources (Microsoft Graph beta)</code> <a href="https://learn.microsoft.com/graph/api/resources/entrarecoveryservices-backup-recovery-overview?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Microsoft 365 Backup enablement and backup policies</strong><br><small>Tenant</small><br><small class="controls__note">The Graph call is for backup controller apps and needs BackupRestore-Control.ReadWrite.All.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft 365 Backup <a href="https://learn.microsoft.com/microsoft-365/backup/backup-setup#2-create-backup-policies-to-protect-your-data" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /solutions/backupRestore/enable</code> <a href="https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Pay-as-you-go billing policy for backup storage</strong><br><small>Tenant</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Billing › Pay-as-you-go › Billing policies › Add a billing policy <a href="https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Entra backup is a protection that runs regardless of configuration, so the governance task is access rather than enablement: decide who holds the Backup Administrator role, since restores change directory objects. The Graph surface for Entra recovery is beta and grouped with other tenant backup APIs in the [tenants backup overview](https://learn.microsoft.com/graph/api/resources/tenants-backup-recovery-overview?view=graph-rest-1.0). Microsoft 365 Backup policies for other workloads are a separate, chargeable service.

## Open questions

- Pricing meter and rate for Entra objects in Microsoft 365 Backup.
- Whether Conditional Access policies and agent identities are among the supported objects at launch.
- Timeline for converging the Entra and Microsoft 365 admin center experiences.

<!-- rationale
risk: Medium. A recovery capability that also creates a privileged path able to reintroduce removed permissions.
cost: Variable. Pay-as-you-go through Microsoft 365 Backup; rate unpublished; 7-day recovery included with P1/P2.
impact: Low. Identity and security administrators only.
-->
