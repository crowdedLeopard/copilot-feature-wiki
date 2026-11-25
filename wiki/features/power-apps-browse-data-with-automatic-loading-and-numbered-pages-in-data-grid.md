---
title: "Power Apps: automatic loading and numbered pages in the modern Data Grid"
slug: "power-apps-browse-data-with-automatic-loading-and-numbered-pages-in-data-grid"
roadmapId: 580454
topic: "power-platform"
products: ["Power Apps"]
summary: "Makers can set the modern Data Grid in canvas apps to load records as users scroll or show numbered pages. Existing apps keep current behaviour until a maker enables it. No admin action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The app's existing Power Apps entitlement applies; Power Apps Premium is one published option. No pagination-specific licence, price or meter is documented at the time of writing (November 2026)."
audiences: ["maker","power-platform-admin","change-adoption"]
tags: ["power-apps","canvas-apps","modern-controls","delegation","performance"]
sources:
  - title: "Microsoft 365 Roadmap 580454"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=580454"
    kind: "roadmap"
  - title: "Data Grid modern control in canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/modern-control-data-grid"
    kind: "learn"
  - title: "Overview of modern controls and themes in canvas apps"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/overview-modern-controls"
    kind: "learn"
  - title: "Query limitations: Delegation and query limits"
    url: "https://learn.microsoft.com/power-apps/maker/canvas-apps/delegation-overview"
    kind: "learn"
  - title: "Power Apps licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-licensing-faq"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq#power-apps"
    kind: "learn"
videos: []
related: ["power-apps-new-canvas-controls-card-gallery-persona-avatar-group-and-metrics-card"]
controls:
  - governs: "Whether modern controls and themes, including the Data Grid, are turned on in an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Settings > Updates > New > Modern controls and themes"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/overview-modern-controls"
    api: null
    note: "Maker-side, per app. Learn documents no API for this setting at the time of writing (November 2026). It does not turn pagination on or off."
  - governs: "How many records a nondelegable query can return in an app"
    scope: "app"
    ui:
      surface: "Power Apps (maker)"
      path: "Settings > General > Data row limit"
      docs: "https://learn.microsoft.com/power-apps/maker/canvas-apps/delegation-overview"
    api: null
    note: "Maker-side, per app. Existing control: Learn says pagination does not bypass delegation limits. Learn documents no API for it at the time of writing (November 2026)."
  - governs: "Tenant or environment switch to turn Data Grid pagination off"
    scope: "tenant"
    ui: null
    api: null
    note: "Learn documents no such switch at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-25"
roadmapModified: "2026-11-17T19:05:12"
changes:
  - date: "2026-11-18"
    note: "First briefing for roadmap item 580454; Learn already documents the Pagination and PageSize properties while the roadmap item is In development."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 50 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected what changing Items does to paging, qualified the source-wide search steps, and stated the existing Power Apps entitlement in place of an unknown licence."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 67 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 67
  confirmed: 66
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "5a1b41d3c3d937c21ad737113bfed89f"
---

## What's changing

Makers can configure the modern Data Grid control in canvas apps to load more records automatically as users scroll, or to show numbered pages with a page size the maker sets. The roadmap item states that existing apps keep their current behaviour unless makers enable pagination, and that connector and formula delegation limits still apply.

Microsoft Learn's Data Grid page already documents this. A **Pagination** property accepts `Pagination.None`, `Pagination.Auto` or `Pagination.Number`, and the default is `Pagination.None`. With `Pagination.Auto` the grid loads more records from a pageable source as users scroll. With `Pagination.Number` it shows one page of records with first-page, previous-page and next-page actions. **PageSize** sets the records per fetch or per numbered page; a blank, zero, negative or invalid value falls back to 100.

The two Microsoft sources differ on status. The roadmap item is In development, targeted for December CY2026, in the General Availability phase, for Worldwide (Standard Multi-Tenant) and the Web platform. The Learn page describes the properties without giving a release or status, so this briefing cannot say whether your tenant has them yet. Dates are Microsoft's targets, not commitments.

Pagination does not widen what the grid can reach. The Learn page says it does not bypass delegation limits in **Items**, connector limits, or the scope of an already populated collection. Changing **Pagination** or **PageSize** returns the grid to the first page and clears its search text and active sort.

## Why it matters

For most tenants this is a maker-side change: nothing in the sources asks an administrator to configure anything, and the roadmap item says existing apps keep their behaviour until a maker enables pagination. The visible effect lands on users of the apps whose makers choose to switch it on.

The practical risk is incomplete results that look complete. The Learn page warns that built-in search over a partly loaded source can return incomplete results, and that a search with no matches among loaded records does not prove the remote table has none. Service owners who support business-critical canvas apps should expect questions about missing records and agree with makers how those apps are tested.

## Risk assessment

**Data exposure**

- No new data source is described. The grid shows records from its **Items** formula, so exposure stays with the connection or table the app already uses.
- Partial results are the data risk. Built-in search checks loaded records only. For source-wide search, makers set **Searchable** and **DelegateSearch** to `true` and use the grid's **SearchText** output in **Items** with a filter their connector can delegate; without that, users can act on a list that is missing matching records.

**Security & identity**

- No change documented: the Learn page describes no new permission, role or identity for pagination. Confirm with makers that the connection each app uses already limits which records a user can read.

**Autonomy & actions**

- Automatic loading fetches further records from the source as users scroll (`Pagination.Auto`). The page does not describe any effect on connector request limits, so test large apps against the connector's documented limits.

**Change & support**

- Changing **Items**, **Pagination** or **PageSize** rebuilds the paging view, so a page number cannot be relied on afterwards; support staff reproducing a user's view should expect that.
- **CurrentPage**, **ItemsCount** and **AllItemsLoaded** are outputs, and the page says not to assign formulas to them. **ItemsCount** is the number of records loaded, not a server-side total.
- Enabling text wrapping on a column turns row virtualization off, and the app checker flags such columns.

## Cost and licensing

The app's existing Power Apps entitlement applies; Power Apps Premium is one published option. No pagination-specific licence, price or meter is documented at the time of writing (November 2026). The Power Apps licensing FAQ says Power Apps requires users to have an appropriate licence to run apps, and the Power Platform licensing FAQ lists Power Apps Premium, per app and pay-as-you-go options. The Learn page's licence and capacity eligibility wording applies to the separate AI row summaries feature, not to pagination.

The cost the sources show is maker and tester time to choose a paging mode, set a page size and check delegation.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with General Availability as the release phase, status In development and a target of December CY2026. It lists no other clouds.

The feature applies to the modern Data Grid control in canvas apps. Makers set it per grid. The Learn page gives the default for **Pagination** as `Pagination.None`, which makes one nonpageable fetch subject to the app's data row limit; the roadmap item says existing apps keep their behaviour until makers enable pagination. Automatic loading depends on a pageable data source; for a collection or inline table the grid displays the records it already has. The Data Grid page names no administrator role or licence for pagination.

## Governance guidance

### Before rollout

- Identify canvas apps in your environments that use the modern Data Grid on large data sources, and ask their makers whether they plan to enable pagination.
- Ask makers to check each grid's **Items** formula for delegation warnings, because pagination does not make a nondelegable formula delegable.
- Record each app's **Data row limit** (Settings > General) so testers know how many records a nondelegable formula can return.

### At rollout

- Confirm when the properties reach your tenant: the roadmap item is In development with a December CY2026 target, while Learn already documents them. Watch Message center and the roadmap item.
- Have makers choose `Pagination.Auto` or `Pagination.Number` per grid and test with a realistic data volume, not an inline sample table.
- For source-wide search, have makers set **Searchable** and **DelegateSearch** to `true`, then use the grid's **SearchText** output in **Items** with a filter their connector can delegate.

### After rollout

- Retest an app whenever its **Items** formula, **Pagination** or **PageSize** changes. Changing **Items** rebuilds the paging source; changing **Pagination** or **PageSize** returns the grid to the first page and clears search and sort.
- Collect user reports of missing records and check them against delegation and the data row limit first.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether modern controls and themes, including the Data Grid, are turned on in an app</strong><br><small>App</small><br><small class="controls__note">Maker-side, per app. Learn documents no API for this setting at the time of writing (November 2026). It does not turn pagination on or off.</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › Updates › New › Modern controls and themes <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/controls/modern-controls/overview-modern-controls" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>How many records a nondelegable query can return in an app</strong><br><small>App</small><br><small class="controls__note">Maker-side, per app. Existing control: Learn says pagination does not bypass delegation limits. Learn documents no API for it at the time of writing (November 2026).</small></td><td data-label="Admin UI"><strong>Power Apps (maker)</strong><br>Settings › General › Data row limit <a href="https://learn.microsoft.com/power-apps/maker/canvas-apps/delegation-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant or environment switch to turn Data Grid pagination off</strong><br><small>Tenant</small><br><small class="controls__note">Learn documents no such switch at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Pagination is a property each maker sets on a Data Grid, and the Learn page gives no admin-centre path for it; the settings in the table are maker-side. Microsoft Learn documents no tenant-wide or environment-level switch for Data Grid pagination at the time of writing (November 2026).

The modern controls setting and the **Data row limit** are existing per-app settings. They are not documented as controls over whether pagination is used.

## Open questions

- Which release and date will the **Pagination** and **PageSize** properties reach tenants, given that Learn documents them while the roadmap item is In development with a December CY2026 target? Watch the roadmap item and the Data Grid Learn page.
- Will Microsoft publish an additional licence or meter for pagination?
- Will an administrator control for turning pagination off or restricting it be documented? Watch Message center.
- How does automatic loading interact with the connector request limits in a busy app? Microsoft Learn does not describe it.

<!-- rationale
risk: Low. The roadmap item says existing apps keep their behaviour until makers enable pagination, and Learn lists no new data access; delegation limits still apply, so partial results remain a maker-side accuracy risk.
cost: Low. The only cost the sources show is maker time to configure and test; the app's existing Power Apps entitlement applies, and no pagination-specific licence, price or meter is documented at the time of writing (November 2026).
impact: Medium. Makers who build canvas apps with the modern Data Grid decide whether to use it; users of those apps then see scrolling or numbered pages, and administrators are not asked to act.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The governance checklist tells makers to choose Pagination and configure Searchable and DelegateSearch, but these controls have no table row. | Found: Checklist: "Have makers choose `Pagination.Auto` or `Pagination.Number` per grid"; "set **Searchable** and **DelegateSearch** to `true`". The table lists only modern controls and themes, Data row limit, and the absent tenant/environment switch. | Fix: The At rollout steps for Pagination, Searchable and DelegateSearch have no corresponding controls-table row. Record this coverage gap; do not add control rows as part of this correction.
-->
