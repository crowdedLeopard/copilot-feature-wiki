---
kind: "concept"
title: "Microsoft Purview eDiscovery: who can search, hold and delete organisational content, and what it costs"
slug: "ediscovery"
summary: "Purview eDiscovery searches, holds, reviews and exports Microsoft 365 content, including Copilot interactions, inside cases. Administrators use it to decide who can reach which content, what is preserved and which data is billed."
created: "2026-11-19"
updated: "2026-11-20"
version: 2
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
  - title: "ediscoverySearch: purgeData"
    url: "https://learn.microsoft.com/graph/api/security-ediscoverysearch-purgedata?view=graph-rest-1.0"
    kind: "learn"
  - title: "New-ComplianceSecurityFilter"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancesecurityfilter?view=exchange-ps"
    kind: "learn"
  - title: "Microsoft Purview pricing details"
    url: "https://azure.microsoft.com/pricing/details/purview/"
    kind: "docs"
  - title: "Create ediscoveryHoldPolicy userSources"
    url: "https://learn.microsoft.com/graph/api/security-ediscoveryholdpolicy-post-usersources?view=graph-rest-1.0"
    kind: "learn"
  - title: "Create ediscoveryHoldPolicy siteSources"
    url: "https://learn.microsoft.com/graph/api/security-ediscoveryholdpolicy-post-sitesources?view=graph-rest-1.0"
    kind: "learn"
related: ["retention","auditing","microsoft-purview-ediscovery-in-product-diagnostics-to-troubleshoot-common-challenges","microsoft-purview-data-lifecycle-management-hard-delete-capability-for-onedrive-and-sharep","teams-ai-generated-meeting-memory"]
controls:
  - governs: "Who holds eDiscovery Manager and eDiscovery Administrator permissions"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Role groups > eDiscovery Manager > Edit > Manage eDiscovery Manager > Choose users"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember \"eDiscoveryManager\" -Member <name of security group>"
      docs: "https://learn.microsoft.com/purview/edisc-permissions"
    note: "Needs Organization Management or Role Management. Choose groups is the alternative to Choose users. Groups use mail-enabled security groups; users are also supported. The command assigns Managers, not Administrators."
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
    note: "Only an eDiscovery Administrator can remove members. The user must already be in the eDiscovery Manager role group. The body sets recipientType (user or roleGroup) and id, or smtpAddress (user) or displayName (role group)."
  - governs: "Which mailboxes and sites an eDiscovery manager can search (search permissions filters)"
    scope: "user"
    ui: null
    api:
      kind: "powershell"
      call: "New-ComplianceSecurityFilter -FilterName <name of filter> -Users <user or role group> -Filters <filter> -Action All"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancesecurityfilter?view=exchange-ps"
    note: "Needs Organization Management plus the eDiscovery administrator role; connect to Exchange Online and Security & Compliance PowerShell. Action All applies the filter to all search actions."
  - governs: "Creation of a case hold policy"
    scope: "other"
    ui:
      surface: "Microsoft Purview portal"
      path: "eDiscovery > Cases > case > Hold policies > Create policy"
      docs: "https://learn.microsoft.com/purview/edisc-hold-create"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/legalHolds"
      docs: "https://learn.microsoft.com/graph/api/security-ediscoverycase-post-legalholds?view=graph-rest-1.0"
    note: "Creates the policy only; the request body requires displayName and optionally sets contentQuery. Mailboxes and sites must be added separately."
  - governs: "Deleting Copilot and AI application data returned by a search"
    scope: "other"
    ui: null
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData"
      docs: "https://learn.microsoft.com/purview/edisc-search-copilot-data"
    note: "Needs the Search And Purge role. Remove holds and retention policies on the mailbox first or the data is retained. The request body uses purgeAreas to select mailboxes and purgeType to select recoverable or permanentlyDelete."
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
  - date: "2026-11-20"
    note: "Corrected group membership for the eDiscovery Manager role, narrowed the hold control to creating a policy, and added the -Action parameter, request-body notes and conflicting limits between Microsoft pages."
  - date: "2026-11-20"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 120 statements confirmed"
  - date: "2026-11-27"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed: all 144 statements confirmed"
verification:
  status: "verified"
  date: "2026-11-27"
  version: 2
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 144
  confirmed: 144
  unconfirmed: 0
  contradicted: 0
  attempts: 0
  hash: "f804e924f36a38f696a53657a20139f9"
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

- **eDiscovery Administrators see every case.** They can open all cases and case data, and Microsoft advises limiting how many people hold the role. The permissions page says eDiscovery Managers can only access and manage the cases they create, and also that, for users who are not eDiscovery Administrators, the cases shown are those where the user is a member.
- **A case can lock itself.** If the only member of a case leaves, nobody except an eDiscovery Administrator can open it. Only an Administrator can remove members.
- **Role-group edits silently change case access.** Adding or removing a role on a role group that is a case member removes the role group from every case it belongs to.
- **Group type matters.** When adding a group to the eDiscovery Managers subgroup, use a mail-enabled security group; individual users can also be assigned. Distribution groups and Microsoft 365 Groups are unsupported, and a mail-enabled security group cannot be a case member.
- **Holds are snapshots and take time.** A group's membership is captured when the hold is created; later members are not held. A hold can take up to 24 hours to take effect. SharePoint Recycle Bin content is not indexed, and a hold on a subsite lands on the parent site.
- **Filters have a ceiling.** A search query can have at most 100 conditions, counting the query and all search permissions filters applied to the user. Filters cannot limit searches of Exchange public folders.
- **Deleting Copilot data needs holds removed first.** A hold or retention policy on the mailbox keeps the data. The AI-data page documents up to 10 items per mailbox at a time, and deleting a conversation does not delete the associated Copilot memory. The Graph purgeData reference instead documents a maximum of 100 items per location; the two pages differ.
- **Search and purge is not supported on a mailbox with a litigation hold.**
- **Required enterprise apps** must be enabled for sign-in or some view, filter and search features fail.
- **App-only authentication for eDiscovery cmdlets in Security & Compliance PowerShell is unsupported;** Microsoft says to move automations to Graph.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds eDiscovery Manager and eDiscovery Administrator permissions</strong><br><small>Tenant</small><br><small class="controls__note">Needs Organization Management or Role Management. Choose groups is the alternative to Choose users. Groups use mail-enabled security groups; users are also supported. The command assigns Managers, not Administrators.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Role groups › eDiscovery Manager › Edit › Manage eDiscovery Manager › Choose users <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember &quot;eDiscoveryManager&quot; -Member &lt;name of security group&gt;</code> <a href="https://learn.microsoft.com/purview/edisc-permissions" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which users and role groups are members of an eDiscovery case</strong><br><small class="controls__note">Only an eDiscovery Administrator can remove members. The user must already be in the eDiscovery Manager role group. The body sets recipientType (user or roleGroup) and id, or smtpAddress (user) or displayName (role group).</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Case settings › Access and permissions › Users › Add <a href="https://learn.microsoft.com/purview/edisc-settings-access-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/caseMembers</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycasemember-post?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Which mailboxes and sites an eDiscovery manager can search (search permissions filters)</strong><br><small>User</small><br><small class="controls__note">Needs Organization Management plus the eDiscovery administrator role; connect to Exchange Online and Security &amp; Compliance PowerShell. Action All applies the filter to all search actions.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>New-ComplianceSecurityFilter -FilterName &lt;name of filter&gt; -Users &lt;user or role group&gt; -Filters &lt;filter&gt; -Action All</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/new-compliancesecurityfilter?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Creation of a case hold policy</strong><br><small class="controls__note">Creates the policy only; the request body requires displayName and optionally sets contentQuery. Mailboxes and sites must be added separately.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Cases › case › Hold policies › Create policy <a href="https://learn.microsoft.com/purview/edisc-hold-create" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseId}/legalHolds</code> <a href="https://learn.microsoft.com/graph/api/security-ediscoverycase-post-legalholds?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Deleting Copilot and AI application data returned by a search</strong><br><small class="controls__note">Needs the Search And Purge role. Remove holds and retention policies on the mailbox first or the data is retained. The request body uses purgeAreas to select mailboxes and purgeType to select recoverable or permanentlyDelete.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/security/cases/ediscoveryCases/{ediscoveryCaseID}/searches/{ediscoverySearchID}/purgeData</code> <a href="https://learn.microsoft.com/purview/edisc-search-copilot-data" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether new cases default to premium eDiscovery features</strong><br><small>Tenant</small><br><small class="controls__note">eDiscovery Administrator only. Affects new cases only; not available with Microsoft 365 Enterprise E3. A case can override it.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>eDiscovery › Settings › eDiscovery › General › eDiscovery (Premium) <a href="https://learn.microsoft.com/purview/edisc-settings-general" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

**Roles.** Assigning eDiscovery permissions needs the Organization Management role group or the Role Management role. Administrators can add themselves to any case. Deleting data needs the Search And Purge role, which Organization Management and Data Investigator hold by default. The Graph purgeData reference instead says this role is only available to Organization Management members; the references differ.

**How the controls interact.** Role-group membership gets a person into eDiscovery; case membership gets them into a case; a search permissions filter narrows what their searches, previews, exports and purges reach. Creating the filters needs Organization Management plus the eDiscovery administrator role. The premium default sets the level for new cases only, and each case can override it.

**Monitoring.** The audit log records eDiscovery activity, including CaseAdded, HoldCreated and PurviewSearchAdded; see [Microsoft Purview Audit](/concepts/auditing/).

## What to check

- Review the members of the eDiscovery Manager role group and keep the number of eDiscovery Administrators small.
- List cases whose only member is one person, and add a second member before that person leaves.
- Confirm that every user you place on hold holds a licence that includes hold rights, and that groups added to holds were re-added after membership changes.
- Check that search permissions filters exist where managers should see only part of the tenant, and count how many apply to one user.
- Review the premium default toggle in eDiscovery settings against the licences you hold.

## Open questions

- Does the portal offer a path to create search permissions filters? The documentation describes four Security & Compliance PowerShell cmdlets and no portal path at the time of writing (November 2026).
- Can the tenant-wide premium default be scripted? Microsoft documents it as a portal toggle.
- Which licence statement governs administrators using premium features: the permissions page or the service description?
- Is the item class table for Copilot and AI data updated for each new Copilot feature, such as meeting memory? Microsoft has not said.
