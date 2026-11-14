---
title: "Power Platform: secure Dataverse records with column-based filtering"
slug: "microsoft-power-platform-governance-and-administration-secure-dataverse-record-with-column"
roadmapId: 577860
desk: "power-platform"
products: ["Microsoft Power Platform governance and administration"]
summary: "Dataverse security can grant record access by column values such as region or department rather than by ownership, aimed at reporting and aggregated data."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "October CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Dataverse licensing applies."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["dataverse","security-roles","row-level-security","filter-based-security","power-platform"]
sources:
  - title: "Microsoft 365 Roadmap item 577860"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577860"
    kind: "roadmap"
  - title: "Filter-based security in Microsoft Dataverse (preview)"
    url: "https://learn.microsoft.com/power-platform/admin/filter-based-security"
    kind: "learn"
  - title: "Filtered record ownership (preview)"
    url: "https://learn.microsoft.com/power-apps/maker/data-platform/filtered-view-record-ownership"
    kind: "learn"
videos: []
related: ["managed-environments","data-policies","dataverse-agent-users-entra-agent-identity"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-11T00:56:01"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577860."
version: 1
---

## What's changing

This enhancement introduces column-based security filtering, so records are secured by attribute values rather than by ownership. Security admins can define access by business dimensions such as region or department, which suits reporting and aggregated datasets where records have no natural owner.

Microsoft Learn documents a preview of filter-based security in Dataverse. Record Filters use FetchXML, Entity Record Filters tie them to tables, and filter privileges are granted through security roles. Tables can use a filtered record ownership type, with no record owner, or filters can be added to user, team or organisation-owned tables.

The roadmap target is January 2027, Worldwide only, status In development. Whether the roadmap item equals the documented preview is not confirmed.

## Why it matters

It removes the need for artificial ownership or complex sharing to restrict data by region or department, simplifying administration at scale. It also changes how effective access is calculated, which affects audits and access reviews.

## Risk assessment

**Data exposure**
- On user-owned tables, filter privileges add access to ownership-based access, so they never reduce it.

**Security & identity**
- Filtered ownership tables cannot be shared or assigned; the system grants an All records privilege to System Administrator.

**Autonomy & actions**
- None; this is a static access model.

**Change & support**
- Troubleshooting needs FetchXML knowledge and a clear view of combined roles and teams.

## Cost and licensing

No separate licence is published. Dataverse capacity and licensing apply as for any table. Not yet published: any general availability pricing.

## Scope

Dataverse environments in Worldwide (Standard Multi-Tenant). Applies to makers and security admins; the system administrator role is required to configure it in the preview.

## Governance guidance

### Before rollout
- Inventory tables where ownership is artificial.
- Model filters in a development environment and document intended access.

### At rollout
- Grant filter privileges through dedicated security roles.
- Test with representative users in each role and team.

### After rollout
- Review effective access periodically.
- Check that additive filters on owned tables do not over-share.

## Admin controls

Configured in Power Apps and the Power Platform admin center through tables with Filtered record ownership, Record Filters, Entity Record Filters and security role filter privileges. Documented as preview at the time of review.

## Open questions

- Whether the feature reaches general availability in January 2027.
- Support for sovereign clouds.
- Interaction with column-level security and Managed Environments.

<!-- rationale
risk: Medium. A new access model that adds to or replaces ownership-based access, so misconfigured filters can over-share or hide records.
cost: Low. No licence change is published; the cost is design and testing effort for security roles and filters.
impact: Low. Affects security admins and makers who design Dataverse tables and roles.
-->
