---
kind: "concept"
title: "Group Policy: which settings reach Windows users and computers in Active Directory, and who sets them"
slug: "group-policy"
summary: "Group Policy is the Windows feature that applies registry-based settings, including the Edge, Office and OneDrive Administrative Templates, to users and computers by Active Directory site, domain and OU. Precedence and security filtering decide which value applies."
created: "2026-11-28"
updated: "2026-11-28"
version: 1
tags: ["group-policy","microsoft-edge","microsoft-365-apps","onedrive","intune","cloud-policy","policy","powershell","admin-controls"]
covers: []
sources:
  - title: "Group Policy overview"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview"
    kind: "learn"
  - title: "Group Policy processing"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing"
    kind: "learn"
  - title: "Group Policy scope"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-scope"
    kind: "learn"
  - title: "Group Policy Management Console"
    url: "https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console"
    kind: "learn"
  - title: "Create and manage the Central Store for Group Policy Administrative Templates"
    url: "https://learn.microsoft.com/troubleshoot/windows-client/group-policy/create-and-manage-central-store"
    kind: "learn"
  - title: "Can't apply user GPO when computer objects don't have Read permissions"
    url: "https://learn.microsoft.com/troubleshoot/windows-server/group-policy/cannot-apply-user-gpo-when-computer-objects-dont-have-read-permissions"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings on Windows devices"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
  - title: "Overview of Cloud Policy service for Microsoft 365"
    url: "https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy"
    kind: "learn"
  - title: "Configure update settings for Microsoft 365 Apps"
    url: "https://learn.microsoft.com/microsoft-365-apps/updates/configure-update-settings-microsoft-365-apps"
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
  - title: "Evaluate Microsoft Defender Antivirus using Group Policy"
    url: "https://learn.microsoft.com/defender-endpoint/evaluate-mdav-using-gp"
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
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge"
      docs: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    api:
      kind: "powershell"
      call: "Set-GPRegistryValue -Name <GPO name> -Key <registry key> -ValueName <value name> -Value <value> -Type <type>"
      docs: "https://learn.microsoft.com/powershell/module/grouppolicy/set-gpregistryvalue?view=windowsserver2025-ps"
    note: "The cmdlet writes the registry value that a template setting controls. Look up each policy's key and value name on its reference page. The template must be in the Central Store before the setting appears in the editor."
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
      path: "Computer Configuration > Administrative Templates > System > Group Policy > Set Group Policy refresh interval for computers"
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
    note: "Public preview. Requires the Policy and Profile Manager role. Up to 20 ADMX files of 1 MB or less; en-us ADML only."
confidence: "high"
dependents: 9
changes:
  - date: "2026-11-28"
    note: "New concept page explaining Group Policy, Administrative Templates, precedence and the controls that decide which settings apply."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 83 statements contradicted, 2 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 83
  confirmed: 76
  unconfirmed: 2
  contradicted: 5
  attempts: 1
  hash: "4c9f803a5b2952ee3d9816d1821884de"
---

## What it is

Group Policy is a feature of Windows for central management and configuration of operating systems, applications and user settings. Administrators put settings into a Group Policy Object (GPO), link it to part of Active Directory, and Windows applies those settings to the computers and users there.

### How it works

- **The GPO.** Each GPO has a Group Policy container, stored in the domain partition of Active Directory, and a Group Policy template, stored in the SYSVOL folder on each domain controller. Its settings are split into those that apply to a computer and those that apply to a user. On each device, client-side extensions apply the settings, for example by updating the registry.
- **Links and precedence.** A GPO takes effect where it is linked: a site, a domain or an organisational unit (OU). It cannot be linked directly to a user object. The local GPO is processed first, then GPOs linked to sites, domains and OUs, and settings from GPOs linked to Active Directory containers override local policy. In one container, the link with the lowest link order has precedence. An **Enforced** link takes precedence over **Block Inheritance** set on a lower domain or OU.
- **Security filtering.** By default the Authenticated Users group has the Read and Apply group policy permissions on every GPO in the domain. A linked GPO therefore reaches every user and computer in the container unless an administrator narrows it.
- **Administrative Templates.** Most settings named in Microsoft 365 briefings are registry-based policies described by Administrative Templates: .admx files plus language-specific .adml files. Microsoft publishes separate templates for Windows, for each Office release (covering Microsoft 365 Apps) and for Microsoft Edge. In a domain, administrators put them in a Central Store in SYSVOL, which replicates to all domain controllers. On a device, Edge's settings land under HKLM\SOFTWARE\Policies\Microsoft\Edge, for example.
- **Timing.** Settings apply at computer start-up and user sign-in. Clients and servers then check for changes every 90 minutes, with a random offset of up to 30 minutes. Domain controllers check every five minutes.

| Mechanism | Who it reaches | Explained on |
|---|---|---|
| Group Policy | Users and computers by Active Directory site, domain and OU | This page |
| Cloud Policy service | Microsoft 365 Apps users | [Cloud Policy](/concepts/cloud-policy/) |
| Intune imported ADMX | Intune-managed Windows devices | Controls table below |

## Why it matters

On Windows devices managed through Active Directory, Group Policy is where administrators set many Microsoft 365 product policies. Copilot's use of Edge page content, Edge [tab organisation](/features/microsoft-edge-v-155-tab-organization-enhancements/) and OneDrive [folder exclusions](/features/onedrive-admins-can-configure-a-group-policy-to-block-specific-folders-from-onedrive-sync/) are all published as Administrative Templates policies. SYSVOL does not pick up new .admx and .adml files on its own, so a new policy is not available to configure until someone copies the updated template into the Central Store.

Scope is the second decision. Group Policy is inherited and cumulative by default, so a setting linked at the domain reaches every user and computer below it. Another GPO with higher precedence can replace a Copilot privacy setting that one GPO sets correctly. Office settings can also be replaced by Cloud Policy.

## Cost and licensing

Microsoft's Group Policy documentation does not publish a separate licence, price or meter for Group Policy. Microsoft describes it as a feature of Windows, and the Group Policy Management Console (GPMC) is included with Windows Server and the Remote Server Administration Tools. Domain-based Group Policy stores GPOs in Active Directory and SYSVOL, so it depends on domain controllers.

Delivering the same template settings another way brings that service's licensing with it. The Microsoft Graph API for Intune, which includes the ADMX upload call in the controls table, requires an active Intune licence for the tenant. For Cloud Policy licensing, see [Cloud Policy](/concepts/cloud-policy/).

## Risks and limits

- **Out-of-date Central Store.** SYSVOL is not updated automatically with new .admx or .adml files. A policy shipped in a new Edge or Office template stays missing until the files are copied in. Microsoft supports Windows ADMX download packages only in the Central Store, not as replacements for files in C:\Windows\PolicyDefinitions.
- **Changes are not immediate.** A GPO change must first replicate to the right domain controller (every 15 minutes within a site) and then wait for the client's next refresh. Office apps also apply new policy only after they restart.
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
<tr><td data-label="Control"><strong>Which Administrative Templates setting a GPO configures, for example a Microsoft Edge policy</strong><br><small class="controls__note">The cmdlet writes the registry value that a template setting controls. Look up each policy's key and value name on its reference page. The template must be in the Central Store before the setting appears in the editor.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge <a href="https://learn.microsoft.com/deployedge/configure-microsoft-edge" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-GPRegistryValue -Name &lt;GPO name&gt; -Key &lt;registry key&gt; -ValueName &lt;value name&gt; -Value &lt;value&gt; -Type &lt;type&gt;</code> <a href="https://learn.microsoft.com/powershell/module/grouppolicy/set-gpregistryvalue?view=windowsserver2025-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users, groups or computers in a linked container apply a GPO (security filtering)</strong><br><small>Group</small><br><small class="controls__note">Authenticated Users has Read and Apply group policy by default. Computer accounts still need Read on GPOs that apply to signed-in users.</small></td><td data-label="Admin UI"><strong>Group Policy Management Console</strong><br>Group Policy Objects › GPO › Scope › Security Filtering <a href="https://learn.microsoft.com/troubleshoot/windows-server/group-policy/cannot-apply-user-gpo-when-computer-objects-dont-have-read-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-GPPermission -Name &lt;GPO name&gt; -PermissionLevel GpoApply -TargetName &lt;group name&gt; -TargetType Group</code> <a href="https://learn.microsoft.com/powershell/module/grouppolicy/set-gppermission?view=windowsserver2025-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How often computers refresh Group Policy in the background</strong><br><small class="controls__note">Range 0 to 64,800 minutes. The CSP path applies the same setting through MDM.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Administrative Templates › System › Group Policy › Set Group Policy refresh interval for computers <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>./Device/Vendor/MSFT/Policy/Config/ADMX_GroupPolicy/GroupPolicyRefreshRate</code> <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-admx-grouppolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which custom or partner ADMX templates Intune can deploy to managed Windows devices</strong><br><small>Tenant</small><br><small class="controls__note">Public preview. Requires the Policy and Profile Manager role. Up to 20 ADMX files of 1 MB or less; en-us ADML only.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Import ADMX › Import <a href="https://learn.microsoft.com/intune/device-configuration/settings-catalog/import-custom-admx-templates" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/deviceManagement/groupPolicyUploadedDefinitionFiles</code> <a href="https://learn.microsoft.com/graph/api/intune-grouppolicy-grouppolicyuploadeddefinitionfile-create?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** By default only domain administrators and enterprise administrators can link GPOs to domains and OUs. Editing a GPO needs the Edit settings, delete and modify security permissions on it. Importing ADMX files into Intune needs the Policy and Profile Manager built-in role.

**Enforced and Block Inheritance.** Enforced is a property of a GPO link, shown in the GPMC by a padlock icon; `Set-GPLink -Enforced Yes` sets it. Block Inheritance is set on a domain or OU with `Set-GPInheritance`. Enforced settings still apply where inheritance is blocked.

**Refreshing and checking.** `gpupdate.exe` refreshes the local computer, `Invoke-GPUpdate` triggers a refresh from PowerShell, and in the GPMC you can right-click an OU and select **Group Policy Update**. `gpresult` and `Get-GPResultantSetOfPolicy` report the Resultant Set of Policy (RSoP), the settings that actually applied; RSoP modelling requires the GPMC. `Get-GPOReport` lists each GPO's links, security filtering, WMI filtering, delegation and settings. On a device, `edge://policy` lists the Edge policies that applied.

## What to check

- Compare the Edge and Office template versions in your Central Store with the releases that add the policies in your briefings, and update the Central Store before configuring those policies.
- Run `Get-GPOReport` across all GPOs. For each Edge, Office or OneDrive policy, find every GPO that sets it, and note its links and link order.
- Review Security Filtering on GPOs that contain user settings, and confirm computer accounts still have Read.
- Check whether Cloud Policy also sets any Microsoft 365 Apps policy you manage through a GPO.
- On a sample device, confirm the intended value applied with `gpresult` or `edge://policy`.
- Review who can link GPOs to your domains and OUs.

## Open questions

- Microsoft does not publish one index of which Administrative Templates release first contains each Copilot-related Edge, Office or OneDrive policy. Administrators currently have to track this through each product's release notes.
- When will importing custom ADMX files into Intune leave public preview, and will the 20-file and en-us-only ADML limits change?
- Which value wins when Intune and a GPO set the same Edge policy on a hybrid-joined device? The pages read for this page do not say.

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].ui / admin-path: In Group Policy Management Editor, Computer Configuration > Administrative Templates > System > Group Policy > Set Group Policy refresh interval for computers is the domain GPO route. | Found: Go to Computer Configuration > Policies > Administrative Templates > Windows Components > Microsoft Defender Antivirus. | Fix: Replace the path with 'Computer Configuration > Policies > Administrative Templates > System > Group Policy > Set Group Policy refresh interval for computers'. The cited CSP maps the setting to System > Group Policy; the domain editor hierarchy in https://learn.microsoft.com/defender-endpoint/evaluate-mdav-using-gp includes Policies between Computer Configuration and Administrative Templates. | Source: https://learn.microsoft.com/defender-endpoint/evaluate-mdav-using-gp
- [contradicted, blocker] controls[1].note; Why it matters; Risks and limits: Out-of-date Central Store / behaviour: The template must be in the Central Store before a new setting can appear in the editor. | Found: Alternatively, add these rules and settings to the Policy Definition template folder on individual computers and then configure the specific policies you want to set. | Fix: Replace the row note's last sentence with 'Install the templates in the Central Store, or in the Policy Definition template folder on individual computers.' Narrow the corresponding Why it matters and Risks and limits sentences to 'When using a Central Store, copy updated templates into it before configuring newly added policies.' Microsoft documents the alternative at https://learn.microsoft.com/deployedge/configure-microsoft-edge. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
- [contradicted, blocker] Risks and limits: Changes are not immediate / behaviour: Office apps apply new policy only after they restart. | Found: Some policies related to privacy controls will apply without restarting any Office apps. | Fix: Replace the sentence with 'Office policy changes generally take effect after the apps restart, but some privacy-control policies apply without restarting Office apps.' Cite the existing Cloud Policy overview URL. | Source: https://learn.microsoft.com/microsoft-365-apps/admin-center/overview-cloud-policy
- [unsupported, major] Open questions: Administrative Templates index / behaviour: Administrators have to track the first template release for each Copilot-related policy through each product's release notes. | Found: Searched: 'Microsoft Administrative Templates release first version policy index Copilot Edge Office OneDrive'. Read Central Store and Office template guidance, Edge policy reference and Edge/OneDrive release-note excerpts. No text makes release notes the required or exhaustive route. | Fix: Remove 'Administrators currently have to track this through each product's release notes.' Retain the narrower question about the absence of a cross-product template-release index.
- [unsupported, major] What it is: Administrative Templates / behaviour: Most settings named in Microsoft 365 briefings are registry-based Administrative Templates policies. | Found: Searched: 'Microsoft 365 Group Policy most policies registry based Administrative Templates Edge Office OneDrive'. Read Edge configuration, Office update settings and OneDrive policy guidance. These establish examples, not a majority of the wiki's briefing settings. | Fix: Replace 'Most settings named in Microsoft 365 briefings are registry-based policies described by Administrative Templates' with 'Administrative Templates describe registry-based policies'. The existing Central Store source supports the narrower statement.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui / admin-path: Group Policy Management Editor > Computer Configuration > Policies > Administrative Templates > Microsoft Edge reaches the Edge policies. | Found: To configure a mandatory policy, open the Group Policy Editor and go to (Computer Configuration or User Configuration) > Policies > Administrative Templates > Microsoft Edge. | Fix: The path stops at the policy list. Extend it to 'Computer Configuration > Policies > Administrative Templates > Microsoft Edge > policy', with a lower-case placeholder for the policy selected, as described by https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-management-console. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
- [supported, minor] controls[4].api / command: POST /beta/deviceManagement/groupPolicyUploadedDefinitionFiles uploads an ADMX definition file. | Found: POST https://graph.microsoft.com/beta/deviceManagement/groupPolicyUploadedDefinitionFiles content | Binary | The contents of the uploaded ADMX file. | Fix: Keep the call and add to the row note: 'The request body sets content to the ADMX file contents and groupPolicyUploadedLanguageFiles to its associated ADML files.' Both properties are documented at the existing Graph reference URL. | Source: https://learn.microsoft.com/graph/api/intune-grouppolicy-grouppolicyuploadeddefinitionfile-create?view=graph-rest-beta
- [supported, minor] Risks and limits: Changes are not immediate / behaviour: GPO changes replicate within a site every 15 minutes. | Found: Distributed File System Replication (DFSR) controls the replication of the SYSVOL folder. Within sites, replication occurs every 15 minutes. | Fix: Replace '(every 15 minutes within a site)' with '(the cited processing page says AD replication typically takes less than a minute within a site, while SYSVOL replication occurs every 15 minutes)'. This preserves the distinction explicitly documented at https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing. | Source: https://learn.microsoft.com/windows-server/identity/ad-ds/manage/group-policy/group-policy-processing
- [contradicted, minor] What to check: Cloud Policy / consistency: The checklist names a Cloud Policy control that has no row in the controls table. | Found: Check whether Cloud Policy also sets any Microsoft 365 Apps policy you manage through a GPO. / The controls table covers GPO linking, Edge settings, security filtering, refresh intervals and Intune ADMX import, but not Cloud Policy. | Fix: Remove the Cloud Policy checklist bullet; retain the existing Cloud Policy concept link and precedence explanation. This resolves the unmatched checklist control without adding an unverified row.
- [contradicted, minor] sources; Why it matters; What it is: Security filtering / consistency: Microsoft sources that support the named product examples are missing from the concept's sources list. | Found: Copilot's use of Edge page content, Edge tab organisation and OneDrive folder exclusions are all published as Administrative Templates policies. / The sources list contains no individual Edge policy reference or OneDrive policy reference. | Fix: Add these Microsoft sources, together as one citation correction: https://learn.microsoft.com/deployedge/microsoft-edge-policies/edgeentracopilotpagecontext ; https://learn.microsoft.com/deployedge/microsoft-edge-policies/tabservicesenabled ; https://learn.microsoft.com/sharepoint/use-group-policy . These support the Edge and OneDrive examples and the default-scope statement.
-->
