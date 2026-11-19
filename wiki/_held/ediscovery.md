---
kind: "concept"
title: "Microsoft Purview eDiscovery: who can search, hold and delete organisational content, and what it costs"
slug: "ediscovery"
summary: "Purview eDiscovery searches, holds, reviews and exports Microsoft 365 content, including Copilot interactions, inside cases. Administrators use it to decide who can reach which content, what is preserved and which data is billed."
created: "2026-11-19"
updated: "2026-11-19"
version: 1
tags: ["ediscovery","purview","retention","auditing","m365-copilot","microsoft-graph","exchange","data-governance"]
covers: []
sources:
  - title: "Learn about eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc"
    kind: "learn"
  - title: "Microsoft Purview eDiscovery legacy solutions"
    url: "https://learn.microsoft.com/purview/ediscovery"
    kind: "learn"
  - title: "Get started with eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-get-started"
    kind: "learn"
  - title: "Assign permissions in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-permissions"
    kind: "learn"
  - title: "Learn about access and permission settings in eDiscovery cases"
    url: "https://learn.microsoft.com/purview/edisc-settings-access-permissions"
    kind: "learn"
  - title: "Configure search permissions filtering in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-permission-filtering"
    kind: "learn"
  - title: "Create holds in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-hold-create"
    kind: "learn"
  - title: "Search for and delete AI application data in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-copilot-data"
    kind: "learn"
  - title: "Find and delete email messages in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-search-mailbox-data"
    kind: "learn"
  - title: "Configure general settings in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-settings-general"
    kind: "learn"
  - title: "Billing in eDiscovery"
    url: "https://learn.microsoft.com/purview/edisc-billing"
    kind: "learn"
  - title: "Microsoft Purview service description"
    url: "https://learn.microsoft.com/office365/servicedescriptions/microsoft-365-service-descriptions/microsoft-365-tenantlevel-services-licensing-guidance/microsoft-purview-service-description"
    kind: "learn"
  - title: "Add ediscoveryCaseMember"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create ediscoveryHoldPolicy"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverycase-post-legalholds?view=graph-rest-1.0"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
related: ["retention","auditing","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","teams-ai-generated-meeting-memory"]
controls:
  - governs: "Who holds eDiscovery Manager and eDiscovery Administrator permissions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > eDiscovery Manager > Edit"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Needs Organization Management or the Role Management role. Mail-enabled security groups only; Security & Compliance PowerShell."
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
    note: "Only an eDiscovery Administrator can remove members. The user must already be in the eDiscovery Manager role group."
  - governs: "Which mailboxes and sites an eDiscovery manager can search (search permissions filters)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "New-ComplianceSecurityFilter -FilterName <name of filter> -Users <user or role group> -Filters <filter>"
      docs: "https://learn.microsoft.com/purview/edisc-search-permission-filtering"
    note: "Needs Organization Management plus the eDiscovery administrator role; connect to Exchange Online and Security & Compliance PowerShell."
  - governs: "Which mailboxes and sites are preserved by a case hold"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Hold policies > Create policy"
      docs: "https://learn.microsoft.com/purview/edisc-hold-create"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/legalHolds"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycase-post-legalholds?view=graph-rest-1.0"
    note: "The request body sets displayName and an optional contentQuery; locations are added with separate userSources and siteSources operations."
  - governs: "Deleting Copilot and AI application data returned by a search"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData"
      docs: "https://learn.microsoft.com/purview/edisc-search-copilot-data"
    note: "Needs the Search And Purge role. Remove holds and retention policies on the mailbox first or the data is retained."
  - governs: "Whether new cases default to premium eDiscovery features"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Settings > eDiscovery > General > eDiscovery (Premium)"
      docs: "https://learn.microsoft.com/purview/edisc-settings-general"
    api: null
    note: "eDiscovery Administrator only. Affects new cases only; not available with Microsoft 365 Enterprise E3. A case can override it."
confidence: "high"
dependents: 14
changes:
  - date: "2026-11-19"
    note: "New page: explains Purview eDiscovery cases, holds, roles, search permissions filters, licensing, pay-as-you-go billing and the controls that bound them."
  - date: "2026-11-19"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 3 of 99 statements contradicted, 0 unconfirmed; taken offline until corrected"
verification:
  status: "held"
  date: "2026-11-19"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 99
  confirmed: 96
  unconfirmed: 0
  contradicted: 3
  attempts: 1
  hash: "15d123c22781a5505cf8ebd0f4628354"
---

## What it is

Microsoft Purview eDiscovery is the Microsoft 365 tool for finding, preserving, reviewing and exporting electronic content that can be used as evidence in investigations and legal cases. All of that work happens inside a **case**, which holds the searches, holds and review sets of one investigation and has its own member list.

A search can cover Exchange mailboxes, OneDrive accounts, SharePoint sites, Teams, Microsoft 365 Groups and Viva Engage in one query. Microsoft 365 Copilot interactions are stored as items in the user's Exchange Online mailbox, so they are searchable, holdable and exportable like other mailbox content. Microsoft retired the classic eDiscovery experiences on 31 August 2025; this page describes eDiscovery in the Microsoft Purview portal.

### The parts

| Part | What it does |
| --- | --- |
| Search | Finds content with keyword queries and conditions; shows statistics and samples |
| Hold | Preserves content in chosen mailboxes and sites until the hold is released |
| Export | Copies results out of their original location into a package you download |
| Review set (premium) | A Microsoft-provided Azure Storage copy of collected items to filter, tag and analyse |
| Search and delete | Removes harmful or high-risk email, Teams chat messages and Copilot and AI application data |

Standard and premium differ by licence: review sets, analytics, tagging and decryption are premium features. Role groups, case membership and search permissions filters decide who can do any of this.

## Why it matters

eDiscovery decides who can read other people's mail, files and chats, and which of that content survives deletion while a case is open. Search reach comes from three things set separately: role-group membership, case membership and search permissions filters. Microsoft documents the filters as the way to build compliance boundaries that limit which mailboxes and sites a given manager can search.

A hold is a preservation tool tied to a case. Microsoft points to retention policies and retention labels for long-term retention that is not part of an investigation; see [Microsoft Purview retention](/concepts/retention/). New content types matter to eDiscovery when they land in a mailbox or site. Microsoft documents Copilot data by item class, for example IPM.SkypeTeams.Message.Copilot.* for Microsoft 365 Copilot.

## Cost and licensing

Standard eDiscovery for sites, files and email is marked Included in every column of the Microsoft Purview service description table, including Office 365 E3 and Microsoft 365 E3. eDiscovery (premium) is marked Included for E5-level plans, the Microsoft Purview Suite and the Microsoft 365 E5 eDiscovery & Audit add-on, and Not included for Office 365 E3 and Microsoft 365 E3. Compliance boundaries carry no separate licence beyond the applicable eDiscovery licence.

- **Holds** need an eligible licence on every user whose content is preserved. Office 365 F1 and F3 do not include the rights to be the target of a hold. A shared mailbox on hold needs Exchange Online Plan 2, or Plan 1 with the Exchange Online Archiving add-on.
- **Premium analysis:** the permissions page says the analysed user needs an E5 licence or add-on, and that administrators assigned to the case do not. The service description says both the user and the administrator need the appropriate licence. The two pages differ.
- **Pay-as-you-go:** Microsoft 365 data and Microsoft 365 AI data storage is included in the enterprise subscription. Storage for non-Microsoft 365 AI data (for example Copilot in Fabric, Security Copilot and connected AI apps) is billed pay-as-you-go when exported directly, added to a review set or exported through Graph. Searches, holds and case management are not billed. A per-GB rate is on the Microsoft Purview pricing page, not the eDiscovery billing page.
- **Graph APIs with E3 eDiscovery licences** need an Azure subscription for pay-as-you-go. Microsoft states that all APIs except Export APIs do not currently contribute to billing, and Export API usage is billed by volume above a monthly free amount.

## Risks and limits

- **eDiscovery Administrators see every case.** They can open all cases and case data, and Microsoft advises limiting how many people hold the role. An eDiscovery Manager sees only the cases they create.
- **A case can lock itself.** If the only member of a case leaves, nobody except an eDiscovery Administrator can open it. Only an Administrator can remove members.
- **Role-group edits silently change case access.** Adding or removing a role on a role group that is a case member removes the role group from every case it belongs to.
- **Groups do not behave as expected.** The eDiscovery Manager role group needs a mail-enabled security group, because distribution groups and Microsoft 365 Groups are unsupported, and a mail-enabled security group cannot be a case member.
- **Holds are snapshots and take time.** A group's membership is captured when the hold is created; later members are not held. A hold can take up to 24 hours to take effect. SharePoint Recycle Bin content is not indexed, and a hold on a subsite lands on the parent site.
- **Filters have a ceiling.** A search query can have at most 100 conditions, counting the query and all search permissions filters applied to the user. Filters cannot limit searches of Exchange public folders.
- **Deleting Copilot data needs holds removed first.** A hold or retention policy on the mailbox keeps the data. The AI-data page documents up to 10 items per mailbox at a time, and deleting a conversation does not delete the associated Copilot memory.
- **Search and purge is not supported on a mailbox with a litigation hold.**
- **Required enterprise apps** must be enabled for sign-in or some view, filter and search features fail.
- **App-only authentication for eDiscovery cmdlets in Security & Compliance PowerShell is unsupported;** Microsoft says to move automations to Graph.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds eDiscovery Manager and eDiscovery Administrator permissions</strong><br><small>Tenant</small><br><small class="controls__note">Needs Organization Management or the Role Management role. Mail-enabled security groups only; Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › eDiscovery Manager › Edit <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and role groups are members of an eDiscovery case</strong><br><small class="controls__note">Only an eDiscovery Administrator can remove members. The user must already be in the eDiscovery Manager role group.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Access and permissions › Users › Add <a href="https://learn.microsoft.com/purview/edisc-settings-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which mailboxes and sites an eDiscovery manager can search (search permissions filters)</strong><br><small>User</small><br><small class="controls__note">Needs Organization Management plus the eDiscovery administrator role; connect to Exchange Online and Security &amp; Compliance PowerShell.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-ComplianceSecurityFilter -FilterName &lt;name of filter&gt; -Users &lt;user or role group&gt; -Filters &lt;filter&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-search-permission-filtering" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which mailboxes and sites are preserved by a case hold</strong><br><small class="controls__note">The request body sets displayName and an optional contentQuery; locations are added with separate userSources and siteSources operations.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Hold policies › Create policy <a href="https://learn.microsoft.com/purview/edisc-hold-create" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/legalHolds</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycase-post-legalholds?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Deleting Copilot and AI application data returned by a search</strong><br><small class="controls__note">Needs the Search And Purge role. Remove holds and retention policies on the mailbox first or the data is retained.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData</code> <a href="https://learn.microsoft.com/purview/edisc-search-copilot-data" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether new cases default to premium eDiscovery features</strong><br><small>Tenant</small><br><small class="controls__note">eDiscovery Administrator only. Affects new cases only; not available with Microsoft 365 Enterprise E3. A case can override it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Settings › eDiscovery › General › eDiscovery (Premium) <a href="https://learn.microsoft.com/purview/edisc-settings-general" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Assigning eDiscovery permissions needs the Organization Management role group or the Role Management role. Case creators can only manage their own cases; Administrators can add themselves to any case. Deleting data needs the Search And Purge role, which Organization Management and Data Investigator hold by default.

**How the controls interact.** Role-group membership gets a person into eDiscovery; case membership gets them into a case; a search permissions filter narrows what their searches, previews, exports and purges reach. Creating the filters needs Organization Management plus the eDiscovery administrator role. The premium default sets the level for new cases only, and each case can override it.

**Monitoring.** The audit log records eDiscovery activity, including CaseAdded, HoldCreated and PurviewSearchAdded; see [Microsoft Purview Audit](/concepts/auditing/).

## What to check

- Review the members of the eDiscovery Manager role group and keep the number of eDiscovery Administrators small.
- List cases whose only member is one person, and add a second member before that person leaves.
- Confirm that every user you place on hold holds a licence that includes hold rights, and that groups added to holds were re-added after membership changes.
- Check that search permissions filters exist where managers should see only part of the tenant, and count how many apply to one user.
- Check which mailboxes carry holds or retention policies before you run a Copilot or AI data purge, and record them for reapplying.
- Review the premium default toggle in eDiscovery settings against the licences you hold.
- Search the audit log for CaseAdded and HoldCreated events to see who opened cases and holds.

## Open questions

- Does the portal offer a path to create search permissions filters? The documentation describes four Security & Compliance PowerShell cmdlets and no portal path at the time of writing (November 2026).
- Can the tenant-wide premium default be scripted? Microsoft documents it as a portal toggle.
- Which licence statement governs administrators using premium features: the permissions page or the service description?
- Is the item class table for Copilot and AI data updated for each new Copilot feature, such as meeting memory? Microsoft has not said.

<!-- verifier-findings (2026-11-19, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Risks and limits, Groups do not behave as expected / role: The eDiscovery Manager role group needs a mail-enabled security group, with mail-enabled security groups being the only membership option. | Found: On Manage eDiscovery Manager, select Choose users or Choose groups. | Fix: Replace 'The eDiscovery Manager role group needs a mail-enabled security group' with 'When adding a group to the eDiscovery Managers subgroup, use a mail-enabled security group; individual users can also be assigned.' Replace 'Mail-enabled security groups only' in the row note with 'Group membership uses mail-enabled security groups; individual users are also supported. This command assigns Managers, not Administrators.' | Source: https://learn.microsoft.com/purview/edisc-permissions
- [contradicted, blocker] controls[3].api / command: POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/legalHolds sets which mailboxes and sites are preserved by a case hold. | Found: Create a new ediscoveryHoldPolicy object. ... displayName | String | The display name of the legal hold policy. Required. ... contentQuery | String | KQL query that specifies content to be held in the specified locations. Optional. | Fix: Narrow controls[3].governs and its rendered label to 'Creation of a case hold policy'. Keep the endpoint, but make the note 'Creates the policy only; the request body requires displayName and optionally sets contentQuery. Mailboxes and sites must be added separately.' The create endpoint does not select locations; Microsoft documents separate POST legalHolds/{ediscoveryHoldPolicyId}/userSources and siteSources operations. | Source: https://learn.microsoft.com/graph/api/security-ediscoverycase-post-legalholds?view=graph-rest-1.0
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] Risks and limits, eDiscovery Administrators; Governance controls: Roles / role: An eDiscovery Manager can access and manage only cases they create. | Found: eDiscovery Managers can only access and manage the cases they create. They can't access or manage cases created by other eDiscovery Managers. | Fix: Replace the unqualified creator-only statements with 'The permissions page describes Managers as limited to cases they create, while the service description and case-access guidance say Managers can access cases of which they are members.' The latter guidance is at https://learn.microsoft.com/purview/edisc-settings-access-permissions and the already-cited Purview service description. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [supported, minor] Risks and limits, Deleting Copilot data / behaviour: The AI-data article documents a 10-items-per-mailbox deletion limit. | Found: You can remove up to 10 items per mailbox at one time. | Fix: Append 'The Graph purgeData reference instead documents a maximum of 100 items per location; the two pages differ.' Cite https://learn.microsoft.com/graph/api/security-ediscoverysearch-purgedata?view=graph-rest-1.0. | Source: https://learn.microsoft.com/purview/edisc-search-copilot-data
- [supported, minor] controls[0].ui / admin-path: Settings > Role groups > eDiscovery Manager > Edit reaches the permission-assignment workflow in the Purview portal. | Found: Go to Settings > Role groups. 3. On Role groups for Microsoft Purview solutions, select eDiscovery Manager. | Fix: The printed route reaches the correct workflow but stops before choosing members. For the Manager assignment, extend it to 'Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users' and say that Choose groups is the alternative for group assignments. | Source: https://learn.microsoft.com/purview/edisc-permissions
- [supported, minor] controls[1].api / command: POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers adds a user or role group as a case member. | Found: POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/b0073e4e-4184-41c6-9eb7-8c8cc3e2288b/caseMembers | Fix: Add to controls[1].note: 'The request body sets recipientType to user or roleGroup and identifies the member by id, or smtpAddress for a user or displayName for a role group.' | Source: https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0
- [supported, minor] controls[2].api / command: New-ComplianceSecurityFilter -FilterName <name of filter> -Users <user or role group> -Filters <filter> creates a search permissions filter. | Found: New-ComplianceSecurityFilter -FilterName <name of filter> -Users <user or role group> -Filters <filter> | Fix: The cited article prints this syntax, but the cmdlet reference marks Action mandatory. Use 'New-ComplianceSecurityFilter -FilterName <name of filter> -Users <user or role group> -Filters <filter> -Action All' and cite https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancesecurityfilter?view=exchange-ps; note that All applies the filter to all search actions. | Source: https://learn.microsoft.com/purview/edisc-search-permission-filtering
- [supported, minor] controls[3].ui / admin-path: eDiscovery > Cases > case > Hold policies > Create policy reaches the case hold creation workflow. | Found: Select a case, and then select the Hold policies tab. 4. On the Hold policies dashboard, select Create policy. | Fix: Keep the path but narrow the row's governs to 'Creation of a case hold policy', consistent with the API correction. The printed path reaches policy creation, not the subsequent data-source selection. | Source: https://learn.microsoft.com/purview/edisc-hold-create
- [supported, minor] controls[4].api; controls[4].note; controls[4].ui / command: The documented automation for AI-data deletion is POST /v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData. | Found: In Graph Explorer, run the following POST request to delete the items returned by the search | Fix: Keep the method and path. Add to the row note 'The request body uses purgeAreas to select mailboxes and purgeType to select recoverable or permanentlyDelete.' The v1.0 reference at https://learn.microsoft.com/graph/api/security-ediscoverysearch-purgedata?view=graph-rest-1.0 documents those properties. | Source: https://learn.microsoft.com/purview/edisc-search-copilot-data
- [contradicted, minor] What to check, mailbox policies and audit-log bullets / consistency: Every control the checklist tells the reader to review has a row in the controls table. | Found: Check which mailboxes carry holds or retention policies ... Search the audit log for CaseAdded and HoldCreated events ... [The table has case-hold and purge rows, but no retention-policy or audit-search row.] | Fix: The checklist's retention-policy inspection and audit-log search have no corresponding control rows. Remove those checklist instructions if the table remains unchanged; do not add unverified rows as part of this correction.
- [supported, minor] sources / behaviour: Additional Microsoft references support the page's pricing statement and its explanatory note about adding hold locations separately. | Found: This functionality is billed based on the amount of data processed and stored through export and review set each month, equivalent to $20 per GB per month. | Fix: Add the relied-on references to sources together: https://azure.microsoft.com/pricing/details/purview/ ; https://learn.microsoft.com/graph/api/security-ediscoveryholdpolicy-post-usersources?view=graph-rest-1.0 ; https://learn.microsoft.com/graph/api/security-ediscoveryholdpolicy-post-sitesources?view=graph-rest-1.0 ; https://learn.microsoft.com/graph/api/security-ediscoverysearch-purgedata?view=graph-rest-1.0 ; https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancesecurityfilter?view=exchange-ps . | Source: https://azure.microsoft.com/pricing/details/purview/
- [supported, minor] Governance controls: Roles / role: Data Investigator and Organization Management have Search And Purge by default. | Found: The Data Investigator and Organization Management role groups have this role by default. | Fix: Append 'The Graph purgeData reference instead says this role is only available to Organization Management members; the references differ.' The conflicting text is at https://learn.microsoft.com/graph/api/security-ediscoverysearch-purgedata?view=graph-rest-1.0. | Source: https://learn.microsoft.com/purview/edisc-search-copilot-data
-->
