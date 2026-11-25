---
title: "Microsoft Purview: adaptive scope lifecycle status controls for recipients and site owners (GCC, GCC High and DoD)"
slug: "microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-us-government"
roadmapId: 572676
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans explicit control over how Purview adaptive scopes evaluate recipient and site owner lifecycle status in GCC, GCC High and DoD, targeted January CY2027. Learn documents no such setting yet, and no admin action is stated."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "For a retention policy that uses an adaptive policy scope, the Microsoft Purview service description requires Microsoft 365 E5/A5/G5, Purview Suite/EDU/GOV/FLW, Defender + Purview Suite FLW, Office 365 E5/A5/G5 or Microsoft 365 E5/A5/F5/G5 Information Protection and Governance. Anything specific to this control is not yet published."
audiences: ["compliance","m365-admin","security"]
tags: ["purview","adaptive-scopes","retention","data-lifecycle-management","governance","policy","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 572676"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=572676"
    kind: "roadmap"
  - title: "Adaptive scopes"
    url: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Plan for Microsoft Purview compliance and risk management solutions – GCC High deployments"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/plan-for-microsoft-purview-gcc-high-deployments"
    kind: "learn"
  - title: "New-AdaptiveScope"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    kind: "learn"
  - title: "Get-AdaptiveScopeMembers"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    kind: "learn"
videos: []
related: ["microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl"]
controls:
  - governs: "Whether a scope evaluates recipient and site owner lifecycle status"
    scope: "other"
    ui: null
    api: null
    note: "Planned per the roadmap item; Learn documents no such setting at the time of writing (November 2026)."
  - governs: "Scope query, including excluding or targeting inactive mailboxes today"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > + Create scope > administrative unit > scope type > Advanced query builder"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AdaptiveScope -Name <String> -LocationType User -RawQuery <String>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    note: "Existing control, not a control over the new feature. Learn documents IsInactiveMailbox for inactive mailboxes only. Needs the Scope Manager role; keep Full directory if not restricting by administrative unit."
  - governs: "Scope membership review, including added and removed members"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > scope > Details > Scope details"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "Get-AdaptiveScopeMembers -Identity <scope name> -State Removed"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    note: "Existing control for checking who is in a scope. Learn says the member list can take up to five days to update."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-14T23:01:02"
changes:
  - date: "2026-11-21"
    note: "New briefing on the planned lifecycle status controls for Purview adaptive scopes in GCC, GCC High and DoD, targeted January CY2027; Learn does not yet describe the control."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 41 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Corrected the policy applicability: communication compliance policies do not support SharePoint sites or OneDrive accounts in adaptive scopes."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 47 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 43 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 43
  confirmed: 42
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "6ea38ff4479db65b555863376e337550"
---

## What's changing

Microsoft plans to give administrators explicit control over lifecycle-state evaluation for recipients and site owners in Microsoft Purview adaptive scopes. An adaptive scope is a query that defines a changing set of users, Microsoft 365 groups or sites, which a communication compliance, retention or auto-labeling policy can then target. For communication compliance policies, SharePoint sites and OneDrive accounts are not supported. The roadmap description says the control is meant to keep policy targeting and scope membership aligned with organisational requirements.

This roadmap item (572676) lists GCC, GCC High and DoD on the Web, with general availability targeted for January CY2027 and no preview date. The status is In development. Microsoft lists the same feature under a second roadmap item, 568785, for Worldwide (Standard Multi-Tenant), which has its own dates; see [the briefing for that item](/features/microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl/).

Microsoft Learn does not describe this control yet, so what follows about its behaviour is the roadmap's description. The roadmap text does not say which lifecycle states exist, what the default is, or where the setting will sit. The Adaptive scopes page documents one lifecycle-related filter today: the OPATH property IsInactiveMailbox, which the advanced query builder uses to exclude or target inactive mailboxes.

## Why it matters

Changing scope membership can change policy coverage; communication compliance policies do not support SharePoint sites or OneDrive accounts. Learn says users without a valid licence for adaptive scopes do not have the policy settings applied to them, so scope membership and policy coverage are already two different lists.

Microsoft has not stated what happens on arrival, so plan on no existing scope changing until a source says otherwise. The useful preparation is to know which of your policies depend on scope membership for former or inactive accounts and sites, so you can judge the new control against them once Microsoft documents it.

## Risk assessment

**Data exposure**

- A scope that evaluates lifecycle state differently could include or leave out recipients or site owners that a policy currently reaches. Microsoft has not described which states exist or which policy outcomes follow, so check each policy's purpose against its scope's member list. The control itself is not yet documented (see the controls table).
- Membership is visible today on the scope's Scope details list, where the State column shows Added or Removed members.

**Security & identity**

- No new identity or permission model is described in the roadmap item. Creating a scope today needs a role group with the Scope Manager role; which role will manage the lifecycle control is not stated.

**Autonomy & actions**

- No agent or autonomous behaviour is described. Learn says scope queries run daily and that changes can take up to five days to fully populate; whether the new control follows the same timing is not stated.

**Change & support**

- Scope definitions and creation checklists may need updating once Microsoft documents the control; nothing on Learn can be followed yet.
- The roadmap item and the Learn page do not say how the control maps to the three scope types (Users, SharePoint sites, Microsoft 365 Groups).

## Cost and licensing

The roadmap record names no licence or meter. The Microsoft Purview service description says that if a retention policy uses an adaptive policy scope, one of these licences is required to provide user rights: Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Office 365 E5/A5/G5, or Microsoft 365 E5/A5/F5/G5 Information Protection and Governance. That statement is about retention policies; the page does not describe the new lifecycle control, so any licence requirement specific to it is not yet published at the time of writing (November 2026).

The cost the sources show is indirect: administrator time to review existing scopes, decide how new scopes should treat lifecycle state, and update scope creation procedures.

## Scope

The roadmap record lists GCC, GCC High and DoD, on the Web, with release phase General Availability and a target of January CY2027. The Worldwide cloud is covered by roadmap item 568785, not this item.

Administrators who create or manage adaptive scopes are the people affected. Learn says any role group with the Scope Manager role can create an adaptive scope, and lists Compliance Administrator, Compliance Data Administrator, Organization Management, Records Management, Communication Compliance and Communication Compliance Admins as built-in role groups that include it. The Microsoft Purview GCC High planning page lists adaptive scopes for retention and labeling policies as Available. Rollout mechanics and prerequisites for the new control are not stated.

## Governance guidance

### Before rollout

- List the adaptive scopes in the Microsoft Purview portal and the policies that use each one, so you know what a change to scope evaluation could affect.
- Find scopes whose advanced query already uses IsInactiveMailbox, because that is the documented way to exclude or target inactive mailboxes today.
- Confirm who holds the Scope Manager role, and decide which team will own the new setting once Microsoft names the role that manages it.

### At rollout

- Watch the roadmap item and Message center for rollout dates and an administrator notice; none is supplied with this item.
- Test the control on a scope that no production policy uses, and compare its member list with the expected result once the setting is documented.
- Wait for the queries to populate, which Learn says can take up to five days, before adding a changed scope to a policy.

### After rollout

- Compare membership of changed scopes using the Scope details list or Get-AdaptiveScopeMembers with the State parameter.
- Update scope creation procedures and documentation with the control's name and path once Learn describes them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a scope evaluates recipient and site owner lifecycle status</strong><br><small class="controls__note">Planned per the roadmap item; Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Scope query, including excluding or targeting inactive mailboxes today</strong><br><small class="controls__note">Existing control, not a control over the new feature. Learn documents IsInactiveMailbox for inactive mailboxes only. Needs the Scope Manager role; keep Full directory if not restricting by administrative unit.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope › administrative unit › scope type › Advanced query builder <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &lt;String&gt; -LocationType User -RawQuery &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Scope membership review, including added and removed members</strong><br><small class="controls__note">Existing control for checking who is in a scope. Learn says the member list can take up to five days to update.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › scope › Details › Scope details <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AdaptiveScopeMembers -Identity &lt;scope name&gt; -State Removed</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The lifecycle control has no documented admin path or command at the time of writing (November 2026): the Adaptive scopes page describes none and the New-AdaptiveScope reference lists no lifecycle parameter. The two rows below it are tools that exist today, not controls over the new feature.

The IsInactiveMailbox filter is documented for inactive mailboxes only. Creating a scope needs a role group with the Scope Manager role, and Learn says the member list can take up to five days to reflect added or removed members.

## Open questions

- What will the lifecycle status setting be called, where will it sit in the Microsoft Purview portal, and will PowerShell expose it? Watch the Adaptive scopes page on Microsoft Learn.
- What does the control do on arrival, and are existing scopes affected? Microsoft has not stated a default; watch the roadmap item and Message center.
- Which lifecycle states can be included or excluded, and do they apply to all three scope types (Users, SharePoint sites, Microsoft 365 Groups)?
- Is any licence needed beyond those the service description lists for retention policies using adaptive scopes? Watch the Microsoft Purview service description.

<!-- rationale
risk: Low. The roadmap item describes a new administrator control and no source says existing scopes change; with the default not stated, this rates today's scope behaviour continuing.
cost: Low. The only cost the sources show is administrator time to review scope definitions; Learn names licences for retention policies that use adaptive scopes, and nothing specific to this control is published.
impact: Low. Purview administrators who create adaptive scopes would notice; the roadmap item describes no change for end users.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout, third bullet / consistency: The checklist asks readers to confirm Scope Manager role assignments without representing that review in the controls table. | Found: Confirm who holds the Scope Manager role ... Controls: Whether a scope evaluates recipient and site owner lifecycle status; Scope query, including excluding or targeting inactive mailboxes today; Scope membership review, including added and removed members. | Fix: Replace the third Before rollout bullet with: "Decide which team will own the new setting once Microsoft names the role that manages it."
-->
