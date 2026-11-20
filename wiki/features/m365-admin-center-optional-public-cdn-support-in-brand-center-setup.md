---
title: "Microsoft 365 admin center: set up Brand Center without enabling Public CDN"
slug: "m365-admin-center-optional-public-cdn-support-in-brand-center-setup"
roadmapId: 571391
topic: "governance"
products: ["Microsoft 365 admin center","SharePoint"]
summary: "Brand Center setup in the Microsoft 365 admin center is to make Public CDN optional, so only organisations that want brand fonts need it. Admins who have not set up Brand Center can choose at setup."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "SharePoint access requires an assigned licence that includes SharePoint; the Brand Center overview publishes no licence specific to this setup option. Customers with E3 or E5 licenses can use Organization Font Support in PowerPoint for the web."
audiences: ["m365-admin","service-owner"]
tags: ["m365-admin-center","sharepoint","brand-center","public-cdn","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 571391"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=571391"
    kind: "roadmap"
  - title: "SharePoint brand center"
    url: "https://learn.microsoft.com/sharepoint/brand-center-overview"
    kind: "learn"
  - title: "Font Licensing for the brand center"
    url: "https://learn.microsoft.com/sharepoint/brand-font-licensing"
    kind: "learn"
  - title: "Use the Office 365 Content Delivery Network (CDN) with SharePoint Online"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide"
    kind: "learn"
  - title: "Set-SPOTenantCdnEnabled"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantcdnenabled"
    kind: "learn"
  - title: "Office 365 Content Delivery Network (CDN) Quickstart"
    url: "https://learn.microsoft.com/microsoft-365/enterprise/office-365-cdn-quickstart?view=o365-worldwide"
    kind: "learn"
  - title: "Whether Public CDN is enabled when Brand Center is set up (Microsoft 365 admin center)"
    url: "https://learn.microsoft.com/sharepoint/brand-center-overview#setting-up-the-brand-center"
    kind: "learn"
  - title: "SharePoint Online service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether Public CDN is enabled when Brand Center is set up"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Brand center > Public CDN (optional)"
      docs: "https://learn.microsoft.com/sharepoint/brand-center-overview#setting-up-the-brand-center"
    api:
      kind: "powershell"
      call: "Set-SPOTenantCdnEnabled -CdnType Public -Enable $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantcdnenabled"
    note: "Setup is a Global Administrator task. The cmdlet requires Tenant administrator permissions and enables or disables the tenant's Public CDN; the Brand Center page does not say the setup option uses it."
confidence: "high"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-09-17T23:00:45"
changes:
  - date: "2026-11-20"
    note: "First briefing for this roadmap item: Public CDN becomes optional in Brand Center setup; Learn already documents the optional step while the roadmap lists the item as In development."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 47 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Correction: removed the unsupported no-action claim, reworded the Global Administrator role to the Learn page's terms, replaced the unpublished-CDN-price claim with the CDN's inclusion in SharePoint Online, set licensing to included, and dropped two site-owner checklist steps."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 47 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-20"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 47
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "a0fa91bfed1143587f24d179adce17ce"
---

## What's changing

The roadmap item states that Microsoft is updating the Brand Center setup experience so that administrators can set up Brand Center without enabling Public CDN. According to the roadmap description, Public CDN has been enabled as part of Brand Center setup even when an organisation wants only branding governance capabilities that do not need it. Organisations will be able to start using Brand Center and defer Public CDN until they need a capability that depends on it, such as organisational fonts.

Microsoft Learn already describes this behaviour. The SharePoint brand center page says that during setup you can choose whether to enable the Office 365 Content Delivery Network (CDN), a public CDN. It says Public CDN is required for brand fonts because it hosts the font files, and that brand colours and the other brand center capabilities do not require it. Where the Learn page and the roadmap record differ, report both: the roadmap record lists the item as In development, and the Learn page documents the optional choice as the current setup steps.

The Learn page gives the setup steps for three starting points. Where a tenant does not use SharePoint organisation assets, or uses them with a private CDN, a Global Administrator sees **Public CDN (optional)**, which the page says is turned off by default and can be enabled later. Where a tenant already uses organisation assets with a public CDN, the page says Public CDN is already enabled and no extra CDN action is needed.

The roadmap record gives the status as In development with a target of October CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on the web. That target month has passed at the time of writing (November 2026) and the status has not moved on the record.

## Why it matters

This is mainly a data-boundary decision made at setup. Public CDN is a public network: the Brand Center font licensing page warns that publishing fonts creates font catalog files that are publicly stored and accessible to anyone who can get their URLs. An organisation that wants only brand colours and other governance features can now set Brand Center up without making that choice on day one, and make it later when someone asks for fonts.

The roadmap describes a setup change; it does not specify an action for tenants that have already set up Brand Center. For tenants that have not, a Global Administrator must complete setup before the app exists, so the decision falls to whoever runs it. Agree with brand managers beforehand whether fonts are wanted, so setup does not have to be repeated or revisited.

## Risk assessment

**Data exposure**

- Enabling Public CDN is the step that makes brand font files public. The Brand Center font licensing page says the font catalog files are publicly stored along with the fonts and are accessible to anyone, including people outside the organisation, who can get the URLs. The optional setup choice lets an organisation avoid that until fonts are needed.
- The same page says not to use the feature if fonts contain proprietary information, carry cloud-hosting restrictions, or the organisation is not comfortable making them publicly available. Check font licences before the first upload, not at setup.

**Security & identity**

- The Brand Center page assigns setup and later Public CDN enablement to a Global Administrator; the CDN cmdlet reference requires Tenant administrator permissions. The Learn page says site owners of the brand center site can use the app, so the site's permissions decide who can then upload fonts once Public CDN is on.

**Autonomy & actions**

- No change: the roadmap item describes a setup choice and does not describe an agent or an automated action.

**Change & support**

- Brand managers who open Brand Center without Public CDN cannot add fonts: the Learn page says a Global Administrator must enable Public CDN first. Expect a support request and tell brand managers whom to ask.
- Multi-geo tenants: the Learn page says custom fonts in each additional geography need an organisation asset library in a site that uses the Public CDN.

## Cost and licensing

The Brand Center Learn page lists a Global Administrator as who sets Brand Center up and names no licence for Brand Center itself. SharePoint access requires an assigned licence that includes SharePoint; the Brand Center overview publishes no licence specific to this setup option. The one licence statement on the Brand Center page concerns fonts in PowerPoint for the web: customers with E3 or E5 licenses can take advantage of Organization Font Support there.

The Office 365 CDN service is included as part of the SharePoint Online subscription. The Learn page's text about Public CDN is about what it hosts and who enables it, not what it costs. The indirect cost is administrator time to decide whether fonts are wanted, to enable Public CDN later if they are, and to check font licences.

## Scope

Setup is done by a Global Administrator in the Microsoft 365 admin center, according to the Brand Center Learn page. The page says only one brand center is allowed for an organisation and that the brand center app is created in the primary geo of a tenant.

The roadmap record lists the clouds as Worldwide (Standard Multi-Tenant), the release phase as General Availability and the platform as Web. It does not list GCC, GCC High or DoD; that is a record fact, not a statement that the feature is unavailable there.

The Learn page says the Public CDN choice does not change how an existing SharePoint organisation assets library and template libraries are configured.

## Governance guidance

### Before rollout

- Decide with brand managers whether the organisation needs brand fonts; if not, plan to leave **Public CDN (optional)** off at setup.
- Check whether the tenant already uses SharePoint organisation assets, and with which CDN type, because the setup steps differ across the three scenarios the Learn page lists.
- Review font licences against the Brand Center font licensing page before any font is uploaded.
- Confirm which Global Administrator will run setup, and check a public CDN against your organisation's compliance, security and privacy policies if fonts will be used.

### At rollout

- Run setup in the Microsoft 365 admin center and choose the Public CDN option deliberately, as the first control row shows.

### After rollout

- Enable Public CDN from the brand center settings in the Microsoft 365 admin center only when a font request is approved.
- Record when and by whom Public CDN is enabled, using the controls table row as the reference for where the setting lives.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Public CDN is enabled when Brand Center is set up</strong><br><small>Tenant</small><br><small class="controls__note">Setup is a Global Administrator task. The cmdlet requires Tenant administrator permissions and enables or disables the tenant's Public CDN; the Brand Center page does not say the setup option uses it.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Brand center › Public CDN (optional) <a href="https://learn.microsoft.com/sharepoint/brand-center-overview#setting-up-the-brand-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenantCdnEnabled -CdnType Public -Enable $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenantcdnenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The first row covers the setup choice. The Learn page says that if Public CDN is deferred, a Global Administrator can enable it later from the brand center settings in the Microsoft 365 admin center; the page does not give a more detailed path for that later step.

The cmdlet in the second column is the Office 365 CDN reference for enabling or disabling the tenant's Public CDN, and it requires Tenant administrator permissions. The Brand Center page links to that CDN page for what Public CDN is; it does not say the setup option calls the cmdlet, so confirm the effect on Brand Center before scripting it.

Access to the brand center app is controlled through the permissions of the brand center site in the SharePoint admin center, as the Learn page's management table shows; that path is not given in the table above.

## Open questions

- Has the optional Public CDN choice shipped to all tenants? The Learn page documents it, but the roadmap record still lists the item as In development with a target of October CY2026. Watch the roadmap item and Message center.
- Does the Brand Center setup choice call the same tenant CDN setting that Set-SPOTenantCdnEnabled changes? The Learn pages do not say.
- What is the exact path in the Microsoft 365 admin center for enabling Public CDN after setup? The Learn page says only "brand center settings".
- Is Brand Center covered by a specific licence? The Learn page names none; watch the Brand Center overview page.

<!-- rationale
risk: Low. The change adds a choice at setup and lets an organisation avoid turning on a public CDN it does not need; nothing reaches users until a Global Administrator sets Brand Center up.
cost: Low. The only cost the sources show is administrator time to decide on Public CDN; the Office 365 CDN service is included as part of the SharePoint Online subscription, and the Brand Center overview names no licence specific to Brand Center.
impact: Low. Global Administrators who set up Brand Center see the change; brand managers notice it only when they want to add brand fonts and Public CDN has not yet been enabled.
-->
