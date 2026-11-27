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
  - title: "New-SupervisoryReviewRule"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-supervisoryreviewrule"
    kind: "learn"
  - title: "Communication Compliance"
    url: "https://learn.microsoft.com/purview/communication-compliance-solution-overview"
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
    api: null
    note: "Hidden when the policy is scoped to admin units. Scopes must exist first. The PowerShell reference lists -IncludeAdaptiveScopes without documenting its behaviour; the setup guide says to manage these policies in the portal."
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
      call: "Get-AdaptiveScopeMembers -Identity <ComplianceRuleIdParameter> -State Added"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers"
    note: "Read-only check. Query changes can take up to five days to show in scope details. The default page contains at most 10,000 members; use the returned Watermark with -PageCookie to retrieve subsequent pages."
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
  - date: "2026-11-27"
    note: "Corrected: policy-scoping PowerShell now Not yet documented; membership cmdlet uses -State Added with paging note; narrowed licensing, data-exposure and query-validation wording; removed admin-unit checklist step and Global Administrator clause."
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 1 of 55 statements contradicted, 0 unconfirmed; taken offline until corrected"
version: 2
verification:
  status: "held"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 55
  confirmed: 54
  unconfirmed: 0
  contradicted: 1
  attempts: 2
  hash: "874c4d8bd4486dd8a56945b8a2df24c8"
---

## What's changing

Microsoft Purview Communication Compliance policies can now be scoped with an adaptive scope as well as to **All users** or to selected users and groups. An adaptive scope is a query over Microsoft Entra ID attributes (department, country or region, job title, Exchange custom attributes and others) that Purview runs once a day, so the policy follows people as their attributes change instead of relying on a static list.

Using one is a choice made in the policy wizard: on the **Choose users and reviewers** page, an administrator picks **Select adaptive scopes** and chooses scopes that must already exist. For Communication Compliance, only **Users** and **Microsoft 365 Groups** scopes apply; Microsoft's adaptive scopes page says SharePoint sites and OneDrive accounts aren't supported, and that excluded users and Microsoft 365 groups are supported. Learn also states that adaptive scopes can't be used together with administrative units in Communication Compliance "at this time": a policy scoped to admin units does not show the **Select adaptive scopes** option.

The roadmap item is **Launched**, with a preview date of January CY2023 and a target date of April CY2025. It lists both General Availability and Preview as release phases, and Worldwide (Standard Multi-Tenant) as the only cloud.

## Why it matters

For regulated firms that must supervise defined populations (brokers, traders, a region's staff), adaptive scopes replace hand-maintained distribution groups and user lists. Coverage then depends on the accuracy of directory attributes: if HR data or Exchange custom attributes are wrong or late, the policy is wrong or late too. Microsoft notes that the query doesn't run immediately, gives no validation that values were typed correctly, and can take up to five days to fully populate.

If nobody acts, nothing changes: existing policies keep their current user selection, because adaptive scopes apply only when an administrator creates them and selects them in a policy. The decision is whether to move supervised populations to attribute-based scopes, and who owns the attributes that will drive them.

## Risk assessment

**Data exposure**
- An adaptive scope defines the users or groups a policy covers; the policy wizard configures locations and conditions separately from the user selection.
- A scope that matches more people than intended brings their messages into reviewers' queues. Check membership under **Scope details** before attaching a scope.

**Security & identity**
- Anyone who can change the Entra ID or Exchange attributes a scope queries can move users into or out of supervision. Treat write access to those attributes as part of the compliance control.
- Creating scopes needs the Scope Manager role, which Learn lists in the Communication Compliance and Communication Compliance Admins role groups as well as Compliance Administrator, Compliance Data Administrator, Organization Management and Records Management.

**Autonomy & actions**
- No change: membership updates run on Purview's daily query, and remediation stays with human investigators.

**Change & support**
- Query values are not validated immediately because the query does not run immediately. Validate advanced queries with Get-Recipient or Get-Mailbox as Learn describes.
- Tenants that already restrict Communication Compliance administrators with admin units cannot use adaptive scopes in those policies at present.

## Cost and licensing

The Microsoft Purview service description lists Communication Compliance as included in Microsoft 365 E5/A5/G5, Office 365 E5/A5/G5, Microsoft Purview Suite plans, Microsoft 365 E5/A5/F5/G5 Insider Risk Management and the Microsoft 365 E5 + Microsoft Copilot bundles. Adaptive scopes are a scoping option inside a Communication Compliance policy, so they come with that entitlement; the service description publishes no separate licence or charge for them.

The adaptive scopes page warns that users who don't have a valid licence for adaptive scopes don't have the policy settings applied; Exchange query-validation results can include unlicensed users to whom policy settings do not apply. Separately, the Communication Compliance setup page says detecting risky interactions in non-Microsoft 365 AI data needs pay-as-you-go billing; that meter depends on the locations a policy checks, not on how its users are scoped. The direct cost of this change is admin time to design, validate and maintain the queries.

## Scope

- **Who it affects:** users and Microsoft 365 groups matched by a **Users** or **Microsoft 365 Groups** adaptive scope selected in a Communication Compliance policy. Site scopes aren't applicable to Communication Compliance.
- **Who configures it:** creating scopes needs the Scope Manager role; configuring Communication Compliance policies needs the Communication Compliance or Communication Compliance Admins role group.
- **Clouds:** the roadmap item lists Worldwide (Standard Multi-Tenant) only.
- **Platforms:** Web (Microsoft Purview portal).
- **Out of scope:** policies scoped to administrative units; SharePoint sites and OneDrive accounts.
- **Prerequisite:** the scope must exist before the policy is created, and Microsoft advises waiting a few days for a new scope to populate before adding it to a policy.

## Governance guidance

### Before rollout
- Identify the Entra ID or Exchange attributes that reliably mark each supervised population, and agree with the identity team who maintains them.
- Confirm who holds the Scope Manager role through the Communication Compliance, Communication Compliance Admins or Compliance Administrator role groups.
- Validate each advanced query in Exchange Online PowerShell with Get-Recipient or Get-Mailbox before creating the scope.

### At rollout
- Create the scopes under Settings > Roles and scopes > Adaptive scopes, and wait several days for membership to populate.
- Compare each scope's current members (**State** of **Added** in **Scope details**, or Get-AdaptiveScopeMembers with -State Added) with the expected population.
- Create the Communication Compliance policy as a custom policy and select the scopes under **Select adaptive scopes**, adding exclusions where needed.

### After rollout
- Re-check scope membership after reorganisations, mergers or HR system changes that rewrite attributes.
- Investigate unlicensed users returned by Exchange query validation; those results are not proof that policy settings apply.
- Review the role groups that hold Scope Manager, since membership of a scope decides who is supervised.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether a Communication Compliance policy covers users through adaptive scopes</strong><br><small class="controls__note">Hidden when the policy is scoped to admin units. Scopes must exist first. The PowerShell reference lists -IncludeAdaptiveScopes without documenting its behaviour; the setup guide says to manage these policies in the portal.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Communication Compliance › Policies › Create policy › Custom policy › Choose users and reviewers › Choose users and groups › Select adaptive scopes <a href="https://learn.microsoft.com/purview/communication-compliance-configure" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Which users or groups an adaptive scope's query matches</strong><br><small>Tenant</small><br><small class="controls__note">Needs the Scope Manager role. The cmdlet reference describes scopes as used in retention policies; the adaptive scopes page adds Communication Compliance.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &lt;String&gt; -LocationType &lt;DynamicBoundaryLocationType&gt; -RawQuery &lt;String&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Current membership of an adaptive scope</strong><br><small>Tenant</small><br><small class="controls__note">Read-only check. Query changes can take up to five days to show in scope details. The default page contains at most 10,000 members; use the returned Watermark with -PageCookie to retrieve subsequent pages.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › scope › Scope details <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-AdaptiveScopeMembers -Identity &lt;ComplianceRuleIdParameter&gt; -State Added</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/get-adaptivescopemembers" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can configure Communication Compliance policies and settings</strong><br><small>Tenant</small><br><small class="controls__note">Communication Compliance and Communication Compliance Admins role groups configure policies; both include the Scope Manager role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › role group › Edit › Choose users <a href="https://learn.microsoft.com/purview/communication-compliance-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The adaptive scope and the Communication Compliance policy are separate objects: a scope can be reused by retention and auto-labeling policies, so editing a scope's query changes every policy that uses it. Learn gives no on-screen validation of query values; check current members with Scope details or Get-AdaptiveScopeMembers -State Added. Admin units and adaptive scopes cannot currently be combined in Communication Compliance, so an organisation that segments investigators by admin unit has to choose between the two. Role group changes can take up to 30 minutes to apply.

## Open questions

- Which licence does Microsoft count as "a valid license for adaptive scopes" for a Communication Compliance policy, and how can an admin distinguish unlicensed users in Exchange validation results? Watch the Purview service description.
- Can an existing Communication Compliance policy be switched from **All users** or selected users to adaptive scopes, or must a new policy be created? Watch the Communication Compliance policies page.
- When will adaptive scopes work with administrative units in Communication Compliance, which Learn describes as unavailable "at this time"?
- How soon after a user leaves a scope does the policy stop capturing their messages, given the daily query and the up-to-five-day population time?
- Will this capability reach GCC, GCC High and DoD tenants? The roadmap item lists Worldwide only; watch the roadmap and Message center.

<!-- rationale
risk: Low. An adaptive scope applies only when an admin creates it and selects it in a policy; the main exposure is a mistyped query that can leave intended users outside the scope, because Purview does not validate the values.
cost: Low. Communication Compliance is included in Microsoft 365 E5 and the other plans the Purview service description lists; Microsoft publishes no separate charge for adaptive scopes. The cost is admin time to build and check queries.
impact: Low. Only compliance administrators building Communication Compliance policies notice it; monitored users see nothing different.
-->

<!-- verifier-findings (2026-11-27, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] Scope: Who configures it / role: Configuring Communication Compliance policies needs the Communication Compliance or Communication Compliance Admins role group. | Found: Members of the following roles have the same solution permissions included with the Communication Compliance Admins role group: - Microsoft Entra ID Global Administrator - Microsoft Entra ID Compliance Administrator | Fix: Replace the policy-permissions clause with 'the Communication Compliance and Communication Compliance Admins role groups can configure Communication Compliance policies.' This preserves the documented permission without falsely making membership of those two groups mandatory. See https://learn.microsoft.com/purview/communication-compliance-permissions. | Source: https://learn.microsoft.com/purview/communication-compliance-permissions
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] controls[1].ui; Governance guidance: At rollout / admin-path: Settings > Roles and scopes > Adaptive scopes > + Create scope is the portal route for defining a scope query. | Found: On the Adaptive scopes page, select + Create scope. | Fix: The route correctly opens creation but stops before the query controls. For an advanced-query route, use 'Settings > Roles and scopes > Adaptive scopes > + Create scope > Full directory > scope type > Advanced query builder', where scope type is Users or Microsoft 365 Groups. The cited adaptive scopes page documents those choices; keep the existing Scope Manager note. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
- [supported, minor] controls[2].ui; Risk assessment: Data exposure; Governance controls / admin-path: Settings > Roles and scopes > Adaptive scopes > scope > Scope details opens scope membership. | Found: From the Details flyout pane, select Scope details. | Fix: Include the flyout heading: 'Settings > Roles and scopes > Adaptive scopes > scope > Details > Scope details', as documented at https://learn.microsoft.com/purview/purview-adaptive-scopes. This is an omitted heading, not a missing selectable navigation step. | Source: https://learn.microsoft.com/purview/purview-adaptive-scopes
-->
