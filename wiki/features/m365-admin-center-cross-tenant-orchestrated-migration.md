---
title: "Microsoft 365 admin center: Cross-Tenant Orchestrated Migration"
slug: "m365-admin-center-cross-tenant-orchestrated-migration"
roadmapId: 576273
desk: "admin-billing"
products: ["Microsoft 365 admin center"]
summary: "Orchestrated cross-tenant migration moves user data and shared data such as mailboxes, OneDrive, Teams and SharePoint between Microsoft 365 tenants."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "high"
cost: "high"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "add-on"
  notes: "Cross-tenant User Data Migration is a per-user one-time licence add-on; shared data migration is licensed per 100 GB per Learn."
audiences: ["m365-admin","service-owner","security","compliance","finops"]
tags: ["migration","cross-tenant","tenant-to-tenant","exchange","onedrive","sharepoint","teams"]
sources:
  - title: "Microsoft 365 Roadmap item 576273"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576273"
    kind: "roadmap"
  - title: "An overview of tenant-to-tenant migration with orchestrator in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/migration/migration-orchestrator-1-overview?view=o365-worldwide"
    kind: "learn"
  - title: "Plan a Microsoft 365 tenant-to-tenant migration"
    url: "https://learn.microsoft.com/microsoft-365/migration/microsoft-365-tenant-to-tenant-migrations?view=o365-worldwide"
    kind: "learn"
videos: []
related: ["m365-teams-channel-backup","entra-id-backup-and-recovery-30-day"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-12T01:35:00"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 576273."
version: 1
---

## What's changing

Cross-Tenant Orchestrated Migration lets customers move Microsoft 365 data from one tenant to another. User Data Migration (UDM) covers mailboxes, OneDrive accounts, Teams chats and Teams meetings. Shared Data Migration (SDM) covers Microsoft 365 Groups, SharePoint sites, group mailboxes, and teams and channels.

The roadmap entry lists the Microsoft 365 admin center, Worldwide only, with a December 2026 target. The more-info link reads TBD.

Microsoft Learn already documents a Migration Orchestrator that sequences supported workloads, alongside individual cross-tenant tools for mailbox, OneDrive and SharePoint.

## Why it matters

Mergers, divestitures and consolidations drive these moves. They affect identity, licensing, compliance holds and user access, and Learn notes migrations carry no SLA. Planning needs to start well before any tool is available.

## Risk assessment

**Data exposure**
- Content leaves one tenant for another; incorrect mapping can place data with the wrong users.

**Security & identity**
- Requires cross-tenant trust and identity mapping; security groups and some objects need rebuilding.

**Autonomy & actions**
- Orchestration sequences workloads automatically.

**Change & support**
- Cross-tenant moves are one-way with redirects left behind; delta passes are not possible for OneDrive and SharePoint.

## Cost and licensing

Learn states cross-tenant migrations need a per-user one-time licence, assignable to the source or target user, and that migrations fail without it. Shared data migration licences are offered per 100 GB. Pricing for the orchestrated service is not yet published.

## Scope

Worldwide (Standard Multi-Tenant) per the roadmap. Learn states cross-tenant OneDrive migration is not supported in government clouds. Source and target tenants both need administrators involved.

## Governance guidance

### Before rollout
- Confirm legal and compliance sign-off for the data move.
- Plan identity mapping, licences in the target tenant and holds.

### At rollout
- Pilot with a small batch and validate redirects, permissions and Teams content.
- Communicate cut-over windows to users.

### After rollout
- Reconcile mailbox and file counts.
- Rebuild security groups and decommission source content per policy.

## Admin controls

Not yet published for the orchestrated feature. Existing tooling includes the Migration Orchestrator, Exchange cross-tenant mailbox moves and SharePoint Online PowerShell cmdlets such as Start-SPOCrossTenantUserContentMove.

## Open questions

- Final licensing and pricing for the orchestrated service.
- Whether government clouds will be supported.
- How this differs from the existing Migration Orchestrator.

<!-- rationale
risk: High. Moves organisational data between tenants, with one-way moves, identity mapping and compliance implications if mis-scoped.
cost: High. Per-user migration licences are required and shared data licences are per 100 GB, plus substantial project effort.
impact: Medium. Affects migrating users and the admins of the source and target tenants, typically in mergers and divestitures.
-->
