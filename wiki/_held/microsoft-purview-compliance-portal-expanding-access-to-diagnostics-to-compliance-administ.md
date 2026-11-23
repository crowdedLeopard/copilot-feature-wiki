---
title: "Microsoft Purview: Diagnostics open to Compliance Administrator, Security Administrator and Organization Management"
slug: "microsoft-purview-compliance-portal-expanding-access-to-diagnostics-to-compliance-administ"
roadmapId: 500396
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft says Purview Diagnostics is no longer limited to Global Admin and extends to three more roles. Administrators holding those roles gain access; nothing needs configuring, but check who holds them."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "December CY2025"
previewDate: "October CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn page for Purview self-help diagnostics lists roles as its requirement and names no licence, and the roadmap item states none."
audiences: ["compliance","security","m365-admin"]
tags: ["purview","role-groups","admin-controls","dlp","information-protection","diagnostics"]
sources:
  - title: "Microsoft 365 Roadmap 500396"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=500396"
    kind: "roadmap"
  - title: "Self-help diagnostics for Microsoft Purview"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Add-RoleGroupMember"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-compliance-portal-endpoint-data-loss-prevention-always-on-diagnostics-fo","microsoft-purview-compliance-portal-admin-assignment-time-limit"]
controls:
  - governs: "Who holds the Purview role groups, including Organization Management, that can use Diagnostics"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs the Role Management role. Compliance Administrator and Security Administrator are Microsoft Entra roles, managed in Microsoft Entra ID."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-16T22:57:03"
changes:
  - date: "2026-11-23"
    note: "First briefing: Purview Diagnostics access extends beyond Global Admin to three named roles; Learn's role lists differ by diagnostic."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 44 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 41
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "4ff68a8030ff22bac65820a3aea87cd5"
---

## What's changing

The roadmap item states that Microsoft is expanding access to Diagnostics in the Microsoft Purview portal beyond Global Admin to three more roles: Compliance Administrator, Security Administrator and Organization Management. The record gives no further description.

Microsoft Learn describes self-help diagnostics for Microsoft Purview, which run from **Solutions** pages and from the **Help** pane. Learn says that to run the Information Protection diagnostics you need either the Compliance Administrator or the Security Administrator role, and lists those two roles among the roles that can run the DLP diagnostics. The same page still lists Global admin as the minimum role for several Help pane diagnostics, such as DLP policy and rule configuration, Sensitivity label configuration and Validate Audit configuration. Learn does not say which of its diagnostics this roadmap item covers, so read the Learn page as the closest documented background, not as a description of this item.

Learn also says the diagnostics can fix some configuration issues but do not make changes to your tenant without your consent, and that diagnostics on **Solutions** pages are being rolled out gradually and might not yet be available in every organisation.

The roadmap record shows the item as Launched, with a preview target of October CY2025 and a general availability target of December CY2025, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Troubleshooting a DLP policy, a sensitivity label or an audit configuration used to depend, for some diagnostics, on finding someone with the Global Admin role. Spreading access to the roles that usually own compliance and security work lets those teams self-diagnose, which is the wiki's reading of the change and not a statement Microsoft makes.

Microsoft has not stated what happens on arrival, so no source says that an administrator must act. The practical effect is that more accounts can now reach diagnostics that inspect tenant configuration, so it is worth knowing who holds these three roles.

## Risk assessment

**Data exposure**

- Learn describes the diagnostics as checks of configuration settings in Microsoft Purview, run through cmdlets such as Get-DlpCompliancePolicy and Get-label. Three additional roles can now see those results. The record describes no new data source.
- Some diagnostics ask for a file path or a message trace log (.csv), so the roles that gain access can submit those inputs to them.

**Security & identity**

- Access widens from Global Admin to roles with narrower scope. Learn lists Compliance Administrator and Security Administrator as Microsoft Entra roles shown in the Purview portal, so membership is managed in Microsoft Entra ID, not in Purview.
- Organization Management is a Purview role group; Learn says the Role Management role is assigned only to that group. Review its membership alongside the Entra roles.

**Autonomy & actions**

- Learn says the diagnostics can fix some configuration issues but do not make changes without consent. The record describes no autonomous action.

**Change & support**

- Learn's role lists for the diagnostics differ by diagnostic and name Organization Configuration, not Organization Management, so an administrator in one role may reach some diagnostics and not others.
- Learn says Microsoft Support agents cannot assist with Help pane diagnostics; users report problems through the Feedback link in the diagnostic.

## Cost and licensing

The roadmap record names no licence or meter, and the Learn page for Purview self-help diagnostics lists roles as its requirement and names no licence. A licence requirement for Diagnostics is Not yet published. The only cost the sources show is administrator time to check role membership and to train the newly entitled roles.

## Scope

The roadmap lists the Worldwide (Standard Multi-Tenant) cloud, the Web platform, and General Availability and Preview release phases. The record shows the status as Launched.

The roles named are Compliance Administrator, Security Administrator and Organization Management. On Learn, the Information Protection diagnostics on **Solutions** pages need Compliance Administrator or Security Administrator, and the DLP diagnostics list those two among their accepted roles. Learn says diagnostics on **Solutions** pages are rolling out gradually, and that Help pane diagnostics are not available in GCC High, DoD and Microsoft 365 operated by 21Vianet.

Learn's pages do not name Organization Management as a role for these diagnostics; the nearest role it lists is Organization Configuration. Which diagnostics Organization Management gains is Not yet documented.

## Governance guidance

### Before rollout

- Check which accounts hold Compliance Administrator and Security Administrator in Microsoft Entra ID, using the Roles and scopes area of the Microsoft Purview portal, which lists the Entra roles.
- List the members of the Organization Management role group so you know who gains access.
- Tell compliance and security teams which diagnostics Learn says their roles can run.

### At rollout

- Confirm in the Purview portal under Solutions > Information Protection and Solutions > Data Loss Prevention whether the **Diagnostics** pages appear for a test account in each role.
- Record the result per role, because Learn says Solutions page diagnostics are rolling out gradually.

### After rollout

- Review role membership regularly and remove accounts that no longer need these roles.
- Re-read the Learn page on self-help diagnostics, since its role lists differ between diagnostics and the roadmap's role names differ from Learn's.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds the Purview role groups, including Organization Management, that can use Diagnostics</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Role Management role. Compliance Administrator and Security Administrator are Microsoft Entra roles, managed in Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roles can be assigned in the Roles and scopes area of the Purview portal. Learn says the Compliance Administrator and Security Administrator roles under Microsoft Entra ID are managed by selecting Manage members, which redirects to Microsoft Entra ID, so the row below governs the Organization Management role group and the other Purview role groups. Viewing role groups needs Global administrator or the Role Management role, which Learn says is assigned only to the Organization Management role group.

Learn documents no separate Purview setting that turns Diagnostics on or off for a role; access follows role membership.

## Open questions

- Which Diagnostics does the roadmap item cover: the Solutions page diagnostics, the Help pane diagnostics, or both? Watch the roadmap item and the self-help diagnostics page on Microsoft Learn.
- Does Organization Management, as the roadmap names it, correspond to the Organization Configuration role Learn lists for the DLP diagnostics, or to the Organization Management role group?
- Will the Help pane diagnostics that list Global admin as the minimum role be updated to match the roadmap's wider role list?
- Does Diagnostics need a licence beyond the roles named? Watch the Purview licensing pages.

<!-- rationale
risk: Low. The change widens who can run self-help diagnostics to three named roles; Learn says the diagnostics do not change the tenant without consent, and no new data source or autonomous action is described.
cost: Low. The only cost the sources show is admin time to review role holders; no licence or meter for Diagnostics is published, and the roadmap record names none.
impact: Low. Only administrators holding the Compliance Administrator, Security Administrator or Organization Management roles notice the change; end users see nothing.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] summary / default: Nothing needs configuring for administrators holding the newly entitled roles to gain access. | Found: Searched: Purview self-help diagnostics 500396 automatic rollout no action required Organization Management; Purview Diagnostics Organization Management default enable disable. Read the roadmap, self-help diagnostics and permissions pages; none states no configuration is required for this expansion. | Fix: Replace 'Administrators holding those roles gain access; nothing needs configuring, but check who holds them' with 'Microsoft has not stated the arrival default; check who holds these roles.' This also reconciles the summary with defaultState: unknown.
- [contradicted, blocker] Governance guidance: Before rollout, first bullet / role: The reader can review Entra role holders through Purview's Roles and scopes area without a stated Global Administrator prerequisite. | Found: The roles that appear in the Microsoft Entra ID section of the Roles and scopes area are Microsoft Entra roles, and global administrators can see this section. | Fix: Replace the first Before rollout bullet with 'Ask a Global Administrator to review Compliance Administrator and Security Administrator holders in Microsoft Purview portal > Settings > Roles and scopes > Microsoft Entra ID > admin role, using the role panel details.' | Source: https://learn.microsoft.com/purview/purview-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Purview role-group membership is managed at Settings > Roles and scopes > Role groups > role group > Edit > Choose users. | Found: On Role groups for Microsoft Purview solutions, select a Microsoft Purview role group you want to add users to. Select Edit on the control bar. ... On Edit members of the role group, select Choose users or Choose groups. | Fix: Use 'Settings > Roles and scopes > Role groups > role group > Edit > Edit members of the role group > Choose users' in controls[0].ui.path and the rendered table. The omitted step is the heading containing the control. | Source: https://learn.microsoft.com/purview/purview-permissions
- [supported, minor] front matter: licensing.model and notes; Cost and licensing; rationale: cost / absence: A Diagnostics-specific licence requirement is not yet published, so the licensing model is unknown. | Found: Searched: Purview self-help diagnostics license pricing prerequisites. Opened self-help diagnostics and Purview service description; searched the latter for diagnostic (no matches). It gives general licensing obligations but no Diagnostics-specific entitlement. | Fix: Keep the Diagnostics-specific gap, but add to licensing.notes and Cost and licensing: 'Microsoft's Purview service description says users with a Purview role assigned for use in the portal require a licence; a Diagnostics-specific entitlement is not yet published.' Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description.
- [supported, minor] What's changing; Scope / role: Information Protection Solutions diagnostics require Compliance Administrator or Security Administrator. | Found: To run the Information Protection diagnostics, you need to have either of the following roles: Compliance Administrator; Security Administrator | Fix: After the current role requirements, add: 'Another Microsoft Learn page at https://learn.microsoft.com/troubleshoot/microsoft-365/diagnostics/purview-compliance-diagnostics still says Solutions diagnostics require a Microsoft 365 global administrator.' Cite that page as well; do not replace the current requirements. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics
- [supported, minor] Governance guidance: At rollout / admin-path: Information Protection diagnostics can be checked under Purview Solutions > Information Protection. | Found: Solutions > Information Protection > Diagnostics | Fix: Give the full route 'Solutions > Information Protection > Diagnostics' in the test-account instruction. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics
- [supported, minor] Governance guidance: At rollout / admin-path: DLP diagnostics can be checked under Purview Solutions > Data Loss Prevention. | Found: Solutions > Data Loss Prevention > Diagnostics | Fix: Give the full route 'Solutions > Data Loss Prevention > Diagnostics' in the test-account instruction. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist asks readers to review Entra role membership, but the only control row explicitly covers Purview role groups instead. | Found: Check which accounts hold Compliance Administrator and Security Administrator in Microsoft Entra ID ... the row below governs the Organization Management role group and the other Purview role groups. | Fix: The Before rollout instruction to review Compliance Administrator and Security Administrator in Microsoft Entra ID has no corresponding controls row; the existing row covers Purview role groups. Do not present that row as the Entra membership control.
-->
