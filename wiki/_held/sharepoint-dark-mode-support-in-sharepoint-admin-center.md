---
title: "SharePoint: dark mode support in the SharePoint admin center"
slug: "sharepoint-dark-mode-support-in-sharepoint-admin-center"
roadmapId: 552593
topic: "governance"
products: ["Microsoft 365 admin center","SharePoint"]
summary: "The roadmap lists dark mode for the SharePoint admin center as launched. It changes how the admin center looks for administrators. Microsoft Learn does not yet describe it, and no admin action is stated."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "February CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "none"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item names no licence, and the SharePoint admin center page opened for this briefing states none for dark mode."
audiences: ["m365-admin","change-adoption"]
tags: ["sharepoint","admin-center","gcc"]
sources:
  - title: "Microsoft 365 admin center accessibility overview"
    url: "https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-center-accessibility-overview"
    kind: "learn"
  - title: "About administrator roles in the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/microsoft-365/admin/add-users/about-admin-roles"
    kind: "learn"
  - title: "Manage sites in the SharePoint admin center"
    url: "https://learn.microsoft.com/sharepoint/get-started-new-admin-center"
    kind: "learn"
  - title: "SharePoint: Dark mode support in SharePoint Admin Center"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=552593"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Tenant-wide switch for dark mode in the SharePoint admin center"
    scope: "tenant"
    ui: null
    api: null
    note: "Role-based access to the SharePoint admin center (SharePoint Administrator) decides who sees it, not which display mode it uses."
confidence: "low"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-04-06T23:15:32"
changes:
  - date: "2026-11-24"
    note: "First briefing for this item: the roadmap lists dark mode as launched, and Microsoft Learn does not yet describe it for the SharePoint admin center."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 38 statements contradicted, 4 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 38
  confirmed: 34
  unconfirmed: 4
  contradicted: 0
  attempts: 1
  hash: "ef4316c5ff19707289e12d8be66c071d"
---

## What's changing

The roadmap item states that dark mode is now supported in the SharePoint admin center. Its status is Launched, the release phase is General Availability, the platform is Web, and the target date was February CY2026. The record lists Worldwide (Standard Multi-Tenant) and GCC as clouds.

Microsoft Learn does not describe this feature at the time of writing (November 2026), so everything above about behaviour is the roadmap's one-sentence description. The record gives no detail on how an administrator switches the mode, what the default is, or whether the choice is kept per user.

For context, the Microsoft 365 admin center is a separate site. Its accessibility page says it offers light and dark modes on most pages, that Light mode is selected by default, and that the **Dark mode** link in the upper-right corner switches it. That page does not mention the SharePoint admin center, so do not assume the SharePoint admin center behaves the same way.

## Why it matters

This is a cosmetic change for administrators who work in the SharePoint admin center. It does not touch site content, permissions or sharing, and the roadmap item describes nothing that reaches users outside the admin centre.

Microsoft has not stated what happens on arrival, so the wiki cannot say whether administrators see dark mode automatically or choose it. The practical view is that no source says existing behaviour changes, so a short note to your SharePoint administrators is enough, and support desks may get a few screenshots of the new appearance.

## Risk assessment

**Data exposure**
- No change: the roadmap item describes a display option and states no new data access.

**Security & identity**
- No change stated: the roadmap item mentions no new permission. Access to the SharePoint admin center is documented as depending on a role such as SharePoint Administrator, and the roadmap item does not change that.

**Autonomy & actions**
- No change: the item describes no automated action.

**Change & support**
- Administrators may see a different appearance in the SharePoint admin center without notice, because Microsoft has not stated how the mode is chosen. Brief the people who hold the SharePoint Administrator role so a changed look is not reported as a fault.

## Cost and licensing

The roadmap item names no licence and no meter. The Learn page that describes the SharePoint admin center's Active sites page, which was opened for this briefing, states no licence for dark mode. A licence or price specific to this feature is not yet published.

The indirect cost is administrator time to tell colleagues about the appearance change.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, the Web platform, and the products Microsoft 365 admin center and SharePoint. Learn documents access to the SharePoint admin center as granted by roles such as SharePoint Administrator: the Microsoft 365 admin center roles page says to assign that role to users who need to access and manage the SharePoint admin center.

The record does not say whether dark mode applies per user or per tenant, and Learn does not describe it for the SharePoint admin center at the time of writing.

## Governance guidance

### Before rollout
- Tell holders of the SharePoint Administrator role that the SharePoint admin center now supports dark mode, using the roadmap item as the reference.
- Check whether your support desk has screenshots or runbooks of the SharePoint admin center that will look different.

### At rollout
- Open the SharePoint admin center as an administrator and note whether a dark mode option is visible and how it is selected, because Learn does not describe it.

### After rollout
- Watch the roadmap item and the Microsoft Learn SharePoint admin center pages for documentation of the option, its default and any administrator control.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Tenant-wide switch for dark mode in the SharePoint admin center</strong><br><small>Tenant</small><br><small class="controls__note">Role-based access to the SharePoint admin center (SharePoint Administrator) decides who sees it, not which display mode it uses.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The table records that no tenant-wide switch for this appearance setting is documented for the SharePoint admin center at the time of writing (November 2026). Access to the SharePoint admin center itself is governed through Microsoft Entra roles such as SharePoint Administrator, which controls who sees the interface but not which display mode it uses.

## Open questions

- Is dark mode in the SharePoint admin center on by default, or does each administrator choose it? Watch the roadmap item and the SharePoint admin center pages on Microsoft Learn.
- Is the choice stored per user or per tenant, and can an administrator set it for others? Microsoft Learn does not say at the time of writing.
- Does the Microsoft 365 admin center's **Dark mode** link also set the SharePoint admin center's mode? No page opened for this briefing says so.

<!-- rationale
risk: Low. The roadmap describes a display option in an admin website and states no new data access, so the change stays inside existing data and security boundaries.
cost: Low. The roadmap item names no licence or meter, so the only cost the sources show is the time to tell administrators; licensing for this feature is not yet published.
impact: Low. Only people who open the SharePoint admin center are affected, which in practice means administrators holding a role that grants access to it.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Dark mode does not touch site content. | Found: Searched: SharePoint admin center dark mode site content permissions sharing changes role display mode preference Microsoft 365 synchronization. Read Manage sites, accessibility overview and returned sharing excerpts; none states dark mode does not touch site content. | Fix: Replace 'It does not touch site content, permissions or sharing' with 'The roadmap item describes no changes to site content, permissions or sharing'.
- [unsupported, major] Why it matters / behaviour: Dark mode does not touch permissions. | Found: Searched: SharePoint admin center dark mode site content permissions sharing changes role display mode preference Microsoft 365 synchronization. Read Manage sites, administrator roles and returned sharing excerpts; none states dark mode does not touch permissions. | Fix: Replace 'It does not touch site content, permissions or sharing' with 'The roadmap item describes no changes to site content, permissions or sharing'.
- [unsupported, major] Why it matters / behaviour: Dark mode does not touch sharing. | Found: Searched: SharePoint admin center dark mode site content permissions sharing changes role display mode preference Microsoft 365 synchronization. Read Manage sites, accessibility overview and returned sharing excerpts; none states dark mode does not touch sharing. | Fix: Replace 'It does not touch site content, permissions or sharing' with 'The roadmap item describes no changes to site content, permissions or sharing'.
- [unsupported, major] controls[0].note; Governance controls / behaviour: Role-based access does not determine which display mode the SharePoint admin center uses. | Found: Searched: SharePoint admin center dark mode site content permissions sharing changes role display mode preference Microsoft 365 synchronization. Read About administrator roles and About the SharePoint Administrator role; neither documents how roles affect dark mode. | Fix: Remove ', not which display mode it uses' from controls[0].note and the rendered note, and remove 'but not which display mode it uses' from Governance controls. Keep the documented statement that the role grants access.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: The Microsoft 365 admin center and SharePoint admin center are separate sites. | Found: Open separate admin centers for Exchange, Teams, SharePoint, Viva Engage, and Microsoft Entra. | Fix: Add https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-center-overview to sources for the statement that the admin centers are separate. | Source: https://learn.microsoft.com/microsoft-365/admin/admin-overview/admin-center-overview?view=o365-worldwide#admin-center-features-and-settings
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / licensing: The licensing model is unknown because no dark-mode-specific licence has been published. | Found: To access SharePoint, users in your organization need to be assigned a license that includes SharePoint. | Fix: Set licensing.model to included. Replace the notes with 'The SharePoint service description publishes the general requirement for a licence that includes SharePoint; it publishes no dark-mode-specific licence. Organisations with Frontline workers need at least one Enterprise user to access the admin center.' Cite https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description and use the same wording in Cost and licensing. In the cost rationale, replace 'licensing for this feature is not yet published' with 'no dark-mode-specific licensing is published'. | Source: https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-service-description
-->
