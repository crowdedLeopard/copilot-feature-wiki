---
title: "OneDrive: uninstall the Photos experience without affecting file sync"
slug: "onedrive-uninstall-onedrive-photos-without-affecting-file-sync"
roadmapId: 568934
topic: "modern-work"
products: ["OneDrive"]
summary: "OneDrive plans to let people on Windows remove the OneDrive Photos experience without removing the sync app or deleting files. The roadmap describes a user choice; Microsoft Learn documents no admin control for it yet."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "September CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can be bought standalone. Nothing specific to this feature is published."
audiences: ["m365-admin","change-adoption"]
tags: ["onedrive","sync-app","user-experience","admin-controls"]
sources:
  - title: "Microsoft 365 Roadmap 568934"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568934"
    kind: "roadmap"
  - title: "OneDrive Sync Release Notes"
    url: "https://learn.microsoft.com/sharepoint/sync-release-notes"
    kind: "learn"
  - title: "IT Admins - Use OneDrive policies to control sync settings"
    url: "https://learn.microsoft.com/sharepoint/use-group-policy"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
videos: []
related: ["onedrive-manage-access-to-the-onedrive-photos-desktop-experience"]
controls:
  - governs: "Whether people can uninstall the OneDrive Photos experience"
    scope: "tenant"
    ui: null
    api: null
    note: "No administrator setting is documented at the time of writing (November 2026). The roadmap describes the option as available to people."
confidence: "low"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-08-07T21:45:15"
changes:
  - date: "2026-11-24"
    note: "First briefing: roadmap plan to let people uninstall the OneDrive Photos experience without affecting file sync; Microsoft Learn documents no admin control yet."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 44 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 44
  confirmed: 42
  unconfirmed: 2
  contradicted: 0
  attempts: 1
  hash: "8f4e217457e9070702931613fc9b57cd"
---

## What's changing

OneDrive plans to let people on Windows uninstall the OneDrive Photos experience on its own. The roadmap item says removing it does not uninstall the OneDrive app, interrupt file sync, or delete photos and files, and presents it as a removal option for people who prefer another app for their photos.

Microsoft Learn does not describe this feature yet, so what follows about its behaviour is the roadmap's description. The roadmap does not say what the Photos experience consists of, where the uninstall option appears, or whether it applies to work or school accounts, personal accounts or both. The OneDrive sync release notes describe a separate, earlier addition: "Browse your photos in OneDrive", opened by selecting **View photos** in the OneDrive activity center, which the notes describe as available for personal Microsoft accounts (version 26.123.0628.0001). Microsoft has not said that this is the experience the roadmap item refers to.

The roadmap item is In development, with a General Availability target of September CY2026, for Worldwide (Standard Multi-Tenant) and Desktop. That target month has passed at the time of writing (November 2026) and the record still shows In development, so treat the date as unconfirmed. No Message Center post was supplied for this item.

## Why it matters

This is a user-facing removal option, and the roadmap describes no change that reaches people who do nothing. Microsoft has not said whether the option is on, off or visible by default, so base your plan on the roadmap's description of a choice for people and not on an assumption about how it arrives.

The practical effect for a service owner is support load and expectation setting. Some people will remove the Photos experience and manage photos in another app, and the roadmap says their file sync carries on. Your service desk needs to know that removing Photos is not the same as removing OneDrive, and that no files are deleted by it.

## Risk assessment

**Data exposure**

- No change to what OneDrive stores or syncs: the roadmap says removing the Photos experience does not delete photos or files or interrupt file sync. Microsoft Learn does not document what happens to photo data cached or indexed by the Photos experience on removal.

**Security & identity**

- No change documented: the roadmap item names no new sign-in, permission or identity behaviour.

**Autonomy & actions**

- No autonomous behaviour is described. The roadmap presents the uninstall as something people do, not something OneDrive does for them.

**Change & support**

- People may confuse removing the Photos experience with uninstalling OneDrive. The roadmap says the OneDrive app stays installed, so tell the service desk to treat these as different actions.
- Microsoft Learn documents no administrator setting to allow or prevent the removal (see the controls table), so you cannot stop individual users from choosing it.

## Cost and licensing

The OneDrive service description (Learn) says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan. The roadmap item names no separate licence for this feature and the sources show no meter or charge for it.

The only cost the sources point to is indirect: service desk communication and admin time. A licence or meter specific to the removal option is not yet published.

## Scope

The roadmap lists Worldwide (Standard Multi-Tenant), Desktop and General Availability, and its description refers to Windows. It lists no US Government clouds, but absence from the roadmap item is a record fact and not a statement that the feature is unavailable there.

Which account types the Photos experience supports is not stated for this feature. The OneDrive sync release notes describe browsing photos in OneDrive as available for personal Microsoft accounts, and Microsoft has not said whether the roadmap item changes that. Prerequisites, the minimum sync app version and the rollout mechanism are not stated.

## Governance guidance

### Before rollout

- Tell the service desk that the roadmap describes removing the Photos experience as separate from uninstalling the OneDrive app, and that it does not delete photos or files.
- Check the sync app versions on your Windows devices against the OneDrive sync release notes, because Microsoft has not said which version carries the removal option.
- Decide whether a user choice to move photo management to another app is acceptable for your managed devices, since no administrator setting for it is documented.

### At rollout

- Watch the roadmap item and the OneDrive sync release notes for the status to change from In development.
- Confirm on a pilot device where the uninstall option appears and what it removes before you write user guidance.

### After rollout

- Ask pilot users whether file sync carried on after they removed the Photos experience, and report any difference from the roadmap's description to Microsoft support.
- Update your service desk guidance once Microsoft publishes the Learn page for the feature.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether people can uninstall the OneDrive Photos experience</strong><br><small>Tenant</small><br><small class="controls__note">No administrator setting is documented at the time of writing (November 2026). The roadmap describes the option as available to people.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no administrator control over whether people can uninstall the OneDrive Photos experience at the time of writing (November 2026), and the table records that gap. The OneDrive Group Policy and Intune settings page lists no setting that mentions it.

This row concerns the removal option only. Other OneDrive policies on that page govern the sync app and are not confirmed to govern this feature.

## Open questions

- Is "OneDrive Photos experience" the same as the "Browse your photos in OneDrive" view that the sync release notes describe, and does it apply to work or school accounts? Watch the roadmap item and the OneDrive sync release notes.
- Will an administrator be able to allow, hide or block the uninstall option? Watch Message center and the OneDrive policies page on Microsoft Learn.
- Which sync app version includes the uninstall option, and how is it rolled out?
- What does removal delete from the device, and can people reinstall the Photos experience afterwards?

<!-- rationale
risk: Low. The roadmap says removal leaves the OneDrive app, file sync and files untouched, and it describes a choice for people, not a new data flow.
cost: Low. Only admin time and service desk communication are known costs; no licence or meter for this feature is published, and OneDrive is included in Microsoft 365 and Office 365 plans.
impact: Low. Only people on Windows desktops who choose to remove the Photos experience notice it, and the roadmap says their sync is unaffected.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Risk assessment: Change & support / applicability: Administrators cannot stop individual users from choosing to uninstall the Photos experience. | Found: Searched: "OneDrive Photos" "prevent" "uninstall"; OneDrive Photos policy PowerShell registry disable uninstall. Read use-group-policy and Browse and manage your photos on Windows. Neither states that administrators cannot prevent removal. | Fix: Delete ', so you cannot stop individual users from choosing it'. Keep only 'Microsoft Learn documents no administrator setting to allow or prevent the removal (see the controls table).'
- [unsupported, major] Risk assessment: Data exposure / behaviour: Removal causes no change to what OneDrive stores or syncs. | Found: Searched: OneDrive Photos removal cached indexed data minimum version personal work school accounts; "OneDrive Photos" "uninstall". Read the roadmap and sync-release-notes. They promise no file deletion or sync interruption, not an unchanged inventory of stored or synced data. | Fix: Replace 'No change to what OneDrive stores or syncs:' with 'No file deletion or sync interruption is planned:'. Keep the following attribution to the roadmap.
-->
