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
controls:
  - governs: "Creating, editing, importing and pinning organisation prompts"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Prompts"
      docs: "https://learn.microsoft.com/copilot/manage/organizational-prompts"
    api: null
    note: "AI Administrator or Search Editor; up to 1,000 prompts per tenant."
  - governs: "Delegating prompt publishing to other roles or people"
    scope: "tenant"
    ui: null
    api: null
    note: "The delegation control this roadmap entry describes is not yet on Learn."
confidence: "medium"
created: "2026-11-14"
updated: "2026-11-16"
roadmapModified: "2026-11-12T01:50:56"
changes:
  - date: "2026-11-14"
    note: "New briefing from roadmap item 569425."
  - date: "2026-11-16"
    note: "Added governance controls: admin UI paths and API equivalents, sourced to Microsoft Learn"
version: 2
verification:
  status: "held"
  date: "2026-11-16"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 41
  unconfirmed: 1
  contradicted: 3
  attempts: 2
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

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Creating, editing, importing and pinning organisation prompts</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator or Search Editor; up to 1,000 prompts per tenant.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Prompts <a href="https://learn.microsoft.com/copilot/manage/organizational-prompts" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Delegating prompt publishing to other roles or people</strong><br><small>Tenant</small><br><small class="controls__note">The delegation control this roadmap entry describes is not yet on Learn.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Prompt management is portal-only and role-gated. Until the delegation feature is documented, the practical way to widen publishing is to assign Search Editor, which is less privileged than AI Administrator; review that assignment as part of the Copilot settings described in [Configure Copilot settings](https://learn.microsoft.com/copilot/implement/configure-copilot-admin-center). No Graph or PowerShell route for prompts is documented.

## Open questions

- Where admins configure delegation and whether it is audited is not published.
- Whether delegates can pin prompts is unstated.
- Whether delegated edits are logged in Purview audit is unconfirmed.

<!-- rationale
risk: Medium. Delegates can publish tenant-wide prompts that users see and run, so poor or unreviewed prompts can reach everyone without admin involvement.
cost: Low. Admin time to define the delegate list and a review process; no licence change is published.
impact: Medium. Affects prompt authors and admins directly, and all users who see suggested organisation prompts indirectly.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [supported, minor] Why it matters; controls[0].note; Governance controls: prose / role: Current organisation prompt management uses the AI Administrator or Search Editor role. | Found: To manage, create, update, edit, import, and delete organizational prompts, use one of the following roles, or a role with equivalent permissions:
- AI Administrator
- Search Editor | Fix: Qualify the role statement and control note with 'or a role with equivalent permissions', matching the prerequisites, which list AI Administrator and Search Editor. | Source: https://learn.microsoft.com/copilot/manage/organizational-prompts
- [contradicted, blocker] Scope; front matter: clouds / availability: Cloud availability is not stated in the material reviewed. | Found: "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Replace the scope sentence with 'The roadmap lists Worldwide (Standard Multi-Tenant).' Do not infer exclusion of clouds absent from the record.
- [unsupported, blocker] Governance controls: prose / absence: Prompt management is portal-only. | Found: Searched: '"organizational prompts" "API"', '"organizational prompts" "PowerShell"', 'site:learn.microsoft.com/graph "organizational prompts" publish'. Opened Learn /copilot/manage/organizational-prompts; no statement of portal exclusivity. | Fix: Replace 'Prompt management is portal-only and role-gated' with 'Microsoft Learn documents role-gated prompt management in the admin centre; no Graph or PowerShell equivalent is documented at the time of writing (November 2026).' Absence of API documentation does not establish that no API exists.
- [supported, minor] Governance controls: prose / role: Search Editor is a less privileged publishing option than AI Administrator. | Found: Users in this role can create, manage, and delete content for Microsoft Search in the Microsoft 365 admin center, including bookmarks, Q&As, and locations.
AI Administrator: This is a privileged role. | Fix: Cite the Microsoft Entra built-in roles reference at https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference#search-editor and #ai-administrator for the role-scope comparison. The Configure Copilot settings page does not state it. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/permissions-reference
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The checklist directs readers to review prompt analytics, but the controls table omits that control. | Found: Review prompt analytics for active users and submissions.
Controls: Creating, editing, importing and pinning organisation prompts; Delegating prompt publishing to other roles or people. | Fix: Add a 'Reviewing organisation prompt analytics' control row with the Microsoft 365 admin center > Copilot > Prompts location and Active users and Submissions metrics. Cite https://learn.microsoft.com/copilot/manage/organizational-prompts#review-analytics-for-organizational-prompts; no API was found.
- [contradicted, minor] front matter: action; front matter: defaultState / consistency: The prepare action rating conflicts with the standard for an optional administrator-configured capability. | Found: action: "prepare"; defaultState: "admin-opt-in"; risk: "medium"; admins can grant prompt publishing to individual users, Microsoft Entra security groups and distribution groups. | Fix: Change action to 'review'. The standard assigns review to optional new controls that change nothing until an administrator chooses them; no source states that existing publishing changes without delegation, and the high-risk exception does not apply.
-->
