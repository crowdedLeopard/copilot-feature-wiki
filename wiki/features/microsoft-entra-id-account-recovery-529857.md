---
title: "Microsoft Entra ID: identity-verified account recovery for users who lose all sign-in methods (Android, iOS, desktop)"
slug: "microsoft-entra-id-account-recovery-529857"
roadmapId: 529857
topic: "governance"
products: ["Microsoft Entra"]
summary: "Microsoft Entra ID account recovery lets users who lose every authentication method regain access through ID and Face Check verification. Disabled until an admin enables it; needs P1 plus a Face Check licence and a provider."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Android","Desktop","iOS"]
targetDate: "June CY2026"
previewDate: "November CY2025"
risk: "low"
cost: "medium"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn's FAQ says users need Microsoft Entra ID P1 and a Face Check licence, through Entra Suite or standalone; provider cost depends on the Microsoft Security Store offer."
audiences: ["m365-admin","security","service-owner"]
tags: ["entra-id","identity","authentication","conditional-access","account-recovery","verified-id","passkeys"]
sources:
  - title: "Microsoft 365 Roadmap 529857"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=529857"
    kind: "roadmap"
  - title: "Microsoft 365 Roadmap 529856"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=529856"
    kind: "roadmap"
  - title: "Account recovery overview in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-account-recovery-overview"
    kind: "learn"
  - title: "Configure account recovery settings in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    kind: "learn"
  - title: "Frequently asked questions about account recovery in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/self-service-account-recovery"
    kind: "learn"
  - title: "Create an ID verification profile in Microsoft Entra Verified ID"
    url: "https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile"
    kind: "learn"
  - title: "Require identity verification with Conditional Access"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Create verifiedIdProfile"
    url: "https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0"
    kind: "learn"
  - title: "verifiedIdUsageConfiguration resource type"
    url: "https://learn.microsoft.com/graph/api/resources/verifiedidusageconfiguration?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update conditionalAccessSettings"
    url: "https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "userActionExclusion resource type"
    url: "https://learn.microsoft.com/graph/api/resources/useractionexclusion?view=graph-rest-beta"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether the tenant's Account recovery policy is enabled"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Account recovery > Settings (preview) > Account recovery policy"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    api: null
    note: "Authentication Policy Administrator. Disabled by default; enable it in the settings blade. A profile alone does not enable it."
  - governs: "TAP issuance and stale-credential cleanup after recovery"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Account recovery > Settings (preview) > Actions after recovery > Issue Temporary Access Pass"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    api: null
    note: "TAP on by default; turning it off and cleanup are preview. With attestation required, TAP-free is supported only on Android. For Android Management API (AM API) users, keep TAP on. Cleanup is in the same Actions after recovery section."
  - governs: "Identity verification profile issuer, validation rules and usage purpose"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Verified ID > ID verification profiles > Profiles > Create profile > Profile purpose > Recovery > Profile mode > User group selection > Identity Verification Provider > Configure account validation"
      docs: "https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile"
    api:
      kind: "graph"
      call: "POST /v1.0/identity/verifiedId/profiles"
      docs: "https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0"
    note: "verifiedIdUsageConfigurations sets the purpose; use recovery. verifiedIdProfileConfiguration sets issuer and claim validation. The API documents no user-group assignment. Least-privileged role: Authentication Policy Administrator."
  - governs: "Whether All resources Conditional Access policies also apply to recovery (global exclusion)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Settings (Preview) > Global exclusions > Account onboarding and recovery (Preview)"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification"
    api:
      kind: "graph"
      call: "PATCH /beta/identity/conditionalAccess/settings"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta"
    note: "Preview. Beta API: exclusions.allResourcesExclusions.userActionExclusions sets it via userAction accountrecovery, state enabled or disabled; supply the complete collection. Beta APIs are not supported for production applications."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-25"
roadmapModified: "2025-11-21T00:00:57"
changes:
  - date: "2026-11-24"
    note: "First briefing for roadmap item 529857 (Android, Desktop, iOS); the Web version is tracked under item 529856."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 88 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected after the independent check: Android Management API exception to TAP-free recovery, the beta Graph call for the Conditional Access global exclusion, and checklist items without matching control rows removed."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: the rollout test step now says Evaluation mode does not recover accounts and Production is for a deliberate end-to-end test with a small group."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 0 of 104 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected after the independent check: the profile control now covers issuer, validation rules and purpose (the API documents no user-group assignment), and three control paths now reach the setting."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 100 statements confirmed"
version: 4
verification:
  status: "verified"
  date: "2026-11-25"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 100
  confirmed: 100
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "fb97adb0a8bf0df3c70714d588797e4a"
---

## What's changing

Microsoft Entra ID account recovery lets a user who has lost all registered authentication methods regain access after third-party identity verification. Microsoft Learn describes it as re-establishing trust in the user's identity, where self-service password reset needs at least one surviving method. The roadmap describes it as self-service account recovery for tenants using passkeys, recovering from total loss with Verified ID and Face Check.

This briefing covers roadmap item 529857 (platforms listed: Android, Desktop, iOS; target June CY2026). Microsoft lists the same feature under a second item, 529856 (platform: Web; target May CY2026).

Learn describes the flow. The user identifies their account at sign-in and says they cannot access it. They are sent to the identity verification provider named in their profile, receive a Verified ID credential stored in Microsoft Authenticator, and present it to Entra ID. Entra ID then validates it with the profile's directory claim mappings, a custom authentication extension, or both. By default the user then receives a Temporary Access Pass (TAP) and registers new methods such as passkeys.

The record gives the status as In development, with a preview date of November CY2025 and a target of June CY2026, and lists release phases General Availability and Preview. That target month has passed. Learn already documents the feature and labels parts of it as preview: the Account recovery Settings blade, the option to register without a TAP, and stale-credential cleanup. The profile creation page states that this preview is not available in national or sovereign clouds.

## Why it matters

This replaces a help-desk conversation with an automated identity check for the hardest recovery case, total loss of every method. That changes who can restore a credential: a user who passes verification and account validation can receive a TAP without help-desk involvement, so the strength of the profile's matching rules becomes a security decision.

If nobody acts, Learn states the policy stays disabled, so existing recovery arrangements continue. Review is worthwhile because the settings are tenant-wide in places (user exclusions and the Conditional Access global exclusion), and because licences and a provider contract have to be in place before a pilot.

## Risk assessment

**Data exposure**

- Learn notes that identity verification processes government-issued documents and biometric data through third-party providers. Each provider has its own privacy and retention terms in its Microsoft Security Store offer, so review them before production use.
- A custom authentication extension is optional. Learn says the data it processes stays within the organisation's trust boundary and only the match result is returned to the recovery flow.

**Security & identity**

- Recovery is a route to restoring credentials. Learn warns that name-only matching may not provide sufficient assurance for high-risk accounts, and suggests a custom authentication extension for sensitive populations.
- Conditional Access applies to recovery, and Learn says policies requiring unsupported controls (Terms of use, Require authentication strength and most other Microsoft Entra-specific controls) can block recovery or leave requirements unenforced.
- With TAP issuance off and stale-credential cleanup on, Learn says all previously registered authentication methods are deleted after the replacement passkey is registered.
- Learn says account recovery does not support B2B users, external guest users or federated users.

**Autonomy & actions**

- In Production mode, users who complete identity verification can fully recover their account and receive a TAP by default. Use Evaluation mode first: Learn says accounts are not recovered in that mode.
- Learn suggests that accounts such as a CEO's or finance controller's may not suit self-service recovery and might be restricted to processes with a human in the loop.

**Change & support**

- Creating a profile in the portal also turns on Verified ID as an authentication method for all users, and profile changes can take 5-10 minutes to apply.
- Passkey registration after recovery depends on Microsoft Authenticator versions and device combinations; Learn says it does not establish a complete device support matrix for the TAP-free path.
- Successful identity verification alone does not show that recovery completed, so support teams need to test through to replacement-method registration.

## Cost and licensing

Learn's FAQ says users need a Microsoft Entra ID P1 licence to use account recovery, and that a Face Check licence is also required, either through Entra Suite or standalone. The Microsoft Entra licensing page lists Face Check as an add-on for the Free, P1, P2 and ID Governance columns and as included for Entra Suite, and lists account recovery from P1 upwards.

Identity verification providers are purchased separately through the Microsoft Security Store and are not included in Entra licences. The FAQ says the provider cost depends on the offer you subscribe to, and the Azure subscription role needed for that subscription is Contributor or Billing Administrator.

The Account recovery overview in the Microsoft Entra admin center includes a cost savings estimator that compares help-desk recovery costs with self-service recovery using your own inputs, including the provider's cost per verification.

## Scope

**Users.** Users in the groups included in an ID verification profile. Excluded groups apply globally across all profiles. B2B, external guest and federated users are not supported.

**Roles.** The Authentication Policy Administrator role manages Account recovery settings. Creating profiles needs Authentication Policy Administrator or Global Administrator, with Authentication Policy Administrator the least-privileged option.

**Clouds and platforms.** The record lists Worldwide (Standard Multi-Tenant) and the platforms Android, Desktop and iOS. Learn's profile page says the preview is for the Microsoft public cloud and not national or sovereign clouds.

**Prerequisites.** Entra ID P1 and the identity verification licences, Verified ID enabled, Face Check configured, a recovery profile, and Microsoft Authenticator 6.2610.7075 or later on Android or 6.8.58 or later on iOS. Passkeys (FIDO2) must be enabled in the Authentication methods policy so users can register one after recovery.

**Rollout.** The Account recovery policy is disabled by default for new and existing tenants; tenants that used an earlier preview must also enable the new policy.

## Governance guidance

### Before rollout

- Confirm licences: Entra ID P1, a Face Check licence (add-on or Entra Suite) and an identity verification provider subscribed through the Microsoft Security Store.
- Review each provider's privacy, data retention and regional compliance terms before production use.
- List accounts that should not use self-service recovery, and record that profile exclusions apply to all profiles.

### At rollout

- Create a recovery profile in Evaluation mode for a small test group (Verified ID > ID verification profiles > Profiles).
- Enable the Account recovery policy in Account recovery settings; profile creation does not enable it.
- Choose the TAP issuance setting, and enable stale-credential cleanup only after reviewing its scope.
- After testing verification in Evaluation mode, use Production only for a deliberate end-to-end recovery test with the small test group; confirm replacement-method registration on the intended devices before expanding scope.

### After rollout

- Add profiles for other populations only after the first group recovers successfully.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether the tenant's Account recovery policy is enabled</strong><br><small>Tenant</small><br><small class="controls__note">Authentication Policy Administrator. Disabled by default; enable it in the settings blade. A profile alone does not enable it.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Account recovery › Settings (preview) › Account recovery policy <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>TAP issuance and stale-credential cleanup after recovery</strong><br><small>Tenant</small><br><small class="controls__note">TAP on by default; turning it off and cleanup are preview. With attestation required, TAP-free is supported only on Android. For Android Management API (AM API) users, keep TAP on. Cleanup is in the same Actions after recovery section.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Account recovery › Settings (preview) › Actions after recovery › Issue Temporary Access Pass <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Identity verification profile issuer, validation rules and usage purpose</strong><br><small>Group</small><br><small class="controls__note">verifiedIdUsageConfigurations sets the purpose; use recovery. verifiedIdProfileConfiguration sets issuer and claim validation. The API documents no user-group assignment. Least-privileged role: Authentication Policy Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Verified ID › ID verification profiles › Profiles › Create profile › Profile purpose › Recovery › Profile mode › User group selection › Identity Verification Provider › Configure account validation <a href="https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/identity/verifiedId/profiles</code> <a href="https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether All resources Conditional Access policies also apply to recovery (global exclusion)</strong><br><small>Tenant</small><br><small class="controls__note">Preview. Beta API: exclusions.allResourcesExclusions.userActionExclusions sets it via userAction accountrecovery, state enabled or disabled; supply the complete collection. Beta APIs are not supported for production applications.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Settings (Preview) › Global exclusions › Account onboarding and recovery (Preview) <a href="https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/identity/conditionalAccess/settings</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Creating an ID verification profile, enabling the tenant's Account recovery policy and choosing actions after recovery are three separate tasks. A Production-mode profile does not enable recovery, and the default TAP setting does not enable it either.

Conditional Access protects recovery through the **Account onboarding and recovery** user action. Learn says a policy targeting that user action is separate from the profile, and that the global exclusion affects every policy targeting All resources. Review that impact with the Conditional Access policy owner before changing it.

Passkeys (FIDO2) must be enabled in the Authentication methods policy for users to register a passkey after recovery; see the profile page's Getting started checklist. Microsoft Graph documents the global exclusion through the beta Conditional Access settings API; APIs for the recovery policy and actions after recovery are not yet documented.

## Open questions

- Which parts of account recovery are generally available, and when? Learn labels the Settings blade, TAP-free registration and stale-credential cleanup as preview while the roadmap target for this item is June CY2026 and the status is In development. Watch the roadmap item and the Learn page.
- What do Face Check and a provider's verification cost per recovery? The FAQ says provider cost depends on the Security Store offer; watch the Learn licensing page.
- Which device and registration-method combinations support the TAP-free path, beyond Android when passkey attestation is required? Learn's FAQ already documents the Android Management API (AM API) exception: keep TAP issuance on and issue a TAP at completion.
- What happens on a partial failure of stale-credential cleanup? Learn says partial-deletion behaviour, retries and required support actions still need confirmation.
- Will Microsoft publish an API for the tenant's Account recovery policy and actions after recovery? Watch the Learn Graph reference.

<!-- rationale
risk: Low. Learn says the Account recovery policy is disabled by default, so nothing changes until an admin enables it; once enabled it becomes a route to restore credentials, so profile scope and Conditional Access need care.
cost: Medium. Learn requires Microsoft Entra ID P1 plus a Face Check licence (add-on, or through Entra Suite), and the identity verification provider is bought separately through the Microsoft Security Store.
impact: Low. Admins configure it, and only users who lose all registered authentication methods in a profile's scope go through recovery.
-->
