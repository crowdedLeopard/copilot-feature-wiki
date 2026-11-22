---
title: "Microsoft Entra: Windows Hello for Business and macOS Platform SSO count as a standalone second factor for MFA"
slug: "microsoft-entra-windows-hello-for-business-and-macos-platform-single-sign-on-can-now-be-us"
roadmapId: 568076
topic: "governance"
products: ["Microsoft Entra"]
summary: "Windows Hello for Business and macOS Platform SSO will satisfy MFA on their own, so users holding only these methods stop being prompted to register another. Admins should check step-up, authentication strength and onboarding plans."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: ["Desktop","Mac"]
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "No separate licence is named for this change. Windows Hello for Business entitlements come with Windows Pro, Enterprise E3/E5 and Education A3/A5 per Learn; Conditional Access authentication strengths need Microsoft Entra ID P1."
audiences: ["security","m365-admin","change-adoption"]
tags: ["authentication","conditional-access","entra-id","identity","macos","windows-hello-for-business","platform-sso","multifactor-authentication","gcc"]
sources:
  - title: "Windows Hello for Business"
    url: "https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/"
    kind: "learn"
  - title: "Authentication methods in Microsoft Entra ID - Platform Credential for macOS"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-platform-credential-for-macos"
    kind: "learn"
  - title: "Platform SSO configuration guide for macOS devices using Microsoft Intune"
    url: "https://learn.microsoft.com/intune/device-configuration/settings-catalog/configure-platform-sso-macos"
    kind: "learn"
  - title: "Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"
    kind: "learn"
  - title: "Create and manage custom Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options"
    kind: "learn"
  - title: "System-preferred authentication"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-system-preferred-authentication"
    kind: "learn"
  - title: "Create authenticationStrengthPolicy"
    url: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 568076"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=568076"
    kind: "roadmap"
videos: []
related: ["microsoft-entra-id-passkey-support-for-b2b-users"]
controls:
  - governs: "Which authentication method combinations a custom authentication strength accepts, including Windows Hello for Business"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Authentication strengths > New authentication strength"
      docs: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options"
    api:
      kind: "graph"
      call: "POST /v1.0/policies/authenticationStrengthPolicies"
      docs: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    note: "Custom strengths only; built-in strengths can't be modified. Request body sets allowedCombinations. Needs Entra ID P1 and, in the admin centre, at least Security Administrator."
confidence: "medium"
created: "2026-11-22"
updated: "2026-11-22"
roadmapModified: "2026-08-11T22:53:53"
changes:
  - date: "2026-11-22"
    note: "First briefing for this item: WHfB and macOS PSSO as a standalone MFA second factor, with Learn's existing WHfB statement and the authentication strength control."
  - date: "2026-11-22"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 58 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-22"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 58
  confirmed: 55
  unconfirmed: 1
  contradicted: 2
  attempts: 0
  hash: "53ee31877465be434d25e84fc1fbbd74"
---

## What's changing

Windows Hello for Business (WHfB) and macOS Platform single sign-on (macOS PSSO) are to satisfy multifactor authentication (MFA) as a standalone second factor in Microsoft Entra. The roadmap item states that these methods previously counted as MFA only during primary sign-in, and that users needed a separate passkey to complete step-up prompts, Authentication Strength policies and sign-in frequency checks. The roadmap item says WHfB and macOS PSSO now work on their own for those scenarios.

The roadmap item also states that users who have only WHfB or macOS PSSO are treated as MFA-capable and are no longer automatically prompted to register another method. Because both methods are tied to a specific device, Microsoft recommends having users register a portable method, such as a passkey or Microsoft Authenticator, during onboarding so they can complete MFA from any device.

Microsoft Learn already describes part of this. The Windows Hello for Business overview says it "also qualifies as a standalone multifactor authentication method in Microsoft Entra ID" and "satisfies step-up prompts, authentication strengths, and sign-in frequency checks without requiring an additional credential". Learn's Intune guidance for macOS Platform SSO says the Secure Enclave method "meets phish-resistant multifactor (MFA) requirements"; Learn does not yet state standalone second-factor behaviour for macOS PSSO at the time of writing (November 2026).

The roadmap item is In development with a target of October CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant) and GCC, on Desktop and Mac. That target month has passed at the time of writing (November 2026) and the record still shows In development. No Message Center post was supplied for the item.

## Why it matters

This changes what an Entra sign-in treats as strong enough for a second factor, and it is the roadmap's stated default: no administrator has to switch it on. If nobody acts, the roadmap says users holding only WHfB or macOS PSSO are treated as MFA-capable and are not nudged to register anything else. That reduces step-up friction on managed Windows and Mac devices and lets more users meet phishing-resistant requirements without extra hardware.

The trade-off is portability. A user whose only method is bound to one device has no second option on a new device, a shared machine or a different operating system, and the registration prompt that used to catch this no longer fires. Plan to communicate and enforce a portable method at onboarding, and re-check the Conditional Access policies that assume a passkey or Authenticator is registered.

## Risk assessment

**Data exposure**
- No new data access is described. The change affects which sign-in methods satisfy MFA, not what data an application can read.

**Security & identity**
- Conditional Access policies that use **Require authentication strength** can now be satisfied by WHfB or macOS PSSO alone, per the roadmap. Microsoft Learn lists "Windows Hello for Business or platform credential" in the built-in MFA, Passwordless MFA and Phishing-resistant MFA strengths, so review which policies and sign-in frequency settings protect sensitive apps.
- The Learn authentication strengths page documents a limit: if a user signs in with another primary method such as a password, and the strength requires WHfB, the user is not prompted for WHfB and must restart the session and choose it under **Sign-in options**. Confirm whether this change alters that behaviour.

**Autonomy & actions**
- No autonomous actions are described. The change is sign-in behaviour for users.

**Change & support**
- Users with only WHfB or macOS PSSO are no longer automatically prompted to register another method, per the roadmap. Expect support requests when those users need MFA from another device. Microsoft recommends registering a passkey or Microsoft Authenticator during onboarding.
- System-preferred authentication ranks credentials and, per Learn, does not offer nonportable platform credentials on incompatible operating systems: WHfB is not offered on non-Windows devices and macOS PSSO is not offered on non-macOS devices.

## Cost and licensing

The roadmap item names no separate licence, meter or price for this change. The cost visible in the sources is admin time and user communication.

Existing licence requirements still apply. The Windows Hello for Business overview says licence entitlements are granted by Windows Pro, Pro Education/SE, Enterprise E3 and E5, and Education A3 and A5. The Conditional Access authentication strengths page says that to use Conditional Access, the tenant needs a Microsoft Entra ID P1 licence. Neither page says anything specific to this change.

## Scope

Users in scope are those who sign in with WHfB or macOS PSSO; the roadmap singles out users who have only one of these methods. The roadmap record lists Worldwide (Standard Multi-Tenant) and GCC, platforms Desktop and Mac, and release phase General Availability. Status is In development with a target of October CY2026; the dates are Microsoft's targets.

WHfB needs a supported Windows edition (Pro, Enterprise, Pro Education/SE or Education per the Learn overview) and does not work with Microsoft Entra Domain Services, per that page. macOS PSSO is configured on managed Macs through Intune or another supported mobile device management (MDM) solution, per Learn. Rollout mechanics and prerequisites specific to this change are not described in the roadmap item.

## Governance guidance

### Before rollout
- Identify which users hold only WHfB or macOS PSSO and have no passkey or Microsoft Authenticator registered, from each user's registered authentication methods in the Microsoft Entra admin center.
- Review Conditional Access policies that use **Require authentication strength** or a sign-in frequency, and decide whether WHfB or macOS PSSO alone is acceptable for each protected app.
- Decide whether to require a portable method (passkey or Microsoft Authenticator) at onboarding, as Microsoft recommends, and update onboarding guidance.

### At rollout
- Tell affected users that they will no longer be prompted to register another method and should add a portable one themselves.
- Create a custom authentication strength if a built-in strength admits methods you do not want accepted for a given resource; built-in strengths cannot be modified.

### After rollout
- Test a step-up prompt, an authentication strength policy and a sign-in frequency check with a WHfB-only user and a macOS PSSO-only user.
- Watch support tickets from users who need MFA on a second device, and add a portable method for them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which authentication method combinations a custom authentication strength accepts, including Windows Hello for Business</strong><br><small>Tenant</small><br><small class="controls__note">Custom strengths only; built-in strengths can't be modified. Request body sets allowedCombinations. Needs Entra ID P1 and, in the admin centre, at least Security Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Authentication strengths › New authentication strength <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/policies/authenticationStrengthPolicies</code> <a href="https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap item does not describe a dedicated switch for this change. The control available today is the authentication strength a Conditional Access policy requires: built-in strengths cannot be modified, and a custom strength chooses the allowed method combinations. In the Microsoft Graph reference the allowed combinations include `windowsHelloForBusiness`.

Creating or editing authentication strengths requires at least the Security Administrator role in the admin centre, and the Graph reference lists the Conditional Access administrator and Security Administrator roles. This row governs how methods are accepted for a resource; it does not turn the new behaviour on or off.

## Open questions

- Does the new behaviour change the Learn-documented limit that WHfB is not prompted for when a user signs in with a password and the authentication strength requires WHfB? Watch the authentication strengths page.
- When will the roadmap item move from In development, given the October CY2026 target has passed? Watch the roadmap item and Message center.
- Is there a tenant or per-user setting that controls whether WHfB and macOS PSSO count as standalone MFA, or is the behaviour applied to all tenants? Watch the Microsoft Entra authentication methods documentation.
- Which Learn page will document macOS PSSO as a standalone second factor, and does it cover the GCC cloud listed on the roadmap?

<!-- rationale
risk: Medium. Per the roadmap, users with only Windows Hello for Business or macOS Platform SSO are treated as MFA-capable and are no longer prompted to register another method, so they may have no portable method on other devices.
cost: Low. The roadmap item names no new licence or meter; the cost visible in the sources is admin time, and Conditional Access authentication strengths need Microsoft Entra ID P1 as the Learn page states.
impact: Medium. Users who sign in with only Windows Hello for Business or macOS Platform SSO notice fewer step-up prompts and no registration prompt; users with other methods see no described change.
-->

<!-- verifier-findings (2026-11-22, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing / behaviour: Learn states WHfB satisfies standalone MFA, step-up prompts, authentication strengths and sign-in frequency checks without another credential. | Found: Windows Hello for Business also qualifies as a standalone multifactor authentication method in Microsoft Entra ID. It satisfies step-up prompts, authentication strengths, and sign-in frequency checks without requiring an additional credential. | Fix: After this quotation, add: 'Other Learn guidance still differs: the authentication overview says WHfB step-up MFA requires passkey (FIDO2) enablement and a registered passkey, while system-preferred authentication describes WHfB and macOS PSSO as first-factor only.' Cite https://learn.microsoft.com/entra/identity/authentication/overview-authentication and retain the existing system-preferred authentication citation. The existing authentication-strength limitation should remain. | Source: https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/
- [supported, minor] Governance guidance: Before rollout / behaviour: Administrators can view users' registered authentication methods in the Microsoft Entra admin center. | Found: Administrators can view user authentication methods in the Microsoft Entra admin center. Usable methods are listed first, followed by non-usable methods. | Fix: Add https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage to sources for this instruction. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] controls[0].ui; Governance controls table / admin-path: Custom authentication strengths are created in Microsoft Entra admin center under Entra ID > Authentication methods > Authentication strengths > New authentication strength. | Found: Browse to Entra ID > Authentication methods > Authentication strengths. Select New authentication strength. ... Select the available methods that you want to allow. | Fix: Extend the path to 'Entra ID > Authentication methods > Authentication strengths > New authentication strength > available methods' to reach the actual method-selection control. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options
- [unsupported, minor] rationale: impact / behaviour: Users holding only WHfB or macOS PSSO will notice fewer step-up prompts. | Found: Searched: Windows Hello for Business macOS Platform SSO standalone second factor MFA authentication strengths. Read WHfB overview, authentication strengths and system-preferred authentication; they do not state that this change reduces the number of step-up prompts. | Fix: Replace 'notice fewer step-up prompts and no registration prompt' with 'can satisfy step-up prompts without registering an additional credential and are no longer automatically prompted to register another method, per the roadmap'.
- [contradicted, minor] Governance guidance; Governance controls / consistency: The checklist asks readers to inspect registered methods and review Conditional Access strength and sign-in frequency policies, but the table only covers creating a custom strength. | Found: Identify ... from each user's registered authentication methods ... Review Conditional Access policies that use Require authentication strength or a sign-in frequency ... Table: Which authentication method combinations a custom authentication strength accepts | Fix: The Before rollout registered-method inventory and Conditional Access policy/sign-in-frequency review steps have no corresponding table rows. Do not add rows in this correction.
- [contradicted, minor] front matter: action / consistency: The prepare action understates an automatic medium-risk change whose October target falls within about 60 days of the run. | Found: action: prepare; defaultState: on; risk: medium; targetDate: October CY2026. The scale assigns act-now to automatic changes targeted within about 60 days that need a decision. | Fix: Set action to 'act-now': on 22 November 2026 the October target is overdue but within about 60 days, the change is automatic, and the page identifies a medium-risk onboarding decision.
-->
