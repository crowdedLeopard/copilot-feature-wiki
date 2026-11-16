---
title: "Power Pages: self-service site ownership transfer in the admin centre"
slug: "power-pages-administration-and-governance-enable-self-service-site-ownership-transfer"
roadmapId: 577825
topic: "power-platform"
products: ["Power Pages"]
summary: "Launched: an authorised admin can move a Power Pages site to another owner in the Power Platform admin center, without a support request. Transfers are audited in Purview. Nothing to configure, but plan who may do it."
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
  notes: "Not yet published for this feature. The transfer page lists admin roles and a Microsoft Entra Member user as prerequisites and names no licence or charge. Power Pages sites themselves are licensed by capacity."
audiences: ["power-platform-admin","service-owner","compliance","maker"]
tags: ["power-pages","governance","auditing","purview","lifecycle","power-platform-admin-center","admin-controls"]
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
  - title: "Add an owner to an application using Microsoft Graph"
    url: "https://learn.microsoft.com/troubleshoot/entra/entra-id/users-groups-entra-apis/add-owner-for-application-microsoft-graph"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
    kind: "learn"
  - title: "Power Pages sites in Power Platform inventory overview (preview)"
    url: "https://learn.microsoft.com/power-pages/admin/power-pages-inventory"
    kind: "learn"
videos: []
related: ["power-pages-administration-and-governance-configure-site-analytics-and-server-logging","power-pages-administration-and-governance-manage-external-authentication-providers-with-gr","power-pages-track-power-pages-performance-and-usage-with-monitor-hub"]
controls:
  - governs: "Transferring a Power Pages site to a new owner"
    scope: "site"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Power Pages > site > Site Details > Edit > Owner"
      docs: "https://learn.microsoft.com/power-pages/admin/transfer-ownership"
    api: null
    note: "Needs the website app owner plus System administrator, Dynamics 365 administrator or Power Platform administrator. No API documented at the time of writing."
  - governs: "Audit trail of site ownership transfers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    api:
      kind: "rest"
      call: "Office 365 Management API (Power Pages activity logs; operation OwnershipTransferred)"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    note: "Auditing must be on for the production environment. Reading needs the Audit Logs or View-Only Audit Logs role."
  - governs: "Who is the website app owner for a site"
    scope: "site"
    ui:
      surface: "Azure portal"
      path: "Microsoft Entra ID > App registrations > Portals-<website name> > Owners > Add owners"
      docs: "https://learn.microsoft.com/power-pages/admin/admin-roles"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/applications/{application-object-id}/owners/$ref"
      docs: "https://learn.microsoft.com/troubleshoot/entra/entra-id/users-groups-entra-apis/add-owner-for-application-microsoft-graph"
    note: "Prerequisite for starting a transfer, not a control over the feature. The Graph page is a general application-owner example, not Power Pages specific."
  - governs: "Tenant-wide switch to disable site ownership transfer"
    scope: "tenant"
    ui: null
    api: null
    note: "No such switch is documented at the time of writing. Access is limited only by the required roles."
confidence: "medium"
created: "2026-11-16"
updated: "2026-11-16"
roadmapModified: "2026-10-22T23:45:49"
changes:
  - date: "2026-11-16"
    note: "First briefing: documents the admin-centre transfer steps, required roles and Purview audit event; notifications and the Power Advisor ownerless-sites view remain roadmap-only."
version: 1
verification:
  status: "held"
  date: "2026-11-16"
  version: 1
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 59
  confirmed: 49
  unconfirmed: 4
  contradicted: 6
  attempts: 1
---

## What's changing

Power Pages sites can now change owner through a self-service step in the Power Platform admin center, instead of through a support request. The roadmap item (ID 577825) describes it as secure site ownership transfer for eligible sites, and says it is enabled automatically for admins, makers and marketers.

The Microsoft Learn page "Transfer ownership of a Power Pages site" documents the steps. An admin opens the site's **Site Details** page, selects **Edit**, replaces the person in the **Owner** field, selects **Save** and confirms with **Transfer**. The new owner becomes the primary owner of the site. Learn says the previous owner might lose access to the site, depending on the site's permissions and configuration, and that a transfer cannot be undone automatically: an authorised administrator has to transfer ownership back.

The roadmap item also describes an auditable history, notifications to the previous owner, the new owner and administrators, and a Power Advisor view of sites that no longer have a valid owner. Learn confirms the audit side: a **Transfer site ownership** activity (`OwnershipTransferred`) appears in the Microsoft Purview audit log. At the time of writing (November 2026), Learn documents neither the notifications nor a Power Advisor recommendation for ownerless sites; those remain the roadmap's description.

The record lists the status as Launched, with a target and preview date of September CY2026 and release phases General Availability and Preview. The cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. The Learn transfer page carries no preview label.

## Why it matters

Site ownership decides who is accountable for a site, and the roadmap item names team reassignments, role changes and employee departures as the cases it addresses. A self-service transfer lets an admin hand a site over without waiting for support, so the practical task is to decide who is allowed to do it and how each handover is recorded.

If nobody acts, nothing breaks: transfers only happen when an admin chooses to make one. The exposure is in doing it carelessly. An unreviewed transfer can hand a production site to someone without the right access, or remove the previous owner's access, and Learn gives no automatic undo.

## Risk assessment

**Data exposure**

- A transfer changes who is the primary owner of the site; it does not move site data. Learn requires the new owner to be an enabled Microsoft Entra user with a **Member** user type.
- Depending on the site's permissions and configuration, the previous owner might lose access to the site. Check what the departing owner could still reach before you transfer.

**Security & identity**

- The admin starting the transfer needs to be the website app owner and hold System administrator, Dynamics 365 administrator or Power Platform administrator. Learn says these roles must be assigned directly to the user, not inherited through security group membership or Privileged Identity Management.
- The roadmap says existing site owners and global administrators can transfer ownership. The Learn page lists the website app owner plus one of the three admin roles above and does not name the global administrator role for this task. Treat Learn as the working rule until Microsoft reconciles the two.

**Autonomy & actions**

- Nothing happens automatically: an admin performs each transfer. No automated or bulk transfer is documented at the time of writing.

**Change & support**

- A mistaken transfer cannot be undone automatically; an authorised administrator must transfer ownership back.
- The roadmap says notifications go to the previous owner, the new owner and administrators. Learn does not document them, so do not rely on them as your only handover record; the Purview audit entry is the documented trail.

## Cost and licensing

No licence, meter or charge for the transfer is documented. The Learn transfer page lists admin roles, access to the Power Platform admin center and an enabled Microsoft Entra Member user as its prerequisites and names no licence, so the licensing for this feature is Not yet published.

The cost that is known is admin time, plus Purview audit retention if you want to keep the transfer events: Learn requires auditing to be turned on for the Power Platform production environments you want to monitor, and the Audit Logs or View-Only Audit Logs role in Purview to read them. Power Pages sites themselves are licensed by capacity (authenticated and anonymous users per website per month), per the Power Platform licensing FAQs; a transfer does not change which site is licensed.

## Scope

**Who and where.** The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists no US Government cloud.

**Who can transfer.** Learn requires the website app owner and any one of System administrator, Dynamics 365 administrator or Power Platform administrator. For sites on the Power Platform managed identity model, web app ownership is not a prerequisite for starting a transfer. For other sites, a missing transfer option usually means you are not the web app owner.

**Who can receive.** An enabled Microsoft Entra user with a **Member** user type. The roadmap adds that the new owner needs appropriate access to the environment.

**Rollout.** The roadmap says it is enabled for admins, makers and marketers automatically. No tenant switch is documented.

## Governance guidance

### Before rollout

- Agree which named admins may transfer Power Pages sites, and confirm each holds System administrator, Dynamics 365 administrator or Power Platform administrator directly rather than via a security group.
- Check who owns the website app registration for sites you expect to transfer, because the transfer option is hidden from admins who are not the website app owner on sites outside the managed identity model.
- Turn on auditing for the production environments that host Power Pages sites and give your compliance team the Audit Logs or View-Only Audit Logs role in Microsoft Purview.

### At rollout

- Add a handover step to your leaver and role-change process: name the new owner, confirm they are an enabled Microsoft Entra Member user, then transfer in Power Platform admin center.
- Review what the previous owner can still do on the site before transferring, since access might be removed.

### After rollout

- Search the Microsoft Purview audit log for the `OwnershipTransferred` operation to review each transfer and its initiator.
- Check that the new owner can access and manage the site, as the Learn page advises.
- Use the Power Platform admin center inventory, filtered to sites and by owner, to find sites owned by people who have left. Inventory of Power Pages sites is documented as a preview at the time of writing.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Transferring a Power Pages site to a new owner</strong><br><small>Site</small><br><small class="controls__note">Needs the website app owner plus System administrator, Dynamics 365 administrator or Power Platform administrator. No API documented at the time of writing.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › site › Site Details › Edit › Owner <a href="https://learn.microsoft.com/power-pages/admin/transfer-ownership" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit trail of site ownership transfers</strong><br><small>Tenant</small><br><small class="controls__note">Auditing must be on for the production environment. Reading needs the Audit Logs or View-Only Audit Logs role.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>Office 365 Management API (Power Pages activity logs; operation OwnershipTransferred)</code> <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who is the website app owner for a site</strong><br><small>Site</small><br><small class="controls__note">Prerequisite for starting a transfer, not a control over the feature. The Graph page is a general application-owner example, not Power Pages specific.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Microsoft Entra ID › App registrations › Portals-&lt;website name ›  › Owners › Add owners <a href="https://learn.microsoft.com/power-pages/admin/admin-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/applications/{application-object-id}/owners/$ref</code> <a href="https://learn.microsoft.com/troubleshoot/entra/entra-id/users-groups-entra-apis/add-owner-for-application-microsoft-graph" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to disable site ownership transfer</strong><br><small>Tenant</small><br><small class="controls__note">No such switch is documented at the time of writing. Access is limited only by the required roles.</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The transfer is an admin-centre action; Microsoft Learn documents no PowerShell, Microsoft Graph or other API for transferring Power Pages site ownership at the time of writing (November 2026). Set-AdminPowerAppOwner exists but is documented for canvas apps, not sites, so do not use it for this.

The website app owner is a separate, Microsoft Entra-side requirement from the admin roles. Learn shows how to add one in the Azure portal, and Microsoft Graph can add an owner to an application registration. Neither is a control over the transfer feature itself.

There is no documented switch to disable the transfer, and no documented approval step. Learn describes access control only through the required roles.

## Open questions

- Does a Power Advisor recommendation for Power Pages sites without a valid owner exist, and where does it appear? The Sites recommendations on the Learn performance and operational efficiency pages list none at the time of writing. Watch the Power Platform admin center recommendations pages.
- Which notifications are sent on a transfer, to whom, and can they be turned off? Learn does not document them.
- Can global administrators transfer a site without being the website app owner, as the roadmap implies? The Learn page lists different prerequisites.
- Is there a PowerShell, Graph or Power Platform API call for transferring site ownership, for scripted leaver processes?
- What are the "eligible sites" the roadmap mentions, and is any licence or capacity condition attached?

<!-- rationale
risk: Low. The transfer stays inside existing data boundaries and needs the website app owner plus an admin role, but it cannot be undone automatically and the previous owner might lose access to the site.
cost: Low. The only cost the sources show is admin time. The Learn page lists roles and an enabled Microsoft Entra Member user as prerequisites and names no licence or meter for the transfer.
impact: Low. Admins, site owners and the people taking over a site notice it. Visitors to the site are not affected by the feature itself.
-->

<!-- verifier-findings (2026-11-16, held; checked by gpt-6.1-sol)
The independent check found these statements unsupported or contradicted. Fix every one in the next rewrite:
- [contradicted, blocker] controls[0].note; controls[2].note; Risk assessment: Security & identity; rationale: risk / role: Website app ownership is a prerequisite for every initiating administrator. | Found: Websites on Power Platform managed identity model don't need web app ownership as a prerequisite for initiating transfer. | Fix: Carry the managed-identity exception already stated in Scope into both control notes, the Security & identity bullet, Governance controls prose and the risk rationale: app ownership is required only for sites outside the Power Platform managed identity model. | Source: https://learn.microsoft.com/power-pages/admin/transfer-ownership
- [supported, minor] What's changing; Risk assessment: Data exposure / behaviour: The selected new owner becomes the primary owner of the site. | Found: When the transfer finishes, the selected user becomes the primary owner of the site. | Fix: Keep the feature-page statement but flag the conflicting Website owner paragraph at https://learn.microsoft.com/power-pages/admin/admin-roles, which says ownership remains with the creator and cannot be transferred or changed. The briefing already reports the roadmap/Learn role discrepancy but not this separate Learn/Learn discrepancy. | Source: https://learn.microsoft.com/power-pages/admin/transfer-ownership
- [unsupported, blocker] controls[1].api; Governance controls: audit API cell / command: Office 365 Management API (Power Pages activity logs; operation OwnershipTransferred) is the REST call for retrieving the transfer audit trail. | Found: Searched: Power Pages ownership transfer API. Opened activity-logs-power-pages and office-365-management-activity-api-reference. The cited page confirms API access but this cell supplies neither an HTTP method nor a versioned endpoint. | Fix: Replace the descriptive API name with a documented method and endpoint, for example GET https://manage.office.com/api/v1.0/{tenant_id}/activity/feed/subscriptions/content?contentType=Audit.General, and cite https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference. Explain that this lists available content for an active subscription; retrieve the returned contentUri and filter retrieved records for OwnershipTransferred.
- [contradicted, blocker] controls[2].ui; Governance controls: app-owner UI cell / admin-path: The Azure portal path is Microsoft Entra ID > App registrations > Portals-<website name> > Owners > Add owners. | Found: Under Manage, select App registrations. ... Select the website app ... This application is called Portals-<<website name>>. ... Under Manage, select Owners. ... Select Add owners. | Fix: Use Microsoft Entra ID > Manage > App registrations > website app > Manage > Owners > Add owners, followed by selecting a user and Select. Explain the documented Portals-<<website name>> naming separately. Repair the rendered cell's split placeholder and extra separator. The pre-check's missing placeholder is cosmetic; the omitted Manage sections are not. | Source: https://learn.microsoft.com/power-pages/admin/admin-roles
- [contradicted, blocker] controls[3].note; Governance controls: final paragraph / role: Access to transfer is limited only by the required roles. | Found: You are the website app owner and have any one of the following roles ... You have access to the Power Platform admin center. ... The new owner is an enabled Microsoft Entra user with a Member user type. | Fix: Replace 'Access is limited only by the required roles' and 'access control only through the required roles' with 'Transfers follow the documented role, app-ownership and recipient prerequisites; sites using Power Platform managed identity do not require app ownership.' | Source: https://learn.microsoft.com/power-pages/admin/transfer-ownership
- [unsupported, blocker] Cost and licensing: final clause / licensing: A transfer does not change which site is licensed. | Found: Searched: Power Pages transfer ownership licensing charge meter capacity; Power Pages transfer ownership licensing unchanged. Read transfer-ownership and Power Pages licensing FAQ excerpts. Neither states the licensing consequences of an ownership transfer. | Fix: Remove 'a transfer does not change which site is licensed'. Retain the sourced product-level capacity explanation and the statement that transfer-specific licensing is not yet published.
- [supported, minor] Cost and licensing: Purview audit retention / cost: Keeping the transfer audit events can involve Purview retention licensing costs. | Found: To retain audit logs for 10 years, the user who generates the audit log must also have a 10-year audit log retention add-on license in addition to an E5 license. | Fix: Clarify that extended retention can require additional licensing, rather than implying all retention costs extra, and cite https://learn.microsoft.com/purview/audit-log-retention-policies and https://learn.microsoft.com/purview/audit-solutions-overview. The latter documents default retention without buying a long-term retention add-on. | Source: https://learn.microsoft.com/purview/audit-log-retention-policies#before-you-create-an-audit-log-retention-policy
- [supported, minor] Governance controls: Set-AdminPowerAppOwner paragraph / command: Set-AdminPowerAppOwner exists and is documented for canvas app ownership, not Power Pages site transfer. | Found: Set logged in user as the owner of a canvas app ... Set-AdminPowerAppOwner -AppName 'AppName' -AppOwner $Global:currentSession.userId -EnvironmentName 'EnvironmentName' | Fix: Add https://learn.microsoft.com/power-platform/admin/powerapps-powershell#power-apps-commands to sources for the canvas-app distinction. | Source: https://learn.microsoft.com/power-platform/admin/powerapps-powershell#power-apps-commands
- [supported, minor] Governance guidance: After rollout, inventory preview qualification / availability: Power Pages inventory is documented as preview. | Found: This feature is in preview. ... This feature is being rolled out gradually across regions and might not be available yet in your region. | Fix: Keep the preview qualification and add that regional rollout is gradual and the view might not yet be available in the reader's region. | Source: https://learn.microsoft.com/power-pages/admin/power-pages-inventory
- [unsupported, major] Risk assessment: Data exposure; rationale: risk / behaviour: An ownership transfer does not move site data and stays inside existing data boundaries. | Found: Searched: Power Pages transfer ownership data visitors. Read learn.microsoft.com/power-pages/admin/transfer-ownership; inspected migration and security search results. The feature page describes ownership and access effects, not a guarantee about data movement or boundaries. | Fix: Remove 'it does not move site data' and the unsourced data-boundary assertion from the rationale. Explain the low-risk judgement using the documented deliberate admin action and required permissions instead.
- [unsupported, minor] rationale: impact / behaviour: Visitors to the site are not affected by the transfer feature. | Found: Searched: Power Pages transfer ownership data visitors. Read learn.microsoft.com/power-pages/admin/transfer-ownership and its permissions caveat. No passage guarantees that visitors are unaffected. | Fix: Remove the assurance that visitors are unaffected. Keep low impact as the wiki's judgement that the documented workflow is aimed at administrators and the owners involved.
- [contradicted, minor] Governance guidance: After rollout; Governance controls / consistency: The controls table includes the inventory control that the governance checklist tells administrators to use. | Found: Use the Power Platform admin center inventory, filtered to sites and by owner ... [The table has transfer, audit search, app ownership and tenant-disable rows, but no inventory row.] | Fix: Add an inventory row with scope tenant, the preview and gradual-rollout qualifications, and UI Power Platform admin center > Manage > Inventory > Item type: sites; filter by owner. Cite https://learn.microsoft.com/power-pages/admin/power-pages-inventory.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The controls table includes the auditing-enablement control that the governance checklist tells administrators to configure. | Found: Turn on auditing for the production environments that host Power Pages sites ... [The audit row instead leads to Purview Solutions > Audit for reading logs.] | Fix: Add a separate environment-scoped auditing-enablement row. Cite https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview and give its documented Manage > Environments > production environment > Settings > Product > Privacy and Security > Storage Shared Access Signature (SAS) Security Settings > Enable SAS Logging in Purview path, with the auditing and licensing prerequisites.
- [contradicted, minor] Governance controls: final paragraph and table / consistency: The controls table records the approval-control gap stated in the prose. | Found: There is ... no documented approval step. [The table has a tenant-disable gap, but no approval-control gap.] | Fix: Add a separate approval-workflow control row with both UI and API null and a note that Microsoft documents no separate approval workflow as of November 2026.
-->
