---
title: "Microsoft Purview DSPM: item-level investigation and remediation of overshared SharePoint items in data risk assessments (GCC, GCC High, DoD)"
slug: "microsoft-purview-dspm-data-risk-assessments-item-level-investigation-and-remediation"
roadmapId: 557557
topic: "governance"
products: ["Microsoft Purview"]
summary: "For GCC, GCC High and DoD, custom data risk assessments in Purview DSPM can list overshared SharePoint items and resolve, notify, label or remove sharing links. It needs an admin-registered Entra app with Graph write permissions."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Microsoft's DSPM (classic) get-started page states that DSPM needs a Microsoft 365 E5 or Microsoft Purview Suite licence; the current DSPM prerequisites page asks for a supporting licence as set out in the Purview service description. No licence or charge specific to item-level scanning is published."
audiences: ["compliance","security","m365-admin","service-owner"]
tags: ["purview","dspm","oversharing","sharepoint","sharing","sensitivity-labels","role-groups","service-principal","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "Prevent oversharing with data risk assessments from Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    kind: "learn"
  - title: "Considerations for DSPM for AI to manage data security and compliance protections for AI interactions - (classic)"
    url: "https://learn.microsoft.com/purview/dspm-for-ai-considerations"
    kind: "learn"
  - title: "Considerations for Microsoft Purview Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-considerations"
    kind: "learn"
  - title: "Get started with Data Security Posture Management - (classic)"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-get-started"
    kind: "learn"
  - title: "Permissions for Data Security Posture Management"
    url: "https://learn.microsoft.com/purview/data-security-posture-management-permissions"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 523202 (Worldwide)"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=523202"
    kind: "roadmap"
  - title: "Whether item-level scanning and remediation can run: the Graph application permissions of the DSPM app (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto"
    kind: "learn"
  - title: "Who can create data risk assessments (Compliance Administrator role group membership) (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Who can create data risk assessments (Compliance Administrator role group membership) (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-dspm-new-microsoft-purview-data-security-posture-management-experience","sensitivity-labels","role-groups","microsoft-purview-dspm-copilot-readiness-and-data-explorer"]
controls:
  - governs: "Whether item-level scanning and remediation can run: the Graph application permissions of the DSPM app"
    scope: "app"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Identity > Applications > App registrations > app > API permissions > Microsoft APIs > Microsoft Graph > Application permissions"
      docs: "https://learn.microsoft.com/purview/dspm-for-ai-considerations"
    api:
      kind: "graph"
      call: "POST /v1.0/servicePrincipals/{id}/appRoleAssignedTo"
      docs: "https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto"
    note: "Needs Cloud Application Administrator, Application Administrator or Privileged Role Administrator. The Graph request body is an appRoleAssignment with principalId, resourceId and appRoleId."
  - governs: "Running an item-level scan in a custom data risk assessment"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "DSPM > Discover > Data risk assessments > Create custom assessment > Scan level > Item-level"
      docs: "https://learn.microsoft.com/purview/data-security-posture-management-oversharing"
    api: null
    note: "Then select Authenticate to give the Entra app details. SharePoint sites only, up to 10 sites."
  - governs: "Who can create data risk assessments (Compliance Administrator role group membership)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The DSPM permissions page also lists the Entra Compliance Administrator and Global Administrator roles as able to create assessments."
  - governs: "Who can view file details in data risk assessments (Content Explorer role groups)"
    scope: "user"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Role groups named on the DSPM permissions page: Content Explorer Content Viewer and Content Explorer List Viewer."
  - governs: "Setting to disable individual remediation actions such as Remove sharing link"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no such setting at the time of writing (November 2026)."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-04T23:15:54"
changes:
  - date: "2026-11-27"
    note: "New briefing for the GCC, GCC High and DoD roadmap item: item-level scanning and remediation in DSPM custom data risk assessments, its Entra app prerequisite, limits and roles."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 66 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 64
  unconfirmed: 1
  contradicted: 1
  attempts: 1
  hash: "c1d4c1bb40a9cf316dcdb21ed11bcf39"
---

## What's changing

Custom data risk assessments in Microsoft Purview Data Security Posture Management (DSPM) can now scan individual SharePoint items, show which ones are potentially overshared, and let an administrator act on selected items from the assessment. Microsoft Learn documents that the scan flags an item as potentially overshared when it has a sharing link for external or anonymous users, and shows any applied sensitivity label and the owner of each item.

Item-level scanning is an option in a custom assessment, not in the default weekly assessment. The [data risk assessments page](https://learn.microsoft.com/purview/data-security-posture-management-oversharing) says Microsoft 365 custom assessments "optionally support item-level scanning with remediation actions when you complete a one-time authentication process", which needs a registered Microsoft Entra application. Once the scan completes, findings appear on the **Potentially overshared items** tab, and four actions are available: **Resolve** (mark the item as not at risk), **Apply sensitivity label**, **Notify** (a non-customisable email to the site owner) and **Remove sharing link**. The site owner's email links to the SharePoint site and to a read-only view in the Microsoft Purview portal that shows only items and sites they own.

The roadmap record lists this item (557557) as Launched, General Availability, with a target of April CY2026, for GCC, GCC High and DoD on the web. Microsoft lists the same feature for the Worldwide cloud under roadmap item 523202 (Launched, target March CY2026, preview November CY2025). The Learn page does not distinguish between clouds.

## Why it matters

This turns DSPM from a reporting tool into one that changes content: the assessment can apply labels and delete sharing links on SharePoint items. To do that, the tenant has to register an Entra app holding Microsoft Graph application permissions that include Files.ReadWrite.All and Sites.ReadWrite.All, protected by a client secret. That app, and who holds its secret, becomes part of the tenant's attack surface whether or not anyone runs another assessment.

If nobody acts, nothing changes: item-level scanning is not available until an administrator completes the one-time authentication with that app and chooses **Item-level** in a custom assessment. For government tenants with external or anonymous sharing links on sensitive SharePoint sites, it offers a faster way to find and close those links than site-level reports, within a limit of 10 sites per item-level scan.

## Risk assessment

**Data exposure**
- The scan surfaces item names, owners, labels and sharing-link details for up to 10 SharePoint sites to whoever can view the assessment. File details need the Content Explorer Content Viewer or Content Explorer List Viewer role group, so control membership of those groups.
- Exported results (Excel, CSV, JSON or TSV) leave the portal's access controls; treat exports as sensitive.

**Security & identity**
- The Entra app needs six Graph application permissions, including Files.ReadWrite.All and Sites.ReadWrite.All, with admin consent and a client secret. Treat the secret as a high-value credential: restrict who can see it and record where it is stored.
- Creating the app needs Cloud Application Administrator, Application Administrator or Privileged Role Administrator in Microsoft Entra.

**Autonomy & actions**
- The roadmap item describes remediation of selected items, so each action follows an administrator's choice in the assessment.
- **Remove sharing link** deletes the link, and Microsoft says to use it sparingly because it could stop legitimate access; the site or item owner then has to set a less permissive link.

**Change & support**
- Site owners receive an email they did not ask for, and its text cannot be customised. Expect questions to the help desk unless owners are told first.
- Users who lose a link will report broken access; the fix sits with the item owner, not with Purview.

## Cost and licensing

- **Licence.** Microsoft's [DSPM (classic) get-started page](https://learn.microsoft.com/purview/data-security-posture-management-get-started) states: "To access and use DSPM, you need a Microsoft 365 E5 or Microsoft Purview Suite (formerly known as Microsoft 365 E5 Compliance) license." The [current DSPM prerequisites](https://learn.microsoft.com/purview/data-security-posture-management-considerations) ask for "a supporting license for this Microsoft Purview solution" and point to the Microsoft Purview service description.
- **Meter.** The data risk assessments page publishes no meter or separate charge for item-level scanning at the time of writing (November 2026).
- **Indirect costs.** Admin time to register and look after the Entra app and its secret, to work through findings before each assessment's 30-day expiry, and support time when removed links break access.
- **Not yet published.** Any licence or price specific to item-level investigation and remediation.

## Scope

- **Content.** SharePoint sites only: item-level scanning applies to Microsoft 365 and is "currently restricted to SharePoint sites"; OneDrive is not currently supported.
- **Limits.** A current maximum of 10 SharePoint sites for item-level scanning, and a maximum of 200,000 items per location. Results expire after 30 days; duplicate the assessment to rerun it.
- **Roles.** Microsoft Entra Compliance Administrator, Microsoft Entra Global Administrator and the Microsoft Purview Compliance Administrator role group can create data risk assessments. Viewing file details needs Content Explorer Content Viewer or Content Explorer List Viewer.
- **Prerequisite.** An Entra app registered for accounts in this organisational directory only, with Graph application permissions Application.Read.All, Directory.Read.All, Files.ReadWrite.All, SensitivityLabels.Read.All, Sites.ReadWrite.All and User.Read.All, admin consent and a client secret.
- **Clouds and platform.** The roadmap record lists GCC, GCC High and DoD, on the web. Worldwide is covered by roadmap item 523202.

## Governance guidance

### Before rollout
- Decide whether the tenant will run item-level assessments at all, since the prerequisite is an app with Files.ReadWrite.All and Sites.ReadWrite.All.
- Register the Entra app with the six documented Graph application permissions, using a Cloud Application Administrator, Application Administrator or Privileged Role Administrator, and grant admin consent.
- Record who holds the client secret and where it is kept; it is shown only once.
- Limit membership of the Compliance Administrator and Content Explorer role groups to the people who will run and review assessments.
- Tell the owners of the sites you plan to scan that they may receive a Purview email about overshared items.

### At rollout
- Create a custom assessment in DSPM, select **Item-level** on the **Scan level** page and choose no more than 10 SharePoint sites.
- Work through **Potentially overshared items** using **Resolve**, **Notify** or **Apply sensitivity label** first, and keep **Remove sharing link** for links that must go now.
- Export results before the 30-day expiry if you need a record of what was found.

### After rollout
- Duplicate the assessment to rerun it after 30 days and check whether flagged links have been closed.
- Review the app's Graph permissions and its secret on a schedule, and remove the app registration if item-level assessments are no longer run.
- Follow up with item owners whose links were removed so that authorised users get a less permissive link.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether item-level scanning and remediation can run: the Graph application permissions of the DSPM app</strong><br><small>App</small><br><small class="controls__note">Needs Cloud Application Administrator, Application Administrator or Privileged Role Administrator. The Graph request body is an appRoleAssignment with principalId, resourceId and appRoleId.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Identity › Applications › App registrations › app › API permissions › Microsoft APIs › Microsoft Graph › Application permissions <a href="https://learn.microsoft.com/purview/dspm-for-ai-considerations" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/servicePrincipals/{id}/appRoleAssignedTo</code> <a href="https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Running an item-level scan in a custom data risk assessment</strong><br><small>Tenant</small><br><small class="controls__note">Then select Authenticate to give the Entra app details. SharePoint sites only, up to 10 sites.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>DSPM › Discover › Data risk assessments › Create custom assessment › Scan level › Item-level <a href="https://learn.microsoft.com/purview/data-security-posture-management-oversharing" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Who can create data risk assessments (Compliance Administrator role group membership)</strong><br><small>User</small><br><small class="controls__note">The DSPM permissions page also lists the Entra Compliance Administrator and Global Administrator roles as able to create assessments.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can view file details in data risk assessments (Content Explorer role groups)</strong><br><small>User</small><br><small class="controls__note">Role groups named on the DSPM permissions page: Content Explorer Content Viewer and Content Explorer List Viewer.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Setting to disable individual remediation actions such as Remove sharing link</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no such setting at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

- The Entra app is the gate for this feature: item-level scanning and its remediation actions need the one-time authentication with it. Its permissions are set in Microsoft Entra, not in Purview.
- The DSPM permissions page lists who can create and view data risk assessments; it does not list remediation actions as separate activities, so it does not say whether a view-only role can take them.
- Microsoft Learn documents no setting that turns off individual remediation actions, such as **Remove sharing link**, at the time of writing (November 2026), and no PowerShell or Graph operation for data risk assessments.
- Adding role-group members in the portal needs an admin account assigned the Role management role.

## Open questions

- Which audit activities record **Resolve**, **Notify**, **Apply sensitivity label** and **Remove sharing link**, and do they show the administrator or the Entra app as the actor? Watch the Purview audit log activities page.
- Which roles can take remediation actions, as distinct from creating or viewing an assessment? Watch the DSPM permissions page.
- Can the item-level app authenticate with a certificate or federated credential instead of a client secret, as Fabric assessments can with Federated Credentials? Watch the DSPM prerequisites page.
- Will the 10-site limit and the OneDrive exclusion be lifted, and will that reach GCC, GCC High and DoD at the same time as Worldwide? Watch Message center and roadmap items 557557 and 523202.

<!-- rationale
risk: Medium. Nothing runs until an admin registers an Entra app, but that app needs Files.ReadWrite.All and Sites.ReadWrite.All application permissions and a client secret, and the Remove sharing link action can cut off legitimate access.
cost: Low. DSPM needs Microsoft 365 E5 or Microsoft Purview Suite; no separate meter for item-level scanning is published, so the known cost is admin time to set up the app and work through findings.
impact: Low. Compliance administrators use it; site owners of up to 10 scanned sites may get a notification email, and people relying on a removed sharing link lose that route to the item.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: API permissions leads directly to Microsoft APIs > Microsoft Graph > Application permissions without selecting Add a permission. | Found: Browse to Entra ID > App registrations, and then select your client application. Select API permissions > Add a permission > Microsoft Graph > Application permissions. | Fix: Replace the path in controls[0].ui and the rendered table with 'Entra ID > App registrations > app > API permissions > Add a permission > Microsoft Graph > Application permissions'. Set its docs URL to https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis and add that page to sources. The existing path omits a required button in the middle. | Source: https://learn.microsoft.com/entra/identity-platform/quickstart-configure-app-access-web-apis
- [unsupported, major] Why it matters / behaviour: This feature turns DSPM from a reporting tool into one that changes content. | Found: Searched: '"DSPM" "reporting" "item-level" "previously"'; read current oversharing and classic DSPM get-started documentation. These describe actions and policy creation but do not establish the claimed reporting-only previous state. | Fix: Replace 'This turns DSPM from a reporting tool into one that changes content: the assessment can apply labels and delete sharing links on SharePoint items.' with 'The assessment can apply labels and delete sharing links on selected SharePoint items.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Governance guidance: Before rollout / role: Cloud Application Administrator, Application Administrator or Privileged Role Administrator is the role guidance for configuring and consenting to the app permissions. | Found: You must have one of the following Entra roles to create and configure the required registered app: Cloud Application Administrator; Application Administrator; Privileged Role Administrator | Fix: Add: 'The DSPM prerequisites list these three roles, but the Graph API reference identifies Privileged Role Administrator as the least-privileged supported role for granting Microsoft Graph app roles.' Cite https://learn.microsoft.com/graph/api/serviceprincipal-post-approleassignedto, which states 'Privileged Role Administrator - the least privileged role supported for Microsoft Graph and Azure AD Graph app roles'. | Source: https://learn.microsoft.com/purview/dspm-for-ai-considerations
-->
