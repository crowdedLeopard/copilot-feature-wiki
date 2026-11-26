---
title: "Microsoft 365 admin center: authoritative SharePoint sites for Copilot Search"
slug: "m365-admin-center-authoritative-content-management-for-m365-copilot-search"
roadmapId: 503553
topic: "governance"
products: ["Microsoft 365 admin center"]
summary: "Admins can mark up to 100 SharePoint sites as authoritative so Copilot Search ranks them higher. Launched in the Microsoft 365 admin center; nothing stated forces action, and each site is a choice for a Global admin to make."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The SharePoint authoritative sites page says 'A Microsoft Copilot license is required' and links to the SharePoint Advanced Management prerequisites. A price or meter specific to the admin center list is not yet published."
audiences: ["m365-admin","service-owner"]
tags: ["copilot-control-system","copilot-search","m365-copilot","m365-admin-center","sharepoint"]
sources:
  - title: "Microsoft 365 Roadmap item 503553"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=503553"
    kind: "roadmap"
  - title: "MC1526676: Microsoft 365 admin center: Manage authoritative sources for Microsoft 365 Copilot Search"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1526676"
    kind: "message-center"
  - title: "SharePoint authoritative sites in Copilot Search"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites"
    kind: "learn"
  - title: "Prerequisites for SharePoint Advanced Management"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites"
    kind: "learn"
  - title: "Microsoft Copilot Search admin experience"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-admin-experience"
    kind: "learn"
  - title: "Microsoft 365 Copilot release notes"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    kind: "learn"
  - title: "Set-SPOSite"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps"
    kind: "learn"
  - title: "Whether an individual SharePoint site is marked authoritative (PowerShell route) (SharePoint admin center)"
    url: "https://learn.microsoft.com/microsoft-365/copilot/release-notes#august-11,-2026"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which SharePoint sites are authoritative content for Copilot Search"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Copilot > Search > Authoritative content"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/release-notes"
    api: null
    note: "Global admin and Global reader per MC1526676. Up to 100 sites; the notice mentions bulk import and export."
  - governs: "Whether an individual SharePoint site is marked authoritative (PowerShell route)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "site > Mark as authoritative site"
      docs: "https://learn.microsoft.com/microsoft-365/copilot/release-notes#august-11,-2026"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site URL> -IsAuthoritative $true"
      docs: "https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites"
    note: "Needs a SharePoint Online administrator who is a site collection administrator. Not stated whether this feeds the admin center list. Bulk work uses CSOM on the same page."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-09-21T23:04:49"
changes:
  - date: "2026-11-19"
    note: "First briefing for this launched roadmap item, covering the admin center list, the SharePoint PowerShell route and the open questions between them."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 53 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-19"
    note: "Corrected two statements: who sees the effect (users with an eligible Microsoft Copilot licence) and the SharePoint site-designation route, which the 11 August 2026 release notes describe in the SharePoint admin center."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 59 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 56 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 56
  confirmed: 55
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "76b33883da7d473ef1444c346a27692b"
---

## What's changing

The Microsoft 365 admin center now lets admins specify SharePoint sites as authoritative content for Microsoft 365 Copilot Search. The roadmap item states that, under Copilot > Search > Authoritative content, admins can add and manage up to 100 SharePoint sites to enhance their relevance and ranking. Microsoft's notice MC1526676 adds that admins can view, add and delete the sites in the admin center and bulk import or export them.

Microsoft Learn describes authoritative sites as official, organisation-managed SharePoint sources whose content Copilot Search recognises as trusted. Visual signals, such as the **From your organization** label, make trusted items easier to identify. The Learn page for this feature gives a different route from the roadmap: it states that 'In the current release, configure authoritative sites through PowerShell and CSOM APIs', and it has no admin center steps. The two accounts are reported side by side here; Learn does not say whether the admin center list and the PowerShell setting are the same list.

The roadmap record shows status Launched, release phase General Availability, target September CY2026, for Worldwide (Standard Multi-Tenant) on Web. MC1526676 (published 26 October 2026, Microsoft's end date 31 December 2026) gives a rollout window of late September 2026 for both Public Preview and General Availability in Worldwide, and sets no act-by date. The Microsoft 365 Copilot release notes list the feature under 4 November 2026.

## Why it matters

This is a new way to steer what Copilot Search treats as official. A service owner can name the policy, intranet and news sites that should win over copies, drafts and team sites, and users with an eligible Microsoft Copilot licence can see the effect in Copilot Search. A poor list, with outdated or unofficial sites, promotes the wrong content, so the list needs an owner.

If nobody acts, Microsoft has not stated what happens on arrival, and no source says existing search behaviour changes. The sensible stance is to review the capability, decide which sites qualify, and agree who maintains the list.

## Risk assessment

**Data exposure**
- Designating a site raises its content in Copilot Search results and adds the 'From your organization' label. Before designating a site, confirm with a test account that its content is still shown only to people who already have access to it.
- Personal sites can't be marked as authoritative, per the SharePoint authoritative sites page.

**Security & identity**
- The admin center list is available to the Global admin and Global reader roles, according to MC1526676. The release notes say these roles can 'view, add, delete, and bulk import or export'; confirm whether Global reader can change the list or only read it.
- The PowerShell route needs a SharePoint Online administrator who is also a site collection administrator to run Set-SPOSite. The CSOM route on the same page has you register an Entra ID app with `Sites.FullControl.All` application permissions, so treat that app as a high-privilege credential.

**Autonomy & actions**
- The described feature is a list that admins maintain, which Copilot Search uses for relevance and ranking. No agent or autonomous action is part of the description.

**Change & support**
- Up to 100 sites can be marked authoritative; plan which 100 before importing in bulk.
- The SharePoint page says changes can take up to 72 hours to appear in supported experiences, so expect support questions soon after an edit.
- Multi-geo tenants manage authoritative site data per geo, per the same page.

## Cost and licensing

**Licence.** The SharePoint authoritative sites page lists 'A Microsoft Copilot license is required' under troubleshooting, and its prerequisites section links to the SharePoint Advanced Management prerequisites page. That page says SharePoint Advanced Management capabilities that support a Copilot deployment are available when at least one user in the organisation is assigned a Microsoft Copilot licence. The Copilot Search admin experience page separately says users with an eligible Microsoft Copilot licence can use Copilot Search, and users without one get the Microsoft Search experience.

**Meter.** Microsoft's pages show no separate meter, add-on or price for authoritative content at the time of writing (November 2026), and the roadmap item names none.

**Indirect costs.** Admin time to choose, review and update the list, and communication to site owners and users.

## Scope

- **Who can manage it:** Global admin and Global reader, per MC1526676. For the PowerShell route, a SharePoint Online administrator who is also a site collection administrator.
- **Clouds and platform:** the roadmap lists Worldwide (Standard Multi-Tenant) and Web.
- **What can be designated:** SharePoint sites, one site at a time or in bulk, up to 100. Personal sites can't be marked, and designation is site-level only, per the SharePoint authoritative sites page.
- **Rollout:** the roadmap shows Launched; MC1526676 gives late September 2026 for the rollout window.
- **Prerequisites:** the SharePoint page points to the SharePoint Advanced Management prerequisites, which include a Microsoft 365 base subscription and the licence condition described under cost.
- **Multi-geo:** authoritative site data is managed per geo.

## Governance guidance

### Before rollout
- Agree with content owners which official sites qualify (policies, news, HR and IT portals) and name the person who maintains the list.
- Confirm that your Global admin or Global reader accounts can open Copilot > Search > Authoritative content (row 1 in the table).
- Check that the tenant has a Microsoft Copilot licence assigned to at least one user, as the SharePoint Advanced Management prerequisites require.

### At rollout
- Add the agreed sites in the Microsoft 365 admin center, or import them in bulk, staying within the 100-site limit (row 1).
- Decide whether any sites will be marked through Set-SPOSite instead, and test whether they appear in the admin center list (row 2).
- Search as a licensed test user and as a user without access to a designated site to see the label and ranking.

### After rollout
- Review the list on a schedule and remove sites that are outdated or no longer official, as the SharePoint page advises.
- Allow up to 72 hours before treating a change as failed.
- Record which route (admin center or PowerShell) is the source of truth for your list.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which SharePoint sites are authoritative content for Copilot Search</strong><br><small>Tenant</small><br><small class="controls__note">Global admin and Global reader per MC1526676. Up to 100 sites; the notice mentions bulk import and export.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Copilot › Search › Authoritative content <a href="https://learn.microsoft.com/microsoft-365/copilot/release-notes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether an individual SharePoint site is marked authoritative (PowerShell route)</strong><br><small>Site</small><br><small class="controls__note">Needs a SharePoint Online administrator who is a site collection administrator. Not stated whether this feeds the admin center list. Bulk work uses CSOM on the same page.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>site › Mark as authoritative site <a href="https://learn.microsoft.com/microsoft-365/copilot/release-notes#august-11,-2026" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site URL&gt; -IsAuthoritative $true</code> <a href="https://learn.microsoft.com/sharepoint/sharepoint-authoritative-sites" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The two rows are separate routes. Row 1 is the admin center list that the roadmap item and MC1526676 describe. Row 2 is the SharePoint Online Management Shell setting documented on the SharePoint authoritative sites page, which also documents CSOM methods for bulk work. Microsoft Learn does not say that the two share one list or one 100-site limit, so test the interaction before relying on either.

The SharePoint page states that it documents PowerShell and CSOM for the current release and gives no admin center steps for site designation. The 11 August 2026 release notes describe selecting a site in the SharePoint admin center and choosing Mark as authoritative site; the full navigation path is not documented, so none is given here beyond those two steps.

The Microsoft 365 admin center path comes from the release notes and the roadmap description. The Copilot Search admin experience page documents the Search module for bookmarks and acronyms and does not cover authoritative content.

## Open questions

- Are the admin center list and the SharePoint PowerShell and CSOM designation the same list, and is the 100-site limit shared? Watch the SharePoint authoritative sites page and Message center.
- Can Global reader add and delete sites, or only view the list? The notice says the feature is available to both roles.
- What does Copilot Search show before any site is designated? Microsoft's pages do not state the default for this feature.
- Is there a documented API for the admin center list, or a defined file format for bulk import and export?
- Does a Microsoft Copilot licence apply to every user who sees the effect, or only to the tenant that configures it?

<!-- rationale
risk: Low. The feature changes ranking and labelling of search results for sites an admin chooses, and no source says it changes anything until sites are designated; its default is not stated, so this rates today's behaviour continuing.
cost: Low. The SharePoint page for this feature names a Microsoft Copilot licence as a requirement and shows no separate meter or add-on; the cost known today is admin time to choose and review sites. Any separate price is not yet published.
impact: Low. Admins configure it, and users see an effect only for sites an admin designates, such as a 'From your organization' label and, per the roadmap, better ranking in Copilot Search.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Governance controls: paragraph beginning The SharePoint page / absence: The full navigation to the SharePoint site-designation control is not documented. | Found: In the SharePoint admin center, select Sites > Active sites or browse to the Active sites page. In the left column, select a site. | Fix: Replace 'the full navigation path is not documented, so none is given here beyond those two steps' with 'The site-selection navigation is documented on Manage sites in the SharePoint admin center; the designation action is documented in the 11 August 2026 release notes.' Cite https://learn.microsoft.com/sharepoint/manage-sites-in-new-admin-center alongside the existing release-notes link. The complete route is 'Sites > Active sites > site > Mark as authoritative site'. | Source: https://learn.microsoft.com/sharepoint/manage-sites-in-new-admin-center
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance controls / admin-path: The SharePoint admin center route selects a site and then Mark as authoritative site. | Found: Open the SharePoint admin center. Select a site and choose 'Mark as authoritative site.' | Fix: Expand controls[1].ui.path and its rendered table cell to 'Sites > Active sites > site > Mark as authoritative site'. Add https://learn.microsoft.com/sharepoint/manage-sites-in-new-admin-center to sources; it documents 'Sites > Active sites' followed by selecting a site. Retain the release-notes docs link for the designation action. | Source: https://learn.microsoft.com/microsoft-365/copilot/release-notes#august-11,-2026
- [supported, minor] Cost and licensing; Scope; Governance guidance / licensing: The SAM prerequisites grant Copilot-supporting capabilities when at least one organization user is assigned a Microsoft Copilot license. | Found: At least one user in your organization is assigned a Microsoft Copilot license. (The user doesn't need to be a SharePoint administrator.) | Fix: After the tenant-level licensing statement, add: 'The Set-SPOSite reference instead describes -IsAuthoritative as used by an admin with a Copilot licence; this differs from the tenant-level SAM prerequisite.' Cite https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps#-isauthoritative, which says 'When an admin with a Copilot license marks a site as authoritative'. Retain the supported tenant-level statement. | Source: https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites
-->
