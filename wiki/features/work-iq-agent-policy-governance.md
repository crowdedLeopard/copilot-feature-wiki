---
title: "Work IQ: policy-based governance of agents and their capabilities"
slug: "work-iq-agent-policy-governance"
roadmapId: 570652
desk: "agents"
products: ["Work IQ","Microsoft Copilot (Microsoft 365)"]
summary: "Administrators will get policy-based controls to govern agents and their capabilities at scale through Work IQ. Only the roadmap summary is published so far."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: "November CY2026"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published."
audiences: ["m365-admin","security","compliance","service-owner"]
tags: ["work-iq","agent-governance","policy","agents","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap item 570652"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570652"
    kind: "roadmap"
videos: []
related: ["agent-365-control-plane-for-agents","m365-copilot-agent-lifecycle-management-rules","agent-identity"]
confidence: "low"
created: "2026-11-15"
updated: "2026-11-15"
roadmapModified: "2026-10-19T23:15:15"
changes:
  - date: "2026-11-15"
    note: "New briefing: Work IQ agent policy governance, in development; roadmap text only."
version: 1
---

## What's changing

The roadmap states that administrators will get policy-based controls for governing agents and their capabilities at scale. That is the full description.

The item is listed under Work IQ and Microsoft Copilot (Microsoft 365), Worldwide, on the web. A preview is shown for November 2026 and general availability is targeted for January 2027.

Which agents, capabilities and policy types are covered has not been published, nor how it relates to the Agent 365 control plane or agent lifecycle rules in the Microsoft 365 admin center.

## Why it matters

Policy at scale is what lets an organisation govern many agents without reviewing each one. Service owners should expect to define baseline policies, such as which tools or data sources agents may use.

Until documentation exists, plan the policy decisions rather than the configuration.

## Risk assessment

**Data exposure**
- Not yet published. Policies may restrict data sources available to agents.

**Security & identity**
- Admin role requirements and policy scope are not yet published.

**Autonomy & actions**
- Policies may limit which capabilities an agent can use.

**Change & support**
- Existing agents might be affected when policies apply; behaviour for current agents is unknown.

## Cost and licensing

Not yet published. No licence, add-on or meter is named on the roadmap item, so the rating assumes admin effort only until Microsoft documents the feature.

## Scope

Administrators of agents using Work IQ, Worldwide cloud, web. Other clouds are not listed.

## Governance guidance

### Before rollout
- [ ] Inventory current agents and the capabilities they use.
- [ ] Draft baseline rules for allowed capabilities.
- [ ] Compare with existing controls in Agent 365 and the Microsoft 365 admin center.

### At rollout
- [ ] Pilot policies on a small set of agents.
- [ ] Tell agent owners which policies apply.

### After rollout
- [ ] Review policy exceptions.
- [ ] Check for agents blocked unexpectedly.

## Admin controls

None published. The location of the policy settings, required roles and any PowerShell or Graph support are not yet documented.

## Open questions

- Where will policies be managed: Microsoft 365 admin center, Agent 365 or elsewhere?
- Which capabilities can be governed?
- How do policies interact with maker-level settings?
- Will existing agents be evaluated retroactively?

<!-- rationale
risk: Low. This adds governance controls; the risk is mainly that its scope and defaults are unknown until documentation appears.
cost: Low, provisional. Not yet published; no licence or meter is named, so only admin effort is assumed.
impact: Medium. It would affect admins and agent owners whose agents are subject to the new policies.
-->
