---
title: "Viva Insights: Access Management for Copilot Analytics roles and permissions"
slug: "microsoft-viva-access-management-for-copilot-analytics"
roadmapId: 578862
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Copilot Analytics plans one in-product page for access policies (permission set plus partition), replacing VFAM and Manager settings for this. Users move automatically; record current access before January CY2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "January CY2027"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "included"
  notes: "Copilot Analytics is available in the Viva Insights web app with a Microsoft 365 or Office 365 business or enterprise subscription and Exchange Online; features depend on Copilot and Viva Insights licences. Nothing specific to Access Management is published."
audiences: ["m365-admin","service-owner","security","compliance"]
tags: ["viva-insights","viva-feature-access-management","analytics","privacy","least-privilege","admin-controls","entra-id","gcc"]
sources:
  - title: "Microsoft 365 Roadmap item 578862"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=578862"
    kind: "roadmap"
  - title: "Manage access in Agent 365 Business Analytics (Frontier)"
    url: "https://learn.microsoft.com/a365-business-analytics/manage/access"
    kind: "learn"
  - title: "Copilot Analytics introduction"
    url: "https://learn.microsoft.com/viva/insights/copilot-analytics-introduction"
    kind: "learn"
  - title: "Roles in Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/user-roles"
    kind: "learn"
  - title: "Identification in Copilot Analytics"
    url: "https://learn.microsoft.com/viva/insights/identification-copilot-analytics"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Configure manager settings"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    kind: "learn"
  - title: "Partitions in Viva Insights"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/partitions"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Assign roles"
    url: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles"
    kind: "learn"
  - title: "Assign Microsoft Entra roles"
    url: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    kind: "learn"
videos: []
related: ["viva-feature-access-management","microsoft-viva-copilot-analytics-identifiable-export-metrics-in-the-copilot-dashboard","microsoft-viva-interactive-insights-in-the-a365-business-analytics-app","microsoft-viva-copilot-analytics-agent-dashboard"]
controls:
  - governs: "Whether the Viva Insights web app that hosts Copilot Analytics is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Microsoft Copilot Dashboard > Manage access settings for Microsoft Copilot Dashboard > Users > Add"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId \"Viva Insights web app\" -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    note: "AI Administrator. On by default; settable at tenant, group or user level. Turning it off disables the whole app, admin tools included."
  - governs: "Who holds the Insights Administrator and Insights Analyst roles"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Viva Insights > Add-on Plan > role > Add users"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles"
    api:
      kind: "graph"
      call: "POST /v1.0/roleManagement/directory/roleAssignments"
      docs: "https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal"
    note: "Admin center steps are performed by a Global Administrator. The request body sets roleDefinitionId and principalId."
  - governs: "Which Viva Insights features each user or group can use (VFAM policies)"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId <featureID> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "The app, feature and access setting are chosen in the Create a policy pane. Get-VivaModuleFeature -ModuleId VivaInsights lists feature IDs."
  - governs: "Which managers get team-scoped insights (Manager settings)"
    scope: "group"
    ui:
      surface: "Viva Insights Admin portal"
      path: "Settings > Manager Settings > Use AAD groups > Add group"
      docs: "https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings"
    api: null
    note: "Viva Insights Administrator or AI admin. The roadmap says Access Management replaces managing access here."
  - governs: "Which employees, attributes and datasets analysts can query (partitions)"
    scope: "other"
    ui:
      surface: "Viva Insights web app"
      path: "Settings > Partitions > Create new partition"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/partitions"
    api: null
    note: "Admin experience of the Viva Insights web app; the Insights Administrator configures partitions."
  - governs: "Copilot Analytics access policies, permission sets and partitions in the new Access Management experience"
    scope: "tenant"
    ui: null
    api: null
    note: "Planned for January CY2027. Learn documents an equivalent page for Agent 365 Business Analytics (Frontier preview), not for Copilot Analytics."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-11-26T00:16:54"
changes:
  - date: "2026-11-26"
    note: "New briefing: planned Access Management for Copilot Analytics, with today's role, VFAM, Manager settings and partition controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 75 statements contradicted, 5 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 75
  confirmed: 69
  unconfirmed: 5
  contradicted: 1
  attempts: 1
  hash: "ed5efc2ed31123dfdf61f10e6ab855d9"
---

## What's changing

Microsoft plans to add an **Access Management** experience inside Viva Insights - Copilot Analytics, where Global administrators, AI administrators and Viva Insights administrators assign roles and permissions in one place. The roadmap item states that this replaces managing access across Viva Feature Access Management (VFAM, the Microsoft 365 admin center policies that switch Viva features on or off for people and groups) and the in-product Manager Settings. Microsoft Learn does not describe this feature for Copilot Analytics yet, so what follows about its behaviour is the roadmap's description.

Admins will create **access policies**, each combining a **permission set** (what users can do) with a **partition** (the population and datasets users can see). Policies can be assigned to individual users, Microsoft Entra security groups or, for group managers, organisational attributes. The roadmap item states that existing role assignments continue to work and that users are automatically moved to system-defined access policies.

Microsoft Learn already documents an Access management page built from the same three parts in [Agent 365 Business Analytics](https://learn.microsoft.com/a365-business-analytics/manage/access), a Frontier preview app. There, every tenant starts with system-defined Chief Officer, Group Manager and Analyst permission sets and access policies paired with a read-only Global partition, and a user's effective access is the combination of all their assignments. That page describes a different app in preview, so read it as a likely pattern, not as how Copilot Analytics will behave.

The roadmap status is In development, targeted for general availability in January CY2027, for Worldwide (Standard Multi-Tenant) and GCC, on the web. No Message center post was supplied for the item at the time of writing (November 2026).

## Why it matters

Who can see Copilot Analytics data today is decided in four places: the Insights Administrator and Insights Analyst roles, VFAM policies such as the Viva Insights web app control, Manager settings, and partitions. Folding these into one policy model is easier to audit, but the move happens to your tenant rather than when you choose it: the roadmap says users are moved automatically to system-defined policies. If nobody acts, the roadmap says existing assignments keep working; what you lose is the chance to record today's access before it is re-expressed in a new model.

The bigger question is delegation. The roadmap names Viva Insights administrators alongside Global and AI administrators as managers of access, and in the Agent 365 Business Analytics version a permission set can carry capabilities such as identification and export. Today Microsoft documents identification policies in Copilot Analytics as managed by a Global Administrator or an AI Administrator. Plan on confirming which role can grant what once the Copilot Analytics pages are published.

## Risk assessment

**Data exposure**
- A policy pairs a permission set with a partition, so one broad pairing (a permissive set with the whole-organisation population) widens who sees employee-level Copilot data in one step. Partitions today are a row- and column-level control over which employees and attributes analysts can query.
- Policies can be assigned to Entra security groups, so whoever can change a group's membership changes who sees analytics data. Check ownership of any group you assign.

**Security & identity**
- Three admin roles are named as access managers. Global Administrators already inherit Insights Administrator privileges in Viva Insights, and the AI Administrator manages the Viva Insights web app control. Microsoft has not published whether Viva Insights administrators will be able to grant identification or export in Copilot Analytics.

**Autonomy & actions**
- No change: this is an admin console. The automatic move of users to system-defined policies is a one-time migration described by the roadmap, not an agent acting on data.

**Change & support**
- Runbooks that use Manager settings or VFAM policies for Viva Insights features may stop being where access is decided. Microsoft has not said how existing VFAM policies map to access policies, so expect access questions from leaders, managers and analysts after the move.

## Cost and licensing

Access Management is a screen inside Copilot Analytics, which the [Copilot Analytics introduction](https://learn.microsoft.com/viva/insights/copilot-analytics-introduction) describes as available in the Viva Insights web app for any customer with a Microsoft 365 or Office 365 subscription for business or enterprise who has an active Exchange Online account, with features and metrics depending on the number of assigned Copilot and Viva Insights licences. Nothing specific to Access Management is published: Microsoft documents no separate licence, price or meter for it at the time of writing (November 2026).

The cost you can see is admin time: taking stock of current roles, VFAM policies, Manager settings and partitions before January, and checking the migrated policies afterwards.

## Scope

- **Who manages it:** Global administrators, AI administrators and Viva Insights administrators, per the roadmap item.
- **Who is affected:** users who hold Copilot Analytics access today, whom the roadmap says are moved automatically to system-defined access policies.
- **Assignment targets:** individual users, Microsoft Entra security groups, and organisational attributes for group managers.
- **Clouds and platform:** Worldwide (Standard Multi-Tenant) and GCC, web, as the roadmap lists them.
- **Timing:** In development; general availability targeted for January CY2027.
- **Prerequisites:** not yet published.

## Governance guidance

### Before rollout
- Export the current Insights Administrator and Insights Analyst assignments from the Microsoft 365 admin center (Viva Insights, Add-on Plan) so you can compare them with the migrated policies.
- Record every Viva Insights VFAM policy, including the Viva Insights web app control, with Get-VivaModuleFeaturePolicy or the Manage feature access page.
- Capture Manager settings (which managers are enabled and through which groups) and the list of partitions with their assigned analysts.
- Decide which of your Global, AI and Viva Insights administrators should manage Copilot Analytics access, and remove standing role assignments you do not need.

### At rollout
- Check that each person in your inventory appears under the system-defined access policy you expect, and that nobody gained identification or export they did not have.
- Confirm who owns and can change each security group you assign to an access policy.
- Tell leaders, managers and analysts where access is now managed and who to ask.

### After rollout
- Review the VFAM change logs in Microsoft Purview for policy changes made around the migration.
- Re-check the Copilot Analytics pages on Microsoft Learn for documented permission sets, roles and automation, and update runbooks that still point at Manager settings.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the Viva Insights web app that hosts Copilot Analytics is available</strong><br><small>Tenant</small><br><small class="controls__note">AI Administrator. On by default; settable at tenant, group or user level. Turning it off disables the whole app, admin tools included.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Microsoft Copilot Dashboard › Manage access settings for Microsoft Copilot Dashboard › Users › Add <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &quot;Viva Insights web app&quot; -Name DisableFeatureForAll -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who holds the Insights Administrator and Insights Analyst roles</strong><br><small>User</small><br><small class="controls__note">Admin center steps are performed by a Global Administrator. The request body sets roleDefinitionId and principalId.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Viva Insights › Add-on Plan › role › Add users <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/roleManagement/directory/roleAssignments</code> <a href="https://learn.microsoft.com/entra/identity/role-based-access-control/manage-roles-portal" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Viva Insights features each user or group can use (VFAM policies)</strong><br><small>Group</small><br><small class="controls__note">The app, feature and access setting are chosen in the Create a policy pane. Get-VivaModuleFeature -ModuleId VivaInsights lists feature IDs.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId &lt;featureID&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which managers get team-scoped insights (Manager settings)</strong><br><small>Group</small><br><small class="controls__note">Viva Insights Administrator or AI admin. The roadmap says Access Management replaces managing access here.</small></td><td data-label="Admin UI"><strong>Viva Insights Admin portal</strong><br>Settings › Manager Settings › Use AAD groups › Add group <a href="https://learn.microsoft.com/viva/insights/advanced/setup-maint/manager-settings" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which employees, attributes and datasets analysts can query (partitions)</strong><br><small class="controls__note">Admin experience of the Viva Insights web app; the Insights Administrator configures partitions.</small></td><td data-label="Admin UI"><strong>Viva Insights web app</strong><br>Settings › Partitions › Create new partition <a href="https://learn.microsoft.com/viva/insights/advanced/admin/partitions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Copilot Analytics access policies, permission sets and partitions in the new Access Management experience</strong><br><small>Tenant</small><br><small class="controls__note">Planned for January CY2027. Learn documents an equivalent page for Agent 365 Business Analytics (Frontier preview), not for Copilot Analytics.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The rows describe today's controls, which the roadmap says Access Management brings into one place; none is documented as a control over the new experience itself. The Viva Insights web app is on by default; turning its VFAM control off disables the whole app, including the Copilot Dashboard, Copilot Analytics reports and the advanced analysis and admin tools. The AI Administrator does not have automatic access to the web app and must add themselves. VFAM allows up to 10 policies per feature for users and groups, each with up to 20 users or groups, plus one tenant-wide policy, and changes take effect for users within 24 hours. Manager settings changes apply after one hour. Role assignments in the admin center are made by a Global Administrator; organisations using Privileged Identity Management can assign the Insights roles there instead.

## Open questions

- Which capabilities will Copilot Analytics permission sets contain, and will they replace the VFAM identification and export policies? Watch the Viva Insights admin pages on Microsoft Learn.
- Do existing VFAM policies for Viva Insights features keep applying after the move, and which wins when a VFAM policy and an access policy disagree?
- Will Viva Insights administrators be able to grant identifiable data access, which Microsoft documents today as managed by Global and AI Administrators?
- Will access policies, permission sets and partitions be scriptable through PowerShell or Microsoft Graph?
- Which organisational attributes can drive group manager assignment, and does the minimum team size in Manager settings still apply?

<!-- rationale
risk: Medium. Access to employee-level Copilot data is re-expressed automatically in a new policy model that three admin roles can change; existing roles, VFAM and partitions cover today's access but need checking after the move.
cost: Low. It sits inside Copilot Analytics, which comes with Microsoft 365 or Office 365 business and enterprise subscriptions; no separate licence or meter is published, so the cost is admin time to inventory and check access.
impact: Medium. Admins, plus the leaders, managers and analysts who use Copilot Analytics and whose access the roadmap says moves to system-defined policies.
-->

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState / default: The new Access Management control starts enforcing by default, represented by defaultState on. | Found: Searched: Viva Insights Copilot Analytics Access Management default enforcement existing VFAM policies migration. Read roadmap, Manage settings, Identification, and Business Analytics access; automatic migration is stated, but the new control's default enforcement is not. | Fix: Set defaultState to unknown. Add: 'Microsoft has not stated the new control's default enforcement state; the roadmap separately says existing role assignments continue to work and users are moved automatically to system-defined access policies.' Keep the documented automatic-migration statements.
- [unsupported, blocker] front matter: licensing.notes; Cost and licensing; rationale: cost / licensing: Copilot Analytics as a whole is available with a Microsoft 365 or Office 365 business or enterprise subscription and Exchange Online. | Found: Searched: Viva Insights Copilot Analytics licensing access management new experience price prerequisites. Read Copilot Analytics introduction and Environment requirements excerpt; the cited subscription entitlement explicitly describes the Copilot Dashboard, not all Copilot Analytics. | Fix: Replace the entitlement sentence in licensing.notes and Cost and licensing with: 'The Copilot Analytics introduction says the Copilot Dashboard is available in the Viva Insights web app with a Microsoft 365 or Office 365 business or enterprise subscription and an active Exchange Online account; its features and metrics depend on assigned Copilot and Viva Insights licences.' In the cost rationale, replace 'Copilot Analytics, which comes with Microsoft 365 or Office 365 business and enterprise subscriptions' with 'Copilot Analytics; the introduction publishes a subscription entitlement for the Copilot Dashboard, not the entire analytics suite'.
- [unsupported, blocker] Governance guidance: Before rollout, first bullet / admin-path: Current Insights role assignments can be exported from Viva Insights > Add-on Plan in the Microsoft 365 admin center. | Found: Searched: Viva Insights Insights Administrator Analyst export role assignments Microsoft 365 admin center Add-on Plan; Viva Insights export role assignments. Read Assign roles and export search excerpts; Add-on Plan documents assignment and verification, not an export operation. | Fix: Replace the bullet with: 'Record the current Insights Administrator and Insights Analyst assignments from Microsoft 365 admin center > Settings > Viva > Viva Insights > Add-on Plan > role so you can compare them with the migrated policies.' This verification route is documented at https://learn.microsoft.com/viva/insights/advanced/setup-maint/assign-user-roles.
- [unsupported, major] Risk assessment: Data exposure, first bullet / behaviour: A permissive permission-set/partition pairing in the planned Copilot Analytics experience provides employee-level Copilot data access in one step. | Found: Searched: Copilot Analytics Access management permission sets; Copilot Analytics Access Management PowerShell Graph permission sets licensing. Read roadmap and Business Analytics access; employee-level identification/export capabilities are documented for the latter app, not this planned experience. | Fix: Replace the first sentence with: 'A policy pairs a permission set with a partition, so review both what users can do and which population and datasets they can see.' Keep the separately supported sentence about today's partitions.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The roadmap specifies that the automatic migration happens only once. | Found: Searched: Viva Insights Copilot Analytics Access Management default enforcement existing VFAM policies migration. Read roadmap and Business Analytics access; both describe automatic transition, neither specifies that assignments or migration run only once. | Fix: Replace 'a one-time migration described by the roadmap' with 'an automatic migration described by the roadmap'.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[2].ui; rendered controls table / admin-path: Settings > Viva > Settings > Manage feature access > Create a policy reaches the VFAM policy form in the Microsoft 365 admin center. | Found: select Viva from the settings menu. ... Select the Settings tab and select Manage feature access. ... Select Create a policy. ... Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: Extend controls[2].ui.path to 'Settings > Viva > Settings > Manage feature access > Create a policy > Access setting'. Keep the note that the app and feature are selected in the form. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[4].ui; controls[4].note; rendered controls table / admin-path: Settings > Partitions > Create new partition reaches partition creation in the Viva Insights web app admin experience. | Found: In the Viva Insights web app's admin experience, select Partitions under Settings. ... Select Create new partition. ... Under Partition setup: ... Filter which employee data ... Add employee attributes. ... Pick which analysts ... Select which dataset | Fix: Extend controls[4].ui.path to 'Settings > Partitions > Create new partition > Partition setup'. Append to its note: 'In the form, filter employee data, add attributes, assign analysts and select the dataset.' The existing Insights Administrator role statement is supported. | Source: https://learn.microsoft.com/viva/insights/advanced/admin/partitions
- [contradicted, minor] Governance guidance: After rollout; controls table / consistency: The checklist's instruction to review VFAM change logs has a corresponding controls-table row. | Found: Checklist: 'Review the VFAM change logs in Microsoft Purview for policy changes made around the migration.' The six controls rows cover web app access, roles, VFAM feature policies, Manager settings, partitions and the new experience; none covers audit-log review. | Fix: Remove the After rollout bullet instructing the reader to review VFAM change logs; that checklist step has no matching controls row. Do not add a new row in this correction.
-->
