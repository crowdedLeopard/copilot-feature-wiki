---
title: "OneDrive: guided rename and move flow for max path sync errors on Windows"
slug: "onedrive-improved-max-path-error-experience-on-desktop"
roadmapId: 557563
topic: "modern-work"
products: ["OneDrive"]
summary: "The OneDrive sync client on Windows will show how far a path is over the 520-character limit and guide users to rename or move items. Microsoft says no admin action is required; the roadmap target is January CY2027."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "January CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can be bought as a standalone plan. A licence or price specific to this experience is not yet published."
audiences: ["m365-admin","service-owner","end-user","change-adoption"]
tags: ["onedrive","sync-app","user-experience"]
sources:
  - title: "Microsoft 365 Roadmap 557563"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=557563"
    kind: "roadmap"
  - title: "MC1422063: (Updated) OneDrive for Business: Improved Windows Desktop sync error messages for max path length"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1422063"
    kind: "message-center"
  - title: "What are the file path length limits?"
    url: "https://support.microsoft.com/onedrive/what-are-file-path-length-limits"
    kind: "docs"
  - title: "SharePoint limits"
    url: "https://learn.microsoft.com/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits"
    kind: "learn"
  - title: "OneDrive service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/onedrive-for-business-service-description"
    kind: "learn"
  - title: "OneDrive Sync Release Notes"
    url: "https://learn.microsoft.com/sharepoint/sync-release-notes"
    kind: "learn"
  - title: "IT Admins - Use OneDrive policies to control sync settings"
    url: "https://learn.microsoft.com/sharepoint/use-group-policy"
    kind: "learn"
videos: []
related: ["onedrive-command-line-tool-for-the-onedrive-sync-app"]
controls:
  - governs: "Length of the local OneDrive folder name (existing control; shortens local paths)"
    scope: "tenant"
    ui:
      surface: "Group Policy Management Editor"
      path: "Computer Configuration > Policies > Administrative Templates > OneDrive > Set a custom name for the OneDrive folder"
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    api:
      kind: "other"
      call: "[HKLM\\SOFTWARE\\Policies\\Microsoft\\OneDrive\\CustomSyncRootFolderName] \"TenantID\"=\"CustomFolderName\""
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    note: "Applies to: Group Policy. Existing control, not specific to this feature: it shortens paths but does not govern the new rename and move experience."
  - governs: "Switch for the guided max path rename and move experience"
    scope: "tenant"
    ui: null
    api: null
    note: "No policy documented at the time of writing (November 2026)."
confidence: "medium"
created: "2026-11-20"
updated: "2026-11-20"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-20"
    note: "First briefing for this item: guided rename and move flow for max path sync errors, with the January 2027 rollout window from MC1422063."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 60 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-20"
    note: "Corrected after verification: the 520-character sync limit is now explained from Microsoft Support (400-character local path plus 120-character root folder), and the custom folder name policy is described as an existing path-length control."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 65 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 65
  confirmed: 65
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "bc9a9562391d900211cd0cd94b22eddf"
---

## What's changing

The OneDrive sync client on Windows desktop will give users a guided way to fix file and folder paths that exceed the supported 520-character limit. The roadmap item and Microsoft's notice MC1422063 say the experience will show exactly how many characters a path is over the limit and offer a guided flow to rename or move the affected items so they can sync.

MC1422063 describes the current behaviour: the error message states how far the path exceeds the limit and asks the user to shorten it, File Explorer limitations may prevent renaming paths over 260 characters, and the sync client may stop syncing until the issue is fixed. With the update, the sync client keeps running when a max path error occurs. The rename experience shows the over-limit character count, highlights which items in the path can be renamed and allows renames even when the path exceeds 260 characters. The move experience shows over-limit counts in a guided interface and displays warning dialogs for over-limit shared items in OneDrive and for over-limit items in shortcuts.

The roadmap item is In development with a target of January CY2027, for General Availability in the Worldwide (Standard Multi-Tenant) cloud on Desktop. MC1422063 was updated on 27 October 2026 and gives a rollout beginning January 2027 (previously end of October 2026), expected to complete by end of January 2027 (previously end of November 2026). It sets no act-by date. Microsoft Learn does not describe this experience yet at the time of writing (November 2026), so the behaviour above is the roadmap's and the notice's description.

## Why it matters

This is a support-load change. Microsoft's notice calls max path errors one of the most commonly reported OneDrive sync issues and expects the update to reduce max-path-related support tickets. If your helpdesk scripts tell users to shorten paths by hand, they will describe a dialog that no longer matches what users see once the update reaches them.

MC1422063 says the update is available automatically through the sync client and that no admin action is required, which fits a default of on. Expect users to run into the dialogs without warning unless you brief support teams first. Learn's SharePoint limits page states a 400-character limit on the decoded file path for OneDrive and SharePoint in Microsoft 365, while the roadmap and notice cite 520 characters for the sync client. Microsoft Support describes the 520-character sync path as the combination of the local path (up to 400 characters) and the OneDrive root folder (up to 120 characters).

## Risk assessment

**Data exposure**

- MC1422063 states that no compliance considerations were identified and that the update does not change how customer data is stored, processed or accessed.
- The move dialogs warn about over-limit shared items in OneDrive and over-limit items in shortcuts. Confirm in a pilot what a user sees before moving shared content, because Microsoft's notice describes the warning but not its wording or options.

**Security & identity**

- No change documented: the notice and roadmap record describe no new permissions, sign-in or identity behaviour.

**Autonomy & actions**

- Users start the rename and move steps themselves through the guided flow; the notice describes no automatic renaming or moving.
- Renaming and moving change item names and locations, so helpdesk staff should expect questions from users who renamed items to clear an error.

**Change & support**

- The sync client keeps running on a max path error instead of potentially stopping, according to MC1422063, which changes what users report and what support should ask for.
- The rollout dates slipped once: MC1422063 now gives January 2027, previously end of October 2026. Plan support communication against the January 2027 window and recheck Message center for further changes.

## Cost and licensing

No licence or charge is named for this experience in the roadmap record or in MC1422063. The OneDrive service description says OneDrive is included in Microsoft 365 and Office 365 plans, in SharePoint plans, and can also be purchased as a standalone plan, and its feature table lists sync features as available across plan types. A price, meter or licence specific to this experience is not yet published.

The indirect cost is time. MC1422063 suggests informing helpdesk and support teams and updating internal documentation for resolving OneDrive sync issues.

## Scope

MC1422063 lists all users of the OneDrive sync client on Windows desktop as affected, and names OneDrive for Business (the Windows desktop sync client) as the service. The roadmap record lists the Desktop platform, the Worldwide (Standard Multi-Tenant) cloud and the General Availability release phase. No other cloud is listed on the roadmap item; that is a statement about the record, not a statement that the feature is unavailable elsewhere.

MC1422063 says the update reaches users automatically through the sync client and that no admin action is required. It names no prerequisite, role or licence, and gives no sync client version number for the change.

## Governance guidance

### Before rollout

- Brief helpdesk and support teams on the changed error experience, as MC1422063 recommends: the over-limit character count, the rename dialog and the move dialog.
- Update internal documentation for resolving OneDrive sync issues so it no longer tells users to shorten paths by hand in File Explorer.
- Decide whether to shorten the local OneDrive folder name with the existing custom folder name policy, which Learn says increases the available path length for nested folders and files.

### At rollout

- Pilot with a few users who already hit max path errors and record the dialogs they see, including the warnings for shared items and shortcuts.
- Check Message center for MC1422063 updates, because the timeline has already moved once.

### After rollout

- Compare the volume of max-path tickets with the period before the update to see whether the expected reduction in tickets appears.
- Capture user questions about renamed or moved items and add them to the support documentation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Length of the local OneDrive folder name (existing control; shortens local paths)</strong><br><small>Tenant</small><br><small class="controls__note">Applies to: Group Policy. Existing control, not specific to this feature: it shortens paths but does not govern the new rename and move experience.</small></td><td data-label="Admin UI"><strong>Group Policy Management Editor</strong><br>Computer Configuration › Policies › Administrative Templates › OneDrive › Set a custom name for the OneDrive folder <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>[HKLM\SOFTWARE\Policies\Microsoft\OneDrive\CustomSyncRootFolderName] &quot;TenantID&quot;=&quot;CustomFolderName&quot;</code> <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Switch for the guided max path rename and move experience</strong><br><small>Tenant</small><br><small class="controls__note">No policy documented at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

Microsoft Learn documents no policy for this experience at the time of writing (November 2026): its OneDrive policy list has no setting for the max path error or the rename and move dialogs. MC1422063 describes the update as available automatically through the sync client.

An existing control related to path length is the custom folder name policy. It does not govern the new experience; it shortens the sync root folder name for new users, and existing users must unlink and relink their account for it to apply. The page notes that the full sync root folder path cannot exceed 120 characters and that the policy applies to Group Policy, not Intune.

## Open questions

- Which sync client build includes the guided rename and move flow? Watch the OneDrive Sync Release Notes page on Learn.
- Will Microsoft provide an admin setting to turn the guided experience off? Watch the OneDrive policies page on Learn and Message center.
- What exactly do the warnings for over-limit shared items and shortcuts say, and what can the user do after seeing them? Watch the Microsoft Support article linked from MC1422063.

<!-- rationale
risk: Low. This is an error-handling and repair flow inside the sync client, and Microsoft's notice MC1422063 says it does not change how customer data is stored, processed or accessed.
cost: Low. Neither the roadmap record nor MC1422063 names a licence or charge; the only cost the sources show is helpdesk briefing and documentation time.
impact: Medium. MC1422063 lists all users of the OneDrive sync client on Windows as affected, but only people whose paths exceed the limit will see the new rename and move dialogs.
-->
