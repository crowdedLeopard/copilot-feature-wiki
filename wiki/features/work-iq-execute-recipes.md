---
title: "Work IQ: agents can execute reusable recipes"
slug: "work-iq-execute-recipes"
roadmapId: 570866
desk: "agents"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Agents will be able to run reusable Work IQ recipes that coordinate supported tools and actions."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: "October CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. Work IQ API calls elsewhere require Copilot Credits billing."
audiences: ["m365-admin","service-owner","security"]
tags: ["work-iq","recipes","agents","mcp"]
sources:
  - title: "Microsoft 365 Roadmap item 570866"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570866"
    kind: "roadmap"
  - title: "Work IQ API overview"
    url: "https://learn.microsoft.com/microsoft-365/copilot/extensibility/work-iq/api-overview"
    kind: "learn"
videos: []
related: ["agent-365-control-plane-for-agents","copilot-credits","agent-identity"]
confidence: "low"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-06T23:04:41"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 570866."
version: 1
---

## What's changing

The roadmap entry states that agents will be able to execute reusable Work IQ recipes that coordinate supported tools and actions. That is the full description published.

The target is November 2026 and the status is In development. No Microsoft Learn page describing recipes was found at the time of review, so no detail on format, authoring or limits can be confirmed.

Work IQ is otherwise documented as exposing Microsoft 365 work context to agents through MCP and A2A, using delegated authentication.

## Why it matters

Reusable recipes suggest standard multi-step behaviour shared by agents. Owners should expect questions about who can author them, which tools they may call and how actions are approved and audited.

## Risk assessment

**Data exposure**
- Recipes would use supported tools with the signed-in user's permissions; the exact data reach is unpublished.

**Security & identity**
- Work IQ uses delegated Entra authentication and does not support application-only access.

**Autonomy & actions**
- Chained actions raise autonomy compared with single calls.

**Change & support**
- Shared recipes mean one change affects many agents.

## Cost and licensing

Not yet published. Learn notes that Work IQ retrieve requires Copilot Credits billing and a spending policy that includes Work IQ API; whether recipes follow the same model is unknown.

## Scope

Agents using Work IQ. Cloud and tenant scope are not stated in the roadmap record.

## Governance guidance

### Before rollout
- Inventory agents already using Work IQ.
- Agree an approval route for recipe authoring.

### At rollout
- Limit recipe availability to a pilot.
- Require human approval for write actions where supported.

### After rollout
- Review audit logs for recipe runs.
- Retire unused recipes.

## Admin controls

None published yet. Existing Work IQ controls include delegated consent and spending policies for the Work IQ API.

## Open questions

- How recipes are authored, shared and versioned.
- Which tools and actions are supported.
- How usage is metered and audited.

<!-- rationale
risk: Medium. Recipes chain tools and actions, so agents can take multi-step actions; the available controls are not yet published.
cost: Variable. Work IQ API use can require Copilot Credits billing; recipe-specific metering is not yet published.
impact: Low. Affects developers and admins building or approving agents that use Work IQ.
-->
