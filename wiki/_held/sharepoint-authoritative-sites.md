---
title: "SharePoint: mark sites as authoritative so Copilot prioritises their content"
slug: "sharepoint-authoritative-sites"
roadmapId: 561323
topic: "m365-copilot"
products: ["SharePoint","Microsoft Copilot (Microsoft 365)"]
summary: "Administrators can mark up to 100 SharePoint sites as authoritative so Copilot Search treats their content as trusted. Launched; each site is an administrator's choice, so review which sites qualify and who owns the list."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: "May CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The authoritative sites page says 'A Microsoft Copilot license is required' and points to the SharePoint Advanced Management prerequisites, which come with a Microsoft 365 or Office 365 base subscription when at least one user has a Microsoft Copilot licence. No separate price or meter is published."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","copilot-search","copilot-chat","sharepoint-advanced-management","powershell","m365-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 561323"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561323"
    kind: "roadmap"
  - title: "SharePoint authoritative sites in Copilot Search"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites"
    kind: "learn"
  - title: "Prerequisites for SharePoint Advanced Management"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Set-SPOSite"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps"
    kind: "learn"
  - title: "Manage sites in the SharePoint admin center"
    url: "https://learn.microsoft.com/sharepoint/manage-sites-in-new-admin-center"
    kind: "learn"
videos: []
related: ["m365-admin-center-authoritative-content-management-for-m365-copilot-search","restricted-content-discovery","sharepoint-copilot-search-in-sharepoint-and-onedrive"]
controls:
  - governs: "Whether a SharePoint site is marked as authoritative"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Mark as authoritative site"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site URL> -IsAuthoritative $true"
      docs: "https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites"
    note: "Set-SPOSite needs a SharePoint Online administrator who is a site collection administrator. The UI option is from the 11 August 2026 release notes; Learn says to configure through PowerShell and CSOM."
  - governs: "Which SharePoint sites are authoritative content for Copilot Search, managed centrally"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Search > Authoritative content"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    api: null
    note: "Roadmap item 503553. Global admin or Global reader per the release notes; up to 100 sites, with bulk import and export. Not stated whether it is the same list as Set-SPOSite."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-06-05T22:00:28"
changes:
  - date: "2026-11-28"
    note: "First briefing for this launched roadmap item, covering site designation by PowerShell, CSOM and the SharePoint admin center, and its licensing."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 53
  unconfirmed: 3
  contradicted: 2
  attempts: 1
  hash: "457426166b453b49c3307dc07861a9d1"
---

## What's changing

Administrators can mark specific SharePoint sites as authoritative, meaning official, trusted sources, so that Copilot gives their content priority. Microsoft Learn's page for the feature says that when you mark a site as authoritative, Copilot Search experiences recognise its content as trusted, and visual signals such as the **From your organization** label make trusted items easier to identify. The roadmap item names company news, policies and updates as the content to promote and says it is prioritised across Copilot Chat and Copilot Search; the Learn page and the Microsoft 365 Copilot release notes describe Copilot Search experiences only.

Designation is per site. The Learn page says that in the current release you configure authoritative sites through PowerShell and CSOM (client-side object model) APIs, that designation is site-level and that personal sites can't be marked. The Microsoft 365 Copilot release notes for 11 August 2026 instead tell administrators to open the SharePoint admin center, select a site and choose 'Mark as authoritative site'. Both accounts are reported here. Up to 100 sites can be marked, and changes can take up to 72 hours to appear.

The roadmap record shows status Launched, release phase General Availability and Preview, preview date May CY2026 and target June CY2026, for Worldwide (Standard Multi-Tenant) on Web. The release notes list the feature under 11 August 2026 with the platforms Windows and Web. A separate roadmap item, 503553, adds an authoritative content list in the Microsoft 365 admin center (see [the briefing on it](/features/m365-admin-center-authoritative-content-management-for-m365-copilot-search/)).

## Why it matters

This gives a service owner a direct say in what Copilot Search presents as official. Marking the policy, HR and news sites lets their content stand out from copies, drafts and team-site versions of the same material. The same lever works in reverse: a marked site full of outdated or wrongly shared documents gets those documents promoted and labelled as coming from the organisation, so the list needs an owner and a review cycle.

Microsoft has not stated what happens on arrival, and no source says existing Copilot Search ranking changes before a site is marked. The pages describe marking as something an administrator does, one site at a time or in bulk, so the decision for most tenants is whether to use it and which sites qualify.

## Risk assessment

**Data exposure**
- Marking a site promotes whatever the site holds, including stale or overshared files, and labels it **From your organization**. Review each candidate site's content and sharing before marking it; to keep a site out of Copilot instead, see [Restricted Content Discovery](/concepts/restricted-content-discovery/).
- Personal sites can't be marked as authoritative, per the Learn page.

**Security & identity**
- `Set-SPOSite` requires an account that is a SharePoint Online administrator and a site collection administrator of the site.
- The CSOM route on the Learn page registers a Microsoft Entra ID app with `Sites.FullControl.All` application permissions for SharePoint and Microsoft Graph. Treat that app as a high-privilege credential and remove it when bulk work is done.

**Autonomy & actions**
- No change: the feature is a designation administrators set on sites; it takes no action on content.

**Change & support**
- Changes can take up to 72 hours to appear, so expect questions from site owners who check straight away.
- The Learn page advises validating behaviour after site deletion or restore events, and says multi-geo tenants manage authoritative site data per geo.
- Sites can be designated in SharePoint and listed in the Microsoft 365 admin center (roadmap 503553); Microsoft has not stated whether these are the same list, so give one team ownership of both.

## Cost and licensing

**Licence.** The SharePoint authoritative sites page lists 'A Microsoft Copilot license is required' under troubleshooting and links its prerequisites to the SharePoint Advanced Management prerequisites page. That page requires a base subscription (Office 365 E3, E5 or A5; Microsoft 365 E1, E3, E5 or A5; or Microsoft 365 GCC, GCC-High or DoD) and says SharePoint Advanced Management capabilities that support a Copilot deployment are available when at least one user in the organisation is assigned a Microsoft Copilot licence. It also lists the SharePoint Advanced Management Plan 1 add-on and Microsoft 365 E7 as routes; the authoritative sites page names only the Copilot licence.

**Meter.** The authoritative sites page and the release notes publish no price or meter for this feature at the time of writing (November 2026).

**Indirect costs.** Admin time to choose, review and maintain up to 100 sites, and, for the CSOM route, time to register and later remove the Entra ID app.

## Scope

- **Who configures it:** for `Set-SPOSite`, a SharePoint Online administrator who is also a site collection administrator. The release notes say Global admin or Global reader roles can view, add, delete and bulk import or export sites in the Microsoft 365 admin center list.
- **Which sites:** SharePoint sites at site level, up to 100; personal sites excluded; managed per geo in multi-geo tenants.
- **Where users see it:** Copilot Search experiences, per Learn; the roadmap item also names Copilot Chat.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant) and Web, per the roadmap record; the release notes list Windows and Web.
- **Prerequisites:** the latest SharePoint Online Management Shell for PowerShell; CSOM version 16.1.26914.12004 or later for the CSOM route.

## Governance guidance

### Before rollout
- Name an owner for the authoritative site list, such as the intranet or internal communications team, and agree the criteria a site must meet.
- Shortlist no more than 100 sites, per geo in a multi-geo tenant, starting with policy, HR and news sites.
- Review each shortlisted site's content and sharing, and remove superseded documents before marking it.
- Decide whether to mark sites with `Set-SPOSite`, the SharePoint admin center or the Microsoft 365 admin center list, and record the choice in the runbook.

### At rollout
- Mark each site with `Set-SPOSite -Identity <site URL> -IsAuthoritative $true` from an account that is a SharePoint Online administrator and site collection administrator.
- Wait up to 72 hours, then search for known content from a marked site in Copilot Search and check for the **From your organization** label.
- Test the same content in Copilot Chat, which the roadmap item names but Learn does not describe.
- Tell owners of marked sites that their content now carries the organisation's label.

### After rollout
- Review the list regularly and remove sites that are outdated or no longer official, as the Learn page advises.
- Validate behaviour after a marked site is deleted or restored.
- Remove the Entra ID app registered for CSOM once bulk changes are finished.
- Check Copilot > Search > Authoritative content in the Microsoft 365 admin center to see whether sites marked in SharePoint appear there.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a SharePoint site is marked as authoritative</strong><br><small>Site</small><br><small class="controls__note">Set-SPOSite needs a SharePoint Online administrator who is a site collection administrator. The UI option is from the 11 August 2026 release notes; Learn says to configure through PowerShell and CSOM.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Mark as authoritative site <a href="https://learn.microsoft.com/microsoft-365/copilot/release-notes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site URL&gt; -IsAuthoritative $true</code> <a href="https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which SharePoint sites are authoritative content for Copilot Search, managed centrally</strong><br><small>Tenant</small><br><small class="controls__note">Roadmap item 503553. Global admin or Global reader per the release notes; up to 100 sites, with bulk import and export. Not stated whether it is the same list as Set-SPOSite.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Search › Authoritative content <a href="https://learn.microsoft.com/microsoft-365/copilot/release-notes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The Learn page says configuration in the current release is through PowerShell and CSOM; the SharePoint admin center option comes from the 11 August 2026 release notes. For bulk work the Learn page documents CSOM methods on the tenant object: `GetAuthoritativeResources`, `SetResourceAsAuthoritative`, `RemoveResourceAsAuthoritative`, `BulkSetResourceAsAuthoritative` and `BulkRemoveResourceAsAuthoritative`, which need CSOM 16.1.26914.12004 or later. Microsoft Learn documents no Microsoft Graph API for the Microsoft 365 admin center authoritative content list at the time of writing (November 2026). Microsoft has not stated whether that list and the SharePoint site designation are the same list or share the 100-site limit.

## Open questions

- Does marking a site change answers in Copilot Chat, as the roadmap item states, or only Copilot Search, as Learn describes? Watch the authoritative sites page.
- Are sites marked with `Set-SPOSite` the same list as Copilot > Search > Authoritative content in the Microsoft 365 admin center, and do they share one 100-site limit?
- The Learn page's troubleshooting asks administrators to make sure the feature is enabled in the tenant: which setting does that refer to?
- Does a tenant with the SharePoint Advanced Management Plan 1 add-on but no Microsoft Copilot licence get the feature? Watch the prerequisites page.

<!-- rationale
risk: Low. A site becomes authoritative only when an administrator marks it, and Microsoft describes the effect as Copilot Search recognising that site's content as trusted and labelling it.
cost: Low. The feature page says a Microsoft Copilot licence is required and publishes no separate price or meter; the known cost is admin time to choose and maintain the list.
impact: Low. Administrators make the change; users notice only once sites are marked, through ranking and the From your organization label in Copilot Search.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure; Why it matters / behaviour: Marking a site promotes whatever it holds, including stale or overshared files, and labels all that content From your organization. | Found: Searched: '"authoritative sites" "all content" "no action"'; '"authoritative sites" "content" "permissions" "Restricted Content Discovery"'. Opened authoritative-sites and release-notes. Neither guarantees promotion and labelling of every file. | Fix: Replace the factual premise in both sections with: 'Copilot Search recognises content from marked sites as trusted. This makes reviewing candidate sites for stale or overshared content important.' Do not say that every file is promoted or labelled.
- [contradicted, blocker] Risk assessment: Data exposure / applicability: Restricted Content Discovery can keep a site out of Copilot. | Found: Restricted Content Discovery doesn't affect experiences that operate on content that's already in use by the user, such as summarizing an open document. | Fix: Replace 'to keep a site out of Copilot instead' with 'to limit a site's discoverability in organization-wide search and Microsoft Copilot discovery scenarios instead'. Add: 'Restricted Content Discovery does not prevent Copilot from summarising an open document.' Cite https://learn.microsoft.com/sharepoint/restricted-content-discovery. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no action on content. | Found: Searched: '"authoritative sites" "all content" "no action"'. Opened authoritative-sites and the feature's release-note entry. They describe administrator designation and search effects, not an exhaustive guarantee of no content actions. | Fix: Replace 'No change: the feature is a designation administrators set on sites; it takes no action on content' with 'The documented operation is an administrator setting an authoritative designation on a site.'
- [unsupported, blocker] Governance guidance: Before rollout / behaviour: A multi-geo tenant can shortlist up to 100 authoritative sites per geo. | Found: Searched: '"authoritative sites" "100" "geo"'. Opened authoritative-sites and release-notes. Learn separately states a 100-site limit and per-geo data management; it does not state that each geo receives its own 100-site allowance. | Fix: Replace the bullet with: 'Shortlist no more than 100 sites, starting with policy, HR and news sites. In multi-geo tenants, manage authoritative site data per geo.' Do not attach 'per geo' to the numerical allowance.
- [contradicted, blocker] front matter: defaultState; Why it matters; rationale: risk; rationale: impact / consistency: The default is unknown, but the rationales assert that authoritative designation and user-visible changes happen only after administrator marking. | Found: defaultState: "unknown"; "Microsoft has not stated what happens on arrival"; "A site becomes authoritative only when an administrator marks it"; "users notice only once sites are marked" | Fix: Keep defaultState as unknown: searches for 'SharePoint authoritative sites default enabled tenant Set-SPOTenant IsAuthoritative default' and '"authoritative sites" "default" "automatically" "before"' found no stated arrival default. Replace the risk rationale with 'Low. The default is not stated, so this assessment assumes today's behaviour continues. Microsoft describes marked sites as trusted sources in Copilot Search.' Replace the impact rationale with 'Low. The documented change is an administrator designation, with ranking and visual signals in Copilot Search. Microsoft has not stated what happens on arrival.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls; Governance guidance: At rollout / command: Set-SPOSite -Identity <site URL> -IsAuthoritative $true marks a site authoritative. | Found: Set-SPOSite -Identity "https://<tenant>.sharepoint.com/sites/<siteName>" -IsAuthoritative $true | Fix: Keep the call. Add to controls[0].note: 'The Set-SPOSite reference's supported-parameter list for Groups site collections omits IsAuthoritative, whereas the authoritative-sites page gives this general site command.' Both pages are already cited; the conflicting list is at https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps. | Source: https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites
- [supported, minor] front matter: licensing.notes; Cost and licensing; Open questions; rationale: cost / licensing: The authoritative-sites page requires a Microsoft Copilot license and points to SharePoint Advanced Management prerequisites. | Found: **Licensing**: A Microsoft Copilot license is required. (See Prerequisites for SharePoint Advanced Management.) | Fix: Add to the Licence paragraph: 'The Set-SPOSite IsAuthoritative reference describes an admin with a Copilot license marking the site, while the SharePoint Advanced Management prerequisites say the licensed user need not be a SharePoint administrator.' The differing wording is at https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps and https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites. | Source: https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites
-->
