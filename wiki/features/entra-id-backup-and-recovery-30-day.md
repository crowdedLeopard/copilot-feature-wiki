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
verification:
  status: "needs-correction"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 41
  unconfirmed: 7
  contradicted: 3
  attempts: 1
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

<!-- verifier-findings (2026-11-16, needs-correction; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] summary; licensing.notes; What's changing; Cost and licensing; rationale: cost / record: The existing recovery window is seven days. | Found: Note that the existing 7-day recovery that comes with a customer's P1 & P2 licenses is already generally available and is independent of this roadmap item. | Fix: Keep the seven-day baseline, but disclose the documentation discrepancy: https://learn.microsoft.com/entra/backup/overview says up to seven days, whereas both cited Graph backup overview pages say five days of snapshot history. Do not silently present those Graph descriptions as agreeing.
- [contradicted, blocker] What's changing / availability: Existing 30-day soft deletion protects users, Microsoft 365 Groups, security groups, app registrations and service principals without further qualification. | Found: Soft delete and restore for cloud security groups is in preview and available only in public clouds. | Fix: Replace 'security groups' with 'cloud security groups (preview, public clouds only)' and cite this page. State its exclusions for EDU tenants using OneDrive for Business storage and audience targeting with classic web parts; do not imply all security groups have the same deletion protection. | Source: https://learn.microsoft.com/entra/identity/users/groups-restore-deleted#overview
- [supported, minor] Risk assessment: Security & identity; rationale: risk / behaviour: Recovery can reinstate previously removed memberships or permissions. | Found: If the user was soft-deleted, restoring them reinstates their attributes, group memberships, licenses, and assignments. | Fix: Add https://learn.microsoft.com/entra/backup/recover-user-secrets to sources for membership restoration. Keep the existing supported-objects citation for recovery of OAuth2 permission grants and app role assignments. | Source: https://learn.microsoft.com/entra/backup/recover-user-secrets#recovery-guidance
- [unsupported, blocker] Scope: Roles; Risk assessment: Security & identity / role: Microsoft 365 Backup administrators can perform Entra recovery through the planned Microsoft 365 admin center app. | Found: Searched: Microsoft Entra Backup 30 enable Administrator; Entra 30 day Backup roles. Read Entra overview, Backup setup and built-in roles excerpts; the Microsoft 365 Backup Administrator documentation names SharePoint, OneDrive and Exchange, not Entra recovery. | Fix: Replace this role assignment with 'Roles for the 30-day extension in the Microsoft 365 Backup app: Not yet published.' Separately retain the documented Microsoft Entra Backup Administrator role for existing Entra recovery.
- [unsupported, blocker] front matter: defaultState / default: The planned 30-day extension is admin-opt-in. | Found: Searched: Microsoft Entra Backup Recovery 30 days Microsoft 365 Backup enable opt in roles. Read Entra overview and Backup setup; automatic seven-day backups and other workloads' setup do not state the extension's default. | Fix: Set defaultState to 'unknown'. State that the 30-day extension's default and enablement requirements are not stated; distinguish this from existing automatic seven-day Entra backups.
- [unsupported, blocker] front matter: licensing.model; licensing.notes; Cost and licensing; rationale: cost / licensing: The planned Entra extension has a mixed licensing model combining included P1/P2 recovery with chargeable pay-as-you-go 30-day recovery. | Found: Searched: Microsoft Entra 30 day Backup Recovery pricing meter rate; "Entra" "30-day" "Backup" "pricing". Read Entra overview and Backup pricing, overview and setup. None explicitly assigns a charge or licensing model to the Entra extension. | Fix: Set licensing.model to 'unknown' for the extension. Say: 'The existing seven-day recovery is included with Entra ID P1/P2. Licensing and billing for the planned 30-day extension are Not yet published.' Describe existing Backup pay-as-you-go pricing only as separate context, not an established Entra charge.
- [contradicted, blocker] front matter: cost; rationale: cost / consistency: The variable cost rating is established for this extension despite its unpublished licensing and meter. | Found: cost: "variable"; "The Entra meter and rate are not yet published". The scale says: "If licensing is not yet published, rate the cost that is known (`low` when the only cost the sources show is admin time)". | Fix: Set cost to 'low' and the rationale to 'Low. Restore planning and testing require admin time; licensing, meter and rate for the 30-day extension are not yet published.' Do not use another workload's consumption model as an established charge for this change.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The Entra admin center has Backup and recovery with Overview, Backups, Difference Reports, Recovery History and Hard deletion protection pages. | Found: select Backup and recovery in the left navigation pane. These pages are available: ... Overview ... Backups ... Difference Reports ... Recovery History ... Hard deletion protection (preview) | Fix: Retain the navigation labels: the pre-check's missing-word finding is not confirmed. Add '(preview)' to Hard deletion protection in the structured path and rendered table, as the cited page does. | Source: https://learn.microsoft.com/entra/backup/overview#get-started
- [unsupported, blocker] controls[0].api; Governance controls table / command: 'entraRecoveryServices resources (Microsoft Graph beta)' supplies the automation call for Entra backup, difference reports and recovery. | Found: Searched: Microsoft Graph entraRecoveryServices list snapshots beta v1.0 directory recovery snapshots. Read the cited Entra API overview and List snapshots excerpts. entraRecoveryServices is a namespace, not an HTTP method and endpoint. | Fix: Replace the namespace description with a real, versioned documented operation and scope the row accordingly. For listing backups, use 'GET /v1.0/directory/recovery/snapshots' and cite https://learn.microsoft.com/graph/api/entrarecoveryservices-recovery-list-snapshots?view=graph-rest-1.0. Do not imply this GET performs recovery; describe preview and recovery operations separately using their references.
- [supported, minor] controls[0].note; Governance controls table; Scope; Governance controls closing prose / role: Microsoft Entra Backup Reader and Microsoft Entra Backup Administrator are the documented roles for existing Entra backup access. | Found: Microsoft Entra Backup Administrator: Has all the permissions of Microsoft Entra Backup Reader, plus can initiate difference reports and trigger recovery for changed objects. | Fix: Clarify the row note: Reader can view backups, comparisons and recovery history; Administrator can initiate difference reports and recovery, and Global Administrator includes those permissions. Use the full Entra role name instead of the ambiguous 'Backup Administrator' in the closing prose. | Source: https://learn.microsoft.com/entra/backup/overview#prerequisites
- [supported, minor] controls[1].api; Governance controls table / command: POST /solutions/backupRestore/enable enables Microsoft 365 Backup Storage for a tenant. | Found: Enable the Microsoft 365 Backup Storage service for a tenant. ... POST https://graph.microsoft.com/v1.0/solutions/backupRestore/enable | Fix: Include the documented version in the structured call and rendered table: 'POST /v1.0/solutions/backupRestore/enable'. Keep its description limited to service enablement, not creation of backup policies. | Source: https://learn.microsoft.com/graph/api/backuprestoreroot-enable?view=graph-rest-1.0
- [contradicted, blocker] controls[2].ui; Governance controls table; Governance guidance: Before rollout / admin-path: All readers can set up Backup billing at Billing > Pay-as-you-go > Billing policies > Add a billing policy without a migration qualification. | Found: Government Community Cloud (GCC) and new Microsoft 365 Backup customers only: Existing backup customers must use the Setup node to set up pay-as-you-go billing. | Fix: Retain this path for customers on the new Billing experience, but qualify the row and checklist. Existing customers may still use Setup > Billing and licenses > Activate pay-as-you-go services; https://learn.microsoft.com/microsoft-365/backup/backup-setup#1-set-up-pay-as-you-go-billing documents migrating existing billing to the Billing experience. Report that migration guidance alongside the commerce page's restriction. | Source: https://learn.microsoft.com/microsoft-365/commerce/services/pay-as-you-go-setup-billing-node
- [unsupported, blocker] controls[1]; controls[2]; Governance guidance / applicability: The documented general Backup policies and billing controls are confirmed controls for the planned Entra 30-day extension. | Found: Searched: Microsoft Entra 30 day Backup Recovery Microsoft 365 Backup pricing meter rate enable workload administrator. Read Backup setup, overview, enable API and Billing-node setup; their policies describe SharePoint, OneDrive and Exchange, not Entra. | Fix: Add to both general Backup rows: 'General Microsoft 365 Backup control; Microsoft has not confirmed how this applies to the Entra 30-day extension.' Keep baseline Entra recovery separate from these general controls and do not present either as the extension's documented configuration.
- [unsupported, blocker] Governance guidance: At rollout / admin-path: At rollout administrators can enable an Entra workload in Microsoft 365 Backup. | Found: Searched: Microsoft Entra Backup Recovery 30 days Microsoft 365 Backup enable opt in roles; Entra Backup 30 enable Administrator. Read Backup setup and backup-policy excerpts; no Entra workload enablement setting or procedure found. | Fix: Replace 'Enable the Entra workload in Microsoft 365 Backup once available' with 'Check the published enablement and billing instructions for the 30-day extension when it becomes available, then plan a non-production restore test.' Add enablement requirements to Open questions.
- [unsupported, major] Risk assessment: Change & support / behaviour: The Entra and Microsoft 365 admin center recovery experiences will eventually converge. | Found: Searched: Microsoft Entra 30 day Backup Recovery convergence Entra Microsoft 365 admin center timeline. Read Entra overview, tenant backup API overview and Backup setup. The roadmap describes a division of recovery actions, not a commitment to convergence. | Fix: Replace 'until the experiences converge' with 'under the experience split described by the roadmap'. Keep any possible convergence explicitly an open question, not a promised product direction.
- [supported, minor] controls[0].api; Governance controls closing prose / availability: The cited tenant backup overview labels the Entra recovery Graph surface as beta. | Found: Microsoft Entra Backup and Recovery ... Available on beta only. | Fix: Report the documentation disagreement instead of asserting an unqualified beta-only surface: this overview says beta only, while https://learn.microsoft.com/graph/api/entrarecoveryservices-recovery-list-snapshots?view=graph-rest-1.0 explicitly shows GET https://graph.microsoft.com/v1.0/directory/recovery/snapshots. Cite the operation and its documented version when replacing the namespace placeholder. | Source: https://learn.microsoft.com/graph/api/resources/tenants-backup-recovery-overview?view=graph-rest-1.0
-->
