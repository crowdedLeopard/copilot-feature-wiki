---
title: "Microsoft Purview: new custom permissions menu in the Information Protection File Labeler"
slug: "microsoft-purview-compliance-portal-custom-permissions-ui-enhancements-in-microsoft-purvie"
roadmapId: 493749
topic: "governance"
products: ["Microsoft Purview"]
summary: "The roadmap says In development, but client release notes document the Office-style custom permissions dialog from version 3.2.92.0. File Explorer users are affected; admins refresh authentication after upgrading."
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
  - title: "Microsoft Purview Information Protection client - Release management and supportability"
    url: "https://learn.microsoft.com/purview/information-protection-client-relnotes"
    kind: "learn"
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
    note: "Controls the Protect with custom permissions option in File Explorer. Security & Compliance PowerShell only. The policy name is a placeholder for your own label policy."
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
  - date: "2026-11-24"
    note: "Corrected after the independent check: client release notes document the Office-style Custom Permissions dialog in version 3.2.92.0, with the post-upgrade Clear-Authentication and Set-Authentication step."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 55 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 55
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "e9394a5450fbe65003b7c3510d606b17"
---

## What's changing

The roadmap item states that Microsoft plans to replace the custom permissions screen in the Microsoft Purview Information Protection File Labeler with the custom permissions menu familiar from Office. The new menu lets viewer, restricted editor, editor and owner permissions be assigned to multiple groups at the same time. The File Labeler is the component of the Information Protection client that Microsoft describes as used to apply sensitivity labels and encryption using File Explorer, and the client runs on Windows only.

The roadmap still says In development, but Microsoft's client release notes document the Office-style Custom Permissions dialog in version 3.2.92.0, released 11 June 2026, following preview version 3.2.89.0 on 22 April 2026. Version 3.2.172.0 preview, released 1 September 2026, subsequently improved recipient search and support for different permission levels for recipients. Learn also documents today's option: by default users see **Protect with custom permissions** when they right-click in File Explorer with the file labeler, and it lets them set their own encryption settings that can override encryption settings in a label configuration. The permission names in the roadmap match Learn's updated naming, under which Reviewer is now called Restricted Editor, Co-Author is now called Editor and Co-Owner is now called Owner in the Microsoft Purview portal and in Word, Excel and PowerPoint for Windows (version 2411+), while other applications keep the original names.

The dialog update ships in the client. Microsoft distributes Windows client releases through the Microsoft Download Center and, typically after four weeks for GA versions, the Microsoft Update Catalog, supporting upgrades through WSUS, Configuration Manager or other Microsoft Update deployment mechanisms.

The roadmap record shows status In development, a target of July CY2026 and a preview date of September CY2025, with release phases General Availability and Preview, platform Desktop, and clouds Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The target month has passed while the status is still In development, and the record was last modified on 23 January 2026, so treat the date as unconfirmed. No Message Center post was supplied for this item.

## Why it matters

This replaces a screen that File Labeler users already use to protect files with their own choice of people and permissions. Microsoft has not stated what happens on arrival, so no source says existing behaviour stays the same. The version 3.2.92.0 release notes instruct administrators, after upgrading, to run Clear-Authentication and then Set-Authentication so the client and PowerShell module obtain the access tokens needed to connect to Microsoft Graph. Plan for a change to the dialog your users see.

The practical effect is on support and on who ends up with access. Assigning four permission levels to several groups in one pass is quicker for users, and it also means one mistaken choice, such as an owner assignment, can reach several groups at once. The existing label-policy control, `EnableCustomPermissions`, controls the **Protect with custom permissions** option in File Explorer.

## Risk assessment

**Data exposure**
- The current option lets users set their own encryption settings that can override a label's encryption configuration. The roadmap's multi-group assignment makes that override broader in one step; the control that exists today is the `EnableCustomPermissions` label policy setting, which hides the option.

**Security & identity**
- The version 3.2.92.0 release notes document Microsoft Graph integration for looking up users and groups and instruct administrators to refresh authentication with Clear-Authentication followed by Set-Authentication after upgrading. Which group types the new menu accepts is not stated.

**Autonomy & actions**
- No change: the roadmap describes a menu a user opens and fills in, and describes no automated action.

**Change & support**
- Help desk guidance and screenshots for the current custom permissions dialog will not match a new menu, and the names Restricted Editor, Editor and Owner replace Reviewer, Co-Author and Co-Owner in the places Learn lists.
- Learn's known-issues page lists current File Labeler limits, such as the Address Book button not opening the Outlook address book when new Outlook is used. However, the client release notes for version 3.2.92.0 say Microsoft Graph lookup removes the dependency on the classic Outlook contact picker.

## Cost and licensing

Microsoft's page on the Information Protection client says you must have a cloud-based subscription for sensitivity labelling using the Microsoft Purview Information Protection client or scanner, and points to its Microsoft 365 licensing guidance for security and compliance. That page names no plan, so check your own licensing against the guidance it links.

No meter, price or separate licence for the new custom permissions menu is published at the time of writing. The costs that are known are indirect: admin time to decide whether users keep the option, and help desk and user communication when the dialog changes.

## Scope

The File Labeler is part of the Information Protection client, which Learn says runs on Windows only. It supports 64-bit versions of Windows and Windows Server that are supported under the Microsoft Lifecycle Policy, and ARM64 is supported for the viewer and file labeler. The roadmap lists platform Desktop and the Worldwide, GCC, GCC High and DoD clouds.

Users affected are those who right-click files in File Explorer and use custom permissions. The Office-style Custom Permissions dialog is documented in client version 3.2.92.0, released 11 June 2026; version 3.2.172.0 preview, released 1 September 2026, subsequently improved recipient search and support for different permission levels for recipients. After upgrading to 3.2.92.0, the release notes instruct administrators to run Clear-Authentication and then Set-Authentication. The macOS File Labeler is a separate roadmap item: see [/features/microsoft-purview-information-protection-file-labeler-and-file-viewer-for-macos/](/features/microsoft-purview-information-protection-file-labeler-and-file-viewer-for-macos/).

## Governance guidance

### Before rollout
- Decide whether File Labeler users should keep the **Protect with custom permissions** option, and record the decision against the `EnableCustomPermissions` row in the controls table.
- Identify which label policies already set `EnableCustomPermissions`, because that setting shapes what users see today.
- Tell the help desk and the users who protect files from File Explorer that the dialog is changing and that permission names follow the Editor, Restricted Editor and Owner naming.

### At rollout
- Check installed client versions against the documented releases: 3.2.92.0 (11 June 2026) for the Office-style dialog and 3.2.172.0 preview (1 September 2026) for improved recipient search.
- Run Clear-Authentication and then Set-Authentication after upgrading, as the version 3.2.92.0 release notes instruct.
- Test the new menu with a small pilot group before wider deployment, using files that already carry custom permissions and groups from your tenant.
- Check that the `EnableCustomPermissions` setting still hides the option for the pilot group.

### After rollout
- Review the Information Protection client known-issues page for new File Labeler entries.
- Reassess who should keep the custom permissions option once the behaviour of the new menu is known.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether File Labeler users see the Protect with custom permissions option in File Explorer</strong><br><small>User</small><br><small class="controls__note">Controls the Protect with custom permissions option in File Explorer. Security &amp; Compliance PowerShell only. The policy name is a placeholder for your own label policy.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-LabelPolicy -Identity &quot;Global Policy&quot; -AdvancedSettings @{EnableCustomPermissions=&quot;False&quot;}</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/set-labelpolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the Apply sensitivity label with Microsoft Purview option appears in File Explorer</strong><br><small class="controls__note">Registry value on the computer, with any value data. Hides the whole File Labeler menu entry, not only custom permissions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>API</strong><br><code>Create DWORD value LegacyDisable under HKEY_CLASSES_ROOT\AllFilesystemObjects\shell\Microsoft.Azip.RightClick</code> <a href="https://learn.microsoft.com/purview/information-protection-client" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

`EnableCustomPermissions` controls the **Protect with custom permissions** option in File Explorer. The registry value hides the File Explorer entry used to open File Labeler; it is not a switch for only the custom permissions dialog.

`Set-LabelPolicy` works only in Security & Compliance PowerShell, and its reference says you need to be assigned permissions to use it. When `EnableCustomPermissions` is turned off, users by default cannot see or change custom permissions already set on an encrypted document; Learn documents a separate `EnableCustomPermissionsForCustomProtectedFiles` setting, set to True, that lets them see and change those permissions in File Explorer.

The registry value hides the whole **Apply sensitivity label with Microsoft Purview** menu option in File Explorer, not just the custom permissions part, so it is a blunter control than the label policy setting.

## Open questions

- Which group types and external domains can the new menu assign, and does it support specifying a domain to cover all users in an organisation?
- Do your installed client versions include 3.2.92.0 or later, so that the known issue with the Address Book button and new Outlook is covered by the Microsoft Graph lookup? Check the client release notes.
- Is a licence or price specific to the new menu planned, or does it stay within the cloud-based subscription for sensitivity labelling that the client page requires?

<!-- rationale
risk: Low. The roadmap describes a new screen for an option File Labeler users already have, and Learn documents a policy setting that hides that option. The default state is not stated, so this rates today's behaviour continuing.
cost: Low. Learn says the client needs a cloud-based subscription for sensitivity labelling, and no separate price for the new menu is published; the known cost is admin and help desk time.
impact: Medium. Users who protect files with custom permissions from File Explorer will see a different dialog; other users of the File Labeler are not described as affected.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Scope / availability: The Information Protection client runs on Windows only. | Found: This client runs on Windows only and replaces the Azure Information Protection (AIP) unified labeling client. | Fix: Replace the Windows-only wording in both sections with 'The Windows Information Protection client includes File Labeler; the client release notes also document a separate macOS client in preview.' The differing documentation is at https://learn.microsoft.com/purview/information-protection-client-relnotes, which states 'The Microsoft Purview Information Protection client for macOS is currently in preview and is offered as two separate applications: File Labeler and File Viewer.' | Source: https://learn.microsoft.com/purview/information-protection-client
-->
