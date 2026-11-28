---
kind: "concept"
title: "Group Policy: which settings reach Windows users and computers in Active Directory, and who sets them"
slug: "group-policy"
summary: "Group Policy is the Windows feature that applies registry-based settings, including the Edge, Office and OneDrive Administrative Templates, to users and computers by Active Directory site, domain and OU. Precedence and security filtering decide which value applies."
created: "2026-11-28"
updated: "2026-11-28"
version: 2
tags: ["group-policy","microsoft-edge","microsoft-365-apps","onedrive","intune","cloud-policy","policy","powershell","admin-controls"]
covers: []
sources:
  - title: "Group Policy overview for Windows Server"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview"
    kind: "learn"
  - title: "Group Policy processing for Windows"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing"
    kind: "learn"
  - title: "Group Policy scope"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-scope"
    kind: "learn"
  - title: "Group Policy Management Console"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console"
    kind: "learn"
  - title: "Create and Manage Central Store"
    url: "https://learn.microsoft.com/troubleshoot/windows-client/group-policy/create-and-manage-central-store"
    kind: "learn"
  - title: "Can't apply user Group Policy settings if computer objects don't have GPO Read permissions"
    url: "https://learn.microsoft.com/troubleshoot/windows-server/group-policy/cannot-apply-user-gpo-when-computer-objects-dont-have-read-permissions"
    kind: "learn"
  - title: "Configure Microsoft Edge for Windows with policy settings"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
  - title: "EdgeEntraCopilotPageContext"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext"
    kind: "learn"
  - title: "TabServicesEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled"
    kind: "learn"
  - title: "IT Admins - Use OneDrive policies to control sync settings"
    url: "https://learn.microsoft.com/sharepoint/use-group-policy"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Import custom ADMX and ADML administrative templates into Microsoft Intune (public preview)"
    url: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/import-custom-admx-templates"
    kind: "learn"
  - title: "Policy CSP - ADMX_GroupPolicy"
    url: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy"
    kind: "learn"
  - title: "Set-GPRegistryValue"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gpregistryvalue?view=windowsserver2025-ps"
    kind: "learn"
  - title: "New-GPLink"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/new-gplink?view=windowsserver2025-ps"
    kind: "learn"
  - title: "Set-GPLink"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gplink?view=windowsserver2025-ps"
    kind: "learn"
  - title: "Set-GPPermission"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gppermission?view=windowsserver2025-ps"
    kind: "learn"
  - title: "Set-GPInheritance"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gpinheritance?view=windowsserver2025-ps"
    kind: "learn"
  - title: "Get-GPResultantSetOfPolicy"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/get-gpresultantsetofpolicy?view=windowsserver2025-ps"
    kind: "learn"
  - title: "Get-GPOReport"
    url: "https://learn.microsoft.com/powershell/module/grouppolicy/get-gporeport?view=windowsserver2025-ps"
    kind: "learn"
  - title: "gpresult"
    url: "https://learn.microsoft.com/windows-server/administration/windows-commands/gpresult"
    kind: "learn"
  - title: "Create groupPolicyUploadedDefinitionFile"
    url: "https://learn.microsoft.com/graph/api/intune-grouppolicy-grouppolicyuploadeddefinitionfile-create?view=graph-rest-beta"
    kind: "learn"
related: ["cloud-policy","endpoint-dlp","microsoft-edge-ground-m365-copilot-chat-in-edge-for-business","microsoft-edge-v-155-tab-organization-enhancements","onedrive-admins-can-configure-a-group-policy-to-block-specific-folders-from-onedrive-sync","excel-excel-canvas","microsoft-edge-v-154-sign-in-to-edge-with-a-google-account"]
controls:
  - governs: "Which sites, domains or OUs a GPO's settings apply to"
    scope: "other"
    ui:
      surface: "Group Policy Management Console"
      path: "Site, domain or OU > Link an Existing GPO"
      docs: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console"
    api:
      kind: "powershell"
      call: "New-GPO -Name <GPO name> | New-GPLink -Target <distinguished name of site, domain or OU> -LinkEnabled Yes"
      docs: "https://learn.microsoft.com/powershell/module/grouppolicy/new-gplink?view=windowsserver2025-ps"
    note: "By default only domain administrators and enterprise administrators can link GPOs to domains and OUs."
  - governs: "Which Administrative Templates setting a GPO configures, for example a Microsoft Edge policy"
    scope: "other"
    ui:
      surface: "Group Policy Management Editor"
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge > policy"
      docs: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    api:
      kind: "powershell"
      call: "Set-GPRegistryValue -Name <GPO name> -Key <registry key> -ValueName <value name> -Value <value> -Type <type>"
      docs: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gpregistryvalue?view=windowsserver2025-ps"
    note: "The cmdlet writes the registry value a template setting controls. Install the templates in the Central Store, or in the Policy Definition template folder on individual computers."
  - governs: "Which users, groups or computers in a linked container apply a GPO (security filtering)"
    scope: "group"
    ui:
      surface: "Group Policy Management Console"
      path: "Group Policy Objects > GPO > Scope > Security Filtering"
      docs: "https://learn.microsoft.com/troubleshoot/windows-server/group-policy/cannot-apply-user-gpo-when-computer-objects-dont-have-read-permissions"
    api:
      kind: "powershell"
      call: "Set-GPPermission -Name <GPO name> -PermissionLevel GpoApply -TargetName <group name> -TargetType Group"
      docs: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gppermission?view=windowsserver2025-ps"
    note: "Authenticated Users has Read and Apply group policy by default. Computer accounts still need Read on GPOs that apply to signed-in users."
  - governs: "How often computers refresh Group Policy in the background"
    scope: "other"
    ui:
      surface: "Group Policy Management Editor"
      path: "Computer Configuration > Policies > Administrative Templates > System > Group Policy > Set Group Policy refresh interval for computers"
      docs: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy"
    api:
      kind: "other"
      call: "./Device/Vendor/MSFT/Policy/Config/ADMX_GroupPolicy/GroupPolicyRefreshRate"
      docs: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy"
    note: "Range 0 to 64,800 minutes. The CSP path applies the same setting through MDM."
  - governs: "Which custom or partner ADMX templates Intune can deploy to managed Windows devices"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Import ADMX > Import"
      docs: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/import-custom-admx-templates"
    api:
      kind: "graph"
      call: "POST /beta/deviceManagement/groupPolicyUploadedDefinitionFiles"
      docs: "https://learn.microsoft.com/graph/api/intune-grouppolicy-grouppolicyuploadeddefinitionfile-create?view=graph-rest-beta"
    note: "Public preview; Policy and Profile Manager role. Up to 20 ADMX files of 1 MB or less; en-us ADML only. The request body sets content to the ADMX file contents and groupPolicyUploadedLanguageFiles to its ADML files."
confidence: "high"
dependents: 10
changes:
  - date: "2026-11-28"
    note: "New concept page explaining Group Policy, Administrative Templates, precedence and the controls that decide which settings apply."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 83 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-28"
    note: "Corrected the refresh-interval path, template install locations, Office restart behaviour and replication timings; removed an unsupported release-notes claim and the Cloud Policy checklist item; added Edge and OneDrive policy sources."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 94 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 94
  confirmed: 92
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "5f9a34114012c8eb81e03bcd68351a9b"
---

## What it is

Group Policy is a feature of Windows for central management and configuration of operating systems, applications and user settings. Administrators put settings into a Group Policy Object (GPO), link it to part of Active Directory, and Windows applies those settings to the computers and users there.

### How it works

- **The GPO.** Each GPO has a Group Policy container, stored in the domain partition of Active Directory, and a Group Policy template, stored in the SYSVOL folder on each domain controller. Its settings are split into those that apply to a computer and those that apply to a user. On each device, client-side extensions apply the settings, for example by updating the registry.
- **Links and precedence.** A GPO takes effect where it is linked: a site, a domain or an organisational unit (OU). It cannot be linked directly to a user object. The local GPO is processed first, then GPOs linked to sites, domains and OUs, and settings from GPOs linked to Active Directory containers override local policy. In one container, the link with the lowest link order has precedence. An **Enforced** link takes precedence over **Block Inheritance** set on a lower domain or OU.
- **Security filtering.** By default the Authenticated Users group has the Read and Apply group policy permissions on every GPO in the domain. A linked GPO therefore reaches every user and computer in the container unless an administrator narrows it.
- **Administrative Templates.** Administrative Templates describe registry-based policies: .admx files plus language-specific .adml files. Microsoft publishes separate templates for Windows, for each Office release and for Microsoft Edge. In a domain, administrators put them in a Central Store in SYSVOL, which replicates to all domain controllers. On a device, Edge's settings land under HKLM\SOFTWARE\Policies\Microsoft\Edge, for example.
- **Timing.** Settings apply at computer start-up and user sign-in. Clients and servers then check for changes every 90 minutes, with a random offset of up to 30 minutes. Domain controllers check every five minutes.

| Mechanism | Who it reaches | Explained on |
|---|---|---|
| Group Policy | Users and computers by Active Directory site, domain and OU | This page |
| Cloud Policy service | Microsoft 365 Apps users | [Cloud Policy](/concepts/cloud-policy/) |
| Intune imported ADMX | Intune-managed Windows devices | Controls table below |

## Why it matters

On Windows devices managed through Active Directory, Group Policy is where administrators set many Microsoft 365 product policies. Copilot's use of Edge page content, Edge [tab organisation](/features/microsoft-edge-v-155-tab-organization-enhancements/) and OneDrive [folder exclusions](/features/onedrive-admins-can-configure-a-group-policy-to-block-specific-folders-from-onedrive-sync/) are all published as Administrative Templates policies. When using a Central Store, copy updated templates into it before configuring newly added policies.

Scope is the second decision. Group Policy is inherited and cumulative by default, so a setting linked at the domain reaches every user and computer below it. Another GPO with higher precedence can replace a Copilot privacy setting that one GPO sets correctly. Office settings can also be replaced by Cloud Policy.

## Cost and licensing

Microsoft's Group Policy documentation does not publish a separate licence, price or meter for Group Policy. Microsoft describes it as a feature of Windows, and the Group Policy Management Console (GPMC) is included with Windows Server and the Remote Server Administration Tools. Domain-based Group Policy stores GPOs in Active Directory and SYSVOL, so it depends on domain controllers.

Delivering the same template settings another way brings that service's licensing with it. The Microsoft Graph API for Intune, which includes the ADMX upload call in the controls table, requires an active Intune licence for the tenant. For Cloud Policy licensing, see [Cloud Policy](/concepts/cloud-policy/).

## Risks and limits

- **Out-of-date Central Store.** SYSVOL is not updated automatically with new .admx or .adml files. When using a Central Store, copy updated templates into it before configuring newly added policies. Microsoft supports Windows ADMX download packages only in the Central Store, not as replacements for files in C:\Windows\PolicyDefinitions.
- **Changes are not immediate.** A GPO change must first replicate to the right domain controller (Active Directory replication typically takes less than a minute within a site, while SYSVOL replication occurs every 15 minutes) and then wait for the client's next refresh. Office policy changes generally take effect after the apps restart, but some privacy-control policies apply without restarting Office apps.
- **Narrowing security filtering can break user settings.** Computer accounts need Read on GPOs that apply to signed-in users. Removing Authenticated Users from Security Filtering removes both Read and Apply group policy.
- **Precedence surprises.** Link order, Enforced and Block Inheritance decide which GPO wins. A setting that looks right in one GPO may not be the value that applies.
- **Cloud Policy wins for Microsoft 365 Apps.** Settings from the Cloud Policy service take precedence over Group Policy settings, so a GPO's Office setting is replaced wherever Cloud Policy sets the same policy.
- **Edge recommended policies are not enforced.** Mandatory Edge policies stop users changing a setting. Recommended policies only set a default that users can override.
- **Intune import limits.** Importing custom ADMX files into Intune is in public preview. It accepts up to 20 ADMX files, each 1 MB or smaller, and only en-us ADML files.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which sites, domains or OUs a GPO's settings apply to</strong><br><small class="controls__note">By default only domain administrators and enterprise administrators can link GPOs to domains and OUs.</small></td><td data-label="Admin UI"><strong>Group Policy Management Console</strong><br>Site, domain or OU › Link an Existing GPO <a href="https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-GPO -Name &lt;GPO name&gt; | New-GPLink -Target &lt;distinguished name of site, domain or OU&gt; -LinkEnabled Yes</code> <a href="https://learn.microsoft.com/powershell/module/grouppolicy/new-gplink?view=windowsserver2025-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Administrative Templates setting a GPO configures, for example a Microsoft Edge policy</strong><br><small class="controls__note">The cmdlet writes the registry value a template setting controls. Install the templates in the Central Store, or in the Policy Definition template folder on individual computers.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge › policy <a href="https://learn.microsoft.com/deployedge/configure-microsoft-edge" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-GPRegistryValue -Name &lt;GPO name&gt; -Key &lt;registry key&gt; -ValueName &lt;value name&gt; -Value &lt;value&gt; -Type &lt;type&gt;</code> <a href="https://learn.microsoft.com/powershell/module/grouppolicy/set-gpregistryvalue?view=windowsserver2025-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users, groups or computers in a linked container apply a GPO (security filtering)</strong><br><small>Group</small><br><small class="controls__note">Authenticated Users has Read and Apply group policy by default. Computer accounts still need Read on GPOs that apply to signed-in users.</small></td><td data-label="Admin UI"><strong>Group Policy Management Console</strong><br>Group Policy Objects › GPO › Scope › Security Filtering <a href="https://learn.microsoft.com/troubleshoot/windows-server/group-policy/cannot-apply-user-gpo-when-computer-objects-dont-have-read-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-GPPermission -Name &lt;GPO name&gt; -PermissionLevel GpoApply -TargetName &lt;group name&gt; -TargetType Group</code> <a href="https://learn.microsoft.com/powershell/module/grouppolicy/set-gppermission?view=windowsserver2025-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How often computers refresh Group Policy in the background</strong><br><small class="controls__note">Range 0 to 64,800 minutes. The CSP path applies the same setting through MDM.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Policies › Administrative Templates › System › Group Policy › Set Group Policy refresh interval for computers <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/ADMX_GroupPolicy/GroupPolicyRefreshRate</code> <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which custom or partner ADMX templates Intune can deploy to managed Windows devices</strong><br><small>Tenant</small><br><small class="controls__note">Public preview; Policy and Profile Manager role. Up to 20 ADMX files of 1 MB or less; en-us ADML only. The request body sets content to the ADMX file contents and groupPolicyUploadedLanguageFiles to its ADML files.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Import ADMX › Import <a href="https://learn.microsoft.com/intune/device-configuration/settings-catalog/import-custom-admx-templates" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/groupPolicyUploadedDefinitionFiles</code> <a href="https://learn.microsoft.com/graph/api/intune-grouppolicy-grouppolicyuploadeddefinitionfile-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** By default only domain administrators and enterprise administrators can link GPOs to domains and OUs. Editing a GPO needs the Edit settings, delete and modify security permissions on it. Importing ADMX files into Intune needs the Policy and Profile Manager built-in role.

**Enforced and Block Inheritance.** Enforced is a property of a GPO link, shown in the GPMC by a padlock icon; `Set-GPLink -Enforced Yes` sets it. Block Inheritance is set on a domain or OU with `Set-GPInheritance`. Enforced settings still apply where inheritance is blocked.

**Refreshing and checking.** `gpupdate.exe` refreshes the local computer, `Invoke-GPUpdate` triggers a refresh from PowerShell, and in the GPMC you can right-click an OU and select **Group Policy Update**. `gpresult` and `Get-GPResultantSetOfPolicy` report the Resultant Set of Policy (RSoP), the settings that actually applied; RSoP modelling requires the GPMC. `Get-GPOReport` lists each GPO's links, security filtering, WMI filtering, delegation and settings. On a device, `edge://policy` lists the Edge policies that applied.

## What to check

- Compare the Edge and Office template versions in your Central Store with the releases that add the policies in your briefings, and update the Central Store before configuring those policies.
- Run `Get-GPOReport` across all GPOs. For each Edge, Office or OneDrive policy, find every GPO that sets it, and note its links and link order.
- Review Security Filtering on GPOs that contain user settings, and confirm computer accounts still have Read.
- On a sample device, confirm the intended value applied with `gpresult` or `edge://policy`.
- Review who can link GPOs to your domains and OUs.

## Open questions

- Microsoft does not publish one index of which Administrative Templates release first contains each Copilot-related Edge, Office or OneDrive policy.
- When will importing custom ADMX files into Intune leave public preview, and will the 20-file and en-us-only ADML limits change?
- Which value wins when Intune and a GPO set the same Edge policy on a hybrid-joined device? The pages read for this page do not say.

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What it is: Links and precedence / behaviour: Within one container, the link with the lowest link order has precedence. | Found: The GPO link with the lowest link order in the Group Policy Object Links list has precedence by default. | Fix: Keep the lowest-link-order rule, but append: 'The cited Group Policy scope page's GPLink example instead labels GPO1, third in its link-order list, as highest precedence; this differs from the processing and GPMC pages.' The conflicting example is at https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-scope#gplink-attribute. | Source: https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing
- [supported, minor] Risks and limits: Changes are not immediate / behaviour: SYSVOL replication occurs every 15 minutes, in the paragraph's within-site timing comparison. | Found: Within sites, replication occurs every 15 minutes. If the domain controllers are in different sites, the replication process occurs at set intervals based on site topology and schedule | Fix: Replace 'while SYSVOL replication occurs every 15 minutes' with 'while SYSVOL replication within a site occurs every 15 minutes'. This makes the within-site qualification explicit rather than leaving it attached only to the preceding AD comparison. | Source: https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing
- [supported, minor] Governance controls: Roles / role: Editing a GPO needs Edit settings, delete and modify security permissions on it. | Found: To use the GPMC, you must complete the following prerequisites. Have Edit settings, delete, and modify security permissions on the GPO. | Fix: Remove 'Editing a GPO needs the Edit settings, delete and modify security permissions on it.' The cited GPMC page supports that prerequisite list, but https://learn.microsoft.com/windows/security/application-security/application-control/app-control-for-business/applocker/export-an-applocker-policy-from-a-gpo instead says 'you must have the Edit Setting permission to edit a GPO'; the existing sentence presents the broader list as the minimum. | Source: https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console
- [contradicted, minor] What to check: Run Get-GPOReport / consistency: The checklist names GPO reporting, but no controls-table row covers reporting. | Found: What to check: 'Run Get-GPOReport across all GPOs.' The table contains linking, registry settings, security filtering, background refresh and Intune ADMX import, but no GPO reporting row. | Fix: Remove the 'Run Get-GPOReport across all GPOs. For each Edge, Office or OneDrive policy, find every GPO that sets it, and note its links and link order.' checklist bullet. Keep the verified reporting explanation in Governance controls; do not add a table row.
- [contradicted, minor] What to check: On a sample device / consistency: The checklist names resultant-policy checks, but no controls-table row covers those checks. | Found: What to check: 'On a sample device, confirm the intended value applied with gpresult or edge://policy.' The controls table has no resultant-policy or applied-Edge-policy reporting row. | Fix: Remove the 'On a sample device, confirm the intended value applied with gpresult or edge://policy.' checklist bullet. Keep the verified command and browser-page explanations in Governance controls; do not add a table row.
-->
