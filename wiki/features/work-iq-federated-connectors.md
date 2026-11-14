---
title: "Work IQ: federated connectors for governed access to more data sources"
slug: "work-iq-federated-connectors"
roadmapId: 570670
desk: "agents"
products: ["Microsoft Graph","Work IQ"]
summary: "Work IQ will be able to use federated connectors to reach additional enterprise data sources under governance."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Developer"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "medium"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published for Work IQ. Federated connector licensing may apply per Learn."
audiences: ["m365-admin","security","service-owner","compliance"]
tags: ["work-iq","federated-connectors","mcp","microsoft-graph","governance"]
sources:
  - title: "Microsoft 365 Roadmap item 570670"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570670"
    kind: "roadmap"
  - title: "Federated connectors overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/connectors/federated-connectors-overview"
    kind: "learn"
videos: []
related: ["m365-copilot-federated-connectors-write-update-delete","copilot-studio-mcp-tools-in-agents","agent-365-control-plane-for-agents"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 570670."
version: 1
---

## What's changing

Work IQ will be able to use federated connectors for governed access to additional enterprise data sources. The roadmap lists Microsoft Graph and Work IQ as products, with a November 2026 target and In development status.

Microsoft Learn describes federated Copilot connectors as using Model Context Protocol to fetch data in real time under the user's identity and permissions, without indexing the external data into Microsoft 365. Admins manage them in the Microsoft 365 admin center.

How Work IQ will surface them is not described in detail.

## Why it matters

It widens the systems an agent can reach. Because the source system enforces permissions and data is not copied, governance focuses on which connectors are approved and what write tools they expose.

## Risk assessment

**Data exposure**
- Real-time access to external systems; data is retrieved into responses.

**Security & identity**
- Uses OAuth 2.0 and the user's permissions in the source system.

**Autonomy & actions**
- Where connectors provide tools, Copilot can create, update or delete with user approval; new write tools default to Needs approval.

**Change & support**
- Firewalls for MCP servers may need static egress IP allow-listing.

## Cost and licensing

Not yet published for Work IQ. Connector-specific licences may apply for the signed-in user, and Work IQ API use can need Copilot Credits billing.

## Scope

Work IQ experiences using federated connectors. Cloud scope is not stated in the roadmap record.

## Governance guidance

### Before rollout
- List the connectors that Work IQ should reach.
- Review each connector's write tools.

### At rollout
- Approve connectors in the Microsoft 365 admin center.
- Keep write tools on Needs approval.

### After rollout
- Audit activity in Microsoft Purview.
- Review connector permissions after publisher changes.

## Admin controls

Federated connectors are managed in the Microsoft 365 admin center; approval settings per write tool are available, and activity can be audited in Purview. Work IQ-specific controls are not yet published.

## Open questions

- Which connectors will be available to Work IQ at launch.
- Whether existing connector approvals carry over.
- Cloud availability.

<!-- rationale
risk: Medium. Extends agent reach to external systems in real time with the user's identity; write actions may be possible where connectors provide tools.
cost: Variable. Connector licensing and Work IQ API credits may apply; specifics are not yet published for this item.
impact: Medium. Affects users of Work IQ-enabled agents and admins who approve connectors.
-->
