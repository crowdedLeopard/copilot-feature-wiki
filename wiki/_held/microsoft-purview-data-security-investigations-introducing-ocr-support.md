---
title: "Microsoft Purview Data Security Investigations: OCR extracts text from images for AI analysis"
slug: "microsoft-purview-data-security-investigations-introducing-ocr-support"
roadmapId: 561489
topic: "governance"
products: ["Microsoft Purview"]
summary: "Data Security Investigations now runs optical character recognition on supported images added to an investigation, so their text joins AI analysis. It runs automatically; admins should brief investigators and watch compute unit use."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "variable"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Data Security Investigations is billed pay-as-you-go on a storage meter (GB per month) and Data Security Investigations Compute Units, not through a licence plan. Microsoft states automatic OCR processing is not an additional charge."
audiences: ["security","compliance","finops"]
tags: ["purview","data-security-investigations","ocr","pay-as-you-go","role-groups","auditing"]
sources:
  - title: "Microsoft 365 Roadmap 561489"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561489"
    kind: "roadmap"
  - title: "Supported file types in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-ref-supported-file-types"
    kind: "learn"
  - title: "Learn about AI analysis in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-ai"
    kind: "learn"
  - title: "Manage investigation scopes in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-scope"
    kind: "learn"
  - title: "Use AI analysis in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-ai-analysis"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Learn about optical character recognition in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/ocr-learn-about"
    kind: "learn"
  - title: "Learn about search and analytics settings in eDiscovery cases"
    url: "https://learn.microsoft.com/purview/edisc-settings-search-analytics"
    kind: "learn"
  - title: "Tutorial: Create and manage budgets"
    url: "https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Who can add items to an investigation scope and run AI analysis on them (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Audit records of Data Security Investigations activity, including Add to scope and vectorisation jobs (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-introducing-integration-with-data-security","microsoft-purview-data-security-investigations-analyze-files-tied-to-endpoint-dlp-alerts","microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i","auditing"]
controls:
  - governs: "Whether Data Security Investigations runs OCR on images added to an investigation"
    scope: "tenant"
    ui: null
    api: null
    note: "OCR runs automatically during data preparation. The tenant-level Purview OCR setting lists DLP, insider risk management, information protection and records management as its solutions, not DSI."
  - governs: "Who can add items to an investigation scope and run AI analysis on them"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Admins and Investigators manage scope; Reviewers run vector search, categorisation and examination. Compliance Administrator and Organization Management include the DSI Admin role."
  - governs: "Which items in an investigation are prepared for AI analysis"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Investigations > investigation > Analysis > item > Actions"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-scope"
    api: null
    note: "Per investigation, by investigators: exclude the item from AI analysis under Actions. Automatic vectorisation runs during Add to scope."
  - governs: "Storage and compute unit spend per investigation"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Data Security Investigations > Usage dashboard"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    api: null
    note: "Reporting only; does not stop spend. Data Security Investigations Admin role only; data can take up to 48 hours to appear. Export gives per-job consumed units."
  - governs: "Audit records of Data Security Investigations activity, including Add to scope and vectorisation jobs"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "DSI operations include DSIPurviewSearchAddToEvidenceSetJobSubmitted and DSIInvestigationVectorizationJobSubmitted."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-14T22:41:38"
changes:
  - date: "2026-11-26"
    note: "New briefing: OCR in Data Security Investigations runs automatically on Add to scope, at no additional OCR charge, with role group, exclusion, usage and audit controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 79 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: removed the unsupported 'no new sign-in, connection or permission' line, added the DSI Admins requirement for AI capacity, completed the item-exclusion path, and narrowed the tenant OCR note."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 73 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 72
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "cca175c0ec9d40d9d9df1e165eb57abc"
---

## What's changing

Microsoft Purview Data Security Investigations (DSI, the Purview tool for scoping and analysing data involved in a security incident) now extracts text from images with optical character recognition (OCR) and adds it to the investigation's data. Microsoft's file-types page for DSI says OCR text extraction "occurs automatically during data preparation and the extracted text is vectorized for use in AI-based analysis tools", and that extraction of images is part of adding items to an investigation scope.

The DSI file-types page lists BMP, EMF, GIF, JPEG, PNG, SVG, TIFF, DWG/DXF and WMF images as supported for OCR text extraction. The DSI AI analysis page describes it differently: "For JPEG, PNG, and scanned PDF files, Optical Character Recognition (OCR) automatically extracts text from images before vectorization." The two pages do not give the same list, and only the second names scanned PDFs.

OCR rides on automatic vectorisation, which Microsoft introduced for new investigations from June 2026. For investigations created before June 2026, the scope page says that after August 2026 the **Prepare for AI** action is removed, and items that were never prepared must have **Add to scope** rerun to be vectorised; rerunning does not create duplicate copies or extra storage charges.

The roadmap item is **Launched**, with a preview date of May CY2026 and a target date of July CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Text inside screenshots, scanned forms and diagrams now becomes searchable by meaning in an investigation, so vector search, categorisation and examination can surface sensitive data that a keyword search over the item's text would miss. For a security team this improves coverage of incidents that involve photographed or screenshotted data. In tenants that use DSI, this happens on every Add to scope with no setting to change; tenants that have not set up DSI billing are not affected.

The cost side needs watching rather than a decision. Microsoft says OCR itself is not an extra charge, but the billing page lists "Size of data and extracted text" as what drives compute units for Add to scope, so investigations heavy in images may consume more compute units than before. Expect the usage dashboard to be the place where this shows.

## Risk assessment

**Data exposure**
- Text in images becomes vectorised data in the investigation, reachable by anyone in the Data Security Investigations Reviewers role group through vector search, categorisation and examination. Membership of the DSI role groups is the control (see the controls table).
- Compute units are processed in Azure datacentres in the location chosen when AI capacity is set up (ANZ, EU, UK or US), with an opt-in to process anywhere; OCR runs within this same data preparation step.

**Security & identity**
- Who can add items to a scope is still decided by the DSI Admins and Investigators role groups, and the Compliance Administrator and Organization Management role groups include the DSI Admin role.

**Autonomy & actions**
- OCR runs automatically on every Add to scope. Microsoft Learn documents no setting to turn it off for DSI at the time of writing (November 2026); investigators can exclude individual items from AI analysis.

**Change & support**
- Investigations created before June 2026 need **Add to scope** rerun after August 2026 for unprepared items to be vectorised, and with them any image text.
- The two Microsoft pages give different lists of OCR-supported formats, so investigators may expect text from file types that are not processed.

## Cost and licensing

- **Licence:** the DSI billing page says billing "isn't based on a dedicated enterprise plan or license". Using DSI requires an Azure subscription and resource group in the same tenant, with both billing models configured.
- **Meters:** storage is billed pay-as-you-go per GB per month for data in all investigations; AI work is billed in Data Security Investigations Compute Units, paying only for the units used. The billing page sends readers to the Azure Purview pricing page for storage rates.
- **This feature:** the DSI file-types page states that "automatic OCR processing isn't an additional charge for your organization". OCR runs inside Add to scope, whose compute use the billing page ties to the size of data and extracted text; Microsoft does not publish how much OCR text adds.
- **Spend controls:** the **Usage dashboard** shows storage and compute units per investigation (controls table). It reports spend and does not stop it. The billing page recommends Azure budgets and alerts on the DSI resource group; these alert on spend and are not documented as stopping it.
- **Indirect:** admin time to brief investigators and to rerun Add to scope on older investigations.

## Scope

- **Who:** members of the DSI role groups. Admins and Investigators can add items to an investigation scope; Reviewers can run vector searches, categorisation and examination.
- **Roles to configure DSI billing:** Global Administrator plus Owner or Contributor on the Azure resource group; configuring AI capacity also requires membership of the Data Security Investigations Admins role group.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Platform:** web (Microsoft Purview portal).
- **Prerequisites:** DSI storage meter and AI capacity configured; supported image formats as listed on the DSI file-types page.
- **Other OCR configurations:** the tenant-level Purview OCR setting, which is set up through Microsoft Syntex pay-as-you-go billing and serves DLP, insider risk management, information protection and records management; and eDiscovery OCR, which is enabled per case.

## Governance guidance

### Before rollout
- Check membership of the Data Security Investigations Admins, Investigators and Reviewers role groups in the Microsoft Purview portal, since Reviewers can now query text taken from images.
- Tell investigators which image formats Microsoft lists for OCR and that the two Learn pages differ on scanned PDFs.

### At rollout
- Rerun **Add to scope** on investigations created before June 2026 whose items were never prepared for AI, so their images are processed.
- Exclude images that should not be analysed from an investigation through **Actions** on the Analysis tab.

### After rollout
- Review the **Usage dashboard** for compute unit use on the Add to scope process in image-heavy investigations.
- Search the audit log for DSIPurviewSearchAddToEvidenceSetJobSubmitted and DSIInvestigationVectorizationJobSubmitted to see who added data and started vectorisation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Data Security Investigations runs OCR on images added to an investigation</strong><br><small>Tenant</small><br><small class="controls__note">OCR runs automatically during data preparation. The tenant-level Purview OCR setting lists DLP, insider risk management, information protection and records management as its solutions, not DSI.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can add items to an investigation scope and run AI analysis on them</strong><br><small>Tenant</small><br><small class="controls__note">Admins and Investigators manage scope; Reviewers run vector search, categorisation and examination. Compliance Administrator and Organization Management include the DSI Admin role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which items in an investigation are prepared for AI analysis</strong><br><small class="controls__note">Per investigation, by investigators: exclude the item from AI analysis under Actions. Automatic vectorisation runs during Add to scope.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Investigations › investigation › Analysis › item › Actions <a href="https://learn.microsoft.com/purview/data-security-investigations-scope" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Storage and compute unit spend per investigation</strong><br><small>Tenant</small><br><small class="controls__note">Reporting only; does not stop spend. Data Security Investigations Admin role only; data can take up to 48 hours to appear. Export gives per-job consumed units.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Data Security Investigations › Usage dashboard <a href="https://learn.microsoft.com/purview/data-security-investigations-billing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit records of Data Security Investigations activity, including Add to scope and vectorisation jobs</strong><br><small>Tenant</small><br><small class="controls__note">DSI operations include DSIPurviewSearchAddToEvidenceSetJobSubmitted and DSIInvestigationVectorizationJobSubmitted.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

There is no OCR-specific switch for DSI in Microsoft Learn at the time of writing (November 2026): OCR follows from adding items to a scope, so the role groups decide who can trigger it. The tenant OCR page does not name DSI in its supported-solutions table, but its summary says configured OCR is available to the entire Microsoft Purview stack; it does not explain how that statement relates to DSI automatic OCR.

Item exclusion is an investigator action inside each investigation, not a tenant policy. The scope page says excluded items are not prepared for AI analysis, but automatic vectorisation runs during Add to scope, so exclude before relying on it. The Usage dashboard is open only to the Data Security Investigations Admin role, and its data can lag by up to 48 hours. To stop all DSI billing, the billing page says to disable both meters, which deletes all investigations irreversibly. See [/concepts/auditing/](/concepts/auditing/) for audit retention.

## Open questions

- Does the tenant-level Purview OCR setting, or its included and excluded groups, have any effect on OCR in Data Security Investigations? Watch the OCR and DSI Learn pages.
- Which formats are processed: does OCR in DSI cover scanned PDFs and images embedded in Office files or email attachments, given the two Learn pages differ?
- How many compute units does OCR-extracted text add to Add to scope, and does the in-product cost estimator account for it?
- Does excluding an item after Add to scope stop OCR on it, or has extraction already run by then?

<!-- rationale
risk: Low. OCR works only on items an investigator has already added to an investigation scope, and the extracted text is used by the investigation's AI tools, which the Data Security Investigations role groups already govern.
cost: Variable. Microsoft says automatic OCR processing is not an additional charge, but it runs inside Add to scope, which is billed on the pay-as-you-go storage meter and Data Security Investigations Compute Units.
impact: Low. Only investigators and reviewers working in Data Security Investigations notice: image text now appears in vector search, categorisation and examination results.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Risk assessment: Data exposure, first bullet / role: An investigation's vectorised image text is reachable by anyone in the Data Security Investigations Reviewers role group. | Found: If you're not assigned to the Data Security Investigations Admins role group, you can only view investigations you're assigned to as an investigator or reviewer. | Fix: Replace 'reachable by anyone in the Data Security Investigations Reviewers role group' with 'reachable by members of the Data Security Investigations Reviewers role group who are assigned to that investigation'. Cite https://learn.microsoft.com/purview/data-security-investigations-investigation for this qualification. | Source: https://learn.microsoft.com/purview/data-security-investigations-investigation
-->
