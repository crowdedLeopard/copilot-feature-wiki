---
title: "Microsoft Entra: Conditional Access for Entra ID account recovery"
slug: "microsoft-entra-conditional-access-support-for-entra-id-account-recovery"
roadmapId: 529855
topic: "governance"
products: ["Microsoft Entra"]
summary: "Conditional Access policies can be applied to the Entra ID account recovery flow. Account recovery is off until an admin enables it, so admins who plan to use it should review which policies will apply."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "May CY2026"
previewDate: "March CY2026"
risk: "medium"
cost: "variable"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "mixed"
  notes: "Microsoft's account recovery FAQ says users need a Microsoft Entra ID P1 licence and a Face Check licence (Entra Suite or standalone); the verification provider's cost depends on its Microsoft Security Store offer. No rate is stated on these pages."
audiences: ["m365-admin","security","service-owner"]
tags: ["conditional-access","entra-id","authentication","identity","account-recovery"]
sources:
  - title: "Microsoft 365 Roadmap 529855"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=529855"
    kind: "roadmap"
  - title: "Configure account recovery settings in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    kind: "learn"
  - title: "Account recovery overview in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-account-recovery-overview"
    kind: "learn"
  - title: "Require identity verification with Conditional Access"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification"
    kind: "learn"
  - title: "Conditional Access: Target resources"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"
    kind: "learn"
  - title: "Frequently asked questions about account recovery in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/authentication/self-service-account-recovery"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Billing model for Face Check with Microsoft Entra Verified ID"
    url: "https://learn.microsoft.com/entra/verified-id/verified-id-pricing"
    kind: "learn"
  - title: "Update conditionalAccessSettings (Conditional Access)"
    url: "https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta"
    kind: "learn"
  - title: "conditionalAccessApplications resource type"
    url: "https://learn.microsoft.com/graph/api/resources/conditionalaccessapplications?view=graph-rest-beta"
    kind: "learn"
  - title: "View applied Conditional Access details in the Microsoft Entra activity logs"
    url: "https://learn.microsoft.com/entra/identity/monitoring-health/how-to-view-applied-conditional-access-policies"
    kind: "learn"
  - title: "Require a compliant device, Microsoft Entra hybrid joined device, or multifactor authentication for all users"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-alt-all-users-compliant-hybrid-or-mfa"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Whether account recovery is enabled, and Temporary Access Pass issuance after recovery"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Account recovery > Settings (preview)"
      docs: "https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable"
    api: null
    note: "Authentication Policy Administrator role. Disabled by default. Preview settings."
  - governs: "Conditional Access requirements for the account recovery journey"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Target resources > User actions > Account onboarding and recovery"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification"
    api: null
    note: "Preview user action. Authentication strength and terms of use are unsupported for it. Set the Client apps condition explicitly."
  - governs: "Whether All resources policies also apply to onboarding and recovery"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Settings (Preview) > Global exclusions > Account onboarding and recovery (Preview)"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification"
    api:
      kind: "graph"
      call: "PATCH /beta/identity/conditionalAccess/settings"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta"
    note: "Beta. The request body sets exclusions.allResourcesExclusions.userActionExclusions with userAction accountrecovery; supply the complete collection. Needs Policy.ReadWrite.ConditionalAccess."
  - governs: "Which Conditional Access policies applied to a recovery attempt"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Monitoring & health > Sign-in logs > sign-in > Conditional Access"
      docs: "https://learn.microsoft.com/entra/identity/monitoring-health/how-to-view-applied-conditional-access-policies"
    api:
      kind: "graph"
      call: "GET /v1.0/auditLogs/signIns"
      docs: "https://learn.microsoft.com/entra/identity/monitoring-health/how-to-view-applied-conditional-access-policies"
    note: "Read-only. Needs a role that can view both the logs and the policies."
confidence: "high"
created: "2026-11-24"
updated: "2026-11-24"
roadmapModified: "2025-12-23T23:00:50"
changes:
  - date: "2026-11-24"
    note: "First briefing: Conditional Access for Entra ID account recovery, with the user-action policy, global exclusion and sign-in log controls."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 76 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 76
  confirmed: 74
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "0d097b719a9a379522eb940198e1a6cd"
---

## What's changing

The roadmap item says Microsoft Entra ID Account Recovery, the mechanism that lets users regain access to their accounts when they have lost every registered authentication method, will gain support for Conditional Access (CA) policies that protect the recovery flow. The record lists Worldwide (Standard Multi-Tenant), the Web platform, and release phases General Availability and Preview. Its preview target is March CY2026 and its general availability target is May CY2026, yet the status is still In development in November 2026, so treat both dates as targets that have passed.

Microsoft Learn already describes the capability, and marks it as preview. CA has a user action, **Account onboarding and recovery**, that policies can target to protect recovery separately from ordinary resource access. Learn also says identity-verified recovery requires identity verification whether or not a CA policy asks for it. The roadmap record links to no Learn page, so confirm that these Learn pages cover the same change as the roadmap item.

Learn sets out limits. **Terms of use**, **Require authentication strength** and most other Microsoft Entra-specific controls are not supported for this user action, and Learn says there is no current plan or timeline to add them. The policy must set the **Client apps** condition explicitly to **Browser** and **Mobile apps and desktop clients**. Policies targeting **All resources** also apply to recovery unless a tenant-wide global exclusion is enabled; policies that target the user action still apply when it is on.

## Why it matters

Account recovery replaces help-desk verification for users who have lost every method, so the policies around it decide whether a locked-out user can get back in and whether an attacker faces extra checks. Learn warns that CA policies can block recovery if they require unsupported controls, and that unsupported requirements can also be left unenforced. An existing All resources policy that requires authentication strength is the likely example to check.

If nobody acts, Learn says the account recovery policy is disabled by default for new and existing tenants, so users cannot recover through it. The exposure arises when an admin enables recovery without first reviewing which CA policies will meet it.

## Risk assessment

**Data exposure**
- Recovery involves government-issued ID and biometric checks through a third-party identity verification provider, and Learn tells admins to review privacy, data retention and regional compliance requirements first. CA does not change that data flow; it adds conditions to the journey.

**Security & identity**
- Policies targeting All resources apply to recovery events unless the global onboarding and recovery exclusion is enabled. Learn says this can stop users establishing or restoring credentials, and that the exclusion affects every All resources policy in the tenant.
- Authentication strength and terms of use are not supported for the user action, so a policy that relies on either can block recovery or leave the requirement unenforced.
- The exclusion is not a replacement for a policy on the user action: Learn says to configure and test the user-action policy instead.

**Autonomy & actions**
- No change: the feature adds conditions to an existing user-driven flow. After successful validation recovery issues a Temporary Access Pass by default, which is set in the recovery settings, not by CA.

**Change & support**
- Report-only mode does not evaluate policies in the user-action scope, so a policy cannot be validated that way; Learn calls for an isolated enforcement pilot.
- Expect help-desk calls from users blocked by a mismatched policy; Learn says to read the CA result in the sign-in logs to find the blocking policy.

## Cost and licensing

Microsoft's account recovery FAQ says users need a Microsoft Entra ID P1 licence and a Face Check licence, through Entra Suite or standalone, and that the identity verification provider's cost depends on the offer subscribed to in the Microsoft Security Store. The Entra licensing page lists Account recovery under P1, P2, ID Governance, Entra Suite and Microsoft 365 E7, and lists Face Check as an add-on for Free, P1, P2 and ID Governance and as included in Entra Suite and Microsoft 365 E7.

The Face Check billing page says pricing is per unique Face Check verification, and gives two routes: Entra Suite, or pay-as-you-go through a linked Azure subscription. Verification attempts that return a face-matching score or a failed match are billed.

Indirect costs are admin time to design and test policies, an enforcement pilot, and help-desk time for blocked users.

## Scope

Account recovery applies to the users in scope of its identity verification profiles, which Learn says are set per user group; it does not support B2B, external guest or federated users. The recovery settings need the Authentication Policy Administrator role. The roadmap lists Worldwide (Standard Multi-Tenant) only, which is a record fact and not a statement about other clouds.

Prerequisites on Learn include Verified ID enabled, Face Check configured, an ID verification profile for recovery, and Microsoft Authenticator at the versions the page lists. Both the **Account onboarding and recovery** user action and the global exclusion are marked preview on Learn. Learn also says identity verification step-up and recovery are not currently supported when started from a mobile app while Link to Windows is the active broker, with support planned for a later Link to Windows version.

## Governance guidance

### Before rollout
- Inventory existing CA policies that target All resources and list which require authentication strength or terms of use; Learn says those controls are unsupported for recovery.
- Check whether the tenant used account recovery in the earlier preview: Learn says such tenants must enable the new policy to continue.
- Confirm emergency access accounts are excluded from the pilot policy.
- Decide, with the owner of the All resources policies, whether to enable the global onboarding and recovery exclusion; record its current state for rollback.

### At rollout
- Enable the account recovery policy in the recovery settings only after the CA review, and start with a test group and an ID verification profile in Evaluation mode.
- Create the user-action policy with **Client apps** set explicitly to **Browser** and **Mobile apps and desktop clients**, and test it in an isolated enforcement pilot because report-only is not evaluated for this action.
- Test recovery through to registration of a replacement method, not only identity verification.

### After rollout
- Review the Conditional Access tab of sign-in logs for blocked recovery attempts and identify the blocking policy.
- Re-check the Learn pages for the preview status and the roadmap item for GA.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether account recovery is enabled, and Temporary Access Pass issuance after recovery</strong><br><small>Tenant</small><br><small class="controls__note">Authentication Policy Administrator role. Disabled by default. Preview settings.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Account recovery › Settings (preview) <a href="https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Conditional Access requirements for the account recovery journey</strong><br><small>Tenant</small><br><small class="controls__note">Preview user action. Authentication strength and terms of use are unsupported for it. Set the Client apps condition explicitly.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Target resources › User actions › Account onboarding and recovery <a href="https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Whether All resources policies also apply to onboarding and recovery</strong><br><small>Tenant</small><br><small class="controls__note">Beta. The request body sets exclusions.allResourcesExclusions.userActionExclusions with userAction accountrecovery; supply the complete collection. Needs Policy.ReadWrite.ConditionalAccess.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Settings (Preview) › Global exclusions › Account onboarding and recovery (Preview) <a href="https://learn.microsoft.com/entra/identity/conditional-access/policy-require-identity-verification" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /beta/identity/conditionalAccess/settings</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which Conditional Access policies applied to a recovery attempt</strong><br><small>Tenant</small><br><small class="controls__note">Read-only. Needs a role that can view both the logs and the policies.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Monitoring &amp; health › Sign-in logs › sign-in › Conditional Access <a href="https://learn.microsoft.com/entra/identity/monitoring-health/how-to-view-applied-conditional-access-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/auditLogs/signIns</code> <a href="https://learn.microsoft.com/entra/identity/monitoring-health/how-to-view-applied-conditional-access-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The recovery settings need the Authentication Policy Administrator role. The user-action policy and the global exclusion are CA controls, and the exclusion affects every All resources policy, not only the pilot. Enabling account recovery, choosing Temporary Access Pass issuance and applying CA are three separate settings; Learn says TAP issuance being on by default does not enable recovery.

The beta Graph operation changes the global exclusion; it is a beta API that Learn says is subject to change. Use the sign-in logs to confirm which policies applied to a recovery attempt.

## Open questions

- When will Conditional Access for account recovery reach general availability, given the May CY2026 target has passed while the roadmap status is In development? Watch the roadmap item and the Learn pages.
- Does the global onboarding and recovery exclusion start enabled or disabled in a tenant? The Learn page describes enabling it and recording its previous state but does not state its default.
- Will Microsoft add authentication strength or terms of use for the user action? Learn says there is no current plan or timeline.
- Which Graph operation sets the Account onboarding and recovery user action in a policy? Learn's conditionalAccessApplications reference lists no value for it at the time of writing (November 2026).

<!-- rationale
risk: Medium. Once account recovery is enabled, policies targeting All resources also apply to it unless a tenant-wide exclusion is set, and unsupported controls can block recovery or go unenforced.
cost: Variable. Account recovery needs Microsoft Entra ID P1 plus a Face Check licence, and Face Check pay-as-you-go is billed per verification; the identity verification provider's cost is separate.
impact: Low. Admins who set the policies notice first, and users notice only if they have lost every authentication method and go through recovery.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: Conditional Access does not change recovery's identity-verification data flow. | Found: Searched: account recovery Conditional Access identity verification data flow biometric government documents unchanged. Opened recovery overview, recovery settings, FAQ and CA identity-verification guidance; none explicitly establishes an unchanged data flow. | Fix: Replace 'CA does not change that data flow; it adds conditions to the journey.' with 'CA adds conditions to the recovery journey.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].ui / admin-path: Recovery enablement and TAP issuance settings are reached through Microsoft Entra admin center > Entra ID > Account recovery > Settings (preview). | Found: Go to Entra ID > Account recovery. Open Settings (preview). Use Actions after recovery in Account recovery settings to choose how users register replacement methods. | Fix: Keep the shared path, which reaches the settings page, and append to the row note: 'On this page, enable the Account recovery policy; under Actions after recovery, choose Issue Temporary Access Pass.' | Source: https://learn.microsoft.com/entra/identity/authentication/how-to-account-recovery-enable
- [supported, minor] controls[2].note; Governance controls / availability: The settings operation is a beta API subject to change. | Found: APIs under the /beta version in Microsoft Graph are subject to change. Use of these APIs in production applications is not supported. | Fix: Append to the beta qualification: 'Microsoft does not support using beta APIs in production applications.' | Source: https://learn.microsoft.com/graph/api/conditionalaccesssettings-update?view=graph-rest-beta
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist asks the reader to configure a recovery profile in Evaluation mode but the table has no profile control row. | Found: start with a test group and an ID verification profile in Evaluation mode; table rows cover recovery settings, CA user-action policies, global exclusions and sign-in logs. | Fix: The At rollout step's ID verification profile mode and group-scope control has no corresponding table row. Remove 'and an ID verification profile in Evaluation mode' from that checklist step; do not add a row in this correction.
-->
