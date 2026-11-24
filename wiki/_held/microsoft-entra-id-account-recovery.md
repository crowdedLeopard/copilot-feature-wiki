---
title: "Microsoft Entra: account recovery through government ID verification (Web)"
slug: "microsoft-entra-id-account-recovery"
roadmapId: 529856
topic: "governance"
products: ["Microsoft Entra"]
summary: "Microsoft Entra account recovery lets users who lost every sign-in method regain access after ID and face verification. This is the Web roadmap item; 529857 covers mobile and desktop. Disabled by default, so admins choose whether to enable it."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "November CY2025"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Learn says users need a Microsoft Entra ID P1 licence and a Face Check licence (standalone or through Entra Suite). The identity verification provider is bought separately through the Microsoft Security Store."
audiences: ["security","m365-admin","service-owner"]
tags: ["entra-id","authentication","identity","conditional-access","account-recovery","entra-verified-id"]
sources:
  - title: "Microsoft 365 Roadmap 529856"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=529856"
    kind: "roadmap"
  - title: "Account recovery overview in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-account-recovery-overview"
    kind: "learn"
  - title: "Configure account recovery settings in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    kind: "learn"
  - title: "Perform account recovery in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-for-users"
    kind: "learn"
  - title: "Frequently asked questions about account recovery in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/self-service-account-recovery"
    kind: "learn"
  - title: "Create an ID verification profile in Microsoft Entra Verified ID"
    url: "https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Require identity verification with Conditional Access"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification"
    kind: "learn"
  - title: "Create verifiedIdProfile"
    url: "https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether account recovery is enabled for the tenant, and TAP issuance after recovery"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Account recovery > Settings (preview)"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    api: null
    note: "Authentication Policy Administrator. Policy is disabled by default. The same blade holds the preview TAP issuance and stale-credential cleanup options."
  - governs: "Which users, provider, purpose and mode an identity verification profile uses for recovery"
    scope: "group"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Verified ID > ID verification profiles > Profiles"
      docs: "https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile"
    api:
      kind: "graph"
      call: "POST /v1.0/identity/verifiedId/profiles"
      docs: "https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0"
    note: "Authentication Policy Administrator is least privileged. Select Recovery as purpose in the wizard; the request body's verifiedIdUsageConfigurations sets it."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2026-01-21T00:15:51"
changes:
  - date: "2026-11-24"
    note: "New briefing for the Web roadmap item: documents the tenant policy (disabled by default), ID verification profiles, licensing and the Conditional Access limits."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 5 of 86 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 86
  confirmed: 80
  unconfirmed: 1
  contradicted: 5
  attempts: 1
  hash: "7dc5d0414fb7331a23e52c68ac3878b3"
---

## What's changing

Microsoft Entra ID Account Recovery lets a user who has lost access to every registered authentication method regain access to their organisational account. The roadmap item describes it as focused on identity verification and trust re-establishment before authentication methods are replaced, rather than simple credential recovery. Microsoft lists the same feature under a second roadmap item, 529857, which covers Android, Desktop and iOS with a target of June CY2026; this page covers item 529856, whose platform is Web.

Microsoft Learn already documents the feature. A user selects **Recover your account** at sign-in and is sent to an identity verification provider chosen by the organisation. Learn says the provider checks a government-issued ID and a Face Check confirms the person is present. The user then presents the resulting Verified ID. By default the user receives a Temporary Access Pass (TAP) and registers new authentication methods such as passkeys. Learn labels parts of this as preview, including the **Settings (preview)** blade and the option to register without a TAP.

An administrator controls it with an identity verification profile and a tenant-level Account recovery policy. Learn says the policy is disabled by default for both new and existing tenants, and that existing profiles alone do not enable it. A profile runs in **Evaluation** mode, where accounts are not recovered, or **Production** mode, where verified users recover their accounts. An optional custom authentication extension can validate claims against an organisation's own records.

The roadmap record gives status In development, a preview date of November CY2025 and a General Availability target of May CY2026 for the Worldwide (Standard Multi-Tenant) cloud. These are targets. The record says In development while Learn documents a working preview, and this page reports both.

## Why it matters

This changes how a tenant can answer its hardest support call: a user who has lost every authentication method. Learn says the feature uses automated identity proofing to reduce reliance on manual help desk verification, and that help desk staff can be manipulated into granting access. Moving that decision to a provider's ID check and name matching is a trust decision that security owners should make deliberately, not inherit.

If nobody acts, the tenant policy stays disabled, so recovery for users who lost every method continues by whatever route you use today. Nothing in the sources says existing behaviour changes on arrival. The risk sits in enabling it carelessly: a wide profile scope, weak name-only matching or Conditional Access policies that block the journey.

## Risk assessment

**Data exposure**

- Identity verification involves government-issued documents and biometric data processed by third-party providers. Learn says providers have their own privacy and data retention policies, so review the provider's terms and your regional compliance requirements before enabling.
- A custom authentication extension keeps data in your trust boundary: Learn says only the match result returns to the recovery flow, and no organisational data is shared with Microsoft.

**Security & identity**

- In Production mode, a user who completes verification receives a TAP by default, so the profile's group scope decides who can recover this way. Start with a small group in Evaluation mode.
- Learn warns that name-only matching may not provide sufficient assurance for high-risk accounts and suggests a custom authentication extension for sensitive populations.
- Exclusions in an ID verification profile apply across all profiles, and creating a profile turns on Verified ID as an authentication method for all users.
- The preview option to turn TAP issuance off can also enable stale-credential cleanup, which deletes all previously registered authentication methods after recovery.

**Autonomy & actions**

- The journey starts when a user selects **Recover your account** at sign-in. In Production mode a user who passes verification and account validation can recover without a help desk step; Evaluation mode recovers nothing.

**Change & support**

- Conditional Access policies can block recovery if they require controls unsupported for the onboarding and recovery user action, including **Require authentication strength** and **Terms of use**.
- Name mismatches between the ID and the user's first and last name properties can stop TAP issuance, so directory data needs checking before rollout.
- Learn does not support B2B users, external guest users or federated users, so those users need another route.
- Users need Microsoft Authenticator at the versions Learn lists. When passkey attestation is required, TAP-free registration is supported only on Android.

## Cost and licensing

**Licence.** Learn's FAQ says users need a Microsoft Entra ID P1 licence and a Face Check licence, either standalone or through Microsoft Entra Suite. The Microsoft Entra licensing page lists Face Check as an add-on, included in Microsoft Entra Suite.

**Meter.** The identity verification provider is purchased separately through the Microsoft Security Store, and Learn says the provider's cost depends on the offer you subscribe to. Learn's cost savings estimator in the Microsoft Entra admin center takes your help desk costs, target user count and the cost per verification from your chosen provider.

**Indirect costs.** Administrators need the Contributor or Billing Administrator role on an Azure subscription for the provider subscription. Expect admin time for the pilot and a support briefing.

## Scope

**Users.** A profile's included groups define who is offered recovery. Learn says excluded groups apply across all profiles. B2B users, external guest users and federated users are not supported. Learn says recovery is designed for accounts with prior authentication events, so a user may need to authenticate once after the scope changes before the option appears.

**Roles.** The Authentication Policy Administrator role manages Account recovery settings. Creating profiles needs Authentication Policy Administrator or Global Administrator, with Authentication Policy Administrator named as least privilege.

**Clouds and platforms.** The roadmap lists Worldwide (Standard Multi-Tenant) and the platform Web for this item. Learn's profile page says the preview is not available in national or sovereign clouds.

**Prerequisites.** Learn lists Verified ID enabled, Face Check configured, an ID verification profile, supported replacement methods enabled for users in scope (for the TAP path, the Temporary Access Pass method), and Microsoft Authenticator 6.2610.7075 or later on Android or 6.8.58 or later on iOS.

## Governance guidance

### Before rollout

- Confirm licences with the finance owner: Microsoft Entra ID P1, Face Check and the provider offer in the Microsoft Security Store, plus the Azure subscription role for the provider subscription.
- Review the identity verification provider's privacy and data retention terms with your privacy and compliance leads before any user is in scope.
- Check that users in the pilot group have first and last name properties matching their government ID, and that they are enabled for the Temporary Access Pass method in the Authentication methods policy.
- Review Conditional Access policies, including those targeting **All resources**, for controls unsupported on the onboarding and recovery user action (see the global exclusion in the notes below).

### At rollout

- Create an ID verification profile with the **Recovery** purpose in **Evaluation** mode for a small test group (controls table, row 2).
- Enable the tenant's Account recovery policy only after the test group is confirmed (row 1), and keep TAP issuance at its default unless you deliberately choose the preview option.
- Test through registration of a replacement method, not only identity verification, on the Android and iOS devices your users have.

### After rollout

- Move the profile to **Production** only after Evaluation succeeds, then widen the group in steps.
- Check the Conditional Access results in the sign-in logs when a user reports that recovery is blocked.
- Allow 5-10 minutes after any profile change before retesting, and use **View audit logs** on the Profiles tab to review configuration changes.
- Brief the help desk on the **Recover your account** option and on name-mismatch errors.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether account recovery is enabled for the tenant, and TAP issuance after recovery</strong><br><small>Tenant</small><br><small class="controls__note">Authentication Policy Administrator. Policy is disabled by default. The same blade holds the preview TAP issuance and stale-credential cleanup options.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Account recovery › Settings (preview) <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users, provider, purpose and mode an identity verification profile uses for recovery</strong><br><small>Group</small><br><small class="controls__note">Authentication Policy Administrator is least privileged. Select Recovery as purpose in the wizard; the request body's verifiedIdUsageConfigurations sets it.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Verified ID › ID verification profiles › Profiles <a href="https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/identity/verifiedId/profiles</code> <a href="https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Two settings must both be right: the profile (purpose, mode, groups, provider, account validation) is managed under Verified ID, while tenant enablement, TAP issuance and stale-credential cleanup are managed in Account recovery settings. Creating a profile does not enable the tenant policy, and enabling the policy does not create a profile.

Conditional Access has a separate **Account onboarding and recovery** user action. Learn says a tenant-wide global exclusion removes that user action from **All resources** policies, while policies that target the user action still apply. Learn describes that exclusion as a preview setting, and it is not a replacement for protecting recovery; see [Require identity verification with Conditional Access](https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification).

Microsoft Learn documents no Microsoft Graph operation for the tenant-level Account recovery policy at the time of writing (November 2026), so row 1 has no automation side. Row 2's call creates a profile; it does not enable the tenant policy.

## Open questions

- Which parts of account recovery move from preview to General Availability when the roadmap's May CY2026 target is reached, and when does the record's In development status change? Watch the roadmap item and the Learn overview page.
- Does the Android, Desktop and iOS roadmap item (529857, target June CY2026) change the Web behaviour described here? Watch that item and the Learn user guide.
- Will account recovery become available in national and sovereign clouds, given the roadmap lists only Worldwide (Standard Multi-Tenant)?
- Will Microsoft document an API or script route for the tenant Account recovery policy and its TAP and cleanup settings? Watch the Microsoft Graph reference.

<!-- rationale
risk: Medium. Disabled by default, but once enabled a user who passes third-party ID and face verification can receive a Temporary Access Pass, so name matching and Conditional Access scope need care.
cost: Variable. Learn lists Microsoft Entra ID P1 plus a Face Check licence, and the identity verification provider's charge depends on the offer subscribed to in the Microsoft Security Store.
impact: Low. Admins configure it and only users in a profile's scope who have lost all authentication methods would use it; the tenant policy is disabled until an admin enables it.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[1].api; Governance controls / command: POST /v1.0/identity/verifiedId/profiles provides automation for the row's user scope, provider, purpose and mode. | Found: Searched: 'Microsoft Graph verifiedIdProfile assign groups include exclude recovery profile users scope'; read create-profile, verifiedIdProfile, verifiedIdUsageConfiguration and verifiedIdProfileConfiguration v1.0 references. They document creation and configuration, not group assignment. | Fix: Keep 'POST /v1.0/identity/verifiedId/profiles', but replace the row note with 'This call creates the profile, not its user-group assignment or the tenant policy. verifiedIdProfileConfiguration.acceptedIssuer sets the issuer; verifiedIdUsageConfigurations.purpose sets Recovery and isEnabledForTestOnly sets evaluation or production. Configure user scope through the admin UI.' The create reference is https://learn.microsoft.com/graph/api/identityverifiedidroot-post-profiles?view=graph-rest-1.0.
- [contradicted, blocker] Why it matters / default: Nothing in the sources says existing behaviour changes on arrival. | Found: If your tenant already uses account recovery from an earlier preview, you also need to enable the new policy to continue using the feature. | Fix: Replace 'Nothing in the sources says existing behaviour changes on arrival' with 'Tenants already using the earlier preview must enable the new Account recovery policy to continue using recovery.' Qualify the preceding no-action statement as applying to tenants that have not used the earlier preview. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable
- [contradicted, blocker] Risk assessment: Security & identity / behaviour: Stale-credential cleanup deletes all previously registered authentication methods after recovery. | Found: After successful recovery and replacement-passkey registration, deletes all previously registered authentication methods while preserving the new passkey. If deletion fails, recovery remains successful. | Fix: Replace the cleanup clause with 'When explicitly enabled, stale-credential cleanup deletes previously registered authentication methods only after successful recovery and replacement-passkey registration, preserves the new passkey, and does not make recovery fail if deletion fails.' Keep its preview status and TAP-off requirement. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui; Governance controls / admin-path: Account recovery enablement and TAP issuance are under Microsoft Entra admin center > Entra ID > Account recovery > Settings (preview). | Found: Go to Entra ID > Account recovery. Open Settings (preview). Use Actions after recovery in Account recovery settings to choose how users register replacement methods. | Fix: Keep the documented route, but extend the TAP part to 'Entra ID > Account recovery > Settings (preview) > Actions after recovery > Issue Temporary Access Pass'; explain in the note that tenant enablement is the Account recovery policy on the same settings page. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable
- [supported, minor] controls[1].ui; Governance controls / admin-path: Profile configuration is under Microsoft Entra admin center > Verified ID > ID verification profiles > Profiles. | Found: Go to Verified ID > ID verification profiles > Profiles. Select the profile name to open its configuration, or choose the action you need: Create profile. | Fix: For the creation instruction, extend the path to 'Verified ID > ID verification profiles > Profiles > Create profile'. Keep the note that Recovery is selected as the purpose in the wizard. | Source: https://learn.microsoft.com/entra/verified-id/how-to-create-id-verification-profile
- [contradicted, minor] front matter: risk; rationale: risk / consistency: Medium risk is justified by exposure after enabling an otherwise disabled-by-default capability. | Found: Risk rationale: 'Medium. Disabled by default, but once enabled'. Schema: rate a tenant where nobody has acted; low includes 'nothing happens until an admin opts in'. | Fix: Set risk to 'low' and use 'Low. The tenant policy is disabled until an administrator enables it; third-party identity proofing, name matching and Conditional Access need review before opting in.' Keep the enabling risks in the body.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs review of Conditional Access policies but no controls-table row covers Conditional Access. | Found: Checklist: 'Review Conditional Access policies, including those targeting All resources'. Table rows cover Account recovery settings and ID verification profiles only. | Fix: Remove the Conditional Access checklist bullet because it has no matching controls-table row. Retain the verified explanation and reference in Governance controls; do not add a row as part of this correction.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist directs review of TAP eligibility in the Authentication methods policy but no controls-table row covers that policy. | Found: Checklist: 'they are enabled for the Temporary Access Pass method in the Authentication methods policy'. The table's TAP control concerns issuance after recovery, not authentication-method eligibility. | Fix: Remove 'and that they are enabled for the Temporary Access Pass method in the Authentication methods policy' from the checklist bullet. Retain the verified prerequisite in Scope; do not add a row as part of this correction.
-->
