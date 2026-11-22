---
title: "OneDrive web: refreshed file browsing and filtering on the SharePoint library layout"
slug: "onedrive-refreshed-file-browsing-and-filtering-experience-in-onedrive-web"
roadmapId: 566316
topic: "modern-work"
products: ["OneDrive"]
summary: "OneDrive on the web moves to the modern SharePoint document library layout, with multi-filter and file-type filtering. Microsoft says it is on by default and no action is required; plan user and help desk communications."
status: "launched"
releasePhase: ["General Availability","Targeted Release"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "high"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap record, MC1457226 nor Microsoft Learn names a licence or meter for this change. The OneDrive overview page says most advanced enterprise OneDrive features are available for every subscription type but does not list this one."
audiences: ["m365-admin","service-owner","change-adoption","end-user"]
tags: ["onedrive","sharepoint","user-experience","adoption"]
sources:
  - title: "Microsoft 365 Roadmap 566316"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566316"
    kind: "roadmap"
  - title: "MC1457226: (Updated) Microsoft OneDrive: Refreshed file browsing and filtering experience in OneDrive Web"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1457226"
    kind: "message-center"
  - title: "Overview of OneDrive in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/onedrive-overview"
    kind: "learn"
  - title: "Set-SPOTenant"
    url: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    kind: "learn"
videos: []
related: ["sharepoint-copilot-search-in-sharepoint-and-onedrive","m365-the-next-generation-of-file-and-folder-sharing"]
controls:
  - governs: "Setting to keep or defer the refreshed OneDrive web layout"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1457226 says the feature is enabled by default and requires no action; no such setting is documented at the time of writing (November 2026)."
  - governs: "\"Return to classic SharePoint\" link on modern list and library pages (existing SharePoint setting)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-SPOTenant -DisableBackToClassic <Boolean>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant"
    note: "Existing setting for SharePoint list and library pages. Learn does not say it covers the new OneDrive web layout. Needs the SharePoint Online administrator role."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-23T21:59:27"
changes:
  - date: "2026-11-22"
    note: "New briefing: OneDrive web adopts the SharePoint library layout with multi-filter and file-type filtering; Microsoft says it is on by default and needs no action."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 48 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 47
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "e143eb43d66bb46a64e694905e5c77d3"
---

## What's changing

OneDrive on the web is adopting the modern SharePoint document library experience for browsing and managing files, and its filtering is being widened. The roadmap item describes an updated layout, improved navigation and familiar file management capabilities, so that OneDrive and SharePoint behave more alike.

On filtering, the roadmap item says existing filters in the Home, Shared, People, Meetings and Favorites views will support several filters at once. The same filtering comes to folder-based views such as My files and shared folders, and users can filter by file type using both filter pills and the filter pane.

Microsoft sent tenants notice MC1457226 (last updated 20 October 2026). It gives a Targeted Release rollout beginning in mid-August 2026 and expected to complete by late August 2026, and a General Availability (Worldwide) rollout beginning in late August 2026 and expected to complete by late October 2026, which it says was previously mid-September. It states the feature will be enabled by default, that no action is required, and that existing permissions, sharing settings and policies are unchanged. The roadmap record shows status Launched with a target of August CY2026, for Worldwide (Standard Multi-Tenant) on the Web platform.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so what this page says about its behaviour comes from the roadmap item and MC1457226.

## Why it matters

Every user who opens OneDrive in a browser meets a different layout and navigation, and MC1457226 states that this is enabled by default. Nobody has to configure anything, but users and support staff will notice. Expect questions about where commands and views moved, and about the new filters.

The notice recommends three things: update internal training materials that reference the current OneDrive experience, inform help desk and support teams, and communicate the change to users who regularly use OneDrive for the web. Because the rollout window in MC1457226 ran to late October 2026, this is best treated as a change users may already have, with communications to follow rather than precede it.

## Risk assessment

**Data exposure**

- No new data access is described. MC1457226 says existing permissions, sharing settings and policies are unchanged, so the same files stay visible to the same people. Filtering and navigation change how users find files, not who can open them.

**Security & identity**

- No change to sign-in or identity is described in the roadmap item or MC1457226. Microsoft Learn does not describe this feature, so confirm after rollout that your sharing and access settings behave as before, using the settings listed in the controls table.

**Autonomy & actions**

- No autonomous behaviour is described. The changes are to layout, navigation and filtering that users operate themselves.

**Change & support**

- Users get a different layout by default, which can raise help desk calls about moved commands and views. Brief support teams on the new navigation and on the filter pills and filter pane before calls arrive.
- Training material and screenshots that show the previous OneDrive web layout may be out of date, which is why MC1457226 recommends reviewing them.

## Cost and licensing

No licence, price or meter for this change is published in the roadmap record, in MC1457226 or on the Microsoft Learn pages read for this briefing (the OneDrive overview and the SharePoint Online cmdlet reference). The OneDrive overview page at https://learn.microsoft.com/sharepoint/onedrive-overview says that most of the advanced enterprise-focused features in OneDrive are available for every subscription type, but it does not name this feature. The licensing model is therefore shown as not yet published.

The cost the sources show is indirect: time to update training materials, brief the help desk and tell users, as MC1457226 recommends.

## Scope

MC1457226 says all users of OneDrive web are affected, and lists OneDrive for the web and SharePoint Online as the platforms and services. The roadmap record lists Worldwide (Standard Multi-Tenant) as the only cloud and Web as the platform. The record's release phases are General Availability and Targeted Release, and its status is Launched.

No role, licence or prerequisite for using the new layout is stated in the sources. Microsoft's notice gives the rollout windows above, with Microsoft's end date for the post at 30 November 2026.

## Governance guidance

### Before rollout

- Update internal training and screenshots that show the previous OneDrive web layout, as MC1457226 recommends.
- Brief the help desk on the new navigation, the multi-filter behaviour and the file-type filter, using the roadmap item's description of the Home, Shared, People, Meetings, Favorites, My files and shared folder views.
- Check your tenant against the General Availability window in MC1457226 (ending late October 2026) to find out whether users already have the new layout.

### At rollout

- Send users who regularly use OneDrive for the web a short note that explains the new layout and the filter pills and filter pane.
- Ask a pilot group to compare the new layout with your own guidance, and record anything that no longer matches.

### After rollout

- Review help desk tickets about OneDrive web for moved commands and filter questions, and update the guidance they point to.
- Confirm that sharing and access behave as before, since MC1457226 says permissions, sharing settings and policies are unchanged.
- Watch Message center and the roadmap item for further updates to the timeline.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Setting to keep or defer the refreshed OneDrive web layout</strong><br><small>Tenant</small><br><small class="controls__note">MC1457226 says the feature is enabled by default and requires no action; no such setting is documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>&quot;Return to classic SharePoint&quot; link on modern list and library pages (existing SharePoint setting)</strong><br><small>Tenant</small><br><small class="controls__note">Existing setting for SharePoint list and library pages. Learn does not say it covers the new OneDrive web layout. Needs the SharePoint Online administrator role.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-SPOTenant -DisableBackToClassic &lt;Boolean&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.online.sharepoint.powershell/set-spotenant" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Microsoft Learn does not document a setting for the refreshed OneDrive web layout at the time of writing (November 2026), and MC1457226 says the feature is enabled by default with no action required. The first row records that gap.

The second row is an existing SharePoint setting for the "Return to classic SharePoint" link on modern SharePoint list and library pages. Microsoft Learn does not say whether it applies to the new OneDrive web layout, so do not treat it as a switch for this feature. Running Set-SPOTenant requires the SharePoint Online administrator role.

The OneDrive overview page lists the settings administrators already use for OneDrive in the SharePoint admin center: sharing, sync, storage limit, retention, access control, compliance and notifications. MC1457226 says existing permissions, sharing settings and policies are unchanged.

## Open questions

- Will Microsoft document an administrator setting to keep or defer the previous OneDrive web layout? Watch Message center and the OneDrive pages on Microsoft Learn.
- Does the "Return to classic SharePoint" setting (Set-SPOTenant -DisableBackToClassic) apply to the new OneDrive web layout? Microsoft Learn describes it only for modern SharePoint list and library pages.
- Which licence, if any, does Microsoft associate with the refreshed layout and filters? Watch the OneDrive licensing and plan pages.
- Has the General Availability rollout in MC1457226, due to finish by late October 2026, reached every Worldwide tenant, and will other clouds follow? The roadmap record lists only Worldwide (Standard Multi-Tenant).

<!-- rationale
risk: Low. Microsoft's notice MC1457226 says existing permissions, sharing settings and policies are unchanged, so the change is a layout and filtering update inside existing data boundaries.
cost: Low. The only cost the sources show is admin time to update training and brief the help desk; Microsoft Learn names no licence or meter for this feature, so licensing is not yet published.
impact: High. MC1457226 says all users of OneDrive for the web are affected and the feature is enabled by default, so everyone who uses the web app sees a different layout.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; Open questions; rationale: cost / licensing: The licensing model is unknown because no licensing specific to the refreshed layout and filters is published. | Found: OneDrive for work and school accounts is online storage space in the cloud that's provided for individual licensed users in an organization. OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. | Fix: Set licensing.model to 'included' and cite https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description. Replace the licensing notes and the conclusion in Cost and licensing with: 'OneDrive is provided for individual licensed users and is included in Microsoft 365 and Office 365 plans and SharePoint plans, or purchased as a standalone plan. No separate licensing requirement specific to this layout and filtering refresh is published.' Replace 'licensing is not yet published' in the cost rationale with 'no separate feature-specific licensing requirement is published'. Replace the licensing open question with 'Will Microsoft publish a licensing requirement specific to this refresh?' | Source: https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description
- [contradicted, minor] Risk assessment: Security & identity; Governance guidance: After rollout / consistency: The briefing tells readers to check sharing and access using settings in its controls table, but that table contains no sharing or access control row. | Found: confirm after rollout that your sharing and access settings behave as before, using the settings listed in the controls table. Control rows: Setting to keep or defer the refreshed OneDrive web layout; "Return to classic SharePoint" link on modern list and library pages. | Fix: Delete ', using the settings listed in the controls table' from Risk assessment: Security & identity. In Governance guidance: After rollout, replace 'Confirm that sharing and access behave as before, since MC1457226 says permissions, sharing settings and policies are unchanged.' with 'Ask the pilot group to confirm that the same files remain accessible, since MC1457226 says permissions, sharing settings and policies are unchanged.' Do not add a control row.
-->
