---
kind: "concept"
title: "Viva Feature Access Management (VFAM): who gets which Viva feature?"
slug: "viva-feature-access-management"
summary: "VFAM is the policy system that switches Viva and Microsoft 365 features, or types of data processing, on or off for the tenant, groups or users. Administrators use it to decide who reaches Insights, Pulse and similar features."
created: "2026-11-21"
updated: "2026-11-21"
version: 1
tags: ["viva-feature-access-management","admin-controls","m365-admin-center","powershell","policy","governance","analytics"]
covers: []
sources:
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Manage settings for the Microsoft Copilot Dashboard, Agent Dashboard, Consumption Dashboard, and Viva Insights web app"
    url: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    kind: "learn"
  - title: "Control access to Microsoft Copilot in Viva"
    url: "https://learn.microsoft.com/viva/copilot/copilot-access-management"
    kind: "learn"
related: ["microsoft-viva-copilot-analytics-agent-dashboard","m365-copilot-export-copilot-metrics-in-the-copilot-dashboard","microsoft-viva-ability-for-leaders-to-publish-power-bi-reports","auditing","frontier-program"]
controls:
  - governs: "Whether a Viva feature is on or off (the policy's access setting)"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId <module ID> -FeatureId <feature ID> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Role: Global Administrator or the feature-level role. -Everyone makes the one tenant-wide policy per feature."
  - governs: "Which people and groups a policy applies to"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > Apply access settings to > Specific people and groups"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId <module ID> -FeatureId <feature ID> -Name <policy name> -IsFeatureEnabled $false -GroupIds <group> -UserIds <UPN>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Up to 20 users or groups per policy; do not combine with -Everyone."
  - governs: "Whether users can opt out of a feature, or start opted out (soft disable)"
    scope: "user"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > Create a policy > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId <module ID> -FeatureId <feature ID> -Name <policy name> -IsFeatureEnabled $true -IsUserControlEnabled $true"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Only features that support user controls. Soft disable adds -IsUserOptedInByDefault $false, which needs -IsUserControlEnabled $true."
  - governs: "Changing an existing policy's setting or audience"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > More actions > Edit policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Update-VivaModuleFeaturePolicy -ModuleId <module ID> -FeatureId <feature ID> -PolicyId <policy ID> -GroupIds <group>"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Values for -UserIds, -GroupIds or -Everyone overwrite existing members."
  - governs: "Removing a policy"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Viva > Settings > Manage feature access > policy > Delete policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Remove-VivaModuleFeaturePolicy -ModuleId <module ID> -FeatureId <feature ID> -PolicyId <policy ID>"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Get the policy ID with Get-VivaModuleFeaturePolicy."
  - governs: "Whether the Agent Dashboard (an example of a feature-specific VFAM path) is available"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Microsoft Viva > Viva Insights > Set up and management > Access Management > Turn Advanced Insights on or off > Feature access management > Agent Dashboard > Add policy"
      docs: "https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Agent Dashboard is a public preview. The AI admin sets it at tenant, group or user level; the Viva Insights web app control must also be on."
confidence: "high"
dependents: 12
changes:
  - date: "2026-11-21"
    note: "First concept page on Viva Feature Access Management: policy types, precedence, limits, cost and the admin centre and PowerShell controls."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 76 statements contradicted, 2 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-21"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 73
  unconfirmed: 2
  contradicted: 1
  attempts: 1
  hash: "d6737377823057020c5b99e2c2bc2140"
---

## What it is

Viva Feature Access Management (VFAM) is the policy system that switches individual Microsoft 365 and Viva features, or types of data processing, on or off for a tenant, for groups or for named users. Microsoft describes policies as the way to "enable or disable specific features or types of data processing for users and groups in your tenant".

**How it works**

- A policy names a module (`ModuleId`, such as `VivaInsights` or `VivaPulse`), a feature in it (`FeatureId`), an enabled or disabled setting, and who it applies to: everyone, groups or users.
- Microsoft lists four policy kinds, subject to feature support: enable for everyone in scope, disable for everyone in scope, enable with a user opt-out, and enable with everyone opted out by default but able to opt in (soft disable).
- The Microsoft 365 admin center and Exchange Online PowerShell manage the same policies. Copilot policies for Viva apps can also be managed in Copilot settings in the admin center, and stay in sync.
- Microsoft's feature table gives each feature's module, the admin role that manages it and whether users can opt out. Some features accept only tenant-wide policies.
- Microsoft says the settings also apply to Agent 365 Business Analytics (Frontier preview) where applicable. See [Frontier program](/concepts/frontier-program/).

**Which policy wins**

A user has one effective policy for each feature. A policy assigned to a user or group, including through a nested group, takes priority over the tenant-wide policy. With no such policy, the tenant-wide setting applies, which can be the feature's default. Where several policies at the same level apply, the most restrictive enablement setting wins.

## Why it matters

VFAM is where an administrator decides who reaches Viva features that report on people's activity, such as the Viva Insights web app and the Agent Dashboard (see [Agent Dashboard](/features/microsoft-viva-copilot-analytics-agent-dashboard/) and [Copilot Dashboard export](/features/m365-copilot-export-copilot-metrics-in-the-copilot-dashboard/)). A feature can be switched off for everyone, or left off tenant-wide and allowed for named groups, because custom policies take precedence over the org-wide setting.

Defaults belong to each feature, not to VFAM. Microsoft's feature table lists opt-out support, the managing role and the module, but not a default state, so read the feature's own page. The Viva Insights web app and the Agent Dashboard are documented as on by default, so a tenant that creates no policy for them keeps them on.

## Cost and licensing

Policy creation requires a supported version of Microsoft 365 or a Viva Suite licence; Microsoft links its Viva pricing page from the requirements. The VFAM pages publish no separate price or meter for creating or holding policies at the time of writing (November 2026). A policy does not add access to a feature that is not otherwise available: Microsoft's example is an EDU tenant. Any licence or charge for a controlled feature is on that feature's page.

## Risks and limits

- **A narrower policy can undo a tenant-wide one.** A user or group policy outranks the tenant policy, so a custom policy can allow a feature that is off for the whole organisation. Review group policies when you audit a tenant-wide switch.
- **Updates overwrite the audience.** Values for `-UserIds`, `-GroupIds` or `-Everyone` overwrite existing users or groups, so an update that omits current members removes them from the policy.
- **Small limits.** Each feature takes up to 10 policies for users and groups, each covering up to 20 users or groups, plus one tenant-wide policy. Use groups for large audiences. Policy names must be unique.
- **Changes are not immediate.** Access changes take effect within 24 hours unless a feature says otherwise (up to 48 hours for Copilot in Viva Engage), and group membership changes can take 24 hours.
- **Opt-out choices reset.** Fully enabling or disabling a feature resets users' opt in/out preference, and quick successive changes under 24 hours apart might not reset it.
- **Deleted identities lose policies.** Deleting a user or group in Microsoft Entra ID removes it from stored policies; if it is restored during the soft-deleted period, reassign the policy.
- **Scope depends on the feature.** A user or group policy on a tenant-only feature, such as Viva Insights web app auto-enablement, has no effect.
- **One switch can cover an app.** Turning off the Viva Insights web app disables the whole app, including the Copilot Dashboard. Earlier Copilot Dashboard policies now apply to the entire app.
- **Cloud coverage.** Microsoft says these access controls are not available in GCC High or DoD; for GCC, check each app's documentation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Viva feature is on or off (the policy's access setting)</strong><br><small>Tenant</small><br><small class="controls__note">Role: Global Administrator or the feature-level role. -Everyone makes the one tenant-wide policy per feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId &lt;module ID&gt; -FeatureId &lt;feature ID&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which people and groups a policy applies to</strong><br><small>Group</small><br><small class="controls__note">Up to 20 users or groups per policy; do not combine with -Everyone.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Apply access settings to › Specific people and groups <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId &lt;module ID&gt; -FeatureId &lt;feature ID&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -GroupIds &lt;group&gt; -UserIds &lt;UPN&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can opt out of a feature, or start opted out (soft disable)</strong><br><small>User</small><br><small class="controls__note">Only features that support user controls. Soft disable adds -IsUserOptedInByDefault $false, which needs -IsUserControlEnabled $true.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › Create a policy › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId &lt;module ID&gt; -FeatureId &lt;feature ID&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $true -IsUserControlEnabled $true</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Changing an existing policy's setting or audience</strong><br><small>Tenant</small><br><small class="controls__note">Values for -UserIds, -GroupIds or -Everyone overwrite existing members.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › More actions › Edit policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-VivaModuleFeaturePolicy -ModuleId &lt;module ID&gt; -FeatureId &lt;feature ID&gt; -PolicyId &lt;policy ID&gt; -GroupIds &lt;group&gt;</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removing a policy</strong><br><small>Tenant</small><br><small class="controls__note">Get the policy ID with Get-VivaModuleFeaturePolicy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Viva › Settings › Manage feature access › policy › Delete policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-VivaModuleFeaturePolicy -ModuleId &lt;module ID&gt; -FeatureId &lt;feature ID&gt; -PolicyId &lt;policy ID&gt;</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Agent Dashboard (an example of a feature-specific VFAM path) is available</strong><br><small>Tenant</small><br><small class="controls__note">Agent Dashboard is a public preview. The AI admin sets it at tenant, group or user level; the Viva Insights web app control must also be on.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Microsoft Viva › Viva Insights › Set up and management › Access Management › Turn Advanced Insights on or off › Feature access management › Agent Dashboard › Add policy <a href="https://learn.microsoft.com/viva/insights/advanced/admin/manage-settings-copilot-dashboard" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId VivaInsights -FeatureId AgentDashboard -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Running the cmdlets needs the Global Administrators role or the role assigned at feature level. The feature table names it per feature: for example Global admin or AI admin for the Agent Dashboard. Microsoft recommends least privilege rather than Global Administrator.

**Other surfaces.** Copilot settings in the Microsoft 365 admin center manage Copilot policies for Viva apps and stay in sync with VFAM. The Viva Insights web app is also a VFAM feature (`FeatureId` "Viva Insights web app"). Read-only cmdlets show state: `Get-VivaModuleFeature` lists feature IDs, `Get-VivaModuleFeaturePolicy` returns policy IDs and `Get-VivaModuleFeatureEnablement` returns a user's or group's enablement status.

**Monitoring.** Microsoft points to VFAM change logs in Microsoft Purview for policy creation, updates and deletions; see [Microsoft Purview Audit](/concepts/auditing/).

## What to check

- Run `Get-VivaModuleFeature` for each module you use to see which features accept policies and their IDs.
- List existing policies with `Get-VivaModuleFeaturePolicy` and check that no user or group policy re-enables a feature you switched off tenant-wide.
- Check one user's effective state with `Get-VivaModuleFeatureEnablement` before and after a change.
- Confirm the Exchange Online PowerShell version: 3.2.0 or later, 3.5.1 for non-mail-enabled groups, 3.8.0 for soft disable.
- Review the VFAM change logs in Microsoft Purview after each policy edit.
- Confirm the people who manage a feature hold the role the feature table names for it.
- Wait 24 hours before changing a feature's enablement again.

## Open questions

- Does Microsoft document a Microsoft Graph or REST API for VFAM policies? A Learn search at the time of writing (November 2026) finds only the Exchange Online PowerShell cmdlets and the admin center.
- What default state applies to each feature? The feature table does not list it.
- Which operation names do VFAM policy changes record in the Microsoft Purview audit log? The VFAM pages point to the change logs without naming events.
- Can the admin center set soft disable? The pages document it through PowerShell (`IsUserOptedInByDefault`), and the admin center page does not mention it.

<!-- verifier-findings (2026-11-21, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[2].ui / admin-path: The admin-center Access setting control can let users opt out or start opted out through soft disable. | Found: Searched: Viva feature access management admin center soft disable IsUserOptedInByDefault. Opened /viva/control-access-admin-center, /viva/feature-access-management and /powershell/module/exchange/add-vivamodulefeaturepolicy; UI documents opt-out, not soft disable. | Fix: Change this row's governs to 'Whether users can opt out of a feature'. Use UI path 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting'. Keep the existing PowerShell call and soft-disable note: that note documents the additional PowerShell parameter, not an admin-center option.
- [unsupported, major] Cost and licensing: final sentence / behaviour: Any licence or charge for a controlled feature is on that feature's page. | Found: Searched: Viva feature access management policy creation pricing meter charge. Read the VFAM requirements and returned Pulse licensing excerpts; no source guarantees that every controlled feature's own page contains all licensing and charging information. | Fix: Replace the sentence with advice: 'Check the controlled feature's documentation and the product's licensing and pricing pages before enabling it.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Viva > Settings > Manage feature access > Create a policy > Access setting reaches the feature on/off control. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. Select the Settings tab and select Manage feature access. Select Create a policy. | Fix: Use 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting'. The source then says to select Access setting and choose On or Off. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].ui / admin-path: Viva > Settings > Manage feature access > Create a policy > Apply access settings to > Specific people and groups selects the policy audience. | Found: Select Everyone or Specific people and groups under Apply access settings to. If you didn't select Everyone, add the specific people and groups you want to apply the policy to. | Fix: Use 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Apply access settings to > Specific people and groups'. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[3].ui / admin-path: Viva > Settings > Manage feature access > More actions > Edit policy reaches policy editing. | Found: From the Microsoft 365 admin center, select Viva from the settings menu. Select the Settings tab and select Manage feature access. Select the vertical ellipses (More actions) and choose Edit policy. | Fix: Use 'Settings > Viva > Settings > Manage feature access > More actions > Edit policy'. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[4].ui / admin-path: Viva > Settings > Manage feature access > policy > Delete policy reaches policy deletion. | Found: Select the Settings tab and select Manage feature access. Select the policy you'd like to delete. Select Delete policy. | Fix: Use 'Settings > Viva > Settings > Manage feature access > policy > Delete policy'. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] What it is: Which policy wins / behaviour: Nested group members receive policies assigned to the parent group. | Found: When users are in nested groups and you apply access policies to the parent group, the users in the nested groups receive the policies. The nested groups and the users in those nested groups must be created in or synchronized to Microsoft Entra ID. | Fix: Add to the nested-group statement: 'The nested groups and their users must be created in or synchronized to Microsoft Entra ID.' | Source: https://learn.microsoft.com/viva/feature-access-management
- [supported, minor] What to check: Exchange Online PowerShell version / command: Soft disable requires Exchange PowerShell version 3.8.0 or later. | Found: If you need to setup policies with the user opted-out by default (soft-disable), you must have access to Exchange PowerShell version 3.8.0 or later. | Fix: Keep the 3.8.0 requirement and add: 'The Add-VivaModuleFeaturePolicy reference gives 3.8.0-Preview2 or later for IsUserOptedInByDefault.' The reference at https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy states that more specific version. | Source: https://learn.microsoft.com/viva/manage-access-policies
- [contradicted, minor] What to check; Governance controls / consistency: All controls the checklist tells the reader to review appear in the controls table. | Found: What to check: 'Check one user's effective state with Get-VivaModuleFeatureEnablement before and after a change.' Also: 'Review the VFAM change logs in Microsoft Purview after each policy edit.' Neither monitoring control has a table row. | Fix: The checklist's effective-state check and Purview change-log review have no corresponding controls-table rows. Remove those two checklist bullets; retain their documented descriptions in the Governance controls notes.
-->
