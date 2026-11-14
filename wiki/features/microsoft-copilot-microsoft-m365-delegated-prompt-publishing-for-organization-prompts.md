---
title: "Microsoft Copilot: delegated publishing of organisation prompts"
slug: "microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts"
roadmapId: 569425
desk: "admin-billing"
products: ["Microsoft 365 admin center","Microsoft Copilot (Microsoft 365)"]
summary: "Admins can delegate organisation prompt publishing to users and groups, who manage tenant-wide prompts in the Prompt Lab without admin centre access."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop","Web"]
targetDate: "December CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "admin-opt-in"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Organisation prompts are managed in the Microsoft 365 admin center today."
audiences: ["m365-admin","service-owner","change-adoption","compliance"]
tags: ["copilot","organisation-prompts","prompt-lab","delegation","admin-center"]
sources:
  - title: "Microsoft 365 Roadmap item 569425"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569425"
    kind: "roadmap"
  - title: "Organizational prompts overview"
    url: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    kind: "learn"
videos: []
related: ["m365-copilot-agent-lifecycle-management-rules","m365-admin-center-copilot-credits-usage-report"]
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-14"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 569425."
version: 1
---

## What's changing

Organisation prompts let admins upload custom prompts that appear on the Copilot app home screen and in the prompt lab. This item adds delegation: admins can grant prompt publishing to individual users, Microsoft Entra security groups and distribution groups.

Delegates can create, edit and delete organisation prompts at tenant level through the Prompt Lab, without opening the Microsoft 365 admin center. Admins keep oversight through the existing admin centre experience.

The roadmap target is December 2026 and the status is In development.

## Why it matters

Today organisation prompts need an AI Administrator or Search Editor role. Delegation moves authoring closer to business teams, which scales content but spreads responsibility for what Copilot suggests to every employee, including wording that may reference sensitive processes.

## Risk assessment

**Data exposure**
- Prompts may embed internal terms, names or process detail visible to the whole tenant.

**Security & identity**
- Delegation through distribution groups could widen the author set through membership drift.

**Autonomy & actions**
- Prompts are placed in the chat box and are not submitted automatically, which limits impact.

**Change & support**
- Several authors can create duplicates or conflicting prompts; the limit is 1,000 prompts per tenant and four pinned.

## Cost and licensing

No licence or pricing change is published. Not yet published: whether delegates need a specific Copilot licence. Budget admin time for governance of the prompt library.

## Scope

Tenant-wide organisation prompts shown in Microsoft Copilot Chat, Microsoft Edge and Microsoft Teams. Cloud availability is not stated in the material reviewed. Delegates may be users, security groups or distribution groups.

## Governance guidance

### Before rollout
- Decide who should be a delegate and prefer security groups over distribution groups.
- Define a naming, review and retirement standard for organisation prompts.

### At rollout
- Grant delegation to a small pilot group first.
- Communicate the approval process to delegates.

### After rollout
- Review prompt analytics for active users and submissions.
- Audit delegate membership regularly and remove stale prompts.

## Admin controls

Organisation prompts are managed today under Copilot > Prompts in the Microsoft 365 admin center, which requires the AI Administrator or Search Editor role. The delegation control itself is not yet published.

## Open questions

- Where admins configure delegation and whether it is audited is not published.
- Whether delegates can pin prompts is unstated.
- Whether delegated edits are logged in Purview audit is unconfirmed.

<!-- rationale
risk: Medium. Delegates can publish tenant-wide prompts that users see and run, so poor or unreviewed prompts can reach everyone without admin involvement.
cost: Low. Admin time to define the delegate list and a review process; no licence change is published.
impact: Medium. Affects prompt authors and admins directly, and all users who see suggested organisation prompts indirectly.
-->
