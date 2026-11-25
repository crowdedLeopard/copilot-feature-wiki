---
kind: "concept"
title: "Conditional Access: which sign-ins does Microsoft Entra allow, and what must users do first?"
slug: "conditional-access"
summary: "Conditional Access is the Microsoft Entra policy engine that decides, after first-factor sign-in, whether to block access or require MFA, a compliant device or another control. Needs Microsoft Entra ID P1."
created: "2026-11-24"
updated: "2026-11-25"
version: 3
tags: ["conditional-access","entra-id","authentication","identity","device-compliance","account-recovery"]
covers: []
sources:
  - title: "What is Conditional Access?"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/overview"
    kind: "learn"
  - title: "Build a Conditional Access policy"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-policies"
    kind: "learn"
  - title: "Analyze Conditional Access Policy Impact"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-report-only"
    kind: "learn"
  - title: "Plan a Conditional Access deployment"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/plan-conditional-access"
    kind: "learn"
  - title: "Block legacy authentication with Conditional Access"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/policy-block-legacy-authentication"
    kind: "learn"
  - title: "Conditional Access: Target resources"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"
    kind: "learn"
  - title: "Target agents in Microsoft Entra Conditional Access policies"
    url: "https://learn.microsoft.com/entra/identity/conditional-access/howto-target-agent-identities"
    kind: "learn"
  - title: "Microsoft Entra licensing"
    url: "https://learn.microsoft.com/entra/fundamentals/licensing"
    kind: "learn"
  - title: "Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strengths"
    kind: "learn"
  - title: "Create and manage custom Conditional Access authentication strengths"
    url: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options"
    kind: "learn"
  - title: "Create conditionalAccessPolicy"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0"
    kind: "learn"
  - title: "Update conditionalaccesspolicy"
    url: "https://learn.microsoft.com/graph/api/conditionalaccesspolicy-update?view=graph-rest-1.0"
    kind: "learn"
  - title: "conditionalAccessPolicy resource type"
    url: "https://learn.microsoft.com/graph/api/resources/conditionalaccesspolicy?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create authenticationStrengthPolicy"
    url: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create authenticationContextClassReference (beta)"
    url: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences?view=graph-rest-beta"
    kind: "learn"
related: ["microsoft-teams-granular-conditional-access-for-teams-meetings","microsoft-entra-conditional-access-support-for-entra-id-account-recovery","microsoft-entra-id-passkey-support-for-b2b-users","guest-access","agent-identity"]
controls:
  - governs: "Whether a Conditional Access policy exists, who and what it targets, and its grant or block control"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Access controls > Grant > Block access"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/policy-block-legacy-authentication"
    api:
      kind: "graph"
      call: "POST /v1.0/identity/conditionalAccess/policies"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0"
    note: "Conditional Access Administrator or Security Administrator for delegated Graph access. Needs Entra ID P1. Block access: New policy > Access controls > Grant > Block access. Body: conditions, grantControls."
  - governs: "Whether a policy is enforced (On), only evaluated and logged (Report-only), or off"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Policies > New policy > Enable policy"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/policy-block-legacy-authentication"
    api:
      kind: "graph"
      call: "PATCH /v1.0/identity/conditionalAccess/policies/{id}"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccesspolicy-update?view=graph-rest-1.0"
    note: "The request body sets state: enabled, disabled or enabledForReportingButNotEnforced (conditionalAccessPolicy resource type)."
  - governs: "Which authentication method combinations a custom authentication strength accepts"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Authentication methods > Authentication strengths > New authentication strength"
      docs: "https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options"
    api:
      kind: "graph"
      call: "POST /v1.0/policies/authenticationStrengthPolicies"
      docs: "https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0"
    note: "The request body sets allowedCombinations. Up to 15 custom strengths; built-in strengths cannot be modified."
  - governs: "Authentication contexts that apps can attach to resources and that policies can target"
    scope: "tenant"
    ui:
      surface: "Microsoft Entra admin center"
      path: "Entra ID > Conditional Access > Authentication context > New authentication context"
      docs: "https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps"
    api:
      kind: "graph"
      call: "POST /beta/identity/conditionalAccess/authenticationContextClassReferences"
      docs: "https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences?view=graph-rest-beta"
    note: "Beta endpoint. The request body sets id, displayName, description and isAvailable; Publish to apps corresponds to making the context available."
confidence: "high"
dependents: 10
changes:
  - date: "2026-11-24"
    note: "New concept page: how Conditional Access policies work, their licensing, limits and the controls that set them."
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 84 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: authentication contexts no longer described as inert without a policy; Preview wording for agent targeting, c1-c99 versus c1-c25 and agent licensing added; two checklist items without table rows removed."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 119 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-25"
    note: "Corrected: an app is no longer said to get no Conditional Access decision when no policy targets it; the policy-creation path now ends at Access controls > Grant > Block access."
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 131 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-25"
  version: 3
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 131
  confirmed: 131
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "88a8e1258e1dca100cf25d0b57b37e02"
---

## What it is

Conditional Access is Microsoft Entra's policy engine for access decisions. Each policy is an if-then statement: if a user wants to reach a resource, then they must complete an action, such as multifactor authentication (MFA), or they are blocked.

A policy has **Assignments** (who, what and where) and **Access controls** (what happens). Assignments cover users, groups, roles and agents (the overview labels agent targeting Preview, while the targeting guide marks agent-user targeting as Preview); target resources (cloud apps, user actions or authentication contexts); network locations; and conditions such as sign-in risk, device platform, client apps and device filters. Access controls are either **Block access** or a **Grant** of access that requires one or more controls, plus optional session controls. A policy needs a name, users or groups, target resources and a grant or block control to be enforced.

Two behaviours decide most outcomes:

- **Everything that applies must be satisfied.** Several policies can apply to one user at once, and the user must satisfy all of them. Assignments inside one policy are combined with AND.
- **Evaluation comes after first-factor sign-in.** Policies are enforced once the first factor is done. They are not a front line against attacks such as denial of service, though they can use signals from them.

### Pieces briefings refer to

- **Authentication strength**: a Grant control that names which combinations of authentication methods satisfy the policy. Three built-in strengths exist (MFA, Passwordless MFA, Phishing-resistant MFA) and administrators can add custom ones.
- **Authentication context**: a definition (c1 to c99) that secures data and actions in applications. A policy targets a published context under Target resources. The Entra guide documents c1-c99, while the Microsoft Graph beta create reference lists c1 through c25 as allowed id values.
- **User actions**: policies can target actions such as registering security information, or registering or joining devices, rather than an app.
- **Report-only mode**: a policy state that evaluates and logs a policy without enforcing it.

## Why it matters

Conditional Access is where an organisation turns an identity rule into an enforced one: who must use MFA, which apps need a compliant device, which locations are blocked. Because policies can target All resources, user actions and agents, a policy written for one purpose can change what a newly released feature asks of users, so briefings that mention it are worth reading against your policy list.

It is also where mistakes are costly. A badly scoped block policy can lock out administrators, and Conditional Access applies to the resources an app requests, so an app can encounter a policy even when it is not directly targeted; the Coverage tab shows which apps have a policy. Microsoft documents security defaults as available to all customers, including those without Conditional Access licences.

## Cost and licensing

Conditional Access requires Microsoft Entra ID P1 licences. Customers with Microsoft 365 Business Premium licences can also use Conditional Access features.

Risk-based policies (sign-in risk and user risk) require Microsoft Entra ID Protection, which is a Microsoft Entra ID P2 feature. Other products that interact with Conditional Access need their own licences, including Microsoft Entra Workload ID, Microsoft Intune and Microsoft Purview. For policies that target agents, the targeting guide's prerequisites list Microsoft 365 E7, or a Microsoft Agent 365 licence paired with at least Microsoft Entra P1 or Microsoft 365 E3, and the [Microsoft Entra licensing](https://learn.microsoft.com/entra/fundamentals/licensing) page says that extending Microsoft Entra security features to agents requires Microsoft Agent 365.

When the licences expire, policies are not automatically disabled or deleted. They can be viewed and deleted but not updated. The Conditional Access Optimization Agent needs at least Microsoft Entra ID P1 and Microsoft Security Copilot security compute units (SCU). Microsoft's pages give no separate meter or per-policy charge for Conditional Access itself; the licensing page is the reference for budgets.

## Risks and limits

- **Lockout.** A block policy aimed at all users and all resources can lock out admins. Microsoft recommends excluding at least one emergency access (break-glass) account and cautions against combining block with All resources.
- **Report-only is not a full dry run.** It does not prompt for MFA or terms of use and cannot test the User Actions scope. Report-only policies that require a compliant device can still prompt users on macOS, iOS and Android to choose a certificate; exclude those platforms from such policies.
- **Group and role changes lag.** Policies targeting roles or groups are evaluated only when a token is issued, so a newly added user is not subject to the policy until they get a new token.
- **User-scoped policies do not cover service principals.** Calls made by service principals are not blocked by policies scoped to users; Conditional Access for workload identities defines policies that target them.
- **Device platform is weak evidence.** Platform is taken from unverified sources such as user agent strings, which can be changed.
- **Overlapping grants.** Require MFA and Require authentication strength cannot be used in the same policy.
- **All resources reaches account recovery.** Policies targeting All resources also apply to onboarding and account recovery unless the global exclusion is enabled; users may be asked for credentials they cannot yet supply. See [Conditional Access for Entra ID account recovery](/features/microsoft-entra-conditional-access-support-for-entra-id-account-recovery/).
- **Policy ceiling.** Conditional Access has a limit of 240 policies per tenant, counting every state.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Conditional Access policy exists, who and what it targets, and its grant or block control</strong><br><small>Tenant</small><br><small class="controls__note">Conditional Access Administrator or Security Administrator for delegated Graph access. Needs Entra ID P1. Block access: New policy &gt; Access controls &gt; Grant &gt; Block access. Body: conditions, grantControls.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Access controls › Grant › Block access <a href="https://learn.microsoft.com/entra/identity/conditional-access/policy-block-legacy-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/identity/conditionalAccess/policies</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-policies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether a policy is enforced (On), only evaluated and logged (Report-only), or off</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets state: enabled, disabled or enabledForReportingButNotEnforced (conditionalAccessPolicy resource type).</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Policies › New policy › Enable policy <a href="https://learn.microsoft.com/entra/identity/conditional-access/policy-block-legacy-authentication" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>PATCH /v1.0/identity/conditionalAccess/policies/{id}</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccesspolicy-update?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which authentication method combinations a custom authentication strength accepts</strong><br><small>Tenant</small><br><small class="controls__note">The request body sets allowedCombinations. Up to 15 custom strengths; built-in strengths cannot be modified.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Authentication methods › Authentication strengths › New authentication strength <a href="https://learn.microsoft.com/entra/identity/authentication/concept-authentication-strength-advanced-options" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /v1.0/policies/authenticationStrengthPolicies</code> <a href="https://learn.microsoft.com/graph/api/authenticationstrengthroot-post-policies?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Authentication contexts that apps can attach to resources and that policies can target</strong><br><small>Tenant</small><br><small class="controls__note">Beta endpoint. The request body sets id, displayName, description and isAvailable; Publish to apps corresponds to making the context available.</small></td><td data-label="Admin UI"><strong>Microsoft Entra admin center</strong><br>Entra ID › Conditional Access › Authentication context › New authentication context <a href="https://learn.microsoft.com/entra/identity/conditional-access/concept-conditional-access-cloud-apps" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST /beta/identity/conditionalAccess/authenticationContextClassReferences</code> <a href="https://learn.microsoft.com/graph/api/conditionalaccessroot-post-authenticationcontextclassreferences?view=graph-rest-beta" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Admins with at least Security Reader can view Conditional Access. The Microsoft pages read here name Conditional Access Administrator for creating policies, and Security Administrator for custom authentication strengths (the Graph reference lists both roles for both operations). Policy impact needs at least Security Reader.

**How the controls interact.** The policy state decides whether any assignment or control is enforced; report-only results appear in sign-in logs under the Conditional Access and Report-only tabs, and in the Conditional Access Insights and Reporting workbook (needs Microsoft Entra ID P1 and a Log Analytics workspace receiving sign-in logs). Sign-in logs are at Entra ID > Monitoring & health > Sign-in logs. Authentication strengths do nothing until a policy references them. For a guest or agent view, see [Guest access](/concepts/guest-access/) and [Agent identity](/concepts/agent-identity/).

## What to check

- Open Entra ID > Conditional Access > Policies and list every policy by state: On, Report-only or Off.
- Confirm at least one emergency access account is excluded from every blocking policy.
- Count policies against the 240-per-tenant limit before adding new ones.
- Review which authentication strengths and published authentication contexts exist, and which policies reference them.
- Confirm which licences (P1, P2, Workload ID) cover the users and identities your policies target.

## Open questions

- Which apps publish authentication contexts for their own actions, and does each app document how it consumes them? The authentication context page lists custom, line-of-business, SharePoint and Defender for Cloud Apps-protected apps as examples.
- When do the preview features (agent-user targeting, the Account onboarding and recovery exclusion, policy impact) reach general availability? Learn marks them as preview and gives no date.
