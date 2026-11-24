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
  - title: "Configure Microsoft Edge policy settings on Windows devices"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge"
    kind: "learn"
  - title: "Configure Microsoft Edge policy settings for macOS using a property list"
    url: "https://learn.microsoft.com/deployedge/configure-microsoft-edge-on-mac"
    kind: "learn"
videos: []
related: ["microsoft-edge-allow-m365-authentication-popups-in-work-profiles","microsoft-edge-v-158-inline-switching-for-workspaces"]
controls:
  - governs: "Whether users can open the profile picker, including at startup"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates), Windows"
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Profile settings > Profile picker availability"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability"
    api:
      kind: "other"
      call: "Registry value ProfilePickerAvailability (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability"
    note: "Version 159 or later. Mandatory only. False skips the picker at startup. Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide."
  - governs: "Whether users can browse in guest profiles"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates), Windows"
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Enable guest mode"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled"
    api:
      kind: "other"
      call: "Registry value BrowserGuestModeEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled"
    note: "Existing control for guest profiles. Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide."
  - governs: "Whether users can create profiles with Add profile"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates), Windows"
      path: "Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Enable profile creation from the Identity flyout menu or the Settings page"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled"
    api:
      kind: "other"
      call: "Registry value BrowserAddProfileEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled"
    note: "Covers Add profile on the Identity flyout menu and the Settings page. Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide."
confidence: "medium"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-11-24T00:13:11"
changes:
  - date: "2026-11-24"
    note: "First briefing for the Edge startup profile picker; documents the existing ProfilePickerAvailability, guest and add-profile policies."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 54 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the check: Learn does document the picker policy, BrowserAddProfileEnabled covers UI profile creation, macOS keys added, admin centre denial removed, control scope and Windows paths corrected."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 61 statements confirmed"
version: 2
verification:
  status: "verified"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 61
  confirmed: 61
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "cdcf98eca92e943d134f9c73b81b859d"
---

## What's changing

Microsoft Edge is adding a profile picker at startup. The roadmap item says users can choose among their work, personal or other available profiles, add a new profile, or browse as a guest before the browser opens. A **Show on startup** setting lets users control whether the picker appears at launch.

The roadmap describes the profile choices and the **Show on startup** setting; Microsoft Learn documents the profile picker and its startup policy behaviour through ProfilePickerAvailability, and does not yet describe the **Show on startup** setting. Learn describes ProfilePickerAvailability as controlling whether users can open the profile picker. With the policy set to false, the picker is not available, its entry is hidden from the profile menu, and the browser skips the picker at startup. Learn lists the policy for Windows and macOS from version 159 and not for Android or iOS.

The roadmap item is **In development**, targeted for February CY2027, with the release phase General Availability. It lists Worldwide (Standard Multi-Tenant) as the cloud and Web as the platform. No Message Center post was supplied for it, and Microsoft has not stated whether the picker appears at launch by default.

## Why it matters

The picker changes the first thing a user sees when Edge starts. For organisations that expect work browsing to happen in a work profile, it gives users a visible choice between work, personal and guest browsing, so it affects where browsing data and activity end up. That matters to security and compliance teams whose controls are tied to the signed-in work profile.

Microsoft has not stated what happens on arrival if nobody acts, so plan on the basis that no source says existing behaviour changes, and test it in a pilot ring once the feature reaches a preview or stable build. Decide before then whether the picker, guest browsing and profile creation fit your policy.

## Risk assessment

**Data exposure**
- The picker offers a guest option. Learn says a guest profile does not import browsing data from existing profiles and deletes browsing data when all guest profiles are closed. The BrowserGuestModeEnabled row covers whether guest browsing is allowed.
- A choice of profile at launch means a user could open work sites in a personal profile. Learn describes profiles as separating browsing data into independent profiles, so that browsing sits outside the work profile.

**Security & identity**
- The picker offers adding a new profile. Learn describes BrowserAddProfileEnabled as the policy for the **Add profile** option on the Identity flyout menu or the Settings page; the policy page says it applies to profile creation from the Microsoft Edge user interface.

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
<tr><td data-label="Control"><strong>Whether users can open the profile picker, including at startup</strong><br><small class="controls__note">Version 159 or later. Mandatory only. False skips the picker at startup. Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates), Windows</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge › Profile settings › Profile picker availability <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value ProfilePickerAvailability (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/profilepickeravailability" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can browse in guest profiles</strong><br><small class="controls__note">Existing control for guest profiles. Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates), Windows</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge › Enable guest mode <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value BrowserGuestModeEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browserguestmodeenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether users can create profiles with Add profile</strong><br><small class="controls__note">Covers Add profile on the Identity flyout menu and the Settings page. Applies to targeted Windows computers or users through Group Policy or registry configuration; not automatically tenant-wide.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates), Windows</strong><br>Computer Configuration › Policies › Administrative Templates › Microsoft Edge › Enable profile creation from the Identity flyout menu or the Settings page <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value BrowserAddProfileEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/browseraddprofileenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The controls below are existing Edge policies. Learn describes ProfilePickerAvailability as controlling whether users can open the profile picker, including its behaviour at startup. Learn does not describe the **Show on startup** setting at the time of writing (November 2026).

The ProfilePickerAvailability page says the policy does not prevent users from switching profiles or creating profiles through other available entry points, and that other profile policies continue to apply. The BrowserAddProfileEnabled page says that to restrict profile use further, administrators configure the BrowserSignin and RestrictSigninToPattern policies, which are not rows here. The table gives Windows Group Policy and registry settings. On macOS, Microsoft documents the preference keys ProfilePickerAvailability, BrowserGuestModeEnabled and BrowserAddProfileEnabled in a com.microsoft.Edge.plist file ([Configure Microsoft Edge policy settings for macOS](https://learn.microsoft.com/deployedge/configure-microsoft-edge-on-mac)).

## Open questions

- Is the picker shown at startup by default, and does the **Show on startup** setting default to on? Watch the roadmap item and the Edge release notes on Microsoft Learn.
- Can an administrator set **Show on startup** by policy? Watch the policy page on Microsoft Learn.
- How does the picker treat guest and add-profile entries when BrowserGuestModeEnabled or BrowserAddProfileEnabled is disabled?
- Which licence, if any, covers the picker? Watch the Microsoft Edge documentation on Microsoft Learn.

<!-- rationale
risk: Low. The roadmap describes choosing among available profiles, a new profile or guest before the browser opens, and names no new data access; the default for the picker is not stated.
cost: Low. The roadmap record names no licence or meter, so the only cost the sources show is admin time to set policy and brief users. A licence statement for this feature is not yet published.
impact: Medium. Anyone who keeps a work and a personal profile would see a choice before Edge opens if the picker is shown at launch; whether it appears by default is not stated.
-->
