---
title: "Power Pages: first-class support for Power Platform connector APIs"
slug: "power-pages-first-class-support-for-connector-apis-in-power-pages"
roadmapId: 577897
desk: "power-platform"
products: ["Power Pages"]
summary: "Power Pages sites will call Power Platform connectors, including SQL, SAP and Oracle through the on-premises data gateway, with server-side logic."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: "March CY2027"
risk: "high"
cost: "medium"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Connector tier and gateway requirements to be confirmed."
audiences: ["power-platform-admin","security","maker","service-owner"]
tags: ["power-pages","connectors","on-premises-data-gateway","server-logic","sql","integration"]
sources:
  - title: "Microsoft 365 Roadmap item 577897"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577897"
    kind: "roadmap"
videos: []
related: ["data-policies","managed-environments","agent-identity"]
confidence: "low"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-10-26T23:15:50"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 577897; roadmap text only."
version: 1
---

## What's changing

Power Pages will support native Power Platform connectors, so a site can connect to enterprise systems such as SQL, SAP and Oracle without a custom integration layer. The roadmap highlights regulated customers whose data sits behind corporate firewalls.

The design uses the Power Platform on-premises data gateway and the connector framework. The roadmap also mentions server-side logic that can interact with on-premises data sources.

Preview is listed for March CY2027 and general availability for June CY2027, Worldwide only. I found no Learn documentation yet.

## Why it matters

This links an internet-facing site to systems of record. For service owners it changes the threat model: the site becomes a path into internal data, and Power Platform data policies and connector governance apply to a site workload.

It may also replace bespoke middleware, which can cut support effort but moves responsibility to the Power Platform team.

## Risk assessment

**Data exposure**
- Server-side calls can return on-premises records to site visitors. Table permissions do not apply to non-Dataverse data, so filtering must be built into the logic.

**Security & identity**
- Connections run with a stored identity. Decide whose credentials are used and how they are scoped.
- Gateway placement and network rules become part of the site security boundary.

**Autonomy & actions**
- Server-side logic can write to external systems, not only read.

**Change & support**
- Gateway outages will surface as site errors. Support ownership between site and gateway teams must be agreed.

## Cost and licensing

Not yet published. Expect premium connector licensing, gateway hosting and Power Pages capacity to matter. Confirm the details when Microsoft publishes them.

## Scope

Makers and developers of Power Pages sites; tenants that use the on-premises data gateway. Roadmap cloud: Worldwide (Standard Multi-Tenant) only.

## Governance guidance

### Before rollout
- [ ] Review your data policies for the connectors you would expose to sites.
- [ ] Plan gateway capacity, high availability and network rules.
- [ ] Define who may create connections that a site uses.

### At rollout
- [ ] Pilot in a non-production environment with a read-only service account.
- [ ] Test every server-side call for over-exposure of data.

### After rollout
- [ ] Monitor gateway health and call volumes.
- [ ] Audit connection ownership and rotate credentials regularly.

## Admin controls

Not yet published. Expect data policies in the Power Platform admin center, gateway management and Managed Environments to apply. Confirm when preview documentation appears.

## Open questions

- Which connectors are supported at preview?
- How are connection identities and per-visitor authorisation handled?
- What licensing applies to anonymous visitors?

<!-- rationale
risk: High. It lets a public-facing site reach on-premises enterprise systems, so a permission or design error could expose internal data.
cost: Medium. Connector and gateway use may need premium licensing and gateway infrastructure; Power Pages terms for this feature are not yet published.
impact: Medium. It affects teams that build external sites on enterprise data, and the visitors who use them.
-->
