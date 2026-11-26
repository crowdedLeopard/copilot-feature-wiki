---
kind: "concept"
title: "Authentication methods in Microsoft Entra ID: which ways can users prove who they are?"
slug: "authentication"
summary: "The Authentication methods policy decides which sign-in and verification methods (passkeys, Authenticator, SMS, Temporary Access Pass and others) each group can register and use; authentication strengths decide which combinations a resource demands."
created: "2026-11-26"
updated: "2026-11-26"
version: 2
tags: ["authentication","entra-id","multifactor-authentication","passkeys","conditional-access","account-recovery","identity"]
covers: []
sources:
  - title: "Authentication methods policy overview"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage"
    kind: "learn"
  - title: "How to migrate MFA and SSPR policy settings to the Authentication methods policy for Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage"
    kind: "learn"
  - title: "Microsoft Entra authentication overview"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods"
    kind: "learn"
  - title: "Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"
    kind: "learn"
  - title: "Create and manage custom Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options"
    kind: "learn"
  - title: "Authentication methods in Microsoft Entra ID - security questions"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-security-questions"
    kind: "learn"
  - title: "Protecting authentication methods in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-default-enablement"
    kind: "learn"
  - title: "Configure Windows Hello for Business"
    url: "https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/configure"
    kind: "learn"
  - title: "How to enable passkeys (FIDO2) in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    kind: "learn"
  - title: "Enable passkeys in Authenticator"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-enable-authenticator-passkey"
    kind: "learn"
  - title: "Create authenticationStrengthPolicy"
    url: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies"
    kind: "learn"
  - title: "Update fido2AuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "fido2AuthenticationMethodConfiguration resource type"
    url: "https://learn.microsoft.com/graph/api/resources/fido2authenticationmethodconfiguration?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update microsoftAuthenticatorAuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethodconfiguration-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "microsoftAuthenticatorAuthenticationMethodConfiguration resource type"
    url: "https://learn.microsoft.com/graph/api/resources/microsoftauthenticatorauthenticationmethodconfiguration?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update authenticationMethodsPolicy"
    url: "https://learn.microsoft.com/graph/api/authenticationmethodspolicy-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "authenticationMethodsPolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/authenticationmethodspolicy?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update-MgPolicyAuthenticationMethodPolicy"
    url: "https://learn.microsoft.com/powershell/module/microsoft.graph.identity.signins/update-mgpolicyauthenticationmethodpolicy?view=graph-powershell-1.0"
    kind: "learn"
  - title: "Run a registration campaign to set up a passkey or Microsoft Authenticator"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign"
    kind: "learn"
  - title: "Authentication Methods Activity"
    url: "https://learn.microsoft.com/entra/identity/authentication/howto-authentication-methods-activity"
    kind: "learn"
  - title: "Plan a phishing-resistant passwordless authentication deployment in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-deploy-phishing-resistant-passwordless-authentication"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Features and licenses for Microsoft Entra multifactor authentication"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-mfa-licensing"
    kind: "learn"
related: ["conditional-access","guest-access","agent-identity","connectors","microsoft-entra-passkey-authentication-in-brokered-microsoft-apps-on-android","microsoft-entra-windows-hello-for-business-and-macos-platform-single-sign-on-can-now-be-us","microsoft-entra-id-account-recovery","microsoft-entra-id-passkey-support-for-b2b-users"]
controls:
  - governs: "Whether passkeys (FIDO2) are enabled, for which groups, and their method settings"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Policies"
      docs: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2"
      docs: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    note: "Each method has its own configuration. Authentication Policy Administrator. Body: state enables or disables the method; includeTargets assigns groups and passkey profiles; passkeyProfiles sets profile settings."
  - governs: "Whether Microsoft Authenticator is enabled, for which groups, and its settings"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Policies"
      docs: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/microsoftAuthenticator"
      docs: "https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethodconfiguration-update?view=graph-rest-1.0"
    note: "Request-body property state turns the method on or off."
  - governs: "Migration state: whether legacy MFA and SSPR policy settings are still respected"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Policies > Manage migration"
      docs: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage"
    api:
      kind: "powershell"
      call: "Update-MgPolicyAuthenticationMethodPolicy -PolicyMigrationState <state>"
      docs: "https://learn.microsoft.com/powershell/module/microsoft.graph.identity.signins/update-mgpolicyauthenticationmethodpolicy?view=graph-powershell-1.0"
    note: "Values: premigration, migrationInProgress, migrationComplete."
  - governs: "Registration campaign that nudges users to set up Authenticator or a passkey, and who is included or excluded"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Registration campaign > Edit"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy"
      docs: "https://learn.microsoft.com/graph/api/authenticationmethodspolicy-update?view=graph-rest-1.0"
    note: "Request-body property registrationEnforcement. Authentication Policy Administrator."
  - governs: "Custom authentication strengths: which method combinations a resource accepts"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Authentication strengths > New authentication strength"
      docs: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options"
    api:
      kind: "graph"
      call: "POST /v1.0/policies/authenticationStrengthPolicies"
      docs: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies"
    note: "Request-body property allowedCombinations. Needs Microsoft Entra ID P1; at least Security Administrator. On the creation form, select the available methods that you want to allow."
confidence: "medium"
dependents: 19
changes:
  - date: "2026-11-26"
    note: "New page: how the Microsoft Entra Authentication methods policy and authentication strengths decide which sign-in methods users may use and resources require."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 97 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-26"
    note: "Corrected the legacy-policy deprecation, security-question and migration-state statements, removed an unsupported claim about metering and a settled open question, and noted that Windows Hello for Business is configured separately."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 127 statements not yet confirmed"
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 127
  confirmed: 127
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "085347bc400d96b9095c86ca9ddb3d7a"
---

## What it is

Authentication is the check Microsoft Entra ID makes that a user is who they claim to be before it grants access to apps, services, devices or networks. The **Authentication methods policy** is where administrators decide which methods users may register and use for that check, and for which groups.

### How it works

Each method (Passkey (FIDO2), Microsoft Authenticator, SMS, voice call, Temporary Access Pass, certificate-based authentication, software and hardware OATH tokens (preview) and others) has its own entry in the policy, with an on/off state and the groups it targets; most methods also have method-specific configuration parameters. Methods enabled there can typically be used for both sign-in and self-service password reset (SSPR), with exceptions: FIDO2 and Windows Hello for Business are limited to authentication, and security questions to password reset.

Methods differ in what they can satisfy:

| Role of the method | Examples from Microsoft's table |
|---|---|
| Primary (first factor) | Password, Passkey (FIDO2), certificate-based authentication, QR code |
| Secondary (MFA) | Authenticator push notifications, voice call, software OATH tokens |
| SSPR or account recovery | SMS sign-in, Email OTP (SSPR), Verified ID (account recovery only) |

Microsoft calls Windows Hello for Business, Platform Credential for macOS, synced passkeys, FIDO2 security keys, passkeys in Microsoft Authenticator and certificate-based authentication **phishing-resistant**.

The policy decides what a user *may* use. **Authentication strengths**, a Conditional Access control, decide what a resource *requires*: three built-in strengths (Multifactor authentication strength, Passwordless MFA strength, Phishing-resistant MFA strength) and custom ones. The policies that decide when strengths apply are explained on [Conditional Access](/concepts/conditional-access/).

Verified ID is not a sign-in method: it proves identity for account recovery when every method is lost (see [account recovery](/features/microsoft-entra-id-account-recovery/)).

The tag is also used for how a site, connector or agent signs in to another service, such as Power Pages identity providers or OAuth for connectors. That sense is covered on [Connectors](/concepts/connectors/) and [Agent identity](/concepts/agent-identity/).

## Why it matters

The Authentication methods policy governs passkey and Authenticator availability; authentication strengths can restrict which methods access a resource. Windows Hello for Business enrolment is configured separately, through a Configuration Service Provider (CSP) or Group Policy. A method left enabled for all users is available to every user, and an MFA requirement is only as strong as the weakest method the user is allowed.

Tenants that never finished moving off the legacy MFA and SSPR policies carry a second, hidden source of permissions: Microsoft Entra ID honours a method enabled in *any* policy, so a method switched off in the Authentication methods policy can still be used. Microsoft deprecated management of authentication methods in the legacy MFA and SSPR policies from 30 September 2025, but security questions remain manageable in legacy SSPR, including after Migration Complete. The migration state decides whether the legacy policies' old settings are still respected.

## Cost and licensing

Microsoft's licensing table lists **Admin control over verification methods** for Microsoft Entra ID Free (Global Administrators-only column), Office 365, Microsoft Entra ID P1 and P2. With security defaults on Microsoft Entra ID Free, Microsoft states that only Microsoft Authenticator can be used for the authentication prompt.

- Authentication strengths are Conditional Access controls, and Conditional Access needs **Microsoft Entra ID P1**.
- The Authentication methods **Activity** report (Usage and insights) needs Microsoft Entra ID P1 or P2.
- SSPR writeback needs P1 or P2.
- Face Check, used by identity-verified account recovery, is a premium add-on to Microsoft Entra Verified ID; it is included in the Microsoft Entra Suite.

Microsoft publishes prices on the Microsoft Entra pricing page, not on Learn.

## Risks and limits

- **A method stays usable while any policy enables it.** Until migration is complete, a user enabled in the legacy MFA or SSPR policy can still register and use a method you switched off; Microsoft's example is voice calls reaching users who are not in the targeted group.
- **Security questions stay in the legacy SSPR policy.** They can only be enabled there; migration can be completed with security questions still enabled in legacy SSPR. Microsoft documents their retirement from SSPR in March 2027, after which users can no longer reset passwords with them.
- **Many targeted groups break saves and registration.** Registration can fail when many groups are included, and the policy may not save once it exceeds 20 KB. Individual users can no longer be targeted.
- **Only the converged registration experience reads the policy.** Users outside it see the wrong methods to register.
- **Strengths do not restrict the first sign-in.** Conditional Access evaluates after initial authentication, so a user can still enter a password before being asked for the required method.
- **Windows Hello for Business is not prompted mid-session.** A user who signed in with a password must restart the session to satisfy a strength that requires it.
- **Email one-time pass (Guest) cannot satisfy any strength** combination, which matters for guest-facing policies.
- **Require multifactor authentication and Require authentication strength cannot be combined** in one Conditional Access policy.
- **Custom strengths are capped at 15**, and one referenced by a Conditional Access policy cannot be deleted.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether passkeys (FIDO2) are enabled, for which groups, and their method settings</strong><br><small>Group</small><br><small class="controls__note">Each method has its own configuration. Authentication Policy Administrator. Body: state enables or disables the method; includeTargets assigns groups and passkey profiles; passkeyProfiles sets profile settings.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Policies <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2</code> <a href="https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Authenticator is enabled, for which groups, and its settings</strong><br><small>Group</small><br><small class="controls__note">Request-body property state turns the method on or off.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Policies <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/microsoftAuthenticator</code> <a href="https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Migration state: whether legacy MFA and SSPR policy settings are still respected</strong><br><small>Tenant</small><br><small class="controls__note">Values: premigration, migrationInProgress, migrationComplete.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Policies › Manage migration <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgPolicyAuthenticationMethodPolicy -PolicyMigrationState &lt;state&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.identity.signins/update-mgpolicyauthenticationmethodpolicy?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Registration campaign that nudges users to set up Authenticator or a passkey, and who is included or excluded</strong><br><small>Tenant</small><br><small class="controls__note">Request-body property registrationEnforcement. Authentication Policy Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Registration campaign › Edit <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy</code> <a href="https://learn.microsoft.com/graph/api/authenticationmethodspolicy-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom authentication strengths: which method combinations a resource accepts</strong><br><small>Tenant</small><br><small class="controls__note">Request-body property allowedCombinations. Needs Microsoft Entra ID P1; at least Security Administrator. On the creation form, select the available methods that you want to allow.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Authentication strengths › New authentication strength <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/policies/authenticationStrengthPolicies</code> <a href="https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Authentication Policy Administrator is the least-privileged role for the Authentication methods policy, its method configurations and the registration campaign. Custom authentication strengths need at least Security Administrator in the admin centre; through Graph, Conditional Access Administrator or Security Administrator. Viewing a user's identity verification history needs at least Security Reader.

**How they interact.** The migration state decides whether legacy MFA (Entra ID > Multifactor authentication > Getting started > Configure > Additional cloud-based multifactor authentication settings; the migration guide gives another route, Entra ID > Users > Per-user MFA > service settings) and SSPR (Entra ID > Password reset > Authentication methods; the migration guide inserts Users: Entra ID > Users > Password reset > Authentication methods) settings still count. Tenants start in Pre-migration or Migration in Progress depending on their state; tenants that started in Migration in Progress cannot move to Pre-migration; tenants that started in Pre-migration can move to any state at any time. After migration, the SSPR **Number of methods required to reset** control and the SSPR administrator policy stay in the legacy SSPR policy. A strength only accepts methods users have registered and admins have enabled.

**Watching it.** Entra ID > Authentication methods > Activity has Registration and Usage tabs; Reports Reader, Security Reader and Global Reader are among the roles that can open it. Entra ID writes an audit log entry when an administrator changes authentication methods or a user changes their credentials.

## What to check

- Open Manage migration on the Authentication methods policy and confirm the tenant's migration state.
- Count the groups each method targets and consolidate them before the policy nears 20 KB.
- Check whether anyone still relies on security questions in the legacy SSPR policy.
- Review the registration campaign's state, method and exclusions.
- List custom authentication strengths and the Conditional Access policies that reference them.

## Open questions

- When will the Number of methods required to reset control and the SSPR administrator policy move into the Authentication methods policy?
- Microsoft says it can announce Microsoft-managed default protection in release notes and Tech Community; does it guarantee advance notification for every registration-campaign default change?
- Will Microsoft warn administrators before the policy reaches the 20 KB limit, rather than failing the save?

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Cost and licensing: security defaults / behaviour: Microsoft's licensing documentation describes security defaults on Free as allowing only the mobile authenticator app for authentication prompts. | Found: Microsoft Entra ID Free provides security defaults that provide Microsoft Entra multifactor authentication where only the mobile authenticator app can be used for the authentication prompt. | Fix: Replace the second sentence with: 'The MFA licensing page describes security-defaults authentication prompts as mobile-authenticator-only; the security-defaults page also says users can use non-Microsoft OATH TOTP applications to generate codes (https://learn.microsoft.com/entra/fundamentals/security-defaults#authentication-methods).' | Source: https://learn.microsoft.com/entra/identity/authentication/concept-mfa-licensing
- [supported, minor] Cost and licensing: pricing / absence: Learn does not publish the authentication prices discussed here and points to the Microsoft Entra pricing page. | Found: Searched: Entra Face Check price; Entra ID P1 P2 per-user monthly authentication pricing. Read licensing, MFA licensing and Face Check billing excerpts; these direct readers to Microsoft Entra pricing rather than quote authentication prices. | Fix: Replace 'Microsoft publishes prices on the Microsoft Entra pricing page, not on Learn' with 'For specific details about pricing and billing, see the Microsoft Entra pricing page', as stated at https://learn.microsoft.com/entra/identity/authentication/concept-mfa-licensing. This avoids a blanket claim about all Learn pages.
- [supported, minor] controls[0].ui / admin-path: Passkey policy settings are reached through Microsoft Entra admin center > Entra ID > Authentication methods > Policies. | Found: To manage the Authentication methods policy, sign in to the Microsoft Entra admin center as at least an Authentication Policy Administrator and browse to Entra ID > Authentication methods > Policies. | Fix: The path reaches the correct methods list but stops before selecting the method. Set controls[0].ui.path to 'Entra ID > Authentication methods > Policies > Passkey (FIDO2) > Enable and target > Enable' and controls[0].ui.docs to https://learn.microsoft.com/entra/identity/authentication/how-to-enable-authenticator-passkey; retain the existing note about method settings. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] controls[1].ui / admin-path: Authenticator policy settings are reached through Microsoft Entra admin center > Entra ID > Authentication methods > Policies. | Found: To manage the Authentication methods policy, sign in to the Microsoft Entra admin center as at least an Authentication Policy Administrator and browse to Entra ID > Authentication methods > Policies. | Fix: The path reaches the correct methods list but stops before the method. Set controls[1].ui.path to 'Entra ID > Authentication methods > Policies > Microsoft Authenticator' and controls[1].ui.docs to https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage#microsoft-authenticator, which documents this method's configuration. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] controls[3].ui / admin-path: Registration campaign settings are reached through Microsoft Entra admin center > Entra ID > Authentication methods > Registration campaign > Edit. | Found: Browse to Entra ID > Authentication methods > Registration campaign, and select Edit. | Fix: The path correctly reaches the editor. Extend controls[3].ui.path to 'Entra ID > Authentication methods > Registration campaign > Edit > State' and append to its note: 'In the editor, State enables or disables the campaign; Authentication method selects the method, and included or excluded targets control who is prompted.' These fields are documented at https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign
- [supported, minor] sources / behaviour: The page's additional supported Power Pages, connector and pricing statements rely on Microsoft pages missing from its sources. | Found: If you enforce authentication, users authenticate through an identity provider. | Fix: Add these URLs to sources: https://learn.microsoft.com/power-pages/security/authentication/configure-site; https://learn.microsoft.com/connectors/custom-connectors/; https://www.microsoft.com/en-us/security/microsoft-entra-pricing. They support the existing statements; no additional coverage is needed. | Source: https://learn.microsoft.com/power-pages/security/authentication/configure-site
- [supported, minor] controls[4].note; Governance controls: Roles / role: The custom-strength guide requires at least Security Administrator for creation in the admin centre. | Found: Sign in to the Microsoft Entra admin center as at least a Security Administrator. | Fix: Retain the cited Security Administrator requirement, but append to the Roles paragraph: 'The passkey sign-in guide documents Conditional Access Administrator for creating a custom strength in the admin centre (https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2#enforce-passkey-fido2-sign-in).' | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options
-->
