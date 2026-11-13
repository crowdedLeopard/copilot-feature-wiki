---
title: "Microsoft 365 Backup: Teams channel backup and recovery"
slug: "m365-teams-channel-backup"
roadmapId: 570668
desk: "admin-billing"
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
videos: []
related: ["entra-id-backup-and-recovery-30-day","purview-retention-last-accessed-sharepoint-onedrive"]
confidence: "medium"
created: "2026-11-13"
updated: "2026-11-13"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-13"
    note: "Initial briefing"
version: 1
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

## Admin controls

- Microsoft 365 admin center > **Settings** > **Microsoft 365 Backup**: policies per workload, restore points, restores (Teams workload to appear with the release).
- Microsoft 365 admin center > **Billing** > **Pay-as-you-go**: billing policies, budget alerts, departmental billing.
- Microsoft 365 admin center > **Settings** > **Microsoft 365 Backup** > notifications: daily digests to up to 20 recipients.
- Azure portal > **Cost Management**: billed amounts for the Microsoft 365 Backup meter.

## Open questions

- Teams pricing per GiB and how channel message size is counted.
- Whether chats, meeting recordings and shared channels are included.
- Restore granularity (whole team, channel, individual messages or files) and whether the 14-day granular restore window for SharePoint applies.

<!-- rationale
risk: Low. A recovery capability; residual risks are restore authority and interaction with retention.
cost: Variable. Pay-as-you-go per GiB; Teams rate unpublished.
impact: Low. Admin-facing; users only notice during a restore.
-->
