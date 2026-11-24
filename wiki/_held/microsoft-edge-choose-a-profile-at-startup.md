---
title: "Microsoft Edge: choose a profile at startup with a profile picker"
slug: "microsoft-edge-choose-a-profile-at-startup"
roadmapId: 581721
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Microsoft Edge plans a startup profile picker (work, personal, new or guest) with a Show on startup setting. Target February CY2027. No admin action is announced; the ProfilePickerAvailability policy governs the picker."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "February CY2027"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "unknown"
action: "review"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap record names no licence for this feature, and the Microsoft Learn policy pages that govern the picker state no licence requirement."
audiences: ["m365-admin","end-user","security"]
tags: ["microsoft-edge","user-profiles"]
sources:
  - title: "Microsoft 365 Roadmap 581721"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=581721"
    kind: "roadmap"
  - title: "ProfilePickerAvailability"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability"
    kind: "learn"
  - title: "BrowserGuestModeEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled"
    kind: "learn"
  - title: "BrowserAddProfileEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled"
    kind: "learn"
  - title: "User data and privacy in Microsoft Edge"
    url: "https://learn.microsoft.com/legal/microsoft-edge/privacy"
    kind: "learn"
videos: []
related: ["microsoft-edge-allow-m365-authentication-popups-in-work-profiles","microsoft-edge-v-158-inline-switching-for-workspaces"]
controls:
  - governs: "Whether users can open the profile picker, including at startup"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Profile settings > Profile picker availability"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability"
    api:
      kind: "other"
      call: "Registry value ProfilePickerAvailability (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability"
    note: "Windows and macOS version 159 or later. Mandatory only. False skips the picker at startup. Not confirmed by name for the roadmap feature."
  - governs: "Whether users can browse in guest profiles"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Enable guest mode"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled"
    api:
      kind: "other"
      call: "Registry value BrowserGuestModeEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled"
    note: "Existing control for guest profiles; the page does not mention the startup picker."
  - governs: "Whether users can create profiles with Add profile"
    scope: "tenant"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Enable profile creation from the Identity flyout menu or the Settings page"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled"
    api:
      kind: "other"
      call: "Registry value BrowserAddProfileEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled"
    note: "Existing control for the Identity flyout menu and the Settings page; the page does not mention the startup picker."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-24"
    note: "First briefing for the Edge startup profile picker; documents the existing ProfilePickerAvailability, guest and add-profile policies."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 49
  unconfirmed: 0
  contradicted: 5
  attempts: 1
  hash: "c826fac00f3163c0c8ac18fb6d806db1"
---

## What's changing

Microsoft Edge is adding a profile picker at startup. The roadmap item says users can choose among their work, personal or other available profiles, add a new profile, or browse as a guest before the browser opens. A **Show on startup** setting lets users control whether the picker appears at launch.

Microsoft Learn does not describe this feature or the **Show on startup** setting yet, so what is said above about behaviour is the roadmap's description. Learn does document an Edge policy, ProfilePickerAvailability, which it describes as controlling whether users can open the profile picker. With the policy set to false, the picker is not available, its entry is hidden from the profile menu, and the browser skips the picker at startup. Learn lists the policy for Windows and macOS from version 159 and not for Android or iOS.

The roadmap item is **In development**, targeted for February CY2027, with the release phase General Availability. It lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. No Message Center post was supplied for it, and Microsoft has not stated whether the picker appears at launch by default.

## Why it matters

The picker changes the first thing a user sees when Edge starts. For organisations that expect work browsing to happen in a work profile, it gives users a visible choice between work, personal and guest browsing, so it affects where browsing data and activity end up. That matters to security and compliance teams whose controls are tied to the signed-in work profile.

Microsoft has not stated what happens on arrival if nobody acts, so plan on the basis that no source says existing behaviour changes, and test it in a pilot ring once the feature reaches a preview or stable build. Decide before then whether the picker, guest browsing and profile creation fit your policy.

## Risk assessment

**Data exposure**
- The picker offers a guest option. Learn says a guest profile does not import browsing data from existing profiles and deletes browsing data when all guest profiles are closed. The BrowserGuestModeEnabled row covers whether guest browsing is allowed.
- A choice of profile at launch means a user could open work sites in a personal profile. Learn describes profiles as separating browsing data into independent profiles, so that browsing sits outside the work profile.

**Security & identity**
- The picker offers adding a new profile. Learn describes BrowserAddProfileEnabled as the policy for the **Add profile** option on the Identity flyout menu or the Settings page; whether it also governs the picker's add-profile entry is not documented.

**Autonomy & actions**
- No change: the roadmap describes a user's choice at launch and names no autonomous action.

**Change & support**
- Users who see a picker where they used to see their browser straight away may raise support calls. ProfilePickerAvailability set to false makes the browser follow its normal startup behaviour instead.

## Cost and licensing

The roadmap record names no licence and no meter for this feature, and the Learn pages for the policies that govern the picker state no licence requirement. Licensing for the startup profile picker is not yet published. No charge is documented for it at the time of writing (November 2026).

The cost the sources show is indirect: admin time to decide the policy settings and to tell users what they will see at launch.

## Scope

The roadmap item lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform, with General Availability as the release phase. It does not list GCC, GCC High or DoD.

The ProfilePickerAvailability policy page lists Windows and macOS from version 159, and Android and iOS as not supported. It can be set as mandatory, not as recommended, and does not apply per profile. Which Edge version carries the picker is not stated in the roadmap record.

## Governance guidance

### Before rollout
- Check which users run Edge with more than one profile, and ask the desktop team who sets Edge policy (Group Policy or the registry).
- Decide whether guest browsing and profile creation are allowed in your organisation, using the BrowserGuestModeEnabled and BrowserAddProfileEnabled rows in the controls table.
- Decide whether you want the picker at all, using the ProfilePickerAvailability row, and record the decision with the Edge version your devices run.

### At rollout
- Pilot the picker on a small group once a build carries it, and check what the picker offers when guest mode or profile creation is disabled.
- Tell users what the picker is and that they choose the profile for each session.

### After rollout
- Review support calls about the wrong profile being opened and adjust the policy settings if the picker causes them.
- Re-read the roadmap item and the Learn policy page when the status moves from In development.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can open the profile picker, including at startup</strong><br><small>Tenant</small><br><small class="controls__note">Windows and macOS version 159 or later. Mandatory only. False skips the picker at startup. Not confirmed by name for the roadmap feature.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Profile settings › Profile picker availability <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value ProfilePickerAvailability (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can browse in guest profiles</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for guest profiles; the page does not mention the startup picker.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Enable guest mode <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value BrowserGuestModeEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can create profiles with Add profile</strong><br><small>Tenant</small><br><small class="controls__note">Existing control for the Identity flyout menu and the Settings page; the page does not mention the startup picker.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Enable profile creation from the Identity flyout menu or the Settings page <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value BrowserAddProfileEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls below are existing Edge policies. Learn describes ProfilePickerAvailability in terms of the profile picker and its startup behaviour, but no Microsoft page read links it to this roadmap item by name, and the **Show on startup** setting is a user setting that Learn does not describe.

The ProfilePickerAvailability page says the policy does not prevent users from switching profiles or creating profiles through other available entry points, and that other profile policies continue to apply. The BrowserAddProfileEnabled page says that to restrict profile use further, administrators configure the BrowserSignin and RestrictSigninToPattern policies, which are not rows here. All three policies are Group Policy or registry settings on Windows and macOS, and none of them is a Microsoft 365 admin centre setting.

## Open questions

- Is the picker shown at startup by default, and does the **Show on startup** setting default to on? Watch the roadmap item and the Edge release notes on Microsoft Learn.
- Does ProfilePickerAvailability govern the picker this roadmap item describes, and can an administrator set **Show on startup** by policy? Watch the policy page on Microsoft Learn.
- How does the picker treat guest and add-profile entries when BrowserGuestModeEnabled or BrowserAddProfileEnabled is disabled?
- Which licence, if any, covers the picker? Watch the Microsoft Edge documentation on Microsoft Learn.

<!-- rationale
risk: Low. The roadmap describes choosing among available profiles, a new profile or guest before the browser opens, and names no new data access; the default for the picker is not stated.
cost: Low. The roadmap record names no licence or meter, so the only cost the sources show is admin time to set policy and brief users. A licence statement for this feature is not yet published.
impact: Medium. Anyone who keeps a work and a personal profile would see a choice before Edge opens if the picker is shown at launch; whether it appears by default is not stated.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] What's changing / absence: Microsoft Learn does not describe this startup profile-picker feature yet. | Found: This policy controls whether users can open the profile picker in Microsoft Edge. The profile picker lets users choose a profile to open and manage their profiles. | Fix: Replace the sentence with 'The roadmap describes the profile choices and Show on startup setting; Microsoft Learn documents the profile picker and its startup policy behaviour through ProfilePickerAvailability.' Keep the narrower absence concerning the Show on startup setting. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability
- [contradicted, blocker] Risk assessment: Security & identity / absence: Whether BrowserAddProfileEnabled governs profile creation through the picker is not documented. | Found: This policy applies to profile creation from the Microsoft Edge user interface. | Fix: Replace 'whether it also governs the picker's add-profile entry is not documented' with 'the policy page says it applies to profile creation from the Microsoft Edge user interface'. Keep the pilot advice about how disabled entries are displayed; the page does not describe their appearance. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled
- [contradicted, blocker] Governance controls / admin-path: All three policies are Group Policy or registry settings on Windows and macOS. | Found: This article describes how to configure Microsoft Edge on macOS using a property list (.plist) file. | Fix: Replace with 'The table gives Windows Group Policy and registry settings. On macOS, Microsoft documents the preference keys ProfilePickerAvailability, BrowserGuestModeEnabled and BrowserAddProfileEnabled in a com.microsoft.Edge.plist file.' Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge-on-mac and qualify each existing row's surfaces as Windows. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge-on-mac
- [contradicted, blocker] Governance controls / absence: None of these Edge browser policies is a Microsoft 365 admin centre setting. | Found: The Microsoft Edge management service is a platform in the Microsoft 365 admin center that enables admins to easily configure Microsoft Edge browser settings for their organization. | Fix: Remove 'and none of them is a Microsoft 365 admin centre setting'. The Edge management service documents browser policy configuration in that centre; the briefing need not add a new control row or assert that each named policy appears in its current setting catalogue. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-management-service
- [contradicted, blocker] controls[0].scope; controls[1].scope; controls[2].scope; Governance controls table / applicability: The listed Group Policy and registry controls have tenant scope. | Found: You can scope policy settings to either the Computer Configuration or User Configuration by selecting the appropriate node as described below. | Fix: Set all three controls[].scope values to 'other' and add 'Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide' to their notes. Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: The Group Policy path is Administrative Templates > Microsoft Edge > Profile settings > Profile picker availability. | Found: GP name: Profile picker availability GP path (Mandatory): Administrative Templates/Microsoft Edge/Profile settings | Fix: Use 'Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Profile settings > Profile picker availability' for computer-scoped domain Group Policy. Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge for the entry route; User Configuration is the alternative user scope. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability
- [supported, minor] controls[1].ui / admin-path: The Group Policy path is Administrative Templates > Microsoft Edge > Enable guest mode. | Found: GP name: Enable guest mode GP path (Mandatory): Administrative Templates/Microsoft Edge | Fix: Use 'Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Enable guest mode' for computer-scoped domain Group Policy. Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge for the entry route; User Configuration is the alternative user scope. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled
- [supported, minor] controls[2].ui / admin-path: The Group Policy path ends at Enable profile creation from the Identity flyout menu or the Settings page under Microsoft Edge. | Found: GP name: Enable profile creation from the Identity flyout menu or the Settings page GP path (Mandatory): Administrative Templates/Microsoft Edge | Fix: Use 'Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Enable profile creation from the Identity flyout menu or the Settings page' for computer-scoped domain Group Policy. Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge; User Configuration is the alternative user scope. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled
- [supported, minor] controls[0].note; Governance controls; Open questions / applicability: The picker policy is not confirmed by name for this roadmap item. | Found: the browser skips the profile picker at startup and follows its normal browser startup behavior. | Fix: Replace 'Not confirmed by name for the roadmap feature' and the corresponding prose caveat with 'Controls availability of the profile picker, including at startup.' Remove the question asking whether this policy governs the picker; retain the question about configuring Show on startup. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability
-->
