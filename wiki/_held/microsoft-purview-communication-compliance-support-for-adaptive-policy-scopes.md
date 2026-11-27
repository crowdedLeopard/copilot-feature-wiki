---
title: "Microsoft Purview Communication Compliance: scope policies to users with adaptive scopes"
slug: "microsoft-purview-communication-compliance-support-for-adaptive-policy-scopes"
roadmapId: 98186
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance policies can target users and groups through adaptive scopes, attribute-based queries that update daily. Nothing changes until an admin creates a scope and selects it in a policy."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2025"
previewDate: "January CY2023"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "Communication Compliance is included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5, Microsoft Purview Suite plans and the Insider Risk Management add-ons, per the Purview service description. Users without a valid licence for adaptive scopes do not get the policy settings applied."
audiences: ["compliance","m365-admin","security"]
tags: ["communication-compliance","adaptive-scopes","purview","administrative-units","role-groups","entra-id"]
sources:
  - title: "Microsoft 365 Roadmap item 98186"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=98186"
    kind: "roadmap"
  - title: "Create and manage Communication Compliance policies"
    url: "https://learn.microsoft.com/purview/communication-compliance-policies"
    kind: "learn"
  - title: "Get started with Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-configure"
    kind: "learn"
  - title: "Adaptive scopes"
    url: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    kind: "learn"
  - title: "Assign permissions in Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Whether a Communication Compliance policy covers users through adaptive scopes (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule"
    kind: "learn"
  - title: "Which users or groups an adaptive scope's query matches (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    kind: "learn"
  - title: "Current membership of an adaptive scope (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    kind: "learn"
  - title: "Who can configure Communication Compliance policies and settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["role-groups","microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions","microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl","microsoft-purview-data-loss-prevention-adaptive-scopes-for-dlp-for-sharepoint","microsoft-purview-compliance-portal-communication-compliance-alert-improvements"]
controls:
  - governs: "Whether a Communication Compliance policy covers users through adaptive scopes"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Communication Compliance > Policies > Create policy > Custom policy > Choose users and reviewers > Choose users and groups > Select adaptive scopes"
      docs: "https://learn.microsoft.com/purview/communication-compliance-configure"
    api:
      kind: "powershell"
      call: "New-SupervisoryReviewRule -Policy <PolicyIdParameter> -IncludeAdaptiveScopes <String[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule"
    note: "Security & Compliance PowerShell. Option is hidden when the policy is scoped to admin units. Scopes must exist first."
  - governs: "Which users or groups an adaptive scope's query matches"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > + Create scope"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AdaptiveScope -Name <String> -LocationType <DynamicBoundaryLocationType> -RawQuery <String>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    note: "Needs the Scope Manager role. The cmdlet reference describes scopes as used in retention policies; the adaptive scopes page adds Communication Compliance."
  - governs: "Current membership of an adaptive scope"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > scope > Scope details"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "Get-AdaptiveScopeMembers -Identity <ComplianceRuleIdParameter>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    note: "Read-only check. Query changes can take up to five days to show in scope details."
  - governs: "Who can configure Communication Compliance policies and settings"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > role group > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/communication-compliance-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Communication Compliance and Communication Compliance Admins role groups configure policies; both include the Scope Manager role."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-23T23:15:39"
changes:
  - date: "2026-11-27"
    note: "New briefing: adaptive scopes for Communication Compliance policies, with the scope and policy paths, PowerShell cmdlets and the admin-unit restriction."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 48 statements contradicted, 6 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 48
  confirmed: 40
  unconfirmed: 6
  contradicted: 2
  attempts: 1
  hash: "ef117807c06c43c29516c7c3a6b5984a"
---

## What's changing

Microsoft Purview Communication Compliance policies can now be scoped with an adaptive scope as well as to **All users** or to selected users and groups. An adaptive scope is a query over Microsoft Entra ID attributes (department, country or region, job title, Exchange custom attributes and others) that Purview runs once a day, so the policy follows people as their attributes change instead of relying on a static list.

Using one is a choice made in the policy wizard: on the **Choose users and reviewers** page, an administrator picks **Select adaptive scopes** and chooses scopes that must already exist. For Communication Compliance, only **Users** and **Microsoft 365 Groups** scopes apply; Microsoft's adaptive scopes page says SharePoint sites and OneDrive accounts aren't supported, and that excluded users and Microsoft 365 groups are supported. Learn also states that adaptive scopes can't be used together with administrative units in Communication Compliance "at this time": a policy scoped to admin units does not show the **Select adaptive scopes** option.

The roadmap item is **Launched**, with a preview date of January CY2023 and a target date of April CY2025. It lists both General Availability and Preview as release phases, and Worldwide (Standard Multi-Tenant) as the only cloud.

## Why it matters

For regulated firms that must supervise defined populations (brokers, traders, a region's staff), adaptive scopes replace hand-maintained distribution groups and user lists. Coverage then depends on the accuracy of directory attributes: if HR data or Exchange custom attributes are wrong or late, the policy is wrong or late too, and nobody is told. Microsoft notes that the query doesn't run immediately, gives no validation that values were typed correctly, and can take up to five days to fully populate.

If nobody acts, nothing changes: existing policies keep their current user selection, because adaptive scopes apply only when an administrator creates them and selects them in a policy. The decision is whether to move supervised populations to attribute-based scopes, and who owns the attributes that will drive them.

## Risk assessment

**Data exposure**
- No new data is read. A scope only decides whose Exchange, Teams, Viva Engage and AI interactions an existing policy evaluates; the policy's conditions and locations are unchanged.
- A scope that matches more people than intended brings their messages into reviewers' queues. Check membership under **Scope details** before attaching a scope.

**Security & identity**
- Anyone who can change the Entra ID or Exchange attributes a scope queries can move users into or out of supervision. Treat write access to those attributes as part of the compliance control.
- Creating scopes needs the Scope Manager role, which Learn lists in the Communication Compliance and Communication Compliance Admins role groups as well as Compliance Administrator, Compliance Data Administrator, Organization Management and Records Management.

**Autonomy & actions**
- No change: membership updates run on Purview's daily query, and remediation stays with human investigators.

**Change & support**
- Query errors fail silently: a valid but wrong value returns an empty or partial scope with no warning. Validate advanced queries with Get-Recipient or Get-Mailbox as Learn describes.
- Tenants that already restrict Communication Compliance administrators with admin units cannot use adaptive scopes in those policies at present.

## Cost and licensing

The Microsoft Purview service description lists Communication Compliance as included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5, Microsoft Purview Suite plans, Microsoft 365 E5/A5/F5/G5 Insider Risk Management and the Microsoft 365 E5 + Microsoft Copilot bundles. Adaptive scopes are a scoping option inside a Communication Compliance policy, so they come with that entitlement; the service description publishes no separate licence or charge for them.

The adaptive scopes page warns that users who don't have a valid licence for adaptive scopes don't have the policy settings applied, so a scope can list people the policy does not cover. Separately, the Communication Compliance setup page says detecting risky interactions in non-Microsoft 365 AI data needs pay-as-you-go billing; that meter depends on the locations a policy checks, not on how its users are scoped. The direct cost of this change is admin time to design, validate and maintain the queries.

## Scope

- **Who it affects:** users and Microsoft 365 groups matched by a **Users** or **Microsoft 365 Groups** adaptive scope selected in a Communication Compliance policy. Site scopes aren't applicable to Communication Compliance.
- **Who configures it:** creating scopes needs the Scope Manager role; configuring Communication Compliance policies needs the Communication Compliance or Communication Compliance Admins role group, or a role with the same permissions (Global Administrator, Compliance Administrator, Organization Management).
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Web (Microsoft Purview portal).
- **Out of scope:** policies scoped to administrative units; SharePoint sites and OneDrive accounts.
- **Prerequisite:** the scope must exist before the policy is created, and Microsoft advises waiting a few days for a new scope to populate before adding it to a policy.

## Governance guidance

### Before rollout
- Identify the Entra ID or Exchange attributes that reliably mark each supervised population, and agree with the identity team who maintains them.
- Check whether Communication Compliance administrators are restricted by admin units; if they are, adaptive scopes are not available in their policies.
- Confirm who holds the Scope Manager role through the Communication Compliance, Communication Compliance Admins or Compliance Administrator role groups.
- Validate each advanced query in Exchange Online PowerShell with Get-Recipient or Get-Mailbox before creating the scope.

### At rollout
- Create the scopes under Settings > Roles and scopes > Adaptive scopes, and wait several days for membership to populate.
- Compare each scope's **Scope details** membership, or Get-AdaptiveScopeMembers output, with the expected population.
- Create the Communication Compliance policy as a custom policy and select the scopes under **Select adaptive scopes**, adding exclusions where needed.

### After rollout
- Re-check scope membership after reorganisations, mergers or HR system changes that rewrite attributes.
- Investigate users whose licence does not cover adaptive scopes, since they are listed in a scope without the policy applying.
- Review the role groups that hold Scope Manager, since membership of a scope decides who is supervised.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Communication Compliance policy covers users through adaptive scopes</strong><br><small class="controls__note">Security &amp; Compliance PowerShell. Option is hidden when the policy is scoped to admin units. Scopes must exist first.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › Create policy › Custom policy › Choose users and reviewers › Choose users and groups › Select adaptive scopes <a href="https://learn.microsoft.com/purview/communication-compliance-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SupervisoryReviewRule -Policy &lt;PolicyIdParameter&gt; -IncludeAdaptiveScopes &lt;String[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or groups an adaptive scope's query matches</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Scope Manager role. The cmdlet reference describes scopes as used in retention policies; the adaptive scopes page adds Communication Compliance.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &lt;String&gt; -LocationType &lt;DynamicBoundaryLocationType&gt; -RawQuery &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Current membership of an adaptive scope</strong><br><small>Tenant</small><br><small class="controls__note">Read-only check. Query changes can take up to five days to show in scope details.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › scope › Scope details <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AdaptiveScopeMembers -Identity &lt;ComplianceRuleIdParameter&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can configure Communication Compliance policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Communication Compliance and Communication Compliance Admins role groups configure policies; both include the Scope Manager role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The adaptive scope and the Communication Compliance policy are separate objects: a scope can be reused by retention and auto-labeling policies, so editing a scope's query changes every policy that uses it. Learn gives no on-screen validation of query values; check membership with Scope details or Get-AdaptiveScopeMembers. Admin units and adaptive scopes cannot currently be combined in Communication Compliance, so an organisation that segments investigators by admin unit has to choose between the two. Role group changes can take up to 30 minutes to apply.

## Open questions

- Which licence does Microsoft count as "a valid license for adaptive scopes" for a Communication Compliance policy, and how can an admin list scope members it excludes? Watch the Purview service description.
- Can an existing Communication Compliance policy be switched from **All users** or selected users to adaptive scopes, or must a new policy be created? Watch the Communication Compliance policies page.
- When will adaptive scopes work with administrative units in Communication Compliance, which Learn describes as unavailable "at this time"?
- How soon after a user leaves a scope does the policy stop capturing their messages, given the daily query and the up-to-five-day population time?
- Will this capability reach GCC, GCC High and DoD tenants? The roadmap item lists Worldwide only; watch the roadmap and Message center.

<!-- rationale
risk: Low. An adaptive scope applies only when an admin creates it and selects it in a policy; the main exposure is a mistyped query that silently leaves users unmonitored, because Purview does not validate the values.
cost: Low. Communication Compliance is included in Microsoft 365 E5 and the other plans the Purview service description lists; Microsoft publishes no separate charge for adaptive scopes. The cost is admin time to build and check queries.
impact: Low. Only compliance administrators building Communication Compliance policies notice it; monitored users see nothing different.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] controls[0].api; Governance controls: first row / command: New-SupervisoryReviewRule -Policy <PolicyIdParameter> -IncludeAdaptiveScopes <String[]> is a documented operation for configuring adaptive scoping of a Communication Compliance policy. | Found: Searched: '"New-SupervisoryReviewRule" "IncludeAdaptiveScopes" Communication Compliance'; opened new-supervisoryreviewrule and communication-compliance-configure. Syntax exists, but the parameter description is a placeholder; setup says policy management cannot use PowerShell. | Fix: Set controls[0].api to null and replace the corresponding rendered command with Not yet documented. Add to its note: 'The PowerShell reference lists -IncludeAdaptiveScopes without documenting its behavior; the setup guide says to create and manage Communication Compliance policies in the portal.' Retain https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule and https://learn.microsoft.com/purview/communication-compliance-configure as sources for that qualification. The missing Name parameter is not the finding.
- [contradicted, blocker] controls[2].api; Governance guidance: At rollout; Governance controls: third row / command: Get-AdaptiveScopeMembers -Identity <ComplianceRuleIdParameter> is the call for checking current membership. | Found: Use this cmdlet to retrieve existing and past members (users, groups, or sites) of an adaptive scope. ... The State parameter specifies the state ... Added: Current members of the adaptive scope. ... Removed: Former members of the adaptive scope. | Fix: Replace the call with 'Get-AdaptiveScopeMembers -Identity <ComplianceRuleIdParameter> -State Added' in controls[2].api and the rendered table; use that current-member qualification in the membership-checking prose. Add to the row note: 'The default page contains at most 10,000 members; use the returned Watermark with -PageCookie to retrieve subsequent pages.' Reference: https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers
- [unsupported, blocker] Cost and licensing; Governance guidance: After rollout; Open questions: licensing / licensing: Unlicensed users appear in the actual adaptive scope membership even though the policy does not cover them. | Found: Searched: '"adaptive scope" "unlicensed" "members"'; read adaptive scopes validation and membership details and Get-AdaptiveScopeMembers. The licensing warning concerns Exchange validation-command results, not a guarantee about actual scope membership. | Fix: Replace 'so a scope can list people the policy does not cover' with 'Exchange query-validation results can include unlicensed users to whom policy settings do not apply.' Replace the After rollout bullet with 'Investigate unlicensed users returned by Exchange query validation; those results are not proof that policy settings apply.' In the licensing open question, replace 'list scope members it excludes' with 'distinguish unlicensed users in Exchange validation results'. Source: https://learn.microsoft.com/purview/purview-adaptive-scopes#validate-advanced-queries.
- [unsupported, major] Risk assessment: Data exposure / behaviour: No new data is read. | Found: Searched: 'Communication Compliance adaptive scopes no new data read query values warning automatic remediation' and '"Communication Compliance" "adaptive scopes" "no new data"'; read adaptive scopes and policy setup. Neither states this blanket data-access assurance. | Fix: Remove 'No new data is read.' Keep the narrower explanation that an adaptive scope defines the users or groups a policy covers.
- [unsupported, major] Risk assessment: Data exposure / behaviour: An existing policy's conditions remain unchanged when adaptive scopes are used. | Found: Searched: '"Communication Compliance" "adaptive scopes" "data" "conditions"' and 'Communication compliance adaptive scopes change existing policy all users edit'; read policy settings and custom-policy setup. They describe separate configuration, not this change guarantee. | Fix: Replace 'the policy's conditions and locations are unchanged' with 'the policy wizard configures locations and conditions separately from the user selection'. Source: https://learn.microsoft.com/purview/communication-compliance-configure#step-5-required-create-a-communication-compliance-policy.
- [unsupported, major] Risk assessment: Data exposure / behaviour: An existing policy's locations remain unchanged when adaptive scopes are used. | Found: Searched: '"Communication Compliance" "adaptive scopes" "data" "conditions"' and 'Communication compliance adaptive scopes change existing policy all users edit'; read policy settings and custom-policy setup. No passage guarantees existing locations are preserved by a switch. | Fix: Use the same single replacement for the shared clause: 'the policy wizard configures locations and conditions separately from the user selection'. Do not imply that changing an existing policy to adaptive scoping has documented preservation behavior. Source: https://learn.microsoft.com/purview/communication-compliance-configure#step-5-required-create-a-communication-compliance-policy.
- [unsupported, major] Why it matters; Risk assessment: Change & support; rationale: risk / behaviour: Mistyped query values always fail silently, with no warning or notification that coverage is wrong. | Found: Searched: '"adaptive scopes" "warning" "values"' and 'Communication Compliance adaptive scopes no new data read query values warning automatic remediation'; read adaptive scopes configuration and validation. No immediate value validation is documented, not a blanket absence of warnings. | Fix: Remove 'and nobody is told' from Why it matters. Replace 'Query errors fail silently: a valid but wrong value returns an empty or partial scope with no warning' with 'Query values are not validated immediately because the query does not run immediately'. In the risk rationale replace 'silently leaves users unmonitored' with 'can leave intended users outside the scope'. Source: https://learn.microsoft.com/purview/purview-adaptive-scopes#configure-adaptive-scopes.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Scope: Who configures it / role: Global Administrator, Compliance Administrator and Organization Management have the same solution permissions as Communication Compliance Admins. | Found: Members of the following roles have the same solution permissions included with the *Communication Compliance Admins* role group: ... Microsoft Entra ID *Global Administrator* ... *Compliance Administrator* ... *Organization Management* | Fix: Remove ', or a role with the same permissions (Global Administrator, Compliance Administrator, Organization Management)' from Who configures it. The permissions page supports it, but https://learn.microsoft.com/purview/communication-compliance#workflow says 'By default, Global Administrators don't have access to Communication Compliance features'; keeping only the two verified Communication Compliance role groups avoids presenting the conflicting guidance as settled. | Source: https://learn.microsoft.com/purview/communication-compliance-permissions
- [supported, minor] controls[1].ui; Governance guidance: At rollout; Governance controls: second row / admin-path: Adaptive scope queries are configured through Microsoft Purview portal > Settings > Roles and scopes > Adaptive scopes > + Create scope. | Found: Sign in to the Microsoft Purview portal ... **Settings** ... **Roles and scopes** ... **Adaptive scopes**. ... select **+ Create scope**. ... Select the type of scope, and then select the attributes or properties you want to use to build the dynamic membership. | Fix: Keep the documented entry path, but add to controls[1].note and the rendered note: 'Continue through the scope configuration, keep Full directory when not restricting by administrative units, select Users or Microsoft 365 Groups, and configure the attributes and values or select Advanced query builder.' The printed path currently stops at the wizard entry rather than the query configuration. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [supported, minor] controls[2].ui; Risk assessment: Data exposure; Governance guidance; Governance controls: third row / admin-path: Scope membership is available at Microsoft Purview portal > Settings > Roles and scopes > Adaptive scopes > scope > Scope details. | Found: Select **Settings** > **Roles and scopes** > **Adaptive scopes**. ... Select an existing adaptive scope from the list. ... From the **Details** flyout pane, select **Scope details**. | Fix: Keep the path. Add to controls[2].note and the rendered note: 'In Scope details, State = Added identifies current members; State = Removed identifies former members.' The page lists both, so reaching it alone is not a current-members-only view. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [supported, minor] Risk assessment: Autonomy & actions / behaviour: Remediation stays with human investigators rather than adaptive scopes taking automatic remediation actions. | Found: Investigators have a range of actions they can take to address the displayed message and no automatic actions are taken without manual investigator review. | Fix: Add https://learn.microsoft.com/purview/communication-compliance-solution-overview#system-capabilities to sources for the statement that remediation requires investigator review. | Source: https://learn.microsoft.com/purview/communication-compliance-solution-overview#system-capabilities
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: Every control the governance checklist asks administrators to check is represented in the controls table. | Found: Check whether Communication Compliance administrators are restricted by admin units ... Controls rows cover adaptive policy selection, scope queries, membership and role-group membership; none provides the administrative-unit assignment control. | Fix: The Before rollout step asking administrators to check administrative-unit restrictions has no corresponding control row. Remove that checklist step; retain the documented restriction in Scope and the policy row's note. Do not add a control row as part of this correction.
-->
