---
title: "OneDrive sync app: policy to exclude folders by name from upload on Windows and Mac"
slug: "onedrive-admins-can-configure-a-group-policy-to-block-specific-folders-from-onedrive-sync"
roadmapId: 178292
topic: "modern-work"
products: ["OneDrive"]
summary: "A new OneDrive policy stops the Windows and Mac sync apps uploading folders whose names an administrator lists. Nothing changes until an administrator configures it; review whether named folders should stay local-only."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Desktop","Mac"]
targetDate: "June CY2025"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The OneDrive service description lists Sync features and IT admin, security, and compliance features as available in stand-alone, small business, enterprise, education, government and nonprofit plans. Nothing specific to this setting's licensing is published."
audiences: ["m365-admin","service-owner","security"]
tags: ["onedrive","sync-app","macos","intune","policy","admin-controls","group-policy","gcc","gcc-high","dod"]
sources:
  - title: "IT Admins - Use OneDrive policies to control sync settings"
    url: "https://learn.microsoft.com/sharepoint/use-group-policy"
    kind: "learn"
  - title: "Deploy and configure the OneDrive sync app for Mac"
    url: "https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos"
    kind: "learn"
  - title: "OneDrive Sync Release Notes"
    url: "https://learn.microsoft.com/sharepoint/sync-release-notes"
    kind: "learn"
  - title: "Plan file sync for SharePoint and OneDrive in Microsoft 365"
    url: "https://learn.microsoft.com/sharepoint/plan-file-sync"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "Add a property list file to macOS devices using Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    kind: "learn"
  - title: "OneDrive: Admins can configure a group policy to block specific folders from OneDrive Sync"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=178292"
    kind: "roadmap"
videos: []
related: ["onedrive-command-line-tool-for-the-onedrive-sync-app","onedrive-improved-max-path-error-experience-on-desktop","onedrive-sync-support-for-up-to-1-million-items-on-macos","onedrive-manage-access-to-the-onedrive-photos-desktop-experience"]
controls:
  - governs: "Which folder names the Windows OneDrive sync app does not upload"
    scope: "other"
    ui:
      surface: "Group Policy Management Editor"
      path: "Computer Configuration > Policies > Administrative Templates > OneDrive > Exclude specific kinds of folders from being uploaded"
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    api:
      kind: "other"
      call: "HKLM\\SOFTWARE\\Policies\\Microsoft\\OneDrive\\EnableODIgnoreFolderListFromGPO (list of folder-name strings)"
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    note: "Applies to devices in the Group Policy object's scope. Sync app restart required. Set to Disabled, not Not configured, to withdraw."
  - governs: "Which folder names the Mac OneDrive sync app does not upload"
    scope: "other"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Create > New policy > macOS > Templates > Preference file > Configuration settings > Property list file"
      docs: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    api:
      kind: "other"
      call: "EnableODIgnoreFolders key (array of folder-name strings) in /Library/Preferences/com.microsoft.OneDrive.plist"
      docs: "https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos"
    note: "Intune path is the general preference-file route; use domain com.microsoft.OneDrive (standalone) or com.microsoft.OneDrive-mac (App Store). Needs Policy and Profile Manager role."
  - governs: "Whether Windows users can add or remove their own sync exclusions"
    scope: "other"
    ui:
      surface: "Group Policy Management Editor"
      path: "Computer Configuration > Policies > Administrative Templates > OneDrive > Prevent users at your organization from changing the default ignored extension and folder lists"
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    api:
      kind: "other"
      call: "[HKLM\\SOFTWARE\\Policies\\Microsoft\\OneDrive]\"DisableChangesToODIgnoreList\"=dword:00000001"
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    note: "Work or school accounts only. Users can't change policy-set exclusions even without it."
  - governs: "Whether Mac users can add or remove their own sync exclusions"
    scope: "other"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Create > New policy > macOS > Templates > Preference file > Configuration settings > Property list file"
      docs: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    api:
      kind: "other"
      call: "DisableChangesToODIgnoreList key set to true in /Library/Preferences/com.microsoft.OneDrive.plist"
      docs: "https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos"
    note: "Work or school accounts only. Sync app restart required."
confidence: "high"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2024-08-01T17:30:27"
changes:
  - date: "2026-11-26"
    note: "New briefing: Windows Group Policy and Mac preference for excluding folders by name from OneDrive sync, now documented and gradually rolling out per the release notes."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 64 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: local-only statements now cover only new matching folders, since the policy does not remove content already in OneDrive or SharePoint; removed the unsupported 'no change to sign-in or access' line."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 60 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 60
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "980039de8071b0c7c25a7c63dba4a07c"
---

## What's changing

OneDrive gains a policy that stops the sync app uploading folders whose names an administrator lists. On Windows it is the Group Policy setting **Exclude specific kinds of folders from being uploaded** (EnableODIgnoreFolderListFromGPO); on Mac it is the **EnableODIgnoreFolders** preference. It sits beside the existing file exclusion policy, **Exclude specific kinds of files from being uploaded** (EnableODIgnoreListFromGPO on Windows, EnableODIgnore on Mac).

Administrators enter complete folder names. Matching isn't case-sensitive and wildcards aren't supported. Once the setting is enabled, the sync app doesn't upload new folders that match, and new files created in an existing matching folder also aren't uploaded. No errors appear for the skipped folders, which remain in the user's local OneDrive folder. The setting doesn't retroactively remove a folder or its existing content from OneDrive or SharePoint, and the sync app must be restarted after the setting is enabled or changed. If the setting isn't configured, the sync app uploads all supported folders. The roadmap item states that users will see the excluded folders in the sync configuration shown in their OneDrive advanced settings.

The roadmap item lists the change as In development, targeted for June CY2025, for General Availability on Desktop and Mac in Worldwide, GCC, GCC High and DoD. Microsoft's OneDrive sync release notes list **Exclude specific folders from syncing** among new features gradually rolling out in build 26.134.0713.0007 (July 31, 2026) on both the Windows and macOS production rings, and the Learn policy references document both settings. The roadmap status and the release notes disagree; both are reported here.

## Why it matters

This is a way to keep named folders, such as tool, cache or build folders that users create inside synced locations, out of OneDrive and SharePoint without users having to manage it. New matching folders skipped by the sync app remain local; the policy does not remove a folder or its existing content already in OneDrive or SharePoint. Choose names that only ever belong to disposable or device-specific content, because a common name such as one a business team also uses will silently keep real work local.

If nobody acts, nothing changes: Microsoft's reference says that if the setting is disabled or not configured, the sync app uploads all supported folders. The decision is whether any folder names justify the support cost of local-only content.

## Risk assessment

**Data exposure**
- New matching folders skipped by the sync app stay on the device and are not uploaded, so (in this wiki's reading) their content is outside OneDrive version history, sharing and Microsoft Purview policies that act on OneDrive and SharePoint content. A broad name list can leave business files on one disk with no cloud copy. Keep the list to names agreed with content owners.
- Removing a name from the list can cause matching local content to begin uploading, as the reference warns. Review that content before removing a rule.

**Security & identity**
- The reference describes the setting as preventing the OneDrive sync app from uploading matching folders; treat it as a sync filter, not as a data loss prevention control for sensitive content.

**Autonomy & actions**
- No change: nothing acts on its own. The sync app skips matching folders without showing errors.

**Change & support**
- Users may report that a folder has not appeared on another device or the web, because skipped folders produce no error. The roadmap item states that excluded folders will be listed in OneDrive advanced settings.
- Moving files that are already syncing into an excluded folder isn't supported, and existing synced content is not removed, so the policy does not clean up folders already in OneDrive.
- Changes need a sync app restart, and a Group Policy setting returned to **Not configured** leaves its registry key in place, so the change doesn't take effect.

## Cost and licensing

The [OneDrive service description](https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description) lists **Sync features** and **IT admin, security, and compliance features** as available in its stand-alone, small business, enterprise, education, government and nonprofit plan columns. It publishes nothing specific to this setting, and no meter or separate charge is documented for it at the time of writing (November 2026).

The indirect costs are admin time to update the OneDrive administrative templates, build and test the Group Policy object or Mac preference deployment, and helpdesk time for users whose folders stop syncing. Deploying the Mac preference through Intune uses an Intune device configuration profile, which needs devices that are enrolled and MDM managed by Intune.

## Scope

- **Windows:** the OneDrive sync app (OneDrive.exe), configured by Group Policy. The reference marks the setting *Applies to: Group Policy*; enabling it creates a list of strings under HKLM\SOFTWARE\Policies\Microsoft\OneDrive\EnableODIgnoreFolderListFromGPO.
- **Mac:** the **EnableODIgnoreFolders** key. The keys are the same for the standalone and Mac App Store editions, but the .plist file and domain differ (com.microsoft.OneDrive or com.microsoft.OneDrive-mac).
- **Clouds and platforms:** Worldwide, GCC, GCC High and DoD; Desktop and Mac, as the roadmap record lists them.
- **Rollout:** the release notes describe the feature as gradually rolling out from build 26.134.0713.0007 (July 31, 2026). The roadmap item still shows In development.
- **Roles:** deploying a preference file through Intune needs the **Policy and Profile Manager** built-in role.

## Governance guidance

### Before rollout
- Agree the folder names to exclude with the teams whose content could match, using complete names, since matching isn't case-sensitive and wildcards aren't supported.
- Check whether folders with those names already sync, because the policy doesn't remove existing content from OneDrive or SharePoint.
- Refresh the OneDrive .admx and .adml files in the Central Store from the installed sync app's adm folder, and confirm **Exclude specific kinds of folders from being uploaded** appears under Computer Configuration > Policies > Administrative Templates > OneDrive.
- Decide whether to also enable **Prevent users at your organization from changing the default ignored extension and folder lists** (DisableChangesToODIgnoreList), which stops user-added exclusions applying.

### At rollout
- Enable the folder exclusion policy in a Group Policy object linked to a pilot organisational unit first.
- Deploy the EnableODIgnoreFolders key to pilot Macs in the .plist for the edition they run, through an Intune preference file profile or your Mac management tool.
- Restart the sync app on pilot devices and confirm that a new folder with a listed name stays local, since the feature is gradually rolling out.
- Tell affected users which folder names will stay on their device and will not appear on the web or other devices.

### After rollout
- Set the policy to **Disabled**, not **Not configured**, when withdrawing it, so the registry change takes effect.
- Review the local content of matching folders before removing a name, because removing an exclusion can start uploading it.
- Revisit the name list when teams report folders missing from OneDrive on the web.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which folder names the Windows OneDrive sync app does not upload</strong><br><small class="controls__note">Applies to devices in the Group Policy object's scope. Sync app restart required. Set to Disabled, not Not configured, to withdraw.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Policies › Administrative Templates › OneDrive › Exclude specific kinds of folders from being uploaded <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>HKLM\SOFTWARE\Policies\Microsoft\OneDrive\EnableODIgnoreFolderListFromGPO (list of folder-name strings)</code> <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which folder names the Mac OneDrive sync app does not upload</strong><br><small class="controls__note">Intune path is the general preference-file route; use domain com.microsoft.OneDrive (standalone) or com.microsoft.OneDrive-mac (App Store). Needs Policy and Profile Manager role.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Create › New policy › macOS › Templates › Preference file › Configuration settings › Property list file <a href="https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>EnableODIgnoreFolders key (array of folder-name strings) in /Library/Preferences/com.microsoft.OneDrive.plist</code> <a href="https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Windows users can add or remove their own sync exclusions</strong><br><small class="controls__note">Work or school accounts only. Users can't change policy-set exclusions even without it.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Policies › Administrative Templates › OneDrive › Prevent users at your organization from changing the default ignored extension and folder lists <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>[HKLM\SOFTWARE\Policies\Microsoft\OneDrive]&quot;DisableChangesToODIgnoreList&quot;=dword:00000001</code> <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Mac users can add or remove their own sync exclusions</strong><br><small class="controls__note">Work or school accounts only. Sync app restart required.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Create › New policy › macOS › Templates › Preference file › Configuration settings › Property list file <a href="https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>DisableChangesToODIgnoreList key set to true in /Library/Preferences/com.microsoft.OneDrive.plist</code> <a href="https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

- Users can't change exclusions you configure by policy, whether or not DisableChangesToODIgnoreList is set. That setting additionally stops users adding or removing their own exclusions, stops applying exclusions they added earlier and re-applies default entries they removed. It applies only to work or school accounts.
- Microsoft's own default exclusion list still applies alongside your list; the separate DisableDefaultODIgnoreList setting turns it off.
- The Windows folder setting is marked *Applies to: Group Policy* in the reference, whereas many neighbouring OneDrive settings are marked *Group Policy, Intune*. On Mac, Intune's preference file profile deploys the .plist; Intune doesn't validate the settings in the file.
- Every change to the exclusion settings needs a sync app restart to take effect.

## Open questions

- Will the Windows folder exclusion setting be offered through Intune (administrative templates or the settings catalog), given the reference marks it *Applies to: Group Policy*? Watch the policy reference and the Intune release notes.
- Does adding a rule stop new files uploading inside a folder of that name that already syncs, given the reference says new files in an existing matching folder aren't uploaded while the release notes say existing synced content is not affected?
- When will the roadmap item, still In development with a June CY2025 target, be updated to match the release notes, and has the gradual rollout reached GCC, GCC High and DoD tenants?
- Will the excluded folder list shown in OneDrive advanced settings, as the roadmap item describes, tell users which entries come from administrator policy?

<!-- rationale
risk: Low. Left unconfigured, the sync app keeps uploading all supported folders as today; the exposure is self-inflicted, from listing names so broadly that business files stay only on the device.
cost: Low. The OneDrive service description lists sync and IT admin features in every OneDrive plan family; the cost is admin time to deploy the Group Policy or Mac preference and to support users.
impact: Low. Administrators configure it; only users who keep folders with the listed names inside OneDrive notice, because those folders stop reaching the cloud and their other devices.
-->
