---
title: "Microsoft 365 admin center: set up Brand Center without enabling Public CDN"
slug: "m365-admin-center-optional-public-cdn-support-in-brand-center-setup"
roadmapId: 571391
topic: "governance"
products: ["Microsoft 365 admin center","SharePoint"]
summary: "Brand Center setup in the Microsoft 365 admin center is to make Public CDN optional, so only organisations that want brand fonts need it. Admins who have not set up Brand Center can choose; no action is required otherwise."
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
  model: "unknown"
  notes: "Not yet published: the Brand Center page names no licence for Brand Center itself. It says only that customers with E3 or E5 licenses can use Organization Font Support in PowerPoint for the web."
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
version: 1
verification:
  status: "held"
  date: "2026-11-20"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 47
  confirmed: 43
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "403dc311699ce2ba91293df10b79b967"
---

## What's changing

The roadmap item states that Microsoft is updating the Brand Center setup experience so that administrators can set up Brand Center without enabling Public CDN. According to the roadmap description, Public CDN has been enabled as part of Brand Center setup even when an organisation wants only branding governance capabilities that do not need it. Organisations will be able to start using Brand Center and defer Public CDN until they need a capability that depends on it, such as organisational fonts.

Microsoft Learn already describes this behaviour. The SharePoint brand center page says that during setup you can choose whether to enable the Office 365 Content Delivery Network (CDN), a public CDN. It says Public CDN is required for brand fonts because it hosts the font files, and that brand colours and the other brand center capabilities do not require it. Where the Learn page and the roadmap record differ, report both: the roadmap record lists the item as In development, and the Learn page documents the optional choice as the current setup steps.

The Learn page gives the setup steps for three starting points. Where a tenant does not use SharePoint organisation assets, or uses them with a private CDN, a Global Administrator sees **Public CDN (optional)**, which the page says is turned off by default and can be enabled later. Where a tenant already uses organisation assets with a public CDN, the page says Public CDN is already enabled and no extra CDN action is needed.

The roadmap record gives the status as In development with a target of October CY2026, for Worldwide (Standard Multi-Tenant), General Availability, on the web. That target month has passed at the time of writing (November 2026) and the status has not moved on the record.

## Why it matters

This is mainly a data-boundary decision made at setup. Public CDN is a public network: the Brand Center font licensing page warns that publishing fonts creates font catalog files that are publicly stored and accessible to anyone who can get their URLs. An organisation that wants only brand colours and other governance features can now set Brand Center up without making that choice on day one, and make it later when someone asks for fonts.

If nobody does anything, nothing changes for tenants that have already set up Brand Center. For tenants that have not, a Global Administrator must complete setup before the app exists, so the decision falls to whoever runs it. Agree with brand managers beforehand whether fonts are wanted, so setup does not have to be repeated or revisited.

## Risk assessment

**Data exposure**

- Enabling Public CDN is the step that makes brand font files public. The Brand Center font licensing page says the font catalog files are publicly stored along with the fonts and are accessible to anyone, including people outside the organisation, who can get the URLs. The optional setup choice lets an organisation avoid that until fonts are needed.
- The same page says not to use the feature if fonts contain proprietary information, carry cloud-hosting restrictions, or the organisation is not comfortable making them publicly available. Check font licences before the first upload, not at setup.

**Security & identity**

- Setup and Public CDN enablement are Global Administrator tasks on the Learn page, so the decision is limited to one role. The Learn page says site owners of the brand center site can use the app, so the site's permissions decide who can then upload fonts once Public CDN is on.

**Autonomy & actions**

- No change: the roadmap item describes a setup choice and does not describe an agent or an automated action.

**Change & support**

- Brand managers who open Brand Center without Public CDN cannot add fonts: the Learn page says a Global Administrator must enable Public CDN first. Expect a support request and tell brand managers whom to ask.
- Multi-geo tenants: the Learn page says custom fonts in each additional geography need an organisation asset library in a site that uses the Public CDN.

## Cost and licensing

The Brand Center Learn page lists a Global Administrator as who sets Brand Center up and names no licence for Brand Center itself. The licence for Brand Center is not yet published. The one licence statement on the page concerns fonts in PowerPoint for the web: customers with E3 or E5 licenses can take advantage of Organization Font Support there.

Microsoft has published no price or meter for the optional Public CDN choice at the time of writing (November 2026). The Learn page's text about Public CDN is about what it hosts and who enables it, not what it costs. The indirect cost is administrator time to decide whether fonts are wanted, to enable Public CDN later if they are, and to check font licences.

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
- Add site owners to the brand center site and share the site link only with the people who should use the app.

### After rollout

- Enable Public CDN from the brand center settings in the Microsoft 365 admin center only when a font request is approved.
- Record when and by whom Public CDN is enabled, using the controls table row as the reference for where the setting lives.
- Review the brand center site owners periodically, since site owners can use the app.

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
cost: Low. The only cost the sources show is administrator time to decide on Public CDN; no licence or meter for Brand Center is published on the pages read, and Microsoft has not published pricing for this change.
impact: Low. Global Administrators who set up Brand Center see the change; brand managers notice it only when they want to add brand fonts and Public CDN has not yet been enabled.
-->

<!-- verifier-findings (2026-11-20, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary; Why it matters / default: No action is required otherwise, and nothing changes for any tenant that has already set up Brand Center. | Found: Searched: Brand center optional Public CDN existing brand centers no action required rollout. Read brand-center-overview and roadmap record; neither states an unchanged-state or no-action guarantee for all already-configured Brand Centers. | Fix: Remove 'no action is required otherwise' from the summary. Replace 'If nobody does anything, nothing changes for tenants that have already set up Brand Center' with 'The roadmap describes a setup change; it does not specify an action for tenants that have already set up Brand Center.'
- [unsupported, blocker] Risk assessment: Security & identity / role: The decision to enable Public CDN is limited to the Global Administrator role alone. | Found: Searched: Office 365 Public CDN enable required role SharePoint administrator Global Administrator Set-SPOTenantCdnEnabled. Read Brand Center overview, CDN guidance and cmdlet reference; none states Global Administrator exclusivity. | Fix: Replace 'Setup and Public CDN enablement are Global Administrator tasks on the Learn page, so the decision is limited to one role' with 'The Brand Center page assigns setup and later Public CDN enablement to a Global Administrator; the CDN cmdlet reference requires Tenant administrator permissions.'
- [contradicted, blocker] Cost and licensing; rationale: cost / cost: Microsoft has published no price or meter for the optional Public CDN choice, leaving its cost unpublished. | Found: The Office 365 CDN service is included as part of your SharePoint Online subscription. | Fix: Replace 'Microsoft has published no price or meter for the optional Public CDN choice at the time of writing (November 2026)' with 'The Office 365 CDN service is included as part of the SharePoint Online subscription.' In the cost rationale, replace the claims of unpublished CDN pricing with that same inclusion statement. Retain the low cost rating for administrator time and the narrower absence of a Brand Center-specific licence. | Source: https://learn.microsoft.com/microsoft-365/enterprise/use-microsoft-365-cdn-with-spo?view=o365-worldwide
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model; Cost and licensing; rationale: cost / licensing: Brand Center licensing is unknown because no feature-specific licence is published. | Found: To access SharePoint, users in your organization need to be assigned a license that includes SharePoint. | Fix: Set licensing.model to 'included'. Replace the unqualified 'The licence for Brand Center is not yet published' with 'SharePoint access requires an assigned licence that includes SharePoint; the Brand Center overview publishes no licence specific to this setup option.' Cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description in sources and retain the separate E3/E5 statement about PowerPoint fonts. | Source: https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description
- [contradicted, minor] Governance guidance: At rollout and After rollout; controls / consistency: The checklist tells administrators to add and review Brand Center site owners, but the controls table has no site-permissions row. | Found: Add site owners to the brand center site Review the brand center site owners periodically controls: Whether Public CDN is enabled when Brand Center is set up | Fix: The 'Add site owners' and 'Review the brand center site owners' checklist steps name a control absent from the table. Remove those two checklist bullets; retain the documented explanation of site permissions in Governance controls.
-->
