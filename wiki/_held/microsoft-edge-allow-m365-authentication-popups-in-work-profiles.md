---
title: "Microsoft Edge: allow Microsoft 365 authentication pop-ups in work profiles"
slug: "microsoft-edge-allow-m365-authentication-popups-in-work-profiles"
roadmapId: 561035
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge lets Microsoft 365 sign-in pop-ups bypass the pop-up blocker in work profiles by default. Admins can switch this off with the M365AuthPopupsInWorkEnabled policy. Plan for a short communication; no action is required to keep it on."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "November CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The M365AuthPopupsInWorkEnabled policy page and the roadmap item name no licence or meter for this policy."
audiences: ["m365-admin","security","service-owner"]
tags: ["microsoft-edge","policy","identity","authentication"]
sources:
  - title: "M365AuthPopupsInWorkEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365authpopupsinworkenabled"
    kind: "learn"
  - title: "DefaultPopupsSetting"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultpopupssetting"
    kind: "learn"
  - title: "Microsoft Edge: Allow M365 authentication popups in work profiles"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=561035"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Whether Microsoft 365 authentication pop-ups bypass the pop-up blocker in work profiles"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Identity and sign-in > Allow M365 authentication popups in work profiles"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365authpopupsinworkenabled"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value M365AuthPopupsInWorkEnabled (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365authpopupsinworkenabled"
    note: "Per profile, mandatory only. The macOS preference key is M365AuthPopupsInWorkEnabled. Not supported on Android or iOS."
  - governs: "Whether websites in general can show pop-up windows (existing control, not specific to sign-in pop-ups)"
    scope: "user"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Content settings > Default pop-up window setting"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultpopupssetting"
    api:
      kind: "other"
      call: "Registry: SOFTWARE\\Policies\\Microsoft\\Edge, value DefaultPopupsSetting (REG_DWORD)"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultpopupssetting"
    note: "Allows or blocks pop-ups on all sites. It does not single out Microsoft 365 sign-in pop-ups."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-23"
roadmapModified: "2026-09-08T22:57:21"
changes:
  - date: "2026-11-23"
    note: "First briefing for this item: covers the M365AuthPopupsInWorkEnabled policy, its Windows and macOS version 148 support and the existing pop-up setting."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 50 statements contradicted, 3 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-23"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 50
  confirmed: 44
  unconfirmed: 3
  contradicted: 3
  attempts: 1
  hash: "53ca9ad95d2b88c45a82d438232da44a"
---

## What's changing

Microsoft Edge allows Microsoft 365 authentication pop-ups to bypass the pop-up blocker in work profiles. The roadmap item describes the situation this way: when users are signed in with a work account, some Microsoft 365 sites (it names microsoft.com, cloud.microsoft and microsoft365.com) may open pop-up windows to Microsoft sign-in endpoints such as login.microsoftonline.com, login.live.com or login.microsoft.com, and those pop-ups are required to complete sign-in.

The roadmap item states that Edge now allows authentication pop-ups from Microsoft first party services by default, and that administrators can control the feature with the M365AuthPopupsInWorkEnabled policy. The policy's Learn page says that if you enable the policy or don't configure it, Microsoft 365 authentication pop-ups are allowed in work profiles. If you disable it, these pop-ups follow the default settings like other pop-ups.

The policy page lists Windows and macOS version 148 or later as supported, and Android and iOS as not supported. Its example sites are microsoft.com, cloud.microsoft and visualstudio.com, where the roadmap item names microsoft365.com in place of visualstudio.com. Treat the lists as examples, not as a complete list of the sites covered.

The roadmap item has status In development with a target of November CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) and the Web platform. The policy page is already published on Microsoft Learn, so the documentation is ahead of the roadmap status; the target date is Microsoft's plan, not a confirmed release.

## Why it matters

This is a change to default browser behaviour in work profiles that arrives without an administrator choosing it. Microsoft's policy page describes these pop-ups as required to complete sign-in, so the practical effect is on whether Microsoft 365 sign-in completes in Edge when the pop-up blocker is on.

If nobody acts, the roadmap item and the policy page both say the pop-ups are allowed. An organisation that deliberately blocks pop-ups, or that wants a closer view of which sites may open windows, should decide before the target month whether the default suits it, and tell its help desk what it means.

## Risk assessment

**Data exposure**

- No new data is read or stored. The policy changes whether Edge lets a pop-up window open; it does not change what the Microsoft 365 sites can reach.

**Security & identity**

- The policy lets Microsoft 365 authentication pop-ups bypass the pop-up blocker in work profiles. The page describes the pop-ups as going to login.microsoftonline.com, login.live.com or login.microsoft.com. Microsoft Learn does not state how Edge decides which sites count as Microsoft first party services, so confirm the boundary before relying on it in a security review.
- A profile signed in with a Microsoft account is outside the policy: the page lists "Applies to a profile that is signed in with a Microsoft account" as No.

**Autonomy & actions**

- No change: the policy governs pop-up windows for sign-in, and the sources describe no agent or automated action.

**Change & support**

- Disabling the policy returns these pop-ups to the default settings used for other pop-ups. The DefaultPopupsSetting page says that, when it is not configured, pop-up windows are blocked by default and users can change the setting, so expect support calls from any group where you disable the policy.
- Android and iOS are listed as not supported, so the policy gives mobile Edge no control.

## Cost and licensing

No licence, meter or price is named for this policy. The M365AuthPopupsInWorkEnabled policy page lists supported versions, the description and the policy settings, and names no licence. The roadmap item names none either. A licence requirement for this feature is not yet published.

The indirect cost is admin time to decide whether to keep the default, communicate it, and, if you disable the policy, deploy and test that setting on Windows and macOS devices.

## Scope

- **Users:** people signed in to Edge with a work account. The policy applies per profile and is mandatory only (it can be recommended: No). A profile signed in with a Microsoft account is outside it.
- **Platforms:** the policy page lists Windows and macOS version 148 or later. Android and iOS are not supported. The roadmap record lists the platform as Web.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) only.
- **Rollout:** status In development, target November CY2026, release phase General Availability. The policy applies when it is deployed, and the page lists Dynamic Policy Refresh as Yes.
- **Roles and prerequisites:** the policy page names no role or prerequisite.

## Governance guidance

### Before rollout

- Decide whether your organisation wants Microsoft 365 sign-in pop-ups allowed in work profiles, taking the default from the M365AuthPopupsInWorkEnabled row of the controls table.
- Check how pop-ups are configured today by looking for the Default pop-up window setting (DefaultPopupsSetting) policy in your Group Policy or macOS configuration.
- Confirm that Windows and macOS devices run Edge 148 or later, since the policy page lists those versions as supported.
- Brief the help desk that Microsoft 365 sign-in pop-ups may now open in Edge work profiles.

### At rollout

- Leave M365AuthPopupsInWorkEnabled not configured or enabled if you want the default behaviour; the policy page says both allow the pop-ups.
- Set M365AuthPopupsInWorkEnabled to Disabled for a pilot group first if you need these pop-ups to follow your existing pop-up rules.
- Test Microsoft 365 sign-in from microsoft.com and cloud.microsoft in a work profile after any change.

### After rollout

- Watch help desk tickets for sign-in windows that do not open, particularly from groups where the policy is disabled.
- Recheck the policy page and the roadmap item, because the roadmap status is still In development and the site lists may change.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether Microsoft 365 authentication pop-ups bypass the pop-up blocker in work profiles</strong><br><small>User</small><br><small class="controls__note">Per profile, mandatory only. The macOS preference key is M365AuthPopupsInWorkEnabled. Not supported on Android or iOS.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Identity and sign-in › Allow M365 authentication popups in work profiles <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365authpopupsinworkenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value M365AuthPopupsInWorkEnabled (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/m365authpopupsinworkenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether websites in general can show pop-up windows (existing control, not specific to sign-in pop-ups)</strong><br><small>User</small><br><small class="controls__note">Allows or blocks pop-ups on all sites. It does not single out Microsoft 365 sign-in pop-ups.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Content settings › Default pop-up window setting <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultpopupssetting" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry: SOFTWARE\Policies\Microsoft\Edge, value DefaultPopupsSetting (REG_DWORD)</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/defaultpopupssetting" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The M365AuthPopupsInWorkEnabled policy is mandatory only: the policy page lists Can be recommended: No. It is a Boolean per-profile policy and the page lists Dynamic Policy Refresh as Yes.

The DefaultPopupsSetting row is an existing control for pop-ups in general. It allows or blocks pop-ups on all sites and does not target Microsoft 365 sign-in pop-ups, so do not use it as a substitute for M365AuthPopupsInWorkEnabled. Microsoft Learn documents no admin centre switch or API for this policy at the time of writing (November 2026); the registry value and the macOS preference key are the documented automation surfaces.

## Open questions

- Which sites does Edge treat as Microsoft first party services? The roadmap item lists microsoft.com, cloud.microsoft and microsoft365.com, while the policy page lists visualstudio.com in place of microsoft365.com. Watch the policy page and the roadmap item.
- Will a licence be required, or will the feature carry a different entitlement from the policy itself? Neither the roadmap item nor the policy page says; watch the Learn page and Message center.
- When will the roadmap status move from In development, given that the policy page is already published for version 148? Watch the roadmap item.
- Are any sign-in endpoints beyond the three named in scope? The sources name login.microsoftonline.com, login.live.com and login.microsoft.com as examples ("such as" in the roadmap item); watch the policy page for a fuller list.

<!-- rationale
risk: Low. The change widens the pop-up blocker only for Microsoft 365 sign-in pop-ups in work profiles, and the M365AuthPopupsInWorkEnabled policy can switch it off.
cost: Low. The only cost the sources show is admin time to review the policy; no licence or meter is named for this policy, and licensing is not yet published.
impact: Medium. Behaviour changes by default for people signed in to Edge with a work account, but only for pop-ups that Microsoft 365 sites open to Microsoft sign-in endpoints.
-->

<!-- verifier-findings (2026-11-23, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: No new data is read. | Found: Searched: M365AuthPopupsInWorkEnabled data read stored privacy first party services list. Opened the policy and Intune What's new; they describe pop-up permission and sign-in, not whether additional data is read. | Fix: Remove 'No new data is read or stored.' Neither cited source establishes that assurance.
- [unsupported, major] Risk assessment: Data exposure / behaviour: No new data is stored. | Found: Searched: M365AuthPopupsInWorkEnabled data read stored privacy first party services list. Opened the policy and Intune What's new; neither states that this change stores no new data. | Fix: Remove 'No new data is read or stored.' Neither cited source establishes that assurance.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The policy does not change what Microsoft 365 sites can reach. | Found: Searched: M365AuthPopupsInWorkEnabled data read stored privacy first party services list. Read the policy and Intune What's new; they establish the pop-up exemption, but do not state an unchanged data-access boundary. | Fix: Remove '; it does not change what the Microsoft 365 sites can reach'. Keep the supported statement that the policy changes whether Edge lets a pop-up window open.
- [contradicted, blocker] Governance controls: final paragraph / absence: Microsoft Learn documents no admin centre switch for this pop-up policy. | Found: To see and configure these settings in Intune, create a Windows settings catalog profile Microsoft Edge > Identity and sign-in > Allow M365 authentication popups in work profiles | Fix: Remove the sentence 'Microsoft Learn documents no admin centre switch or API for this policy at the time of writing (November 2026); the registry value and the macOS preference key are the documented automation surfaces.' Microsoft documents this setting in the Intune Windows settings catalog; the sentence is also ambiguous about which pop-up policy it means. | Source: https://learn.microsoft.com/en-us/intune/intune-service/fundamentals/whats-new
- [contradicted, blocker] Governance controls: final paragraph / absence: Microsoft Learn documents no API for this pop-up policy. | Found: Update the properties of a deviceManagementConfigurationSetting object. PATCH /deviceManagement/configurationPolicies/{deviceManagementConfigurationPolicyId}/settings/{deviceManagementConfigurationSettingId} settingInstance | Fix: Remove the same 'no admin centre switch or API' sentence. Microsoft documents Graph updates of Intune configuration settings, and its Intune documentation includes M365AuthPopupsInWorkEnabled in that settings catalog. Do not infer that no API exists from the policy reference listing registry and macOS settings. | Source: https://learn.microsoft.com/graph/api/intune-deviceconfigv2-devicemanagementconfigurationsetting-update?view=graph-rest-beta
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] front matter: impact; rationale: impact / consistency: An impact rating of medium fits the stated change to default browser behaviour. | Found: impact: "medium" impact: Medium. Behaviour changes by default for people signed in to Edge with a work account | Fix: Set impact to 'high' and change the rationale's opening 'Medium.' to 'High.' The schema defines high impact as 'most users, or a change to default behaviour'; the stated rationale explicitly describes the latter.
-->
