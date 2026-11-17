---
title: "Power Pages: self-service site ownership transfer in the admin centre"
slug: "power-pages-administration-and-governance-enable-self-service-site-ownership-transfer"
roadmapId: 577825
topic: "power-platform"
products: ["Power Pages"]
summary: "Launched: an authorised admin can move a Power Pages site to another owner in the Power Platform admin center without a support request. Transfers appear in Purview audit. Nothing to configure, but plan who may do it."
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
  notes: "Not yet published for this feature. The transfer page lists admin roles and a Microsoft Entra Member user as prerequisites and names no licence. Power Pages sites themselves are licensed by capacity."
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
  - title: "Power Platform activity logs and auditing in Microsoft Purview"
    url: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview"
    kind: "learn"
  - title: "Tutorial: Create, update, and list Environment Management Settings"
    url: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-environmentmanagement-settings"
    kind: "learn"
  - title: "Office 365 Management Activity API reference"
    url: "https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference"
    kind: "learn"
  - title: "Power Pages sites in Power Platform inventory overview (preview)"
    url: "https://learn.microsoft.com/power-pages/admin/power-pages-inventory"
    kind: "learn"
  - title: "Add an owner to an application using Microsoft Graph"
    url: "https://learn.microsoft.com/troubleshoot/entra/entra-id/users-groups-entra-apis/add-owner-for-application-microsoft-graph"
    kind: "learn"
  - title: "Add owner"
    url: "https://learn.microsoft.com/graph/api/application-post-owners?view=graph-rest-1.0"
    kind: "learn"
  - title: "Power Platform licensing FAQs"
    url: "https://learn.microsoft.com/power-platform/admin/powerapps-flow-licensing-faq"
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
    note: "Needs a System administrator, Dynamics 365 administrator or Power Platform administrator role, plus website app owner unless the site uses the managed identity model. No API found."
  - governs: "Audit trail of site ownership transfers"
    scope: "tenant"
    ui:
      surface: "Microsoft Purview portal"
      path: "Solutions > Audit"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages"
    api:
      kind: "rest"
      call: "GET {root}/subscriptions/content?contentType={ContentType}&startTime={0}&endTime={1}"
      docs: "https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference"
    note: "Reading needs the Audit Logs or View-Only Audit Logs role. API lists content for an active subscription; Learn does not state which content type holds Power Pages events."
  - governs: "Whether Power Platform activity is sent to Purview for an environment"
    scope: "environment"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Environments > environment > Settings > Product > Privacy and Security > Storage Shared Access Signature (SAS) Security Settings > Enable SAS Logging in Purview"
      docs: "https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview"
    api:
      kind: "power-platform-api"
      call: "PATCH https://api.powerplatform.com/environmentmanagement/environments/{environmentId}/settings/?api-version=2022-03-01-preview with body {\"LoggingEnabledForIpBasedStorageAccessSignature\": true}"
      docs: "https://learn.microsoft.com/power-platform/admin/programmability-tutorial-environmentmanagement-settings"
    note: "Production environments only; steps say sign in as a system admin. Allow-list https://*.api.powerplatformusercontent.com first or most SAS functionality fails. API tutorial is preview."
  - governs: "Who is the website app owner for a site"
    scope: "site"
    ui:
      surface: "Azure portal"
      path: "Microsoft Entra ID > Manage > App registrations > website app > Manage > Owners > Add owners"
      docs: "https://learn.microsoft.com/power-pages/admin/admin-roles"
    api:
      kind: "graph"
      call: "POST https://graph.microsoft.com/v1.0/applications/{id}/owners/$ref with body {\"@odata.id\":\"https://graph.microsoft.com/v1.0/directoryObjects/{new-owner-user-object-id}\"}"
      docs: "https://learn.microsoft.com/graph/api/application-post-owners?view=graph-rest-1.0"
    note: "Prerequisite, not a control over the feature. The website app is named Portals-<website name>. The Graph page is a general application-owner example, not Power Pages specific."
  - governs: "Finding Power Pages sites and their owners"
    scope: "tenant"
    ui:
      surface: "Power Platform admin center"
      path: "Manage > Inventory > Item type, filtered to sites"
      docs: "https://learn.microsoft.com/power-pages/admin/power-pages-inventory"
    api:
      kind: "other"
      call: "Azure Resource Graph (KQL): PowerPlatformResources | where type =~ \"microsoft.powerpages/sites\""
      docs: "https://learn.microsoft.com/power-pages/admin/power-pages-inventory"
    note: "Preview, rolling out gradually. Needs Global administrator, Power Platform administrator or Dynamics 365 administrator. Shows owner IDs, not a list of ownerless sites."
  - governs: "Tenant-wide switch to disable site ownership transfer"
    scope: "tenant"
    ui: null
    api: null
    note: "No such switch found at the time of writing (November 2026)."
  - governs: "Approval workflow for a site ownership transfer"
    scope: "site"
    ui: null
    api: null
    note: "Learn documents no separate approval step at the time of writing (November 2026)."
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
version: 4
verification:
  status: "held"
  date: "2026-11-17"
  version: 4
  model: "gpt-6.1-sol"
  engine: "copilot"
  claims: 69
  confirmed: 67
  unconfirmed: 0
  contradicted: 2
  attempts: 4
  hash: "09aa8e068c7195553936a8cdabeb9078"
---

## What's changing

Power Pages sites can change owner through a self-service step in the Power Platform admin center instead of a support request. The roadmap item (ID 577825) describes secure ownership transfer for eligible sites and says it is enabled automatically for admins, makers and marketers.

The Learn page "Transfer ownership of a Power Pages site" documents the steps. An admin opens the site's **Site Details** page, selects **Edit**, removes the current person in the **Owner** field, selects the new owner, selects **Save** and confirms with **Transfer**. Learn says the new owner becomes the primary owner of the site, the previous owner might lose access depending on the site's permissions and configuration, and a transfer cannot be undone automatically: an authorised administrator must transfer ownership back.

The roadmap item also describes an auditable history, notifications to the previous owner, the new owner and administrators, and a Power Advisor view of sites with no valid owner. Learn confirms the audit side: a **Transfer site ownership** activity (`OwnershipTransferred`) is listed for Microsoft Purview. At the time of writing (November 2026), Learn documents neither the notifications nor a Power Advisor recommendation for ownerless sites, so those remain the roadmap's description.

The record lists the status as Launched, with a target and preview date of September CY2026 and release phases General Availability and Preview. The cloud is Worldwide (Standard Multi-Tenant) and the platform is Web. The Learn transfer page carries no preview label.

## Why it matters

Site ownership decides who is accountable for a Power Pages site, and the roadmap item names team reassignments, role changes and employee departures as the cases it addresses. A self-service transfer lets an admin hand a site over without waiting for support, so the practical task is to decide who may do it and how each handover is recorded.

If nobody acts, nothing changes: a transfer only happens when an admin makes one. The exposure is in doing it carelessly. A transfer to the wrong person, or one that removes the previous owner's access, has no automatic undo, so build the check into your leaver and role-change process.

## Risk assessment

**Data exposure**

- Learn describes a transfer as changing who is the primary owner of the site and says the previous owner might lose access, depending on the site's permissions and configuration. Check what the departing owner relies on before you transfer.
- Learn requires the new owner to be an enabled Microsoft Entra user with a **Member** user type, which excludes guest accounts from receiving a site.

**Security & identity**

- The initiating admin needs the website app owner role and any one of System administrator, Dynamics 365 administrator or Power Platform administrator, except that sites on the Power Platform managed identity model do not need web app ownership to start a transfer. Learn says admin roles must be assigned directly to the user, not inherited through security group membership or Privileged Identity Management.
- The roadmap says existing site owners and global administrators can transfer ownership. The Learn page lists the website app owner plus one of the three roles above and does not name global administrator for this task. Plan on the Learn rule until Microsoft reconciles the two.

**Autonomy & actions**

- Each transfer is an admin action in the Power Platform admin center. No automated or bulk transfer is documented at the time of writing.

**Change & support**

- A mistaken transfer needs a second transfer to reverse it, by an authorised administrator.
- The roadmap says notifications go to the previous owner, the new owner and administrators. Learn does not document them, so treat the Purview audit entry as the documented handover record.

## Cost and licensing

No licence, meter or charge for the transfer is documented. The Learn transfer page lists admin roles, access to the Power Platform admin center and an enabled Microsoft Entra Member user as its prerequisites and names no licence, so licensing for this feature is Not yet published.

The known cost is admin time. To see transfers in Microsoft Purview, Learn requires auditing to be turned on for the Power Platform production environments you want to monitor, and says the option to turn on audit logging is only visible when the minimum Office licensing requirements are met. Reading the events needs the Audit Logs or View-Only Audit Logs role in Microsoft Purview.

Power Pages sites themselves are licensed by capacity (authenticated users and anonymous users per website per month), per the Power Platform licensing FAQs. Those FAQs say nothing about ownership transfers.

## Scope

**Who and where.** The roadmap lists Worldwide (Standard Multi-Tenant) and the Web platform. It lists no US Government cloud.

**Who can transfer.** Learn requires the website app owner and any one of System administrator, Dynamics 365 administrator or Power Platform administrator. Websites on the Power Platform managed identity model do not need web app ownership to start a transfer; for other sites, a missing transfer option suggests you are not the web app owner.

**Who can receive.** An enabled Microsoft Entra user with a **Member** user type. The roadmap adds that the new owner needs appropriate access to the environment.

**Rollout.** The roadmap says it is enabled for admins, makers and marketers automatically. No tenant switch is documented.

## Governance guidance

### Before rollout

- Agree which named admins may transfer Power Pages sites, and confirm each holds System administrator, Dynamics 365 administrator or Power Platform administrator directly rather than through a security group.
- Check who owns the website app registration for sites outside the managed identity model, because the transfer option is missing for admins who are not the web app owner.
- Add `https://*.api.powerplatformusercontent.com` to your domain allow list, then turn on auditing and **Enable SAS Logging in Purview** for the production environments that host Power Pages sites. Learn warns that most SAS functionality does not work without the allow-list entry.
- Give your compliance team the Audit Logs or View-Only Audit Logs role in Microsoft Purview.

### At rollout

- Add a handover step to your leaver and role-change process: name the new owner, confirm they are an enabled Microsoft Entra Member user, then transfer in the Power Platform admin center.
- Review what the previous owner can still do on the site before transferring, since their access might be removed.

### After rollout

- Search the Microsoft Purview audit log for the `OwnershipTransferred` operation to review each transfer.
- Confirm the new owner can access and manage the site, as the Learn page advises.
- Filter the Power Platform admin center inventory to sites and by owner to find sites owned by people who have left. Inventory of Power Pages sites is a preview that is rolling out gradually, so it might not be available in your region yet.

## Governance controls

<p class="controls__lead">Where each control lives. The left column says what the setting decides and how far it reaches; the middle gives the admin centre and the exact path; the right gives the script, API or command that does the same. <em>Not yet documented</em> means Microsoft has not published a control for that surface, so there is nothing to configure yet.</p>

<table class="controls">
<thead><tr><th>Control</th><th>Admin UI</th><th>API and automation</th></tr></thead>
<tbody>
<tr><td data-label="Control"><strong>Transferring a Power Pages site to a new owner</strong><br><small>Site</small><br><small class="controls__note">Needs a System administrator, Dynamics 365 administrator or Power Platform administrator role, plus website app owner unless the site uses the managed identity model. No API found.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Power Pages › site › Site Details › Edit › Owner <a href="https://learn.microsoft.com/power-pages/admin/transfer-ownership" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Audit trail of site ownership transfers</strong><br><small>Tenant</small><br><small class="controls__note">Reading needs the Audit Logs or View-Only Audit Logs role. API lists content for an active subscription; Learn does not state which content type holds Power Pages events.</small></td><td data-label="Admin UI"><strong>Microsoft Purview portal</strong><br>Solutions › Audit <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-power-pages" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>REST API</strong><br><code>GET {root}/subscriptions/content?contentType={ContentType}&amp;startTime={0}&amp;endTime={1}</code> <a href="https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Whether Power Platform activity is sent to Purview for an environment</strong><br><small>Environment</small><br><small class="controls__note">Production environments only; steps say sign in as a system admin. Allow-list https://*.api.powerplatformusercontent.com first or most SAS functionality fails. API tutorial is preview.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Environments › environment › Settings › Product › Privacy and Security › Storage Shared Access Signature (SAS) Security Settings › Enable SAS Logging in Purview <a href="https://learn.microsoft.com/power-platform/admin/activity-logging-auditing/activity-logs-overview" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Power Platform API</strong><br><code>PATCH https://api.powerplatform.com/environmentmanagement/environments/{environmentId}/settings/?api-version=2022-03-01-preview with body {&quot;LoggingEnabledForIpBasedStorageAccessSignature&quot;: true}</code> <a href="https://learn.microsoft.com/power-platform/admin/programmability-tutorial-environmentmanagement-settings" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Who is the website app owner for a site</strong><br><small>Site</small><br><small class="controls__note">Prerequisite, not a control over the feature. The website app is named Portals-&lt;website name&gt;. The Graph page is a general application-owner example, not Power Pages specific.</small></td><td data-label="Admin UI"><strong>Azure portal</strong><br>Microsoft Entra ID › Manage › App registrations › website app › Manage › Owners › Add owners <a href="https://learn.microsoft.com/power-pages/admin/admin-roles" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>Microsoft Graph</strong><br><code>POST https://graph.microsoft.com/v1.0/applications/{id}/owners/$ref with body {&quot;@odata.id&quot;:&quot;https://graph.microsoft.com/v1.0/directoryObjects/{new-owner-user-object-id}&quot;}</code> <a href="https://learn.microsoft.com/graph/api/application-post-owners?view=graph-rest-1.0" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Finding Power Pages sites and their owners</strong><br><small>Tenant</small><br><small class="controls__note">Preview, rolling out gradually. Needs Global administrator, Power Platform administrator or Dynamics 365 administrator. Shows owner IDs, not a list of ownerless sites.</small></td><td data-label="Admin UI"><strong>Power Platform admin center</strong><br>Manage › Inventory › Item type, filtered to sites <a href="https://learn.microsoft.com/power-pages/admin/power-pages-inventory" rel="noopener" class="controls__docs">Learn</a></td><td data-label="API and automation"><strong>API</strong><br><code>Azure Resource Graph (KQL): PowerPlatformResources | where type =~ &quot;microsoft.powerpages/sites&quot;</code> <a href="https://learn.microsoft.com/power-pages/admin/power-pages-inventory" rel="noopener" class="controls__docs">Learn</a></td></tr>
<tr><td data-label="Control"><strong>Tenant-wide switch to disable site ownership transfer</strong><br><small>Tenant</small><br><small class="controls__note">No such switch found at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
<tr><td data-label="Control"><strong>Approval workflow for a site ownership transfer</strong><br><small>Site</small><br><small class="controls__note">Learn documents no separate approval step at the time of writing (November 2026).</small></td><td data-label="Admin UI"><em class="controls__gap">Not yet documented</em></td><td data-label="API and automation"><em class="controls__gap">Not yet documented</em></td></tr>
</tbody>
</table>

The transfer is an admin-centre action. At the time of writing (November 2026), searches of Microsoft Learn found no PowerShell, Microsoft Graph or other API for transferring Power Pages site ownership, no tenant switch to disable the transfer and no documented approval step. Access follows the documented role, app-ownership and recipient prerequisites.

The website app owner is a separate Microsoft Entra-side requirement from the admin roles; the row for it is a prerequisite, not a control over the feature. The audit API row lists available content only: retrieve each returned content URI and filter for `OwnershipTransferred`.

The inventory row reads site owners but does not by itself identify sites with no valid owner; the Power Advisor view the roadmap describes is not documented. The SAS logging row is an existing environment setting that Purview auditing depends on, not a setting for this feature.

## Open questions

- Does a Power Advisor recommendation for Power Pages sites with no valid owner exist, and where does it appear? Learn does not document it at the time of writing. Watch the Power Platform admin center recommendations pages.
- Which notifications are sent on a transfer, to whom, and can they be turned off? Learn does not document them.
- Can global administrators transfer a site without being the website app owner, as the roadmap implies? The Learn page lists different prerequisites.
- How does the transfer relate to the Learn statement that the website owner is the creator and ownership "can't be transferred or changed"? The two Learn pages appear to conflict and do not explain how the transfer relates to creator ownership.
- What are the "eligible sites" the roadmap mentions, and is any licence or capacity condition attached?

<!-- rationale
risk: Low. A transfer is a deliberate admin action that needs specific roles, but Learn says it cannot be undone automatically and the previous owner might lose access, so the exposure is a mistaken handover.
cost: Low. The only cost the sources show is admin time. The Learn page lists roles and a Microsoft Entra Member user as prerequisites and names no licence or meter for the transfer; licensing is not yet published.
impact: Low. The documented workflow is run by administrators and affects the previous and new owners of a site. No tenant-wide user change is described.
-->

<!-- verifier-findings (2026-11-17, held; checked by gpt-6.1-sol)
The independent check found fault only with the statements below. This is a correction: change what they name and carry the rest of the page over unchanged.
Correct each of these with the smallest change that removes the fault: delete the statement, narrow it, or put the finding's own "Found" text or worded replacement in its place. Where a fix asks for more than that (a new row, an explanation, further references), do only the part that removes the fault. A correction adds no control rows.
- [contradicted, blocker] controls[1].note; Governance controls table: Audit trail of site ownership transfers / absence: Learn does not state which content type holds Power Pages events. | Found: - Audit.AzureActiveDirectory - Audit.Exchange - Audit.SharePoint - Audit.General (includes all other workloads not included in the previous content types) | Fix: Replace 'Learn does not state which content type holds Power Pages events' in controls[1].note and the rendered table with 'Audit.General covers workloads other than Microsoft Entra, Exchange and SharePoint'. The cited API reference states this catch-all scope; Power Pages is outside those three workloads. Keep the existing content-listing call and its placeholders. | Source: https://learn.microsoft.com/office/office-365-management-api/office-365-management-activity-api-reference
These are minor and do not hold the page. Where removing the statement, or rewording it in the words the fix gives, settles one, do that; otherwise leave it as it is. A minor finding may also add a source link it names for a statement already on the page. It adds no row and nothing that needs research.
- [contradicted, minor] Governance guidance: Before rollout; Governance controls / consistency: The checklist names baseline auditing and domain allow-list configuration without corresponding controls-table rows. | Found: Add `https://*.api.powerplatformusercontent.com` to your domain allow list, then turn on auditing and **Enable SAS Logging in Purview** | Fix: Remove the domain allow-list and baseline-auditing setup instructions from the checklist, leaving 'Turn on Enable SAS Logging in Purview for the production environments that host Power Pages sites.' Keep the verified prerequisite warning in controls[2].note; its row documents only SAS logging, not the other two configuration steps.
-->
