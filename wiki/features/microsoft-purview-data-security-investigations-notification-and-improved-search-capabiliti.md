---
title: "Microsoft Purview Data Security Investigations: investigation notifications and query builder search"
slug: "microsoft-purview-data-security-investigations-notification-and-improved-search-capabiliti"
roadmapId: 560325
topic: "governance"
products: ["Microsoft Purview"]
summary: "Data Security Investigations sends investigators portal and email notifications and adds query-building improvements to search. It reaches users who hold its roles; administrators should check role-group membership and how investigations are named."
status: "launched"
releasePhase: ["General Availability"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "June CY2026"
previewDate: null
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "prepare"
licensing:
  model: "consumption"
  notes: "Data Security Investigations is billed on stored data (a pay-as-you-go storage meter, per GB per month) and compute units for AI analysis, not on a dedicated plan or licence. No charge specific to notifications or the query builder is published."
audiences: ["security","compliance","m365-admin"]
tags: ["data-security-investigations","purview","role-groups","auditing","pay-as-you-go"]
sources:
  - title: "Microsoft 365 Roadmap 560325"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=560325"
    kind: "roadmap"
  - title: "Learn about the Data Security Investigations workflow"
    url: "https://learn.microsoft.com/purview/data-security-investigations-workflow"
    kind: "learn"
  - title: "Search, review, and refine results in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-search"
    kind: "learn"
  - title: "Billing in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-billing"
    kind: "learn"
  - title: "Assign permissions in Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    kind: "learn"
  - title: "Learn about Data Security Investigations"
    url: "https://learn.microsoft.com/purview/data-security-investigations"
    kind: "learn"
  - title: "Audit log activities"
    url: "https://learn.microsoft.com/purview/audit-log-activities"
    kind: "learn"
  - title: "Who holds Data Security Investigations Admins membership, and so receives its notifications (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    kind: "learn"
  - title: "Review of Data Security Investigations activity in the unified audit log (Microsoft Purview portal)"
    url: "https://learn.microsoft.com/purview/audit-search"
    kind: "learn"
  - title: "Review of Data Security Investigations activity in the unified audit log (PowerShell)"
    url: "https://learn.microsoft.com/purview/audit-troubleshooting-scenarios"
    kind: "learn"
videos: []
related: ["microsoft-purview-data-security-investigations-introducing-integration-with-data-security","microsoft-purview-compliance-portal-insider-risk-management-data-security-investigations-i","microsoft-purview-data-security-investigations-analyze-files-tied-to-endpoint-dlp-alerts","role-groups","auditing"]
controls:
  - governs: "Who holds Data Security Investigations Admins membership, and so receives its notifications"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Settings > Roles and groups > Role groups > Data Security Investigations Admins > Edit > Choose users"
      docs: "https://learn.microsoft.com/purview/data-security-investigations-permissions"
    api:
      kind: "powershell"
      call: "Add-RoleGroupMember -Identity \"<role-group>\" -Member \"<user-UPN>\""
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember"
    note: "The Investigators and Reviewers role groups are assigned the same way. Four built-in role groups also include Data Security Investigations roles."
  - governs: "Whether role holders receive Data Security Investigations notifications"
    scope: "user"
    ui: null
    api: null
    note: "Learn states notification preference settings aren't currently available."
  - governs: "Review of Data Security Investigations activity in the unified audit log"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Audit > Search"
      docs: "https://learn.microsoft.com/purview/audit-search"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <date> -EndDate <date>"
      docs: "https://learn.microsoft.com/purview/audit-troubleshooting-scenarios"
    note: "Requires the Audit Logs or View-Only Audit Logs role. Operations include DSIPurviewSearchAdded and DSIVectorSearchStarted."
confidence: "medium"
created: "2026-11-26"
updated: "2026-11-26"
roadmapModified: "2026-07-13T23:07:14"
changes:
  - date: "2026-11-26"
    note: "New briefing on notifications and query builder search in Data Security Investigations, with role-group and audit log controls."
  - date: "2026-11-26"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 1 of 71 statements not yet confirmed"
version: 1
verification:
  status: "verified-with-gaps"
  date: "2026-11-26"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 71
  confirmed: 69
  unconfirmed: 1
  contradicted: 1
  attempts: 0
  hash: "42f0c0648160f7263e02a6423136a431"
---

## What's changing

Microsoft Purview Data Security Investigations (the Purview solution that uses AI to analyse data caught up in a security incident) gains notifications for investigators and improvements to how search queries are built. The roadmap item states that investigators will be notified when key investigation events occur, such as when AI jobs complete or when new data is added to scope, and that search gets enhanced query building to identify potentially impacted data.

Microsoft Learn documents notifications delivered through both the Microsoft Purview Notification Center (the bell icon in the portal) and email. Email notifications carry the investigation name as the header and a button that links to the relevant page in the portal. At the time of writing (November 2026), the notification table on Learn lists setup and onboarding events only (Setup complete, Integration investigation ready, Setup reminder, Permissions provisioning complete); the AI-job and scope events the roadmap describes are not yet documented there. Learn states that notification preference settings aren't currently available, and that all users with Data Security Investigations roles receive the listed notifications.

On search, the Learn page describes a **Query builder** on the investigation's **Search** tab that builds queries with AND, OR and grouping of conditions, including nested subgroups, and accepts Keyword Query Language (KeyQL) syntax. Learn does not say which of these are the improvements the roadmap item refers to.

The roadmap item is Launched, General Availability, with a target of June CY2026, for Worldwide (Standard Multi-Tenant) on the web.

## Why it matters

The notifications put investigation names into mailboxes. Email is forwarded, synchronised to phones and kept under mailbox retention, so an investigation named after a suspected employee or a customer breach now leaves the Purview portal. Because Learn states there are no notification preference settings, the lever is who holds Data Security Investigations roles, and that includes members of Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management, which carry Data Security Investigations roles automatically.

If nobody acts, role holders receive the notifications. The query builder makes wider searches easier to write, and every item added to an investigation's scope is stored and prepared for AI analysis, which the storage meter and compute units bill.

## Risk assessment

**Data exposure**
- Email notifications use the investigation name as the header, so names that identify people or incidents reach mailboxes; Learn documents no notification setting, so the controls are a naming convention and role-group membership.
- Query builder searches respect compliance boundaries set with search permissions filters: investigators scoped by a boundary see results only within it.

**Security & identity**
- Recipients are role holders. Members of four built-in role groups hold Data Security Investigations roles without explicit assignment, so they receive the listed notifications too.

**Autonomy & actions**
- No change: notifications report events and the query builder builds searches; neither takes action on content.

**Change & support**
- The AI-job and scope notifications the roadmap describes are not in the Learn notification table yet, so investigators may ask why they do or do not receive them.

## Cost and licensing

The [billing page](https://learn.microsoft.com/purview/data-security-investigations-billing) states that Data Security Investigations is billed on stored data and the computing capacity for AI analysis, not on a dedicated plan or licence. Storage is a pay-as-you-go meter charged per gigabyte per month for data in all investigations, starting when items are added to an investigation's scope; AI analysis uses pay-as-you-go compute units. Compute units consumed before a cancelled job (such as Add to scope, Categorization or Examination) are still charged.

The **Usage dashboard** in Data Security Investigations shows storage and compute unit use per investigation, and only users with the Data Security Investigations Admin role can open it. The billing page recommends budgets for the Data Security Investigations resource group in Azure, with alerts as spending approaches thresholds; these alert on spend rather than stop it.

The billing page publishes no separate price or meter for notifications or the query builder. The indirect cost is broader searches: what is added to scope is stored and analysed under the meters above.

## Scope

- **Who:** users with Data Security Investigations roles: the Admins, Investigators and Reviewers role groups, plus Compliance Administrator, Organization Management, Data Security Management and Insider Risk Management, which include its roles.
- **Prerequisites:** both billing models (storage meter and AI capacity) must be configured before the solution can be used.
- **Clouds and platforms:** Worldwide (Standard Multi-Tenant), web, per the roadmap record.
- **Data searched:** Exchange Online, Microsoft Teams, OneDrive, SharePoint, Microsoft Copilot prompts and responses, and endpoint DLP evidence files.

## Governance guidance

### Before rollout
- List members of the Data Security Investigations role groups and of the four built-in role groups that include its roles, and remove anyone who should not receive investigation notifications.
- Agree a naming convention for investigations that avoids personal and customer names, since the name is the email header.
- Brief investigators that notifications arrive in the portal bell and by email, with no preference setting to turn them off.

### At rollout
- Compare the notifications investigators receive with the Learn notification table, and note any AI-job or scope notifications that appear.
- Ask investigators to refine searches with query builder subgroups and Review estimates before adding results to scope, to keep storage and compute units down.

### After rollout
- Search the audit log for Data Security Investigations operations such as DSIPurviewSearchAdded and DSIPurviewSearchAddToEvidenceSetJobSubmitted to see who is searching and adding data to scope.
- Remove role-group members who no longer run investigations, so they stop receiving notifications.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Who holds Data Security Investigations Admins membership, and so receives its notifications</strong><br><small>Tenant</small><br><small class="controls__note">The Investigators and Reviewers role groups are assigned the same way. Four built-in role groups also include Data Security Investigations roles.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Settings › Roles and groups › Role groups › Data Security Investigations Admins › Edit › Choose users <a href="https://learn.microsoft.com/purview/data-security-investigations-permissions" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Add-RoleGroupMember -Identity &quot;&lt;role-group&gt;&quot; -Member &quot;&lt;user-UPN&gt;&quot;</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/add-rolegroupmember" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether role holders receive Data Security Investigations notifications</strong><br><small>User</small><br><small class="controls__note">Learn states notification preference settings aren't currently available.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Review of Data Security Investigations activity in the unified audit log</strong><br><small>Tenant</small><br><small class="controls__note">Requires the Audit Logs or View-Only Audit Logs role. Operations include DSIPurviewSearchAdded and DSIVectorSearchStarted.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Audit › Search <a href="https://learn.microsoft.com/purview/audit-search" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;date&gt; -EndDate &lt;date&gt;</code> <a href="https://learn.microsoft.com/purview/audit-troubleshooting-scenarios" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

Role-group membership decides who receives the documented notifications; Learn documents no per-user or tenant notification setting at the time of writing (November 2026). Role group changes can take up to 30 minutes to apply. Global Administrators need membership of a Data Security Investigations role group to create and access investigations. Data Security Investigations activities are logged in the unified audit log automatically; searching it needs the Audit Logs or View-Only Audit Logs role.

## Open questions

- Which events beyond setup and onboarding now send notifications, such as AI job completion and data added to scope, and do they go to all role holders or only investigation members? Watch the Learn workflow page.
- Will Microsoft add notification preference settings, per user or for the tenant?
- Which query builder changes does the roadmap's enhanced query building refer to?
- Does the email notification carry anything beyond the investigation name and a portal link?

<!-- rationale
risk: Low. Notifications go to people who already hold Data Security Investigations roles, and search runs under the existing role groups and compliance boundaries; the new exposure is the investigation name carried in email headers.
cost: Low. Microsoft publishes no separate charge for notifications or the query builder. Data Security Investigations itself bills pay-as-you-go storage per GB per month and compute units for AI analysis, so broader searches added to scope cost more.
impact: Low. Only members of the Data Security Investigations role groups, and of the built-in role groups that include its roles, see the notifications and the search changes.
-->

<!-- verifier-findings (2026-11-26, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [unsupported, major] Risk assessment: Autonomy & actions / behaviour: Neither notifications nor the query builder takes action on content. | Found: Searched: Data Security Investigations query builder notifications automatically take action content purge query. Read search and workflow pages and mitigation-actions purge excerpts; these describe query construction and separate purge execution, not this categorical exclusion. | Fix: Replace the bullet with: 'Notifications report events, and the query builder constructs search queries.' Remove 'No change' and 'neither takes action on content'; no source establishes that categorical claim.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Why it matters; Risk assessment; controls[0].governs; rationale: impact / behaviour: Learn says all users with Data Security Investigations roles receive the listed notifications. | Found: All users with Data Security Investigations roles receive notifications for the scenarios listed in this section. | Fix: After this sentence, add: 'The same page's table gives narrower recipients for some events: investigation creators for Integration investigation ready and Setup reminder, and the user completing onboarding for Permissions provisioning complete.' Keep Setup complete as all role holders. | Source: https://learn.microsoft.com/purview/data-security-investigations-workflow
- [supported, minor] Why it matters / behaviour: Email can synchronise to mobile phones. | Found: Within the Microsoft 365- or Office 365-based architecture, Outlook for iOS and Android uses the native Microsoft sync technology as the protocol for data synchronization. | Fix: Add https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android to sources for the mobile email synchronisation premise. | Source: https://learn.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android
- [supported, minor] Why it matters / applicability: Email messages are subject to mailbox retention settings. | Found: The Managed Folder Assistant processes mailboxes and applies retention settings in the user's retention policy. | Fix: Add https://learn.microsoft.com/exchange/security-and-compliance/messaging-records-management/messaging-records-management to sources for the mailbox-retention premise. | Source: https://learn.microsoft.com/exchange/security-and-compliance/messaging-records-management/messaging-records-management
- [supported, minor] Why it matters; Cost and licensing / behaviour: Every item added to scope is prepared for AI analysis. | Found: After data items are added to the investigation scope, the system automatically prepares all items. This automatic vectorization enables semantic searches and categorization of data. | Fix: Replace 'every item added to an investigation's scope is stored and prepared for AI analysis' with 'adding data to an investigation's scope incurs storage charges and can consume compute units for AI preparation'. In Cost and licensing, replace 'what is added to scope is stored and analysed under the meters above' with 'adding data to scope incurs storage charges and can consume compute units for AI preparation'. The scope page excludes previously vectorized items from revectorization and items without text from vectorization (https://learn.microsoft.com/purview/data-security-investigations-scope#automatic-vectorization). | Source: https://learn.microsoft.com/purview/data-security-investigations-workflow
- [supported, minor] Cost and licensing / cost: Budget alerts notify about spending rather than stopping consumption. | Found: Notifications are triggered when the budget thresholds are exceeded. Resources aren't affected, and your consumption isn't stopped. | Fix: Add https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets to sources for the statement that budget alerts do not stop consumption. | Source: https://learn.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets
- [contradicted, minor] Governance guidance: At rollout; controls / consistency: The checklist's query-builder subgroup and Review estimates controls have no corresponding controls-table row. | Found: Checklist: 'Ask investigators to refine searches with query builder subgroups and Review estimates'. The three control rows cover role-group membership, notification preferences and audit-log review, not these search controls. | Fix: Remove the At rollout bullet beginning 'Ask investigators to refine searches': it tells the reader to use query-builder subgroup controls and Review estimates, neither of which has a controls-table row. Do not add rows as part of this correction.
-->
