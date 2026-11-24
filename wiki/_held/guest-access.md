---
kind: "concept"
title: "Guest access: who can your tenant invite, and what can guests reach?"
slug: "guest-access"
summary: "Guest access is Microsoft Entra B2B collaboration: external people invited into your tenant as guest users. Use it to decide who may invite, which organisations may be invited, what guests can see and how they sign in."
created: "2026-11-24"
updated: "2026-11-24"
version: 1
tags: ["guest-access","entra-id","identity","cross-tenant","conditional-access","governance"]
covers: []
sources:
  - title: "What is Microsoft Entra B2B collaboration?"
    url: "https://learn.microsoft.com/entra/external-id/what-is-b2b"
    kind: "learn"
  - title: "Configure external collaboration settings for B2B in Microsoft Entra External ID"
    url: "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"
    kind: "learn"
  - title: "Update authorizationPolicy"
    url: "https://learn.microsoft.com/graph/api/authorizationpolicy-update"
    kind: "learn"
  - title: "Allow or block B2B collaboration with organizations"
    url: "https://learn.microsoft.com/entra/external-id/allow-deny-list"
    kind: "learn"
  - title: "Manage cross-tenant access settings for B2B collaboration"
    url: "https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration"
    kind: "learn"
  - title: "Update crossTenantAccessPolicyConfigurationDefault"
    url: "https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-update"
    kind: "learn"
  - title: "Transition to governed collaboration with Microsoft Entra B2B collaboration"
    url: "https://learn.microsoft.com/entra/architecture/5-secure-access-b2b"
    kind: "learn"
  - title: "Microsoft Entra External ID pricing and billing overview"
    url: "https://learn.microsoft.com/entra/external-id/external-identities-pricing"
    kind: "learn"
  - title: "Microsoft Entra External ID frequently asked questions"
    url: "https://learn.microsoft.com/entra/external-id/customers/faq-customers"
    kind: "learn"
  - title: "Tutorial: Enforce multifactor authentication for B2B guest users"
    url: "https://learn.microsoft.com/entra/external-id/b2b-tutorial-require-mfa"
    kind: "learn"
  - title: "Create conditionalAccessPolicy"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies"
    kind: "learn"
  - title: "Conditional Access: Users, groups, agents, and workload identities"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-users-groups"
    kind: "learn"
  - title: "Policies for allowing guest/external access"
    url: "https://learn.microsoft.com/security/zero-trust/zero-trust-identity-device-access-policies-guest-access"
    kind: "learn"
  - title: "Create invitation"
    url: "https://learn.microsoft.com/graph/api/invitation-post"
    kind: "learn"
  - title: "Turn guest access in Microsoft Teams on or off"
    url: "https://learn.microsoft.com/microsoftteams/set-up-guests"
    kind: "learn"
  - title: "Set-CsTeamsClientConfiguration"
    url: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsclientconfiguration"
    kind: "learn"
  - title: "Use guest access and external access to collaborate with people outside your organization"
    url: "https://learn.microsoft.com/microsoftteams/communicate-with-users-from-other-organizations"
    kind: "learn"
  - title: "Auditing and reporting a B2B collaboration user"
    url: "https://learn.microsoft.com/entra/external-id/auditing-and-reporting"
    kind: "learn"
  - title: "Microsoft Entra audit log categories and activities"
    url: "https://learn.microsoft.com/entra/identity/monitoring-health/reference-audit-activities"
    kind: "learn"
  - title: "b2bManagementPolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/b2bmanagementpolicy?view=graph-rest-beta"
    kind: "learn"
related: ["microsoft-teams-report-suspicious-guest-invitations","microsoft-entra-id-passkey-support-for-b2b-users","microsoft-teams-external-presenters-can-access-production-controls-for-teams-events"]
controls:
  - governs: "Who in the organisation can invite guests"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > External collaboration settings > Guest invite settings"
      docs: "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authorizationPolicy"
      docs: "https://learn.microsoft.com/graph/api/authorizationpolicy-update"
    note: "The request body sets allowInvitesFrom (none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone). The Guest Inviter role lets named users invite when only admin roles may."
  - governs: "How much of the directory guests can see"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > External collaboration settings > Guest user access"
      docs: "https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/authorizationPolicy"
      docs: "https://learn.microsoft.com/graph/api/authorizationpolicy-update"
    note: "The request body sets guestUserRoleId: User, Guest User or Restricted Guest User."
  - governs: "Which domains can receive guest invitations (allow or block list)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > External collaboration settings > Collaboration restrictions"
      docs: "https://learn.microsoft.com/entra/external-id/allow-deny-list"
    api: null
    note: "Allow list or block list, not both. Does not apply to guests who already redeemed."
  - governs: "Inbound and outbound B2B access with other Microsoft Entra tenants (defaults)"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > External Identities > Cross-tenant access settings > Cross-tenant access settings > Default settings > Inbound access settings > Edit inbound defaults"
      docs: "https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration"
    api:
      kind: "graph"
      call: "PATCH /v1.0/policies/crossTenantAccessPolicy/default"
      docs: "https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-update"
    note: "At least Security Administrator. Organisation-specific settings are set under Organizational settings."
  - governs: "Inviting an individual guest"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Users > New user > Invite external user"
      docs: "https://learn.microsoft.com/entra/external-id/b2b-tutorial-require-mfa"
    api:
      kind: "graph"
      call: "POST /v1.0/invitations"
      docs: "https://learn.microsoft.com/graph/api/invitation-post"
    note: "The same call can reset the redemption status of a guest who already redeemed."
  - governs: "Conditional Access policy for guest or external users"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Assignments > Users or workload identities > Include > Select users and groups > Guest or external users"
      docs: "https://learn.microsoft.com/entra/external-id/b2b-tutorial-require-mfa"
    api:
      kind: "graph"
      call: "POST /v1.0/identity/conditionalAccess/policies"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies"
    note: "Needs Microsoft Entra ID P1 or P2 and at least Conditional Access Administrator."
  - governs: "Whether guests can use Teams, and which Teams features they get"
    scope: "tenant"
    ui:
      surface: "Teams admin center"
      path: "Users > Guest access > Guest access"
      docs: "https://learn.microsoft.com/microsoftteams/set-up-guests"
    api:
      kind: "powershell"
      call: "Set-CsTeamsClientConfiguration -AllowGuestUser $true"
      docs: "https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsclientconfiguration"
    note: "Teams guest features such as Meet now in channels and Screen sharing are set on the same page."
confidence: "medium"
dependents: 8
changes:
  - date: "2026-11-24"
    note: "New concept page on guest access (Microsoft Entra B2B collaboration): invitation settings, domain and cross-tenant controls, billing and Teams guest access."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 6 of 95 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 95
  confirmed: 88
  unconfirmed: 1
  contradicted: 6
  attempts: 1
  hash: "2cb610508bb7ecbd1c5055b6fc25445d"
---

## What it is

Guest access is how a Microsoft 365 tenant lets people from other organisations sign in to its apps and resources: Microsoft Entra B2B collaboration (part of Microsoft Entra External ID). The person is invited, signs in with their own credentials and is held in your directory as a guest user.

### How it works

The partner uses their own identities and credentials, whether or not they have a Microsoft Entra account. Once a guest redeems their invitation or completes self-service sign-up, they are represented in your directory as a user object, typically with the user type Guest and a user principal name that contains #EXT#. B2B collaboration is enabled by default.

Two separate sets of settings govern it:

| Setting set | What it decides |
| --- | --- |
| External collaboration settings | Who in your organisation can send invitations, which domains can receive them, and what guests can see in your directory |
| Cross-tenant access settings | Whether users can authenticate with other Microsoft Entra tenants, inbound and outbound, scoped to users, groups and apps |

Where both apply, the most restrictive setting wins. For example, a domain on the external collaboration block list stops new invitations to it even when cross-tenant access allows that organisation, while existing guests from it keep working.

### Where guests are used

Teams guest access adds an outside person to a team. It is not the same as Teams external access, which lets users find, call and chat with people who have Microsoft identities but gives no team membership or access to team resources. SharePoint and OneDrive can also use B2B for authentication when you enable that integration.

## Why it matters

Guest access decides who outside the organisation can obtain an identity in your tenant, and so which apps, teams and files they can be given. At the documented defaults, every user in the organisation, including guests, can invite external users, and invitations can go to any domain. Unless someone tightens those settings, guest accounts can be created by anyone and by anyone's guests.

The controls are split across Microsoft Entra, Conditional Access and workload settings such as Teams, so a change that touches guests (for example [reporting suspicious guest invitations in Teams](/features/microsoft-teams-report-suspicious-guest-invitations/) or [passkeys for B2B guests](/features/microsoft-entra-id-passkey-support-for-b2b-users/)) has to be read against all of them.

## Cost and licensing

Microsoft Entra External ID bills guests by monthly active users (MAU): the count of unique external users who authenticate to your tenants in a calendar month. The MAU model applies to all guest users, and applies to B2B collaboration only for users whose UserType is Guest, not Member. Microsoft's External ID FAQ states that the core offering is free for the first 50,000 MAU. External ID requires an Azure subscription for billing, and the workforce tenant must be linked to one.

Premium add-ons are billed on top of the basic MAU charge. Two apply to guests in workforce tenants: ID Governance and GSA for Guests, both MAU-based. Per-MAU prices are on Microsoft's External ID pricing page (aka.ms/ExternalIDPricing), which Learn links to.

Conditional Access, which most guest policies use, needs Microsoft Entra ID P1 or P2. Rates for the Teams, SharePoint or Fabric features that guests use belong on those products' pages.

## Risks and limits

- **Open invitations by default.** Any user, including a guest, can invite guests, so guest numbers grow without an owner unless Guest invite settings are tightened.
- **Lists are not retroactive.** The domain allow or block list does not apply to external users who already redeemed an invitation; existing guests keep access until their accounts are removed. A pending invitation to a newly blocked domain fails at redemption.
- **Domain lists cover Entra invitations only.** They work independently of the SharePoint and OneDrive allow or block lists, so each needs setting. You can have an allow list or a block list, not both, and switching from one to the other discards the existing configuration.
- **Cross-tenant access is not an invitation block.** Inbound settings do not stop invitations being sent or redeemed; they control application access and whether a token is issued to the guest. They apply to Microsoft Entra tenants, so partners without Entra ID are controlled through external collaboration settings. Setting a default to Block access could cut existing business-critical access.
- **Device policies lock guests out.** Only one organisation can manage a device, so a Conditional Access policy that requires device compliance blocks guests unless they are excluded.
- **Targeting all users includes guests.** The All users option in Conditional Access covers B2B guests.
- **Turning Teams guest access off leaves the accounts.** Existing guests lose access to their team but are not removed from it; they stay visible and can be mentioned.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who in the organisation can invite guests</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets allowInvitesFrom (none, adminsAndGuestInviters, adminsGuestInvitersAndAllMembers, everyone). The Guest Inviter role lets named users invite when only admin roles may.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › External collaboration settings › Guest invite settings <a href="https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authorizationPolicy</code> <a href="https://learn.microsoft.com/graph/api/authorizationpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How much of the directory guests can see</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets guestUserRoleId: User, Guest User or Restricted Guest User.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › External collaboration settings › Guest user access <a href="https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/authorizationPolicy</code> <a href="https://learn.microsoft.com/graph/api/authorizationpolicy-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which domains can receive guest invitations (allow or block list)</strong><br><small>Tenant</small><br><small class="controls__note">Allow list or block list, not both. Does not apply to guests who already redeemed.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › External collaboration settings › Collaboration restrictions <a href="https://learn.microsoft.com/entra/external-id/allow-deny-list" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Inbound and outbound B2B access with other Microsoft Entra tenants (defaults)</strong><br><small>Tenant</small><br><small class="controls__note">At least Security Administrator. Organisation-specific settings are set under Organizational settings.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › External Identities › Cross-tenant access settings › Cross-tenant access settings › Default settings › Inbound access settings › Edit inbound defaults <a href="https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/policies/crossTenantAccessPolicy/default</code> <a href="https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-update" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Inviting an individual guest</strong><br><small>Tenant</small><br><small class="controls__note">The same call can reset the redemption status of a guest who already redeemed.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Users › New user › Invite external user <a href="https://learn.microsoft.com/entra/external-id/b2b-tutorial-require-mfa" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/invitations</code> <a href="https://learn.microsoft.com/graph/api/invitation-post" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Conditional Access policy for guest or external users</strong><br><small>Tenant</small><br><small class="controls__note">Needs Microsoft Entra ID P1 or P2 and at least Conditional Access Administrator.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Assignments › Users or workload identities › Include › Select users and groups › Guest or external users <a href="https://learn.microsoft.com/entra/external-id/b2b-tutorial-require-mfa" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/identity/conditionalAccess/policies</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether guests can use Teams, and which Teams features they get</strong><br><small>Tenant</small><br><small class="controls__note">Teams guest features such as Meet now in channels and Screen sharing are set on the same page.</small></td><td data-label="Admin UI"><strong>Teams admin center</strong><br>Users › Guest access › Guest access <a href="https://learn.microsoft.com/microsoftteams/set-up-guests" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-CsTeamsClientConfiguration -AllowGuestUser $true</code> <a href="https://learn.microsoft.com/powershell/module/microsoftteams/set-csteamsclientconfiguration" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** External collaboration settings in the Microsoft Entra admin center need a role that can update them, such as Global Administrator or External Identity Provider Administrator; the allow or block list page signs in as Global Administrator. Cross-tenant access settings need at least Security Administrator. Inviting needs User Administrator in the portal tutorial. The Guest Inviter role lets named users invite even when Guest invite settings allow only admin roles. Conditional Access policies need at least Conditional Access Administrator.

**Interaction.** External collaboration and cross-tenant settings are checked at invitation, and the most restrictive applies. Teams guest settings, SharePoint external sharing and Microsoft 365 group guest settings are separate from the Entra settings.

**Not in the table.** External collaboration settings also hold guest self-service sign-up and External user leave settings; the latter is available only after privacy information is added to the tenant. Access reviews (Entra ID > ID Governance > Access reviews) check whether guests still need access, and the Sponsors field records who is responsible for a guest.

**Watching.** Entra audit logs (Entra ID > Monitoring & health > Audit logs) record Invite external user and Redeem external user invite under UserManagement. A B2B sign-in creates a sign-in log in both the home and resource tenants.

## What to check

- Review Guest invite settings and Guest user access in External collaboration settings, and compare them with who should be inviting.
- Check whether Collaboration restrictions hold an allow or block list, and which type.
- Open the Default settings tab of Cross-tenant access settings and read the inbound defaults before changing them.
- Confirm a Conditional Access policy targets Guest or external users, and that device-compliance policies exclude them.
- Check that Guest access in the Teams admin center matches your intent for Teams.
- Search the Entra audit logs for Invite external user to see who has been inviting guests.

## Open questions

- What is the default for who can invite guests in US Government clouds? The Graph reference says everyone is the default in all cloud environments except US Government, and Learn's external collaboration page does not give the US Government value.
- Is there a supported v1.0 Microsoft Graph call for the allow or block list? The allow or block page documents the portal, and the b2bManagementPolicy resource that describes domain restriction is a beta type.
- What is the per-MAU rate for guests beyond the free tier, and for the ID Governance and GSA for Guests add-ons? The rates sit on the External ID pricing page that Learn links to.

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Cost and licensing: Premium add-ons / cost: Two premium add-ons apply to guests in workforce tenants: ID Governance and GSA for Guests. | Found: | SMS Phone Authentication | Workforce, External | Transaction-based | Additional charges for each SMS-based authentication event | Fix: Change 'Two apply to guests in workforce tenants' to 'Two MAU-based add-ons apply to guests in workforce tenants'. This narrows the claim to the two named MAU add-ons without denying the documented transaction-based SMS add-on. | Source: https://learn.microsoft.com/entra/external-id/external-identities-pricing
- [unsupported, major] Cost and licensing / behaviour: Most guest policies use Conditional Access. | Found: Searched: 'B2B collaboration most guest policies use Conditional Access'; read the B2B MFA tutorial, Conditional Access users/groups reference, and Authentication and Conditional Access for External ID. They describe support and recommendations, not prevalence. | Fix: Remove 'which most guest policies use' from the Conditional Access licensing sentence.
- [contradicted, blocker] Risks and limits: Lists are not retroactive / behaviour: Existing guests keep access until their accounts are removed. | Found: Changing the default inbound or outbound settings to Block access could block existing business-critical access to apps in your organization or partner organizations. | Fix: Replace 'existing guests keep access until their accounts are removed' with 'the domain invitation list does not revoke access from guests who already redeemed'. This limits the statement to the list rather than implying that account removal is the only way to revoke access. | Source: https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration
- [contradicted, blocker] controls[2].api / absence: Microsoft has not documented an API for the B2B invitation domain allow or block list. | Found: Represents Microsoft Entra B2B features in Microsoft Entra External ID for workforce tenants, including restricting/allowing which domains can be used to invite users | Fix: Replace null with kind 'graph', call 'PATCH /beta/policies/b2bManagementPolicies/{b2bManagementPolicyId}', and docs 'https://learn.microsoft.com/graph/api/b2bmanagementpolicy-update?view=graph-rest-beta'. Add to the note: 'The request body updates definition, the JSON-string collection defining the policy. This API is beta, is not supported for production applications, and is available in the global service only.' Keep the narrower v1.0 question. | Source: https://learn.microsoft.com/graph/api/resources/b2bmanagementpolicy?view=graph-rest-beta
- [contradicted, blocker] Open questions: US Government / absence: The US Government guest invitation default remains an unanswered question. | Found: | none | Prevent everyone, including admins, from inviting guests. Default setting for US Government. | | Fix: Replace the US Government question with 'For US Government, allowInvitesFrom defaults to none, preventing everyone, including admins, from inviting guests.' Cite https://learn.microsoft.com/graph/api/resources/authorizationpolicy?view=graph-rest-1.0. The absence on the collaboration overview does not make the value unpublished. | Source: https://learn.microsoft.com/graph/api/resources/authorizationpolicy?view=graph-rest-1.0
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Why it matters; Risks and limits: Open invitations by default / default: By default every user, including guests, can invite external users. | Found: By default, all users in your organization, including B2B collaboration guest users, can invite external users to B2B collaboration. | Fix: Qualify both default statements: 'By default, everyone, including guests, can invite external users except in US Government, where allowInvitesFrom defaults to none.' The cited collaboration page gives the general default, but https://learn.microsoft.com/graph/api/resources/authorizationpolicy?view=graph-rest-1.0 states the US Government exception. | Source: https://learn.microsoft.com/entra/external-id/external-collaboration-settings-configure
- [supported, minor] Risks and limits: Cross-tenant access is not an invitation block / applicability: Inbound cross-tenant access settings do not stop invitations being sent. | Found: Cross-tenant access settings, inbound access does not prevent users from sending invitations, nor prevent them from being redeemed. | Fix: Replace the bullet's first sentence with: 'Microsoft's architecture guide says inbound cross-tenant access controls application access and token issuance rather than invitation or redemption, but the configuration guide says cross-tenant settings are checked at invitation and Block access can prevent invitations.' Cite https://learn.microsoft.com/entra/architecture/5-secure-access-b2b and https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration together to expose the documented disagreement. | Source: https://learn.microsoft.com/entra/architecture/5-secure-access-b2b
- [supported, minor] Risks and limits: Device policies; What to check: Conditional Access / applicability: Device-compliance Conditional Access policies block guests unless they are excluded. | Found: If you don't exclude guests and external users from policies that require device compliance, these policies block these users. | Fix: Replace the consequence with: 'Device-compliance policies can block guests, but cross-tenant device trust can accept compliance claims from their home tenant without excluding them.' Change the checklist clause to 'check guest exclusions or cross-tenant device trust for device-compliance policies'. The cited Zero Trust page gives the exclusion advice; https://learn.microsoft.com/entra/external-id/authentication-conditional-access documents device trust as an alternative. | Source: https://learn.microsoft.com/security/zero-trust/zero-trust-identity-device-access-policies-guest-access
- [supported, minor] controls[2].ui / admin-path: The invitation domain list is at Microsoft Entra admin center > Entra ID > External Identities > External collaboration settings > Collaboration restrictions. | Found: Browse to Entra ID > External Identities > External collaboration settings. Under Collaboration restrictions, select Deny invitations to the specified domains. | Fix: The path stops on the right settings page. Complete the block-list route as 'Entra ID > External Identities > External collaboration settings > Collaboration restrictions > Deny invitations to the specified domains > Target domains'; the allow-list option on the same page is 'Allow invitations only to the specified domains (most restrictive)'. | Source: https://learn.microsoft.com/entra/external-id/allow-deny-list
- [supported, minor] controls[3].ui / admin-path: Default inbound cross-tenant access settings are reached through the printed Cross-tenant access settings > Default settings > Inbound access settings > Edit inbound defaults route. | Found: Browse to Entra ID > External Identities > Cross-tenant access settings, then select Cross-tenant access settings. On the Default settings tab, under Inbound access settings, select Edit inbound defaults. | Fix: The route reaches the inbound settings pane, not the final B2B control. Complete it as 'Entra ID > External Identities > Cross-tenant access settings > Cross-tenant access settings > Default settings > Inbound access settings > Edit inbound defaults > B2B collaboration > External users and groups > Access status'. | Source: https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration
- [supported, minor] controls[3].api / command: PATCH /v1.0/policies/crossTenantAccessPolicy/default configures default inbound and outbound B2B collaboration access. | Found: PATCH https://graph.microsoft.com/v1.0/policies/crossTenantAccessPolicy/default b2bCollaborationInbound b2bCollaborationOutbound | Fix: Keep the call and append to controls[3].note: 'The request body sets b2bCollaborationInbound and b2bCollaborationOutbound.' | Source: https://learn.microsoft.com/graph/api/crosstenantaccesspolicyconfigurationdefault-update
- [supported, minor] controls[4].api / command: POST /v1.0/invitations creates an individual guest invitation. | Found: POST https://graph.microsoft.com/v1.0/invitations invitedUserEmailAddress | string | The email address of the user you're inviting. | Fix: Keep the call and append to controls[4].note: 'The request body names the guest through invitedUserEmailAddress; resetRedemption resets an existing guest invitation.' | Source: https://learn.microsoft.com/graph/api/invitation-post
- [supported, minor] controls[5].api / command: POST /v1.0/identity/conditionalAccess/policies creates a Conditional Access policy that can target guest or external users. | Found: includeGuestsOrExternalUsers | conditionalAccessGuestsOrExternalUsers | Internal guests or external users included in the policy scope. Optionally populated. | Fix: Keep the method and path, which the cited creation reference documents. Append to controls[5].note: 'The request body targets guests through conditions.users.includeGuestsOrExternalUsers.' | Source: https://learn.microsoft.com/graph/api/resources/conditionalaccessusers?view=graph-rest-1.0
- [contradicted, minor] What to check: Search the Entra audit logs / consistency: The checklist directs readers to inspect Entra audit logs, but the controls table has no audit-log row. | Found: Search the Entra audit logs for Invite external user to see who has been inviting guests. The seven controls rows cover invitations, directory visibility, domains, cross-tenant access, individual invitations, Conditional Access and Teams; none covers audit logs. | Fix: Remove the audit-log bullet from What to check; retain the documented audit-log information in Governance controls: Watching. This corrects the checklist/table mismatch without adding an unverified control row.
- [contradicted, minor] sources / consistency: Some verified facts and their qualifications rely on Microsoft pages missing from the sources list. | Found: sources includes authorizationpolicy-update and the beta b2bManagementPolicy resource, but omits the authorizationPolicy resource, beta b2bManagementPolicy update, conditionalAccessUsers resource and Authentication and Conditional Access for External ID. | Fix: Add these sources together: https://learn.microsoft.com/graph/api/resources/authorizationpolicy?view=graph-rest-1.0 ; https://learn.microsoft.com/graph/api/b2bmanagementpolicy-update?view=graph-rest-beta ; https://learn.microsoft.com/graph/api/resources/conditionalaccessusers?view=graph-rest-1.0 ; https://learn.microsoft.com/entra/external-id/authentication-conditional-access .
-->
