---
title: "Microsoft Purview: lifecycle status controls for adaptive scope recipients and site owners"
slug: "microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl"
roadmapId: 568785
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans adaptive scopes that evaluate only active recipients and site owners by default, with options to include inactive and soft-deleted ones. Existing scopes are unchanged; Purview administrators decide what new scopes include."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2027"
previewDate: "December CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "For retention policies using adaptive scopes, Microsoft requires Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Office 365 E5/A5/G5, or Microsoft 365 E5/A5/F5/G5 Information Protection and Governance. Any additional licence requirement specific to the lifecycle status controls is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","adaptive-scopes","retention","data-lifecycle-management","governance","policy"]
sources:
  - title: "Microsoft 365 Roadmap item 568785"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568785"
    kind: "roadmap"
  - title: "MC1450128: (Updated) Microsoft Purview: Adaptive scopes add lifecycle status evaluation controls for recipients and site owners"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1450128"
    kind: "message-center"
  - title: "Adaptive scopes"
    url: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "New-AdaptiveScope"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    kind: "learn"
  - title: "Get-AdaptiveScopeMembers"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    kind: "learn"
videos: []
related: ["purview-retention-last-accessed-sharepoint-onedrive"]
controls:
  - governs: "Whether a scope evaluates active, inactive and soft-deleted recipients and site owners"
    scope: "other"
    ui: null
    api: null
    note: "Planned per MC1450128; the Adaptive scopes page and the New-AdaptiveScope reference document no such setting at the time of writing (November 2026)."
  - governs: "Scope query, including excluding or targeting inactive mailboxes today"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > + Create scope > administrative unit > scope type > Advanced query builder"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AdaptiveScope -Name <name> -LocationType User -RawQuery <OPATH query>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    note: "Existing control, not a control over the new feature. Learn documents IsInactiveMailbox for inactive mailboxes only. Needs the Scope Manager role. Keep Full directory if not restricting by administrative unit; select Users."
  - governs: "Scope membership review, including added and removed members"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > scope > Details > Scope details"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "Get-AdaptiveScopeMembers -Identity <scope name> -State Added"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    note: "Existing control for checking who is in a scope. Learn says the member list can take up to five days to update."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-25"
roadmapModified: "2026-11-17T00:31:56"
changes:
  - date: "2026-11-17"
    note: "New briefing on the planned lifecycle status controls for Purview adaptive scopes, with preview in December 2026 and general availability in April 2027 per Microsoft's notice."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected licensing: retention policies using adaptive scopes need the Microsoft Purview service description licences; only any extra licence for the new controls is not yet published. Also corrected the create-scope path and separated Microsoft's recommendation from the wiki's step."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 67 statements confirmed"
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: removed the open question on which date attributes take ISO 8601 durations, as Learn now lists them; added the Details step to the scope membership path; licensing model set to included."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
version: 3
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "6e2fac592f8d7262b7b38095475384d8"
---

## What's changing

Microsoft plans to add lifecycle status evaluation controls to Microsoft Purview adaptive scopes. An adaptive scope is a query that defines a changing set of users, Microsoft 365 groups or sites, which a communication compliance, retention or auto-labeling policy can then target. The roadmap item says administrators will get explicit control over lifecycle-state evaluation for recipients and site owners. Microsoft's notice MC1450128 adds that administrators will control whether active, inactive and soft-deleted recipients and site owners are included in adaptive scope membership.

Per MC1450128, newly created adaptive scopes will evaluate only active recipients and site owners by default. Inactive and soft-deleted recipients or site owners are not included unless an administrator configures it. Existing adaptive scopes continue to function as they do today and are not automatically modified, and administrators will be able to update existing scopes to use explicit lifecycle status criteria. The notice also says the advanced query builder will support ISO 8601 duration values for certain date-based attributes; it does not say which attributes. Microsoft Learn now documents relative date filters in the advanced query builder; the roadmap and MC1450128 still give the rollout targets above.

The roadmap record lists the item as In development, for Worldwide (Standard Multi-Tenant) on the Web, with a preview target of December CY2026 and general availability targeted for April CY2027. MC1450128 (updated 14 November 2026) gives Public Preview beginning and completing in December 2026 (previously mid-September and early October) and general availability for Worldwide beginning and completing in April 2027 (previously mid-October 2026 and mid-November 2026). The notice sets no act-by date and says no action is required before rollout.

The Adaptive scopes page on Microsoft Learn documents no lifecycle status setting at the time of writing (November 2026), and the notice says its Learn link will be updated closer to general availability. What this page says about the new behaviour is therefore the roadmap's and Microsoft's notice's description.

## Why it matters

A policy reaches the people and sites its adaptive scope contains, so a change to what a scope includes changes who a retention, auto-labeling or communication compliance policy covers. Under the planned default, scopes created after the change are described as active-only while existing scopes keep today's behaviour. Expect scopes created before and after rollout to be able to behave differently, and plan for that when comparing them.

If nobody acts, MC1450128 says existing scopes are not modified, and new scopes evaluate only active recipients and site owners. The decision that falls to administrators is whether future scope definitions should include inactive or soft-deleted recipients and site owners, which is the review Microsoft's notice recommends. Make that decision per policy purpose before scope creation moves to the new default.

## Risk assessment

**Data exposure**

- A scope created under the planned default includes only active recipients and site owners, so a policy targeted through it may not reach inactive or soft-deleted ones. Microsoft has not described which policy outcomes follow, so check each policy's purpose against the scope's intended membership. The setting that includes them is not yet documented (see the controls table).
- Scope membership is shown on the scope's details page with an Added or Removed state, which lets you see who is in or out after a query change.

**Security & identity**

- No new identity or permission model is described in the roadmap item or the notice. Creating a scope today needs a role group with the Scope Manager role; which role will change the lifecycle setting is not stated.

**Autonomy & actions**

- No agent or autonomous behaviour is described. Scope queries run once daily, and Learn says changes can take up to five days to fully populate; whether lifecycle changes follow the same timing is not stated.

**Change & support**

- Existing scopes keep their current behaviour, so the tenant will hold scopes of two kinds. Document which are which, and update creation checklists, as the notice recommends.
- Confirm whether scopes created by script receive the same default as scopes created in the portal; the notice does not say.
- Date-based queries may change: the advanced query builder will accept ISO 8601 durations for certain attributes that the notice does not name. Learn's Adaptive scopes page lists the supported date properties under Use relative date filters.

## Cost and licensing

For retention policies using adaptive scopes, Microsoft requires Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW, Microsoft Defender + Purview Suite FLW, Office 365 E5/A5/G5, or Microsoft 365 E5/A5/F5/G5 Information Protection and Governance (Microsoft Purview service description). Any additional licence requirement specific to the lifecycle status controls is not yet published at the time of writing (November 2026): the roadmap record and MC1450128 name none, and the Adaptive scopes page on Microsoft Learn does not describe the controls.

The Learn page does note that users without a valid licence for adaptive scopes do not have the policy settings applied to them, but it names no licence in that passage. The cost the sources show is indirect: administrator time to review existing scope configuration, decide what new scopes include, and update creation processes and documentation.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with no other clouds. The people affected are Microsoft Purview administrators who create or manage adaptive scopes, and organisations that use adaptive scopes to target Purview policies.

Today, any role group with the Scope Manager role can create an adaptive scope; Learn lists Compliance Administrator, Compliance Data Administrator, Organization Management, Records Management, Communication Compliance and Communication Compliance Admins as built-in role groups that include it. Learn documents three scope types (Users, SharePoint sites, Microsoft 365 Groups). The notice refers to recipients and site owners, and does not say how the controls map to each scope type. Rollout follows the dates above, with preview first.

## Governance guidance

### Before rollout

- Review current adaptive scope configurations and governance requirements, as the notice recommends. As an additional preparation step, list which policies use each scope.
- Decide, per policy purpose, whether inactive or soft-deleted recipients and site owners belong in future scope definitions.
- Find scopes that already use the IsInactiveMailbox filter in the advanced query builder, because that is the documented way to exclude or target inactive mailboxes today.
- Update scope creation procedures and documentation to cover the lifecycle status settings once Microsoft documents them.

### At rollout

- Try the preview in a scope that no production policy uses, and check the result against the scope's member list once the setting is documented for your tenant.
- Confirm whether scopes created through PowerShell receive the active-only default, before relying on scripted creation.
- Wait for the queries to populate, which Learn says can take up to five days, before adding a new scope to a policy.

### After rollout

- Compare membership of older and newer scopes using the scope's details page or Get-AdaptiveScopeMembers with the State parameter.
- Decide whether to update existing scopes to explicit lifecycle criteria; they are not changed automatically.
- Re-check the Adaptive scopes page on Microsoft Learn and the controls table once Microsoft publishes the lifecycle setting.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a scope evaluates active, inactive and soft-deleted recipients and site owners</strong><br><small class="controls__note">Planned per MC1450128; the Adaptive scopes page and the New-AdaptiveScope reference document no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Scope query, including excluding or targeting inactive mailboxes today</strong><br><small class="controls__note">Existing control, not a control over the new feature. Learn documents IsInactiveMailbox for inactive mailboxes only. Needs the Scope Manager role. Keep Full directory if not restricting by administrative unit; select Users.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope › administrative unit › scope type › Advanced query builder <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &lt;name&gt; -LocationType User -RawQuery &lt;OPATH query&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Scope membership review, including added and removed members</strong><br><small class="controls__note">Existing control for checking who is in a scope. Learn says the member list can take up to five days to update.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › scope › Details › Scope details <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AdaptiveScopeMembers -Identity &lt;scope name&gt; -State Added</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The lifecycle status setting has no documented admin path or command at the time of writing (November 2026): the Adaptive scopes page describes none, and the New-AdaptiveScope reference lists no lifecycle parameter. The two rows below it are today's tools, not controls over the new feature.

The advanced query filter on IsInactiveMailbox is documented for inactive mailboxes; Learn documents no equivalent for soft-deleted recipients or site owners. Scope creation needs a role group with the Scope Manager role, and Learn says the cmdlet needs permissions in the Microsoft Purview compliance portal. The member list can take up to five days to reflect added or removed members.

## Open questions

- What will the lifecycle status settings be called, where will they sit in the Microsoft Purview portal, and will PowerShell or an API expose them? Watch the Adaptive scopes page on Microsoft Learn and MC1450128.
- How do inactive and soft-deleted apply to each scope type (Users, SharePoint sites, Microsoft 365 Groups), and do the controls cover all three?
- Do scopes created with New-AdaptiveScope get the active-only default, or only scopes created in the portal?
- Which additional licensing, if any, do the new lifecycle status controls need? Watch the Microsoft Purview service description and the notice.

<!-- rationale
risk: Medium. Microsoft's notice MC1450128 says newly created scopes will evaluate only active recipients and site owners by default, so a policy targeted through a new scope may not reach inactive or soft-deleted ones unless an administrator opts in.
cost: Low. The only cost the sources show is administrator time to review scope definitions and creation processes; additional licensing for the new controls is not yet published.
impact: Low. Microsoft's notice names Purview administrators who create or manage adaptive scopes, and organisations that use them for policy targeting; it describes no end-user change.
-->
