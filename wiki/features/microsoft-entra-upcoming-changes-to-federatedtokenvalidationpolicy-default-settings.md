---
title: "Microsoft Entra: stricter default blocks cross-domain federated sign-ins"
slug: "microsoft-entra-upcoming-changes-to-federatedtokenvalidationpolicy-default-settings"
roadmapId: 566869
topic: "governance"
products: ["Microsoft Entra"]
summary: "Microsoft plans to make federatedTokenValidationPolicy block federated sign-ins whose realm root domain differs from the user's UPN root domain. Admins who rely on cross-domain sign-in need to review and prepare."
status: "in-development"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Android","Desktop","iOS","Mac","Web"]
targetDate: "August CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "medium"
defaultState: "on"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The Learn page for the policy names Microsoft Entra roles and no licence, and the Microsoft Entra licensing page does not list the policy."
audiences: ["security","m365-admin"]
tags: ["entra-id","authentication","hybrid-identity","identity-providers","microsoft-graph","gcc","gcc-high","dod"]
sources:
  - title: "Strengthen federated sign-in security in Microsoft Entra ID"
    url: "https://learn.microsoft.com/entra/identity/users/strengthen-federated-sign-in-security"
    kind: "learn"
  - title: "federatedTokenValidationPolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/federatedtokenvalidationpolicy?view=graph-rest-beta"
    kind: "learn"
  - title: "Update federatedTokenValidationPolicy"
    url: "https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-beta"
    kind: "learn"
  - title: "Update federatedTokenValidationPolicy"
    url: "https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "What are Microsoft Entra sign-in logs?"
    url: "https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins"
    kind: "learn"
  - title: "List signIns"
    url: "https://learn.microsoft.com/graph/api/signin-list?view=graph-rest-1.0"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 566869"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=566869"
    kind: "roadmap"
videos: []
related: []
controls:
  - governs: "Which domains the federated token root-domain check applies to, including turning it off"
    scope: "tenant"
    ui: null
    api:
      kind: "graph"
      call: "PUT /beta/policies/federatedTokenValidationPolicy"
      docs: "https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-beta"
    note: "Preview (beta). The request body sets validatingDomains (rootDomains: all, allFederated, allManaged, enumerated, allManagedAndEnumeratedFederated or none). Roles: Security, Hybrid Identity or External Identity Provider Administrator."
  - governs: "Where blocked federated sign-ins (AADSTS5000820) can be seen"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Monitoring & health > Sign-in logs"
      docs: "https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins"
    api:
      kind: "graph"
      call: "GET /v1.0/auditLogs/signIns"
      docs: "https://learn.microsoft.com/graph/api/signin-list?view=graph-rest-1.0"
    note: "Monitoring only; does not change the policy. Portal access needs at least Reports Reader."
confidence: "medium"
created: "2026-11-23"
updated: "2026-11-24"
roadmapModified: "2026-07-01T23:03:18"
changes:
  - date: "2026-11-23"
    note: "First briefing: the planned stricter default for federated token validation, its Graph beta control and the sign-in log signal to watch."
  - date: "2026-11-23"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 45 statements contradicted, 1 unconfirmed; taken offline until corrected"
  - date: "2026-11-24"
    note: "Corrected: added the documented v1.0 update operation, replaced a pre-enforcement log claim with the post-enforcement monitoring advice, and removed checklist references to controls missing from the table."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 54 statements not yet confirmed"
version: 2
verification:
  status: "verified-with-gaps"
  date: "2026-11-24"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 54
  confirmed: 53
  unconfirmed: 1
  contradicted: 0
  attempts: 0
  hash: "d3c8e0ca4728a471a4d70563bea6cf5a"
---

## What's changing

Microsoft plans to change the default rule of `federatedTokenValidationPolicy` so that Microsoft Entra ID blocks federated sign-ins where the federation realm's root domain does not match the root domain of the mapped user's UPN. The roadmap item says the setting currently needs manual configuration in the tenant to prohibit cross-domain logins, and describes the `internalDomainFederation` object as typically created automatically during federation setup with an AD FS server or other identity providers.

Microsoft Learn describes the behaviour: a blocked request is expected to return error `AADSTS5000820` ("Sign-in blocked by Federated Token Validation policy. Contact your administrator for details."), and the change applies to federated domains that have an associated `internalDomainFederation` object. The comparison uses root domains, so a child domain such as `child.contoso.com` is treated as `contoso.com`. The feature guide documents the policy resource and its Graph APIs as preview on the `/beta` endpoint.

A custom configuration can still allow cross-domain sign-in. Learn says this restores previous behaviour and removes the additional domain-consistency validation. The policy's `validatingDomains` setting takes the `rootDomains` values `all`, `allFederated`, `allManaged`, `enumerated`, `allManagedAndEnumeratedFederated` and `none`.

The roadmap record shows status In development, target date August CY2026, release phase General Availability, for Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD. The record gives no preview date, and Microsoft Learn gives no tenant rollout date.

## Why it matters

The change closes a cross-realm impersonation path. Learn describes an attacker who controls one trusted federation realm, knows a target user's immutable ID or source anchor, and so could map a token from one realm to a user in another root domain. Strict domain matching blocks that case, which matters most in tenants with several federated domains.

The cost is that sign-ins that depend on cross-domain mapping stop working once the default applies. Learn lists mergers and acquisitions, coexistence, shared identity providers and migration projects as scenarios to review. Plan for a helpdesk spike in those tenants, and decide per domain whether to fix the mapping or to configure a less restrictive `validatingDomains` setting with compensating controls. Microsoft Learn does not state the date on which a given tenant receives the new default, so treat the roadmap target as a planning signal only.

## Risk assessment

**Data exposure**
- No new data access: the policy changes how Microsoft Entra ID validates a federation token after the identity provider has authenticated the user. Learn says the identity provider's own authentication does not change.

**Security & identity**
- Users whose federation realm root domain differs from their UPN root domain are blocked with `AADSTS5000820`. After enforcement is enabled, monitor Microsoft Entra sign-in logs for `AADSTS5000820` to identify affected users.
- Setting `validatingDomains` to `none` preserves cross-domain sign-in but, per Learn, removes the added protection if a trusted identity provider is compromised, malicious or misconfigured. Learn recommends compensating controls such as multifactor authentication and Conditional Access.
- A child domain is evaluated by its root domain. If a subdomain needs its own federation configuration, Learn says to promote it to a root domain first.

**Autonomy & actions**
- No autonomous behaviour: validation runs at sign-in. Learn does not describe it as acting on any account.

**Change & support**
- Blocked users see the message to contact their administrator. Prepare a short support note that names the error code.
- Learn warns that successful testing does not guarantee every sign-in path was exercised.

## Cost and licensing

Microsoft Learn's page on strengthening federated sign-in security names three Microsoft Entra roles for the Graph operations and names no licence. The Microsoft Entra licensing page does not list the policy, so a licence statement for this feature is not yet published. The Learn pages for the policy describe no meter or charge; the Graph reference does not document a price either.

The cost that is known is indirect: time to inventory federated domains, test representative users from parent and child domains, monitor sign-in logs for `AADSTS5000820`, and handle any exceptions.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, and the platforms Android, Desktop, iOS, Mac and Web. Learn says the change applies to federated domains that have an associated `internalDomainFederation` object, which is typically created during federation setup and which administrators might not create directly.

For reading and changing the policy through Microsoft Graph, Learn lists these built-in roles for delegated access: Security Administrator, Hybrid Identity Administrator and External Identity Provider Administrator. The cited beta reference and the feature guide describe the Graph policy resource as preview (`/beta`), and the guide says preview APIs are not supported in production applications. Reading sign-in logs in the Microsoft Entra admin center requires at least the Reports Reader role.

## Governance guidance

### Before rollout
- Inventory federated domains and confirm which have an `internalDomainFederation` configuration.
- Identify intentional cross-domain dependencies such as mergers, coexistence, shared identity providers and migration projects, and name an owner for each.
- Test representative users from parent and child domains, remembering that the check compares root domains.
- Decide per domain whether to keep strict matching or to choose a narrower `validatingDomains` value (for example `enumerated` for a phased rollout), and record the business reason.

### At rollout
- Watch the Microsoft Entra sign-in logs for `AADSTS5000820` from the first day the tenant could receive the new default.
- Brief the helpdesk on the error text and on who may change the policy.
- Apply any exception through the Graph update operation only where a documented business requirement exists, and evaluate compensating controls.

### After rollout
- Review each exception on a schedule and retire `none` or narrowed settings once the cross-domain dependency is migrated.
- Re-read the Graph reference before changing policy automation.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which domains the federated token root-domain check applies to, including turning it off</strong><br><small>Tenant</small><br><small class="controls__note">Preview (beta). The request body sets validatingDomains (rootDomains: all, allFederated, allManaged, enumerated, allManagedAndEnumeratedFederated or none). Roles: Security, Hybrid Identity or External Identity Provider Administrator.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PUT /beta/policies/federatedTokenValidationPolicy</code> <a href="https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Where blocked federated sign-ins (AADSTS5000820) can be seen</strong><br><small>Tenant</small><br><small class="controls__note">Monitoring only; does not change the policy. Portal access needs at least Reports Reader.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Monitoring &amp; health › Sign-in logs <a href="https://learn.microsoft.com/entra/identity/monitoring-health/concept-sign-ins" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>GET /v1.0/auditLogs/signIns</code> <a href="https://learn.microsoft.com/graph/api/signin-list?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The cited feature guide describes Graph preview, but Microsoft also documents `PUT /v1.0/policies/federatedTokenValidationPolicy` with `Policy.ReadWrite.FedTokenValidation` for delegated work or school accounts and application access ([Update federatedTokenValidationPolicy, v1.0](https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-1.0)). No Microsoft Entra admin centre setting for the policy is documented at the time of writing (November 2026). The roles for the update operation are those listed in the Scope section.

The sign-in log row is a monitoring control for blocked sign-ins, not a control over the policy itself.

## Open questions

- On what date will each tenant receive the new default, and will Microsoft announce it in Message center? The roadmap target is August CY2026 and the status is In development; Microsoft Learn gives no tenant rollout date.
- Will tenants that have already configured `validatingDomains` keep their setting when the default changes? Microsoft Learn does not say.
- Will a Microsoft Entra admin centre setting for the policy be added? The documentation gives Graph operations rather than a portal path.
- Will a licence apply to the policy? The Learn pages for the policy and the Microsoft Entra licensing page state none.

<!-- rationale
risk: Medium. The stricter default blocks sign-ins (error AADSTS5000820) where the federation realm root domain differs from the UPN root domain, so tenants that depend on that pattern could lose access for those users.
cost: Low. The Learn page names no licence or meter for the policy; the known cost is admin time to review federated domains, test sign-ins and handle blocked users. A licence for this feature is not yet published.
impact: Medium. Only users in tenants with federated domains who sign in across root domains (mergers, coexistence, migrations) are likely to notice; users whose federation realm and UPN share a root domain continue to sign in.
-->

<!-- verifier-findings (2026-11-24, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Data exposure / behaviour: The change introduces no new data access. | Found: Searched: "federatedTokenValidationPolicy" "data access" autonomous account actions. Read the feature guide and policy resource/update references; they describe token validation but do not explicitly establish no new data access. | Fix: Remove 'No new data access:' and retain the supported sentence: 'The policy changes how Microsoft Entra ID validates a federation token after the identity provider has authenticated the user.'
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[0].api / command: PUT /beta/policies/federatedTokenValidationPolicy updates the validatingDomains property controlling domain validation. | Found: PUT https://graph.microsoft.com/beta/policies/federatedTokenValidationPolicy | Fix: Prefer the already-cited v1.0 operation: set controls[0].api.call to 'PUT /v1.0/policies/federatedTokenValidationPolicy' and its docs to https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-1.0; remove 'Preview (beta).' from this row's note. The beta reference lists all permission types as 'Not supported.' despite its delegated-role guidance, whereas the v1.0 reference documents Policy.ReadWrite.FedTokenValidation for delegated and application access. | Source: https://learn.microsoft.com/graph/api/federatedtokenvalidationpolicy-update?view=graph-rest-beta
- [supported, minor] controls[1].api / command: GET /v1.0/auditLogs/signIns retrieves tenant user sign-in logs for monitoring rather than changing the policy. | Found: Retrieve the Microsoft Entra user [sign-ins](resources/signin?view=graph-rest-1.0) for your tenant. | Fix: Add https://learn.microsoft.com/entra/identity/monitoring-health/howto-analyze-activity-logs-with-microsoft-graph to sources and append to controls[1].note: 'Graph access to sign-in reports requires a Microsoft Entra ID P1 or P2 licence.' This is an existing reporting prerequisite, not a published licence requirement for the new policy default itself. | Source: https://learn.microsoft.com/graph/api/signin-list?view=graph-rest-1.0
-->
