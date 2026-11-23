---
title: "Microsoft Purview: analyse endpoint DLP evidence files in Data Security Investigations"
slug: "microsoft-purview-data-security-investigations-analyze-files-tied-to-endpoint-dlp-alerts"
roadmapId: 558547
topic: "governance"
products: ["Microsoft Purview"]
summary: "Investigators can query files captured by endpoint DLP and add them to a Data Security Investigations case. It is opt-in, needs evidence collection and pay-as-you-go billing, and is aimed at Purview admins and investigators."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "June CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "consumption"
  notes: "Billing in Data Security Investigations rests on stored data and AI compute capacity, not a dedicated enterprise plan or licence. The evidence collection page points to Microsoft 365 licensing guidance and names no plan."
audiences: ["security","compliance","finops","m365-admin"]
tags: ["data-security-investigations","endpoint-dlp","dlp","purview","insider-risk-management","pay-as-you-go","device-onboarding"]
sources:
  - title: "Microsoft 365 Roadmap 558547"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=558547"
    kind: "roadmap"
  - title: "Search, review, and refine results in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-search"
    kind: "learn"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Get started with collecting files that match data loss prevention policies from devices"
    url: "https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started"
    kind: "learn"
  - title: "Learn about evidence collection for file activities on devices"
    url: "https://learn.microsoft.com/purview/dlp-copy-matched-items-learn"
    kind: "learn"
  - title: "Privacy FAQ for Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-privacy-faq"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can create investigations and add endpoint DLP evidence to scope (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["endpoint-dlp","insider-risk-management","microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i","microsoft-purview-data-loss-prevention-data-security-triage-agent-summaries-and-categoriza","auditing"]
controls:
  - governs: "Whether endpoint DLP evidence files are collected and available to query"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Data Loss Prevention > Endpoint DLP settings > Setup evidence collection for file activities on devices"
      docs: "https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started"
    api: null
    note: "Toggle must be On with Microsoft-managed storage. Each DLP rule also needs Collect original file as evidence selected."
  - governs: "Who can create investigations and add endpoint DLP evidence to scope"
    scope: "group"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Endpoint queries also need the Insider Risk Management role group and View-Only DLP Compliance Management role. The cmdlet page does not name DSI role groups."
  - governs: "Tracking storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Visible only to Data Security Investigations Admins. Reports spend; it does not cap it."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-24T22:58:55"
changes:
  - date: "2026-11-23"
    note: "First briefing: DSI can query endpoint DLP evidence files, with opt-in prerequisites, pay-as-you-go cost and role requirements."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-23"
    note: "Corrected after verification: added the Summary step to the endpoint search route, narrowed one autonomy statement, fixed the impact rationale and open questions, and trimmed checklist items with no controls-table row."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 96 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-23"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 96
  confirmed: 95
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "be7bbc679c98f31abfeac3a08030ed1e"
---

## What's changing

Data Security Investigations (DSI) in the Microsoft Purview portal can now query files captured by endpoint data loss prevention (DLP) evidence collection and add them to an investigation. The roadmap item describes it as launching DSI from endpoint DLP alerts, so analysts can review the files behind exfiltration activity faster.

Microsoft Learn describes the mechanism a little differently. In the Microsoft Purview portal, open Data Security Investigations and an investigation, select **Summary**, then on the **Search** tab select **Endpoint DLP**. The investigator sets a date range (required) and optionally selects users, then runs the search, reviews a pre-ingestion estimate of matched alerts, users, actions and policies, and selects **Add to scope**. Processing starts once items are added to scope. Learn lists no endpoint filter, and describes no launch from an individual DLP alert, so the roadmap's "endpoints" query field and "launch from alerts" wording are not confirmed by Learn.

The data comes from the evidence collection for file activities on devices feature: files that matched endpoint DLP policies when users copied to USB, printed, uploaded to cloud services or used unauthorised apps. Only endpoint DLP is covered; browser DLP and network DLP are not supported for this search option.

The roadmap record shows status Launched, a preview date of June CY2026, a target of September CY2026, release phases General Availability and Preview, and Worldwide (Standard Multi-Tenant) as the cloud.

## Why it matters

This gives investigators the content of the files, not only the alert, so they can judge a leak quickly and look for patterns such as mass exfiltration across many events. Learn describes it as an alternative to triaging individual endpoint DLP alerts one by one.

For a service owner the decision is whether to switch on the plumbing it depends on: evidence collection in Microsoft-managed storage, Data Security Investigations billing and the right role groups. If nobody acts, nothing is configured for this feature, because Learn lists these as prerequisites and says both billing models must be configured before DSI can be used.

## Risk assessment

**Data exposure**
- Files that matched endpoint DLP rules are ingested into an investigation as file content. After items are added to scope the data is static within the investigation, so a copy of sensitive content now lives in the case until the investigation is deleted.
- Learn says some endpoint DLP metadata, such as per-event device details, is not preserved in scope; use the DLP Alerts dashboard or Activity explorer for that context.
- Results depend on evidence retention and upload timing: expired evidence cannot be queried, data can change before ingestion, and searches returning more than approximately 3,000 items might be incomplete.

**Security & identity**
- Querying endpoint evidence needs the standard DSI permissions plus membership of the Insider Risk Management role group and the View-Only DLP Compliance Management role. Compliance Administrator and Organization Management members also receive Data Security Investigation roles automatically.
- Review who holds these role groups before enabling the feature, because they decide who can read captured file content.

**Autonomy & actions**
- Endpoint DLP search queries data stored by evidence collection. Adding to scope starts processing, which consumes compute units; AI categorisation and examination are run by analysts afterwards.

**Change & support**
- Evidence collection data might not appear immediately after a policy match, because availability depends on device connectivity and upload timing. Expect questions about missing files.
- DSI activities are logged automatically in the unified audit log.

## Cost and licensing

Data Security Investigations is billed on stored data and AI capacity, not on a dedicated enterprise plan or licence (Billing in Data Security Investigations; Learn about Data Security Investigations). The evidence collection page refers readers to Microsoft 365 licensing guidance for endpoint evidence collection and names no plan.

- **Storage meter:** pay-as-you-go, per GB per month for data in all investigations. Storage charges start when items are added to an investigation's scope, and stop for an investigation when it is deleted. Storage rates are on the pricing page the billing article links.
- **AI capacity:** pay-as-you-go compute units. The billing article lists add to scope as a processing step whose cost depends on the size of data and extracted text.
- **Setup:** both billing models must be configured before use. Configuration needs an Azure subscription in the same tenant as Microsoft Purview, a resource group, the Global Administrator role and the resource group Owner or Contributor role.
- **Controls on spend:** the billing article recommends Azure budgets and alerts, the in-product cost estimator and the usage dashboard. It does not say use stops when a budget is reached.
- **Indirect:** Microsoft-managed storage for evidence collection has its own usage view under Endpoint DLP settings.

## Scope

Users: investigators and admins with Data Security Investigations role groups. Admins and Investigators can create searches and add items to an investigation; Reviewers cannot. Endpoint queries also need the Insider Risk Management role group and View-Only DLP Compliance Management role.

Prerequisites listed by Learn: devices onboarded to Microsoft Purview, an active endpoint DLP policy, evidence collection enabled with **Collect original file as evidence for all selected file activities on endpoint**, and Microsoft-managed storage configured for evidence collection.

Clouds and platforms: the roadmap lists Worldwide (Standard Multi-Tenant) and Web. Evidence collection supports Windows 10/11 devices, and macOS devices are marked preview on the evidence collection page.

## Governance guidance

### Before rollout
- Agree an owner for the Azure subscription that bills it.
- Review membership of the Insider Risk Management role group, View-Only DLP Compliance Management role and the Data Security Investigations role groups, using the role group row in the controls table.
- Confirm the endpoint DLP rules you may need to investigate select **Collect original file as evidence**, and that evidence collection is on with Microsoft-managed storage (first row of the controls table).

### At rollout
- Assign investigators to the Data Security Investigations Investigators role group and keep at least one member in Data Security Investigations Admins.
- Run a narrow first search by date range and one or more users, to stay below approximately 3,000 items.

### After rollout
- Review the Pay-as-you-go usage dashboard for storage and compute units per investigation (Data Security Investigations Admins only).

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether endpoint DLP evidence files are collected and available to query</strong><br><small>Tenant</small><br><small class="controls__note">Toggle must be On with Microsoft-managed storage. Each DLP rule also needs Collect original file as evidence selected.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Data Loss Prevention › Endpoint DLP settings › Setup evidence collection for file activities on devices <a href="https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create investigations and add endpoint DLP evidence to scope</strong><br><small>Group</small><br><small class="controls__note">Endpoint queries also need the Insider Risk Management role group and View-Only DLP Compliance Management role. The cmdlet page does not name DSI role groups.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tracking storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Visible only to Data Security Investigations Admins. Reports spend; it does not cap it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Evidence collection has two parts: a tenant setting under Endpoint DLP settings and a per-rule option, **Collect original file as evidence for all selected file activities on Endpoint**, in the DLP rule's Incident reports section. Both must be in place for data to be queryable.

The usage dashboard is visible only to Data Security Investigations Admins. Global admins must be assigned to a DSI role group to create and access investigations. The Add-RoleGroupMember cmdlet adds members to management role groups in general; the DSI permissions page shows the portal route for DSI role groups. The general Purview permissions page labels the same navigation Settings > Roles and scopes > Role groups.

## Open questions

- Does the roadmap's "endpoints" query field and launch from an alert exist in the product? Learn lists date range and users only. Watch the Data Security Investigations search page.
- The roadmap lists General Availability and Preview, and the search page has no preview label; the evidence collection overview still calls the DSI endpoint search option preview.
- Will a compute unit rate for add to scope on endpoint evidence be published separately? Watch the billing page.

<!-- rationale
risk: Medium. Copies of files that matched endpoint DLP policies are pulled into investigations where AI analysis runs, but nothing happens until an admin sets up billing, evidence collection and roles.
cost: Variable. Data Security Investigations bills a pay-as-you-go storage meter (per GB per month) and compute units for AI analysis, with no dedicated plan or licence.
impact: Low. Investigation data is accessible to Data Security Investigations Administrators, Investigators and Reviewers; only Admins and Investigators can create searches and add items.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Setup / role: The billing setup's AI-capacity role requirements omit a DSI Admins membership qualification. | Found: To configure the AI capacity for Data Security Investigations, you must be a member of the Data Security Investigations Admins role group. | Fix: Keep the listed billing prerequisites and append to the Setup bullet: 'Configuring AI capacity also requires membership of the Data Security Investigations Admins role group.' The requirement is stated at https://learn.microsoft.com/purview/data-security-investigations-billing#ai-capacity. | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: defaultState; summary; Why it matters; rationale: risk / default: The capability is admin-opt-in because evidence collection and DSI billing must be configured before use. | Found: Before you can use Data Security Investigations in your organization, you must configure both billing models. | Fix: Keep admin-opt-in, but replace 'If nobody acts, nothing is configured for this feature' with 'Use requires configured DSI billing and endpoint evidence collection; tenants that already meet these prerequisites need no additional endpoint-search configuration.' Cite https://learn.microsoft.com/purview/dlp-copy-matched-items-learn, which states that no additional configuration is required beyond enabling evidence collection. | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Analysts run categorisation after Add to scope completes. | Found: When you first open the Analysis page, items aren't categorized. Configure categorization first because it's helpful to start your triage by grouping items by risk. Add to scope must complete before you can configure categorization. | Fix: Add https://learn.microsoft.com/purview/data-security-investigations-ai-analysis to sources for the statement about analysts running categorisation after ingestion. | Source: https://learn.microsoft.com/purview/data-security-investigations-ai-analysis
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Analysts run examination after Add to scope completes. | Found: After Add to scope completes for the data items in the investigation, start using AI-related tools to help narrow the focus of your investigation to only the most impactful and critical items. Use built-in and custom examination areas for selected items. | Fix: Add https://learn.microsoft.com/purview/data-security-investigations-workflow to sources for the statement about examination after Add to scope. | Source: https://learn.microsoft.com/purview/data-security-investigations-workflow
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: The evidence collection setup page links to Microsoft 365 licensing guidance without naming a plan for endpoint evidence collection. | Found: For information on licensing, see Microsoft 365 Enterprise Plans; Microsoft 365 Service Descriptions. See the prerequisites licensing requirements for Microsoft Entra ID P1 or P2 needed to create custom role-based access control (RBAC). | Fix: Replace 'names no plan' with 'names no Microsoft 365 plan for evidence collection; it separately notes Microsoft Entra ID P1 or P2 for creating custom RBAC' in licensing.notes and Cost and licensing. | Source: https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started
- [supported, minor] Cost and licensing: Storage meter / cost: Deleting an investigation stops charges for its associated storage. | Found: When you delete an investigation, you stop paying for the associated data storage amount. The charges are prorated to the number of days the data was stored in the billing cycle. | Fix: Append: 'Charges are prorated by days stored; deleting an investigation after 00:00 UTC still incurs storage charges for the full day.' This qualification is in https://learn.microsoft.com/purview/data-security-investigations-billing. | Source: https://learn.microsoft.com/purview/data-security-investigations-billing
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Evidence collection is configured at Microsoft Purview portal > Settings > Data Loss Prevention > Endpoint DLP settings > Setup evidence collection for file activities on devices. | Found: Choose Data Loss Prevention. Select Endpoint DLP settings. Expand Setup evidence collection for file activities on devices and set the toggle to On. Under Select storage type, choose Microsoft managed storage. | Fix: Extend controls[0].ui.path to 'Settings > Data Loss Prevention > Endpoint DLP settings > Setup evidence collection for file activities on devices > On > Select storage type > Microsoft managed storage'. The printed route is correct but stops before the toggle and storage choice. | Source: https://learn.microsoft.com/purview/dlp-copy-matched-items-get-started
-->
