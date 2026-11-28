---
title: "SharePoint: new SharePoint experience with Discover, Publish and Build in a redesigned app bar"
slug: "sharepoint-new-sharepoint-experience"
roadmapId: 547732
topic: "modern-work"
products: ["SharePoint"]
summary: "SharePoint's home page is replaced by Discover, and the app bar gains Publish and Build. It is on for SharePoint users with no documented off switch; admins should set global navigation, review site creation and test SPFx headers and footers."
status: "launched"
releasePhase: ["General Availability","Preview","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Web"]
targetDate: "May CY2026"
previewDate: "March CY2026"
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The SharePoint service description says users need a licence that includes SharePoint. Microsoft publishes no separate licence for the interface redesign; creating sites with AI from Build needs an active Copilot licence, and creating entire sites with Copilot in SharePoint consumes Copilot Credits."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["sharepoint","home-sites","user-experience","admin-controls","adoption","gcc","gcc-high","dod"]
sources:
  - title: "SharePoint: New SharePoint Experience (Microsoft 365 Roadmap 547732)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=547732"
    kind: "roadmap"
  - title: "New SharePoint Experience"
    url: "https://learn.microsoft.com/sharepoint/enable-new-sharepoint-experience"
    kind: "learn"
  - title: "Introduction to the SharePoint app bar"
    url: "https://learn.microsoft.com/sharepoint/homesites/sharepoint-app-bar"
    kind: "learn"
  - title: "Manage site creation in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/manage-site-creation"
    kind: "learn"
  - title: "Set up Viva Connections"
    url: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Set-SPOHomeSite"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spohomesite"
    kind: "learn"
  - title: "SharePoint service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description"
    kind: "learn"
  - title: "Create sites with AI"
    url: "https://learn.microsoft.com/sharepoint/create-sites-with-ai"
    kind: "learn"
  - title: "Get started with Copilot in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started"
    kind: "learn"
videos: []
related: ["m365-copilot-copilot-in-sharepoint","m365-copilot-sharepoint-site-builder","sharepoint-lists-refreshed-user-experience","onedrive-refreshed-file-browsing-and-filtering-experience-in-onedrive-web"]
controls:
  - governs: "Whether the new SharePoint experience is turned on or deferred for the tenant"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
  - governs: "Whether individual app bar destinations such as Publish and Build can be hidden"
    scope: "tenant"
    ui: null
    api: null
    note: "The app bar page states that specific app bar tabs can't be disabled and the app bar can't be disabled on specific sites."
  - governs: "Whether users can create sites from SharePoint, including from Build"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Site creation > Control site creation from tools"
      docs: "https://learn.microsoft.com/sharepoint/manage-site-creation"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -SelfServiceSiteCreationDisabled $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "Covers sites created from SharePoint, OneDrive, PnP PowerShell and the REST API; does not stop Microsoft 365 group creation. SharePoint Administrator."
  - governs: "Where SPFx top and bottom placeholders render in relation to elevated content"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -DisableSpfxTopBottomPlaceholdersInElevatedContent $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "True renders the placeholders outside the elevated content area; false (the default) renders them inside it."
  - governs: "Which communication site is a SharePoint home site, needed for global navigation"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Home sites > Add"
      docs: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    api:
      kind: "powershell"
      call: "Set-SPOHomeSite -HomeSiteUrl <home site URL>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spohomesite"
    note: "SharePoint admin or higher."
  - governs: "Whether the app bar shows the organisation's global navigation"
    scope: "site"
    ui:
      surface: "SharePoint home site"
      path: "Settings > Global navigation > Enable global navigation"
      docs: "https://learn.microsoft.com/sharepoint/homesites/sharepoint-app-bar"
    api: null
    note: "Needs site owner permission (or higher) on the home site; changes can take up to 24 hours to reach users."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-12T23:01:05"
changes:
  - date: "2026-11-28"
    note: "New briefing: the launched SharePoint redesign (Discover, Publish, Build), with site creation, home site, global navigation and SPFx placeholder controls."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 68 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected: creating sites with AI from Build needs a Copilot licence and creating entire sites consumes Copilot Credits; removed the claim that Discover's content selection is undocumented; softened the Build wording; dropped two checklist steps that had no control row."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 73 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 73
  confirmed: 73
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "082bdc8191ed2698fd5183b23c6fcf23"
---

## What's changing

SharePoint gets a redesigned interface built around three jobs: discovering knowledge, publishing content and building solutions. Microsoft's [New SharePoint Experience](https://learn.microsoft.com/sharepoint/enable-new-sharepoint-experience) page lists five changes: the SharePoint home page is replaced with a **Discover** experience; the SharePoint app bar is refreshed; the app bar gains two destinations, **Publish** and **Build**; the app bar shows the organisation's global navigation at the top, with its logo and name, if global navigation is enabled and configured on the home site; and neutral app theming applies a neutral palette to SharePoint UI surfaces while "elevating content forward" across key surfaces, including SharePoint Framework (SPFx) placeholders.

The [SharePoint app bar](https://learn.microsoft.com/sharepoint/homesites/sharepoint-app-bar) page describes the destinations: creating and sharing pages and communications in Publish, and creating and managing sites in Build, alongside Discover and OneDrive. The roadmap item says the update "establishes the foundation for AI-assisted creation across the product"; Microsoft's page says the redesign comes "with flexible workflows and AI-first capabilities built in" but does not list which AI features are part of it.

The roadmap item is **Launched**, with a preview date of March CY2026 and a target of May CY2026, across General Availability, Preview and Targeted Release. An update dated 14 August 2026 says Microsoft was still rolling out to some government tenants and expected to finish by mid to late September 2026. No Message center post was supplied with this item.

## Why it matters

This is the front door of SharePoint for its users. Microsoft's page states that the home page is replaced with Discover, and Microsoft Learn documents no setting to defer or turn off the new experience, so if nobody acts users simply arrive at the new layout. The parts an administrator shapes are what sits around it: the global navigation at the top of the app bar, which only appears when the home site has it enabled, and what happens when someone opens Build or Publish.

The support load is the main exposure. Build makes site creation prominent, which will surface any gap in the tenant's Site creation settings, and the app bar and elevated content change where SPFx header and footer extensions render. Intranet teams that rely on custom top or bottom banners should test them now rather than wait for user reports.

## Risk assessment

**Data exposure**
- No change documented: the New SharePoint Experience page describes navigation, home page and theming changes and names no new data source.

**Security & identity**
- No change documented. The app bar does not display for guests outside the organisation, according to the app bar page.

**Autonomy & actions**
- Build makes site creation prominent. The SharePoint admin centre **Site creation** setting controls whether users can create sites from SharePoint, OneDrive, PnP PowerShell and the REST API; disabling it does not remove users' ability to create Microsoft 365 groups or resources, such as Microsoft Teams, that rely on a group.

**Change & support**
- The app bar covers parts of the SPFx header and footer page placeholders and might affect customisations on the left of the page. The new experience also elevates content across surfaces including SPFx placeholders; the `-DisableSpfxTopBottomPlaceholdersInElevatedContent` parameter of `Set-SPOTenant` decides whether those placeholders render inside or outside the elevated content area.
- Microsoft documents that specific app bar tabs can't be disabled and the app bar can't be disabled on specific sites, so users will see Publish and Build whatever the tenant's policy on site creation.
- The app bar isn't available on classic sites. In GCC High and DoD, users might see a degraded **My sites** panel, and extra restrictions might apply to **My News** in the app bar.

## Cost and licensing

**Licence.** The [SharePoint service description](https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description) states that users need a licence that includes SharePoint. The New SharePoint Experience page names no other licence.

**Meter.** Microsoft publishes no meter for the interface redesign itself. Creating sites with AI, which users with the new experience can start from Build, is a Copilot in SharePoint capability: the [Create sites with AI](https://learn.microsoft.com/sharepoint/create-sites-with-ai) page (in preview) states that users need an active Copilot licence to create sites with AI, and [Get started with Copilot in SharePoint](https://learn.microsoft.com/sharepoint/copilot-in-sharepoint-get-started) lists creating entire sites and solutions as advanced work that consumes Copilot Credits and requires usage-based billing enabled through a spending policy in the Microsoft 365 admin center. Copilot in SharePoint is covered in its own briefing at /features/m365-copilot-copilot-in-sharepoint/.

**Indirect costs.** Admin time to set up or review the home site and global navigation, developer time to test SPFx header and footer extensions, and help desk and communications effort for a change every SharePoint user sees.

## Scope

- **Who:** SharePoint users with a licence that includes SharePoint. The app bar does not display for guests outside the organisation and isn't available on classic sites.
- **Clouds (roadmap record):** Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The 14 August 2026 update said rollout to some government tenants was expected to finish by mid to late September 2026.
- **Platforms (roadmap record):** Android, Desktop, iOS and Web.
- **Prerequisites for global navigation:** a SharePoint home site; site owner permission (or higher) on it to enable global navigation; users need read access to it to see the links. Changes can take up to 24 hours to reach users.
- **Roles:** SharePoint Administrator for site creation settings, home sites and `Set-SPOTenant`.

## Governance guidance

### Before rollout
- Check in the SharePoint admin centre under **Settings > Home sites** whether the tenant has a home site; you need one to enable global navigation in the app bar.
- Decide whether users should create sites from Build, and set **Control site creation from tools** under **Settings > Site creation** to match.
- Test SPFx application customisers that use top or bottom placeholders on the home site and key intranet sites, and choose a value for `-DisableSpfxTopBottomPlaceholdersInElevatedContent`.
- List the classic sites users depend on; the app bar will not appear on them.

### At rollout
- Enable global navigation on the home site (**Settings > Global navigation**) and allow up to 24 hours for it to appear.
- Tell users that the SharePoint home page is now Discover, and where Publish and Build sit in the app bar.

### After rollout
- Collect help desk reports of broken headers, footers and left-side customisations, and route them to the owners of the SPFx extensions.
- Check the **My sites** panel and **My News** in the app bar with GCC High or DoD users, where Microsoft notes a possibly degraded experience.
- Watch Message center and the New SharePoint Experience page for any admin setting for the experience itself.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the new SharePoint experience is turned on or deferred for the tenant</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether individual app bar destinations such as Publish and Build can be hidden</strong><br><small>Tenant</small><br><small class="controls__note">The app bar page states that specific app bar tabs can't be disabled and the app bar can't be disabled on specific sites.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users can create sites from SharePoint, including from Build</strong><br><small>Tenant</small><br><small class="controls__note">Covers sites created from SharePoint, OneDrive, PnP PowerShell and the REST API; does not stop Microsoft 365 group creation. SharePoint Administrator.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Site creation › Control site creation from tools <a href="https://learn.microsoft.com/sharepoint/manage-site-creation" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -SelfServiceSiteCreationDisabled $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where SPFx top and bottom placeholders render in relation to elevated content</strong><br><small>Tenant</small><br><small class="controls__note">True renders the placeholders outside the elevated content area; false (the default) renders them inside it.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -DisableSpfxTopBottomPlaceholdersInElevatedContent $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which communication site is a SharePoint home site, needed for global navigation</strong><br><small>Tenant</small><br><small class="controls__note">SharePoint admin or higher.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Home sites › Add <a href="https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOHomeSite -HomeSiteUrl &lt;home site URL&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spohomesite" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the app bar shows the organisation's global navigation</strong><br><small>Site</small><br><small class="controls__note">Needs site owner permission (or higher) on the home site; changes can take up to 24 hours to reach users.</small></td><td data-label="Admin UI"><strong>SharePoint home site</strong><br>Settings › Global navigation › Enable global navigation <a href="https://learn.microsoft.com/sharepoint/homesites/sharepoint-app-bar" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no setting that turns the new experience off, and Microsoft states that individual app bar tabs can't be disabled and the app bar can't be disabled per site, so the levers are around it: who can create sites, what the global navigation shows, and where SPFx placeholders render.

- `Set-SPOTenant` must be run by a SharePoint Online administrator. The Site creation page applies to SharePoint Administrators and above.
- The **Control site creation from tools** setting does not remove users' ability to create Microsoft 365 groups or resources, such as Microsoft Teams, that rely on a group; govern those through Microsoft 365 group creation settings.
- Global navigation is a site setting on the home site, changed by its site owners, not in an admin centre.

## Open questions

- Will Microsoft add a tenant setting to defer the new experience or hide the Publish and Build destinations? Watch Message center and the New SharePoint Experience page.
- Which AI features reached from Publish, if any, need a Copilot licence or consume Copilot Credits?
- Does Discover surface items users can open but have never visited?
- Which existing site themes and branding settings does neutral app theming override, and which does it keep?
- Has the government cloud rollout finished in every GCC, GCC High and DoD tenant, as the August 2026 update expected for mid to late September?

<!-- rationale
risk: Low. The change is to SharePoint's home page, app bar and theming; Microsoft's page for it describes no new data source or permission, and site creation from SharePoint stays under the existing Site creation setting.
cost: Low. Users need a licence that includes SharePoint, and Microsoft publishes no separate licence for the interface redesign; creating sites with AI from Build needs a Copilot licence, and creating entire sites with Copilot in SharePoint consumes Copilot Credits. The redesign's known cost is admin time for navigation, customisation testing and user communication.
impact: High. SharePoint users see it as soon as it arrives: the SharePoint home page is replaced with Discover and the app bar is redesigned.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; Governance guidance / admin-path: Site creation is controlled in SharePoint admin center > Settings > Site creation > Control site creation from tools. | Found: Go to Settings in the SharePoint admin center ... Select Site creation. ... To allow users to create sites, select Allow under Control site creation from tools. | Fix: Extend controls[2].ui.path to 'Settings > Site creation > Control site creation from tools > Allow', as documented at https://learn.microsoft.com/sharepoint/manage-site-creation. Keep the note describing the setting's scope. | Source: https://learn.microsoft.com/sharepoint/manage-site-creation
- [supported, minor] controls[4].ui; Governance guidance / admin-path: Home sites can be managed at SharePoint admin center > Settings > Home sites > Add. | Found: Select Settings, and then select Home sites. ... Option 2: Use an existing communication site ... Select Add, and then select Use an existing communication site. | Fix: Extend controls[4].ui.path to 'Settings > Home sites > Add > Use an existing communication site', as documented at https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center. This preserves the row's purpose of designating an existing communication site. | Source: https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center
-->
