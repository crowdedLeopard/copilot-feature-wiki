---
title: "Microsoft Purview eDiscovery: review set limit per case rises from 20 to 100 (Worldwide)"
slug: "microsoft-purview-ediscovery-review-set-limit-increase-558858"
roadmapId: 558858
topic: "governance"
products: ["Microsoft Purview"]
summary: "eDiscovery cases in the Worldwide cloud can hold up to 100 review sets instead of 20. The change has launched with no setting attached and affects only eDiscovery teams working in cases with premium features."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "none"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "included"
  notes: "Review sets are a premium eDiscovery feature. Users whose data is analysed need Office 365 E5 or Microsoft 365 E5, or E1/E3 with a Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on. No separate licence for the higher limit is published."
audiences: ["compliance","m365-admin"]
tags: ["ediscovery","purview","role-groups","auditing"]
sources:
  - title: "Microsoft 365 Roadmap item 558858"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558858"
    kind: "roadmap"
  - title: "Limits in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-ref-limits"
    kind: "learn"
  - title: "Add search results to a review set in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-add-to-review-set"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Learn about case settings in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-settings-cases"
    kind: "learn"
  - title: "Create and manage cases in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-cases-manage"
    kind: "learn"
  - title: "Configure general settings in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-settings-general"
    kind: "learn"
  - title: "Use the Microsoft Purview eDiscovery API"
    url: "https://learn.microsoft.com/graph/api/resources/security-ediscovery-apioverview?view=graph-rest-1.0"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Billing in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-billing"
    kind: "learn"
  - title: "Manage review sets in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-review-set-manage"
    kind: "learn"
  - title: "Whether premium eDiscovery features, under which the 100 limit is listed, are on for a case (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Audit record of review sets created in eDiscovery cases (ReviewSetAdded) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Audit record of review sets created in eDiscovery cases (ReviewSetAdded) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["ediscovery","microsoft-purview-compliance-portal-ediscovery-advanced-review-set-explorer","role-groups","auditing","microsoft-purview-compliance-portal-ediscovery-premium-cmk-customer-managed-keys-encryptio"]
controls:
  - governs: "Who can create and manage eDiscovery cases and access case data"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Assigning needs Organization Management or the Role Management role. The cmdlet runs in Security & Compliance PowerShell and takes a mail-enabled security group."
  - governs: "Whether premium eDiscovery features, under which the 100 limit is listed, are on for a case"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Case settings > Premium features > eDiscovery (Premium)"
      docs: "https://learn.microsoft.com/purview/edisc-settings-cases"
    api:
      kind: "graph"
      call: "PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0"
    note: "Per case. The request body sets caseType (standard or premium). Another Learn page says access to premium features isn't governed by the case settings toggle."
  - governs: "Audit record of review sets created in eDiscovery cases (ReviewSetAdded)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start date> -EndDate <end date> -Operations ReviewSetAdded"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "ReviewSetAdded is listed under eDiscovery activities on the Audit log activities page."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-01T21:45:13"
changes:
  - date: "2026-11-28"
    note: "New briefing: review sets per eDiscovery case rise from 20 to 100 in the Worldwide cloud; launched, no setting to change."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: eDiscovery Administrators can reach any case's data; default state now Not stated; added pay-as-you-go billing for non-Microsoft 365 AI data in review sets; fuller role group path."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 69 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 65
  unconfirmed: 3
  contradicted: 1
  attempts: 2
  hash: "4e570472866ffe07bc2fae2439cbac53"
---

## What's changing

Microsoft Purview eDiscovery now allows up to 100 review sets in a single case, up from 20. A review set is the working copy of search results that investigators filter, tag, analyse and export; adding search results to one copies the items and their metadata into Microsoft-managed Azure Storage dedicated to the case.

Microsoft's [Limits in eDiscovery](https://learn.microsoft.com/purview/edisc-ref-limits) page lists 100 as the maximum number of review sets per case, in the column for premium eDiscovery feature support. The roadmap item describes the change as an increase from 20 per case to 100 per case, with no setting attached. Microsoft has not explicitly stated the rollout default for the higher review set limit. The same page gives other per-case limits that the roadmap item does not mention: a case holds at most 40 million documents across all its review sets, and each review set is limited to 1 TB.

The roadmap item (558858) covers the Worldwide (Standard Multi-Tenant) cloud on the web, is marked Launched with General Availability, and had a target of April CY2026. Microsoft lists the same change for GCC, GCC High and DoD under a separate roadmap item, 560322, which is also Launched, with a target of May CY2026.

## Why it matters

Large investigations often need separate review sets for different custodians, date ranges or production rounds. With a ceiling of 20, teams had to open extra cases for the same matter; 100 per case lets one case, with one membership list and one set of holds, carry the whole review. The roadmap item attaches no setting to the change, and the limits page already lists the new figure.

The flip side is that each review set is another copy of collected content. Storage is provisioned per case and shared by its review sets, and Microsoft documents that in a data spillage scenario the only way to remove items from a review set is to delete the whole case. A case with many more review sets means more copies to account for when a matter closes or spilled data has to be removed.

## Risk assessment

**Data exposure**
- More review sets per case means more copies of collected mail, chats and files in the case's Microsoft-managed storage. Access is governed by eDiscovery permissions; eDiscovery Administrators can access case data for any case in the organisation, and must add themselves as members to manage a case. Access to review set content is through the Microsoft Purview portal and approved export workflows; Microsoft states there is no customer-accessible storage URL or key.
- Spilled data copied into review sets can only be removed by deleting the case, so a case with dozens of review sets makes a spillage clean-up larger.

**Security & identity**
- No change: the same eDiscovery role groups (eDiscovery Manager, eDiscovery Administrator, Reviewer) decide who can create cases and open review sets.

**Autonomy & actions**
- No change: review sets are created by people adding search results to them; the higher limit does not create anything on its own.

**Change & support**
- Investigators may consolidate matters that were split across several cases. Each addition still runs as a long-running process tracked on the **Process manager** page, and the organisation-wide limits on concurrent processes and daily jobs on the limits page still apply.

## Cost and licensing

**Licence.** Review sets are a premium eDiscovery feature: the Microsoft Graph eDiscovery API overview lists review sets, tagging and analytics as unavailable at the E3/Standard tier. According to [Assign permissions in eDiscovery](https://learn.microsoft.com/purview/edisc-permissions), to analyse a user's data with premium features the user must have Office 365 E5 or Microsoft 365 E5, or an E1 or E3 licence plus a Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on. Administrators, compliance officers and legal staff who work in cases don't need an E5 licence.

**Meter and storage.** Review set content is stored in Microsoft-owned, Microsoft-managed storage, and Microsoft states customers don't see, manage or pay for it directly ([Add search results to a review set](https://learn.microsoft.com/purview/edisc-search-add-to-review-set)). Microsoft's [Billing in eDiscovery](https://learn.microsoft.com/purview/edisc-billing) page separately says that adding non-Microsoft 365 AI data to a review set incurs pay-as-you-go data-storage charges; legacy review-set imports are excluded.

**Not yet published.** Microsoft has published no separate licence or charge for the higher limit itself.

## Scope

- **Who:** eDiscovery managers, eDiscovery administrators and reviewers working in cases with premium eDiscovery features; the 100 limit is listed under premium feature support on the limits page.
- **Cloud:** Worldwide (Standard Multi-Tenant), per this roadmap item. GCC, GCC High and DoD are covered by roadmap item 560322.
- **Platform:** Web (the Microsoft Purview portal).
- **Status:** Launched, General Availability; target was April CY2026.
- **Prerequisites:** a case with premium eDiscovery features and users licensed for them, as set out under Cost and licensing.

## Governance guidance

### Before rollout
- Tell eDiscovery managers and legal teams that a case can now hold up to 100 review sets, so new matters need not be split across cases to stay under 20.
- Check that cases intended for large reviews have premium features on (**Case settings > Premium features**), since the limit is listed for premium feature support.

### At rollout
- Confirm membership of the eDiscovery Manager role group in the Microsoft Purview portal, because its members can create and manage cases and access case data.
- Agree a naming convention for review sets in large cases so that reviewers and exports can tell custodians or production rounds apart.

### After rollout
- Search the audit log for the **ReviewSetAdded** operation to see which cases are accumulating review sets.
- Include review set count in case close-out checks, since items copied into review sets are removed only when the case is deleted.
- Watch cases approaching the 40 million documents per case that the limits page still gives as the ceiling.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can create and manage eDiscovery cases and access case data</strong><br><small>Tenant</small><br><small class="controls__note">Assigning needs Organization Management or the Role Management role. The cmdlet runs in Security &amp; Compliance PowerShell and takes a mail-enabled security group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › Role groups for Microsoft Purview solutions › eDiscovery Manager › Edit › Manage eDiscovery Manager › Choose users <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether premium eDiscovery features, under which the 100 limit is listed, are on for a case</strong><br><small class="controls__note">Per case. The request body sets caseType (standard or premium). Another Learn page says access to premium features isn't governed by the case settings toggle.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Premium features › eDiscovery (Premium) <a href="https://learn.microsoft.com/purview/edisc-settings-cases" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycasesettings-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Audit record of review sets created in eDiscovery cases (ReviewSetAdded)</strong><br><small>Tenant</small><br><small class="controls__note">ReviewSetAdded is listed under eDiscovery activities on the Audit log activities page.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start date&gt; -EndDate &lt;end date&gt; -Operations ReviewSetAdded</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- The review set limit itself has no setting: the limits page lists it as a fixed service limit.
- eDiscovery Managers can only access and manage the cases they create; eDiscovery Administrators can access all cases. Members of the **Reviewer** role group can only access the data in a review set.
- A mail-enabled security group can be added to the eDiscovery Managers subgroup with `Add-RoleGroupMember`, but not to the eDiscovery Administrators subgroup.
- Whether new cases start with premium features is an organisation setting at **eDiscovery > Settings > eDiscovery > General > eDiscovery (Premium)**, which only eDiscovery Administrators can access ([Configure general settings](https://learn.microsoft.com/purview/edisc-settings-general)). It affects only new cases.
- Microsoft's pages disagree on the per-case toggle: the case settings page says to turn on **eDiscovery (Premium)** to use premium features in a case, while the case management page says access to premium features isn't governed by the case settings toggle.

## Open questions

- Does the 100 review set limit apply to limited format cases, which [use the legacy eDiscovery experience](https://learn.microsoft.com/purview/edisc-review-set-manage) for review sets? Watch the [Limits in eDiscovery](https://learn.microsoft.com/purview/edisc-ref-limits) page.
- Will Microsoft raise the 40 million documents per case limit, now shared across up to five times as many review sets?
- What happens to a case holding more than 20 review sets if premium features are turned off for it?
- Which case settings toggle governs access to premium features, given the two Learn pages that disagree?

<!-- rationale
risk: Low. The change raises a ceiling inside existing eDiscovery cases; who can create review sets is still decided by eDiscovery role groups, and review set content stays in Microsoft-managed storage for the case.
cost: None. Microsoft publishes no separate charge for the higher limit itself; it sits under premium eDiscovery features, which already require Office 365 or Microsoft 365 E5 or an eligible add-on. Adding non-Microsoft 365 AI data to a review set is billed pay-as-you-go whatever the limit.
impact: Low. Only eDiscovery managers, administrators and reviewers who work in large cases will notice: they can split collections across more review sets in one case.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The higher limit does not create anything on its own. | Found: Searched: eDiscovery review sets 20 limit split extra cases same investigation automatic create review sets; eDiscovery review sets 100 automatically default. Opened edisc-search-add-to-review-set, edisc-review-set-manage and the roadmap record; none explicitly states this negative. | Fix: Replace 'the higher limit does not create anything on its own' with 'the roadmap describes a limit increase, not an automatic creation workflow'. The supplied roadmap description states only that the limit rises from 20 to 100.
- [unsupported, blocker] controls[1].api; controls[1].governs; Governance controls table / command: PATCH /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/settings with caseType sets whether premium features are on for the case. | Found: Searched: Microsoft Graph ediscoveryCaseSettings caseType premium enable disable premium features case settings toggle. Opened Graph update/resource references and edisc-cases-manage: PATCH changes case type; no passage establishes that it operates the premium-features toggle. | Fix: Set controls[1].api to null and remove 'The request body sets caseType (standard or premium).' from its note and rendered table. The reference documents updating caseType, not enabling premium feature access; retain the existing note about the conflicting UI documentation.
- [unsupported, major] Why it matters / behaviour: With the previous ceiling of 20, teams had to open extra cases for the same matter. | Found: Searched: eDiscovery review sets 20 limit split extra cases same investigation automatic create review sets. Read edisc-ref-limits, edisc-cases-manage, edisc-review-set-manage and roadmap records; none states that teams had to open extra cases rather than organise fewer sets. | Fix: Replace 'With a ceiling of 20, teams had to open extra cases for the same matter' with 'For teams that split a matter across cases to stay below 20 review sets, the higher limit may simplify case organisation'. This is conditional analysis, not an assertion of documented historical necessity.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope: Cloud / record: Separate roadmap item 560322 covers the same increase for GCC, GCC High and DoD. | Found: 560322: "description": "Review set limit per case is increased from 20 per case to 100 per case."; "clouds": ["GCC", "GCC High", "DoD"] | Fix: Add https://www.microsoft.com/microsoft-365/roadmap?id=560322 to sources as a roadmap source titled 'Microsoft 365 Roadmap item 560322'. Its supplied repository record supports the government-cloud facts.
- [supported, minor] Governance controls: organisation premium-features setting / admin-path: The organisation's premium-features default is at eDiscovery > Settings > eDiscovery > General > eDiscovery (Premium). | Found: This setting isn't available for organizations with Microsoft 365 Enterprise E3 subscription. ... Select the eDiscovery solution card, then go to Settings > eDiscovery > General. ... Select or clear the toggle for eDiscovery (Premium). | Fix: Add the cited qualification to this sentence: 'This setting is not available for organisations with a Microsoft 365 Enterprise E3 subscription.' Source: https://learn.microsoft.com/purview/edisc-settings-general. | Source: https://learn.microsoft.com/purview/edisc-settings-general
- [contradicted, minor] Governance guidance: After rollout; Governance controls table / consistency: The checklist asks readers to monitor review-set count and the case document ceiling without a corresponding controls-table row. | Found: Include review set count in case close-out checks ... Watch cases approaching the 40 million documents per case ... [Table rows cover role assignment, premium features and audit search, not case count or document-limit monitoring.] | Fix: The 'Include review set count in case close-out checks' and 'Watch cases approaching the 40 million documents per case' checklist steps have no corresponding control row. Remove those two steps; do not add unverified control rows.
-->
