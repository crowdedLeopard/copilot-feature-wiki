---
title: "Microsoft Purview eDiscovery: select user-owned SharePoint Embedded containers as a data source"
slug: "microsoft-purview-ediscovery-select-user-owned-sharepoint-embedded-container-as-a-data-sou"
roadmapId: 569364
topic: "governance"
products: ["Microsoft Purview"]
summary: "Purview eDiscovery will list a person's user-owned SharePoint Embedded containers (Loop, Copilot Pages and Copilot Notebooks storage) when you add them as a data source. Microsoft says no admin action is required."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "October CY2026"
previewDate: "September CY2026"
risk: "medium"
cost: "low"
impact: "low"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Microsoft Learn says admins and users working with eDiscovery cases require a Microsoft 365 Enterprise E3 or E5 license. A licence or charge specific to selecting SharePoint Embedded containers is not yet published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","ediscovery","sharepoint-embedded","copilot-pages","copilot-notebooks","microsoft-loop","governance"]
sources:
  - title: "Microsoft 365 Roadmap 569364"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569364"
    kind: "roadmap"
  - title: "Data sources in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-data-sources"
    kind: "learn"
  - title: "Use eDiscovery with Copilot Pages"
    url: "https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery"
    kind: "learn"
  - title: "Purview management for SharePoint Embedded containers"
    url: "https://learn.microsoft.com/microsoft-365/loop/purview-management"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Get started with eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-get-started"
    kind: "learn"
  - title: "Billing in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-billing"
    kind: "learn"
  - title: "MC1470884: Microsoft Purview eDiscovery: Select user-owned SharePoint Embedded containers as a data source"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1470884"
    kind: "message-center"
videos: []
related: ["microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges"]
controls:
  - governs: "Who can use eDiscovery and add data sources"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Role-group membership, not a switch for this feature. The Security & Compliance PowerShell form takes a mail-enabled security group."
  - governs: "Tenant-wide switch for showing SharePoint Embedded containers in eDiscovery data sources"
    scope: "tenant"
    ui: null
    api: null
    note: "MC1470884 says no administrative action is required before rollout."
confidence: "medium"
created: "2026-11-19"
updated: "2026-11-19"
roadmapModified: "2026-08-17T22:52:47"
changes:
  - date: "2026-11-19"
    note: "First briefing: Learn already documents the preview behaviour, and it differs from MC1470884 on which container types appear."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 62 statements not yet confirmed"
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 68 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 68
  confirmed: 67
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "4ae1dbc756b46ca2681d4dd8904785a8"
---

## What's changing

Microsoft Purview eDiscovery will let users view and select the SharePoint Embedded content containers owned or created by a chosen person. The roadmap item says these containers store content from apps such as Microsoft Loop, Copilot Pages and Copilot Notebooks. Microsoft's notice MC1470884 says the option appears when you add a person as a data source in an eDiscovery case, search or hold.

Microsoft Learn already describes this behaviour and marks it as preview: the page says SharePoint Embedded container support in eDiscovery (preview) might change before general availability. When you add a user as a data source, eDiscovery displays supported containers relevant to that user with their other locations, and you can select or clear individual containers and use **Filter by app**. You can also add a container by its URL as a site location, or in a bulk import. Loop My workspace, Copilot Pages and Copilot Notebooks share one user-owned container that admin and compliance tools label **Loop**, so Pages and Notebooks content might not appear as separate app filters.

The two Microsoft sources differ on scope. MC1470884 says only containers owned by the selected user will be displayed, that app-owned containers are not included in this release, that the update grants no additional permissions, and that existing cases, searches and holds are not modified automatically. Learn says supported user-owned and tenant-owned containers relevant to the user are surfaced, and that group-owned and app-owned containers aren't currently supported.

The roadmap record shows status In development, with a September CY2026 preview target and an October CY2026 target for the general availability release, for Worldwide (Standard Multi-Tenant) on the web. MC1470884 gives public preview as mid-September to late September 2026 and worldwide general availability as mid-October to late October 2026. The record, as fetched on 13 November 2026, still showed In development.

## Why it matters

Personal containers for Copilot Pages, Copilot Notebooks and Loop My workspace are where a person's Copilot-assisted drafts and notes can sit. Learn says selecting a user's OneDrive as a data source doesn't include their Copilot Pages or Copilot Notebooks, and that the user's SharePoint Embedded container must be added as a separate data source. The documented manual route is to look up the container URL in the SharePoint admin center and add it as a site data source. The new option moves that step into the user's data source view.

Microsoft says no administrative action is required before rollout, so the option reaches eDiscovery users without a switch. Expect investigators to start including this content in cases and holds, and expect legal and compliance teams to ask what the picker covers and what it does not. Read the group-owned, app-owned and compliance-boundary limits below before telling them it covers everything.

## Risk assessment

**Data exposure**

- Content in a person's Loop container (Copilot Pages, Copilot Notebooks, Loop My workspace) becomes selectable when that person is added as a data source. MC1470884 says the update grants no additional permissions and access remains subject to existing permissions, so the exposure is to users who already hold eDiscovery roles.
- Learn states that eDiscovery compliance boundary enforcement isn't currently supported for SharePoint Embedded containers. If you use compliance boundaries to limit which users' data an investigator can reach, do not assume they limit these containers.

**Security & identity**

- Access to the picker follows eDiscovery role-group membership. Learn says an eDiscovery Administrator can view and access all eDiscovery cases, so keep that group small. The container URL itself doesn't grant access.

**Autonomy & actions**

- No change: Microsoft describes a selection option inside a case, search or hold, and says existing cases, searches and holds are not modified automatically. Learn says legal holds are supported for Copilot Pages and Copilot Notebooks.

**Change & support**

- Learn marks the capability preview and says it might change before general availability, so screens and limits can move.
- The shared **Loop** label means Copilot Pages and Copilot Notebooks content might not appear under a separate filter, and the Learn page lists group-owned and app-owned containers as not currently supported. Brief practitioners so a missing container is not read as missing content.

## Cost and licensing

Microsoft Learn's Get started with eDiscovery page says both admins and users working with eDiscovery cases require a Microsoft 365 Enterprise E3 or E5 license. The roadmap item and MC1470884 state no separate licence for this option, and no licence or charge specific to selecting SharePoint Embedded containers is published at the time of writing (November 2026).

The Billing in eDiscovery page describes pay-as-you-go billing for storage of non-Microsoft 365 AI data and for Microsoft Graph API exports under E3 eDiscovery licences. It names no charge for SharePoint Embedded containers, and Microsoft documents no cap or budget control for this option at the time of writing. Indirect cost is admin time to update procedures and training, as MC1470884 recommends.

## Scope

**Who:** Microsoft Purview eDiscovery users, compliance teams and legal teams, per MC1470884. Users need eDiscovery permissions (see the controls table) and the licences above.

**Where:** The roadmap record lists Worldwide (Standard Multi-Tenant), the Web platform and the Microsoft Purview portal surface, with Preview and General Availability phases. The record lists no US Government clouds.

**What is covered:** Supported user-owned containers for a selected person. Learn also says tenant-owned containers relevant to the user are surfaced, while MC1470884 says only containers owned by the selected user are displayed. Group-owned and app-owned containers aren't currently supported (Learn), and app-owned containers are not included in this release (MC1470884).

**Rollout:** MC1470884 gives public preview from mid-September 2026 and worldwide general availability from mid-October 2026, each expected to complete by the end of its month. The roadmap status was In development when fetched.

## Governance guidance

### Before rollout

- Confirm who holds the eDiscovery Manager and eDiscovery Administrator role groups, and remove anyone who no longer needs case access.
- Check whether your organisation relies on eDiscovery compliance boundaries, and record that Learn says enforcement isn't currently supported for SharePoint Embedded containers.
- Update eDiscovery procedures to say where Loop, Copilot Pages and Copilot Notebooks content is stored, as MC1470884 recommends, and replace any step that relies on looking up container URLs by hand.

### At rollout

- Test in a non-production case: add a test user as a data source, open **Manage sources**, and confirm the **Loop** container appears with its container URL and `ContainerTypeId`.
- Compare what the picker shows with MC1470884, which says only containers owned by the selected user appear, and with Learn, which also mentions tenant-owned containers.
- Keep the container URL route as a fallback: in the SharePoint admin center, SharePoint Embedded administrators filter **Active containers** by **Application name: Loop** and **Ownership type: User**.

### After rollout

- Review open cases and holds, because MC1470884 says existing cases, searches and holds are not modified automatically; re-add user data sources where Loop content is in scope.
- Brief legal and investigation teams and update training materials, as MC1470884 recommends.
- Re-read the Learn data sources page for the preview label and the container ownership limits at general availability.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can use eDiscovery and add data sources</strong><br><small>Tenant</small><br><small class="controls__note">Role-group membership, not a switch for this feature. The Security &amp; Compliance PowerShell form takes a mail-enabled security group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › Role groups for Microsoft Purview solutions › eDiscovery Manager <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch for showing SharePoint Embedded containers in eDiscovery data sources</strong><br><small>Tenant</small><br><small class="controls__note">MC1470884 says no administrative action is required before rollout.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

eDiscovery roles decide who sees the option: Learn says you need the Organization Management role group or the Role Management role to assign eDiscovery permissions, and that a mail-enabled security group can be added to the eDiscovery Manager subgroup but not to the eDiscovery Administrators subgroup. Learn says an eDiscovery Manager can access and manage the cases they create, and an eDiscovery Administrator can view and access all eDiscovery cases.

Microsoft Learn and MC1470884 describe no administrator setting for this option, so the table records that gap. Learn states that compliance boundary enforcement isn't currently supported for SharePoint Embedded containers, so boundary-based restrictions are not a substitute for role membership here. Finding a container URL by hand needs the SharePoint Embedded administrator role in the SharePoint admin center.

## Open questions

- Does the picker show only containers owned by the selected person (MC1470884) or also tenant-owned containers (Learn's Data sources page)? Watch that page and Message center.
- Will eDiscovery compliance boundary enforcement extend to SharePoint Embedded containers, and when? Watch the Data sources in eDiscovery page.
- The roadmap record still showed In development after the dates in MC1470884: has general availability completed in your tenant, and will the preview label come off the Learn page?
- Will group-owned or app-owned containers be supported later, given MC1470884 excludes app-owned containers from this release?

<!-- rationale
risk: Medium. Content in personal Loop, Copilot Pages and Copilot Notebooks containers becomes selectable in eDiscovery, and Learn says compliance boundary enforcement isn't currently supported for SharePoint Embedded containers.
cost: Low. The only cost the sources show is admin and training time; Microsoft has published no licence or charge specific to this feature, and eDiscovery itself needs a Microsoft 365 Enterprise E3 or E5 licence.
impact: Low. Eligible eDiscovery users, compliance and legal teams notice a new option in Manage sources; end users see no change.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing; Scope; rationale: cost / licensing: Admins and users working with eDiscovery cases require a Microsoft 365 Enterprise E3 or E5 license. | Found: Both admins and users working with eDiscovery cases require a Microsoft 365 Enterprise E3 or E5 license. If an admin account doesn't also have a Microsoft SharePoint E3 license, some SharePoint capabilities might be limited. | Fix: After the licence sentence in Cost and licensing, add: 'Microsoft also cautions that some SharePoint capabilities might be limited if an admin account does not also have a Microsoft SharePoint E3 license.' Source: https://learn.microsoft.com/purview/edisc-get-started. | Source: https://learn.microsoft.com/purview/edisc-get-started
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Microsoft Purview portal > Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager reaches the role group used to assign access. | Found: Go to Settings > Role groups. ... On Role groups for Microsoft Purview solutions, select eDiscovery Manager. ... Select Edit. ... On Manage eDiscovery Manager, select Choose users or Choose groups. | Fix: Extend controls[0].ui.path and the rendered path to 'Settings > Role groups > Role groups for Microsoft Purview solutions > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users or Choose groups'. The existing path stops on the correct role-group pane before the membership control. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [supported, minor] Scope: Where / availability: The Microsoft Purview portal is the surface for the change, although the sentence attributes it to the roadmap record. | Found: Platforms and services ... Microsoft Purview eDiscovery ... Microsoft Purview portal ... SharePoint Embedded | Fix: Replace the first Where sentence with: 'The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, with Preview and General Availability phases. MC1470884 identifies Microsoft Purview portal as the surface.'
- [supported, minor] Governance guidance: At rollout, container URL fallback / admin-path: In the SharePoint admin center, Active containers can be filtered by Application name: Loop and Ownership type: User. | Found: Expand SharePoint Embedded, and then select Active containers. ... Filter the list by Application name: Loop and Ownership type: User. ... Search for the user in the Principal owner field. ... copy its container URL from the General tab. | Fix: Replace the fallback bullet with: 'Keep the container URL route as a fallback: in the SharePoint admin center, sign in with the SharePoint Embedded administrator role, expand SharePoint Embedded, select Active containers, filter by Application name: Loop and Ownership type: User, search for the user in Principal owner, select the container, and copy its container URL from the General tab.' | Source: https://learn.microsoft.com/microsoft-365/loop/copilot-pages-ediscovery
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to take stock of compliance-boundary configuration, but the controls table has no corresponding row. | Found: Check whether your organisation relies on eDiscovery compliance boundaries ... Controls: Who can use eDiscovery and add data sources; Tenant-wide switch for showing SharePoint Embedded containers in eDiscovery data sources. | Fix: Remove the Before rollout bullet asking readers to check whether their organisation relies on eDiscovery compliance boundaries; it has no corresponding controls-table row. Retain the supported boundary warning in Risk assessment and Governance controls. Do not add a row as part of this correction.
-->
