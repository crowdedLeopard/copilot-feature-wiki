---
title: "SharePoint Lists: refreshed command bar, view selection and filter pills on the web"
slug: "sharepoint-lists-refreshed-user-experience"
roadmapId: 578879
topic: "modern-work"
products: ["SharePoint"]
summary: "Microsoft plans a redesign of the SharePoint Lists web interface: a reorganised command bar, folder breadcrumbs, more prominent views and visible filter pills. Expect user questions; prepare guides and help desk before the December CY2026 target."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "The SharePoint service description lists Lists among features available across all plans that include SharePoint, and users need a licence that includes SharePoint. Nothing specific to the refreshed experience is published."
audiences: ["service-owner","change-adoption","m365-admin"]
tags: ["sharepoint","sharepoint-lists","views","user-experience","release-channels","adoption"]
sources:
  - title: "SharePoint: Lists - Refreshed user experience"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578879"
    kind: "roadmap"
  - title: "SharePoint service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description"
    kind: "learn"
  - title: "Configure new Standard and Deferred release options for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options"
    kind: "learn"
  - title: "Plan for the retirement of Targeted release in Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365/admin/manage/targeted-release-retirement"
    kind: "learn"
  - title: "Change the default list and library experience"
    url: "https://learn.microsoft.com/sharepoint/change-default-list-and-library-experience"
    kind: "learn"
videos: []
related: ["onedrive-refreshed-file-browsing-and-filtering-experience-in-onedrive-web"]
controls:
  - governs: "Tenant-wide switch to turn the refreshed Lists experience on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting in the SharePoint admin center or Set-SPOTenant at the time of writing (November 2026)."
  - governs: "Whether users receive deferred-eligible major updates at general availability or about 30 days later"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Org settings > Organization profile > Release preferences > Deferred release"
      docs: "https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options"
    api: null
    note: "Applies to SharePoint Online among other services; Microsoft has not said this item is deferred-eligible. Needs Office Apps Admin, Security Admin or AI Admin."
confidence: "low"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-17T18:36:41"
changes:
  - date: "2026-11-26"
    note: "New briefing on the planned SharePoint Lists web redesign, targeted for December CY2026."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 45 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 45
  confirmed: 44
  unconfirmed: 0
  contradicted: 1
  attempts: 1
  hash: "c39d1496dbb8e5ad4510f8e4b932620b"
---

## What's changing

Microsoft plans a refreshed user experience for SharePoint Lists on the web, intended to make common actions easier to find and to show more clearly which view and which filters are active. Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description.

The roadmap item lists five changes: a reorganised command bar; clearer breadcrumb navigation for lists that use folders; more prominent view selection and creation; visible filter pills showing the filters applied to a view; and view customisation options brought together in one place. Microsoft says the aim is to help users understand and manage the information displayed in their views. The item does not say whether existing views, filters or list settings change, and does not mention list data, permissions or Copilot.

The roadmap item is **In development**, with a General Availability target of **December CY2026**, for the Worldwide (Standard Multi-Tenant) cloud and the Web platform. No Message center post for this item has been supplied, and Microsoft has not stated whether the refreshed experience replaces the current one automatically or is offered as a choice.

## Why it matters

Lists sit behind trackers, registers and request processes in many organisations, and the people who run them often follow written steps that name buttons and menus. Moving the command bar and the view and filter controls invalidates those steps and screenshots, and the first sign of that is usually a help-desk call. The filter pills and more visible view selection should also make it easier for users to see that a view is filtered, which can cut down "missing item" questions.

Microsoft has not stated what happens on arrival. Because the roadmap describes a redesign of an interface users already have, plan as though it reaches list users without an administrator choosing it, and confirm when Microsoft publishes a Message center post.

## Risk assessment

**Data exposure**
- No change described: the roadmap item covers layout and navigation, and says nothing about what a list contains or who can open it.

**Security & identity**
- No change described: permissions on lists, folders and items are not mentioned in the roadmap item.

**Autonomy & actions**
- No change: the item adds no automation or agent behaviour.

**Change & support**
- A reorganised command bar and consolidated view options move controls users know by position, so process guides, training and screenshots for list-based processes go out of date.
- Microsoft has not said whether custom command bar buttons added by SharePoint Framework extensions keep their place in the reorganised command bar; confirm on a test list before relying on them.
- If the refreshed experience is eligible for Deferred release, users placed in Deferred release get it about 30 days after others; Microsoft has not said whether it is.

## Cost and licensing

Users need a licence that includes SharePoint. The [SharePoint service description](https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description) lists Lists among the features available across all plans that include SharePoint and all SharePoint standalone plans. Microsoft has published nothing about licensing or charges specific to the refreshed experience, and the roadmap item names no licence or meter.

The costs that can be expected are indirect: updating internal guides and training for list-based processes, and help-desk time while users adjust.

## Scope

- **Users:** people who use SharePoint Lists on the web; the roadmap item lists Web as the only platform.
- **Clouds:** Worldwide (Standard Multi-Tenant), as the roadmap item lists it.
- **Release phase:** General Availability, target December CY2026.
- **Rollout timing:** Microsoft's release options pages say Standard release and Deferred release apply to SharePoint Online, among other services. Deferred release delays only deferred-eligible major updates, by approximately 30 days; Microsoft has not said whether this item is one.
- **Targeted release:** Microsoft is retiring Targeted release in January 2027, and from November 2026 administrators can no longer change Targeted release enrollment.
- **Prerequisites:** none are named in the roadmap item.

## Governance guidance

### Before rollout
- Identify the list-based processes with written user guides or training that show the command bar, view selector or filter steps, and plan to refresh them.
- Decide whether teams that depend heavily on lists should sit in Deferred release (Microsoft 365 admin center > Settings > Org settings > Organization profile > Release preferences), knowing Microsoft has not said this item is deferred-eligible.
- Watch Message center for a post on this item, and check whether it is tagged Major update and Deferred feature and whether it states the default.

### At rollout
- Brief the help desk on the five changes the roadmap names: reorganised command bar, folder breadcrumbs, view selection and creation, filter pills and consolidated view customisation.
- Test a list that carries custom command bar buttons or column formatting with an early user, to confirm the buttons still appear where process guides say.

### After rollout
- Reissue the updated guides and screenshots for list-based processes.
- Review help-desk tickets about lists in the first weeks for recurring confusion, and add it to user guidance.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch to turn the refreshed Lists experience on or off</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting in the SharePoint admin center or Set-SPOTenant at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether users receive deferred-eligible major updates at general availability or about 30 days later</strong><br><small>User</small><br><small class="controls__note">Applies to SharePoint Online among other services; Microsoft has not said this item is deferred-eligible. Needs Office Apps Admin, Security Admin or AI Admin.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Org settings › Organization profile › Release preferences › Deferred release <a href="https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no tenant, site or list setting that turns the refreshed Lists experience on or off at the time of writing (November 2026). Release preferences decide when users receive eligible updates in SharePoint Online, not whether they receive this one, and Deferred release delays only updates that are eligible for it. Configuring release preferences needs the Office Apps Admin, Security Admin or AI Admin role, and changes can take up to 24 hours to take effect.

Microsoft documents a site collection feature, *SharePoint Lists and Libraries experience*, that turns off the new list and library experience for a site collection. Microsoft does not describe it as a control for this refresh, and the classic experience lacks capabilities such as the Filters pane and column formatting.

## Open questions

- Does the refreshed experience replace the current list interface automatically, or can users or administrators choose when to switch? Watch Message center for a post on this item.
- Is the refresh a deferred-eligible major update, so that users in Deferred release receive it about 30 days later?
- Do custom command bar buttons from SharePoint Framework extensions keep their position in the reorganised command bar?
- Does the refresh also apply to document libraries, or only to lists?

<!-- rationale
risk: Low. The roadmap describes a change to how lists are laid out and navigated, not to what data a list holds or who can reach it.
cost: Low. Lists is a SharePoint feature available in plans that include SharePoint; the cost is time to update guides, train users and answer help-desk questions.
impact: High. The roadmap describes a redesign of the screen every SharePoint Lists user on the web works in; Microsoft has not stated whether it arrives on by default.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].ui; Governance guidance: Before rollout / admin-path: Administrators can configure Deferred release through Microsoft 365 admin center > Settings > Org settings > Organization profile > Release preferences > Deferred release without a rollout qualification. | Found: The unified release preferences experience is rolling out gradually in mid-November 2026, so it might not be available in your organization yet. ... If the unified release preferences experience hasn't rolled out to your organization yet, you can still manage release options following these steps: | Fix: Keep the printed path but qualify it in the row note and the Before rollout instruction: 'This route requires the unified release preferences experience, rolling out gradually from mid-November 2026. If it is not available in your tenant, use Microsoft 365 admin center > Copilot > Settings > View all > Copilot Release Preferences: General Availability > Deferred release.' Both routes and the rollout condition are documented at https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options. | Source: https://learn.microsoft.com/microsoft-365/admin/manage/configure-release-options
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risk assessment: Change & support; Governance guidance: At rollout / behaviour: SharePoint Framework extensions can add custom buttons to list command bars. | Found: command set extensions that allow you to add custom Edit Control Block (ECB) menu items or custom buttons to the command bar of a list or library. | Fix: Add 'Modernize customizations' at https://learn.microsoft.com/sharepoint/dev/transform/modernize-customizations to sources to support the premise about SharePoint Framework custom command-bar buttons. | Source: https://learn.microsoft.com/sharepoint/dev/transform/modernize-customizations
-->
