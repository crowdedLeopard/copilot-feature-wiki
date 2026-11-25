---
title: "Microsoft 365 admin center: manage Viva feature access policies on a page as well as in PowerShell"
slug: "m365-admin-center-new-feature-access-management-ui-in-admin-center"
roadmapId: 470140
topic: "modern-work"
products: ["Microsoft Viva"]
summary: "Viva feature access policies, which turn specific Viva features on or off for the tenant, groups or users, can be created and edited in the Microsoft 365 admin center as well as PowerShell. Existing policies persist; no action is required."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Web"]
targetDate: "January CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Learn lists \"a supported version of Microsoft 365 or a Viva Suite license\" as the licensing requirement for creating access policies. The Viva features the policies govern carry their own licensing."
audiences: ["m365-admin","service-owner"]
tags: ["viva-feature-access-management","m365-admin-center","admin-controls","powershell","viva-insights","viva-engage","viva-pulse","viva-glint","people-skills","gcc"]
sources:
  - title: "Control who can access features in Microsoft Viva using the Microsoft 365 admin center"
    url: "https://learn.microsoft.com/viva/control-access-admin-center"
    kind: "learn"
  - title: "Control access to features in Microsoft 365"
    url: "https://learn.microsoft.com/viva/feature-access-management"
    kind: "learn"
  - title: "Control access to features in Microsoft 365 using PowerShell"
    url: "https://learn.microsoft.com/viva/manage-access-policies"
    kind: "learn"
  - title: "Add-VivaModuleFeaturePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 470140"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=470140"
    kind: "roadmap"
videos: []
related: ["viva-feature-access-management","m365-admin-center-organizational-data-granular-access-policy-controls-for-custom-attribute"]
controls:
  - governs: "Whether a Viva feature is on or off for the people a policy covers"
    scope: "tenant"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > feature > Access setting"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId <ModuleId> -FeatureId <FeatureId> -Name <policy name> -IsFeatureEnabled $false -Everyone"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Role per feature (Who can manage access column). -IsUserControlEnabled $true lets users opt out where the feature supports it. One tenant-wide policy per feature."
  - governs: "Which users and groups a new policy applies to"
    scope: "group"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > Create a policy > feature > Apply access settings to"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Add-VivaModuleFeaturePolicy -ModuleId <ModuleId> -FeatureId <FeatureId> -Name <policy name> -IsFeatureEnabled $false -GroupIds <group email addresses or object IDs> -UserIds <user UPNs>"
      docs: "https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy"
    note: "Up to 10 policies per feature for users and groups; at most 20 users or groups per policy."
  - governs: "Changes to an existing policy's setting or the people it applies to"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > More actions > Edit policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Update-VivaModuleFeaturePolicy -ModuleId <ModuleId> -FeatureId <FeatureId> -PolicyId <PolicyId> -GroupIds <groups>"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "In PowerShell, -UserIds, -GroupIds or -Everyone values overwrite the users and groups already on the policy."
  - governs: "Removal of an access policy"
    scope: "other"
    ui:
      surface: "Microsoft 365 admin center"
      path: "Settings > Viva > Settings > Manage feature access > policy > Delete policy"
      docs: "https://learn.microsoft.com/viva/control-access-admin-center"
    api:
      kind: "powershell"
      call: "Remove-VivaModuleFeaturePolicy -ModuleId <ModuleId> -FeatureId <FeatureId> -PolicyId <PolicyId>"
      docs: "https://learn.microsoft.com/viva/manage-access-policies"
    note: "Get the policy ID with Get-VivaModuleFeaturePolicy first."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-25"
roadmapModified: "2025-01-08T00:15:04"
changes:
  - date: "2026-11-25"
    note: "New briefing: the Manage feature access page in the Microsoft 365 admin center, its paths and the matching PowerShell cmdlets."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 69 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-25"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 62
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "9f13bb42471ddd0a64f7acee841b7522"
---

## What's changing

Viva feature access management (the policies that turn individual features in Viva apps on or off for the whole tenant, for groups or for named users) gets a page in the Microsoft 365 admin center. The roadmap item states that these policies could previously be managed only with PowerShell cmdlets, and that after this rollout admins can use either the admin centre or PowerShell. Existing policies persist and can be managed in both places.

Microsoft Learn already documents the page: from the Microsoft 365 admin center, select **Viva** from the settings menu, then the **Settings** tab and **Manage feature access**. There an admin can create a policy, pick the app and feature, set the **Access setting** to **On** or **Off** (some features also let users opt out), and apply it to **Everyone** or **Specific people and groups**. Policies can also be viewed, edited and deleted there. Learn describes the page and the Exchange Online PowerShell cmdlets (`Add-VivaModuleFeaturePolicy` and its companions) as two ways to create and manage the same access policies.

The roadmap record lists the item as In development, with a target of January CY2025 and General Availability as the release phase. That target has passed, and the Learn page documents the admin centre steps as available, so the record and Learn disagree on status.

Two Learn pages also disagree about People Skills: the admin centre page says People Skills policies "can only be created via PowerShell at this time", while the PowerShell page says People Skills policies can be created and managed in the Microsoft 365 admin center or by using PowerShell.

## Why it matters

This takes a control that needed Exchange Online PowerShell (version 3.2.0 or later) and puts it in the admin centre, so more admins can see and change which users get Viva features such as Reflection, Copilot in Viva Insights or AI Summarization in Viva Engage. That is convenient, and it also means a policy can now be changed by someone who never scripted one. Who may manage each feature's policies is set per feature in the **Who can manage access** column of Learn's feature table.

If nobody acts, users' access does not change: the roadmap item states that existing policies persist, and Learn says that where no custom policy applies to a user, the organisation-wide setting applies. Expect the page to be most useful for auditing what policies already exist, since the roadmap item states that existing policies, including those set in scripts, can be managed in both places.

## Risk assessment

**Data exposure**
- No change: the page manages existing access policies and reads no new data. A policy that turns a feature on (for example a Copilot feature in Viva Insights) can widen what users see, exactly as the same policy set in PowerShell would.

**Security & identity**
- Policies are created by the role listed for each feature in the **Who can manage access** column (for example Insights admin for Reflection, Viva Pulse admin for Pulse features, Global admin for several Viva Insights features). The cmdlet reference says running the cmdlets needs the Global Administrators role or the roles assigned at the feature level. Review who holds those roles before the page puts the setting one click away.

**Autonomy & actions**
- No change: the page acts only when an admin creates, edits or deletes a policy.

**Change & support**
- Custom policies for users or groups take precedence over the org-wide setting, so a group policy can still allow a feature that the organisation-wide policy turns off. Admins used to reading only the tenant-wide policy may misjudge who has access.
- Changes take effect within 24 hours, and up to 48 hours for Copilot in Viva Engage. Changing the Access setting to On or Off on a policy that let users opt out resets users' opt-out preferences.
- In PowerShell, the user and group values in an update overwrite the existing ones. Admins moving between the page and scripts should check the policy after each change.

## Cost and licensing

Learn's PowerShell page lists "a supported version of Microsoft 365 or a Viva Suite license" among the requirements for creating an access policy, and the feature access management page repeats it for policy creation. Those requirements name no separate price or meter for managing policies on the admin centre page.

The indirect cost is admin time: inventorying existing policies, agreeing who changes them in which tool, and telling users when a feature changes for them. The Viva features that a policy turns on are licensed separately, by their own pages.

## Scope

- **Who configures it:** the role listed per feature in the **Who can manage access** column of the feature table (Global admin, Insights admin, Viva Insights admin, AI admin, Engage admin, Goals admin, Viva Pulse admin or Knowledge admin, depending on the feature).
- **Apps covered:** Viva Engage, Viva Glint, Viva Goals, Viva Insights, Viva Pulse and People Skills features, as listed in the feature table. Learn says the settings also apply to Agent 365 Business Analytics (Frontier preview) where applicable.
- **Limits:** up to 10 policies per feature for users and groups, each assigned to at most 20 users or groups, plus one tenant-wide policy per feature. Policy names must be unique.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC. Learn says the access controls are not available in GCC-High or DoD, and for GCC refers admins to each app's documentation.
- **Platforms:** web, per the roadmap record.
- **Prerequisites:** user accounts and groups created in or synchronised to Microsoft Entra ID; Microsoft 365 groups, Entra security groups or distribution groups.

## Governance guidance

### Before rollout
- List the existing policies for each Viva feature with `Get-VivaModuleFeaturePolicy` so the page's contents can be checked against what scripts set.
- Check who holds the roles in the **Who can manage access** column for the features your organisation governs, and remove standing Global Administrator access where a feature-level role suffices.
- Agree whether policies are changed on the page or in scripts, since PowerShell updates overwrite the users and groups on a policy.

### At rollout
- Open Settings > Viva > Settings > Manage feature access in the Microsoft 365 admin center and confirm the policies you listed appear there.
- Confirm that any People Skills policies appear on the page, given that two Learn pages disagree on whether the admin centre supports them.

### After rollout
- Review the Viva Feature Access Management (VFAM) change logs in Microsoft Purview for policy creation, updates and deletions.
- Wait 24 hours (48 for Copilot in Viva Engage) before judging whether a change took effect, and avoid a second change to the same feature inside that window so users' opt-out preferences reset as expected.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Viva feature is on or off for the people a policy covers</strong><br><small>Tenant</small><br><small class="controls__note">Role per feature (Who can manage access column). -IsUserControlEnabled $true lets users opt out where the feature supports it. One tenant-wide policy per feature.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › feature › Access setting <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId &lt;ModuleId&gt; -FeatureId &lt;FeatureId&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -Everyone</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and groups a new policy applies to</strong><br><small>Group</small><br><small class="controls__note">Up to 10 policies per feature for users and groups; at most 20 users or groups per policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › Create a policy › feature › Apply access settings to <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-VivaModuleFeaturePolicy -ModuleId &lt;ModuleId&gt; -FeatureId &lt;FeatureId&gt; -Name &lt;policy name&gt; -IsFeatureEnabled $false -GroupIds &lt;group email addresses or object IDs&gt; -UserIds &lt;user UPNs&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Changes to an existing policy's setting or the people it applies to</strong><br><small class="controls__note">In PowerShell, -UserIds, -GroupIds or -Everyone values overwrite the users and groups already on the policy.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › More actions › Edit policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-VivaModuleFeaturePolicy -ModuleId &lt;ModuleId&gt; -FeatureId &lt;FeatureId&gt; -PolicyId &lt;PolicyId&gt; -GroupIds &lt;groups&gt;</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Removal of an access policy</strong><br><small class="controls__note">Get the policy ID with Get-VivaModuleFeaturePolicy first.</small></td><td data-label="Admin UI"><strong>Microsoft 365 admin center</strong><br>Settings › Viva › Settings › Manage feature access › policy › Delete policy <a href="https://learn.microsoft.com/viva/control-access-admin-center" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Remove-VivaModuleFeaturePolicy -ModuleId &lt;ModuleId&gt; -FeatureId &lt;FeatureId&gt; -PolicyId &lt;PolicyId&gt;</code> <a href="https://learn.microsoft.com/viva/manage-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap item states that existing policies can be managed both on the page and in PowerShell. A user has one effective policy per feature: a user or group policy outranks the tenant policy, which outranks the feature's default, and within a level the most restrictive policy wins. Some features accept only tenant-wide policies, and only some allow users to opt out; `Get-VivaModuleFeature` lists each feature's supported scopes. Learn also says Copilot policies can be managed through Copilot settings in the Microsoft 365 admin center and stay in sync with this page. History of policy creation, updates and deletions is in the VFAM change logs in Microsoft Purview, as described on the [feature access management page](https://learn.microsoft.com/viva/feature-access-management).

## Open questions

- Can People Skills policies be created on the Manage feature access page, or only in PowerShell? Two Learn pages say different things; watch the [admin centre page](https://learn.microsoft.com/viva/control-access-admin-center).
- Does the page offer the soft-disable policy (users opted out by default, with the choice to opt in) that PowerShell sets with `-IsUserOptedInByDefault $false`?
- When will the roadmap item move from In development to Launched, given that Learn already documents the page?
- Which Viva features can GCC tenants manage on the page? The roadmap lists GCC, while Learn refers GCC admins to each app's documentation.

<!-- rationale
risk: Low. The page is a second way to manage the same access policies; existing policies persist and nobody's access changes until an admin creates, edits or deletes a policy.
cost: Low. The only cost the sources show is admin time; Learn names a supported version of Microsoft 365 or a Viva Suite licence as the requirement for access policies.
impact: Low. Only administrators who manage Viva features see the new page; users notice only when an admin changes a policy that applies to them.
-->

<!-- verifier-findings (2026-11-25, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] front matter: defaultState; summary; Why it matters; Risk assessment: Autonomy; rationales / default: The new control is admin-opt-in and nobody's access changes until an administrator creates, edits or deletes a policy. | Found: Searched: 'Viva feature access management admin center new UI default existing policies no action required'; read the roadmap and control-access-admin-center, feature-access-management and manage-access-policies. They establish policy persistence and precedence, not an explicit arrival default. | Fix: Set defaultState to unknown. Replace the unconditional no-change statements with 'Existing policies persist, according to the roadmap; Microsoft has not explicitly stated the new interface's default state on arrival.' Base the risk rationale on existing policies continuing, not a guaranteed absence of changes.
- [contradicted, blocker] Why it matters; controls[1].api / command: Exchange Online PowerShell 3.2.0 or later is presented as the requirement for the management operations, including the offered security-group object IDs. | Found: If you need to use non-mail-enabled groups you must have access to Exchange PowerShell version 3.5.1 or later. If you need to setup policies with the user opted-out by default (soft-disable), you must have access to Exchange PowerShell version 3.8.0 or later. | Fix: Qualify the 3.2.0 requirement with 'Non-mail-enabled groups require version 3.5.1 or later; soft-disable policies require version 3.8.0 or later.' Add 'Security group object IDs require module v3.5.1-Preview2 or later; earlier versions accept only email addresses' to controls[1].note, as stated at https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy. | Source: https://learn.microsoft.com/viva/manage-access-policies
- [unsupported, major] Risk assessment: Data exposure / behaviour: The new page reads no new data. | Found: Searched: 'Viva feature access management admin center reads data automatic policy changes'; read control-access-admin-center, feature-access-management and manage-access-policies. They describe policy management and stored user/group information, not a no-new-data guarantee. | Fix: Remove 'and reads no new data'. Retain the narrower statement that the page manages existing access policies.
- [contradicted, blocker] Risk assessment: Change & support / behaviour: Changing an opt-out policy's Access setting to On or Off resets user opt-out preferences. | Found: However, it is important to know that if there are multiple changes to access settings within a 24-hour period, the user's preference may not reset to the default state. | Fix: Append 'Multiple changes to access settings within 24 hours may prevent the preference from resetting.' The later advice to avoid rapid changes does not qualify the unconditional reset statement itself. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [contradicted, blocker] controls[0].note; Open questions / command: IsUserControlEnabled $true permits supported user opt-out under the briefing's unqualified PowerShell 3.2.0 requirement. | Found: This parameter is available in module version 3.3.0-Preview1 or later. | Fix: Qualify controls[0].note with 'IsUserControlEnabled requires module v3.3.0-Preview1 or later.' | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
- [contradicted, blocker] Open questions: soft-disable policy / command: IsUserOptedInByDefault $false is presented as the parameter setting soft disable without its required companion parameters or module version. | Found: This parameter is available in module version 3.8.0-Preview2 or later. This parameter can be set only when the IsUserControlEnabled parameter is set to $true. | Fix: Replace the question's PowerShell premise with 'PowerShell sets soft disable using -IsFeatureEnabled $true -IsUserControlEnabled $true -IsUserOptedInByDefault $false; IsUserOptedInByDefault requires module v3.8.0-Preview2 or later.' The cited cmdlet's Example 5 gives this combination. | Source: https://learn.microsoft.com/powershell/module/exchange/add-vivamodulefeaturepolicy
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] front matter: licensing.notes; Cost and licensing / licensing: Viva features governed by policies have their own licensing requirements. | Found: The following table lists the major Microsoft Viva features available across plans. Certain caveats apply. Available only as a standalone SKU or as part of the Viva Suite. | Fix: Cite https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-service-description for the feature-licensing statement. Replace 'licensed separately' with 'subject to their own licensing requirements' to avoid implying every feature needs a separate purchase. | Source: https://learn.microsoft.com/office365/servicedescriptions/microsoft-viva-service-description
- [supported, minor] controls[0].ui / admin-path: Settings > Viva > Settings > Manage feature access > Create a policy > feature > Access setting reaches the feature enablement control. | Found: Select Create a policy. Name the policy and select the app and feature for which you'd like to set the policy. Select the Access setting option and choose On or Off to enable or disable the feature. | Fix: Include the omitted app selection: 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Access setting'. Apply the same correction to the rendered table. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[1].ui / admin-path: Settings > Viva > Settings > Manage feature access > Create a policy > feature > Apply access settings to reaches policy targeting. | Found: Name the policy and select the app and feature for which you'd like to set the policy. Select Everyone or Specific people and groups under Apply access settings to. | Fix: Include the omitted app selection: 'Settings > Viva > Settings > Manage feature access > Create a policy > app > feature > Apply access settings to'. Apply the same correction to the rendered table. | Source: https://learn.microsoft.com/viva/control-access-admin-center
- [supported, minor] controls[3].note; Governance guidance: Before rollout / command: Get-VivaModuleFeaturePolicy lists a feature's access policies and provides their IDs. | Found: Use the Get-VivaModuleFeaturePolicy cmdlet to view the access policies for a specified feature in a Viva module in Viva. This cmdlet provides details about the policies, including the policy's identifier, name, and creation date. | Fix: Cite https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeaturepolicy for the policy-inventory statement. | Source: https://learn.microsoft.com/powershell/module/exchange/get-vivamodulefeaturepolicy
- [contradicted, minor] Governance guidance; Governance controls / consistency: The governance checklist names controls for policy inventory, role review and VFAM change-log review that have no corresponding controls-table rows. | Found: List the existing policies ... with Get-VivaModuleFeaturePolicy; Check who holds the roles ...; Review the Viva Feature Access Management (VFAM) change logs in Microsoft Purview. The table contains creation, targeting, editing and removal rows only. | Fix: Remove the policy-inventory, role-review and VFAM-log-review steps from the governance checklist, or keep their factual background in the existing prose. This correction does not require adding control rows.
-->
