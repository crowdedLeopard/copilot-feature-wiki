---
title: "Microsoft Purview Communication Compliance: adaptive scopes choose which users a policy covers (GCC, GCC High, DoD)"
slug: "microsoft-purview-compliance-portal-communication-compliance-adaptive-policy-scope"
roadmapId: 172024
topic: "governance"
products: ["Microsoft Purview"]
summary: "Communication Compliance policies can target users through adaptive scopes, attribute queries that update membership daily. Nothing changes until a compliance admin builds a scope and selects it in a policy."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["GCC","GCC High","DoD"]
platforms: ["Web"]
targetDate: "November CY2025"
previewDate: "June CY2025"
risk: "low"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "review"
licensing:
  model: "included"
  notes: "The Microsoft Purview service description lists Communication Compliance as included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5 and the Purview Suite plans. It publishes no separate licence line for adaptive scopes."
audiences: ["compliance","m365-admin","security"]
tags: ["purview","communication-compliance","adaptive-scopes","role-groups","administrative-units","powershell","gcc","gcc-high","dod"]
sources:
  - title: "Microsoft 365 Roadmap 172024"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=172024"
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
  - title: "Whether a Communication Compliance policy takes its users from adaptive scopes (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule"
    kind: "learn"
  - title: "Which users or Microsoft 365 groups an adaptive scope includes (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    kind: "learn"
  - title: "Who can configure Communication Compliance policies and settings (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Current and past members of an adaptive scope (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    kind: "learn"
videos: []
related: ["role-groups","microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-us-government","microsoft-purview-compliance-portal-communication-compliance-enhanced-policy-conditions","microsoft-purview-communication-compliance-alert-improvements"]
controls:
  - governs: "Whether a Communication Compliance policy takes its users from adaptive scopes"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Communication Compliance > Policies > Create policy > Custom policy > Choose users and reviewers > Choose users and groups > Select adaptive scopes"
      docs: "https://learn.microsoft.com/purview/communication-compliance-configure"
    api:
      kind: "powershell"
      call: "New-SupervisoryReviewRule -Policy <PolicyIdParameter> -IncludeAdaptiveScopes <String[]>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule"
    note: "Needs Communication Compliance or Communication Compliance Admins. Option is hidden when the policy is scoped by admin units. The reference does not describe -IncludeAdaptiveScopes (November 2026)."
  - governs: "Which users or Microsoft 365 groups an adaptive scope includes"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > + Create scope"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AdaptiveScope -Name <String> -LocationType User -FilterConditions <PswsHashtable>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope"
    note: "Any role group with the Scope Manager role can create a scope. Security & Compliance PowerShell; -LocationType also accepts Group."
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
    note: "Communication Compliance and Communication Compliance Admins role groups can configure policies and settings."
  - governs: "Current and past members of an adaptive scope"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > adaptive scope > Scope details"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "Get-AdaptiveScopeMembers -Identity <ComplianceRuleIdParameter>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    note: "Monitoring only. The portal list shows up to 1 million members; Microsoft points to the cmdlet for 1,000 or more members."
confidence: "high"
created: "2026-11-27"
updated: "2026-11-27"
roadmapModified: "2026-06-23T23:15:39"
changes:
  - date: "2026-11-27"
    note: "New briefing: adaptive scopes in Communication Compliance policies, with the scope, policy, role and membership controls."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 59 statements contradicted, 2 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-27"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 55
  unconfirmed: 2
  contradicted: 2
  attempts: 1
  hash: "b9439f8991ce95a61fe7803b760c0c2b"
---

## What's changing

A Communication Compliance policy can now take its users from an adaptive scope: a query on user or Microsoft 365 group attributes, such as department or country or region, that Microsoft Purview re-runs daily so the policy follows the directory instead of a static list. On the **Choose users and reviewers** page of the policy wizard, administrators choose **All users**, **Select users** or **Select adaptive scopes**.

The scope has to exist before the policy. Microsoft's page says that if you decide to create an adaptive policy, you must create one or more adaptive scopes first and then select them. Scopes are built under **Settings > Roles and scopes > Adaptive scopes** in the Microsoft Purview portal, with a simple query builder or an advanced builder that takes OPATH filters. For Communication Compliance, site scopes do not apply, and excluded users and Microsoft 365 groups are supported. The same scope can be reused by retention and auto-labeling policies.

The roadmap item is **Launched** (General Availability), with a preview date of June CY2025 and a target of November CY2025. It lists GCC, GCC High and DoD as its clouds and Web as the platform.

## Why it matters

Supervision of regulated staff (traders, brokers, a business unit) usually depends on someone keeping a group current. An adaptive scope moves that job to the directory: whoever maintains Department, Country or region or the Exchange custom attributes in Microsoft Entra ID now decides, in effect, who is supervised. That is less admin work and fewer missed joiners, but it ties compliance coverage to HR and identity data quality.

If nobody acts, existing policies keep their current user selection; the option applies only to policies where an admin selects a scope. The gaps to plan for are timing and validation: queries run once a day, can take up to five days to fully populate, and Purview does not check that a typed value is correct.

## Risk assessment

**Data exposure**
- A scope that matches more people than intended brings their messages in the locations the policy checks into reviewers' queues. Check the scope's membership list before attaching it to a policy (Settings > Roles and scopes > Adaptive scopes > scope > Scope details).
- A scope edited for a retention or auto-labeling policy also changes a Communication Compliance policy that uses it, because scopes are shared configuration.

**Security & identity**
- Membership follows Microsoft Entra ID attributes, so anyone who can edit those attributes can move a user in or out of supervision. Audit who holds attribute-write rights alongside the Purview role groups.
- Any role group with the Scope Manager role can create scopes, including Compliance Administrator, Organization Management and Records Management, not only the Communication Compliance groups.

**Autonomy & actions**
- No change: the scope selects users; detection, alerts and remediation work as before.

**Change & support**
- Because the query does not run immediately, there is no validation that values were typed correctly; a misspelt value yields an empty or partial scope.
- Adaptive scopes cannot be used together with admin units in Communication Compliance at this time; a policy scoped by admin units does not show the **Select adaptive scopes** option.
- Users matched by a scope who lack a valid licence do not have the policy applied.
- The **Show insights and recommendations** blind-spot checkbox is not available with adaptive scopes.

## Cost and licensing

**Licence.** The Microsoft Purview service description lists Communication Compliance as included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5, Microsoft Purview Suite plans and Microsoft 365 E5/A5/F5/G5 Insider Risk Management. The Get started page says organisations need a supported subscription and users need the appropriate licences assigned. The service description gives no separate line for adaptive scopes.

**Meter.** The Get started page says detecting risky interactions in non-Microsoft 365 AI data requires pay-as-you-go billing, and that there are no pay-as-you-go requirements or charges for Microsoft 365 Copilot data. That depends on the locations a policy checks, not on how its users are chosen.

**Indirect cost.** Admin time to agree attributes with identity owners, test advanced queries in Exchange Online PowerShell and recheck membership after directory changes. A scope that grows with the directory also grows the number of users whose messages reviewers must handle.

**Not yet published.** Which licence counts as "a valid license for adaptive scopes" for a Communication Compliance policy.

## Scope

- **Who is covered:** users and Microsoft 365 groups matched by a **Users** or **Microsoft 365 Groups** scope; site scopes are not applicable to Communication Compliance.
- **Roles:** creating a scope needs a role group with the Scope Manager role (Compliance Administrator, Compliance Data Administrator, Organization Management, Records Management, Communication Compliance, Communication Compliance Admins). Configuring policies needs the Communication Compliance or Communication Compliance Admins role group.
- **Query limits:** attribute values up to 200 characters; up to 10 attributes without a group or within a group; up to 10 groups; advanced queries up to 10,000 characters.
- **Clouds:** the roadmap item lists GCC, GCC High and DoD. **Platform:** Web.
- **Out of scope:** policies scoped by admin units, which cannot use adaptive scopes at this time.

## Governance guidance

### Before rollout
- Agree with identity owners which Microsoft Entra ID attributes (Department, Country or region, CustomAttribute1-15) reliably mark supervised staff, and who can change them.
- Review who holds Scope Manager through Compliance Administrator, Organization Management and Records Management, since they can create scopes Communication Compliance policies use.
- Decide per policy whether admin units or adaptive scopes will segment it, because the two cannot be combined in Communication Compliance today.
- Test advanced queries with Get-Recipient or Get-Mailbox and the -Filter parameter in Exchange Online PowerShell before saving the scope.

### At rollout
- Create the scope under Settings > Roles and scopes > Adaptive scopes and wait a few days for it to populate before selecting it in a policy.
- Compare the scope's Scope details list, or Get-AdaptiveScopeMembers output, against the expected supervised population.
- Add known exceptions in the policy's Excluded users and groups section.
- Name scopes so retention and records administrators can see that a Communication Compliance policy depends on them.

### After rollout
- Recheck Scope details after reorganisations or HR data loads, looking for unexpected Removed entries in the State column.
- Confirm that matched users hold a licence that includes Communication Compliance, since unlicensed users do not have the policy applied.
- Review changes to shared scopes before approving edits requested for retention or auto-labeling policies.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Communication Compliance policy takes its users from adaptive scopes</strong><br><small class="controls__note">Needs Communication Compliance or Communication Compliance Admins. Option is hidden when the policy is scoped by admin units. The reference does not describe -IncludeAdaptiveScopes (November 2026).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › Create policy › Custom policy › Choose users and reviewers › Choose users and groups › Select adaptive scopes <a href="https://learn.microsoft.com/purview/communication-compliance-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-SupervisoryReviewRule -Policy &lt;PolicyIdParameter&gt; -IncludeAdaptiveScopes &lt;String[]&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users or Microsoft 365 groups an adaptive scope includes</strong><br><small>Tenant</small><br><small class="controls__note">Any role group with the Scope Manager role can create a scope. Security &amp; Compliance PowerShell; -LocationType also accepts Group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &lt;String&gt; -LocationType User -FilterConditions &lt;PswsHashtable&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can configure Communication Compliance policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Communication Compliance and Communication Compliance Admins role groups can configure policies and settings.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Current and past members of an adaptive scope</strong><br><small class="controls__note">Monitoring only. The portal list shows up to 1 million members; Microsoft points to the cmdlet for 1,000 or more members.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › adaptive scope › Scope details <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AdaptiveScopeMembers -Identity &lt;ComplianceRuleIdParameter&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The policy row and the scope row interact: the policy only points at a scope, and the scope's query decides membership, so the Scope Manager role and Entra ID attribute-write rights both govern coverage. A scope change can take up to five days to be reflected. The Security & Compliance PowerShell references for New-AdaptiveScope and Get-AdaptiveScopeMembers describe scopes in terms of retention and Insider Risk Management policies; the adaptive scopes page is the one that names Communication Compliance policies. The New-SupervisoryReviewRule reference lists -IncludeAdaptiveScopes but gives no description of the parameter at the time of writing (November 2026).

## Open questions

- What value does -IncludeAdaptiveScopes on New-SupervisoryReviewRule take (scope name, GUID or another identifier)? Watch the cmdlet reference.
- Which licence counts as "a valid license for adaptive scopes" for a user in a Communication Compliance policy? Watch the adaptive scopes page and the Purview service description.
- When will admin units and adaptive scopes be usable together in Communication Compliance, which the permissions page rules out "at this time"? Watch Message center and the permissions page.
- From when are messages of a user newly added to a scope evaluated: from the daily query that adds them, or earlier? Watch the Communication Compliance policies page.

<!-- rationale
risk: Low. An adaptive scope applies only when an admin creates one and selects it in a policy; the exposure is a mistyped query or attribute change silently dropping users from supervision, which Purview does not validate.
cost: Low. Communication Compliance is included in Microsoft 365 E5/A5/G5 and Office 365 E5/A5/G5; no separate charge for adaptive scopes is published, so the cost is admin time to design and check scopes.
impact: Low. Compliance administrators and reviewers notice; the change is to how a policy's users are chosen.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Scope: Roles / role: Configuring Communication Compliance policies needs membership of Communication Compliance or Communication Compliance Admins. | Found: Members of the following roles have the same solution permissions included with the Communication Compliance Admins role group: ... Microsoft Entra ID Global Administrator ... Compliance Administrator ... Microsoft Purview portal Organization Management ... Compliance Administrator | Fix: Replace 'Needs Communication Compliance or Communication Compliance Admins' in the policy-row note with 'Members of Communication Compliance and Communication Compliance Admins can configure policies and settings.' Replace the corresponding 'Configuring policies needs' sentence in Scope with that same sentence. The permissions page also explicitly grants equivalent solution permissions to broader administrator roles. | Source: https://learn.microsoft.com/purview/communication-compliance-permissions
- [unsupported, blocker] controls[0].api; Governance controls: policy row / command: New-SupervisoryReviewRule -Policy <PolicyIdParameter> -IncludeAdaptiveScopes <String[]> is documented automation for assigning adaptive scopes to a Communication Compliance policy. | Found: Searched: 'New-SupervisoryReviewRule IncludeAdaptiveScopes parameter scope GUID' and '"IncludeAdaptiveScopes" "Communication"'; read the New reference and New/Set excerpts. Syntax lists String[]; the description is an unfilled placeholder, not an explanation of the operation. | Fix: Set controls[0].api to null and update its rendered table cell to 'Not yet documented'. Replace the parameter note with 'The New-SupervisoryReviewRule reference lists -IncludeAdaptiveScopes as String[] but does not document its effect or accepted scope identifiers (November 2026).' Keep the documented UI route.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Detection, alerts and remediation work exactly as before when adaptive scopes are used. | Found: Searched: '"Communication Compliance" "adaptive scopes" "detection" alerts remediation unchanged'; read policies, Get started and workflow excerpts. They describe selection and workflows, not an explicit guarantee that all three behaviours are unchanged. | Fix: Replace the bullet with 'The scope selects which users or groups the policy covers.' Remove the unsupported historical comparison about detection, alerts and remediation.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[3].ui; Risk assessment: Data exposure; Governance guidance / admin-path: Scope membership is available at Settings > Roles and scopes > Adaptive scopes > adaptive scope > Scope details. | Found: Select Settings > Roles and scopes > Adaptive scopes. ... Select an existing adaptive scope from the list. ... From the Details flyout pane, select Scope details. | Fix: Include the intervening pane heading in the front matter and rendered/prose routes: 'Settings > Roles and scopes > Adaptive scopes > adaptive scope > Details > Scope details'. No additional selection is required to open the Details pane. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [contradicted, minor] Governance guidance: At rollout; Governance controls / consistency: The checklist's instruction to configure Excluded users and groups has no corresponding control row. | Found: Checklist: 'Add known exceptions in the policy's Excluded users and groups section.' The four rows cover selecting scopes, defining scopes, assigning administrators and viewing membership; none covers exclusions. | Fix: Remove the checklist bullet 'Add known exceptions in the policy's Excluded users and groups section.' Its exclusion control has no row in the existing table; the supported exclusions statement in What's changing can remain.
-->
