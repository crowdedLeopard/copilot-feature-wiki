---
title: "OneDrive: sync up to 1 million items on macOS"
slug: "onedrive-sync-support-for-up-to-1-million-items-on-macos"
roadmapId: 570448
topic: "modern-work"
products: ["OneDrive"]
summary: "Microsoft plans to raise the OneDrive sync limit on Mac from 300,000 to 1 million items per sync instance, per device. Preview needs the Insiders ring and qualifying hardware. No action is required unless you join the preview."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Mac"]
targetDate: "June CY2027"
previewDate: "October CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "review"
licensing:
  model: "included"
  notes: "The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can be bought standalone. No licence or price specific to the 1 million item limit is yet published."
audiences: ["m365-admin","service-owner","end-user"]
tags: ["onedrive","sharepoint","macos","sync-app","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 570448"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=570448"
    kind: "roadmap"
  - title: "Deploy and configure the OneDrive sync app for Mac"
    url: "https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos"
    kind: "learn"
  - title: "The OneDrive sync app update process"
    url: "https://learn.microsoft.com/sharepoint/sync-client-update-process"
    kind: "learn"
  - title: "SharePoint limits"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "Add a property list file to macOS devices using Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    kind: "learn"
  - title: "MC1477187: Microsoft OneDrive: OneDrive sync supports up to 1 million items on macOS"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1477187"
    kind: "message-center"
videos: []
related: ["onedrive-command-line-tool-for-the-onedrive-sync-app","onedrive-improved-max-path-error-experience-on-desktop"]
controls:
  - governs: "Which sync app update ring Mac devices use (Insiders is needed for the preview)"
    scope: "tenant"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Manage devices > Configuration > Create > New policy > macOS > Templates > Preference file > Configuration settings > Property list file"
      docs: "https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos"
    api:
      kind: "other"
      call: "Tier key in com.microsoft.OneDriveUpdater.plist: <key>Tier</key><string>(UpdateRing)</string>"
      docs: "https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos"
    note: "Sets the ring only, not the item limit. Intune role: Policy and Profile Manager. The Mac page lists Insiders, Production and Enterprise (Deferred); its Tier section does not describe Intune deployment, so confirm the profile on a test Mac."
  - governs: "A setting to turn the 1 million item sync limit on or off"
    scope: "tenant"
    ui: null
    api: null
    note: "No such setting is documented at the time of writing (November 2026); eligibility depends on the Insiders ring and device requirements."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-10-20T23:00:34"
changes:
  - date: "2026-11-22"
    note: "First briefing: Mac sync limit planned to rise from 300,000 to 1 million items, preview on the Insiders ring planned from October 2026."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 59 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-22"
    note: "Corrected the update ring control: its note no longer says the Mac page does not mention Intune, and its path now ends at the Property list file setting."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 65 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-22"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 64
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "238491e7498ce421e74f93046c5feaf9"
---

## What's changing

Microsoft plans to raise the item limit for the OneDrive sync app on macOS from 300,000 items to 1 million items per sync instance, per device. Microsoft's notice MC1477187 says this follows an increase for OneDrive on Windows announced in MC1294528, and is meant to help organisations with large OneDrive and SharePoint libraries sync more content reliably.

The capability arrives first in Public Preview for devices enrolled in the Insiders ring, and later in General Availability. A device must also meet minimum hardware and configuration requirements, which MC1477187 describes as a supported operating system, memory, storage and processor. The values are not given in the notice or the roadmap item. Devices that do not qualify keep syncing at the existing supported limit of 300,000 items, and the notice says they will see no change in behaviour.

The roadmap item is In development, with a preview date of October CY2026 and a General Availability target of June CY2027. MC1477187 (published 2026-09-22, last updated 2026-10-20) says Public Preview rollout for Worldwide would begin in mid-October 2026 and was expected to complete by late October 2026. The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD; the notice gives a rollout schedule for Worldwide only. Microsoft Learn does not yet describe this feature, so what is stated about its behaviour is the roadmap's and the notice's description.

MC1477187 adds that performance is not yet optimised for a high volume of read-only files or for accounts under legal hold, and that Microsoft is working on both.

## Why it matters

Today the SharePoint limits page recommends syncing no more than 300,000 files in a single OneDrive or team site library, and says the same performance issues can occur at 300,000 items or more across all libraries you sync, including shortcut folders. Under the plan, a qualifying Mac could sync up to 1 million items, but only on qualifying devices in the preview, so two Macs in the same team can behave differently.

Microsoft has not stated whether the higher limit switches on by itself for qualifying Insiders devices or needs a setting. MC1477187 says no action is required if you do not plan to take part in the preview. The practical work for most tenants is deciding whether to put a few Macs on the Insiders ring and briefing the helpdesk that eligibility depends on hardware.

## Risk assessment

**Data exposure**
- No new data source is described. The change raises how many items one Mac can sync from libraries the user already syncs. The notice does not discuss local storage, so check local disk use on preview Macs.

**Security & identity**
- No change to sign-in or permissions is described in the roadmap item or MC1477187, and MC1477187 states no compliance considerations were identified.

**Autonomy & actions**
- No change: the item describes a sync capacity limit, not an agent or automated action.

**Change & support**
- MC1477187 states performance is not yet optimised for a high volume of read-only files or for accounts under legal hold. Do not use users with legal-hold accounts or many read-only files as preview participants without a rollback plan.
- Qualifying and non-qualifying Macs will have different limits, which makes support cases harder to reproduce. Record each preview Mac's hardware and sync app version.
- A Mac on the Insiders ring receives builds that preview new features, so it may meet other changes too.

## Cost and licensing

The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. The roadmap item and MC1477187 name no additional licence for the higher limit, and a licence or price specific to the 1 million item limit is not yet published.

No meter is documented for this feature at the time of writing (November 2026). Indirect costs are admin time to select preview users and brief the helpdesk, and any Mac upgrades needed to meet the minimum hardware requirements, which are not yet published in detail. Local disk space needed for larger synced libraries is not yet published.

## Scope

- **Users:** MC1477187 names users syncing OneDrive, OneDrive for Business or SharePoint document libraries on macOS, users whose libraries approach or exceed 300,000 items, and preview participants on the Insiders ring.
- **Platform:** Mac only, as the roadmap record lists.
- **Clouds:** The roadmap lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. MC1477187 gives a preview rollout schedule for Worldwide only; the rollout timing for the other clouds is not stated.
- **Release phase:** Preview and General Availability, with a preview date of October CY2026 and a General Availability target of June CY2027 (targets, not commitments).
- **Prerequisites:** The Insiders ring for the preview, and devices that meet minimum hardware and configuration requirements (supported operating system, memory, storage, processor). Microsoft Learn says the Mac App Store edition of the sync app follows a separate update process; whether that edition takes part in the preview is not stated.

## Governance guidance

### Before rollout
- Identify Macs of users whose OneDrive or SharePoint libraries approach or exceed 300,000 items, as MC1477187 recommends, and choose a small preview group.
- Check each candidate Mac against the minimum hardware and configuration requirements once Microsoft publishes them: operating system, memory, storage and processor.
- Exclude users with legal-hold accounts or large numbers of read-only files from the first group, because MC1477187 says performance is not yet optimised for them.
- Brief the helpdesk that the preview needs the Insiders ring and that non-qualifying Macs stay at 300,000 items.

### At rollout
- Place the chosen preview Macs on the Insiders ring with the Tier preference (see the controls table) and leave all other users on the default Production ring, as the Learn guidance recommends.
- Confirm the standalone sync app is installed on preview Macs, because the Mac App Store edition follows a separate update process.
- Record the sync app version and hardware of each preview Mac so support can tell which Macs should have the higher limit.

### After rollout
- Watch preview users for sync delays or errors in large libraries and report them to Microsoft support.
- Review the roadmap item and MC1477187 for updated requirements and the General Availability date, targeted for June CY2027.
- Decide before General Availability whether Production-ring Macs need hardware upgrades.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which sync app update ring Mac devices use (Insiders is needed for the preview)</strong><br><small>Tenant</small><br><small class="controls__note">Sets the ring only, not the item limit. Intune role: Policy and Profile Manager. The Mac page lists Insiders, Production and Enterprise (Deferred); its Tier section does not describe Intune deployment, so confirm the profile on a test Mac.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Manage devices › Configuration › Create › New policy › macOS › Templates › Preference file › Configuration settings › Property list file <a href="https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Tier key in com.microsoft.OneDriveUpdater.plist: &lt;key&gt;Tier&lt;/key&gt;&lt;string&gt;(UpdateRing)&lt;/string&gt;</code> <a href="https://learn.microsoft.com/sharepoint/deploy-and-configure-on-macos" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>A setting to turn the 1 million item sync limit on or off</strong><br><small>Tenant</small><br><small class="controls__note">No such setting is documented at the time of writing (November 2026); eligibility depends on the Insiders ring and device requirements.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The update ring is the only documented control that decides whether a Mac can receive the preview. The Tier key chooses the ring only; it does not set the item limit, and users cannot change the ring once the setting is enabled and a ring is selected. Intune does not validate settings in a property list file, so test the profile on one Mac first. Deploying a preference file profile in Intune needs the Policy and Profile Manager built-in role, and macOS devices must be enrolled and managed by Intune.

Microsoft Learn documents no setting that turns the 1 million item limit on or off at the time of writing (November 2026), so eligibility rests on the ring and on the device meeting the requirements.

## Open questions

- What are the minimum hardware and configuration requirements (operating system version, memory, storage, processor) for the 1 million item limit on Mac? Watch MC1477187 and the OneDrive sync app Learn pages.
- Does the higher limit apply automatically on a qualifying Insiders Mac, or does a setting enable it? Microsoft has not stated the default.
- Does the Mac App Store edition of the sync app take part in the preview, given that it follows a separate update process?
- When will the preview and General Availability reach GCC, GCC High and DoD? The roadmap lists them, but MC1477187 schedules only Worldwide.
- When will performance with read-only files and legal-hold accounts be improved, and will General Availability wait for it?

<!-- rationale
risk: Low. Microsoft's notice MC1477187 says devices that do not meet the requirements see no change, and no new data access is described; the known gap is performance with read-only files and legal-hold accounts.
cost: Low. Only indirect cost is documented: admin time and helpdesk preparation. Hardware requirements and any feature-specific licence are not yet published; OneDrive itself is included in Microsoft 365 plans.
impact: Low. The preview reaches only Mac users on the Insiders ring whose devices qualify; users with libraries near 300,000 items will notice most.
-->

<!-- verifier-findings (2026-11-22, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing; Governance guidance: Before rollout; rationale: cost; Open questions / absence: Detailed hardware and configuration requirements for the Mac preview have not yet been published, so candidates should be checked once Microsoft publishes them. | Found: Windows 11, Windows Server 2025, or macOS Golden Gate 27. Memory: 8 GB RAM minimum (16 GB recommended). Storage: Solid-state drive (SSD) required. Processor: Intel i5 / AMD Ryzen 5 or later, Snapdragon X Plus or Apple silicon. | Fix: Replace the claims that hardware requirements are unpublished in Cost and licensing and the cost rationale with: 'Microsoft Support publishes the preview hardware and configuration requirements in Restrictions and limitations in OneDrive and SharePoint.' Link that sentence and add https://support.microsoft.com/en-us/office/restrictions-and-limitations-in-onedrive-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa to sources. Replace the Before rollout bullet with: 'Check each candidate Mac against the published preview requirements in Restrictions and limitations in OneDrive and SharePoint.' Remove the first Open questions bullet, which asks for those already published requirements. Keep the narrower statement that the supplied notice and roadmap do not give their values. | Source: https://support.microsoft.com/en-us/office/restrictions-and-limitations-in-onedrive-and-sharepoint-64883a5d-228e-48f5-b3d2-eb39e07630fa
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls table / admin-path: The printed Intune path reaches the Property list file setting in a macOS Preference file profile. | Found: Select Devices > Manage devices > Configuration > Create > New policy. Platform: Select macOS. Profile type: Select Templates > Preference file. In Configuration settings, configure your settings: ... Property list file | Fix: Expand the path to 'Devices > Manage devices > Configuration > Create > New policy > macOS > Templates > Preference file > Create > Basics > Configuration settings > Property list file', following https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos. The omitted Basics page only collects a name and description; this is not a wrong navigation route. | Source: https://learn.microsoft.com/intune/device-configuration/templates/configure-preference-file-macos
-->
