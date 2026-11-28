---
title: "Microsoft Purview eDiscovery: up to 100 review sets per case (GCC, GCC High, DoD)"
slug: "microsoft-purview-ediscovery-review-set-limit-increase"
roadmapId: 560322
topic: "governance"
products: ["Microsoft Purview"]
summary: "In GCC, GCC High and DoD, an eDiscovery case with premium features can now hold up to 100 review sets instead of 20. It affects eDiscovery managers and reviewers; administrators have nothing to switch on."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "none"
licensing:
  model: "included"
  notes: "Review sets are a premium eDiscovery feature. Microsoft Learn says organisations with an Office 365 E5 or Microsoft 365 E5 subscription (or related E5 add-on subscriptions) can use premium eDiscovery features; the 100 limit is listed under premium feature support."
audiences: ["compliance","service-owner","security"]
tags: ["purview","ediscovery","role-groups","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap item 560322"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560322"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap item 558858"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558858"
    kind: "roadmap"
  - title: "Limits in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-ref-limits"
    kind: "learn"
  - title: "Learn about eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc"
    kind: "learn"
  - title: "Add search results to a review set in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    kind: "learn"
  - title: "Learn about case settings in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-settings-cases"
    kind: "learn"
  - title: "Create and manage cases in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-cases-manage#cases-dashboard"
    kind: "learn"
  - title: "Configure general settings in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-settings-general"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Whether a case has premium eDiscovery features, including review sets (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Creating a new review set in a case (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycase-post-reviewsets?view=graph-rest-1.0"
    kind: "learn"
  - title: "Removing review set content by deleting the case (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/security-casesroot-delete-ediscoverycases?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["ediscovery","role-groups","microsoft-purview-ediscovery-advanced-review-set-explorer","microsoft-purview-compliance-portal-ediscovery-premium-hold-reports-u-s-government-clouds","microsoft-purview-compliance-portal-ediscovery-premium-cmk-customer-managed-keys-encryptio"]
controls:
  - governs: "Who can create eDiscovery cases and review sets"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Security & Compliance PowerShell; the cmdlet adds a mail-enabled security group to the eDiscovery Managers subgroup."
  - governs: "Whether a case has premium eDiscovery features, including review sets"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Case settings > Premium features > eDiscovery (Premium)"
      docs: "https://learn.microsoft.com/purview/edisc-settings-cases"
    api:
      kind: "graph"
      call: "PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0"
    note: "Per case. The request body sets caseType (standard or premium). Premium features are on by default for tenants with premium feature access. The cases dashboard page says access to premium features isn't governed by this toggle."
  - governs: "Creating a new review set in a case"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Searches > search > Add to review set > Add items to review set > Add to a new review set"
      docs: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    api:
      kind: "graph"
      call: "POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/reviewSets"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycase-post-reviewsets?view=graph-rest-1.0"
    note: "Needs an eDiscovery role; eDiscovery Manager is the least privileged option for review sets in the user's own cases."
  - governs: "Removing review set content by deleting the case"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Case settings > Actions > Delete case"
      docs: "https://learn.microsoft.com/purview/edisc-settings-cases"
    api:
      kind: "graph"
      call: "DELETE /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}"
      docs: "https://learn.microsoft.com/graph/api/security-casesroot-delete-ediscoverycases?view=graph-rest-1.0"
    note: "Deletes searches, review sets and exports in the case and cannot be undone. All hold policies in the case must be deleted first."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-01T21:45:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: review set limit per eDiscovery case rises from 20 to 100 in GCC, GCC High and DoD, with the role, case and Graph controls around review sets."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 57 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: Graph review set creation supports application permissions; removed an unsupported 'no change to access' claim; refined Reviewer and eDiscovery Administrator wording; noted the cases dashboard caveat on the premium toggle; added roadmap item 558858."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 64 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 64
  confirmed: 64
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "714d70e6b8830b7f6edfc209b9799aa5"
---

## What's changing

An eDiscovery case in the Microsoft Purview portal can now contain up to 100 review sets. The roadmap item states that the review set limit per case is increased from 20 per case to 100 per case. A review set is a copy of collected content, held in Microsoft-managed Azure Storage, that investigators search, filter, tag and export.

Microsoft Learn's [Limits in eDiscovery](https://learn.microsoft.com/purview/edisc-ref-limits) page lists the maximum number of review sets per case as 100, in its table for eDiscovery with premium feature support. The other case-wide limits on that page still apply: 40 million documents across all review sets in a case, and 1 TB per review set. Neither the roadmap item nor the limits page describes a step administrators must take.

This item covers the US Government clouds (GCC, GCC High and DoD) on the web. Its status is Launched, released to General Availability, with a target of May CY2026. Microsoft lists the same change for the Worldwide cloud under roadmap item 558858, also Launched, with a target of April CY2026.

## Why it matters

Large investigations no longer have to be split across cases to stay under 20 review sets. That keeps searches, holds, tags and exports for one matter in one case, under one membership list.

The flip side is that each review set is a further copy of mailbox and site content. Microsoft Learn states that, in data spillage scenarios, the only way to remove items in a review set is to delete the eDiscovery case. A case with many more review sets can hold many more copies of sensitive content, so the decision to delete a spilled case carries more weight. If nobody acts, cases with premium features simply accept more review sets.

## Risk assessment

**Data exposure**
- Adding content to a review set copies items from their original location into a Microsoft-managed Azure Storage location dedicated to the case. More review sets per case means more copies within that case. Storage is provisioned per case and shared by its review sets.
- Where the tenant uses Customer Key, Microsoft states review set content at rest is encrypted with the customer-managed key.

**Security & identity**
- An eDiscovery Manager can access review sets in cases they create and are members of; an eDiscovery Administrator can access review sets in all cases; a Reviewer can view and tag documents in review sets in cases where they are a member, but cannot perform other case management tasks. Membership of the eDiscovery Manager role group is the control (first row of the table).

**Autonomy & actions**
- Review sets can be created from a search in the portal or through the Microsoft Graph API, whose create reviewSets operation supports application permissions.

**Change & support**
- Spilled content in a review set is removed only by deleting the whole case, which first needs every hold policy in the case deleted. A case with dozens of review sets makes that a larger loss of work.

## Cost and licensing

Review sets are a premium eDiscovery feature, and the 100 limit is listed under premium feature support on [Limits in eDiscovery](https://learn.microsoft.com/purview/edisc-ref-limits). The [Learn about eDiscovery](https://learn.microsoft.com/purview/edisc) page says organisations with an Office 365 E5 or Microsoft 365 E5 subscription (or related E5 add-on subscriptions) can use premium eDiscovery features.

On storage, [Add search results to a review set](https://learn.microsoft.com/purview/edisc-search-add-to-review-set) states that review set storage is Microsoft-owned and Microsoft-managed, and that customers don't see, manage, or pay for these storage resources directly.

The indirect cost is people's time: more review sets in a case mean more material for reviewers to tag and for eDiscovery managers to track.

## Scope

- **Who**: eDiscovery Managers, eDiscovery Administrators and Reviewers working in cases with premium eDiscovery features turned on.
- **Licence**: premium eDiscovery features, which Learn ties to Office 365 E5, Microsoft 365 E5 or related E5 add-on subscriptions.
- **Clouds**: GCC, GCC High and DoD, as the roadmap record lists them. The Worldwide cloud is covered by roadmap item 558858.
- **Platform**: Web (Microsoft Purview portal).
- **Cases**: premium features are enabled by default for tenants with premium feature access, and can be turned off per case after it is created.

## Governance guidance

### Before rollout
- Check who holds the eDiscovery Manager and eDiscovery Administrator role groups, since they decide who can create the extra review sets.
- Confirm which cases have the **eDiscovery (Premium)** toggle on in Case settings; the 100 limit is a premium limit.
- Tell legal and investigation teams that a case can now hold 100 review sets, and that the 40 million document per case and 1 TB per review set limits still apply.

### At rollout
- Agree with investigation teams when a new matter belongs in a new case rather than another review set, given that spilled content can be removed only by deleting the case.
- Update any scripts that create review sets through the Microsoft Graph create reviewSets operation if they were written to stop at 20.

### After rollout
- Delete any case whose review sets hold spilled content, as the only documented way to remove those items.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can create eDiscovery cases and review sets</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell; the cmdlet adds a mail-enabled security group to the eDiscovery Managers subgroup.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › Role groups for Microsoft Purview solutions › eDiscovery Manager › Edit › Manage eDiscovery Manager › Choose users <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a case has premium eDiscovery features, including review sets</strong><br><small class="controls__note">Per case. The request body sets caseType (standard or premium). Premium features are on by default for tenants with premium feature access. The cases dashboard page says access to premium features isn't governed by this toggle.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Premium features › eDiscovery (Premium) <a href="https://learn.microsoft.com/purview/edisc-settings-cases" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creating a new review set in a case</strong><br><small class="controls__note">Needs an eDiscovery role; eDiscovery Manager is the least privileged option for review sets in the user's own cases.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Searches › search › Add to review set › Add items to review set › Add to a new review set <a href="https://learn.microsoft.com/purview/edisc-search-add-to-review-set" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/reviewSets</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycase-post-reviewsets?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removing review set content by deleting the case</strong><br><small class="controls__note">Deletes searches, review sets and exports in the case and cannot be undone. All hold policies in the case must be deleted first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Actions › Delete case <a href="https://learn.microsoft.com/purview/edisc-settings-cases" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>DELETE /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}</code> <a href="https://learn.microsoft.com/graph/api/security-casesroot-delete-ediscoverycases?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- An eDiscovery Manager can manage only the cases they create; an eDiscovery Administrator can access all cases, manage any case after adding themselves as a member, and configure eDiscovery settings. For delegated access, the Graph operations in the table require the signed-in user to hold a supported Microsoft Purview eDiscovery role.
- The tenant-wide default for new cases is set in the Microsoft Purview portal at **eDiscovery > Settings > eDiscovery > General > eDiscovery (Premium)**. Only eDiscovery Administrators can open it, and it affects new cases only, not existing ones.
- A case can be deleted only after all its hold policies, including those with a status of Off, are deleted.

## Open questions

- Can an administrator set a per-case review set ceiling lower than 100 for organisations that want fewer copies of content per case? Watch the [Limits in eDiscovery](https://learn.microsoft.com/purview/edisc-ref-limits) page.
- Do the US Government clouds share every other premium case limit on the limits page, such as 40 million documents per case? Watch Message center and the limits page.
- Will Microsoft offer a way to remove spilled items from a single review set without deleting the whole case? Watch the [case settings](https://learn.microsoft.com/purview/edisc-settings-cases) page.

<!-- rationale
risk: Low. The change raises a ceiling inside existing premium eDiscovery cases; review set content stays in Microsoft-managed case storage.
cost: Low. Review sets are a premium eDiscovery feature tied to E5 subscriptions, and Microsoft says customers don't pay directly for review set storage; the cost that remains is reviewers' and administrators' time.
impact: Low. Only eDiscovery managers, administrators and reviewers working in premium cases notice the higher ceiling.
-->
