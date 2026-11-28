---
title: "Microsoft Entra ID: passkey support for B2B guest users"
slug: "microsoft-entra-id-passkey-support-for-b2b-users"
roadmapId: 569432
topic: "governance"
products: ["Microsoft Entra"]
summary: "Microsoft plans to let B2B guest and external users register resource tenant passkeys to meet that tenant's MFA rules. The roadmap says it is on by default for guests already in passkey scope, so review your policies now."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC"]
platforms: []
targetDate: "October CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "included"
  notes: "Learn states that passkeys (FIDO2) are available in all Microsoft Entra ID editions, including Free, with no extra licences. Conditional Access authentication strengths need Microsoft Entra ID P1. No B2B-specific licence is published."
audiences: ["security","m365-admin","change-adoption"]
tags: ["entra-id","authentication","guest-access","conditional-access","identity","cross-tenant","gcc"]
sources:
  - title: "Microsoft 365 Roadmap 569432"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=569432"
    kind: "roadmap"
  - title: "How to enable passkeys (FIDO2) in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    kind: "learn"
  - title: "Run a registration campaign to set up a passkey or Microsoft Authenticator"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign"
    kind: "learn"
  - title: "Update fido2AuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "Get fido2AuthenticationMethodConfiguration"
    url: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-get?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create authenticationStrengthPolicy"
    url: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    kind: "learn"
  - title: "Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"
    kind: "learn"
  - title: "Require multifactor authentication strength for external users"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-guests-mfa-strength"
    kind: "learn"
  - title: "What is Microsoft Entra B2B collaboration?"
    url: "https://learn.microsoft.com/entra/external-id/what-is-b2b"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Which users and groups can register and use passkeys (FIDO2), and under which passkey profile"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Security > Authentication methods > Policies > Passkey (FIDO2) > Enable and Target > Add target > target > passkey profiles"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2"
      docs: "https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0"
    note: "Authentication Policy Administrator is the least privileged role for the Graph call."
  - governs: "Whether a registration campaign nudges users to register a passkey, and who is included or excluded"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Registration campaign > Edit > State > Enabled > Authentication method > Passkey"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authenticationmethodspolicy"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign"
    note: "The request body carries only the updated registrationEnforcement section. Select included or excluded users and groups on this page. Learn currently says guests are not nudged in a passkey campaign."
  - governs: "Which authentication methods a custom authentication strength permits"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Authentication strengths > New authentication strength > Passkeys (FIDO2)"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2"
    api:
      kind: "graph"
      call: "POST /v1.0/policies/authenticationStrengthPolicies"
      docs: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    note: "The request body sets allowedCombinations to [\"fido2\"]. Creates a custom strength only; a Conditional Access policy must apply it. Applies to external users who authenticate with Microsoft Entra ID."
confidence: "medium"
created: "2026-11-21"
updated: "2026-11-21"
roadmapModified: "2026-10-01T23:00:07"
changes:
  - date: "2026-11-21"
    note: "First briefing for this item; Learn still lists guest passkey registration as unsupported, so the page flags the roadmap and Learn disagreement."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 50 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-21"
    note: "Correction: the third control row now governs which authentication methods a custom authentication strength permits; control paths extended; the guest Conditional Access review step removed; B2B overview page added as a source."
  - date: "2026-11-21"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 66 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-28"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 66
  confirmed: 65
  unconfirmed: 0
  contradicted: 1
  attempts: 0
  hash: "c1df8cd90c632788820a798a4d485ab3"
---

## What's changing

Microsoft plans to let B2B users, including internal guest users and external users, register passkeys issued by a resource tenant and sign in with them to meet that tenant's multifactor authentication (MFA) requirements. The roadmap item says guests will be able to register from the resource tenant's My Security Info page, or in-line during a proof-up prompt or a passkey registration campaign.

The roadmap item states the change is on by default: B2B users already in scope for passkeys in your Authentication methods policy will be enabled automatically, and no action is required to turn it on. The roadmap also says that today passkeys are supported for member users in their home tenant.

The roadmap record lists the item as In development, with a General Availability target of October CY2026, for Worldwide (Standard Multi-Tenant) and GCC. That target month has passed at the time of writing (21 November 2026) and the status has not changed, so treat the timing as unconfirmed.

Learn does not yet describe this feature as available. The passkey (FIDO2) page still lists, under known issues, that registration of passkey credentials "isn't supported for internal or external guest users, including B2B collaboration users in the resource tenant". The registration campaign page says guests are not nudged in a passkey campaign because passkey support for guest users isn't currently available. Both describe today's behaviour, which this change would alter.

## Why it matters

If the roadmap is right, guests in your tenant who fall inside your passkey targeting get a new way to satisfy your MFA requirement without any change by you. That changes which credentials are accepted for people outside your organisation, and what your helpdesk sees from them. The record gives only the October CY2026 target, so decide your position before the change reaches the tenant.

The controls the roadmap points to already exist for members: the Authentication methods policy, the registration campaign and Conditional Access. Check who they currently target, because guests who are in the same groups or covered by an "All users" target are the ones the roadmap says will be enabled.

## Risk assessment

**Data exposure**
- No new data access is described. The roadmap item covers how guests prove their identity to the resource tenant, not what they can reach. Access to resources remains governed by the permissions and Conditional Access policies you already apply to guests.

**Security & identity**
- A resource tenant passkey becomes a credential held by people outside your organisation. The roadmap says guests already in scope for passkeys in the Authentication methods policy are enabled automatically, so a broad "All users" target on the Passkey (FIDO2) policy would include them.
- Passkey profiles let you set attestation, passkey type (device-bound or synced) and key restrictions by target group. Synced passkeys do not support attestation, so a guest group left on a profile that allows synced passkeys can register an unattested credential.
- A Conditional Access authentication strength can require passkeys. Learn says authentication strength policies currently apply only to external users who authenticate with Microsoft Entra ID; for other guest types, use the MFA grant control.

**Autonomy & actions**
- No autonomous behaviour is described. A registration campaign nudges users when they perform an interactive sign-in with MFA, so a passkey campaign that targets guests would start prompting them once guest support ships.

**Change & support**
- Expect guest questions about registering in your tenant rather than their home tenant, and about which device or passkey provider to use.
- Guests may now be prompted to register a passkey in the resource tenant at a proof-up prompt, so plan communication to partner organisations before rollout.

## Cost and licensing

Learn states that passkeys (FIDO2) are available in all Microsoft Entra ID editions, including Microsoft Entra ID Free, and that no extra licences are required ([How to enable passkeys (FIDO2) in Microsoft Entra ID](https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2)). That page does not address B2B guests specifically, and the roadmap item names no licence or meter for this change.

If you enforce passkeys for guests through a Conditional Access authentication strength, Learn says your tenant needs a Microsoft Entra ID P1 licence to use Conditional Access.

The indirect costs are admin time to review targeting and policies, partner communication and helpdesk load from guests registering credentials. How Microsoft bills guest users under Microsoft Entra External ID is a separate page, which this briefing does not summarise.

## Scope

**Who:** B2B users, including internal guest users and external users, in the resource tenant, according to the roadmap item. Members already use passkeys in their home tenant today.

**Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant) and GCC. Other clouds are not listed on the record, which is not a statement that they are excluded.

**Rollout:** the roadmap says on by default for B2B users already in scope for passkeys in the Authentication methods policy. Status is In development with a target of October CY2026, and the record lists no preview date.

**Roles:** Learn names Authentication Policy Administrator as the minimum role to configure the passkey policy and the registration campaign, and Conditional Access Administrator for authentication strengths.

**Prerequisites from today's pages:** users must complete MFA within the past five minutes before registering a passkey, and devices must support passkey (FIDO2) authentication.

## Governance guidance

### Before rollout
- Review who the Passkey (FIDO2) policy targets, including any "All users" target, since the roadmap says guests already in scope are enabled automatically (Entra ID > Security > Authentication methods > Policies).
- Check each passkey profile's attestation, passkey type and key restriction settings for the groups that contain guests, and decide whether guests should be allowed synced passkeys.
- Check whether a passkey registration campaign targets guests, and exclude guest groups if you do not want them prompted.
- Review which authentication strengths apply to guests and external users, and note that authentication strength currently applies only to external users who authenticate with Microsoft Entra ID.

### At rollout
- Watch the Microsoft 365 Roadmap item and Message center for a rollout notice and any admin action Microsoft sets.
- Tell partner organisations that guests may be prompted to register a passkey in your tenant, and where My Security Info is.
- Pilot with a small guest group by targeting a passkey profile at it before widening.

### After rollout
- Review guest sign-ins and registered authentication methods to see how many guests registered passkeys.
- Adjust the Authentication methods policy, registration campaign or authentication strength where guest registration is higher or lower than intended.
- Brief the helpdesk on how guests register and remove a passkey.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which users and groups can register and use passkeys (FIDO2), and under which passkey profile</strong><br><small>Tenant</small><br><small class="controls__note">Authentication Policy Administrator is the least privileged role for the Graph call.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Security › Authentication methods › Policies › Passkey (FIDO2) › Enable and Target › Add target › target › passkey profiles <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2</code> <a href="https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a registration campaign nudges users to register a passkey, and who is included or excluded</strong><br><small>Tenant</small><br><small class="controls__note">The request body carries only the updated registrationEnforcement section. Select included or excluded users and groups on this page. Learn currently says guests are not nudged in a passkey campaign.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Registration campaign › Edit › State › Enabled › Authentication method › Passkey <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authenticationmethodspolicy</code> <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which authentication methods a custom authentication strength permits</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets allowedCombinations to [&quot;fido2&quot;]. Creates a custom strength only; a Conditional Access policy must apply it. Applies to external users who authenticate with Microsoft Entra ID.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Authentication strengths › New authentication strength › Passkeys (FIDO2) <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/policies/authenticationStrengthPolicies</code> <a href="https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The roadmap names four places to review: the Authentication methods policy, the passkey registration campaign, Conditional Access policies and user scoping. The Authentication methods policy and registration campaign are rows above; the third row creates an authentication strength, not a Conditional Access policy. User scoping is the Include and Exclude targeting inside the first two.

In the first row, passkey profiles must first be enabled through the opt-in link in the banner on the Passkey (FIDO2) page if the tenant has not enabled them. The Graph update request uses includeTargets and excludeTargets for targeting, includeTargets[].allowedPasskeyProfiles for profile assignment, and passkeyProfiles for profile configuration.

A user in an excluded group of the Passkeys (FIDO2) policy is blocked from FIDO2 passkey registration and sign-in entirely, and this takes precedence over included groups. The roadmap item names these existing controls and no separate B2B passkey switch. Role: at least Authentication Policy Administrator for the first two rows, at least Conditional Access Administrator for authentication strengths.

## Open questions

- When will Microsoft roll this out, given the October CY2026 target has passed and the status is still In development? Watch the roadmap item and Message center.
- Will guest registration appear on the passkey (FIDO2) and registration campaign Learn pages, replacing the current statements that guests are unsupported?
- Will Microsoft issue a Message center notice for this on-by-default change, and what will it ask administrators to do?
- Which passkey profile settings, such as attestation and synced passkeys, will apply to B2B users in the resource tenant?
- How will a resource tenant passkey interact with cross-tenant MFA trust settings for external users from other Microsoft Entra tenants?

<!-- rationale
risk: Medium. The roadmap says guests already in scope of the Authentication methods policy are enabled automatically, so a new credential type reaches guests without an admin step, though existing policies govern it.
cost: Low. Learn says passkeys (FIDO2) need no extra licences in any Entra ID edition, so the known cost is admin time and guest support; nothing specific to B2B is published.
impact: Medium. Guest and external users in the resource tenant see new passkey prompts at My Security Info, during proof-up or in a registration campaign; members are not the target.
-->

<!-- verifier-findings (2026-11-28, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api; Governance controls table / command: PATCH /v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2 updates passkey targeting and profiles. | Found: PATCH https://graph.microsoft.com/v1.0/policies/authenticationMethodsPolicy/authenticationMethodConfigurations/fido2 | Fix: Keep the call. Add to controls[0].note: 'The request body uses includeTargets and excludeTargets for targeting, includeTargets[].allowedPasskeyProfiles for profile assignment, and passkeyProfiles for profile configuration.' These properties are documented at https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0 and already named in Governance controls. | Source: https://learn.microsoft.com/graph/api/fido2authenticationmethodconfiguration-update?view=graph-rest-1.0
- [supported, minor] controls[1].ui; Governance controls table / admin-path: Entra ID > Authentication methods > Registration campaign > Edit > State > Enabled > Authentication method > Passkey reaches the campaign configuration page. | Found: Browse to Entra ID > Authentication methods > Registration campaign, and select Edit. Select Enabled to enable and configure the registration campaign. For Authentication method, select the method to target: Passkey | Fix: Extend controls[1].ui.path to 'Entra ID > Authentication methods > Registration campaign > Edit > State > Enabled > Authentication method > Passkey > users or groups to include or exclude', completing the targeting portion of the row as documented at https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign
- [supported, minor] controls[1].api; Governance controls table / command: PATCH /v1.0/policies/authenticationmethodspolicy configures the registration campaign through registrationEnforcement. | Found: To update the policy, perform a PATCH on the authentication methods policy with only the updated registrationEnforcement section: PATCH https://graph.microsoft.com/v1.0/policies/authenticationmethodspolicy | Fix: Keep the call. Expand controls[1].note with: 'Within registrationEnforcement.authenticationMethodsRegistrationCampaign, state enables or disables the campaign, includeTargets[].targetedAuthenticationMethod is fido2 for passkeys, and includeTargets and excludeTargets set targeting.' Retain the current guest-support caveat. These properties are documented at https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-mfa-registration-campaign
- [supported, minor] Governance guidance: Before rollout, first bullet / admin-path: Entra ID > Security > Authentication methods > Policies is the starting page for reviewing Passkey (FIDO2) targeting. | Found: Browse to Entra ID > Security > Authentication methods > Policies. Select Passkey (FIDO2). Select Enable and Target. | Fix: Replace the abbreviated parenthetical path with 'Entra ID > Security > Authentication methods > Policies > Passkey (FIDO2) > Enable and Target', reaching the targeting control documented at https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2. | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-authentication-passkeys-fido2
- [contradicted, minor] Governance guidance: Before rollout, fourth bullet; After rollout, first bullet / consistency: The governance checklist's requests to review applied authentication strengths, guest sign-ins and registered methods are represented by the controls table. | Found: Review which authentication strengths apply to guests and external users. Review guest sign-ins and registered authentication methods. The third row creates an authentication strength, not a Conditional Access policy. | Fix: Remove 'Review which authentication strengths apply to guests and external users, and' from the Before rollout bullet, retaining 'Note that authentication strength currently applies only to external users who authenticate with Microsoft Entra ID.' Remove the After rollout bullet 'Review guest sign-ins and registered authentication methods to see how many guests registered passkeys.' There are no corresponding control rows for policy assignments, sign-in inspection or registered-method inspection; do not add rows as part of this correction.
-->
