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
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 80
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "d1d0280fb6fc6262231f11f5b56c4785"
---

## What's changing

Data Security Investigations (DSI) in the Microsoft Purview portal can now query files captured by endpoint data loss prevention (DLP) evidence collection and add them to an investigation. The roadmap item describes it as launching DSI from endpoint DLP alerts, so analysts can review the files behind exfiltration activity faster.

Microsoft Learn describes the mechanism a little differently. Inside an investigation, on the **Search** tab, an investigator selects **Endpoint DLP**, sets a date range (required) and optionally selects users, then runs the search, reviews a pre-ingestion estimate of matched alerts, users, actions and policies, and selects **Add to scope**. Processing starts once items are added to scope. Learn lists no endpoint filter, and describes no launch from an individual DLP alert, so the roadmap's "endpoints" query field and "launch from alerts" wording are not confirmed by Learn.

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
- Searching does not act on devices or files. Adding to scope starts processing, which consumes compute units; AI categorisation and examination are run by analysts afterwards.

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
- Estimate storage and compute cost with the in-product cost estimator on the Data Security Investigations page, and agree an owner for the Azure subscription that bills it.
- Review membership of the Insider Risk Management role group, View-Only DLP Compliance Management role and the Data Security Investigations role groups, using the role group row in the controls table.
- Confirm the endpoint DLP rules you may need to investigate select **Collect original file as evidence**, and that evidence collection is on with Microsoft-managed storage (first row of the controls table).

### At rollout
- Assign investigators to the Data Security Investigations Investigators role group and keep at least one member in Data Security Investigations Admins.
- Run a narrow first search by date range and one or more users, to stay below approximately 3,000 items.

### After rollout
- Review the Pay-as-you-go usage dashboard for storage and compute units per investigation (Data Security Investigations Admins only).
- Delete finished investigations to stop storage charges and remove the copied file content.
- Check the unified audit log for DSI activity by investigators.

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

The usage dashboard is visible only to Data Security Investigations Admins. Global admins must be assigned to a DSI role group to create and access investigations. The Add-RoleGroupMember cmdlet adds members to management role groups in general; the DSI permissions page shows the portal route for DSI role groups.

## Open questions

- Does the roadmap's "endpoints" query field and launch from an alert exist in the product? Learn lists date range and users only. Watch the Data Security Investigations search page.
- Is the capability generally available or still in preview? The roadmap lists both release phases, and Learn does not label the endpoint section either way at the time of writing (November 2026).
- How long does Microsoft-managed evidence storage keep files? The evidence collection page ties availability to retention but gives no period for the managed store.
- Will a compute unit rate for add to scope on endpoint evidence be published separately? Watch the billing page.

<!-- rationale
risk: Medium. Copies of files that matched endpoint DLP policies are pulled into investigations where AI analysis runs, but nothing happens until an admin sets up billing, evidence collection and roles.
cost: Variable. Data Security Investigations bills a pay-as-you-go storage meter (per GB per month) and compute units for AI analysis, with no dedicated plan or licence.
impact: Low. Only admins and investigators who hold Data Security Investigations roles see or use it; end users notice nothing.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing: second paragraph / admin-path: Inside an investigation, the instructions go directly to the Search tab and Endpoint DLP without selecting Summary. | Found: 2. Select Summary from the navigation options at the top of the page. 3. On the Search tab, select Endpoint DLP. | Fix: Replace 'Inside an investigation, on the Search tab, an investigator selects Endpoint DLP' with 'In the Microsoft Purview portal, open Data Security Investigations and an investigation, select Summary, then on the Search tab select Endpoint DLP.' | Source: https://learn.microsoft.com/purview/data-security-investigations-search
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Searching does not act on devices or files. | Found: Searched: Data Security Investigations search does not modify source files devices retention investigation deleted. Read search and overview; search describes querying evidence, but no passage explicitly guarantees no actions on devices or files. | Fix: Replace 'Searching does not act on devices or files' with 'Endpoint DLP search queries data stored by evidence collection.' The latter is stated at https://learn.microsoft.com/purview/data-security-investigations-search.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls: second table row / admin-path: The DSI permissions page gives Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users. | Found: Select Settings in the upper-right corner of the page, select Roles and groups, then select Role groups in the left navigation. | Fix: Keep the cited DSI route, but add: 'The general Purview permissions page instead labels the navigation Settings > Roles and scopes > Role groups.' Cite https://learn.microsoft.com/purview/purview-permissions#manage-role-groups, which uses that label. | Source: https://learn.microsoft.com/purview/data-security-investigations-permissions
- [supported, minor] Risk assessment: Data exposure; Governance guidance: delete investigations / behaviour: Copied investigation data remains stored until the investigation is deleted. | Found: This data is stored until Data Security Investigations administrators or investigators delete the investigation. | Fix: Add https://learn.microsoft.com/purview/data-security-investigations-privacy-faq to sources for the statement that copied data remains stored until investigation deletion. | Source: https://learn.microsoft.com/purview/data-security-investigations-privacy-faq
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Analysts configure and run categorization after Add to scope completes. | Found: When you first open the Analysis page, items aren't categorized. ... Add to scope must complete before you can configure categorization. | Fix: Cite https://learn.microsoft.com/purview/data-security-investigations-ai-analysis#use-categorization for the statement that analysts run categorization afterwards. | Source: https://learn.microsoft.com/purview/data-security-investigations-ai-analysis
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Analysts run examination after Add to scope completes. | Found: Add to scope must complete before you can configure examinations. ... Select Examine to start the AI analysis. | Fix: Cite https://learn.microsoft.com/purview/data-security-investigations-personal-data#analyze-data-for-personal-data for the documented analyst-initiated examination workflow. | Source: https://learn.microsoft.com/purview/data-security-investigations-personal-data
- [supported, minor] Open questions: general availability or preview / absence: The Learn search page does not label its endpoint section as preview or generally available. | Found: Searched: Data Security Investigations endpoint DLP launch alert endpoint filter search date users; evidence collection PowerShell Microsoft storage. Read the search section, which has no preview label; dlp-copy-matched-items-learn explicitly calls the search option preview. | Fix: Replace the second Open questions bullet with 'The roadmap lists General Availability and Preview, and the search page has no preview label; the evidence collection overview still calls the DSI endpoint search option preview.' Cite https://learn.microsoft.com/purview/dlp-copy-matched-items-learn.
- [supported, minor] Open questions: Microsoft-managed evidence retention / absence: The evidence collection getting-started page gives no managed-store retention period. | Found: Searched: Microsoft-managed evidence retention Purview; read getting-started and dlp-copy-matched-items-learn. Getting-started has no managed retention period; the overview gives a 180-day maximum and a separate 30 days on Purview/180 days on Defender XDR row. | Fix: Remove the third Open questions bullet. Its narrow statement about the getting-started page is true, but the linked overview publishes retention information at https://learn.microsoft.com/purview/dlp-copy-matched-items-learn#storing-evidence-when-sensitive-information-is-detected.
- [contradicted, minor] rationale: impact / role: Only admins and investigators with DSI roles see or use the capability. | Found: Only Data Security Investigations Administrators, Investigators, and Reviewers have access to this data in your organization. | Fix: Replace the impact rationale with 'Low. Investigation data is accessible to Data Security Investigations Administrators, Investigators and Reviewers; only Admins and Investigators can create searches and add items.' Cite https://learn.microsoft.com/purview/data-security-investigations-privacy-faq and the existing permissions source. | Source: https://learn.microsoft.com/purview/data-security-investigations-privacy-faq
- [contradicted, minor] Governance guidance: Before rollout, cost estimator; Governance controls / consistency: The governance checklist names the cost estimator, but the controls table has no corresponding row. | Found: Before rollout: 'Estimate storage and compute cost with the in-product cost estimator'. Table rows cover evidence collection, role groups and the usage dashboard, not the estimator. | Fix: Remove 'Estimate storage and compute cost with the in-product cost estimator on the Data Security Investigations page, and' from the first Before rollout bullet, leaving the advice to agree an Azure subscription owner.
- [contradicted, minor] Governance guidance: After rollout, audit; Governance controls / consistency: The governance checklist tells readers to check the unified audit log, but the controls table has no audit row. | Found: After rollout: 'Check the unified audit log for DSI activity by investigators.' The controls table contains no audit-log control. | Fix: Remove the final After rollout bullet, 'Check the unified audit log for DSI activity by investigators.' The supported activity-logging fact can remain in Risk assessment.
- [contradicted, minor] Governance guidance: After rollout, deletion; Governance controls / consistency: The governance checklist tells readers to delete investigations to stop storage charges, but the controls table has no deletion control. | Found: After rollout: 'Delete finished investigations to stop storage charges and remove the copied file content.' Table rows do not include investigation deletion. | Fix: Remove the After rollout bullet, 'Delete finished investigations to stop storage charges and remove the copied file content.' The supported deletion and storage-charge facts can remain in the other sections.
-->
