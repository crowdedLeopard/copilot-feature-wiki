---
title: "OneDrive and SharePoint: single hero link for file and folder sharing"
slug: "m365-the-next-generation-of-file-and-folder-sharing"
roadmapId: 492622
topic: "modern-work"
products: ["Excel","Microsoft 365","OneDrive","PowerPoint","SharePoint","Word"]
summary: "Microsoft is rolling out one 'hero link' per file or folder in OneDrive and SharePoint, set by default to Only people added to the file. No action is required; admins can set a site default with DefaultMainLinkScope, subject to documentation gaps below."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "October CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, Message Center post MC1454378 nor the Learn page on shareable links names a licence or meter for the hero link."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["sharing","sharepoint","onedrive","oversharing","user-experience","powershell","microsoft-365-apps","gcc","gcc-high","dod"]
sources:
  - title: "How shareable links work in OneDrive and SharePoint in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/shareable-links-anyone-specific-people-organization"
    kind: "learn"
  - title: "Set-SPOSite"
    url: "https://learn.microsoft.com/powershell/module/sharepoint-online/set-sposite"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
  - title: "Manage sharing settings for SharePoint and OneDrive in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off"
    kind: "learn"
  - title: "Change the default sharing link type for a site"
    url: "https://learn.microsoft.com/sharepoint/change-default-sharing-link"
    kind: "learn"
  - title: "MC1454378: (Updated) Microsoft 365: The Next Generation of File & Folder Sharing"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1454378"
    kind: "message-center"
  - title: "Microsoft 365 Roadmap: Microsoft 365: The Next Generation of File & Folder Sharing"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=492622"
    kind: "roadmap"
videos: []
related: ["m365-expiration-for-access-on-sharing-main-links","sharepoint-admin-center-data-access-governance-permission-report-for-a-given-group"]
controls:
  - governs: "Default audience of the hero link for a site"
    scope: "site"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site URL> -DefaultMainLinkScope <OnlyPeopleAdded|Organization|Anyone>"
      docs: "https://learn.microsoft.com/powershell/module/sharepoint-online/set-sposite"
    note: "Needs SharePoint Online admin and site collection admin. Default audience only. The Set-SPOSite reference omits DefaultMainLinkScope from its valid parameters for OneDrive and Groups site collections; support is unconfirmed."
  - governs: "Tenant-wide default audience of the hero link"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1454378 says there is currently no tenant-wide equivalent. The Set-SPOTenant reference lists no main link parameter at the time of writing (November 2026)."
  - governs: "Organisation-level external sharing level"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "Policies > Sharing"
      docs: "https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off"
    api:
      kind: "powershell"
      call: "Set-SPOTenant -SharingCapability <value>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "General control: Learn says hero link scopes depend on sharing policies, but no page maps each setting to a hero link scope."
  - governs: "Default sharing link type for a site (legacy links)"
    scope: "site"
    ui:
      surface: "SharePoint admin center"
      path: "Active sites > site > Sharing > Default sharing link type"
      docs: "https://learn.microsoft.com/sharepoint/change-default-sharing-link"
    api:
      kind: "powershell"
      call: "Set-SPOSite -Identity <site URL> -DefaultSharingLinkType <value>"
      docs: "https://learn.microsoft.com/powershell/module/sharepoint-online/set-sposite"
    note: "Existing control. MC1454378 says default sharing link settings apply to legacy links and do not govern hero links."
confidence: "high"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-07T23:01:35"
changes:
  - date: "2026-11-17"
    note: "First briefing for this item: rolling out the hero link, with the per-site DefaultMainLinkScope control and no documented tenant-wide setting."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 67 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "Corrected after verification: DefaultMainLinkScope support for Groups site collections is now stated as unconfirmed, the rollout sentence follows the notice's schedule, and the legacy expiration checklist item is removed."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 74 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-17"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 74
  confirmed: 74
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cafcd1a6124bc9a0f172f07ea4486463"
---

## What's changing

Microsoft is replacing the file and folder sharing dialog in OneDrive and SharePoint with a single link per item, called the hero link. Microsoft Learn says each item has one hero link, and that users can change its audience and permissions without creating a new URL. Adding people directly through **Add people** remains a separate way to share. Microsoft's notice MC1454378 describes this as the third-generation Microsoft 365 sharing experience, and says it applies whether a user copies a link, shares by email or sends the browser URL.

Per MC1454378, the hero link is set to **Only people added to the file** by default, so the link itself grants no access. Users can broaden it to people in the organisation or, where organisational policy permits, to anyone with the link, and can choose view, edit or view without downloading. Changing the audience updates the existing link, so a sender whose recipient cannot open a file can widen the same link instead of sending a new URL. Existing links keep working and appear under **Other links**, and users see a tutorial the first time they open the new dialog.

Microsoft Learn adds that **Can view** is the default when a user first allows access through the hero link, that administrators cannot configure a different default permission for it, and that a change of scope or permission applies to links already sent. A file inherits its folder's hero link settings until the file's own hero link is explicitly set or changed.

The roadmap item is Rolling out, General Availability, with a target of October CY2026, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD on Android, Desktop, iOS, Mac and Web, covering Word, Excel and PowerPoint as well as OneDrive and SharePoint. MC1454378, updated on 7 October 2026, gives the rollout window as early October 2026 (previously mid-September) through the end of November 2026 (previously late October). The post sets no act-by date and says no action is required before rollout.

## Why it matters

Microsoft's notice schedules the new dialog to roll out from early October through the end of November 2026 without administrator action, so prepare users even if you do not change any settings. The default audience is the narrowest option, so the change is mainly one of habit and support: people who used to create several links for one file now work with one link whose audience they edit.

The point to plan for is that editing the hero link changes who can use links that were already sent. Microsoft Learn says narrowing the scope limits who can use those links, and the same logic runs the other way when a user broadens it. Your sharing policies still bound the choices, so check them now, decide whether any site needs a different default audience, and brief the service desk and regular cross-team collaborators before the dialog appears.

## Risk assessment

**Data exposure**

- A user who widens the hero link to people in the organisation or to anyone with the link changes access for every copy of that link already sent. `DefaultMainLinkScope` sets only the starting audience, and Microsoft's notice says it does not stop users broadening access where policy allows. The organisation's sharing settings decide which scopes are offered.
- The **Anyone with the link** scope lets anyone who has the link use it without signing in, and Learn says anonymous use cannot be audited to a named user. Learn also says selecting a scope does not make content searchable or accessible through Copilot for everyone: a person must receive and redeem the link first.
- **Add people** grants direct access, and Learn says the item can then appear in search results and be accessible through Copilot for those people and security group members, subject to their permissions.

**Security & identity**

- Effective access is the highest permission from any source: direct access, a group, the parent folder or site, the hero link or another sharing link. Setting a hero link back to **Only people added to the file** does not remove access that comes from another source; reducing access means changing each source that grants it.
- Microsoft's notice says existing default sharing link settings and link expiration policies continue to apply to legacy links and do not govern hero links. Do not assume a control you use for legacy links covers the hero link.

**Autonomy & actions**

- The sources describe user-initiated sharing in the dialog only; they describe no autonomous or agent behaviour in this change.

**Change & support**

- Users see a tutorial on first open, and links sent before the change appear under **Other links**. Expect questions about why a recipient can open a file through one link but not another, and about folder inheritance: a file follows its folder's hero link settings until its own is changed.
- Administrators cannot set a different default permission than **Can view** for the hero link, so a site that expects edit-by-default links will need a user-side habit change.

## Cost and licensing

Microsoft has not published a licence requirement or meter for the hero link. The roadmap item, Message Center post MC1454378 and the Learn page [How shareable links work in OneDrive and SharePoint in Microsoft 365](https://learn.microsoft.com/sharepoint/shareable-links-anyone-specific-people-organization) name none, and no pay-as-you-go or credit meter is documented for it at the time of writing (November 2026). Licensing is therefore Not yet published.

The cost the sources do show is indirect: time to review sharing guidance and end-user documentation, to communicate the single-link model, and to evaluate site-level defaults, which are the preparation steps Microsoft's notice lists. Running `Set-SPOSite` requires the SharePoint Online administrator role plus site collection administrator rights, so budget for those administrators' time if you set per-site defaults.

## Scope

**Who is affected.** Microsoft's notice says all users who share or manage files and folders in Microsoft 365, across SharePoint, OneDrive and the Microsoft 365 file-sharing experiences. The roadmap item also lists Word, Excel and PowerPoint.

**Clouds and platforms.** The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and Android, Desktop, iOS, Mac and Web.

**Rollout.** Roadmap status is Rolling out with an October CY2026 target. MC1454378 gives early October through end of November 2026 for all four clouds.

**Configuration.** The audience default is set per site with `DefaultMainLinkScope` in SharePoint PowerShell; the notice says there is currently no tenant-wide equivalent. Prerequisites for the cmdlet are the SharePoint Online administrator role and site collection administrator rights. The Set-SPOSite reference lists `DefaultMainLinkScope` for neither OneDrive for Business nor Groups site collections in its valid-parameter lists, so support for those site types is unconfirmed. Microsoft Learn says the available audience scopes depend on the organisation's sharing policies.

## Governance guidance

### Before rollout

- Review the organisation-level **External sharing** setting in the SharePoint admin center, because the hero link scopes users can choose depend on the organisation's sharing policies.
- Identify sites that need a different starting audience than **Only people added to the file**, and have a site collection administrator who is also a SharePoint Online administrator set `DefaultMainLinkScope` where needed. Confirm first that the site is not a OneDrive or Groups site collection, because the Set-SPOSite reference does not list the parameter for those.
- Update internal sharing guidance and end-user documentation for the single-link model, and tell regular cross-team and cross-organisation collaborators.

### At rollout

- Open the sharing dialog on a test file in a pilot site and check that earlier links appear under **Other links** and that the audience matches the site default.
- Brief the service desk that a sender can widen the same hero link when a recipient cannot open a file, and that effective access is the highest permission from any source.
- Watch Message center post MC1454378 for further timeline changes while the rollout runs to the end of November 2026.

### After rollout

- Sample sites where users have broadened the hero link to people in the organisation or **Anyone with the link**, and compare the result with your sharing policies.
- Check whether Microsoft documents a tenant-wide default or OneDrive support for `DefaultMainLinkScope` and, if so, revise the site-by-site approach.
- Reconfirm what legacy default sharing link settings still cover, since the notice says they do not govern hero links.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Default audience of the hero link for a site</strong><br><small>Site</small><br><small class="controls__note">Needs SharePoint Online admin and site collection admin. Default audience only. The Set-SPOSite reference omits DefaultMainLinkScope from its valid parameters for OneDrive and Groups site collections; support is unconfirmed.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site URL&gt; -DefaultMainLinkScope &lt;OnlyPeopleAdded|Organization|Anyone&gt;</code> <a href="https://learn.microsoft.com/powershell/module/sharepoint-online/set-sposite" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide default audience of the hero link</strong><br><small>Tenant</small><br><small class="controls__note">MC1454378 says there is currently no tenant-wide equivalent. The Set-SPOTenant reference lists no main link parameter at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Organisation-level external sharing level</strong><br><small>Tenant</small><br><small class="controls__note">General control: Learn says hero link scopes depend on sharing policies, but no page maps each setting to a hero link scope.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Policies › Sharing <a href="https://learn.microsoft.com/sharepoint/turn-external-sharing-on-or-off" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -SharingCapability &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Default sharing link type for a site (legacy links)</strong><br><small>Site</small><br><small class="controls__note">Existing control. MC1454378 says default sharing link settings apply to legacy links and do not govern hero links.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>Active sites › site › Sharing › Default sharing link type <a href="https://learn.microsoft.com/sharepoint/change-default-sharing-link" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOSite -Identity &lt;site URL&gt; -DefaultSharingLinkType &lt;value&gt;</code> <a href="https://learn.microsoft.com/powershell/module/sharepoint-online/set-sposite" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The site-level `DefaultMainLinkScope` default is the only control Microsoft documents for the hero link itself. It sets the default audience only; it is not a ceiling, and users can still broaden access where policy allows. Per MC1454378 the supported values are `OnlyPeopleAdded` (the default) and `Organization`, while the Set-SPOSite reference also lists `Anyone`, which falls back to the next most restrictive value if Anyone links are disabled for the site. The reference says the parameter applies to all items at the root of the document library.

MC1454378 says the default can be set at the site collection or OneDrive level, but the Set-SPOSite reference's list of valid parameters for a OneDrive for Business site collection does not include `DefaultMainLinkScope`. The Set-SPOSite reference also omits `DefaultMainLinkScope` from its list of valid parameters for Groups site collections; support for those sites is unconfirmed. Treat OneDrive support as unconfirmed until Microsoft clarifies.

The organisation-level sharing row is a general control: Learn says the available hero link scopes depend on sharing policies, and the Set-SPOSite reference says `Anyone` needs anonymous links allowed at tenant level, but no page lists which setting removes which hero link scope. Each site's sharing setting must be the same as or more restrictive than the organisation's. The legacy default sharing link type row is listed because administrators use it today; the notice says it does not govern hero links.

## Open questions

- Does `DefaultMainLinkScope` work on OneDrive for Business sites or Groups site collections? MC1454378 says OneDrive level, but the Set-SPOSite reference's valid-parameter lists for OneDrive and Groups site collections do not name it. Watch the Set-SPOSite page and Message center.
- Which values are supported? MC1454378 lists `OnlyPeopleAdded` and `Organization`, while the Set-SPOSite reference also lists `Anyone`. Which is current?
- Will Microsoft add a tenant-wide setting for the default hero link audience? The notice says there is currently none.
- Which audit events record a change to a hero link's audience or permission, and where do they appear?
- Will Microsoft publish a licence or meter for the hero link, or confirm that none applies? Watch the roadmap item and the Learn page on shareable links.

<!-- rationale
risk: Low. The hero link starts at Only people added to the file, which grants no access of its own, and the audiences users can pick depend on the organisation's existing sharing policies.
cost: Low. The only cost the sources show is admin and communication time; Microsoft has not published a licence or meter for the hero link.
impact: High. Microsoft's notice says all users who share or manage files and folders see the new dialog, which replaces how they copy, email and re-share links.
-->
