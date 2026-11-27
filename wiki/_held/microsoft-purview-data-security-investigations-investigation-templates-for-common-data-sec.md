---
title: "Microsoft Purview Data Security Investigations: pre-built search templates for common scenarios"
slug: "microsoft-purview-data-security-investigations-investigation-templates-for-common-data-sec"
roadmapId: 560326
topic: "governance"
products: ["Microsoft Purview"]
summary: "Investigators in Data Security Investigations get pre-configured search templates that need only a user or site as input. No admin switch is documented; check who holds DSI roles and watch pay-as-you-go spend."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "variable"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Microsoft's billing page says Data Security Investigations is billed on stored data and AI compute, not on a plan or licence: a pay-as-you-go storage meter per GB per month and DSI compute units. No template-specific rate is published."
audiences: ["security","compliance","finops"]
tags: ["purview","data-security-investigations","role-groups","auditing","pay-as-you-go"]
sources:
  - title: "Search, review, and refine results in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-search"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Use the Activity history in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-activity-history"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 560326"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560326"
    kind: "roadmap"
  - title: "Who can create searches and add items to investigations (DSI role group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-notification-and-improved-search-capabiliti","microsoft-purview-data-security-investigations-ai-analysis-enhancements","microsoft-purview-data-security-investigations-analyze-files-tied-to-endpoint-dlp-alerts","role-groups","auditing"]
controls:
  - governs: "Tenant-wide switch for investigation templates"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no template setting at the time of writing (November 2026); who can search is set by DSI role groups."
  - governs: "Who can create searches and add items to investigations (DSI role group membership)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Admins and Investigators can create searches; Reviewers cannot. Changes can take up to 30 minutes to apply. Run in Security & Compliance PowerShell."
  - governs: "Storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Data Security Investigations Admin role only; billing data can take up to 48 hours to appear. A view, not a cap."
  - governs: "Searching audit records of DSI search activity"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Operations include DSIPurviewSearchAdded and DSIPurviewSearchAddToEvidenceSetJobSubmitted. Needs Audit Logs or View-Only Audit Logs."
confidence: "low"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-15T23:00:45"
changes:
  - date: "2026-11-27"
    note: "New briefing: search templates in Data Security Investigations, with role group, spend and audit controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 71
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "c24df40c40d130d10e2a498a514d8cb9"
---

## What's changing

Microsoft has added pre-built search templates to Microsoft Purview Data Security Investigations (DSI), the Purview solution in which investigators search Microsoft 365 content and run AI analysis on it after a data security incident. According to the roadmap item, a template is a pre-configured search query for a common data security scenario: the investigator selects a template, provides minimal inputs such as a user or a site, and the search is configured and ready to run, instead of being built by hand.

Microsoft Learn does not describe templates yet, so what this page says about their behaviour is the roadmap's description. At the time of writing (November 2026), the Learn page for DSI search lists three options on an investigation's **Search** tab (**Query builder**, **Audit** and **Endpoint DLP**) and offers example Keyword Query Language (KeyQL) queries to use "as starting points", but names no templates. Which scenarios the templates cover, and whether investigators can see or edit the query a template builds, is not documented.

The roadmap item lists the feature as Launched, in General Availability, with a target of June CY2026, for Worldwide (Standard Multi-Tenant) on the web. The roadmap's Launched status and Learn's silence disagree, so confirm on an investigation's **Search** tab in your own tenant that templates are there.

## Why it matters

Templates lower the effort of scoping an investigation, so expect investigators to start searches faster and more often. They do not change who can search: Learn grants creating searches and adding items to an investigation to the DSI Admins and Investigators role groups, and the roadmap describes no new role. What changes is how quickly a search can be pointed at one person's content or one site, and DSI starts charging for storage once results are added to an investigation's scope.

Microsoft has not stated a default or an admin switch for templates; the roadmap presents them as something an investigator selects. No source says existing investigations, searches or permissions change. The decisions for a service owner are whether the right people sit in the role groups that can search, and whether DSI spend is being watched.

## Risk assessment

**Data exposure**
- A template scoped to a user or site reaches the same content as any DSI search of that data source: mailbox, Teams chats and OneDrive for a user, documents for a site. Learn states that DSI searches respect compliance boundaries set with search permissions filters, so a scoped investigator sees results only inside their boundary.
- Adding results to scope copies the items to an Azure Storage location, where they are reindexed for analysis. A quicker search means more copies unless completed investigations are deleted.

**Security & identity**
- No new role is described. Creating searches is a permission of the DSI Admins and Investigators role groups; Reviewers do not have it. The Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management role groups also include DSI roles, so check their membership too.

**Autonomy & actions**
- The roadmap describes a template as configuring a search that is then ready to run; it describes no scheduled or automatic searches.

**Change & support**
- The scenarios and queries inside the templates are not documented, so investigators should read the generated query and its estimate on **Review estimates** before adding results to scope.
- DSI activity is recorded in the unified audit log, including **DSI search added** (DSIPurviewSearchAdded). Whether a template search is logged differently from a hand-built one is not documented.

## Cost and licensing

**Licence.** Microsoft's [DSI billing page](https://learn.microsoft.com/purview/data-security-investigations-billing) says billing "is based solely on" stored data and the computing capacity for AI analysis, and "isn't based on a dedicated enterprise plan or license".

**Meters.**
- **Storage meter**: pay-as-you-go, per gigabyte (GB) per month for data in all investigations, billed through a linked Azure subscription. Storage charges start when items are added to an investigation's scope, and stop for an investigation's data when it is deleted.
- **DSI Compute Units**: pay-as-you-go for AI capacity; you pay only for the compute units used. **Add to scope** (including data preparation for AI analysis) is one of the processes that drive compute unit cost.

A search started from a template is billed like any other once its results are added to scope. Rates are on Azure's Microsoft Purview pricing page, which the billing page links to. Microsoft publishes no separate charge or meter for templates at the time of writing (November 2026).

**Spend controls.** The billing page recommends Azure budgets for the DSI resource group and alerts when spending approaches thresholds such as 50%, 75% or 90%; it does not describe these as stopping use. Per-investigation storage and compute appear on the DSI **Usage dashboard** (see the controls table).

**Indirect costs.** Investigator time to check what each template searches, and admin time reviewing role groups.

## Scope

- **Who**: members of the DSI Admins and Investigators role groups, and of the Purview role groups that include DSI roles. Global admins must be added to a DSI role group to create and access investigations.
- **Prerequisites**: DSI must already be set up; Microsoft says both billing models must be configured before DSI can be used, which needs an Azure subscription in the same tenant as Microsoft Purview, a resource group, the Global Administrator role and the resource group Owner or Contributor role.
- **Data sources**: analysts select a user or group and scope searches to those data sources; searches respect compliance boundaries.
- **Clouds and platforms**: Worldwide (Standard Multi-Tenant) on the web, as the roadmap item lists. No US Government cloud is listed on the roadmap item.
- **Rollout**: Launched, General Availability, June CY2026, per the roadmap item.

## Governance guidance

### Before rollout
- Review who is in the Data Security Investigations Admins, Investigators and Reviewers role groups, and in the Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management role groups, in the Microsoft Purview portal.
- Agree with investigators that a template's query and its estimate are read on **Review estimates** before **Add to scope**, because adding to scope starts storage charges.

### At rollout
- Open an investigation's **Search** tab to confirm templates appear, and record which scenarios they cover.
- Run one template against a test user or site and compare its scope estimate with a hand-built query for the same scenario.

### After rollout
- Check storage and compute unit use per investigation on the DSI **Usage dashboard** each month.
- Search the audit log for **DSI search added** and **Submitted DSI search add to evidence set job** to see who is creating searches and adding data to scope.
- Delete completed investigations to stop their storage charges, after exporting anything you need to keep.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for investigation templates</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no template setting at the time of writing (November 2026); who can search is set by DSI role groups.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create searches and add items to investigations (DSI role group membership)</strong><br><small>Tenant</small><br><small class="controls__note">Admins and Investigators can create searches; Reviewers cannot. Changes can take up to 30 minutes to apply. Run in Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Data Security Investigations Admin role only; billing data can take up to 48 hours to appear. A view, not a cap.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Searching audit records of DSI search activity</strong><br><small>Tenant</small><br><small class="controls__note">Operations include DSIPurviewSearchAdded and DSIPurviewSearchAddToEvidenceSetJobSubmitted. Needs Audit Logs or View-Only Audit Logs.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Microsoft Learn documents no setting that turns templates on or off at the time of writing (November 2026). Access follows the DSI role groups: changes can take up to 30 minutes to apply.
- DSI searches respect [compliance boundaries](https://learn.microsoft.com/purview/edisc-compliance-boundaries) set with search permissions filters, which limit the locations a scoped investigator can search; they are configured outside DSI.
- The **Usage dashboard** is open to the Data Security Investigations Admin role, and billing data can take up to 48 hours to appear.
- Searching the audit log needs the **Audit Logs** or **View-Only Audit Logs** role.

## Open questions

- Which scenarios do the templates cover, and can an organisation edit them or add its own? Watch the DSI search page on Microsoft Learn.
- Can investigators see and change the query a template builds before running it?
- Will Microsoft add a tenant setting or role permission to hide templates from some investigators?
- Will searches started from a template be distinguishable from hand-built searches in the unified audit log?
- Will templates reach GCC, GCC High or DoD tenants? Watch the roadmap item and Message center.

<!-- rationale
risk: Low. Templates pre-fill searches inside Data Security Investigations; who can create searches is still decided by the existing DSI role groups, and searches respect compliance boundaries.
cost: Variable. Microsoft publishes no separate charge for templates, but results added to an investigation's scope are billed on the DSI pay-as-you-go storage meter (per GB per month) and use DSI compute units.
impact: Low. Only members of the Data Security Investigations role groups who build searches notice the change.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Change & support; Governance guidance: Before rollout / admin-path: Investigators can read a template's generated query and its estimate on Review estimates before Add to scope. | Found: Searched: "Data Security Investigations" "templates" "Review estimates" query. Opened DSI search: Review estimates documents statistics; query editing is in Query builder. No passage documents viewing a generated template query or the template-specific review route. | Fix: Replace the Change & support bullet with: 'The scenarios and queries inside templates are not documented; confirm what a template searches before adding its results to scope.' Replace the Before rollout bullet with: 'Agree with investigators to confirm a template's scope before adding results, because adding to scope starts storage charges.' Do not direct readers to view a generated template query on Review estimates; https://learn.microsoft.com/purview/data-security-investigations-search documents scope and sample statistics there, not template-query visibility.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: After rollout; controls / consistency: The checklist tells readers to delete completed investigations to stop storage charges, but the controls table has no investigation-deletion row. | Found: Delete completed investigations to stop their storage charges, after exporting anything you need to keep. | Controls: template switch; DSI role group membership; usage dashboard; audit search. | Fix: Remove the final After rollout checklist bullet about deleting investigations; the existing Cost and licensing paragraph already explains the storage consequence. No additional control row is requested.
-->
