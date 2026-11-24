---
title: "Microsoft Purview: administrative unit scoping in Content Explorer and Data Explorer (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-information-protection-admin-unit-scoping-in-content-e"
roadmapId: 498916
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans administrative unit scoping for Content Explorer and Data Explorer in GCC, GCC High and DoD. Admins who hold the explorer roles may see less once units are assigned; the roadmap states no required action."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "August CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn lists Microsoft Entra ID P1 or P2 plus a Microsoft 365 E5/A5/G5-level Purview subscription as prerequisites for administrative units. A price or licence specific to explorer scoping is not yet published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","information-protection","administrative-units","role-groups","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 498916"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=498916"
    kind: "roadmap"
  - title: "Get started with Content Explorer (classic)"
    url: "https://learn.microsoft.com/purview/data-classification-content-explorer"
    kind: "learn"
  - title: "Get started with data explorer"
    url: "https://learn.microsoft.com/purview/data-classification-data-explorer"
    kind: "learn"
  - title: "Administrative units in Microsoft Purview"
    url: "https://learn.microsoft.com/purview/purview-admin-units"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Create or delete administrative units"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
videos: []
related: ["sensitivity-labels","sensitive-information-types"]
controls:
  - governs: "Which administrative units limit a Content Explorer or Data Explorer role group member"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users > Assign admin units"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api: null
    note: "Needs the Role management role. Applies to role groups with the data classification list viewer or content viewer role. An Entra role overrides a scoped assignment."
  - governs: "Creating the administrative units used for scoping"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Roles & admins > Admin units > Add"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    api:
      kind: "graph"
      call: "POST /v1.0/directory/administrativeUnits"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage"
    note: "Needs at least the Privileged Role Administrator role. Creates the unit; it does not assign it to a Purview role group."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-03-25T23:15:06"
changes:
  - date: "2026-11-24"
    note: "First briefing for the GCC, GCC High and DoD roadmap item; the Worldwide item 498915 is separate."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 4 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 53
  unconfirmed: 1
  contradicted: 4
  attempts: 1
  hash: "fb78680217b95e0ca4904cfb4850c1e9"
---

## What's changing

Microsoft plans to let administrative units (Microsoft Entra ID containers that subdivide an organisation, for example by region or department) scope what role holders see in two Microsoft Purview Information Protection tools: Content Explorer and Data Explorer. The roadmap item describes it as giving more granular visibility and control over Microsoft 365 data, so that data exploration respects the organisational boundaries defined by administrative units.

This roadmap item covers GCC, GCC High and DoD on the web. Microsoft lists the same feature under a second roadmap item, 498915, which is Worldwide (Standard Multi-Tenant) and shows status Launched, with a preview date of October CY2025 and a target of January CY2026. This briefing is about item 498916 only.

Microsoft Learn already documents the capability on its pages for the two tools. The Content Explorer (classic) page says that members of role groups holding the data classification list viewer or data classification content viewer role "can be restricted by administrative unit assignments within content explorer", and the Data Explorer page says the same for data explorer. Those pages give no cloud list, so which of GCC, GCC High and DoD they cover is not stated.

The roadmap record shows status In development with a target of August CY2026, a release phase of General Availability and a last modification date of March 2026. That target month has passed at the time of writing (November 2026) and the status has not moved, so treat the date as unconfirmed.

## Why it matters

For a US Government tenant, this decides whether an administrator holding a Content Explorer or Data Explorer role can browse labelled and sensitive-content items across the whole directory or only within assigned administrative units. Those roles can read item contents, and Learn says the permissions supersede those assigned locally to the items, so limiting their reach is a data-exposure control.

The roadmap states no default for these clouds. Learn describes the restriction as following administrative unit assignments on role group members, so the wiki's reading is that nothing narrows until an administrator makes those assignments. Microsoft has not stated what happens on arrival in GCC, GCC High or DoD, so confirm it in a test tenant before relying on it.

## Risk assessment

**Data exposure**
- The explorers can show item names, locations and, with the content viewer roles, item contents. Learn says access is "highly restricted" for that reason, and administrative unit scoping is a way to narrow who sees which items. An administrator with no administrative units assigned is unrestricted on the Learn administrative units page, so existing unrestricted role holders keep their current view until someone assigns units.
- Learn does not say here how the explorers decide that an item falls inside an administrative unit, or whether SharePoint sites added to a unit through a query affect the explorers. That page says site support in administrative units is for auto-labeling and DLP policies that apply to SharePoint sites.

**Security & identity**
- A Microsoft Entra role overrides a scoped Purview role group assignment. Learn's permissions page says the Entra role "takes precedence at runtime", so a user who also holds an Entra role such as Compliance Administrator has unscoped access, even if the same person is assigned to a unit in the role group.
- Assigning administrative units to role group members needs the Role management role, and creating units needs a Microsoft Entra role (Privileged Role Administrator on the Learn page).

**Autonomy & actions**
- No change: the roadmap describes scoping of what role holders can see in the explorers, and it describes no agent or automated action.

**Change & support**
- Role holders who are later restricted will see fewer items. The Learn administrative units page says restricted administrators cannot see historical data in features such as activity explorer and alerts, and does not say whether the explorers behave the same way, so expect support questions about "missing" items.
- The target month (August CY2026) has passed with the status unchanged, so plan on the date moving.

## Cost and licensing

No separate charge or meter for explorer scoping is documented at the time of writing (November 2026): the Learn administrative units page lists licences as prerequisites and names no price for scoping the explorers.

That page lists Microsoft Entra ID P1 or P2 licensing, and one of these Purview subscriptions: Microsoft 365 E5/A5/G5, Microsoft 365 E5/A5/G5/F5 Compliance or F5 Security & Compliance, Microsoft 365 E5/A5/G5/F5 Information Protection & Governance, or Microsoft 365 E5/A5/F5 Insider Risk Management. The Microsoft Purview service description says the data classification analytics interfaces (Content Explorer and Activity Explorer) require E5/A5/G5 licensing. The Entra page for creating units lists a Microsoft Entra ID P1 or P2 licence for each administrative unit administrator and Free licences for members.

The indirect cost is admin time: designing units, assigning them to role group members and handling access requests. Whether a government-cloud licence differs from these pages is not yet published.

## Scope

**Who and where.** Roadmap item 498916 lists GCC, GCC High and DoD, the web platform and a General Availability release phase. The Worldwide equivalent is a separate roadmap item (498915).

**Who is affected.** Role holders for Content Explorer and Data Explorer. Learn names the Content Explorer List viewer and Content Viewer role groups, and the Data Explorer List viewer and Content viewer role groups, which carry the data classification list viewer and data classification content viewer roles. Opening the Data Explorer tab needs the Compliance administrator, Security administrator, Compliance data administrator or Global administrator role; the Content Explorer page lists the first three.

**Prerequisites.** Administrative units are defined in Microsoft Entra ID and need the licences above. Rollout mechanics for the government clouds are not stated.

## Governance guidance

### Before rollout
- Inventory who holds the Content Explorer and Data Explorer role groups, and which of those people also hold Entra roles such as Compliance Administrator that override scoped Purview assignments.
- Design administrative units in Microsoft Entra ID by region or department, and agree who holds the Role management role needed to assign them.
- Confirm with Microsoft whether the Learn administrative unit documentation for the explorers applies in your government cloud.

### At rollout
- Assign administrative units to the members of the Content Explorer and Data Explorer role groups, starting with one pilot group.
- Check, with a restricted test account, which items the explorers show before widening the assignment.
- Tell restricted role holders that they may see fewer items than before.

### After rollout
- Review role group membership and unit assignments each quarter, including any new Entra role holders.
- Watch the Microsoft 365 roadmap item and Message center for a changed target date or status.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which administrative units limit a Content Explorer or Data Explorer role group member</strong><br><small>User</small><br><small class="controls__note">Needs the Role management role. Applies to role groups with the data classification list viewer or content viewer role. An Entra role overrides a scoped assignment.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users › Assign admin units <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Creating the administrative units used for scoping</strong><br><small>Tenant</small><br><small class="controls__note">Needs at least the Privileged Role Administrator role. Creates the unit; it does not assign it to a Purview role group.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Roles &amp; admins › Admin units › Add <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/directory/administrativeUnits</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Scoping applies to members of the role groups that carry the data classification list viewer or data classification content viewer role, so the assignment in the role group is the working control; the explorers themselves have no separate setting documented. An Entra role assignment overrides a scoped Purview assignment, so the table's first row does not restrict anyone who also holds such a role.

The second row creates the units; membership of units is managed in Microsoft Entra ID. Microsoft Learn documents no API for assigning administrative units to Purview role group members at the time of writing (November 2026).

## Open questions

- When will administrative unit scoping for Content Explorer and Data Explorer reach GCC, GCC High and DoD, given the August CY2026 target has passed with the status unchanged? Watch roadmap item 498916 and Message center.
- Do the Learn statements that these explorers support administrative units apply in GCC, GCC High and DoD, or only in Worldwide, where roadmap item 498915 is Launched?
- Do restricted role holders lose access to items the explorers showed them before units were assigned, as Learn says for activity explorer and alerts?
- How does the explorer scope items to a unit: by the user who owns the item, or by SharePoint sites associated with a unit? The Learn administrative units page does not say.

<!-- rationale
risk: Low. The change narrows what role holders can see in the explorers, and Learn describes the restriction as following administrative unit assignments; the roadmap states no default for these clouds.
cost: Low. The only cost the sources show is admin time plus the licences Learn lists for administrative units (Microsoft Entra ID P1 or P2 and a Microsoft 365 E5-level Purview licence); no separate price or meter is documented.
impact: Low. Only administrators and analysts who hold the Content Explorer or Data Explorer roles notice it; end users see nothing.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; Why it matters; Risk assessment: Data exposure / default: The government-cloud change is admin-opt-in and existing unrestricted explorer role holders keep their view until an administrator assigns units. | Found: Searched: '"Content Explorer" "administrative units" "default" settings' and 'Content Explorer Data Explorer administrative unit scoping GCC GCC High DoD default licensing price'; read roadmap 498916, both explorer pages and purview-admin-units. No government-cloud arrival default is stated. | Fix: Set defaultState to unknown. Remove 'the wiki's reading is that nothing narrows until an administrator makes those assignments' and 'so existing unrestricted role holders keep their current view until someone assigns units'. Retain 'Microsoft has not stated what happens on arrival in GCC, GCC High or DoD'.
- [contradicted, blocker] Why it matters / role: The Content Explorer and Data Explorer roles can read item contents. | Found: These are independent role groups and the permissions they grant aren't cumulative. For example, if you want to grant an account the ability to view the items and their locations only, grant Data Explorer List viewer rights. | Fix: Replace 'Those roles can read item contents' with 'The Content Explorer Content viewer and Data Explorer Content viewer role groups grant access to item contents; the List viewer role groups grant list and location access only'. Both cited explorer pages document this distinction. | Source: https://learn.microsoft.com/purview/data-classification-data-explorer
- [contradicted, blocker] Risk assessment: Change & support; Open questions / absence: The documented historical-data restriction is not stated to cover the explorers. | Found: Restricted administrators also can't see historical data by using features that support administrative units, such as activity explorer and alerts. | Fix: Remove 'and does not say whether the explorers behave the same way' and the historical-access open question. The general statement covers features supporting administrative units, and both cited explorer pages explicitly put the explorers in that class. Do not expand this into an item-specific historical mapping claim. | Source: https://learn.microsoft.com/purview/purview-admin-units
- [contradicted, blocker] controls[0].note; Risk assessment: Security & identity; Governance controls; Governance guidance / applicability: Any Entra role, including Compliance Administrator, makes the explorer assignment unscoped and prevents the first control restricting that person. | Found: Entra roles always take precedence, and scoping applied through Administrative Units doesn't restrict the user's effective permissions for overlapping capabilities. | Fix: Replace the unconditional override statements with 'Entra roles take precedence over scoped Purview assignments for overlapping capabilities'. Replace the first-row note's final sentence with that wording, and remove the claim that every Entra role holder has unscoped explorer access. The explorer pages explicitly say tab-access Entra roles do not grant item or content access. | Source: https://learn.microsoft.com/purview/purview-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] summary / record: The roadmap states no required action. | Found: It ensures that data exploration respects organizational boundaries defined by Admin Units, enhancing compliance and governance. | Fix: Replace 'the roadmap states no required action' with 'the roadmap does not specify an administrator action'; the record is silent rather than an explicit no-action notice.
- [supported, minor] What's changing; Scope; front matter: changes / record: The same feature has a separate Worldwide (Standard Multi-Tenant) roadmap item, 498915. | Found: Record 498915: "title": "Microsoft Purview Compliance Portal: Information Protection - Admin unit scoping in Content Explorer and Data Explorer", "clouds": ["Worldwide (Standard Multi-Tenant)"] | Fix: Add the cited Worldwide record to sources: https://www.microsoft.com/microsoft-365/roadmap?id=498915, titled 'Microsoft 365 Roadmap 498915', kind roadmap.
- [supported, minor] controls[1].ui / admin-path: Entra ID > Roles & admins > Admin units > Add starts administrative unit creation in the Entra admin center. | Found: Browse to Entra ID > Roles & admins > Admin units. ... Select Add. ... On the Review + create tab, review the administrative unit and any role assignments. ... Select the Create button. | Fix: The path stops on the correct creation page. Extend it to 'Entra ID > Roles & admins > Admin units > Add > Review + create > Create', leaving optional role assignments and field entry to the cited procedure. | Source: https://learn.microsoft.com/entra/identity/role-based-access-control/admin-units-manage
- [contradicted, minor] Governance guidance: Before rollout; After rollout / consistency: The checklist asks readers to inventory and review Entra role holders, but the controls table has no Entra role-assignment row. | Found: Inventory ... which of those people also hold Entra roles ... Review ... including any new Entra role holders. The table contains only Purview administrative unit assignments and Entra administrative unit creation. | Fix: Remove the checklist clauses that tell the reader to inventory or review Entra role holders; retain the verified overlap warning in the control note. Do not add a control row as part of this correction.
-->
