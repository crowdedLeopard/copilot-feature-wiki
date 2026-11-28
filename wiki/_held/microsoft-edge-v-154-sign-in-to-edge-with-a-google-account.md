---
title: "Microsoft Edge: sign in to Edge with a Google account on Windows and macOS"
slug: "microsoft-edge-v-154-sign-in-to-edge-with-a-google-account"
roadmapId: 565860
topic: "modern-work"
products: ["Microsoft Edge"]
summary: "Edge 154 lets users sign in to the browser with a Google account as well as a Microsoft account. It is available unless the NonMicrosoftAccountSignInEnabled policy is disabled, so admins who do not want it need to set that policy now."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "act-now"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item, the Edge 154 release notes and the NonMicrosoftAccountSignInEnabled policy page name no licence or charge for signing in to Edge with a Google account."
audiences: ["m365-admin","security","change-adoption"]
tags: ["microsoft-edge","group-policy","identity","user-profiles","authentication","macos"]
sources:
  - title: "NonMicrosoftAccountSignInEnabled"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/nonmicrosoftaccountsigninenabled"
    kind: "learn"
  - title: "RestrictSigninToPattern"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern"
    kind: "learn"
  - title: "Archived release notes for Microsoft Edge Stable Channel"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-relnote-archive-stable-channel"
    kind: "learn"
  - title: "Microsoft Edge for Business"
    url: "https://learn.microsoft.com/deployedge/microsoft-edge-for-business"
    kind: "learn"
  - title: "Microsoft 365 Roadmap: Microsoft Edge: v.154 - Sign in to Edge with a Google account"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565860"
    kind: "roadmap"
videos: []
related: ["microsoft-edge-choose-a-profile-at-startup","microsoft-edge-allow-m365-authentication-popups-in-work-profiles","authentication"]
controls:
  - governs: "Whether users can sign in to Edge with non-Microsoft accounts such as Google"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Identity and sign-in > Enable sign-in to Microsoft Edge using non-Microsoft accounts"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/nonmicrosoftaccountsigninenabled"
    api:
      kind: "other"
      call: "Registry value NonMicrosoftAccountSignInEnabled (REG_DWORD) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/nonmicrosoftaccountsigninenabled"
    note: "Allowed when enabled or not configured; Disabled hides Google and Apple sign-in. Per device, not per profile; dynamic refresh. macOS preference key NonMicrosoftAccountSignInEnabled."
  - governs: "Which account usernames can sign in to Edge (existing control)"
    scope: "other"
    ui:
      surface: "Group Policy (Administrative Templates)"
      path: "Administrative Templates > Microsoft Edge > Restrict which accounts can be used to sign in to Microsoft Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern"
    api:
      kind: "other"
      call: "Registry value RestrictSigninToPattern (REG_SZ) under SOFTWARE\\Policies\\Microsoft\\Edge"
      docs: "https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern"
    note: "Regular-expression pattern; non-matching profiles are signed out. The page does not say whether it covers Google or Apple accounts."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-10-15T22:47:30"
changes:
  - date: "2026-11-28"
    note: "New briefing: Google account sign-in in Edge 154, on by default, and the NonMicrosoftAccountSignInEnabled policy that turns it off."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 42 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 42
  confirmed: 39
  unconfirmed: 1
  contradicted: 2
  attempts: 1
  hash: "72796a749e83a1e97853b640973592ba"
---

## What's changing

Users can sign in to Microsoft Edge with a Google account, in addition to a Microsoft account, from the profile menu and the Edge sign-in screen. The roadmap item states it is available on Windows and macOS devices and that administrators control it with the `NonMicrosoftAccountSignInEnabled` policy.

The policy page describes the default. If the policy is enabled or not configured, users can sign in to Edge with non-Microsoft accounts when the feature is available, and the Google or Apple sign-in buttons appear in the profile flyout and the unified sign-in experience. If the policy is disabled, those entry points are hidden and disabled, and users can still sign in with Microsoft accounts. The policy page names Apple accounts as well as Google accounts; the roadmap item names only Google.

The roadmap item is **Launched**, targeted for September CY2026, General Availability, in the Worldwide (Standard Multi-Tenant) cloud. The Edge release notes list the feature in Stable 154.0.4258.37 (September 24, 2026), and earlier in Stable 150.0.4078.48 (July 2, 2026) as a controlled feature rollout.

## Why it matters

This puts a consumer identity from another company into the browser that organisations manage for work. If nobody acts, the Google sign-in option is offered to Edge users on Windows and macOS as soon as it reaches their browser, because the policy's unconfigured state allows it. Organisations that already restrict which accounts can sign in to Edge, or that only expect Microsoft Entra ID and personal Microsoft accounts in the browser, should decide now whether a Google-signed-in browser is acceptable on their devices.

Microsoft has not described what a Google-signed-in Edge profile synchronises or where that data is stored, so the safest reading is to treat it as an unmanaged personal identity until Microsoft says more. The control is a single policy that applies to the whole device and takes effect without a browser restart.

## Risk assessment

**Data exposure**
- A user signed in with a Google account has a browser identity outside the tenant. Microsoft Learn does not document what browser data such a profile synchronises or to which service at the time of writing (November 2026). Disabling `NonMicrosoftAccountSignInEnabled` removes the option.

**Security & identity**
- The policy is device-wide (the page lists Per Profile: No) and also applies to a profile signed in with a Microsoft account, so one setting covers every profile on the device.
- `RestrictSigninToPattern` already limits which account usernames can sign in to Edge, but its page does not say whether it applies to Google or Apple accounts; do not rely on it alone.

**Autonomy & actions**
- No change: the feature adds a sign-in option and takes no action on its own.

**Change & support**
- Users will see Google (and, per the policy page, Apple) sign-in buttons in the profile flyout. Disabling the policy hides them; expect help desk questions either way.
- The policy supports dynamic refresh, so a change applies without restarting Edge.

## Cost and licensing

Microsoft has not published licensing for this feature: the roadmap item, the Edge 154 release notes and the `NonMicrosoftAccountSignInEnabled` policy page name no licence, meter or charge for it.

The cost Microsoft's pages show is indirect: admin time to decide on the policy, deploy it through Group Policy or the registry on Windows and the preference key on macOS, and tell users which accounts they may use in Edge.

## Scope

- **Platforms:** the policy page lists Windows (version 150 and later) and macOS (version 150 and later); Android and iOS are listed as not supported. The roadmap record lists the platform as Web.
- **Cloud:** Worldwide (Standard Multi-Tenant), as the roadmap record lists it.
- **Rollout:** Microsoft Edge Stable 154; Stable 150 carried it as a controlled feature rollout.
- **Accounts:** Google accounts per the roadmap item; the policy covers non-Microsoft accounts "such as Google or Apple accounts". Microsoft account sign-in is unaffected by the policy.
- **Configuration:** the policy is mandatory only (it cannot be set as recommended) and is set per device.

## Governance guidance

### Before rollout
- Decide whether users may sign in to Edge with Google or Apple accounts on organisation-managed Windows and macOS devices.
- Check `edge://policy` on a sample device to see whether `NonMicrosoftAccountSignInEnabled` or `RestrictSigninToPattern` is already set.
- Draft a short user notice explaining which accounts are allowed in Edge and why.

### At rollout
- Set **Enable sign-in to Microsoft Edge using non-Microsoft accounts** to Disabled through Group Policy (or the registry value `NonMicrosoftAccountSignInEnabled`) if Google sign-in is not wanted.
- Deploy the `NonMicrosoftAccountSignInEnabled` preference key to managed macOS devices with the same value.
- Confirm on a test device that the Google sign-in buttons are gone from the profile flyout and that Microsoft account sign-in still works.

### After rollout
- Recheck `edge://policy` on devices after each Edge feature update to confirm the setting is still applied.
- Watch the Edge release notes and the policy page for changes to which non-Microsoft accounts the policy covers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether users can sign in to Edge with non-Microsoft accounts such as Google</strong><br><small class="controls__note">Allowed when enabled or not configured; Disabled hides Google and Apple sign-in. Per device, not per profile; dynamic refresh. macOS preference key NonMicrosoftAccountSignInEnabled.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Identity and sign-in › Enable sign-in to Microsoft Edge using non-Microsoft accounts <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/nonmicrosoftaccountsigninenabled" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value NonMicrosoftAccountSignInEnabled (REG_DWORD) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/nonmicrosoftaccountsigninenabled" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which account usernames can sign in to Edge (existing control)</strong><br><small class="controls__note">Regular-expression pattern; non-matching profiles are signed out. The page does not say whether it covers Google or Apple accounts.</small></td><td data-label="Admin UI"><strong>Group Policy (Administrative Templates)</strong><br>Administrative Templates › Microsoft Edge › Restrict which accounts can be used to sign in to Microsoft Edge <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Registry value RestrictSigninToPattern (REG_SZ) under SOFTWARE\Policies\Microsoft\Edge</code> <a href="https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

`NonMicrosoftAccountSignInEnabled` is the control for this feature. Left unconfigured it allows non-Microsoft sign-in; only the Disabled value removes it. It is a mandatory policy, applies to the whole device rather than one profile, and refreshes without a browser restart. On macOS the same name is used as the preference key.

`RestrictSigninToPattern` is an existing control for which account usernames may sign in to Edge. Its page does not mention non-Microsoft accounts, so treat it as complementary, not a replacement. Signed-in profiles that do not match its pattern are signed out once it is enabled.

## Open questions

- What browser data does an Edge profile signed in with a Google account synchronise, and to which service? Watch the policy page and the Edge release notes.
- Does `RestrictSigninToPattern` apply to Google or Apple account sign-in, or only to Microsoft accounts?
- The policy page already names Apple accounts: will Microsoft announce Apple account sign-in in Edge separately, and will this policy govern it unchanged?
- Can a Google-signed-in profile sit alongside the Microsoft Entra ID work profile in Edge for Business, and how does automatic switching treat it?

<!-- rationale
risk: Medium. Unless an admin disables NonMicrosoftAccountSignInEnabled, users on managed Windows and macOS devices can sign in to Edge with a personal Google account; that one policy turns it off.
cost: Low. The known cost is admin time to decide on and deploy one browser policy; Microsoft has not published licensing for this feature.
impact: Medium. The Google sign-in option appears in the profile menu and sign-in screen for Edge users on Windows and macOS, but only users who choose it change how they use the browser.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].ui; Governance controls: table / admin-path: The full Group Policy route begins Administrative Templates > Microsoft Edge > Identity and sign-in > Enable sign-in to Microsoft Edge using non-Microsoft accounts. | Found: To configure a mandatory policy, open the Group Policy Editor and go to (Computer Configuration or User Configuration) > Policies > Administrative Templates > Microsoft Edge. | Fix: Replace controls[0].ui.path and its rendered table path with 'Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Identity and sign-in > Enable sign-in to Microsoft Edge using non-Microsoft accounts'. Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge for the navigation prefix; the existing policy reference supplies the remaining steps. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
- [contradicted, blocker] controls[1].ui; Governance controls: table / admin-path: The full Group Policy route begins Administrative Templates > Microsoft Edge > Restrict which accounts can be used to sign in to Microsoft Edge. | Found: To configure a mandatory policy, open the Group Policy Editor and go to (Computer Configuration or User Configuration) > Policies > Administrative Templates > Microsoft Edge. | Fix: Replace controls[1].ui.path and its rendered table path with 'Computer Configuration > Policies > Administrative Templates > Microsoft Edge > Restrict which accounts can be used to sign in to Microsoft Edge'. Cite https://learn.microsoft.com/deployedge/configure-microsoft-edge for the navigation prefix; the existing policy reference supplies the remaining steps. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: The feature takes no action on its own. | Found: Searched: Microsoft Edge Google account sign-in automatic actions autonomous NonMicrosoftAccountSignInEnabled. Read the policy, Stable Google sign-in release notes and identity/privacy excerpts; none states the complete absence of automatic actions for Google sign-in. | Fix: Replace 'No change: the feature adds a sign-in option and takes no action on its own.' with 'The roadmap describes a Google account sign-in option in the profile menu and Edge sign-in screen.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].note; Risk assessment: Security & identity; Governance controls / absence: The RestrictSigninToPattern page does not explicitly name Google or Apple accounts, so its applicability should not be relied on alone. | Found: Determines which accounts can be used to sign in to the Microsoft Edge account that's chosen during the Sync opt-in flow. ... If you don't configure this policy or leave it blank, users can use any account to sign in to Microsoft Edge. | Fix: Replace controls[1].note's final sentence and the matching prose caveat with 'The policy determines which accounts can be used during the Sync opt-in flow.' The reference states this general reach without restricting it to Microsoft accounts: https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern. | Source: https://learn.microsoft.com/deployedge/microsoft-edge-policies/restrictsignintopattern
- [supported, minor] Governance guidance: Before rollout; After rollout / admin-path: edge://policy shows applied browser policies for checking these settings. | Found: On a target client device, open Microsoft Edge and go to edge://policy to see all policies that are applied. | Fix: Add https://learn.microsoft.com/deployedge/configure-microsoft-edge, titled 'Configure Microsoft Edge policy settings on Windows devices', to sources for the edge://policy checks. | Source: https://learn.microsoft.com/deployedge/configure-microsoft-edge
-->
