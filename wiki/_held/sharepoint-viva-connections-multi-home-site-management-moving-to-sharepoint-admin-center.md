---
title: "SharePoint: Viva Connections multi-home site management moves to the SharePoint admin center"
slug: "sharepoint-viva-connections-multi-home-site-management-moving-to-sharepoint-admin-center"
roadmapId: 567887
topic: "modern-work"
products: ["SharePoint","Microsoft Viva"]
summary: "Microsoft is moving management of multiple Viva Connections home sites, audiences and priority order from the Microsoft 365 admin center to the SharePoint admin center. Admins need to update procedures; Microsoft's notice says no action is required."
status: "in-development"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "mixed"
  notes: "Learn: one experience needs an E, F or A licence; two or more (up to 50) need Microsoft Viva Suite or Viva Communications and Communities for every user in the tenant. Learn's home sites update page says multiple home sites still need the appropriate licensing."
audiences: ["m365-admin","service-owner","change-adoption"]
tags: ["sharepoint","teams","viva-connections","home-sites","admin-center","m365-admin-center","licensing"]
sources:
  - title: "Microsoft 365 Roadmap 567887"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=567887"
    kind: "roadmap"
  - title: "Set up Viva Connections"
    url: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    kind: "learn"
  - title: "What's new for SharePoint home sites"
    url: "https://learn.microsoft.com/sharepoint/homesites/home-sites-improvements"
    kind: "learn"
  - title: "Set-SPOHomeSite"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spohomesite"
    kind: "learn"
  - title: "Remove-SPOHomeSite"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spohomesite"
    kind: "learn"
  - title: "MC1457839: Viva Connections multi-home site management moving to SharePoint admin center"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1457839"
    kind: "message-center"
videos: []
related: []
controls:
  - governs: "Which communication sites are home sites (create or add)"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Home sites > Add"
      docs: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    api:
      kind: "powershell"
      call: "Set-SPOHomeSite -HomeSiteUrl <site URL>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spohomesite"
    note: "Learn's Viva Connections page says the cmdlet initially supports a single home site setup; whether it adds to the multi-home-site list is not stated."
  - governs: "Which audience sees each home site by default"
    scope: "group"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Home sites > home site > three dots menu (…) > Edit audience"
      docs: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    api: null
    note: "Entra security groups or Microsoft 365 groups, optionally filtered by licence type. An audience does not grant site access."
  - governs: "Priority order of home sites"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Home sites > Change order"
      docs: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    api: null
    note: "The highest-ordered home site that matches a person's audience is the one they see by default."
  - governs: "Removing a home site"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Settings > Home sites > home site > three dots menu (…) > Remove as home site"
      docs: "https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center"
    api:
      kind: "powershell"
      call: "Remove-SPOHomeSite"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spohomesite"
    note: "The cmdlet's reference says it removes the current home site setting; Learn says it was not supported initially for tenants with multiple home sites."
confidence: "high"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-07-29T23:07:26"
changes:
  - date: "2026-11-21"
    note: "First briefing for this roadmap item."
version: 1
---

## What's changing

Management of multiple Viva Connections home sites is moving from the Microsoft 365 admin center to the SharePoint admin center. The roadmap item states that administrators will create and manage multiple Home sites, configure audience targeting, manage home site priority order and remove Home sites from the SharePoint admin center, and that existing entry points in the Microsoft 365 admin center will direct administrators to the new experience.

The roadmap item also states that legacy Viva Connections instances and the draft/enabled management concepts are being deprecated, and that existing Viva Connections experiences will be upgraded to full Home sites. Microsoft's notice MC1457839 repeats this: legacy experiences are upgraded automatically, and the draft and enabled states are retired.

Microsoft Learn already documents the new experience. Its Viva Connections setup page says admins can now add home sites, assign audiences, set the order and remove home sites at SharePoint admin center > Settings > Home sites, that existing home sites, audiences and order appear there automatically, and that managing Viva Connections experiences in the Microsoft 365 admin center will be retired.

The roadmap record shows the item as In development with a target of August CY2026, for General Availability and Targeted Release, Worldwide (Standard Multi-Tenant), on Desktop. MC1457839 gives a rollout beginning early September 2026 and completing mid-September 2026. These sources differ on status, and Learn describes the SharePoint admin center experience as available now.

## Why it matters

The place where administrators manage which home site each audience sees changes, so runbooks, training material and delegated roles that point to the Microsoft 365 admin center go out of date. Microsoft's notice says no action is required before rollout, and the roadmap record states that the Microsoft 365 admin center entry points will direct administrators to the SharePoint admin center.

The wiki's view: the work is communication and process, not configuration. The draft and enabled states are being retired, so any procedure that used them to stage a Viva Connections launch needs a replacement. Microsoft has not said how experiences currently in draft are treated, so check that before relying on staging.

## Risk assessment

**Data exposure**
- Audience targeting decides which home site people see by default; it does not grant access. Learn says site permissions control access, and people in an audience need at least visitor permissions to the site, so an audience that outruns site permissions shows people a home site they cannot open.

**Security & identity**
- Management moves to the SharePoint admin center, where Learn says to sign in as a SharePoint admin or higher. Review who holds that role now that home site administration depends on it.

**Autonomy & actions**
- No autonomous behaviour is described. Changes are made by administrators, and Learn says changes to audiences, order and home sites can take up to 24 hours to take effect for users.

**Change & support**
- Legacy Viva Connections instances and the draft/enabled concepts are being deprecated and existing experiences are upgraded to full Home sites. How draft-state experiences are handled in the upgrade is not stated, so confirm before the upgrade reaches your tenant.
- Learn says the Set-SPOHomeSite and Remove-SPOHomeSite cmdlets were limited for tenants with multiple home sites, with the Microsoft 365 admin center as the place to manage them. Scripts that rely on those cmdlets may behave differently from the new admin centre experience.

## Cost and licensing

Learn's Viva Connections setup page lists the licences. An Enterprise (E), Frontline (F) or Academic (A) licence is needed to create a Viva Connections experience, and users with a Microsoft 365 subscription (E, F or A licence) are limited to creating and using one experience. To create or use two or more experiences (up to 50), every user in the tenant must have a Microsoft Viva Suite or Viva Communications and Communities licence.

Learn's home sites update page adds that organisations that require multiple home sites still need the appropriate licensing. 

The indirect cost is admin time: updating documentation, retraining administrators and re-testing any procedure that used the Microsoft 365 admin center or the draft/enabled states. For Viva licence prices, Learn points to Microsoft Viva plans and pricing.

## Scope

Affected users are SharePoint and Viva Connections administrators, per MC1457839. Learn lists SharePoint administrator permissions as a prerequisite for managing home sites and Viva Connections experiences, and Teams administrator permissions for pinning the Viva Connections app in the Teams admin center.

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Desktop platform, with General Availability and Targeted Release phases. Learn adds that SharePoint home sites in a multi-geo tenant outside the main geo manage their permissions in the SharePoint admin center. Existing home sites, audiences and order carry over automatically, according to Learn.

## Governance guidance

### Before rollout
- Inventory current Viva Connections experiences in the Microsoft 365 admin center, including their audiences and order, so the result in the SharePoint admin center can be compared after the move.
- Confirm whether any experiences are in draft state, because the draft and enabled concepts are being retired and Microsoft has not said how drafts are upgraded.
- Update runbooks and administrator training that point to the Microsoft 365 admin center, as Microsoft's notice recommends.
- Check whether scripts use Set-SPOHomeSite or Remove-SPOHomeSite against a tenant with multiple home sites.

### At rollout
- Open the home sites list in the SharePoint admin center and compare each home site, audience and its position in the priority order with the inventory.
- Check that the order runs from the most specific audience to the broadest, as Learn advises.
- Confirm that people in each audience have at least visitor permissions to the matching home site.

### After rollout
- Allow up to 24 hours for audience, order or removal changes to reach users before testing as an affected user.
- Test the removal route on a non-production home site first; removing a home site does not delete the site or its content, per Learn.
- Confirm that administrators use the SharePoint admin center rather than the Microsoft 365 admin center entry point.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which communication sites are home sites (create or add)</strong><br><small>Tenant</small><br><small class="controls__note">Learn's Viva Connections page says the cmdlet initially supports a single home site setup; whether it adds to the multi-home-site list is not stated.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Home sites › Add <a href="https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOHomeSite -HomeSiteUrl &lt;site URL&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spohomesite" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which audience sees each home site by default</strong><br><small>Group</small><br><small class="controls__note">Entra security groups or Microsoft 365 groups, optionally filtered by licence type. An audience does not grant site access.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Home sites › home site › three dots menu (…) › Edit audience <a href="https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Priority order of home sites</strong><br><small>Tenant</small><br><small class="controls__note">The highest-ordered home site that matches a person's audience is the one they see by default.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Home sites › Change order <a href="https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Removing a home site</strong><br><small>Tenant</small><br><small class="controls__note">The cmdlet's reference says it removes the current home site setting; Learn says it was not supported initially for tenants with multiple home sites.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Settings › Home sites › home site › three dots menu (…) › Remove as home site <a href="https://learn.microsoft.com/sharepoint/homesites/set-up-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-SPOHomeSite</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/remove-spohomesite" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The four controls above all sit at SharePoint admin center > Settings > Home sites. Learn gives the role as SharePoint admin or higher. Removing a home site leaves it as a regular communication site, listed under Sites > Active sites.

An audience does not give access. Site access is managed per site at SharePoint admin center > Sites > Active sites > the home site > Membership, as the Learn page describes.

The Microsoft 365 admin center route (Settings > Viva > Viva Connections > Create and manage Viva Connections experiences) is described by Learn as legacy and still available during the transition; it is not a control over the new experience and is to be retired.

The Set-SPOHomeSite and Remove-SPOHomeSite cmdlets are documented, but Learn's Viva Connections page describes them as limited for tenants with multiple home sites. The cmdlet reference documents a -DraftMode parameter on Set-SPOHomeSite; how it relates to the retired draft state is not stated.

## Open questions

- How are Viva Connections experiences in draft state treated when they are upgraded to full Home sites, and is the content visible to users afterwards? Watch Message center post MC1457839 and the Learn setup page.
- Will Set-SPOHomeSite and Remove-SPOHomeSite work for tenants with multiple home sites once management moves, and will -DraftMode be retired? Watch the Learn cmdlet reference pages.
- Is there a scripted way to set a home site's audience or priority order? The cmdlet reference documents none at the time of writing (November 2026).
- When does the roadmap item move from In development, given that MC1457839 gives a September 2026 rollout and Learn describes the experience as available? Watch the roadmap item.

<!-- rationale
risk: Low. Learn says existing home sites, audiences and order appear in the SharePoint admin center automatically, so no new data or exposure is added; what happens to draft-state experiences is not stated.
cost: Low. The cost is admin time to update procedures and training; Learn says organisations that need multiple home sites still need the appropriate licensing (Viva Suite or Viva Communications and Communities for every user).
impact: Low. SharePoint and Viva Connections administrators are the people Microsoft's notice names as affected, and what they notice is a change of admin centre.
-->
