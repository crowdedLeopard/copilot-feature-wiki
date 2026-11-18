---
kind: "concept"
title: "Microsoft Purview retention: what is kept, what is deleted and who decides"
slug: "retention"
summary: "Retention policies and retention labels in Microsoft Purview decide how long Microsoft 365 content, including Copilot interactions, is kept and when it is permanently deleted. Covers licensing, limits and where each control lives."
created: "2026-11-18"
updated: "2026-11-18"
version: 1
tags: ["retention","purview","data-lifecycle-management","adaptive-scopes","priority-cleanup","m365-copilot","ediscovery","meeting-transcripts"]
covers: []
sources:
  - title: "Learn about retention policies and retention labels"
    url: "https://learn.microsoft.com/purview/retention"
    kind: "learn"
  - title: "Create and configure retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-policies"
    kind: "learn"
  - title: "Learn about retention for Copilot & AI apps"
    url: "https://learn.microsoft.com/purview/retention-policies-copilot"
    kind: "learn"
  - title: "Get started with data lifecycle management"
    url: "https://learn.microsoft.com/purview/get-started-with-data-lifecycle-management"
    kind: "learn"
  - title: "Get started with records management"
    url: "https://learn.microsoft.com/purview/get-started-with-records-management"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Limits for retention policies and retention label policies"
    url: "https://learn.microsoft.com/purview/retention-limits"
    kind: "learn"
  - title: "Use Preservation Lock to restrict changes to retention policies and retention label policies"
    url: "https://learn.microsoft.com/purview/retention-preservation-lock"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Create retention labels for exceptions to your retention policies"
    url: "https://learn.microsoft.com/purview/create-retention-labels-data-lifecycle-management"
    kind: "learn"
  - title: "Publish retention labels and apply them in apps"
    url: "https://learn.microsoft.com/purview/create-apply-retention-labels"
    kind: "learn"
  - title: "Adaptive scopes"
    url: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    kind: "learn"
  - title: "New-RetentionCompliancePolicy"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    kind: "learn"
  - title: "New-ComplianceTag"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancetag?view=exchange-ps"
    kind: "learn"
  - title: "New-AdaptiveScope"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope?view=exchange-ps"
    kind: "learn"
  - title: "Create retentionLabel"
    url: "https://learn.microsoft.com/graph/api/security-labelsroot-post-retentionlabel?view=graph-rest-1.0"
    kind: "learn"
related: ["auditing","microsoft-purview-data-lifecycle-management-legacy-teams-retention-policies-covering-copil","microsoft-purview-archive-sharepoint-files-under-retention-policies","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","purview-retention-last-accessed-sharepoint-onedrive","microsoft-purview-adaptive-scope-evaluation-control-with-recipient-and-site-owner-lifecycl","teams-ai-generated-meeting-memory","teams-intelligent-recap-without-saving-transcript"]
controls:
  - governs: "Which locations a retention policy covers and whether it retains, deletes or both"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name> -ExchangeLocation <mailbox> -SharePointLocation <site-url>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    note: "Security & Compliance PowerShell only. A policy is not valid until a rule is added with New-RetentionComplianceRule."
  - governs: "Retention of Microsoft 365 Copilot interactions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies > New retention policy"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "Set-AppRetentionCompliancePolicy -Identity \"<policy name>\" -Applications \"User:M365Copilot\""
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    note: "UI: select the Microsoft Copilot experiences location. The command adds Copilot to an existing policy for newer locations. Pay-as-you-go billing applies to AI app locations."
  - governs: "Retention labels for item-level exceptions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Retention labels > Create a label"
      docs: "https://learn.microsoft.com/purview/create-retention-labels-data-lifecycle-management"
    api:
      kind: "powershell"
      call: "New-ComplianceTag -Name <label name> -RetentionAction Keep -RetentionDuration <days> -RetentionType ModificationAgeInDays"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancetag?view=exchange-ps"
    note: "The label name cannot be changed after it is saved."
  - governs: "Publishing or auto-applying retention labels to locations"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Label policies > Publish labels"
      docs: "https://learn.microsoft.com/purview/create-apply-retention-labels"
    api:
      kind: "powershell"
      call: "New-RetentionCompliancePolicy -Name <policy name> -SharePointLocation <site-url>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps"
    note: "The same cmdlet creates label policies. A label is then added to the policy with New-RetentionComplianceRule."
  - governs: "Adaptive scopes that target policies by query"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and scopes > Adaptive scopes > + Create scope"
      docs: "https://learn.microsoft.com/purview/purview-adaptive-scopes"
    api:
      kind: "powershell"
      call: "New-AdaptiveScope -Name <name> -LocationType User -RawQuery <query>"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope?view=exchange-ps"
    note: "Requires the Scope Manager role. Query changes can take up to five days to take effect."
  - governs: "Preservation Lock on a retention policy"
    scope: "tenant"
    ui: null
    api:
      kind: "powershell"
      call: "Set-RetentionCompliancePolicy -Identity \"<Name of Policy>\" -RestrictiveRetention $true"
      docs: "https://learn.microsoft.com/purview/retention-preservation-lock"
    note: "Irreversible. The page states the lock is not available in the UI."
  - governs: "Which retention policies exist and their distribution status"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Data Lifecycle Management > Policies > Retention policies"
      docs: "https://learn.microsoft.com/purview/create-retention-policies"
    api:
      kind: "powershell"
      call: "Get-RetentionCompliancePolicy -Identity \"<Name of Policy>\" | Fl"
      docs: "https://learn.microsoft.com/purview/retention-preservation-lock"
    note: "Read-only check; RestrictiveRetention shows whether Preservation Lock is set."
confidence: "medium"
dependents: 11
changes:
  - date: "2026-11-18"
    note: "New concept page explaining Microsoft Purview retention policies and retention labels, their licensing, limits and controls."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 105 statements contradicted, 1 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-18"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 105
  confirmed: 101
  unconfirmed: 1
  contradicted: 3
  attempts: 1
  hash: "83001e25312786b9158f564c2cec67f5"
---

## What it is

Retention is how Microsoft Purview decides how long Microsoft 365 content is kept and when it is permanently deleted. Administrators set it with **retention policies** (one rule for a whole mailbox, site or other container) and **retention labels** (a rule for a single folder, document or email).

Every rule uses two actions, retain and delete, which give three outcomes: retain-only, delete-only, or retain and then delete. Content stays in place. When someone edits or deletes retained content, a copy is kept: in the Preservation Hold library for SharePoint and OneDrive, in Recoverable Items for Exchange mailboxes, and in a hidden SubstrateHolds folder for Teams, Viva Engage, Copilot and AI apps.

| | Retention policy | Retention label |
| --- | --- | --- |
| Set at | Site or mailbox level | Item level |
| Follows the content if moved | No | Yes, within your Microsoft 365 tenant |
| Applied manually | No | Yes |

**Scope.** A policy is adaptive (a query that runs daily against attributes you choose) or static (a whole location, or specific inclusions and exclusions).

**Precedence.** When several rules reach one item, retention wins over deletion and the longest retention period wins. For deletion, a label's delete action beats any policy's. Among policies, one with an adaptive scope or specific inclusions beats an org-wide one, and then the shortest period wins.

**Copilot and AI apps.** Prompts and responses are retained through a hidden folder in the mailbox of the user who runs the app. A timer job that typically takes 1-7 days to run evaluates them.

## Why it matters

Retention sets how long content exists and stays searchable by eDiscovery, so it governs storage, legal exposure and the data behind Copilot features. Microsoft notes that Teams meeting recordings and transcripts, regularly created by Copilot in Teams recap, can be swept into a policy that retains all items for many years, although they typically have little business value after 1-3 months.

Deletion is decided on the stored copies, not on what users see. Microsoft states that messages visible in AI apps are not an accurate reflection of whether they are retained or permanently deleted, so judge a policy by eDiscovery results and the documented timings, not by the app.

## Cost and licensing

Any user who benefits from retention needs a licence; the plan depends on the feature, per the Microsoft Purview service description.

- **Retention policies** (org-wide, location-wide or include/exclude): Microsoft 365 E5/A5/G5/E3/A3/G3 or Business Premium, among other listed plans. Policies with an adaptive scope need Microsoft 365 E5/A5/G5, Microsoft Purview Suite/EDU/GOV/FLW or Microsoft Defender + Purview Suite FLW.
- **Retention labels**: creation is licensed by a wider list that includes Microsoft 365 E3 and F1/F3. Event-based retention, disposition review, marking items as records and automatic relabelling need the narrower, E5-level list.
- **Copilot interactions**: Microsoft 365 E3/E5 plus Microsoft 365 Copilot.
- **Priority cleanup**: the E5-level list.
- **Pay-as-you-go**: required to create policies that use the Microsoft Copilot experiences, Enterprise AI apps or Other AI apps locations. Microsoft states there is no charge for Microsoft 365 Copilot interactions. This page does not state a rate for the meter.
- **Storage**: the Preservation Hold library counts towards a site's storage quota.

A feature built on retention may add its own charge; follow the link from its briefing, such as [archiving SharePoint files](/features/microsoft-purview-archive-sharepoint-files-under-retention-policies/).

## Risks and limits

- **Retention beats deletion.** A delete-only policy does not permanently delete an item that another policy, a label or an eDiscovery hold retains. The item can leave users' view while the copy stays.
- **Deletion is slow.** A policy can take up to seven days to apply. For AI app data, Microsoft's example is a delete after 1 day that could take 16 days to leave eDiscovery results.
- **Teams messages and files need separate policies.** A Teams location does not cover meeting recordings and transcripts; those need a Microsoft 365 Group, SharePoint or OneDrive location. A file policy can delete a file a message still links to, which then shows "File not found".
- **Legacy Copilot coverage is ending.** Existing Teams chats and Copilot interactions policies cannot be edited once your tenant has the separate locations; see [the legacy policy change](/features/microsoft-purview-data-lifecycle-management-legacy-teams-retention-policies-covering-copil/).
- **Preservation Lock is irreversible.** After it is applied, no one, including an administrator, can turn the policy off, delete it or make it less restrictive. Adaptive scopes do not currently support it.
- **Limits.** 1,000 retention labels and 10,000 policies per tenant; Exchange 1,800 policies, with 50 per mailbox supported (25 recommended); SharePoint or OneDrive 13 policies covering all sites and 2,600 with specific locations.
- **One label per item.** Labels have no priorities, and they do not persist if content leaves Microsoft 365.
- **Priority cleanup overrides holds.** It can override existing holds for retention and eDiscovery; see [permanent deletion with Priority cleanup](/features/microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep/).
- **No administrative units for AI apps.** Retention policies for Copilots and AI apps do not currently support them.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Which locations a retention policy covers and whether it retains, deletes or both</strong><br><small>Tenant</small><br><small class="controls__note">Security &amp; Compliance PowerShell only. A policy is not valid until a rule is added with New-RetentionComplianceRule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt; -ExchangeLocation &lt;mailbox&gt; -SharePointLocation &lt;site-url&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retention of Microsoft 365 Copilot interactions</strong><br><small>Tenant</small><br><small class="controls__note">UI: select the Microsoft Copilot experiences location. The command adds Copilot to an existing policy for newer locations. Pay-as-you-go billing applies to AI app locations.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies › New retention policy <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-AppRetentionCompliancePolicy -Identity &quot;&lt;policy name&gt;&quot; -Applications &quot;User:M365Copilot&quot;</code> <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Retention labels for item-level exceptions</strong><br><small>Tenant</small><br><small class="controls__note">The label name cannot be changed after it is saved.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Retention labels › Create a label <a href="https://learn.microsoft.com/purview/create-retention-labels-data-lifecycle-management" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-ComplianceTag -Name &lt;label name&gt; -RetentionAction Keep -RetentionDuration &lt;days&gt; -RetentionType ModificationAgeInDays</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancetag?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Publishing or auto-applying retention labels to locations</strong><br><small>Tenant</small><br><small class="controls__note">The same cmdlet creates label policies. A label is then added to the policy with New-RetentionComplianceRule.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Label policies › Publish labels <a href="https://learn.microsoft.com/purview/create-apply-retention-labels" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-RetentionCompliancePolicy -Name &lt;policy name&gt; -SharePointLocation &lt;site-url&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-retentioncompliancepolicy?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Adaptive scopes that target policies by query</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Scope Manager role. Query changes can take up to five days to take effect.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and scopes › Adaptive scopes › + Create scope <a href="https://learn.microsoft.com/purview/purview-adaptive-scopes" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-AdaptiveScope -Name &lt;name&gt; -LocationType User -RawQuery &lt;query&gt;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-adaptivescope?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Preservation Lock on a retention policy</strong><br><small>Tenant</small><br><small class="controls__note">Irreversible. The page states the lock is not available in the UI.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Set-RetentionCompliancePolicy -Identity &quot;&lt;Name of Policy&gt;&quot; -RestrictiveRetention $true</code> <a href="https://learn.microsoft.com/purview/retention-preservation-lock" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which retention policies exist and their distribution status</strong><br><small>Tenant</small><br><small class="controls__note">Read-only check; RestrictiveRetention shows whether Preservation Lock is set.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Data Lifecycle Management › Policies › Retention policies <a href="https://learn.microsoft.com/purview/create-retention-policies" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Get-RetentionCompliancePolicy -Identity &quot;&lt;Name of Policy&gt;&quot; | Fl</code> <a href="https://learn.microsoft.com/purview/retention-preservation-lock" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

**Roles.** Microsoft recommends the Compliance Administrator role group; alternatively a custom group with the Retention Management role, or View-Only Retention Management for read-only access. Priority cleanup needs the Priority Cleanup Admin role, which Compliance Administrator does not include by default. Adaptive scopes need the Scope Manager role.

**Other tools.** Microsoft Graph documents retention labels: `POST /security/labels/retentionLabels` accepts delegated permissions only (RecordsManagement.ReadWrite.All). No Graph call for retention policies was found. Policy lookup in the Data lifecycle management or Records management solution finds the policies for a user, site or group by exact email address or URL, with no wildcards. Label usage appears under Data Lifecycle Management > Overview.

**Audit.** Creating, changing or deleting a policy or label is logged, for example Updated retention policy (SetRetentionCompliancePolicy). Retention actions are audited for labels only, not policies. See [Purview Audit](/concepts/auditing/).

## What to check

- Review each policy on the Retention policies page, its locations and its distribution status, and confirm Copilot interactions have a Microsoft Copilot experiences location wherever you need them retained or deleted.
- Check whether any policy carries Preservation Lock before planning changes, by reading RestrictiveRetention from Get-RetentionCompliancePolicy.
- Decide per policy between adaptive and static scope, and create adaptive scopes before the policy that needs them.
- Count labels and policies against the documented tenant, Exchange and SharePoint limits.
- Confirm licences for users in scope, including holders of the Retention Management role.
- Set up pay-as-you-go billing before creating policies for the AI app locations.
- Audit changes to policies and labels using the retention events in the unified audit log.

## Open questions

- What does the Purview pay-as-you-go meter charge for retention of the AI app locations?
- Does a Microsoft Graph or other non-PowerShell API for creating retention policies exist, given that one is documented for retention labels?
- Which Preservation Lock restrictions apply to adaptive-scope policies, which do not currently support it?

<!-- verifier-findings (2026-11-18, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[6].api / command: Get-RetentionCompliancePolicy -Identity "<Name of Policy>" | Fl is sufficient to check policy distribution status. | Found: If you don't use this switch, the values of the DistributionStatus and *Location property values will be inaccurate. | Fix: Replace the call with 'Get-RetentionCompliancePolicy -Identity "<Name of Policy>" -DistributionDetail | Format-List' and set controls[6].api.docs to https://learn.microsoft.com/powershell/module/exchangepowershell/get-retentioncompliancepolicy?view=exchange-ps. The existing Preservation Lock example checks the lock, not accurate distribution status. | Source: https://learn.microsoft.com/powershell/module/exchangepowershell/get-retentioncompliancepolicy?view=exchange-ps
- [unsupported, blocker] Governance controls: Other tools / command: POST /security/labels/retentionLabels is the complete Graph label-creation endpoint as printed. | Found: Searched: Graph create-retentionLabel reference, HTTP request and HTTP example. Opened security-labelsroot-post-retentionlabel?view=graph-rest-1.0; its runnable request uses https://graph.microsoft.com/v1.0/security/labels/retentionLabels. The wiki omits the required API version. | Fix: Replace the inline endpoint with 'POST /v1.0/security/labels/retentionLabels', retaining https://learn.microsoft.com/graph/api/security-labelsroot-post-retentionlabel?view=graph-rest-1.0 as its reference.
- [contradicted, blocker] Governance controls: Other tools / absence: No Microsoft Graph call for retention policies is documented. | Found: This article lists the supported resource types for Microsoft Security and Compliance in the Tenant Configuration Management (TCM) APIs in Microsoft Graph. | Fix: Remove 'No Graph call for retention policies was found.' Microsoft documents retentionCompliancePolicy as a TCM resource for monitoring and snapshots. This does not establish a policy-creation API, so the narrower creation question may remain open. | Source: https://learn.microsoft.com/graph/utcm-securityandcompliance-resources#retentioncompliancepolicy-resource-type
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits: Limits / behaviour: The tenant policy maximum is 10,000. | Found: This maximum number includes the different policies for retention, and other policies for compliance such as policies for DLP, information barriers, eDiscovery holds, In-Place Holds, and sensitivity labels. | Fix: After the limits sentence add: 'The 10,000-policy ceiling includes other compliance policies and has documented exclusions; the Exchange and SharePoint limits are shared with other hold policies, including eDiscovery and In-Place Holds.' Keep the retention-limits citation. | Source: https://learn.microsoft.com/purview/retention-limits
- [supported, minor] controls[5].ui; controls[5].note / absence: Preservation Lock has no UI control and must be applied with PowerShell. | Found: You must use PowerShell if you need to use Preservation Lock. Because administrators can't disable or delete a policy for retention after this lock is applied, enabling this feature is not available in the UI to safeguard against accidental configuration. | Fix: Keep the PowerShell guidance, but qualify the note: 'The Preservation Lock guide says enabling the lock is not available in the UI. The Get-RegulatoryComplianceUI reference separately describes a preservation-lock checkbox; Microsoft documentation is inconsistent.' Cite https://learn.microsoft.com/powershell/module/exchangepowershell/get-regulatorycomplianceui?view=exchange-ps alongside the existing guide. | Source: https://learn.microsoft.com/purview/retention-preservation-lock
- [supported, minor] controls[6].ui / admin-path: The Retention policies page lists policies and is the entry point for checking distribution status. | Found: You can always check the distribution status of the retention policy by selecting it from the Retention policies page in the Microsoft Purview portal. | Fix: For distribution status, append the policy-selection step: 'Solutions > Data Lifecycle Management > Policies > Retention policies > policy'. | Source: https://learn.microsoft.com/purview/create-retention-policies
- [contradicted, minor] What to check: billing setup and auditing / consistency: The checklist names billing setup and audit-log controls that have no corresponding controls-table rows. | Found: Set up pay-as-you-go billing before creating policies for the AI app locations. / Audit changes to policies and labels using the retention events in the unified audit log. / The table covers policy creation, Copilot, labels, scopes, lock and policy status, not billing setup or audit search. | Fix: Remove the two What to check bullets beginning 'Set up pay-as-you-go billing' and 'Audit changes to policies and labels' to satisfy checklist/table parity without adding unverified control rows. Keep the existing billing and auditing explanations.
-->
