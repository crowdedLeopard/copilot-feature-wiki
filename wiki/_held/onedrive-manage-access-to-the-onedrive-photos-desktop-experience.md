---
title: "OneDrive Photos on Windows: policies for personal account sign-in and app blocking"
slug: "onedrive-manage-access-to-the-onedrive-photos-desktop-experience"
roadmapId: 568931
topic: "modern-work"
products: ["OneDrive"]
summary: "Windows 11 is getting an updated Photos app that shows OneDrive photos. Microsoft says existing policies govern personal account sign-in; most organisations need no change but should review Store, AppLocker and OneDrive policies."
status: "rolling-out"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Desktop"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "high"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published. Neither the roadmap item, MC1518030 nor the Photos release notes name a licence or meter for the updated Photos experience."
audiences: ["m365-admin","security","compliance","change-adoption"]
tags: ["onedrive","admin-controls","policy","data-governance","user-experience","windows-photos"]
sources:
  - title: "Microsoft 365 Roadmap 568931"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568931"
    kind: "roadmap"
  - title: "MC1518030: Updated Photos experience on Windows 11"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1518030"
    kind: "message-center"
  - title: "IT Admins - Use OneDrive policies to control sync settings"
    url: "https://learn.microsoft.com/sharepoint/use-group-policy"
    kind: "learn"
  - title: "Configure settings with Intune"
    url: "https://learn.microsoft.com/sharepoint/configure-sync-intune"
    kind: "learn"
  - title: "Policy CSP - ApplicationManagement"
    url: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-applicationmanagement"
    kind: "learn"
  - title: "Use Group Policy to control Lists sync settings"
    url: "https://learn.microsoft.com/sharepoint/lists-sync-policies"
    kind: "learn"
  - title: "Photos release notes"
    url: "https://learn.microsoft.com/windows-insider/release-notes/apps/photos"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether users can sign in to OneDrive with a personal Microsoft account (DisablePersonalSync)"
    scope: "user"
    ui:
      surface: "Microsoft Intune admin center"
      path: "Devices > Configuration > Create > Configuration settings > Add settings > OneDrive"
      docs: "https://learn.microsoft.com/sharepoint/configure-sync-intune"
    api:
      kind: "other"
      call: "Registry value [HKCU\\SOFTWARE\\Policies\\Microsoft\\OneDrive] \"DisablePersonalSync\"=dword:00000001"
      docs: "https://learn.microsoft.com/sharepoint/use-group-policy"
    note: "Create a Windows 10 and later, Settings catalog profile first. MC1518030 says this policy prevents personal OneDrive account sign-in in Photos; the Learn page describes it for the sync app."
  - governs: "Whether Microsoft Store apps, including the updated Photos, can launch and update (DisableStoreApps)"
    scope: "other"
    ui:
      surface: "Group Policy"
      path: "Windows Components > Store"
      docs: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-applicationmanagement"
    api:
      kind: "other"
      call: "OMA-URI ./Device/Vendor/MSFT/Policy/Config/ApplicationManagement/DisableStoreOriginatedApps, value 1"
      docs: "https://learn.microsoft.com/windows/client-management/mdm/policy-csp-applicationmanagement"
    note: "Computer Configuration. Learn says it applies only to Enterprise and Education editions and turns off all Store apps, not just Photos. MC1518030 says the Photos update is not installed on affected devices."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-10-27T23:05:02"
changes:
  - date: "2026-11-17"
    note: "First briefing: updated Photos app on Windows 11 and the existing policies Microsoft says govern personal account sign-in and app blocking."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 58 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-17"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "61422ada9bfbb0536c940526416207b1"
---

## What's changing

Windows 11 is getting an updated Photos app that can show photos and videos from the PC and from OneDrive in one place. The roadmap item describes it as new administrative controls for the OneDrive Photos experience on Windows, including whether users sign in with personal Microsoft accounts.

Microsoft's notice MC1518030 (published 2026-10-20, last updated 2026-10-23) describes the experience as a refreshed photo library, a native Photo Viewer for images opened from File Explorer or elsewhere in Windows, and an updated native photo editor. Users still find Photos in Start. People can use it with local content without signing in to OneDrive, and users who sign in with a work or school account can see their OneDrive photos alongside local content. The notice says the experience is coming to consumer and commercial devices and will continue to respect existing controls for app installation, updates and OneDrive access.

The notice gives the rollout as starting mid-October 2026 and completing by mid-December 2026: Windows Insiders from October 15, 2026, and an expected expansion to Windows 11 Retail users from October 26, 2026. It sets no act-by date. The roadmap item is marked Rolling out with a target of August CY2026, General Availability, Worldwide (Standard Multi-Tenant) and Desktop; the target date is earlier than the rollout start the notice gives, and the notice is the later, more specific statement. Microsoft's release notes for Insider flights describe a Gallery that brings together photos from the PC, OneDrive and iCloud.

The roadmap text speaks of controls OneDrive is adding, whereas the notice lists existing policies. Microsoft Learn describes no new Photos-specific setting at the time of writing (November 2026).

## Why it matters

This is a change to an app already on users' devices, so it reaches them whether or not anyone acts. The notice says no new or immediate configuration is required for most organisations. The decisions that remain are whether staff may sign in to Photos with personal Microsoft accounts on managed devices, and whether any rule that blocks or removes Photos still does so after the update.

Microsoft has not stated what Photos does by default about personal account sign-in. If you do not want personal accounts on managed devices, plan to set the policy rather than rely on the default. If you block Photos with AppLocker, the notice says the rules need to include the package Microsoft.OneDrive.Photos if you intend to keep blocking it.

## Risk assessment

**Data exposure**

- The updated Gallery can show photos from the PC, OneDrive and iCloud in one timeline, according to Microsoft's Insider release notes. Accessing an iCloud collection needs Apple's iCloud for Windows app. Decide whether mixing personal and work content in one app is acceptable on managed devices.
- A work or school account shows OneDrive photos alongside local content (MC1518030). DisableNucleusSync, per the notice, prevents the use of any OneDrive account in Photos.

**Security & identity**

- Per MC1518030, DisablePersonalSync prevents personal OneDrive account sign-in in Photos. Without it, Microsoft has not stated whether users can sign in to Photos with a personal Microsoft account on a managed device.
- These policies restrict OneDrive functionality in Photos and do not stop people using the app with local content (MC1518030).

**Autonomy & actions**

- No change documented: Microsoft Learn describes no autonomous or agent behaviour for the updated Photos app.

**Change & support**

- A rule that blocks Microsoft Photos by AppLocker packaged-app rule may stop working after the update unless it includes the package Microsoft.OneDrive.Photos (MC1518030).
- If DisableStoreApps is set, the notice says the update will not be installed on affected devices, so those devices keep the previous Photos app.
- Help desk staff will see a different Photos layout, viewer and editor; the notice recommends sharing the change with them.

## Cost and licensing

Microsoft has not published a licence requirement or meter for the updated Photos experience at the time of writing (November 2026). The roadmap item, MC1518030 and the Photos release notes name none. Users who sign in with a work or school account see their OneDrive photos, so the OneDrive storage they already use is where those photos sit.

The costs the sources show are indirect: time to review policies, to update AppLocker rules, and to brief the help desk.

## Scope

The roadmap item lists OneDrive, Windows desktop, General Availability and the Worldwide (Standard Multi-Tenant) cloud. Microsoft's notice says the experience is coming to consumer and commercial Windows 11 devices, and that it expects to complete the rollout by mid-December 2026.

The policy statements in MC1518030 concern devices that receive the update. DisableStoreApps is described by Microsoft Learn as applying only to Enterprise and Education editions of Windows. The roles needed to configure each policy are not stated in the notice.

## Governance guidance

### Before rollout

- Identify devices where DisableStoreApps is set, because the notice says the update will not be installed on them.
- Decide whether personal Microsoft accounts may sign in to Photos on managed devices, and record who owns that decision.
- Review any AppLocker packaged-app rule that blocks Microsoft Photos and add the package Microsoft.OneDrive.Photos if the block should stay.

### At rollout

- Set DisablePersonalSync through Group Policy or an Intune settings catalog profile if personal account sign-in in Photos should be blocked.
- Brief the help desk on the new library, viewer and editor before the rollout reaches your users.

### After rollout

- Test on a pilot device that a blocked Photos app is still blocked and that personal sign-in behaves as the policy intends.
- Watch Message center and the Photos release notes for changes to the rollout window, which Microsoft's notice gives as mid-December 2026.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can sign in to OneDrive with a personal Microsoft account (DisablePersonalSync)</strong><br><small>User</small><br><small class="controls__note">Create a Windows 10 and later, Settings catalog profile first. MC1518030 says this policy prevents personal OneDrive account sign-in in Photos; the Learn page describes it for the sync app.</small></td><td data-label="Admin UI"><strong>Microsoft Intune admin center</strong><br>Devices › Configuration › Create › Configuration settings › Add settings › OneDrive <a href="https://learn.microsoft.com/sharepoint/configure-sync-intune" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value [HKCU\SOFTWARE\Policies\Microsoft\OneDrive] &quot;DisablePersonalSync&quot;=dword:00000001</code> <a href="https://learn.microsoft.com/sharepoint/use-group-policy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Store apps, including the updated Photos, can launch and update (DisableStoreApps)</strong><br><small class="controls__note">Computer Configuration. Learn says it applies only to Enterprise and Education editions and turns off all Store apps, not just Photos. MC1518030 says the Photos update is not installed on affected devices.</small></td><td data-label="Admin UI"><strong>Group Policy</strong><br>Windows Components › Store <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-applicationmanagement" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>OMA-URI ./Device/Vendor/MSFT/Policy/Config/ApplicationManagement/DisableStoreOriginatedApps, value 1</code> <a href="https://learn.microsoft.com/windows/client-management/mdm/policy-csp-applicationmanagement" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The table lists existing policies that MC1518030 says continue to apply to the updated Photos app. Microsoft Learn's own pages for these policies describe them in terms of the OneDrive sync app and the Store, not Photos, so the link to Photos rests on the notice.

DisableNucleusSync is also a control the notice names, which says it prevents the use of any OneDrive account in Photos. Microsoft Learn documents the DisableNucleusSync registry value under the Lists sync policy "Prevent Lists sync from running on this device" (policy name DisableListSync), and that page does not mention Photos. Check the effect on Lists sync before setting it. A path to configure it for Photos has not been read, so it has no row.

AppLocker packaged-app rules are the third control the notice names; the package to include is Microsoft.OneDrive.Photos. DisablePersonalSync is a user-scope registry value (HKCU); DisableStoreApps is a computer-scope policy.

## Open questions

- Are the "administrative controls" in the roadmap item the existing policies in MC1518030, or a new Photos-specific setting? Watch the roadmap item and the Learn pages for the OneDrive policies.
- Is personal Microsoft account sign-in in Photos allowed by default on managed devices when no policy is set? Watch Message center for updates to MC1518030.
- Does the Photos app respect DisableNucleusSync as the notice states, given that Learn documents it as the Lists sync policy? Watch the Lists sync policy page.
- Is a licence or any cost attached to the OneDrive features in Photos? Watch the Photos release notes and the OneDrive licensing pages.

<!-- rationale
risk: Medium. An updated Photos app is rolling out to commercial devices, and Microsoft has not stated whether personal Microsoft account sign-in is allowed in it unless a policy such as DisablePersonalSync is set.
cost: Low. The only cost the sources show is admin and help desk time; Microsoft has not published a licence or meter for the updated Photos experience.
impact: High. The updated Photos app replaces the Photos experience users already find in Start on Windows 11 devices, so most users on those devices will notice it.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Change & support / behaviour: Devices excluded from the update by DisableStoreApps keep the previous Photos app. | Found: Searched: "Photos" "DisableStoreApps" "previous". Opened MC1518030 and https://learn.microsoft.com/windows/client-management/mdm/policy-csp-applicationmanagement; neither guarantees retention of the old app, and the notice also covers removed apps. | Fix: Remove ', so those devices keep the previous Photos app'. Retain only: 'If DisableStoreApps is set, the notice says the update will not be installed on affected devices.'
- [contradicted, blocker] controls[0].ui; Governance controls table / admin-path: The Intune creation path is Devices > Configuration > Create > Configuration settings > Add settings > OneDrive. | Found: 4. Select Create. 5. In Basics, enter the following properties: ... 6. Select Next. 7. In Configuration settings, select Add settings. | Fix: Replace the path in front matter and the rendered table with 'Devices > Configuration > Create > Windows 10 and later > Settings catalog > Create > Basics > Next > Configuration settings > Add settings > OneDrive'. In the note say 'In Basics, enter a Name before selecting Next.' These are the intervening steps documented at https://learn.microsoft.com/sharepoint/configure-sync-intune; the existing note about creating a profile first does not match a path that starts by creating one. | Source: https://learn.microsoft.com/sharepoint/configure-sync-intune
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The governance checklist tells readers to update AppLocker rules, but the controls table has no AppLocker row. | Found: Review any AppLocker packaged-app rule that blocks Microsoft Photos and add the package Microsoft.OneDrive.Photos if the block should stay. The table contains only DisablePersonalSync and DisableStoreApps. | Fix: Remove the AppLocker configuration instruction from the Before rollout checklist; retain the existing explanation of Microsoft's AppLocker recommendation in Why it matters and Governance controls. Do not add a control row as part of this correction.
-->
