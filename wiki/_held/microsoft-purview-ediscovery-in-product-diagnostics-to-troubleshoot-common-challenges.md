---
title: "Microsoft Purview eDiscovery: in-product diagnostics for case access, security filters and holds"
slug: "microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges"
roadmapId: 565222
topic: "governance"
products: ["Microsoft Purview"]
summary: "Microsoft Purview eDiscovery is adding three read-only diagnostic checks for case access, security filters and hold distribution. Microsoft's notice says no admin action is required; licensing is not yet published."
status: "in-development"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)","GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "December CY2026"
previewDate: "December CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "unknown"
action: "prepare"
licensing:
  model: "unknown"
  notes: "Not yet published. The roadmap item and MC1515937 name no licence, add-on or meter for the diagnostics."
audiences: ["compliance","m365-admin","security"]
tags: ["ediscovery","purview","authorisation","admin-controls","monitoring","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 565222"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=565222"
    kind: "roadmap"
  - title: "MC1515937: (Updated) Microsoft Purview | eDiscovery: In-product diagnostics to troubleshoot common challenges"
    url: "https://admin.microsoft.com/Adminportal/Home#/MessageCenter/:/messages/MC1515937"
    kind: "message-center"
  - title: "Learn about access and permission settings in eDiscovery cases"
    url: "https://learn.microsoft.com/purview/edisc-settings-access-permissions"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Configure search permissions filtering in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-permission-filtering"
    kind: "learn"
  - title: "Manage holds in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-manage"
    kind: "learn"
  - title: "Resolve eDiscovery hold errors"
    url: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/ediscovery/resolve-ediscovery-hold-issues"
    kind: "learn"
  - title: "Add ediscoveryCaseMember"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0"
    kind: "learn"
videos: []
related: []
controls:
  - governs: "Who holds eDiscovery roles through the eDiscovery Manager role group"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > eDiscovery Manager > Edit"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "General control for case access, not for the diagnostics. Assigning permissions needs Organization Management or the Role Management role."
  - governs: "Which users and role groups are members of an eDiscovery case"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Case settings > Access and permissions > Users > Add"
      docs: "https://learn.microsoft.com/purview/edisc-settings-access-permissions"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0"
    note: "Existing control for the case access area. Microsoft has not confirmed that the new check reads it."
  - governs: "Which mailboxes and sites an eDiscovery manager can search (search permissions filters)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "New-ComplianceSecurityFilter -FilterName <name of filter> -Users <user or role group> -Filters <filter>"
      docs: "https://learn.microsoft.com/purview/edisc-search-permission-filtering"
    note: "Security & Compliance PowerShell. Needs Organization Management and the eDiscovery administrator role. Existing control for the security filter area."
  - governs: "Hold policy distribution status and retry"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Hold policies > hold policy > Policy actions > Retry policy"
      docs: "https://learn.microsoft.com/purview/edisc-hold-manage"
    api:
      kind: "powershell"
      call: "Get-CaseHoldPolicy -Identity <policyname> -DistributionDetail"
      docs: "https://learn.microsoft.com/troubleshoot/microsoft-365/purview/ediscovery/resolve-ediscovery-hold-issues"
    note: "Existing control for the hold-distribution area. The troubleshooting page also gives Set-CaseHoldPolicy -RetryDistribution to redeploy a policy."
confidence: "medium"
created: "2026-11-17"
updated: "2026-11-17"
roadmapModified: "2026-11-04T23:59:50"
changes:
  - date: "2026-11-17"
    note: "New briefing: three read-only eDiscovery diagnostics (case access, security filters, hold distribution), Preview from early December 2026 per MC1515937."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 56 statements not yet confirmed"
  - date: "2026-11-24"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 72 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-24"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 72
  confirmed: 68
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "c92e8e58305ef556811c61ee994de533"
---

## What's changing

Microsoft Purview eDiscovery is gaining in-product diagnostics that point eDiscovery admins to common configuration problems. The roadmap item describes self-service diagnostics for "case permissions, security filters, and policy status" that highlight potential misconfigurations and give simple guidance. Microsoft's notice MC1515937 is more specific: three read-only checks, covering case access, security filters and hold-policy distribution, that provide guidance without changing the organisation's existing configuration.

Microsoft Learn does not describe this feature yet (at the time of writing, November 2026), so what follows about its behaviour is the roadmap's and the notice's description. Microsoft has not said where in the Microsoft Purview portal the checks appear, what each one inspects, which role is needed to run it, or whether an admin can turn it off. The notice links to three existing Learn topics for these areas, and the case access page, [Learn about access and permission settings in eDiscovery cases](https://learn.microsoft.com/purview/edisc-settings-access-permissions), does not itself mention a diagnostic.

The roadmap item is In development, with a target and preview date of December CY2026, and lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD on the web. According to MC1515937 (updated 4 November 2026), Public Preview in Worldwide begins in early December 2026 and completes by mid-December 2026. General Availability begins in late December 2026 for Worldwide, GCC, GCC High and DoD, completing by early January 2027 (Worldwide), mid-January 2027 (GCC), early February 2027 (GCC High) and late February 2027 (DoD). The notice moved each date later than its earlier schedule.

## Why it matters

eDiscovery problems tend to surface late and under pressure: a case member cannot see the case, a search returns less than expected, or a hold has not reached a mailbox or site. These are the three areas the diagnostics target, so the feature could shorten the time legal and compliance teams spend working out whether a fault is a missing role, a search permissions filter or a stalled hold.

Microsoft has not stated whether the checks are on automatically or switched on by an admin, so treat arrival as likely and plan to brief the admins who own cases, role groups and holds. MC1515937 sets no act-by date and says no admin action is required at this time. The wiki's view is that the useful preparation is knowing where each underlying control lives, so an admin can act on a diagnostic result with confidence.

## Risk assessment

**Data exposure**

- MC1515937 describes the checks as read-only and says they change no existing configuration. Microsoft has not said what data the checks read or display, for example whether results name users, role groups or hold locations, so confirm that once the preview is documented.

**Security & identity**

- A check on case access could show who can reach a case. Case access today depends on membership of the eDiscovery Manager role group plus case membership, and on search permissions filters for what a manager may search. Microsoft has not said who may run the new checks, so confirm that a diagnostic does not extend visibility beyond the roles an admin already holds.
- Guidance that suggests a fix could lead an admin to widen access. Changing a role in a role group that is a case member removes that role group from the case automatically, so a quick fix can break access elsewhere.

**Autonomy & actions**

- No change: the notice describes read-only checks that provide guidance, and no automatic remediation is mentioned. Any fix, such as retrying a hold policy or changing case members, remains a separate admin action.

**Change & support**

- The new checks will sit alongside existing troubleshooting routes: the eDiscovery RBAC diagnostic in the Help pane, hold distribution results from PowerShell and the Retry policy action. Internal runbooks that name only those routes may need updating once the checks are documented.
- Preview and General Availability dates have already moved once, per MC1515937, so check the notice before telling teams when to expect the checks.

## Cost and licensing

Microsoft has not published a licence requirement, price or meter for these diagnostics. Neither the roadmap item nor MC1515937 names a licence, an add-on or a consumption charge, so licensing is not yet published and the page cannot say whether the checks are included in existing eDiscovery entitlements.

The cost known today is indirect: admin time to learn the checks, to update runbooks and to brief case owners. For background only, the [Assign permissions in eDiscovery](https://learn.microsoft.com/purview/edisc-permissions) page states that to analyse a user's data when premium eDiscovery features are enabled, the user must be assigned an Office 365 E5 or Microsoft 365 E5 licence (or a Microsoft Purview Suite or Microsoft 365 eDiscovery and Audit add-on licence for E1 or E3 users). That page does not mention the new diagnostics, so do not read it as their licence rule.

## Scope

MC1515937 names eDiscovery admins as the affected group. The roadmap item lists Worldwide (Standard Multi-Tenant), GCC, GCC High and DoD, on the web, with Preview and General Availability release phases.

Rollout is by Microsoft, on the dates in the notice (see What's changing). Microsoft has not stated prerequisites, the role needed to run the checks, or whether they appear for case members who are not eDiscovery admins. The checks cover three areas: case access, security filters and hold-policy distribution.

## Governance guidance

### Before rollout

- Identify who owns eDiscovery case membership, role group membership, search permissions filters and hold policies, and tell them the three checks are planned for December 2026.
- List which role groups hold eDiscovery roles today, so a diagnostic result about case access can be compared with the real assignments (see the role group row in the controls table).
- Record the existing search permissions filters, if any, with Get-ComplianceSecurityFilter, so a security filter result can be compared with what is configured.
- Update internal eDiscovery troubleshooting guidance to say that new in-product checks are due, without describing their behaviour until Microsoft documents it.

### At rollout

- Watch Message center for MC1515937 updates, because Microsoft has already moved the schedule once.
- Run the checks first on a test case, and note which role is needed to see them and what they display.
- Confirm that acting on a suggested fix does not alter another case's access: removing or adding a role in a role group removes that role group from every case it belongs to.

### After rollout

- Compare the diagnostic results for case access and hold distribution with the case settings and hold policy status for the same case.
- Check whether the checks appear in GCC, GCC High and DoD tenants once Microsoft's rollout window for each cloud has closed.
- Add the checks to the runbook for case access, search scoping and hold distribution issues once their scope is documented.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds eDiscovery roles through the eDiscovery Manager role group</strong><br><small>Tenant</small><br><small class="controls__note">General control for case access, not for the diagnostics. Assigning permissions needs Organization Management or the Role Management role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › eDiscovery Manager › Edit <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and role groups are members of an eDiscovery case</strong><br><small class="controls__note">Existing control for the case access area. Microsoft has not confirmed that the new check reads it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Access and permissions › Users › Add <a href="https://learn.microsoft.com/purview/edisc-settings-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which mailboxes and sites an eDiscovery manager can search (search permissions filters)</strong><br><small>User</small><br><small class="controls__note">Security &amp; Compliance PowerShell. Needs Organization Management and the eDiscovery administrator role. Existing control for the security filter area.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-ComplianceSecurityFilter -FilterName &lt;name of filter&gt; -Users &lt;user or role group&gt; -Filters &lt;filter&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-search-permission-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Hold policy distribution status and retry</strong><br><small class="controls__note">Existing control for the hold-distribution area. The troubleshooting page also gives Set-CaseHoldPolicy -RetryDistribution to redeploy a policy.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Hold policies › hold policy › Policy actions › Retry policy <a href="https://learn.microsoft.com/purview/edisc-hold-manage" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-CaseHoldPolicy -Identity &lt;policyname&gt; -DistributionDetail</code> <a href="https://learn.microsoft.com/troubleshoot/microsoft-365/purview/ediscovery/resolve-ediscovery-hold-issues" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

No setting to turn the diagnostics on or off, and no role requirement for running them, is named in the roadmap item or in MC1515937. The rows below are the existing controls behind the three areas the checks cover. They are not controls over the diagnostics themselves, and Microsoft has not confirmed how the diagnostics read them.

Changing a role in a role group that is a case member removes that role group from the case. Search permissions filters need membership of the Organization Management role group and the eDiscovery administrator role, and run through Security & Compliance PowerShell connected alongside Exchange Online PowerShell. Microsoft Learn documents the search permissions filter through cmdlets; no portal path was found on that page. The existing eDiscovery RBAC diagnostic (Help > Diag:edisRBACdiag in the Microsoft Purview portal) checks whether the Search, Export or Preview roles are assigned to a named user; it is the existing check closest to the case access area.

## Open questions

- Where in the Microsoft Purview portal do the three checks appear, and which role is needed to run each one? Watch the eDiscovery documentation on Microsoft Learn and MC1515937.
- Is there any admin setting, or any role restriction, that controls whether the diagnostics are shown? The roadmap item and the notice say nothing either way.
- Is a licence required to use the diagnostics, and does the answer differ between eDiscovery (Standard) and the premium features? Licensing is not yet published.
- What does each check read and display, for example user names, role group names or hold locations, and how does that compare with what the admin running it can already see?
- Will the GCC, GCC High and DoD General Availability dates in MC1515937 hold, given the notice has already moved them?

<!-- rationale
risk: Low. Microsoft's notice MC1515937 describes the checks as read-only and says they do not change existing configuration; the exposure is that admins may act on diagnostic guidance without understanding it.
cost: Low. Neither the roadmap item nor MC1515937 names a licence or meter, so licensing is not yet published; the only cost the sources show is admin time to learn the checks and update internal guidance.
impact: Low. MC1515937 names eDiscovery admins as the affected group; end users and case reviewers are not mentioned.
-->

<!-- verifier-findings (2026-11-24, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[3].api; Governance controls: hold distribution row / command: Get-CaseHoldPolicy -Identity <policyname> -DistributionDetail is the automation counterpart for the row's hold-policy status and retry control. | Found: Use the Get-CaseHoldPolicy to view existing case hold policies in the Microsoft Purview compliance portal. To get relevant information about how the hold was applied and the affected locations, you need to include the DistributionDetail switch. | Fix: Replace controls[3].api.call and the rendered call with 'Set-CaseHoldPolicy -Identity <policyname> -RetryDistribution'. The existing cited troubleshooting page documents this retry operation, so retain that docs URL. In the note, keep 'Get-CaseHoldPolicy -Identity <policyname> -DistributionDetail' as the separate status-reading command. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/get-caseholdpolicy
- [contradicted, blocker] Risk assessment: Security & identity / role: Case membership is required for case access without an administrator exception. | Found: For users who aren't eDiscovery Administrators, the cases shown are limited to those where the user is a member. ... An eDiscovery Administrator can view and access all eDiscovery cases. | Fix: Qualify the case-membership premise as 'For users who are not eDiscovery Administrators, case visibility is limited to cases they belong to; an eDiscovery Administrator can view and access all cases.' Use this alongside the corrected permissions statement, citing https://learn.microsoft.com/purview/edisc-permissions. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [unsupported, major] Risk assessment: Change & support / behaviour: The new checks will sit alongside the existing RBAC diagnostic, PowerShell hold distribution results and Retry policy action. | Found: Searched: eDiscovery in-product diagnostics; eDiscovery three read-only diagnostics case access security filters hold distribution. Read edisc-permissions, edisc-hold-manage, resolve-ediscovery-hold-issues and purview-compliance-diagnostics; no statement of future coexistence. | Fix: Replace 'The new checks will sit alongside existing troubleshooting routes:' with 'Existing troubleshooting routes include'. Keep the verified list of existing routes without promising how the new checks will coexist with them.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing: rollout paragraph; front matter: changes / record: Worldwide Public Preview begins in early December 2026. | Found: Public Preview (Worldwide): We will begin rolling out in early December 2026 (previously late October) and expect to complete by mid-December 2026 (previously mid-November). | Fix: Change the start-date wording to 'Microsoft plans to begin Worldwide Public Preview rollout in early December 2026.'
- [supported, minor] What's changing: rollout paragraph / record: Worldwide Public Preview completes by mid-December 2026. | Found: Public Preview (Worldwide): We will begin rolling out in early December 2026 (previously late October) and expect to complete by mid-December 2026 (previously mid-November). | Fix: Change 'completes by mid-December 2026' to 'Microsoft expects completion by mid-December 2026.'
- [supported, minor] What's changing: rollout paragraph / record: General Availability starts in late December 2026 in Worldwide, GCC, GCC High and DoD. | Found: General Availability (Worldwide): We will begin rolling out in late December 2026 (previously early December) and expect to complete by early January 2027 (previously mid-December 2026). | Fix: Change the shared start-date wording to 'Microsoft plans to begin General Availability rollout in late December 2026 for Worldwide, GCC, GCC High and DoD.' The supplied notice gives that same start window for each cloud.
- [supported, minor] What's changing: rollout paragraph / record: Worldwide General Availability completes by early January 2027. | Found: General Availability (Worldwide): We will begin rolling out in late December 2026 (previously early December) and expect to complete by early January 2027 (previously mid-December 2026). | Fix: Describe Worldwide General Availability completion as 'expected by early January 2027', not a commitment.
- [supported, minor] What's changing: rollout paragraph / record: GCC General Availability completes by mid-January 2027. | Found: General Availability (GCC): We will begin rolling out in late December 2026 (previously early December) and expect to complete by mid-January 2027. | Fix: Describe GCC General Availability completion as 'expected by mid-January 2027', not a commitment.
- [supported, minor] What's changing: rollout paragraph / record: GCC High General Availability completes by early February 2027. | Found: General Availability (GCC High): We will begin rolling out in late December 2026 (previously early December) and expect to complete by early February 2027. | Fix: Describe GCC High General Availability completion as 'expected by early February 2027', not a commitment.
- [supported, minor] What's changing: rollout paragraph / record: DoD General Availability completes by late February 2027. | Found: General Availability (DoD): We will begin rolling out in late December 2026 (previously early December) and expect to complete by late February 2027. | Fix: Describe DoD General Availability completion as 'expected by late February 2027', not a commitment.
- [supported, minor] front matter: licensing.model; summary; Cost and licensing; Open questions; rationale: cost / licensing: Licensing is unknown because Microsoft has not published a license requirement for these diagnostics. | Found: Both admins and users working with eDiscovery cases require a Microsoft 365 Enterprise E3 or E5 license. | Fix: Set licensing.model to included and cite https://learn.microsoft.com/purview/edisc-get-started. Replace the licensing explanation with 'Microsoft documents Microsoft 365 Enterprise E3 or E5 licensing for admins and users working with eDiscovery cases. A requirement specific to these diagnostics is not yet published.' Keep the low cost rating and narrow the summary, Open questions and cost rationale to feature-specific licensing. | Source: https://learn.microsoft.com/purview/edisc-get-started
- [supported, minor] controls[0].ui; Governance controls: role group row / admin-path: Role group assignments are managed at Microsoft Purview portal > Settings > Role groups > eDiscovery Manager > Edit. | Found: Go to Settings > Role groups. On Role groups for Microsoft Purview solutions, select eDiscovery Manager. On the eDiscovery Manager pane ... Select Edit. On Manage eDiscovery Manager, select Choose users or Choose groups. | Fix: The path stops early on the correct item. For manager assignment, use 'Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users or Choose groups' as documented at https://learn.microsoft.com/purview/edisc-permissions. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [supported, minor] controls[1].api; Governance controls: case membership row / command: POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers adds a user or role group to a case. | Found: Add an ediscoveryCaseMember to an ediscoveryCase. The ediscoveryCaseMember can be one of two types: a user or a role group. POST /security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers | Fix: Keep the endpoint. Add to the row note: 'The request body sets recipientType and identifies the member using id, displayName for a role group, or smtpAddress for a user.' The cited v1.0 reference documents these properties. | Source: https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0
- [supported, minor] Risk assessment: Security & identity / role: Case access requires membership in the eDiscovery Manager role group. | Found: However, before a user can access an eDiscovery case (and perform tasks in the case), you must add the user to the eDiscovery Manager role group in the Microsoft Purview portal. | Fix: Report the disagreement rather than requiring eDiscovery Manager universally: 'The case-access article says to add users to eDiscovery Manager, while the permissions article also documents eDiscovery permissions through Compliance Administrator, Organization Management and Reviewer role groups.' Cite both https://learn.microsoft.com/purview/edisc-settings-access-permissions and https://learn.microsoft.com/purview/edisc-permissions. | Source: https://learn.microsoft.com/purview/edisc-settings-access-permissions
- [supported, minor] Governance controls; Risk assessment: Change & support / admin-path: The existing eDiscovery RBAC diagnostic is reached through Help > Diag:edisRBACdiag in the Microsoft Purview portal. | Found: Select the Help control in the top right of the Microsoft Purview portal. Enter Diag:edisRBACdiag in search ... to run the eDiscovery RBAC Check test. | Fix: Replace the parenthesis with '(Help > Ask a question > search for Diag:edisRBACdiag; the permissions article abbreviates this to Help search)' and cite https://learn.microsoft.com/troubleshoot/microsoft-365/purview/diagnostics/purview-compliance-diagnostics, which explicitly includes Ask a question. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [contradicted, minor] front matter: action; Why it matters / consistency: The prepare action rating fits a new read-only capability whose existing-behavior changes and enablement default are unstated. | Found: action: "prepare"; summary: "three read-only diagnostic checks"; defaultState: "unknown". The standard assigns review to a new capability with an unstated default when no source says existing behaviour will change. | Fix: Set action to review. Keep workflow and runbook preparation as optional advice rather than a decision required before rollout.
-->
