---
title: "Microsoft Purview: new custom permissions menu in the Information Protection File Labeler"
slug: "microsoft-purview-compliance-portal-custom-permissions-ui-enhancements-in-microsoft-purvie"
roadmapId: 493749
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft plans to replace the File Labeler's custom permissions screen with the Office-style menu, so four permission levels can go to several groups at once. Windows File Explorer users are affected; no admin action is documented yet."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop"]
targetDate: "July CY2026"
previewDate: "September CY2025"
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "included"
  notes: "Microsoft's client page says you must have a cloud-based subscription for sensitivity labelling using the Information Protection client. A licence, price or meter specific to the new menu is not yet published."
audiences: ["security","compliance","m365-admin","end-user"]
tags: ["purview","information-protection","sensitivity-labels","encryption","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 493749"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=493749"
    kind: "roadmap"
  - title: "Extend sensitivity labeling on Windows"
    url: "https://learn.microsoft.com/purview/information-protection-client"
    kind: "learn"
  - title: "Advanced settings for Microsoft Purview Information Protection client"
    url: "https://learn.microsoft.com/powershell/exchange/client-advanced-settings?view=exchange-ps"
    kind: "learn"
  - title: "Set-LabelPolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps"
    kind: "learn"
  - title: "Configure usage rights for the Azure Rights Management service"
    url: "https://learn.microsoft.com/purview/rights-management-usage-rights"
    kind: "learn"
  - title: "Known issues for the information protection client"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/known-issues-ip-client"
    kind: "learn"
videos: []
related: ["microsoft-purview-information-protection-file-labeler-and-file-viewer-for-macos","sensitivity-labels"]
controls:
  - governs: "Whether File Labeler users see the Protect with custom permissions option in File Explorer"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "Set-LabelPolicy -Identity \"Global Policy\" -AdvancedSettings @{EnableCustomPermissions=\"False\"}"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps"
    note: "Existing control for today's option; Learn does not say it governs the new menu. Security & Compliance PowerShell only. The policy name is a placeholder for your own label policy."
  - governs: "Whether the Apply sensitivity label with Microsoft Purview option appears in File Explorer"
    scope: "other"
    ui: null
    api:
      kind: "other"
      call: "Create DWORD value LegacyDisable under HKEY_CLASSES_ROOT\\AllFilesystemObjects\\shell\\Microsoft.Azip.RightClick"
      docs: "https://learn.microsoft.com/purview/information-protection-client"
    note: "Registry value on the computer, with any value data. Hides the whole File Labeler menu entry, not only custom permissions."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-01-23T00:15:29"
changes:
  - date: "2026-11-24"
    note: "First briefing: new custom permissions menu in the Windows File Labeler, with today's File Explorer controls and the open questions about the replacement."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 46 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 46
  confirmed: 40
  unconfirmed: 0
  contradicted: 6
  attempts: 1
  hash: "76c021e88014541f37ad95c31d359bf2"
---

## What's changing

The roadmap item states that Microsoft plans to replace the custom permissions screen in the Microsoft Purview Information Protection File Labeler with the custom permissions menu familiar from Office. The new menu lets viewer, restricted editor, editor and owner permissions be assigned to multiple groups at the same time. The File Labeler is the component of the Information Protection client that Microsoft describes as used to apply sensitivity labels and encryption using File Explorer, and the client runs on Windows only.

Microsoft Learn does not describe the new menu at the time of writing (November 2026), so what is said here about its behaviour is the roadmap's description. Learn does document today's option: by default users see **Protect with custom permissions** when they right-click in File Explorer with the file labeler, and it lets them set their own encryption settings that can override encryption settings in a label configuration. The permission names in the roadmap match Learn's updated naming, under which Reviewer is now called Restricted Editor, Co-Author is now called Editor and Co-Owner is now called Owner in the Microsoft Purview portal and in Word, Excel and PowerPoint for Windows (version 2411+), while other applications keep the original names.

The roadmap record shows status In development, a target of July CY2026 and a preview date of September CY2025, with release phases General Availability and Preview, platform Desktop, and clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The target month has passed while the status is still In development, and the record was last modified on 23 January 2026, so treat the date as unconfirmed. No Message Center post was supplied for this item, and Microsoft has not stated how the new menu reaches the client.

## Why it matters

This replaces a screen that File Labeler users already use to protect files with their own choice of people and permissions. Microsoft has not stated what happens on arrival, so no source says an administrator must do anything, and no source says nothing changes either. Plan for a change to the dialog your users see.

The practical effect is on support and on who ends up with access. Assigning four permission levels to several groups in one pass is quicker for users, and it also means one mistaken choice, such as an owner assignment, can reach several groups at once. Existing label-policy controls for the current option are the levers to know about now, and whether they carry over to the new menu is still open.

## Risk assessment

**Data exposure**
- The current option lets users set their own encryption settings that can override a label's encryption configuration. The roadmap's multi-group assignment makes that override broader in one step; the control that exists today is the `EnableCustomPermissions` label policy setting, which hides the option.

**Security & identity**
- Neither the roadmap nor Learn describes a change to sign-in, authentication or which group types can be assigned. Which groups the new menu accepts is not stated.

**Autonomy & actions**
- No change: the roadmap describes a menu a user opens and fills in, and describes no automated action.

**Change & support**
- Help desk guidance and screenshots for the current custom permissions dialog will not match a new menu, and the names Restricted Editor, Editor and Owner replace Reviewer, Co-Author and Co-Owner in the places Learn lists.
- Learn's known-issues page lists current File Labeler limits, such as the Address Book button not opening the Outlook address book when new Outlook is used. Whether the new menu changes them is not stated.

## Cost and licensing

Microsoft's page on the Information Protection client says you must have a cloud-based subscription for sensitivity labelling using the Microsoft Purview Information Protection client or scanner, and points to its Microsoft 365 licensing guidance for security and compliance. That page names no plan, so check your own licensing against the guidance it links.

No meter, price or separate licence for the new custom permissions menu is published at the time of writing. The costs that are known are indirect: admin time to decide whether users keep the option, and help desk and user communication when the dialog changes.

## Scope

The File Labeler is part of the Information Protection client, which Learn says runs on Windows only. It supports 64-bit versions of Windows and Windows Server that are supported under the Microsoft Lifecycle Policy, and ARM64 is supported for the viewer and file labeler. The roadmap lists platform Desktop and the Worldwide, GCC, GCC High and DoD clouds.

Users affected are those who right-click files in File Explorer and use custom permissions. Roles, rollout mechanics, the client version that carries the new menu and prerequisites for it are not stated. The macOS File Labeler is a separate roadmap item: see [/features/microsoft-purview-information-protection-file-labeler-and-file-viewer-for-macos/](/features/microsoft-purview-information-protection-file-labeler-and-file-viewer-for-macos/).

## Governance guidance

### Before rollout
- Decide whether File Labeler users should keep the **Protect with custom permissions** option, and record the decision against the `EnableCustomPermissions` row in the controls table.
- Identify which label policies already set `EnableCustomPermissions` or `EnableCustomPermissionsForCustomProtectedFiles`, because those settings shape what users see today.
- Tell the help desk and the users who protect files from File Explorer that the dialog is planned to change and that permission names follow the Editor, Restricted Editor and Owner naming.

### At rollout
- Confirm which client version carries the new menu from Microsoft's client release notes before deploying it, since no version is stated in the roadmap record.
- Test the new menu with a small pilot group before wider deployment, using files that already carry custom permissions and groups from your tenant.
- Check that the `EnableCustomPermissions` setting still hides the option for the pilot group, because Learn does not say it governs the new menu.

### After rollout
- Review the Information Protection client known-issues page for new File Labeler entries.
- Reassess who should keep the custom permissions option once the behaviour of the new menu is known.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether File Labeler users see the Protect with custom permissions option in File Explorer</strong><br><small>User</small><br><small class="controls__note">Existing control for today's option; Learn does not say it governs the new menu. Security &amp; Compliance PowerShell only. The policy name is a placeholder for your own label policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;Global Policy&quot; -AdvancedSettings @{EnableCustomPermissions=&quot;False&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Apply sensitivity label with Microsoft Purview option appears in File Explorer</strong><br><small class="controls__note">Registry value on the computer, with any value data. Hides the whole File Labeler menu entry, not only custom permissions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>Create DWORD value LegacyDisable under HKEY_CLASSES_ROOT\AllFilesystemObjects\shell\Microsoft.Azip.RightClick</code> <a href="https://learn.microsoft.com/purview/information-protection-client" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Both rows are controls for today's File Labeler. Learn does not say either one governs the new menu, so use them as what exists now, not as confirmed controls over the replacement.

`Set-LabelPolicy` works only in Security & Compliance PowerShell, and its reference says you need to be assigned permissions to use it. When `EnableCustomPermissions` is turned off, users by default cannot see or change custom permissions already set on an encrypted document; Learn documents a separate `EnableCustomPermissionsForCustomProtectedFiles` setting, set to True, that lets them see and change those permissions in File Explorer.

The registry value hides the whole **Apply sensitivity label with Microsoft Purview** menu option in File Explorer, not just the custom permissions part, so it is a blunter control than the label policy setting.

## Open questions

- Which Information Protection client version carries the new menu, and how will it be delivered to existing installations? Watch the client release notes and Message center.
- Does the `EnableCustomPermissions` label policy setting hide or govern the new menu in the same way it governs the current option?
- Which group types and external domains can the new menu assign, and does it support specifying a domain to cover all users in an organisation? Learn's known-issues page lists that the current Restricted Access dialog does not support specifying a domain name.
- Will the new menu resolve the listed known issue that the Address Book button does not open the Outlook address book when new Outlook is used?
- Is a licence or price specific to the new menu planned, or does it stay within the cloud-based subscription for sensitivity labelling that the client page requires?

<!-- rationale
risk: Low. The roadmap describes a new screen for an option File Labeler users already have, and Learn documents a policy setting that hides that option. The default state is not stated, so this rates today's behaviour continuing.
cost: Low. Learn says the client needs a cloud-based subscription for sensitivity labelling, and no separate price for the new menu is published; the known cost is admin and help desk time.
impact: Medium. Users who protect files with custom permissions from File Explorer will see a different dialog; other users of the File Labeler are not described as affected.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / absence: Microsoft Learn does not describe the new custom permissions menu as of November 2026. | Found: ## Version 3.2.92.0 Microsoft Purview Information Protection client and scanner version 3.2.92.0. **Released** 06/11/2026 Updated the Custom Permissions dialog styling to match the same experience in Office. | Fix: Replace the documentation-gap sentence with: 'The roadmap still says In development, but Microsoft's client release notes document the Office-style Custom Permissions dialog in version 3.2.92.0, released 11 June 2026, following preview version 3.2.89.0 on 22 April 2026.' Cite https://learn.microsoft.com/purview/information-protection-client-relnotes and retain the roadmap's status and target as record facts, not as the only account of availability. | Source: https://learn.microsoft.com/purview/information-protection-client-relnotes
- [contradicted, blocker] Scope; Governance guidance: At rollout; Open questions / absence: Microsoft has not stated a client version carrying the new custom permissions menu. | Found: ## Version 3.2.92.0 **Released** 06/11/2026 Updated the Custom Permissions dialog styling to match the same experience in Office. | Fix: Replace the version gap and its open question with: 'The Office-style Custom Permissions dialog is documented in client version 3.2.92.0, released 11 June 2026; version 3.2.172.0 preview, released 1 September 2026, subsequently improved recipient search and support for different permission levels for recipients.' Cite https://learn.microsoft.com/purview/information-protection-client-relnotes. Change the rollout checklist to checking installed client versions against these documented releases. | Source: https://learn.microsoft.com/purview/information-protection-client-relnotes
- [contradicted, blocker] What's changing; Scope; Open questions / absence: Microsoft has not stated how the new menu reaches existing client installations. | Found: Including the Microsoft Purview Information Protection client in the catalog means that you can upgrade the client using Windows Server Update Services (WSUS) or Configuration Manager, or other software deployment mechanisms that use Microsoft Update. | Fix: Replace the delivery gap with: 'The dialog update ships in the client. Microsoft distributes Windows client releases through the Microsoft Download Center and, typically after four weeks for GA versions, the Microsoft Update Catalog, supporting upgrades through WSUS, Configuration Manager or other Microsoft Update deployment mechanisms.' Cite https://learn.microsoft.com/purview/information-protection-client-relnotes. Remove the open question asking how it will be delivered. | Source: https://learn.microsoft.com/purview/information-protection-client-relnotes
- [contradicted, blocker] summary; Why it matters; Scope: prerequisites / absence: No administrator action or prerequisites for the updated menu are documented. | Found: After upgrading to this version, run [Clear-Authentication](/en-us/powershell/module/purviewinformationprotection/clear-authentication) and then [Set-Authentication](/en-us/powershell/module/purviewinformationprotection/set-authentication) so that the client and PowerShell module obtain the access t | Fix: Remove 'no admin action is documented yet' from the summary and the equivalent claim in Why it matters. Replace the prerequisite gap with: 'The version 3.2.92.0 release notes instruct administrators, after upgrading, to run Clear-Authentication and then Set-Authentication so the client and PowerShell module obtain the access tokens needed to connect to Microsoft Graph.' Cite https://learn.microsoft.com/purview/information-protection-client-relnotes. | Source: https://learn.microsoft.com/purview/information-protection-client-relnotes
- [contradicted, blocker] Risk assessment: Security & identity / absence: Neither the roadmap nor Learn describes a change to sign-in or authentication associated with the menu update. | Found: Integrated Microsoft Graph with the Microsoft Purview Information Protection client and PowerShell module to look up users and groups when assigning custom permissions, removing the dependency on the classic Outlook contact picker. | Fix: Replace the sign-in/authentication absence with: 'The version 3.2.92.0 release notes document Microsoft Graph integration for looking up users and groups and instruct administrators to refresh authentication with Clear-Authentication followed by Set-Authentication after upgrading.' Cite https://learn.microsoft.com/purview/information-protection-client-relnotes. | Source: https://learn.microsoft.com/purview/information-protection-client-relnotes
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].note; Why it matters; Governance guidance; Governance controls; Open questions / applicability: EnableCustomPermissions is documented for the existing option but is not confirmed to govern the replacement menu. | Found: | EnableCustomPermissions | Turn off custom permissions in File Explorer | When you configure this setting, users do not see these options. | Fix: Replace the unconfirmed-applicability caveat with: 'EnableCustomPermissions controls the Protect with custom permissions option in File Explorer.' Remove the corresponding carry-over uncertainty from Why it matters, Governance controls and Open questions. The documented control's scope is File Explorer custom permissions, not a particular dialog design; pilot testing can remain advice. | Source: https://learn.microsoft.com/powershell/exchange/client-advanced-settings?view=exchange-ps
- [supported, minor] Governance controls: introductory note about both rows / applicability: The registry control is not confirmed as a control over access to the replacement menu. | Found: To hide the **Apply sensitivity label with Microsoft Purview** right-click menu option in File Explorer, create the following DWORD registry key that has the value name of **LegacyDisable** and any value data: | Fix: Replace the registry-control uncertainty with: 'The registry value hides the File Explorer entry used to open File Labeler; it is not a switch for only the custom permissions dialog.' Retain the existing warning that it hides the entire entry. | Source: https://learn.microsoft.com/purview/information-protection-client
- [supported, minor] Risk assessment: Change & support; Open questions / behaviour: The cited known-issues page lists an Address Book button failure when new Outlook is used. | Found: If you use new Outlook, the Address Book button in the \*\*Select \_users, groups, or organizations" field in the Information Protection File Labeler app doesn't open the Outlook address book. You must add email addresses manually. | Fix: Add the qualification: 'However, the client release notes for version 3.2.92.0 say Microsoft Graph lookup removes the dependency on the classic Outlook contact picker.' Cite https://learn.microsoft.com/purview/information-protection-client-relnotes. Replace the speculative open question about the new menu fixing Outlook address-book dependency with advice to check the installed client version against those release notes. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/known-issues-ip-client
- [supported, minor] Open questions: domain-name support / behaviour: The known-issues page says the Restricted Access dialog does not support specifying a domain name. | Found: Unlike the Microsoft Azure Information Protection dialog box, the **Restricted Access** dialog box doesn't support specifying a domain name to automatically include all users in the organization. | Fix: Remove the final explanatory sentence about Restricted Access from this open question. It occurs under coauthoring issues, while https://support.microsoft.com/topic/label-and-protect-files-in-file-explorer-in-windows-67829155-2d0e-4122-9677-7c53c8cba18a explicitly documents entering a domain name in File Labeler's Select users, groups, or organizations field. The narrower question about the redesigned menu can remain. | Source: https://learn.microsoft.com/troubleshoot/microsoft-365/purview/sensitivity-labels/known-issues-ip-client
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist asks readers to inventory EnableCustomPermissionsForCustomProtectedFiles, but the controls table has no row for that control. | Found: Identify which label policies already set `EnableCustomPermissions` or `EnableCustomPermissionsForCustomProtectedFiles` ... The table contains only EnableCustomPermissions and the LegacyDisable registry value. | Fix: Remove 'or EnableCustomPermissionsForCustomProtectedFiles' from the inventory checklist item so it asks readers to inventory only the existing EnableCustomPermissions table row. The documented explanation of the other setting in Governance controls can remain.
-->
