---
title: "Microsoft 365 Copilot Search: find people by SharePoint custom profile properties"
slug: "m365-copilot-m365-copilot-search-supports-sharepoint-online-custom-properties-search"
roadmapId: 508526
topic: "m365-copilot"
products: ["Microsoft Copilot (Microsoft 365)"]
summary: "Microsoft plans to let Copilot Search find people by custom SharePoint Online profile properties, targeted June CY2027. Licensed users get a new way to find colleagues; admins should review which properties hold sensitive values."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Learn's Copilot Search FAQ says there is no additional cost for Copilot Search itself and that it is included in the Microsoft Copilot licence. A licence or meter specific to this feature is not yet published."
audiences: ["m365-admin","service-owner","security","compliance"]
tags: ["copilot-search","m365-copilot","sharepoint","admin-controls","privacy","user-profiles"]
sources:
  - title: "Microsoft 365 Roadmap 508526"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=508526"
    kind: "roadmap"
  - title: "Microsoft Copilot Search frequently asked questions"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-faq"
    kind: "learn"
  - title: "Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-overview"
    kind: "learn"
  - title: "Manage Microsoft Copilot Search"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-manage"
    kind: "learn"
  - title: "Microsoft Copilot Search admin experience"
    url: "https://learn.microsoft.com/copilot/manage/copilot-search-admin-experience"
    kind: "learn"
  - title: "People data sources in Microsoft 365"
    url: "https://learn.microsoft.com/graph/people-data-sources"
    kind: "learn"
  - title: "Add and edit user profile properties in SharePoint"
    url: "https://learn.microsoft.com/sharepoint/add-and-edit-user-profile-properties"
    kind: "learn"
  - title: "Manage user profiles in the SharePoint admin center"
    url: "https://learn.microsoft.com/sharepoint/manage-user-profiles"
    kind: "learn"
  - title: "Bulk update custom user profile properties for SharePoint Online"
    url: "https://learn.microsoft.com/sharepoint/dev/solution-guidance/bulk-user-profile-update-api-for-sharepoint-online"
    kind: "learn"
videos: []
related: ["sharepoint-copilot-search-in-sharepoint-and-onedrive","m365-admin-center-authoritative-content-management-for-m365-copilot-search","m365-admin-center-organizational-data-granular-access-policy-controls-for-custom-attribute","copilot-connectors"]
controls:
  - governs: "Which custom profile properties exist and whether searches return profiles matching them (Indexed)"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "More features > User profiles > Open > People > Manage User Properties > New Property > Search Settings > Indexed"
      docs: "https://learn.microsoft.com/sharepoint/add-and-edit-user-profile-properties"
    api: null
    note: "Requires an account with admin permissions for the organisation. Learn describes Indexed for searches generally; it does not say Copilot Search uses it."
  - governs: "Default privacy setting of a custom profile property and whether users may override it"
    scope: "tenant"
    ui:
      surface: "SharePoint admin center"
      path: "More features > User profiles > Open > People > Manage User Properties > New Property > Policy Settings"
      docs: "https://learn.microsoft.com/sharepoint/add-and-edit-user-profile-properties"
    api: null
    note: "The same page has Allow users to edit values for this property. Learn does not say how these settings apply to Copilot Search."
  - governs: "Tenant switch for custom property search in Copilot Search"
    scope: "tenant"
    ui: null
    api: null
    note: "Not yet documented at the time of writing (November 2026). Copilot > Search in the Microsoft 365 admin center covers acronyms and bookmarks."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-11-13T19:41:44"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: roadmap-only feature, with background on SharePoint custom profile properties and the Copilot Search licence."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the SharePoint admin center path in the inventory step to include Open and People, as the Learn page gives it."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 53 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 53
  confirmed: 53
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "447b40c3bb3d8d838e2398e68ed531cd"
---

## What's changing

Microsoft plans to let people find colleagues through Microsoft 365 Copilot Search using the custom profile properties their organisation keeps in SharePoint Online. The roadmap item states: "Discover and find people through Microsoft 365 Copilot Search based on your company's custom profile properties from SharePoint Online." It is listed as In development, with a target of June CY2027, for Worldwide (Standard Multi-Tenant) on the Web, at General Availability. The date is a target, not a commitment.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. Learn names the product Microsoft Copilot Search and says it is available through the Microsoft Copilot app. The roadmap uses the name Microsoft 365 Copilot Search.

Some background from Learn: administrators can create custom user profile properties in SharePoint, such as languages spoken, emergency contact info or sales account, and those properties are not synced back to Microsoft Entra ID. Learn also lists the SharePoint user profile as one of the sources of people data in Microsoft 365. Which custom properties Copilot Search will read, and how it matches them, is not yet documented.

## Why it matters

Custom profile properties are often filled in for one purpose and then read for another. If Copilot Search can match on them, a value that was easy to overlook on a profile becomes something a colleague can search for. The properties Learn gives as examples include emergency contact info, which shows why the content of each property deserves a check before the target date.

Microsoft has not stated what happens on arrival, including whether an administrator has to switch anything on, so no source says existing behaviour changes. The sensible plan is a review: know which custom properties exist, what each holds and who it is visible to, so that the answer is ready when Microsoft publishes how the feature works.

## Risk assessment

**Data exposure**
- Custom properties can hold personal or sensitive values, and each property has its own privacy and edit settings in SharePoint (see the controls table). Learn does not yet say whether Copilot Search follows those settings when it matches on a property. Confirm this before the target date.
- Learn's Copilot Search FAQ says Copilot "only returns information that the user already has access to". That is a general statement about Copilot Search and not a description of this feature.

**Security & identity**
- No change documented: the roadmap item describes searching existing SharePoint profile data, and Learn describes no new permission or identity for it.

**Autonomy & actions**
- No change documented: the roadmap description covers finding people and says nothing about acting on a user's behalf.

**Change & support**
- Poorly maintained or inconsistent property values could become more visible in search. Expect questions from users about why a colleague appears for a given value.
- Users without an eligible Microsoft Copilot licence continue to see the classic search experience in Microsoft 365, according to Learn, so people may see different results depending on licence.

## Cost and licensing

Learn's Copilot Search FAQ says there is no additional cost for Copilot Search itself and that it is included as part of the Microsoft Copilot licence. It also says users without an assigned and eligible Microsoft Copilot licence continue to see the classic search experience. The roadmap item names no separate licence for this capability, and a licence or meter specific to this feature is not yet published.

The indirect cost is admin time to review the custom properties in SharePoint and any follow-up with property owners. The FAQ notes that Microsoft 365 Copilot connectors can incur extra cost, but this item is described as using SharePoint Online profile properties, and no connector is mentioned in the roadmap text.

## Scope

- **Users and licences:** Learn says users with an eligible Microsoft Copilot licence see Copilot Search in the Microsoft Copilot app. Who can match on custom properties is not yet documented.
- **Roles:** Learn's steps for custom user profile properties ask for an account with admin permissions in the SharePoint admin center, and the page on managing user profiles is written for SharePoint Administrators and above.
- **Clouds and platforms:** the roadmap record lists Worldwide (Standard Multi-Tenant) and the Web.
- **Rollout:** target June CY2027, status In development. No preview date is given. Prerequisites for this feature are not yet published.

## Governance guidance

### Before rollout
- Inventory the custom properties: in the SharePoint admin center, open More features > User profiles > Open > People > Manage User Properties and list each property you added.
- Check each property's Policy Settings (default privacy setting and whether users can override it) and decide which values should not become easier to find.
- Check each property's Search Settings, in particular Indexed, and note which ones are marked.
- Edit or delete properties you no longer need, using the Manage User Properties page.

### At rollout
- Watch the roadmap item and Message center for a post that sets the rollout window and describes how Copilot Search treats custom properties.
- Once the feature appears, search with a test account that holds an eligible Microsoft Copilot licence for values from a harmless custom property and for values from a restricted one, and record what is returned.
- Brief the service desk that colleagues may now surface by searching for profile values.

### After rollout
- Review new custom properties before they are populated, because Learn shows them being created in the same SharePoint admin centre page.
- Re-run the test searches after any change to a property's privacy or search settings.
- Log user reports of unexpected profile values appearing in search and feed them back into the property review.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which custom profile properties exist and whether searches return profiles matching them (Indexed)</strong><br><small>Tenant</small><br><small class="controls__note">Requires an account with admin permissions for the organisation. Learn describes Indexed for searches generally; it does not say Copilot Search uses it.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>More features › User profiles › Open › People › Manage User Properties › New Property › Search Settings › Indexed <a href="https://learn.microsoft.com/sharepoint/add-and-edit-user-profile-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Default privacy setting of a custom profile property and whether users may override it</strong><br><small>Tenant</small><br><small class="controls__note">The same page has Allow users to edit values for this property. Learn does not say how these settings apply to Copilot Search.</small></td><td data-label="Admin UI"><strong>SharePoint admin center</strong><br>More features › User profiles › Open › People › Manage User Properties › New Property › Policy Settings <a href="https://learn.microsoft.com/sharepoint/add-and-edit-user-profile-properties" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for custom property search in Copilot Search</strong><br><small>Tenant</small><br><small class="controls__note">Not yet documented at the time of writing (November 2026). Copilot &gt; Search in the Microsoft 365 admin center covers acronyms and bookmarks.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rows above are the documented SharePoint controls for custom properties, and they are today's alternative: Learn does not say that Copilot Search reads the Indexed or privacy settings for this feature. Treat them as the place to review data, not as a confirmed switch for the new search.

Custom properties are created in the SharePoint admin center. Learn's bulk-update page states that there are no remote APIs for creating custom properties in the user profile service, so the property definition has no documented API at the time of writing (November 2026). Values can be bulk-imported with the CSOM method QueueImportProfileProperties, which that page says works only for properties that end users cannot edit and needs Global Admin permissions unless an app-only context is used.

The Copilot > Search area of the Microsoft 365 admin center is documented for acronyms, bookmarks and connectors; a tenant switch for custom property search is not yet documented.

## Open questions

- Which custom SharePoint profile properties will Copilot Search match on: all of them, or only those marked Indexed in Search Settings? Watch the roadmap item and the Copilot Search pages on Learn.
- Does Copilot Search honour each property's privacy setting and the user's own overrides when it matches on a value?
- Will an administrator be able to exclude a property or switch the capability off, and where? Watch Message center.
- Will a separate licence or meter apply to this capability, or does the Microsoft Copilot licence cover it?
- Will classic Microsoft Search for unlicensed users also search custom properties?

<!-- rationale
risk: Medium. Custom SharePoint profile properties can hold values such as emergency contact info, and Learn does not yet say how a property's privacy settings apply to the new search.
cost: Low. Learn says Copilot Search is included in the Microsoft Copilot licence; no separate licence or meter for this feature is published, so the known cost is admin time to review properties.
impact: Medium. Users with an eligible Microsoft Copilot licence who search for people would notice, and only where the organisation has populated custom properties.
-->
