---
kind: "concept"
title: "Authentication methods in Microsoft Entra ID: which ways can users prove who they are?"
slug: "authentication"
summary: "The Authentication methods policy decides which sign-in and verification methods (passkeys, Authenticator, SMS, Temporary Access Pass and others) each group can register and use; authentication strengths decide which combinations a resource demands."
created: "2026-11-26"
updated: "2026-11-26"
version: 1
tags: ["authentication","entra-id","multifactor-authentication","passkeys","conditional-access","account-recovery","identity"]
covers: []
sources:
  - title: "Authentication methods policy overview"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage"
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
  - title: "Create authenticationStrengthPolicy"
    url: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies"
    kind: "learn"
  - title: "Update fido2AuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update microsoftAuthenticatorAuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethodconfiguration-update?view=graph-rest-1.0"
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
    note: "Each method has its own configuration under the same policy. Authentication Policy Administrator."
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
    note: "Request-body property allowedCombinations. Needs Microsoft Entra ID P1; at least Security Administrator."
confidence: "medium"
dependents: 19
changes:
  - date: "2026-11-26"
    note: "New page: how the Microsoft Entra Authentication methods policy and authentication strengths decide which sign-in methods users may use and resources require."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 7 of 97 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 97
  confirmed: 90
  unconfirmed: 0
  contradicted: 7
  attempts: 1
  hash: "0f0e58b93dfa1d9cea3d33a07dbda5f1"
---

## What it is

Authentication is the check Microsoft Entra ID makes that a user is who they claim to be before it grants access to apps, services, devices or networks. The **Authentication methods policy** is where administrators decide which methods users may register and use for that check, and for which groups.

### How it works

Each method (Passkey (FIDO2), Microsoft Authenticator, SMS, voice call, Temporary Access Pass, certificate-based authentication, software and hardware OATH tokens and others) has its own entry in the policy, with an on/off state, the groups it targets and method-specific settings. Methods enabled there can typically be used for both sign-in and self-service password reset (SSPR), with exceptions: FIDO2 and Windows Hello for Business are limited to authentication, and security questions to password reset.

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

Every passkey, Authenticator or Windows Hello change in the briefings lands in this policy: whether a user can register the new method, and whether it counts for MFA, is decided here and by the authentication strength a Conditional Access policy demands. A method left enabled for all users is available to every user, and an MFA requirement is only as strong as the weakest method the user is allowed.

Tenants that never finished moving off the legacy MFA and SSPR policies carry a second, hidden source of permissions: Microsoft Entra ID honours a method enabled in *any* policy, so a method switched off in the Authentication methods policy can still be used. Since 30 September 2025 methods can no longer be managed in the legacy policies, but the migration state decides whether their old settings are still respected.

## Cost and licensing

Microsoft's licensing table lists **Admin control over verification methods** for Microsoft Entra ID Free (Global Administrators-only column), Office 365, Microsoft Entra ID P1 and P2. With security defaults on Microsoft Entra ID Free, Microsoft states that only Microsoft Authenticator can be used for the authentication prompt.

- Authentication strengths are Conditional Access controls, and Conditional Access needs **Microsoft Entra ID P1**.
- The Authentication methods **Activity** report (Usage and insights) needs Microsoft Entra ID P1 or P2.
- SSPR writeback needs P1 or P2.
- Face Check, used by identity-verified account recovery, is a premium add-on to Microsoft Entra Verified ID; it is included in the Microsoft Entra Suite.

Microsoft publishes prices on the Microsoft Entra pricing page, not on Learn. No per-sign-in meter for authentication methods is documented.

## Risks and limits

- **A method stays usable while any policy enables it.** Until migration is complete, a user enabled in the legacy MFA or SSPR policy can still register and use a method you switched off; Microsoft's example is voice calls reaching users who are not in the targeted group.
- **Security questions stay in the legacy SSPR policy.** They can only be enabled there; moving to Migration Complete without planning for them changes password reset for users who rely on them.
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
<tr><td data-label="Control"><strong>Whether passkeys (FIDO2) are enabled, for which groups, and their method settings</strong><br><small>Group</small><br><small class="controls__note">Each method has its own configuration under the same policy. Authentication Policy Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Policies <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2</code> <a href="https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Microsoft Authenticator is enabled, for which groups, and its settings</strong><br><small>Group</small><br><small class="controls__note">Request-body property state turns the method on or off.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Policies <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/microsoftAuthenticator</code> <a href="https://learn.microsoft.com/graph/api/microsoftauthenticatorauthenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Migration state: whether legacy MFA and SSPR policy settings are still respected</strong><br><small>Tenant</small><br><small class="controls__note">Values: premigration, migrationInProgress, migrationComplete.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Policies › Manage migration <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Update-MgPolicyAuthenticationMethodPolicy -PolicyMigrationState &lt;state&gt;</code> <a href="https://learn.microsoft.com/powershell/module/microsoft.graph.identity.signins/update-mgpolicyauthenticationmethodpolicy?view=graph-powershell-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Registration campaign that nudges users to set up Authenticator or a passkey, and who is included or excluded</strong><br><small>Tenant</small><br><small class="controls__note">Request-body property registrationEnforcement. Authentication Policy Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Registration campaign › Edit <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy</code> <a href="https://learn.microsoft.com/graph/api/authenticationmethodspolicy-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Custom authentication strengths: which method combinations a resource accepts</strong><br><small>Tenant</small><br><small class="controls__note">Request-body property allowedCombinations. Needs Microsoft Entra ID P1; at least Security Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Authentication strengths › New authentication strength <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/policies/authenticationStrengthPolicies</code> <a href="https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Authentication Policy Administrator is the least-privileged role for the Authentication methods policy, its method configurations and the registration campaign. Custom authentication strengths need at least Security Administrator in the admin centre; through Graph, Conditional Access Administrator or Security Administrator. Viewing a user's identity verification history needs at least Security Reader.

**How they interact.** The migration state decides whether legacy MFA (Entra ID > Multifactor authentication > Getting started > Configure > Additional cloud-based multifactor authentication settings) and SSPR (Entra ID > Password reset > Authentication methods) settings still count. Tenants start in Pre-migration or Migration in Progress depending on their state; from Migration in Progress you cannot return to Pre-migration. After migration, the SSPR **Number of methods required to reset** control and the SSPR administrator policy stay in the legacy SSPR policy. A strength only accepts methods users have registered and admins have enabled.

**Watching it.** Entra ID > Authentication methods > Activity has Registration and Usage tabs; Reports Reader, Security Reader and Global Reader are among the roles that can open it. Entra ID writes an audit log entry when an administrator changes authentication methods or a user changes their credentials.

## What to check

- Open Manage migration on the Authentication methods policy and confirm the tenant's migration state.
- Review each method's state and target groups under Entra ID > Authentication methods > Policies, starting with SMS and voice call.
- Count the groups each method targets and consolidate them before the policy nears 20 KB.
- Check whether anyone still relies on security questions in the legacy SSPR policy.
- Review the registration campaign's state, method and exclusions.
- List custom authentication strengths and the Conditional Access policies that reference them.
- Read the Registration and Usage tabs of the Activity report to see which methods users actually hold.

## Open questions

- When will security questions, the Number of methods required to reset control and the SSPR administrator policy move into the Authentication methods policy?
- Which methods and settings does the Microsoft managed registration campaign choose, and does Microsoft announce when those defaults change?
- Will Microsoft warn administrators before the policy reaches the 20 KB limit, rather than failing the save?

<!-- verifier-findings (2026-11-26, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Why it matters: first sentence / applicability: Every passkey, Authenticator or Windows Hello change lands in the Authentication methods policy, where registration availability is decided. | Found: You can configure Windows Hello for Business by using the following options: Configuration Service Provider (CSP) Group policy (GPO) | Fix: Replace the first sentence with: 'The Authentication methods policy governs passkey and Authenticator availability; authentication strengths can restrict which methods access a resource. Windows Hello for Business enrollment is configured separately through CSP or Group Policy.' Cite https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/configure. Do not imply this policy manages every Windows Hello change. | Source: https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/configure
- [contradicted, blocker] Why it matters: 30 September 2025 sentence / date: Since 30 September 2025 authentication methods can no longer be managed in the legacy policies. | Found: No changes can be made to the legacy policies if Migration Complete is set, except for security questions in the SSPR policy. | Fix: Replace with: 'Microsoft deprecated management of authentication methods in the legacy MFA and SSPR policies from 30 September 2025, but security questions remain manageable in legacy SSPR, including after Migration Complete.' Cite https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage alongside the overview. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage
- [contradicted, blocker] Risks and limits: Security questions / behaviour: Moving to Migration Complete changes password reset for users who rely on security questions. | Found: You can finish migration as described in the next section with security questions enabled. | Fix: Replace 'moving to Migration Complete without planning for them changes password reset for users who rely on them' with 'migration can be completed with security questions still enabled in legacy SSPR'. Cite https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage
- [contradicted, blocker] Cost and licensing: last sentence / absence: No per-sign-in meter for authentication methods is documented. | Found: SMS Phone Authentication | Workforce, External | Transaction-based | Additional charges for each SMS-based authentication event (text only; voice isn't supported). | Fix: Remove 'No per-sign-in meter for authentication methods is documented.' The page discusses guests as well as members, so it cannot make this blanket absence claim: Microsoft documents transaction-based SMS Phone Authentication in External ID for workforce and external tenants at https://learn.microsoft.com/entra/external-id/external-identities-pricing. | Source: https://learn.microsoft.com/entra/external-id/external-identities-pricing
- [contradicted, blocker] Governance controls: How they interact / behaviour: From Migration in Progress a tenant cannot return to Pre-migration. | Found: If you start in Pre-migration, you can move to any of the states at any time. If you started in Migration in Progress, you can move between Migration in Progress and Migration Complete at any time, but won't be allowed to move to Pre-migration. | Fix: Replace 'from Migration in Progress you cannot return to Pre-migration' with 'tenants that started in Migration in Progress cannot move to Pre-migration; tenants that started in Pre-migration can move to any state at any time'. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [contradicted, blocker] Open questions: Microsoft managed campaign method and settings / absence: Which methods and settings Microsoft managed registration campaigns choose is an open documentation question. | Found: Microsoft targets passkey (FIDO2) when included users are enabled for passkeys, and Microsoft Authenticator when they aren't enabled for passkeys but are enabled for Authenticator. | Fix: Remove 'Which methods and settings does the Microsoft managed registration campaign choose' from Open questions. The cited page publishes targeting, eligibility and settings: one-day snooze for both methods; three allowed snoozes for Authenticator and unlimited snoozes for passkeys. Do not describe those documented values as unknown. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Passkey group availability and settings are managed in Microsoft Entra admin center under Entra ID > Authentication methods > Policies. | Found: browse to Entra ID > Authentication methods > Policies. | Fix: The route stops on the method list. Extend it to 'Entra ID > Authentication methods > Policies > Passkey (FIDO2) > Enable and Target > Enable'; note that group assignments use Add target and method settings use Configure. See https://learn.microsoft.com/entra/identity/authentication/how-to-enable-authenticator-passkey and https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2. The latter page also inserts Security after Entra ID; report that navigation difference rather than silently selecting it. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] controls[0].api / command: PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2 updates passkey availability, target groups and settings. | Found: PATCH https://graph.microsoft.com/v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2 | Fix: Keep the call and add to the row note: 'Request-body property state enables or disables the method; includeTargets assigns groups and passkey profiles; passkeyProfiles configures profile settings.' These properties appear in the cited v1.0 request. | Source: https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0
- [supported, minor] controls[4].ui / admin-path: Custom strengths are created in Microsoft Entra admin center under Entra ID > Authentication methods > Authentication strengths > New authentication strength. | Found: Browse to Entra ID > Authentication methods > Authentication strengths. Select New authentication strength. Select the available methods that you want to allow. | Fix: Keep the route, which reaches the creation form, and add to the note: 'On the creation form, select the available methods that you want to allow.' This gives the documented deciding control without inventing a label. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options
- [supported, minor] What it is: How it works, method list / behaviour: The policy has entries for passkeys, Authenticator, SMS, voice calls, Temporary Access Pass, certificate-based authentication and software and hardware OATH tokens. | Found: The Authentication methods policy has other methods that aren't available in the legacy policies, such as FIDO2 security key, Temporary Access Pass, and Microsoft Entra certificate-based authentication. | Fix: Change 'hardware OATH tokens' to 'hardware OATH tokens (preview)' in this list, as marked in https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage
- [supported, minor] What it is: How it works, first paragraph / behaviour: Method entries have an on/off state, target groups and method-specific settings. | Found: Most methods also have configuration parameters to more precisely control how that method can be used. | Fix: Replace 'with an on/off state, the groups it targets and method-specific settings' with 'with an on/off state and the groups it targets; most methods also have method-specific configuration parameters'. This preserves Microsoft's qualification. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] Risks and limits: Security questions; What to check / behaviour: Security questions can currently be enabled only in the legacy SSPR policy. | Found: Security questions can only be enabled today by using the legacy SSPR policy. | Fix: Add the qualification 'Microsoft documents their retirement from SSPR in March 2027' and cite https://learn.microsoft.com/entra/identity/authentication/concept-authentication-security-questions. The mechanism overview supports the present location but does not mention the retirement documented on the method's own page. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] Governance controls: How they interact, legacy MFA path / admin-path: Legacy MFA settings are reached through Entra ID > Multifactor authentication > Getting started > Configure > Additional cloud-based multifactor authentication settings. | Found: To manage the legacy MFA policy, Browse to Entra ID > Multifactor authentication > Getting started > Configure > Additional cloud-based multifactor authentication settings. | Fix: Keep the cited route but add: 'The migration guide gives another route: Entra ID > Users > Per-user MFA > service settings.' Cite https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage, whose navigation differs from the overview. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [supported, minor] Governance controls: How they interact, legacy SSPR path / admin-path: Legacy SSPR methods are reached through Entra ID > Password reset > Authentication methods. | Found: To manage authentication methods for self-service password reset (SSPR), browse to Entra ID > Password reset > Authentication methods. | Fix: Keep the overview's route but add: 'The migration guide inserts Users: Entra ID > Users > Password reset > Authentication methods.' Cite https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage. | Source: https://learn.microsoft.com/entra/identity/authentication/concept-authentication-methods-manage
- [contradicted, minor] What to check: method review and Activity report / consistency: The checklist asks readers to review SMS and voice-call settings and the Activity report, but the controls table has no rows for them. | Found: Checklist: review SMS and voice call; read the Activity report's Registration and Usage tabs. Table: passkeys, Authenticator, migration state, registration campaign, custom strengths; no SMS, voice-call or Activity row. | Fix: The SMS/voice-call review and Activity-report checklist steps have no corresponding controls-table rows. Remove those two checklist bullets to make the checklist match the existing table; do not add unverified rows. Legacy security questions are a retiring control and do not require a new row.
- [supported, minor] Open questions: migration of legacy SSPR controls / absence: A migration date for security questions, Number of methods required to reset and the SSPR administrator policy is not published in the researched documentation. | Found: Searched: Authentication methods policy security questions Number of methods required reset administrator policy migration future date. Read methods-manage, how-to-authentication-methods-manage and concept-authentication-security-questions; no migration date found, but retirement is March 2027. | Fix: Replace the first open question with: 'When will the Number of methods required to reset control and the SSPR administrator policy move into the Authentication methods policy?' Security questions have a documented SSPR retirement in March 2027, not a published migration schedule.
- [supported, minor] Open questions: announcements of managed-default changes / absence: Whether Microsoft guarantees notification whenever managed campaign defaults change remains open. | Found: Searched: Microsoft managed registration campaign default method snooze change announcement. Read how-to-mfa-registration-campaign and concept-authentication-default-enablement: Microsoft can announce protection in release notes and Tech Community; no every-change notification guarantee found. | Fix: Replace the notification part of the question with: 'Microsoft says it can announce Microsoft-managed default protection in release notes and Tech Community; does it guarantee advance notification for every registration-campaign default change?' Cite https://learn.microsoft.com/entra/identity/authentication/concept-authentication-default-enablement.
- [supported, minor] sources / behaviour: Some verified statements rely on Microsoft pages not included in the concept page's sources. | Found: state | authenticationMethodState | The possible values are: enabled, disabled. includeTargets ... A collection of groups that are enabled to use the authentication method. | Fix: Add these researched supporting pages to sources: https://learn.microsoft.com/graph/api/resources/microsoftauthenticatorauthenticationmethodconfiguration?view=graph-rest-1.0; https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-methods-manage; https://learn.microsoft.com/entra/identity/authentication/concept-authentication-security-questions; https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2; https://learn.microsoft.com/entra/identity/authentication/how-to-enable-authenticator-passkey; https://learn.microsoft.com/entra/identity/authentication/howto-authentication-passwordless-phone; https://learn.microsoft.com/entra/identity/authentication/concept-authentication-default-enablement; https://learn.microsoft.com/power-pages/security/authentication/configure-site; https://learn.microsoft.com/connectors/custom-connectors/. Add https://learn.microsoft.com/windows/security/identity-protection/hello-for-business/configure only if retaining the verified replacement about separate Windows Hello enrollment controls. | Source: https://learn.microsoft.com/graph/api/resources/microsoftauthenticatorauthenticationmethodconfiguration?view=graph-rest-1.0
-->
