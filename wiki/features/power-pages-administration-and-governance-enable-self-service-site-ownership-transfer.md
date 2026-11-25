---
title: "Power Pages: transfer site ownership from the Power Platform admin center"
slug: "power-pages-administration-and-governance-enable-self-service-site-ownership-transfer"
roadmapId: 577825
topic: "power-platform"
products: ["Power Pages"]
summary: "Admins can reassign a Power Pages site to another user without a support request, and Purview logs the transfer. Nothing changes until an admin runs a transfer; check roles and auditing first."
status: "launched"
releasePhase: ["General Availability","Preview"]
clouds: ["Worldwide (Standard Multi-Tenant)"]
platforms: ["Web"]
targetDate: "September CY2026"
previewDate: "September CY2026"
risk: "low"
cost: "low"
impact: "low"
defaultState: "on"
action: "review"
licensing:
  model: "add-on"
  notes: "Power Pages is licensed by authenticated user and anonymous user monthly capacity add-ons for external users. The transfer page lists roles and a user type as prerequisites and names no licence; a charge specific to transfers is not yet published."
audiences: ["power-platform-admin","compliance","service-owner"]
tags: ["power-pages","governance","lifecycle","auditing","purview","power-platform-admin-center"]
sources:
  - title: "Microsoft 365 Roadmap 577825"
    url: "https://www.microsoft.com/microsoft-365/roadmap?id=577825"
    kind: "roadmap"
  - title: "Transfer ownership of a Power Pages site"
    url: "https://learn.microsoft.com/power-pages/admin/transfer-ownership"
    kind: "learn"
  - title: "Roles required for website administration"
    url: "https://learn.microsoft.com/power-pages/admin/admin-roles"
    kind: "learn"
  - title: "View Power Pages activity logs in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    kind: "learn"
  - title: "Search-UnifiedAuditLog"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    kind: "learn"
  - title: "Use Power Pages admin APIs"
    url: "https://learn.microsoft.com/power-pages/admin/admin-api"
    kind: "learn"
  - title: "View security recommendations"
    url: "https://learn.microsoft.com/power-platform/admin/security-recommendations"
    kind: "learn"
  - title: "Actions overview"
    url: "https://learn.microsoft.com/power-platform/admin/power-platform-advisor"
    kind: "learn"
  - title: "Website capacity consumption reports"
    url: "https://learn.microsoft.com/power-pages/admin/website-consumption-reports"
    kind: "learn"
videos: []
related: ["auditing","power-pages-administration-and-governance-configure-site-analytics-and-server-logging","managed-environments"]
controls:
  - governs: "Transferring ownership of a Power Pages site"
    scope: "site"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > site > Site Details > Edit > Owner"
      docs: "https://learn.microsoft.com/power-pages/admin/transfer-ownership"
    api: null
    note: "Needs the website app owner plus System administrator, Dynamics 365 administrator or Power Platform administrator; managed identity sites do not need web app ownership."
  - governs: "Audit record of site ownership transfers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate $start -EndDate $end -Operations OwnershipTransferred"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps"
    note: "The Power Pages activity page names the operation OwnershipTransferred and does not name this cmdlet. Auditing must be on for the production environment; viewers need the Audit Logs or View-Only Audit Logs role."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-18"
roadmapModified: "2026-10-22T23:45:49"
changes:
  - date: "2026-11-16"
    note: "First briefing: documents the admin-centre transfer steps, required roles and Purview audit event; notifications and the Power Advisor ownerless-sites view remain roadmap-only."
  - date: "2026-11-16"
    note: "Corrected after verification: app ownership is not required for managed identity sites, fixed the Azure portal path and audit API call, and added rows for auditing setup, inventory and the approval gap."
  - date: "2026-11-16"
    note: "Corrected after verification: added the Power Platform API call for the SAS logging setting, the SAS domain allow-list prerequisite, and softened the ownership-concept wording in open questions."
  - date: "2026-11-17"
    note: "Corrected after verification: the website app owner Graph call now includes the required @odata.id request body, with the Graph Add owner reference as its source."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 69 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-17"
    note: "First briefing for this item: Learn documents the admin-centre transfer and its Purview audit event; the Power Advisor list of ownerless sites is not yet documented."
  - date: "2026-11-17"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: held: 2 of 62 statements contradicted, 0 unconfirmed; taken offline until corrected"
  - date: "2026-11-18"
    note: "First briefing: documents the admin centre transfer route, its role conditions, the Purview audit event, and the roadmap claims Learn does not yet cover."
  - date: "2026-11-18"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 63 statements not yet confirmed"
  - date: "2026-11-25"
    note: "Checked against Microsoft Learn by gpt-6.1-sol: passed with 0 of 60 statements not yet confirmed"
version: 6
verification:
  status: "verified-with-gaps"
  date: "2026-11-25"
  version: 6
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 60
  confirmed: 58
  unconfirmed: 0
  contradicted: 2
  attempts: 0
  hash: "d7d34d4613f6f63053cb58388df91a4d"
---

## What's changing

The roadmap item says Power Pages now lets existing site owners and global administrators assign ownership of an eligible site to another valid user in the tenant, without a support request. Microsoft Learn documents the procedure in the Power Platform admin center: select a site, open **Site Details**, select **Edit**, replace the **Owner**, then confirm with **Transfer**. When it finishes, the selected user becomes the primary owner of the site.

Learn's conditions are narrower than the roadmap wording. The person transferring must be the website app owner and hold System administrator, Dynamics 365 administrator or Power Platform administrator. The new owner must be an enabled Microsoft Entra user with a **Member** user type. Websites on the Power Platform managed identity model do not need web app ownership as a prerequisite for starting a transfer. Learn also says the previous owner might lose access, depending on the site's permissions and configuration, and that a transfer cannot be undone automatically: an authorised administrator has to transfer ownership back.

The roadmap item also describes an audit history (previous owner, new owner, initiating user, timestamp), notifications to the previous owner, the new owner and administrators, logging to Compliance Center, and a Power Advisor view of sites that have no valid owner. Learn documents the audit part: Microsoft Purview records a **Transfer site ownership** activity with the operation name `OwnershipTransferred`. At the time of writing (November 2026), Learn documents no notification emails for transfers. Its security recommendations on the admin centre actions page describe a valid-owner recommendation for apps, and its sites recommendations cover WAF, SSL certificates and authentication keys, not site owners.

The roadmap status is Launched, with a September CY2026 target for both preview and general availability. The record lists Worldwide (Standard Multi-Tenant) and the Web platform, and says the feature is "Enabled for admins/makers/marketers automatically".

## Why it matters

Sites tend to become orphaned when an owner changes team or leaves. Ownership matters here because the website app owner is a prerequisite for several admin tasks, including managing the website authentication key and starting a transfer for sites that are not on the managed identity model. A documented admin-centre route to reassign the owner, with an audit event in Purview, gives a service owner a leaver step that does not depend on a support case.

If nobody acts, nothing is transferred: the roadmap says the capability is enabled automatically, and Learn describes a procedure an admin runs per site. The work for you is to make sure the right people hold the roles, that auditing is on for production environments, and that the transfer step is part of your leaver and role-change process. Do not rely on the roadmap's notification and Power Advisor claims until Learn documents them.

## Risk assessment

**Data exposure**

- A transfer hands management of the site to the chosen user. Selecting the wrong person makes them the primary owner of that site. The control is the role and website app owner requirement on the transfer row of the table.
- Learn says the previous owner might lose access, depending on the site's permissions and configuration. Check what the previous owner still needs before transferring.

**Security & identity**

- The initiator must be the website app owner with System administrator, Dynamics 365 administrator or Power Platform administrator (managed identity sites excepted). These are directly assigned roles; the roles page says admin roles are not inherited from security group membership or through privileged identity management.
- The new owner must be an enabled Microsoft Entra user with a **Member** user type, which limits who can receive a site.
- Transfers are logged as `OwnershipTransferred` in Microsoft Purview only where auditing is configured for the production environment and the viewer holds the Audit Logs or View-Only Audit Logs role.

**Autonomy & actions**

- Learn describes an admin-initiated, manual procedure. It documents no automated reassignment and no API for transfer at the time of writing (November 2026).

**Change & support**

- A transfer cannot be undone automatically; restoring the previous owner needs another transfer by an authorised administrator.
- The ownership transfer option may be missing for non-managed-identity sites if you are not the web app owner, so expect support questions from admins who hold a role but not the app ownership.

## Cost and licensing

Learn's transfer page lists admin roles, access to the Power Platform admin center and the new owner's user type as prerequisites, and names no licence. Power Pages itself is licensed by authenticated user monthly capacity and anonymous user monthly capacity add-ons for external users, per the Power Pages capacity reports page.

A meter, price or licence condition specific to ownership transfer is not yet published. The cost this change creates is admin time to put the process in place and to run Purview searches. Learn describes the actions page recommendations as covering managed environments, so reviewing recommendations there may depend on Managed Environments being turned on.

## Scope

The roadmap record lists Worldwide (Standard Multi-Tenant) and the Web platform, and says the feature is enabled automatically for admins, makers and marketers. Which sites count as "eligible" is not defined on the roadmap item or on Learn.

On Learn, the transfer is done in the Power Platform admin center by a website app owner who is a System administrator, Dynamics 365 administrator or Power Platform administrator. The roadmap names global administrators instead, and the difference is unresolved. The new owner must be an enabled Microsoft Entra member user. Viewing the audit record needs auditing turned on for the production environment and the Audit Logs or View-Only Audit Logs role.

## Governance guidance

### Before rollout

- Confirm which admins hold System administrator, Dynamics 365 administrator or Power Platform administrator, and whether they are the website app owner for the sites they will transfer (or whether the site is on the managed identity model).
- Turn on auditing for the production environments that host Power Pages sites, and assign the Audit Logs or View-Only Audit Logs role to the people who will check transfers (Purview audit row).
- Add a site ownership step to the leaver and role-change process, naming who initiates the transfer and who receives the site.

### At rollout

- Start each transfer from the Power Platform admin center site details page (transfer row), and pick an enabled Entra user with a Member user type.
- Tell the previous owner and the new owner directly; Learn documents no transfer notification.
- Check what access the previous owner holds on the site first, because Learn says they might lose it.

### After rollout

- Search Microsoft Purview audit for `OwnershipTransferred` to confirm who moved which site and when (Purview audit row).
- Confirm the new owner can access and manage the site, as Learn advises.
- Transfer the site back through the same page if a transfer was wrong; Learn says it cannot be undone automatically.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Transferring ownership of a Power Pages site</strong><br><small>Site</small><br><small class="controls__note">Needs the website app owner plus System administrator, Dynamics 365 administrator or Power Platform administrator; managed identity sites do not need web app ownership.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › site › Site Details › Edit › Owner <a href="https://learn.microsoft.com/power-pages/admin/transfer-ownership" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit record of site ownership transfers</strong><br><small>Tenant</small><br><small class="controls__note">The Power Pages activity page names the operation OwnershipTransferred and does not name this cmdlet. Auditing must be on for the production environment; viewers need the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate $start -EndDate $end -Operations OwnershipTransferred</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog?view=exchange-ps" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The transfer is a per-site admin action with no documented tenant-wide on or off setting in this table. Role requirements are on the roles page: the website app owner plus System administrator, Dynamics 365 administrator or Power Platform administrator.

Microsoft Learn documents no API or command for the ownership transfer itself at the time of writing (November 2026), so scripted transfers and bulk reassignment are not documented. The audit row covers reading the record afterwards; the Power Pages activity page also says the logs are available to developers through the Office 365 Management API. The roadmap's Power Advisor view of sites without a valid owner has no row because Learn documents no such site recommendation at the time of writing.

## Open questions

- Which sites are "eligible" for transfer, and what makes a site ineligible? Watch the Power Pages transfer ownership page on Microsoft Learn.
- Do global administrators who are not the website app owner get a transfer path? The roadmap names global administrators, while Learn names the website app owner plus a Power Platform admin role.
- Which notifications are sent on transfer, to whom, and where are they documented? Watch the transfer page and Message center.
- Where does Power Advisor show Power Pages sites with no valid owner, and does it apply only to managed environments? Watch the Power Platform admin center actions page documentation.
- Will an API or CLI command for transfer be documented? Watch the Power Pages admin API reference.

<!-- rationale
risk: Low. A transfer happens only when an admin starts it and needs the website app owner plus an admin role. The exposure that remains is a wrong or unrecoverable transfer: Learn says it cannot be undone automatically.
cost: Low. The Learn page names no licence or meter for transfers, so the only cost shown is admin time. Power Pages itself is licensed through capacity add-ons; nothing specific to ownership transfer is published.
impact: Low. Admins and the site owners involved notice it. Visitors to the site are not mentioned in the roadmap item or on Learn.
-->

<!-- verifier-findings (2026-11-25, verified-with-gaps; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: The selected user becomes the site's primary owner when the transfer finishes. | Found: When the transfer finishes, the selected user becomes the primary owner of the site. | Fix: After this sentence add: 'The roles page still defines website owner as the creator and says that ownership cannot be transferred or changed; Microsoft has not reconciled that wording with the transfer procedure.' Cite https://learn.microsoft.com/power-pages/admin/admin-roles#website-owner. Do not equate the different ownership terms. | Source: https://learn.microsoft.com/power-pages/admin/transfer-ownership
- [contradicted, minor] Governance guidance: Before rollout, auditing and role-assignment bullet / consistency: The audit row covers the environment auditing setup and audit-role assignment that the checklist tells readers to configure. | Found: Turn on auditing for the production environments ... assign the Audit Logs or View-Only Audit Logs role ... (Purview audit row). The row gives Solutions > Audit and Search-UnifiedAuditLog, which search records rather than configure those prerequisites. | Fix: Remove the Before rollout bullet beginning 'Turn on auditing for the production environments'. Neither environment auditing setup nor audit-role assignment has a configuration row. Retain the verified prerequisites in the row note and Scope; do not add rows.
- [contradicted, minor] Governance controls, paragraph after table / consistency: The table represents the documented absence of a tenant-wide ownership-transfer switch. | Found: The transfer is a per-site admin action with no documented tenant-wide on or off setting in this table. The table contains only a transfer row and an audit-search row, not a tenant-switch absence row. | Fix: Replace 'The transfer is a per-site admin action with no documented tenant-wide on or off setting in this table.' with 'The transfer is a per-site admin action.' This removes an absence that has no corresponding row without adding a control.
-->
