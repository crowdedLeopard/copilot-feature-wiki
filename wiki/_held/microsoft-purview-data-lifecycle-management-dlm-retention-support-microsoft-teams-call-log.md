---
title: "Microsoft Purview: retention policies to delete Microsoft Teams call logs"
slug: "microsoft-purview-data-lifecycle-management-dlm-retention-support-microsoft-teams-call-log"
roadmapId: 559261
topic: "governance"
products: ["Microsoft Purview"]
summary: "A separate Purview retention policy, created only in PowerShell, can now delete Teams call logs. Teams chat retention policies no longer cover new call records, so compliance admins who must cap retention need to create one."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "April CY2026"
previewDate: null
risk: "medium"
cost: "low"
impact: "low"
defaultState: "admin-opt-in"
action: "act-now"
licensing:
  model: "included"
  notes: "Covered by the user licences the Purview service description lists for organisation-wide and location-wide retention policies, such as Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium. The description does not name Teams call logs in its location-specific lists."
audiences: ["compliance","m365-admin","service-owner"]
tags: ["purview","data-lifecycle-management","retention","teams","teams-phone","powershell"]
sources:
  - title: "Learn about retention for Microsoft Teams"
    url: "https://learn.microsoft.com/purview/retention-policies-teams"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Permissions in the Microsoft Purview portal"
    url: "https://learn.microsoft.com/purview/purview-permissions"
    kind: "learn"
  - title: "Microsoft 365 Roadmap item 559261"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=559261"
    kind: "roadmap"
  - title: "Whether new Teams call logs are deleted by a retention policy (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    kind: "learn"
  - title: "How many days call logs are kept before deletion (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancerule"
    kind: "learn"
  - title: "Who can create and change retention policies (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-lifecycle-management-legacy-teams-retention-policies-covering-copil","role-groups","microsoft-purview-compliance-portal-data-lifecycle-management-apply-a-retention-policy-to"]
controls:
  - governs: "Whether new Teams call logs are deleted by a retention policy"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-AppRetentionCompliancePolicy -Name \"<PolicyName>\" -Applications \"User:MicrosoftTeamsCallLog\" -ExchangeLocation \"All\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    note: "Security & Compliance PowerShell only; the portal shows the policy read-only. Applies only to call logs created after the policy is active."
  - governs: "How many days call logs are kept before deletion"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-AppRetentionComplianceRule -Name \"<RuleName>\" -Policy \"<PolicyName>\" -RetentionDuration <days> -RetentionComplianceAction Delete"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancerule"
    note: "Microsoft documents deletion as the only applicable action for Teams call logs."
  - governs: "Whether the call log policy is locked against being turned off or shortened (Preservation Lock)"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "New-AppRetentionCompliancePolicy -Name \"<PolicyName>\" -Applications \"User:MicrosoftTeamsCallLog\" -RestrictiveRetention $true"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy"
    note: "Irreversible: a locked policy can be increased or extended but not reduced, disabled or turned off."
  - governs: "Who can create and change retention policies"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Role groups > Role groups for Microsoft Purview solutions > role group > Edit > Edit members of the role group > Choose users"
      docs: "https://learn.microsoft.com/purview/purview-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "Compliance Administrator role group, or a custom role group with the Retention Management role; View-Only Retention Management for read-only."
confidence: "high"
created: "2026-11-28"
updated: "2026-11-28"
roadmapModified: "2026-05-08T22:15:03"
changes:
  - date: "2026-11-28"
    note: "New briefing: PowerShell-only retention policy for Teams call logs, and the late-April 2026 change that removed new call records from Teams chat retention policies."
  - date: "2026-11-28"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 51 statements contradicted, 1 unconfirmed; taken offline until corrected"
version: 1
verification:
  status: "held"
  date: "2026-11-28"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 51
  confirmed: 47
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "914e378851a22942c15222ab15ecd7c6"
---

## What's changing

Microsoft Purview Data Lifecycle Management now supports a retention policy for **Teams call logs**: the call data records (CDRs, also called call detail records) and other call metadata that Teams generates. Microsoft's Learn page says this data can sit in several underlying Teams locations but is targeted as a single workload for retention, and it points to personal call logs and shared call queue logs as examples.

The policy is delete-only in practice. Microsoft states that by default Teams call logs are retained indefinitely, that deletion is the only applicable action, and that the policy can be created and modified only in Security & Compliance PowerShell (`New-AppRetentionCompliancePolicy` with the application value `User:MicrosoftTeamsCallLog`, then `New-AppRetentionComplianceRule`). Once created it appears in the Microsoft Purview portal under **Data Lifecycle Management** > **Policies**, read-only. It applies only to call logs created after the policy is configured and active, and covers call logs from both Teams chats and channels.

The change also alters existing policies. Before late April 2026, CDRs for Teams chat and channel messages were included in Teams chat retention policies. Now new CDRs are supported only by a call log policy; CDRs already covered by earlier Teams chat policies stay managed by those policies.

The roadmap item is **Launched** (General Availability), with a target of April CY2026, for Worldwide (Standard Multi-Tenant). The roadmap description also mentions retaining data for longer; Learn describes deletion as the only action for call logs.

## Why it matters

The roadmap item names the driver: some countries set a maximum retention period for calling records, and call logs kept indefinitely can breach it. A tenant that used a Teams chat retention policy with a delete action to meet that limit had CDRs deleted under it until late April 2026. Since then, new CDRs fall outside that policy, and Microsoft's stated default for call logs is indefinite retention. Nothing deletes them until an administrator creates the call log policy.

Because the policy applies only to call logs created after it is active, each month without it adds records the policy will not reach. For organisations under a statutory maximum, this is a gap to close now rather than at the next policy review. For others, the decision is whether keeping call history indefinitely is acceptable.

## Risk assessment

**Data exposure**
- New CDRs created since late April 2026 are no longer deleted by Teams chat retention policies; without a call log policy they follow the documented default of indefinite retention, which can exceed a regulatory maximum.
- The call log policy does not reach call logs created before it is active, so records from the gap remain under the default.

**Security & identity**
- The identity question is who can create or lock the policy: Purview role groups govern it (Compliance Administrator, or a custom group with the Retention Management role).

**Autonomy & actions**
- Once active, the policy permanently deletes call-log records after the set period with no approval step. For call logs, the record moves to the SubstrateHolds folder typically 1-7 days after expiry, stays at least 1 day, then is permanently deleted the next time the timer job runs (typically 1-7 days).
- Turning on Preservation Lock (`-RestrictiveRetention $true`) is irreversible: the policy can then be extended but not reduced, disabled or turned off.

**Change & support**
- The policy is PowerShell-only and read-only in the portal, so changes need scripting skills and change records outside the portal's usual workflow.

## Cost and licensing

**Licence.** The [Microsoft Purview service description](https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description) lists the licences that give user rights for organisation-wide, location-wide or include/exclude retention policies: Microsoft 365 E5/A5/G5/E3/A3/G3 and Business Premium; Microsoft Purview Suite/EDU/GOV/FLW; Microsoft Defender + Purview Suite FLW; Microsoft 365 E5/A5/F5/G5 Information Protection and Governance; Office 365 E5/A5/G5/E3/A3/G3. The same page says that for user-associated locations such as Exchange mailboxes and Teams chats, the user must have the required licence assigned. The call log policy targets mailboxes (`-ExchangeLocation`). The description's location-specific lists (for Teams chats, channels and private channels, for example) do not mention call logs, so whether those wider lists also cover call logs is not yet published.

**Meter.** The [Get started with data lifecycle management](https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management) page requires pay-as-you-go billing only for the Microsoft Copilot experiences, Enterprise AI apps and Other AI apps locations. It does not list Teams call logs, and no meter is documented for this location at the time of writing (November 2026).

**Indirect cost.** Admin time to script, test and document the policy in Security & Compliance PowerShell.

## Scope

- **Data covered:** Teams call logs, including CDRs and other call metadata, from both Teams chats and channels; Learn points to personal call logs and shared call queue logs as examples.
- **Who configures:** members of the Compliance Administrator role group, or a role group with the Retention Management role ([Get started with data lifecycle management](https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management)).
- **Tooling:** Security & Compliance PowerShell only for creating and changing the policy; the Microsoft Purview portal shows it read-only.
- **Timing:** applies only to call logs created after the policy is configured and active.
- **Clouds:** the roadmap record lists Worldwide (Standard Multi-Tenant).
- **Platforms:** Web, per the roadmap record.

## Governance guidance

### Before rollout
- Confirm with legal or records owners whether a maximum retention period applies to calling records in each country you operate in, and choose the deletion period in days.
- List existing Teams chat retention policies with a delete action, and record that they stopped covering new CDRs in late April 2026.
- Add the people who will run the scripts to the Compliance Administrator role group, or a custom role group with the Retention Management role.
- Decide before creation whether the policy needs Preservation Lock, since a locked policy cannot be reduced or turned off.

### At rollout
- Create the policy in Security & Compliance PowerShell with `New-AppRetentionCompliancePolicy -Applications "User:MicrosoftTeamsCallLog" -ExchangeLocation "All"`.
- Add the rule with `New-AppRetentionComplianceRule`, setting `-RetentionDuration` in days and `-RetentionComplianceAction Delete`.
- Check that the policy appears read-only under Data Lifecycle Management > Policies in the Microsoft Purview portal.

### After rollout
- Record the policy's start date as the earliest creation date of call logs it will delete, and keep that alongside the regulatory requirement it serves.
- Tell Teams Phone and call queue owners that call-log records older than the period will be deleted, and confirm with a test user what Teams call history then shows.
- Review the policy when retention rules change, using PowerShell, since the portal cannot edit it.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Whether new Teams call logs are deleted by a retention policy</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell only; the portal shows the policy read-only. Applies only to call logs created after the policy is active.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AppRetentionCompliancePolicy -Name &quot;&lt;PolicyName&gt;&quot; -Applications &quot;User:MicrosoftTeamsCallLog&quot; -ExchangeLocation &quot;All&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>How many days call logs are kept before deletion</strong><br><small>Tenant</small><br><small class="controls__note">Microsoft documents deletion as the only applicable action for Teams call logs.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AppRetentionComplianceRule -Name &quot;&lt;RuleName&gt;&quot; -Policy &quot;&lt;PolicyName&gt;&quot; -RetentionDuration &lt;days&gt; -RetentionComplianceAction Delete</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancerule" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether the call log policy is locked against being turned off or shortened (Preservation Lock)</strong><br><small>Tenant</small><br><small class="controls__note">Irreversible: a locked policy can be increased or extended but not reduced, disabled or turned off.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AppRetentionCompliancePolicy -Name &quot;&lt;PolicyName&gt;&quot; -Applications &quot;User:MicrosoftTeamsCallLog&quot; -RestrictiveRetention $true</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-appretentioncompliancepolicy" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who can create and change retention policies</strong><br><small>Tenant</small><br><small class="controls__note">Compliance Administrator role group, or a custom role group with the Retention Management role; View-Only Retention Management for read-only.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Role groups › Role groups for Microsoft Purview solutions › role group › Edit › Edit members of the role group › Choose users <a href="https://learn.microsoft.com/purview/purview-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

All three policy controls are set in Security & Compliance PowerShell; Microsoft documents that the call log policy can be created and modified only there, and the Microsoft Purview portal shows it read-only under **Data Lifecycle Management** > **Policies**. Create the policy first, then the rule: the policy decides which mailboxes are in scope, and the rule sets the period and the delete action. Preservation Lock is a parameter of the policy and cannot be undone. Running the cmdlets needs Purview permissions; see [/concepts/role-groups/](/concepts/role-groups/). Existing Teams chat retention policies keep managing the CDRs they already covered but do not govern new ones.

## Open questions

- How can an organisation delete call logs created between late April 2026 and the date its call log policy became active? Watch the Learn page [Learn about retention for Microsoft Teams](https://learn.microsoft.com/purview/retention-policies-teams).
- Do the Teams-specific licence lists in the Purview service description (such as Microsoft 365 F3 and Business Basic) also give user rights for call log retention? Watch the service description.
- Will the call log policy become editable in the Microsoft Purview portal, and will it support adaptive scopes? Watch Message center and the Create and configure retention policies page.
- What do users see in their Teams call history, and in call queue history, when records are deleted by the policy? Watch the Teams retention documentation.

<!-- rationale
risk: Medium. Since late April 2026 new call data records are covered only by a separate call log policy, and Microsoft states call logs are kept indefinitely by default, so tenants relying on Teams chat policies to delete them keep new records until they act.
cost: Low. Retention policies come with licences such as Microsoft 365 E3 and E5 under the Purview service description, and no meter is documented for this location; the cost is admin time to script and test the policy.
impact: Low. Compliance and Teams administrators act on it; nothing about call logs changes until someone creates a call log retention policy in PowerShell.
-->

<!-- verifier-findings (2026-11-28, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, blocker] Why it matters / absence: Nothing deletes call logs until an administrator creates the call-log policy. | Found: Searched: Teams call logs retention deletion eDiscovery hold Litigation Hold permanent deletion; Teams call logs retention licensing Business Basic F3 pay as you go billing meter. Read retention-policies-teams and PSTN usage report excerpts; no universal absence of other deletion routes is stated. | Fix: Remove 'Nothing deletes them until an administrator creates the call log policy.' The preceding sentence already states the documented default without claiming that no other deletion route exists.
- [contradicted, blocker] Risk assessment: Autonomy & actions; Governance guidance: After rollout / behaviour: The policy permanently deletes expired call-log records at the next timer run, typically 1-7 days later, without qualification. | Found: For all examples that refer to permanent deletion, because of the principles of retention, this action is suspended if the message is subject to another retention policy to retain the item or it's subject to an eDiscovery hold. | Fix: Add to the deletion explanation and qualify the After rollout deletion advice: 'Permanent deletion is suspended while the record is subject to an applicable retention policy that retains it or an eDiscovery hold.' The call-log section explicitly applies Example 3's behaviour and timings; see https://learn.microsoft.com/purview/retention-policies-teams. | Source: https://learn.microsoft.com/purview/retention-policies-teams
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] rationale: impact / consistency: Nothing about call logs changes until somebody creates a PowerShell retention policy. | Found: impact: ... nothing about call logs changes until someone creates a call log retention policy in PowerShell. / The change also alters existing policies. ... Now new CDRs are supported only by a call log policy | Fix: Replace the impact rationale's second clause with 'the configuration work falls to compliance and Teams administrators.' Keep the body statement that new CDRs stopped being covered by Teams chat policies in late April 2026.
- [supported, minor] What's changing; Governance guidance: At rollout; Governance controls / admin-path: The portal route to view the read-only policy is Data Lifecycle Management > Policies. | Found: Sign in to the Microsoft Purview portal > Solutions > Data Lifecycle Management > Policies > Retention policies. ... it's displayed in Data Lifecycle Management > Policies ... visible but read-only. | Fix: Use 'Microsoft Purview portal > Solutions > Data Lifecycle Management > Policies' wherever the read-only viewing route is printed; Solutions is the omitted navigation heading. | Source: https://learn.microsoft.com/purview/create-retention-policies
- [contradicted, minor] Governance guidance: Before rollout / consistency: The checklist tells readers to list existing Teams chat retention policies, but that control has no table row. | Found: List existing Teams chat retention policies with a delete action / controls: call-log policy, deletion period, Preservation Lock, role-group membership | Fix: Remove the checklist item 'List existing Teams chat retention policies with a delete action, and record that they stopped covering new CDRs in late April 2026.' The body already explains the historical coverage change.
-->
