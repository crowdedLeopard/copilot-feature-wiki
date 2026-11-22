---
kind: "concept"
title: "Restricted Content Discovery: how do you keep a SharePoint site out of Copilot and organisation-wide search?"
slug: "restricted-content-discovery"
summary: "A per-site SharePoint setting that limits discovery of a site's content in organisation-wide search and Microsoft Copilot responses and removes AI entry points from the site. It changes discoverability, not permissions."
created: "2026-11-22"
updated: "2026-11-22"
version: 1
tags: ["restricted-content-discovery","sharepoint","sharepoint-advanced-management","m365-copilot","oversharing","copilot-search","copilot-in-sharepoint","data-governance"]
covers: []
sources:
  - title: "Restrict discovery of SharePoint sites and content"
    url: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    kind: "learn"
  - title: "Prerequisites for SharePoint Advanced Management"
    url: "https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-prerequisites"
    kind: "learn"
  - title: "Set-SPOSite"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps"
    kind: "learn"
  - title: "Get ready for Microsoft 365 Copilot and agents with SharePoint Advanced Management"
    url: "https://learn.microsoft.com/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management"
    kind: "learn"
related: ["sharepoint-copilot-search-in-sharepoint-and-onedrive","sharepoint-html-pages","sharepoint-sharepoint-agents-in-teams-mobile","sensitivity-labels","auditing","ediscovery","declarative-agents"]
controls:
  - governs: "Whether a site's content is hidden from organisation-wide search and Copilot discovery, and AI entry points removed"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps"
    note: "Use $false to remove it. In the admin centre, select Save after turning the setting on. SharePoint sites only."
  - governs: "Whether site administrators can manage the setting for their own sites"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -DelegateRestrictedContentDiscoverabilityManagement $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps"
    note: "Site administrators who change the setting must give a justification."
  - governs: "A tenant report of sites where the setting is enabled"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Start-SPORestrictedContentDiscoverabilityReport"
      docs: "https://learn.microsoft.com/sharepoint/restricted-content-discovery"
    note: "View status and download with Get-SPORestrictedContentDiscoverabilityReport."
confidence: "high"
dependents: 11
changes:
  - date: "2026-11-22"
    note: "New concept page explaining Restricted Content Discovery, its licensing prerequisites and its site, tenant and reporting controls."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 55 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 53
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "5abc372d5859c57a62a13946bd83f5aa"
---

## What it is

Restricted Content Discovery is a site-level SharePoint setting that limits discovery of a site's content, including recently interacted files, in organisation-wide search results and Microsoft Copilot responses. It also removes AI-powered entry points from the site. Microsoft describes it as a temporary governance control that gives an organisation time to review and right-size access while it continues its Copilot deployment.

**What it changes**

- Users of a restricted site don't see the Copilot button, AI actions menus (including creating agents) or **Create pages with AI**.
- A Restricted tag is visible on a site that has the policy applied.
- Organisation-wide search experiences (SharePoint home, Office.com, Bing) and Microsoft Copilot discovery scenarios stop surfacing the site's content.

**What it does not change**

- Permissions. Users who already have access can keep using the content directly.
- The search index. The content stays in the Microsoft 365 search index, and Microsoft Purview capabilities such as eDiscovery and auto-labelling continue to work.
- Searches that start from site context, and experiences such as Microsoft 365 Feed and Recommendations.
- Work on content already in use, such as summarising an open document.

It applies to SharePoint sites only, not to OneDrive sites. Because the setting must propagate across indexing systems, a change is not instant.

## Why it matters

The setting gives an administrator a way to take a named set of sites, such as Finance or Human Resources, out of broad discovery while owners review who can open them. Microsoft lists sites with a high risk of oversharing, sites under permissions review and phased Copilot rollouts as the usual cases. It is a holding measure: it hides content from discovery but leaves an over-broad permission in place.

It also acts on the sites themselves. Microsoft says the Copilot button, AI actions and **Create pages with AI** disappear from restricted sites, so the one setting also decides whether users of that site see these AI entry points. Contrast it with Restricted Access Control, which Microsoft documents as stopping users outside a named group from accessing the site at all.

## Cost and licensing

Microsoft's page states two prerequisites. The organisation needs a Microsoft Copilot licence, and it must be able to use SharePoint Advanced Management (SAM). The SAM prerequisites page says an organisation gets SAM capabilities for its Copilot deployment when at least one user is assigned a Microsoft Copilot licence. The alternatives it lists are the SharePoint Advanced Management Plan 1 add-on (for subscriptions that include SharePoint K, P1 or P2) and Microsoft 365 E7. The organisation also needs one of the listed base subscriptions, such as Microsoft 365 E3 or E5.

The Restricted Content Discovery page publishes no separate price or meter for the setting at the time of writing (November 2026). Any Copilot licence price sits on Microsoft's licensing pages, not here.

## Risks and limits

- **Discovery is hidden, access is not.** A restricted site with broad permissions can still be opened by anyone who has them, and the content stays in the search index. Fix the permissions, or use Restricted Access Control, before treating the site as protected.
- **Overuse thins Copilot answers.** Microsoft cautions that excessive use can reduce the content available to organisation-wide search and Copilot, which affects completeness and relevance.
- **Changes can take days.** For sites with more than 500,000 items, an update could take more than a week to take full effect, so a freshly restricted site can still appear in results meanwhile.
- **Site-context searches still return the content.** Searches started from site context and experiences such as Microsoft 365 Feed and Recommendations are not affected.
- **OneDrive is out of scope.** Microsoft says the setting is not supported for OneDrive sites, so files kept there are outside it.
- **Delegation shifts the control.** When site administrators are allowed to manage the setting, they can manage it for their own sites, and Microsoft says they must give a justification for a change.
- **Temporary by design.** A restriction left in place after the review hides the site from Copilot indefinitely.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a site's content is hidden from organisation-wide search and Copilot discovery, and AI entry points removed</strong><br><small>Site</small><br><small class="controls__note">Use $false to remove it. In the admin centre, select Save after turning the setting on. SharePoint sites only.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Sites › Active sites › site › Settings › Restrict content from Microsoft Copilot <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site-url&gt; -RestrictContentOrgWideSearch $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether site administrators can manage the setting for their own sites</strong><br><small>Tenant</small><br><small class="controls__note">Site administrators who change the setting must give a justification.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -DelegateRestrictedContentDiscoverabilityManagement $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant?view=sharepoint-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A tenant report of sites where the setting is enabled</strong><br><small>Tenant</small><br><small class="controls__note">View status and download with Get-SPORestrictedContentDiscoverabilityReport.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Start-SPORestrictedContentDiscoverabilityReport</code> <a href="https://learn.microsoft.com/sharepoint/restricted-content-discovery" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft says only SharePoint administrators can manage the setting until tenant delegation is turned on. The SAM prerequisites page names the SharePoint Administrator and SharePoint Advanced Management Administrator roles, assigned in Microsoft Entra ID. The Set-SPOSite reference says the cmdlet needs a SharePoint Online administrator who is also a site collection administrator.

Check a single site with `Get-SPOSite -Identity <site-url> | Select RestrictContentOrgWideSearch`. Check delegation with `Get-SPOTenant | Select-Object DelegateRestrictedContentDiscoverabilityManagement`. The report cmdlets are `Get-SPORestrictedContentDiscoverabilityReport` with `-Action Download -ReportId <ReportGUID>` to download. The Purview audit log records enabling and disabling the setting and the justifications given; see [Microsoft Purview Audit](/concepts/auditing/). No Microsoft Graph or other REST call for the setting is documented at the time of writing.

## What to check

- Run the report from the table below to list every site where the setting is on, and compare it with the sites you meant to restrict.
- Confirm which of your sites carry the Restricted tag and whether each is still under review.
- Check whether tenant delegation is on, and who can therefore manage the setting.
- Review the permissions on each restricted site, because the setting does not change them.
- Search the Purview audit log for the enable, disable and justification events.
- Test after a change on large sites, allowing for index propagation before judging the result.

## Open questions

- Does a restricted site's content still ground declarative agents and other agents in every case? Microsoft's page names organisation-wide search and Copilot discovery scenarios but does not list agent grounding separately.
- What are the exact names of the Purview audit events? The page lists enabling, disabling and justifications but no event names.
- Is there a Microsoft Graph or REST equivalent of the per-site setting? None is documented at the time of writing.

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risks and limits: Temporary by design / behaviour: A restriction left in place after review hides the site from Copilot indefinitely. | Found: Searched: "Restricted Content Discovery" "expire". Read the RCD page in full and results for Manage access to agents in SharePoint and Catalog management. No passage states an indefinite duration; the RCD page also exempts content already in use. | Fix: Replace the bullet's sentence with: 'After the review is complete, you can remove the restriction and allow the sites to become discoverable again.' This is stated at https://learn.microsoft.com/sharepoint/restricted-content-discovery.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary; What it is; controls[0].governs / behaviour: The setting limits discovery of site content, including recently interacted files, in organisation-wide search and Microsoft Copilot responses. | Found: Restricted Content Discovery helps you limit discovery of content from specific SharePoint sites, including recently interacted files, in organization-wide search results and Microsoft Copilot responses while those reviews are taking place. | Fix: Add: 'Microsoft's Restricted Content Discovery page includes recently interacted files, but https://learn.microsoft.com/copilot/manage/copilot-search-manage describes an exception for content a user owns or recently interacted with, and https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-features-copilot-license describes a recent-interaction exception for Copilot Business Chat.' Do not resolve the disagreement by silently choosing either description. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] Cost and licensing / cost: Copilot licence pricing is published on Microsoft's pricing and licensing resources, not on the Restricted Content Discovery page. | Found: Before you purchase or assign licenses, confirm eligibility in the Microsoft Product Terms, Microsoft Copilot service description, and Microsoft Copilot pricing and plans. | Fix: Add the Microsoft pages relied on but missing from sources: https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-licensing, https://www.microsoft.com/en-us/copilot/pricing/business, https://learn.microsoft.com/copilot/manage/copilot-search-manage and https://learn.microsoft.com/sharepoint/sharepoint-advanced-management-features-copilot-license. The licensing page links to pricing and plans, and the pricing page publishes per-user subscription prices; the other two pages document the recent-interaction exceptions that should be acknowledged. | Source: https://learn.microsoft.com/microsoft-365/copilot/microsoft-365-copilot-licensing
- [supported, minor] controls[0].ui / admin-path: The setting is at SharePoint admin center > Sites > Active sites > site > Settings > Restrict content from Microsoft Copilot. | Found: In the SharePoint admin center, expand Sites and select Active sites. Select the site you want to configure. Open the Settings tab, and then turn Restrict content from Microsoft Copilot on. | Fix: Keep the documented path, but add to controls[0].note: 'The Copilot readiness guide instead labels the setting Restrict content discovery > On on the same Settings tab.' The differing label is at https://learn.microsoft.com/microsoft-365/copilot/get-ready-copilot-sharepoint-advanced-management. | Source: https://learn.microsoft.com/sharepoint/restricted-content-discovery
- [supported, minor] controls[0].api / command: Set-SPOSite -Identity <site-url> -RestrictContentOrgWideSearch $true enables the site's restriction. | Found: For any parameters that are passed in, the Set-SPOSite cmdlet sets or updates the setting for the site collection identified by parameter Identity. -RestrictContentOrgWideSearch Type: System.Boolean | Fix: Keep the command, which the RCD page explicitly gives, but add: 'The Set-SPOSite reference's valid-parameter list for Groups site collections omits RestrictContentOrgWideSearch, whereas the Restricted Content Discovery guide gives this command without that qualification.' Both pages are already cited. | Source: https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-sposite?view=sharepoint-ps
- [contradicted, minor] What to check: permission review and audit-log search / consistency: Every control the checklist tells readers to review or monitor has a controls-table row. | Found: Review the permissions on each restricted site, because the setting does not change them. Search the Purview audit log for the enable, disable and justification events. The table contains only the site restriction, tenant delegation and RCD inventory report. | Fix: The permission-review and Purview audit-log search checklist steps have no corresponding table rows. Remove these two checklist bullets; the permission warning and auditing guidance remain in the body. Do not add control rows as part of this correction.
-->
