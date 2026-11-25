---
title: "SharePoint: organisation-wide page templates managed from the brand center"
slug: "sharepoint-organization-wide-page-templates"
roadmapId: 581865
topic: "modern-work"
products: ["SharePoint"]
summary: "Microsoft plans central page templates that authors can use across sites in a tenant, managed in the brand center site. Learn does not yet describe the feature, so administrators should prepare to review it, not to act."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the brand center page's setup steps name the Global Administrator role and list no licence. No price or meter is documented for this feature."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","brand-center","page-templates"]
sources:
  - title: "SharePoint brand center"
    url: "https://learn.microsoft.com/sharepoint/brand-center-overview"
    kind: "learn"
  - title: "Remove-SPOOrgAssetsLibrary"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spoorgassetslibrary?view=sharepoint-ps"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: SharePoint: Organization-wide page templates"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581865"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Activation of the brand center, the site where the roadmap says organisation-wide page templates are managed"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Brand center"
      docs: "https://learn.microsoft.com/sharepoint/brand-center-overview"
    api:
      kind: "powershell"
      call: "Remove-SPOOrgAssetsLibrary -BrandCenter"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spoorgassetslibrary?view=sharepoint-ps"
    note: "Global Administrator sets up the brand center. The cmdlet deactivates Brand Center features for the tenant. Whether this affects page templates is not documented."
  - governs: "A separate switch or setting for organisation-wide page templates"
    scope: "tenant"
    ui: null
    api: null
    note: "No Learn page for the feature at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2026-11-25T00:10:31"
changes:
  - date: "2026-11-25"
    note: "First briefing for this roadmap item: records the roadmap description and the brand center controls Learn documents; Learn has no page for the feature yet."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 39 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 39
  confirmed: 38
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "8685478b06cf8f9a32d762832dd2a1f6"
---

## What's changing

The roadmap item states that Microsoft is introducing organisation-wide page templates in SharePoint: reusable, approved starting points for page creation across sites within a tenant. It says the templates are managed centrally in the SharePoint site associated with the organisation's brand center, and that they help authors reduce repetitive setup and create pages with consistent content.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what follows about its behaviour is the roadmap's description. Learn does describe the brand center: an app in a designated site in the tenant, of which the page says the organisation can have only one, set up by a Global Administrator, with the site owners of the brand center site able to use the app. How page templates appear in that app, and how authors pick them when creating a page, is not described.

The roadmap record gives the status as In development, with a target date of December CY2026, release phase General Availability, Worldwide (Standard Multi-Tenant) cloud and the Web platform. No preview date is given. These are Microsoft's targets, not commitments.

## Why it matters

For a service owner this is a consistency tool: approved starting points mean authors on different sites begin from the same page layout and content, instead of each site building its own. It also puts a new piece of central content, the templates, under the control of whoever manages the brand center site.

Microsoft has not stated what happens on arrival if nobody acts, and no source says existing page creation changes. The practical decision is whether your brand center is set up and who owns it, because the roadmap places template management there.

## Risk assessment

**Data exposure**

- The roadmap describes templates as reusable starting points for pages. It does not say what content they can hold or who can read them across sites. Treat template content as visible to every author who can start a page, until Microsoft states otherwise, and keep confidential text out of templates.

**Security & identity**

- Template management sits in the brand center site, where the brand center page says site permissions decide who can use the brand center app. Whoever is a site owner there is likely to control what authors across the tenant start from; review that owner list before the feature arrives.

**Autonomy & actions**

- No change: the roadmap describes no agent, automation or background action in this feature.

**Change & support**

- Authors may ask why new pages start with content they did not write. Plan a short note to site owners and authors once the feature reaches your tenant.
- Learn documents one brand center per organisation, created in the primary geo of a tenant. Multi-geo tenants should confirm how templates behave before promising them to every geography.

## Cost and licensing

No licence, price or meter for organisation-wide page templates is published at the time of writing. The roadmap item names none, and the brand center setup steps on Learn name the Global Administrator role and list no licence. Treat licensing as unconfirmed until Microsoft publishes it.

The cost the sources do show is people's time: a Global Administrator to activate the brand center if it is not already set up, and brand managers or site owners to build and maintain the templates. The brand center page documents setup in the Microsoft 365 admin center, and does not describe a charge for it.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud and the Web platform, and the release phase General Availability. It does not list other clouds; that is a record fact, not a statement that the feature is unavailable elsewhere.

The roadmap says the templates are managed in the SharePoint site associated with the organisation's brand center and are offered across sites within a tenant. On Learn, the brand center is set up by a Global Administrator, its app is used by the site owners of the brand center site, and a tenant has a single brand center created in its primary geo. Whether a working brand center is a prerequisite for the templates is not stated.

## Governance guidance

### Before rollout

- Check whether your tenant already has an activated brand center, and note which site hosts it (Microsoft 365 admin center > Settings > Org settings > Brand center).
- Review the owners of the brand center site, because the brand center page says they can use the app, and decide who should maintain templates.
- Name a brand manager or content owner who will approve what becomes an organisation-wide template.

### At rollout

- Watch Message center and the Microsoft 365 Roadmap item for a rollout notice, since the roadmap shows only a December CY2026 target.
- Tell site owners and authors where templates will come from and who to ask for a new one.

### After rollout

- Test page creation on a site, with a standard author account, and confirm which templates appear.
- Review the template set on a regular schedule, and remove templates that no longer match current guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Activation of the brand center, the site where the roadmap says organisation-wide page templates are managed</strong><br><small>Tenant</small><br><small class="controls__note">Global Administrator sets up the brand center. The cmdlet deactivates Brand Center features for the tenant. Whether this affects page templates is not documented.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Brand center <a href="https://learn.microsoft.com/sharepoint/brand-center-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-SPOOrgAssetsLibrary -BrandCenter</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spoorgassetslibrary?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A separate switch or setting for organisation-wide page templates</strong><br><small>Tenant</small><br><small class="controls__note">No Learn page for the feature at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The brand center row is the only control Learn documents that the roadmap ties to this feature: the roadmap says templates are managed in the site associated with the brand center. The brand center page does not say that activating it is required for page templates, or that deactivating it removes them. Treat it as the nearest lever, not a switch for the feature.

On the brand center page, a Global Administrator activates the app and, after setup, the site permissions of the brand center site control who can access the app. That page names the SharePoint admin center for permissions but gives no step-by-step path, so it is not a table row. Learn documents no setting that turns organisation-wide page templates on or off, and no automation for them, at the time of writing (November 2026).

## Open questions

- Is a working, activated brand center a prerequisite for organisation-wide page templates, and does deactivating it affect them? Watch the SharePoint brand center page on Microsoft Learn.
- What is the default on arrival: do templates appear to all authors in a tenant automatically, or does an administrator or brand manager have to publish them first? Watch Message center.
- Which licence, if any, do authors and template managers need? Watch the roadmap item and the SharePoint licensing pages.
- Who can create, edit and approve templates, and can an administrator limit them to certain sites or audiences? Watch the Learn page for the feature once it exists.
- How do templates work for multi-geo tenants, given that the brand center is created in the primary geo?

<!-- rationale
risk: Low. The roadmap describes approved starting points for page creation; nothing in the record or on Learn says the feature reaches new data or acts on its own, and its default state is not stated.
cost: Low. The only cost the sources show is administrator and brand-manager time to set up and maintain templates; a licence or meter for this feature is not yet published.
impact: Medium. Page authors and the brand managers who would maintain the templates notice it; the roadmap does not say that existing pages or default behaviour change.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance guidance: Before rollout; Governance controls table / admin-path: Microsoft 365 admin center > Settings > Org settings > Brand center reaches the brand center setup page. | Found: In the admin center, go to Settings > Org settings. Select Brand center. Confirm the existing organization assets site that the brand center recognizes. Activate the brand center app for your organization. | Fix: The path is correct but stops on the setup page. For an existing organization-assets site, extend it to 'Settings > Org settings > Brand center > Activate the brand center app'; for a tenant without organization assets, use 'Settings > Org settings > Brand center > Create the site'. State in the note that setup follows the applicable tenant scenario at https://learn.microsoft.com/sharepoint/brand-center-overview. | Source: https://learn.microsoft.com/sharepoint/brand-center-overview
- [supported, minor] front matter: licensing.model; licensing.notes; Cost and licensing / licensing: Licensing is reported as unknown because no entitlement specific to organization-wide page templates is published. | Found: To access SharePoint, users in your organization need to be assigned a license that includes SharePoint. | Fix: Set licensing.model to 'included' under the standard's product-level licensing rule. Begin licensing.notes and Cost and licensing with 'To access SharePoint, users in your organisation need to be assigned a licence that includes SharePoint. Requirements specific to organisation-wide page templates are not yet published at the time of writing (November 2026).' Cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description. Keep the narrower unpublished feature-price and meter statements. | Source: https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description
- [supported, minor] Why it matters; Risk assessment: Security & identity / applicability: The centrally managed template content sits under the control of the people who manage the associated SharePoint site. | Found: Site owners have full control of the SharePoint site. | Fix: Cite https://learn.microsoft.com/sharepoint/site-permissions for the site-control premise. Narrow 'It also puts a new piece of central content, the templates, under the control of whoever manages the brand center site' to 'The roadmap places template management in the associated SharePoint site; site owners have full control of that site.' Keep the separate uncertainty over feature-specific creation and approval roles. | Source: https://learn.microsoft.com/sharepoint/site-permissions
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist tells readers to review brand center site owners, but that permissions control has no controls-table row. | Found: Review the owners of the brand center site, because the brand center page says they can use the app ... That page names the SharePoint admin center for permissions but gives no step-by-step path, so it is not a table row. | Fix: The Before rollout instruction to review the brand center site's owners has no matching table row. Remove that checklist bullet; retain the existing permissions explanation in Governance controls. Do not add an unverified control row.
-->
