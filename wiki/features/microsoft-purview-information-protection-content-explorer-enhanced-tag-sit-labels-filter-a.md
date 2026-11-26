---
title: "Microsoft Purview Content Explorer: enhanced filter for sensitive information types and labels (GCC, GCC High, DoD)"
slug: "microsoft-purview-information-protection-content-explorer-enhanced-tag-sit-labels-filter-a"
roadmapId: 553218
topic: "governance"
products: ["Microsoft Purview"]
summary: "Content Explorer in the Microsoft Purview portal gains enhanced filtering and scoped visibility of sensitive information type and label data in GCC, GCC High and DoD. Launched; admins should check who holds Content Explorer roles."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's service description says the Content and Activity Explorer interfaces require E5/A5/G5 licensing (data classification analytics is included in Microsoft 365 E5/A5/G5 and Office 365 E5). Nothing specific to this filter is published."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","information-protection","sensitive-information-types","sensitivity-labels","role-groups","administrative-units","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 553218"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=553218"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 518224"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=518224"
    kind: "roadmap"
  - title: "Get started with Content Explorer (classic)"
    url: "https://learn.microsoft.com/purview/data-classification-content-explorer"
    kind: "learn"
  - title: "Get started with data explorer"
    url: "https://learn.microsoft.com/purview/data-classification-data-explorer"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Learn about sensitive information types"
    url: "https://learn.microsoft.com/purview/sit-sensitive-information-type-learn-about"
    kind: "learn"
videos: []
related: ["microsoft-purview-compliance-portal-information-protection-admin-unit-scoping-in-content-e","sensitive-information-types","sensitivity-labels","microsoft-purview-dspm-copilot-readiness-and-data-explorer","classifiers"]
controls:
  - governs: "Who can see items in Content Explorer (List viewer) and read their contents (Content viewer)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs the Role management role. Content viewer is also needed to see item names. These permissions supersede item-level permissions. Governs Content Explorer access, not the new filter itself."
  - governs: "Tenant switch for the enhanced SIT and label filter, or a limit on which types and labels it shows"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented on Microsoft Learn at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-14T22:41:38"
changes:
  - date: "2026-11-26"
    note: "New briefing for the GCC, GCC High and DoD roadmap item on enhanced SIT and label filtering in Content Explorer."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 57 statements contradicted, 3 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the risk assessment: removed unsupported statements that the change adds no identity or sign-in and takes no action on content; trimmed the admin-unit checklist step; added sources."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 55 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "2680b667e5a8945b9247845dea6243be"
---

## What's changing

Microsoft plans enhanced controls in Content Explorer's interface that, in the roadmap's words, enable "scoped visibility and filtering of SIT and label data", to help with content discoverability and governance. SIT means sensitive information type: a pattern Microsoft Purview uses to recognise data such as credit card or national ID numbers.

Microsoft Learn does not describe this feature by the roadmap's name yet, so what follows about its behaviour is the roadmap's description. The Content Explorer page, now titled Content Explorer (classic), already documents a filter box where you type the name of a label or sensitive information type, and saved views: "You can create customized views in content explorer, by configuring what SITs, Sensitivity Labels, Trainable Classifiers, and Retention Labels which are important for you." A view can be made the default. Microsoft has not stated whether those saved views are this roadmap item, or what "scoped visibility" adds to them. Microsoft has also not stated what changes on arrival.

Learn now documents two explorers: Content Explorer (classic), reached through **Solutions > Data Lifecycle Management > Explorers > Content explorer**, and data explorer, reached through **Solutions > Information Protection > Explorers > Data explorer**. Data explorer also has a filter box that takes the name of a label, classifier or sensitive information type.

This roadmap item covers GCC, GCC High and DoD on the web, and its status is Launched, as General Availability, with a target of April CY2026. Microsoft lists the same feature for Worldwide under roadmap item 518224, which is also Launched, with a January CY2026 target and a November CY2025 preview date.

## Why it matters

Content Explorer is one of the most sensitive tools in Purview: Microsoft says access to it is highly restricted because it lets you read the contents of scanned files, and that its permissions supersede the permissions assigned to the items themselves. Any change to what its users can filter and see is therefore worth a check of who holds the two Content Explorer role groups, in each of the US Government tenants this item covers.

For investigators the gain is practical: narrowing a large estate to the sensitive information types and labels they care about. Microsoft has not stated whether the scoped visibility changes what existing role holders see by default, so plan on the assumption that no source says existing access changes, and confirm in the portal.

## Risk assessment

**Data exposure**
- Content Explorer Content viewer members can open item contents, and Microsoft says these permissions supersede permissions locally assigned to the items. Better filtering makes sensitive items quicker to find for whoever holds that role, so membership is the control that matters.
- The data explorer page says encrypted sensitivity labels are not surfaced on content explorer for SharePoint and OneDrive, so a filter by label will not show every labelled file there.

**Security & identity**
- Access stays with the Content Explorer List viewer and Content Explorer Content viewer role groups, which Content Explorer supports restricting by administrative unit.

**Autonomy & actions**
- The roadmap describes enhanced UI controls enabling scoped visibility and filtering of SIT and label data.

**Change & support**
- Counts can take up to seven days to update in Content Explorer and 14 days for files in SharePoint, so a filter may not reflect recent labelling or classification. Expect investigators to raise this as a discrepancy.

## Cost and licensing

Microsoft's Purview service description says the Data classification analytics interfaces (Content and Activity Explorer) require E5/A5/G5 licensing, and lists data classification analytics as included in Microsoft 365 E5/A5/G5, Microsoft 365 E5/A5/G5 Compliance, Microsoft 365 E5/A5/G5 Information Protection & Governance, and Office 365 E5. E3/A3/G3 tenants get Content Explorer data aggregation, not the explorer interface.

The Content Explorer (classic) page refers to those licensing pages and names no separate licence for its filters. Microsoft publishes no licence or meter specific to this enhanced filter at the time of writing (November 2026). The indirect cost is admin time to review role group membership.

## Scope

- **Clouds**: GCC, GCC High and DoD, as the roadmap item lists them. Worldwide is covered by roadmap item 518224.
- **Platform**: Web, in the Microsoft Purview portal.
- **Who can open Content Explorer**: the Compliance administrator, Security administrator or Compliance data administrator Entra ID roles, or the Information Protection roles and role groups, grant the tab. Seeing items needs Content Explorer List viewer; seeing contents and item names needs Content Explorer Content viewer.
- **Who assigns access**: holders of the Role management role in Microsoft Purview.
- **Prerequisite for SharePoint and OneDrive data**: sensitivity labels must be enabled for files in SharePoint and OneDrive for that data to surface.
- **Default state and rollout mechanics**: not stated.

## Governance guidance

### Before rollout
- List the members of the Content Explorer List viewer and Content Explorer Content viewer role groups in each GCC, GCC High or DoD tenant, under Settings > Roles and scopes > Role groups in the Microsoft Purview portal.
- Remove Content viewer membership from anyone who needs only to see where items are, since List viewer alone shows items and locations.
- Decide whether investigators should be restricted to administrative units (see /features/microsoft-purview-compliance-portal-information-protection-admin-unit-scoping-in-content-e/).

### At rollout
- Open Content Explorer and data explorer as a List viewer member and check which sensitive information types and labels the filter offers and whether anything is hidden that was visible before.
- Tell investigators that counts can lag by up to seven days, or 14 days for SharePoint files, so filtered totals are not live.

### After rollout
- Recheck Content Explorer role group membership at each access review, since these roles override item-level permissions.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can see items in Content Explorer (List viewer) and read their contents (Content viewer)</strong><br><small>User</small><br><small class="controls__note">Needs the Role management role. Content viewer is also needed to see item names. These permissions supersede item-level permissions. Governs Content Explorer access, not the new filter itself.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch for the enhanced SIT and label filter, or a limit on which types and labels it shows</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented on Microsoft Learn at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Access to Content Explorer is in two layers. Entra ID roles (Compliance administrator, Security administrator, Compliance data administrator) or the Information Protection role groups open the tab but, in Microsoft's words, do not grant permission to view the list of items or their contents. The two Content Explorer role groups are independent and not cumulative: grant both for someone who must see items and read their contents.

Adding members needs the Role management role. The permissions page says security groups are supported only in Microsoft 365 commercial cloud organisations, which matters for the US Government tenants this item covers: plan to add users individually unless your cloud supports groups. Content Explorer supports administrative units, and role group members can be assigned admin units with **Assign admin units** in the same add-members steps; see the [admin unit scoping briefing](/features/microsoft-purview-compliance-portal-information-protection-admin-unit-scoping-in-content-e/).

Microsoft Learn documents no setting that switches the enhanced filter on or off, or that limits which sensitive information types or labels a role holder sees in it, at the time of writing (November 2026).

## Open questions

- Is this roadmap item the saved views feature already documented on the Content Explorer (classic) page, or something more? Watch the Content Explorer and data explorer pages on Learn.
- What does "scoped visibility" restrict, and by what: role group, administrative unit or a per-user choice of sensitive information types and labels?
- Does the enhancement apply to Content Explorer (classic), data explorer, or both, in GCC, GCC High and DoD?
- Does the change alter what existing Content Explorer role holders see by default?

<!-- rationale
risk: Low. The change is to how Content Explorer filters and shows data it already holds; access still rests on the Content Explorer List viewer and Content viewer role groups.
cost: Low. Content Explorer comes with the E5/A5/G5 licences Microsoft's service description names for data classification analytics; the cost the sources show is admin time to review role groups.
impact: Low. Only compliance and information protection staff who hold Content Explorer roles use the tool, so end users notice nothing.
-->
