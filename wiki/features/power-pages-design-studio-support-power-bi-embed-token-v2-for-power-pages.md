---
title: "Power Pages: Power BI Embed Token v2 support for paginated reports and multi-report embedding"
slug: "power-pages-design-studio-support-power-bi-embed-token-v2-for-power-pages"
roadmapId: 576793
topic: "power-platform"
products: ["Power Pages"]
summary: "Power Pages sites can embed paginated reports, data lake-based semantic models and multi-report tokens through Power BI Embed Token v2. Makers use it; admins should check Power BI Embedded setup, page access and licensing."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "July CY2026"
previewDate: null
risk: "medium"
cost: "medium"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "add-on"
  notes: "Learn says embedding through the Power BI Embedded service needs \"an appropriate Power BI Embedded license\" and a Power BI licence. No licence or price specific to Embed Token v2 is published at the time of writing (November 2026)."
audiences: ["power-platform-admin","maker","security"]
tags: ["power-pages","power-bi","design-studio","analytics","semantic-model","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 576793"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=576793"
    kind: "roadmap"
  - title: "Set up Power BI integration"
    url: "https://learn.microsoft.com/power-pages/admin/set-up-power-bi-integration"
    kind: "learn"
  - title: "Add a Power BI component"
    url: "https://learn.microsoft.com/power-pages/getting-started/add-power-bi"
    kind: "learn"
  - title: "Add a Power BI report or dashboard to a web page"
    url: "https://learn.microsoft.com/power-pages/configure/add-powerbi-report"
    kind: "learn"
  - title: "Use Power Pages admin APIs"
    url: "https://learn.microsoft.com/power-pages/admin/admin-api"
    kind: "learn"
  - title: "Embed Power BI paginated reports"
    url: "https://learn.microsoft.com/power-bi/developer/embedded/embed-paginated-reports"
    kind: "learn"
  - title: "Developer tenant settings"
    url: "https://learn.microsoft.com/fabric/admin/service-admin-portal-developer"
    kind: "learn"
videos: []
related: ["power-pages-first-class-support-for-connector-apis-in-power-pages","power-pages-administration-and-governance-configure-site-analytics-and-server-logging"]
controls:
  - governs: "Whether Power BI visualization and the Power BI Embedded service are enabled on a site"
    scope: "site"
    ui:
      surface: "Power Platform admin center"
      path: "Resources > Power Pages sites > site > Manage > Services > Enable Power BI Embedded"
      docs: "https://learn.microsoft.com/power-pages/admin/set-up-power-bi-integration"
    api: null
    note: "Enabling or disabling restarts the site for a few minutes. A separate Power BI visualization toggle sits in the same Services section; Global administrator is named for the Power BI Embedded setup."
  - governs: "Which Embed Token version (v1 or v2) a site's Power BI embeds use"
    scope: "site"
    ui: null
    api: null
    note: "Roadmap says makers must use v2; Learn documents no selector at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-18"
updated: "2026-11-18"
roadmapModified: "2026-10-16T19:09:09"
changes:
  - date: "2026-11-18"
    note: "New briefing: roadmap says Power Pages supports Power BI Embed Token v2; Learn still describes v1 and no paginated report support."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "Correction: Apply roles now qualified to the Embed for your customers access type, and three checklist bullets without matching control rows removed."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 54 statements confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 56 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-25"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 56
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "65154837924d27c8928ba7e34d345596"
---

## What's changing

The roadmap item states that Power Pages now supports Power BI Embed Token v2, which unlocks embedding scenarios that Embed Token v1 did not support. It lists three: paginated (RDL) reports, including reports that use Power BI datasets as a data source or require multi-resource tokens; reports backed by data lake-based semantic models, where v2 tokens are needed to carry dataset and identity permissions; and multi-artifact embedding, where a single token can grant access to several reports and datasets.

The roadmap item adds that makers must use Embed Token v2 when configuring Power BI embedding in their Power Pages sites, and that it is enabled by admins, makers or marketers for end users. It does not say how a maker selects v2, and it does not say what happens to existing embeds.

The roadmap record shows status Launched, a target of July CY2026, release phase General Availability, cloud Worldwide (Standard Multi-Tenant) and platform Web.

Microsoft Learn has not caught up with the roadmap at the time of writing (November 2026). The Power Pages pages "Set up Power BI integration", "Add a Power BI component" and "Add a Power BI report or dashboard to a web page" still say that Power Pages uses version 1 of the Generate token API and that paginated Power BI reports aren't supported. Treat the roadmap description as Microsoft's plan and check Learn before promising paginated reports to a business team.

## Why it matters

Power BI embedding in Power Pages is how a site shows reports to people who may have no Power BI licence. The "Embed for your customers" access type is documented as sharing reports and dashboards with external users without a Power BI licence or Microsoft Entra authentication setup. A token that can reach more reports and datasets, and that carries dataset and identity permissions, raises the stakes of getting the page permissions and the Power BI roles right.

Microsoft has not stated what happens on arrival or whether existing embeds change, so the wiki's view is to treat this as a capability to review rather than a change to absorb: find the sites that already embed Power BI, and decide with their makers whether the new scenarios are wanted before anyone builds them.

## Risk assessment

**Data exposure**

- The roadmap says a single v2 token can grant access to multiple reports and datasets. Learn says that if you add Power BI with Embed for your customers on a webpage available anonymously, anyone can view the dashboard, and points to page permissions to secure the page. Review anonymous pages before makers add multi-report content.
- Data lake-based semantic models are described as needing dataset and identity permissions in the v2 token. Which identity supplies them is not described, so confirm it with the Power BI owner before approving such a report.

**Security & identity**

- For the Embed for your customers access type, Learn documents an Apply roles field in the Power BI component, which must hold the Power BI row-level security roles for a report that has them; a report with row-level security and no roles passed produces a configuration error. Check that new reports using that access type pass their roles.
- The Embed content in apps setting in the Power BI developer settings must be Enabled, or a portal can't render embedded Power BI dashboards or reports.

**Autonomy & actions**

- No autonomous behaviour is described on the roadmap item or on Learn; the feature concerns how reports are embedded and viewed.

**Change & support**

- Learn describes the error "Couldn't load the model schema associated with this report" as what you see when an embedded item requires version 2 of the Generate token API. Whether v2 support removes that error for existing pages is not documented, so expect helpdesk questions from makers.
- Paginated reports on Learn's Power BI side add their own prerequisites; see Cost and licensing.

## Cost and licensing

The Power Pages page "Set up Power BI integration" says you must have an appropriate Power BI licence, and that to use the Power BI Embedded service you must have an appropriate Power BI Embedded licence. It tells administrators to review capacity planning and pricing for Power BI Embedded.

For paginated reports embedded for your customers, the Power BI page "Embed Power BI paginated reports" says that when a Power BI semantic model is the data source, the paginated report and the semantic model must reside in a Premium per capacity or Embedded workspace. That is Power BI's general rule, not a statement about Power Pages.

Not yet published: any licence, meter or price specific to Embed Token v2 in Power Pages, and whether the roadmap's scenarios need more than the licences above. Indirect cost is maker and admin time to rebuild or retest embeds.

## Scope

The roadmap record lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, at General Availability with status Launched. It lists no other cloud; the record does not say the feature is unavailable elsewhere.

People affected are makers who add Power BI components or Liquid tags to Power Pages sites, and the visitors of those pages. Learn's prerequisites for embedding include Power BI visualization enabled on the site, the Enable Power BI Embedded service for Embed for your customers, selected workspaces, and the Power BI Embed content in apps setting. Whether v2 needs anything further is not documented.

## Governance guidance

### Before rollout

- Inventory Power Pages sites that have Power BI visualization or Power BI Embedded enabled (Power Platform admin center, site Manage > Services; first row of the table).

### At rollout

- Ask makers to pilot one paginated or multi-report embed on a non-production site and record which Access type and roles they used.
- Treat the token version choice as unconfirmed until Microsoft documents where it is set (second table row).

### After rollout

- Watch for the rendering errors Learn lists, "A configuration error occurred while rendering your report" and "Couldn't load the model schema", in maker support requests.
- Re-read the Power Pages Power BI pages on Learn for the token version and paginated report guidance once Microsoft updates them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Power BI visualization and the Power BI Embedded service are enabled on a site</strong><br><small>Site</small><br><small class="controls__note">Enabling or disabling restarts the site for a few minutes. A separate Power BI visualization toggle sits in the same Services section; Global administrator is named for the Power BI Embedded setup.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Resources › Power Pages sites › site › Manage › Services › Enable Power BI Embedded <a href="https://learn.microsoft.com/power-pages/admin/set-up-power-bi-integration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which Embed Token version (v1 or v2) a site's Power BI embeds use</strong><br><small>Site</small><br><small class="controls__note">Roadmap says makers must use v2; Learn documents no selector at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Power BI embedding is switched on per site, not per token version. The Power Platform admin center site toggles are the documented administrator control; Microsoft Learn documents no setting that selects Embed Token v1 or v2 at the time of writing (November 2026), so the roadmap's requirement that makers use v2 has no documented control behind it yet.

The Power Pages admin API page lists operations for sites such as start, stop, WAF and site visibility, and no Power BI operation at the time of writing (November 2026), so the site toggles are not documented as scriptable.

The Power BI Embed content in apps tenant setting sits in Fabric's developer tenant settings, where Learn says you must be a Fabric administrator to manage Power BI developer settings. The path is OneLake catalog > Govern > Configurations > Tenant settings, as the Developer tenant settings page gives it. Disabling it stops a portal rendering embedded Power BI content.

## Open questions

- How does a maker or administrator select Embed Token v2 in Power Pages, and is it automatic for existing embeds? Watch the Power Pages "Add a Power BI component" page.
- Do paginated reports and data lake-based semantic models need a Power BI Embedded or Premium capacity beyond what Learn already lists, and is there any Power Pages-specific charge?
- Which identity supplies the dataset and identity permissions in a v2 token, and how does the Power BI service principal setup in "Set up Power BI integration" relate to it?
- When will the Learn limitation "Paginated Power BI reports aren't supported" be updated to match the roadmap item?

<!-- rationale
risk: Medium. The roadmap says one v2 token can grant access to several reports and datasets, and Learn says an Embed for your customers report on an anonymous page can be viewed by anyone; page permissions and Power BI roles are the documented limits.
cost: Medium. Learn says the Power BI Embedded service needs an appropriate Power BI Embedded licence and points to capacity planning and pricing; Microsoft has not published any separate charge for Embed Token v2 itself.
impact: Medium. Makers who embed Power BI content and the visitors of those pages notice it; nothing on the roadmap item or on Learn changes the experience for users of sites that do not embed Power BI.
-->
