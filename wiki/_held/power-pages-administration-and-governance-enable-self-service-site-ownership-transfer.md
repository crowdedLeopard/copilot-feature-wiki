---
title: "Power Pages: self-service site ownership transfer in the Power Platform admin center"
slug: "power-pages-administration-and-governance-enable-self-service-site-ownership-transfer"
roadmapId: 577825
topic: "power-platform"
products: ["Power Pages"]
summary: "Admins can change the owner of a Power Pages site from the Power Platform admin center without a support request. The roadmap lists it as launched. No action is forced, but check roles and Purview auditing."
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
  model: "unknown"
  notes: "Not yet published. The Learn page for the transfer lists no licence among its prerequisites. Viewing the audit trail in Microsoft Purview has its own licensing and permission prerequisites."
audiences: ["power-platform-admin","service-owner","compliance"]
tags: ["power-pages","governance","auditing","purview","power-platform-admin-center","lifecycle"]
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
  - title: "Power Platform activity logs and auditing in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview"
    kind: "learn"
  - title: "View security recommendations"
    url: "https://learn.microsoft.com/power-platform/admin/security-recommendations"
    kind: "learn"
  - title: "Use Power Pages admin APIs"
    url: "https://learn.microsoft.com/power-pages/admin/admin-api"
    kind: "learn"
  - title: "Audit trail of site ownership transfers (PowerShell)"
    url: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    kind: "learn"
videos: []
related: ["power-pages-administration-and-governance-configure-site-analytics-and-server-logging","power-pages-administration-and-governance-manage-external-authentication-providers-with-gr","managed-environments"]
controls:
  - governs: "Transferring ownership of a Power Pages site"
    scope: "site"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > site > Site Details > Edit > Owner"
      docs: "https://learn.microsoft.com/power-pages/admin/transfer-ownership"
    api: null
    note: "Needs the website app owner role plus System administrator, Dynamics 365 administrator or Power Platform administrator; the new owner must be a Member user."
  - governs: "Audit trail of site ownership transfers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    api:
      kind: "powershell"
      call: "Search-UnifiedAuditLog -StartDate <start> -EndDate <end> -Operations OwnershipTransferred"
      docs: "https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog"
    note: "Operation name from the Power Pages activity logs page. Needs the Audit Logs or View-Only Audit Logs role and auditing on production environments."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-17"
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
version: 5
verification:
  status: "held"
  date: "2026-11-17"
  version: 5
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 62
  confirmed: 60
  unconfirmed: 0
  contradicted: 2
  attempts: 5
  hash: "abf6d9798fddc579c7c952a76d71ca37"
---

## What's changing

Power Pages now lets an authorised user transfer ownership of a site to another user in the organisation. In the Power Platform admin center the transfer is made by editing the **Owner** field on the site's **Site Details** page. Once it finishes, the selected user becomes the primary owner of the site.

The Learn page sets the prerequisites: the person making the change must be the website app owner and hold System administrator, Dynamics 365 administrator or Power Platform administrator. The new owner must be an enabled Microsoft Entra user with a **Member** user type. Sites on the Power Platform managed identity model do not need web app ownership as a prerequisite for starting a transfer. The roadmap item describes the actors differently, as existing site owners and global administrators, so confirm which roles apply in your tenant before relying on either description.

Learn warns that, depending on the site's permissions and configuration, the previous owner might lose access, and that an ownership transfer can't be automatically undone: an authorised administrator has to transfer ownership back.

The roadmap item also says every transfer is recorded with the previous owner, new owner, initiating user and timestamp, that notifications go to the previous owner, the new owner and administrators, and that Power Advisor lists sites without a valid owner. Learn documents the audit event, `OwnershipTransferred`, in Microsoft Purview. At the time of writing (November 2026) Learn documents neither the notifications nor a Power Advisor list of sites without a valid owner: the Power Platform security recommendations page lists a recommendation for apps without a valid owner, and its site recommendations cover Web Application Firewall, SSL certificates and authentication keys. The roadmap lists the item as Launched, targeted September CY2026, with release phases General Availability and Preview, for the Worldwide (Standard Multi-Tenant) cloud on the web.

## Why it matters

Learn's roles page lists the website app owner as a requirement for the transfer itself and for tasks such as managing the authentication key and converting a site to production, so a site whose owner has left is harder to administer. The roadmap's stated purpose is to let administrators fix that without a support request.

The roadmap says the capability is enabled automatically for admins, makers and marketers, so there is no opt-in to wait for. Decide which people should use it and how a transfer fits into your joiner-mover-leaver process.

## Risk assessment

**Data exposure**

- A transfer makes another user the primary owner of a site. Learn says the previous owner might lose access depending on the site's permissions and configuration, so check what the new owner can reach in the site's environment before transferring.
- Learn does not describe what else moves with ownership. Confirm in a test site before transferring a production one.

**Security & identity**

- The new owner has to be an enabled Microsoft Entra user with a **Member** user type, so guests are outside what the page documents.
- Initiating a transfer depends on the website app owner and one of three admin roles. Learn's roles page says admin roles must be directly assigned and are not inherited from security group membership or through privileged identity management (PIM).

**Autonomy & actions**

- Learn says a transfer can't be undone automatically, so a mistaken transfer needs a second transfer back by an authorised administrator.

**Change & support**

- Each transfer produces a Power Pages audit event in Microsoft Purview. Learn lists that auditing needs to be configured for production environments and the Audit Logs or View-Only Audit Logs role to view it.
- Learn documents no API or `pac` command for the transfer at the time of writing (November 2026), so transfers are made one site at a time in the admin centre.

## Cost and licensing

The Learn page for the transfer lists its prerequisites (the website app owner role plus one admin role, access to the Power Platform admin center, and a Member-type Microsoft Entra user as new owner) and names no licence among them. Licensing is therefore not yet published for this feature; the roadmap item names none either. No meter is documented for it at the time of writing (November 2026).

The indirect cost is admin time and, if you want the audit trail, Microsoft Purview auditing. The activity logs overview says the option to turn on audit logging is only visible when the minimum Office licensing requirements are met, and that user activity logs are captured only for production environments.

## Scope

The roadmap lists Power Pages, the Worldwide (Standard Multi-Tenant) cloud and the web platform, with release phases General Availability and Preview. It describes the feature as for "eligible sites" and as enabled automatically for admins, makers and marketers; Learn does not say what makes a site eligible.

Who can transfer: on Learn, the website app owner who also holds System administrator, Dynamics 365 administrator or Power Platform administrator. The roadmap says existing site owners and global administrators. Who can receive: an enabled Microsoft Entra user with a **Member** user type. The roadmap says the new owner needs appropriate access to the environment.

## Governance guidance

### Before rollout

- Confirm who holds System administrator, Dynamics 365 administrator or Power Platform administrator in the environments that host Power Pages sites, and that they are directly assigned to those roles.
- Check that Microsoft Purview auditing is configured for the production environments that host sites and that someone holds the Audit Logs or View-Only Audit Logs role.
- Decide which team approves a transfer and how departing site owners are handed over.

### At rollout

- Try a transfer on a non-production site and confirm the new owner can access and manage it, as Learn advises after every transfer.
- Check whether the previous owner keeps access to the site.

### After rollout

- Search Microsoft Purview for the **Transfer site ownership** activity (`OwnershipTransferred`) and compare each transfer with its approval.

- Watch Message center and the Learn page for the Power Advisor list of sites without a valid owner.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Transferring ownership of a Power Pages site</strong><br><small>Site</small><br><small class="controls__note">Needs the website app owner role plus System administrator, Dynamics 365 administrator or Power Platform administrator; the new owner must be a Member user.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › site › Site Details › Edit › Owner <a href="https://learn.microsoft.com/power-pages/admin/transfer-ownership" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit trail of site ownership transfers</strong><br><small>Tenant</small><br><small class="controls__note">Operation name from the Power Pages activity logs page. Needs the Audit Logs or View-Only Audit Logs role and auditing on production environments.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>PowerShell</strong><br><code>Search-UnifiedAuditLog -StartDate &lt;start&gt; -EndDate &lt;end&gt; -Operations OwnershipTransferred</code> <a href="https://learn.microsoft.com/powershell/module/exchangepowershell/search-unifiedauditlog" rel="noopener" class="controls__docs">Learn</a></td></tr>
</tbody>
</table>

The transfer needs the website app owner plus one of three admin roles, except on sites using the Power Platform managed identity model. The transfer page documents no tenant setting for it at the time of writing (November 2026).

The Purview audit trail depends on auditing being set up for each production environment, which is a separate setting from the transfer. The Power Platform actions page and its security recommendations are described in Learn for apps without a valid owner, not for sites.

## Open questions

- Does Power Advisor now list Power Pages sites without a valid owner, and in which category and with which actions? The Learn pages read describe the recommendation for apps only. Watch the Power Platform security recommendations page.
- Who are the "administrators" the roadmap says are notified of a transfer, and does Learn document the notification? Watch the transfer page.
- Which description of who can transfer applies: the roadmap's site owners and global administrators, or Learn's website app owner with an admin role?
- What makes a site "eligible" for transfer, and what does the Preview release phase on the roadmap cover?
- Will Microsoft document an API or `pac` command for transfers? Watch the Power Pages admin API page.

<!-- rationale
risk: Low. Nothing changes until an eligible admin or site owner starts a transfer, but Learn warns that a transfer can't be automatically undone and the previous owner might lose access.
cost: Low. The Learn page lists roles, admin centre access and a Member-type Microsoft Entra user as prerequisites and names no licence, so the cost shown is admin time.
impact: Low. Power Platform admins, site owners and the people who gain or lose ownership notice it; visitors to the site are not mentioned.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[0].note; Risk assessment: Security & identity; Cost and licensing; Scope; rendered table / role: Website app ownership is a prerequisite for initiating a transfer, without an exception in these standalone statements. | Found: Websites on Power Platform managed identity model don't need web app ownership as a prerequisite for initiating transfer. | Fix: In controls[0].note and its rendered copy, and in the unqualified prerequisite statements in Risk assessment, Cost and licensing and Scope, qualify website app ownership with: 'Website app ownership is required except for sites using the Power Platform managed identity model.' Retain the three admin-role alternatives and the new-owner requirements. The exception already stated in What's changing and Governance controls must also qualify the table and these standalone statements. | Source: https://learn.microsoft.com/power-pages/admin/transfer-ownership
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: The selected user becomes the site's primary owner when the transfer finishes. | Found: When the transfer finishes, the selected user becomes the primary owner of the site. Verify that the new owner can access and manage the site. | Fix: Keep this statement, but add: 'The roles page still says website ownership remains with the creator and cannot be transferred or changed, whereas the transfer page documents a new primary owner.' Cite https://learn.microsoft.com/power-pages/admin/admin-roles#website-owner alongside the transfer page; both pages were read and disagree on this point. | Source: https://learn.microsoft.com/power-pages/admin/transfer-ownership
- [contradicted, minor] Governance guidance: Before rollout; Governance controls table / consistency: The checklist's role-assignment inventory and environment auditing-setup controls are represented in the controls table. | Found: Checklist: 'Confirm who holds ... roles' and 'Check that Microsoft Purview auditing is configured for the production environments'. Table rows: 'Transferring ownership of a Power Pages site' and 'Audit trail of site ownership transfers'. | Fix: The first Before rollout bullet (taking stock of directly assigned administrator roles) and the second (checking production-environment auditing configuration) have no corresponding control rows; the audit row only searches logs. Remove these checklist instructions rather than adding unverified control rows.
-->
