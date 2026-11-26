---
title: "Microsoft Entra ID: passkey sign-in to Microsoft apps on Android through Authenticator or Company Portal"
slug: "microsoft-entra-passkey-authentication-in-brokered-microsoft-apps-on-android"
roadmapId: 409529
topic: "governance"
products: ["Microsoft Entra"]
summary: "Users with an Entra ID passkey can sign in to Microsoft apps on Android when Microsoft Authenticator, Company Portal or Link to Windows is installed as the broker. Admins govern it through the existing Passkey (FIDO2) policy."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android"]
targetDate: "March CY2025"
previewDate: "August CY2024"
risk: "low"
cost: "none"
impact: "low"
defaultState: "user-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Included in every Microsoft Entra ID edition, including Microsoft Entra ID Free, per the passkey (FIDO2) enablement page; no extra licences are required. Nothing licensed separately for the Android broker scenario is published."
audiences: ["m365-admin","security","end-user"]
tags: ["entra-id","passkeys","authentication","microsoft-authenticator","intune","mobile","conditional-access"]
sources:
  - title: "Passkey (FIDO2) authentication matrix with Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-fido2-compatibility"
    kind: "learn"
  - title: "How to enable passkeys (FIDO2) in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    kind: "learn"
  - title: "Sign in with passkeys in Authenticator for Android and iOS devices"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-sign-in-passkey-authenticator"
    kind: "learn"
  - title: "Authentication methods in Microsoft Entra ID - Microsoft Authenticator app"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-authenticator-app"
    kind: "learn"
  - title: "Passkey and security key browser authentication for third-party federated identity providers on Android, iOS, and macOS"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-passkey-browser-authentication-federated-identity-provider"
    kind: "learn"
  - title: "Microsoft Entra authentication strengths API overview"
    url: "https://learn.microsoft.com/graph/api/resources/authenticationstrengths-overview?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 409529"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=409529"
    kind: "roadmap"
  - title: "Which users and groups can register and use passkeys (FIDO2), and under which passkey profile (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Which authentication methods a custom authentication strength permits, for requiring passkeys (Microsoft Graph)"
    url: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: ["conditional-access","microsoft-entra-id-passkey-support-for-b2b-users","microsoft-teams-entra-passwordless-resource-account-support-for-teams-rooms-on-windows-and"]
controls:
  - governs: "Which users and groups can register and use passkeys (FIDO2), and under which passkey profile"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Security > Authentication methods > Policies > Passkey (FIDO2) > Enable and Target > Add target > target > passkey profiles"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2"
      docs: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    note: "At least Authentication Policy Administrator. The request body sets state, includeTargets, excludeTargets and passkeyProfiles."
  - governs: "Which passkey types and providers (for example Authenticator for Android) a passkey profile allows"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Security > Authentication methods > Policies > Passkey (FIDO2) > Configure > + Add passkey profile"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2"
      docs: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    note: "Passkey types, Enforce attestation and Enforce key restrictions (AAGUIDs) are set in the profile. The request body sets passkeyProfiles, including passkeyTypes and keyRestrictions."
  - governs: "Which authentication methods a custom authentication strength permits, for requiring passkeys"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Authentication strengths > New authentication strength > Passkeys (FIDO2)"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    api:
      kind: "graph"
      call: "POST /v1.0/policies/authenticationStrengthPolicies"
      docs: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    note: "At least Conditional Access Administrator. Enforced only when a Conditional Access policy uses the strength. The request body sets allowedCombinations to [\"fido2\"] to permit passkeys (FIDO2)."
  - governs: "Separate switch for passkey sign-in in brokered Microsoft apps on Android"
    scope: "tenant"
    ui: null
    api: null
    note: "Microsoft Learn documents no setting specific to brokered Android apps at the time of writing (November 2026); the Passkey (FIDO2) policy applies."
confidence: "high"
created: "2026-11-25"
updated: "2026-11-26"
roadmapModified: "2024-08-21T23:45:23"
changes:
  - date: "2026-11-25"
    note: "New briefing: passkey sign-in to Microsoft apps on Android through a broker, governed by the Passkey (FIDO2) policy."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 52 statements contradicted, 2 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected: removed the claim that older Android devices fall back to other methods, reworded two Why it matters statements on the broker and on who may use passkeys, and noted the allowedCombinations body property."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 2 of 59 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 57
  unconfirmed: 2
  contradicted: 0
  attempts: 0
  hash: "59b8ef3aee2aaddc66647aead86b8b53"
---

## What's changing

Microsoft Entra ID users can sign in with a passkey to Microsoft apps on Android devices where an authentication broker is installed. Microsoft Learn's passkey (FIDO2) authentication matrix lists the supported Android brokers as **Authenticator, Company Portal, or Link to Windows app**; the roadmap item names Microsoft Authenticator and Microsoft Intune Company Portal.

Learn describes the behaviour: Microsoft apps "provide native support for passkey authentication for all users who have an authentication broker installed", and a user who has installed a broker "can choose to sign in with a passkey" in an app such as Outlook, is redirected to the passkey sign-in and comes back to the app signed in. Passkey authentication is also supported for third-party apps that use the broker. The Authenticator sign-in guide adds that Authenticator on Android can be used to sign in with a passkey to Microsoft apps such as OneDrive, SharePoint and Outlook.

The broker matters on Android: the same matrix marks OneDrive, Outlook and Teams for Android as not supporting passkeys without a broker, while Word, Excel, PowerPoint, OneNote, Loop, Edge and others do.

The roadmap item is **In development**, with a preview target of August CY2024 and a general availability target of March CY2025, for Worldwide (Standard Multi-Tenant) on Android. Both targets have passed, and Microsoft Learn already documents brokered passkey sign-in on Android as supported, so the record and Learn disagree on status.

## Why it matters

A supported broker enables passkey sign-in in Outlook, Teams and OneDrive on Android. For tenants moving users to phishing-resistant sign-in, or enforcing passkeys through a Conditional Access authentication strength, the broker is now part of the deployment: users who do not have Authenticator, Company Portal or Link to Windows on their phone do not get passkey sign-in in those three apps.

Nothing about who may use passkeys changes. Users must be allowed by the Passkey (FIDO2) policy to register and sign in with a passkey; eligible users can choose passkey sign-in. Expect help-desk questions about Android version requirements and which app to install.

## Risk assessment

**Data exposure**
- No change: the feature changes how users prove who they are, not what the apps can read.

**Security & identity**
- Passkeys are phishing-resistant; a passkey in Authenticator is device-bound and, on Android, is created in the Secure Element where the device supports it, or the Trusted Execution Environment otherwise.
- Synced passkeys (for example Google Password Manager) are stored with the cloud passkey provider and do not support attestation; Microsoft advises treating them as having "the same security posture as other unattested authenticators". Passkey profiles decide which passkey types each group may use.
- Federated tenants: the matrix states passkey authentication with a third-party IdP isn't supported in Microsoft apps on Android "at this time", while a separate Learn page documents brokered browser authentication for external IdPs as generally available on Android. Test before relying on it.

**Autonomy & actions**
- No change: the feature takes no action on its own.

**Change & support**
- Sign-in with a passkey in Authenticator to native apps requires Android 14 or later; sign-in with a FIDO2 security key to native apps requires Android 13 or later.
- Users must install a supported broker for OneDrive, Outlook and Teams on Android.

## Cost and licensing

**Licence.** The passkey (FIDO2) enablement page states: "Passkeys (FIDO2) are available in all Microsoft Entra ID editions, including Microsoft Entra ID Free. No extra licenses are required." The Authenticator overview states that passkeys in Authenticator "come at no more cost".

**Meter.** No meter is documented for passkey sign-in.

**Indirect costs.** Admin time to set passkey profiles and targets, and help-desk time for users on Android versions below the minimums or without a broker installed. Using Company Portal as the broker ties into an Intune deployment, but Microsoft publishes no licence requirement specific to this broker scenario.

## Scope

- **Users:** Microsoft Entra ID users included in the Passkey (FIDO2) authentication method policy. Registration of passkeys isn't supported for internal or external guest users.
- **Platform:** Android, with Authenticator, Company Portal or Link to Windows installed as the broker. Android 14 or later for passkeys in Authenticator; Android 13 or later for FIDO2 security keys in native apps.
- **Roles:** at least Authentication Policy Administrator to configure passkey profiles and targets; Conditional Access Administrator to create a custom authentication strength.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Rollout:** the roadmap item is In development with a target of March CY2025; Learn documents the capability as supported.

## Governance guidance

### Before rollout
- Check which groups the Passkey (FIDO2) policy includes and excludes, and which passkey profile each target uses, in the Microsoft Entra admin center.
- Decide whether passkey profiles should allow synced passkeys or only device-bound ones such as Authenticator for Android.
- Confirm which broker app your Android users have: Authenticator, Company Portal or Link to Windows.
- Test passkey sign-in to Outlook, Teams and OneDrive on Android 14 devices, including federated domains if you use a third-party IdP.

### At rollout
- Tell Android users to install or update a supported broker and to choose passkey sign-in in Outlook, Teams and OneDrive.
- Publish the Android 13 and Android 14 minimums to the help desk.

### After rollout
- Consider a Conditional Access authentication strength that requires passkeys (FIDO2) for sensitive resources once Android users can sign in to their apps with them.
- Review the AAGUID key restrictions in passkey profiles if you want to allow only specific passkey providers.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can register and use passkeys (FIDO2), and under which passkey profile</strong><br><small>Group</small><br><small class="controls__note">At least Authentication Policy Administrator. The request body sets state, includeTargets, excludeTargets and passkeyProfiles.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Security › Authentication methods › Policies › Passkey (FIDO2) › Enable and Target › Add target › target › passkey profiles <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2</code> <a href="https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which passkey types and providers (for example Authenticator for Android) a passkey profile allows</strong><br><small>Group</small><br><small class="controls__note">Passkey types, Enforce attestation and Enforce key restrictions (AAGUIDs) are set in the profile. The request body sets passkeyProfiles, including passkeyTypes and keyRestrictions.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Security › Authentication methods › Policies › Passkey (FIDO2) › Configure › + Add passkey profile <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2</code> <a href="https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which authentication methods a custom authentication strength permits, for requiring passkeys</strong><br><small>Tenant</small><br><small class="controls__note">At least Conditional Access Administrator. Enforced only when a Conditional Access policy uses the strength. The request body sets allowedCombinations to [&quot;fido2&quot;] to permit passkeys (FIDO2).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Authentication strengths › New authentication strength › Passkeys (FIDO2) <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/policies/authenticationStrengthPolicies</code> <a href="https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Separate switch for passkey sign-in in brokered Microsoft apps on Android</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft Learn documents no setting specific to brokered Android apps at the time of writing (November 2026); the Passkey (FIDO2) policy applies.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

There is no separate switch for passkey sign-in in brokered Android apps: it follows the tenant's Passkey (FIDO2) authentication method policy. A user in an excluded group of that policy is blocked from passkey registration and sign-in entirely, which takes precedence over any included group. Passkey profiles and targets need at least the Authentication Policy Administrator role; after you opt in to passkey profiles you can't opt out. Removing an AAGUID from an allow list stops users who registered that provider from signing in with it. A custom authentication strength needs at least the Conditional Access Administrator role and takes effect only when a Conditional Access policy uses it.

## Open questions

- Why does the roadmap item still show In development with a March CY2025 target when Learn documents brokered passkey sign-in on Android as supported? Watch the roadmap entry.
- When will OneDrive, Outlook and Teams for Android support passkeys without a broker? Watch the passkey (FIDO2) authentication matrix on Learn.
- For tenants federated with a third-party IdP, which statement applies to Microsoft apps on Android: the matrix's "not supported at this time" or the brokered browser authentication documented as generally available? Watch both Learn pages.
- Will Microsoft add a setting to turn off passkey sign-in in brokered apps separately from the Passkey (FIDO2) policy? Watch Message center.

<!-- rationale
risk: Low. The change adds a phishing-resistant sign-in route; who may use passkeys is still decided by the tenant's Passkey (FIDO2) authentication method policy.
cost: None. Microsoft states passkeys (FIDO2) are available in all Microsoft Entra ID editions, including Microsoft Entra ID Free, and that no extra licences are required.
impact: Low. Only Android users who already have a passkey allowed by policy and a broker app installed notice a new sign-in option in Microsoft apps.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Why it matters / behaviour: Nothing about who may use passkeys changes. | Found: Searched: Microsoft Entra Android passkey broker authentication no changes authentication method policy user eligibility. Read the compatibility matrix, passkey enablement page and October 2024 release excerpt; they document current eligibility, not an unchanged historical population. | Fix: Remove 'Nothing about who may use passkeys changes.' Keep the following sentence about users needing to be allowed by the Passkey (FIDO2) policy.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The change does not change what the apps can read. | Found: Searched: Microsoft Entra passkey authentication does not change application permissions data access autonomous actions; Microsoft Entra Android broker passkey authentication changes who can use passkeys app permissions actions. Read matrix and Authenticator overview; neither states unchanged app ac | Fix: Replace the bullet with 'The documented change is a passkey sign-in route to Microsoft apps on Android.' The compatibility matrix supports that narrower statement: https://learn.microsoft.com/entra/identity/authentication/concept-fido2-compatibility.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: Indirect costs / applicability: Using Company Portal as the Android broker ties into an Intune deployment. | Found: On Android, Microsoft Intune establishes the managed context that passwordless and brokered authentication flows depend on. This context is especially relevant when Microsoft Authenticator or related app experiences are part of your mobile access design. | Fix: Remove 'Using Company Portal as the broker ties into an Intune deployment, but' and retain 'Microsoft publishes no licence requirement specific to this broker scenario.' This avoids implying that using the broker necessarily requires an Intune deployment, and avoids relying on an uncited background page. | Source: https://learn.microsoft.com/intune/solutions/passwordless#platform-considerations
- [supported, minor] controls[1].ui / admin-path: The Entra admin center route through Security, Authentication methods, Policies, Passkey (FIDO2), Configure and + Add passkey profile reaches the profile configuration form. | Found: Browse to Entra ID > Security > Authentication methods > Policies. Select Passkey (FIDO2). On the Configure tab, select + Add passkey profile. Fill in the profile details. | Fix: For the passkey-type control, extend the UI path to 'Entra ID > Security > Authentication methods > Policies > Passkey (FIDO2) > Configure > + Add passkey profile > Passkey types'. Keep the note naming Enforce attestation and Enforce key restrictions as other settings in that form. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2
- [supported, minor] controls[3].ui and api; controls[3].note; Governance controls; Open questions / absence: No separate UI or API switch is documented for Entra-issued passkey sign-in in brokered Microsoft apps on Android. | Found: Searched: Microsoft Entra brokered Android passkey authentication separate setting authentication methods policy enable disable. Read matrix, passkey enablement, FIDO2 Graph update and federated-browser page; systemBrowserEnabledOn concerns external IdP browser handoff, not Entra-issued passkeys. | Fix: Replace 'There is no separate switch for passkey sign-in in brokered Android apps' with 'Microsoft Learn documents no separate switch for Entra-issued passkey sign-in in brokered Android apps at the time of writing (November 2026)'. Keep the following statement that the Passkey (FIDO2) policy governs Entra passkeys.
-->
