---
title: "Microsoft Copilot: delegated publishing of organisation prompts"
slug: "microsoft-copilot-microsoft-m365-delegated-prompt-publishing-for-organization-prompts"
roadmapId: 569425
topic: "governance"
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
defaultState: "unknown"
action: "review"
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
related: ["m365-admin-center-copilot-credits-usage-report"]
controls:
  - governs: "Creating, editing, importing and pinning organisation prompts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Prompts"
      docs: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    api: null
    note: "AI Administrator, Search Editor or a role with equivalent permissions; up to 1,000 prompts per tenant."
  - governs: "Delegating prompt publishing to other roles or people"
    scope: "tenant"
    ui: null
    api: null
    note: "The delegation control this roadmap entry describes is not yet on Learn."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-17"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 569425."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
  - date: "2026-11-17"
    note: "Corrected the cloud statement to the roadmap record, softened the portal-only claim, qualified the role statement and set action to review."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 41 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected the default state to unknown, as Microsoft has not stated the delegation default, and added it to open questions."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 41 statements confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 4
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 43
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "253494458b75eb47635a8354916bb823"
---

## What's changing

Organisation prompts let admins upload custom prompts that appear on the Copilot app home screen and in the prompt lab. This item adds delegation: admins can grant prompt publishing to individual users, Microsoft Entra security groups and distribution groups.

Delegates can create, edit and delete organisation prompts at tenant level through the Prompt Lab, without opening the Microsoft 365 admin center. Admins keep oversight through the existing admin centre experience.

The roadmap target is December 2026 and the status is In development.

## Why it matters

Today organisation prompts need an AI Administrator or Search Editor role, or a role with equivalent permissions. Delegation moves authoring closer to business teams, which scales content but spreads responsibility for what Copilot suggests to every employee, including wording that may reference sensitive processes.

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

Tenant-wide organisation prompts shown in Microsoft Copilot Chat, Microsoft Edge and Microsoft Teams. The roadmap lists Worldwide (Standard Multi-Tenant). Delegates may be users, security groups or distribution groups.

## Governance guidance

### Before rollout
- Decide who should be a delegate and prefer security groups over distribution groups.
- Define a naming, review and retirement standard for organisation prompts.

### At rollout
- Grant delegation to a small pilot group first.
- Communicate the approval process to delegates.

### After rollout
- Audit delegate membership regularly and remove stale prompts.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating, editing, importing and pinning organisation prompts</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator, Search Editor or a role with equivalent permissions; up to 1,000 prompts per tenant.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Prompts <a href="https://learn.microsoft.com/copilot/manage/organizational-prompts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Delegating prompt publishing to other roles or people</strong><br><small>Tenant</small><br><small class="controls__note">The delegation control this roadmap entry describes is not yet on Learn.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents role-gated prompt management in the admin centre; no Graph or PowerShell equivalent is documented at the time of writing (November 2026). Until the delegation feature is documented, the practical way to widen publishing is to assign Search Editor, one of the roles Learn lists; review that assignment as part of the Copilot settings described in [Configure Copilot settings](https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center).

## Open questions

- Where admins configure delegation and whether it is audited is not published.
- Whether delegates can pin prompts is unstated.
- Whether delegated edits are logged in Purview audit is unconfirmed.
- Microsoft has not stated the default delegation assignments or permissions on arrival.

<!-- rationale
risk: Medium. Delegates can publish tenant-wide prompts that users see and run, so poor or unreviewed prompts can reach everyone without admin involvement.
cost: Low. Admin time to define the delegate list and a review process; no licence change is published.
impact: Medium. Affects prompt authors and admins directly, and all users who see suggested organisation prompts indirectly.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes / licensing: Licensing for delegated organization-prompt publishing is not yet published. | Found: Copilot Chat (Basic) is the standalone baseline experience included with eligible Microsoft 365 licenses. | Fix: Set licensing.model to included and replace the notes with: 'Copilot Chat (Basic) is included with eligible Microsoft 365 licenses. Licensing specific to delegated organization-prompt publishing is not yet published.' Cite https://learn.microsoft.com/copilot/plan/copilot-overview. Targeted licensing searches and the organizational-prompts prerequisites did not identify delegate-specific entitlement. | Source: https://learn.microsoft.com/copilot/plan/copilot-overview
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft 365 admin center > Copilot > Prompts is the location for creating, editing, importing and pinning organization prompts. | Found: Expand Copilot and select Prompts. ... Select Create prompt. ... select Edit. ... Select Import prompts ... Select Pin prompt from the more options menu (...). | Fix: The path correctly reaches the prompt list but stops before its actions. Keep 'Copilot > Prompts' and add to the row note: 'From the prompt list, select Create prompt or Import prompts; to edit, select a prompt > Edit; to pin, select a prompt > Pin prompt from the more options menu.' These are the routes at https://learn.microsoft.com/copilot/manage/organizational-prompts. | Source: https://learn.microsoft.com/copilot/manage/organizational-prompts
- [supported, minor] summary; What's changing; Scope / record: Administrators can delegate organization-prompt publishing to individual users. | Found: Now, admins can delegate organization prompt publishing to users, AAD security groups, and distribution groups. | Fix: Replace the summary with: 'Microsoft plans to let admins delegate organisation prompt publishing to users and groups, who would manage tenant-wide prompts in the Prompt Lab without admin centre access.' Introduce the delegation description in What's changing with 'The roadmap item describes planned delegation:' so the following capabilities are not presented as already available.
-->
