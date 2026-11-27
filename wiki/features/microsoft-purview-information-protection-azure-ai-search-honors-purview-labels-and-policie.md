---
title: "Azure AI Search: enforce Microsoft Purview sensitivity labels at indexing and query time"
slug: "microsoft-purview-information-protection-azure-ai-search-honors-purview-labels-and-policie"
roadmapId: 534610
topic: "governance"
products: ["Microsoft Purview"]
summary: "Azure AI Search (now Foundry IQ) indexers can ingest Purview sensitivity labels and filter results by label rights. Administrators must opt in and grant privileged roles; Learn marks it preview."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "The search service is billed per Search Unit hour (Dedicated) or Compute Unit hour and indexed GB (Serverless). A Purview licence requirement specific to this feature is not yet published."
audiences: ["security","compliance","service-owner"]
tags: ["azure-ai-search","purview","sensitivity-labels","information-protection","oversharing","auditing"]
sources:
  - title: "Use a Foundry IQ (Azure AI Search) indexer to ingest Microsoft Purview sensitivity labels and enforce document-level security (preview)"
    url: "https://learn.microsoft.com/azure/search/search-indexer-sensitivity-labels"
    kind: "learn"
  - title: "Query-time enforcement of Microsoft Purview sensitivity labels in Foundry IQ (Azure AI Search) (preview)"
    url: "https://learn.microsoft.com/azure/search/search-query-sensitivity-labels"
    kind: "learn"
  - title: "Plan and manage costs of a Foundry IQ (Azure AI Search) service"
    url: "https://learn.microsoft.com/azure/search/search-sku-manage-costs"
    kind: "learn"
  - title: "Search the audit log"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Get started with sensitivity labels"
    url: "https://learn.microsoft.com/purview/get-started-with-sensitivity-labels"
    kind: "learn"
  - title: "Configure usage rights for the Azure Rights Management service"
    url: "https://learn.microsoft.com/purview/rights-management-usage-rights"
    kind: "learn"
  - title: "Data Sources - Create Or Update"
    url: "https://learn.microsoft.com/rest/api/searchservice/data-sources/create-or-update?view=rest-searchservice-2026-11-01-preview"
    kind: "docs"
  - title: "Indexes - Create Or Update"
    url: "https://learn.microsoft.com/rest/api/searchservice/indexes/create-or-update?view=rest-searchservice-2026-11-01-preview"
    kind: "docs"
  - title: "Microsoft 365 Roadmap item 534610"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=534610"
    kind: "roadmap"
videos: []
related: ["sensitivity-labels","auditing"]
controls:
  - governs: "Whether an index enforces Purview sensitivity labels"
    scope: "other"
    ui: null
    api:
      kind: "rest"
      call: "PUT {endpoint}/indexes('{indexName}')?api-version=2026-11-01-preview"
      docs: "https://learn.microsoft.com/rest/api/searchservice/indexes/create-or-update?view=rest-searchservice-2026-11-01-preview"
    note: "The request body sets purviewEnabled; it must be true when the index is created and cannot be changed later. Preview API."
  - governs: "Whether the indexer extracts sensitivity labels from a data source"
    scope: "other"
    ui: null
    api:
      kind: "rest"
      call: "PUT {endpoint}/datasources('{dataSourceName}')?api-version=2026-11-01-preview"
      docs: "https://learn.microsoft.com/rest/api/searchservice/data-sources/create-or-update?view=rest-searchservice-2026-11-01-preview"
    note: "The request body adds sensitivityLabel to indexerPermissionOptions. Preview API. The indexer setup article documents the sensitivityLabel value; the 2026-11-01-preview REST reference's IndexerPermissionOption enumeration does not list it."
  - governs: "Which Purview roles the search service's managed identity holds"
    scope: "app"
    ui: null
    api:
      kind: "powershell"
      call: "New-EntraServicePrincipalAppRoleAssignment -ServicePrincipalId <managed-identity-object-id> -PrincipalId <managed-identity-object-id> -ResourceId <resource-service-principal-id> -Id <app-role-id>"
      docs: "https://learn.microsoft.com/azure/search/search-indexer-sensitivity-labels"
    note: "Run by a Global Administrator or Privileged Role Administrator. Grants Content.SuperUser and UnifiedPolicy.Tenant.Read to the system-assigned identity only."
  - governs: "Review of elevated-read and label-related activity in the audit log"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog"
      docs: "https://learn.microsoft.com/purview/audit-search"
    note: "Needs the Audit Logs or View-Only Audit Logs role. Filter by the Foundry IQ record type to find elevated read entries."
confidence: "high"
created: "2026-11-23"
updated: "2026-11-24"
roadmapModified: "2026-06-25T23:15:45"
changes:
  - date: "2026-11-23"
    note: "New briefing: Learn documents label ingestion and query-time enforcement for Azure AI Search (Foundry IQ) as Public Preview, while the roadmap item is In development."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 72 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after verification: qualified the missing-header behaviour, removed an unsupported claim about index access rules, reworded the configuration methods, and trimmed checklist steps with no controls row."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 85 statements not yet confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 79 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 79
  confirmed: 78
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "8738a30e113dcc6058b73faa191f6ea1"
---

## What's changing

Azure AI Search can now read Microsoft Purview sensitivity labels while it indexes documents and then filter search results by each user's label rights. The roadmap item describes this for the built-in indexers for SharePoint, OneLake, Azure Blob and ADLS Gen2, aimed at agentic retrieval-augmented generation (RAG) where only authorised documents are returned or sent to LLMs.

Microsoft Learn documents the feature under the service's newer name, Foundry IQ (Azure AI Search), and marks both the [indexer article](https://learn.microsoft.com/azure/search/search-indexer-sensitivity-labels) and the [query article](https://learn.microsoft.com/azure/search/search-query-sensitivity-labels) as Public Preview, using REST API version 2026-11-01-preview. At indexing, the indexer extracts label metadata and updates it on later runs. At query time the service evaluates the label against the user's Microsoft Entra ID token and Purview label policy, and omits documents the user is not authorised to retrieve. The Learn articles do not describe the filtering as shipped for general availability.

The Learn pages state limits: the Azure portal does not support the feature; SharePoint list items and site pages are not supported; guest accounts and cross-tenant queries are not supported; and Autocomplete and Suggest are not supported on Purview-enabled indexes. A skillset or indexer that uses a Custom Web API skill, a knowledge store, the enrichment cache or debug sessions does not process labelled documents.

The roadmap record lists the item as In development, with a preview date of November CY2025 and a target date of October CY2026, for the Worldwide (Standard Multi-Tenant) cloud on the Web platform. The record lists both General Availability and Preview as release phases.

## Why it matters

This is a control for oversharing in AI search. Without label-aware indexing, a search index built over labelled files is a second copy of the content. With it, the service applies Purview label rights at query time, so an agent grounded on the index should receive only what the signed-in user could retrieve.

Nothing in the sources says existing indexes change: the feature needs a new index, a data source option and privileged role grants, so it takes effect only where someone sets it up. The trade-off is a new highly privileged identity and a dependency on Purview availability, which a security or compliance owner should approve rather than leave to a search developer.

## Risk assessment

**Data exposure**
- The indexer's managed identity needs Content.SuperUser and UnifiedPolicy.Tenant.Read. Learn calls label metadata access "highly privileged operations" and asks for governance approval before assigning them. Treat the identity as sensitive.
- Labels are evaluated as they stood at the last indexer run. A label change on a source file does not reach the index until a successful run, so a downgraded or upgraded label can be enforced late.
- An existing index without `purviewEnabled: true` cannot be converted; Learn says to create a new Purview-enabled index and retarget the indexer to it.
- Learn documents elevated read, which returns labelled documents regardless of the caller's rights while writing one Purview audit entry per document returned.

**Security & identity**
- Only the service's system-assigned managed identity is supported; user-assigned identities are not. A Global Administrator or Privileged Role Administrator must grant the roles.
- The service and the querying user must be in the same Microsoft Entra tenant; guests and cross-tenant queries are not supported.
- Purview-enabled indexes do not accept API-key document operations, so callers must use Azure RBAC and pass the user token.
- When Foundry IQ cannot reach Microsoft Purview, a non-elevated call without x-ms-query-source-authorization from an application with at least Search Index Data Reader succeeds with unlabelled-only results. Microsoft documents this degraded path only for non-user-facing workflows, not end-user search.

**Autonomy & actions**
- The roadmap item targets agentic RAG. Where Foundry IQ cannot evaluate label policies, label-enforced requests fail with a 5xx error rather than returning unfiltered results. An agent that serves end users should pass the user token, because Microsoft documents the unlabelled-only degraded path only for non-user-facing workflows.

**Change & support**
- The feature is preview; the Learn pages state preview terms apply. Plan for API changes.
- After enabling extraction on an existing pipeline, unchanged files are only reprocessed after a reset and run, which Learn says reprocesses all source documents.

## Cost and licensing

Learn's [cost page](https://learn.microsoft.com/azure/search/search-sku-manage-costs) gives two pricing models for Foundry IQ (Azure AI Search). Dedicated is billed per hour based on Search Units. Serverless is billed by Compute Units per hour and per GB per month of indexed storage. Both incur separate charges for premium features such as semantic ranker, agentic retrieval and AI enrichment.

The cost page's premium-feature table has no line for sensitivity labels, and a separate charge or licence for label ingestion is not yet published. Eligible paid Serverless services incur Compute Unit usage for indexer execution, and resetting an indexer to backfill labels reprocesses all source documents, so budget for that run.

Which Purview or Microsoft 365 licence a tenant needs for label-aware search is not yet published on the feature pages; the sensitivity label licence rules sit with Purview, which documents [licensing and billing requirements for sensitivity labels](https://learn.microsoft.com/purview/get-started-with-sensitivity-labels#licensing-and-billing-requirements-for-sensitivity-labels), so check them before budgeting.

## Scope

**Sources.** Azure Blob Storage, Azure Data Lake Storage Gen2, SharePoint in Microsoft 365 document-library files and Microsoft OneLake. List items and site pages are not supported, and source file types must be supported by both Purview sensitivity labels and the indexers.

**Roles.** A Global Administrator or Privileged Role Administrator grants the roles. Elevated read needs the Search Index Data Contributor role on the service or index scope.

**Prerequisites.** A Foundry IQ service with a system-assigned managed identity, Azure RBAC enabled, a new index created with `purviewEnabled: true`, and REST API version 2026-11-01-preview or an equivalent preview SDK. Learn also lists configuring Purview sensitivity label policies and applying them to documents before indexing.

**Cloud and platform.** The roadmap record lists Worldwide (Standard Multi-Tenant) and Web.

## Governance guidance

### Before rollout
- Agree the Content.SuperUser and UnifiedPolicy.Tenant.Read grant with the security and compliance owners; Learn asks for governance approval first.
- Plan a new index created with purviewEnabled set to true, because an existing index cannot be converted.

### At rollout
- Grant the two roles to the service's system-assigned managed identity only, using a Global Administrator or Privileged Role Administrator.
- Add sensitivityLabel to the data source's indexerPermissionOptions, keeping any options already set.

### After rollout
- Search the Microsoft Purview audit log for the Foundry IQ record type to review elevated read activity.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether an index enforces Purview sensitivity labels</strong><br><small class="controls__note">The request body sets purviewEnabled; it must be true when the index is created and cannot be changed later. Preview API.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>REST API</strong><br><code>PUT {endpoint}/indexes('{indexName}')?api-version=2026-11-01-preview</code> <a href="https://learn.microsoft.com/rest/api/searchservice/indexes/create-or-update?view=rest-searchservice-2026-11-01-preview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the indexer extracts sensitivity labels from a data source</strong><br><small class="controls__note">The request body adds sensitivityLabel to indexerPermissionOptions. Preview API. The indexer setup article documents the sensitivityLabel value; the 2026-11-01-preview REST reference's IndexerPermissionOption enumeration does not list it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>REST API</strong><br><code>PUT {endpoint}/datasources('{dataSourceName}')?api-version=2026-11-01-preview</code> <a href="https://learn.microsoft.com/rest/api/searchservice/data-sources/create-or-update?view=rest-searchservice-2026-11-01-preview" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Purview roles the search service's managed identity holds</strong><br><small>App</small><br><small class="controls__note">Run by a Global Administrator or Privileged Role Administrator. Grants Content.SuperUser and UnifiedPolicy.Tenant.Read to the system-assigned identity only.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-EntraServicePrincipalAppRoleAssignment -ServicePrincipalId &lt;managed-identity-object-id&gt; -PrincipalId &lt;managed-identity-object-id&gt; -ResourceId &lt;resource-service-principal-id&gt; -Id &lt;app-role-id&gt;</code> <a href="https://learn.microsoft.com/azure/search/search-indexer-sensitivity-labels" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Review of elevated-read and label-related activity in the audit log</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Audit Logs or View-Only Audit Logs role. Filter by the Foundry IQ record type to find elevated read entries.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog</code> <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The index and data-source configuration uses REST or an equivalent preview SDK, while the documented role grants use PowerShell; the Azure portal does not support the feature. Label rights themselves (the READ or EXTRACT usage rights a label grants) are set on the sensitivity label in Purview, as [usage rights are selected when you configure sensitivity labels](https://learn.microsoft.com/purview/rights-management-usage-rights), and are not set by any row above.

The two Learn pages differ on wording: the indexer article says users with the READ usage right can retrieve documents, while the query article says documents are excluded unless the user has EXTRACT permission. Check both against your labels.

Elevated read needs the Search Index Data Contributor role and writes a Purview audit entry for each returned document, which the audit row lets you review.

## Open questions

- Which Purview or Microsoft 365 licence does a tenant need for label-aware Azure AI Search, and is any charge specific to label ingestion planned? Watch the Foundry IQ cost page and Purview licensing pages.
- When will the feature reach general availability, given the roadmap target of October CY2026 and status In development, while Learn labels it Public Preview? Watch the roadmap item and Message center.
- Does query-time enforcement require the READ or the EXTRACT usage right? The indexer and query articles word it differently.
- Will the Azure portal or an admin centre gain a setting for this, or will configuration stay API, SDK and PowerShell based?

<!-- rationale
risk: Medium. Enforcement needs a Purview-enabled index and a managed identity holding the highly privileged Content.SuperUser role, and labels are only as current as the last indexer run.
cost: Variable. The feature runs on a Foundry IQ (Azure AI Search) service billed per Search Unit hour (Dedicated) or per Compute Unit hour and GB (Serverless); no separate charge for label ingestion is yet published.
impact: Low. The people who set it up are search administrators and developers; searchers see only results their label rights allow.
-->

<!-- verifier-findings (2026-11-27, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] title / behaviour: Azure AI Search enforces sensitivity labels at indexing time as well as query time. | Found: Searched: Azure AI Search Purview sensitivity labels indexing time enforce access rights query time. Opened search-indexer-sensitivity-labels and search-query-sensitivity-labels: indexing extracts content and metadata; enforcement is described at query time. | Fix: Replace the title with "Azure AI Search: ingest Microsoft Purview sensitivity labels and enforce them at query time".
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Governance controls / admin-path: The cited general audit guide locates audit search at Microsoft Purview portal > Audit > Search. | Found: Select the **Audit** solution card. If the **Audit** solution card isn't displayed, select **View all solutions** and then select **Audit** from the **Core** section. 3. On the **Search** page, configure the following search criteria as applicable: | Fix: Add to the audit row's note: "The general audit guide uses Audit > Search; the feature-specific query guide instead lists Solutions > Audit > Audit Search (https://learn.microsoft.com/azure/search/search-query-sensitivity-labels#find-elevated-read-audit-logs-in-microsoft-purview)." | Source: https://learn.microsoft.com/purview/audit-search
-->
