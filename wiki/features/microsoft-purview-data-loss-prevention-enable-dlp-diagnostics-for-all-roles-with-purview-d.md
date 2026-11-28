---
title: "Microsoft Purview DLP: every role that can view DLP policies can now run DLP diagnostics"
slug: "microsoft-purview-data-loss-prevention-enable-dlp-diagnostics-for-all-roles-with-purview-d"
roadmapId: 557192
topic: "governance"
products: ["Microsoft Purview"]
summary: "Twelve Purview and Entra roles that can view DLP policies, read-only ones included, can now run the DLP diagnostics in the Purview portal. Admins should check who holds those roles."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: "February CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The self-help diagnostics page lists roles as the requirement and names no licence. DLP for Exchange Online, SharePoint and OneDrive comes with the plans the Microsoft Purview service description lists, such as Microsoft 365 E5/E3 and Business Premium. Nothing specific to diagnostics is published."
audiences: ["security","compliance","m365-admin"]
tags: ["purview","dlp","diagnostics","role-groups","least-privilege"]
sources:
  - title: "Self-help diagnostics for Microsoft Purview"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Check-PurviewConfig"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/check-purviewconfig"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 557192"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557192"
    kind: "roadmap"
  - title: "Who can run the DLP diagnostics (membership of the Purview role groups that carry the listed roles) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["role-groups","microsoft-purview-data-loss-prevention-new-guided-experience-to-diagnose-and-resolve-dlp-i","microsoft-purview-data-loss-prevention-additional-diagnostics-for-data-loss-prevention-and","microsoft-purview-endpoint-data-loss-prevention-view-only-access-to-device-onboarding-with","administrative-units"]
controls:
  - governs: "Who can run the DLP diagnostics (membership of the Purview role groups that carry the listed roles)"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Needs the Role management role. Also governs everything else the role group allows. Entra roles are managed in Microsoft Entra ID."
  - governs: "Tenant switch to turn off DLP diagnostics or restrict them separately from viewing DLP policies"
    scope: "tenant"
    ui: null
    api: null
    note: "Access follows role membership only, per the self-help diagnostics page."
confidence: "medium"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-04T23:00:45"
changes:
  - date: "2026-11-28"
    note: "New briefing: DLP diagnostics opened to the twelve roles that can view DLP policies, with the role-group control and the precedence of Entra roles."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 65 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 63
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "383f1033420594b89ffa961cabb2e37c"
---

## What's changing

Microsoft has widened who can run the data loss prevention (DLP) diagnostics in the Microsoft Purview portal. The roadmap item states that all roles with access to view DLP policies can now also run diagnostics on those policies. The Learn page *Self-help diagnostics for Microsoft Purview* lists twelve roles for the DLP diagnostics: Compliance Administrator, Security Administrator, Organization Configuration, View-Only Configuration, Security Reader, DLP Compliance Management, View-Only DLP Compliance Management, Insider Risk Management Administrator, Information Protection Administrator, Information Protection Analyst, Information Protection Investigator and Data Security AI Administrator. This matches the roadmap's list.

The diagnostics sit at **Solutions** > **Data Loss Prevention** > **Diagnostics**. They check which DLP policies apply to a user, whether a DLP rule matched a SharePoint or OneDrive file (from the file's properties and classification), why alerts are missing for a rule or an activity, Endpoint DLP policy sync issues, and which DLP rules applied to an Exchange Online message (from an uploaded message trace log). Each run calls the `Check-PurviewConfig` cmdlet and then cmdlets such as `Get-DlpCompliancePolicy` and `Get-DlpComplianceRule`. The page says the diagnostics can fix some configuration issues but don't make changes to the tenant without consent.

The widening covers the DLP diagnostics on the Solutions page only. The same Learn page still lists Compliance Administrator and Security Administrator as the roles for the Information Protection diagnostics, and Global admin as the minimum role for the DLP diagnostics in the **Help** pane.

The roadmap record shows the item as Launched, with a preview date of February CY2026 and a general availability target of April CY2026, for Worldwide (Standard Multi-Tenant) on the web. The Learn page notes that diagnostics on Solutions pages are being rolled out gradually and might not yet be available in every organisation.

## Why it matters

The change lets read-only staff, such as a security operations analyst with Security Reader or a helpdesk lead with View-Only DLP Compliance Management, troubleshoot a DLP policy without being given a role that can edit it. That should cut escalations to DLP administrators. It also means anyone holding one of the twelve roles can enter a colleague's user principal name (UPN) or a file path and see which policies apply and how the file was classified.

The roadmap says these roles "will now have" diagnostic access, so no administrator has to turn it on: if nobody acts, everyone who already holds a listed role can run the DLP diagnostics. The decision is whether the membership of those roles, especially the read-only ones, still matches who you want running these checks.

## Risk assessment

**Data exposure**
- The diagnostics return the DLP policy names that apply to a user, the properties and classification of a SharePoint or OneDrive file whose path is entered, and the DLP rules applied to messages in an uploaded message trace log. Microsoft does not say whether a role holder who cannot open a file still sees its classification in the result; test this with a read-only account. The control is membership of the listed roles (row 1).

**Security & identity**
- Compliance Administrator, Security Administrator and Security Reader are also Microsoft Entra roles that map to Purview role groups of the same names. The Purview permissions page says an Entra role takes precedence over a scoped Purview role group assignment, so an Entra Security Reader gets unscoped access for overlapping capabilities even where an administrative unit scopes their Purview role group.

**Autonomy & actions**
- The page says the diagnostics can fix some configuration issues and don't change the tenant without consent. It does not say whether a holder of a view-only role can give that consent. No diagnostic runs on its own; each is started by a person.

**Change & support**
- More people can self-serve DLP troubleshooting, so expect fewer escalations and some new questions about results. The Help pane DLP diagnostics still list Global admin as the minimum role, so the same issue can need different roles depending on where it is run.

## Cost and licensing

- **Licence:** the *Self-help diagnostics for Microsoft Purview* page lists the roles needed to run the DLP diagnostics and names no licence. The diagnostics check DLP policies, and the Microsoft Purview service description lists the licences that give users the right to benefit from DLP for Exchange Online, SharePoint Online and OneDrive for Business: Microsoft 365 E5/A5/G5/E3/A3/G3, Microsoft 365 Business Premium, SharePoint Online Plan 2, OneDrive for Business (Plan 2), Exchange Online Plan 2, Office 365 E5/A5/G5/E3/A3/G3 and the Microsoft Purview Suite plans.
- **Meter:** the self-help diagnostics page publishes no price or meter for running diagnostics at the time of writing (November 2026).
- **Indirect cost:** admin time to review who holds the twelve roles, and to brief analysts on what the diagnostics show.

## Scope

- **Who can run it:** holders of any of the twelve roles listed under What's changing.
- **Who manages access:** an admin with the *Role management* role edits Purview role groups; Microsoft Entra roles are managed in Microsoft Entra ID.
- **Where:** Microsoft Purview portal, **Solutions** > **Data Loss Prevention** > **Diagnostics**. Platform: Web.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Rollout:** Launched on the roadmap. Learn says Solutions page diagnostics are rolled out gradually and might not yet be in every organisation.
- **Out of scope:** the Information Protection diagnostics and the Help pane DLP diagnostics keep the roles the Learn page lists for them.

## Governance guidance

### Before rollout
- List the members of the Security Reader, View-Only Configuration, View-Only DLP Compliance Management and Information Protection Analyst roles in Microsoft Purview portal > Settings > Roles and scopes > Role groups.
- Check who holds the Microsoft Entra Compliance Administrator, Security Administrator and Security Reader roles, since those override administrative-unit scoping in Purview.
- Decide whether every read-only role holder should be able to check a colleague's DLP coverage or a file's classification, and remove members who don't need it.

### At rollout
- Confirm that **Solutions** > **Data Loss Prevention** > **Diagnostics** appears in your tenant, as Learn says rollout is gradual.
- Run a file-path diagnostic with a test account in View-Only DLP Compliance Management to see what it returns for a file that account cannot open.
- Tell DLP administrators and helpdesk leads which issues the diagnostics cover, so first-line triage moves to them.

### After rollout
- Review membership of the Purview role groups that carry the twelve roles on your normal access-review cycle.
- Recheck the role list on the *Self-help diagnostics for Microsoft Purview* page when Microsoft updates it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who can run the DLP diagnostics (membership of the Purview role groups that carry the listed roles)</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Role management role. Also governs everything else the role group allows. Entra roles are managed in Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant switch to turn off DLP diagnostics or restrict them separately from viewing DLP policies</strong><br><small>Tenant</small><br><small class="controls__note">Access follows role membership only, per the self-help diagnostics page.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Membership of the twelve listed roles is the only control over who runs the DLP diagnostics that Microsoft Learn documents at the time of writing (November 2026); it also governs everything else those roles can do. Editing a Purview role group needs the *Role management* role. Compliance Administrator, Security Administrator and Security Reader are also Microsoft Entra roles: the Purview permissions page says to manage their members by selecting **Manage members** in Microsoft Entra ID, and that an Entra role takes precedence over a scoped Purview role group assignment. The `Check-PurviewConfig` cmdlet that the diagnostics call can also be run in Security & Compliance PowerShell; its reference says admins with the Organization Configuration role can run it.

## Open questions

- Can a holder of a view-only role, such as Security Reader, accept a configuration fix that a DLP diagnostic offers? Watch the *Self-help diagnostics for Microsoft Purview* page.
- Does a file-path diagnostic show the classification of a file the person running it cannot open?
- Do the DLP diagnostics respect administrative-unit scoping on a Purview role group?
- Is each diagnostic run recorded in the unified audit log, and under which activity name? Watch the *Audit log activities* page.

<!-- rationale
risk: Low. The diagnostics go to roles that can already view DLP policies, but read-only roles such as Security Reader can now enter a user or file path and see which policies apply.
cost: Low. The diagnostics page names roles, not a licence or meter, as the requirement; the only cost shown is admin time to review role membership.
impact: Low. Only administrators and analysts who hold one of the twelve listed roles notice the change; end users see nothing.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: No diagnostic runs on its own and every run is started by a person. | Found: Searched: 'Purview Solutions DLP diagnostics automatic scheduled runs Check-PurviewConfig user selects diagnostic'; opened self-help diagnostics and Check-PurviewConfig. They describe user-selected execution but do not state that every possible run must be started by a person. | Fix: Replace 'No diagnostic runs on its own; each is started by a person.' with 'Learn describes starting a Solutions-page diagnostic by selecting it in the portal.' See https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters / role: Security Reader and View-Only DLP Compliance Management let staff troubleshoot without granting DLP policy editing rights. | Found: View-Only DLP Compliance Management | View the settings and reports for data loss prevention (DLP) policies. | Compliance Administrator Compliance Data Administrator Global Reader Organization Management Security Administrator Security Operator Security Reader | Fix: Add 'Roles and role groups in Microsoft Defender for Office 365 and Microsoft Purview' at https://learn.microsoft.com/defender-office-365/scc-permissions to sources for the read-only DLP permissions statement. | Source: https://learn.microsoft.com/defender-office-365/scc-permissions
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Settings > Roles and scopes > Role groups is the portal location for listing membership of groups carrying the named roles. | Found: Go to Settings > Roles and scopes to view and manage compliance and governance roles in your organization. Select Role groups. On Role groups for Microsoft Purview solutions, select a Microsoft Purview role group ... Select Edit on the control bar. | Fix: Extend the first Before rollout bullet's route to 'Microsoft Purview portal > Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group', specifying a role group that carries the role. See https://learn.microsoft.com/purview/purview-permissions. | Source: https://learn.microsoft.com/purview/purview-permissions
- [contradicted, minor] Governance guidance: Before rollout, second bullet; controls / consistency: The checklist asks administrators to review Microsoft Entra role membership, but the table has no row for that separate control. | Found: Check who holds the Microsoft Entra Compliance Administrator, Security Administrator and Security Reader roles ... / table: Purview role-group membership; tenant switch to turn off DLP diagnostics. | Fix: Remove the second Before rollout checklist bullet about checking Microsoft Entra role membership; retain the verified Entra precedence explanation in Risk assessment and Governance controls. Do not add a control row in this correction.
- [supported, minor] Why it matters; Risk assessment: Data exposure / behaviour: The file diagnostic's underlying Test-DlpPolicies report exposes the file's classification and evaluated policy and rule details. | Found: Classification ID | The sensitive information type (SIT) the item is categorized as; Policy Details | The name and GUID of the policy that was evaluated; Rules - Rule Details | The DLP rule name and GUID | Fix: Add 'Test your Data Loss Prevention policies' at https://learn.microsoft.com/purview/dlp-test-dlp-policies to sources for the file-classification and policy/rule output description. | Source: https://learn.microsoft.com/purview/dlp-test-dlp-policies
-->
